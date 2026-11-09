// v200: gửi thông báo nhắc học. Chạy mỗi giờ bằng GitHub Actions (.github/workflows/nhac-hoc.yml).
// Cần 2 secret của repo: FIREBASE_SERVICE_ACCOUNT (JSON khoá tài khoản dịch vụ Firebase) và VAPID_PRIVATE_KEY.
import webpush from 'web-push';
import admin from 'firebase-admin';

const VAPID_PUBLIC = 'BFpnIH_sXttAfrTbiSwoFxEhri6tg9dVwLSVEZKAxi1hm7QC_NaaWRxS8UQZ6GyXL55NvCWy4cs4wyson42xxnU';
const { FIREBASE_SERVICE_ACCOUNT: SA, VAPID_PRIVATE_KEY: PRIV } = process.env;
if (!SA || !PRIV) { console.log('Chưa có secret FIREBASE_SERVICE_ACCOUNT hoặc VAPID_PRIVATE_KEY — bỏ qua.'); process.exit(0); }

admin.initializeApp({ credential: admin.credential.cert(JSON.parse(SA)) });
webpush.setVapidDetails('mailto:noreply@zerotoheroenglish.github.io', VAPID_PUBLIC, PRIV);
const db = admin.firestore();

const local = tz => {
  const f = new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hourCycle: 'h23' });
  const p = Object.fromEntries(f.formatToParts(new Date()).map(x => [x.type, x.value]));
  return { day: `${p.year}-${p.month}-${p.day}`, hour: +p.hour };
};
const prevDay = d => { const t = new Date(d + 'T12:00:00Z'); t.setUTCDate(t.getUTCDate() - 1); return t.toISOString().slice(0, 10); };

const BODY = [
  n => `Bạn đang có chuỗi ${n} ngày học liên tiếp — học 5 phút để giữ chuỗi nhé! 🔥`,
  () => 'Hôm nay bạn chưa học bài nào. Mở app ôn vài thẻ từ vựng thôi cũng được! 📚',
];

const snap = await db.collection('reminders').where('on', '==', true).get();
let sent = 0, gone = 0;
for (const doc of snap.docs) {
  const r = doc.data();
  if (!r.sub || !r.sub.endpoint) continue;
  let now; try { now = local(r.tz || 'Asia/Ho_Chi_Minh'); } catch (e) { now = local('Asia/Ho_Chi_Minh'); }
  const hour = Number.isFinite(r.hour) ? r.hour : 20;
  // đến giờ (hoặc muộn hơn, nếu GitHub chạy trễ) · hôm nay chưa học · hôm nay chưa nhắc
  if (now.hour < hour || r.last === now.day || r.sentDay === now.day) continue;
  const n = r.last === prevDay(now.day) ? (r.streak || 0) : 0;
  const payload = JSON.stringify({ title: 'Học Tiếng Anh', body: n > 0 ? BODY[0](n) : BODY[1](), url: './' });
  try {
    await webpush.sendNotification(r.sub, payload, { TTL: 6 * 3600, urgency: 'normal' });
    await doc.ref.set({ sentDay: now.day }, { merge: true });
    sent++;
  } catch (e) {
    if (e.statusCode === 404 || e.statusCode === 410) { await doc.ref.set({ on: false, sub: null }, { merge: true }); gone++; }
    else console.log('Lỗi gửi', doc.id.slice(0, 6), e.statusCode || e.message);
  }
}
console.log(`Đã xét ${snap.size} người · gửi ${sent} · bỏ ${gone} đăng ký hết hạn`);
