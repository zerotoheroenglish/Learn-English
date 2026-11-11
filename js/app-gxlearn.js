/* ============================================================
   v183 · HỌC CÔNG THỨC CHỦ ĐỘNG (bản thử: Hiện tại đơn, Hiện tại tiếp diễn, Đơn hay tiếp diễn)
   Thay bảng công thức để đọc bằng 4 bước giúp nhớ lâu:
   ① Khám phá  – xem câu ví dụ tô màu, tự đoán quy tắc rồi mới thấy công thức
   ② Lắp câu   – chạm các mảnh chữ để ghép câu; ghép sai được giải thích ngay
   ③ Tự nhớ lại – công thức có chỗ trống, nghĩ ra rồi lật xem; "Chưa nhớ" → vào Review
   ④ Viết về bạn – tự viết câu về mình, app kiểm tra cách chia động từ
   Bảng công thức đầy đủ vẫn còn, thu gọn ở cuối để tra khi cần.
============================================================ */
(function () {
  const E = (t, c, x) => { const e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; };
  const say = (t, r) => { try { if (typeof speak === 'function' && t) speak(t, r || 0.9); } catch (e) {} };
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const KEY = 'hoc-tieng-anh-gxlearn';
  let st = {}; try { st = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { st = {}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} };
  const ROLE = { S: 'chủ ngữ', A: 'trợ động từ', V: 'động từ', O: 'phần còn lại' };

  /* mảnh chữ "S:She" · "V:work^s" (phần sau ^ là đuôi, tô đỏ) */
  const tok = s => {
    const i = s.indexOf(':'); const r = s.slice(0, i), t = s.slice(i + 1); let [stem, end] = t.split('^'); end = end || '';
    let punct = ''; const m = /([?.!,]+)$/.exec(end); if (m) { punct = m[1]; end = end.slice(0, -punct.length); }
    return { r, stem, end, punct, text: stem + end + punct };
  };
  const sent = s => s.split('|').map(tok);
  const plain = toks => toks.map(t => t.text).join(' ').replace(/\s+([?.!,])/g, '$1');
  function chip(t, cls) {
    const c = E(cls || 'span', 'gxl-c ' + t.r);
    c.appendChild(document.createTextNode(t.stem));
    if (t.end) c.appendChild(E('b', 'gxl-end', t.end));
    if (t.punct) c.appendChild(document.createTextNode(t.punct));
    return c;
  }
  function sentLine(s, vi) {
    const toks = sent(s), row = E('div', 'gxl-sent');
    const line = E('div', 'gxl-toks'); toks.forEach(t => line.appendChild(chip(t)));
    const pl = E('button', 'gxl-play', '▶'); pl.type = 'button'; pl.setAttribute('aria-label', 'Nghe: ' + plain(toks));
    pl.addEventListener('click', () => say(plain(toks)));
    row.appendChild(pl); row.appendChild(line);
    if (vi) row.appendChild(E('div', 'gxl-vi', vi));
    return row;
  }
  function legend() {
    const l = E('div', 'gxl-legend');
    [['S', 'Chủ ngữ'], ['A', 'Trợ động từ'], ['V', 'Động từ']].forEach(([r, n]) => l.appendChild(E('span', 'gxl-c ' + r, n)));
    const e = E('span', 'gxl-c V'); e.appendChild(document.createTextNode('đuôi\u00a0')); e.appendChild(E('b', 'gxl-end', '-s / -ing')); l.appendChild(e);
    return l;
  }

  /* ---------------- dữ liệu ---------------- */
  const D = {
    'present-simple': {
      discover: [
        { ex: [['S:I|V:work|O:in a bank.', 'Tôi làm ở ngân hàng.'], ['S:She|V:work^s|O:in a bank.', 'Cô ấy làm ở ngân hàng.'], ['S:They|V:play|O:football.', 'Họ chơi bóng đá.'], ['S:He|V:play^s|O:football.', 'Anh ấy chơi bóng đá.'], ['S:My mother|V:cook^s|O:dinner.', 'Mẹ tôi nấu bữa tối.']],
          q: 'Nhìn các chữ màu đỏ. Khi nào động từ thêm -s?', opts: ['Khi chủ ngữ là he, she, it hoặc 1 người / 1 vật', 'Khi chủ ngữ là I, you, they', 'Khi câu nói về hôm qua'], ans: 0,
          rule: 'He / She / It (1 người, 1 vật) + V-s/es. Còn I / You / We / They + V giữ nguyên.', fx: 'He/She/It + V-s/es · I/You/We/They + V' },
        { ex: [['S:I|A:don\'t|V:like|O:coffee.', 'Tôi không thích cà phê.'], ['S:She|A:doesn\'t|V:like|O:coffee.', 'Cô ấy không thích cà phê.'], ['S:They|A:don\'t|V:eat|O:meat.', 'Họ không ăn thịt.'], ['S:He|A:doesn\'t|V:eat|O:meat.', 'Anh ấy không ăn thịt.']],
          q: 'Sau doesn\'t, động từ còn đuôi -s không?', opts: ['Không. Đuôi -s đã chuyển vào does, động từ trở về nguyên thể', 'Có, vẫn là likes, eats'], ans: 0,
          rule: 'Phủ định: thêm don\'t / doesn\'t trước động từ. -s chỉ xuất hiện một lần: doesn\'t like, không phải doesn\'t likes.', fx: 'I/You/We/They + don\'t + V · He/She/It + doesn\'t + V' },
        { ex: [['A:Do|S:you|V:live|O:here?', 'Bạn có sống ở đây không?'], ['A:Does|S:she|V:live|O:here?', 'Cô ấy có sống ở đây không?'], ['A:Do|S:they|V:work|O:on Sundays?', 'Họ có làm việc Chủ nhật không?'], ['A:Does|S:he|V:work|O:on Sundays?', 'Anh ấy có làm việc Chủ nhật không?']],
          q: 'Câu hỏi được tạo thế nào?', opts: ['Đặt Do / Does lên đầu, trước chủ ngữ', 'Giữ nguyên câu, chỉ thêm dấu ?', 'Đặt is / are lên đầu'], ans: 0,
          rule: 'Câu hỏi: Do / Does + chủ ngữ + V nguyên thể? Does dùng cho he / she / it.', fx: 'Do + I/you/we/they + V? · Does + he/she/it + V?' }
      ],
      build: [
        { vi: 'Cô ấy làm việc ở ngân hàng.', ans: 'S:She|V:work^s|O:in a bank.', bad: [['V:work', 'Chủ ngữ she là 1 người → động từ thêm -s: works.'], ['A:is', 'Câu đã có động từ thường (work) nên không cần is.']] },
        { vi: 'Tôi uống cà phê mỗi sáng.', ans: 'S:I|V:drink|O:coffee|O:every morning.', bad: [['V:drink^s', 'Chủ ngữ I → động từ giữ nguyên, không thêm -s.']] },
        { vi: 'Anh ấy không ăn thịt.', ans: 'S:He|A:doesn\'t|V:eat|O:meat.', bad: [['A:don\'t', 'He là 1 người → dùng doesn\'t.'], ['V:eat^s', 'Sau doesn\'t, động từ trở về nguyên thể: eat.']] },
        { vi: 'Họ không sống ở Hà Nội.', ans: 'S:They|A:don\'t|V:live|O:in Hanoi.', bad: [['A:doesn\'t', 'They là nhiều người → dùng don\'t.'], ['V:live^s', 'Sau don\'t, động từ giữ nguyên: live.']] },
        { vi: 'Bạn có thích âm nhạc không?', ans: 'A:Do|S:you|V:like|O:music?', bad: [['A:Does', 'Chủ ngữ you → hỏi bằng Do.'], ['A:Are', 'Like là động từ thường → hỏi bằng Do, không dùng Are.']] },
        { vi: 'Mẹ bạn có nấu ăn mỗi ngày không?', ans: 'A:Does|S:your mother|V:cook|O:every day?', bad: [['A:Do', 'Your mother = she → hỏi bằng Does.'], ['V:cook^s', 'Sau Does, động từ trở về nguyên thể: cook.']] }
      ],
      recall: [
        { q: 'Câu khẳng định', ex: 'They work in a bank. · She works in a bank.', lines: [
          ['I/You/We/They + V (nguyên thể)', 'SP V', 'vs ving am is are'],
          ['He/She/It + V-s/es', 'S3 VS', 'ving am is are']] },
        { q: 'Câu phủ định', ex: "I don't like coffee. · He doesn't eat meat.", lines: [
          ["I/You/We/They + don't + V", 'SP DONT V', 'vs doesnt'],
          ["He/She/It + doesn't + V (nguyên thể)", 'S3 DOESNT V', 'vs dont']] },
        { q: 'Câu hỏi (nghi vấn)', ex: 'Do you like music? · Does she live here?', lines: [
          ['Do + I/you/we/they + V?', 'DO SP V', 'vs does'],
          ['Does + he/she/it + V?', 'DOES S3 V', 'vs']] }
      ],
      write: { mode: 'ps', ask: 'Viết 2–3 câu về việc bạn hoặc người nhà làm mỗi ngày.', hint: 'Ví dụ: I get up at six. My mother cooks breakfast. My father doesn\'t drink coffee.' }
    },
    'present-continuous': {
      discover: [
        { ex: [['S:I|A:am|V:read^ing|O:a book.', 'Tôi đang đọc sách.'], ['S:She|A:is|V:read^ing|O:a book.', 'Cô ấy đang đọc sách.'], ['S:They|A:are|V:read^ing|O:a book.', 'Họ đang đọc sách.'], ['S:We|A:are|V:cook^ing|O:dinner.', 'Chúng tôi đang nấu bữa tối.']],
          q: 'Chọn am, is hay are dựa vào đâu?', opts: ['Dựa vào chủ ngữ: I → am, he/she/it → is, you/we/they → are', 'Dựa vào động từ phía sau', 'Chọn cái nào cũng được'], ans: 0,
          rule: 'Am / is / are đi theo chủ ngữ, rồi động từ thêm -ing.', fx: 'I + am + V-ing · He/She/It + is + V-ing · You/We/They + are + V-ing' },
        { ex: [['O:Look!|S:It|A:is|V:rain^ing.', 'Nhìn kìa! Trời đang mưa.'], ['O:Be quiet!|S:The baby|A:is|V:sleep^ing.', 'Im lặng nào! Em bé đang ngủ.'], ['S:I|A:am|V:study^ing|O:now.', 'Bây giờ tôi đang học.']],
          q: 'Các câu này nói về việc gì?', opts: ['Việc đang xảy ra ngay lúc nói', 'Thói quen ngày nào cũng làm', 'Việc đã xong hôm qua'], ans: 0,
          rule: 'Dùng tiếp diễn cho việc đang xảy ra lúc nói. Dấu hiệu: now, at the moment, Look!, Listen!', fx: 'now · at the moment · Look! · Listen! → am / is / are + V-ing' },
        { ex: [['S:She|A:isn\'t|V:work^ing|O:today.', 'Hôm nay cô ấy không làm việc.'], ['A:Are|S:you|V:listen^ing?', 'Bạn có đang nghe không?'], ['A:Is|S:he|V:sleep^ing?', 'Anh ấy đang ngủ à?']],
          q: 'Phủ định và câu hỏi làm thế nào?', opts: ['Thêm not sau am/is/are; câu hỏi đưa am/is/are lên đầu', 'Thêm do / does như hiện tại đơn'], ans: 0,
          rule: 'Không dùng do / does ở thì này. Phủ định: is not (isn\'t) + V-ing. Câu hỏi: Is / Are + chủ ngữ + V-ing?', fx: 'S + am/is/are + not + V-ing · Am/Is/Are + S + V-ing?' }
      ],
      build: [
        { vi: 'Tôi đang đọc sách.', ans: 'S:I|A:am|V:read^ing|O:a book.', bad: [['V:read', 'Sau am cần V-ing: reading.'], ['A:is', 'I đi với am.']] },
        { vi: 'Họ đang chơi bóng đá.', ans: 'S:They|A:are|V:play^ing|O:football.', bad: [['A:is', 'They là nhiều người → are.'], ['V:play', 'Sau are cần V-ing: playing.']] },
        { vi: 'Trời đang mưa.', ans: 'S:It|A:is|V:rain^ing.', bad: [['V:rain^s', 'Đang xảy ra lúc này → is raining, không dùng rains.'], ['A:are', 'It đi với is.']] },
        { vi: 'Lúc này cô ấy không xem TV.', ans: 'S:She|A:isn\'t|V:watch^ing|O:TV|O:now.', bad: [['A:doesn\'t', 'Thì tiếp diễn phủ định bằng isn\'t, không dùng doesn\'t.'], ['V:watch', 'Sau isn\'t cần V-ing: watching.']] },
        { vi: 'Bạn có đang nghe không?', ans: 'A:Are|S:you|V:listen^ing?', bad: [['A:Do', 'Thì tiếp diễn hỏi bằng Are, không dùng Do.'], ['V:listen', 'Cần V-ing: listening.']] },
        { vi: 'Anh ấy đang làm gì vậy?', ans: 'O:What|A:is|S:he|V:do^ing?', bad: [['A:does', 'Hỏi việc đang làm → is … doing.'], ['V:do', 'Cần V-ing: doing.']] }
      ],
      recall: [
        { q: 'Câu khẳng định', ex: 'I am reading. · She is cooking. · They are playing.', lines: [
          ['I + am + V-ing', 'I AM VING', 'do does'],
          ['He/She/It + is + V-ing', 'S3 IS VING', 'do does'],
          ['You/We/They + are + V-ing', 'YWT ARE VING', 'do does']] },
        { q: 'Câu phủ định', ex: "I'm not sleeping. · He isn't working. · They aren't listening.", lines: [
          ['I + am not + V-ing', 'I AMNT VING', 'dont doesnt'],
          ["He/She/It + is not (isn't) + V-ing", 'S3 ISNT VING', 'dont doesnt'],
          ["You/We/They + are not (aren't) + V-ing", 'YWT ARENT VING', 'dont doesnt']] },
        { q: 'Câu hỏi (nghi vấn)', ex: 'Am I talking too fast? · Is he sleeping? · Are you listening?', lines: [
          ['Am + I + V-ing?', 'AMQ I VING', 'do does'],
          ['Is + he/she/it + V-ing?', 'ISQ S3 VING', 'do does'],
          ['Are + you/we/they + V-ing?', 'AREQ YWT VING', 'do does']] }
      ],
      write: { mode: 'pc', ask: 'Nhìn quanh bạn: viết 2–3 câu về việc bạn và mọi người đang làm lúc này.', hint: 'Ví dụ: I am sitting at my desk. My brother is watching TV. It isn\'t raining now.' }
    },
    'simple-vs-continuous': {
      timeline: true,
      discover: [
        { ex: [['S:She|V:drink^s|O:tea|O:every morning.', 'Sáng nào cô ấy cũng uống trà.'], ['S:She|A:is|V:drink^ing|O:tea|O:now.', 'Bây giờ cô ấy đang uống trà.'], ['S:He|V:play^s|O:football|O:on Sundays.', 'Chủ nhật nào anh ấy cũng đá bóng.'], ['S:He|A:is|V:play^ing|O:football|O:at the moment.', 'Lúc này anh ấy đang đá bóng.']],
          q: 'Nhìn các từ cuối câu. Từ nào giúp bạn chọn thì?', opts: ['every morning, on Sundays → đơn; now, at the moment → tiếp diễn', 'Không có dấu hiệu nào, phải đoán'], ans: 0,
          rule: 'Lặp lại, thói quen (every…, usually, on Sundays) → hiện tại đơn. Đang diễn ra (now, at the moment) → hiện tại tiếp diễn.', fx: 'thói quen → V / V-s · đang xảy ra → am/is/are + V-ing' },
        { ex: [['S:I|V:work|O:in a bank.', 'Tôi làm ở ngân hàng (công việc lâu dài).'], ['S:I|A:am|V:work^ing|O:from home|O:this week.', 'Tuần này tôi đang làm ở nhà (tạm thời).'], ['S:They|V:live|O:in Hanoi.', 'Họ sống ở Hà Nội.'], ['S:They|A:are|V:stay^ing|O:with friends|O:this month.', 'Tháng này họ đang ở nhờ nhà bạn.']],
          q: 'Câu tiếp diễn ở đây nói về điều gì?', opts: ['Việc tạm thời, chỉ trong một thời gian ngắn', 'Việc lâu dài, luôn luôn đúng'], ans: 0,
          rule: 'Lâu dài, ổn định → đơn. Tạm thời (this week, this month, these days) → tiếp diễn.', fx: 'lâu dài → đơn · tạm thời → tiếp diễn' },
        { ex: [['S:I|V:know|O:the answer.', 'Tôi biết câu trả lời.'], ['S:I|V:like|O:this song.', 'Tôi thích bài hát này.'], ['S:She|V:want^s|O:a new phone.', 'Cô ấy muốn một chiếc điện thoại mới.']],
          q: 'Các câu này nói về lúc này, sao không dùng -ing?', opts: ['Know, like, want là động từ chỉ suy nghĩ, cảm xúc nên không dùng tiếp diễn', 'Vì câu ngắn quá'], ans: 0,
          rule: 'Động từ trạng thái (know, like, love, want, need, believe, understand, have = sở hữu) luôn dùng thì đơn: I know, không nói I am knowing.', fx: 'know · like · want · need · understand → luôn dùng thì đơn' }
      ],
      build: [
        { vi: 'Chủ nhật nào bố tôi cũng chơi tennis.', ans: 'S:My father|V:play^s|O:tennis|O:every Sunday.', bad: [['V:is playing', 'Every Sunday là thói quen → hiện tại đơn: plays.'], ['V:play', 'My father = he → thêm -s: plays.']] },
        { vi: 'Hôm nay tôi đang đi làm bằng xe buýt.', ans: 'S:I|A:am|V:tak^ing|O:the bus|O:today.', bad: [['V:take', 'Today, việc tạm thời → am taking.'], ['A:do', 'Thì tiếp diễn dùng am, không dùng do.']] },
        { vi: 'Tôi biết câu trả lời.', ans: 'S:I|V:know|O:the answer.', bad: [['V:am knowing', 'Know là động từ trạng thái → luôn dùng thì đơn: I know.']] },
        { vi: 'Nhìn kìa! Họ đang nhảy.', ans: 'O:Look!|S:They|A:are|V:danc^ing.', bad: [['V:dance', 'Look! → việc đang xảy ra → are dancing.']] },
        { vi: 'Cô ấy không thích mèo.', ans: 'S:She|A:doesn\'t|V:like|O:cats.', bad: [['A:isn\'t', 'Like là động từ trạng thái → doesn\'t like, không dùng isn\'t liking.'], ['V:lik^ing', 'Like không dùng dạng -ing ở đây.']] }
      ],
      recall: [
        { q: 'Thói quen, sự thật (every day, usually) — viết công thức câu khẳng định', ex: 'They drink tea every morning. · She drinks tea every morning.', lines: [
          ['I/You/We/They + V (nguyên thể)', 'SP V', 'vs ving am is are'],
          ['He/She/It + V-s/es', 'S3 VS', 'ving am is are']] },
        { q: 'Việc đang xảy ra (now, Look!) — viết công thức câu khẳng định', ex: 'I am reading. · He is playing football now. · They are dancing.', lines: [
          ['I + am + V-ing', 'I AM VING', 'do does vs'],
          ['He/She/It + is + V-ing', 'S3 IS VING', 'do does vs'],
          ['You/We/They + are + V-ing', 'YWT ARE VING', 'do does vs']] },
        { q: 'Động từ trạng thái (know, like, want) — dùng thì đơn, viết công thức câu khẳng định', ex: 'I know the answer. · She likes this song.', lines: [
          ['I/You/We/They + V (nguyên thể)', 'SP V', 'vs ving am is are'],
          ['He/She/It + V-s/es (không thêm -ing)', 'S3 VS', 'ving am is are']] }
      ],
      write: { mode: 'svc', ask: 'Viết 1 câu về thói quen của bạn và 1 câu về việc bạn đang làm lúc này.', hint: 'Ví dụ: I usually drink tea in the morning. Right now I am drinking coffee.' }
    }
  };

  /* v188 · mở rộng cho các thì còn lại */
  const ALLW = 'I/You/He/She/It/We/They';
  Object.assign(D, {
    'past-be': {
      discover: [
        { ex: [['S:I|A:was|O:tired|O:yesterday.', 'Hôm qua tôi mệt.'], ['S:She|A:was|O:at home.', 'Cô ấy ở nhà.'], ['S:They|A:were|O:at home.', 'Họ ở nhà.'], ['S:We|A:were|O:very happy.', 'Chúng tôi rất vui.']],
          q: 'Khi nào dùng was, khi nào dùng were?', opts: ['I, he, she, it → was; you, we, they → were', 'Câu dài dùng were, câu ngắn dùng was', 'Chọn cái nào cũng được'], ans: 0,
          rule: 'I / He / She / It + was. You / We / They + were.', fx: 'I/He/She/It + was · You/We/They + were' },
        { ex: [['S:He|A:wasn\'t|O:late.', 'Anh ấy không đến muộn.'], ['S:You|A:weren\'t|O:at school.', 'Bạn không ở trường.'], ['A:Was|S:it|O:cold?', 'Trời có lạnh không?'], ['A:Were|S:they|O:hungry?', 'Họ có đói không?']],
          q: 'Phủ định và câu hỏi làm thế nào?', opts: ['Thêm not sau was / were; câu hỏi đưa was / were lên đầu', 'Dùng didn\'t như động từ thường'], ans: 0,
          rule: 'Phủ định: wasn\'t / weren\'t. Câu hỏi: Was / Were + chủ ngữ …? Không dùng did với to be.', fx: 'wasn\'t / weren\'t · Was / Were + S …?' }
      ],
      build: [
        { vi: 'Hôm qua tôi mệt.', ans: 'S:I|A:was|O:tired|O:yesterday.', bad: [['A:were', 'I đi với was.'], ['A:am', 'Yesterday là quá khứ → was.']] },
        { vi: 'Tối qua họ ở nhà.', ans: 'S:They|A:were|O:at home|O:last night.', bad: [['A:was', 'They đi với were.']] },
        { vi: 'Bộ phim không hay.', ans: 'S:The film|A:wasn\'t|O:good.', bad: [['A:weren\'t', 'The film = it → wasn\'t.'], ['A:didn\'t', 'Câu có to be thì phủ định bằng wasn\'t, không dùng didn\'t.']] },
        { vi: 'Hôm qua bạn có ở trường không?', ans: 'A:Were|S:you|O:at school|O:yesterday?', bad: [['A:Was', 'You đi với were.'], ['A:Did', 'Câu có to be thì hỏi bằng Were, không dùng Did.']] },
        { vi: 'Chúng tôi đã rất vui.', ans: 'S:We|A:were|O:very happy.', bad: [['A:was', 'We đi với were.']] }
      ],
      recall: [
        { q: 'Câu khẳng định', ex: 'I was tired. · They were at home.', lines: [['I/He/She/It + was + …', 'IHSI WAS', 'were'], ['You/We/They + were + …', 'YWT WERE', 'was']] },
        { q: 'Câu phủ định', ex: "He wasn't late. · You weren't at school.", lines: [["I/He/She/It + wasn't + …", 'IHSI WASNT', 'werent didnt'], ["You/We/They + weren't + …", 'YWT WERENT', 'wasnt didnt']] },
        { q: 'Câu hỏi (nghi vấn)', ex: 'Was it cold? · Were they hungry?', lines: [['Was + I/he/she/it + …?', 'WASQ IHSI', 'did'], ['Were + you/we/they + …?', 'WEREQ YWT', 'did']] }
      ]
    },
    'past-simple': {
      discover: [
        { ex: [['S:I|V:visit^ed|O:my grandparents|O:last week.', 'Tuần trước tôi đã thăm ông bà.'], ['S:She|V:play^ed|O:tennis|O:yesterday.', 'Hôm qua cô ấy chơi tennis.'], ['S:They|V:went|O:to Da Lat|O:in 2023.', 'Năm 2023 họ đi Đà Lạt.'], ['S:He|V:bought|O:a new phone.', 'Anh ấy đã mua điện thoại mới.']],
          q: 'Động từ ở quá khứ đơn có đổi theo chủ ngữ không?', opts: ['Không. Mọi chủ ngữ đều dùng V2/V-ed (played, went, bought)', 'Có, he / she / it thêm -s'], ans: 0,
          rule: 'Mọi chủ ngữ + V2/V-ed. Động từ có quy tắc thêm -ed (played), động từ bất quy tắc dùng cột 2 (went, bought).', fx: ALLW + ' + V2/V-ed' },
        { ex: [['S:I|A:didn\'t|V:go|O:to school.', 'Tôi đã không đi học.'], ['S:She|A:didn\'t|V:like|O:the film.', 'Cô ấy không thích bộ phim.'], ['A:Did|S:you|V:watch|O:the match?', 'Bạn có xem trận đấu không?'], ['A:Did|S:he|V:call|O:you?', 'Anh ấy có gọi cho bạn không?']],
          q: 'Sau didn\'t / Did, động từ ở dạng nào?', opts: ['Nguyên thể: didn\'t go, Did you watch', 'Vẫn ở quá khứ: didn\'t went'], ans: 0,
          rule: 'Phủ định: didn\'t + V nguyên thể. Câu hỏi: Did + chủ ngữ + V nguyên thể? Dạng quá khứ đã nằm trong did.', fx: 'S + didn\'t + V · Did + S + V?' }
      ],
      build: [
        { vi: 'Cuối tuần trước tôi đã thăm ông bà.', ans: 'S:I|V:visit^ed|O:my grandparents|O:last weekend.', bad: [['V:visit', 'Last weekend là quá khứ → visited.']] },
        { vi: 'Cô ấy đã mua một chiếc điện thoại mới.', ans: 'S:She|V:bought|O:a new phone.', bad: [['V:buy^s', 'Việc đã xảy ra → bought (cột 2 của buy).'], ['V:buy^ed', 'Buy là động từ bất quy tắc: bought.']] },
        { vi: 'Hôm qua họ không đi làm.', ans: 'S:They|A:didn\'t|V:go|O:to work|O:yesterday.', bad: [['V:went', 'Sau didn\'t, động từ trở về nguyên thể: go.'], ['A:don\'t', 'Yesterday là quá khứ → didn\'t.']] },
        { vi: 'Tối qua bạn có xem trận đấu không?', ans: 'A:Did|S:you|V:watch|O:the match|O:last night?', bad: [['V:watch^ed', 'Sau Did, động từ nguyên thể: watch.'], ['A:Do', 'Last night là quá khứ → Did.']] },
        { vi: 'Anh ấy đã không gọi cho tôi.', ans: 'S:He|A:didn\'t|V:call|O:me.', bad: [['A:doesn\'t', 'Việc trong quá khứ → didn\'t.'], ['V:call^ed', 'Sau didn\'t, động từ nguyên thể: call.']] }
      ],
      recall: [
        { q: 'Câu khẳng định', ex: 'I visited my grandparents. · She bought a new phone.', lines: [[ALLW + ' + V2/V-ed', 'ALL V2', 'did vs v ving']] },
        { q: 'Câu phủ định', ex: "They didn't go to work.", lines: [[ALLW + " + didn't + V (nguyên thể)", 'ALL DIDNT V', 'v2 ved vs']] },
        { q: 'Câu hỏi (nghi vấn)', ex: 'Did you watch the match?', lines: [['Did + I/you/he/she/it/we/they + V?', 'DIDQ ALL V', 'v2 ved vs']] }
      ]
    },
    'past-continuous': {
      discover: [
        { ex: [['S:I|A:was|V:cook^ing|O:at 7 p.m.', 'Lúc 7 giờ tối tôi đang nấu ăn.'], ['S:She|A:was|V:read^ing|O:a book.', 'Cô ấy đang đọc sách.'], ['S:We|A:were|V:watch^ing|O:TV.', 'Chúng tôi đang xem TV.'], ['S:They|A:were|V:sleep^ing.', 'Họ đang ngủ.']],
          q: 'Chọn was hay were dựa vào đâu?', opts: ['Dựa vào chủ ngữ: I / he / she / it → was; you / we / they → were', 'Dựa vào động từ phía sau'], ans: 0,
          rule: 'Quá khứ tiếp diễn = was / were + V-ing. Chọn was hay were giống quá khứ của to be.', fx: 'I/He/She/It + was + V-ing · You/We/They + were + V-ing' },
        { ex: [['S:I|A:was|V:cook^ing|O:when you called.', 'Tôi đang nấu ăn thì bạn gọi.'], ['S:She|A:was|V:read^ing|O:while he was sleeping.', 'Cô ấy đọc sách trong khi anh ấy ngủ.']],
          q: 'Câu đầu: việc nào đang diễn ra, việc nào xen vào?', opts: ['Nấu ăn đang diễn ra (was cooking), cuộc gọi xen vào (called, quá khứ đơn)', 'Cả hai việc đều đang diễn ra'], ans: 0,
          rule: 'Việc đang diễn ra trong quá khứ → was / were + V-ing. Việc ngắn xen vào → quá khứ đơn (when). Hai việc song song → while.', fx: 'S + was/were + V-ing + when + S + V2' }
      ],
      build: [
        { vi: 'Lúc 9 giờ tối qua chúng tôi đang xem TV.', ans: 'O:At 9 p.m. last night,|S:we|A:were|V:watch^ing|O:TV.', bad: [['A:was', 'We đi với were.'], ['V:watch^ed', 'Đang diễn ra tại một thời điểm → were watching.']] },
        { vi: 'Tôi đang nấu ăn thì bạn gọi.', ans: 'S:I|A:was|V:cook^ing|O:when you called.', bad: [['V:cook^ed', 'Việc đang diễn ra → was cooking.'], ['A:were', 'I đi với was.']] },
        { vi: 'Lúc đó cô ấy không ngủ.', ans: 'S:She|A:wasn\'t|V:sleep^ing|O:at that time.', bad: [['A:didn\'t', 'Quá khứ tiếp diễn phủ định bằng wasn\'t.'], ['A:weren\'t', 'She đi với wasn\'t.']] },
        { vi: 'Lúc đó họ có đang làm việc không?', ans: 'A:Were|S:they|V:work^ing|O:at that time?', bad: [['A:Did', 'Quá khứ tiếp diễn hỏi bằng Were.'], ['V:work', 'Cần V-ing: working.']] },
        { vi: 'Anh ấy đang chạy thì trời đổ mưa.', ans: 'S:He|A:was|V:runn^ing|O:when it started to rain.', bad: [['A:is', 'Câu nói về quá khứ → was running.']] }
      ],
      recall: [
        { q: 'Câu khẳng định', ex: 'I was cooking. · They were sleeping.', lines: [['I/He/She/It + was + V-ing', 'IHSI WAS VING', 'did were'], ['You/We/They + were + V-ing', 'YWT WERE VING', 'did was']] },
        { q: 'Câu phủ định', ex: "She wasn't sleeping. · We weren't listening.", lines: [["I/He/She/It + wasn't + V-ing", 'IHSI WASNT VING', 'didnt werent'], ["You/We/They + weren't + V-ing", 'YWT WERENT VING', 'didnt wasnt']] },
        { q: 'Câu hỏi (nghi vấn)', ex: 'Was he running? · Were they working?', lines: [['Was + I/he/she/it + V-ing?', 'WASQ IHSI VING', 'did'], ['Were + you/we/they + V-ing?', 'WEREQ YWT VING', 'did']] }
      ]
    },
    'going-to': {
      discover: [
        { ex: [['S:I|A:am going to|V:study|O:abroad|O:next year.', 'Năm sau tôi định đi du học.'], ['S:She|A:is going to|V:buy|O:a car.', 'Cô ấy định mua ô tô.'], ['S:They|A:are going to|V:visit|O:us|O:tomorrow.', 'Ngày mai họ sẽ đến thăm chúng tôi.']],
          q: 'Sau going to, động từ ở dạng nào?', opts: ['Nguyên thể: going to study, going to buy', 'Thêm -ing: going to studying'], ans: 0,
          rule: 'am / is / are + going to + V nguyên thể. Chọn am / is / are theo chủ ngữ.', fx: 'I + am going to + V · He/She/It + is going to + V · You/We/They + are going to + V' },
        { ex: [['O:Look at those clouds!|S:It|A:is going to|V:rain.', 'Nhìn mây kìa! Trời sắp mưa.'], ['S:I|A:am not going to|V:watch|O:TV|O:tonight.', 'Tối nay tôi sẽ không xem TV.'], ['A:Are|S:you|A:going to|V:call|O:her?', 'Bạn có định gọi cho cô ấy không?']],
          q: 'Câu hỏi được tạo thế nào?', opts: ['Đưa am / is / are lên đầu: Are you going to call?', 'Dùng Do: Do you going to call?'], ans: 0,
          rule: 'Phủ định: am / is / are + not + going to + V. Câu hỏi: Am / Is / Are + chủ ngữ + going to + V? Còn dùng để dự đoán khi thấy dấu hiệu (mây đen → sắp mưa).', fx: 'S + am/is/are + not + going to + V · Am/Is/Are + S + going to + V?' }
      ],
      build: [
        { vi: 'Năm sau tôi định đi du học.', ans: 'S:I|A:am going to|V:study|O:abroad|O:next year.', bad: [['V:study^ing', 'Sau going to dùng V nguyên thể: study.'], ['A:is going to', 'I đi với am.']] },
        { vi: 'Nhìn mây kìa! Trời sắp mưa.', ans: 'O:Look at the clouds!|S:It|A:is going to|V:rain.', bad: [['A:are going to', 'It đi với is.']] },
        { vi: 'Tối nay họ sẽ không ra ngoài.', ans: 'S:They|A:aren\'t going to|V:go out|O:tonight.', bad: [['A:isn\'t going to', 'They đi với aren\'t.'], ['V:goes out', 'Sau going to dùng V nguyên thể: go out.']] },
        { vi: 'Bạn có định gọi cho cô ấy không?', ans: 'A:Are|S:you|A:going to|V:call|O:her?', bad: [['A:Do', 'Be going to hỏi bằng Are, không dùng Do.']] },
        { vi: 'Anh ấy định mua một chiếc ô tô mới.', ans: 'S:He|A:is going to|V:buy|O:a new car.', bad: [['V:buy^s', 'Sau going to dùng V nguyên thể: buy.'], ['A:are going to', 'He đi với is.']] }
      ],
      recall: [
        { q: 'Câu khẳng định', ex: "I'm going to study abroad. · It's going to rain. · They're going to visit us.", lines: [['I + am going to + V', 'I AM GOINGTO V', 'vs ving'], ['He/She/It + is going to + V', 'S3 IS GOINGTO V', 'vs ving'], ['You/We/They + are going to + V', 'YWT ARE GOINGTO V', 'vs ving']] },
        { q: 'Câu phủ định', ex: "I'm not going to watch TV. · They aren't going to go out.", lines: [['I + am not going to + V', 'I AMNT GOINGTO V', 'vs ving dont'], ["He/She/It + isn't going to + V", 'S3 ISNT GOINGTO V', 'vs ving doesnt'], ["You/We/They + aren't going to + V", 'YWT ARENT GOINGTO V', 'vs ving dont']] },
        { q: 'Câu hỏi (nghi vấn)', ex: 'Is he going to buy a car? · Are you going to call her?', lines: [['Am + I + going to + V?', 'AMQ I GOINGTO V', 'do does'], ['Is + he/she/it + going to + V?', 'ISQ S3 GOINGTO V', 'do does'], ['Are + you/we/they + going to + V?', 'AREQ YWT GOINGTO V', 'do does']] }
      ]
    },
    'future-simple': {
      discover: [
        { ex: [['S:I|A:will|V:help|O:you.', 'Tôi sẽ giúp bạn.'], ['S:She|A:will|V:call|O:you|O:tomorrow.', 'Ngày mai cô ấy sẽ gọi cho bạn.'], ['S:They|A:will|V:be|O:here|O:soon.', 'Họ sẽ sớm đến đây.'], ['S:It|A:will|V:rain|O:tomorrow.', 'Ngày mai trời sẽ mưa.']],
          q: 'Will có đổi theo chủ ngữ không? Động từ sau will ở dạng nào?', opts: ['Will không đổi; sau will là V nguyên thể', 'He / she / it dùng wills', 'Sau will thêm -s'], ans: 0,
          rule: 'Mọi chủ ngữ + will + V nguyên thể. Dùng cho quyết định ngay lúc nói, lời hứa, dự đoán.', fx: ALLW + ' + will + V' },
        { ex: [['S:I|A:won\'t|V:tell|O:anyone.', 'Tôi sẽ không nói với ai.'], ['S:He|A:won\'t|V:come.', 'Anh ấy sẽ không đến.'], ['A:Will|S:you|V:help|O:me?', 'Bạn sẽ giúp tôi chứ?']],
          q: 'Phủ định và câu hỏi của will?', opts: ['won\'t (= will not) + V; câu hỏi đưa Will lên đầu', 'don\'t will + V'], ans: 0,
          rule: 'Phủ định: will not = won\'t + V. Câu hỏi: Will + chủ ngữ + V?', fx: 'S + won\'t + V · Will + S + V?' }
      ],
      build: [
        { vi: 'Tôi sẽ giúp bạn.', ans: 'S:I|A:will|V:help|O:you.', bad: [['V:help^s', 'Sau will dùng V nguyên thể.'], ['A:am', 'Không cần am: I will help.']] },
        { vi: 'Ngày mai cô ấy sẽ gọi cho bạn.', ans: 'S:She|A:will|V:call|O:you|O:tomorrow.', bad: [['V:call^s', 'Sau will, động từ không thêm -s.']] },
        { vi: 'Tôi sẽ không nói với ai.', ans: 'S:I|A:won\'t|V:tell|O:anyone.', bad: [['A:don\'t', 'Tương lai phủ định bằng won\'t.'], ['V:tell^ing', 'Sau won\'t dùng V nguyên thể.']] },
        { vi: 'Bạn sẽ đến bữa tiệc chứ?', ans: 'A:Will|S:you|V:come|O:to the party?', bad: [['A:Do', 'Hỏi về tương lai bằng Will.'], ['V:com^ing', 'Sau will dùng V nguyên thể: come.']] },
        { vi: 'Có lẽ ngày mai trời sẽ mưa.', ans: 'O:Maybe|S:it|A:will|V:rain|O:tomorrow.', bad: [['V:rain^s', 'Sau will dùng V nguyên thể: rain.']] }
      ],
      recall: [
        { q: 'Câu khẳng định', ex: 'I will help you.', lines: [[ALLW + ' + will + V', 'ALL WILL V', 'vs ving']] },
        { q: 'Câu phủ định', ex: "I won't tell anyone.", lines: [[ALLW + " + won't (will not) + V", 'ALL WONT V', 'vs ving']] },
        { q: 'Câu hỏi (nghi vấn)', ex: 'Will you help me?', lines: [['Will + I/you/he/she/it/we/they + V?', 'WILLQ ALL V', 'vs ving']] }
      ]
    },
    'present-perfect': {
      discover: [
        { ex: [['S:I|A:have|V:finish^ed|O:my homework.', 'Tôi đã làm xong bài tập.'], ['S:They|A:have|V:seen|O:this film.', 'Họ đã xem phim này.'], ['S:She|A:has|V:lost|O:her keys.', 'Cô ấy đã làm mất chìa khóa.'], ['S:He|A:has|V:visit^ed|O:Japan|O:twice.', 'Anh ấy đã đến Nhật hai lần.']],
          q: 'Khi nào dùng have, khi nào dùng has?', opts: ['I / you / we / they → have; he / she / it → has', 'Have cho quá khứ, has cho hiện tại'], ans: 0,
          rule: 'have / has + V3 (quá khứ phân từ). Has dùng cho he / she / it. V3: thêm -ed (finished) hoặc cột 3 (seen, lost).', fx: 'I/You/We/They + have + V3 · He/She/It + has + V3' },
        { ex: [['S:I|A:haven\'t|V:eaten|O:yet.', 'Tôi chưa ăn.'], ['S:She|A:hasn\'t|V:call^ed|O:me.', 'Cô ấy chưa gọi cho tôi.'], ['A:Have|S:you|O:ever|V:been|O:to Hue?', 'Bạn đã bao giờ đến Huế chưa?'], ['A:Has|S:he|V:finish^ed?', 'Anh ấy xong chưa?']],
          q: 'Phủ định và câu hỏi làm thế nào?', opts: ['Thêm not sau have / has; câu hỏi đưa Have / Has lên đầu', 'Dùng didn\'t + V3'], ans: 0,
          rule: 'Phủ định: haven\'t / hasn\'t + V3. Câu hỏi: Have / Has + chủ ngữ + V3? Hay đi với ever, never, already, yet, since, for.', fx: 'haven\'t/hasn\'t + V3 · Have/Has + S + V3?' }
      ],
      build: [
        { vi: 'Tôi đã làm xong bài tập.', ans: 'S:I|A:have|V:finish^ed|O:my homework.', bad: [['A:has', 'I đi với have.'], ['V:finish', 'Sau have cần V3: finished.']] },
        { vi: 'Cô ấy đã làm mất chìa khóa.', ans: 'S:She|A:has|V:lost|O:her keys.', bad: [['A:have', 'She đi với has.'], ['V:lose', 'Cần V3 của lose: lost.']] },
        { vi: 'Tôi chưa ăn.', ans: 'S:I|A:haven\'t|V:eaten|O:yet.', bad: [['A:didn\'t', 'Có yet → hiện tại hoàn thành: haven\'t eaten.'], ['V:ate', 'Ate là V2; sau have cần V3: eaten.']] },
        { vi: 'Bạn đã bao giờ đến Huế chưa?', ans: 'A:Have|S:you|O:ever|V:been|O:to Hue?', bad: [['A:Did', 'Ever → hiện tại hoàn thành: Have you ever been…?'], ['V:was', 'Sau have cần V3: been.']] },
        { vi: 'Họ đã sống ở đây được 5 năm.', ans: 'S:They|A:have|V:liv^ed|O:here|O:for five years.', bad: [['A:has', 'They đi với have.'], ['V:live', 'Cần V3: lived.']] }
      ],
      recall: [
        { q: 'Câu khẳng định', ex: 'I have finished. · She has lost her keys.', lines: [['I/You/We/They + have + V3', 'SP HAVE V3', 'has did'], ['He/She/It + has + V3', 'S3 HAS V3', 'have did']] },
        { q: 'Câu phủ định', ex: "I haven't eaten yet. · She hasn't called me.", lines: [["I/You/We/They + haven't + V3", 'SP HAVENT V3', 'hasnt didnt'], ["He/She/It + hasn't + V3", 'S3 HASNT V3', 'havent didnt']] },
        { q: 'Câu hỏi (nghi vấn)', ex: 'Have you ever been to Hue? · Has he finished?', lines: [['Have + I/you/we/they + V3?', 'HAVEQ SP V3', 'did'], ['Has + he/she/it + V3?', 'HASQ S3 V3', 'did']] }
      ]
    },
    'present-perfect-continuous': {
      discover: [
        { ex: [['S:I|A:have been|V:wait^ing|O:for an hour.', 'Tôi đã đợi một tiếng rồi.'], ['S:She|A:has been|V:learn^ing|O:English|O:since 2020.', 'Cô ấy học tiếng Anh từ năm 2020.'], ['S:They|A:have been|V:work^ing|O:all day.', 'Họ đã làm việc cả ngày.']],
          q: 'Thì này ghép từ những phần nào?', opts: ['have / has + been + V-ing', 'have / has + V-ing', 'was + been + V-ing'], ans: 0,
          rule: 'have / has + been + V-ing: việc bắt đầu trong quá khứ và kéo dài đến bây giờ (nhấn mạnh quá trình). Hay đi với for, since, all day.', fx: 'I/You/We/They + have been + V-ing · He/She/It + has been + V-ing' },
        { ex: [['S:He|A:hasn\'t been|V:sleep^ing|O:well.', 'Anh ấy ngủ không ngon (dạo này).'], ['A:Have|S:you|A:been|V:wait^ing|O:long?', 'Bạn đợi lâu chưa?'], ['A:Has|S:she|A:been|V:cry^ing?', 'Cô ấy vừa khóc à?']],
          q: 'Câu hỏi đặt gì lên đầu?', opts: ['Have / Has, rồi chủ ngữ, rồi been + V-ing', 'Been lên đầu'], ans: 0,
          rule: 'Phủ định: haven\'t / hasn\'t + been + V-ing. Câu hỏi: Have / Has + chủ ngữ + been + V-ing?', fx: 'haven\'t/hasn\'t been + V-ing · Have/Has + S + been + V-ing?' }
      ],
      build: [
        { vi: 'Tôi đã đợi một tiếng rồi.', ans: 'S:I|A:have been|V:wait^ing|O:for an hour.', bad: [['A:has been', 'I đi với have.'], ['V:wait^ed', 'Nhấn mạnh quá trình → been waiting.']] },
        { vi: 'Cô ấy học tiếng Anh từ năm 2020.', ans: 'S:She|A:has been|V:learn^ing|O:English|O:since 2020.', bad: [['A:have been', 'She đi với has.'], ['A:is', 'Kéo dài từ 2020 đến nay → has been learning.']] },
        { vi: 'Dạo này anh ấy ngủ không ngon.', ans: 'S:He|A:hasn\'t been|V:sleep^ing|O:well|O:lately.', bad: [['A:didn\'t', 'Kéo dài đến nay → hasn\'t been sleeping.']] },
        { vi: 'Bạn đợi lâu chưa?', ans: 'A:Have|S:you|A:been|V:wait^ing|O:long?', bad: [['A:Are', 'Hỏi việc kéo dài đến nay → Have you been waiting?']] },
        { vi: 'Họ đã làm việc cả ngày.', ans: 'S:They|A:have been|V:work^ing|O:all day.', bad: [['A:has been', 'They đi với have.'], ['V:work', 'Cần V-ing: working.']] }
      ],
      recall: [
        { q: 'Câu khẳng định', ex: 'I have been waiting. · She has been learning English.', lines: [['I/You/We/They + have been + V-ing', 'SP HAVE BEEN VING', 'has v3'], ['He/She/It + has been + V-ing', 'S3 HAS BEEN VING', 'have v3']] },
        { q: 'Câu phủ định', ex: "He hasn't been sleeping well.", lines: [["I/You/We/They + haven't been + V-ing", 'SP HAVENT BEEN VING', 'hasnt'], ["He/She/It + hasn't been + V-ing", 'S3 HASNT BEEN VING', 'havent']] },
        { q: 'Câu hỏi (nghi vấn)', ex: 'Have you been waiting long?', lines: [['Have + I/you/we/they + been + V-ing?', 'HAVEQ SP BEEN VING', ''], ['Has + he/she/it + been + V-ing?', 'HASQ S3 BEEN VING', '']] }
      ]
    },
    'past-perfect': {
      discover: [
        { ex: [['O:When I arrived,|S:the film|A:had|V:start^ed.', 'Khi tôi đến, phim đã bắt đầu.'], ['S:She|A:had|V:left|O:before I called.', 'Cô ấy đã đi trước khi tôi gọi.'], ['S:They|A:had|V:eaten|O:before the party.', 'Họ đã ăn trước bữa tiệc.']],
          q: 'Had dùng cho chủ ngữ nào?', opts: ['Mọi chủ ngữ đều dùng had', 'Chỉ he / she / it'], ans: 0,
          rule: 'Mọi chủ ngữ + had + V3: việc xảy ra TRƯỚC một việc khác trong quá khứ.', fx: ALLW + ' + had + V3' },
        { ex: [['S:I|A:hadn\'t|V:seen|O:it|O:before.', 'Trước đó tôi chưa từng thấy nó.'], ['A:Had|S:you|V:finish^ed|O:before he came?', 'Bạn đã xong trước khi anh ấy đến chưa?']],
          q: 'Phủ định và câu hỏi làm thế nào?', opts: ['hadn\'t + V3; câu hỏi đưa Had lên đầu', 'didn\'t had + V3'], ans: 0,
          rule: 'Phủ định: hadn\'t + V3. Câu hỏi: Had + chủ ngữ + V3?', fx: 'S + hadn\'t + V3 · Had + S + V3?' }
      ],
      build: [
        { vi: 'Khi tôi đến, bộ phim đã bắt đầu.', ans: 'O:When I arrived,|S:the film|A:had|V:start^ed.', bad: [['A:has', 'Việc xảy ra trước một việc quá khứ → had started.'], ['V:start', 'Sau had cần V3: started.']] },
        { vi: 'Cô ấy đã rời đi trước khi tôi gọi.', ans: 'S:She|A:had|V:left|O:before I called.', bad: [['V:leave', 'Sau had cần V3: left.']] },
        { vi: 'Trước đó tôi chưa từng thấy nó.', ans: 'S:I|A:hadn\'t|V:seen|O:it|O:before.', bad: [['V:saw', 'Saw là V2; sau had cần V3: seen.'], ['A:didn\'t', 'Việc trước một mốc quá khứ → hadn\'t seen.']] },
        { vi: 'Bạn đã làm xong trước khi anh ấy đến chưa?', ans: 'A:Had|S:you|V:finish^ed|O:before he came?', bad: [['A:Did', 'Việc trước một mốc quá khứ → Had you finished?']] },
        { vi: 'Họ đã ăn trước bữa tiệc.', ans: 'S:They|A:had|V:eaten|O:before the party.', bad: [['V:ate', 'Sau had cần V3: eaten.']] }
      ],
      recall: [
        { q: 'Câu khẳng định', ex: 'The film had started.', lines: [[ALLW + ' + had + V3', 'ALL HAD V3', 'v ving has have']] },
        { q: 'Câu phủ định', ex: "I hadn't seen it before.", lines: [[ALLW + " + hadn't + V3", 'ALL HADNT V3', 'didnt v ving']] },
        { q: 'Câu hỏi (nghi vấn)', ex: 'Had you finished?', lines: [['Had + I/you/he/she/it/we/they + V3?', 'HADQ ALL V3', 'did v ving']] }
      ]
    },
    'future-continuous': {
      discover: [
        { ex: [['O:At 8 p.m. tomorrow,|S:I|A:will be|V:work^ing.', 'Lúc 8 giờ tối mai tôi sẽ đang làm việc.'], ['S:She|A:will be|V:fly^ing|O:to Paris|O:this time tomorrow.', 'Giờ này ngày mai cô ấy sẽ đang bay đến Paris.'], ['S:They|A:will be|V:sleep^ing|O:then.', 'Lúc đó họ sẽ đang ngủ.']],
          q: 'Thì này ghép từ những phần nào?', opts: ['will + be + V-ing (mọi chủ ngữ)', 'will + V-ing'], ans: 0,
          rule: 'Mọi chủ ngữ + will be + V-ing: việc sẽ đang diễn ra tại một thời điểm trong tương lai.', fx: ALLW + ' + will be + V-ing' },
        { ex: [['S:I|A:won\'t be|V:us^ing|O:the car.', 'Tôi sẽ không dùng xe.'], ['A:Will|S:you|A:be|V:com^ing|O:tonight?', 'Tối nay bạn có đến không?']],
          q: 'Câu hỏi đặt gì lên đầu?', opts: ['Will, rồi chủ ngữ, rồi be + V-ing', 'Be lên đầu'], ans: 0,
          rule: 'Phủ định: won\'t be + V-ing. Câu hỏi: Will + chủ ngữ + be + V-ing?', fx: 'S + won\'t be + V-ing · Will + S + be + V-ing?' }
      ],
      build: [
        { vi: 'Lúc 8 giờ tối mai tôi sẽ đang làm việc.', ans: 'O:At 8 p.m. tomorrow,|S:I|A:will be|V:work^ing.', bad: [['A:will', 'Thiếu be: will be working.'], ['A:am', 'Thời điểm tương lai → will be.']] },
        { vi: 'Giờ này ngày mai cô ấy sẽ đang bay đến Paris.', ans: 'S:She|A:will be|V:fly^ing|O:to Paris|O:this time tomorrow.', bad: [['V:fly', 'Cần V-ing: flying.']] },
        { vi: 'Tối nay tôi sẽ không dùng xe.', ans: 'S:I|A:won\'t be|V:us^ing|O:the car|O:tonight.', bad: [['A:don\'t be', 'Phủ định tương lai: won\'t be.']] },
        { vi: 'Tối nay bạn có đến không?', ans: 'A:Will|S:you|A:be|V:com^ing|O:tonight?', bad: [['A:Are', 'Tương lai tiếp diễn hỏi bằng Will … be …?']] },
        { vi: 'Lúc đó họ sẽ đang ngủ.', ans: 'S:They|A:will be|V:sleep^ing|O:then.', bad: [['A:are', 'Then (trong tương lai) → will be sleeping.']] }
      ],
      recall: [
        { q: 'Câu khẳng định', ex: 'I will be working.', lines: [[ALLW + ' + will be + V-ing', 'ALL WILL BE VING', 'vs']] },
        { q: 'Câu phủ định', ex: "I won't be using the car.", lines: [[ALLW + " + won't be + V-ing", 'ALL WONT BE VING', '']] },
        { q: 'Câu hỏi (nghi vấn)', ex: 'Will you be coming tonight?', lines: [['Will + I/you/he/she/it/we/they + be + V-ing?', 'WILLQ ALL BE VING', '']] }
      ]
    },
    'past-perfect-continuous': {
      discover: [
        { ex: [['S:I|A:had been|V:wait^ing|O:for an hour|O:when she came.', 'Tôi đã đợi một tiếng thì cô ấy đến.'], ['S:He|A:had been|V:work^ing|O:all day,|O:so he was tired.', 'Anh ấy đã làm cả ngày nên mệt.'], ['S:They|A:had been|V:play^ing|O:before it rained.', 'Họ đã chơi trước khi trời mưa.']],
          q: 'Thì này ghép từ những phần nào?', opts: ['had + been + V-ing (mọi chủ ngữ)', 'has + been + V-ing'], ans: 0,
          rule: 'Mọi chủ ngữ + had been + V-ing: việc đã kéo dài một thời gian trước một mốc trong quá khứ.', fx: ALLW + ' + had been + V-ing' },
        { ex: [['S:She|A:hadn\'t been|V:sleep^ing|O:well.', 'Trước đó cô ấy ngủ không ngon.'], ['A:Had|S:you|A:been|V:wait^ing|O:long?', 'Lúc đó bạn đã đợi lâu chưa?']],
          q: 'Câu hỏi đặt gì lên đầu?', opts: ['Had, rồi chủ ngữ, rồi been + V-ing', 'Been lên đầu'], ans: 0,
          rule: 'Phủ định: hadn\'t been + V-ing. Câu hỏi: Had + chủ ngữ + been + V-ing?', fx: 'S + hadn\'t been + V-ing · Had + S + been + V-ing?' }
      ],
      build: [
        { vi: 'Tôi đã đợi một tiếng thì cô ấy đến.', ans: 'S:I|A:had been|V:wait^ing|O:for an hour|O:when she came.', bad: [['A:have been', 'Mốc là quá khứ (she came) → had been.']] },
        { vi: 'Anh ấy đã làm việc cả ngày nên rất mệt.', ans: 'S:He|A:had been|V:work^ing|O:all day,|O:so he was tired.', bad: [['V:work^ed', 'Nhấn mạnh quá trình → had been working.']] },
        { vi: 'Trước đó cô ấy ngủ không ngon.', ans: 'S:She|A:hadn\'t been|V:sleep^ing|O:well.', bad: [['A:didn\'t', 'Kéo dài trước mốc quá khứ → hadn\'t been sleeping.']] },
        { vi: 'Lúc đó bạn đã đợi lâu chưa?', ans: 'A:Had|S:you|A:been|V:wait^ing|O:long?', bad: [['A:Have', 'Mốc quá khứ → Had you been waiting?']] },
        { vi: 'Họ đã chơi trước khi trời mưa.', ans: 'S:They|A:had been|V:play^ing|O:before it rained.', bad: [['V:play', 'Cần V-ing: playing.']] }
      ],
      recall: [
        { q: 'Câu khẳng định', ex: 'I had been waiting for an hour.', lines: [[ALLW + ' + had been + V-ing', 'ALL HAD BEEN VING', 'has have']] },
        { q: 'Câu phủ định', ex: "She hadn't been sleeping well.", lines: [[ALLW + " + hadn't been + V-ing", 'ALL HADNT BEEN VING', 'didnt']] },
        { q: 'Câu hỏi (nghi vấn)', ex: 'Had you been waiting long?', lines: [['Had + I/you/he/she/it/we/they + been + V-ing?', 'HADQ ALL BEEN VING', '']] }
      ]
    },
    'future-perfect': {
      discover: [
        { ex: [['O:By 2030,|S:I|A:will have|V:finish^ed|O:university.', 'Đến năm 2030 tôi sẽ học xong đại học.'], ['S:She|A:will have|V:left|O:by 6 p.m.', 'Cô ấy sẽ đi trước 6 giờ tối.'], ['S:They|A:will have|V:built|O:the bridge|O:by next year.', 'Đến năm sau họ sẽ xây xong cầu.']],
          q: 'Thì này ghép từ những phần nào?', opts: ['will + have + V3 (mọi chủ ngữ)', 'will + has + V3 với he / she / it'], ans: 0,
          rule: 'Mọi chủ ngữ + will have + V3: việc sẽ hoàn thành trước một mốc tương lai (by …). Sau will luôn là have, kể cả với he / she / it.', fx: ALLW + ' + will have + V3' },
        { ex: [['S:I|A:won\'t have|V:finish^ed|O:by Friday.', 'Tôi sẽ chưa xong trước thứ Sáu.'], ['A:Will|S:you|A:have|V:done|O:it|O:by then?', 'Đến lúc đó bạn sẽ làm xong chưa?']],
          q: 'Câu hỏi đặt gì lên đầu?', opts: ['Will, rồi chủ ngữ, rồi have + V3', 'Have lên đầu'], ans: 0,
          rule: 'Phủ định: won\'t have + V3. Câu hỏi: Will + chủ ngữ + have + V3?', fx: 'S + won\'t have + V3 · Will + S + have + V3?' }
      ],
      build: [
        { vi: 'Đến năm 2030 tôi sẽ học xong đại học.', ans: 'O:By 2030,|S:I|A:will have|V:finish^ed|O:university.', bad: [['A:will', 'Thiếu have: will have finished.'], ['V:finish', 'Sau have cần V3: finished.']] },
        { vi: 'Cô ấy sẽ rời đi trước 6 giờ tối.', ans: 'S:She|A:will have|V:left|O:by 6 p.m.', bad: [['A:will has', 'Sau will luôn là have, kể cả với she.']] },
        { vi: 'Tôi sẽ chưa làm xong trước thứ Sáu.', ans: 'S:I|A:won\'t have|V:finish^ed|O:by Friday.', bad: [['A:don\'t have', 'Phủ định: won\'t have + V3.']] },
        { vi: 'Đến lúc đó bạn sẽ làm xong chưa?', ans: 'A:Will|S:you|A:have|V:done|O:it|O:by then?', bad: [['V:did', 'Did là V2; cần V3: done.']] },
        { vi: 'Đến năm sau họ sẽ xây xong cây cầu.', ans: 'S:They|A:will have|V:built|O:the bridge|O:by next year.', bad: [['V:build', 'Cần V3: built.']] }
      ],
      recall: [
        { q: 'Câu khẳng định', ex: 'I will have finished by 2030.', lines: [[ALLW + ' + will have + V3', 'ALL WILL HAVE V3', 'has ving']] },
        { q: 'Câu phủ định', ex: "I won't have finished by Friday.", lines: [[ALLW + " + won't have + V3", 'ALL WONT HAVE V3', 'has ving']] },
        { q: 'Câu hỏi (nghi vấn)', ex: 'Will you have done it by then?', lines: [['Will + I/you/he/she/it/we/they + have + V3?', 'WILLQ ALL HAVE V3', 'has ving']] }
      ]
    },
    'future-perfect-continuous': {
      discover: [
        { ex: [['O:By June,|S:I|A:will have been|V:work^ing|O:here|O:for ten years.', 'Đến tháng Sáu tôi sẽ làm ở đây được mười năm.'], ['S:She|A:will have been|V:study^ing|O:for three hours|O:by 9 p.m.', 'Đến 9 giờ tối cô ấy sẽ học được ba tiếng.']],
          q: 'Thì này ghép từ những phần nào?', opts: ['will + have + been + V-ing', 'will + been + V-ing'], ans: 0,
          rule: 'Mọi chủ ngữ + will have been + V-ing: tính đến một mốc tương lai, việc đã kéo dài được bao lâu.', fx: ALLW + ' + will have been + V-ing' },
        { ex: [['S:They|A:won\'t have been|V:wait^ing|O:long.', 'Họ sẽ không phải đợi lâu.'], ['A:Will|S:you|A:have been|V:liv^ing|O:here|O:for a year|O:by May?', 'Đến tháng Năm bạn sẽ sống ở đây được một năm chưa?']],
          q: 'Phủ định đặt not ở đâu?', opts: ['Sau will: won\'t have been + V-ing', 'Sau been'], ans: 0,
          rule: 'Phủ định: won\'t have been + V-ing. Câu hỏi: Will + chủ ngữ + have been + V-ing?', fx: 'S + won\'t have been + V-ing · Will + S + have been + V-ing?' }
      ],
      build: [
        { vi: 'Đến tháng Sáu tôi sẽ làm ở đây được mười năm.', ans: 'O:By June,|S:I|A:will have been|V:work^ing|O:here|O:for ten years.', bad: [['A:will be', 'Tính đến mốc tương lai, việc kéo dài → will have been working.']] },
        { vi: 'Đến 9 giờ tối cô ấy sẽ học được ba tiếng.', ans: 'S:She|A:will have been|V:study^ing|O:for three hours|O:by 9 p.m.', bad: [['A:will has been', 'Sau will luôn là have.']] },
        { vi: 'Họ sẽ không phải đợi lâu.', ans: 'S:They|A:won\'t have been|V:wait^ing|O:long.', bad: [['V:wait^ed', 'Cần V-ing: waiting.']] },
        { vi: 'Đến tháng Năm bạn sẽ sống ở đây được một năm chưa?', ans: 'A:Will|S:you|A:have been|V:liv^ing|O:here|O:for a year|O:by May?', bad: [['A:Have', 'Câu hỏi bắt đầu bằng Will.']] }
      ],
      recall: [
        { q: 'Câu khẳng định', ex: 'By June, I will have been working here for ten years.', lines: [[ALLW + ' + will have been + V-ing', 'ALL WILL HAVE BEEN VING', 'has']] },
        { q: 'Câu phủ định', ex: "They won't have been waiting long.", lines: [[ALLW + " + won't have been + V-ing", 'ALL WONT HAVE BEEN VING', 'has']] },
        { q: 'Câu hỏi (nghi vấn)', ex: 'Will you have been living here for a year?', lines: [['Will + I/you/he/she/it/we/they + have been + V-ing?', 'WILLQ ALL HAVE BEEN VING', 'has']] }
      ]
    },
    'future-in-past': {
      discover: [
        { ex: [['S:I|A:was going to|V:call|O:you,|O:but I forgot.', 'Tôi đã định gọi cho bạn nhưng quên mất.'], ['S:They|A:were going to|V:travel|O:but it rained.', 'Họ đã định đi du lịch nhưng trời mưa.'], ['S:She|V:said|S:she|A:would|V:help|O:me.', 'Cô ấy nói cô ấy sẽ giúp tôi.']],
          q: 'Was / were going to và would dùng để làm gì?', opts: ['Nói về dự định hay lời hứa trong quá khứ (từ quá khứ nhìn về sau)', 'Nói về thói quen hiện tại'], ans: 0,
          rule: 'I / He / She / It + was going to + V. You / We / They + were going to + V. Mọi chủ ngữ + would + V (thường sau said, thought, knew).', fx: 'was/were going to + V · S + would + V' }
      ],
      build: [
        { vi: 'Tôi đã định gọi cho bạn nhưng quên mất.', ans: 'S:I|A:was going to|V:call|O:you,|O:but I forgot.', bad: [['A:were going to', 'I đi với was.'], ['A:am going to', 'Dự định trong quá khứ → was going to.']] },
        { vi: 'Họ đã định đi du lịch nhưng trời mưa.', ans: 'S:They|A:were going to|V:travel|O:but it rained.', bad: [['A:was going to', 'They đi với were.']] },
        { vi: 'Cô ấy nói cô ấy sẽ giúp tôi.', ans: 'S:She|V:said|S:she|A:would|V:help|O:me.', bad: [['A:will', 'Sau said (quá khứ) → would.'], ['V:help^s', 'Sau would dùng V nguyên thể.']] },
        { vi: 'Tôi biết anh ấy sẽ không đến.', ans: 'S:I|V:knew|S:he|A:wouldn\'t|V:come.', bad: [['A:won\'t', 'Sau knew (quá khứ) → wouldn\'t.']] }
      ],
      recall: [
        { q: 'Câu khẳng định (dự định hoặc lời hứa trong quá khứ)', ex: 'I was going to call you. · They were going to travel. · She said she would help.', lines: [['I/He/She/It + was going to + V', 'IHSI WAS GOINGTO V', 'ving were'], ['You/We/They + were going to + V', 'YWT WERE GOINGTO V', 'ving was'], [ALLW + ' + would + V', 'ALL WOULD V', 'ving vs']] },
        { q: 'Câu phủ định', ex: "I wasn't going to tell her. · I knew he wouldn't come.", lines: [["I/He/She/It + wasn't going to + V", 'IHSI WASNT GOINGTO V', 'ving'], ["You/We/They + weren't going to + V", 'YWT WERENT GOINGTO V', 'ving'], [ALLW + " + wouldn't + V", 'ALL WOULDNT V', 'ving vs']] }
      ]
    }
  });
  D['stative'] = D['simple-vs-continuous'];

  /* ---------------- kiểm tra câu tự viết (đơn giản, dựa trên quy tắc) ---------------- */
  const PRON = { i: '1', you: 'p', we: 'p', they: 'p', he: '3', she: '3', it: '3' };
  const DET = new Set(['my', 'your', 'his', 'her', 'our', 'their', 'the', 'a', 'an', 'this', 'that', 'these', 'those']);
  const ADV = new Set(['always', 'usually', 'often', 'sometimes', 'never', 'rarely', 'seldom', 'also', 'really', 'still', 'just', 'normally', 'generally', 'not', 'often']);
  const MODAL = new Set(['can', 'will', 'must', 'should', 'may', 'might', 'could', 'would', 'shall']);
  const STATIVE = /^(know|like|love|hate|want|need|believe|understand|prefer|own|belong|remember|mean)ing$/;
  const C = { "i'm": ['i', 'am'], "you're": ['you', 'are'], "we're": ['we', 'are'], "they're": ['they', 'are'], "he's": ['he', 'is'], "she's": ['she', 'is'], "it's": ['it', 'is'] };
  const hasS = w => /s$/.test(w) && !/(ss|us|is)$/.test(w);
  function words(s) {
    let w = s.toLowerCase().replace(/[’`]/g, "'").replace(/[^a-z' ]/g, ' ').split(/\s+/).filter(Boolean);
    const out = []; w.forEach(x => { if (C[x]) out.push(...C[x]); else if (/n't$/.test(x) && x !== "can't" && x !== "won't") { out.push(x); } else out.push(x); });
    return out;
  }
  function subj(w, caps) {
    for (let i = 0; i < w.length; i++) {
      if (PRON[w[i]]) return { p: PRON[w[i]], i, txt: w[i][0].toUpperCase() + w[i].slice(1) };
      if (DET.has(w[i]) && w[i + 1]) {
        let j = i + 1; while (w[j + 1] && /^(new|old|little|big|young|best|older|younger)$/.test(w[j])) j++;
        const n = w[j]; if (!n) return null;
        const pl = /^(these|those)$/.test(w[i]) || (hasS(n) && !/^(news|bus)$/.test(n)) || /^(people|children|parents)$/.test(n);
        const tx = w.slice(i, j + 1).join(' '); return { p: pl ? 'p' : '3', i: j, txt: tx[0].toUpperCase() + tx.slice(1) };
      }
    }
    return caps && w[1] ? { p: '3', i: 0, txt: w[0].replace(/^./, c => c.toUpperCase()) } : null;   // tên riêng ở đầu câu: Lan cooks…
  }
  const pick = (w, k) => { while (w[k] && ADV.has(w[k]) && w[k] !== 'not') k++; return k; };
  const BE = { '1': 'am', '3': 'is', 'p': 'are' };
  function check(s, mode) {
    const w = words(s); if (w.length < 2) return { ok: null, msg: 'Câu hơi ngắn, hãy viết đủ chủ ngữ và động từ.' };
    const sb = subj(w, /^\s*[A-Z][a-z]/.test(s) && !/^\s*(I|You|We|They|He|She|It|My|Your|His|Her|Our|Their|The|A|An|This|That|These|Those|Every|Right|Now|Today|Look|Listen|Usually|Always|Sometimes|Often|Never|In|On|At)\b/.test(s)); if (!sb) return { ok: null, msg: 'Chưa tìm thấy chủ ngữ (I, you, he, she, my mother…). Câu nên có chủ ngữ ở đầu.' };
    let k = pick(w, sb.i + 1); const v = w[k];
    if (!v) return { ok: false, msg: `Sau “${sb.txt}” còn thiếu động từ.` };
    const isBe = /^(am|is|are)$/.test(v) || /^(isn't|aren't)$/.test(v);
    let k2 = pick(w, k + 1); if (w[k2] === 'not') k2 = pick(w, k2 + 1);
    const nx = w[k2] || '';
    const kind = isBe && /ing$/.test(nx) ? 'pc' : 'ps';
    if (kind === 'pc') {
      const base = v.replace("n't", '');
      if (base !== BE[sb.p]) return { ok: false, kind, msg: `“${sb.txt}” đi với ${BE[sb.p]}, không phải ${base}: ${sb.txt} ${BE[sb.p]} ${nx}.` };
      if (STATIVE.test(nx)) return { ok: false, kind, msg: `${nx.replace(/ing$/, '')} là động từ trạng thái, nên dùng thì đơn thay vì -ing.` };
      return { ok: true, kind, msg: 'Đúng thì hiện tại tiếp diễn: ' + sb.txt + ' ' + BE[sb.p] + ' + V-ing.' };
    }
    // hiện tại đơn
    if (isBe) {
      const base = v.replace("n't", '');
      if (base !== BE[sb.p]) return { ok: false, kind, msg: `“${sb.txt}” đi với ${BE[sb.p]}, không phải ${base}.` };
      if (mode === 'pc' || (mode === 'svc')) return { ok: true, kind: 'be', msg: 'Câu dùng to be đúng. Muốn nói việc đang làm, thêm động từ -ing sau ' + BE[sb.p] + '.' };
      return { ok: true, kind: 'be', msg: 'Câu dùng to be đúng. Thử thêm một câu có động từ thường (get up, work, eat…).' };
    }
    if (MODAL.has(v) || /^(can't|won't|didn't|did|was|were|had)$/.test(v)) return { ok: null, kind, msg: 'Câu này không dùng thì hiện tại đơn. Bài này luyện câu như: I get up at six.' };
    if (/^(don't|doesn't|do|does)$/.test(v)) {
      const want = sb.p === '3' ? (v[0] === 'd' && /n't/.test(v) ? "doesn't" : 'does') : (/n't/.test(v) ? "don't" : 'do');
      if (v !== want) return { ok: false, kind, msg: `“${sb.txt}” đi với ${want}, không phải ${v}.` };
      if (nx && hasS(nx) && !/^(was|has|does)$/.test(nx)) return { ok: false, kind, msg: `Sau ${v}, động từ giữ nguyên thể: ${nx.replace(/(ches|shes|sses|xes)$/, m => m.slice(0, -2)).replace(/ies$/, 'y').replace(/([^s])s$/, '$1')}.` };
      return { ok: true, kind, msg: 'Đúng thì hiện tại đơn với ' + v + '.' };
    }
    if (sb.p === '3') {
      if (/[^aeiou]ys$/.test(v)) return { ok: false, kind, msg: `Phụ âm + y → đổi y thành i rồi thêm -es: ${v} → ${v.slice(0, -2)}ies.` };
      if (hasS(v) || v === 'has' || v === 'does' || v === 'goes') return { ok: true, kind, msg: `Đúng: ${sb.txt} → ${v} (có -s).` };
      if (v === 'have') return { ok: false, kind, msg: `“${sb.txt}” đi với has, không phải have.` };
      return { ok: false, kind, msg: `“${sb.txt}” là 1 người / 1 vật nên động từ thêm -s/-es: ${v} → ${/(ch|sh|s|x|o)$/.test(v) ? v + 'es' : /[^aeiou]y$/.test(v) ? v.slice(0, -1) + 'ies' : v + 's'}.` };
    }
    if (v === 'has') return { ok: false, kind, msg: `“${sb.txt}” đi với have, không phải has.` };
    if (hasS(v)) return { ok: false, kind, msg: `“${sb.txt}” không thêm -s vào động từ: ${v} → ${v.replace(/(ches|shes|sses|xes)$/, m => m.slice(0, -2)).replace(/ies$/, 'y').replace(/([^s])s$/, '$1')}.` };
    return { ok: true, kind, msg: `Đúng: ${sb.txt} + ${v} (giữ nguyên động từ).` };
  }
  window.gxlCheck = check;   // để kiểm thử


  /* ---------------- ô điền công thức: "He/She/It + {doesn't|does not} + V" ---------------- */
  const norm = x => String(x || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/^\s*thi\s+/, '').replace(/[^a-z0-9]/g, '');
  function gxlFill(f, onEnter) {
    const el = E('div', 'gxl-cf'), boxes = [];
    f.split(/(\{[^}]+\})/).forEach(p => {
      if (/^\{/.test(p)) {
        const alts = p.slice(1, -1).split('|'), main = alts[0];
        const i = E('input', 'gxl-in'); i.type = 'text'; i.autocomplete = 'off'; i.autocapitalize = 'off'; i.spellcheck = false;
        i.setAttribute('aria-label', 'Ô trống'); i.size = Math.max(3, Math.min(18, main.length + 1));
        i.style.width = `calc(${Math.max(3, Math.min(18, main.length + 1))}ch + 18px)`;
        i.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); const k = boxes.findIndex(b => b.i === i); const nx = boxes[k + 1]; if (nx && !nx.i.value.trim()) nx.i.focus(); else if (onEnter) onEnter(); } });
        i.addEventListener('input', () => i.classList.remove('bad'));
        boxes.push({ i, main, ok: alts.map(norm) });
        el.appendChild(i);
      } else if (p) el.appendChild(document.createTextNode(p));
    });
    return {
      el,
      filled: () => boxes.every(b => b.i.value.trim()),
      focus: () => { const b = boxes.find(b => !b.i.value.trim() || b.i.classList.contains('bad')) || boxes[0]; try { b.i.focus(); } catch (e) {} },
      check: () => { let wrong = 0; boxes.forEach(b => { const ok = b.ok.includes(norm(b.i.value)); b.i.classList.toggle('good', ok); b.i.classList.toggle('bad', !ok); if (!ok) wrong++; }); return { ok: !wrong, wrong }; },
      hint: () => boxes.forEach(b => { if (b.i.classList.contains('bad')) { b.i.value = ''; b.i.placeholder = b.main.replace(/(^|[\s/+-])([^\s/+-])([^\s/+-]*)/g, (m, a, f, r) => a + f + r.replace(/[^']/g, '·')); } }),
      reveal: () => boxes.forEach(b => {
        const ok = b.ok.includes(norm(b.i.value));
        const sp = E('span', 'gxl-ans ' + (ok ? 'good' : 'bad'));
        if (!ok && b.i.value.trim()) sp.appendChild(E('s', null, b.i.value.trim()));
        sp.appendChild(E('b', null, ok ? b.i.value.trim() : b.main));
        b.i.replaceWith(sp);
      })
    };
  }
  window.gxlFill = gxlFill;

  /* ---------------- tự viết lại cả công thức, đủ mọi nhóm chủ ngữ (mỗi nhóm một dòng) ---------------- */
  const GRP = { S3: ['he', 'she', 'it'], SP: ['i', 'you', 'we', 'they'], YWT: ['you', 'we', 'they'], I: ['i'], IHSI: ['i', 'he', 'she', 'it'], ALL: ['i', 'you', 'he', 'she', 'it', 'we', 'they'] };
  const VK = { V: ['động từ nguyên thể (V)', ['v']], VS: ['động từ có đuôi -s/es', ['vs']], VING: ['động từ đuôi -ing', ['ving']], V2: ['động từ quá khứ (V2/V-ed)', ['v2', 'ved']], V3: ['quá khứ phân từ (V3)', ['v3', 'ved']] };
  const KN = { do: 'trợ động từ do / does', does: 'trợ động từ do / does', did: 'trợ động từ did', am: 'động từ to be', is: 'động từ to be', are: 'động từ to be', was: 'động từ to be quá khứ', were: 'động từ to be quá khứ',
    have: 'trợ động từ have / has', has: 'trợ động từ have / has', had: 'trợ động từ had', will: 'trợ động từ tương lai', would: 'trợ động từ would', be: 'be (sau will)', been: 'been', goingto: 'going to' };
  function kw(k) {
    if (VK[k]) return VK[k];
    const q = /Q$/.test(k), w = (q ? k.slice(0, -1) : k).toLowerCase();
    if (q) return ['trợ động từ / to be đứng đầu câu hỏi', [w]];
    if (/nt$/.test(w)) return ['phần phủ định (… + not)', [w]];
    return [KN[w] || w, [w]];
  }
  const BAD = { vs: 'Động từ ở dòng này không thêm -s/es.', ving: 'Dòng này không dùng V-ing.', v: 'Động từ ở dòng này không ở dạng nguyên thể.', v2: 'Sau trợ động từ này, động từ không ở dạng quá khứ (V2).', ved: 'Sau trợ động từ này, động từ không ở dạng quá khứ.', v3: 'Dòng này không dùng V3.',
    doesnt: 'Kiểm tra lại trợ động từ: nhóm chủ ngữ này không đi với doesn\'t.', dont: 'Kiểm tra lại trợ động từ: nhóm chủ ngữ này không đi với don\'t.', does: 'Kiểm tra lại: nhóm chủ ngữ này không đi với does.', do: 'Thì này không dùng do / does.',
    did: 'Thì này không dùng did.', didnt: 'Thì này không dùng didn\'t.', am: 'Câu có động từ thường thì không cần am / is / are.', is: 'Câu có động từ thường thì không cần am / is / are.', are: 'Câu có động từ thường thì không cần am / is / are.',
    was: 'Kiểm tra lại was / were theo nhóm chủ ngữ.', were: 'Kiểm tra lại was / were theo nhóm chủ ngữ.', wasnt: 'Kiểm tra lại wasn\'t / weren\'t theo nhóm chủ ngữ.', werent: 'Kiểm tra lại wasn\'t / weren\'t theo nhóm chủ ngữ.',
    has: 'Kiểm tra lại have / has theo nhóm chủ ngữ (sau will luôn là have).', have: 'Kiểm tra lại have / has theo nhóm chủ ngữ.', hasnt: 'Kiểm tra lại haven\'t / hasn\'t theo nhóm chủ ngữ.', havent: 'Kiểm tra lại haven\'t / hasn\'t theo nhóm chủ ngữ.' };
  function ftoks(x) {
    x = ' ' + String(x || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/[’`]/g, "'") + ' ';
    x = x.replace(/\bi\s*'\s*m\b/g, ' i am ');
    x = x.replace(/\bwill\s*(\+\s*)?not\b/g, ' wont ').replace(/\bwon\s*'?\s*t\b/g, ' wont ');
    x = x.replace(/\b(do|does|did|is|are|am|was|were|have|has|had|would)\s*(\+\s*)?not\b/g, ' $1nt ').replace(/\b(do|does|did|is|are|was|were|have|has|had|would)\s*n\s*'?\s*t\b/g, ' $1nt ');
    x = x.replace(/\bgoing\s*(\+\s*)?to\b/g, ' goingto ');
    x = x.replace(/\b(past participle|qua khu phan tu|phan tu qua khu|pii)\b/g, ' v3 ');
    x = x.replace(/\bv\s*[-_]?\s*3\b(\s*\/\s*(v\s*[-_]?\s*)?ed\b)?/g, ' v3 ').replace(/\bv\s*[-_]?\s*2\b(\s*\/\s*(v\s*[-_]?\s*)?ed\b)?/g, ' v2 ');
    x = x.replace(/\bv\s*[-_]?\s*ed\b/g, ' ved ');
    x = x.replace(/\(\s*(nguyen the|nguyen mau|bare|inf|infinitive|v1|v0)\s*\)/g, ' ');
    x = x.replace(/\bv\s*[-_]?\s*\(?\s*(s\s*\/\s*es|es\s*\/\s*s|s\s*,\s*es|s\s+hoac\s+es|s|es)\s*\)?(?![a-z])/g, ' vs ');
    x = x.replace(/\bv\s*[-_]?\s*ing\b/g, ' ving ');
    x = x.replace(/\b(dong tu nguyen the|dong tu nguyen mau|nguyen the|nguyen mau|bare|infinitive|v1|v0|dong tu)\b/g, ' v ');
    return x.split(/[^a-z0-9]+/).filter(Boolean);
  }
  const ALLS = new Set(['i', 'you', 'we', 'they', 'he', 'she', 'it']);
  const VN = { i: 'I', you: 'you', we: 'we', they: 'they', he: 'he', she: 'she', it: 'it' };
  function fline(spec, forbid, input) {
    const t = ftoks(input); let at = 0;
    for (const k of spec.split(' ')) {
      if (GRP[k]) {
        const g = GRP[k]; let j = -1;
        for (let q = at; q < t.length; q++) if (g.includes(t[q])) { j = q; break; }
        if (j < 0) return { ok: false, msg: t.some(w => g.includes(w)) ? 'Các phần đã có nhưng thứ tự chưa đúng.' : 'Thiếu chủ ngữ.' };
        let e = j; while (e + 1 < t.length && ALLS.has(t[e + 1])) e++;
        const have = new Set(t.slice(j, e + 1));
        const lack = g.filter(x => !have.has(x)), extra = [...have].filter(x => !g.includes(x));
        if (extra.length) return { ok: false, msg: `“${extra.map(x => VN[x]).join(', ')}” không cùng nhóm với ${[...have].filter(x => g.includes(x)).map(x => VN[x]).join(', ')}: mỗi nhóm chủ ngữ viết một dòng riêng.` };
        if (lack.length) return { ok: false, msg: `Nhóm chủ ngữ chưa đủ, còn thiếu: ${lack.map(x => VN[x]).join(', ')}.` };
        at = e + 1; continue;
      }
      const [name, ok] = kw(k);
      let j = -1; for (let q = at; q < t.length; q++) if (ok.includes(t[q])) { j = q; break; }
      if (j < 0) return { ok: false, msg: t.some(w => ok.includes(w)) ? 'Các phần đã có nhưng thứ tự chưa đúng.' : `Còn thiếu hoặc chưa đúng: ${name}.` };
      at = j + 1;
    }
    const f = (forbid || '').split(' ').filter(Boolean).find(w => t.includes(w));
    if (f) return { ok: false, msg: BAD[f] || 'Có phần chưa đúng, xem lại nhé.' };
    return { ok: true };
  }
  const perms = a => a.length < 2 ? [a] : a.flatMap((x, i) => perms(a.slice(0, i).concat(a.slice(i + 1))).map(r => [x].concat(r)));
  // chấm cả thẻ: mỗi dòng đáp án phải khớp đúng một dòng người học viết (thứ tự dòng tự do)
  function fcheck(item, inputs) {
    const L = item.lines, rows = inputs.map(x => String(x || '').trim()).filter(Boolean);
    if (rows.length < L.length) return { ok: false, msg: `Mới có ${rows.length}/${L.length} dòng. Công thức phải viết đủ cho mọi chủ ngữ: mỗi nhóm chủ ngữ một dòng.` };
    for (const pm of perms(rows.map((_, i) => i))) if (L.every((l, k) => pm[k] !== undefined && fline(l[1], l[2], rows[pm[k]]).ok)) return { ok: true };
    // tìm dòng sai để gợi ý (không lộ đáp án)
    const used = new Set(), msgs = [];
    L.forEach(l => {
      const g = GRP[l[1].split(' ').find(k => GRP[k])];
      let best = -1;
      rows.forEach((r, i) => { if (!used.has(i) && best < 0 && fline(l[1], l[2], r).ok) best = i; });
      if (best >= 0) { used.add(best); return; }
      const near = rows.findIndex((r, i) => !used.has(i) && ftoks(r).some(w => g.includes(w)));
      if (near >= 0) { used.add(near); msgs.push(`Dòng ${near + 1}: ` + fline(l[1], l[2], rows[near]).msg); }
      else msgs.push('Còn thiếu công thức cho một nhóm chủ ngữ.');
    });
    return { ok: false, msg: msgs[0] || 'Có dòng chưa đúng, xem lại nhé.' };
  }
  window.gxlFTest = (item, inputs) => fcheck(item, inputs);
  /* các ô gõ (mỗi nhóm chủ ngữ một dòng) + phím tắt; dùng cho bước 3 và thẻ Ôn tập */
  function gxlFormula(item, onEnter) {
    const n = item.lines.length;
    const el = E('div', 'gxl-fw'), ins = [];
    let last = null;
    for (let k = 0; k < n; k++) {
      const row = E('label', 'gxl-frow');
      row.appendChild(E('span', 'gxl-fno', String(k + 1)));
      const inp = E('input', 'gxl-fin'); inp.type = 'text'; inp.autocomplete = 'off'; inp.autocapitalize = 'off'; inp.spellcheck = false;
      inp.placeholder = n === 1 ? 'Viết công thức (ghi đủ các chủ ngữ)…' : `Công thức cho nhóm chủ ngữ thứ ${k + 1}…`;
      inp.setAttribute('aria-label', `${item.q}, dòng ${k + 1}`);
      inp.addEventListener('focus', () => { last = inp; });
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); const nx = ins[k + 1]; if (nx && !nx.value.trim()) nx.focus(); else if (onEnter) onEnter(); } });
      inp.addEventListener('input', () => inp.classList.remove('bad'));
      row.appendChild(inp); el.appendChild(row); ins.push(inp);
    }
    last = ins[0];
    const keys = E('div', 'gxl-keys');
    ['+', '/', '?', 'V', '-ing', '-s/es', 'not'].forEach(k => {
      const b = E('button', 'gxl-key', k); b.type = 'button'; b.setAttribute('aria-label', 'Chèn ' + k);
      b.addEventListener('mousedown', e => e.preventDefault());
      b.addEventListener('click', () => {
        const inp = last || ins[0];
        const v = inp.value, a = inp.selectionStart ?? v.length, z = inp.selectionEnd ?? v.length;
        let ins2 = k === '+' ? ' + ' : k === 'not' ? ' not ' : k;
        if (k === 'V' && a > 0 && /\S$/.test(v.slice(0, a)) && !/[+\s]$/.test(v.slice(0, a))) ins2 = ' V';
        inp.value = (v.slice(0, a) + ins2 + v.slice(z)).replace(/\s{2,}/g, ' ');
        const pos = Math.min(inp.value.length, (v.slice(0, a) + ins2).replace(/\s{2,}/g, ' ').length);
        try { inp.focus(); inp.setSelectionRange(pos, pos); } catch (e) {}
        inp.classList.remove('bad');
      });
      keys.appendChild(b);
    });
    el.appendChild(keys);
    return {
      el,
      ans: item.lines.map(l => l[0]).join(' · '),
      filled: () => ins.some(i => i.value.trim()),
      focus: () => { const i = ins.find(i => !i.value.trim()) || ins[0]; try { i.focus(); } catch (e) {} },
      check: () => { const r = fcheck(item, ins.map(i => i.value)); ins.forEach(i => { i.classList.toggle('good', r.ok); }); return r; },
      reveal: ok => {
        ins.forEach(i => { i.disabled = true; }); keys.remove();
        const m = E('div', 'gxl-model'); m.appendChild(E('span', null, ok ? 'Công thức chuẩn để so:' : 'Công thức đúng:'));
        item.lines.forEach(l => m.appendChild(E('b', null, l[0])));
        el.appendChild(m);
      }
    };
  }
  window.gxlFormula = gxlFormula;
  window.gxlFormulaKey = key => { const [lid, j] = String(key).split('#'); const it = D[lid] && D[lid].recall[+j]; return it && it.lines ? it : null; };
  window.gxlSame = (a, b) => norm(a.replace(/\b(do|does|is|are|am) not\b/gi, (m, x) => x + "n't")) === norm(b.replace(/\b(do|does|is|are|am) not\b/gi, (m, x) => x + "n't"));

  /* ---------------- thẻ vào Review ---------------- */
  const toReview = (k, f, b, ask, x, a) => { try { if (window.srAddFx) return window.srAddFx(k, f, b, ask, x, a); } catch (e) {} return false; };

  /* ---------------- dựng giao diện ---------------- */
  function build(id) {
    const d = D[id]; if (!d) return null;
    const S = st[id] = st[id] || {};
    const box = E('section', 'gxl');
    const intro = E('p', 'gxl-intro', 'Học qua 3 bước ngắn để nhớ lâu: tự tìm ra quy tắc, dùng ngay rồi tự nhớ lại. Sau đó luyện thêm ở phần bài tập.');
    box.appendChild(intro);
    const tabs = E('div', 'gxl-tabs'); tabs.setAttribute('role', 'tablist');
    const body = E('div', 'gxl-body');
    box.appendChild(tabs); box.appendChild(body);
    const STEPS = [['d', 'Khám phá', '🔍'], ['b', 'Lắp câu', '🧩'], ['r', 'Tự nhớ lại', '🧠']];
    let cur = STEPS.findIndex(x => !S[x[0]]); if (cur < 0) cur = 0;
    const done = k => { S[k] = 1; save(); drawTabs(); };
    function drawTabs() {
      tabs.innerHTML = '';
      STEPS.forEach(([k, n, ic], i) => {
        const b = E('button', 'gxl-tab' + (i === cur ? ' on' : '') + (S[k] ? ' done' : '')); b.type = 'button'; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', String(i === cur));
        b.appendChild(E('span', 'gxl-tn', S[k] ? '✓' : String(i + 1))); b.appendChild(E('span', 'gxl-tlab', n));
        b.addEventListener('click', () => { cur = i; drawTabs(); draw(); });
        tabs.appendChild(b);
      });
    }
    const nextBtn = (label, fn) => { const b = E('button', 'btn-primary gxl-next', label); b.type = 'button'; b.addEventListener('click', fn); return b; };
    const goNext = () => { if (cur < STEPS.length - 1) { cur++; drawTabs(); draw(); try { box.scrollIntoView({ block: 'start', behavior: 'smooth' }); } catch (e) {} } };
    function draw() { body.innerHTML = ''; [discover, buildStep, recall][cur](); }

    /* ① Khám phá */
    function discover() {
      if (d.timeline) body.appendChild(timeline());
      body.appendChild(legend());
      let i = 0;
      const wrap = E('div'); body.appendChild(wrap);
      const one = () => {
        wrap.innerHTML = '';
        const it = d.discover[i];
        wrap.appendChild(E('div', 'gxl-count', `Nhóm câu ${i + 1}/${d.discover.length}`));
        const list = E('div', 'gxl-sents'); it.ex.forEach(([s, vi]) => list.appendChild(sentLine(s, vi))); wrap.appendChild(list);
        wrap.appendChild(E('div', 'gxl-q', '🤔 ' + it.q));
        const opts = E('div', 'gxl-opts'); wrap.appendChild(opts);
        const res = E('div'); wrap.appendChild(res);
        it.opts.forEach((o, j) => {
          const b = E('button', 'gxl-opt', o); b.type = 'button';
          b.addEventListener('click', () => {
            if (opts.dataset.done) return;
            if (j !== it.ans) { b.classList.add('bad'); b.disabled = true; b.appendChild(E('span', 'gxl-why', ' — chưa đúng, nhìn lại các câu và thử lần nữa')); return; }
            opts.dataset.done = '1'; b.classList.add('ok'); [...opts.children].forEach(x => x.disabled = true);
            const r = E('div', 'gxl-rule');
            r.appendChild(E('div', 'gxl-rule-h', '💡 Quy tắc bạn vừa tìm ra'));
            r.appendChild(E('p', null, it.rule));
            r.appendChild(E('div', 'gxl-fx', it.fx));
            res.appendChild(r);
            if (i < d.discover.length - 1) res.appendChild(nextBtn('Nhóm câu tiếp →', () => { i++; one(); }));
            else { done('d'); res.appendChild(nextBtn('Sang bước 2: Lắp câu →', goNext)); }
          });
          opts.appendChild(b);
        });
      };
      one();
    }

    /* ② Lắp câu */
    function buildStep() {
      body.appendChild(E('p', 'gxl-help', 'Chạm các mảnh để ghép câu tiếng Anh. Có mảnh thừa để thử thách bạn. Chạm lại mảnh đã đặt để bỏ ra.'));
      let i = 0, right = 0;
      const wrap = E('div'); body.appendChild(wrap);
      const one = () => {
        wrap.innerHTML = '';
        const it = d.build[i], ans = sent(it.ans);
        const pool = shuffle(ans.map(t => ({ t, ok: true })).concat(it.bad.map(([s, why]) => ({ t: tok(s), why }))));
        wrap.appendChild(E('div', 'gxl-count', `Câu ${i + 1}/${d.build.length}`));
        wrap.appendChild(E('div', 'gxl-vi-big', it.vi));
        const line = E('div', 'gxl-line'); line.setAttribute('aria-label', 'Câu bạn đang ghép');
        const bank = E('div', 'gxl-bank');
        const res = E('div', 'gxl-bres');
        const acts = E('div', 'gxl-bacts');
        const chk = E('button', 'btn-primary', 'Kiểm tra'); chk.type = 'button'; chk.disabled = true;
        const placed = [];
        let tries = 0;
        const redraw = () => {
          line.innerHTML = ''; bank.innerHTML = '';
          if (!placed.length) line.appendChild(E('span', 'gxl-ph', 'Chạm các mảnh bên dưới…'));
          placed.forEach((p, j) => { const c = chip(p.t, 'button'); c.type = 'button'; c.addEventListener('click', () => { placed.splice(j, 1); redraw(); }); line.appendChild(c); });
          pool.forEach(p => { if (placed.includes(p)) return; const c = chip(p.t, 'button'); c.type = 'button'; c.addEventListener('click', () => { placed.push(p); res.innerHTML = ''; redraw(); }); bank.appendChild(c); });
          chk.disabled = placed.length !== ans.length;
        };
        chk.addEventListener('click', () => {
          tries++;
          const okAll = placed.every((p, j) => p.ok && p.t.text === ans[j].text);
          res.innerHTML = '';
          if (okAll) {
            if (tries === 1) right++;
            res.className = 'gxl-bres ok';
            res.appendChild(E('b', null, '✓ Chính xác! '));
            res.appendChild(document.createTextNode(plain(ans)));
            say(plain(ans));
            line.classList.add('ok'); bank.hidden = true; acts.innerHTML = '';
            acts.appendChild(i < d.build.length - 1 ? nextBtn('Câu tiếp →', () => { i++; one(); }) : nextBtn('Xem kết quả', finish));
            return;
          }
          res.className = 'gxl-bres bad';
          const wrongChip = placed.find(p => !p.ok);
          res.appendChild(E('b', null, '✗ Chưa đúng. '));
          res.appendChild(document.createTextNode(wrongChip ? `“${wrongChip.t.text}”: ${wrongChip.why}` : 'Các mảnh đúng nhưng thứ tự chưa đúng. Nhớ: ' + (ans[0].r === 'A' ? 'câu hỏi đặt trợ động từ lên trước chủ ngữ.' : 'chủ ngữ → (trợ động từ) → động từ → phần còn lại.')));
          if (tries === 1) toReview(id + '|b|' + i, it.vi, plain(ans), 'Gõ câu này bằng tiếng Anh', wrongChip ? wrongChip.why : '');
          acts.innerHTML = '';
          const again = E('button', 'btn-ghost', '↺ Sửa lại'); again.type = 'button';
          again.addEventListener('click', () => { const bad = placed.findIndex(p => !p.ok); if (bad >= 0) placed.splice(bad); else placed.length = 0; res.innerHTML = ''; res.className = 'gxl-bres'; acts.innerHTML = ''; acts.appendChild(chk); redraw(); });
          const show = E('button', 'btn-ghost', 'Xem đáp án'); show.type = 'button';
          show.addEventListener('click', () => { placed.length = 0; ans.forEach(t => placed.push(pool.find(p => p.ok && p.t.text === t.text && !placed.includes(p)))); redraw(); chk.click(); });
          acts.appendChild(again); acts.appendChild(show);
        });
        acts.appendChild(chk);
        wrap.appendChild(line); wrap.appendChild(bank); wrap.appendChild(acts); wrap.appendChild(res);
        redraw();
      };
      const finish = () => {
        wrap.innerHTML = '';
        done('b');
        const r = E('div', 'gxl-rule');
        r.appendChild(E('div', 'gxl-big', `${right}/${d.build.length}`));
        r.appendChild(E('p', null, right === d.build.length ? 'Đúng hết ngay lần đầu, rất tốt!' : 'Những câu sai lần đầu đã được đưa vào tab Review để bạn gặp lại vào những ngày tới.'));
        wrap.appendChild(r);
        const again = E('button', 'btn-ghost', '↺ Lắp lại'); again.type = 'button'; again.addEventListener('click', () => { i = 0; right = 0; one(); });
        wrap.appendChild(again);
        wrap.appendChild(nextBtn('Sang bước 3: Tự nhớ lại →', goNext));
      };
      one();
    }

    /* ③ Tự nhớ lại */
    function recall() {
      body.appendChild(E('p', 'gxl-help', 'Không nhìn bảng, tự viết lại cả công thức bạn vừa học, ghi đủ các chủ ngữ (I, you, he, she, it, we, they). Nhóm chủ ngữ nào đi với trợ động từ khác thì viết dòng riêng. Không cần đúng từng dấu: does not hay doesn\'t, V-ing hay Ving đều được. Sai lần đầu, app chỉ gợi ý phần còn thiếu. Sai lần hai mới hiện công thức đúng, và công thức đó vào tab Review.'));
      const list = E('div', 'gxl-rc'); body.appendChild(list);
      const sum = E('div', 'gxl-rsum'); body.appendChild(sum);
      let n = 0, miss = 0;
      const finishOne = () => {
        n++;
        if (n === d.recall.length) { done('r'); sum.innerHTML = ''; sum.appendChild(E('p', null, miss ? `Bạn tự viết đúng ${n - miss}/${n} công thức. ${miss} công thức đã vào Review, app sẽ hỏi lại đúng lúc bạn sắp quên.` : `Bạn tự viết đúng cả ${n} công thức!`)); sum.appendChild(E('p', 'gxl-note', '🎉 Xong phần học công thức. Kéo xuống các bước tiếp theo để xem cách dùng và làm bài tập.')); }
      };
      d.recall.forEach((item, j) => {
        const lbl = item.q, ex = item.ex, ans = item.lines.map(l => l[0]).join(' · ');
        const card = E('div', 'gxl-card');
        card.appendChild(E('div', 'gxl-cl', '✍️ ' + lbl));
        const fw = gxlFormula(item, () => chk.click());
        card.appendChild(fw.el);
        const fb = E('div', 'gxl-cfb'); card.appendChild(fb);
        const acts = E('div', 'gxl-cg');
        const chk = E('button', 'gxl-gb ok', 'Kiểm tra'); chk.type = 'button';
        const giveUp = E('button', 'gxl-gb ghost', 'Không nhớ'); giveUp.type = 'button';
        acts.appendChild(chk); acts.appendChild(giveUp); card.appendChild(acts);
        let tries = 0;
        const end = ok => {
          fw.reveal(ok); acts.remove(); card.classList.add(ok ? 'ok' : 'miss');
          if (!ok) { miss++; toReview(id + '|r|' + j, lbl, ans, 'Tự viết lại công thức (đủ mọi chủ ngữ)', ex, 'F:' + id + '#' + j); }
          fb.innerHTML = '';
          fb.appendChild(E('div', 'gxl-gd ' + (ok ? 'ok' : 'bad'), ok ? (tries > 1 ? '✓ Đúng ở lần thử thứ hai' : '✓ Chính xác!') : '↻ Công thức này sẽ quay lại trong tab Review để bạn viết lại.'));
          const exl = E('div', 'gxl-cex'); exl.appendChild(document.createTextNode('Ví dụ: ' + ex + ' ')); const pl = E('button', 'gxl-play', '▶'); pl.type = 'button'; pl.setAttribute('aria-label', 'Nghe ví dụ'); pl.addEventListener('click', () => say(ex)); exl.appendChild(pl);
          fb.appendChild(exl);
          finishOne();
        };
        chk.addEventListener('click', () => {
          if (!fw.filled()) { fb.innerHTML = ''; fb.appendChild(E('div', 'gxl-gd', 'Hãy gõ công thức trước khi kiểm tra.')); fw.focus(); return; }
          tries++;
          const r = fw.check();
          if (r.ok) return end(true);
          if (tries === 1) { fb.innerHTML = ''; fb.appendChild(E('div', 'gxl-gd bad', '✗ ' + r.msg + ' Sửa lại rồi kiểm tra lần nữa.')); fw.focus(); return; }
          end(false);
        });
        giveUp.addEventListener('click', () => { tries = 2; end(false); });
        list.appendChild(card);
      });
    }

    /* ④ Viết về bạn */
    function write() {
      const w = d.write;
      body.appendChild(E('div', 'gxl-q', '✍️ ' + w.ask));
      body.appendChild(E('p', 'gxl-help', w.hint));
      const ta = E('textarea', 'gxl-ta'); ta.rows = 4; ta.placeholder = 'Mỗi câu kết thúc bằng dấu chấm…'; ta.setAttribute('aria-label', w.ask); ta.spellcheck = false;
      try { ta.value = S.wt || ''; } catch (e) {}
      ta.addEventListener('input', () => { S.wt = ta.value.slice(0, 600); save(); });
      body.appendChild(ta);
      const acts = E('div', 'gxl-bacts');
      const chk = E('button', 'btn-primary', 'Kiểm tra câu của tôi'); chk.type = 'button';
      const pl = E('button', 'btn-ghost', '▶ Nghe câu của tôi'); pl.type = 'button'; pl.addEventListener('click', () => say(ta.value, 0.85));
      acts.appendChild(chk); acts.appendChild(pl); body.appendChild(acts);
      const out = E('div', 'gxl-wout'); body.appendChild(out);
      chk.addEventListener('click', () => {
        out.innerHTML = '';
        const ss = (ta.value.match(/[^.!?\n]+[.!?]?/g) || []).map(x => x.trim()).filter(x => /[a-z]/i.test(x));
        if (!ss.length) { out.appendChild(E('div', 'gxl-wl warn', 'Bạn hãy viết ít nhất một câu tiếng Anh nhé.')); return; }
        let good = 0; const kinds = new Set();
        ss.slice(0, 6).forEach(s => {
          const r = check(s, w.mode);
          if (r.kind) kinds.add(r.kind);
          let ok = r.ok;
          if (ok && w.mode === 'pc' && r.kind === 'ps') { ok = null; r.msg = 'Câu này là hiện tại đơn (thói quen). Bài này cần việc đang làm: am / is / are + V-ing.'; }
          if (ok && w.mode === 'ps' && r.kind === 'pc') { ok = null; r.msg = 'Câu đúng, nhưng đây là thì tiếp diễn (đang làm). Bài này cần thói quen: I get up at six.'; }
          if (ok) good++;
          const row = E('div', 'gxl-wl ' + (ok ? 'ok' : ok === false ? 'bad' : 'warn'));
          row.appendChild(E('b', null, (ok ? '✓ ' : ok === false ? '✗ ' : '• ') + s));
          row.appendChild(E('span', null, r.msg));
          out.appendChild(row);
        });
        if (w.mode === 'svc' && !(kinds.has('ps') && kinds.has('pc'))) out.appendChild(E('div', 'gxl-wl warn', kinds.has('pc') ? 'Thêm một câu về thói quen (hiện tại đơn) nữa nhé.' : 'Thêm một câu về việc đang làm lúc này (am / is / are + V-ing) nữa nhé.'));
        out.appendChild(E('p', 'gxl-note', 'App kiểm tra cách chia động từ theo chủ ngữ, không kiểm tra từ vựng hay chính tả. Muốn sửa kỹ hơn, dùng ô “Viết” ở tab Practice.'));
        if (good) { done('w'); try { if (window.actLog) actLog('w', good); } catch (e) {} }
      });
    }

    function timeline() {
      const t = E('div', 'gxl-time');
      t.appendChild(E('div', 'gxl-time-h', 'Hai thì trên trục thời gian'));
      const days = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
      const row = (lbl, en, vi, mark) => {
        const r = E('div', 'gxl-tlr');
        const head = E('div', 'gxl-tlt'); head.appendChild(E('b', null, lbl)); head.appendChild(E('span', null, en));
        const pl = E('button', 'gxl-play', '▶'); pl.type = 'button'; pl.setAttribute('aria-label', 'Nghe: ' + en); pl.addEventListener('click', () => say(en)); head.appendChild(pl);
        r.appendChild(head);
        const bar = E('div', 'gxl-tlbar');
        days.forEach((dname, i) => { const c = E('span', 'gxl-tld' + (mark(i) ? ' on' : '') + (i === 3 ? ' now' : '')); c.appendChild(E('i', null, dname)); bar.appendChild(c); });
        r.appendChild(bar); r.appendChild(E('div', 'gxl-tlvi', vi));
        return r;
      };
      t.appendChild(row('Đơn', 'I drink tea every day.', 'Ngày nào cũng lặp lại → thói quen', () => true));
      t.appendChild(row('Tiếp diễn', 'I am drinking tea now.', 'Chỉ đúng lúc này (ô có viền là hôm nay)', i => i === 3));
      return t;
    }

    drawTabs(); draw();
    return box;
  }

  window.gxLearnHas = id => !!D[id];
  window.gxLearnBox = build;
})();
