/* ============================================================
   EXERCISES — translation drills written for this app
   Each lesson id matches a lesson in TENSES or GR_LESSONS, so every
   sentence only uses the grammar that lesson teaches.
   Item: [English, Vietnamese, (optional) other accepted English answers]
============================================================ */
/* EX_DATA: xem file dữ liệu */

/* Thêm 6 câu nữa cho mỗi bài (tổng 12 câu/bài) */
/* EX_MORE: xem file dữ liệu */
Object.keys(EX_MORE).forEach(k => { if (EX_DATA[k]) EX_DATA[k] = EX_DATA[k].concat(EX_MORE[k]); });

/* ---------- Câu hỏi Wh-: công thức riêng cho từng bài ---------- */
/* EX_WH_FX: xem file dữ liệu */

/* ---------- 3 câu hỏi Wh- cho mỗi bài ---------- */
/* EX_WH: xem file dữ liệu */

/* ---------- Câu hỏi How-: công thức riêng cho từng bài ---------- */
/* EX_HOW_FX: xem file dữ liệu */

/* ---------- 2 câu hỏi How- cho mỗi bài ---------- */
/* EX_HOW: xem file dữ liệu */
/* ---------- Bài tập dịch cho các bài A2 mới ---------- */
/* EX_A2: xem file dữ liệu */
Object.keys(EX_A2).forEach(k => {
  const v = EX_A2[k];
  EX_DATA[k] = v.s.slice();
  EX_WH[k] = v.wh; EX_HOW[k] = v.how;
  EX_WH_FX[k] = v.whfx; EX_HOW_FX[k] = v.howfx;
});
/* ---------- Bài tập dịch cho các bài A1 và B1 mới ---------- */
/* EX_A1B1: xem file dữ liệu */

/* ---------- Bài tập dịch cho các bài B2 và C1 mới ---------- */
/* EX_B2C1: xem file dữ liệu */

[EX_A1B1, EX_B2C1].forEach(SRC => Object.keys(SRC).forEach(k => {
  const v = SRC[k];
  EX_DATA[k] = v.s.slice();
  EX_WH[k] = v.wh; EX_HOW[k] = v.how;
  EX_WH_FX[k] = v.whfx; EX_HOW_FX[k] = v.howfx;
}));

/* ---------- Câu bổ sung: mỗi bài đủ 20 câu, cùng ngữ pháp của bài ---------- */
/* EX_ADD: xem file dữ liệu */
Object.keys(EX_ADD).forEach(k => { if (EX_DATA[k]) EX_DATA[k] = EX_DATA[k].concat(EX_ADD[k]); });
/* v110: bài “Cách đặt câu hỏi” */
EX_DATA['questions'] = [["Are you tired?", "Bạn có mệt không?", []], ["Is she a teacher?", "Cô ấy là giáo viên phải không?", []], ["Where are you from?", "Bạn đến từ đâu?", ["Where do you come from?"]], ["What is his name?", "Tên của anh ấy là gì?", []], ["What do you usually do in the morning?", "Bạn thường làm gì vào buổi sáng?", []], ["Do you like coffee?", "Bạn có thích cà phê không?", []], ["Where does he live?", "Anh ấy sống ở đâu?", []], ["How does she go to work?", "Cô ấy đi làm bằng gì?", ["How does she get to work?"]], ["What does your father do?", "Bố bạn làm nghề gì?", ["What is your father's job?", "What does your dad do?"]], ["What did you do yesterday?", "Hôm qua bạn đã làm gì?", []], ["Did you watch the match last night?", "Bạn có xem trận đấu tối qua không?", ["Did you watch the game last night?", "Did you see the match last night?"]], ["When did you go to Da Nang?", "Bạn đã đến Đà Nẵng khi nào?", ["When did you come to Da Nang?", "When did you arrive in Da Nang?"]], ["Where did she buy that dress?", "Cô ấy mua chiếc váy đó ở đâu?", []], ["Can you speak English?", "Bạn có nói được tiếng Anh không?", []], ["Could you help me?", "Bạn có thể giúp tôi được không?", ["Can you help me?", "Would you help me?"]], ["What should I do?", "Tôi nên làm gì?", []], ["How old are you?", "Bạn bao nhiêu tuổi?", []], ["How tall are you?", "Bạn cao bao nhiêu?", []], ["Who called you?", "Ai đã gọi cho bạn?", []], ["What happened?", "Chuyện gì đã xảy ra?", []]];


/* ============================================================
   CHẤM THÔNG MINH (v107) — dùng chung cho tab Bài tập và Luyện dịch
   Không chỉ so với đáp án mẫu mà tách thành 4 tiêu chí:
     1. Ngữ pháp  2. Tự nhiên  3. Đủ ý so với yêu cầu  4. Giống đáp án mẫu
   Ngữ pháp/tự nhiên: luật riêng cho lỗi người Việt hay mắc (chạy offline)
   + LanguageTool miễn phí (khi có mạng). Đủ ý: so từ khóa nội dung với các đáp án.
============================================================ */
const SC_STOP = new Set(('a an the to of in on at for with from by and or but so because is am are was were be been being do does did have has had ' +
  'will would can could shall should may might must not no yes i you he she it we they me him her us them my your his its our their mine yours ours theirs ' +
  'this that these those there here very really just also too please oh well then than as if when what who whom whose where why how which ' +
  'all some any much many more most about into up out over off s t d ll ve re m let us get got going go').split(' '));
const SC_SYN = [['big', 'large', 'huge'], ['small', 'little', 'tiny'], ['buy', 'purchase'], ['start', 'begin'], ['finish', 'end', 'complete'],
  ['happy', 'glad', 'pleased'], ['child', 'kid', 'children', 'kids'], ['movie', 'film', 'cinema'], ['shop', 'store'], ['sick', 'ill', 'unwell'],
  ['quick', 'fast'], ['quickly', 'fast'], ['near', 'close', 'nearby'], ['want', 'like', 'wish'], ['speak', 'talk', 'say', 'tell'], ['look', 'see', 'watch'],
  ['job', 'work'], ['photo', 'picture'], ['trip', 'journey', 'travel'], ['home', 'house'], ['street', 'road'], ['mom', 'mother', 'mum'], ['dad', 'father'],
  ['delicious', 'tasty'], ['difficult', 'hard'], ['easy', 'simple'], ['beautiful', 'pretty', 'lovely'], ['angry', 'mad'], ['afraid', 'scared'],
  ['often', 'usually', 'regularly'], ['test', 'exam'], ['teacher', 'tutor'], ['phone', 'call'], ['money', 'cash'], ['meal', 'food', 'dish'],
  ['allow', 'let'], ['help', 'assist'], ['receive', 'get'], ['return', 'come'], ['arrive', 'reach', 'come'], ['choose', 'pick', 'select'],
  ['important', 'essential', 'vital'], ['problem', 'issue', 'trouble'], ['enough', 'sufficient'], ['maybe', 'perhaps'], ['also', 'too']];
const SC_SYNMAP = {};
SC_SYN.forEach((g, i) => g.forEach(w => { (SC_SYNMAP[w] = SC_SYNMAP[w] || []).push(i); }));
let SC_IRR = null;
function scIrr() {
  if (SC_IRR) return SC_IRR;
  SC_IRR = {};
  try { IRREGULAR_VERBS.forEach(v => [v.v2, v.v3].forEach(f => String(f).split('/').forEach(x => { x = x.trim().toLowerCase(); if (x && x !== v.v1) SC_IRR[x] = v.v1; }))); } catch (e) {}
  return SC_IRR;
}
function scLemma(w) {
  w = w.toLowerCase();
  const irr = scIrr();
  if (irr[w]) return irr[w];
  if (/ies$/.test(w) && w.length > 4) return w.slice(0, -3) + 'y';
  if (/ied$/.test(w) && w.length > 4) return w.slice(0, -3) + 'y';
  if (/(ss|us|is)$/.test(w)) return w;
  if (/(ches|shes|xes|sses|oes)$/.test(w)) return w.slice(0, -2);
  if (/s$/.test(w) && w.length > 3) return w.slice(0, -1);
  if (/ing$/.test(w) && w.length > 5) { const b = w.slice(0, -3); return /(.)\1$/.test(b) && !/(ll|ss)$/.test(b) ? b.slice(0, -1) : b; }
  if (/ed$/.test(w) && w.length > 4) { const b = w.slice(0, -2); return /(.)\1$/.test(b) && !/(ll|ss)$/.test(b) ? b.slice(0, -1) : b; }
  return w;
}
function scSameWord(a, b) {
  if (a === b) return true;
  const n = Math.min(a.length, b.length);
  if (n >= 4 && (a.startsWith(b) || b.startsWith(a)) && Math.abs(a.length - b.length) <= 2) return true;
  const sa = SC_SYNMAP[a], sb = SC_SYNMAP[b];
  return !!(sa && sb && sa.some(x => sb.includes(x)));
}
function scWords(t) {
  return lsNorm(' ' + String(t).replace(/n't\b/gi, ' not').replace(/'(s|re|ve|ll|d|m)\b/gi, ' ') + ' ');
}
const scContent = t => scWords(t).filter(w => !SC_STOP.has(w)).map(w => ({ w, l: scLemma(w) }));
// Đủ ý: những từ nội dung của đáp án mẫu (chọn đáp án gần nhất) mà câu bạn viết chưa có
function scCoverage(user, models) {
  const u = scContent(user).map(x => x.l);
  let best = null;
  models.forEach((m, k) => {
    const c = scContent(m), seen = new Set(), need = [];
    c.forEach(x => { if (!seen.has(x.l)) { seen.add(x.l); need.push(x); } });
    if (!need.length) return;
    const miss = need.filter(x => !u.some(y => scSameWord(x.l, y)));
    const cov = 1 - miss.length / need.length;
    if (!best || cov > best.cov) best = { cov, miss: miss.map(x => x.w), k, n: need.length };
  });
  return best || { cov: 1, miss: [], k: 0, n: 0 };
}
function scSimilar(user, models) {
  const u = scWords(user);
  let best = { pct: 0, k: 0 };
  models.forEach((m, k) => {
    const a = scWords(m), r = lsMatch(a, u);
    const pct = Math.round(a.length + u.length ? 200 * r.ta.size / (a.length + u.length) : 0);
    if (pct > best.pct) best = { pct, k };
  });
  return best;
}

/* ---------- luật riêng: lỗi người Việt hay mắc (g = sai ngữ pháp, u = chưa tự nhiên) ---------- */
const SC_V3S = (() => {
  const base = 'go have do like want need live work play watch study eat drink get make take come say know think love hate teach speak read write use cook walk run sleep leave buy try finish start visit help call stay move open close wash clean listen talk travel arrive wait carry'.split(' ');
  const s = new Set(['has', 'does', 'goes']);
  base.forEach(v => s.add(/(s|sh|ch|x|o)$/.test(v) ? v + 'es' : /[^aeiou]y$/.test(v) ? v.slice(0, -1) + 'ies' : v + 's'));
  return s;
})();
const SC_PASTV = (() => {
  const s = new Set('worked played watched visited studied finished wanted needed liked lived called started stopped tried cooked cleaned opened closed arrived stayed moved helped used walked talked listened travelled traveled waited decided enjoyed loved hated asked answered'.split(' '));
  try { IRREGULAR_VERBS.forEach(v => String(v.v2).split('/').forEach(x => { x = x.trim().toLowerCase(); if (x && x !== v.v1 && !/^(read|lay|found|saw|felt|left|wound|ground|bore|fell|lit|rose|bound)$/.test(x)) s.add(x); })); } catch (e) {}
  return s;
})();
const SC_ADJ = 'happy sad tired busy hungry thirsty good beautiful angry bored excited hot cold expensive cheap big small late early interested worried sick ready free nervous sleepy full';
const SC_DAYS = 'monday|tuesday|wednesday|thursday|friday|saturday|sunday';
const SC_MONTHS = 'january|february|march|april|june|july|august|september|october|november|december';
const SC_ING_NOUN = /^(thing|nothing|something|anything|everything|morning|evening|building|ceiling|wedding|meeting|painting|clothing|feeling|ring|king|spring|string|sibling|darling|pudding|beginning|ending|shopping|swimming|cooking|reading|training|parking|accommodation)$/;
const SC_RULES = [
  // ---- sai ngữ pháp ----
  { t: 'g', re: /\b(can|could|should|must|will|would|may|might|shall)\s+(?:not\s+)?to\s+([a-z]+)/, msg: m => `Sau “${m[1]}” dùng động từ nguyên mẫu, bỏ “to”.`, fix: m => `${m[1]} ${m[2]}` },
  { t: 'g', re: /\b(did|does|do)\s+(i|you|we|they|he|she|it)\s+(?:not\s+)?([a-z]+)\b/, test: m => (m[1] === 'did' ? SC_PASTV.has(m[3]) : SC_V3S.has(m[3])),
    msg: m => `Đã có trợ động từ “${m[1]}” thì động từ chính trở về nguyên mẫu (không dùng “${m[3]}”).` },
  { t: 'g', re: /\b(didn't|did not|doesn't|does not|don't|do not)\s+([a-z]+)\b/, test: m => (/^did/.test(m[1]) ? SC_PASTV.has(m[2]) : SC_V3S.has(m[2]) && m[2] !== 'has' && m[2] !== 'does'),
    msg: m => `Sau “${m[1]}” động từ giữ nguyên mẫu (không dùng “${m[2]}”).` },
  { t: 'g', re: /\b(will|can|could|should|must|would|might|may)\s+(?:not\s+)?(went|came|saw|bought|ate|took|made|did|got|was|were|goes|has|does|likes|wants|needs)\b/,
    msg: m => `Sau “${m[1]}” dùng động từ nguyên mẫu (không dùng “${m[2]}”).` },
  { t: 'g', re: /\b(am|is|are|was|were|i'm|he's|she's|we're|they're|you're)\s+(not\s+)?(agree|disagree|want|know|go|come|think|understand|remember|believe|eat)\b/,
    msg: m => `Không dùng “${m[1]}” trước động từ thường “${m[3]}” (ví dụ: I agree, không nói I am agree).` },
  { t: 'g', re: /(?:^|,\s*|\b(?:and|but|so|because|if|when|then)\s+)i\s+(is|are)\b/, msg: () => 'Chủ ngữ “I” đi với “am” (quá khứ: was).' },
  { t: 'g', re: /(?:^|,\s*|\b(?:and|but|so|because|if|when|then)\s+)(he|she)\s+(are|am|were)\b/, test: (m, s) => !/\b(if|wish|as if|as though)\s+(he|she)\s+were\b/.test(s), msg: m => `Chủ ngữ “${m[1]}” đi với “is” (quá khứ: was).` },
  { t: 'g', re: /(?:^|,\s*|\b(?:and|but|so|because|if|when|then)\s+)(you|we|they)\s+(is|am|was)\b/, msg: m => `Chủ ngữ “${m[1]}” đi với “are” (quá khứ: were).` },
  { t: 'g', re: /(^|[^a-z'])(\w+\s+)?(he|she)\s+(?:always\s+|usually\s+|often\s+|never\s+|sometimes\s+)?(go|have|do|like|want|need|live|work|play|watch|study|eat|drink|get|make|take|come|know|love|hate|teach|speak|read|write|use|cook|walk|sleep|leave|buy)\b/,
    test: m => !/^(did|does|do|can|could|will|would|should|must|may|might|shall|let|make|made|help|helped|helps|watch|watched|saw|see|hear|heard|didn't|doesn't|don't|won't|can't|couldn't|wouldn't|shouldn't|to|that|not|whether|if|unless|why|where|when|how|what|who|which|lest)$/.test((m[2] || '').trim()),
    msg: m => `Chủ ngữ “${m[3]}” ở hiện tại đơn: động từ thêm s/es (${m[3]} ${m[4] === 'have' ? 'has' : m[4] === 'do' ? 'does' : m[4] === 'go' ? 'goes' : /(sh|ch|x|o)$/.test(m[4]) ? m[4] + 'es' : /[^aeiou]y$/.test(m[4]) ? m[4].slice(0, -1) + 'ies' : m[4] + 's'}).` },
  { t: 'g', cs: 1, re: /\ba\s+(?!one\b|once\b|eu|uni|use|usu|ur|uti|uk\b|u\s)([aeiou][a-z]*)/, msg: m => `Trước từ bắt đầu bằng nguyên âm “${m[1]}” dùng “an”.` },
  { t: 'g', cs: 1, re: /\ban\s+(?!hour|honest|honou?r|heir|herb|x-?ray|mba\b|fbi\b|mp\b|mr\b)([bcdfgjklmnpqrstvwxyz][a-z]*|uni[a-z]*|use[a-z]*|usu[a-z]*|euro[a-z]*|one\b)/, msg: m => `Trước “${m[1]}” dùng “a”, không dùng “an”.` },
  { t: 'g', re: /\b(more|most)\s+(better|worse|bigger|smaller|cheaper|taller|faster|easier|harder|older|younger|longer|higher|happier|busier|larger|nicer|hotter|colder|best|worst|biggest|cheapest|tallest|easiest)\b/, msg: m => `“${m[2]}” đã là dạng so sánh, bỏ “${m[1]}”.` },
  { t: 'g', re: /\bsince\s+(\d+|one|two|three|four|five|six|seven|eight|nine|ten|many|several|a few)\s+(years?|months?|weeks?|days?|hours?|minutes?)\b/, msg: () => 'Với khoảng thời gian (hai năm, ba tháng…) dùng “for”, “since” đi với mốc thời gian.' },
  { t: 'g', re: /\b(i|you|we|they|he|she)\s+(very|so|too|really)\s+(happy|sad|tired|busy|hungry|thirsty|beautiful|angry|bored|excited|expensive|late|interested|worried|sick|nervous|sleepy)\b/, msg: m => `Thiếu động từ to be trước tính từ “${m[3]}” (ví dụ: ${m[1] === 'i' ? 'I am' : m[1] + (/^(he|she)$/.test(m[1]) ? ' is' : ' are')} ${m[2]} ${m[3]}).` },
  { t: 'g', re: /\bthere\s+(have|has)\s+(?!been\b|not been\b|never been\b|always been\b|to\b)/, msg: () => '“Có” (tồn tại) dịch là “there is / there are”, không dùng “there have”.' },
  { t: 'g', re: /\b(have|has|had)\s+(\d+|[a-z]+)\s+years?\s+old\b/, msg: () => 'Nói tuổi dùng to be: I am 20 years old (không dùng have).' },
  { t: 'g', re: /\blisten(s|ed|ing)?\s+(music|the radio|songs?|him|her|me|them|us|my|his|their|our|your)\b/, msg: () => 'Nghe cái gì: listen to + danh từ (listen to music).' },
  { t: 'g', re: /\bwait(s|ed|ing)?\s+(you|me|him|her|them|us|my|his|the bus|the train)\b/, msg: () => 'Chờ ai/cái gì: wait for + danh từ (wait for you).' },
  { t: 'g', re: /\b(explain|explains|explained)\s+(me|him|her|them|us)\b/, msg: () => 'Giải thích cho ai: explain (something) to somebody.' },
  { t: 'g', re: /\b(say|says|said)\s+(me|him|her|them|us)\b/, msg: () => 'Nói với ai dùng “tell somebody” hoặc “say to somebody”.' },
  { t: 'g', re: /\bdiscuss(es|ed|ing)?\s+about\b/, msg: () => '“Discuss” không đi với “about”: discuss the plan.' },
  { t: 'g', re: /\bmarr(y|ies|ied)\s+with\b/, msg: () => 'Cưới ai: marry somebody / get married to somebody.' },
  { t: 'g', re: /\b(go|goes|went|going|come|comes|came|coming|get|got|arrive|arrived)\s+to\s+home\b/, msg: () => 'Về nhà: go home / come home / get home (không có “to”).' },
  { t: 'g', re: /\b(enjoy|enjoys|enjoyed|avoid|avoids|avoided|finish|finished|practise|practice|practised|practiced)\s+to\s+[a-z]+/, msg: m => `Sau “${m[1]}” dùng V-ing (ví dụ: ${m[1]} reading).` },
  { t: 'g', re: /\b(want|wants|wanted|decide|decides|decided|hope|hopes|hoped|would like|refuse|refused|promise|promised|plan|plans|planned)\s+([a-z]+ing)\b/, test: m => !SC_ING_NOUN.test(m[2]), msg: m => `Sau “${m[1]}” dùng “to + V” (ví dụ: ${m[1]} to ${m[2].replace(/ing$/, '')}…).` },
  { t: 'g', re: /\bvery\s+(like|likes|liked|love|loves|loved|want|wants|wanted|enjoy|enjoys|enjoyed)\b/, msg: m => `Không nói “very ${m[1]}”: dùng “really ${m[1]}” hoặc “${m[1]} … very much”.` },
  { t: 'g', re: /\b(people|children)\s+(is|was|has)\b/, msg: m => `“${m[1]}” là số nhiều: dùng are / were / have.` },
  { t: 'g', re: /\b(make|makes|made|let|lets)\s+(me|him|her|us|them|you|everyone)\s+to\s+[a-z]+/, msg: m => `Sau “${m[1]} + người” dùng động từ nguyên mẫu, bỏ “to”.` },
  { t: 'g', re: /\b(have|has)\s+(?:\w+\s+)?(been|gone|seen|done|eaten|bought|visited|finished|met|lived|worked|played|watched)\b[^.?!]*\b(yesterday|last (?:week|month|year|night|summer|weekend|sunday|monday)|ago)\b/, test: (m, s) => !/\bsince\b/.test(s),
    msg: m => `Có mốc thời gian đã qua (“${m[3]}”) thì dùng quá khứ đơn, không dùng hiện tại hoàn thành.` },
  { t: 'g', re: /\b(yesterday|last (?:night|week|month|year|weekend|summer|sunday|monday|tuesday|wednesday|thursday|friday|saturday)|\w+ (?:days|weeks|months|years) ago)\b/,
    test: (m, s) => /\b(i|you|we|they)\s+(go|come|eat|see|buy|meet|visit|play|watch|work|get|take|make|stay|study|cook|travel|walk|drink|sleep|leave|arrive|finish|start|call)\b/.test(s) && !/\b(will|going to|usually|every|often|always|do not|did|can|could|would|should|must|let us|let's|want to|need to|have to)\b/.test(s),
    msg: m => `Có mốc thời gian đã qua (“${m[1]}”) nên động từ phải chia ở quá khứ đơn.` },
  { t: 'g', re: /^\s*(when|as soon as|until|before|after)\s+(i|you|he|she|we|they|it)\s+will\b/, msg: m => `Sau “${m[1]}” (nói về tương lai) dùng thì hiện tại, không dùng “will”.` },
  { t: 'g', re: /^\s*if\s+(i|you|he|she|we|they|it)\s+will\b/, msg: () => 'Mệnh đề “if” nói về tương lai dùng thì hiện tại (If it rains…), không dùng “will”.' },
  { t: 'g', re: /\b(am|is|are|was|were|feel|feels|felt)\s+(?:very\s+|so\s+|really\s+)?(interesting|boring|exciting|tiring)\s+(in|with|about|of)\b/, msg: m => `Cảm xúc của người dùng đuôi -ed: ${m[2].replace(/ing$/, 'ed')} ${m[3]}.` },
  { t: 'g', re: new RegExp(`\\bin\\s+(${SC_DAYS})\\b`), msg: m => `Trước thứ trong tuần dùng “on”: on ${m[1].charAt(0).toUpperCase() + m[1].slice(1)}.` },
  { t: 'g', re: new RegExp(`\\bat\\s+(${SC_MONTHS}|(?:19|20)\\d\\d)\\b`), msg: m => `Trước tháng/năm dùng “in”: in ${m[1]}.` },
  { t: 'g', re: /\bon\s+(?:the\s+)?(morning|afternoon|evening)\b(?!\s+of)/, msg: m => `Buổi trong ngày dùng “in the ${m[1]}”.` },
  { t: 'g', re: /\bin\s+night\b/, msg: () => 'Ban đêm dùng “at night”.' },
  { t: 'g', re: /\b(speak|speaks|spoke|sing|sings|sang|drive|drives|drove|swim|swims|swam|cook|cooks|cooked|dance|dances|danced)\s+(?:english\s+|it\s+)?(?:very\s+|really\s+|so\s+)?good\b/, msg: () => 'Bổ nghĩa cho động từ dùng trạng từ “well”, không dùng “good”.' },
  // ---- đúng nhưng chưa tự nhiên ----
  { t: 'u', re: /\breturn(s|ed|ing)?\s+back\b/, msg: () => '“Return” đã có nghĩa là quay lại, bỏ “back” (hoặc nói go back).' },
  { t: 'u', re: /\b(make|makes|made|making)\s+(?:my\s+|your\s+|his\s+|her\s+|our\s+|their\s+|the\s+)?homework\b/, msg: () => 'Người bản xứ nói “do homework”, không nói “make homework”.' },
  { t: 'u', re: /\b(open|opens|opened)\s+the\s+(light|lights|tv|television|fan|air conditioner|radio)\b/, msg: m => `Bật thiết bị nói “turn on the ${m[2]}”.` },
  { t: 'u', re: /\b(close|closes|closed|shut)\s+the\s+(light|lights|tv|television|fan|air conditioner|radio)\b/, msg: m => `Tắt thiết bị nói “turn off the ${m[2]}”.` },
  { t: 'u', re: /\bplay(s|ed|ing)?\s+(computer|phone|the computer|the phone)\b(?!\s+games?)/, msg: () => 'Nói “play games on the computer / phone” thay vì “play computer”.' },
  { t: 'u', re: /\blearn(s|ed|ing)?\s+(?:more\s+|a lot of\s+|new\s+)?knowledge\b/, msg: () => 'Nói “gain knowledge” hoặc “learn a lot” tự nhiên hơn “learn knowledge”.' },
  { t: 'u', re: /\bby\s+foot\b/, msg: () => 'Đi bộ nói “on foot” (hoặc walk).' },
  { t: 'u', re: /\bin\s+the\s+weekend\b/, msg: () => 'Cuối tuần nói “at the weekend” (Anh) hoặc “on the weekend” (Mỹ).' },
  { t: 'u', re: /\breach(es|ed)?\s+to\b/, msg: () => '“Reach” không cần “to”: reach the station.' },
  { t: 'u', re: /\benter(s|ed)?\s+into\s+(the|my|his|her)\s+(room|house|class|office|building)\b/, msg: () => 'Vào phòng nói “enter the room” hoặc “go into the room”.' },
  { t: 'u', re: /\bborrow(s|ed)?\s+(me|him|her|you|them|us)\b/, msg: () => 'Cho ai mượn là “lend somebody something”; “borrow” là đi mượn.' },
  { t: 'u', re: /\bvery\s+(delicious|excellent|perfect|amazing|terrible|awful|huge|tiny|exhausted|starving|freezing|boiling|fantastic|wonderful)\b/, msg: m => `“${m[1]}” đã mang nghĩa rất mạnh, nói “really / absolutely ${m[1]}” hoặc bỏ “very”.` },
  { t: 'u', re: /\b(protect|love|enjoy|save)\s+the\s+(nature|society)\b/, msg: m => `“${m[2]}” nói chung không dùng “the”: ${m[1]} ${m[2]}.` },
  { t: 'u', re: /\bi\s+think\s+(?:that\s+)?(?:it|he|she|they|you|we|i)\s+(?:will not|won't|is not|isn't|are not|aren't)\b/, msg: () => 'Người bản xứ hay nói “I don’t think … will / is…” hơn là “I think … will not”.' },
  { t: 'u', re: /\b(i|we)\s+very\s+(?:much\s+)?(thank|thanks)\b/, msg: () => 'Cảm ơn nhiều nói “Thank you very much”.' },
  { t: 'u', re: /\bhow\s+to\s+(say|call)\s+(?:it|this)\s+in english\b/, msg: () => 'Hỏi cách nói: “How do you say this in English?”' }
];
function scOffline(text) {
  const s = ' ' + String(text).replace(/[’‘`]/g, "'").replace(/\s+/g, ' ') + ' ';
  const out = [];
  // kiểm tra theo từng câu để luật ^ (đầu câu) chạy đúng
  (s.match(/[^.!?]+[.!?]*/g) || [s]).forEach(sent => {
    const os = sent.trim(), ss = os.toLowerCase();
    SC_RULES.forEach(r => {
      const m = r.re.exec(ss);
      if (!m) return;
      if (r.cs && os.length === ss.length && os.charAt(m.index) !== 'a') return;   // “Hoi An”, “A” viết hoa là tên riêng
      if (r.test && !r.test(m, ss)) return;
      const hit = m[0].trim().replace(/^[^a-z']+/, '');
      if (out.some(o => o.hit === hit)) return;
      out.push({ t: r.t, hit, msg: r.msg(m), src: 'app' });
    });
  });
  return out;
}

/* ---------- LanguageTool (miễn phí, không cần tài khoản) ---------- */
const scLtCache = new Map();
let scLtLog = [], scLtCool = 0;
async function scLanguageTool(text) {
  if (scLtCache.has(text)) return scLtCache.get(text);
  if (typeof navigator !== 'undefined' && navigator.onLine === false) return { ok: false, why: 'offline' };
  const now = Date.now();
  const shared = typeof fxLtLog !== 'undefined' && Array.isArray(fxLtLog) ? fxLtLog : scLtLog;
  while (shared.length && now - shared[0] > 60000) shared.shift();
  if (now < scLtCool || (typeof fxLtCool !== 'undefined' && now < fxLtCool) || shared.length >= 15) return { ok: false, why: 'busy' };
  shared.push(now);
  const ctrl = typeof AbortController === 'function' ? new AbortController() : null;
  const timer = setTimeout(() => ctrl && ctrl.abort(), 8000);
  try {
    const body = new URLSearchParams({ text, language: 'en-US', motherTongue: 'vi',
      disabledRules: 'EN_QUOTES,DASH_RULE,WORD_REPEAT_BEGINNING_RULE,ENGLISH_WORD_REPEAT_BEGINNING_RULE,TOO_LONG_SENTENCE,UPPERCASE_SENTENCE_START,PUNCTUATION_PARAGRAPH_END,EN_COMPOUNDS,COMMA_PARENTHESIS_WHITESPACE,WHITESPACE_RULE,EN_UNPAIRED_BRACKETS,MORFOLOGIK_RULE_EN_GB' });
    const res = await fetch('https://api.languagetool.org/v2/check', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body, signal: ctrl ? ctrl.signal : undefined });
    if (res.status === 429 || res.status === 403) { scLtCool = Date.now() + 60000; return { ok: false, why: 'busy' }; }
    if (!res.ok) return { ok: false, why: 'error' };
    const data = await res.json();
    const issues = [];
    (data.matches || []).forEach(m => {
      const rule = m.rule || {}, cat = (rule.category && rule.category.id) || '';
      const type = rule.issueType || '';
      if (type === 'typographical' || type === 'locale-violation' || type === 'whitespace' || cat === 'PUNCTUATION' || cat === 'CASING' || cat === 'TYPOGRAPHY') return;
      const orig = text.substr(m.offset, m.length);
      const spell = type === 'misspelling' || cat === 'TYPOS';
      if (spell && /^[A-Z]/.test(orig)) return;               // tên riêng: Lan, Hoa, Hue…
      const t = spell ? 's' : (type === 'style' || /STYLE|REDUNDANCY|PLAIN_ENGLISH|COLLOCATIONS|SEMANTICS/.test(cat)) ? 'u' : 'g';
      issues.push({ t, offset: m.offset, length: m.length, hit: orig, rep: (m.replacements || []).slice(0, 2).map(r => r.value).join(' / '), msg: m.shortMessage || m.message || '', src: 'lt' });
    });
    const out = { ok: true, issues };
    scLtCache.set(text, out);
    return out;
  } catch (e) { return { ok: false, why: 'error' }; } finally { clearTimeout(timer); }
}
const SC_LT_VI = [[/agreement|singular|plural|third-person|verb form|does not agree|agrees? with/i, 'Chủ ngữ và động từ chưa hợp nhau.'], [/article|"a"|"an"|“a”|“an”/i, 'Dùng mạo từ chưa đúng.'],
  [/possible spelling|spelling mistake|misspell/i, 'Có thể sai chính tả.'], [/past tense|past participle|tense/i, 'Dùng thì / dạng động từ chưa đúng.'],
  [/preposition/i, 'Dùng giới từ chưa đúng.'], [/comparative|superlative/i, 'So sánh chưa đúng.'], [/plural|countable|uncountable/i, 'Danh từ số ít / số nhiều chưa đúng.'],
  [/redundan|wordy|repetit|repeat/i, 'Câu bị thừa từ, có thể viết gọn hơn.'], [/missing|is missing|forgot/i, 'Có thể thiếu một từ.'], [/word order|order of/i, 'Trật tự từ chưa đúng.'],
  [/confus|did you mean|commonly confused/i, 'Có thể dùng nhầm từ.'], [/informal|style|formal/i, 'Cách diễn đạt chưa phù hợp văn phong.']];
const scLtVi = msg => { for (const [re, vi] of SC_LT_VI) if (re.test(msg)) return vi; return 'Có thể chưa đúng.'; };

function scExpand(t) {
  return ' ' + String(t).toLowerCase().replace(/[’‘`]/g, "'").replace(/\bcan't\b/g, 'can not').replace(/\bwon't\b/g, 'will not').replace(/n't\b/g, ' not')
    .replace(/'re\b/g, ' are').replace(/'ve\b/g, ' have').replace(/'ll\b/g, ' will').replace(/\bi'm\b/g, 'i am')
    .replace(/\b(it|that|there|he|she|what|where|who|here|how)'s\b/g, '$1 is').replace(/\s+/g, ' ') + ' ';
}
/* ---------- chấm một câu dịch ---------- */
// models: [đáp án mẫu, cách khác…] · opts.lt: kết quả LanguageTool đã có sẵn (chấm cả đoạn) · opts.offset: vị trí câu trong đoạn
async function smartCheck(user, models, opts) {
  opts = opts || {};
  const sim = scSimilar(user, models);
  const exactN = s => scWords(s).join(' ');
  const exact = models.some(m => exactN(m) === exactN(user));
  const r = { user, models, sim: exact ? 100 : sim.pct, k: sim.k, exact, grammar: [], natural: [], cov: { cov: 1, miss: [] }, lt: null };
  if (exact) { r.verdict = 'exact'; return r; }
  r.cov = scCoverage(user, models);
  const off = scOffline(user);
  // từ có trong đáp án mẫu (vd. tên riêng) thì không coi là lỗi chính tả
  const modelWords = new Set(models.flatMap(m => scWords(m)));
  let lt = opts.lt !== undefined ? opts.lt : (opts.noLt ? { ok: false, why: 'off' } : await scLanguageTool(user));
  r.lt = lt;
  const ltIssues = lt && lt.ok ? lt.issues.filter(x => opts.offset == null || (x.offset >= opts.offset && x.offset < opts.offset + user.length + 1)) : [];
  const issues = off.concat(ltIssues.filter(x => !(x.t === 's' && modelWords.has(x.hit.toLowerCase())) && !off.some(o => o.hit.includes(x.hit.toLowerCase()))));
  r.grammar = issues.filter(x => x.t === 'g' || x.t === 's');
  r.natural = issues.filter(x => x.t === 'u');
  const covOk = r.cov.cov >= 0.8 || r.cov.miss.length <= (r.cov.n >= 8 ? 1 : 0);
  r.covOk = covOk;
  if (r.grammar.length) r.verdict = 'grammar';
  else if (!covOk) r.verdict = 'missing';
  else if (r.natural.length) r.verdict = 'natural';
  else r.verdict = lt && lt.ok ? 'diff' : (sim.pct >= 70 ? 'diff' : 'unsure');
  r.pass = r.verdict === 'exact' || r.verdict === 'diff';
  return r;
}
// chấm bài viết tự do (không có đáp án mẫu): ngữ pháp + tự nhiên + yêu cầu (từ khóa, cấu trúc, độ dài)
async function smartWrite(text, req) {
  req = req || {};
  const r = { user: text, grammar: [], natural: [], req: [], lt: null };
  const off = scOffline(text);
  const lt = await scLanguageTool(text);
  r.lt = lt;
  const issues = off.concat(lt && lt.ok ? lt.issues.filter(x => !off.some(o => o.hit.includes(x.hit.toLowerCase()))) : []);
  r.grammar = issues.filter(x => x.t === 'g' || x.t === 's');
  r.natural = issues.filter(x => x.t === 'u');
  const low = scExpand(text);
  const words = scWords(text).length;
  if (/[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(text)) r.req.push({ ok: false, label: 'Viết bằng tiếng Anh', note: 'Bài có chữ tiếng Việt.' });
  if (req.min) r.req.push({ ok: words >= req.min, label: `Độ dài tối thiểu ${req.min} từ`, note: `Bạn viết ${words} từ.` });
  (req.need || []).forEach(([label, src]) => { let ok = false; try { ok = new RegExp(src, 'i').test(low); } catch (e) {} r.req.push({ ok, label }); });
  if (req.kw) {
    const u = scContent(text).map(x => x.l);
    const used = req.kw.filter(k => { const ws = scWords(k).filter(w => !SC_STOP.has(w)); return ws.length && ws.every(w => u.some(y => scSameWord(scLemma(w), y))); });
    r.req.push({ ok: used.length >= req.kwMin, label: `Dùng ít nhất ${req.kwMin} từ khóa của bài`, note: `đã dùng ${used.length}/${req.kw.length}` + (used.length ? ': ' + used.join(', ') : '') });
  }
  if (req.mark) { let ok = false; try { ok = new RegExp(req.mark[0], 'i').test(low); } catch (e) {} r.req.push({ ok, label: 'Dùng cấu trúc của bài: ' + req.mark[1], soft: !!req.markSoft }); }
  const reqOk = r.req.every(x => x.ok || x.soft);
  r.verdict = r.grammar.length ? 'grammar' : !reqOk ? 'missing' : r.natural.length ? 'natural' : 'good';
  r.pass = r.verdict === 'good';
  return r;
}

/* ---------- phiếu chấm 4 tiêu chí ---------- */
const SC_VERDICT = {
  exact: ['ok', '✓ Chính xác', 'Giống đáp án mẫu.'],
  diff: ['ok', '✓ Đúng và tự nhiên, khác đáp án mẫu', 'Cách diễn đạt của bạn khác bản mẫu nhưng vẫn đúng, nên được tính là đúng.'],
  good: ['ok', '✓ Đạt yêu cầu', 'Bài viết đúng ngữ pháp và đủ yêu cầu.'],
  grammar: ['bad', '✗ Sai ngữ pháp', 'Sửa các lỗi bên dưới rồi thử lại.'],
  missing: ['mid', '◐ Thiếu thông tin so với yêu cầu', 'Câu có thể đúng ngữ pháp nhưng chưa đủ ý của đề.'],
  natural: ['mid', '◐ Đúng nhưng chưa tự nhiên', 'Câu hiểu được, nhưng người bản xứ thường nói khác.'],
  unsure: ['mid', '? Chưa chắc chắn', 'Câu khác nhiều so với bản mẫu và chưa kiểm tra được ngữ pháp đầy đủ (không có mạng). Tự so lại với bản mẫu nhé.']
};
function scIssueLi(x) {
  const li = document.createElement('li');
  const b = document.createElement('b'); b.textContent = '“' + x.hit + '”'; li.appendChild(b);
  if (x.rep) { li.appendChild(document.createTextNode(' → ')); const g = document.createElement('span'); g.className = 'sc-rep'; g.textContent = x.rep; li.appendChild(g); }
  li.appendChild(document.createTextNode(': ' + (x.src === 'lt' ? scLtVi(x.msg) : x.msg)));
  if (x.src === 'lt' && x.msg) { const s = document.createElement('span'); s.className = 'sc-en'; s.textContent = ' (' + x.msg + ')'; li.appendChild(s); }
  return li;
}
function smartReport(r, opts) {
  opts = opts || {};
  const E = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const [cls, title, sub] = SC_VERDICT[r.verdict] || SC_VERDICT.unsure;
  const box = E('div', 'sc-box ' + cls);
  if (!opts.noTitle) box.appendChild(E('div', 'sc-title', title));
  if (!opts.compact) box.appendChild(E('div', 'sc-sub', sub));
  const rows = E('div', 'sc-rows');
  const row = (state, label, detail, list) => {
    const d = E('div', 'sc-row ' + state);
    d.appendChild(E('span', 'sc-ic', state === 'ok' ? '✓' : state === 'bad' ? '✗' : state === 'mid' ? '!' : '–'));
    const t = E('div', 'sc-rt');
    t.appendChild(E('b', null, label));
    if (detail) t.appendChild(E('span', 'sc-det', ' ' + detail));
    if (list && list.length) { const ul = E('ul', 'sc-list'); list.forEach(x => ul.appendChild(x)); t.appendChild(ul); }
    d.appendChild(t);
    rows.appendChild(d);
  };
  if (r.verdict !== 'exact') {
    const ltDown = !(r.lt && r.lt.ok);
    row(r.grammar.length ? 'bad' : 'ok', 'Ngữ pháp', r.grammar.length ? `${r.grammar.length} lỗi` : (ltDown ? 'Không thấy lỗi hay gặp (kiểm tra cơ bản)' : 'Không thấy lỗi'), r.grammar.map(scIssueLi));
    row(r.natural.length ? 'mid' : 'ok', 'Tự nhiên', r.natural.length ? 'Có thể nói tự nhiên hơn' : 'Ổn', r.natural.map(scIssueLi));
    if (r.req) {
      row(r.req.every(x => x.ok || x.soft) ? 'ok' : 'mid', 'Yêu cầu của đề', '', r.req.map(x => { const li = E('li', x.ok ? 'sc-ok' : x.soft ? 'sc-soft' : 'sc-miss'); li.textContent = (x.ok ? '✓ ' : x.soft ? '☆ ' : '✗ ') + x.label + (x.note ? ' · ' + x.note : '') + (!x.ok && x.soft ? ' (nên có)' : ''); return li; }));
    } else {
      row(r.covOk ? 'ok' : 'mid', 'Đủ ý', r.covOk ? (r.cov.miss.length ? 'Gần đủ' : 'Đủ ý của câu gốc') : 'Có thể thiếu: ' + r.cov.miss.slice(0, 6).join(', '));
    }
    if (r.models) row(r.sim >= 90 ? 'ok' : 'na', 'So với đáp án mẫu', `giống ${r.sim}%`);
    if (ltDown) box.appendChild(E('div', 'sc-note', r.lt && r.lt.why === 'busy' ? 'Bộ kiểm tra ngữ pháp trực tuyến đang bận, app chỉ kiểm tra các lỗi hay gặp. Thử lại sau ít phút.' : 'Không kết nối được bộ kiểm tra ngữ pháp trực tuyến, app chỉ kiểm tra các lỗi hay gặp.'));
    box.appendChild(rows);
    if (r.verdict === 'missing' && !r.req && r.cov.miss.length) box.appendChild(E('div', 'sc-note', 'Nếu bạn đã dùng từ đồng nghĩa cho các ý trên thì có thể bấm “tính là đúng”.'));
  }
  return box;
}

/* Bài tập · Cấp 4–5: cấu trúc của từng bài (để nhận ra bạn có dùng không) và tình huống thực tế theo trình độ */
/* EX_MARK: xem file dữ liệu */
/* EX_SIT: xem file dữ liệu */

/* ============================================================
   EXERCISES tab — translation drills by CEFR level
   Every lesson here mirrors a lesson in the Tenses or Grammar tab,
   so the sentences only use grammar the app has already taught.
============================================================ */
(function () {
  const root = document.getElementById('ex-root');
  if (!root) return;

  const E = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };

  const EX_LEVELS = [
    { n: 1, code: 'A1', vi: 'Mới bắt đầu', goal: 'Dịch những câu nền tảng: hiện tại đơn, đang làm gì, was/were, there is/are, mạo từ, đại từ, giới từ và can/could.' },
    { n: 2, code: 'A2', vi: 'Sơ cấp', goal: 'Dịch câu kể chuyện quá khứ, kế hoạch tương lai, hiện tại hoàn thành, so sánh, điều kiện loại 1 và các mẫu too/enough.' },
    { n: 3, code: 'B1', vi: 'Trung cấp', goal: 'Dịch câu có nhiều mốc thời gian, câu bị động, tường thuật, mệnh đề quan hệ, điều kiện loại 2 và các cấu trúc so… that.' },
    { n: 4, code: 'B2', vi: 'Trung cao cấp', goal: 'Dịch câu điều kiện loại 3, nhờ người khác làm, nhượng bộ, các cặp liên từ và thì hoàn thành phức tạp.' },
    { n: 5, code: 'C1', vi: 'Nâng cao', goal: 'Dịch câu ước, đảo ngữ, điều kiện hỗn hợp, câu chẻ, “càng… càng” và cách nói lịch sự giảm nhẹ.' }
  ];

  /* ---------- build the lesson list from the Tenses + Grammar lessons ---------- */
  const EX_LESSONS = [];
  EX_LEVELS.forEach(L => {
    (typeof TENSES !== 'undefined' ? TENSES : []).forEach(t => {
      if (t.lv !== L.n || !EX_DATA[t.id]) return;
      EX_LESSONS.push({
        id: t.id, lv: L.n, title: t.name, en: t.en, tab: 'page-grammar', kindVi: 'Các thì',
        fx: [['+', t.formula.pos], ['−', t.formula.neg], ['?', t.formula.q]].filter(r => r[1]),
        note: t.mistake || '', items: EX_DATA[t.id]
      });
    });
    (typeof GR_LESSONS !== 'undefined' ? GR_LESSONS : []).forEach(t => {
      if (t.lv !== L.n || !EX_DATA[t.id]) return;
      // v127: lấy đủ công thức như Bước 2 trong tab Ngữ pháp (khối công thức riêng + mọi mục có công thức)
      const extra = (typeof GX_EXTRA_FX !== 'undefined' && GX_EXTRA_FX[t.id] || []).map(([name, rows]) => ({ name, fx: rows }));
      const secs = extra.concat((t.sections || []).filter(s => s.formula || s.fx));
      EX_LESSONS.push({
        id: t.id, lv: L.n, title: t.title, en: t.en, tab: 'page-grammar', kindVi: 'Ngữ pháp',
        secs: secs, note: (t.tips && t.tips[0]) || '', items: EX_DATA[t.id]
      });
    });
  });

  /* ---------- progress ---------- */
  const LV_KEY = 'hoc-tieng-anh-ex-level', DONE_KEY = 'hoc-tieng-anh-ex-done',
        BANK_KEY = 'hoc-tieng-anh-ex-bank';
  let exLevel = 1, exBank = false, exDone = new Set(), footSync = () => {};
  try { exLevel = Math.min(5, Math.max(1, +localStorage.getItem(LV_KEY) || 1)); } catch (e) {}
  try { exBank = localStorage.getItem(BANK_KEY) === '1'; } catch (e) {}
  try { const a = JSON.parse(localStorage.getItem(DONE_KEY) || '[]'); if (Array.isArray(a)) exDone = new Set(a); } catch (e) {}
  const save = () => { try { localStorage.setItem(DONE_KEY, JSON.stringify([...exDone])); } catch (e) {} };
  /* v87: câu 13–17 cũ (Wh-/How-) đã được thay bằng câu mới, nên bỏ dấu "đã làm" của các vị trí đó một lần */
  try {
    if (!localStorage.getItem('hoc-tieng-anh-ex-v2')) {
      exDone = new Set([...exDone].filter(k => { const m = /\|ve\|(\d+)$/.exec(k); return !m || +m[1] < 12; }));
      save(); localStorage.setItem('hoc-tieng-anh-ex-v2', '1');
    }
  } catch (e) {}
  const key = (l, i) => l.id + '|ve|' + i;
  const exOf = n => EX_LESSONS.filter(l => l.lv === n);
  const lsTotal = l => l.items.length;
  const lsGot = l => l.items.filter((_, i) => exDone.has(key(l, i))).length;
  const lvGot = n => exOf(n).reduce((a, l) => a + lsGot(l), 0);
  const lvTotal = n => exOf(n).reduce((a, l) => a + lsTotal(l), 0);
  const lvDoneLessons = n => exOf(n).filter(l => lsGot(l) >= lsTotal(l)).length;

  /* ---------- v107: 5 cấp trong mỗi bài ---------- */
  const EX_STEPS = [
    { vi: 'Câu ngắn', desc: 'Dịch câu ngắn để làm quen với cấu trúc mới.' },
    { vi: 'Cấu trúc mới', desc: 'Dịch câu dùng cấu trúc của bài ở dạng phủ định, câu hỏi hoặc mở rộng.' },
    { vi: 'Câu dài', desc: 'Dịch câu dài hơn, nhiều thành phần hơn.' },
    { vi: 'Tự viết', desc: 'Không có câu tiếng Việt gợi ý: tự viết câu theo chủ đề và dùng cấu trúc của bài.' },
    { vi: 'Tình huống', desc: 'Viết phản hồi cho một tình huống thực tế.' }
  ];
  const STEP_KEY = 'hoc-tieng-anh-ex-step', WR_KEY = 'hoc-tieng-anh-ex-write';
  let exSteps = {}, wrDraft = {};
  try { exSteps = JSON.parse(localStorage.getItem(STEP_KEY) || '{}') || {}; } catch (e) {}
  try { wrDraft = JSON.parse(localStorage.getItem(WR_KEY) || '{}') || {}; } catch (e) {}
  const wrSave = () => { try { localStorage.setItem(WR_KEY, JSON.stringify(wrDraft)); } catch (e) {} };
  function exSplit(l) {
    if (l._split) return l._split;
    const len = i => l.items[i][0].split(/\s+/).length;
    const idx = l.items.map((_, i) => i).sort((a, b) => len(a) - len(b) || a - b);
    const n = idx.length, n3 = Math.round(n * 0.3);
    const s3 = idx.slice(n - n3);
    const rest = idx.slice(0, n - n3), half = Math.ceil(rest.length / 2);
    const isVar = i => /\?\s*$|\bnot\b|n['’]t\b|\bnever\b/i.test(l.items[i][0]);
    const s2 = rest.filter(isVar).slice(0, half);
    const s1 = rest.filter(i => !s2.includes(i));
    while (s1.length > half) s2.push(s1.pop());
    const byI = a => a.sort((x, y) => x - y);
    l._split = [byI(s1), byI(s2), byI(s3)];
    return l._split;
  }
  const stepKeys = (l, s) => s <= 3 ? exSplit(l)[s - 1].map(i => key(l, i)) : s === 4 ? [0, 1, 2].map(k => l.id + '|w|' + k) : [l.id + '|s'];
  const stepGot = (l, s) => stepKeys(l, s).filter(k => exDone.has(k)).length;
  const stepTot = (l, s) => stepKeys(l, s).length;
  function exStepOf(l) {
    const v = +exSteps[l.id];
    if (v >= 1 && v <= 5) return v;
    for (let s = 1; s <= 5; s++) if (stepGot(l, s) < stepTot(l, s)) return s;
    return 1;
  }
  function exSetStep(l, s) { exSteps[l.id] = s; try { localStorage.setItem(STEP_KEY, JSON.stringify(exSteps)); } catch (e) {} }
  function exStepBar(l, cur) {
    const bar = E('div', 'ex-steps');
    EX_STEPS.forEach((S, i) => {
      const s = i + 1, got = stepGot(l, s), tot = stepTot(l, s);
      const b = E('button', 'ex-step' + (s === cur ? ' active' : '') + (got >= tot ? ' done' : ''));
      b.dataset.step = s;
      b.appendChild(E('span', 'ex-step-n', got >= tot ? '✓' : String(s)));
      const t = E('span', 'ex-step-t');
      t.appendChild(E('b', null, 'Cấp ' + s));
      t.appendChild(E('span', null, S.vi));
      b.appendChild(t);
      b.appendChild(E('span', 'ex-step-m', `${got}/${tot}`));
      b.setAttribute('aria-pressed', s === cur ? 'true' : 'false');
      b.addEventListener('click', () => { exSetStep(l, s); exLesson(l.id); });
      bar.appendChild(b);
    });
    return bar;
  }
  function exStepSync(l) {
    root.querySelectorAll('.ex-step').forEach(b => {
      const s = +b.dataset.step, got = stepGot(l, s), tot = stepTot(l, s);
      b.classList.toggle('done', got >= tot);
      b.querySelector('.ex-step-n').textContent = got >= tot ? '✓' : String(s);
      b.querySelector('.ex-step-m').textContent = `${got}/${tot}`;
    });
  }
  const EX_TOPICS = ['gia đình của bạn', 'công việc hoặc việc học của bạn', 'cuối tuần của bạn', 'món ăn bạn thích', 'một chuyến đi', 'thời tiết', 'sở thích của bạn',
    'một người bạn thân', 'thành phố nơi bạn sống', 'sức khỏe và thể thao', 'điện thoại và công nghệ', 'việc học tiếng Anh', 'buổi sáng của bạn', 'mua sắm', 'một bộ phim hoặc cuốn sách'];
  const hashStr = t => { let h = 7; for (const c of t) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; };
  function exWritePrompts(l) {
    if (/^howto-/.test(l.id)) {
      const sit = l.title.replace(/^Nói sao để…\s*/, '');
      return ['một câu bạn sẽ nói', 'một câu hỏi bạn sẽ hỏi', 'một câu đáp lại người kia'].map(x => `Viết ${x} khi muốn ${sit}.`);
    }
    const h = hashStr(l.id), out = [];
    for (let k = 0; out.length < 3; k++) { const t = EX_TOPICS[(h + k * 7) % EX_TOPICS.length]; if (!out.includes(t)) out.push(t); }
    return out.map(t => `Viết một câu về ${t}.`);
  }
  // thẻ viết tự do (cấp 4, cấp 5)
  function exFreeCard(o) {
    const done = exDone.has(o.key);
    const card = E('div', 'tense-card ex-card ex-free' + (done ? ' ok' : ''));
    const q = E('div', 'ex-q');
    q.appendChild(E('span', 'ex-n', o.num));
    const qt = E('div', 'ex-q-text');
    if (typeof o.prompt === 'string') qt.textContent = o.prompt; else qt.appendChild(o.prompt);
    q.appendChild(qt); card.appendChild(q);
    if (o.extra) card.appendChild(o.extra);
    const ta = E('textarea', 'ex-input'); ta.rows = o.rows || 2; ta.placeholder = 'Viết bằng tiếng Anh…';
    ta.value = wrDraft[o.key] || ''; ta.spellcheck = false; ta.setAttribute('autocorrect', 'off'); ta.setAttribute('aria-label', 'Bài viết của bạn');
    const wc = E('div', 'ex-wc');
    const upd = () => { const n = (ta.value.match(/[A-Za-z][A-Za-z'’-]*/g) || []).length; wc.textContent = n + ' từ' + (o.req.min ? ` · tối thiểu ${o.req.min}` : ''); wc.classList.toggle('ok', !o.req.min || n >= o.req.min); };
    ta.addEventListener('input', () => { wrDraft[o.key] = ta.value; wrSave(); upd(); }); upd();
    card.appendChild(ta); card.appendChild(wc);
    const res = E('div', 'ex-res'); res.hidden = true;
    const acts = E('div', 'ex-acts');
    const ck = E('button', 'btn-primary', 'Kiểm tra');
    const sm = E('button', 'btn-ghost', o.sampleLabel || '💡 Xem câu ví dụ');
    const mark = () => { exDone.add(o.key); save(); card.classList.add('ok'); card.classList.remove('bad'); footSync(); };
    ck.addEventListener('click', async () => {
      const v = ta.value.trim(); if (!v) { ta.focus(); return; }
      ck.disabled = true; res.hidden = false; res.innerHTML = '';
      res.appendChild(E('div', 'sc-wait', '⏳ Đang chấm: ngữ pháp, độ tự nhiên, yêu cầu của đề…'));
      let r = null; try { r = await smartWrite(v, o.req); } catch (e) {}
      ck.disabled = false; res.innerHTML = '';
      if (!r) { res.appendChild(E('div', 'ex-wrong', 'Chưa chấm được, thử lại nhé.')); return; }
      res.appendChild(smartReport(r));
      if (r.pass) mark();
      else {
        card.classList.add('bad'); card.classList.remove('ok');
        const ov = E('button', 'btn-ghost ex-ov', 'Mình viết đúng rồi → tính là đạt');
        ov.addEventListener('click', () => { mark(); ov.remove(); });
        res.appendChild(ov);
      }
    });
    sm.addEventListener('click', () => {
      const t = o.sample();
      const old = res.querySelector('.ex-sample'); if (old) old.remove();
      const b = E('div', 'ex-sample');
      b.appendChild(E('div', 'ex-ans-h', o.sampleTitle || 'Câu ví dụ trong bài'));
      const row = E('div', 'ex-ans-row'); row.appendChild(E('div', 'ex-ans-en', t)); row.appendChild(exPlay(t)); b.appendChild(row);
      res.hidden = false; res.appendChild(b);
    });
    acts.appendChild(ck); acts.appendChild(sm);
    card.appendChild(acts); card.appendChild(res);
    if (done) { res.hidden = false; res.appendChild(E('div', 'ex-ok', '✓ Đã đạt')); }
    return card;
  }
  function exWriteBlock(l) {
    const box = E('div', 'ex-list');
    const mk = EX_MARK[l.id];
    const tip = E('div', 'tense-card ex-wr-tip');
    tip.appendChild(E('b', null, 'Cấu trúc cần dùng: '));
    tip.appendChild(document.createTextNode(mk ? mk[1] : l.title));
    tip.appendChild(E('div', 'ex-wr-sub', 'Không có câu gợi ý, bạn tự nghĩ nội dung. App kiểm tra ngữ pháp, độ tự nhiên và xem bạn đã dùng cấu trúc của bài chưa.'));
    box.appendChild(tip);
    exWritePrompts(l).forEach((pr, k) => box.appendChild(exFreeCard({
      key: l.id + '|w|' + k, num: String(k + 1), prompt: pr, rows: 2,
      req: { min: 4, mark: mk ? [mk[0], mk[1]] : null, markSoft: mk ? !!mk[2] : true },
      sample: () => l.items[Math.floor(Math.random() * l.items.length)][0]
    })));
    return box;
  }
  function exSitBlock(l) {
    const list = EX_SIT.filter(x => x.lv === l.lv), pos = Math.max(0, exOf(l.lv).indexOf(l));
    const st = list[pos % list.length];
    const mk = EX_MARK[l.id];
    const prompt = E('div');
    prompt.appendChild(E('div', 'ex-sit-title', st.icon + ' ' + st.title));
    prompt.appendChild(E('div', 'ex-sit-task', st.task));
    const ex = E('div', 'ex-sit-req');
    ex.appendChild(E('div', 'ex-sit-h', 'Bài viết cần có:'));
    const ul = E('ul');
    st.need.forEach(n => ul.appendChild(E('li', null, n[0])));
    ul.appendChild(E('li', null, `Ít nhất ${st.min} từ, đúng ngữ pháp`));
    if (mk) ul.appendChild(E('li', 'ex-sit-soft', `☆ Nên dùng cấu trúc của bài: ${mk[1]}`));
    ex.appendChild(ul);
    const box = E('div', 'ex-list');
    box.appendChild(exFreeCard({ key: l.id + '|s', num: '✍', prompt, extra: ex, rows: 6,
      req: { min: st.min, need: st.need, mark: mk ? [mk[0], mk[1]] : null, markSoft: true },
      sample: () => st.sample, sampleLabel: '📄 Xem bài mẫu', sampleTitle: 'Bài mẫu (chỉ là một cách viết)' }));
    return box;
  }

  /* ---------- answer checking ---------- */
  function exNorm(s) {
    let t = String(s || '').toLowerCase().replace(/[’‘`]/g, "'");
    t = t.replace(/\bcan't\b/g, 'cannot').replace(/\bwon't\b/g, 'will not').replace(/\bshan't\b/g, 'shall not')
         .replace(/\blet's\b/g, 'let us').replace(/'d better\b/g, ' had better')
         .replace(/n't\b/g, ' not').replace(/\bi'm\b/g, 'i am')
         .replace(/'re\b/g, ' are').replace(/'ve\b/g, ' have').replace(/'ll\b/g, ' will')
         .replace(/'d\b/g, ' would').replace(/'s\b/g, ' is');
    t = t.replace(/\bpractise/g, 'practice').replace(/\brealis/g, 'realiz').replace(/\blearnt\b/g, 'learned')
         .replace(/\bneighbour/g, 'neighbor').replace(/\bapologis/g, 'apologiz').replace(/\borganis/g, 'organiz')
         .replace(/\bgotten\b/g, 'got').replace(/\bcentre\b/g, 'center').replace(/\bgrey\b/g, 'gray')
         .replace(/\bcolour/g, 'color').replace(/\bfavourite\b/g, 'favorite').replace(/\btravelling\b/g, 'traveling')
         .replace(/\bmr\.?\b/g, 'mr').replace(/\bmrs\.?\b/g, 'mrs');
    t = t.replace(/[.,!?;:"“”()\[\]\-–—/]/g, ' ').replace(/\s+/g, ' ').trim();
    return t;
  }
  const exAnswers = it => [it[0]].concat(it[2] || []);
  const exOk = (typed, it) => { const u = exNorm(typed); return !!u && exAnswers(it).some(a => exNorm(a) === u); };

  /* word-level diff so the learner sees exactly which words differ */
  function exDiff(answer, typed) {
    const A = answer.split(/\s+/).filter(Boolean), B = exNorm(typed).split(' ').filter(Boolean);
    const An = A.map(w => exNorm(w));
    const m = An.length, n = B.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = m - 1; i >= 0; i--) for (let j = n - 1; j >= 0; j--)
      dp[i][j] = An[i] && An[i] === B[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    const out = []; let i = 0, j = 0;
    while (i < m) {
      if (j < n && An[i] && An[i] === B[j]) { out.push([A[i], true]); i++; j++; }
      else if (j < n && dp[i + 1][j] < dp[i][j + 1]) { j++; }
      else { out.push([A[i], false]); i++; }
    }
    return out;
  }

  /* stable shuffle so the word bank keeps its order while the card is open */
  function exShuffle(arr, seed) {
    const a = arr.slice(); let s = seed * 9301 + 49297;
    for (let i = a.length - 1; i > 0; i--) {
      s = (s * 9301 + 49297) % 233280;
      const j = Math.floor(s / 233280 * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const exSay = (text, rate) => { try { speak(String(text).replace(/[“”]/g, ''), rate || 0.85); } catch (e) {} };
  function exPlay(text) {
    const b = E('span', 'play-mini', '▶');
    b.setAttribute('role', 'button'); b.setAttribute('aria-label', 'Nghe câu tiếng Anh'); b.tabIndex = 0;
    b.addEventListener('click', ev => { ev.stopPropagation(); exSay(text); });
    return b;
  }
  function exTop() {
    const m = document.querySelector('main');
    window.scrollTo(0, m ? Math.max(0, m.offsetTop - 8) : 0);
  }

  /* ============================ home ============================ */
  function exHome() {
    root.innerHTML = '';
    const chips = E('div', 'vc-levels tn-levels');
    EX_LEVELS.forEach(L => {
      const n = exOf(L.n).length, got = lvDoneLessons(L.n);
      const b = E('button', 'vc-level vc-lvl' + L.n + (L.n === exLevel ? ' active' : '') + (got === n ? ' done' : ''));
      b.appendChild(E('span', 'vc-level-code', L.code));
      b.appendChild(E('span', 'vc-level-vi', L.vi));
      b.appendChild(E('span', 'vc-level-n', got === n ? `✓ ${n} bài` : got ? `${got}/${n}` : `${n} bài`));
      b.setAttribute('aria-pressed', L.n === exLevel ? 'true' : 'false');
      b.addEventListener('click', () => {
        exLevel = L.n; try { localStorage.setItem(LV_KEY, String(L.n)); } catch (e) {}
        exHome();
      });
      chips.appendChild(b);
    });
    root.appendChild(chips);

    const L = EX_LEVELS[exLevel - 1], list = exOf(exLevel), got = lvGot(exLevel), tot = lvTotal(exLevel);
    const intro = E('div', 'tense-card tn-intro');
    const ih = E('div', 'tn-intro-h');
    ih.appendChild(E('span', 'tn-badge', L.code));
    ih.appendChild(E('b', null, `${L.vi} · ${list.length} bài · ${list.reduce((a, x) => a + x.items.length, 0)} câu`));
    intro.appendChild(ih);
    intro.appendChild(E('p', 'tn-goal', 'Mục tiêu: ' + L.goal));
    const pg = E('div', 'vc-head-prog');
    pg.appendChild(E('span', null, `Đã làm ${got}/${tot} câu`));
    const bar = E('span', 'vc-bar'); const fill = E('span'); fill.style.width = (tot ? got / tot * 100 : 0) + '%';
    bar.appendChild(fill); bar.style.flex = '1'; pg.appendChild(bar);
    intro.appendChild(pg);
    intro.appendChild(E('p', 'tn-tip', '💡 Mỗi bài có 5 cấp: ① câu ngắn → ② cấu trúc mới → ③ câu dài → ④ tự viết không có câu gợi ý → ⑤ viết phản hồi cho tình huống thực tế. App chấm theo 4 tiêu chí: ngữ pháp, độ tự nhiên, đủ ý và mức giống đáp án mẫu.'));
    root.appendChild(intro);
    root.appendChild(testEntry(exLevel));

    const grid = E('div', 'gr-grid');
    list.forEach((l, i) => {
      const g = lsGot(l), t = lsTotal(l), full = g >= t;
      const b = E('button', 'gr-topic ex-topic' + (full ? ' done' : ''));
      b.appendChild(E('span', 'gr-num', full ? '✓' : String(i + 1)));
      b.appendChild(E('span', 'gr-t-title', l.title));
      b.appendChild(E('span', 'gr-t-en', l.en));
      const p = E('span', 'ex-topic-prog');
      const pb = E('span', 'ex-mini-bar'); const pf = E('span'); pf.style.width = (g / t * 100) + '%'; pb.appendChild(pf);
      p.appendChild(pb); p.appendChild(E('span', 'ex-topic-n', `${g}/${t}`));
      b.appendChild(p);
      b.addEventListener('click', () => { exLesson(l.id); exTop(); });
      grid.appendChild(b);
    });
    root.appendChild(grid);

    if (exLevel < 5) {
      const nx = EX_LEVELS[exLevel];
      const nb = E('button', 'btn-primary vc-next-unit', `Làm tiếp cấp ${nx.code} · ${nx.vi} →`);
      nb.addEventListener('click', () => {
        exLevel = nx.n; try { localStorage.setItem(LV_KEY, String(nx.n)); } catch (e) {}
        exHome(); exTop();
      });
      root.appendChild(nb);
    }
  }

  /* ============================ one lesson ============================ */
  function exLesson(id) {
    const l = EX_LESSONS.find(x => x.id === id);
    if (!l) return exHome();
    exLevel = l.lv; try { localStorage.setItem(LV_KEY, String(l.lv)); } catch (e) {}
    const L = EX_LEVELS[l.lv - 1], list = exOf(l.lv), pos = list.indexOf(l);
    root.innerHTML = '';

    const back = E('button', 'gr-back', `← Bài tập ${L.code}`);
    back.addEventListener('click', () => { exHome(); exTop(); });
    root.appendChild(back);

    const head = E('div', 'gr-head');
    head.appendChild(E('div', 'gr-en', `${L.code} · Bài ${pos + 1}/${list.length} · ${l.kindVi} · ${l.en}`));
    head.appendChild(E('h2', 'gr-title', l.title));
    root.appendChild(head);

    /* rule recap, taken straight from the lesson it belongs to */
    const rc = E('div', 'tense-card ex-recap');
    rc.appendChild(E('h3', null, 'Nhắc lại cấu trúc'));
    if (typeof fxSubjNote === 'function') rc.appendChild(fxSubjNote());
    if (l.fx && l.fx.length) {
      const box = E('div', 'tn-formula');
      l.fx.forEach(([sym, txt]) => {
        (typeof fxParts === 'function' ? fxParts(txt) : String(txt).split(/\s+·\s+/)).filter(Boolean).forEach((part, i) => {
          const r = E('div', 'tn-frow' + (i ? ' tn-frow-sub' : ''));
          const s = E('span', 'tn-sym' + (i ? ' tn-sym-ghost' : ''), i ? '·' : sym);
          if (!i) s.title = { '+': 'Khẳng định', '−': 'Phủ định', '?': 'Câu hỏi' }[sym] || '';
          r.appendChild(s); r.appendChild(E('span', 'tn-ftxt', part));
          box.appendChild(r);
        });
      });
      rc.appendChild(box);
    }
    (l.secs || []).forEach(sec => {
      rc.appendChild(E('div', 'ex-sec-name', sec.name));
      if (typeof grFormula === 'function') rc.appendChild(grFormula(sec));
    });
    if (l.note && typeof l.note === 'string') rc.appendChild(E('p', 'ex-note', '⚠️ ' + l.note));
    else if (l.note) {
      const n = E('div', 'ex-note');
      n.appendChild(E('div', 'ex-note-h', '⚠️ Lỗi hay gặp'));
      const bad = E('div', 'ex-note-row');
      bad.appendChild(E('span', 'ex-note-x', '✗')); bad.appendChild(E('span', null, l.note.wrong));
      const good = E('div', 'ex-note-row');
      good.appendChild(E('span', 'ex-note-v', '✓')); good.appendChild(E('span', null, l.note.right));
      n.appendChild(bad); n.appendChild(good);
      if (l.note.note) n.appendChild(E('div', 'ex-note-t', l.note.note));
      rc.appendChild(n);
    }
    const go = E('button', 'btn-ghost ex-go', 'Xem lại bài trong tab Ngữ pháp →');
    go.addEventListener('click', () => {
      const tab = document.querySelector('nav.tabbar button[data-page="page-grammar"]');
      if (tab) tab.click();
      try {
        if (typeof gxLesson === 'function' && typeof gxFind === 'function' && gxFind(l.id)) gxLesson(l.id);
        else if (l.kindVi === 'Các thì' && typeof renderTenseTopic === 'function') renderTenseTopic(l.id);
        else if (typeof renderGrammarTopic === 'function') renderGrammarTopic(l.id);
      } catch (e) {}
      exTop();
    });
    rc.appendChild(go);
    root.appendChild(typeof cardFold === 'function' ? cardFold(rc, 'ex|' + l.id) : rc);

    /* v107: 5 cấp trong mỗi bài */
    const step = exStepOf(l);
    root.appendChild(exStepBar(l, step));
    const SI = E('div', 'ex-step-intro');
    SI.appendChild(E('b', null, `Cấp ${step} · ${EX_STEPS[step - 1].vi}: `));
    SI.appendChild(document.createTextNode(EX_STEPS[step - 1].desc));
    root.appendChild(SI);
    if (step <= 3) {
      /* input mode */
      const tools = E('div', 'ex-tools');
      const modes = E('div', 'colloc-chips ex-modes');
      [[false, '⌨️ Tự viết'], [true, '🧩 Xếp từ']].forEach(([v, lbl]) => {
        const b = E('button', 'colloc-chip' + (exBank === v ? ' active' : ''), lbl);
        b.addEventListener('click', () => {
          exBank = v; try { localStorage.setItem(BANK_KEY, v ? '1' : '0'); } catch (e) {}
          exLesson(id);
        });
        modes.appendChild(b);
      });
      tools.appendChild(modes);
      root.appendChild(tools);

      root.appendChild(E('p', 'ex-hint', exBank
        ? 'Đọc câu tiếng Việt, chạm vào các từ bên dưới để xếp thành câu tiếng Anh rồi bấm Kiểm tra. Chạm vào từ đã xếp để lấy ra.'
        : 'Đọc câu tiếng Việt rồi viết câu tiếng Anh, bấm Kiểm tra. App chấm ngữ pháp, độ tự nhiên và đủ ý, nên câu đúng nhưng khác đáp án mẫu vẫn được tính là đúng.'));

      const wrap = E('div', 'ex-list');
      exSplit(l)[step - 1].forEach((i, n) => wrap.appendChild(cardVE(l, l.items[i], i, n + 1)));
      root.appendChild(wrap);
    } else if (step === 4) root.appendChild(exWriteBlock(l));
    else root.appendChild(exSitBlock(l));
    if (step < 5) {
      const nxs = E('button', 'btn-ghost ex-step-next', `Lên cấp ${step + 1}: ${EX_STEPS[step].vi} →`);
      nxs.addEventListener('click', () => { exSetStep(l, step + 1); exLesson(id); exTop(); });
      root.appendChild(nxs);
    }

    const foot = E('div', 'tense-card ex-foot');
    const fp = E('div', 'vc-head-prog');
    const t = lsTotal(l);
    const fnum = E('span', null, `Bài này: ${lsGot(l)}/${t} câu`);
    fp.appendChild(fnum);
    const fb = E('span', 'vc-bar'); const ff = E('span'); ff.style.width = (lsGot(l) / t * 100) + '%'; fb.appendChild(ff); fb.style.flex = '1';
    fp.appendChild(fb); foot.appendChild(fp);
    // the per-sentence cards call this after each answer
    footSync = () => { const g = lsGot(l); fnum.textContent = `Bài này: ${g}/${t} câu`; ff.style.width = (g / t * 100) + '%'; exStepSync(l); };
    const acts = E('div', 'ex-foot-acts');
    if (pos + 1 < list.length) {
      const nx = E('button', 'btn-primary', `Bài tiếp: ${list[pos + 1].title} →`);
      nx.addEventListener('click', () => { exLesson(list[pos + 1].id); exTop(); });
      acts.appendChild(nx);
    }
    foot.appendChild(acts);
    root.appendChild(foot);
  }

  /* ---------- card: Vietnamese → English (checked) ---------- */
  function cardVE(l, it, i, num) {
    const k = key(l, i), done = exDone.has(k);
    const card = E('div', 'tense-card ex-card' + (done ? ' ok' : ''));
    const q = E('div', 'ex-q');
    q.appendChild(E('span', 'ex-n', String(num || i + 1)));
    q.appendChild(E('div', 'ex-q-text ex-q-vi', it[1]));
    card.appendChild(q);

    const res = E('div', 'ex-res'); res.hidden = true;
    const tokens = it[0].split(/\s+/).filter(Boolean);
    let picked = [];

    let resetInput = () => {};
    const inputWrap = E('div', 'ex-in');

    // a correct answer is saved and the sentence stays on screen
    const solved = label => {
      exDone.add(k); save(); footSync();
      try { if (window.mkOk) window.mkOk('ex|' + k); } catch (e) {}
      card.classList.add('ok'); card.classList.remove('bad');
      res.hidden = false; res.innerHTML = '';
      res.appendChild(E('div', 'ex-ok', label));
      res.appendChild(E('div', 'ex-ans-h', 'Đáp án đã thuộc'));
      const d = E('div', 'ex-ans-row');
      d.appendChild(E('div', 'ex-ans-en', it[0])); d.appendChild(exPlay(it[0]));
      res.appendChild(d);
      if (it[2] && it[2].length) res.appendChild(E('div', 'ex-alt', 'Cách khác cũng đúng: ' + it[2].join(' · ')));
      inputWrap.hidden = true;
      const again = E('button', 'btn-ghost ex-ov', '↻ Viết lại câu này');
      again.addEventListener('click', () => { resetInput(); inputWrap.hidden = false; res.hidden = true; res.innerHTML = ''; });
      res.appendChild(again);
    };

    const finish = (ok, typed) => {
      res.hidden = false; res.innerHTML = '';
      try { if (window.actLog) actLog('w'); } catch (e) {}
      if (ok) {
        solved('✓ Chính xác!');
      } else {
        card.classList.remove('ok'); card.classList.add('bad');
        try { if (window.mkAdd) window.mkAdd({ k: 'ex|' + k, src: 'ex', cat: l.title, mode: 'sent', ask: 'Dịch sang tiếng Anh', p: it[1], a: exAnswers(it), wrong: typed }); } catch (e) {}
        res.appendChild(E('div', 'ex-wrong', '✗ Chưa đúng. So lại với đáp án:'));
        const row = E('div', 'ex-ans-row');
        const d = E('div', 'ex-ans-en');
        exDiff(it[0], typed).forEach(([w, same]) => {
          d.appendChild(E('span', same ? 'ex-w' : 'ex-w ex-w-miss', w));
          d.appendChild(document.createTextNode(' '));
        });
        row.appendChild(d); row.appendChild(exPlay(it[0]));
        res.appendChild(row);
        if (it[2] && it[2].length) res.appendChild(E('div', 'ex-alt', 'Cách khác cũng đúng: ' + it[2].join(' · ')));
        const ov = E('button', 'btn-ghost ex-ov', 'Mình viết cũng đúng → tính là đúng');
        ov.addEventListener('click', () => solved('✓ Đã tính là đúng'));
        res.appendChild(ov);
      }
    };

    // v107: chưa khớp đáp án thì chấm theo 4 tiêu chí (câu đúng nhưng khác đáp án vẫn được tính)
    const smartFinish = typed => {
      res.hidden = false; res.innerHTML = '';
      res.appendChild(E('div', 'sc-wait', '⏳ Đang chấm: ngữ pháp, độ tự nhiên, đủ ý…'));
      smartCheck(typed, exAnswers(it)).then(r => {
        if (r.pass) {
          solved(r.verdict === 'diff' ? '✓ Đúng, cách diễn đạt khác đáp án mẫu' : '✓ Chính xác!');
          res.insertBefore(smartReport(r, { compact: true, noTitle: true }), res.children[1] || null);
          return;
        }
        finish(false, typed);
        const h = res.querySelector('.ex-wrong'); if (h) { h.className = 'ex-ans-h'; h.textContent = 'Đáp án mẫu'; }
        res.insertBefore(smartReport(r), res.firstChild);
      }).catch(() => finish(false, typed));
    };

    if (exBank) {
      const bank = E('div', 'ex-bank');
      const line = E('div', 'ex-line');
      const chips = E('div', 'ex-chips');
      const render = () => {
        line.innerHTML = ''; chips.innerHTML = '';
        if (!picked.length) line.appendChild(E('span', 'ex-line-ph', 'Chạm từ bên dưới để xếp câu…'));
        picked.forEach((t, idx) => {
          const c = E('button', 'ex-chip ex-chip-on', t.w);
          c.addEventListener('click', () => { picked.splice(idx, 1); render(); });
          line.appendChild(c);
        });
        exShuffle(tokens.map((w, idx) => ({ w, idx })), i + 7).forEach(t => {
          if (picked.some(p => p.idx === t.idx)) return;
          const c = E('button', 'ex-chip', t.w);
          c.addEventListener('click', () => { picked.push(t); render(); });
          chips.appendChild(c);
        });
      };
      render();
      resetInput = () => { picked = []; render(); };
      bank.appendChild(line); bank.appendChild(chips);
      inputWrap.appendChild(bank);
      const acts = E('div', 'ex-acts');
      const ck = E('button', 'btn-primary', 'Kiểm tra');
      ck.addEventListener('click', () => {
        if (!picked.length) return;
        finish(exOk(picked.map(p => p.w).join(' '), it), picked.map(p => p.w).join(' '));
      });
      const cl = E('button', 'btn-ghost', 'Xóa');
      cl.addEventListener('click', () => { picked = []; render(); res.hidden = true; card.classList.remove('bad'); });
      acts.appendChild(ck); acts.appendChild(cl);
      inputWrap.appendChild(acts);
    } else {
      const inp = E('textarea', 'ex-input');
      inp.rows = 2; inp.placeholder = 'Viết câu tiếng Anh…'; inp.setAttribute('aria-label', 'Câu tiếng Anh của bạn');
      resetInput = () => { inp.value = ''; };
      inputWrap.appendChild(inp);
      const acts = E('div', 'ex-acts');
      const ck = E('button', 'btn-primary', 'Kiểm tra');
      const run = () => { const v = inp.value; if (!v.trim()) return; if (exOk(v, it)) finish(true, v); else smartFinish(v); };
      ck.addEventListener('click', run);
      inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); run(); } });
      const sk = E('button', 'btn-ghost', 'Xem đáp án');
      sk.addEventListener('click', () => {
        res.hidden = false; res.innerHTML = '';
        res.appendChild(E('div', 'ex-ans-h', 'Đáp án'));
        const d = E('div', 'ex-ans-row');
        d.appendChild(E('div', 'ex-ans-en', it[0])); d.appendChild(exPlay(it[0]));
        res.appendChild(d);
      });
      acts.appendChild(ck); acts.appendChild(sk);
      inputWrap.appendChild(acts);
    }
    card.appendChild(inputWrap);
    card.appendChild(res);
    if (done) solved('✓ Đã làm đúng');
    return card;
  }

  /* ============================ kiểm tra tổng hợp theo cấp độ ============================ */
  const TEST_KEY = 'hoc-tieng-anh-ex-test';
  let testStore = {};
  try { const o = JSON.parse(localStorage.getItem(TEST_KEY) || '{}'); if (o && typeof o === 'object') testStore = o; } catch (e) {}
  const testSave = () => { try { localStorage.setItem(TEST_KEY, JSON.stringify(testStore)); } catch (e) {} };
  const testRec = n => testStore[n] || (testStore[n] = { best: 0, bestOf: 0, runs: [] });
  const fmtTime = s => Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');
  let testTimer = null;
  const testStop = () => { if (testTimer) { clearInterval(testTimer); testTimer = null; } };

  function testEntry(n) {
    const L = EX_LEVELS[n - 1], r = testRec(n), lessons = exOf(n).length;
    const b = E('button', 'vc-topic ipa-entry ext-entry');
    const top = E('span', 'ipa-entry-top');
    top.appendChild(E('span', 'ipa-entry-sym ext-entry-sym', '🏁'));
    const tx = E('span', 'ipa-entry-tx');
    tx.appendChild(E('span', 'vc-tvi', `Kiểm tra tổng hợp ${L.code}`));
    tx.appendChild(E('span', 'vc-ten', `Câu trộn ngẫu nhiên từ ${lessons} bài · chấm điểm và lưu kỷ lục`));
    top.appendChild(tx); b.appendChild(top);
    const last = r.runs[r.runs.length - 1];
    b.appendChild(E('span', 'vc-tmeta', r.runs.length
      ? `Kỷ lục ${r.best}% (${Math.round(r.best * r.bestOf / 100)}/${r.bestOf} câu) · lần gần nhất ${last.pct}% · đã làm ${r.runs.length} lần`
      : 'Chưa làm lần nào — thử sức xem bạn nắm cấp này tới đâu'));
    const bar = E('span', 'vc-bar'); const f = E('span'); f.style.width = r.best + '%'; bar.appendChild(f); b.appendChild(bar);
    b.addEventListener('click', () => { exTest(n); exTop(); });
    return b;
  }

  /* chọn câu rải đều các bài: lần lượt lấy 1 câu ngẫu nhiên từ mỗi bài (thứ tự bài cũng trộn) */
  function testPick(n, count) {
    const pools = exOf(n).map(l => ({ l, idx: exShuffle(l.items.map((_, i) => i), Math.floor(Math.random() * 1e6) + 1) }));
    const order = exShuffle(pools, Math.floor(Math.random() * 1e6) + 1);
    const out = [];
    for (let round = 0; out.length < count && round < 40; round++)
      for (const p of order) { if (out.length >= count) break; const i = p.idx[round]; if (i != null) out.push({ l: p.l, i, it: p.l.items[i] }); }
    return exShuffle(out, Math.floor(Math.random() * 1e6) + 1);
  }

  function exTest(n) {
    testStop();
    exLevel = n; try { localStorage.setItem(LV_KEY, String(n)); } catch (e) {}
    const L = EX_LEVELS[n - 1], r = testRec(n), lessons = exOf(n);
    root.innerHTML = '';
    const back = E('button', 'gr-back', `← Bài tập ${L.code}`);
    back.addEventListener('click', () => { testStop(); exHome(); exTop(); });
    root.appendChild(back);
    const head = E('div', 'gr-head');
    head.appendChild(E('div', 'gr-en', `${L.code} · ${L.vi} · Kiểm tra tổng hợp`));
    head.appendChild(E('h2', 'gr-title', `Kiểm tra tổng hợp ${L.code}`));
    root.appendChild(head);

    const card = E('div', 'tense-card ext-start');
    card.appendChild(E('p', 'ext-p', `Câu hỏi được trộn ngẫu nhiên từ cả ${lessons.length} bài của cấp ${L.code}, mỗi bài ít nhất một câu nếu đủ số câu. Bạn không biết trước câu thuộc bài nào — đúng như đi thi.`));
    const ul = E('ul', 'ext-rules');
    ['Mỗi lần một câu: đọc tiếng Việt, viết (hoặc xếp) câu tiếng Anh rồi bấm Kiểm tra.',
     'Có đồng hồ đếm giờ để bạn biết mình làm nhanh tới đâu (không giới hạn thời gian).',
     'Cuối bài: điểm, thời gian, và danh sách câu sai kèm nút mở lại đúng bài cần ôn.']
      .forEach(t => ul.appendChild(E('li', null, t)));
    card.appendChild(ul);

    card.appendChild(E('div', 'ext-h', 'Số câu'));
    const lens = E('div', 'colloc-chips ext-lens');
    const total = lessons.reduce((a, l) => a + l.items.length, 0);
    let len = Math.min(r.len || 20, total);
    [10, 20, 30, 50].filter(x => x <= total).forEach(x => {
      const c = E('button', 'colloc-chip' + (x === len ? ' active' : ''), x + ' câu');
      c.addEventListener('click', () => { len = x; lens.querySelectorAll('.colloc-chip').forEach(y => y.classList.toggle('active', y === c)); });
      lens.appendChild(c);
    });
    card.appendChild(lens);

    card.appendChild(E('div', 'ext-h', 'Cách làm'));
    const modes = E('div', 'colloc-chips ext-lens');
    [[false, '⌨️ Tự viết'], [true, '🧩 Xếp từ']].forEach(([v, lbl]) => {
      const c = E('button', 'colloc-chip' + (exBank === v ? ' active' : ''), lbl);
      c.addEventListener('click', () => { exBank = v; try { localStorage.setItem(BANK_KEY, v ? '1' : '0'); } catch (e) {} modes.querySelectorAll('.colloc-chip').forEach(y => y.classList.toggle('active', y === c)); });
      modes.appendChild(c);
    });
    card.appendChild(modes);

    if (r.runs.length) {
      const hist = E('div', 'ext-hist');
      hist.appendChild(E('div', 'ext-h', `Kỷ lục: ${r.best}% · ${r.runs.length} lần đã làm`));
      const row = E('div', 'ext-hist-row');
      r.runs.slice(-8).forEach(x => {
        const it = E('span', 'ext-hist-it' + (x.pct >= 80 ? ' good' : x.pct >= 50 ? ' mid' : ' low'));
        it.appendChild(E('b', null, x.pct + '%'));
        it.appendChild(E('span', null, `${x.ok}/${x.n} · ${fmtTime(x.sec)}`));
        row.appendChild(it);
      });
      hist.appendChild(row);
      card.appendChild(hist);
    }
    const go = E('button', 'btn-primary ext-go', '▶ Bắt đầu');
    go.addEventListener('click', () => { r.len = len; testSave(); testRun(n, testPick(n, len)); exTop(); });
    card.appendChild(go);
    root.appendChild(card);
  }

  function testRun(n, qs) {
    testStop();
    const L = EX_LEVELS[n - 1];
    const ans = new Array(qs.length).fill(null);   // {ok, typed}
    let pos = 0, sec = 0;
    root.innerHTML = '';
    const back = E('button', 'gr-back', `← Thoát bài kiểm tra`);
    back.addEventListener('click', () => {
      if (ans.some(a => a) && !confirmQuit()) return;
      testStop(); exTest(n); exTop();
    });
    root.appendChild(back);
    // xác nhận thoát bằng chính nút (không dùng hộp thoại của trình duyệt)
    let quitArmed = false;
    function confirmQuit() {
      if (quitArmed) return true;
      quitArmed = true; back.textContent = '⚠️ Bấm lần nữa để thoát (mất kết quả)';
      setTimeout(() => { quitArmed = false; back.textContent = '← Thoát bài kiểm tra'; }, 3000);
      return false;
    }

    const bar = E('div', 'ext-bar');
    const bPos = E('span', 'ext-bar-it');
    const bTime = E('span', 'ext-bar-it');
    const bOk = E('span', 'ext-bar-it ext-bar-ok');
    bar.appendChild(bPos); bar.appendChild(bTime); bar.appendChild(bOk);
    const prog = E('div', 'ext-prog'); const progF = E('span'); prog.appendChild(progF);
    root.appendChild(bar); root.appendChild(prog);
    const holder = E('div', 'ext-holder');
    root.appendChild(holder);
    const sync = () => {
      bPos.textContent = `Câu ${Math.min(pos + 1, qs.length)}/${qs.length}`;
      bTime.textContent = '⏱ ' + fmtTime(sec);
      bOk.textContent = '✓ ' + ans.filter(a => a && a.ok).length;
      progF.style.width = (ans.filter(Boolean).length / qs.length * 100) + '%';
    };
    testTimer = setInterval(() => { if (!document.body.contains(bTime)) { testStop(); return; } sec++; bTime.textContent = '⏱ ' + fmtTime(sec); }, 1000);

    const show = () => {
      holder.innerHTML = '';
      if (pos >= qs.length) { testStop(); testResult(n, qs, ans, sec); return; }
      sync();
      const q = qs[pos], it = q.it;
      const card = E('div', 'tense-card ex-card ext-card');
      const qh = E('div', 'ex-q');
      qh.appendChild(E('span', 'ex-n', String(pos + 1)));
      qh.appendChild(E('div', 'ex-q-text ex-q-vi', it[1]));
      card.appendChild(qh);
      const inputWrap = E('div', 'ex-in');
      const res = E('div', 'ex-res'); res.hidden = true;
      let getTyped = () => '';
      if (exBank) {
        const tokens = it[0].split(/\s+/).filter(Boolean);
        let picked = [];
        const line = E('div', 'ex-line'), chips = E('div', 'ex-chips'), bank = E('div', 'ex-bank');
        const seed = Math.floor(Math.random() * 1e5) + 3;
        const render = () => {
          line.innerHTML = ''; chips.innerHTML = '';
          if (!picked.length) line.appendChild(E('span', 'ex-line-ph', 'Chạm từ bên dưới để xếp câu…'));
          picked.forEach((t, idx) => { const c = E('button', 'ex-chip ex-chip-on', t.w); c.addEventListener('click', () => { if (ans[pos]) return; picked.splice(idx, 1); render(); }); line.appendChild(c); });
          exShuffle(tokens.map((w, idx) => ({ w, idx })), seed).forEach(t => {
            if (picked.some(p => p.idx === t.idx)) return;
            const c = E('button', 'ex-chip', t.w); c.addEventListener('click', () => { if (ans[pos]) return; picked.push(t); render(); }); chips.appendChild(c);
          });
        };
        render();
        bank.appendChild(line); bank.appendChild(chips); inputWrap.appendChild(bank);
        getTyped = () => picked.map(p => p.w).join(' ');
      } else {
        const inp = E('textarea', 'ex-input');
        inp.rows = 2; inp.placeholder = 'Viết câu tiếng Anh…'; inp.setAttribute('aria-label', 'Câu tiếng Anh của bạn');
        inputWrap.appendChild(inp);
        getTyped = () => inp.value;
        inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); ck.click(); } });
        setTimeout(() => { try { inp.focus({ preventScroll: true }); } catch (e) {} }, 50);
      }
      const acts = E('div', 'ex-acts');
      const ck = E('button', 'btn-primary', 'Kiểm tra');
      const skip = E('button', 'btn-ghost', 'Bỏ qua');
      acts.appendChild(ck); acts.appendChild(skip);
      inputWrap.appendChild(acts);
      card.appendChild(inputWrap); card.appendChild(res);
      card.appendChild(E('div', 'ext-from', 'Thuộc bài: ' + q.l.title));
      holder.appendChild(card);

      const next = E('button', 'btn-primary ext-next', pos + 1 < qs.length ? 'Câu tiếp →' : 'Xem kết quả');
      next.addEventListener('click', () => { pos++; show(); exTop(); });
      const grade = (ok, typed, rep) => {
        ans[pos] = { ok, typed };
        if (ok) { exDone.add(key(q.l, q.i)); save(); }
        card.classList.add('ext-done'); card.classList.toggle('ok', ok); card.classList.toggle('bad', !ok);
        acts.hidden = true;
        card.querySelector('.ext-from').classList.add('show');
        res.hidden = false; res.innerHTML = '';
        if (ok) res.appendChild(E('div', 'ex-ok', rep && rep.verdict === 'diff' ? '✓ Đúng, cách diễn đạt khác đáp án mẫu' : '✓ Chính xác!'));
        else res.appendChild(E('div', 'ex-wrong', typed.trim() ? '✗ Chưa đúng. So lại với đáp án:' : '— Bỏ qua. Đáp án:'));
        if (rep && rep.verdict !== 'exact') res.appendChild(smartReport(rep, { compact: true, noTitle: ok }));
        const row = E('div', 'ex-ans-row'), d = E('div', 'ex-ans-en');
        if (ok || !typed.trim()) d.textContent = it[0];
        else exDiff(it[0], typed).forEach(([w, same]) => { d.appendChild(E('span', same ? 'ex-w' : 'ex-w ex-w-miss', w)); d.appendChild(document.createTextNode(' ')); });
        row.appendChild(d); row.appendChild(exPlay(it[0])); res.appendChild(row);
        if (it[2] && it[2].length) res.appendChild(E('div', 'ex-alt', 'Cách khác cũng đúng: ' + it[2].join(' · ')));
        if (!ok && typed.trim()) {
          const ov = E('button', 'btn-ghost ex-ov', 'Mình viết cũng đúng → tính là đúng');
          ov.addEventListener('click', () => {
            ans[pos].ok = true; exDone.add(key(q.l, q.i)); save();
            card.classList.add('ok'); card.classList.remove('bad');
            ov.remove(); res.firstChild.className = 'ex-ok'; res.firstChild.textContent = '✓ Đã tính là đúng';
            sync();
          });
          res.appendChild(ov);
        }
        res.appendChild(next);
        sync();
        setTimeout(() => { try { next.focus({ preventScroll: true }); } catch (e) {} }, 30);
      };
      ck.addEventListener('click', async () => {
        const t = getTyped(); if (!t.trim() || ck.disabled) return;
        if (exOk(t, it) || exBank) return grade(exOk(t, it), t);
        ck.disabled = true; const lbl = ck.textContent; ck.textContent = 'Đang chấm…';
        let r = null; try { r = await smartCheck(t, exAnswers(it)); } catch (e) {}
        ck.disabled = false; ck.textContent = lbl;
        grade(!!(r && r.pass), t, r);
      });
      skip.addEventListener('click', () => grade(false, ''));
    };
    show();
  }

  function testResult(n, qs, ans, sec) {
    const L = EX_LEVELS[n - 1], r = testRec(n);
    const ok = ans.filter(a => a && a.ok).length, pct = Math.round(ok / qs.length * 100);
    const isBest = pct > r.best || (pct === r.best && !r.runs.length);
    if (pct >= r.best) { r.best = pct; r.bestOf = qs.length; }
    r.runs.push({ pct, ok, n: qs.length, sec, at: Date.now() });
    if (r.runs.length > 30) r.runs = r.runs.slice(-30);
    testSave();

    root.innerHTML = '';
    const back = E('button', 'gr-back', `← Bài tập ${L.code}`);
    back.addEventListener('click', () => { exHome(); exTop(); });
    root.appendChild(back);
    const card = E('div', 'tense-card ext-res');
    card.appendChild(E('div', 'ext-res-lv', `Kiểm tra tổng hợp ${L.code}`));
    card.appendChild(E('div', 'ext-big' + (pct >= 80 ? ' good' : pct >= 50 ? ' mid' : ' low'), pct + '%'));
    card.appendChild(E('div', 'ext-res-sub', `${ok}/${qs.length} câu đúng · ${fmtTime(sec)} · trung bình ${Math.round(sec / qs.length)} giây/câu`));
    card.appendChild(E('div', 'ext-res-msg',
      pct === 100 ? `Tuyệt đối! Bạn đã nắm chắc cấp ${L.code}.` :
      pct >= 80 ? `Rất tốt! Ôn lại vài câu sai bên dưới là chắc cấp ${L.code}.` :
      pct >= 50 ? 'Khá ổn. Mở lại các bài có câu sai để ôn rồi làm lại nhé.' :
      'Cấp này còn mới với bạn — học lại các bài bên dưới rồi thử lần nữa.'));
    if (isBest && r.runs.length > 1) card.appendChild(E('div', 'ext-res-best', '🏆 Kỷ lục mới!'));
    const acts = E('div', 'ext-res-acts');
    const again = E('button', 'btn-primary', '↻ Làm bài mới');
    again.addEventListener('click', () => { testRun(n, testPick(n, qs.length)); exTop(); });
    const set = E('button', 'btn-ghost', 'Đổi số câu');
    set.addEventListener('click', () => { exTest(n); exTop(); });
    acts.appendChild(again); acts.appendChild(set);
    card.appendChild(acts);
    root.appendChild(card);

    // câu sai, gom theo bài
    const wrong = qs.map((q, i) => ({ q, a: ans[i] })).filter(x => !x.a || !x.a.ok);
    if (wrong.length) {
      const wc = E('div', 'tense-card ext-wrong');
      wc.appendChild(E('h3', null, `Câu cần ôn · ${wrong.length}`));
      const byLesson = new Map();
      wrong.forEach(x => { if (!byLesson.has(x.q.l.id)) byLesson.set(x.q.l.id, []); byLesson.get(x.q.l.id).push(x); });
      byLesson.forEach(list => {
        const l = list[0].q.l;
        const g = E('div', 'ext-wl');
        const gh = E('div', 'ext-wl-h');
        gh.appendChild(E('b', null, l.title));
        const ob = E('button', 'btn-ghost ext-wl-go', 'Ôn bài này →');
        ob.addEventListener('click', () => { exLesson(l.id); exTop(); });
        gh.appendChild(ob);
        g.appendChild(gh);
        list.forEach(x => {
          const row = E('div', 'ext-wr');
          const t = E('div', 'ext-wr-t');
          t.appendChild(E('div', 'ext-wr-vi', x.q.it[1]));
          if (x.a && x.a.typed && x.a.typed.trim()) t.appendChild(E('div', 'ext-wr-you', 'Bạn viết: ' + x.a.typed));
          t.appendChild(E('div', 'ext-wr-en', x.q.it[0]));
          row.appendChild(t); row.appendChild(exPlay(x.q.it[0]));
          g.appendChild(row);
        });
        wc.appendChild(g);
      });
      root.appendChild(typeof cardFold === 'function' ? cardFold(wc, 'ext-wrong') : wc);
    }
  }

  /* add the sentence count to the hero stats */
  try {
    const hs = document.getElementById('hero-stats');
    if (hs && !hs.querySelector('.ex-stat')) {
      const box = document.createElement('div'); box.className = 'hero-stat ex-stat';
      const num = document.createElement('span'); num.className = 'n';
      num.textContent = EX_LESSONS.reduce((a, l) => a + l.items.length, 0);
      const lab = document.createElement('span'); lab.className = 'l'; lab.textContent = 'câu bài tập';
      box.appendChild(num); box.appendChild(lab); hs.appendChild(box);
    }
  } catch (e) {}

  exHome();
  window.exGoHome = exHome;
  window.exOpenLesson = exLesson;
  window.exOpenTest = exTest;
  window.exNorm = exNorm;
})();
