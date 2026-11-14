/* v171: trang đang ẩn chỉ vẽ lần đầu khi bạn mở tới (app mở nhanh hơn).
   Nếu trang đã được vẽ bằng đường khác (ví dụ mở thẳng một bài từ "Hôm nay") thì không vẽ đè. */
function whenPageShown(pageId, root, fn) {
  const pg = document.getElementById(pageId);
  const run = () => { const f = root && root.firstElementChild; if (!f || f.classList.contains('lazy-wait')) fn(); };   // v233: chữ “Đang tải…” không tính là đã vẽ
  if (!pg || pg.classList.contains('active')) { run(); return; }
  const mo = new MutationObserver(() => { if (pg.classList.contains('active')) { mo.disconnect(); run(); } });
  mo.observe(pg, { attributes: true, attributeFilter: ['class'] });
}

/* ============================================================
   COLLOCATIONS — words that commonly go together
   Each group: { id, group, note, items: [{ p: phrase, m: meaning, ex: example }] }
============================================================ */
/* COLLOCATIONS: xem file dữ liệu */

/* ============================================================
   GRAMMAR TOPICS (beyond the 12 tenses)
============================================================ */
/* GRAMMAR_TOPICS: xem file dữ liệu */

/* ============================================================
   12 TENSES (English tenses with formula, usage, examples)
============================================================ */
/* TENSES: xem file dữ liệu */

/* ============================================================
   IRREGULAR VERBS (V1 - V2 - V3 with Vietnamese meaning)
============================================================ */
/* IRREGULAR_VERBS: xem file dữ liệu */

/* ============================================================
   ADJECTIVES & ADVERBS
   Each entry: adj (tính từ), adv (trạng từ), meaning (nghĩa),
   ex_adj (câu ví dụ tính từ), ex_adv (câu ví dụ trạng từ)
============================================================ */
const ADJ_ADV_DATA = [
  { group: "Cảm xúc & Tính cách",
    items: [
      { adj: "happy",      adv: "happily",      meaning: "vui vẻ",          ex_adj: "She looks happy today.",              ex_adv: "She smiled happily." },
      { adj: "sad",        adv: "sadly",         meaning: "buồn",            ex_adj: "He felt sad after the news.",         ex_adv: "He walked sadly home." },
      { adj: "angry",      adv: "angrily",       meaning: "tức giận",        ex_adj: "She was angry at the delay.",         ex_adv: "He spoke angrily to them." },
      { adj: "calm",       adv: "calmly",        meaning: "bình tĩnh",       ex_adj: "Stay calm in an emergency.",          ex_adv: "She answered calmly." },
      { adj: "nervous",    adv: "nervously",     meaning: "lo lắng",         ex_adj: "He was nervous before the exam.",     ex_adv: "She waited nervously." },
      { adj: "brave",      adv: "bravely",       meaning: "dũng cảm",        ex_adj: "The brave soldier fought on.",        ex_adv: "He bravely faced the danger." },
      { adj: "kind",       adv: "kindly",        meaning: "tốt bụng",        ex_adj: "She is a kind person.",               ex_adv: "He kindly offered to help." },
      { adj: "proud",      adv: "proudly",       meaning: "tự hào",          ex_adj: "She was proud of her son.",           ex_adv: "He proudly displayed his medal." }
    ]
  },
  { group: "Tốc độ & Thời gian",
    items: [
      { adj: "quick",      adv: "quickly",       meaning: "nhanh",           ex_adj: "She is a quick learner.",             ex_adv: "He ran quickly to the bus." },
      { adj: "slow",       adv: "slowly",        meaning: "chậm",            ex_adj: "The slow turtle won the race.",       ex_adv: "Please speak slowly." },
      { adj: "sudden",     adv: "suddenly",      meaning: "bất ngờ",         ex_adj: "There was a sudden noise.",           ex_adv: "The lights suddenly went out." },
      { adj: "immediate",  adv: "immediately",   meaning: "ngay lập tức",    ex_adj: "We need an immediate answer.",        ex_adv: "She immediately called the doctor." },
      { adj: "frequent",   adv: "frequently",    meaning: "thường xuyên",    ex_adj: "He is a frequent traveler.",          ex_adv: "She frequently goes to the gym." },
      { adj: "rare",       adv: "rarely",        meaning: "hiếm khi",        ex_adj: "This is a rare opportunity.",         ex_adv: "He rarely eats fast food." }
    ]
  },
  { group: "Mức độ & Số lượng",
    items: [
      { adj: "complete",   adv: "completely",    meaning: "hoàn toàn",       ex_adj: "The job is complete.",                ex_adv: "I completely forgot about it." },
      { adj: "clear",      adv: "clearly",       meaning: "rõ ràng",         ex_adj: "The answer is clear.",                ex_adv: "Please speak more clearly." },
      { adj: "strong",     adv: "strongly",      meaning: "mạnh mẽ",         ex_adj: "She has a strong opinion.",           ex_adv: "I strongly disagree with you." },
      { adj: "hard",       adv: "hard",          meaning: "chăm chỉ / khó",  ex_adj: "It's a hard question.",               ex_adv: "She works very hard." },
      { adj: "high",       adv: "highly",        meaning: "cao / rất",       ex_adj: "The building is very high.",          ex_adv: "He is highly recommended." },
      { adj: "deep",       adv: "deeply",        meaning: "sâu sắc",         ex_adj: "The lake is deep.",                   ex_adv: "She was deeply moved by the story." },
      { adj: "wide",       adv: "widely",        meaning: "rộng / rộng rãi", ex_adj: "The road is wide.",                   ex_adv: "This method is widely used." }
    ]
  },
  { group: "Phong cách & Cách thức",
    items: [
      { adj: "careful",    adv: "carefully",     meaning: "cẩn thận",        ex_adj: "Be careful on the stairs.",           ex_adv: "She carefully read the contract." },
      { adj: "careless",   adv: "carelessly",    meaning: "bất cẩn",         ex_adj: "A careless mistake cost us time.",    ex_adv: "He carelessly dropped the glass." },
      { adj: "quiet",      adv: "quietly",       meaning: "im lặng",         ex_adj: "The library is quiet.",               ex_adv: "She tiptoed quietly out of the room." },
      { adj: "loud",       adv: "loudly",        meaning: "to / ồn ào",      ex_adj: "The music was too loud.",             ex_adv: "He laughed loudly." },
      { adj: "polite",     adv: "politely",      meaning: "lịch sự",         ex_adj: "She gave a polite reply.",            ex_adv: "He politely declined the invitation." },
      { adj: "rude",       adv: "rudely",        meaning: "thô lỗ",          ex_adj: "His rude behavior upset everyone.",   ex_adv: "She rudely interrupted him." },
      { adj: "serious",    adv: "seriously",     meaning: "nghiêm túc",      ex_adj: "This is a serious problem.",          ex_adv: "Take your health seriously." },
      { adj: "easy",       adv: "easily",        meaning: "dễ dàng",         ex_adj: "The test was easy.",                  ex_adv: "She easily passed the exam." }
    ]
  },
  { group: "Tính từ bất quy tắc (không thêm -ly)",
    items: [
      { adj: "good",       adv: "well",          meaning: "tốt",             ex_adj: "She is a good teacher.",              ex_adv: "He speaks English well." },
      { adj: "fast",       adv: "fast",          meaning: "nhanh",           ex_adj: "He is a fast runner.",                ex_adv: "She drives too fast." },
      { adj: "late",       adv: "late",          meaning: "muộn",            ex_adj: "The late train arrived at 10pm.",     ex_adv: "He arrived late to the meeting." },
      { adj: "early",      adv: "early",         meaning: "sớm",             ex_adj: "She is an early riser.",              ex_adv: "Please arrive early." },
      { adj: "straight",   adv: "straight",      meaning: "thẳng",           ex_adj: "Draw a straight line.",               ex_adv: "Go straight ahead." }
    ]
  }
];

const ADJ_ADV_IPA = {
  "happy": "/ˈhæpi/",
  "happily": "/ˈhæpɪli/",
  "sad": "/sæd/",
  "sadly": "/ˈsædli/",
  "angry": "/ˈæŋɡri/",
  "angrily": "/ˈæŋɡrəli/",
  "calm": "/kɑːm/",
  "calmly": "/ˈkɑːmli/",
  "nervous": "/ˈnɜːvəs/",
  "nervously": "/ˈnɜːvəsli/",
  "brave": "/breɪv/",
  "bravely": "/ˈbreɪvli/",
  "kind": "/kaɪnd/",
  "kindly": "/ˈkaɪndli/",
  "proud": "/praʊd/",
  "proudly": "/ˈpraʊdli/",
  "quick": "/kwɪk/",
  "quickly": "/ˈkwɪkli/",
  "slow": "/sləʊ/",
  "slowly": "/ˈsləʊli/",
  "sudden": "/ˈsʌdn/",
  "suddenly": "/ˈsʌdənli/",
  "immediate": "/ɪˈmiːdiət/",
  "immediately": "/ɪˈmiːdiətli/",
  "frequent": "/ˈfriːkwənt/",
  "frequently": "/ˈfriːkwəntli/",
  "rare": "/reə(r)/",
  "rarely": "/ˈreəli/",
  "complete": "/kəmˈpliːt/",
  "completely": "/kəmˈpliːtli/",
  "clear": "/klɪə(r)/",
  "clearly": "/ˈklɪəli/",
  "strong": "/strɒŋ/",
  "strongly": "/ˈstrɒŋli/",
  "hard": "/hɑːd/",
  "high": "/haɪ/",
  "highly": "/ˈhaɪli/",
  "deep": "/diːp/",
  "deeply": "/ˈdiːpli/",
  "wide": "/waɪd/",
  "widely": "/ˈwaɪdli/",
  "careful": "/ˈkeəfl/",
  "carefully": "/ˈkeəfəli/",
  "careless": "/ˈkeələs/",
  "carelessly": "/ˈkeələsli/",
  "quiet": "/ˈkwaɪət/",
  "quietly": "/ˈkwaɪətli/",
  "loud": "/laʊd/",
  "loudly": "/ˈlaʊdli/",
  "polite": "/pəˈlaɪt/",
  "politely": "/pəˈlaɪtli/",
  "rude": "/ruːd/",
  "rudely": "/ˈruːdli/",
  "serious": "/ˈsɪəriəs/",
  "seriously": "/ˈsɪəriəsli/",
  "easy": "/ˈiːzi/",
  "easily": "/ˈiːzəli/",
  "good": "/ɡʊd/",
  "well": "/wel/",
  "fast": "/fɑːst/",
  "late": "/leɪt/",
  "early": "/ˈɜːli/",
  "straight": "/streɪt/"
};

/* ============================================================
   PRONUNCIATION DICTIONARY
   syllables: array of syllable strings (as written)
   stress: index (0-based) of the stressed syllable
   ipa: simplified IPA string for display
============================================================ */
const PRON_DICT = {
  "pronunciation": { syllables: ["pro","nun","ci","a","tion"], stress: 3, ipa: "/prəˌnʌnsiˈeɪʃn/", meaning: "sự phát âm" },
  "comfortable": { syllables: ["com","for","ta","ble"], stress: 0, ipa: "/ˈkʌmftəbl/", meaning: "thoải mái" },
  "vegetable": { syllables: ["ve","ge","ta","ble"], stress: 0, ipa: "/ˈvedʒtəbl/", meaning: "rau, rau củ" },
  "important": { syllables: ["im","por","tant"], stress: 1, ipa: "/ɪmˈpɔːrtnt/", meaning: "quan trọng" },
  "interesting": { syllables: ["in","ter","es","ting"], stress: 0, ipa: "/ˈɪntrəstɪŋ/", meaning: "thú vị" },
  "photograph": { syllables: ["pho","to","graph"], stress: 0, ipa: "/ˈfoʊtəɡræf/", meaning: "bức ảnh" },
  "photography": { syllables: ["pho","tog","ra","phy"], stress: 1, ipa: "/fəˈtɒɡrəfi/", meaning: "nhiếp ảnh" },
  "develop": { syllables: ["de","vel","op"], stress: 1, ipa: "/dɪˈveləp/", meaning: "phát triển" },
  "development": { syllables: ["de","vel","op","ment"], stress: 1, ipa: "/dɪˈveləpmənt/", meaning: "sự phát triển" },
  "education": { syllables: ["ed","u","ca","tion"], stress: 2, ipa: "/ˌedʒuˈkeɪʃn/", meaning: "giáo dục" },
  "communication": { syllables: ["com","mu","ni","ca","tion"], stress: 3, ipa: "/kəˌmjuːnɪˈkeɪʃn/", meaning: "sự giao tiếp" },
  "information": { syllables: ["in","for","ma","tion"], stress: 2, ipa: "/ˌɪnfərˈmeɪʃn/", meaning: "thông tin" },
  "computer": { syllables: ["com","pu","ter"], stress: 1, ipa: "/kəmˈpjuːtər/", meaning: "máy tính" },
  "banana": { syllables: ["ba","na","na"], stress: 1, ipa: "/bəˈnænə/", meaning: "quả chuối" },
  "umbrella": { syllables: ["um","brel","la"], stress: 1, ipa: "/ʌmˈbrelə/", meaning: "cái ô, dù" },
  "hospital": { syllables: ["hos","pi","tal"], stress: 0, ipa: "/ˈhɒspɪtl/", meaning: "bệnh viện" },
  "different": { syllables: ["dif","fer","ent"], stress: 0, ipa: "/ˈdɪfrənt/", meaning: "khác nhau" },
  "difference": { syllables: ["dif","fer","ence"], stress: 0, ipa: "/ˈdɪfrəns/", meaning: "sự khác biệt" },
  "necessary": { syllables: ["nec","es","sar","y"], stress: 0, ipa: "/ˈnesəseri/", meaning: "cần thiết" },
  "experience": { syllables: ["ex","pe","ri","ence"], stress: 1, ipa: "/ɪkˈspɪəriəns/", meaning: "kinh nghiệm, trải nghiệm" },
  "beautiful": { syllables: ["beau","ti","ful"], stress: 0, ipa: "/ˈbjuːtɪfl/", meaning: "xinh đẹp" },
  "family": { syllables: ["fa","mi","ly"], stress: 0, ipa: "/ˈfæməli/", meaning: "gia đình" },
  "language": { syllables: ["lan","guage"], stress: 0, ipa: "/ˈlæŋɡwɪdʒ/", meaning: "ngôn ngữ" },
  "restaurant": { syllables: ["res","tau","rant"], stress: 0, ipa: "/ˈrestrɒnt/", meaning: "nhà hàng" },
  "vocabulary": { syllables: ["vo","cab","u","lar","y"], stress: 1, ipa: "/vəˈkæbjələri/", meaning: "từ vựng" },
  "grammar": { syllables: ["gram","mar"], stress: 0, ipa: "/ˈɡræmər/", meaning: "ngữ pháp" },
  "dictionary": { syllables: ["dic","tion","ar","y"], stress: 0, ipa: "/ˈdɪkʃəneri/", meaning: "từ điển" },
  "afternoon": { syllables: ["af","ter","noon"], stress: 2, ipa: "/ˌɑːftərˈnuːn/", meaning: "buổi chiều" },
  "tomorrow": { syllables: ["to","mor","row"], stress: 1, ipa: "/təˈmɒroʊ/", meaning: "ngày mai" },
  "yesterday": { syllables: ["yes","ter","day"], stress: 0, ipa: "/ˈjestərdeɪ/", meaning: "hôm qua" },
  "exercise": { syllables: ["ex","er","cise"], stress: 0, ipa: "/ˈeksərsaɪz/", meaning: "bài tập, sự luyện tập" },
  "advertisement": { syllables: ["ad","ver","tise","ment"], stress: 1, ipa: "/ədˈvɜːrtɪsmənt/", meaning: "quảng cáo" },
  "available": { syllables: ["a","vail","a","ble"], stress: 1, ipa: "/əˈveɪləbl/", meaning: "có sẵn, rảnh" },
  "popular": { syllables: ["pop","u","lar"], stress: 0, ipa: "/ˈpɒpjələr/", meaning: "phổ biến, được yêu thích" },
  "decision": { syllables: ["de","ci","sion"], stress: 1, ipa: "/dɪˈsɪʒn/", meaning: "quyết định" },
  "environment": { syllables: ["en","vi","ron","ment"], stress: 1, ipa: "/ɪnˈvaɪrənmənt/", meaning: "môi trường" },
  "technology": { syllables: ["tech","nol","o","gy"], stress: 1, ipa: "/tekˈnɒlədʒi/", meaning: "công nghệ" },
  "university": { syllables: ["u","ni","ver","si","ty"], stress: 2, ipa: "/ˌjuːnɪˈvɜːrsəti/", meaning: "trường đại học" },
  "occasion": { syllables: ["oc","ca","sion"], stress: 1, ipa: "/əˈkeɪʒn/", meaning: "dịp, sự kiện" },
  "comfortably": { syllables: ["com","fort","a","bly"], stress: 0, ipa: "/ˈkʌmftəbli/", meaning: "một cách thoải mái" },
  "remember": { syllables: ["re","mem","ber"], stress: 1, ipa: "/rɪˈmembər/", meaning: "nhớ" },
  "celebrate": { syllables: ["cel","e","brate"], stress: 0, ipa: "/ˈselɪbreɪt/", meaning: "ăn mừng, kỷ niệm" },
  "celebration": { syllables: ["cel","e","bra","tion"], stress: 2, ipa: "/ˌselɪˈbreɪʃn/", meaning: "lễ kỷ niệm, sự ăn mừng" }
};

const PRON_QUICK_WORDS = [
  "pronunciation", "comfortable", "vegetable", "important",
  "interesting", "photograph", "develop", "necessary"
];

/* ============================================================
   SYLLABLE HEURISTIC (fallback for words not in dictionary)
   Splits a word into approximate syllables based on vowel groups,
   and guesses stress (default: first syllable for 2-syllable words,
   second-to-last for longer words - a common English pattern).
============================================================ */
function splitSyllablesHeuristic(word) {
  const w = word.toLowerCase();
  const vowels = "aeiouy";

  // If the word ends in a consonant + "e" (e.g. make, table, time),
  // treat the final "e" as silent and attach it to the last syllable.
  let core = w;
  let silentE = "";
  if (w.length > 2 && /[^aeiouy]e$/.test(w)) {
    core = w.slice(0, -1);
    silentE = "e";
  }

  // Split core into syllables on vowel groups followed by consonants
  let syllables = core.match(/[^aeiouy]*[aeiouy]+[^aeiouy]*/gi) || [core];

  // redistribute trailing consonants: a syllable shouldn't end with a consonant
  // if the next syllable starts with one too many - simple rebalance:
  // move a single trailing consonant to the next syllable if it has none leading
  for (let i = 0; i < syllables.length - 1; i++) {
    const cur = syllables[i];
    const next = syllables[i + 1];
    const trailingCons = cur.match(/[^aeiouy]+$/i);
    if (trailingCons && trailingCons[0].length > 1) {
      // keep one consonant with current syllable, push rest to next
      const keep = trailingCons[0].length - 1;
      const moved = trailingCons[0].slice(keep);
      syllables[i] = cur.slice(0, cur.length - trailingCons[0].length) + trailingCons[0].slice(0, keep);
      syllables[i + 1] = moved + next;
    }
  }

  // attach silent "e" back to the last syllable
  if (silentE) {
    syllables[syllables.length - 1] += silentE;
  }

  if (syllables.length === 0) syllables = [w];

  // Stress guess: 1 syllable -> 0; 2 syllables -> 0 (common for nouns/adjs);
  // 3+ syllables -> length-2 (common penultimate pattern)
  let stress = 0;
  if (syllables.length === 2) stress = 0;
  else if (syllables.length >= 3) stress = syllables.length - 2;

  return { syllables, stress, ipa: null, guessed: true };
}

function getPronData(word) {
  const clean = word.toLowerCase().replace(/[^a-z']/g, "");
  if (PRON_DICT[clean]) {
    return { ...PRON_DICT[clean], word: clean, guessed: false };
  }
  if (clean.length <= 1) {
    return { syllables: [clean], stress: 0, ipa: null, word: clean, guessed: true };
  }
  const h = splitSyllablesHeuristic(clean);
  return { ...h, word: clean };
}

/* ============================================================
   SPEECH SYNTHESIS HELPERS
============================================================ */
let pronVoice = null;
function pickEnglishVoice() {
  if (!('speechSynthesis' in window)) return null;
  const voices = speechSynthesis.getVoices();
  if (!voices.length) return null;
  const us = voices.filter(v => (v.lang || '').replace('_', '-') === 'en-US');
  const good = v => /natural|neural|online|enhanced|premium|^google|samantha|\bava\b/i.test(v.name) && !/albert|bad news|bells|boing|bubbles|cellos|jester|organ|superstar|trinoids|whisper|wobble|zarvox|eddy|grandma|grandpa|rocko|shelley|sandy|\bflo\b|\breed\b/i.test(v.name);
  return us.find(good) || us[0]
      || voices.find(v => v.lang && v.lang.startsWith('en'))
      || voices[0];
}
if ('speechSynthesis' in window) {
  speechSynthesis.onvoiceschanged = () => { pronVoice = pickEnglishVoice(); };
  pronVoice = pickEnglishVoice();
}

/* Robust playback for desktop Chrome / Edge as well as iPhone:
   - keep a reference to the utterance (Chrome drops audio of garbage-collected utterances)
   - after cancel(), wait a moment before speaking if something was playing (Chrome/Edge swallow it otherwise)
   - resume() in case the engine got stuck in a paused state
   - online voices (Google…, Microsoft … Online) that never start or fail are retried once with a voice installed on the device
   - keep online voices alive past Chrome's ~15 s cut-off */
const TTS = { keep: null, timer: 0, ka: 0, watch: 0, stuck: 0, last: null, micEnd: 0 };
// v142: micro vừa tắt → iPhone / Windows cần một nhịp để chuyển âm thanh từ "ghi âm" về "phát" (nếu không tiếng đọc bị vấp, nhỏ hoặc mất chữ đầu)
function ttsMicEnded() { TTS.micEnd = Date.now(); audioMode('auto'); }
/* v179: iPhone (Safari 16.4+) — khi micro mở, máy chuyển sang chế độ "gọi thoại": tiếng phát ra nhỏ hẳn, có khi ra loa trong.
   Trước đây app không chuyển lại, nên sau khi dùng micro tiếng lúc to lúc nhỏ. Giờ: mở micro → "play-and-record", tắt micro → "playback". */
function audioMode(m) { try { const s = navigator.audioSession; if (s && s.type !== m) s.type = m; } catch (e) {} }
/* v192: lỗi "lần đầu thu tốt, lần 2–3 không thu": sau lần nói đầu app chuyển iPhone sang "playback" (chế độ chỉ phát, không cho thu),
   rồi ngay trước lần nói sau mới chuyển sang "play-and-record". iPhone đổi chế độ không kịp, micro mở nhưng thu im lặng.
   Giờ: luôn để "auto" (iPhone tự chọn: đang thu thì vào chế độ thu, thu xong tự về phát bình thường), không còn đổi qua lại.
   Nếu trước đó đang ở "playback" (do phát âm mẫu IPA) thì đổi về "auto" và trả về số ms nên đợi trước khi mở micro. */
function micOpening() {
  try { const s = navigator.audioSession; if (s && s.type !== 'auto') { s.type = 'auto'; return TTS_IOS ? 350 : 0; } } catch (e) {}
  return 0;
}
// v142: tốc độ quá chậm làm giọng máy bị kéo dài, rè và giật → giữ trong khoảng nghe tự nhiên (0.5 → 0.72, 0.8 → 0.87)
function ttsRate(r) { r = r || 0.9; return r >= 0.9 ? r : Math.max(0.68, 0.72 + (r - 0.5) * 0.5); }
const TTS_IOS = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
// v129: nhớ danh sách giọng (một số máy Android trả về danh sách mới rất chậm mỗi lần hỏi); làm mới khi trình duyệt báo đổi
let TTS_VOICES = null, TTS_VCHECKED = false;
if ('speechSynthesis' in window) { try { speechSynthesis.addEventListener('voiceschanged', () => { TTS_VOICES = null; TTS_VCHECKED = true; }); } catch (e) {} }
function ttsVoices() {
  if (TTS_VOICES && TTS_VOICES.length) return TTS_VOICES;
  try { const v = speechSynthesis.getVoices() || []; if (v.length) TTS_VOICES = v; return v; } catch (e) { return []; }
}
// Chrome / Edge / Android nạp giọng không đồng bộ: lần đọc đầu tiên đợi tối đa 0,7 giây cho có giọng, khỏi đọc bằng giọng sai hoặc im lặng
function ttsWaitVoices() {
  return new Promise(res => {
    const t = setTimeout(done, 700);
    function done() { clearTimeout(t); TTS_VCHECKED = true; res(); }
    try { speechSynthesis.addEventListener('voiceschanged', done, { once: true }); } catch (e) { done(); }
  });
}
function ttsFresh(v) {
  if (!v) return null;
  const all = ttsVoices();
  return all.find(x => x.voiceURI === v.voiceURI && x.name === v.name) || all.find(x => x.name === v.name) || null;
}
function ttsLocal(lang) {
  const l = (lang || 'en').toLowerCase().replace('_', '-');
  const all = ttsVoices().filter(v => v.localService);
  return all.find(v => (v.lang || '').toLowerCase().replace('_', '-') === l)
      || all.find(v => (v.lang || '').toLowerCase().startsWith(l.slice(0, 2)))
      || null;
}
/* v170: câu dài (> ~180 ký tự) được chia theo câu / dấu phẩy và đọc nối tiếp.
   Trước đây giọng online phải pause()+resume() mỗi 9 giây để khỏi bị Chrome cắt ở ~15 giây → nghe bị khựng. */
const TTS_MAX = 180;
function ttsSplit(text) {
  const t = String(text || '').replace(/\s+/g, ' ').trim();
  if (t.length <= TTS_MAX) return [t];
  const sent = t.match(/[^.!?…;:]+[.!?…;:]+["”’)]*\s*|[^.!?…;:]+$/g) || [t];
  const out = []; let cur = '';
  const push = piece => {
    piece = piece.trim(); if (!piece) return;
    if (piece.length > TTS_MAX) {   // câu quá dài không có dấu chấm → tách tiếp ở dấu phẩy, rồi theo từ
      const parts = piece.split(/(?<=,)\s+/); let c = '';
      parts.forEach(pp => {
        if ((c + ' ' + pp).trim().length > TTS_MAX && c) { out.push(c.trim()); c = ''; }
        if (pp.length > TTS_MAX) { pp.split(' ').forEach(w => { if ((c + ' ' + w).length > TTS_MAX && c) { out.push(c.trim()); c = ''; } c += ' ' + w; }); }
        else c += ' ' + pp;
      });
      if (c.trim()) out.push(c.trim());
      return;
    }
    out.push(piece);
  };
  sent.forEach(sx => { if ((cur + ' ' + sx).trim().length > TTS_MAX && cur) { push(cur); cur = ''; } cur += ' ' + sx; });
  if (cur.trim()) push(cur);
  return out.length ? out : [t];
}
let TTS_SEQ = 0;
// bấm dừng ở bất cứ đâu (speechSynthesis.cancel) → cũng dừng luôn các đoạn còn lại của câu dài
try { if (window.speechSynthesis && !speechSynthesis.__seqWrap) { const oc = speechSynthesis.cancel.bind(speechSynthesis); speechSynthesis.cancel = function () { TTS_SEQ++; return oc(); }; speechSynthesis.__seqWrap = true; } } catch (e) {}
/* v206: khi máy đọc bị "kẹt" app huỷ câu rồi đọc lại (xem ttsPlay). Lệnh huỷ làm trình duyệt bắn lỗi "canceled" cho câu cũ,
   khiến Listening/Shadowing tưởng câu đã xong → nhảy sang câu sau và cắt ngang câu đang đọc lại. Bỏ qua lỗi thật của câu đã được thay. */
try {
  const UP = window.SpeechSynthesisUtterance && SpeechSynthesisUtterance.prototype;
  if (UP && !UP.__swapWrap) {
    const oAdd = UP.addEventListener;
    UP.addEventListener = function (type, fn, opt) {
      if (type === 'error' && typeof fn === 'function') {
        const self = this, w = function (e) { if (self.__swap && e && e.isTrusted) return; return fn.call(this, e); };
        return oAdd.call(this, type, w, opt);
      }
      return oAdd.call(this, type, fn, opt);
    };
    UP.__swapWrap = true;
  }
} catch (e) {}
function ttsPlay(u, retried, inChain) {
  const ss = window.speechSynthesis;
  if (!ss) return u;
  // câu dài → đọc nối tiếp từng đoạn; sự kiện start/end/error vẫn báo về câu gốc u
  if (!retried && !u.__chunk) {
    const parts = ttsSplit(u.text);
    if (parts.length > 1) {
      let was = false; try { was = !!(ss.speaking || ss.pending); if (was) ss.cancel(); } catch (e) {}
      const seq = ++TTS_SEQ;
      let k = 0, startedAll = false;
      const fire = ev => { try { u.dispatchEvent(new Event(ev)); } catch (e) {} };
      const next = () => {
        if (seq !== TTS_SEQ) return;
        if (k >= parts.length) { fire('end'); return; }
        const c = new SpeechSynthesisUtterance(parts[k++]);
        c.__chunk = true; c.voice = u.voice; c.lang = u.lang; c.rate = u.rate; c.pitch = u.pitch; c.volume = u.volume;
        c.addEventListener('start', () => { if (!startedAll) { startedAll = true; fire('start'); } });
        c.addEventListener('end', () => { if (seq === TTS_SEQ) next(); });
        c.addEventListener('error', e => { const er = e && e.error; if (er === 'interrupted' || er === 'canceled') { TTS_SEQ === seq && (TTS_SEQ++); return; } next(); });
        ttsPlay(c, false, true);
      };
      if (was) setTimeout(next, TTS_IOS ? 150 : 70); else next();
      return u;
    }
  }
  if (!u.__chunk) TTS_SEQ++;   // câu mới (không phải đoạn kế tiếp) → dừng chuỗi đoạn đang đọc
  if (!retried && !TTS_IOS && !TTS_VCHECKED && !u.__vw && !ttsVoices().length) {
    u.__vw = true;
    ttsWaitVoices().then(() => {
      if (!u.voice) {
        const vi = /^vi/i.test(u.lang || '');
        const v = vi ? ttsVoices().find(x => /^vi/i.test(x.lang || '')) : (pronVoice || ttsLocal(u.lang));
        if (v) { u.voice = v; u.lang = (v.lang || u.lang || 'en-US').replace('_', '-'); }
      }
      ttsPlay(u);
    });
    return u;
  }
  clearTimeout(TTS.timer); clearInterval(TTS.ka); clearTimeout(TTS.watch); clearTimeout(TTS.stuck);
  let busy = false;
  try { busy = !!(ss.speaking || ss.pending); } catch (e) {}
  // v170: chỉ cancel khi đang có tiếng — gọi cancel() lúc máy rảnh làm Chrome/Safari vấp ở đầu câu mới
  if (inChain) busy = false;
  else if (busy) { try { ss.cancel(); } catch (e) {} }
  if (u.voice) { const f = ttsFresh(u.voice); if (f) u.voice = f; else if (ttsVoices().length) u.voice = null; }
  TTS.keep = u;
  let started = false;
  const online = !!(u.voice && u.voice.localService === false);
  const retry = why => {
    if (retried || TTS.keep !== u) return;
    const alt = ttsLocal(u.lang);
    if (!alt || (u.voice && alt.voiceURI === u.voice.voiceURI)) return;
    const r = new SpeechSynthesisUtterance(u.text);
    r.voice = alt; r.lang = (alt.lang || u.lang || 'en-US').replace('_', '-'); r.rate = u.rate;
    r.onend = u.onend; r.onerror = u.onerror; r.onstart = u.onstart;
    ttsPlay(r, true);
  };
  try {
    u.addEventListener('start', () => { started = true; clearTimeout(TTS.watch); clearTimeout(TTS.stuck); TTS.last = { ok: true, at: Date.now() }; });
    u.addEventListener('end', () => { clearInterval(TTS.ka); if (TTS.keep === u) TTS.keep = null; });
    u.addEventListener('error', e => {
      clearInterval(TTS.ka);
      const err = e && e.error;
      if (err !== 'interrupted' && err !== 'canceled') retry(err);
    });
  } catch (e) {}
  const go = () => {
    try { if (ss.paused) ss.resume(); } catch (e) {}
    try { ss.speak(u); } catch (e) { return; }
    // máy đọc bị "kẹt" (hay gặp trên iPhone sau khi mở lại app hoặc cập nhật iOS): không bắt đầu sau 2 giây → dừng hẳn rồi đọc lại một lần
    if (!retried && !online) TTS.stuck = setTimeout(() => {
      if (started || TTS.keep !== u) return;
      TTS.last = { ok: false, at: Date.now() };
      u.__swap = true;
      try { ss.cancel(); } catch (e) {}
      const r = new SpeechSynthesisUtterance(u.text);
      const f = u.voice ? ttsFresh(u.voice) : null;
      if (f) r.voice = f;
      r.lang = u.lang; r.rate = u.rate; r.volume = u.volume; r.pitch = u.pitch;
      // chuyển tiếp sự kiện về câu gốc để các phần đang chờ "đọc xong" vẫn chạy tiếp
      ['start', 'end', 'error'].forEach(ev => r.addEventListener(ev, () => { try { u.dispatchEvent(new Event(ev)); } catch (e) {} }));
      setTimeout(() => ttsPlay(r, true), 180);
    }, 2000);
    if (online) {
      TTS.watch = setTimeout(() => { if (!started && TTS.keep === u) retry('no-start'); }, 2500);
      // v170: không còn pause()+resume() định kỳ (gây khựng) — câu dài đã được chia đoạn ở trên
    }
  };
  const gap = Math.max(busy ? (TTS_IOS ? 150 : 70) : 0, TTS.micEnd ? (TTS_IOS ? 450 : 250) - (Date.now() - TTS.micEnd) : 0);
  if (gap > 0) TTS.timer = setTimeout(go, gap); else go();
  return u;
}

/* iPhone: lần phát đầu tiên phải nằm trong một lần chạm của người dùng → "mở khoá" bằng một câu im lặng ở lần chạm đầu tiên */
(function () {
  if (!('speechSynthesis' in window)) return;
  let done = false;
  const unlock = () => {
    if (done) return; done = true;
    ['touchend', 'click', 'keydown'].forEach(ev => document.removeEventListener(ev, unlock, true));
    try { if (speechSynthesis.speaking || speechSynthesis.pending) return; const u = new SpeechSynthesisUtterance(' '); u.volume = 0; u.rate = 2; speechSynthesis.speak(u); } catch (e) {}
  };
  if (TTS_IOS) ['touchend', 'click', 'keydown'].forEach(ev => document.addEventListener(ev, unlock, true));
  // quay lại app sau khi chuyển sang app khác: xoá trạng thái đọc cũ bị treo
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') { try { if (!TTS.keep && (speechSynthesis.speaking || speechSynthesis.pending)) speechSynthesis.cancel(); speechSynthesis.resume(); } catch (e) {} }
    else { try { speechSynthesis.cancel(); } catch (e) {} TTS.keep = null; }
  });
})();

function speak(text, rate, lang) {
  if (!('speechSynthesis' in window)) {
    alert("Thiết bị này không hỗ trợ phát âm (Web Speech API). Hãy thử trên Chrome hoặc Safari.");
    return;
  }
  const utter = new SpeechSynthesisUtterance(text);
  if (lang === 'vi') {
    utter.lang = 'vi-VN';
    const viVoice = speechSynthesis.getVoices().find(v => v.lang && v.lang.toLowerCase().startsWith('vi'));
    if (viVoice) utter.voice = viVoice;
  } else {
    utter.lang = 'en-US';
    if (pronVoice) { utter.voice = pronVoice; utter.lang = (pronVoice.lang || 'en-US').replace('_', '-'); }
  }
  utter.rate = ttsRate(rate || 0.8);
  return ttsPlay(utter);
}

/* ============================================================
   CLAUDE HELPER
   When the app is opened as a claude.ai Artifact, outside network access
   is blocked, so translation / meanings / IPA are asked from Claude via
   the "sample" capability. When the file is opened in a normal browser,
   window.claude doesn't exist and the free public services are used.
============================================================ */
const claudeSamplePromise = (window.claude && typeof window.claude.use === 'function')
  ? window.claude.use('sample').catch(() => null)
  : Promise.resolve(null);
let claudeSampleBlocked = false;   // viewer declined or Claude unavailable
let claudeSampleReady = false;     // resolved to a usable function
claudeSamplePromise.then(fn => {
  claudeSampleReady = !!fn;
  const hint = document.getElementById('tr-hint');
  if (hint && !fn) hint.textContent = 'Tự dịch khi bạn ngừng gõ · Dịch nguyên văn câu bạn nhập, câu đã sửa chỉ dịch khi bạn chọn · Cần kết nối mạng';
});

async function askClaude(prompt, opts) {
  if (claudeSampleBlocked) return null;
  const sample = await claudeSamplePromise;
  if (!sample) return null;
  try {
    const { text } = await sample(prompt, Object.assign({ modelTier: 'quick', cache: { gcTime: 86400000 } }, opts || {}));
    return (text || '').trim() || null;
  } catch (e) {
    if (['not_granted','sampling_disabled','not_declared','capability_disabled','capability_removed'].includes(e && e.code)) {
      claudeSampleBlocked = true;
    }
    const err = new Error(e && e.code || 'claude_error');
    err.code = e && e.code;
    err.partial = e && e.text;
    throw err;
  }
}

function cleanOneLine(t) {
  if (!t) return null;
  return t.split('\n')[0].replace(/^["'“”\s]+|["'“”\s]+$/g, '').trim() || null;
}

/* ============================================================
   ONLINE IPA LOOKUP (fallback for words not in offline dictionary)
   Uses the Free Dictionary API (api.dictionaryapi.dev) - no key needed.
   Results are cached in-memory for the session.
============================================================ */
const ipaCache = {};
async function fetchIpaOnline(word) {
  if (ipaCache[word] !== undefined) return ipaCache[word];
  if (await claudeSamplePromise) {
    try {
      let ipa = cleanOneLine(await askClaude(
        `Give the British English IPA transcription of the English word "${word}". ` +
        `Reply with ONLY the IPA between slashes, for example /ˈwɜːd/. No other text.`));
      if (ipa) {
        ipa = '/' + ipa.replace(/^\/+|\/+$/g, '') + '/';
        ipaCache[word] = ipa;
        return ipa;
      }
    } catch (e) { /* fall through to the public dictionary */ }
  }
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
    if (!res.ok) { ipaCache[word] = null; return null; }
    const data = await res.json();
    let ipa = null;
    if (Array.isArray(data) && data.length > 0) {
      if (data[0].phonetic) {
        ipa = data[0].phonetic;
      } else if (Array.isArray(data[0].phonetics)) {
        const withText = data[0].phonetics.find(p => p.text);
        if (withText) ipa = withText.text;
      }
    }
    if (ipa && !ipa.startsWith('/')) ipa = `/${ipa.replace(/^\/|\/$/g, '')}/`;
    ipaCache[word] = ipa;
    return ipa;
  } catch (e) {
    return null;
  }
}

/* ============================================================
   VIETNAMESE MEANING LOOKUP
   1. Check offline PRON_DICT
   2. Check offline IRREGULAR_VERBS list (reuse meaning field)
   3. Try MyMemory directly
   4. Try Google Translate directly
   5. If both direct attempts fail (common when the app is opened as a
      local file:// page, which some browsers block from reaching
      external APIs), retry both through a free public CORS proxy
      that fetches server-side and relays the response back.
   Results cached in-memory for the session.
============================================================ */
const meaningCache = {};
function getOfflineMeaning(word) {
  const clean = word.toLowerCase();
  if (PRON_DICT[clean] && PRON_DICT[clean].meaning) {
    return PRON_DICT[clean].meaning;
  }
  const verbMatch = IRREGULAR_VERBS.find(v => v.v1.toLowerCase() === clean);
  if (verbMatch) return verbMatch.meaning;
  return null;
}

// Public CORS proxies tried in order if a direct fetch fails.
// Each wraps a target URL and relays the response with proper CORS headers,
// which works even from a file:// (null origin) page.
const CORS_PROXIES = [
  url => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  url => `https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent(url)}`
];

async function fetchWithProxyFallback(targetUrl) {
  // 1) try direct first (works fine when hosted on http/https)
  try {
    const res = await fetch(targetUrl);
    if (res.ok) return await res.json();
  } catch (e) {
    console.warn('[Dịch nghĩa] Gọi trực tiếp thất bại, thử qua proxy:', e && e.message);
  }

  // 2) fall back to CORS proxies — v173: CHỈ khi mở app từ file trên máy (file://).
  //    Trên trang web thật (GitHub Pages) Google Dịch / MyMemory gọi thẳng được; nếu vẫn lỗi thì
  //    đó là do mạng hoặc dịch vụ quá tải, gửi chữ của người dùng qua máy chủ lạ không giúp được gì.
  if (location.protocol !== 'file:') return null;
  for (const buildProxyUrl of CORS_PROXIES) {
    try {
      const res = await fetch(buildProxyUrl(targetUrl));
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn('[Dịch nghĩa] Proxy thất bại:', e && e.message);
    }
  }

  return null;
}

async function fetchFromGoogleTranslate(query, sl = 'en', tl = 'vi') {
  const params = new URLSearchParams({
    client: 'gtx',
    sl: sl,
    tl: tl,
    dt: 't',
    q: query
  });
  const targetUrl = `https://translate.googleapis.com/translate_a/single?${params}`;
  const data = await fetchWithProxyFallback(targetUrl);
  // Response shape: [[[translatedChunk, originalChunk, ...], ...], ...]
  if (Array.isArray(data) && Array.isArray(data[0])) {
    const translated = data[0].map(chunk => chunk && chunk[0] ? chunk[0] : '').join('').trim();
    return translated || null;
  }
  return null;
}

async function fetchFromMyMemory(query, sl = 'en', tl = 'vi') {
  const params = new URLSearchParams({ q: query, langpair: `${sl}|${tl}` });
  const targetUrl = `https://api.mymemory.translated.net/get?${params}`;
  const data = await fetchWithProxyFallback(targetUrl);
  let meaning = data && data.responseData ? data.responseData.translatedText : null;
  if (meaning) meaning = meaning.trim();
  return meaning || null;
}

async function fetchMeaningOnline(text) {
  const cacheKey = text.toLowerCase();
  if (meaningCache[cacheKey] !== undefined) return meaningCache[cacheKey];

  if (await claudeSamplePromise) {
    try {
      const isPhrase = /\s/.test(text.trim());
      const out = await askClaude(isPhrase
        ? `Translate this English text into natural Vietnamese. Reply with ONLY the Vietnamese translation, nothing else.\n\n${text}`
        : `Give the most common Vietnamese meaning of the English word "${text}". Reply with ONLY the Vietnamese meaning (1-6 words), nothing else.`);
      const meaning = isPhrase ? out : cleanOneLine(out);
      if (meaning) { meaningCache[cacheKey] = meaning; return meaning; }
    } catch (e) { /* fall through to public services */ }
  }

  // Both providers cap requests around 500 bytes; trim defensively
  const query = text.length > 480 ? text.slice(0, 480) : text;

  let meaning = null;

  // MyMemory first: reliable CORS support even from a local file:// page.
  try {
    meaning = await fetchFromMyMemory(query);
  } catch (e) {
    console.error('[Dịch nghĩa] MyMemory lỗi:', e);
    meaning = null;
  }

  // Google Translate as a secondary attempt (CORS support can be inconsistent
  // depending on origin, so it's used as a fallback rather than primary).
  if (!meaning) {
    try {
      meaning = await fetchFromGoogleTranslate(query);
    } catch (e) {
      console.error('[Dịch nghĩa] Google Translate lỗi:', e);
      meaning = null;
    }
  }

  // Discard if the "translation" is just an echo of the input (no real result)
  if (meaning && meaning.toLowerCase() === query.toLowerCase()) {
    meaning = null;
  }

  if (!meaning) {
    console.warn('[Dịch nghĩa] Không có nghĩa cho:', query, '(cả 2 nguồn đều thất bại hoặc trả về rỗng)');
  }

  meaningCache[cacheKey] = meaning || null;
  return meaningCache[cacheKey];
}

/* ============================================================
   UI WIRING - Translator page (EN <-> VI, like Google Translate)
============================================================ */
const trInput = document.getElementById('tr-input');
const trOutput = document.getElementById('tr-output');
const trBtn = document.getElementById('tr-btn');
const trSwap = document.getElementById('tr-swap-btn');
const trSrcLabel = document.getElementById('tr-src-label');
const trTgtLabel = document.getElementById('tr-tgt-label');
const trCount = document.getElementById('tr-count');
const trStatus = document.getElementById('tr-status');
const TR_MAX = 2000;
const LANG_NAMES = { en: 'Tiếng Anh', vi: 'Tiếng Việt' };
const LANG_EN = { en: 'English', vi: 'Vietnamese' };
let trSrc = 'en', trTgt = 'vi';
let trLastText = '';
let trRequestId = 0;
let trTimer = null;
const trCache = {};

// Split long text into chunks under the providers' ~500-byte limit,
// cutting at sentence/clause boundaries where possible.
function splitForTranslation(text, maxLen = 400) {
  const chunks = [];
  let rest = text;
  while (rest.length > maxLen) {
    let cut = -1;
    for (const sep of ['\n', '. ', '! ', '? ', '; ', ', ', ' ']) {
      const i = rest.lastIndexOf(sep, maxLen);
      if (i > maxLen * 0.4) { cut = i + sep.length; break; }
    }
    if (cut === -1) cut = maxLen;
    chunks.push(rest.slice(0, cut));
    rest = rest.slice(cut);
  }
  if (rest) chunks.push(rest);
  return chunks;
}

async function translateChunk(chunk, sl, tl) {
  if (!chunk.trim()) return chunk;
  let out = null;
  try { out = await fetchFromGoogleTranslate(chunk, sl, tl); } catch (e) { out = null; }
  if (!out) {
    try { out = await fetchFromMyMemory(chunk.trim(), sl, tl); } catch (e) { out = null; }
  }
  if (out === null) throw new Error('no-result');
  // keep the chunk's surrounding whitespace / line breaks
  const lead = chunk.match(/^\s*/)[0], trail = chunk.match(/\s*$/)[0];
  return lead + out.trim() + trail;
}

async function translateText(text, sl, tl, onText) {
  const key = sl + '|' + tl + '|' + text;
  if (trCache[key]) return trCache[key];

  if (await claudeSamplePromise) {
    try {
      const out = await askClaude(
        `Translate the following ${LANG_EN[sl]} text into ${LANG_EN[tl]}, the way Google Translate would but more natural. ` +
        `Keep the line breaks. Reply with ONLY the translation, no notes, no quotes.\n\n${text}`,
        { modelTier: 'quick', onText: onText ? ({ text }) => onText(text) : undefined });
      if (out) { trCache[key] = out; return out; }
    } catch (e) {
      if (e.code === 'rate_limited') throw e;
      /* other failures: fall through to public services */
    }
  }

  const parts = [];
  for (const chunk of splitForTranslation(text)) {
    parts.push(await translateChunk(chunk, sl, tl));
  }
  const result = parts.join('');
  trCache[key] = result;
  return result;
}

function setOutput(text, isPlaceholder) {
  trOutput.innerHTML = '';
  if (isPlaceholder) {
    const span = document.createElement('span');
    span.className = 'tr-placeholder';
    span.textContent = text;
    trOutput.appendChild(span);
  } else {
    trOutput.textContent = text;
  }
}

// "natural wording" hint: translate the Vietnamese result back to English. Only when the check found real
// grammar problems (sentences in Vietnamese word order rarely become right with small fixes)
const fxNatBox = document.getElementById('fx-nat'), fxNatCache = {};
const fxNorm = t => t.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
function fxNatHide() { fxNatBox.hidden = true; }
async function fxNatural(src, viText, myId) {
  fxNatHide();
  if (trSrc !== 'en' || !fxOn || !fxState || !viText) return;
  const words = src.split(/\s+/).length;
  const grammar = fxState.items.filter(it => it.on && !/^(CASING|TYPOGRAPHY|PUNCTUATION|TYPOS)$/.test(it.cat) && !it.spell).length;
  if (words < 5 || !grammar) return;
  let back = fxNatCache[viText];
  if (back === undefined) {
    try { back = await fetchFromGoogleTranslate(viText, 'vi', 'en'); } catch (e) { back = null; }
    fxNatCache[viText] = back || null;
  }
  if (myId !== trRequestId || !back) return;
  back = back.trim();
  if (fxNorm(back) === fxNorm(src) || back.length > src.length * 2 + 20 || back.length < src.length / 3) return;
  document.getElementById('fx-nat-t').textContent = back;
  fxNatBox.hidden = false;
}
document.getElementById('fx-nat-use').addEventListener('click', () => {
  const t = document.getElementById('fx-nat-t').textContent;
  if (!t) return;
  trInput.value = t; updateCount(); fxState = null; trLastText = ''; trUse = 'orig'; fxNatHide(); runTranslate();
});
document.getElementById('fx-nat-speak').addEventListener('click', () => { const t = document.getElementById('fx-nat-t').textContent; if (t) speak(t, 0.9, 'en'); });

async function runTranslate() {
  const text = trInput.value.trim();
  if (fxNatBox && trLastText !== '' && !text) fxNatHide();
  if (!text) { setOutput('Bản dịch', true); trStatus.textContent = ''; trLastText = ''; fxState = null; fxRender(); trLast = null; trRenderUse(); trRenderExtra(); return; }
  const myId = ++trRequestId;
  // 1) auto-correct spelling & grammar first, then translate the corrected text
  let src = text;
  if (fxOn) {
    if (!fxState || fxState.text !== text || fxState.lang !== trSrc) {
      if (!fxCache[trSrc + '|' + text]) trStatus.textContent = 'Đang kiểm tra lỗi...';
      const st = await fxCheck(text, trSrc);
      if (myId !== trRequestId) return;
      fxState = st;
    }
    fxRender();
    // v117: KHÔNG tự đưa câu đã sửa vào bộ dịch. Mặc định dịch nguyên văn; chỉ dịch câu đã sửa khi người học chọn
    if (trUse === 'fixed' && fxState && fxState.items.some(it => it.on)) src = fxApply(fxState);
  } else { fxRender(); }
  trRenderUse();
  if (src === trLastText) { if (trStatus.textContent === 'Đang kiểm tra lỗi...') trStatus.textContent = ''; return; }
  trLastText = src;
  fxNatHide();
  trStatus.textContent = 'Đang dịch...';
  try {
    const result = await translateText(src, trSrc, trTgt, partial => {
      if (myId === trRequestId) { setOutput(partial, false); trStatus.textContent = 'Đang dịch...'; }
    });
    if (myId !== trRequestId) return; // a newer request superseded this one
    setOutput(result, false);
    trStatus.textContent = '';
    trAfter(src, result);
    fxNatural(src, result, myId);
  } catch (e) {
    if (myId !== trRequestId) return;
    trLastText = '';
    setOutput(e && e.code === 'rate_limited'
      ? 'Bạn dịch hơi nhiều trong thời gian ngắn. Đợi một lát rồi bấm Dịch lại.'
      : 'Không dịch được. Kiểm tra kết nối mạng rồi bấm Dịch lại.', true);
    trStatus.textContent = '';
  }
}

function updateCount() {
  if (trInput.value.length > TR_MAX) trInput.value = trInput.value.slice(0, TR_MAX);
  trCount.textContent = trInput.value.length + ' / ' + TR_MAX;
}

trInput.addEventListener('input', () => {
  updateCount();
  trUse = 'orig';
  clearTimeout(trTimer);
  if (!claudeSampleReady) trTimer = setTimeout(runTranslate, fxOn ? 1100 : 800);
});

trBtn.addEventListener('click', () => {
  clearTimeout(trTimer);
  trLastText = '';
  runTranslate();
});

trSwap.addEventListener('click', () => {
  trUse = 'orig';   // v118: đổi chiều thì luôn quay về dịch câu gốc
  fxState = null;
  [trSrc, trTgt] = [trTgt, trSrc];
  trSrcLabel.textContent = LANG_NAMES[trSrc];
  trTgtLabel.textContent = LANG_NAMES[trTgt];
  trInput.placeholder = trSrc === 'en' ? 'Nhập văn bản cần dịch...' : 'Nhập văn bản tiếng Việt cần dịch...';
  // move the current translation into the input, like Google Translate
  const outText = trOutput.querySelector('.tr-placeholder') ? '' : trOutput.textContent;
  if (outText) {
    trInput.value = outText;
    updateCount();
  }
  trLastText = '';
  if (trInput.value.trim()) runTranslate(); else setOutput('Bản dịch', true);
});

document.getElementById('tr-clear').addEventListener('click', () => {
  trInput.value = '';
  updateCount();
  trLastText = '';
  fxState = null; fxRender(); fxNatHide();
  setOutput('Bản dịch', true);
  trStatus.textContent = '';
  trUse = 'orig'; trLast = null; trRenderUse(); trRenderExtra();
  trInput.focus();
});

document.getElementById('tr-src-speak').addEventListener('click', () => {
  const t = trInput.value.trim();
  if (t) speak(t, 0.9, trSrc);
});

document.getElementById('tr-tgt-speak').addEventListener('click', () => {
  if (trOutput.querySelector('.tr-placeholder')) return;
  const t = trOutput.textContent.trim();
  if (t) speak(t, 0.9, trTgt);
});

document.getElementById('tr-copy').addEventListener('click', async () => {
  if (trOutput.querySelector('.tr-placeholder')) return;
  const t = trOutput.textContent;
  try {
    await navigator.clipboard.writeText(t);
  } catch (e) {
    const ta = document.createElement('textarea');
    ta.value = t; document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (_) {}
    ta.remove();
  }
  trStatus.textContent = 'Đã sao chép';
  setTimeout(() => { if (trStatus.textContent === 'Đã sao chép') trStatus.textContent = ''; }, 1500);
});

/* ============================================================
   AUTO-CORRECT for the Translator (spelling + grammar), free:
   - English: LanguageTool public API (no key, CORS enabled)
   - Vietnamese, or when LanguageTool is unreachable: Google's
     "did you mean" suggestion + basic offline rules
   The corrected text is what gets translated; every fix can be undone.
============================================================ */
const FX_KEY = 'hoc-tieng-anh-autofix';
let fxOn = true;
try { fxOn = localStorage.getItem(FX_KEY) !== '0'; } catch (e) {}
const fxCache = {};
let fxState = null;
const fxMsgViCache = {};
const FX_CAT = { TYPOS: 'Chính tả', VI: 'Chính tả', GRAMMAR: 'Ngữ pháp', PUNCTUATION: 'Dấu câu', CASING: 'Viết hoa',
  CONFUSED_WORDS: 'Dùng nhầm từ', TYPOGRAPHY: 'Khoảng trắng', COLLOCATIONS: 'Kết hợp từ', SEMANTICS: 'Nghĩa của câu',
  REDUNDANCY: 'Thừa từ', COMPOUNDING: 'Từ ghép', NONSTANDARD_PHRASES: 'Cụm từ', MISC: 'Gợi ý' };
const FX_VI_CHARS = /[ăâđêôơưạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹáàãéèíìóòõúùýĂÂĐÊÔƠƯ]/g;
const fxLooksVi = t => (t.match(FX_VI_CHARS) || []).length >= 2;

// British spellings are correct too: ignore "colour → color", "organise → organize"...
function fxBrAm(a, b) {
  const A = a.toLowerCase(), B = b.toLowerCase();
  if (A === B) return false;
  const rules = [[/our/g, 'or'], [/is(e|ed|es|ing|ation|ations|er|ers)\b/g, 'iz$1'], [/ys(e|ed|es|ing)\b/g, 'yz$1'],
    [/tre(s?)\b/g, 'ter$1'], [/ll(ed|ing|er|ers)\b/g, 'l$1'], [/ogue(s?)\b/g, 'og$1'], [/ence\b/g, 'ense'],
    [/grey/g, 'gray'], [/programme/g, 'program'], [/tyre/g, 'tire'], [/cheque/g, 'check'], [/ise\b/g, 'ice'],
    [/ae/g, 'e'], [/oe/g, 'e'], [/mme\b/g, 'm'], [/ement\b/g, 'ment']];
  let all = A;
  for (const [re, to] of rules) { if (A.replace(re, to) === B) return true; all = all.replace(re, to); }
  return all === B;
}

// the free LanguageTool server allows ~20 checks a minute per device: stay under it, and back off after a refusal
const fxLtLog = [];
let fxLtCool = 0;
function fxLtReady() {
  const now = Date.now();
  while (fxLtLog.length && now - fxLtLog[0] > 60000) fxLtLog.shift();
  return now >= fxLtCool && fxLtLog.length < 15;
}
async function fxLanguageTool(text) {
  if (!fxLtReady()) return 'busy';
  fxLtLog.push(Date.now());
  const ctrl = typeof AbortController === 'function' ? new AbortController() : null;
  const timer = setTimeout(() => ctrl && ctrl.abort(), 7000);
  try {
    const body = new URLSearchParams({ text, language: 'en-US', level: 'picky', disabledCategories: 'STYLE',
      disabledRules: 'EN_QUOTES,DASH_RULE,WORD_REPEAT_BEGINNING_RULE,ENGLISH_WORD_REPEAT_BEGINNING_RULE,TOO_LONG_SENTENCE,PLUS_MINUS_SIGN,MULTIPLICATION_SIGN,ARROWS' });
    const res = await fetch('https://api.languagetool.org/v2/check', { method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body, signal: ctrl ? ctrl.signal : undefined });
    if (res.status === 429 || res.status === 403) { fxLtCool = Date.now() + 60000; return 'busy'; }
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || !Array.isArray(data.matches)) return null;
    const items = [];
    data.matches.forEach(m => {
      if (!m.replacements || !m.replacements.length) return;
      const rule = m.rule || {};
      if (rule.issueType === 'locale-violation' || rule.issueType === 'style') return;
      const orig = text.substr(m.offset, m.length), rep = m.replacements[0].value;
      if (rep === orig || FX_VI_CHARS.test(orig) || fxBrAm(orig, rep)) { FX_VI_CHARS.lastIndex = 0; return; }
      FX_VI_CHARS.lastIndex = 0;
      const spell = rule.issueType === 'misspelling' || (rule.category && rule.category.id === 'TYPOS');
      const it = { offset: m.offset, length: m.length, orig, rep, alts: m.replacements.slice(1, 4).map(r => r.value).filter(v => v !== rep),
        cat: (rule.category && rule.category.id) || 'MISC', spell, msg: m.message || '', on: true };
      // extra "picky" checks (mostly commas) are shown as suggestions, not applied
      if (Array.isArray(rule.tags) && rule.tags.includes('picky') && !spell) it.on = false;
      // A capitalised unknown word in the middle of a sentence is probably a name (Hanoi, Lan...): suggest, don't apply
      const before = text.slice(0, m.offset).replace(/\s+$/, '');
      if (spell && /^[A-Z]/.test(orig) && before && !/[.!?:\n]$/.test(before)) { it.on = false; it.name = true; }
      items.push(it);
    });
    return items;
  } catch (e) { return null; } finally { clearTimeout(timer); }
}

// Google Translate "did you mean" — works for Vietnamese and English (short chunks)
async function fxGoogleSuggest(text, sl) {
  const out = [];
  let changed = false;
  for (const chunk of splitForTranslation(text, 400).slice(0, 6)) {
    if (!chunk.trim()) { out.push(chunk); continue; }
    const params = new URLSearchParams({ client: 'gtx', sl, tl: sl === 'en' ? 'vi' : 'en', dt: 't', q: chunk.trim() });
    params.append('dt', 'qca');
    let fixed = null;
    try {
      const data = await fetchWithProxyFallback(`https://translate.googleapis.com/translate_a/single?${params}`);
      if (Array.isArray(data) && Array.isArray(data[7]) && typeof data[7][1] === 'string') fixed = data[7][1];
    } catch (e) { fixed = null; }
    if (fixed && fixed.trim() && fixed.trim() !== chunk.trim()) {
      changed = true;
      const lead = chunk.match(/^\s*/)[0], trail = chunk.match(/\s*$/)[0];
      out.push(lead + fixed.trim() + trail);
    } else out.push(chunk);
  }
  return changed ? out.join('') : null;
}

// Basic offline fixes: spacing, punctuation spacing, capital letters, "i" → "I", missing apostrophes
const FX_CONTR = { dont: "don't", doesnt: "doesn't", didnt: "didn't", cant: "can't", couldnt: "couldn't", wouldnt: "wouldn't",
  shouldnt: "shouldn't", isnt: "isn't", arent: "aren't", wasnt: "wasn't", werent: "weren't", havent: "haven't",
  hasnt: "hasn't", hadnt: "hadn't", im: "I'm", ive: "I've", youre: "you're", theyre: "they're", thats: "that's", whats: "what's" };
function fxLocal(text, lang) {
  let t = text.replace(/[ \t]{2,}/g, ' ').replace(/[ \t]+([,.!?;:])(?=[A-Za-zÀ-ỹ])/g, '$1 ').replace(/[ \t]+([,.!?;:])/g, '$1')
    .replace(/([,!?;:])(?=[A-Za-zÀ-ỹ])/g, '$1 ').replace(/\.(?=[A-ZÀ-Ỹ][a-zà-ỹ])/g, '. ');
  if (lang === 'en') {
    t = t.replace(/(^|[\s(“"])i(?=$|[\s,.!?;:'’)])(?![.]\w)/g, '$1I');
    t = t.replace(/\b[A-Za-z]+\b/g, w => {
      const r = FX_CONTR[w.toLowerCase()];
      if (!r) return w;
      return /^[A-Z]/.test(w) ? r[0].toUpperCase() + r.slice(1) : r;
    });
  }
  t = t.replace(/(^|[.!?]\s+|\n\s*)([a-zà-ỹ])/g, (m, p, c) => p + c.toUpperCase());
  return t;
}

// Word-level diff between the original and a corrected string → list of fixes
function fxTok(s) { return s.match(/\s+|[\p{L}\p{M}\p{N}'’-]+|[^\s\p{L}\p{M}\p{N}]/gu) || []; }
function fxGuessCat(orig, rep, lang) {
  const la = orig.replace(/[^\p{L}\p{N}]/gu, ''), lb = rep.replace(/[^\p{L}\p{N}]/gu, '');
  if (la === lb) return /[^\s\p{L}\p{N}]/u.test(orig + rep) ? 'PUNCTUATION' : 'TYPOGRAPHY';
  if (la.toLowerCase() === lb.toLowerCase()) return 'CASING';
  return lang === 'vi' ? 'VI' : 'TYPOS';
}
function fxDiff(a, b, lang) {
  if (a === b) return [];
  const A = fxTok(a), B = fxTok(b), n = A.length, m = B.length;
  const mk = (offset, orig, rep) => ({ offset, length: orig.length, orig, rep, alts: [], cat: fxGuessCat(orig, rep, lang),
    spell: lang === 'vi' || fxGuessCat(orig, rep, lang) === 'TYPOS', msg: '', on: true });
  if (n * m > 300000) return [mk(0, a, b)];
  const dp = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--)
    dp[i][j] = A[i] === B[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const items = []; let i = 0, j = 0, pos = 0, cur = null;
  const flush = () => { if (cur) { items.push(mk(cur.offset, cur.orig, cur.rep)); cur = null; } };
  while (i < n || j < m) {
    if (i < n && j < m && A[i] === B[j]) { flush(); pos += A[i].length; i++; j++; }
    else if (j < m && (i === n || dp[i][j + 1] >= dp[i + 1][j])) { cur = cur || { offset: pos, orig: '', rep: '' }; cur.rep += B[j]; j++; }
    else { cur = cur || { offset: pos, orig: '', rep: '' }; cur.orig += A[i]; pos += A[i].length; i++; }
  }
  flush();
  // glue a punctuation/space fix to its neighbour ("rain .it" → "rain. It" becomes one fix)
  const noLetters = it => !/[\p{L}\p{N}]/u.test(it.orig + it.rep);
  const merged = [];
  items.forEach(it => {
    const prev = merged[merged.length - 1];
    const gap = prev ? a.slice(prev.offset + prev.length, it.offset) : null;
    if (prev && gap.length <= 2 && !/[\p{L}\p{N}]/u.test(gap) && (noLetters(prev) || noLetters(it))) {
      const orig = a.slice(prev.offset, it.offset + it.length), rep = prev.rep + gap + it.rep;
      merged[merged.length - 1] = mk(prev.offset, orig, rep);
    } else merged.push(it);
  });
  return merged;
}

/* ---------- Built-in rules for mistakes Vietnamese learners often make (work offline, explained in Vietnamese) ---------- */
const FX_REG_VERBS = ('accept add admire agree allow answer appear arrive ask attend believe belong book borrow brush call carry change chat check ' +
  'clean climb close collect compare complain cook copy count cover cross cry dance decide deliver depend describe destroy die ' +
  'divide dress drop end enjoy enter explain fail fill finish fix follow guess hate help hope hug hurry imagine improve invite ' +
  'join jump kick kill kiss knock laugh learn like listen live look love marry match mind miss move need notice offer open order ' +
  'paint pass pick plan plant play post practise practice prefer prepare pretend print promise pull push rain reach receive ' +
  'remember rent repair repeat reply rest return save share shop shout smile smoke snow start stay stop study suggest surprise talk ' +
  'taste thank touch train travel try turn type use visit wait walk want wash watch wish work worry').split(' ');
const FX_DOUBLE = new Set('stop plan shop drop chat hug jog rob rub beg nod clap step fit grab ban skip slip trip admit prefer occur refer travel swim run sit get begin put cut hit set win dig'.split(' '));
let FX_V = null;   // verb tables, built on first use
function fxVerbs() {
  if (FX_V) return FX_V;
  const base = new Set(FX_REG_VERBS), v2 = new Map(), v3 = new Map(), past = new Map();
  try {
    IRREGULAR_VERBS.forEach(v => {
      const b = v.v1.toLowerCase(); base.add(b);
      const p2 = v.v2.toLowerCase().split('/'), p3 = v.v3.toLowerCase().split('/');
      past.set(b, b === 'be' ? 'was' : p2[0]);
      p2.forEach(x => { if (x !== b) v2.set(x, b); });
      p3.forEach(x => { if (x !== b) v3.set(x, b); });
    });
  } catch (e) {}
  // forms that are also everyday base verbs or nouns: never "correct" them
  ['lay', 'wound', 'ground', 'bore'].forEach(x => { v2.delete(x); v3.delete(x); });
  FX_V = { base, v2, v3, past };
  return FX_V;
}
function fxCap(orig, rep) { return /^[A-Z]/.test(orig) && rep ? rep[0].toUpperCase() + rep.slice(1) : rep; }
function fxIng(v) {
  if (v === 'be' || v === 'see' || v === 'agree' || v === 'flee') return v + 'ing';
  if (/ie$/.test(v)) return v.slice(0, -2) + 'ying';
  if (FX_DOUBLE.has(v)) return v + v.slice(-1) + 'ing';
  if (/[^aeiouy]e$/.test(v) || /[^e]ue$/.test(v)) return v.slice(0, -1) + 'ing';
  return v + 'ing';
}
function fxIsGerund(w) {
  if (!/ing$/.test(w)) return false;
  const st = w.slice(0, -3), B = fxVerbs().base;
  return B.has(st) || B.has(st + 'e') || (/(.)\1$/.test(st) && B.has(st.slice(0, -1))) || (/y$/.test(st) && B.has(st.slice(0, -1) + 'ie'));
}
function fxPast(v) {
  const V = fxVerbs();
  if (V.past.has(v)) return V.past.get(v);
  if (FX_DOUBLE.has(v)) return v + v.slice(-1) + 'ed';
  if (/e$/.test(v)) return v + 'd';
  if (/[^aeiou]y$/.test(v)) return v.slice(0, -1) + 'ied';
  return v + 'ed';
}
function fx3rd(v) {
  if (v === 'have') return 'has';
  if (v === 'be') return 'is';
  if (/(s|x|z|ch|sh|o)$/.test(v)) return v + 'es';
  if (/[^aeiou]y$/.test(v)) return v.slice(0, -1) + 'ies';
  return v + 's';
}
// "goes" → "go", "studies" → "study"… (null when it is not a known verb)
function fxFrom3rd(w) {
  const V = fxVerbs();
  const c = w === 'has' ? 'have' : w === 'does' ? 'do' : w === 'goes' ? 'go' : w === 'is' ? 'be' : null;
  if (c) return c;
  const tries = [];
  if (/ies$/.test(w)) tries.push(w.slice(0, -3) + 'y', w.slice(0, -1));
  if (/(ches|shes|sses|xes|zes|oes)$/.test(w)) tries.push(w.slice(0, -2));
  if (/s$/.test(w)) tries.push(w.slice(0, -1));
  return tries.find(t => V.base.has(t)) || null;
}
// "wanted" → "want", "went" → "go", "gone" → "go"
function fxFromPast(w, allowV3) {
  const V = fxVerbs();
  if (V.v2.has(w)) return V.v2.get(w);
  if (allowV3 && V.v3.has(w)) return V.v3.get(w);
  if (!/ed$/.test(w)) return null;
  const tries = [w.slice(0, -2), w.slice(0, -1)];
  if (/ied$/.test(w)) tries.unshift(w.slice(0, -3) + 'y');
  if (/([bdgklmnprt])\1ed$/.test(w)) tries.unshift(w.slice(0, -3));
  return tries.find(t => FX_REG_VERBS.includes(t)) || null;
}
const fxPrevWord = (text, idx) => ((text.slice(0, idx).match(/([A-Za-z']+)\W*$/) || [])[1] || '').toLowerCase();
const FX_SUBJ3 = /^(he|she|it)$/i;

// each rule: re (global), fn(m, text) → null | { rep, from?, to?, on?, alts? }   (from/to: offsets inside the match)
const FX_RULES_EN = [
  { re: /\b(I|you|we|they|he|she)\s*(?:'m|'re|'s|’m|’re|’s|\s+am|\s+are|\s+is)\s+(not\s+)?(agree|disagree)\b/gi, cat: 'GRAMMAR',
    vi: '“agree” là động từ, không đi với am/is/are: I agree, I don’t agree.',
    fn: m => { const s = m[1] === 'i' ? 'I' : m[1], v = m[3].toLowerCase(), t3 = FX_SUBJ3.test(s);
      return { rep: m[2] ? `${s} ${t3 ? 'doesn’t' : 'don’t'} ${v}`.replace(/’/g, "'") : `${s} ${t3 ? v + 's' : v}` }; } },
  { re: /\b(I|you|we|they|he|she)\s*(?:'m|'re|'s|’m|’re|’s|\s+am|\s+are|\s+is)\s+(?:very|really|so)\s+(like|love|enjoy|want|hate|miss|need|agree)\b/gi, cat: 'GRAMMAR',
    vi: 'Không dùng am/is/are với động từ “like, love, want…”, và không đặt “very” trước động từ: I really like it.',
    fn: m => { const s = m[1] === 'i' ? 'I' : m[1], v = m[2].toLowerCase(); return { rep: `${s} really ${FX_SUBJ3.test(s) ? fx3rd(v) : v}` }; } },
  { re: /\b([Ii]|[Yy]ou|[Ww]e|[Tt]hey)\s+(?:(always|usually|often|sometimes|never|also|really|still)\s+)?(is|has|does|goes|[a-z]+s)\b/g, cat: 'GRAMMAR',
    vi: 'Với I, you, we, they thì động từ không thêm -s: I want, they go (chỉ he, she, it mới thêm -s).',
    fn: (m, t) => {
      const w = m[3].toLowerCase(), s = m[1];
      if (FX_SKIP_BEFORE.test(fxPrevWord(t, m.index)) || /^(thank|thanks|always|perhaps|sometimes|is|was|has|does|us|yes|this|its|less|plus)$/.test(w) && w !== 'is' && w !== 'has' && w !== 'does') return null;
      if (/^you$/i.test(s) && /^(guys|people|all|two|both)$/.test(w)) return null;
      let b;
      if (w === 'is') b = /^i$/i.test(s) ? 'am' : 'are';
      else { if (fxVerbs().base.has(w)) return null; b = fxFrom3rd(w); }
      return b ? { from: m[0].length - m[3].length, to: m[0].length, rep: b } : null;
    } },
  { re: /\bfor\s+(get|buy|learn|make|see|go|have|improve|find|become|earn|meet|celebrate|eat|know|understand|speak|prepare|pass|apply)\b/gi, cat: 'GRAMMAR',
    vi: 'Muốn nói “để làm gì” thì dùng “to + động từ” (hoặc “in order to”), không dùng “for + động từ”: I study English to get a better job.',
    fn: (m, t) => /^(thanks|thank|sorry|time|ready|apologise|apologize|excuse|responsible|reason)$/.test(fxPrevWord(t, m.index)) || /thank you\s*$/i.test(t.slice(0, m.index)) ? null : { rep: fxCap(m[0], 'to ' + m[1]) } },
  { re: /\b(for|before|after|without|about|by)\s+([a-z]+)(?=\s+(?:me|you|him|her|us|them|my|your|his|our|their|the|a|an|this|that|it|home|out|up|bed|everything|something|to)\b)/gi, cat: 'GRAMMAR',
    vi: 'Sau giới từ (for, before, after, without, about, by) động từ phải thêm -ing: Thank you for helping me. Before going to bed…',
    fn: (m, t) => {
      const v = m[2].toLowerCase();
      if (/^\s+to\b/i.test(t.slice(m.index + m[0].length)) && !/^(before|after|without)$/i.test(m[1])) return null;
      if (!fxVerbs().base.has(v) || /^(work|school|train|plan|play|rest|lunch|dinner|walk|drink|love|help|cook|study|visit|watch|call|use|change|return|start|stop|try|wait|need|look|answer|order|book|fly|run|drive|ride|ship|bus|end|post|shop|dance|smile|kiss|hug|guess|wish|hope|offer|rain|snow|lie|name|show|sleep|face|hand|mind|ground|light|place)$/.test(v) && !(m[1].toLowerCase() === 'for' && /^(help|call|visit|use)$/.test(v))) return null;
      if (m[1].toLowerCase() === 'for' && !(/^(thanks|thank|sorry|apologise|apologize|excuse|responsible|forgive)$/.test(fxPrevWord(t, m.index)) || /thank you\s*$/i.test(t.slice(0, m.index)))) return null;
      return { from: m[0].length - m[2].length, rep: fxIng(v) };
    } },
  { re: /\beveryday(?=\s*(?:[.,!?;]|$)|\s+(?:and|but|so|because|at|in|with|after|before|from|for|until)\b)/gi, cat: 'COMPOUNDING',
    vi: '“every day” (hai từ) nghĩa là “mỗi ngày”. “everyday” (một từ) là tính từ “hằng ngày”, đứng trước danh từ: everyday life.',
    fn: m => ({ rep: fxCap(m[0], 'every day') }) },
  { re: /\bvery\s+(like|likes|liked|love|loves|loved|enjoy|enjoys|enjoyed|want|wants|wanted|hate|hates|miss|misses|missed|appreciate|appreciated|thank)\b/gi, cat: 'GRAMMAR',
    vi: 'Không đặt “very” trước động từ. Dùng “really” (I really like it) hoặc “… very much” (I like it very much).',
    fn: (m, t) => /^(is|are|was|were|be|look|looks|looked|seem|seems)$/.test(fxPrevWord(t, m.index)) ? null : { rep: fxCap(m[0], 'really ' + m[1]) } },
  { re: /\b(do|does)\s+(you|he|she|they|we|I)\s+(can|could|must|should|will)\b/gi, cat: 'GRAMMAR',
    vi: 'Câu hỏi với can, must, should… đảo động từ khuyết thiếu lên đầu, không dùng do/does: Can you…?',
    fn: m => ({ rep: fxCap(m[1], m[3].toLowerCase()) + ' ' + m[2] }) },
  { re: /\b(can|could|must|should|will|would|may|might)\s+to\s+(?=[a-z])/gi, cat: 'GRAMMAR',
    vi: 'Sau can, could, must, should, will… dùng động từ nguyên mẫu, không có “to”.',
    fn: (m, t) => /^(the|a|his|her|my|your|their|our|free|strong)$/.test(fxPrevWord(t, m.index)) ? null : { rep: m[1] + ' ' } },
  { re: /\b(I|you|we|they|he|she)\s+(have|has)\s+(\d+|[a-z]+(?:-[a-z]+)?)\s+(years?)\s+old\b/gi, cat: 'GRAMMAR',
    vi: 'Nói tuổi dùng “be”, không dùng “have”: I am 20 years old.',
    fn: m => { const s = m[1] === 'i' ? 'I' : m[1]; const be = /^i$/i.test(s) ? 'am' : FX_SUBJ3.test(s) ? 'is' : 'are';
      return { rep: `${s} ${be} ${m[3]} ${/^(1|one|a)$/i.test(m[3]) ? 'year' : 'years'} old` }; } },
  { re: /\b(want|wants|wanted|need|needs|needed|would like|'d like|’d like|hope|hoped|decide|decides|decided|plan|planned|try|tries|tried|forget|forgot|learn|learns|learned|learnt|promise|promised|refuse|refused|choose|chose|expect|expected|seem|seems|seemed|manage|managed|afford)\s+(go|come|eat|buy|see|learn|study|play|visit|be|become|have|make|do|get|take|know|meet|speak|talk|read|write|find|say|tell|ask|give|stay|leave|improve|cook|sing|dance|swim|watch|listen|call|pay|send|bring|sell|move|join|finish|understand|wear|teach|keep|sit|wait|fly|catch|lose|win|spend|sleep|help|work|live|travel|practise|practice|use|try|start|stop|change|return|drink|drive|run|walk|ride)\b/gi, cat: 'GRAMMAR',
    vi: 'Sau “want, need, hope, decide, would like…” cần “to” trước động từ: want to go.',
    fn: (m, t) => {
      const v = m[2].toLowerCase(), w = m[1].toLowerCase();
      // "need help", "want work", "need sleep" can be nouns: only suggest those
      const nounish = /^(help|work|sleep|drink|drive|run|walk|ride|travel|practise|practice|use|change|return|start|stop|try|live|watch|call|move|pay|win|swim|dance|cook|study|play|visit|wait|catch)$/.test(v);
      if (nounish) {
        // "I need help." / "want work with…" are nouns; "I want help my mum" needs "to"
        if (/\b(the|a|an|my|your|our|their|his|her)\s*$/i.test(t.slice(0, m.index))) return null;
        if (!/^\s+(me|you|him|her|us|them|my|your|his|our|their|the|a|an|this|that|these|those)\b/i.test(t.slice(m.index + m[0].length))) return null;
      }
      return { rep: m[1] + ' to ' + m[2] };
    } },
  { re: /\b(enjoy|enjoys|enjoyed|finish|finishes|finished|avoid|avoids|avoided|mind|suggest|suggests|suggested|keep|keeps|kept|practise|practises|practised|practice|practices|practiced|consider|considered|imagine|miss|missed|deny|denied|recommend|recommended|quit|give up|gave up|can't help|cannot help)\s+to\s+([a-z]+)\b/gi, cat: 'GRAMMAR',
    vi: 'Sau “enjoy, finish, avoid, mind, suggest, keep, practise…” dùng động từ đuôi -ing: enjoy swimming.',
    fn: m => { const v = m[2].toLowerCase(); return fxVerbs().base.has(v) ? { rep: m[1] + ' ' + fxIng(v), on: !/^practi[sc]/i.test(m[1]) } : null; } },
  { re: /\b(look|looks|looked|looking)\s+forward\s+to\s+([a-z]+)\b/gi, cat: 'GRAMMAR',
    vi: 'Trong “look forward to”, “to” là giới từ nên theo sau là V-ing: look forward to seeing you.',
    fn: m => { const v = m[2].toLowerCase(); return fxVerbs().base.has(v) ? { rep: `${m[1]} forward to ${fxIng(v)}` } : null; } },
  { re: /\b(am|is|are|was|were|be|been|get|got|getting|'m|'re|'s|’m|’re|’s)\s+used\s+to\s+([a-z]+)\b/gi, cat: 'GRAMMAR',
    vi: '“be/get used to” (quen với) đi với V-ing: I am used to getting up early. Còn “used to + động từ” (không có be) nghĩa là “đã từng”.',
    fn: (m, t) => {
      const v = m[2].toLowerCase();
      if (!fxVerbs().base.has(v)) return null;
      const person = /^(i|you|we|they|he|she)$/.test(fxPrevWord(t, m.index)) || /^get|^got/i.test(m[1]);
      return person ? { rep: `${m[1]} used to ${fxIng(v)}` } : null;
    } },
  { re: /\b(learn|learns|learned|learnt|learning)(?=\s+(?:at|in)\s+(?:the\s+|a\s+)?(?:university|college|school|high school|[A-Z][A-Za-z]*\s+(?:University|College|School)|[A-Z]{2,}\b))/gi, cat: 'COLLOCATIONS',
    vi: '“Học ở trường (đại học)” dùng “study at”, không dùng “learn at”: I study at HUI University. (“learn” là học một kỹ năng, một điều gì đó: learn English.)',
    fn: m => ({ rep: fxCap(m[1], { learn: 'study', learns: 'studies', learned: 'studied', learnt: 'studied', learning: 'studying' }[m[1].toLowerCase()]) }) },
  { re: /\b(discuss|discussed|discusses|discussing|mention|mentioned|mentions|mentioning)\s+about\b/gi, cat: 'REDUNDANCY',
    vi: '“discuss” và “mention” không cần “about”: discuss the problem.', fn: m => ({ rep: m[1] }) },
  { re: /\b(return|returned|returns|returning)\s+back\b/gi, cat: 'REDUNDANCY',
    vi: '“return” đã có nghĩa là “quay lại”, không cần thêm “back”.', fn: m => ({ rep: m[1] }) },
  { re: /\b(emphasi[sz]e|emphasi[sz]ed|emphasi[sz]es)\s+on\b/gi, cat: 'REDUNDANCY',
    vi: '“emphasise” không cần “on” (còn danh từ thì nói “put emphasis on”).', fn: m => ({ rep: m[1] }) },
  { re: /\b(marry|marries|married)\s+with\b/gi, cat: 'COLLOCATIONS',
    vi: 'Nói “marry someone” hoặc “be married to someone”, không dùng “with”.',
    fn: m => ({ rep: /^married$/i.test(m[1]) ? m[1] + ' to' : m[1] }) },
  { re: /\bdespite\s+of\b/gi, cat: 'COLLOCATIONS', vi: 'Dùng “despite” hoặc “in spite of”, không dùng “despite of”.', fn: m => ({ rep: fxCap(m[0], 'despite') }) },
  { re: /\b(depend|depends|depended|depending)\s+(of|in|from)\b/gi, cat: 'COLLOCATIONS', vi: '“depend” đi với giới từ “on”: It depends on you.', fn: m => ({ rep: m[1] + ' on' }) },
  { re: /\binterested\s+(about|on|for|with)\b/gi, cat: 'COLLOCATIONS', vi: '“interested” đi với giới từ “in”: interested in music.', fn: m => ({ rep: 'interested in' }) },
  { re: /\b(good|bad|better|best|great|excellent|terrible)\s+in\s+(math|maths|english|sports?|football|singing|cooking|drawing|swimming|languages?|[a-z]+ing)\b/gi, cat: 'COLLOCATIONS',
    vi: 'Giỏi/kém một việc gì dùng “at”: good at English.',
    fn: m => /ing$/i.test(m[2]) && !fxIsGerund(m[2].toLowerCase()) ? null : { rep: `${m[1]} at ${m[2]}` } },
  { re: /\b(explain|explains|explained)\s+me\b/gi, cat: 'GRAMMAR', vi: 'Nói “explain something to me”, không nói “explain me”.', fn: m => ({ rep: m[1] + ' to me' }) },
  { re: /\b(say|says|said)\s+(me|him|her|us|them)\b/gi, cat: 'CONFUSED_WORDS',
    vi: 'Muốn nói “nói với ai” thì dùng “tell someone” (hoặc “say to someone”).',
    fn: m => { const t = { say: 'tell', says: 'tells', said: 'told' }[m[1].toLowerCase()]; return { rep: fxCap(m[1], t) + ' ' + m[2] }; } },
  { re: /\b(listen|listens|listened|listening)\s+(music|the music|the radio|radio|songs?|podcasts?|me|him|her|them|us|my|his|their)\b/gi, cat: 'GRAMMAR',
    vi: '“listen” cần giới từ “to” trước tân ngữ: listen to music.', fn: m => ({ rep: `${m[1]} to ${m[2]}` }) },
  { re: /\b(go|goes|went|going|gone|come|comes|came|coming|get|gets|got|arrive|arrives|arrived|return|returns|returned|travel|travels|travelled|traveled)\s+to\s+(home|here|there|abroad|downtown|upstairs|downstairs|overseas)\b/gi, cat: 'GRAMMAR',
    vi: 'Trước home, here, there, abroad… không dùng “to”: go home, come here, travel abroad.', fn: m => ({ rep: `${m[1]} ${m[2]}` }) },
  { re: /\b(go|goes|went|going|gone)\s+to\s+(shopping|swimming|fishing|camping|jogging|hiking|dancing|skiing|sightseeing|running|cycling)\b/gi, cat: 'GRAMMAR',
    vi: 'Nói “go shopping, go swimming…”, không có “to”.', fn: m => ({ rep: `${m[1]} ${m[2]}` }) },
  { re: /\bsince\s+((?:\d+|a|one|two|three|four|five|six|seven|eight|nine|ten|many|several|a few)\s+(?:years?|months?|weeks?|days?|hours?|minutes?))\b(?!\s+ago)/gi, cat: 'GRAMMAR',
    vi: '“since” đi với mốc thời gian (since 2020), còn “for” đi với khoảng thời gian (for 3 years).', fn: m => ({ rep: fxCap(m[0], 'for ' + m[1]) }) },
  { re: /\bin\s+the\s+other\s+hand\b/gi, cat: 'NONSTANDARD_PHRASES', vi: 'Cụm đúng là “on the other hand” (mặt khác).', fn: m => ({ rep: fxCap(m[0], 'on the other hand') }) },
  { re: /\baccording\s+to\s+me\b/gi, cat: 'NONSTANDARD_PHRASES', vi: 'Không nói “according to me”. Dùng “in my opinion” hoặc “I think”.', fn: m => ({ rep: fxCap(m[0], 'in my opinion') }) },
  { re: /\b(although|though|even though)\b[^.!?\n]*?(,?\s+but)\b/gi, cat: 'GRAMMAR',
    vi: 'Đã có “although” thì không dùng thêm “but” (tiếng Việt nói “tuy… nhưng”, tiếng Anh chỉ dùng một từ).',
    fn: m => { const i = m[0].length - m[2].length; return { from: i, to: m[0].length, rep: m[2].trim().startsWith(',') ? ',' : '' }; } },
  { re: /\bbecause\b[^.!?\n]*?(,?\s+so)\b/gi, cat: 'GRAMMAR',
    vi: 'Đã có “because” thì không dùng thêm “so” (tiếng Việt nói “vì… nên”, tiếng Anh chỉ dùng một từ).',
    fn: m => { const i = m[0].length - m[1].length; return { from: i, to: m[0].length, rep: m[1].trim().startsWith(',') ? ',' : '' }; } },
  { re: /\b(information|advice|furniture|homework|housework|equipment|luggage|baggage|knowledge|feedback|news|scenery|traffic)s\b/gi, cat: 'GRAMMAR',
    vi: 'Đây là danh từ không đếm được, không thêm -s (a piece of information, some advice…).',
    fn: m => m[1].toLowerCase() === 'news' ? null : { rep: m[1] } },
  { re: /\b(people|children|police)\s+(is|was|has|does|doesn't|wasn't|isn't)\b/gi, cat: 'GRAMMAR',
    vi: '“people, children, police” là danh từ số nhiều nên động từ chia số nhiều: people are.',
    fn: m => ({ rep: m[1] + ' ' + { is: 'are', was: 'were', has: 'have', does: 'do', "doesn't": "don't", "wasn't": "weren't", "isn't": "aren't" }[m[2].toLowerCase()] }) },
  { re: /\b(more|most)\s+(better|best|worse|worst|bigger|biggest|smaller|smallest|easier|easiest|happier|happiest|cheaper|cheapest|faster|fastest|older|oldest|younger|youngest|taller|tallest|longer|longest|larger|largest|stronger|strongest|higher|highest|lower|lowest|harder|hardest|nicer|nicest|richer|richest|busier|busiest|hotter|hottest|colder|coldest|bigger|prettier|prettiest|greater|greatest)\b/gi, cat: 'GRAMMAR',
    vi: 'Tính từ ngắn đã thêm -er/-est (hoặc better, best) thì không dùng thêm “more/most”.', fn: m => ({ rep: fxCap(m[0], m[2]) }) },
  { re: /\b(do|does|did|doing|done)\s+((?:a|many|some|lots of|a lot of|so many|too many)\s+)?(mistakes?)\b/gi, cat: 'COLLOCATIONS',
    vi: 'Mắc lỗi là “make a mistake”, không dùng “do”.',
    fn: m => ({ rep: fxCap(m[1], { do: 'make', does: 'makes', did: 'made', doing: 'making', done: 'made' }[m[1].toLowerCase()]) + ' ' + (m[2] || '') + m[3] }) },
  { re: /\b(make|makes|made|making)\s+((?:my|your|his|her|our|their|the)\s+)?(homework|housework)\b/gi, cat: 'COLLOCATIONS',
    vi: 'Làm bài tập/việc nhà là “do homework / do housework”, không dùng “make”.',
    fn: m => ({ rep: fxCap(m[1], { make: 'do', makes: 'does', made: 'did', making: 'doing' }[m[1].toLowerCase()]) + ' ' + (m[2] || '') + m[3] }) },
  { re: /\b(it|that|this)\s*(?:'s|’s|\s+is)\s+depend\b/gi, cat: 'GRAMMAR', vi: '“depend” là động từ: It depends on…, không nói “It’s depend”.',
    fn: m => ({ rep: m[1] + ' depends' }) },
  { re: /\b(I'm|I am|I was|I feel|I felt|I get|I got|I'm getting|we're|we are|we were|we feel|we felt)\s+((?:so|very|really|quite|a bit|too)\s+)?(boring|interesting|exciting|tiring|confusing|surprising|embarrassing|disappointing|frightening|worrying|annoying|amazing|satisfying|relaxing)\b(\s+(?:in|about|with|of))?/gi, cat: 'CONFUSED_WORDS',
    vi: 'Tính từ -ing tả sự vật gây ra cảm xúc (The film is boring), còn -ed tả cảm xúc của người (I am bored). Nếu ý bạn là “tôi thấy chán” thì dùng “bored”.',
    fn: m => {
      const adj = m[3].toLowerCase();
      const fixed = { boring: 'bored', interesting: 'interested', exciting: 'excited', tiring: 'tired', confusing: 'confused', surprising: 'surprised',
        embarrassing: 'embarrassed', disappointing: 'disappointed', frightening: 'frightened', worrying: 'worried', annoying: 'annoyed',
        amazing: 'amazed', satisfying: 'satisfied', relaxing: 'relaxed' }[adj];
      const sure = !!m[4] || /\b(feel|felt|get|got|getting)\b/i.test(m[1]);
      return { from: m[0].length - (m[4] || '').length - m[3].length, to: m[0].length - (m[4] || '').length, rep: fixed, on: sure };
    } }
];

// "I am go", "she is want" → simple present (or -ing when it's happening now)
const FX_STATE = /^(want|need|love|know|have|hate|understand|prefer|remember|believe|mean|own|belong|seem)$/;
const FX_RULE_BE = { re: /\b(I am|I'm|I’m|you are|you're|you’re|we are|we're|we’re|they are|they're|they’re|he is|he's|he’s|she is|she's|she’s)\s+(go|come|study|work|play|want|need|love|know|eat|watch|learn|have|hate|understand|prefer|remember|believe|speak|write|swim|sleep|drive|teach|get|take|make|buy|stay|wait|listen|talk|walk)\b/gi,
  cat: 'GRAMMAR', vi: 'Không dùng am/is/are với động từ nguyên mẫu. Việc thường ngày: I go. Việc đang diễn ra: I am going.',
  fn: (m, t) => {
    const subj = m[1].split(/\s|'|’/)[0], v = m[2].toLowerCase(), s = subj === 'i' ? 'I' : subj, t3 = FX_SUBJ3.test(s);
    const simple = `${s} ${t3 ? fx3rd(v) : v}`, prog = `${m[1]} ${fxIng(v)}`;
    if (FX_STATE.test(v)) return { rep: simple };
    const now = /\b(now|right now|at the moment|currently|today|look!|listen!)\b/i.test(t);
    return { rep: now ? prog : simple, alts: [now ? simple : prog] };
  } };

// after to / modals / do-forms the verb must be in its base form: "can went", "didn't saw", "to goes"
const FX_DO_NOUNS = /^(works|plays|needs|likes|cooks|walks|visits|calls|studies|uses|changes|answers|looks|shops|trips|runs|rests|exercises|sports|dishes|things|jobs|wonders|loves|hopes|wishes|rains|smiles|stays|tests|drinks|drives|waits)$/;
const FX_RULE_FORM = { re: /\b(to|can|could|will|would|shall|should|must|may|might|didn't|did not|doesn't|does not|don't|do not|did|does|do|can't|cannot|couldn't|won't|wouldn't|shouldn't|mustn't|let's|didnt|doesnt|dont|cant|couldnt|wont|wouldnt|shouldnt)\s+(?:(not|never|always|also|really|just|even|still)\s+)?([a-z]+)\b/gi,
  cat: 'GRAMMAR',
  fn: (m, t) => {
    const aux = m[1].toLowerCase(), w = m[3].toLowerCase(), isDo = /^(do|does|did|didn'?t|doesn'?t|don'?t|did not|does not|do not)$/.test(aux);
    if (fxVerbs().base.has(w)) return null;
    if (aux !== 'to' && /^(the|a|an|his|her|my|your|their|our|its|this|that|free|good|tin|trash)$/.test(fxPrevWord(t, m.index))) return null;   // "his will was", "the can is"
    if (/^may$/.test(aux) && /^(is|was|has)$/.test(w)) return null;   // the month of May
    if (aux === 'to' && /^(saw|left|found|rose|felt|fell|lit|is|was|are|were|has|does)$/.test(w)) return null;   // "the school she goes to is…"
    let b = fxFromPast(w, true), why = 'past';
    if (!b && !isDo) { b = fxFrom3rd(w); why = '3rd'; }
    if (!b || (isDo && FX_DO_NOUNS.test(w))) return null;
    if (aux === 'to' && (why === '3rd' || /ed$/.test(w)) ) {
      // "to + noun" happens ("next to visits"), so only suggest
      const from = m[0].length - m[3].length;
      return { from, to: m[0].length, rep: b, on: false, vi: 'Sau “to” dùng động từ nguyên mẫu: to go, to see.' };
    }
    const from = m[0].length - m[3].length;
    const vi = aux === 'to' ? 'Sau “to” dùng động từ nguyên mẫu: to go, to see.'
      : isDo ? 'Sau do/does/did (kể cả don’t, didn’t) dùng động từ nguyên mẫu: didn’t go, doesn’t like.'
      : 'Sau can, will, should, must… dùng động từ nguyên mẫu: can go, will see.';
    return { from, to: m[0].length, rep: b, vi };
  } };
const FX_RULE_QFORM = { re: /\b(did|does|do|didn'?t|doesn'?t|don'?t)\s+(I|you|we|they|he|she|it)\s+([a-z]+)\b/gi, cat: 'GRAMMAR',
  vi: 'Câu hỏi với do/does/did thì động từ chính ở dạng nguyên mẫu: Did you go…? Does he like…?',
  fn: m => {
    const w = m[3].toLowerCase();
    if (fxVerbs().base.has(w)) return null;
    const b = fxFromPast(w, true) || fxFrom3rd(w);
    return b ? { from: m[0].length - m[3].length, to: m[0].length, rep: b } : null;
  } };

// "he go" → "he goes" (LanguageTool catches many of these too)
const FX_SKIP_BEFORE = /^(does|did|doesn't|didn't|will|would|can|could|should|must|may|might|shall|let|make|makes|made|help|helps|helped|see|saw|watch|watched|hear|heard|have|had|to|lets|let's|do|don't)$/;
const FX_RULE_3RD = { re: /\b(he|she|it|my (?:mother|father|mom|mum|dad|brother|sister|friend|teacher|boss|wife|husband|son|daughter|grandmother|grandfather))\s+(?:(always|usually|often|sometimes|never|also|really|still|rarely|seldom)\s+)?(go|do|have|like|want|need|live|work|study|watch|play|eat|drink|get|make|take|come|say|know|think|love|hate|teach|speak|write|wash|finish|try|use|buy|cook|sleep|wake|walk|run|drive|ride|swim|listen|look|feel|seem|understand|don't|dont)\b/gi,
  cat: 'GRAMMAR', vi: 'Chủ ngữ ngôi thứ ba số ít (he, she, it, my mother…) ở thì hiện tại đơn: động từ thêm -s/-es, have → has, don’t → doesn’t.',
  fn: (m, t) => {
    if (FX_SKIP_BEFORE.test(fxPrevWord(t, m.index))) return null;
    if (/^it$/i.test(m[1]) && /\b(make|makes|made|let|lets|help|helps|have|has|had|see|saw|want|wants|like|likes|get|gets|got)\s*$/i.test(t.slice(0, m.index))) return null;
    const v = m[3].toLowerCase(), rep = /^don'?t$/.test(v) ? "doesn't" : fx3rd(v);
    const sent = (t.slice(m.index).match(/^[^.!?\n]*[.!?]?/) || [''])[0];
    return { from: m[0].length - m[3].length, to: m[0].length, rep, on: !/\?\s*$/.test(sent) };
  } };

// "i" on its own is always "I"
const FX_RULE_I = { re: /(^|[^A-Za-z'’.])i(?=$|[\s,!?;:'’]|\.(?!e\.))/g, cat: 'CASING', vi: 'Đại từ “I” (tôi) luôn viết hoa.',
  fn: m => ({ from: m[1].length, rep: 'I' }) };

const FX_NUMW = '(?:\\d+|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|a hundred|a few|few|several|many|both|these|those)(?:[- ](?:one|two|three|four|five|six|seven|eight|nine))?';
const FX_PLURAL = { year: 'years', month: 'months', week: 'weeks', day: 'days', hour: 'hours', minute: 'minutes', second: 'seconds', time: 'times',
  person: 'people', child: 'children', man: 'men', woman: 'women', book: 'books', student: 'students', friend: 'friends', brother: 'brothers',
  sister: 'sisters', dollar: 'dollars', kilometre: 'kilometres', kilometer: 'kilometers', metre: 'metres', meter: 'meters', room: 'rooms',
  cat: 'cats', dog: 'dogs', language: 'languages', country: 'countries', city: 'cities', class: 'classes', lesson: 'lessons', child_: '' };
// "fifteen year ago" → "fifteen years ago" (but "a two-year plan", "a fifteen year old boy" stay)
const FX_RULE_NUM = { re: new RegExp('\\b(' + FX_NUMW + ')\\s+(year|month|week|day|hour|minute|second|time|person|child|man|woman|book|student|friend|brother|sister|dollar|kilometre|kilometer|metre|meter|room|cat|dog|language|country|city|class|lesson)\\b(?=\\s*(?:[.,!?;:]|$)|\\s+(?:ago|old|later|before|after|of|in|on|at|and|or|for|to|with|from|since|now|left|more|each|every|a|per|long|earlier|already|together|ago)\\b)', 'gi'),
  cat: 'GRAMMAR', vi: 'Sau số đếm từ 2 trở lên, danh từ đếm được phải ở số nhiều: fifteen years ago, two days, three people.',
  fn: (m, t) => {
    if (/^1$/.test(m[1])) return null;
    const after = t.slice(m.index + m[0].length);
    if (/^\s+old\b/i.test(after) && /\b(a|an|the)\s*$/i.test(t.slice(0, m.index))) return null;   // "a fifteen year old boy"
    const n = m[2].toLowerCase();
    return { from: m[0].length - m[2].length, rep: fxCap(m[2], FX_PLURAL[n]) };
  } };
// "Fifteen years ago. I was…" → "Fifteen years ago, I was…"
const FX_RULE_FRAG = { re: new RegExp('(^|[.!?]\\s+|\\n)((?:' + FX_NUMW + '|a|an|one)\\s+[a-z]+\\s+ago|yesterday|last\\s+(?:night|week|weekend|month|year|summer|winter|time|sunday|monday|tuesday|wednesday|thursday|friday|saturday)|in\\s+(?:19|20)\\d\\d|when\\s+I\\s+was\\s+(?:a\\s+)?[a-z]+)(\\.)(\\s+)(We|They|He|She|It|My|Our|The|You|His|Her|Their|I)\\b', 'gi'),
  cat: 'PUNCTUATION', vi: 'Cụm chỉ thời gian (Fifteen years ago, Yesterday, Last week…) không đứng riêng thành một câu. Nối vào câu sau bằng dấu phẩy: Fifteen years ago, I was a student.',
  fn: m => {
    const from = m[1].length + m[2].length, word = m[5];
    return { from, to: m[0].length, rep: ',' + m[4] + (word === 'I' ? 'I' : word.toLowerCase()) };
  } };
// "university HUI" → "HUI University", "district Go Vap" → "Go Vap District"
const FX_RULE_NAME = { re: /\b(university|college|school|hospital|district|ward|street|road|province|lake|park|market|bridge|airport|station|pagoda|temple|city|mountain|island|beach|river)\s+((?:[A-Z][A-Za-z]*)(?:\s+[A-Z][A-Za-z]*)*)(?=\s*(?:[.,!?;:)]|$)|\s+(?:in|on|at|near|and|or|with|for|from|to|is|was|are|were|has|had)\b)/g,
  cat: 'GRAMMAR', vi: 'Trong tiếng Anh, tên riêng đứng TRƯỚC danh từ chung (ngược với tiếng Việt): HUI University, Go Vap District, Le Loi Street, Hoan Kiem Lake.',
  fn: (m, t) => {
    const noun = m[1], name = m[2];
    if (/^(I|A|The|An)$/.test(name.split(/\s+/)[0])) return null;
    if (/\b(the\s+)?(same|this|that|my|your|our|their|his|her)\s*$/i.test(t.slice(0, m.index)) && noun === 'school') return null;
    const Noun = noun[0].toUpperCase() + noun.slice(1);
    return { rep: name + ' ' + Noun, on: noun !== 'city' };
  } };

// ---- sentences built in Vietnamese word order: places, weather ----
const FX_NUM_DIGIT = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12 };
const FX_PLACE = '(?:(?:[A-Z][a-z]+\\s+){1,3}(?:District|City|Province|Ward)|(?:[Dd]istrict|[Ww]ard)\\s+(?:\\d+|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve))';
const fxPlaceFmt = p => p.replace(/^(district|ward)\s+(\w+)$/i, (m, n, x) => n[0].toUpperCase() + n.slice(1).toLowerCase() + ' ' + (FX_NUM_DIGIT[x.toLowerCase()] || x));
const FX_SKYADJ = 'sunny|cloudy|clear|blue|grey|gray|dark|rainy|hot|cold|cool|warm|nice|beautiful|bad|good|windy|foggy|stormy|fine|bright';
const FX_RULES_VN = [
  // "district twelve is the sky sunny" → "in District 12, the sky is sunny"
  { re: new RegExp('(^|[.!?]\\s+|\\b)(' + FX_PLACE + ')\\s+(is|was)\\s+(?:the\\s+)?(sky|weather)\\s+(' + FX_SKYADJ + ')\\b', 'g'), cat: 'GRAMMAR',
    vi: 'Tiếng Việt nói “quận 12 thì trời nắng”, tiếng Anh phải nói “ở quận 12, trời nắng”: in District 12, the sky is sunny. Chủ ngữ (the sky) đứng trước động từ (is).',
    fn: (m, t) => {
      if (/^(In|At|On|From|Near)\s/.test(m[2]) || /\b(in|at|on|from|near)\s*$/i.test(t.slice(0, m.index + m[1].length))) return null;
      const start = !t.slice(0, m.index + m[1].length).trim() || /[.!?]\s*$/.test(t.slice(0, m.index + m[1].length));
      return { from: m[1].length, rep: (start ? 'In ' : 'in ') + fxPlaceFmt(m[2]) + ', the ' + m[4].toLowerCase() + ' ' + m[3].toLowerCase() + ' ' + m[5].toLowerCase() };
    } },
  // "… is the sky sunny" (not a question) → "the sky is sunny"
  { re: new RegExp('\\b(is|was)\\s+the\\s+(sky|weather)\\s+(' + FX_SKYADJ + ')\\b', 'gi'), cat: 'GRAMMAR',
    vi: 'Câu kể (không phải câu hỏi) thì chủ ngữ đứng trước động từ: the sky is sunny, không phải “is the sky sunny”.',
    fn: (m, t) => {
      const before = t.slice(0, m.index);
      if (!before.trim() || /[.!?]\s*$/.test(before)) return null;   // a real question: "Is the sky clear?"
      if (/\?/.test(t.slice(m.index).split(/[.!\n]/)[0])) return null;
      return { rep: 'the ' + m[2].toLowerCase() + ' ' + m[1].toLowerCase() + ' ' + m[3].toLowerCase() };
    } },
  // "district twelve" → "District 12"
  { re: /\b(district|ward)\s+(\d+|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)\b/gi, cat: 'CASING',
    vi: 'Quận/phường có số viết là “District 12”, “Ward 5”: viết hoa chữ đầu và dùng chữ số.',
    fn: m => { const r = fxPlaceFmt(m[0]); return r === m[0] ? null : { rep: r }; } },
  // "Tan Binh District, today …" → "In Tan Binh District, today …"
  { re: new RegExp('(^|[.!?]\\s+)(' + FX_PLACE + ')(?=,\\s*(?:today|yesterday|tomorrow|now|tonight|this|last|it|there|the|we|I|people|everyone|everybody|in|on|at)\\b)', 'g'), cat: 'GRAMMAR',
    vi: 'Nói về chuyện xảy ra ở một nơi thì cần giới từ: In Tan Binh District, … (ở quận Tân Bình). Tiếng Việt có thể bỏ “ở”, tiếng Anh thì không.',
    fn: (m, t) => /^(In|At|On|From|To|Near|Around|Across|Inside|Outside|Through)\s/.test(m[2]) || /\b(in|at|on|from|to|near)\s*$/i.test(t.slice(0, m.index + m[1].length)) ? null : { from: m[1].length, rep: 'In ' + fxPlaceFmt(m[2]) } },
  // "the heavy rainy" (no verb) → "it is raining heavily"
  { re: /\b(?:the\s+)?(heavy|light|big|strong|torrential|very)\s+(rainy|raining)\b/gi, cat: 'GRAMMAR',
    vi: 'Nói “trời mưa to” dùng “it is raining heavily” (hoặc “there is heavy rain”). “rainy” là tính từ (a rainy day), không đi sau “heavy”.',
    fn: (m, t) => {
      const adv = { heavy: 'heavily', light: 'lightly', big: 'heavily', strong: 'heavily', torrential: 'heavily', very: 'heavily' }[m[1].toLowerCase()];
      if (/\b(is|was|it's)\s*$/i.test(t.slice(0, m.index))) return { rep: 'raining ' + adv };   // "it is heavy raining"
      const past = FX_PAST_MARK.test(t);
      return { rep: fxCap(m[0], (past ? 'it rained ' : 'it is raining ') + adv) };
    } },
  // "today rain" / "today is rain" → "today it is raining"
  { re: /\b(today|tonight|now)\s+(?:is\s+|very\s+|so\s+)?(rain|rains|raining)\b(?!\s+(?:is|was|will|has|forecast|season|coat|boots))/gi, cat: 'GRAMMAR',
    vi: 'Trời mưa thì nói “it is raining” (chủ ngữ giả “it”): Today it is raining.',
    fn: m => ({ rep: m[1] + ' it is raining' }) },
  { re: /\b(rain|rains|raining|rained)\s+((?:very|so|really|too)\s+)?heavy\b/gi, cat: 'GRAMMAR',
    vi: 'Bổ nghĩa cho động từ “rain” dùng trạng từ “heavily”: it is raining heavily.',
    fn: m => ({ from: m[0].length - 5, rep: 'heavily' }) }
];

// time words for the past + a present-tense verb: "Yesterday I go" → "Yesterday I went"
const FX_PAST_MARK = new RegExp('\\b(yesterday|last\\s+(?:night|week|weekend|month|year|summer|winter|spring|autumn|fall|time|monday|tuesday|wednesday|thursday|friday|saturday|sunday)|(?:' + FX_NUMW + '|a|an|one)\\s+(?:minutes?|hours?|days?|weeks?|months?|years?)\\s+ago|in\\s+(?:19\\d\\d|20[01]\\d)|when\\s+(?:I|we|he|she|they)\\s+(?:was|were)\\s+(?:a\\s+)?(?:child|kid|young|little|small|student|students|children|kids|at school|teenager|boy|girl))\\b', 'i');
const FX_MENTAL = /^(think|know|believe|hope|guess|remember|forget|mean|feel|understand|wonder|love|like|want|need|wish|bet|say|tell|ask)$/;
function fxPastRules(text) {
  const out = [], V = fxVerbs();
  const sents = []; const re = /[^.!?\n]+[.!?]*/g; let s;
  while ((s = re.exec(text))) sents.push({ t: s[0], at: s.index });
  // a sentence that is only a time phrase ("Fifteen years ago.") sets the time of the next one
  const onlyMark = t => { const x = t.replace(/[.!?\s]+$/, '').trim(); const m = x.match(FX_PAST_MARK); return !!m && m[0].length >= x.length - 1; };
  let carry = false;
  sents.forEach(({ t: sent, at: base }) => {
    const marked = FX_PAST_MARK.test(sent) || carry;
    carry = onlyMark(sent);
    if (!marked || carry) return;
    // positions of verbs already in the past ("was", "went", "watched"…)
    const stripped = sent.replace(FX_PAST_MARK, m => ' '.repeat(m.length));
    const pastAt = [];
    stripped.replace(/[A-Za-z']+/g, (w, i) => { const l = w.toLowerCase(); if (V.v2.has(l) || (/ed$/.test(l) && fxFromPast(l)) || /^(was|were|did|didn't|had)$/.test(l)) pastAt.push(i); return w; });
    const complex = /\b(that|what|which|who|while|if|because|why|how|where|whether|until|before|after)\b/i.test(sent) || /\?\s*$/.test(sent);
    const vre = /\b([Ii]|[Yy]ou|[Ww]e|[Tt]hey|[Hh]e|[Ss]he|[Ii]t|(?:[Mm]y|[Hh]is|[Hh]er|[Oo]ur|[Tt]heir|[Yy]our|[Tt]he)\s+[a-z]+|[A-Z][a-z]+)\s+(?:(always|usually|often|sometimes|never|also|just|really|still|first|then)\s+)?(don'?t|doesn'?t|have|has|am|are|is|[a-z]+)\b(\s+[a-z]+)?/g; let m;
    let lastOn = null, lastEnd = -1, mentalAt = -1;
    while ((m = vre.exec(sent))) {
      vre.lastIndex = m.index + m[1].length;   // rescan right after the subject
      const prev = fxPrevWord(sent, m.index);
      if (FX_SKIP_BEFORE.test(prev)) continue;
      if (/^[A-Z][a-z]+$/.test(m[1]) && !/^(i|you|we|they|he|she|it)$/i.test(m[1]) && /^(yesterday|last|when|in|then|after|before|today|on|at|and|but|so|a|an|the|this|that|there|one|two|three|four|five|six|seven|eight|nine|ten|my|his|her|our|their|your|what|where|why|how|who|which|if|because|although|while|during|since|from|for|every|some|many|all|we|you|they|he|she|it)$/i.test(m[1])) continue;   // a capitalised word is a name unless it's a common sentence starter
      const subj = m[1], w = m[3].toLowerCase(), nxt = (m[4] || '').trim().toLowerCase();
      const rel = m.index + m[0].length - (m[4] || '').length - m[3].length, at = base + rel;
      let rep = null, len = m[3].length, extra = '';
      if (/^(don'?t|doesn'?t)$/.test(w)) rep = "didn't";
      else if (w === 'am' || w === 'is') rep = 'was';
      else if (w === 'are') rep = /^(you|we|they|.+s)$/i.test(subj) ? 'were' : null;
      else if ((w === 'have' || w === 'has') && nxt) {
        const b = fxFromPast(nxt, true);
        if (b) { rep = fxPast(b); len = m[3].length + m[4].length; extra = 'pp'; }   // "have seen yesterday" → "saw"
        else rep = 'had';
      } else if (w === 'have' || w === 'has') rep = 'had';
      else {
        const b = V.base.has(w) && !/^(can|will|must|should|may|might|would|could|shall)$/.test(w) ? w : fxFrom3rd(w);
        if (!b || b === 'be') continue;
        if (FX_MENTAL.test(b)) { if (mentalAt < 0) mentalAt = rel; if (complex || pastAt.length) continue; }
        rep = fxPast(b);
        // "learn at university" → "studied at university"
        if (b === 'learn' && /^\s+(at|in)\s+(the\s+|a\s+)?(university|college|school|[A-Z])/i.test(sent.slice(rel + m[3].length))) { rep = 'studied'; extra = 'study'; }
      }
      if (!rep || rep === w) continue;
      // sure when nothing else in the sentence is past, or when this verb continues an earlier past verb ("I was…, I learn")
      const before = pastAt.some(p => p < rel), after = pastAt.some(p => p > rel);
      lastOn = !complex && (!pastAt.length || (before && !after) || before) && !(mentalAt >= 0 && mentalAt < rel);
      lastEnd = at + len;
      out.push({ offset: at, length: len, rep, on: lastOn,
        vi: extra === 'pp' ? 'Có mốc thời gian quá khứ (yesterday, last week, … ago) thì dùng quá khứ đơn, không dùng hiện tại hoàn thành: I saw him yesterday.'
          : extra === 'study' ? 'Câu nói về quá khứ nên dùng quá khứ đơn. Ngoài ra “học ở trường” dùng “study at”, không dùng “learn at”: I studied at HUI University.'
          : 'Câu có mốc thời gian quá khứ (yesterday, last week, … ago) nên động từ chia ở quá khứ đơn: Yesterday I went…' });
    }
    // "…I went to the market and buy some…" → the second verb follows the first one
    if (lastEnd >= 0) {
      const are = /\b(and|then)\s+([a-z]+)\b(?=\s+(?:a|an|the|some|my|his|her|our|their|your|me|him|them|us|it|to|with|at|in|on|home|out|up|back|lots|many|football|games|tennis|music|tv|lunch|dinner|breakfast|together)\b|\s*(?:[.,!?]|$))/g; let a;
      while ((a = are.exec(sent))) {
        const at = base + a.index + a[0].length - a[2].length;
        if (at < lastEnd) continue;
        const w = a[2].toLowerCase();
        const b = V.base.has(w) ? w : fxFrom3rd(w);
        if (!b || b === 'be' || FX_MENTAL.test(b)) continue;
        // at the end of a clause only clear verbs ("and swim."), not nouns ("bread and water.")
        if (/^\s*(?:[.,!?]|$)/.test(sent.slice(a.index + a[0].length)) && !/^(swim|dance|sing|relax|sleep|leave|eat|go|come|study|stay|laugh|cry|talk|chat|smile|win|lose|arrive|return|sit|wait|pray|travel)$/.test(b)) continue;
        out.push({ offset: at, length: a[2].length, rep: fxPast(b), on: lastOn,
          vi: 'Hai hành động nối bằng “and” trong cùng câu quá khứ đều chia ở quá khứ: I went to the market and bought some fruit.' });
      }
    }
  });
  return out;
}

// Vietnamese chat abbreviations → full words, so the translation is right
const FX_VI_ABBR = { ko: 'không', k: 'không', kh: 'không', hok: 'không', hông: 'không', khum: 'không', dc: 'được', đc: 'được', dk: 'được', đk: 'được',
  j: 'gì', vs: 'với', ng: 'người', mn: 'mọi người', mng: 'mọi người', trc: 'trước', r: 'rồi', oy: 'rồi', cx: 'cũng', cg: 'cũng', ntn: 'như thế nào',
  lm: 'làm', thik: 'thích', iu: 'yêu', bik: 'biết', bít: 'biết', wa: 'quá', mik: 'mình', mk: 'mình', mìk: 'mình', z: 'vậy', v: 'vậy', bh: 'bây giờ',
  bjo: 'bây giờ', nhìu: 'nhiều', ns: 'nói', nt: 'nhắn tin', tl: 'trả lời', vk: 'vợ', ck: 'chồng', ny: 'người yêu', sn: 'sinh nhật', kq: 'kết quả',
  đt: 'điện thoại', ae: 'anh em', đag: 'đang', dag: 'đang', ms: 'mới', lun: 'luôn', kím: 'kiếm', hum: 'hôm', bn: 'bạn', mún: 'muốn', hc: 'học', ad: null };
function fxViRules(text) {
  const out = [];
  const re = /(^|[^\p{L}\p{N}])([\p{L}]{1,4})(?=[^\p{L}\p{N}]|$)/gu; let m;
  while ((m = re.exec(text))) {
    const w = m[2], low = w.toLowerCase(), full = FX_VI_ABBR[low];
    if (!full) continue;
    if (w.length === 1 && w !== low) continue;   // single capital letters are initials (V, K…)
    if (low === 'v' || low === 'k' || low === 'r' || low === 'z' || low === 'j') {
      // only when it sits between words like in chat: "đi ăn k", "j vậy"
      const after = text.slice(m.index + m[0].length);
      if (/^\s*[.,]?\d/.test(after) || /\d\s*$/.test(text.slice(0, m.index + m[1].length))) continue;
    }
    if (low === 'bn' && /^\s*(tuổi|tiền|giờ|lâu|người|cái|con)/i.test(text.slice(m.index + m[0].length))) {
      out.push({ offset: m.index + m[1].length, length: w.length, rep: 'bao nhiêu', vi: `“${w}” là viết tắt của “bao nhiêu”. Viết đầy đủ để dịch chính xác hơn.` });
      continue;
    }
    out.push({ offset: m.index + m[1].length, length: w.length, rep: /^[A-ZĐ]/.test(w) ? full[0].toUpperCase() + full.slice(1) : full,
      vi: `“${w}” là cách viết tắt của “${full}”. App viết đầy đủ để dịch chính xác hơn.` });
  }
  return out;
}

function fxOverlap(a, b) {
  const a1 = a.offset + a.length, b1 = b.offset + b.length;
  if (!a.length && !b.length) return a.offset === b.offset;
  if (!a.length) return a.offset > b.offset && a.offset < b1;
  if (!b.length) return b.offset > a.offset && b.offset < a1;
  return a.offset < b1 && b.offset < a1;
}
// run the built-in rules → fix items (offsets in the original text)
function fxRules(text, lang) {
  const items = [];
  const push = it => { if (it.orig === it.rep) return; if (!items.some(x => fxOverlap(x, it))) items.push(it); };
  const mk = (offset, length, rep, cat, vi, on, alts) => ({ offset, length, orig: text.substr(offset, length), rep, alts: alts || [], cat, spell: false, msg: '', vi, on: on !== false, rule: true });
  if (lang === 'vi') { fxViRules(text).forEach(r => push(mk(r.offset, r.length, r.rep, 'NONSTANDARD_PHRASES', r.vi))); return items; }
  fxPastRules(text).forEach(r => push(mk(r.offset, r.length, r.rep, 'GRAMMAR', r.vi, r.on)));
  [FX_RULE_FRAG, ...FX_RULES_VN, FX_RULE_NUM, FX_RULE_NAME, ...FX_RULES_EN, FX_RULE_BE, FX_RULE_QFORM, FX_RULE_FORM, FX_RULE_3RD, FX_RULE_I].forEach(rule => {
    rule.re.lastIndex = 0; let m;
    while ((m = rule.re.exec(text))) {
      const r = rule.fn(m, text);
      if (r) {
        const from = r.from || 0, to = r.to == null ? m[0].length : r.to;
        push(mk(m.index + from, to - from, r.rep, rule.cat, r.vi || rule.vi, r.on, r.alts));
      }
      if (m[0].length === 0) rule.re.lastIndex++;
    }
  });
  return items.sort((a, b) => a.offset - b.offset);
}

function fxMerge(first, rest) {
  const out = first.slice();
  (rest || []).forEach(it => { if (!out.some(x => fxOverlap(x, it))) out.push(it); });
  return out.sort((a, b) => a.offset - b.offset);
}
const fxNoTone = t => { const w = t.match(/[A-Za-zÀ-ỹ]+/g) || []; return w.length >= 3 && !FX_VI_CHARS.test(t) && !/[A-Za-z]{2,}(ing|tion|ed)\b/.test(t); };

async function fxCheck(text, lang) {
  const key = lang + '|' + text;
  if (fxCache[key]) return fxCache[key];
  let st;
  if (lang === 'en' && fxLooksVi(text)) {
    st = { text, lang, items: [], source: '', wrongLang: true };
  } else {
    let items = null, source = '', busy = false;
    const rules = fxRules(text, lang);   // mistakes Vietnamese learners often make, explained in Vietnamese
    if (lang === 'en') {
      const lt = await fxLanguageTool(text);
      if (lt === 'busy') busy = true; else if (lt) { items = lt; source = 'lt'; }
    }
    if (!items) {
      const g = await fxGoogleSuggest(text, lang);
      const fixed = fxLocal(g || text, lang);
      source = g ? 'google' : 'local';
      items = fxDiff(text, fixed, lang);
    }
    st = { text, lang, items: fxMerge(rules, items), source, busy, rules: rules.length > 0 };
    FX_VI_CHARS.lastIndex = 0;
    if (lang === 'vi' && fxNoTone(text)) st.hint = '💡 Bạn đang gõ tiếng Việt không dấu. Gõ có dấu để bản dịch chính xác hơn.';
    FX_VI_CHARS.lastIndex = 0;
  }
  // English checked without LanguageTool (busy/offline) is not kept, so the next check can use it
  if (!(lang === 'en' && st.source !== 'lt' && !st.wrongLang)) fxCache[key] = st;
  fxTranslateMsgs(st);
  return st;
}

function fxApply(st) {
  if (!st) return '';
  let out = '', pos = 0;
  [...st.items].filter(it => it.on).sort((x, y) => x.offset - y.offset).forEach(it => {
    if (it.offset < pos) return;
    out += st.text.slice(pos, it.offset) + it.rep;
    pos = it.offset + it.length;
  });
  return out + st.text.slice(pos);
}

// Vietnamese explanations: built-in for common fixes, Google-translated LanguageTool messages for grammar
function fxMsgVi(it) {
  if (it.vi) return it.vi;
  if (it.name) return 'Có thể là tên riêng nên app chưa sửa. Chạm “Sửa” nếu đúng là gõ nhầm.';
  if (it.orig && it.orig.replace(/['’]/g, '') === it.rep.replace(/['’]/g, '')) return 'Thiếu dấu nháy (\') trong dạng viết tắt.';
  if (it.cat === 'CASING') {
    if (it.orig.replace(/[\p{L}\p{N}]/gu, '') !== it.rep.replace(/[\p{L}\p{N}]/gu, ''))
      return 'Sửa dấu câu, khoảng trắng và viết hoa chữ đầu câu.';
    const L = it.rep.match(/\p{L}/u);
    return L && L[0] === L[0].toUpperCase() ? 'Cần viết hoa chữ cái này.' : 'Không cần viết hoa ở đây.';
  }
  if (it.cat === 'TYPOGRAPHY' || (!/\S/.test(it.orig + it.rep))) return 'Sửa khoảng trắng: bỏ dấu cách thừa hoặc thêm dấu cách sau dấu câu.';
  if (it.cat === 'PUNCTUATION' && !it.msg) return 'Sửa dấu câu cho đúng.';
  if (it.spell) return it.orig ? `Viết sai chính tả. Viết đúng là “${it.rep}”.` : `Thêm “${it.rep}”.`;
  return fxMsgViCache[it.msg] || '';
}
async function fxTranslateMsgs(st) {
  const msgs = [...new Set(st.items.filter(it => it.msg && !it.spell && it.cat !== 'CASING' && !fxMsgViCache[it.msg]).map(it => it.msg))];
  if (!msgs.length) return;
  const batches = [[]];
  msgs.forEach(m => { const b = batches[batches.length - 1]; if (b.join('\n').length + m.length > 420 && b.length) batches.push([m]); else b.push(m); });
  for (const b of batches) {
    try {
      const out = await fetchFromGoogleTranslate(b.join('\n'), 'en', 'vi');
      const lines = out ? out.split('\n') : [];
      if (lines.length === b.length) b.forEach((m, k) => { fxMsgViCache[m] = lines[k].trim(); });
      else if (b.length === 1 && out) fxMsgViCache[b[0]] = out.trim();
    } catch (e) { /* keep the English message */ }
  }
  if (fxState === st) fxRender();
}

const fxCard = document.getElementById('fx-card');
const fxNote = document.getElementById('fx-note');
const fxToggle = document.getElementById('fx-toggle');
const fxShow = s => (/\S/.test(s) ? s.trim() : s.replace(/[ \t]/g, '␣').replace(/\n/g, '↵'));
function fxRender() {
  fxToggle.textContent = fxOn ? '✨ Kiểm tra lỗi: Bật' : '✨ Kiểm tra lỗi: Tắt';
  fxToggle.setAttribute('aria-pressed', fxOn ? 'true' : 'false');
  fxToggle.classList.toggle('off', !fxOn);
  const st = fxOn && fxState && fxState.text === trInput.value.trim() && fxState.lang === trSrc ? fxState : null;
  fxNote.hidden = true; fxCard.hidden = true;
  if (!st) return;
  if (st.wrongLang) { fxNote.textContent = '💡 Có vẻ bạn đang gõ tiếng Việt. Bấm ⇄ để dịch Việt → Anh.'; fxNote.className = 'fx-note'; fxNote.hidden = false; return; }
  const extra = st.hint || (st.busy ? '⏳ LanguageTool đang bận nên app chỉ kiểm tra cơ bản. Bấm Dịch lại sau ít phút để kiểm tra kỹ hơn.' : '');
  if (!st.items.length) {
    fxNote.textContent = extra || (st.source === 'lt' ? '✓ Không thấy lỗi chính tả hay ngữ pháp' : '✓ Không thấy lỗi chính tả');
    fxNote.className = extra ? 'fx-note' : 'fx-note ok'; fxNote.hidden = false; return;
  }
  fxNote.className = 'fx-note';
  if (extra) { fxNote.textContent = extra; fxNote.hidden = false; }
  const on = st.items.filter(it => it.on).length, total = st.items.length;
  document.getElementById('fx-title').textContent = on ? `✨ Gợi ý sửa ${on} lỗi${total > on ? ` · ${total - on} giữ nguyên` : ''}` : `💡 ${total} gợi ý sửa lỗi`;
  document.getElementById('fx-src').textContent = (st.source === 'lt' ? 'LanguageTool' : st.source === 'google' ? 'Google' : 'Cơ bản') + (st.items.some(it => it.rule) ? ' + Mẹo' : '');
  // corrected sentence with changes highlighted
  const box = document.getElementById('fx-text');
  box.innerHTML = '';
  let pos = 0;
  [...st.items].sort((x, y) => x.offset - y.offset).forEach(it => {
    if (it.offset < pos) return;
    box.appendChild(document.createTextNode(st.text.slice(pos, it.offset)));
    if (it.on) {
      if (it.orig) box.appendChild(lsEl('del', 'fx-del', /\S/.test(it.orig) ? it.orig : fxShow(it.orig)));
      if (it.rep) box.appendChild(lsEl('ins', 'fx-ins', it.rep));
    } else box.appendChild(lsEl('span', 'fx-skip', it.orig));
    pos = it.offset + it.length;
  });
  box.appendChild(document.createTextNode(st.text.slice(pos)));
  // list of fixes with explanation; each can be undone / re-applied / swapped for an alternative
  const list = document.getElementById('fx-list');
  list.innerHTML = '';
  st.items.forEach(it => {
    const row = lsEl('div', 'fx-item' + (it.on ? '' : ' off'));
    const top = lsEl('div', 'fx-row');
    top.appendChild(lsEl('span', 'fx-cat', FX_CAT[it.cat] || FX_CAT.MISC));
    const ch = lsEl('span', 'fx-change');
    const vis = (x, y) => (x.trim() === y.trim() ? x.replace(/[ \t]/g, '␣') : fxShow(x));
    if (it.orig) ch.appendChild(lsEl('s', '', vis(it.orig, it.rep)));
    if (it.orig && it.rep) ch.appendChild(document.createTextNode(' → '));
    if (it.rep) ch.appendChild(lsEl('b', '', vis(it.rep, it.orig)));
    if (!it.rep) ch.appendChild(document.createTextNode(' (bỏ)'));
    top.appendChild(ch);
    const tg = lsEl('button', 'fx-undo', it.on ? '↺ Giữ nguyên' : '✓ Sửa');
    tg.addEventListener('click', () => { it.on = !it.on; it.name = false; fxRender(); trRenderUse(); if (trUse === 'fixed') { trLastText = ''; runTranslate(); } });
    top.appendChild(tg);
    row.appendChild(top);
    const vi = fxMsgVi(it);
    if (vi) row.appendChild(lsEl('div', 'fx-msg', vi));
    if (it.msg && !it.spell && it.cat !== 'CASING' && vi !== it.msg) row.appendChild(lsEl('div', 'fx-msg-en', it.msg));
    if (it.alts && it.alts.length) {
      const alts = lsEl('div', 'fx-alts');
      alts.appendChild(lsEl('span', 'fx-alts-l', 'Hoặc:'));
      it.alts.forEach(a => {
        const b = lsEl('button', 'fx-alt', a);
        b.addEventListener('click', () => { it.alts = [it.rep, ...it.alts.filter(x => x !== a)]; it.rep = a; it.on = true; it.name = false; fxRender(); trRenderUse(); if (trUse === 'fixed') { trLastText = ''; runTranslate(); } });
        alts.appendChild(b);
      });
      row.appendChild(alts);
    }
    list.appendChild(row);
  });
  document.getElementById('fx-apply').hidden = !on;
  document.getElementById('fx-use-fixed').hidden = !on || trUse === 'fixed';
  document.getElementById('fx-more-sum').textContent = `Giải thích từng lỗi (${total})`;
  fxCard.hidden = false;
}
fxToggle.addEventListener('click', () => {
  fxOn = !fxOn;
  try { localStorage.setItem(FX_KEY, fxOn ? '1' : '0'); } catch (e) {}
  trLastText = '';
  if (trInput.value.trim()) runTranslate(); else fxRender();
});
document.getElementById('fx-apply').addEventListener('click', () => {
  if (!fxState) return;
  const fixed = fxApply(fxState);
  fxCache[fxState.lang + '|' + fixed] = { text: fixed, lang: fxState.lang, items: [], source: fxState.source };
  trInput.value = fixed;
  updateCount();
  fxState = null;
  trLastText = '';
  trUse = 'orig';
  runTranslate();
});
document.getElementById('fx-speak').addEventListener('click', () => {
  if (fxState) speak(fxApply(fxState), 0.9, fxState.lang);
});
const fxMore = document.getElementById('fx-more');
try { fxMore.open = localStorage.getItem(FX_KEY + '-open') === '1'; } catch (e) {}
fxMore.addEventListener('toggle', () => { try { localStorage.setItem(FX_KEY + '-open', fxMore.open ? '1' : '0'); } catch (e) {} });
/* ============================================================
   v117 · Tab Dịch: bản gốc / đề xuất sửa / bản dịch tách riêng · người học chọn dịch câu nào
   · ngữ cảnh (chung, giao tiếp, công việc, email, chuyên ngành 3D) · từ điển thuật ngữ 3D
   · đối chiếu từng câu · lịch sử, yêu thích, sổ từ · lưu sang tab Vocabulary và Shadowing
============================================================ */
const TRX = { ctx: 'hoc-tieng-anh-tr-ctx', hist: 'hoc-tieng-anh-tr-hist', fav: 'hoc-tieng-anh-tr-fav', words: 'hoc-tieng-anh-tr-words', gloss: 'hoc-tieng-anh-tr-gloss', keep: 'hoc-tieng-anh-tr-keep' };
const trxLoad = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } };
const trxSave = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
let trUse = 'orig';                         // dịch câu gốc (mặc định) hay câu đã sửa
let trCtx = trxLoad(TRX.ctx, 'general');
let trKeepEn = trxLoad(TRX.keep, true) !== false;   // ngữ cảnh 3D: giữ thuật ngữ tiếng Anh trong bản dịch
let trHist = trxLoad(TRX.hist, []); if (!Array.isArray(trHist)) trHist = [];
let trFav = trxLoad(TRX.fav, []); if (!Array.isArray(trFav)) trFav = [];
let trWords = trxLoad(TRX.words, []); if (!Array.isArray(trWords)) trWords = [];
let trMyGloss = trxLoad(TRX.gloss, []); if (!Array.isArray(trMyGloss)) trMyGloss = [];
let trLast = null;                          // { src, out, raw, sl, tl, fixes, offFix:Set }
const TR_CTX = [['general', '🌐 Chung'], ['talk', '💬 Giao tiếp'], ['work', '💼 Công việc'], ['email', '✉️ Email'], ['3d', '🧊 Chuyên ngành 3D']];

/* ---------- từ điển thuật ngữ 3D: [tiếng Anh, tiếng Việt nên dùng, ghi chú] ---------- */
const TR_GLOSS = [
  ['mesh', 'lưới (mesh)', 'Thường giữ nguyên “mesh”.'], ['polygon', 'đa giác (polygon)', 'Viết tắt: poly.'], ['poly count', 'số đa giác', 'Còn viết polycount.'],
  ['vertex', 'đỉnh (vertex)', 'Số nhiều: vertices.'], ['edge', 'cạnh (edge)', ''], ['face', 'mặt (face)', ''], ['edge loop', 'vòng cạnh (edge loop)', 'Google hay dịch sai thành “vòng lặp cạnh”.'],
  ['topology', 'topology (cấu trúc lưới)', 'Dân 3D thường giữ nguyên.'], ['retopology', 'retopology (dựng lại lưới)', 'Viết tắt: retopo.'], ['subdivide', 'chia nhỏ lưới (subdivide)', ''],
  ['bevel', 'vát cạnh (bevel)', 'Google hay dịch thành “góc xiên”.'], ['extrude', 'đùn (extrude)', 'Thường giữ nguyên.'], ['normal', 'pháp tuyến (normal)', 'Không phải “bình thường” hay “tiêu chuẩn”.'],
  ['normal map', 'normal map', 'Google hay dịch sai thành “bản đồ bình thường”.'], ['flip normals', 'lật normal (pháp tuyến)', ''], ['smoothing group', 'smoothing group (nhóm làm mịn)', ''],
  ['UV', 'UV', 'Giữ nguyên.'], ['UV unwrap', 'trải UV', 'Google hay dịch thành “mở gói UV”.'], ['unwrap', 'trải (UV)', ''], ['seam', 'đường nối (seam)', 'Không phải “đường may”.'],
  ['UV island', 'mảnh UV (UV island)', ''], ['texel density', 'mật độ texel', ''], ['UDIM', 'UDIM', 'Giữ nguyên.'], ['texture', 'texture', 'Có thể dịch “kết cấu bề mặt”, nhưng dân 3D thường giữ nguyên.'],
  ['bake', 'bake (nướng map)', 'Google hay dịch thành “nướng”.'], ['baking', 'bake (nướng map)', ''], ['albedo', 'albedo (màu nền)', ''], ['base color', 'màu nền (base color)', ''],
  ['roughness', 'độ nhám (roughness)', ''], ['metallic', 'độ kim loại (metallic)', ''], ['specular', 'phản xạ gương (specular)', ''], ['opacity', 'độ trong suốt (opacity)', ''],
  ['material', 'vật liệu (material)', ''], ['shader', 'shader', 'Giữ nguyên, không phải “đổ bóng”.'], ['shading', 'shading (đổ bóng bề mặt)', ''], ['PBR', 'PBR', 'Physically Based Rendering.'],
  ['render', 'render (kết xuất)', 'Danh từ hoặc động từ, dân 3D thường giữ nguyên.'], ['rendering', 'render (kết xuất)', ''], ['render farm', 'render farm', ''], ['noise', 'nhiễu (noise)', 'Trong render là “nhiễu”, không phải “tiếng ồn”.'],
  ['denoiser', 'bộ khử nhiễu', 'Không phải “khử tiếng ồn”.'], ['samples', 'số mẫu (samples)', ''], ['global illumination', 'chiếu sáng toàn cục (GI)', ''], ['HDRI', 'HDRI', 'Giữ nguyên.'],
  ['key light', 'đèn chính (key light)', ''], ['rim light', 'đèn viền (rim light)', ''], ['fill light', 'đèn phụ (fill light)', ''], ['exposure', 'độ phơi sáng', ''],
  ['viewport', 'khung nhìn (viewport)', ''], ['scene', 'cảnh (scene)', ''], ['asset', 'asset', 'Không phải “tài sản”.'], ['pivot', 'tâm xoay (pivot)', ''],
  ['rig', 'rig (bộ khung điều khiển)', 'Google hay dịch sai thành “giàn khoan”.'], ['rigging', 'rigging (dựng khung điều khiển)', ''], ['skinning', 'skin (gắn lưới vào xương)', ''],
  ['weight painting', 'vẽ trọng số (weight painting)', ''], ['skin weights', 'trọng số skin', 'Không phải “trọng lượng da”.'], ['joint', 'khớp (joint)', ''], ['bone', 'xương (bone)', ''],
  ['controller', 'bộ điều khiển (controller)', ''], ['keyframe', 'keyframe (khung hình khoá)', ''], ['timeline', 'thanh thời gian (timeline)', ''], ['walk cycle', 'chu kỳ đi bộ (walk cycle)', ''],
  ['blend shape', 'blend shape (biến dạng hình)', ''], ['LOD', 'LOD (mức chi tiết)', ''], ['draw call', 'draw call', ''], ['frame rate', 'tốc độ khung hình', ''],
  ['revision', 'lần chỉnh sửa', ''], ['feedback', 'góp ý (feedback)', ''], ['deadline', 'hạn chót (deadline)', ''], ['turnaround', 'thời gian hoàn thành', ''], ['reference', 'ảnh tham khảo (reference)', '']
];
// bản dịch máy hay sai với thuật ngữ 3D: [chỉ áp dụng khi câu gốc có từ này, cụm sai trong bản dịch, thay bằng, luôn sửa (true) hay chỉ khi "giữ thuật ngữ tiếng Anh"]
const TR_FIX3D = [
  [/normal maps?/i, /bản đồ (bình thường|thông thường|pháp tuyến)/gi, 'normal map', true],
  [/normals?\b/i, /\b(các )?(tiêu chuẩn|chỉ tiêu|định mức|bình thường)\b/gi, 'normal', true],
  [/\brig(s|ged|ging)?\b/i, /giàn khoan|giàn giáo|gian lận/gi, 'rig', true],
  [/\bbak(e|ed|ing)\b/i, /\bnướng\b/gi, 'bake', true],
  [/\bunwrap/i, /mở (gói|bọc)|bỏ (gói|bọc)|tháo (gói|bọc)/gi, 'trải UV', true],
  [/\bseams?\b/i, /đường may/gi, 'đường nối (seam)', true],
  [/\bedge loops?\b/i, /vòng lặp (cạnh|biên)/gi, 'vòng cạnh (edge loop)', true],
  [/\bnoise\b/i, /tiếng ồn/gi, 'nhiễu', true],
  [/\bdenois/i, /khử tiếng ồn|giảm tiếng ồn/gi, 'khử nhiễu', true],
  [/\bskin weights?\b/i, /trọng lượng da/gi, 'trọng số skin', true],
  [/\bbevel/i, /góc xiên|vát xiên/gi, 'vát cạnh (bevel)', true],
  [/\bassets?\b/i, /tài sản/gi, 'asset', true],
  [/\bshaders?\b/i, /bộ đổ bóng/gi, 'shader', true],
  [/\btextures?\b/i, /kết cấu/gi, 'texture', false],
  [/\brender/i, /kết xuất|hiển thị/gi, 'render', false],
  [/\btopology\b/i, /cấu trúc liên kết|tôpô|topo học/gi, 'topology', true],
  [/\bviewport\b/i, /cổng xem/gi, 'viewport', true],
  [/\bkeyframes?\b/i, /khung hình chính/gi, 'keyframe', false]
];
const trGlossAll = () => [...trMyGloss.map(g => [g[0], g[1], 'Thuật ngữ của bạn', true]), ...TR_GLOSS];
const trEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function trGlossFind(en, vi) {
  const out = [], seen = new Set();
  trGlossAll().forEach(g => {
    const re = new RegExp('\\b' + trEsc(g[0]).replace(/\\ /g, '\\s+') + '(s|es|ed|ing)?\\b', 'i');
    if (en && re.test(en) && !seen.has(g[0].toLowerCase())) { seen.add(g[0].toLowerCase()); out.push(g); }
    else if (vi && g[1] && new RegExp('(^|[^\\p{L}])' + trEsc(g[1].replace(/\s*\(.*\)$/, '')) + '($|[^\\p{L}])', 'iu').test(vi) && !seen.has(g[0].toLowerCase())) { seen.add(g[0].toLowerCase()); out.push(g); }
  });
  // cụm dài trước: bỏ "unwrap" nếu đã có "UV unwrap"…
  return out.filter(g => !out.some(h => h !== g && h[0].length > g[0].length && h[0].toLowerCase().includes(g[0].toLowerCase())));
}
// sửa bản dịch Anh → Việt theo từ điển 3D; trả về [bản đã sửa, danh sách thay đổi]
function trFix3D(src, out, off) {
  const fixes = [];
  let res = out;
  TR_FIX3D.forEach((f, i) => {
    if (!f[0].test(src) || (!f[3] && !trKeepEn)) return;
    if (off && off.has(i)) { const m = out.match(f[1]); if (m) fixes.push({ i, from: m[0], to: f[2], off: true }); return; }
    res = res.replace(f[1], m => { fixes.push({ i, from: m, to: f[2] }); return f[2]; });
  });
  return [res, fixes];
}

/* ---------- ghi chú theo ngữ cảnh (kiểm tra câu tiếng Anh) ---------- */
const TR_INFORMAL = [[/\b(pls|plz)\b/i, 'please'], [/\bthx\b|\bthanx\b/i, 'thank you / thanks'], [/\bu\b/i, 'you'], [/\bur\b/i, 'your / you’re'], [/\bgonna\b/i, 'going to'], [/\bwanna\b/i, 'want to'], [/\bgotta\b/i, 'have to'], [/\bok\b/i, 'okay / sounds good'], [/\bbtw\b/i, 'by the way']];
const TR_CONTR = [[/\bdon't\b/i, 'do not'], [/\bcan't\b/i, 'cannot'], [/\bwon't\b/i, 'will not'], [/\bI'm\b/, 'I am'], [/\bit's\b/i, 'it is'], [/\bwe're\b/i, 'we are'], [/\bI'll\b/, 'I will'], [/\bdidn't\b/i, 'did not'], [/\bisn't\b/i, 'is not']];
function trCtxNotes(en) {
  const n = [];
  if (!en || trCtx === 'general') return n;
  const t = en.replace(/[’]/g, "'");
  const inf = TR_INFORMAL.filter(([re]) => re.test(t)).map(([re, r]) => `“${t.match(re)[0]}” → ${r}`);
  if (trCtx === 'email' || trCtx === 'work') {
    if (inf.length) n.push(['⚠️', 'Từ thân mật / viết tắt, nên thay khi viết cho công việc: ' + inf.join(', ') + '.']);
    const con = TR_CONTR.filter(([re]) => re.test(t)).map(([re, r]) => `${t.match(re)[0]} → ${r}`);
    if (trCtx === 'email' && con.length) n.push(['✉️', 'Email trang trọng nên viết đầy đủ: ' + con.slice(0, 4).join(', ') + '.']);
    const imp = t.split(/(?<=[.!?])\s+/).filter(s => /^(send|give|tell|fix|check|do|make|call|reply|update|finish)\b/i.test(s.trim()));
    if (imp.length) n.push(['🙏', `Câu mệnh lệnh “${imp[0].trim().slice(0, 40)}…” có thể nghe cộc. Lịch sự hơn: “Could you…, please?” hoặc “Would you mind…?”`]);
  }
  if (trCtx === 'email') {
    if (!/^\s*(dear|hi|hello|good (morning|afternoon|evening))\b/i.test(t)) n.push(['👋', 'Email thường mở đầu bằng lời chào: “Dear Mr Smith,” (trang trọng) hoặc “Hi Anna,” (thân thiện).']);
    if (!/(regards|sincerely|best wishes|thank you|thanks|cheers|best,?)\s*[,.!]?\s*(\n.*)?$/i.test(t.trim())) n.push(['✍️', 'Nên kết thư: “Best regards,” / “Kind regards,” rồi ký tên. Có thể thêm “Thank you for your help.” trước lời chào kết.']);
  }
  if (trCtx === 'talk') {
    const full = [[/\bI am\b/, "I'm"], [/\bdo not\b/i, "don't"], [/\bit is\b/i, "it's"], [/\bI will\b/, "I'll"], [/\bcannot\b/i, "can't"]].filter(([re]) => re.test(t)).map(([re, r]) => `${t.match(re)[0]} → ${r}`);
    if (full.length) n.push(['💬', 'Khi nói chuyện, người bản xứ hay dùng dạng rút gọn cho tự nhiên: ' + full.join(', ') + '.']);
    if (/\b(furthermore|moreover|therefore|hence|regarding)\b/i.test(t)) n.push(['💬', 'Từ hơi trang trọng cho văn nói: furthermore / moreover → also, plus; therefore → so; regarding → about.']);
  }
  return n;
}

// bản tiếng Anh điều chỉnh theo văn phong (theo quy tắc, không dùng AI): công việc/email → đầy đủ, trang trọng; giao tiếp → rút gọn
const TR_EXPAND = [["don't", 'do not'], ["doesn't", 'does not'], ["didn't", 'did not'], ["can't", 'cannot'], ["won't", 'will not'], ["isn't", 'is not'], ["aren't", 'are not'], ["wasn't", 'was not'],
  ["weren't", 'were not'], ["haven't", 'have not'], ["hasn't", 'has not'], ["couldn't", 'could not'], ["wouldn't", 'would not'], ["shouldn't", 'should not'], ["I'm", 'I am'], ["I'll", 'I will'],
  ["I've", 'I have'], ["we're", 'we are'], ["they're", 'they are'], ["you're", 'you are'], ["we'll", 'we will'], ["we've", 'we have'], ["let's", 'let us']];
const TR_FORMAL = [[/\b(pls|plz)\b/gi, 'please'], [/\b(thx|thanx)\b/gi, 'thank you'], [/\bu\b/g, 'you'], [/\bgonna\b/gi, 'going to'], [/\bwanna\b/gi, 'want to'], [/\bgotta\b/gi, 'have to'],
  [/\basap\b/gi, 'as soon as possible'], [/\bbtw\b/gi, 'by the way'], [/\bok\b/gi, 'okay'], [/\byeah\b/gi, 'yes'], [/\bcuz\b/gi, 'because']];
const trCaseLike = (m, r) => /^[A-Z]/.test(m) ? r[0].toUpperCase() + r.slice(1) : r;
function trCtxRewrite(en) {
  if (!en || !/^(talk|work|email)$/.test(trCtx)) return '';
  let t = en.replace(/[’]/g, "'");
  if (trCtx === 'talk') {
    TR_EXPAND.forEach(([c, f]) => { if (c === "let's") return; t = t.replace(new RegExp('\\b' + f.replace(' ', '\\s+') + '\\b', 'gi'), m => trCaseLike(m, c)); });
    t = t.replace(/\bit is\b/gi, m => trCaseLike(m, "it's")).replace(/\bthat is\b/gi, m => trCaseLike(m, "that's"));
  } else {
    TR_EXPAND.forEach(([c, f]) => { t = t.replace(new RegExp("\\b" + c.replace("'", "'") + "\\b", 'gi'), m => trCaseLike(m, f)); });
    t = t.replace(/\b(it|that|there)'s\s+(been|got)\b/gi, (m, a, b) => trCaseLike(a, a.toLowerCase()) + ' has ' + b).replace(/\b(it|that|there)'s\b/gi, (m, a) => a + ' is');
    TR_FORMAL.forEach(([re, r]) => { t = t.replace(re, m => trCaseLike(m, r)); });
    t = t.replace(/^(\s*)(hey|yo)\b/i, (m, sp) => sp + 'Hello');
  }
  return t !== en.replace(/[’]/g, "'") ? t : '';
}

/* ---------- lịch sử, yêu thích, sổ từ ---------- */
function trHistAdd(s, o) {
  if (!s || !o) return;
  const e = { s, o, sl: trSrc, tl: trTgt, c: trCtx, t: Date.now() };
  const top = trHist[0];
  // đang gõ tiếp câu trước: thay mục mới nhất thay vì thêm mục mới
  if (top && top.sl === e.sl && (s.startsWith(top.s) || top.s.startsWith(s)) && Date.now() - top.t < 120000) trHist[0] = e; else trHist.unshift(e);
  trHist = trHist.filter((x, i, a) => a.findIndex(y => y.s === x.s && y.sl === x.sl) === i).slice(0, 40);
  trxSave(TRX.hist, trHist);
}
const trPair = (src, out, sl) => sl === 'en' ? { en: src, vi: out } : { en: out, vi: src };
function trFavHas(en) { return trFav.some(f => f.en === en); }
function trFavToggle(p) { const i = trFav.findIndex(f => f.en === p.en); if (i >= 0) trFav.splice(i, 1); else trFav.unshift(Object.assign({ t: Date.now() }, p)); trFav = trFav.slice(0, 200); trxSave(TRX.fav, trFav); return i < 0; }
// lưu câu sang tab Shadowing: một bài "Câu đã lưu từ tab Translate" (tối đa 80 câu)
function trToShadow(p) {
  let mine = trxLoad('hoc-tieng-anh-shadow-custom', []); if (!Array.isArray(mine)) mine = [];
  let l = mine.find(x => x.id === 'my-tr-saved');
  if (!l) { l = { id: 'my-tr-saved', lv: 3, icon: '🌐', title: 'Câu đã lưu từ tab Translate', vi: 'Bài tự tạo', sum: 'Các câu bạn lưu từ tab Translate để luyện nói theo.', s: [] }; mine.unshift(l); }
  if (l.s.some(r => r[0] === p.en)) return 'dup';
  if (l.s.length >= 80) return 'full';
  l.s.push([p.en, p.vi || '']);
  trxSave('hoc-tieng-anh-shadow-custom', mine);
  try { window.dispatchEvent(new Event('hoc-shadow-mine')); } catch (e) {}
  return 'ok';
}
// lưu từ: có trong tab Vocabulary → thêm vào yêu thích + bắt đầu ôn; không có → sổ từ của tab Translate
function trSaveWord(w, vi) {
  const k = w.toLowerCase();
  let it = null; try { it = VC_ALL.find(x => x.w.toLowerCase() === k && !x.sense); } catch (e) {}
  if (it) {
    try { if (!vcFav.has(vcK(it))) vcFavToggle(it); if (typeof srsTouch === 'function') srsTouch(it); } catch (e) {}
    return 'vocab';
  }
  if (!trWords.some(x => x.w.toLowerCase() === k)) { trWords.unshift({ w, vi: vi || '', t: Date.now() }); trWords = trWords.slice(0, 300); trxSave(TRX.words, trWords); }
  return 'book';
}

/* ---------- vẽ phần dưới bản dịch ---------- */
const trEl = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
function trToast(msg) {
  let t = document.getElementById('tr-toast');
  if (!t) { t = trEl('div', 'tr-toast'); t.id = 'tr-toast'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('on'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('on'), 2200);
}
function trRenderUse() {
  const bar = document.getElementById('tr-use');
  const has = fxOn && fxState && fxState.text === trInput.value.trim() && fxState.lang === trSrc && fxState.items.some(it => it.on);
  bar.hidden = !has;
  if (!has && trUse === 'fixed') trUse = 'orig';
  bar.querySelectorAll('button').forEach(b => { const on = b.dataset.use === trUse; b.classList.toggle('active', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
  const lab = document.getElementById('tr-out-label');
  if (lab) lab.textContent = '③ Bản dịch' + (has ? (trUse === 'fixed' ? ' · của câu đã sửa' : ' · của câu gốc (nguyên văn)') : '');
}
function trRenderExtra() {
  const box = document.getElementById('tr-extra');
  box.innerHTML = '';
  const L = trLast;
  if (!L || !L.out) return;
  const en = L.sl === 'en' ? L.src : L.out, vi = L.sl === 'en' ? L.out : L.src;
  // sửa thuật ngữ 3D
  if (trCtx === '3d' && L.fixes && L.fixes.length) {
    const c = trEl('div', 'input-card tr-x tr-fixes');
    c.appendChild(trEl('div', 'tr-x-h', '🧊 Đã sửa theo từ điển 3D'));
    L.fixes.forEach(f => {
      const r = trEl('div', 'tr-fix' + (f.off ? ' off' : ''));
      r.appendChild(trEl('s', null, f.from)); r.appendChild(document.createTextNode(' → ')); r.appendChild(trEl('b', null, f.to));
      const u = trEl('button', 'fx-undo', f.off ? '✓ Sửa' : '↺ Giữ bản máy dịch');
      u.addEventListener('click', () => { if (L.offFix.has(f.i)) L.offFix.delete(f.i); else L.offFix.add(f.i); trApplyOut(); });
      r.appendChild(u); c.appendChild(r);
    });
    box.appendChild(c);
  }
  // thuật ngữ trong câu
  const terms = trCtx === '3d' || trMyGloss.length ? trGlossFind(en, L.sl === 'vi' ? vi : null).filter(g => trCtx === '3d' || g[3]) : [];
  if (terms.length) {
    const c = trEl('div', 'input-card tr-x');
    c.appendChild(trEl('div', 'tr-x-h', `📘 Thuật ngữ trong câu (${terms.length})`));
    const tb = trEl('div', 'tr-terms');
    terms.forEach(g => { const r = trEl('div', 'tr-term'); r.appendChild(trEl('b', null, g[0])); r.appendChild(trEl('span', null, g[1])); if (g[2]) r.appendChild(trEl('em', null, g[2])); const sp = trEl('button', 'tr-icon sm', '🔊'); sp.setAttribute('aria-label', 'Nghe ' + g[0]); sp.addEventListener('click', () => speak(g[0], 0.85, 'en')); r.appendChild(sp); tb.appendChild(r); });
    c.appendChild(tb);
    box.appendChild(c);
  }
  // ghi chú theo ngữ cảnh
  const notes = trCtxNotes(en);
  if (notes.length) {
    const c = trEl('div', 'input-card tr-x');
    c.appendChild(trEl('div', 'tr-x-h', '📝 Gợi ý cho ngữ cảnh ' + TR_CTX.find(x => x[0] === trCtx)[1].replace(/^\S+\s/, '').toLowerCase()));
    notes.forEach(([ic, t]) => { const r = trEl('div', 'tr-note'); r.appendChild(trEl('span', null, ic)); r.appendChild(trEl('span', null, t)); c.appendChild(r); });
    if (L.sl === 'vi') c.appendChild(trEl('div', 'tr-x-sub', 'Gợi ý dựa trên bản dịch tiếng Anh. Bộ dịch miễn phí không tự đổi giọng văn theo ngữ cảnh, nên app kiểm tra thêm.'));
    box.appendChild(c);
  }
  const rw = trCtxRewrite(en);
  if (rw) {
    const c = trEl('div', 'input-card tr-x tr-rw');
    c.appendChild(trEl('div', 'tr-x-h', '✍️ Bản tiếng Anh theo văn phong ' + TR_CTX.find(x => x[0] === trCtx)[1].replace(/^\S+\s/, '').toLowerCase()));
    c.appendChild(trEl('div', 'tr-rw-t', rw));
    c.appendChild(trEl('div', 'tr-x-sub', 'App đổi theo quy tắc (dạng rút gọn, từ viết tắt thân mật…), không viết lại cả câu. Hãy đọc lại trước khi dùng.'));
    const a = trEl('div', 'tr-acts');
    const sp = trEl('button', 'btn-ghost', '🔊 Nghe'); sp.addEventListener('click', () => speak(rw, 0.9, 'en'));
    const cp = trEl('button', 'btn-ghost', '⧉ Sao chép'); cp.addEventListener('click', async () => { try { await navigator.clipboard.writeText(rw); trToast('Đã sao chép'); } catch (e) { trToast('Không sao chép được'); } });
    a.appendChild(sp); a.appendChild(cp);
    if (L.sl === 'en') { const use = trEl('button', 'btn-ghost', '↪ Dùng làm câu gốc'); use.addEventListener('click', () => { trInput.value = rw; updateCount(); trUse = 'orig'; fxState = null; trLastText = ''; runTranslate(); }); a.appendChild(use); }
    c.appendChild(a);
    box.appendChild(c);
  }
  // hành động: yêu thích, shadowing, đối chiếu, lưu từ
  const acts = trEl('div', 'tr-acts');
  const p = { en: en.trim(), vi: vi.trim() };
  const fv = trEl('button', 'btn-ghost' + (trFavHas(p.en) ? ' on' : ''), trFavHas(p.en) ? '★ Đã lưu yêu thích' : '☆ Lưu câu yêu thích');
  fv.addEventListener('click', () => { const on = trFavToggle(p); fv.textContent = on ? '★ Đã lưu yêu thích' : '☆ Lưu câu yêu thích'; fv.classList.toggle('on', on); trRenderSaved(); });
  const sh = trEl('button', 'btn-ghost', '🎙️ Luyện shadowing câu này');
  sh.addEventListener('click', () => {
    const sents = p.en.split(/(?<=[.!?…])\s+/).filter(Boolean);
    let r = 'ok';
    if (sents.length > 1 && p.en.length > 160) { trToast('Câu dài: hãy dùng “Đối chiếu từng câu” rồi lưu từng câu.'); return; }
    r = trToShadow(p);
    trToast(r === 'ok' ? '✓ Đã thêm vào Shadowing › My lessons › “Câu đã lưu từ tab Translate”' : r === 'dup' ? 'Câu này đã có trong bài shadowing.' : 'Bài đã đủ 80 câu. Hãy xoá bớt trong tab Shadowing.');
  });
  const al = trEl('button', 'btn-ghost', '↔ Đối chiếu từng câu');
  al.addEventListener('click', () => trAlign(al));
  acts.appendChild(fv); acts.appendChild(sh); acts.appendChild(al);
  box.appendChild(acts);
  const alBox = trEl('div', 'tr-align'); alBox.id = 'tr-align'; box.appendChild(alBox);
  // từ trong câu tiếng Anh: chạm để lưu
  const ws = [...new Set((en.match(/[A-Za-z][A-Za-z'’-]*/g) || []).map(w => w.replace(/[’]/g, "'")).filter(w => w.length > 2 && !/^(the|and|for|you|are|was|were|but|not|this|that|with|from|have|has|had|will|would|can|could|its|it's|our|your|their|they|them|then|than|there|here|what|when|which|who|how|why|into|onto|about|been|being|also|just|very|some|any)$/i.test(w)))].slice(0, 30);
  if (ws.length) {
    const c = trEl('details', 'input-card tr-x tr-wbox');
    c.appendChild(trEl('summary', null, '📖 Chạm vào từ để xem nghĩa và lưu vào tab Vocabulary'));
    const row = trEl('div', 'tr-wrow');
    const info = trEl('div', 'tr-winfo');
    ws.forEach(w => {
      const b = trEl('button', 'tr-w', w);
      b.addEventListener('click', () => {
        row.querySelectorAll('.tr-w').forEach(x => x.classList.toggle('on', x === b));
        info.innerHTML = '';
        let h = {}; try { h = prLookup(w) || {}; } catch (e) {}
        const top = trEl('div', 'tr-wi-top'); top.appendChild(trEl('b', null, w)); if (h.ipa) top.appendChild(trEl('span', 'tr-wi-ipa', h.ipa));
        const sp = trEl('button', 'tr-icon sm', '🔊'); sp.addEventListener('click', () => speak(w, 0.8, 'en')); top.appendChild(sp);
        info.appendChild(top);
        const mean = trEl('div', 'tr-wi-m', h.vi || 'Đang tra nghĩa…'); info.appendChild(mean);
        if (!h.vi && typeof fetchMeaningOnline === 'function') fetchMeaningOnline(w).then(m => { mean.textContent = m || 'Chưa tra được nghĩa.'; }).catch(() => { mean.textContent = 'Chưa tra được nghĩa (cần mạng).'; });
        let inVocab = false; try { inVocab = VC_ALL.some(x => x.w.toLowerCase() === w.toLowerCase() && !x.sense); } catch (e) {}
        const sv = trEl('button', 'btn-primary', inVocab ? '＋ Thêm vào tab Vocabulary (yêu thích + ôn tập)' : '＋ Lưu vào sổ từ của tab Translate');
        sv.addEventListener('click', () => { const r = trSaveWord(w, mean.textContent.replace(/^Đang tra nghĩa…$/, '')); sv.disabled = true; sv.textContent = r === 'vocab' ? '✓ Đã thêm vào Từ vựng › Yêu thích, có trong lịch ôn' : '✓ Đã lưu vào sổ từ (xem ở mục “Word book” bên dưới)'; trRenderSaved(); });
        info.appendChild(sv);
      });
      row.appendChild(b);
    });
    c.appendChild(row); c.appendChild(info);
    box.appendChild(c);
  }
}
// đối chiếu từng câu: dịch riêng từng câu (tối đa 15 câu)
async function trAlign(btn) {
  const box = document.getElementById('tr-align'); if (!box || !trLast) return;
  if (box.dataset.open) { box.innerHTML = ''; delete box.dataset.open; btn.textContent = '↔ Đối chiếu từng câu'; return; }
  box.dataset.open = '1'; btn.textContent = '✕ Đóng đối chiếu';
  const L = trLast;
  const sents = L.src.split(/(?<=[.!?…])\s+|\n+/).map(s => s.trim()).filter(Boolean).slice(0, 15);
  box.innerHTML = '';
  box.appendChild(trEl('div', 'tr-x-sub', 'Mỗi câu được dịch riêng nên có thể hơi khác bản dịch cả đoạn ở trên.'));
  const tbl = trEl('div', 'tr-al');
  const head = trEl('div', 'tr-al-row tr-al-head'); head.appendChild(trEl('span', null, LANG_NAMES[L.sl])); head.appendChild(trEl('span', null, LANG_NAMES[L.tl])); head.appendChild(trEl('span')); tbl.appendChild(head);
  box.appendChild(tbl);
  for (const s of sents) {
    const row = trEl('div', 'tr-al-row');
    const a = trEl('div', 'tr-al-a', s), b = trEl('div', 'tr-al-b', '…');
    const acts = trEl('div', 'tr-al-acts');
    row.appendChild(a); row.appendChild(b); row.appendChild(acts);
    tbl.appendChild(row);
    let out = '';
    try { out = await translateText(s, L.sl, L.tl); if (trCtx === '3d' && L.sl === 'en') out = trFix3D(s, out, L.offFix)[0]; } catch (e) { out = ''; }
    if (!box.dataset.open) return;
    b.textContent = out || 'Không dịch được';
    const p = trPair(s, out, L.sl);
    const sp = trEl('button', 'tr-icon sm', '🔊'); sp.setAttribute('aria-label', 'Nghe câu tiếng Anh'); sp.addEventListener('click', () => speak(p.en, 0.9, 'en'));
    const fv = trEl('button', 'tr-icon sm' + (trFavHas(p.en) ? ' on' : ''), trFavHas(p.en) ? '★' : '☆'); fv.setAttribute('aria-label', 'Lưu yêu thích');
    fv.addEventListener('click', () => { const on = trFavToggle(p); fv.textContent = on ? '★' : '☆'; fv.classList.toggle('on', on); trRenderSaved(); });
    const sh = trEl('button', 'tr-icon sm', '🎙️'); sh.setAttribute('aria-label', 'Thêm vào Shadowing');
    sh.addEventListener('click', () => { const r = trToShadow(p); trToast(r === 'ok' ? '✓ Đã thêm vào bài shadowing “Câu đã lưu từ tab Translate”' : r === 'dup' ? 'Câu này đã có trong bài shadowing.' : 'Bài đã đủ 80 câu.'); });
    if (out) { acts.appendChild(sp); acts.appendChild(fv); acts.appendChild(sh); }
  }
}
function trApplyOut() {
  const L = trLast; if (!L) return;
  let out = L.raw, fixes = [];
  if (trCtx === '3d' && L.sl === 'en') [out, fixes] = trFix3D(L.src, L.raw, L.offFix);
  L.out = out; L.fixes = fixes;
  setOutput(out, false);
  trRenderExtra();
  // v118: cập nhật mục lịch sử của câu này theo bản dịch và ngữ cảnh mới
  const h = trHist.find(x => x.s === L.src && x.sl === L.sl);
  if (h && (h.o !== out || h.c !== trCtx)) { h.o = out; h.c = trCtx; trxSave(TRX.hist, trHist); trRenderSaved(); }
}
// gọi sau mỗi lần dịch xong
function trAfter(src, raw) {
  trLast = { src, raw, out: raw, sl: trSrc, tl: trTgt, fixes: [], offFix: (trLast && trLast.src === src && trLast.offFix) || new Set() };
  trApplyOut();
  trHistAdd(src, trLast.out);
  trRenderSaved();
}

/* ---------- khu vực lịch sử · yêu thích · sổ từ · từ điển 3D ---------- */
let trSavedTab = 'hist', trGlossQ = '';
function trRenderSaved() {
  const box = document.getElementById('tr-saved'); if (!box) return;
  box.innerHTML = '';
  const tabs = trEl('div', 'colloc-chips tr-stabs');
  [['hist', `🕘 History · ${trHist.length}`], ['fav', `★ Favorites · ${trFav.length}`], ['words', `📖 Word book · ${trWords.length}`], ['gloss', `🧊 3D dictionary · ${TR_GLOSS.length + trMyGloss.length}`]].forEach(([k, t]) => {
    const b = trEl('button', 'colloc-chip' + (trSavedTab === k ? ' active' : ''), t);
    b.addEventListener('click', () => { trSavedTab = k; trRenderSaved(); });
    tabs.appendChild(b);
  });
  box.appendChild(tabs);
  const list = trEl('div', 'tr-slist');
  const load = (s, sl) => {
    if (sl !== trSrc) trSwap.click();
    trInput.value = s; updateCount(); trUse = 'orig'; trLastText = ''; runTranslate();
    try { document.getElementById('page-check').scrollIntoView({ block: 'start', behavior: 'smooth' }); } catch (e) {}
  };
  const clearBtn = (label, fn) => { const c = trEl('button', 'sd-link tr-clearall', label); c.addEventListener('click', () => { if (!c.dataset.sure) { c.dataset.sure = '1'; c.textContent = 'Bấm lần nữa để xoá'; return; } fn(); trRenderSaved(); }); return c; };
  if (trSavedTab === 'hist') {
    if (!trHist.length) list.appendChild(trEl('div', 'tr-empty', 'Chưa có lượt dịch nào. Các câu bạn dịch sẽ được lưu ở đây (tối đa 40, chỉ trên máy này).'));
    trHist.forEach(h => {
      const r = trEl('button', 'tr-sitem');
      r.appendChild(trEl('span', 'tr-s-meta', `${h.sl === 'en' ? 'EN → VI' : 'VI → EN'}${h.c && h.c !== 'general' ? ' · ' + TR_CTX.find(x => x[0] === h.c)[1] : ''}`));
      r.appendChild(trEl('span', 'tr-s-a', h.s.length > 140 ? h.s.slice(0, 138) + '…' : h.s));
      r.appendChild(trEl('span', 'tr-s-b', h.o.length > 140 ? h.o.slice(0, 138) + '…' : h.o));
      r.addEventListener('click', () => { if (h.c) { trCtx = h.c; trxSave(TRX.ctx, trCtx); trRenderCtx(); } load(h.s, h.sl); });
      list.appendChild(r);
    });
    if (trHist.length) list.appendChild(clearBtn('Xoá lịch sử', () => { trHist = []; trxSave(TRX.hist, trHist); }));
  } else if (trSavedTab === 'fav') {
    if (!trFav.length) list.appendChild(trEl('div', 'tr-empty', 'Chưa có câu yêu thích. Bấm “☆ Lưu câu yêu thích” dưới bản dịch, hoặc ☆ trong phần đối chiếu từng câu.'));
    trFav.forEach(f => {
      const r = trEl('div', 'tr-sitem tr-favitem');
      const tx = trEl('button', 'tr-s-txt'); tx.appendChild(trEl('span', 'tr-s-a', f.en)); tx.appendChild(trEl('span', 'tr-s-b', f.vi)); tx.addEventListener('click', () => load(f.en, 'en'));
      r.appendChild(tx);
      const acts = trEl('div', 'tr-s-acts');
      const sp = trEl('button', 'tr-icon sm', '🔊'); sp.addEventListener('click', () => speak(f.en, 0.9, 'en'));
      const sh = trEl('button', 'tr-icon sm', '🎙️'); sh.title = 'Thêm vào Shadowing'; sh.addEventListener('click', () => { const x = trToShadow(f); trToast(x === 'ok' ? '✓ Đã thêm vào Shadowing' : x === 'dup' ? 'Câu đã có trong bài shadowing.' : 'Bài đã đủ 80 câu.'); });
      const del = trEl('button', 'tr-icon sm', '🗑'); del.title = 'Bỏ khỏi yêu thích'; del.addEventListener('click', () => { trFavToggle(f); trRenderSaved(); });
      acts.appendChild(sp); acts.appendChild(sh); acts.appendChild(del); r.appendChild(acts);
      list.appendChild(r);
    });
  } else if (trSavedTab === 'words') {
    list.appendChild(trEl('div', 'tr-x-sub', 'Từ có trong tab Vocabulary được thêm thẳng vào đó (mục Yêu thích + lịch ôn). Từ chưa có trong bộ 11.000 từ được giữ ở sổ này.'));
    if (!trWords.length) list.appendChild(trEl('div', 'tr-empty', 'Word book đang trống. Dưới bản dịch, mở “📖 Chạm vào từ…” để lưu từ.'));
    trWords.forEach(x => {
      const r = trEl('div', 'tr-sitem tr-favitem');
      const tx = trEl('div', 'tr-s-txt'); tx.appendChild(trEl('span', 'tr-s-a', x.w)); tx.appendChild(trEl('span', 'tr-s-b', x.vi || '')); r.appendChild(tx);
      const acts = trEl('div', 'tr-s-acts');
      const sp = trEl('button', 'tr-icon sm', '🔊'); sp.addEventListener('click', () => speak(x.w, 0.8, 'en'));
      const del = trEl('button', 'tr-icon sm', '🗑'); del.addEventListener('click', () => { trWords = trWords.filter(y => y !== x); trxSave(TRX.words, trWords); trRenderSaved(); });
      acts.appendChild(sp); acts.appendChild(del); r.appendChild(acts);
      list.appendChild(r);
    });
  } else {
    const sr = trEl('div', 'tr-gsearch');
    const q = trEl('input'); q.type = 'text'; q.placeholder = 'Tìm thuật ngữ (render, trải UV…)'; q.value = trGlossQ;
    q.addEventListener('input', () => { trGlossQ = q.value; drawG(); });
    sr.appendChild(q); list.appendChild(sr);
    const gl = trEl('div', 'tr-terms'); list.appendChild(gl);
    const drawG = () => {
      gl.innerHTML = '';
      const f = trGlossQ.trim().toLowerCase();
      trGlossAll().filter(g => !f || (g[0] + ' ' + g[1]).toLowerCase().includes(f)).forEach(g => {
        const r = trEl('div', 'tr-term'); r.appendChild(trEl('b', null, g[0])); r.appendChild(trEl('span', null, g[1])); if (g[2]) r.appendChild(trEl('em', null, g[2]));
        const sp = trEl('button', 'tr-icon sm', '🔊'); sp.addEventListener('click', () => speak(g[0], 0.85, 'en')); r.appendChild(sp);
        if (g[3]) { const del = trEl('button', 'tr-icon sm', '🗑'); del.addEventListener('click', () => { trMyGloss = trMyGloss.filter(x => x[0] !== g[0]); trxSave(TRX.gloss, trMyGloss); trRenderSaved(); }); r.appendChild(del); }
        gl.appendChild(r);
      });
    };
    drawG();
    const add = trEl('div', 'tr-gadd');
    add.appendChild(trEl('div', 'tr-x-h', '＋ Thêm thuật ngữ của bạn'));
    const a = trEl('input'); a.placeholder = 'Tiếng Anh (vd. hard surface)';
    const b = trEl('input'); b.placeholder = 'Tiếng Việt bạn muốn dùng';
    const go = trEl('button', 'btn-primary', 'Thêm');
    go.addEventListener('click', () => { const en = a.value.trim(), vi = b.value.trim(); if (!en || !vi) { (en ? b : a).focus(); return; } trMyGloss = [[en, vi], ...trMyGloss.filter(x => x[0].toLowerCase() !== en.toLowerCase())].slice(0, 200); trxSave(TRX.gloss, trMyGloss); trRenderSaved(); trToast('✓ Đã thêm vào từ điển. Thuật ngữ sẽ hiện dưới bản dịch khi câu có từ này.'); });
    add.appendChild(a); add.appendChild(b); add.appendChild(go);
    list.appendChild(add);
  }
  box.appendChild(list);
}

/* ---------- chọn ngữ cảnh ---------- */
function trRenderCtx() {
  const box = document.getElementById('tr-ctx'); if (!box) return;
  box.innerHTML = '';
  box.appendChild(trEl('span', 'tr-ctx-l', 'Gợi ý theo ngữ cảnh:'));
  TR_CTX.forEach(([k, t]) => {
    const b = trEl('button', 'colloc-chip' + (trCtx === k ? ' active' : ''), t);
    b.setAttribute('aria-pressed', trCtx === k ? 'true' : 'false');
    b.addEventListener('click', () => { trCtx = k; trxSave(TRX.ctx, k); trRenderCtx(); if (trLast) trApplyOut(); });
    box.appendChild(b);
  });
  const what = { general: 'Dịch thông thường, không thêm gợi ý.', talk: 'Bản dịch máy giữ nguyên; app gợi ý cách nói tự nhiên và tạo bản tiếng Anh theo văn nói (dạng rút gọn).',
    work: 'Bản dịch máy giữ nguyên; app gợi ý cách diễn đạt chuyên nghiệp và tạo bản tiếng Anh trang trọng hơn.', email: 'Bản dịch máy giữ nguyên; app kiểm tra lời chào, lời kết, văn phong và tạo bản tiếng Anh trang trọng.',
    '3d': 'Sửa thuật ngữ 3D trong bản dịch theo từ điển, hiện giải thích từng thuật ngữ.' }[trCtx];
  box.appendChild(trEl('div', 'tr-ctx-what', 'ⓘ ' + what + (trCtx !== 'general' && trCtx !== '3d' ? ' Bộ dịch miễn phí chưa nhận yêu cầu về văn phong, nên phần điều chỉnh do app làm theo quy tắc.' : '')));
  if (trCtx === '3d') {
    const kb = trEl('label', 'tr-keep');
    const cb = trEl('input'); cb.type = 'checkbox'; cb.checked = trKeepEn;
    cb.addEventListener('change', () => { trKeepEn = cb.checked; trxSave(TRX.keep, trKeepEn); if (trLast) trApplyOut(); });
    kb.appendChild(cb); kb.appendChild(document.createTextNode(' Giữ thuật ngữ tiếng Anh (texture, render…)'));
    box.appendChild(kb);
  }
}
(function trInit() {
  const bar = document.getElementById('tr-use');
  bar.querySelectorAll('button').forEach(b => b.addEventListener('click', () => { trUse = b.dataset.use; trRenderUse(); trLastText = ''; runTranslate(); }));
  document.getElementById('fx-use-fixed').addEventListener('click', () => { trUse = 'fixed'; trRenderUse(); trLastText = ''; runTranslate(); });
  trRenderCtx();
  trRenderSaved();
})();

fxRender();

/* ============================================================
   3D play buttons: visible press on every tap (even quick taps on iPhone)
   and a pulsing ring while that button's audio is playing
============================================================ */
(() => {
  const PRESS = '.play-mini, .vplay, .ls-play, .ls-slow, .pron-actions button, .bc-play, .bc-all, #tr-src-speak, #tr-tgt-speak, #fx-speak, #tr-clear, #tr-copy';
  const PLAY = '.play-mini, .vplay, .ls-play, .ls-slow, .pron-actions button, #tr-src-speak, #tr-tgt-speak, #fx-speak';
  document.addEventListener('touchstart', () => {}, { passive: true }); // enables :active on iOS Safari
  let pressed = null, t0 = 0;
  const release = () => {
    if (!pressed) return;
    const el = pressed; pressed = null;
    setTimeout(() => el.classList.remove('is-pressed'), Math.max(0, 120 - (Date.now() - t0)));
  };
  document.addEventListener('pointerdown', e => {
    const el = e.target.closest && e.target.closest(PRESS);
    if (!el) return;
    pressed = el; t0 = Date.now();
    el.classList.add('is-pressed');
    if (navigator.vibrate) { try { navigator.vibrate(8); } catch (err) {} }
  }, { passive: true });
  ['pointerup', 'pointercancel', 'dragstart'].forEach(ev => document.addEventListener(ev, release, { passive: true }));
  document.addEventListener('pointerleave', release, { passive: true });
  let playing = null, poll = null;
  document.addEventListener('click', e => {
    const el = e.target.closest && e.target.closest(PLAY);
    if (!el || !('speechSynthesis' in window)) return;
    const check = last => {
      const ss = window.speechSynthesis;
      if (!ss.speaking && !ss.pending) { if (!last) setTimeout(() => check(true), 300); return; }
      if (playing && playing !== el) playing.classList.remove('is-playing');
      playing = el; el.classList.add('is-playing');
      clearInterval(poll);
      const start = Date.now();
      poll = setInterval(() => {
        if ((!ss.speaking && !ss.pending) || !el.isConnected || Date.now() - start > 60000) {
          el.classList.remove('is-playing'); if (playing === el) playing = null; clearInterval(poll);
        }
      }, 250);
    };
    setTimeout(() => check(false), 200);
  }, true);
})();

/* ============================================================
   UI WIRING - Pronunciation page
============================================================ */
const pronInput = document.getElementById('pron-input');
const pronGoBtn = document.getElementById('pron-go-btn');
const pronResult = document.getElementById('pron-result');
const pronQuick = document.getElementById('pron-quick');
const pronSupportNote = document.getElementById('pron-support-note');
const testTranslateBtn = document.getElementById('test-translate-btn');
const translateTestResult = document.getElementById('translate-test-result');

// support note
if (!('speechSynthesis' in window)) {
  pronSupportNote.textContent = "Lưu ý: thiết bị/trình duyệt này có thể không hỗ trợ phát âm. Hãy thử mở bằng Chrome hoặc Safari.";
} else {
  pronSupportNote.textContent = "Phát âm dùng giọng đọc có sẵn trên thiết bị (hoạt động offline). Phiên âm IPA và nghĩa tiếng Việt: dùng từ điển offline trước; nếu không có và đang có mạng, app tự tra thêm qua MyMemory hoặc Google Translate. Nếu mở file trực tiếp trên điện thoại khiến kết nối thẳng bị chặn, app sẽ tự thử lại qua một máy chủ trung gian miễn phí — không cần đăng ký hay nhập key.";
}

testTranslateBtn.addEventListener('click', async () => {
  translateTestResult.textContent = 'Đang kiểm tra (thử trực tiếp, rồi qua máy chủ trung gian nếu cần)...';
  const testWord = 'hello';
  let report = [];
  let anySuccess = false;

  try {
    const r1 = await fetchFromMyMemory(testWord);
    if (r1) anySuccess = true;
    report.push('MyMemory: ' + (r1 ? `OK → "${r1}"` : 'không trả về kết quả'));
  } catch (e) {
    report.push('MyMemory: LỖI — ' + (e && e.message ? e.message : String(e)));
  }

  try {
    const r2 = await fetchFromGoogleTranslate(testWord);
    if (r2) anySuccess = true;
    report.push('Google Translate: ' + (r2 ? `OK → "${r2}"` : 'không trả về kết quả'));
  } catch (e) {
    report.push('Google Translate: LỖI — ' + (e && e.message ? e.message : String(e)));
  }

  report.push('');
  report.push(anySuccess
    ? '✅ Kết nối dịch nghĩa đang hoạt động.'
    : '❌ Cả hai nguồn đều thất bại — có thể do không có mạng, hoặc trình duyệt đang chặn kết nối khi mở file trực tiếp.');

  translateTestResult.innerHTML = report.join('<br>');
});

/* ---------- speed (shared by every result card) ---------- */
const PR_RATE_KEY = 'hoc-tieng-anh-pron-rate';
let prRate = 0.8;
try { prRate = parseFloat(localStorage.getItem(PR_RATE_KEY)) || 0.8; } catch (e) {}

/* ---------- practice sets for Vietnamese learners ---------- */
const PRON_SETS = [
  { id: 'ending', icon: '🔚', title: 'Âm cuối', tip: 'Người Việt hay nuốt âm cuối. Hãy đọc rõ /t/, /d/, /k/, /s/, /z/, /v/… ở cuối từ: like ≠ lie, rice ≠ rye.',
    words: [
      ["bike", "/baɪk/", "xe đạp"],["like", "/laɪk/", "thích"],["cat", "/kæt/", "con mèo"],["bad", "/bæd/", "tệ"],
      ["map", "/mæp/", "bản đồ"],["five", "/faɪv/", "số năm"],["rice", "/raɪs/", "gạo"],["page", "/peɪdʒ/", "trang"],
      ["watch", "/wɒtʃ/", "xem; đồng hồ"],["laugh", "/lɑːf/", "cười"],["milk", "/mɪlk/", "sữa"],["world", "/wɜːld/", "thế giới"],
      ["desk", "/desk/", "bàn học"],["months", "/mʌnθs/", "các tháng"],["texts", "/teksts/", "tin nhắn"],["friends", "/frendz/", "bạn bè"],
      ["book", "/bʊk/", "quyển sách"],["cook", "/kʊk/", "nấu ăn"],["back", "/bæk/", "phía sau"],["cup", "/kʌp/", "cái cốc"],
      ["top", "/tɒp/", "đỉnh"],["job", "/dʒɒb/", "công việc"],["bed", "/bed/", "cái giường"],["food", "/fuːd/", "đồ ăn"],
      ["road", "/rəʊd/", "con đường"],["bag", "/bæɡ/", "cái túi"],["dog", "/dɒɡ/", "con chó"],["leg", "/leɡ/", "cái chân"],
      ["bus", "/bʌs/", "xe buýt"],["kiss", "/kɪs/", "hôn"],["nice", "/naɪs/", "tốt, đẹp"],["love", "/lʌv/", "yêu"],
      ["size", "/saɪz/", "kích cỡ"],["nose", "/nəʊz/", "cái mũi"],["fish", "/fɪʃ/", "con cá"],["wish", "/wɪʃ/", "ước"],
      ["orange", "/ˈɒrɪndʒ/", "quả cam"],["change", "/tʃeɪndʒ/", "thay đổi"],["film", "/fɪlm/", "bộ phim"],["help", "/help/", "giúp đỡ"],
      ["night", "/naɪt/", "buổi tối"],["right", "/raɪt/", "bên phải; đúng"],["white", "/waɪt/", "màu trắng"],["kind", "/kaɪnd/", "tốt bụng"],
      ["old", "/əʊld/", "cũ; già"],["cold", "/kəʊld/", "lạnh"],["child", "/tʃaɪld/", "đứa trẻ"],["sing", "/sɪŋ/", "hát"]] },
  { id: 'th', icon: '👅', title: 'Âm /θ/ và /ð/', tip: '/θ/: đặt lưỡi giữa hai hàm răng rồi thổi hơi (think). /ð/: giống vậy nhưng rung cổ họng (this). Không đọc thành "th" tiếng Việt, /t/ hay /d/.',
    words: [
      ["think", "/θɪŋk/", "nghĩ"],["three", "/θriː/", "số ba"],["thank", "/θæŋk/", "cảm ơn"],["thing", "/θɪŋ/", "đồ vật; điều"],
      ["thin", "/θɪn/", "gầy, mỏng"],["thick", "/θɪk/", "dày"],["throw", "/θrəʊ/", "ném"],["thirsty", "/ˈθɜːsti/", "khát nước"],
      ["Thursday", "/ˈθɜːzdeɪ/", "thứ Năm"],["thousand", "/ˈθaʊznd/", "nghìn"],["theatre", "/ˈθɪətə/", "nhà hát"],["thunder", "/ˈθʌndə/", "sấm"],
      ["birthday", "/ˈbɜːθdeɪ/", "sinh nhật"],["nothing", "/ˈnʌθɪŋ/", "không có gì"],["something", "/ˈsʌmθɪŋ/", "cái gì đó"],["healthy", "/ˈhelθi/", "khỏe mạnh"],
      ["mouth", "/maʊθ/", "miệng"],["month", "/mʌnθ/", "tháng"],["tooth", "/tuːθ/", "cái răng"],["bath", "/bɑːθ/", "bồn tắm"],
      ["north", "/nɔːθ/", "phía bắc"],["south", "/saʊθ/", "phía nam"],["earth", "/ɜːθ/", "trái đất"],["truth", "/truːθ/", "sự thật"],
      ["this", "/ðɪs/", "cái này"],["that", "/ðæt/", "cái kia"],["these", "/ðiːz/", "những cái này"],["those", "/ðəʊz/", "những cái kia"],
      ["they", "/ðeɪ/", "họ"],["them", "/ðem/", "họ (tân ngữ)"],["there", "/ðeə/", "ở đó"],["then", "/ðen/", "sau đó"],
      ["the", "/ðə/", "(mạo từ xác định)"],["mother", "/ˈmʌðə/", "mẹ"],["father", "/ˈfɑːðə/", "bố"],["brother", "/ˈbrʌðə/", "anh/em trai"],
      ["weather", "/ˈweðə/", "thời tiết"],["together", "/təˈɡeðə/", "cùng nhau"],["other", "/ˈʌðə/", "khác"],["clothes", "/kləʊðz/", "quần áo"],
      ["breathe", "/briːð/", "thở"],["smooth", "/smuːð/", "mịn"],["with", "/wɪð/", "với"],["without", "/wɪˈðaʊt/", "không có"],
      ["rather", "/ˈrɑːðə/", "khá; thà"],["although", "/ɔːlˈðəʊ/", "mặc dù"]] },
  { id: 'pairs', icon: '⚖️', title: 'Cặp từ dễ nhầm', tip: 'Mỗi cặp chỉ khác nhau một âm. Bấm So sánh để nghe liền hai từ, rồi nói thử từng từ.',
    pairs: [
      [["ship", "/ʃɪp/", "con tàu"], ["sheep", "/ʃiːp/", "con cừu"]],[["live", "/lɪv/", "sống"], ["leave", "/liːv/", "rời đi"]],[["full", "/fʊl/", "no, đầy"], ["fool", "/fuːl/", "kẻ ngốc"]],
      [["bad", "/bæd/", "tệ"], ["bed", "/bed/", "cái giường"]],[["cat", "/kæt/", "con mèo"], ["cut", "/kʌt/", "cắt"]],[["light", "/laɪt/", "ánh sáng"], ["right", "/raɪt/", "bên phải; đúng"]],
      [["think", "/θɪŋk/", "nghĩ"], ["sink", "/sɪŋk/", "bồn rửa"]],[["three", "/θriː/", "số ba"], ["tree", "/triː/", "cái cây"]],[["very", "/ˈveri/", "rất"], ["berry", "/ˈberi/", "quả mọng"]],
      [["sea", "/siː/", "biển"], ["she", "/ʃiː/", "cô ấy"]],[["watch", "/wɒtʃ/", "xem"], ["wash", "/wɒʃ/", "rửa"]],[["rice", "/raɪs/", "gạo"], ["rise", "/raɪz/", "tăng lên"]],
      [["walk", "/wɔːk/", "đi bộ"], ["work", "/wɜːk/", "làm việc"]],[["coat", "/kəʊt/", "áo khoác"], ["caught", "/kɔːt/", "đã bắt"]],[["sit", "/sɪt/", "ngồi"], ["seat", "/siːt/", "chỗ ngồi"]],
      [["fit", "/fɪt/", "vừa vặn"], ["feet", "/fiːt/", "bàn chân"]],[["pull", "/pʊl/", "kéo"], ["pool", "/puːl/", "hồ bơi"]],[["man", "/mæn/", "người đàn ông"], ["men", "/men/", "những người đàn ông"]],
      [["hat", "/hæt/", "cái mũ"], ["hut", "/hʌt/", "túp lều"]],[["cap", "/kæp/", "mũ lưỡi trai"], ["cup", "/kʌp/", "cái cốc"]],[["fan", "/fæn/", "cái quạt"], ["van", "/væn/", "xe tải nhỏ"]],
      [["fast", "/fɑːst/", "nhanh"], ["vast", "/vɑːst/", "rộng lớn"]],[["boat", "/bəʊt/", "con thuyền"], ["vote", "/vəʊt/", "bỏ phiếu"]],[["save", "/seɪv/", "cứu; tiết kiệm"], ["safe", "/seɪf/", "an toàn"]],
      [["price", "/praɪs/", "giá cả"], ["prize", "/praɪz/", "giải thưởng"]],[["bus", "/bʌs/", "xe buýt"], ["buzz", "/bʌz/", "tiếng vo ve"]],[["sip", "/sɪp/", "nhấp một ngụm"], ["zip", "/zɪp/", "khóa kéo"]],
      [["chip", "/tʃɪp/", "khoai tây chiên"], ["ship", "/ʃɪp/", "con tàu"]],[["chair", "/tʃeə/", "cái ghế"], ["share", "/ʃeə/", "chia sẻ"]],[["cheap", "/tʃiːp/", "rẻ"], ["jeep", "/dʒiːp/", "xe jeep"]],
      [["choke", "/tʃəʊk/", "nghẹn"], ["joke", "/dʒəʊk/", "câu đùa"]],[["long", "/lɒŋ/", "dài"], ["wrong", "/rɒŋ/", "sai"]],[["lead", "/liːd/", "dẫn dắt"], ["read", "/riːd/", "đọc"]],
      [["fly", "/flaɪ/", "bay"], ["fry", "/fraɪ/", "chiên"]],[["glass", "/ɡlɑːs/", "cái ly"], ["grass", "/ɡrɑːs/", "cỏ"]],[["they", "/ðeɪ/", "họ"], ["day", "/deɪ/", "ngày"]],
      [["then", "/ðen/", "sau đó"], ["den", "/den/", "hang ổ"]],[["thank", "/θæŋk/", "cảm ơn"], ["tank", "/tæŋk/", "bể chứa"]],[["pen", "/pen/", "cây bút"], ["pan", "/pæn/", "cái chảo"]],
      [["heart", "/hɑːt/", "trái tim"], ["hurt", "/hɜːt/", "đau"]],[["bird", "/bɜːd/", "con chim"], ["bud", "/bʌd/", "nụ hoa"]],[["law", "/lɔː/", "luật"], ["low", "/ləʊ/", "thấp"]],
      [["cold", "/kəʊld/", "lạnh"], ["called", "/kɔːld/", "đã gọi"]],[["wait", "/weɪt/", "chờ"], ["wet", "/wet/", "ướt"]],[["mouse", "/maʊs/", "con chuột"], ["mouth", "/maʊθ/", "miệng"]],
      [["pick", "/pɪk/", "nhặt"], ["peak", "/piːk/", "đỉnh núi"]]] },
  { id: 's', icon: '🐍', title: 'Đuôi -s / -es', tip: 'Đọc /s/ sau âm vô thanh (p, t, k, f, θ). Đọc /z/ sau âm hữu thanh và nguyên âm. Đọc /ɪz/ sau s, z, ʃ, tʃ, dʒ.',
    words: [
      ["cats", "/kæts/", "những con mèo · /s/"],["books", "/bʊks/", "những quyển sách · /s/"],["laughs", "/lɑːfs/", "cười (he/she) · /s/"],["shops", "/ʃɒps/", "các cửa hàng · /s/"],
      ["cakes", "/keɪks/", "những cái bánh · /s/"],["hats", "/hæts/", "những cái mũ · /s/"],["maps", "/mæps/", "các bản đồ · /s/"],["cups", "/kʌps/", "những cái cốc · /s/"],
      ["desks", "/desks/", "những cái bàn học · /s/"],["lips", "/lɪps/", "đôi môi · /s/"],["socks", "/sɒks/", "đôi tất · /s/"],["students", "/ˈstjuːdnts/", "các học sinh · /s/"],
      ["parents", "/ˈpeərənts/", "bố mẹ · /s/"],["months", "/mʌnθs/", "các tháng · /s/"],["works", "/wɜːks/", "làm việc (he/she) · /s/"],["helps", "/helps/", "giúp (he/she) · /s/"],
      ["likes", "/laɪks/", "thích (he/she) · /s/"],["eats", "/iːts/", "ăn (he/she) · /s/"],["walks", "/wɔːks/", "đi bộ (he/she) · /s/"],["writes", "/raɪts/", "viết (he/she) · /s/"],
      ["gets", "/ɡets/", "nhận; lấy (he/she) · /s/"],["sleeps", "/sliːps/", "ngủ (he/she) · /s/"],["chefs", "/ʃefs/", "các đầu bếp · /s/"],["weeks", "/wiːks/", "các tuần · /s/"],
      ["streets", "/striːts/", "các con phố · /s/"],["jackets", "/ˈdʒækɪts/", "những chiếc áo khoác · /s/"],["tickets", "/ˈtɪkɪts/", "những tấm vé · /s/"],["stops", "/stɒps/", "dừng (he/she) · /s/"],
      ["drinks", "/drɪŋks/", "đồ uống; uống (he/she) · /s/"],["photographs", "/ˈfəʊtəɡrɑːfs/", "những bức ảnh · /s/"],["dogs", "/dɒɡz/", "những con chó · /z/"],["cars", "/kɑːz/", "những chiếc xe · /z/"],
      ["plays", "/pleɪz/", "chơi (he/she) · /z/"],["friends", "/frendz/", "bạn bè · /z/"],["pens", "/penz/", "những cây bút · /z/"],["bags", "/bæɡz/", "những cái túi · /z/"],
      ["days", "/deɪz/", "các ngày · /z/"],["trees", "/triːz/", "những cái cây · /z/"],["birds", "/bɜːdz/", "những con chim · /z/"],["apples", "/ˈæplz/", "những quả táo · /z/"],
      ["rooms", "/ruːmz/", "các căn phòng · /z/"],["girls", "/ɡɜːlz/", "các cô gái · /z/"],["songs", "/sɒŋz/", "các bài hát · /z/"],["phones", "/fəʊnz/", "các điện thoại · /z/"],
      ["eggs", "/eɡz/", "những quả trứng · /z/"],["goes", "/ɡəʊz/", "đi (he/she) · /z/"],["lives", "/lɪvz/", "sống (he/she) · /z/"],["reads", "/riːdz/", "đọc (he/she) · /z/"],
      ["sings", "/sɪŋz/", "hát (he/she) · /z/"],["comes", "/kʌmz/", "đến (he/she) · /z/"],["runs", "/rʌnz/", "chạy (he/she) · /z/"],["knows", "/nəʊz/", "biết (he/she) · /z/"],
      ["calls", "/kɔːlz/", "gọi (he/she) · /z/"],["shoes", "/ʃuːz/", "đôi giày · /z/"],["windows", "/ˈwɪndəʊz/", "các cửa sổ · /z/"],["teachers", "/ˈtiːtʃəz/", "các giáo viên · /z/"],
      ["flowers", "/ˈflaʊəz/", "những bông hoa · /z/"],["clothes", "/kləʊðz/", "quần áo · /z/"],["studies", "/ˈstʌdiz/", "học (he/she) · /z/"],["dreams", "/driːmz/", "những giấc mơ · /z/"],
      ["buses", "/ˈbʌsɪz/", "những chiếc xe buýt · /ɪz/"],["watches", "/ˈwɒtʃɪz/", "xem (he/she); đồng hồ · /ɪz/"],["pages", "/ˈpeɪdʒɪz/", "các trang · /ɪz/"],["roses", "/ˈrəʊzɪz/", "hoa hồng · /ɪz/"],
      ["boxes", "/ˈbɒksɪz/", "những cái hộp · /ɪz/"],["washes", "/ˈwɒʃɪz/", "rửa (he/she) · /ɪz/"],["classes", "/ˈklɑːsɪz/", "các lớp học · /ɪz/"],["dishes", "/ˈdɪʃɪz/", "các món ăn; bát đĩa · /ɪz/"],
      ["glasses", "/ˈɡlɑːsɪz/", "cái kính; những cái ly · /ɪz/"],["horses", "/ˈhɔːsɪz/", "những con ngựa · /ɪz/"],["houses", "/ˈhaʊzɪz/", "những ngôi nhà · /ɪz/"],["oranges", "/ˈɒrɪndʒɪz/", "những quả cam · /ɪz/"],
      ["bridges", "/ˈbrɪdʒɪz/", "những cây cầu · /ɪz/"],["faces", "/ˈfeɪsɪz/", "các khuôn mặt · /ɪz/"],["places", "/ˈpleɪsɪz/", "các nơi · /ɪz/"],["prizes", "/ˈpraɪzɪz/", "các giải thưởng · /ɪz/"],
      ["sentences", "/ˈsentənsɪz/", "các câu · /ɪz/"],["languages", "/ˈlæŋɡwɪdʒɪz/", "các ngôn ngữ · /ɪz/"],["wishes", "/ˈwɪʃɪz/", "những điều ước · /ɪz/"],["catches", "/ˈkætʃɪz/", "bắt (he/she) · /ɪz/"],
      ["misses", "/ˈmɪsɪz/", "nhớ; lỡ (he/she) · /ɪz/"],["uses", "/ˈjuːzɪz/", "dùng (he/she) · /ɪz/"],["changes", "/ˈtʃeɪndʒɪz/", "thay đổi (he/she) · /ɪz/"],["closes", "/ˈkləʊzɪz/", "đóng (he/she) · /ɪz/"],
      ["teaches", "/ˈtiːtʃɪz/", "dạy (he/she) · /ɪz/"],["kisses", "/ˈkɪsɪz/", "hôn (he/she) · /ɪz/"],["fixes", "/ˈfɪksɪz/", "sửa (he/she) · /ɪz/"],["brushes", "/ˈbrʌʃɪz/", "chải (he/she) · /ɪz/"],
      ["pieces", "/ˈpiːsɪz/", "các mảnh · /ɪz/"],["nurses", "/ˈnɜːsɪz/", "các y tá · /ɪz/"]] },
  { id: 'ed', icon: '⏪', title: 'Đuôi -ed', tip: 'Đọc /t/ sau âm vô thanh (p, k, s, ʃ, tʃ, f). Đọc /d/ sau âm hữu thanh và nguyên âm. Đọc /ɪd/ sau t và d.',
    words: [
      ["worked", "/wɜːkt/", "đã làm việc · /t/"],["stopped", "/stɒpt/", "đã dừng · /t/"],["washed", "/wɒʃt/", "đã rửa · /t/"],["laughed", "/lɑːft/", "đã cười · /t/"],
      ["helped", "/helpt/", "đã giúp · /t/"],["watched", "/wɒtʃt/", "đã xem · /t/"],["walked", "/wɔːkt/", "đã đi bộ · /t/"],["talked", "/tɔːkt/", "đã nói chuyện · /t/"],
      ["cooked", "/kʊkt/", "đã nấu · /t/"],["liked", "/laɪkt/", "đã thích · /t/"],["looked", "/lʊkt/", "đã nhìn · /t/"],["kissed", "/kɪst/", "đã hôn · /t/"],
      ["missed", "/mɪst/", "đã nhớ; đã lỡ · /t/"],["finished", "/ˈfɪnɪʃt/", "đã hoàn thành · /t/"],["dropped", "/drɒpt/", "đã đánh rơi · /t/"],["jumped", "/dʒʌmpt/", "đã nhảy · /t/"],
      ["passed", "/pɑːst/", "đã đi qua; đã đỗ · /t/"],["fixed", "/fɪkst/", "đã sửa · /t/"],["asked", "/ɑːskt/", "đã hỏi · /t/"],["hoped", "/həʊpt/", "đã hy vọng · /t/"],
      ["danced", "/dɑːnst/", "đã nhảy múa · /t/"],["typed", "/taɪpt/", "đã gõ phím · /t/"],["shopped", "/ʃɒpt/", "đã mua sắm · /t/"],["checked", "/tʃekt/", "đã kiểm tra · /t/"],
      ["touched", "/tʌtʃt/", "đã chạm · /t/"],["reached", "/riːtʃt/", "đã tới nơi · /t/"],["mixed", "/mɪkst/", "đã trộn · /t/"],["picked", "/pɪkt/", "đã nhặt; đã chọn · /t/"],
      ["brushed", "/brʌʃt/", "đã chải · /t/"],["coughed", "/kɒft/", "đã ho · /t/"],["played", "/pleɪd/", "đã chơi · /d/"],["called", "/kɔːld/", "đã gọi · /d/"],
      ["lived", "/lɪvd/", "đã sống · /d/"],["cleaned", "/kliːnd/", "đã lau dọn · /d/"],["opened", "/ˈəʊpənd/", "đã mở · /d/"],["enjoyed", "/ɪnˈdʒɔɪd/", "đã thích thú · /d/"],
      ["stayed", "/steɪd/", "đã ở lại · /d/"],["tried", "/traɪd/", "đã cố gắng · /d/"],["cried", "/kraɪd/", "đã khóc · /d/"],["studied", "/ˈstʌdid/", "đã học · /d/"],
      ["loved", "/lʌvd/", "đã yêu · /d/"],["moved", "/muːvd/", "đã chuyển đi · /d/"],["arrived", "/əˈraɪvd/", "đã đến · /d/"],["changed", "/tʃeɪndʒd/", "đã thay đổi · /d/"],
      ["used", "/juːzd/", "đã dùng · /d/"],["closed", "/kləʊzd/", "đã đóng · /d/"],["listened", "/ˈlɪsnd/", "đã nghe · /d/"],["rained", "/reɪnd/", "đã mưa · /d/"],
      ["turned", "/tɜːnd/", "đã rẽ; đã bật · /d/"],["learned", "/lɜːnd/", "đã học được · /d/"],["answered", "/ˈɑːnsəd/", "đã trả lời · /d/"],["remembered", "/rɪˈmembəd/", "đã nhớ ra · /d/"],
      ["showed", "/ʃəʊd/", "đã cho xem · /d/"],["followed", "/ˈfɒləʊd/", "đã đi theo · /d/"],["smiled", "/smaɪld/", "đã mỉm cười · /d/"],["filled", "/fɪld/", "đã đổ đầy · /d/"],
      ["planned", "/plænd/", "đã lên kế hoạch · /d/"],["hugged", "/hʌɡd/", "đã ôm · /d/"],["saved", "/seɪvd/", "đã cứu; đã tiết kiệm · /d/"],["travelled", "/ˈtrævld/", "đã đi du lịch · /d/"],
      ["wanted", "/ˈwɒntɪd/", "đã muốn · /ɪd/"],["needed", "/ˈniːdɪd/", "đã cần · /ɪd/"],["visited", "/ˈvɪzɪtɪd/", "đã thăm · /ɪd/"],["decided", "/dɪˈsaɪdɪd/", "đã quyết định · /ɪd/"],
      ["started", "/ˈstɑːtɪd/", "đã bắt đầu · /ɪd/"],["ended", "/ˈendɪd/", "đã kết thúc · /ɪd/"],["waited", "/ˈweɪtɪd/", "đã đợi · /ɪd/"],["painted", "/ˈpeɪntɪd/", "đã sơn; đã vẽ · /ɪd/"],
      ["invited", "/ɪnˈvaɪtɪd/", "đã mời · /ɪd/"],["added", "/ˈædɪd/", "đã thêm · /ɪd/"],["hated", "/ˈheɪtɪd/", "đã ghét · /ɪd/"],["landed", "/ˈlændɪd/", "đã hạ cánh · /ɪd/"],
      ["counted", "/ˈkaʊntɪd/", "đã đếm · /ɪd/"],["created", "/kriˈeɪtɪd/", "đã tạo ra · /ɪd/"],["collected", "/kəˈlektɪd/", "đã thu thập · /ɪd/"],["repeated", "/rɪˈpiːtɪd/", "đã lặp lại · /ɪd/"],
      ["pointed", "/ˈpɔɪntɪd/", "đã chỉ tay · /ɪd/"],["rested", "/ˈrestɪd/", "đã nghỉ ngơi · /ɪd/"],["tested", "/ˈtestɪd/", "đã kiểm tra · /ɪd/"],["shouted", "/ˈʃaʊtɪd/", "đã hét · /ɪd/"],
      ["expected", "/ɪkˈspektɪd/", "đã mong đợi · /ɪd/"],["attended", "/əˈtendɪd/", "đã tham dự · /ɪd/"],["included", "/ɪnˈkluːdɪd/", "đã bao gồm · /ɪd/"],["provided", "/prəˈvaɪdɪd/", "đã cung cấp · /ɪd/"],
      ["celebrated", "/ˈselɪbreɪtɪd/", "đã ăn mừng · /ɪd/"],["completed", "/kəmˈpliːtɪd/", "đã hoàn tất · /ɪd/"],["planted", "/ˈplɑːntɪd/", "đã trồng · /ɪd/"],["guided", "/ˈɡaɪdɪd/", "đã hướng dẫn · /ɪd/"],
      ["printed", "/ˈprɪntɪd/", "đã in · /ɪd/"],["protected", "/prəˈtektɪd/", "đã bảo vệ · /ɪd/"]] },
  { id: 'stress', icon: '🎯', title: 'Trọng âm', tip: 'Âm tiết đứng sau dấu ˈ được nhấn: đọc to hơn, dài hơn và cao hơn. Các âm tiết còn lại đọc nhẹ và nhanh.',
    words: [
      ["photograph", "/ˈfəʊtəɡrɑːf/", "bức ảnh"],["photography", "/fəˈtɒɡrəfi/", "nhiếp ảnh"],["photographic", "/ˌfəʊtəˈɡræfɪk/", "thuộc nhiếp ảnh"],["economy", "/ɪˈkɒnəmi/", "nền kinh tế"],
      ["economic", "/ˌiːkəˈnɒmɪk/", "thuộc kinh tế"],["banana", "/bəˈnɑːnə/", "quả chuối"],["hotel", "/həʊˈtel/", "khách sạn"],["computer", "/kəmˈpjuːtə/", "máy tính"],
      ["vegetable", "/ˈvedʒtəbl/", "rau củ"],["comfortable", "/ˈkʌmftəbl/", "thoải mái"],["Vietnamese", "/ˌvjetnəˈmiːz/", "người/tiếng Việt"],["interesting", "/ˈɪntrəstɪŋ/", "thú vị"],
      ["table", "/ˈteɪbl/", "cái bàn"],["happy", "/ˈhæpi/", "vui"],["mother", "/ˈmʌðə/", "mẹ"],["student", "/ˈstjuːdnt/", "học sinh"],
      ["teacher", "/ˈtiːtʃə/", "giáo viên"],["morning", "/ˈmɔːnɪŋ/", "buổi sáng"],["weekend", "/ˌwiːkˈend/", "cuối tuần"],["begin", "/bɪˈɡɪn/", "bắt đầu"],
      ["forget", "/fəˈɡet/", "quên"],["relax", "/rɪˈlæks/", "thư giãn"],["enjoy", "/ɪnˈdʒɔɪ/", "thích thú"],["decide", "/dɪˈsaɪd/", "quyết định"],
      ["present", "/ˈpreznt/", "món quà (danh từ)"],["record", "/ˈrekɔːd/", "bản ghi (danh từ)"],["beautiful", "/ˈbjuːtɪfl/", "đẹp"],["family", "/ˈfæməli/", "gia đình"],
      ["restaurant", "/ˈrestrɒnt/", "nhà hàng"],["important", "/ɪmˈpɔːtnt/", "quan trọng"],["tomorrow", "/təˈmɒrəʊ/", "ngày mai"],["together", "/təˈɡeðə/", "cùng nhau"],
      ["holiday", "/ˈhɒlədeɪ/", "kỳ nghỉ"],["television", "/ˈtelɪvɪʒn/", "ti vi"],["information", "/ˌɪnfəˈmeɪʃn/", "thông tin"],["education", "/ˌedʒuˈkeɪʃn/", "giáo dục"],
      ["conversation", "/ˌkɒnvəˈseɪʃn/", "cuộc trò chuyện"],["understand", "/ˌʌndəˈstænd/", "hiểu"],["university", "/ˌjuːnɪˈvɜːsəti/", "trường đại học"],["photographer", "/fəˈtɒɡrəfə/", "nhiếp ảnh gia"],
      ["opportunity", "/ˌɒpəˈtjuːnəti/", "cơ hội"],["necessary", "/ˈnesəsəri/", "cần thiết"],["engineer", "/ˌendʒɪˈnɪə/", "kỹ sư"],["Japanese", "/ˌdʒæpəˈniːz/", "người/tiếng Nhật"],
      ["develop", "/dɪˈveləp/", "phát triển"],["history", "/ˈhɪstri/", "lịch sử"],["chocolate", "/ˈtʃɒklət/", "sô-cô-la"],["advice", "/ədˈvaɪs/", "lời khuyên"]] },
  { id: 'cluster', icon: '🔗', title: 'Cụm phụ âm', tip: 'Đọc liền các phụ âm, đừng chèn thêm "ơ" vào giữa: street là /striːt/, không phải "sơ-tơ-rít".',
    words: [
      ["street", "/striːt/", "đường phố"],["spring", "/sprɪŋ/", "mùa xuân"],["school", "/skuːl/", "trường học"],["play", "/pleɪ/", "chơi"],
      ["black", "/blæk/", "màu đen"],["friend", "/frend/", "bạn"],["green", "/ɡriːn/", "xanh lá"],["glass", "/ɡlɑːs/", "cái ly"],
      ["splash", "/splæʃ/", "té nước"],["strong", "/strɒŋ/", "mạnh"],["asked", "/ɑːskt/", "đã hỏi"],["sixth", "/sɪksθ/", "thứ sáu"],
      ["stop", "/stɒp/", "dừng"],["star", "/stɑː/", "ngôi sao"],["sky", "/skaɪ/", "bầu trời"],["small", "/smɔːl/", "nhỏ"],
      ["snow", "/snəʊ/", "tuyết"],["sleep", "/sliːp/", "ngủ"],["speak", "/spiːk/", "nói"],["swim", "/swɪm/", "bơi"],
      ["study", "/ˈstʌdi/", "học"],["blue", "/bluː/", "màu xanh dương"],["bread", "/bred/", "bánh mì"],["brown", "/braʊn/", "màu nâu"],
      ["clean", "/kliːn/", "sạch"],["class", "/klɑːs/", "lớp học"],["cream", "/kriːm/", "kem"],["drink", "/drɪŋk/", "uống"],
      ["dress", "/dres/", "váy"],["flower", "/ˈflaʊə/", "bông hoa"],["fruit", "/fruːt/", "trái cây"],["grow", "/ɡrəʊ/", "lớn lên"],
      ["plane", "/pleɪn/", "máy bay"],["price", "/praɪs/", "giá"],["train", "/treɪn/", "tàu hỏa"],["tree", "/triː/", "cái cây"],
      ["three", "/θriː/", "số ba"],["scream", "/skriːm/", "hét lên"],["spray", "/spreɪ/", "xịt"],["square", "/skweə/", "hình vuông; quảng trường"],
      ["desk", "/desk/", "bàn học"],["lunch", "/lʌntʃ/", "bữa trưa"],["next", "/nekst/", "tiếp theo"],["first", "/fɜːst/", "đầu tiên"],
      ["fifth", "/fɪfθ/", "thứ năm"],["helped", "/helpt/", "đã giúp"],["months", "/mʌnθs/", "các tháng"],["texts", "/teksts/", "tin nhắn"]] },
  { id: 'sentences', icon: '🗣️', title: 'Câu luyện nói', tip: 'Đọc chậm trước, sau đó tăng dần tốc độ. Bấm "Nói thử" để app chấm xem máy nghe ra đúng bao nhiêu từ.',
    sentences: [
      ["She sells seashells by the seashore.", "Cô ấy bán vỏ sò bên bờ biển."],
      ["I think three thousand thoughts.", "Tôi nghĩ ba nghìn ý nghĩ."],
      ["Red lorry, yellow lorry.", "Xe tải đỏ, xe tải vàng."],
      ["A big black bug bit a big black bear.", "Một con bọ đen to cắn một con gấu đen to."],
      ["Could you speak a little more slowly, please?", "Bạn có thể nói chậm hơn một chút được không?"],
      ["What do you usually do at the weekend?", "Bạn thường làm gì vào cuối tuần?"],
      ["I'd like a cup of coffee, please.", "Cho tôi một tách cà phê."],
      ["Nice to meet you. Where are you from?", "Rất vui được gặp bạn. Bạn đến từ đâu?"],
      ["The weather is lovely today, isn't it?", "Hôm nay thời tiết đẹp nhỉ?"],
      ["I asked for three glasses of water.", "Tôi đã gọi ba ly nước."],
      ["How much does this jacket cost?", "Chiếc áo khoác này giá bao nhiêu?"],
      ["Can I have the bill, please?", "Cho tôi xin hóa đơn."],
      ["Excuse me, where is the nearest station?", "Xin lỗi, ga gần nhất ở đâu?"],
      ["I'm sorry, I didn't catch that.", "Xin lỗi, tôi nghe chưa rõ."],
      ["What time does the film start?", "Phim bắt đầu lúc mấy giờ?"],
      ["I usually get up at six thirty.", "Tôi thường dậy lúc sáu rưỡi."],
      ["My brother works in a big hospital.", "Anh trai tôi làm ở một bệnh viện lớn."],
      ["We watched a funny film last night.", "Tối qua chúng tôi xem một bộ phim vui."],
      ["It's the third Thursday of the month.", "Hôm nay là thứ Năm thứ ba của tháng."],
      ["Thank you for helping me with this.", "Cảm ơn bạn đã giúp tôi việc này."],
      ["Would you like to come with us?", "Bạn có muốn đi cùng chúng tôi không?"],
      ["She lives with her parents in Hanoi.", "Cô ấy sống với bố mẹ ở Hà Nội."],
      ["Don't worry, it isn't a problem.", "Đừng lo, không có vấn đề gì đâu."],
      ["Six thick thistle sticks.", "Sáu cành cây kế dày."],
      ["Fresh French fried fish.", "Cá chiên kiểu Pháp tươi."],
      ["He has visited his grandparents twice.", "Anh ấy đã đến thăm ông bà hai lần."],
      ["The students finished their tests early.", "Các học sinh làm xong bài kiểm tra sớm."],
      ["I've lived here for three years.", "Tôi đã sống ở đây ba năm."],
      ["Which one do you prefer, tea or coffee?", "Bạn thích cái nào hơn, trà hay cà phê?"],
      ["Let me think about it and call you back.", "Để tôi suy nghĩ rồi gọi lại cho bạn."]] }
];

/* ---------- lookups: 10.000-word vocabulary first, then the old dictionary, then online ---------- */
let PR_IDX = null;
function prLookup(word) {
  const k = word.toLowerCase().replace(/[^a-z' -]/g, '').trim();
  if (!k) return {};
  if (!PR_IDX) {
    PR_IDX = new Map();
    PRON_SETS.forEach(s => {
      (s.words || []).forEach(([w, ipa, vi]) => { if (!/^đọc /.test(vi)) PR_IDX.set(w.toLowerCase(), { ipa, vi }); });
      (s.pairs || []).forEach(p => p.forEach(([w, ipa, vi]) => PR_IDX.set(w.toLowerCase(), { ipa, vi })));
    });
    try { VC_ALL.forEach(it => { const w = it.w.toLowerCase(), cur = PR_IDX.get(w); if (!cur) PR_IDX.set(w, { ipa: it.ipa, vi: it.vi, pos: it.pos }); else if (!cur.pos) cur.pos = it.pos; }); } catch (e) {}
    try { IRREGULAR_VERBS.forEach(v => { if (!PR_IDX.has(v.v1)) PR_IDX.set(v.v1, { ipa: v.ipa, vi: v.meaning, pos: 'v' }); }); } catch (e) {}
  }
  const hit = PR_IDX.get(k);
  if (hit) return hit;
  const d = getPronData(k);
  return { ipa: d && d.ipa ? d.ipa : null, vi: getOfflineMeaning(k) || null };
}

/* ---------- stress & sound tips derived from IPA ---------- */
const PR_VOWELS = 'aeiouæɑɒɔəɜɪʊʌɐ';
function prSyllables(ipa) {
  const s = ipa.replace(/[\/\[\]ːˑ]/g, '');
  const groups = s.match(new RegExp('[' + PR_VOWELS + ']+', 'g')) || [];
  let n = groups.length;
  if (new RegExp('[^' + PR_VOWELS + 'ˈˌ][lnm]$').test(s)) n++;   // syllabic l/n/m: vegetable, button
  return n;
}
function prStress(ipa) {
  if (!ipa) return null;
  const s = ipa.replace(/[\/\[\]]/g, '').trim();
  if (/\s/.test(s)) return null;
  const total = prSyllables(s);
  if (total < 2) return total === 1 ? { total: 1, at: 1 } : null;
  const i = s.indexOf('ˈ');
  if (i < 0) return null;
  const before = s.slice(0, i).replace(/ː/g, '').match(new RegExp('[' + PR_VOWELS + ']+', 'g')) || [];
  return { total, at: Math.min(before.length + 1, total) };
}
const PR_SOUND_TIPS = [
  ['θ', '/θ/ — th trong "think"', 'Đặt đầu lưỡi giữa hai hàm răng rồi thổi hơi nhẹ. Không đọc thành /t/ hay /s/.'],
  ['ð', '/ð/ — th trong "this"', 'Lưỡi giữa hai răng như /θ/ nhưng rung cổ họng. Không đọc thành /d/ hay /z/.'],
  ['tʃ', '/tʃ/ — ch trong "chair"', 'Chu môi và bật hơi mạnh hơn "ch" tiếng Việt.'],
  ['dʒ', '/dʒ/ — j trong "job"', 'Chu môi và rung cổ họng. Không đọc thành "z" hay "gi".'],
  ['ʃ', '/ʃ/ — sh trong "she"', 'Chu môi, đẩy hơi như khi suỵt "shhh". Khác với /s/.'],
  ['ʒ', '/ʒ/ — s trong "usually"', 'Giống /ʃ/ nhưng rung cổ họng.'],
  ['r', '/r/', 'Cong lưỡi về phía sau, không chạm vòm miệng và không rung lưỡi như "r" tiếng Việt.'],
  ['v', '/v/', 'Răng trên chạm nhẹ môi dưới rồi rung. Đừng đọc thành /b/ hay /f/.'],
  ['z', '/z/', 'Như /s/ nhưng rung cổ họng, nghe như tiếng ong "zzz".'],
  ['æ', '/æ/ — a trong "cat"', 'Mở miệng rộng, âm nằm giữa "a" và "e".'],
  ['iː', '/iː/ — i dài', 'Kéo dài và hơi cười khi đọc: sheep khác ship.'],
  ['uː', '/uː/ — u dài', 'Chu tròn môi và kéo dài: fool khác full.'],
  ['ɜː', '/ɜː/ — ơ dài', 'Miệng thả lỏng, kéo dài như "ơ": bird, work.'],
  ['əʊ', '/əʊ/ — o trong "go"', 'Trượt từ "ơ" sang "u", không đọc thành "ô" ngắn.'],
  ['ə', '/ə/ — âm schwa', 'Âm "ơ" rất nhẹ và ngắn ở âm tiết không nhấn, đừng đọc rõ từng chữ.']
];
const PR_CONS = 'bcdfghjklmnpqrstvwxzŋθðʃʒɡ';
function prTips(ipa) {
  if (!ipa) return [];
  const raw = ipa.replace(/[\/\[\]ˈˌ]/g, '').trim();
  if (/\s/.test(raw)) return [];
  const tips = [];
  const plain = raw.replace(/ː/g, '');
  const tail = (plain.match(new RegExp('[' + PR_CONS + ']+$')) || [''])[0];
  if (tail && /[^l][lnm]$/.test(tail) && prSyllables(raw) > 1) {
    const c = tail.slice(-1), how = { l: 'lưỡi chạm chân răng trên', n: 'đầu lưỡi chạm chân răng trên, hơi ra mũi', m: 'khép hai môi lại' }[c];
    tips.push(['Âm cuối /' + tail.slice(-2) + '/ đọc lướt', 'Âm tiết cuối không có nguyên âm rõ: đọc thật nhẹ rồi kết thúc bằng /' + c + '/ (' + how + '). Đừng thêm âm "ơ" hay "ồ" vào.']);
  } else if (tail) {
    const t = tail.length > 3 ? tail.slice(-3) : tail;
    tips.push(t.length > 1 && !/^(tʃ|dʒ)$/.test(t)
      ? ['/' + t + '/ cuối từ', 'Đọc đủ từng âm trong cụm âm cuối, đừng bỏ âm nào (desk là /desk/, không phải /des/).']
      : ['Âm cuối /' + t + '/', 'Đọc rõ âm cuối, người Việt hay nuốt mất âm này.']);
  }
  const head = (plain.match(new RegExp('^[' + PR_CONS + ']+')) || [''])[0];
  if (head.length >= 2 && !/^(tʃ|dʒ)$/.test(head) && !/^.[jw]$/.test(head)) {
    tips.push(['Cụm âm đầu /' + head + '/', 'Đọc liền các phụ âm, không chèn "ơ" vào giữa.']);
  }
  let s = raw;
  for (const [sym, title, text] of PR_SOUND_TIPS) {
    if (tips.length >= 4) break;
    if (s.includes(sym)) { tips.push([title, text]); s = s.split(sym).join(' '); }
  }
  return tips.slice(0, 4);
}

/* ---------- playback ---------- */
let prRepeatToken = 0;
function prSay(text, rate, voice) {
  prRepeatToken++;
  if (!voice) { const av = typeof prAccentVoice === 'function' ? prAccentVoice() : null; if (!av) return speak(text, rate || prRate); voice = av; }
  if (!('speechSynthesis' in window)) return null;
  const u = new SpeechSynthesisUtterance(text);
  u.voice = voice; u.lang = (voice.lang || 'en-US').replace('_', '-'); u.rate = rate || prRate;
  return ttsPlay(u);
}
function prRepeat(text, times, btn) {
  const token = ++prRepeatToken;
  let n = 0;
  btn.classList.add('playing');
  const next = () => {
    if (token !== prRepeatToken || n >= times) { btn.classList.remove('playing'); return; }
    n++;
    const u = speak(text, prRate);
    prRepeatToken = token;   // speak() itself doesn't touch the token
    if (!u) { btn.classList.remove('playing'); return; }
    u.onend = () => setTimeout(next, 700);
    u.onerror = () => btn.classList.remove('playing');
  };
  next();
}
function prAccentVoices() {
  try {
    const us = vResolved['us-f'] || vResolved['us-m'];
    const gb = vResolved['gb-f'] || vResolved['gb-m'];
    return us && gb && us !== gb ? { us, gb } : null;
  } catch (e) { return null; }
}

function prEl(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}

function prControls(text) {
  const box = prEl('div', 'pr-controls');
  const speeds = prEl('div', 'pr-speeds');
  [[0.6, 'Chậm'], [0.8, 'Vừa'], [1.0, 'Thường']].forEach(([r, label]) => {
    const c = prEl('button', 'colloc-chip' + (Math.abs(prRate - r) < 0.01 ? ' active' : ''), label);
    c.addEventListener('click', () => {
      prRate = r;
      try { localStorage.setItem(PR_RATE_KEY, String(r)); } catch (e) {}
      document.querySelectorAll('.pr-speeds .colloc-chip').forEach(x => x.classList.toggle('active', x.textContent === label));
      prSay(text);
    });
    speeds.appendChild(c);
  });
  box.appendChild(speeds);
  const acts = prEl('div', 'pron-actions');
  const slow = prEl('button', null, '🐢 Rất chậm');
  slow.addEventListener('click', () => prSay(text, 0.5));
  const rep = prEl('button', null, '🔁 Lặp 3 lần');
  rep.addEventListener('click', () => prRepeat(text, 3, rep));
  acts.appendChild(slow); acts.appendChild(rep);
  const acc = prAccentVoices();
  if (acc) {
    const us = prEl('button', null, '🇺🇸 Giọng Mỹ'); us.addEventListener('click', () => prSay(text, null, acc.us));
    const gb = prEl('button', null, '🇬🇧 Giọng Anh'); gb.addEventListener('click', () => prSay(text, null, acc.gb));
    acts.appendChild(us); acts.appendChild(gb);
  }
  box.appendChild(acts);
  return box;
}

/* ---------- speaking: speech recognition score + record & play back ---------- */
const PR_SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
let prRecog = null, prRec = null, prRecUrl = null;
function prScore(target, heard) {
  const a = lsNorm(target), b = lsNorm(heard);
  if (!a.length) return { score: 0, hit: new Set(), a };
  const merge = (xs, ref) => { const set = new Set(ref); for (let i = 0; i < xs.length - 1; i++) if (set.has(xs[i] + xs[i + 1])) xs.splice(i, 2, xs[i] + xs[i + 1]); };
  merge(b, a);   // "sea shells" ↔ "seashells"
  const bj = new Set(b); for (let i = 0; i < a.length - 1; i++) if (!bj.has(a[i]) && bj.has(a[i] + a[i + 1])) { b.splice(b.indexOf(a[i] + a[i + 1]), 1, a[i], a[i + 1]); }
  const { ta } = lsMatch(a, b);
  return { score: ta.size / a.length, hit: ta, a };
}
function prSpeakBox(target, onScore) {
  const box = prEl('div', 'pr-speak');
  box.appendChild(prEl('div', 'pr-sec-title', 'Luyện nói'));
  const row = prEl('div', 'pr-speak-btns');
  const mic = prEl('button', 'btn-primary pr-mic', '🎙️ Nói thử để chấm');
  const rec = prEl('button', 'btn-ghost pr-rec', '⏺ Ghi âm & nghe lại');
  row.appendChild(mic); row.appendChild(rec);
  box.appendChild(row);
  const out = prEl('div', 'pr-speak-out');
  const recOut = prEl('div', 'pr-rec-out');
  box.appendChild(out); box.appendChild(recOut);
  mic.addEventListener('click', () => prListen(target, mic, out, onScore));
  rec.addEventListener('click', () => prToggleRecord(target, rec, recOut));
  return box;
}
function prListen(target, btn, out, onScore) {
  if (prRecog) { try { prRecog.abort(); } catch (e) {} prRecog = null; }
  if (!PR_SR) {
    out.className = 'pr-speak-out warn';
    out.textContent = 'Trình duyệt này chưa hỗ trợ nhận dạng giọng nói. Trên iPhone hãy mở app bằng Safari; trên máy tính dùng Chrome. Bạn vẫn có thể dùng nút "Ghi âm" để tự so sánh.';
    return;
  }
  // bấm lần nữa khi đang nghe → dừng và chấm phần đã nói
  if (btn.classList.contains('listening') && btn.__stop) { btn.__stop(); return; }
  // v168: dùng chung bộ nghe nhanh của app — nhận chữ ngay lúc nói, câu dài không bị cắt khi ngừng lấy hơi,
  //       nút báo rõ lúc micro đã mở thật sự
  btn.classList.add('listening'); btn.textContent = '⏳ Đang mở micro…';
  out.className = 'pr-speak-out'; out.textContent = 'Hãy đọc: "' + target + '"';
  const reset = () => { btn.classList.remove('listening'); btn.textContent = '🎙️ Nói lại'; btn.__stop = null; };
  btn.__stop = () => { try { prRecog && prRecog.stop(); } catch (e) {} };
  vspListen(target, (best, err) => {
    reset();
    if (best) {
      const sc = { ...prScore(target, best.heard), heard: best.heard };
      prShowScore(out, sc);
      if (onScore) try { onScore(Math.round(sc.score * 100)); } catch (e) {}
    } else if (err) { out.className = 'pr-speak-out warn'; out.textContent = err; }
  }, txt => {
    btn.textContent = '👂 Đang nghe… (bấm để dừng)';
    out.className = 'pr-speak-out'; out.textContent = '“' + txt + '”';
  }, { onStart: () => { if (btn.classList.contains('listening')) btn.textContent = '👂 Đang nghe… đọc ngay'; } });
}
function prShowScore(out, best) {
  const pct = Math.round(best.score * 100);
  out.innerHTML = '';
  out.className = 'pr-speak-out ' + (pct >= 90 ? 'ok' : pct >= 60 ? 'mid' : 'bad');
  const head = prEl('div', 'pr-score');
  head.appendChild(prEl('span', 'pr-score-n', pct + '%'));
  head.appendChild(prEl('span', 'pr-score-l', 'độ khớp nhận diện giọng nói'));
  head.appendChild(prEl('span', 'pr-score-msg', pct >= 90 ? 'Tuyệt vời! Máy nghe rất rõ 🎉' : pct >= 60 ? 'Khá tốt! Luyện thêm các từ màu đỏ.' : 'Thử lại nhé: đọc chậm, rõ từng âm cuối.'));
  out.appendChild(head);
  if (best.a.length > 1) {
    const words = prEl('div', 'pr-score-words');
    best.a.forEach((w, i) => words.appendChild(prEl('span', best.hit.has(i) ? 'ok' : 'bad', w)));
    out.appendChild(words);
  }
  out.appendChild(prEl('div', 'pr-heard', 'Máy nghe được: "' + best.heard + '"'));
  const info = prEl('details', 'sd-info pr-info');
  info.appendChild(prEl('summary', null, 'ⓘ Con số này là gì?'));
  info.appendChild(prEl('p', null, 'Độ khớp nhận diện = máy nghe ra bao nhiêu từ đúng so với câu mẫu. Đây không phải đánh giá phát âm: máy có thể đoán đúng từ dù bạn đọc sai âm /θ/, /ʃ/…, hoặc nghe nhầm khi bạn đọc đúng; nó cũng không kiểm tra trọng âm và ngữ điệu.'));
  info.appendChild(prEl('p', null, 'Để tự đánh giá phát âm: ghi âm, nghe lại và so với giọng mẫu, chú ý âm cuối, trọng âm và nhịp.'));
  out.appendChild(info);
}
let prRecOpening = false;
async function prToggleRecord(target, btn, out) {
  if (prRec) { try { prRec.stop(); } catch (e) {} return; }
  if (prRecOpening) return;   // v178: đang chờ cấp quyền micro → bấm thêm không mở micro thứ hai
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) {
    out.className = 'pr-rec-out warn'; out.textContent = 'Trình duyệt này chưa hỗ trợ ghi âm.'; return;
  }
  let stream;
  prRecOpening = true; { const d = micOpening(); if (d) await new Promise(r => setTimeout(r, d)); }
  try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
  catch (e) {
    prRecOpening = false; ttsMicEnded();
    out.className = 'pr-rec-out warn';
    out.textContent = e && (e.name === 'NotFoundError' || e.name === 'NotReadableError') ? 'Không tìm thấy micro, hoặc micro đang được app khác dùng. Hãy đóng app đó rồi thử lại.' : 'Không mở được micro. Hãy cho phép dùng micro rồi thử lại.';
    return;
  }
  prRecOpening = false;
  try { speechSynthesis.cancel(); } catch (e) {}
  let mr;
  try { mr = new MediaRecorder(stream); }
  catch (e) { stream.getTracks().forEach(t => t.stop()); out.className = 'pr-rec-out warn'; out.textContent = 'Trình duyệt này chưa ghi âm được. Hãy thử Safari hoặc Chrome bản mới.'; return; }
  const chunks = [];
  mr.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
  const timer = setTimeout(() => { if (mr.state !== 'inactive') mr.stop(); }, 10000);
  mr.onstop = () => {
    clearTimeout(timer);
    stream.getTracks().forEach(t => t.stop());
    prRec = null;
    btn.classList.remove('rec'); btn.textContent = '⏺ Ghi âm lại';
    try { ttsMicEnded(); } catch (e) {}
    if (!chunks.length) { out.className = 'pr-rec-out warn'; out.textContent = 'Chưa ghi được âm thanh. Hãy ghi lại và nói ít nhất 1 giây.'; return; }
    if (prRecUrl) URL.revokeObjectURL(prRecUrl);
    prRecUrl = URL.createObjectURL(new Blob(chunks, { type: mr.mimeType || 'audio/mp4' }));
    const url = prRecUrl;
    out.className = 'pr-rec-out'; out.innerHTML = '';
    out.appendChild(prEl('div', 'pr-rec-hint', 'So sánh giọng bạn với giọng mẫu:'));
    const acts = prEl('div', 'pron-actions');
    const mine = prEl('button', null, '▶ Giọng bạn');
    mine.addEventListener('click', () => { try { speechSynthesis.cancel(); } catch (e) {} new Audio(url).play().catch(() => {}); });
    const model = prEl('button', null, '🔊 Giọng mẫu');
    model.addEventListener('click', () => prSay(target));
    acts.appendChild(mine); acts.appendChild(model);
    out.appendChild(acts);
  };
  try { mr.start(); } catch (e) { stream.getTracks().forEach(t => t.stop()); clearTimeout(timer); out.className = 'pr-rec-out warn'; out.textContent = 'Không bắt đầu ghi âm được. Hãy thử lại.'; return; }
  prRec = mr;
  btn.classList.add('rec'); btn.textContent = '⏹ Dừng ghi';
  out.className = 'pr-rec-out'; out.textContent = 'Đang ghi âm… đọc xong bấm "Dừng ghi" (tự dừng sau 10 giây).';
}

// v178: rời app (chuyển app khác, khoá màn hình) → tắt micro ngay, không để micro mở ngầm
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'hidden') return;
  try { if (prRecog) prRecog.abort(); } catch (e) {}
  try { if (prRec && prRec.state !== 'inactive') prRec.stop(); } catch (e) {}
});

/* ---------- result card ---------- */
function renderPronResult(rawText, hint) {
  const text = rawText.trim();
  pronResult.innerHTML = '';
  if (!text) return;
  const words = text.split(/\s+/).filter(Boolean);
  const card = prEl('div', 'pron-card pr-card');
  const top = prEl('div', 'pr-top');
  const left = prEl('div', 'pr-top-text');
  const big = prEl('button', 'ls-play pr-big');
  big.setAttribute('aria-label', 'Nghe');
  big.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>';
  big.addEventListener('click', () => prSay(text));

  if (words.length === 1) {
    const word = text.replace(/[^A-Za-z'\- ]/g, '') || text;
    const info = Object.assign({}, prLookup(word), hint || {});
    const wl = prEl('div', 'pron-word', word);
    const fv = prEl('button', 'p2-fav' + (prFav.some(x => x.toLowerCase() === word.toLowerCase()) ? ' on' : ''), prFav.some(x => x.toLowerCase() === word.toLowerCase()) ? '★' : '☆');
    fv.setAttribute('aria-label', 'Yêu thích'); fv.addEventListener('click', () => { const on = prFavToggle(word); fv.classList.toggle('on', on); fv.textContent = on ? '★' : '☆'; });
    wl.appendChild(fv);
    left.appendChild(wl);
    const ipaRow = prEl('div', 'pr-ipa-row');
    const ipaEl = prEl('span', 'pron-ipa', info.ipa || 'Đang tra phiên âm…');
    ipaRow.appendChild(ipaEl);
    if (info.pos && typeof VC_POS !== 'undefined' && VC_POS[info.pos]) ipaRow.appendChild(prEl('span', 'vc-pos', VC_POS[info.pos]));
    left.appendChild(ipaRow);
    top.appendChild(left); top.appendChild(big);
    card.appendChild(top);
    const mean = prEl('div', 'pron-meaning', info.vi || 'Đang tra nghĩa…');
    card.appendChild(mean);
    const hide = prEl('div', 'p2-hide');
    [['ipa', '🙈 Ẩn IPA', '.pr-ipa-row'], ['vi', '🙈 Ẩn nghĩa', '.pron-meaning']].forEach(([k, t, sel]) => { const b = prEl('button', 'sd-tg', t); b.addEventListener('click', () => { const on = card.classList.toggle('p2-hide-' + k); b.classList.toggle('on', on); b.textContent = (on ? '👁 Hiện ' : '🙈 Ẩn ') + (k === 'ipa' ? 'IPA' : 'nghĩa'); }); hide.appendChild(b); });
    card.insertBefore(hide, mean);
    const usLine = prEl('div', 'p2-usline'); card.appendChild(usLine);
    const sdb = stressEl(word, true);
    if (sdb) { const sw = prEl('div', 'p2-sdb'); sw.appendChild(prEl('div', 'pr-sec-title', 'Trọng âm (đã kiểm tra) · chạm từng âm tiết để nghe')); sw.appendChild(sdb); card.appendChild(sw); }
    const stressBox = prEl('div', 'pr-stress');
    const tipsBox = prEl('div', 'pr-tips');
    card.appendChild(stressBox);
    card.appendChild(prControls(word));
    card.appendChild(tipsBox);
    card.appendChild(prSpeakBox(word));
    pronResult.appendChild(card);

    const fillIpa = ipa => {
      ipaEl.textContent = ipa || 'Chưa tìm thấy phiên âm';
      stressBox.innerHTML = '';
      usLine.textContent = ipa && prAccent === 'us' && prToUS(ipa) !== ipa ? `🇺🇸 Giọng Mỹ (gần đúng): ${prToUS(ipa)}` + (/r/i.test(word) ? ' · chữ r trong từ thường được đọc thành /r/' : '') : '';
      const st = sdb ? null : prStress(ipa);
      if (st && st.total > 1) {
        const dots = prEl('span', 'pr-dots');
        for (let i = 1; i <= st.total; i++) dots.appendChild(prEl('span', i === st.at ? 'on' : null));
        stressBox.appendChild(dots);
        stressBox.appendChild(prEl('span', null, `Trọng âm (ước lượng từ phiên âm): âm tiết thứ ${st.at} trong ${st.total} âm tiết, phần đứng sau dấu ˈ. Đọc phần đó to và dài hơn.`));
      } else if (st && st.total === 1) {
        stressBox.appendChild(prEl('span', null, 'Từ một âm tiết: đọc gọn, dứt khoát và nhớ âm cuối.'));
      }
      stressBox.hidden = !stressBox.childNodes.length;
      tipsBox.innerHTML = '';
      const tips = prTips(ipa);
      if (tips.length) {
        tipsBox.appendChild(prEl('div', 'pr-sec-title', 'Mẹo phát âm'));
        tips.forEach(([t, d]) => { const r = prEl('div', 'pr-tip'); r.appendChild(prEl('b', null, t)); r.appendChild(prEl('span', null, d)); tipsBox.appendChild(r); });
      }
      tipsBox.hidden = !tips.length;
    };
    fillIpa(info.ipa);
    if (!info.ipa) fetchIpaOnline(word).then(fillIpa).catch(() => fillIpa(null));
    if (!info.vi) fetchMeaningOnline(word).then(m => { mean.textContent = m || 'Không tìm thấy nghĩa cho từ này.'; })
      .catch(() => { mean.textContent = 'Không tra được nghĩa, kiểm tra kết nối mạng.'; });
  } else {
    left.appendChild(prEl('div', 'pr-sentence', text));
    top.appendChild(left); top.appendChild(big);
    card.appendChild(top);
    const mean = prEl('div', 'pron-meaning', (hint && hint.vi) || 'Đang dịch cả câu…');
    card.appendChild(mean);
    if (!(hint && hint.vi)) fetchMeaningOnline(text).then(m => { mean.textContent = m || 'Không dịch được câu này.'; })
      .catch(() => { mean.textContent = 'Không tra được nghĩa, kiểm tra kết nối mạng.'; });
    card.appendChild(prControls(text));
    const chipsTitle = prEl('div', 'pr-sec-title', 'Chạm từng từ để nghe');
    const chips = prEl('div', 'pr-words');
    let online = 0;
    const addChip = raw => {
      const w = raw.replace(/^[^A-Za-z']+|[^A-Za-z']+$/g, '');
      if (!w) return;
      const chip = prEl('button', 'pr-word');
      chip.appendChild(prEl('b', null, w));
      const info = prLookup(w);
      const ip = prEl('small', null, info.ipa || '…');
      chip.appendChild(ip);
      if (!info.ipa) {
        if (online++ < 12) fetchIpaOnline(w.toLowerCase()).then(x => { ip.textContent = x || ''; }).catch(() => { ip.textContent = ''; });
        else ip.textContent = '';
      }
      chip.addEventListener('click', () => prSay(w));
      chips.appendChild(chip);
    };
    words.slice(0, 20).forEach(addChip);
    card.appendChild(chipsTitle);
    card.appendChild(chips);
    if (words.length > 20) { const more = prEl('button', 'btn-ghost p2-more', `Xem tiếp ${words.length - 20} từ sau`); more.addEventListener('click', () => { words.slice(20).forEach(addChip); more.remove(); }); card.appendChild(more); }
    card.appendChild(prSentGuide(text));
    const fv = prEl('button', 'btn-ghost p2-favs', prFav.includes(text) ? '★ Đã lưu yêu thích' : '☆ Lưu câu này'); fv.addEventListener('click', () => { const on = prFavToggle(text); fv.textContent = on ? '★ Đã lưu yêu thích' : '☆ Lưu câu này'; }); card.appendChild(fv);
    card.appendChild(prSpeakBox(text));
    pronResult.appendChild(card);
  }
}

function prLoad(text, hint) {
  pronInput.value = text;
  if (!hint && typeof prHistAdd === 'function') prHistAdd(text);
  renderPronResult(text, hint);
  prSay(text);
  try { pronResult.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {}
}

/* ---------- practice sets UI (laid out like the Vocabulary tab) ---------- */
const pronSets = document.getElementById('pron-sets');
const pronSetView = document.getElementById('pron-setview');
const pronHome = document.getElementById('pron-home');
const pronMore = document.querySelector('#page-pron .pr-more');
const PR_DONE_KEY = 'hoc-tieng-anh-pron-done';
const PR_SET_SUB = { ending: 'Đọc rõ âm cuối', th: 'Lưỡi đặt giữa hai răng', pairs: 'Phân biệt âm gần giống', s: 'Đọc /s/, /z/ hay /ɪz/',
  ed: 'Đọc /t/, /d/ hay /ɪd/', stress: 'Nhấn đúng âm tiết', cluster: 'Không chèn thêm “ơ”', sentences: 'Nối âm và ngữ điệu' };
let prDone = new Set();
try { const a = JSON.parse(localStorage.getItem(PR_DONE_KEY) || '[]'); if (Array.isArray(a)) prDone = new Set(a); } catch (e) {}
const prDoneSave = () => { try { localStorage.setItem(PR_DONE_KEY, JSON.stringify([...prDone])); } catch (e) {} };
const prSetItems = set => set.words ? set.words.map(x => x[0]) : set.pairs ? set.pairs.map(p => p[0][0] + ' / ' + p[1][0]) : set.sentences.map(x => x[0]);
const prSetUnit = set => set.words ? 'từ' : set.pairs ? 'cặp' : 'câu';
const prSetGot = set => prSetItems(set).filter(k => prDone.has(set.id + '|' + k)).length;
let prOpenSet = null, prSeq = null;

function prBtn(label, aria, fn, alt) {
  const b = prEl('span', 'play-mini' + (alt ? ' play-alt' : ''), label);
  b.setAttribute('role', 'button'); b.setAttribute('aria-label', aria); b.tabIndex = 0;
  b.addEventListener('click', e => { e.stopPropagation(); prSeqStop(); fn(); });
  return b;
}
function prCheck(set, key, row) {
  const k = set.id + '|' + key;
  const ck = prEl('button', 'vc-check' + (prDone.has(k) ? ' on' : ''), '✓');
  ck.setAttribute('aria-label', 'Đánh dấu đã luyện ' + key);
  ck.addEventListener('click', e => {
    e.stopPropagation();
    if (prDone.has(k)) prDone.delete(k); else prDone.add(k);
    prDoneSave();
    ck.classList.toggle('on', prDone.has(k)); row.classList.toggle('learned', prDone.has(k));
    prSetProg(set);
  });
  return ck;
}
function prSetProg(set) {
  const el = document.getElementById('pr-set-prog');
  if (!el) return;
  const n = prSetItems(set).length, got = prSetGot(set);
  el.innerHTML = '';
  el.appendChild(prEl('span', null, `Đã luyện ${got}/${n}`));
  const bar = prEl('span', 'vc-bar'); const fill = prEl('span'); fill.style.width = (n ? got / n * 100 : 0) + '%'; bar.appendChild(fill);
  bar.style.flex = '1'; el.appendChild(bar);
}
// play the whole list one by one (tap again to stop)
function prSeqStop() {
  if (!prSeq) return;
  prSeq.stop = true;
  document.querySelectorAll('.pr-now').forEach(x => x.classList.remove('pr-now'));
  if (prSeq.btn) prSeq.btn.textContent = '▶ Nghe lần lượt';
  prSeq = null;
}
function prSeqPlay(rows, texts, btn) {
  if (prSeq) { prSeqStop(); try { speechSynthesis.cancel(); } catch (e) {} return; }
  const st = { stop: false, btn }; prSeq = st;
  btn.textContent = '⏹ Dừng';
  let i = 0;
  const next = () => {
    if (st.stop) return;
    document.querySelectorAll('.pr-now').forEach(x => x.classList.remove('pr-now'));
    if (i >= texts.length) { prSeqStop(); return; }
    const row = rows[i]; row.classList.add('pr-now');
    try { row.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) {}
    const text = texts[i]; i++;
    const u = prSay(text);
    let done = false;
    const go = () => { if (done || st.stop) return; done = true; setTimeout(next, 700); };
    try { if (u && u.addEventListener) { u.addEventListener('end', go); u.addEventListener('error', go); } } catch (e) {}
    setTimeout(go, Math.max(2500, text.length * 140));   // safety net if "end" never fires
  };
  next();
}

/* Nút thu gọn cho từng ô nội dung ngữ pháp: "Close ▴" khi đang mở, "Open ▾" khi đã đóng (nhớ trạng thái) */
const FOLD_KEY = 'hoc-tieng-anh-folded';
let foldSet = new Set();
try { const a = JSON.parse(localStorage.getItem(FOLD_KEY) || '[]'); if (Array.isArray(a)) foldSet = new Set(a); } catch (e) {}
function cardFold(card, key) {
  const h = card.querySelector(':scope > h3');
  if (!h) return card;
  const head = document.createElement('div'); head.className = 'fold-head';
  const body = document.createElement('div'); body.className = 'fold-body';
  [...card.childNodes].forEach(n => { if (n !== h) body.appendChild(n); });
  const btn = document.createElement('button'); btn.type = 'button'; btn.className = 'fold-btn';
  const set = closed => {
    card.classList.toggle('folded', closed);
    btn.textContent = closed ? 'Mở ▾' : 'Thu gọn ▴';
    btn.setAttribute('aria-expanded', closed ? 'false' : 'true');
    btn.setAttribute('aria-label', (closed ? 'Mở ' : 'Thu gọn ') + h.textContent);
  };
  const toggle = () => {
    const closed = !card.classList.contains('folded');
    set(closed);
    if (closed) foldSet.add(key); else foldSet.delete(key);
    try { localStorage.setItem(FOLD_KEY, JSON.stringify([...foldSet])); } catch (e) {}
  };
  btn.addEventListener('click', e => { e.stopPropagation(); toggle(); });
  h.addEventListener('click', toggle);
  head.appendChild(h); head.appendChild(btn);
  card.appendChild(head); card.appendChild(body);
  set(foldSet.has(key));
  return card;
}
/* ---------- IPA chart: the 44 sounds of British English ---------- */
// [symbol, group, short Vietnamese name, how to make it, tip for Vietnamese learners, examples [word with [highlight], ipa, meaning], extra]
// extra: vowels 'dài' / 'ngắn' / 'đôi'; consonants [voicing 'vô thanh' | 'hữu thanh', partner symbol]
/* IPA_SOUNDS: xem file dữ liệu */

/* ============================================================
   "Âm này viết thế nào" — cách viết (spelling) của từng âm IPA,
   kèm từ ví dụ và câu luyện. Toàn bộ từ và câu do app tự soạn.
   Chữ trong [ ] là phần chữ tạo ra âm đang học.
============================================================ */
/* IPA_SPELL: xem file dữ liệu */

const IPA_GROUPS = [
  { id: 'mono', title: 'Nguyên âm đơn', sub: 'Xếp theo cặp ngắn – dài' },
  { id: 'diph', title: 'Nguyên âm đôi', sub: 'Trượt từ âm đầu sang âm sau' },
  { id: 'cons', title: 'Phụ âm', sub: 'Hàng trên xếp theo cặp vô thanh – hữu thanh' }
];
const IPA_FILTER_KEY = 'hoc-tieng-anh-ipa-filter';
let ipaFilter = 'all';
try { ipaFilter = localStorage.getItem(IPA_FILTER_KEY) || 'all'; } catch (e) {}
const ipaKey = sym => 'ipa|' + sym;
const ipaGot = () => IPA_SOUNDS.filter(s => prDone.has(ipaKey(s[0]))).length;
const ipaPlain = w => w.replace(/[\[\]]/g, '');
function ipaWordEl(w, cls) {
  const el = prEl('span', cls);
  w.split(/(\[[^\]]+\])/).forEach(part => {
    if (!part) return;
    if (part[0] === '[') el.appendChild(prEl('b', 'ipa-hl', part.slice(1, -1)));
    else el.appendChild(document.createTextNode(part));
  });
  return el;
}
// ipa string with the target symbol highlighted (first match)
function ipaIpaEl(ipa, sym) {
  const el = prEl('span', 'vc-ipa pr-ipa');
  const i = ipa.indexOf(sym);
  if (i < 0) { el.textContent = ipa; return el; }
  el.appendChild(document.createTextNode(ipa.slice(0, i)));
  el.appendChild(prEl('b', 'ipa-hl', sym));
  el.appendChild(document.createTextNode(ipa.slice(i + sym.length)));
  return el;
}
const ipaTypeLabel = s => s[1] === 'cons' ? 'Phụ âm ' + s[6][0] : s[1] === 'diph' ? 'Nguyên âm đôi' : 'Nguyên âm ' + s[6];

function prIpaCard() {
  const n = IPA_SOUNDS.length, got = ipaGot();
  const b = prEl('button', 'vc-topic ipa-entry' + (got === n ? ' done' : ''));
  b.id = 'ipa-entry';
  const top = prEl('span', 'ipa-entry-top');
  top.appendChild(prEl('span', 'ipa-entry-sym', '/æ/'));
  const tx = prEl('span', 'ipa-entry-tx');
  tx.appendChild(prEl('span', 'vc-tvi', 'Bảng phiên âm IPA'));
  tx.appendChild(prEl('span', 'vc-ten', '12 nguyên âm đơn · 8 nguyên âm đôi · 24 phụ âm'));
  top.appendChild(tx);
  b.appendChild(top);
  b.appendChild(prEl('span', 'vc-tmeta', got ? `${got}/${n} âm đã thuộc` : `${n} âm · cách đặt lưỡi, môi và ví dụ`));
  const bar = prEl('span', 'vc-bar'); const fill = prEl('span'); fill.style.width = (got / n * 100) + '%'; bar.appendChild(fill); b.appendChild(bar);
  b.addEventListener('click', () => { prOpenIpa(); try { document.getElementById('page-pron').scrollIntoView({ block: 'start' }); } catch (e) {} });
  return b;
}

function ipaProg() {
  const el = document.getElementById('pr-set-prog');
  if (!el) return;
  const n = IPA_SOUNDS.length, got = ipaMastered();
  el.innerHTML = '';
  el.appendChild(prEl('span', null, `Thành thạo ${got}/${n}`));
  const bar = prEl('span', 'vc-bar'); const fill = prEl('span'); fill.style.width = (got / n * 100) + '%'; bar.appendChild(fill);
  bar.style.flex = '1'; el.appendChild(bar);
}

function prOpenIpa() {
  prSeqStop();
  prOpenSet = 'ipa';
  pronHome.hidden = true; pronSets.hidden = true; if (pronMore) pronMore.hidden = true;
  const v = pronSetView;
  if (pronResult.parentNode === v) pronSets.parentNode.insertBefore(pronResult, pronSets);
  pronResult.innerHTML = '';
  v.innerHTML = ''; v.hidden = false;
  const back = prEl('button', 'gr-back', '← Tất cả bài luyện');
  back.addEventListener('click', () => { prShowHome(); try { document.getElementById('page-pron').scrollIntoView({ block: 'start' }); } catch (e) {} });
  v.appendChild(back);
  const head = prEl('div', 'vc-head');
  head.appendChild(prEl('div', 'vc-head-icon ipa-head-icon', '/æ/'));
  const hm = prEl('div', 'vc-head-meta');
  hm.appendChild(prEl('div', 'vc-head-vi', 'Bảng phiên âm IPA'));
  hm.appendChild(prEl('div', 'vc-head-en', '44 âm · mô hình IPA tham chiếu Anh-Anh (không đọc /r/ cuối âm tiết)' + (prAccent === 'us' ? ' · có ghi chú giọng Mỹ' : '')));
  const pr = prEl('div', 'vc-head-prog'); pr.id = 'pr-set-prog'; hm.appendChild(pr);
  head.appendChild(hm); v.appendChild(head);
  ipaProg();

  // how to read the symbols
  const guide = prEl('details', 'tense-card ipa-guide');
  guide.appendChild(prEl('summary', null, '📖 Cách đọc ký hiệu phiên âm'));
  [['ː', 'Âm dài: kéo dài âm phía trước. /iː/ dài hơn /ɪ/.'],
   ['ˈ', 'Trọng âm chính: âm tiết ngay sau dấu này đọc to, cao và dài hơn. /ˈteɪbl/'],
   ['ˌ', 'Trọng âm phụ: nhấn nhẹ hơn trọng âm chính. /ˌvjetnəˈmiːz/'],
   ['/ /', 'Phiên âm luôn viết giữa hai dấu gạch chéo, đọc theo âm chứ không theo chữ cái.'],
   ['🔇', 'Vô thanh: chỉ có hơi, cổ họng không rung (p, t, k, f, s…).'],
   ['🔊', 'Hữu thanh: cổ họng rung. Đặt tay lên cổ để cảm nhận (b, d, ɡ, v, z…).']].forEach(([k, t]) => {
    const r = prEl('div', 'ipa-guide-row');
    r.appendChild(prEl('span', 'ipa-guide-k', k));
    r.appendChild(prEl('span', null, t));
    guide.appendChild(r);
  });
  v.appendChild(guide);

  // filter chips + play all
  const chips = prEl('div', 'colloc-chips ipa-filters');
  const filters = [['all', 'Tất cả · 44'], ['mono', 'Nguyên âm đơn · 12'], ['diph', 'Nguyên âm đôi · 8'], ['cons', 'Phụ âm · 24']];
  filters.forEach(([id, label]) => {
    const c = prEl('button', 'colloc-chip' + (ipaFilter === id ? ' active' : ''), label);
    c.dataset.f = id;
    c.addEventListener('click', () => {
      ipaFilter = id; try { localStorage.setItem(IPA_FILTER_KEY, id); } catch (e) {}
      chips.querySelectorAll('.colloc-chip').forEach(x => x.classList.toggle('active', x.dataset.f === id));
      prSeqStop(); drawGrid();
    });
    chips.appendChild(c);
  });
  v.appendChild(chips);
  const acts = prEl('div', 'pr-acts');
  acts.appendChild(prEl('span', 'pr-acts-hint', 'Chạm vào một âm để học theo 5 bước: nghe âm mẫu → từ ví dụ → phân biệt → luyện trong câu → kiểm tra'));
  const lg = prEl('div', 'p2-stline'); lg.textContent = Object.keys(IPA_ST).map(k => IPA_ST[k][1] + ' ' + IPA_ST[k][0]).join(' · '); v.appendChild(lg);
  v.appendChild(acts);

  const wrap = prEl('div', 'ipa-wrap');
  v.appendChild(wrap);
  let tiles = [], tileTexts = [];
  function drawGrid() {
    wrap.innerHTML = ''; tiles = []; tileTexts = [];
    IPA_GROUPS.forEach(g => {
      if (ipaFilter !== 'all' && ipaFilter !== g.id) return;
      const list = IPA_SOUNDS.filter(s => s[1] === g.id);
      const gh = prEl('div', 'ipa-group-h');
      gh.appendChild(prEl('span', 'tense-group-title', g.title));
      gh.appendChild(prEl('span', 'ipa-group-sub', g.sub));
      wrap.appendChild(gh);
      const grid = prEl('div', 'ipa-grid ipa-grid-' + g.id);
      list.forEach(s => {
        const t = prEl('button', 'ipa-tile p2-st-' + ipaSt(s[0]) + (ipaSt(s[0]) === 'master' ? ' learned' : ''));
        t.title = IPA_ST[ipaSt(s[0])][0];
        t.dataset.sym = s[0];
        t.setAttribute('aria-label', 'Âm /' + s[0] + '/ như trong ' + ipaPlain(s[5][0][0]));
        t.appendChild(prEl('span', 'ipa-sym', s[0]));
        t.appendChild(ipaWordEl(s[5][0][0], 'ipa-ex'));
        if (s[1] === 'cons') t.appendChild(prEl('span', 'ipa-voice', s[6][0] === 'vô thanh' ? '🔇' : '🔊'));
        else if (s[1] === 'mono') t.appendChild(prEl('span', 'ipa-len', s[6]));
        t.addEventListener('click', () => { prSeqStop(); ipaShow(s[0]); });
        grid.appendChild(t); tiles.push(t); tileTexts.push(ipaPlain(s[5][0][0]));
      });
      wrap.appendChild(grid);
    });
  }
  drawGrid();
  try { if (!window._ipaPre) { window._ipaPre = 1; ipaPrerender(); } } catch (e) {}

  const nx = PRON_SETS[0];
  const nb = prEl('button', 'btn-primary vc-next-unit', `Bài tiếp: ${nx.icon} ${nx.title} →`);
  nb.addEventListener('click', () => { prOpenSetView(nx); try { document.getElementById('page-pron').scrollIntoView({ block: 'start' }); } catch (e) {} });
  v.appendChild(nb);
}

// detail sheet for one sound
function ipaRefreshTile(sym) {
  document.querySelectorAll('.ipa-tile').forEach(t => { if (t.dataset.sym === sym) { Object.keys(IPA_ST).forEach(k => t.classList.remove('p2-st-' + k)); t.classList.add('p2-st-' + ipaSt(sym)); t.classList.toggle('learned', ipaSt(sym) === 'master'); t.title = IPA_ST[ipaSt(sym)][0]; } });
  ipaProg();
}
/* ---------- Hình minh hoạ khẩu hình cho từng âm IPA ---------- */
/* Nguyên âm: [lưỡi trước↔sau 0–1, độ cao lưỡi 0–1, môi, nhãn vị trí, nhãn độ cao] */
const MZ_V = {
  'ɪ':  [0.78, 0.70, 'spread',  'trước', 'hơi cao'],
  'iː': [0.88, 0.92, 'spread',  'trước', 'cao'],
  'ʊ':  [0.30, 0.70, 'round',   'sau',   'hơi cao'],
  'uː': [0.18, 0.92, 'round',   'sau',   'cao'],
  'e':  [0.80, 0.52, 'spread',  'trước', 'trung bình'],
  'æ':  [0.78, 0.20, 'open',    'trước', 'thấp'],
  'ə':  [0.50, 0.48, 'neutral', 'giữa',  'trung bình'],
  'ɜː': [0.50, 0.50, 'neutral', 'giữa',  'trung bình'],
  'ɒ':  [0.18, 0.16, 'round',   'sau',   'thấp'],
  'ɔː': [0.20, 0.48, 'round',   'sau',   'trung bình'],
  'ʌ':  [0.45, 0.28, 'neutral', 'giữa',  'hơi thấp'],
  'ɑː': [0.14, 0.10, 'open',    'sau',   'thấp'],
  'a':  [0.55, 0.10, 'open',    'giữa',  'thấp']
};
/* Nguyên âm đôi: lưỡi trượt từ âm này sang âm kia */
const MZ_D = {
  'eɪ': ['e', 'ɪ'], 'aɪ': ['a', 'ɪ'], 'ɔɪ': ['ɔː', 'ɪ'], 'aʊ': ['a', 'ʊ'],
  'əʊ': ['ə', 'ʊ'], 'ɪə': ['ɪ', 'ə'], 'eə': ['e', 'ə'], 'ʊə': ['ʊ', 'ə']
};
/* Phụ âm: [trước↔sau, cao, đầu lưỡi y, đầu lưỡi x, môi, điểm cản [x,y], cờ, nơi cản, cách cản]
   cờ: v rung dây thanh · c chặn hơi rồi bật · a bật hơi · f xát · n hơi ra mũi · l hơi ra hai bên */
const MZ_C = {
  'p':  [0.40, 0.20, 120, 146, 'closed',  [177, 106], 'ca',  'hai môi', 'chặn rồi bật hơi'],
  'b':  [0.40, 0.20, 120, 146, 'closed',  [177, 106], 'cv',  'hai môi', 'chặn rồi bật, có rung'],
  't':  [0.60, 0.44,  97, 150, 'neutral', [152, 97],  'ca',  'đầu lưỡi – lợi', 'chặn rồi bật hơi'],
  'd':  [0.60, 0.44,  97, 150, 'neutral', [152, 97],  'cv',  'đầu lưỡi – lợi', 'chặn rồi bật, có rung'],
  'k':  [0.02, 1.00, 122, 144, 'open',    [80, 88],   'ca',  'gốc lưỡi – ngạc mềm', 'chặn rồi bật hơi'],
  'ɡ':  [0.02, 1.00, 122, 144, 'open',    [80, 88],   'cv',  'gốc lưỡi – ngạc mềm', 'chặn rồi bật, có rung'],
  'f':  [0.40, 0.26, 120, 146, 'teeth',   [172, 112], 'f',   'răng trên – môi dưới', 'xát, không rung'],
  'v':  [0.40, 0.26, 120, 146, 'teeth',   [172, 112], 'fv',  'răng trên – môi dưới', 'xát, có rung'],
  'θ':  [0.64, 0.38, 106, 170, 'open',    [168, 104], 'f',   'đầu lưỡi – răng', 'xát, không rung'],
  'ð':  [0.64, 0.38, 106, 170, 'open',    [168, 104], 'fv',  'đầu lưỡi – răng', 'xát, có rung'],
  's':  [0.66, 0.54, 102, 150, 'spread',  [151, 99],  'f',   'đầu lưỡi – lợi', 'xát, không rung'],
  'z':  [0.66, 0.54, 102, 150, 'spread',  [151, 99],  'fv',  'đầu lưỡi – lợi', 'xát, có rung'],
  'ʃ':  [0.56, 0.64, 106, 144, 'round',   [132, 88],  'f',   'mặt lưỡi – sau lợi', 'xát, không rung'],
  'ʒ':  [0.56, 0.64, 106, 144, 'round',   [132, 88],  'fv',  'mặt lưỡi – sau lợi', 'xát, có rung'],
  'tʃ': [0.56, 0.66, 100, 146, 'round',   [136, 90],  'cf',  'mặt lưỡi – sau lợi', 'chặn rồi xát'],
  'dʒ': [0.56, 0.66, 100, 146, 'round',   [136, 90],  'cfv', 'mặt lưỡi – sau lợi', 'chặn rồi xát, có rung'],
  'm':  [0.40, 0.20, 120, 146, 'closed',  [177, 106], 'nv',  'hai môi', 'hơi thoát ra mũi'],
  'n':  [0.60, 0.44,  97, 150, 'neutral', [152, 97],  'nv',  'đầu lưỡi – lợi', 'hơi thoát ra mũi'],
  'ŋ':  [0.02, 1.00, 122, 144, 'open',    [80, 88],   'nv',  'gốc lưỡi – ngạc mềm', 'hơi thoát ra mũi'],
  'h':  [0.50, 0.34, 118, 146, 'open',    [70, 146],  'f',   'thanh hầu', 'hơi xát nhẹ ở cổ họng'],
  'l':  [0.52, 0.42,  97, 150, 'neutral', [152, 97],  'lv',  'đầu lưỡi – lợi', 'hơi thoát hai bên lưỡi'],
  'r':  [0.42, 0.58, 108, 142, 'round',   null,       'v',   'đầu lưỡi cong, không chạm', 'không cản, có rung'],
  'w':  [0.10, 0.94, 122, 144, 'round',   null,       'v',   'hai môi tròn, gốc lưỡi cao', 'không cản, có rung'],
  'j':  [0.86, 0.94, 112, 148, 'spread',  null,       'v',   'mặt lưỡi – ngạc cứng', 'không cản, có rung']
};

/* ----- hình học: mặt cắt dọc, mặt quay sang phải ----- */
const MZ_HX = 86, MZ_HXR = 52, MZ_HY = 130, MZ_HYR = 46;
function mzTongue(f, h, tipY, tipX) {
  const hx = MZ_HX + f * MZ_HXR, hy = MZ_HY - h * MZ_HYR, tx = tipX || 148, ty = tipY;
  return 'M 74 136 C ' + (hx - 24) + ' ' + (hy + 10) + ', ' + (hx + 14) + ' ' + hy + ', ' + tx + ' ' + ty +
         ' L ' + (tx + 4) + ' ' + (ty + 10) + ' C 132 134, 98 144, 74 146 Z';
}
/* môi: [đường viền mặt trước từ dưới mũi xuống cằm, mép trên khe miệng, mép dưới khe miệng] */
const MZ_LIPS = {
  spread:  ['C 181 96, 181 100, 174 102 L 174 108 C 181 110, 181 114, 176 118', '174 102', '174 108'],
  neutral: ['C 183 96, 183 100, 176 103 L 176 109 C 183 112, 183 115, 176 118', '176 103', '176 109'],
  open:    ['C 181 95, 181 97, 173 99 L 173 115 C 180 116, 180 117, 176 118', '173 99', '173 115'],
  round:   ['C 189 96, 191 103, 186 105 L 186 110 C 191 113, 189 116, 176 118', '186 105', '186 110'],
  closed:  ['C 187 98, 187 112, 176 118', '171 103', '171 109'],
  teeth:   ['C 183 96, 183 101, 174 104 L 167 110 C 175 112, 181 115, 176 118', '174 104', '167 110']
};
function mzFig(cfg, opts) {
  opts = opts || {};
  const fl = cfg.flags || '', voiced = fl.indexOf('v') >= 0, nasal = fl.indexOf('n') >= 0;
  const lp = MZ_LIPS[cfg.lips] || MZ_LIPS.neutral;
  let g = '';
  // mặt nhìn nghiêng: trán – mũi – môi – cằm
  g += '<path class="mz-skin" d="M 20 170 L 20 76 C 20 38, 52 18, 92 18 C 128 18, 152 38, 156 68 ' +
       'L 180 84 C 185 87, 183 92, 177 92 ' + lp[0] +
       ' C 186 124, 187 138, 178 146 C 166 158, 140 168, 110 170 Z"/>';
  // khoang mũi
  g += '<path class="mz-cav" d="M 84 74 C 112 64, 146 64, 170 74 L 178 80 L 170 84 C 146 76, 112 76, 90 86 Z"/>';
  // khoang miệng (mở ra tới khe môi)
  g += '<path class="mz-cav" d="M ' + lp[1] + ' L 156 97 C 136 87, 108 81, 86 85 C 74 89, 69 97, 68 107 ' +
       'C 66 122, 67 134, 71 146 C 84 152, 114 146, 138 134 C 152 126, 162 116, 166 110 L ' + lp[2] + ' Z"/>';
  // ngạc cứng – ngạc mềm – thành họng – sàn miệng
  g += '<path class="mz-line mz-palate" d="M 158 99 C 138 87, 108 81, 86 85"/>';
  g += nasal ? '<path class="mz-line mz-velum" d="M 86 85 C 89 95, 85 103, 77 107"/>'
             : '<path class="mz-line mz-velum" d="M 86 85 C 78 88, 72 94, 70 104"/>';
  g += '<path class="mz-line" d="M 68 108 C 66 122, 67 134, 71 146"/>';
  g += '<path class="mz-line mz-jaw" d="M 73 148 C 96 154, 126 146, 152 132"/>';
  // răng trên bám vào vòm, răng dưới mọc từ sàn
  g += '<path class="mz-teeth" d="M 154 95 L 162 98 L 161 109 L 154 106 Z"/>';
  g += '<path class="mz-teeth" d="M 153 116 L 161 113 L 162 125 L 154 126 Z"/>';
  // lưỡi
  if (opts.ghost) g += '<path class="mz-tongue mz-ghost" d="' + opts.ghost + '"/>';
  const tD = mzTongue(cfg.f, cfg.h, cfg.tip, cfg.tipX);
  // chuyển động: lưỡi đi từ vị trí nghỉ tới vị trí của âm (nguyên âm đôi: trượt qua lại giữa hai vị trí)
  const anim = opts.loop ? '<animate attributeName="d" values="' + tD + ';' + tD + ';' + opts.loop + ';' + opts.loop + ';' + tD + '" keyTimes="0;0.15;0.5;0.8;1" dur="2.6s" repeatCount="indefinite"/>'
    : opts.from ? '<animate attributeName="d" from="' + opts.from + '" to="' + tD + '" dur="0.7s" begin="0.15s" fill="freeze"/>' : '';
  g += '<path class="mz-tongue" d="' + (opts.from ? opts.from : tD) + '">' + anim + '</path>';
  if (opts.arrow) g += '<path class="mz-arrow" d="' + opts.arrow + '"/>';
  // luồng hơi
  if (nasal) g += '<path class="mz-air" d="M 104 72 H 166"/><path class="mz-airtip" d="M 170 68 l 7 4 l -7 4"/>';
  else if (fl.indexOf('a') >= 0) g += '<path class="mz-air" d="M 186 106 h 11"/><path class="mz-airtip" d="M 195 102 l 7 4 l -7 4"/>';
  else if (fl.indexOf('f') >= 0) g += '<path class="mz-air mz-fric" d="M 185 106 q 5 -6 9 0 q 4 6 9 0"/>';
  if (fl.indexOf('l') >= 0) g += '<path class="mz-air" d="M 136 106 q 16 4 26 7"/>';
  // điểm cản hơi
  if (cfg.mark) g += '<circle class="mz-mark" cx="' + cfg.mark[0] + '" cy="' + cfg.mark[1] + '" r="8"/>';
  // thanh quản + dây thanh
  g += '<path class="mz-lar" d="M 70 153 q 8 6 17 1"/>';
  g += voiced ? '<path class="mz-vib" d="M 68 162 q 4 -5 8 0 q 4 5 8 0 q 4 -5 8 0"/>'
              : '<path class="mz-vib mz-off" d="M 68 162 h 24"/>';
  return '<svg viewBox="0 0 214 156" class="mz-svg" role="img" aria-label="Hình minh hoạ khẩu hình">' +
         '<g transform="scale(1.42) translate(-62,-58)">' + g + '</g></svg>';
}
function mzArrow(x1, y1, x2, y2) {
  const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1;
  const ux = dx / L, uy = dy / L, hx = x2 - ux * 9, hy = y2 - uy * 9;
  return 'M ' + x1 + ' ' + y1 + ' L ' + x2 + ' ' + y2 +
         ' M ' + x2 + ' ' + y2 + ' L ' + (hx - uy * 5) + ' ' + (hy + ux * 5) +
         ' M ' + x2 + ' ' + y2 + ' L ' + (hx + uy * 5) + ' ' + (hy - ux * 5);
}
const MZ_LIPVI = { round: 'tròn', spread: 'kéo ngang', open: 'mở rộng', neutral: 'thả lỏng', closed: 'khép lại', teeth: 'môi dưới chạm răng trên' };

function ipaMouthEl(sym) {
  let svg = '', cap = '', note = '';
  if (MZ_C[sym]) {
    const c = MZ_C[sym];
    svg = mzFig({ f: c[0], h: c[1], tip: c[2], tipX: c[3], lips: c[4], mark: c[5], flags: c[6] }, { from: mzTongue(0.5, 0.3, 122, 146) });
    cap = c[7] + ' · ' + c[8];
    note = c[6].indexOf('v') >= 0 ? 'Hữu thanh: dây thanh rung (đường sóng). Đặt tay lên cổ họng sẽ thấy rung.' : 'Vô thanh: chỉ có luồng hơi (nét đứt), cổ họng không rung.';
  } else if (MZ_D[sym]) {
    const k1 = MZ_D[sym][0], k2 = MZ_D[sym][1], v1 = MZ_V[k1], v2 = MZ_V[k2];
    const x1 = MZ_HX + v1[0] * MZ_HXR, y1 = MZ_HY - v1[1] * MZ_HYR;
    const x2 = MZ_HX + v2[0] * MZ_HXR, y2 = MZ_HY - v2[1] * MZ_HYR;
    svg = mzFig({ f: v1[0], h: v1[1], tip: 118, lips: v1[2], mark: null, flags: 'v' },
                { ghost: mzTongue(v2[0], v2[1], 118), arrow: mzArrow(x1 + 4, y1 - 8, x2 + 4, y2 - 8), loop: mzTongue(v2[0], v2[1], 118) });
    cap = 'lưỡi trượt từ vị trí /' + k1 + '/ sang /' + k2 + '/';
    note = 'Nét đứt là vị trí lưỡi lúc kết thúc; môi ' +
           (v2[2] === 'round' ? 'tròn dần lại' : v2[2] === 'spread' ? 'kéo ngang dần' : 'thả lỏng dần') + '.';
  } else if (MZ_V[sym]) {
    const v = MZ_V[sym];
    svg = mzFig({ f: v[0], h: v[1], tip: 118, lips: v[2], mark: null, flags: 'v' }, { from: mzTongue(0.5, 0.45, 118) });
    cap = 'lưỡi ' + v[3] + ' · ' + v[4] + ' · môi ' + MZ_LIPVI[v[2]];
    note = 'Nguyên âm luôn rung dây thanh.';
  } else return null;
  const wrap = prEl('div', 'mz-wrap mz-anim');
  wrap.innerHTML = svg;
  const lg = prEl('div', 'mz-legend');
  lg.appendChild(prEl('span', 'mz-cap', cap));
  lg.appendChild(prEl('span', 'mz-note', note));
  wrap.appendChild(lg);
  return wrap;
}
/* Cách đọc riêng từng âm cho máy đọc: nguyên âm dùng từ ngắn hoặc thán từ,
   phụ âm dùng âm tiết ghép schwa như cách giáo viên đọc mẫu (puh, buh, tuh…) */
/* Máy đọc không phát được ký hiệu IPA trần. Chỉ những âm dưới đây có một từ/thán từ
   tiếng Anh mà cả từ chính là âm đó, nên đọc lên nghe đúng; các âm còn lại nghe qua từ ví dụ. */
const IPA_SAY = {
  'iː': 'ee', 'e': 'eh', 'uː': 'ooh', 'ɜː': 'er', 'ə': 'uh', 'ɔː': 'awe', 'ɑː': 'ah',
  'eɪ': 'ay', 'aɪ': 'eye', 'ɔɪ': 'oy', 'aʊ': 'ow', 'əʊ': 'oh', 'ɪə': 'ear', 'eə': 'air'
};
/* v194: phụ âm do máy tự dựng nghe vẫn "máy". Giọng đọc có sẵn trong điện thoại (iPhone: Samantha, Ava…) là giọng người thật
   được ghi sẵn, nên phụ âm giờ được đọc bằng giọng đó, ghép với nguyên âm /ɑː/ như giáo viên vẫn đọc mẫu ("pah", "bah"…).
   Âm không đứng đầu được (/ŋ/, /ʒ/) đọc qua âm tiết có chứa nó. */
const IPA_CONS_SAY = {
  p: 'pah', b: 'bah', t: 'tah', d: 'dah', k: 'kah', 'ɡ': 'gah', f: 'fah', v: 'vah', 'θ': 'thaw', 'ð': 'the',
  s: 'sah', z: 'zah', 'ʃ': 'shah', 'ʒ': 'azure', 'tʃ': 'chah', 'dʒ': 'jah', m: 'mah', n: 'nah', 'ŋ': 'sing',
  h: 'hah', l: 'lah', r: 'rah', w: 'wah', j: 'yah'
};
/* v197: âm đã có video giáo viên đọc mẫu → không phát âm máy dựng / giọng máy nữa, bấm nghe là chạy video */
function ipaVidPlay(sym) {
  const box = document.querySelector('#ipasheet:not([hidden]) .ipa-vid-box');
  if (!box || !IPA_VID[sym]) return false;
  try { box.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) {}
  box.click(); return true;
}
function ipaSoundOrSay(sym) {
  if (IPA_VID[sym]) { ipaVidPlay(sym); return; }
  try { if (typeof ipaVidStop === 'function') ipaVidStop(); } catch (e) {}   // v196: đang xem video mà bấm nghe âm → dừng video
  try { if (typeof ipaPlayRec === 'function' && ipaPlayRec(sym)) return; } catch (e) {}   /* lớp 1: bản ghi giọng người (nếu có) */
  if (IPA_CONS_SAY[sym] && 'speechSynthesis' in window && (typeof ttsVoices !== 'function' || ttsVoices().length)) {   /* lớp 2: phụ âm → giọng đọc của máy */
    const w = IPA_CONS_SAY[sym];
    prSay(w + '. ' + w + '.', 0.62); return;
  }
  ipaUnlock();
  try { if (ipaPlayWav(sym)) return; } catch (e) {}     /* iPhone + mọi máy: phát file WAV tự tạo */
  try { if (ipaPlaySound(sym)) return; } catch (e) {}   /* dự phòng: Web Audio trực tiếp */
  prSay(IPA_SAY[sym] || ipaWords(sym)[0], Math.min(prRate, 0.75));
}
function ipaWords(sym) {
  const s = IPA_SOUNDS.find(x => x[0] === sym);
  return s ? s[5].map(x => ipaPlain(x[0])) : [sym];
}
/* ---------- Tự tạo âm cho từng ký hiệu IPA bằng Web Audio ----------
   Giọng máy chỉ đọc được chữ, không đọc được ký hiệu, nên 44 âm dưới đây
   được dựng trực tiếp từ tần số cộng hưởng (formant) và tiếng xát (nhiễu lọc). */
const IPA_FMT = {   /* [F1, F2, F3] Hz – giọng nam trung bình, chuẩn Anh-Anh */
  'iː': [285, 2250, 2890], 'ɪ': [370, 2050, 2650], 'e': [560, 1970, 2550], 'æ': [760, 1740, 2450],
  'ɜː': [580, 1400, 2440], 'ə': [500, 1500, 2500], 'ʌ': [700, 1240, 2540], 'ɑː': [680, 1080, 2540],
  'ɒ': [600,  900, 2550], 'ɔː': [450,  740, 2600], 'ʊ': [390,  960, 2400], 'uː': [300,  850, 2250],
  'a':  [800, 1300, 2550]
};
const IPA_VLONG = { 'iː': 1, 'ɜː': 1, 'ɑː': 1, 'ɔː': 1, 'uː': 1 };
const IPA_CONS_SPEC = {
  'p':  { t: 'stop',  burst: [900, 1.2],  asp: 0.11, voiced: false },
  'b':  { t: 'stop',  burst: [900, 1.2],  asp: 0,    voiced: true  },
  't':  { t: 'stop',  burst: [4200, 1.1], asp: 0.11, voiced: false },
  'd':  { t: 'stop',  burst: [4200, 1.1], asp: 0,    voiced: true  },
  'k':  { t: 'stop',  burst: [1900, 1.6], asp: 0.13, voiced: false },
  'ɡ':  { t: 'stop',  burst: [1900, 1.6], asp: 0,    voiced: true  },
  'f':  { t: 'fric',  band: [7000, 0.8],  amp: 0.30, voiced: false },
  'v':  { t: 'fric',  band: [7000, 0.8],  amp: 0.22, voiced: true  },
  'θ':  { t: 'fric',  band: [7600, 0.7],  amp: 0.24, voiced: false },
  'ð':  { t: 'fric',  band: [7600, 0.7],  amp: 0.18, voiced: true  },
  's':  { t: 'fric',  band: [6400, 3.2],  amp: 0.55, voiced: false },
  'z':  { t: 'fric',  band: [6400, 3.2],  amp: 0.42, voiced: true  },
  'ʃ':  { t: 'fric',  band: [2900, 2.2],  amp: 0.60, voiced: false },
  'ʒ':  { t: 'fric',  band: [2900, 2.2],  amp: 0.46, voiced: true  },
  'h':  { t: 'fric',  band: [1100, 0.6],  amp: 0.30, voiced: false },
  'tʃ': { t: 'affr',  stop: 't', fric: 'ʃ' },
  'dʒ': { t: 'affr',  stop: 'd', fric: 'ʒ' },
  'm':  { t: 'nasal', f: [300, 1100, 2200] },
  'n':  { t: 'nasal', f: [320, 1600, 2600] },
  'ŋ':  { t: 'nasal', f: [300, 2100, 2800] },
  'l':  { t: 'vowel', f: [360, 1300, 2800], dur: 0.34 },
  'r':  { t: 'vowel', f: [330, 1050, 1620], dur: 0.34 },
  'w':  { t: 'glide', from: [300, 850, 2250], to: [550, 1450, 2500] },
  'j':  { t: 'glide', from: [285, 2250, 2890], to: [550, 1450, 2500] }
};

/* v193: điểm bắt đầu formant [F1, F2, F3] khi phụ âm chuyển sang nguyên âm /ɑː/ (giọng nam) */
const IPA_LOCUS = {
  p: [250, 800, 2100], b: [250, 800, 2100], m: [250, 850, 2100], f: [300, 1000, 2200], v: [300, 1000, 2200],
  θ: [300, 1450, 2600], ð: [300, 1450, 2600], t: [250, 1750, 2650], d: [250, 1750, 2650], n: [250, 1700, 2600],
  s: [300, 1700, 2650], z: [300, 1700, 2650], l: [360, 1200, 2800], ʃ: [300, 1950, 2500], ʒ: [300, 1950, 2500],
  tʃ: [300, 1950, 2500], dʒ: [300, 1950, 2500], j: [280, 2200, 2900], k: [280, 1500, 1750], ɡ: [280, 1500, 1750],
  ŋ: [280, 1500, 1800], r: [330, 1050, 1600], w: [300, 700, 2200], h: [680, 1080, 2540]
};
/* v193: hình phổ tiếng xát — chuỗi bộ lọc [loại, tần số, Q, gain] */
const IPA_FRIC_SHAPE = {
  s: { amp: 0.7, f: [['highpass', 3800, 0.7], ['peaking', 6200, 1.6, 9], ['lowpass', 11000, 0.7]] },
  z: { amp: 0.55, f: [['highpass', 3800, 0.7], ['peaking', 6200, 1.6, 9], ['lowpass', 11000, 0.7]] },
  'ʃ': { amp: 0.8, f: [['highpass', 1800, 0.7], ['peaking', 2900, 1.3, 10], ['lowpass', 7000, 0.7]] },
  'ʒ': { amp: 0.62, f: [['highpass', 1800, 0.7], ['peaking', 2900, 1.3, 10], ['lowpass', 7000, 0.7]] },
  f: { amp: 0.42, f: [['highpass', 1100, 0.6], ['lowpass', 8500, 0.6]] },
  v: { amp: 0.3, f: [['highpass', 1100, 0.6], ['lowpass', 8500, 0.6]] },
  'θ': { amp: 0.36, f: [['highpass', 1500, 0.6], ['peaking', 5500, 0.8, 3], ['lowpass', 9500, 0.6]] },
  'ð': { amp: 0.26, f: [['highpass', 1500, 0.6], ['peaking', 5500, 0.8, 3], ['lowpass', 9500, 0.6]] },
  h: { amp: 0.45, f: [['bandpass', 1200, 0.5], ['lowpass', 4000, 0.6]] }
};
let ipaCtx = null;
function ipaAC() {
  if (!ipaCtx) {
    const C = window.AudioContext || window.webkitAudioContext;
    if (!C) return null;
    try { ipaCtx = new C(); } catch (e) { return null; }
  }
  if (ipaCtx.state === 'suspended') { try { ipaCtx.resume(); } catch (e) {} }
  return ipaCtx;
}
function ipaGlottalWave(ctx) {
  const n = 36, re = new Float32Array(n), im = new Float32Array(n);
  for (let i = 1; i < n; i++) im[i] = 1 / Math.pow(i, 1.12);
  return ctx.createPeriodicWave(re, im, { disableNormalization: false });
}
function ipaNoiseBuffer(ctx) {
  const len = Math.floor(ctx.sampleRate * 1.2), buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  let last = 0;
  for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; last = 0.75 * last + 0.25 * w; d[i] = (w + last) * 0.5; }
  return buf;
}
/* nguồn thanh quản: dao động tuần hoàn + rung nhẹ */
function ipaVoiceSrc(ctx, t0, t1, f0) {
  const o = ctx.createOscillator();
  if (!ctx._ipaWave) ctx._ipaWave = ipaGlottalWave(ctx);
  o.setPeriodicWave(ctx._ipaWave);
  const f = f0 || 105;
  o.frequency.setValueAtTime(f * 1.07, t0);
  o.frequency.linearRampToValueAtTime(f * 0.93, t1);
  o.start(t0); o.stop(t1 + 0.02);
  // v193: bớt tiếng "rè" kim loại ở dải cao của giọng máy → nghe tròn, gần giọng người hơn
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3800; lp.Q.value = 0.5;
  o.connect(lp);
  return lp;
}
function ipaNoiseSrc(ctx, t0, t1) {
  if (!ctx._ipaNoise) ctx._ipaNoise = ipaNoiseBuffer(ctx);
  const s = ctx.createBufferSource();
  s.buffer = ctx._ipaNoise; s.loop = true;
  s.start(t0); s.stop(t1 + 0.02);
  return s;
}
function ipaEnv(ctx, t0, t1, peak, atk, rel) {
  const g = ctx.createGain();
  g.gain.setValueAtTime(0, t0);
  g.gain.linearRampToValueAtTime(peak, t0 + (atk || 0.025));
  g.gain.setValueAtTime(peak, Math.max(t0 + (atk || 0.025), t1 - (rel || 0.06)));
  g.gain.linearRampToValueAtTime(0.0001, t1);
  return g;
}
/* ba bộ cộng hưởng song song tạo nguyên âm */
function ipaFormants(ctx, dest, f, t0, t1, fTo) {
  const inp = ctx.createGain(); inp.gain.value = 1;
  const bw = [115, 105, 135], gn = [1, 0.72, 0.5];
  for (let i = 0; i < 3; i++) {
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(f[i], t0);
    if (fTo) bp.frequency.linearRampToValueAtTime(fTo[i], t1 - 0.04);
    bp.Q.value = f[i] / bw[i];
    const g = ctx.createGain(); g.gain.value = gn[i];
    inp.connect(bp); bp.connect(g); g.connect(dest);
  }
  return inp;
}
/* cân bằng độ lớn giữa các âm (đo bằng máy, không chỉnh tay) */
const IPA_GAIN = { 'iː': 0.46, 'ɪ': 0.61, 'e': 0.92, 'æ': 1.21, 'ɜː': 0.92, 'ə': 0.84, 'ʌ': 1.08, 'ɑː': 0.95, 'ɒ': 0.85, 'ɔː': 0.59, 'ʊ': 0.61, 'uː': 0.46, 'eɪ': 0.82, 'aɪ': 1.1, 'ɔɪ': 0.64, 'aʊ': 1.09, 'əʊ': 0.74, 'ɪə': 0.61, 'eə': 0.84, 'ʊə': 0.63, 'p': 0.91, 'b': 0.97, 't': 1.22, 'd': 1.27, 'k': 0.94, 'ɡ': 0.96, 'f': 1.49, 'v': 1.47, 'θ': 1.78, 'ð': 1.58, 's': 1.46, 'z': 1.42, 'ʃ': 1.28, 'ʒ': 1.31, 'h': 1.96, 'tʃ': 1.25, 'dʒ': 1.29, 'm': 0.49, 'n': 0.5, 'ŋ': 0.49, 'l': 0.58, 'r': 0.53, 'w': 0.52, 'j': 0.52 };
function ipaBuild(ctx, sym, t0) {
  const out = ctx.createGain(); out.gain.value = 0.9 * (IPA_GAIN[sym] || 1); out.connect(ctx.destination);
  const V = IPA_FMT[sym], D = (typeof MZ_D !== 'undefined') ? MZ_D[sym] : null, C = IPA_CONS_SPEC[sym];
  const mkVowel = (f, dur, fTo) => {
    const t1 = t0 + dur;
    const env = ipaEnv(ctx, t0, t1, 0.9, 0.03, 0.08); env.connect(out);
    const fm = ipaFormants(ctx, env, f, t0, t1, fTo);
    ipaVoiceSrc(ctx, t0, t1).connect(fm);
    return t1;
  };
  const mkFric = (spec, t0b, dur) => {
    const t1 = t0b + dur;
    const env = ipaEnv(ctx, t0b, t1, spec.amp, 0.03, 0.07); env.connect(out);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass'; bp.frequency.value = spec.band[0]; bp.Q.value = spec.band[1];
    bp.connect(env);
    ipaNoiseSrc(ctx, t0b, t1).connect(bp);
    if (spec.voiced) {
      const venv = ipaEnv(ctx, t0b, t1, 0.07, 0.03, 0.07); venv.connect(out);
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 320; lp.Q.value = 0.7; lp.connect(venv);
      ipaVoiceSrc(ctx, t0b, t1, 110).connect(lp);
    }
    return t1;
  };
  const mkStop = (spec, t0b) => {
    let t = t0b;
    if (spec.voiced) {                       // tiếng rung nhỏ trong lúc ngậm hơi
      const t1 = t + 0.09;
      const env = ipaEnv(ctx, t, t1, 0.1, 0.02, 0.02); env.connect(out);
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 240; lp.Q.value = 0.7; lp.connect(env);
      ipaVoiceSrc(ctx, t, t1, 100).connect(lp);
      t = t1;
    } else t += 0.05;
    const bt = t + 0.026;                     // tiếng nổ khi mở chỗ cản
    const benv = ipaEnv(ctx, t, bt, 0.9, 0.003, 0.016); benv.connect(out);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass'; bp.frequency.value = spec.burst[0]; bp.Q.value = spec.burst[1];
    const bp2 = ctx.createBiquadFilter();
    bp2.type = spec.burst[0] > 3000 ? 'highpass' : 'peaking';
    bp2.frequency.value = spec.burst[0]; bp2.Q.value = 0.8; bp2.gain.value = 6;
    bp.connect(bp2); bp2.connect(benv);
    ipaNoiseSrc(ctx, t, bt).connect(bp);
    let end = bt;
    if (spec.asp) {                           // hơi bật ra sau tiếng nổ, màu sắc theo vị trí cản
      const at = bt + spec.asp;
      const aenv = ipaEnv(ctx, bt, at, 0.34, 0.008, 0.06); aenv.connect(out);
      const ap = ctx.createBiquadFilter();
      ap.type = 'bandpass'; ap.frequency.value = spec.burst[0] * 0.62; ap.Q.value = 0.7; ap.connect(aenv);
      ipaNoiseSrc(ctx, bt, at).connect(ap);
      end = at;
    } else if (!spec.noTail) {                // âm hữu thanh: ngân rất nhẹ sau khi bật
      const mt = bt + 0.08;
      const menv = ipaEnv(ctx, bt, mt, 0.22, 0.01, 0.05); menv.connect(out);
      const fm = ipaFormants(ctx, menv, [400, 1200, 2400], bt, mt);
      ipaVoiceSrc(ctx, bt, mt, 108).connect(fm);
      end = mt;
    }
    return end;
  };
  /* v193: phụ âm đứng một mình rất khó nghe ra (nhất là âm bật p, t, k: chỉ là một tiếng "tách").
     Tai người nhận ra phụ âm chủ yếu nhờ đoạn chuyển sang nguyên âm phía sau. Vì vậy mỗi phụ âm phát 2 lần:
     âm đứng riêng → nghỉ ngắn → ghép với nguyên âm /ɑː/ ("pa", "ba", "sa"…), có đoạn chuyển formant như giọng thật. */
  const VA = IPA_FMT['ɑː'];
  const mkTrans = (from, t, dur, amp, tr, f0) => {
    const t1 = t + dur;
    const env = ipaEnv(ctx, t, t1, amp, 0.012, 0.09); env.connect(out);
    const inp = ctx.createGain();
    const bw = [110, 105, 135], gn = [1, 0.72, 0.5];
    for (let i = 0; i < 3; i++) {
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass';
      bp.frequency.setValueAtTime(from[i], t); bp.frequency.linearRampToValueAtTime(VA[i], t + tr);
      bp.Q.value = VA[i] / bw[i];
      const g = ctx.createGain(); g.gain.value = gn[i]; inp.connect(bp); bp.connect(g); g.connect(env);
    }
    ipaVoiceSrc(ctx, t, t1, f0 || 108).connect(inp);
    return t1;
  };
  const mkFric2 = (sym2, t, dur, amp) => {   // tiếng xát có phổ gần giọng thật hơn (nhiều bộ lọc thay vì một)
    const sp = IPA_CONS_SPEC[sym2], FS = IPA_FRIC_SHAPE[sym2];
    if (!FS) return mkFric(sp, t, dur);
    const t1 = t + dur;
    const env = ipaEnv(ctx, t, t1, (amp || 1) * FS.amp, 0.035, 0.06); env.connect(out);
    let node = env;
    FS.f.forEach(([type, fr, q, gain]) => { const b = ctx.createBiquadFilter(); b.type = type; b.frequency.value = fr; b.Q.value = q; if (gain) b.gain.value = gain; b.connect(node); node = b; });
    ipaNoiseSrc(ctx, t, t1).connect(node);
    if (sp.voiced) {                          // âm hữu thanh: dây thanh rung rõ (trước đây quá nhỏ nên v, z, ð, ʒ nghe như f, s, θ, ʃ)
      const venv = ipaEnv(ctx, t, t1, 0.2, 0.03, 0.06); venv.connect(out);
      const fm = ipaFormants(ctx, venv, [260, 1300, 2400], t, t1);
      ipaVoiceSrc(ctx, t, t1, 112).connect(fm);
    }
    return t1;
  };
  const LOC = IPA_LOCUS[sym];
  const isolated = () => {
    if (C.t === 'stop') return mkStop(C, t0);
    if (C.t === 'fric') return mkFric2(sym, t0, 0.34);
    if (C.t === 'affr') {
      const t1 = mkStop(Object.assign({}, IPA_CONS_SPEC[C.stop], { asp: 0, voiced: IPA_CONS_SPEC[C.stop].voiced }), t0);
      return mkFric2(C.fric, t1, 0.22);
    }
    if (C.t === 'nasal') {
      const t1 = t0 + 0.36;
      const env = ipaEnv(ctx, t0, t1, 0.85, 0.04, 0.09); env.connect(out);
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900; lp.Q.value = 0.7; lp.connect(env);
      const fm = ipaFormants(ctx, lp, C.f, t0, t1);
      ipaVoiceSrc(ctx, t0, t1, 112).connect(fm);
      return t1;
    }
    if (C.t === 'glide') return mkVowel(C.from, 0.30, C.to);
    return mkVowel(C.f, C.dur);
  };
  const syllable = t => {                    // phụ âm + /ɑː/
    if (C.t === 'stop' || C.t === 'affr') {
      const st = C.t === 'stop' ? C : IPA_CONS_SPEC[C.stop];
      let e = mkStop(Object.assign({}, st, { asp: 0, noTail: true }), t);
      if (C.t === 'affr') e = mkFric2(C.fric, e - 0.06, 0.12, 0.8);
      if (!st.voiced) {                       // hơi bật (aspiration) mang màu của nguyên âm sắp tới
        const at = e + 0.065;
        const aenv = ipaEnv(ctx, e - 0.01, at, 0.28, 0.008, 0.02); aenv.connect(out);
        const fm = ipaFormants(ctx, aenv, LOC, e - 0.01, at, VA);
        ipaNoiseSrc(ctx, e - 0.01, at).connect(fm);
        e = at;
      }
      return mkTrans(LOC, e - 0.005, 0.32, 0.9, 0.05);
    }
    if (C.t === 'fric') {
      if (sym === 'h') {                     // h = hơi thở mang sẵn hình miệng của nguyên âm
        const t1 = t + 0.13;
        const env = ipaEnv(ctx, t, t1, 0.5, 0.03, 0.02); env.connect(out);
        const fm = ipaFormants(ctx, env, VA, t, t1);
        ipaNoiseSrc(ctx, t, t1).connect(fm);
        return mkTrans(VA, t1 - 0.01, 0.32, 0.9, 0.01);
      }
      const e = mkFric2(sym, t, 0.17, 0.85);
      return mkTrans(LOC, e - 0.03, 0.32, 0.9, 0.06);
    }
    if (C.t === 'nasal') {
      const t1 = t + 0.11;
      const env = ipaEnv(ctx, t, t1, 0.8, 0.03, 0.015); env.connect(out);
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900; lp.Q.value = 0.7; lp.connect(env);
      ipaVoiceSrc(ctx, t, t1, 110).connect(ipaFormants(ctx, lp, C.f, t, t1));
      return mkTrans(LOC, t1 - 0.01, 0.32, 0.9, 0.045);
    }
    // l, r, w, j: giữ vị trí lưỡi/môi một chút rồi lướt sang nguyên âm
    const hold = sym === 'r' ? 0.09 : 0.07;
    const t1 = t + hold;
    const env = ipaEnv(ctx, t, t1 + 0.02, 0.8, 0.03, 0.02); env.connect(out);
    ipaVoiceSrc(ctx, t, t1 + 0.02, 110).connect(ipaFormants(ctx, env, LOC, t, t1 + 0.02));
    return mkTrans(LOC, t1, 0.34, 0.9, sym === 'r' || sym === 'w' ? 0.11 : 0.08);
  };
  if (C && C.t !== 'vowel' || (C && (sym === 'l' || sym === 'r'))) {
    const e = isolated();
    return LOC ? syllable(e + 0.3) : e;
  }
  if (D && IPA_FMT[D[0]] && IPA_FMT[D[1]]) return mkVowel(IPA_FMT[D[0]], 0.46, IPA_FMT[D[1]]);
  if (V) return mkVowel(V, IPA_VLONG[sym] ? 0.46 : 0.26);
  return t0;
}
/* phát một âm; trả về false nếu máy không hỗ trợ Web Audio */
function ipaPlaySound(sym) {
  const ctx = ipaAC();
  if (!ctx) return false;
  try { ipaBuild(ctx, sym, ctx.currentTime + 0.03); return true; } catch (e) { return false; }
}

/* ---------- Phát qua thẻ <audio> (sửa lỗi im lặng trên iPhone) ----------
   iPhone tắt tiếng Web Audio khi gạt nút im lặng, và AudioContext hay bị "ngủ".
   Vì vậy mỗi âm được dựng sẵn bằng OfflineAudioContext (chỉ là tính toán, không cần chạm),
   đóng gói thành file WAV rồi phát qua một thẻ <audio> đã được mở khoá ở lần chạm đầu. */
const IPA_SILENT_WAV = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA=';
let ipaSnd = null, ipaUnlocked = false;
const ipaWavCache = {}, ipaWavPending = {};
function ipaAudioEl() {
  if (!ipaSnd) {
    ipaSnd = document.createElement('audio');
    ipaSnd.preload = 'auto';
    ipaSnd.setAttribute('playsinline', '');
    ipaSnd.setAttribute('webkit-playsinline', '');
  }
  return ipaSnd;
}
function ipaUnlock() {
  if (ipaUnlocked) return;
  ipaUnlocked = true;
  // v192: không ép iPhone sang "playback" nữa (làm micro thu im lặng ở lần nói sau)
  try {
    const a = ipaAudioEl();
    a.src = IPA_SILENT_WAV;
    const p = a.play(); if (p && p.catch) p.catch(() => {});
  } catch (e) {}
  try {
    const ctx = ipaAC();
    if (ctx) { const b = ctx.createBuffer(1, 1, ctx.sampleRate), src = ctx.createBufferSource(); src.buffer = b; src.connect(ctx.destination); src.start(0); }
  } catch (e) {}
}
['touchend', 'pointerdown', 'click'].forEach(ev => document.addEventListener(ev, ipaUnlock, { capture: true, passive: true }));
const IPA_TARGET_RMS = 0.11;   // ≈ −19 dB: ngang mức giọng đọc thường gặp của máy
function ipaWavBlob(buf, end) {
  const rate = buf.sampleRate, d = buf.getChannelData(0);
  let n = Math.min(d.length, Math.ceil((end + 0.06) * rate));
  while (n > 1 && Math.abs(d[n - 1]) < 0.0005) n--;
  n = Math.min(d.length, n + Math.floor(rate * 0.03));
  /* v179: cân bằng theo độ to tai nghe được (năng lượng trung bình của phần có tiếng), không theo đỉnh sóng —
     trước đây âm xát /s/, /z/ to hơn âm bật /ɡ/, /d/ khoảng 6–7 dB và cả 44 âm to hơn giọng đọc của máy.
     Giờ mọi âm cùng một mức, gần mức giọng đọc; đỉnh nhọn được nén mềm để không vỡ tiếng. */
  const FR = Math.max(1, Math.round(rate * 0.02)); let es = 0, ec = 0;
  for (let i = 0; i < n; i += FR) { let e = 0; const m = Math.min(n, i + FR); for (let k = i; k < m; k++) e += d[k] * d[k]; e /= (m - i); if (e > 1e-6) { es += e; ec++; } }
  const rms = ec ? Math.sqrt(es / ec) : 0;
  const amp = rms > 0 ? Math.min(8, IPA_TARGET_RMS / rms) : 1;
  const lim = x => { const a = Math.abs(x); return a <= 0.6 ? x : Math.sign(x) * (0.6 + 0.38 * Math.tanh((a - 0.6) / 0.38)); };
  const ab = new ArrayBuffer(44 + n * 2), v = new DataView(ab);
  const w = (o, str) => { for (let i = 0; i < str.length; i++) v.setUint8(o + i, str.charCodeAt(i)); };
  w(0, 'RIFF'); v.setUint32(4, 36 + n * 2, true); w(8, 'WAVE'); w(12, 'fmt ');
  v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
  v.setUint32(24, rate, true); v.setUint32(28, rate * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true);
  w(36, 'data'); v.setUint32(40, n * 2, true);
  for (let i = 0; i < n; i++) { const x = Math.max(-1, Math.min(1, lim(d[i] * amp))); v.setInt16(44 + i * 2, x < 0 ? x * 0x8000 : x * 0x7fff, true); }
  return new Blob([ab], { type: 'audio/wav' });
}
function ipaRender(sym) {
  if (ipaWavCache[sym]) return Promise.resolve(ipaWavCache[sym]);
  if (ipaWavPending[sym]) return ipaWavPending[sym];
  const OC = window.OfflineAudioContext || window.webkitOfflineAudioContext;
  if (!OC || !window.URL || !URL.createObjectURL) return Promise.reject(new Error('no offline'));
  let oc = null;
  for (const rate of [44100, 48000]) { try { oc = new OC(1, Math.ceil(rate * 2.2), rate); break; } catch (e) {} }
  if (!oc) return Promise.reject(new Error('no offline'));
  let end;
  try { end = ipaBuild(oc, sym, 0.02); } catch (e) { return Promise.reject(e); }
  const pr = new Promise((res, rej) => {
    oc.oncomplete = e => res(e.renderedBuffer);
    try { const r = oc.startRendering(); if (r && r.then) r.then(res, rej); } catch (e) { rej(e); }
  }).then(buf => {
    const url = URL.createObjectURL(ipaWavBlob(buf, end));
    ipaWavCache[sym] = url; delete ipaWavPending[sym];
    return url;
  });
  ipaWavPending[sym] = pr;
  pr.catch(() => { delete ipaWavPending[sym]; });
  return pr;
}
function ipaPlayWav(sym) {
  const OC = window.OfflineAudioContext || window.webkitOfflineAudioContext;
  if (!OC || !window.Blob) return false;
  const a = ipaAudioEl();
  const go = url => {
    try { a.pause(); } catch (e) {}
    a.src = url;
    const p = a.play();
    if (p && p.catch) p.catch(() => { try { ipaPlaySound(sym) || prSay(IPA_SAY[sym] || ipaWords(sym)[0], Math.min(prRate, 0.75)); } catch (e) {} });
  };
  if (ipaWavCache[sym]) { go(ipaWavCache[sym]); return true; }
  ipaRender(sym).then(go, () => { try { ipaPlaySound(sym) || prSay(IPA_SAY[sym] || ipaWords(sym)[0], Math.min(prRate, 0.75)); } catch (e) {} });
  return true;
}
/* dựng sẵn cả 44 âm khi máy rảnh để bấm là nghe ngay */
function ipaPrerender() {
  const list = IPA_SOUNDS.map(x => x[0]).filter(x => !IPA_CONS_SAY[x] && !IPA_VID[x]);
  let i = 0;
  const step = () => { if (i >= list.length) return; ipaRender(list[i++]).catch(() => {}).then(() => setTimeout(step, 30)); };
  setTimeout(step, 400);
}

/* v195: video giáo viên đọc mẫu — loạt "The Sounds of English" của BBC Learning English trên YouTube (nhúng từ kênh gốc).
   IPA_VID_AT: giây bắt đầu – kết thúc của đoạn giáo viên đọc âm (điền dần; chưa có thì phát từ đầu). */
const IPA_VID = {
  'ɪ': 'TNFKG0yvDx4', 'iː': 'RZmGzSb-6OM', 'ʊ': 'eJ7dM_LU9t4', 'uː': 'mnKEGLuEzV4', 'e': 'hLN1cdSTDo8', 'æ': 'qVhaIHk88a8',
  'ə': 'wg0P0oYkniE', 'ɜː': 'zSJJWHymEPw', 'ɒ': 'MAk-XtHsyzM', 'ɔː': 'KHllC40_u1Q', 'ʌ': 'PZwKFFp7V50', 'ɑː': 'uDHMuMQdBNw',
  'eɪ': '5FMPlqlFt9g', 'aɪ': 'Hb8COxAtl14', 'ɔɪ': 'lFRrEI85IcM', 'aʊ': '9WDnVMQIaTs', 'əʊ': 'r1BRCG0P9C8', 'ɪə': 'vC0h4S0YPJc',
  'eə': '0J7-5maJJIk', 'ʊə': 'nHSqluHrD-U',
  p: 'AZRREr7DqqM', b: 'yP7aCKO6bTE', t: '0T1QYByMxrs', d: 'qA5ZYC89oso', k: 'd1jyIpAmLe8', 'ɡ': '9eAqj9EfeK0',
  f: 'vE12RFyH-hY', v: 'mO04G0v5a_c', 'θ': 'b4Aj3k65HSo', 'ð': 'tu1t3Fn5Lw8', s: 'QtH3vRXmvvo', z: 'o1ZvmX80t7Q',
  'ʃ': 'NF92RdZC6wE', 'ʒ': 'bTxeAiBF61I', 'tʃ': 'PykxZ5kkrjs', 'dʒ': '0IeQmGdo7gQ', m: '0Te4Us8Tsv8', n: 'qkgucMjv4T0',
  'ŋ': 'rgWse3tloTw', h: 'DM_gN6imoC8', l: 'CwWLgmMk0Z0', r: 'Lxuo14hjP_8', w: 'HzhPB1hXG-o', j: '_Fi9E6Yw-qg'
};
const IPA_VID_AT = {};   // ví dụ: 'θ': [12, 20]
function ipaVideoEl(sym) {
  const id = IPA_VID[sym]; if (!id) return null;
  const sec = prEl('div', 'ipa-d-sec ipa-vid');
  sec.appendChild(prEl('div', 'ipa-d-h', '🎬 Xem giáo viên đọc mẫu /' + sym + '/'));
  const box = prEl('button', 'ipa-vid-box'); box.type = 'button'; box.setAttribute('aria-label', 'Phát video âm /' + sym + '/');
  const img = document.createElement('img'); img.alt = ''; img.loading = 'lazy'; img.onerror = () => img.remove(); img.src = 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg';
  box.appendChild(img); box.appendChild(prEl('span', 'ipa-vid-play', '▶'));
  const at = IPA_VID_AT[sym];
  box.appendChild(prEl('span', 'ipa-vid-len', at ? Math.round(at[1] - at[0]) + ' giây' : 'Video'));
  box.addEventListener('click', () => {
    if (!navigator.onLine) { note.textContent = 'Cần có mạng để xem video.'; return; }
    try { prSeqStop(); speechSynthesis.cancel(); } catch (e) {}
    const q = 'autoplay=1&playsinline=1&rel=0&modestbranding=1' + (at ? '&start=' + at[0] + '&end=' + at[1] : '');
    const f = document.createElement('iframe');
    f.className = 'ipa-vid-frame'; f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?' + q;
    f.title = 'Video phát âm /' + sym + '/'; f.allow = 'autoplay; encrypted-media; picture-in-picture'; f.allowFullscreen = true;
    f.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    f.dataset.sym = sym;
    box.replaceWith(f);
  });
  sec.appendChild(box);
  const note = prEl('div', 'ipa-vid-src');
  note.appendChild(document.createTextNode('Nguồn: BBC Learning English · '));
  const a = document.createElement('a'); a.href = 'https://www.youtube.com/watch?v=' + id; a.target = '_blank'; a.rel = 'noopener'; a.textContent = 'xem trên YouTube ↗';
  note.appendChild(a); sec.appendChild(note);
  return sec;
}
function ipaShow(sym, silent) {
  const sh = document.getElementById('ipasheet');
  const idx = IPA_SOUNDS.findIndex(s => s[0] === sym);
  if (!sh || idx < 0) return;
  const s = IPA_SOUNDS[idx];
  const body = document.getElementById('ipa-body');
  body.innerHTML = '';
  document.getElementById('ipa-title').textContent = ipaTypeLabel(s);
  const top = prEl('div', 'ipa-d-top');
  const symBtn = prEl('button', 'ipa-d-sym', '/' + s[0] + '/');
  symBtn.setAttribute('aria-label', 'Nghe âm /' + s[0] + '/');
  symBtn.title = 'Nghe âm /' + s[0] + '/';
  symBtn.appendChild(prEl('span', 'ipa-say', IPA_VID[s[0]] ? '▶ xem video' : '▶ nghe âm'));
  symBtn.addEventListener('click', () => { prSeqStop(); ipaSoundOrSay(s[0]); });
  top.appendChild(symBtn);
  const meta = prEl('div', 'ipa-d-meta');
  meta.appendChild(prEl('div', 'ipa-d-name', 'Gần giống: ' + s[2]));
  const tags = prEl('div', 'ipa-d-tags');
  if (s[1] === 'cons') {
    tags.appendChild(prEl('span', 'vc-pos', (s[6][0] === 'vô thanh' ? '🔇 ' : '🔊 ') + s[6][0]));
    if (s[6][1]) {
      const pb = prEl('button', 'vc-pos ipa-pair', 'Cặp với /' + s[6][1] + '/ →');
      pb.addEventListener('click', () => ipaShow(s[6][1]));
      tags.appendChild(pb);
    }
  } else {
    tags.appendChild(prEl('span', 'vc-pos', s[1] === 'diph' ? 'nguyên âm đôi' : 'nguyên âm ' + s[6]));
    if (s[1] === 'mono') {
      const mate = IPA_SOUNDS[idx % 2 ? idx - 1 : idx + 1];   // short/long pairs sit next to each other
      if (mate && mate[1] === 'mono') {
        const pb = prEl('button', 'vc-pos ipa-pair', 'So với /' + mate[0] + '/ →');
        pb.addEventListener('click', () => ipaShow(mate[0]));
        tags.appendChild(pb);
      }
    }
  }
  meta.appendChild(tags);
  top.appendChild(meta);
  body.appendChild(top);
  ipaStepListen(s, body);
  { const vd = ipaVideoEl(s[0]); if (vd) body.appendChild(vd); }
  const how = prEl('div', 'ipa-d-sec');
  const hh = prEl('div', 'ipa-d-h', '👄 Khẩu hình: cách đặt lưỡi, môi và luồng hơi');
  how.appendChild(hh);
  const mz = ipaMouthEl(s[0]);
  if (mz) { how.appendChild(mz); const rp = prEl('button', 'sd-link mz-replay', '↻ Xem lại chuyển động'); rp.addEventListener('click', () => { const n2 = ipaMouthEl(s[0]); if (n2) { how.querySelector('.mz-wrap').replaceWith(n2); } }); how.appendChild(rp); }
  how.appendChild(prEl('p', null, s[3]));
  body.appendChild(how);
  body.appendChild(prEl('div', 'pr-set-tip', '💡 ' + s[4]));
  body.appendChild(prEl('div', 'ipa-d-h p2-step-h', 'Bước 2 · Nghe từ ví dụ và bắt chước'));
  const card = prEl('div', 'tense-card vc-card ipa-d-ex');
  s[5].forEach(([w, ipa, vi]) => {
    const plain = ipaPlain(w);
    const row = prEl('div', 'vc-row pr-row');
    const main = prEl('div', 'vc-main');
    main.appendChild(ipaWordEl(w, 'vc-word'));
    const ip = prEl('div'); ip.appendChild(ipaIpaEl(ipa, s[0])); main.appendChild(ip);
    main.appendChild(prEl('div', 'vc-mean', vi));
    const btns = prEl('div', 'vc-btns');
    btns.appendChild(prBtn('▶', 'Nghe ' + plain, () => { prSay(plain); ipaMark(s[0], 'pr'); }));
    btns.appendChild(prBtn('🐢', 'Nghe chậm ' + plain, () => { prSay(plain, 0.5); ipaMark(s[0], 'pr'); }, true));
    row.appendChild(main); row.appendChild(btns);
    card.appendChild(row);
  });
  body.appendChild(card);
  body.appendChild(prSpeakBox(s[5].map(x => ipaPlain(x[0])).join(', '), pct => ipaMark(s[0], 'sp', pct)));
  ipaStepContrast(s, body);
  // how this sound is spelled, and sentences to practise it
  const spell = IPA_SPELL[s[0]];
  if (spell) {
    const viText = /[àáâãèéêìíòóôõùúăđĩũơưạảấầẩậắằẳẵặẹẻẽếềểệỉịọỏốồổộớờởợụủứừửữựỳỵỷỹ(]/i;
    const sec = prEl('div', 'ipa-d-sec');
    sec.appendChild(prEl('div', 'ipa-d-h', '🔤 Âm /' + s[0] + '/ viết thế nào'));
    const box = prEl('div', 'tense-card ipa-sp');
    spell.sp.forEach(([lab, words]) => {
      const row = prEl('div', 'ipa-sp-row');
      row.appendChild(prEl('span', 'ipa-sp-lab', lab));
      const ws = prEl('div', 'ipa-sp-words');
      words.split(' · ').forEach(w => {
        if (viText.test(ipaPlain(w))) { ws.appendChild(prEl('span', 'ipa-sp-note', w)); return; }
        const plain = ipaPlain(w);
        const chip = prEl('button', 'ipa-sp-w');
        chip.appendChild(ipaWordEl(w, 'ipa-sp-wtxt'));
        chip.setAttribute('aria-label', 'Nghe ' + plain);
        chip.addEventListener('click', () => { prSeqStop(); prSay(plain); });
        ws.appendChild(chip);
      });
      row.appendChild(ws);
      box.appendChild(row);
    });
    sec.appendChild(box);
    body.appendChild(sec);

    const sec2 = prEl('div', 'ipa-d-sec');
    sec2.appendChild(prEl('div', 'ipa-d-h', 'Bước 4 · Luyện trong câu: âm /' + s[0] + '/'));
    const box2 = prEl('div', 'tense-card ipa-sp');
    spell.s.forEach((st, n) => {
      const row = prEl('div', 'ipa-sent');
      row.appendChild(prEl('span', 'ipa-sent-n', String(n + 1)));
      row.appendChild(ipaWordEl(st, 'ipa-sent-t'));
      const b = prEl('div', 'ipa-sent-b');
      b.appendChild(prBtn('▶', 'Nghe câu ' + (n + 1), () => prSay(ipaPlain(st))));
      b.appendChild(prBtn('🐢', 'Nghe chậm câu ' + (n + 1), () => prSay(ipaPlain(st), 0.5), true));
      row.appendChild(b);
      box2.appendChild(row);
    });
    sec2.appendChild(box2);
    sec2.appendChild(prSpeakBox(ipaPlain(spell.s[0]), pct => ipaMark(s[0], 'sp', pct)));
    body.appendChild(sec2);
  }
  ipaStepTest(s, body);

  const acts = prEl('div', 'ipa-d-acts');
  const k = ipaKey(s[0]);
  const ck = prEl('button', 'btn-ghost ipa-d-check' + (prDone.has(k) ? ' on' : ''), prDone.has(k) ? '✓ Đã tự đánh dấu đã luyện' : '✓ Tự đánh dấu đã luyện');
  ck.addEventListener('click', () => {
    if (prDone.has(k)) prDone.delete(k); else prDone.add(k);
    prDoneSave();
    ck.classList.toggle('on', prDone.has(k)); ck.textContent = prDone.has(k) ? '✓ Đã tự đánh dấu đã luyện' : '✓ Tự đánh dấu đã luyện';
    ipaRefreshTile(s[0]);
  });
  acts.appendChild(ck);
  body.appendChild(acts);
  // previous / next sound
  const nav = prEl('div', 'ipa-d-nav');
  const pv = IPA_SOUNDS[idx - 1], nv = IPA_SOUNDS[idx + 1];
  const pbtn = prEl('button', 'btn-ghost', pv ? '← /' + pv[0] + '/' : '←'); pbtn.disabled = !pv;
  const nbtn = prEl('button', 'btn-ghost', nv ? '/' + nv[0] + '/ →' : '→'); nbtn.disabled = !nv;
  if (pv) pbtn.addEventListener('click', () => ipaShow(pv[0]));
  if (nv) nbtn.addEventListener('click', () => ipaShow(nv[0]));
  nav.appendChild(pbtn); nav.appendChild(prEl('span', 'ipa-d-pos', (idx + 1) + '/' + IPA_SOUNDS.length)); nav.appendChild(nbtn);
  body.appendChild(nav);
  document.querySelectorAll('.vsheet:not([hidden])').forEach(x => { if (x !== sh) x.hidden = true; });
  sh.hidden = false; document.body.classList.add('vsheet-open');
  const p = sh.querySelector('.vsheet-panel'); if (p) p.scrollTop = 0;
  if (!silent && !IPA_VID[s[0]]) ipaSoundOrSay(s[0]);
}
/* v196: rời khỏi âm (đóng khung, chuyển tab, ẩn app) → dừng video ngay, trả lại ảnh xem trước */
function ipaVidStop() {
  document.querySelectorAll('.ipa-vid-frame').forEach(f => {
    try { f.src = 'about:blank'; } catch (e) {}
    const fresh = ipaVideoEl(f.dataset.sym || '');
    const box = fresh && fresh.querySelector('.ipa-vid-box');
    if (box) f.replaceWith(box); else f.remove();
  });
}
(() => {
  const sh = document.getElementById('ipasheet');
  if (!sh) return;
  try { new MutationObserver(() => { if (sh.hidden) ipaVidStop(); }).observe(sh, { attributes: true, attributeFilter: ['hidden'] }); } catch (e) {}
  try { new MutationObserver(ipaVidStop).observe(document.body, { attributes: true, attributeFilter: ['data-grp', 'data-sec'] }); } catch (e) {}
  document.addEventListener('click', e => { if (e.target.closest && e.target.closest('nav.tabbar button, .sec-bar .sec-chip')) ipaVidStop(); }, true);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') ipaVidStop(); });
  window.addEventListener('pagehide', ipaVidStop);
  const close = () => { sh.hidden = true; document.body.classList.remove('vsheet-open'); };
  sh.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !sh.hidden) close(); });
})();

/* ---------- Nối âm (connected speech) ----------
   Ký hiệu trong cột "cách nối":  ‿ = đọc liền   {w} = âm chèn thêm   [t] = âm bị nuốt (không đọc)
   Mỗi ví dụ: [cụm từ, cách nối, phiên âm khi đọc liền, nghĩa, ghi chú, nghe như] — tự soạn
   sent: câu ví dụ [câu, cách nối, nghĩa] */
/* LINK_RULES: xem file dữ liệu */

/* Câu luyện đoán chỗ nối: [câu, {vị trí khe: loại}] — khe i nằm giữa từ i và từ i+1 */
const LINK_QUIZ = [
  ['Turn off the light.', { 0: 'cv' }],
  ['Pick it up, please.', { 0: 'cv', 1: 'cv' }],
  ['I am at home.', { 0: 'j', 1: 'cv' }],
  ['Go out and have fun.', { 0: 'w', 1: 'cv' }],
  ['Did you see it?', { 0: 'dʒ', 2: 'j' }],
  ['Come in and sit down.', { 0: 'cv', 1: 'cv' }],
  ['Nice to meet you.', { 2: 'tʃ' }],
  ['Where is my black cat?', { 0: 'r', 3: 'same' }],
  ['I miss you so much.', { 1: 'ʃ' }],
  ['Look at all of us.', { 0: 'cv', 1: 'cv', 2: 'cv', 3: 'cv' }],
  ['She is very busy.', { 0: 'j' }],
  ['We stayed in a hotel.', { 1: 'cv', 2: 'cv' }],
  ['Don\'t you like it?', { 0: 'tʃ', 2: 'cv' }],
  ['Some money is gone.', { 0: 'same', 1: 'j' }],
  ['Two eggs and a coffee.', { 0: 'w', 1: 'cv', 2: 'cv' }],
  ['It was far away.', { 2: 'r' }],
  ['Can I have an egg?', { 0: 'cv', 2: 'cv', 3: 'cv' }],
  ['Do it again.', { 0: 'w', 1: 'cv' }],
  ['The bus stop is near.', { 1: 'same', 2: 'cv' }],
  ['Would you like a cup of tea?', { 0: 'dʒ', 2: 'cv', 4: 'cv' }]
];
const LINK_TYPE = {
  cv: 'phụ âm cuối nối sang nguyên âm', w: 'chèn /w/ giữa hai nguyên âm', j: 'chèn /j/ giữa hai nguyên âm',
  r: 'đọc lại /r/ cuối (giọng Anh)', same: 'hai phụ âm giống nhau, đọc một lần',
  'tʃ': 't + y → /tʃ/', 'dʒ': 'd + y → /dʒ/', 'ʃ': 's + y → /ʃ/'
};
const LINK_SET = { id: 'link', words: LINK_RULES.reduce((a, r) => a.concat(r.ex.map(x => [x[0]])), []) };
const LINK_BEST_KEY = 'hoc-tieng-anh-link-best';
const linkBest = () => { try { return parseInt(localStorage.getItem(LINK_BEST_KEY), 10) || 0; } catch (e) { return 0; } };

/* vẽ "turn‿off", "go‿{w}‿out", "las[t] night" thành chữ có tô màu */
function linkMarkEl(src) {
  const el = prEl('div', 'vc-word lk-show');
  const re = /(‿)|\{([^}]*)\}|\[([^\]]*)\]/g;
  let i = 0, m;
  while ((m = re.exec(src))) {
    if (m.index > i) el.appendChild(document.createTextNode(src.slice(i, m.index)));
    if (m[1]) el.appendChild(prEl('span', 'lk-mark', '‿'));
    else if (m[2] != null) el.appendChild(prEl('span', 'lk-ins', m[2]));
    else el.appendChild(prEl('span', 'lk-drop', m[3]));
    i = re.lastIndex;
  }
  if (i < src.length) el.appendChild(document.createTextNode(src.slice(i)));
  return el;
}
const linkSlow = t => prSay(t.replace(/[?.!,]/g, '').split(/\s+/).join(', '), 0.6);   // tách từng từ
const linkFast = t => prSay(t, 0.95);                                                  // nối tự nhiên

function prLinkCard() {
  const n = LINK_SET.words.length, got = prSetGot(LINK_SET), best = linkBest();
  const b = prEl('button', 'vc-topic ipa-entry lk-entry' + (got === n ? ' done' : ''));
  b.id = 'link-entry';
  const top = prEl('span', 'ipa-entry-top');
  top.appendChild(prEl('span', 'ipa-entry-sym lk-entry-sym', 'a‿b'));
  const tx = prEl('span', 'ipa-entry-tx');
  tx.appendChild(prEl('span', 'vc-tvi', 'Nối âm khi nói'));
  tx.appendChild(prEl('span', 'vc-ten', `${LINK_RULES.length} quy tắc · ${n} cụm mẫu · ${LINK_QUIZ.length} câu luyện`));
  top.appendChild(tx);
  b.appendChild(top);
  b.appendChild(prEl('span', 'vc-tmeta', (got ? `${got}/${n} cụm đã luyện` : 'Vì sao người bản xứ nói nghe "dính chữ"') + (best ? ` · đoán đúng ${best}/${LINK_QUIZ.length} câu` : '')));
  const bar = prEl('span', 'vc-bar'); const fill = prEl('span'); fill.style.width = (got / n * 100) + '%'; bar.appendChild(fill); b.appendChild(bar);
  b.addEventListener('click', () => { prOpenLink(); try { document.getElementById('page-pron').scrollIntoView({ block: 'start' }); } catch (e) {} });
  return b;
}

function prOpenLink(startQuiz) {
  prSeqStop();
  prOpenSet = LINK_SET;
  pronHome.hidden = true; pronSets.hidden = true; if (pronMore) pronMore.hidden = true;
  const v = pronSetView;
  if (pronResult.parentNode === v) pronSets.parentNode.insertBefore(pronResult, pronSets);
  pronResult.innerHTML = '';
  v.innerHTML = ''; v.hidden = false;
  const back = prEl('button', 'gr-back', '← Tất cả bài luyện');
  back.addEventListener('click', () => { prShowHome(); try { document.getElementById('page-pron').scrollIntoView({ block: 'start' }); } catch (e) {} });
  v.appendChild(back);
  const head = prEl('div', 'vc-head');
  head.appendChild(prEl('div', 'vc-head-icon ipa-head-icon lk-head-icon', 'a‿b'));
  const hm = prEl('div', 'vc-head-meta');
  hm.appendChild(prEl('div', 'vc-head-vi', 'Nối âm khi nói'));
  hm.appendChild(prEl('div', 'vc-head-en', 'Connected speech · giọng Anh-Anh'));
  const pr = prEl('div', 'vc-head-prog'); pr.id = 'pr-set-prog'; hm.appendChild(pr);
  head.appendChild(hm); v.appendChild(head);
  prSetProg(LINK_SET);
  v.appendChild(prEl('div', 'p2-note p2-lknote', 'Các hiện tượng nối âm, đọc yếu (weak forms), nuốt âm (elision) và đồng hóa (assimilation) là cách phát âm thường gặp khi nói tự nhiên, không phải quy tắc bắt buộc với mọi người nói hay mọi giọng địa phương. Phần trọng âm câu và ngữ điệu nằm ở mục “Trọng âm và ngữ điệu”.'));

  // tab con: học quy tắc / luyện đoán
  const tabs = prEl('div', 'colloc-chips lk-tabs');
  const tLearn = prEl('button', 'colloc-chip', '📘 Quy tắc · ' + LINK_RULES.length);
  const tQuiz = prEl('button', 'colloc-chip', '🎯 Luyện đoán chỗ nối · ' + LINK_QUIZ.length);
  tabs.appendChild(tLearn); tabs.appendChild(tQuiz);
  v.appendChild(tabs);
  const body = prEl('div', 'lk-body');
  v.appendChild(body);
  const show = q => {
    tLearn.classList.toggle('active', !q); tQuiz.classList.toggle('active', !!q);
    prSeqStop(); body.innerHTML = '';
    if (q) linkQuiz(body); else linkLearn(body);
  };
  tLearn.addEventListener('click', () => show(false));
  tQuiz.addEventListener('click', () => show(true));
  show(!!startQuiz);
}

/* nghe tách từng từ rồi nghe nối, để so sánh */
function linkCompare(t) {
  const u = linkSlow(t);
  let done = false;
  const go = () => { if (done) return; done = true; setTimeout(() => linkFast(t), 450); };
  try { if (u && u.addEventListener) { u.addEventListener('end', go); u.addEventListener('error', go); } } catch (e) {}
  setTimeout(go, Math.max(1800, t.split(/\s+/).length * 900));
}
function linkRow(w, mark, ipa, vi, note, sounds, isSent) {
  const row = prEl('div', 'vc-row pr-row lk-row' + (isSent ? ' lk-sent' : '') + (!isSent && prDone.has('link|' + w) ? ' learned' : ''));
  const main = prEl('div', 'vc-main pr-tap');
  main.setAttribute('role', 'button'); main.tabIndex = 0;
  main.title = 'Chạm để nghe so sánh: tách từ → nối';
  main.appendChild(linkMarkEl(mark));
  if (sounds) {
    const sl = prEl('div', 'lk-sounds');
    sl.appendChild(prEl('span', 'lk-sounds-k', 'Nghe như'));
    sl.appendChild(linkMarkEl(sounds)).className = 'lk-sounds-v';
    main.appendChild(sl);
  }
  if (ipa) main.appendChild(prEl('div', 'vc-ipa pr-ipa', ipa));
  const mean = prEl('div', 'vc-mean', vi);
  if (note) { mean.appendChild(document.createTextNode(' · ')); mean.appendChild(prEl('span', 'lk-note', note)); }
  main.appendChild(mean);
  main.addEventListener('click', () => { prSeqStop(); linkCompare(w); });
  const btns = prEl('div', 'vc-btns lk-btns');
  btns.appendChild(prBtn('🐢', 'Nghe tách từng từ: ' + w, () => linkSlow(w), true));
  btns.appendChild(prBtn('▶', 'Nghe nối tự nhiên: ' + w, () => linkFast(w)));
  if (!isSent) btns.appendChild(prCheck(LINK_SET, w, row));
  row.appendChild(main); row.appendChild(btns);
  return row;
}

function linkLearn(body, ruleId) {
  body.innerHTML = '';
  const r = ruleId && LINK_RULES.find(x => x.id === ruleId);
  if (r) return linkRulePage(body, r);

  body.appendChild(prEl('div', 'pr-set-tip pr-set-tip2',
    'Người bản xứ không đọc từng từ rời rạc mà nối chúng thành một dòng âm — vì vậy nhiều câu nghe như "một từ dài" dù bạn biết hết từ. Chọn một quy tắc bên dưới để học.'));

  // lưới quy tắc, giống lưới chủ đề bên tab Vocabulary
  const grid = prEl('div', 'vc-grid lk-grid');
  LINK_RULES.forEach((x, i) => {
    const n = x.ex.length, got = x.ex.filter(e => prDone.has('link|' + e[0])).length;
    const b = prEl('button', 'vc-topic lk-topic' + (got === n ? ' done' : ''));
    b.appendChild(prEl('span', 'vc-ticon', x.icon));
    b.appendChild(prEl('span', 'vc-tvi', (i + 1) + '. ' + x.title));
    b.appendChild(linkMarkEl(x.short)).className = 'vc-ten lk-topic-ex';
    b.appendChild(prEl('span', 'vc-tmeta', got ? `${got}/${n} cụm đã luyện` : `${n} cụm · ${(x.sent || []).length} câu`));
    const bar = prEl('span', 'vc-bar'); const fill = prEl('span'); fill.style.width = (got / n * 100) + '%'; bar.appendChild(fill); b.appendChild(bar);
    b.addEventListener('click', () => { prSeqStop(); linkLearn(body, x.id); linkScroll(); });
    grid.appendChild(b);
  });
  body.appendChild(grid);

  // cách luyện + chú thích ký hiệu
  const how = prEl('div', 'tense-card lk-steps');
  how.appendChild(prEl('div', 'lk-ov-h', 'Cách luyện mỗi cụm (3 bước)'));
  [['🐢', 'Nghe tách từng từ để biết câu gồm những từ nào.'],
   ['‿', 'Nhìn dòng "Nghe như" — đọc chậm phần dính liền như một từ.'],
   ['▶', 'Nghe nối tự nhiên rồi nói theo đúng tốc độ, lặp lại 3 lần. Chạm vào chữ để nghe so sánh liền hai kiểu.']].forEach(([k, t], i) => {
    const row = prEl('div', 'lk-step');
    row.appendChild(prEl('span', 'lk-step-n', String(i + 1)));
    row.appendChild(prEl('span', 'lk-step-k', k));
    row.appendChild(prEl('span', null, t));
    how.appendChild(row);
  });
  how.appendChild(linkLegend());
  body.appendChild(how);

  const nb = prEl('button', 'btn-primary vc-next-unit', '🎯 Luyện đoán chỗ nối →');
  nb.addEventListener('click', () => prOpenLink(true));
  body.appendChild(nb);
}
function linkLegend() {
  const legend = prEl('div', 'lk-legend');
  [['‿', 'lk-mark', 'đọc liền'], ['w', 'lk-ins', 'âm chèn thêm'], ['t', 'lk-drop', 'âm bị nuốt (không đọc)']].forEach(([s, c, t]) => {
    const it = prEl('span', 'lk-legend-it'); it.appendChild(prEl('span', c, s)); it.appendChild(document.createTextNode(' ' + t)); legend.appendChild(it);
  });
  return legend;
}
const linkScroll = () => { try { const t = document.querySelector('.lk-tabs'); if (t) t.scrollIntoView({ block: 'start' }); } catch (e) {} };

/* trang riêng của một quy tắc, giống trang một chủ đề bên tab Vocabulary */
function linkRulePage(body, r) {
  const ri = LINK_RULES.indexOf(r);
  const back = prEl('button', 'gr-back lk-back', '← Tất cả quy tắc');
  back.addEventListener('click', () => { prSeqStop(); linkLearn(body); linkScroll(); });
  body.appendChild(back);

  const n = r.ex.length;
  const head = prEl('div', 'vc-head lk-rhead');
  head.appendChild(prEl('div', 'vc-head-icon', r.icon));
  const hm = prEl('div', 'vc-head-meta');
  hm.appendChild(prEl('div', 'vc-head-vi', (ri + 1) + '. ' + r.title));
  hm.appendChild(prEl('div', 'vc-head-en', `${r.sub} · ${n} cụm · ${(r.sent || []).length} câu`));
  const pr = prEl('div', 'vc-head-prog'); hm.appendChild(pr);
  head.appendChild(hm); body.appendChild(head);
  const prog = () => {
    const got = r.ex.filter(e => prDone.has('link|' + e[0])).length;
    pr.innerHTML = '';
    pr.appendChild(prEl('span', null, `Đã luyện ${got}/${n}`));
    const bar = prEl('span', 'vc-bar'); const fill = prEl('span'); fill.style.width = (got / n * 100) + '%'; bar.appendChild(fill); bar.style.flex = '1'; pr.appendChild(bar);
    prSetProg(LINK_SET);
  };
  prog();

  const exp = prEl('div', 'tense-card lk-rule lk-rule-open');
  exp.appendChild(prEl('p', 'lk-how', r.how));
  const info = prEl('div', 'lk-info');
  [['📌 Khi nào', r.when], ['⚠️ Lỗi hay gặp', r.mistake], ['💡 Mẹo', r.tip]].forEach(([k, t]) => {
    const b = prEl('div', 'lk-info-r');
    b.appendChild(prEl('span', 'lk-info-k', k));
    b.appendChild(prEl('span', 'lk-info-v', t));
    info.appendChild(b);
  });
  exp.appendChild(info);
  exp.appendChild(linkLegend());
  body.appendChild(exp);

  const list = prEl('div', 'tense-card vc-card lk-list');
  const acts = prEl('div', 'pr-acts lk-acts');
  acts.appendChild(prEl('span', 'lk-sec', 'Cụm từ mẫu · ' + n));
  const all = prEl('button', 'ls-slow', '▶ Nghe lần lượt');
  acts.appendChild(all);
  list.appendChild(acts);
  const rows = [], texts = [];
  r.ex.forEach(x => {
    const row = linkRow(x[0], x[1], x[2], x[3], x[4], x[5]);
    const ck = row.querySelector('.vc-check'); if (ck) ck.addEventListener('click', () => setTimeout(prog, 0));
    list.appendChild(row); rows.push(row); texts.push(x[0]);
  });
  all.addEventListener('click', () => prSeqPlay(rows, texts, all));
  if (r.sent && r.sent.length) {
    list.appendChild(prEl('div', 'lk-sec lk-sec2', 'Trong câu'));
    r.sent.forEach(s => list.appendChild(linkRow(s[0], s[1], '', s[2], '', '', true)));
  }
  body.appendChild(list);

  const nx = LINK_RULES[ri + 1];
  const nb = prEl('button', 'btn-primary vc-next-unit', nx ? `Quy tắc tiếp: ${nx.icon} ${nx.title} →` : '🎯 Luyện đoán chỗ nối →');
  nb.addEventListener('click', () => { prSeqStop(); if (nx) { linkLearn(body, nx.id); linkScroll(); } else prOpenLink(true); });
  body.appendChild(nb);
}

function linkQuiz(body) {
  const order = LINK_QUIZ.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  let pos = 0, score = 0;
  body.appendChild(prEl('div', 'pr-set-tip pr-set-tip2',
    'Nghe câu, rồi chạm vào các chấm ◦ giữa hai từ ở chỗ bạn nghĩ có nối âm. Bấm "Kiểm tra" để xem đáp án và lý do.'));
  const card = prEl('div', 'tense-card lk-quiz');
  body.appendChild(card);
  const draw = () => {
    card.innerHTML = '';
    if (pos >= order.length) {
      const best = Math.max(linkBest(), score);
      try { localStorage.setItem(LINK_BEST_KEY, String(best)); } catch (e) {}
      card.appendChild(prEl('div', 'lk-done-big', `${score}/${order.length}`));
      card.appendChild(prEl('div', 'lk-done-t', score === order.length ? 'Tuyệt vời! Bạn nghe ra hết các chỗ nối.' : score >= order.length * 0.7 ? 'Rất tốt! Xem lại những câu còn sai nhé.' : 'Cứ luyện thêm: mở lại phần Quy tắc rồi thử lại.'));
      card.appendChild(prEl('div', 'lk-done-s', `Kỷ lục của bạn: ${best}/${order.length} câu`));
      const again = prEl('button', 'btn-primary', '↻ Làm lại');
      again.addEventListener('click', () => { body.innerHTML = ''; linkQuiz(body); });
      card.appendChild(again);
      return;
    }
    const [sent, ans] = LINK_QUIZ[order[pos]];
    const words = sent.split(' ');
    card.appendChild(prEl('div', 'lk-q-n', `Câu ${pos + 1} / ${order.length} · đúng ${score}`));
    const line = prEl('div', 'lk-q');
    const gaps = [];
    words.forEach((w, i) => {
      line.appendChild(prEl('span', 'lk-w', w));
      if (i < words.length - 1) {
        const g = prEl('button', 'lk-gap', '');
        g.setAttribute('aria-label', 'Nối "' + w + '" với "' + words[i + 1] + '"');
        g.addEventListener('click', () => { if (card.dataset.checked) return; g.classList.toggle('on'); g.textContent = g.classList.contains('on') ? '‿' : ''; });
        line.appendChild(document.createTextNode(' ')); line.appendChild(g); line.appendChild(document.createTextNode(' ')); gaps.push(g);
      }
    });
    card.appendChild(line);
    const acts = prEl('div', 'lk-q-acts');
    const bSlow = prEl('button', 'ls-slow', '🐢 Từng từ');
    const bFast = prEl('button', 'ls-slow', '▶ Nghe câu');
    const bCheck = prEl('button', 'btn-primary', 'Kiểm tra');
    bSlow.addEventListener('click', () => linkSlow(sent));
    bFast.addEventListener('click', () => linkFast(sent));
    acts.appendChild(bFast); acts.appendChild(bSlow); acts.appendChild(bCheck);
    card.appendChild(acts);
    const res = prEl('div', 'lk-res');
    card.appendChild(res);
    delete card.dataset.checked;
    bCheck.addEventListener('click', () => {
      if (card.dataset.checked) { pos++; draw(); return; }
      card.dataset.checked = '1';
      let ok = true;
      gaps.forEach((g, i) => {
        const want = ans[i] != null, got = g.classList.contains('on');
        g.textContent = want ? '‿' : (got ? '×' : '');
        g.classList.add(want && got ? 'ok' : want ? 'miss' : got ? 'bad' : 'none');
        if (want !== got) ok = false;
      });
      if (ok) score++;
      res.appendChild(prEl('div', 'lk-res-h ' + (ok ? 'ok' : 'bad'), ok ? '✓ Chính xác!' : '✗ Chưa đúng — chỗ viền đỏ là chỗ bạn bỏ sót, dấu × là chỗ không nối.'));
      Object.keys(ans).sort((a, b) => a - b).forEach(k => {
        const i = +k;
        const r = prEl('div', 'lk-res-r');
        r.appendChild(prEl('b', null, words[i].replace(/[?.!,]/g, '') + '‿' + words[i + 1].replace(/[?.!,]/g, '')));
        r.appendChild(document.createTextNode(' — ' + LINK_TYPE[ans[k]]));
        res.appendChild(r);
      });
      bCheck.textContent = pos + 1 < order.length ? 'Câu tiếp →' : 'Xem kết quả';
      linkFast(sent);
    });
    linkFast(sent);
  };
  draw();
}

function renderPronSets() {
  pronSets.innerHTML = '';
  pronSets.appendChild(prEl('div', 'tense-group-title', 'Các khu vực học'));
  pronSets.appendChild(p2HomeTop());
  pronSets.appendChild(prEl('div', 'tense-group-title ipa-sets-title', 'Luyện các âm khó với người Việt'));
  const grid = prEl('div', 'vc-grid');
  PRON_SETS.forEach(set => {
    const n = prSetItems(set).length, got = prSetGot(set);
    const b = prEl('button', 'vc-topic' + (got === n ? ' done' : ''));
    b.appendChild(prEl('span', 'vc-ticon', set.icon));
    b.appendChild(prEl('span', 'vc-tvi', set.title));
    b.appendChild(prEl('span', 'vc-ten', PR_SET_SUB[set.id] || ''));
    b.appendChild(prEl('span', 'vc-tmeta', got ? `${got}/${n} đã luyện` : `${n} ${prSetUnit(set)}`));
    const bar = prEl('span', 'vc-bar'); const fill = prEl('span'); fill.style.width = (got / n * 100) + '%'; bar.appendChild(fill); b.appendChild(bar);
    b.addEventListener('click', () => prOpenSetView(set));
    grid.appendChild(b);
  });
  pronSets.appendChild(grid);
}

/* ============================================================
   v180 · BÀI LUYỆN PHÁT ÂM — gọn và đủ
   - quy tắc dạng bảng (đuôi -s / -ed), từ chia theo nhóm âm cuối
   - mỗi từ: Nghe · Chậm · Nói (chấm ngay trong dòng, ≥ 80% tự đánh dấu đã luyện) · ✓
   - kiểm tra nhanh cuối bài: phân loại đuôi, nghe chọn từ, nghe phân biệt cặp từ
============================================================ */
const PR_RULES = {
  s: [['/s/', 'Sau âm vô thanh', '/p/ /t/ /k/ /f/ /θ/', 'g1'], ['/z/', 'Sau âm hữu thanh và nguyên âm', '/b/ /d/ /ɡ/ /v/ /m/ /n/ /l/ /r/…', 'g2'], ['/ɪz/', 'Sau âm gió', '/s/ /z/ /ʃ/ /ʒ/ /tʃ/ /dʒ/', 'g3']],
  ed: [['/t/', 'Sau âm vô thanh', '/p/ /k/ /s/ /ʃ/ /tʃ/ /f/', 'g1'], ['/d/', 'Sau âm hữu thanh và nguyên âm', '/b/ /ɡ/ /v/ /z/ /m/ /n/ /l/ /r/…', 'g2'], ['/ɪd/', 'Sau /t/ và /d/', 'thêm một âm tiết', 'g3']]
};
const prSplitVi = vi => { const m = /^(.*?)\s*·\s*(\/[^/]+\/)$/.exec(vi || ''); return m ? [m[1], m[2]] : [vi, '']; };
function prSvg(path) { const sp = prEl('span', 'pr2-ic'); sp.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + path + '</svg>'; return sp; }
const PR_IC = { play: '<path d="M8 5.5v13l11-6.5z" fill="currentColor" stroke="none"/>', slow: '<path d="M4 16c0-3.5 3-6 7-6s7 2.5 7 6M2 16h18M7 16v2M15 16v2M18 11l2-2h1.5"/>', mic: '<path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM19 11a7 7 0 0 1-14 0M12 18v3"/>', ok: '<path d="m5 12.5 4.5 4.5L19 7.5"/>' };
function prAct(icon, label, cls, fn) {
  const b = prEl('button', 'pr2-btn ' + (cls || '')); b.type = 'button';
  b.appendChild(prSvg(PR_IC[icon])); b.appendChild(prEl('span', 'pr2-bl', label));
  b.addEventListener('click', e => { e.stopPropagation(); fn(b); });
  return b;
}
/* v182 · gọn: lọc theo nhóm âm + lưới ô từ chia trang + MỘT khung luyện chung (thay cho nút trên từng dòng) */
const PR_PAGE_W = 12, PR_PAGE_S = 8;
function prSetBody(set, v, card, rows, texts, openDetail) {
  card.className = 'pr2-wrap';
  const PR_PAGE = set.sentences ? PR_PAGE_S : PR_PAGE_W;
  const rules = PR_RULES[set.id], isSent = !!set.sentences, isPair = !!set.pairs;
  const gOf = snd => ((rules || []).find(r => r[0] === snd) || [])[3] || '';
  const items = isPair
    ? set.pairs.map(p => ({ key: p[0][0] + ' / ' + p[1][0], w: p[0][0] + ' · ' + p[1][0], say: p[0][0] + ', ' + p[1][0], pair: p }))
    : (set.words || set.sentences).map(x => {
        if (isSent) return { key: x[0], w: x[0], say: x[0], vi: x[1] };
        const [vi, snd] = prSplitVi(x[2]); return { key: x[0], w: x[0], say: x[0], ipa: x[1], vi, snd };
      });
  const isDone = it => prDone.has(set.id + '|' + it.key);
  let filter = '', page = 0, cur = null;
  const list = () => filter ? items.filter(it => it.snd === filter) : items;

  /* --- lọc theo quy tắc (đuôi -s / -ed) --- */
  let filt = null;
  if (rules) {
    filt = prEl('div', 'pr2-filt'); filt.setAttribute('role', 'tablist'); filt.setAttribute('aria-label', 'Lọc theo cách đọc');
    const mk = (val, top, sub, g) => {
      const b = prEl('button', 'pr2-fc ' + (g || '')); b.type = 'button'; b.setAttribute('role', 'tab'); b.dataset.f = val;
      b.appendChild(prEl('b', null, top)); b.appendChild(prEl('span', null, sub));
      b.addEventListener('click', () => { filter = val; page = 0; prSeqStop(); drawFilt(); drawGrid(); select(list()[0], false); });
      filt.appendChild(b);
    };
    mk('', 'Tất cả', items.length + ' từ');
    rules.forEach(([snd, when, after, g]) => mk(snd, snd, 'sau ' + after.replace(/…$/, '').split(' ').slice(0, 4).join(' ') + (/…$/.test(after) || after.split(' ').length > 4 ? '…' : ''), g));
    card.appendChild(filt);
    const tip = v.querySelector('.pr-set-tip2'); if (tip) tip.remove();
  }
  const ruleLine = prEl('div', 'pr2-rl'); ruleLine.hidden = true; if (rules) card.appendChild(ruleLine);
  const drawFilt = () => {
    if (!filt) return;
    [...filt.children].forEach(b => { const on = b.dataset.f === filter; b.classList.toggle('on', on); b.setAttribute('aria-selected', String(on)); });
    const r = rules.find(x => x[0] === filter);
    ruleLine.hidden = !r; ruleLine.className = 'pr2-rl ' + (r ? r[3] : '');
    if (r) ruleLine.textContent = `Đọc ${r[0]} — ${r[1].toLowerCase()}: ${r[2]}`;
  };

  /* --- khung luyện chung --- */
  const pan = prEl('section', 'pr2-pan' + (isPair ? ' pair' : '')); pan.setAttribute('aria-live', 'polite');
  card.appendChild(pan);
  const mic = (target, res, onOk) => prAct('mic', 'Nói', 'pr2-mic', b => {
    prSeqStop();
    if (!PR_SR) { res.hidden = false; res.className = 'pr2-res warn'; res.textContent = 'Trình duyệt này chưa nghe được giọng nói. iPhone: dùng Safari · máy tính: Chrome hoặc Edge.'; return; }
    if (b.classList.contains('on')) { try { prRecog && prRecog.stop(); } catch (e) {} return; }
    b.classList.add('on'); b.querySelector('.pr2-bl').textContent = 'Đang mở…';
    res.hidden = false; res.className = 'pr2-res'; res.textContent = isSent ? 'Hãy đọc cả câu…' : `Hãy đọc: “${target}”`;
    vspListen(target, (best, err) => {
      b.classList.remove('on'); b.querySelector('.pr2-bl').textContent = 'Nói';
      if (!best) { res.className = 'pr2-res warn'; res.textContent = err || 'Không nghe rõ. Bấm Nói và đọc to hơn nhé.'; return; }
      const sc = prScore(target, best.heard), pct = Math.round(sc.score * 100);
      res.className = 'pr2-res ' + (pct >= 80 ? 'ok' : pct >= 50 ? 'mid' : 'bad'); res.innerHTML = '';
      res.appendChild(prEl('b', null, pct + '%'));
      res.appendChild(prEl('span', null, (pct >= 80 ? 'Máy nghe rõ. ' : pct >= 50 ? 'Gần đúng. ' : 'Chưa khớp. ') + `Máy nghe được: “${best.heard}”`));
      if (pct >= 80) onOk();
    }, txt => { b.querySelector('.pr2-bl').textContent = 'Đang nghe'; res.textContent = '“' + txt + '”'; },
    { onStart: () => { b.querySelector('.pr2-bl').textContent = 'Đang nghe'; } });
  });
  const mark = (it, on) => {
    const k = set.id + '|' + it.key;
    if (on) prDone.add(k); else prDone.delete(k); prDoneSave(); prSetProg(set);
    const t = grid.querySelector(`[data-k="${CSS.escape(it.key)}"]`); if (t) t.classList.toggle('learned', on);
    const ck = pan.querySelector('.pr2-ck'); if (ck && cur === it) { ck.classList.toggle('on', on); ck.setAttribute('aria-pressed', String(on)); }
  };
  const step = d => {
    const L = list(), i = L.indexOf(cur), j = Math.min(L.length - 1, Math.max(0, i + d));
    if (j === i) return;
    const np = Math.floor(j / PR_PAGE); if (np !== page) { page = np; drawGrid(); }
    select(L[j], true);
  };
  const select = (it, say) => {
    cur = it; pan.innerHTML = '';
    grid.querySelectorAll('.pr2-tile.sel').forEach(x => x.classList.remove('sel'));
    if (!it) return;
    const t = grid.querySelector(`[data-k="${CSS.escape(it.key)}"]`); if (t) t.classList.add('sel');
    const res = prEl('div', 'pr2-res'); res.hidden = true;
    const L = list(), i = L.indexOf(it);
    const top = prEl('div', 'pr2-ptop');
    top.appendChild(prEl('span', 'pr2-pn', `${i + 1}/${L.length}`));
    const det = prEl('button', 'pr2-pdet', 'Chi tiết ›'); det.type = 'button';
    top.appendChild(det);
    pan.appendChild(top);
    if (isPair) {
      const cols = prEl('div', 'pr2-pcols');
      it.pair.forEach(([w, ipa, vi]) => {
        const c = prEl('div', 'pr2-pc');
        c.appendChild(prEl('div', 'pr2-pw', w)); c.appendChild(prEl('div', 'pr2-pipa', ipa)); c.appendChild(prEl('div', 'pr2-pvi', vi));
        const a = prEl('div', 'pr2-acts');
        a.appendChild(prAct('play', 'Nghe', '', () => { prSeqStop(); prSay(w); }));
        a.appendChild(mic(w, res, () => {}));
        c.appendChild(a); cols.appendChild(c);
      });
      pan.appendChild(cols);
      det.addEventListener('click', () => openDetail(it.pair[0][0], { ipa: it.pair[0][1], vi: it.pair[0][2] }));
    } else {
      pan.appendChild(prEl('div', 'pr2-pw' + (isSent ? ' sent' : ''), it.w));
      const meta = prEl('div', 'pr2-pmeta');
      if (it.ipa) meta.appendChild(prEl('span', 'pr2-pipa', it.ipa));
      if (it.snd) meta.appendChild(prEl('span', 'pr2-tag ' + gOf(it.snd), 'đuôi ' + it.snd));
      if (meta.childNodes.length) pan.appendChild(meta);
      pan.appendChild(prEl('div', 'pr2-pvi', it.vi));
      det.addEventListener('click', () => openDetail(it.w, isSent ? { vi: it.vi } : { ipa: it.ipa, vi: it.vi }));
    }
    const acts = prEl('div', 'pr2-acts pr2-pacts');
    const prev = prEl('button', 'pr2-btn pr2-nav', '‹'); prev.type = 'button'; prev.setAttribute('aria-label', 'Từ trước'); prev.disabled = i <= 0;
    prev.addEventListener('click', () => step(-1));
    acts.appendChild(prev);
    if (isPair) {
      acts.appendChild(prAct('play', 'So sánh', '', () => { prSeqStop(); const u = prSay(it.pair[0][0], 0.7); if (u) u.onend = () => setTimeout(() => prSay(it.pair[1][0], 0.7), 450); }));
    } else {
      acts.appendChild(prAct('play', 'Nghe', '', () => { prSeqStop(); prSay(it.say); }));
      acts.appendChild(prAct('slow', 'Chậm', '', () => { prSeqStop(); prSay(it.say, 0.5); }));
      acts.appendChild(mic(it.say, res, () => { if (!isDone(it)) mark(it, true); }));
    }
    const ck = prEl('button', 'pr2-btn pr2-ck' + (isDone(it) ? ' on' : '')); ck.type = 'button';
    ck.appendChild(prSvg(PR_IC.ok)); ck.setAttribute('aria-label', 'Đánh dấu đã luyện ' + it.key); ck.setAttribute('aria-pressed', String(isDone(it)));
    ck.addEventListener('click', () => mark(it, !isDone(it)));
    acts.appendChild(ck);
    const nx = prEl('button', 'pr2-btn pr2-nav', '›'); nx.type = 'button'; nx.setAttribute('aria-label', 'Từ tiếp theo'); nx.disabled = i >= L.length - 1;
    nx.addEventListener('click', () => step(1));
    acts.appendChild(nx);
    pan.appendChild(acts); pan.appendChild(res);
    if (say) { prSeqStop(); prSay(isPair ? it.pair[0][0] : it.say); }
  };

  /* --- lưới ô từ + phân trang --- */
  const grid = prEl('div', 'pr2-grid' + (isSent ? ' sent' : isPair ? ' pair' : ''));
  const pager = prEl('div', 'pr2-pager');
  card.appendChild(grid); card.appendChild(pager);
  const drawGrid = () => {
    const L = list(), pages = Math.max(1, Math.ceil(L.length / PR_PAGE));
    page = Math.min(page, pages - 1);
    grid.innerHTML = ''; rows.length = 0; texts.length = 0;
    L.slice(page * PR_PAGE, page * PR_PAGE + PR_PAGE).forEach(it => {
      const b = prEl('button', 'pr2-tile ' + gOf(it.snd) + (isDone(it) ? ' learned' : '') + (cur === it ? ' sel' : '')); b.type = 'button';
      b.dataset.k = it.key;
      b.appendChild(prEl('span', 'pr2-tw', it.w));
      b.appendChild(prEl('span', 'pr2-ts', isSent ? it.vi : isPair ? it.pair[0][1] + ' ' + it.pair[1][1] : it.ipa));
      b.setAttribute('aria-label', `${it.w}${it.ipa ? ', ' + it.ipa : ''}${it.vi ? ': ' + it.vi : ''}`);
      b.addEventListener('click', () => { select(it, true); try { pan.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) {} });
      grid.appendChild(b); rows.push(b); texts.push(it.say);
    });
    pager.innerHTML = ''; pager.hidden = pages < 2;
    const go = p => { page = p; prSeqStop(); drawGrid(); select(list()[page * PR_PAGE], false); };
    const pv = prEl('button', 'pr2-pg', '‹'); pv.type = 'button'; pv.setAttribute('aria-label', 'Trang trước'); pv.disabled = page === 0; pv.addEventListener('click', () => go(page - 1));
    const dots = prEl('div', 'pr2-dots');
    for (let p = 0; p < pages; p++) {
      const d = prEl('button', 'pr2-dot' + (p === page ? ' on' : ''), String(p + 1)); d.type = 'button'; d.setAttribute('aria-label', 'Trang ' + (p + 1));
      if (p === page) d.setAttribute('aria-current', 'page');
      d.addEventListener('click', () => go(p)); dots.appendChild(d);
    }
    const nv = prEl('button', 'pr2-pg', '›'); nv.type = 'button'; nv.setAttribute('aria-label', 'Trang sau'); nv.disabled = page >= pages - 1; nv.addEventListener('click', () => go(page + 1));
    pager.appendChild(pv); pager.appendChild(dots); pager.appendChild(nv);
  };
  const first = items.find(it => !isDone(it)) || items[0];   // mở ngay ở từ chưa luyện đầu tiên
  page = Math.floor(items.indexOf(first) / PR_PAGE);
  drawFilt(); drawGrid(); select(first, false);
}
/* ---------- kiểm tra nhanh ---------- */
function prQuizBox(set) {
  const box = prEl('section', 'pr2-quiz');
  const sh = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  let Q = [];
  if (PR_RULES[set.id]) Q = sh(set.words).slice(0, 8).map(x => ({ say: x[0], show: x[0], ask: 'Đuôi của từ này đọc là gì?', opts: PR_RULES[set.id].map(r => r[0]), ans: prSplitVi(x[2])[1], why: `${x[0]} ${x[1]} · ${prSplitVi(x[2])[0]}` }));
  else if (set.pairs) Q = sh(set.pairs).slice(0, 8).map(p => { const t = p[Math.random() < 0.5 ? 0 : 1]; return { say: t[0], ask: 'Nghe và chọn từ bạn nghe được', opts: [p[0][0], p[1][0]], ans: t[0], why: `${p[0][0]} ${p[0][1]} · ${p[1][0]} ${p[1][1]}` }; });
  else if (set.words) Q = sh(set.words).slice(0, 8).map(x => ({ say: x[0], ask: 'Nghe và chọn từ bạn nghe được', opts: sh([x[0]].concat(sh(set.words.filter(y => y[0] !== x[0])).slice(0, 3).map(y => y[0]))), ans: x[0], why: `${x[0]} ${x[1]} · ${x[2]}` }));
  else return box;
  box.appendChild(prEl('h3', null, 'Kiểm tra nhanh'));
  const p0 = prEl('p', 'pr2-qp', PR_RULES[set.id] ? `${Q.length} câu · nhìn từ, chọn cách đọc đuôi` : `${Q.length} câu · nghe rồi chọn đúng từ`); box.appendChild(p0);
  const body = prEl('div', 'pr2-qb'); box.appendChild(body);
  let i = 0, right = 0;
  const start = prEl('button', 'btn-primary', '▶ Bắt đầu kiểm tra'); start.type = 'button';
  body.appendChild(start);
  const draw = () => {
    body.innerHTML = '';
    if (i >= Q.length) {
      const pct = Math.round(right / Q.length * 100);
      body.appendChild(prEl('div', 'pr2-qend', `${right}/${Q.length} câu đúng`));
      body.appendChild(prEl('p', 'pr2-qp', pct >= 80 ? 'Rất tốt! Bạn đã nắm được bài này.' : 'Xem lại các từ ở trên rồi làm lại nhé.'));
      const again = prEl('button', 'btn-ghost', '↻ Làm lại'); again.type = 'button';
      again.addEventListener('click', () => { const nb = prQuizBox(set); box.replaceWith(nb); nb.querySelector('.btn-primary').click(); });
      body.appendChild(again);
      try { if (window.actLog) actLog('p', right); } catch (e) {}
      return;
    }
    const q = Q[i];
    body.appendChild(prEl('div', 'pr2-qn', `Câu ${i + 1}/${Q.length} · ${q.ask}`));
    const top = prEl('div', 'pr2-qtop');
    if (q.show) top.appendChild(prEl('span', 'pr2-qw', q.show));
    top.appendChild(prAct('play', q.show ? 'Nghe' : 'Nghe lại', 'pr2-qplay', () => prSay(q.say)));
    body.appendChild(top);
    const opts = prEl('div', 'pr2-qopts');
    q.opts.forEach(o => {
      const b = prEl('button', 'pr2-qo', o); b.type = 'button';
      b.addEventListener('click', () => {
        if (opts.dataset.done) return; opts.dataset.done = '1';
        const ok = o === q.ans; if (ok) right++;
        [...opts.children].forEach(x => { x.disabled = true; if (x.textContent === q.ans) x.classList.add('ok'); else if (x === b) x.classList.add('bad'); });
        const fb = prEl('div', 'pr2-qfb ' + (ok ? 'ok' : 'bad'), (ok ? 'Đúng rồi! ' : `Chưa đúng — đáp án: ${q.ans}. `) + q.why);
        body.appendChild(fb);
        const nx = prEl('button', 'btn-primary', i + 1 < Q.length ? 'Câu tiếp →' : 'Xem kết quả'); nx.type = 'button';
        nx.addEventListener('click', () => { i++; draw(); }); body.appendChild(nx);
        try { nx.focus({ preventScroll: true }); } catch (e) {}
      });
      opts.appendChild(b);
    });
    body.appendChild(opts);
    if (!q.show) setTimeout(() => prSay(q.say), 150);
  };
  start.addEventListener('click', () => { prSeqStop(); draw(); });
  return box;
}

function prShowHome() {
  prSeqStop();
  prOpenSet = null;
  pronSetView.hidden = true; pronSetView.innerHTML = '';
  pronHome.hidden = false; pronSets.hidden = false; if (pronMore) pronMore.hidden = false;
  pronSets.parentNode.insertBefore(pronResult, pronSets);   // the detail card goes back above the sets
  pronResult.innerHTML = '';
  renderPronSets();
}

function prOpenSetView(set) {
  prSeqStop();
  prOpenSet = set;
  pronHome.hidden = true; pronSets.hidden = true; if (pronMore) pronMore.hidden = true;
  const v = pronSetView;
  if (pronResult.parentNode === v) pronSets.parentNode.insertBefore(pronResult, pronSets);
  v.innerHTML = ''; v.hidden = false;
  const back = prEl('button', 'gr-back', '← Tất cả bài luyện');
  back.addEventListener('click', () => { prShowHome(); try { document.getElementById('page-pron').scrollIntoView({ block: 'start' }); } catch (e) {} });
  v.appendChild(back);
  const n = prSetItems(set).length;
  const head = prEl('div', 'vc-head');
  head.appendChild(prEl('div', 'vc-head-icon', set.icon));
  const hm = prEl('div', 'vc-head-meta');
  hm.appendChild(prEl('div', 'vc-head-vi', set.title));
  hm.appendChild(prEl('div', 'vc-head-en', `${PR_SET_SUB[set.id] || ''} · ${n} ${prSetUnit(set)}`));
  const pr = prEl('div', 'vc-head-prog'); pr.id = 'pr-set-prog'; hm.appendChild(pr);
  head.appendChild(hm); v.appendChild(head);
  prSetProg(set);
  v.appendChild(prEl('div', 'pr-set-tip pr-set-tip2', set.tip));
  const acts = prEl('div', 'pr-acts');
  const all = prEl('button', 'ls-slow', '▶ Nghe lần lượt');
  acts.appendChild(all);
  acts.appendChild(prEl('span', 'pr-acts-hint', 'Chạm một ô để nghe, rồi bấm Nói để luyện'));
  v.appendChild(acts);
  v.appendChild(pronResult);           // the detail card shows up here, above the list
  pronResult.innerHTML = '';
  const card = prEl('div', 'tense-card vc-card');
  const rows = [], texts = [];
  const openDetail = (text, hint) => { prSeqStop(); renderPronResult(text, hint); prSay(text); try { pronResult.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {} };

  if (set.words || set.sentences || set.pairs) {
    prSetBody(set, v, card, rows, texts, openDetail);
  } else if (false) {
    (set.words || set.sentences).forEach(item => {
      const isSent = !set.words;
      const w = item[0], ipa = isSent ? '' : item[1], vi = isSent ? item[1] : item[2];
      const row = prEl('div', 'vc-row pr-row' + (prDone.has(set.id + '|' + w) ? ' learned' : ''));
      const main = prEl('div', 'vc-main pr-tap');
      main.setAttribute('role', 'button'); main.tabIndex = 0;
      main.appendChild(prEl('div', isSent ? 'vc-word pr-sent-w' : 'vc-word', w));
      if (ipa) main.appendChild(prEl('div', 'vc-ipa pr-ipa', ipa));
      main.appendChild(prEl('div', 'vc-mean', vi));
      main.addEventListener('click', () => openDetail(w, isSent ? { vi } : { ipa, vi }));
      const btns = prEl('div', 'vc-btns');
      btns.appendChild(prBtn('▶', 'Nghe ' + w, () => prSay(w)));
      btns.appendChild(prBtn('🐢', 'Nghe chậm ' + w, () => prSay(w, 0.5), true));
      btns.appendChild(prCheck(set, w, row));
      row.appendChild(main); row.appendChild(btns);
      card.appendChild(row); rows.push(row); texts.push(w);
    });
  } else {
    set.pairs.forEach(pair => {
      const key = pair[0][0] + ' / ' + pair[1][0];
      const row = prEl('div', 'vc-row pr-row pr-pairrow' + (prDone.has(set.id + '|' + key) ? ' learned' : ''));
      const cols = prEl('div', 'pr-paircols');
      pair.forEach(([w, ipa, vi]) => {
        const col = prEl('div', 'pr-paircol');
        const t = prEl('div', 'vc-main pr-tap'); t.setAttribute('role', 'button'); t.tabIndex = 0;
        t.appendChild(prEl('div', 'vc-word', w));
        t.appendChild(prEl('div', 'vc-ipa pr-ipa', ipa));
        t.appendChild(prEl('div', 'vc-mean', vi));
        t.addEventListener('click', () => openDetail(w, { ipa, vi }));
        col.appendChild(t);
        col.appendChild(prBtn('▶', 'Nghe ' + w, () => prSay(w)));
        cols.appendChild(col);
      });
      const side = prEl('div', 'vc-btns');
      const cmp = prBtn('⇄', 'So sánh ' + key, () => {
        const u = prSay(pair[0][0], 0.7);
        if (u) u.onend = () => setTimeout(() => speak(pair[1][0], 0.7), 450);
      }, true);
      cmp.classList.add('pr-cmp-btn');
      side.appendChild(cmp);
      side.appendChild(prCheck(set, key, row));
      row.appendChild(cols); row.appendChild(side);
      card.appendChild(row); rows.push(row); texts.push(pair[0][0] + ', ' + pair[1][0]);
    });
  }
  v.appendChild(card);
  all.addEventListener('click', () => prSeqPlay(rows, texts, all));
  v.appendChild(prQuizBox(set));   // v180: kiểm tra nhanh cuối bài
  // next lesson, like the Vocabulary tab
  const idx = PRON_SETS.indexOf(set), nx = PRON_SETS[idx + 1];
  if (nx) {
    const nb = prEl('button', 'btn-primary vc-next-unit', `Bài tiếp: ${nx.icon} ${nx.title} →`);
    nb.addEventListener('click', () => { prOpenSetView(nx); try { document.getElementById('page-pron').scrollIntoView({ block: 'start' }); } catch (e) {} });
    v.appendChild(nb);
  }
}
/* ============================================================
   v116 · Phát âm: giọng UK/US · âm mẫu 3 lớp · học từng âm theo 5 bước + kiểm tra
   · tiến độ 5 trạng thái · phân biệt cặp âm (nghe & chọn, nghe & phân loại)
   · trọng âm từ (dữ liệu kiểm tra sẵn), trọng âm câu, ngữ điệu · kiểm tra tổng hợp · 3D
============================================================ */
const P2 = { accent: 'hoc-tieng-anh-pron-accent', prog: 'hoc-tieng-anh-ipa-prog', pairs: 'hoc-tieng-anh-pron-pairs', hist: 'hoc-tieng-anh-pron-hist', fav: 'hoc-tieng-anh-pron-fav', test: 'hoc-tieng-anh-pron-test', stress: 'hoc-tieng-anh-pron-stress' };
const p2Load = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } };
const p2Save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
const p2Day = () => { const d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 864e5); };
const p2Top = () => { try { document.getElementById('page-pron').scrollIntoView({ block: 'start' }); } catch (e) {} };

/* ---------- giọng học: Anh-Anh hoặc Anh-Mỹ ---------- */
let prAccent = p2Load(P2.accent, '');
if (prAccent !== 'us' && prAccent !== 'gb') { try { prAccent = typeof pronVoice !== 'undefined' && pronVoice && /GB|UK/i.test(pronVoice.lang) ? 'gb' : 'us'; } catch (e) { prAccent = 'us'; } }
function prAccentVoice() {
  // giọng bạn đã chọn ở đầu trang đúng giọng đang học → giữ nguyên
  try { if (typeof pronVoice !== 'undefined' && pronVoice && (prAccent === 'us' ? /US/i : /GB/i).test(pronVoice.lang)) return null; } catch (e) {}
  try { return prAccent === 'us' ? (vResolved['us-f'] || vResolved['us-m'] || null) : (vResolved['gb-f'] || vResolved['gb-m'] || null); } catch (e) { return null; }
}
// điểm khác của giọng Mỹ so với bảng IPA Anh-Anh (mô hình tham chiếu không đọc /r/ cuối âm tiết)
const IPA_US = {
  'ɒ': 'Giọng Mỹ: hầu hết từ có /ɒ/ đọc thành /ɑː/ (hot /hɑːt/, dog /dɑːɡ/ hoặc /dɔːɡ/).',
  'əʊ': 'Giọng Mỹ: viết là /oʊ/, bắt đầu từ “ô” rồi tròn môi sang “u” (go /ɡoʊ/).',
  'ɜː': 'Giọng Mỹ: có /r/ cong lưỡi, viết là /ɝ/ (bird /bɝːd/, work /wɝːk/).',
  'ə': 'Giọng Mỹ: “-er” cuối từ có /r/, viết là /ɚ/ (teacher /ˈtiːtʃɚ/).',
  'ɑː': 'Giọng Mỹ: khi có chữ r thì đọc cả /r/ (car /kɑːr/); father vẫn là /ɑː/.',
  'ɔː': 'Giọng Mỹ: có chữ r thì đọc /r/ (door /dɔːr/); nhiều người Mỹ đọc talk, caught gần /ɑː/.',
  'ɪə': 'Giọng Mỹ: thường là /ɪr/ (here /hɪr/, beer /bɪr/).',
  'eə': 'Giọng Mỹ: thường là /er/ (hair /her/, where /wer/).',
  'ʊə': 'Giọng Mỹ: thường là /ʊr/ (tour /tʊr/); pure, cure là /jʊr/.',
  'r': 'Giọng Mỹ đọc /r/ ở mọi vị trí, kể cả cuối từ (car, more). Giọng Anh-Anh chỉ đọc /r/ khi ngay sau là nguyên âm.',
  't': 'Giọng Mỹ: /t/ giữa hai nguyên âm thường thành âm bật nhẹ giống /d/ (water /ˈwɑːt̬ɚ/, better).',
  'æ': 'Giọng Mỹ dùng /æ/ cả trong nhiều từ mà giọng Anh đọc /ɑː/: bath, ask, can’t.'
};
const prToUS = ipa => ipa.replace(/əʊ/g, 'oʊ').replace(/ɒ/g, 'ɑː').replace(/ɜː/g, 'ɝː').replace(/ɪə/g, 'ɪr').replace(/eə/g, 'er').replace(/ʊə/g, 'ʊr');

/* ---------- âm mẫu: lớp 1 bản ghi giọng người (nếu bạn thêm vào thư mục am-mau/) ---------- */
const IPA_FILE = { 'ɪ': 'i-ngan', 'iː': 'i-dai', 'ʊ': 'u-ngan', 'uː': 'u-dai', 'e': 'e', 'æ': 'ae', 'ə': 'schwa', 'ɜː': 'er-dai', 'ɒ': 'o-ngan', 'ɔː': 'o-dai', 'ʌ': 'uh', 'ɑː': 'a-dai',
  'eɪ': 'ei', 'aɪ': 'ai', 'ɔɪ': 'oi', 'aʊ': 'au', 'əʊ': 'ou', 'ɪə': 'ia', 'eə': 'ea', 'ʊə': 'ua',
  'p': 'p', 'b': 'b', 't': 't', 'd': 'd', 'k': 'k', 'ɡ': 'g', 'f': 'f', 'v': 'v', 'θ': 'th-vo-thanh', 'ð': 'th-huu-thanh', 's': 's', 'z': 'z', 'ʃ': 'sh', 'ʒ': 'zh', 'tʃ': 'ch', 'dʒ': 'j',
  'm': 'm', 'n': 'n', 'ŋ': 'ng', 'h': 'h', 'l': 'l', 'r': 'r', 'w': 'w', 'j': 'y' };
let ipaRec = {};   // ký hiệu → đường dẫn file (đọc từ am-mau/danh-sach.json)
(function ipaRecLoad() {
  if (!/^https?:$/.test(location.protocol) || !window.fetch) return;
  fetch('am-mau/danh-sach.json', { cache: 'no-cache' }).then(r => r.ok ? r.json() : null).then(j => {
    if (!j || typeof j !== 'object') return;
    Object.keys(IPA_FILE).forEach(sym => { const f = j[IPA_FILE[sym]] || j[sym]; if (typeof f === 'string' && /^[\w\-./]+\.(mp3|m4a|wav|ogg)$/i.test(f)) ipaRec[sym] = 'am-mau/' + f.replace(/^am-mau\//, ''); });
  }).catch(() => {});
})();
function ipaPlayRec(sym) {
  const src = ipaRec[sym]; if (!src) return false;
  try { speechSynthesis.cancel(); } catch (e) {}
  try {
    const A = ipaPlayRec.cache || (ipaPlayRec.cache = {});
    const a = A[src] || (A[src] = new Audio(src));
    a.preload = 'auto';
    try { a.pause(); a.currentTime = 0; } catch (e) {}
    a.play().catch(() => { delete A[src]; delete ipaRec[sym]; ipaSim(sym); });
    return true;
  } catch (e) { return false; }
}
function ipaSim(sym) {
  ipaUnlock();
  try { if (ipaPlayWav(sym)) return; } catch (e) {}
  try { if (ipaPlaySound(sym)) return; } catch (e) {}
  prSay(IPA_SAY[sym] || ipaWords(sym)[0], Math.min(prRate, 0.75));
}

/* ---------- tiến độ từng âm: Chưa học · Đã xem · Đã luyện · Cần luyện lại · Thành thạo ---------- */
let ipaP = p2Load(P2.prog, {}); if (!ipaP || typeof ipaP !== 'object' || Array.isArray(ipaP)) ipaP = {};
const IPA_ST = { new: ['Chưa học', '○'], seen: ['Đã xem', '👀'], practiced: ['Đã luyện', '🎧'], redo: ['Cần luyện lại', '🔁'], master: ['Thành thạo', '🏆'] };
function ipaSt(sym) {
  const r = ipaP[sym];
  if (!r) return prDone.has(ipaKey(sym)) ? 'practiced' : 'new';
  if ((r.pass || []).length >= 2 && r.lastOk !== false) return 'master';
  if (r.lastOk === false) return 'redo';
  if (r.pr || r.sp || (r.pass || []).length || prDone.has(ipaKey(sym))) return 'practiced';
  return 'seen';
}
function ipaMark(sym, what, val) {
  const r = ipaP[sym] || (ipaP[sym] = { pr: 0, sp: 0, pass: [], fail: 0 });
  const t = p2Day(); r.last = t;
  if (what === 'seen') r.seen = r.seen || t;
  if (what === 'pr') r.pr = (r.pr || 0) + 1;
  if (what === 'sp') { r.sp = (r.sp || 0) + 1; if (val != null) { r.spLast = val; r.spBest = Math.max(r.spBest || 0, val); } }
  if (what === 'test') { r.tests = (r.tests || 0) + 1; r.lastRes = val; if (val >= 80) { r.lastOk = true; if (!r.pass.includes(t)) r.pass.push(t); r.pass = r.pass.slice(-10); } else { r.lastOk = false; r.fail = (r.fail || 0) + 1; } }
  p2Save(P2.prog, ipaP);
}
const ipaMastered = () => IPA_SOUNDS.filter(s => ipaSt(s[0]) === 'master').length;
const ipaWeak = () => IPA_SOUNDS.map(s => s[0]).filter(sym => { const r = ipaP[sym]; return r && (r.lastOk === false || (r.spLast != null && r.spLast < 60)); })
  .sort((a, b) => ((ipaP[b].fail || 0) - (ipaP[a].fail || 0)));

/* ---------- âm dễ nhầm với từng âm: [âm so sánh, [[từ có âm này, từ có âm kia], …]] ---------- */
const IPA_CON = {
  'ɪ': [['iː', [['ship', 'sheep'], ['live', 'leave'], ['sit', 'seat'], ['fill', 'feel']]]],
  'iː': [['ɪ', [['sheep', 'ship'], ['leave', 'live'], ['seat', 'sit'], ['feel', 'fill']]]],
  'ʊ': [['uː', [['full', 'fool'], ['pull', 'pool'], ['look', 'Luke'], ['could', 'cooed']]]],
  'uː': [['ʊ', [['fool', 'full'], ['pool', 'pull'], ['Luke', 'look'], ['suit', 'soot']]]],
  'e': [['æ', [['bed', 'bad'], ['men', 'man'], ['pen', 'pan'], ['said', 'sad']]]],
  'æ': [['e', [['bad', 'bed'], ['man', 'men'], ['pan', 'pen'], ['sad', 'said']]], ['ʌ', [['cat', 'cut'], ['bag', 'bug'], ['hat', 'hut'], ['ran', 'run']]]],
  'ʌ': [['æ', [['cut', 'cat'], ['bug', 'bag'], ['hut', 'hat'], ['run', 'ran']]], ['ɑː', [['cut', 'cart'], ['hut', 'heart'], ['come', 'calm']]]],
  'ɜː': [['ɔː', [['work', 'walk'], ['bird', 'board'], ['shirt', 'short'], ['firm', 'form']]]],
  'ɑː': [['ʌ', [['cart', 'cut'], ['heart', 'hut'], ['calm', 'come'], ['march', 'much']]]],
  'ɒ': [['ɔː', [['cot', 'caught'], ['pot', 'port'], ['not', 'nought'], ['don', 'dawn']]], ['ʌ', [['cot', 'cut'], ['lock', 'luck'], ['shot', 'shut']]]],
  'ɔː': [['ɒ', [['caught', 'cot'], ['port', 'pot'], ['dawn', 'don']]], ['əʊ', [['caught', 'coat'], ['law', 'low'], ['bought', 'boat']]]],
  'eɪ': [['e', [['late', 'let'], ['main', 'men'], ['wait', 'wet'], ['taste', 'test']]]],
  'aɪ': [['eɪ', [['line', 'lane'], ['white', 'wait'], ['mine', 'main'], ['like', 'lake']]]],
  'ɔɪ': [['aɪ', [['boy', 'buy'], ['toy', 'tie'], ['oil', 'aisle']]]],
  'aʊ': [['əʊ', [['now', 'no'], ['town', 'tone'], ['loud', 'load'], ['found', 'phoned']]]],
  'əʊ': [['ɔː', [['coat', 'caught'], ['low', 'law'], ['boat', 'bought']]], ['aʊ', [['no', 'now'], ['tone', 'town'], ['load', 'loud']]]],
  'ɪə': [['eə', [['here', 'hair'], ['beer', 'bear'], ['fear', 'fair'], ['near', 'nair']]]],
  'eə': [['ɪə', [['hair', 'here'], ['bear', 'beer'], ['fair', 'fear']]]],
  'p': [['b', [['pin', 'bin'], ['pear', 'bear'], ['cap', 'cab'], ['pie', 'buy']]], ['f', [['pan', 'fan'], ['pine', 'fine']]]],
  'b': [['p', [['bin', 'pin'], ['bear', 'pear'], ['cab', 'cap']]], ['v', [['berry', 'very'], ['best', 'vest'], ['ban', 'van']]]],
  't': [['d', [['ten', 'den'], ['tie', 'die'], ['bat', 'bad']]], ['θ', [['tree', 'three'], ['tank', 'thank'], ['team', 'theme']]]],
  'd': [['t', [['den', 'ten'], ['die', 'tie'], ['bad', 'bat']]], ['ð', [['day', 'they'], ['dare', 'there'], ['den', 'then']]]],
  'k': [['ɡ', [['coat', 'goat'], ['cold', 'gold'], ['back', 'bag'], ['card', 'guard']]]],
  'ɡ': [['k', [['goat', 'coat'], ['gold', 'cold'], ['bag', 'back']]]],
  'f': [['v', [['fan', 'van'], ['fine', 'vine'], ['leaf', 'leave']]], ['p', [['fan', 'pan'], ['fine', 'pine']]]],
  'v': [['b', [['very', 'berry'], ['vest', 'best'], ['van', 'ban']]], ['f', [['van', 'fan'], ['vine', 'fine'], ['leave', 'leaf']]]],
  'θ': [['s', [['think', 'sink'], ['thick', 'sick'], ['mouth', 'mouse'], ['thing', 'sing']]], ['t', [['three', 'tree'], ['thank', 'tank'], ['theme', 'team']]]],
  'ð': [['d', [['they', 'day'], ['there', 'dare'], ['then', 'den']]], ['z', [['breathe', 'breeze'], ['clothe', 'close']]]],
  's': [['ʃ', [['see', 'she'], ['sip', 'ship'], ['save', 'shave'], ['sort', 'short']]], ['z', [['rice', 'rise'], ['bus', 'buzz'], ['place', 'plays']]], ['θ', [['sink', 'think'], ['sick', 'thick'], ['mouse', 'mouth']]]],
  'z': [['s', [['rise', 'rice'], ['buzz', 'bus'], ['plays', 'place'], ['zoo', 'Sue']]]],
  'ʃ': [['s', [['she', 'see'], ['ship', 'sip'], ['shave', 'save']]], ['tʃ', [['share', 'chair'], ['shoes', 'choose'], ['wash', 'watch']]]],
  'tʃ': [['ʃ', [['chair', 'share'], ['watch', 'wash'], ['cheap', 'sheep'], ['chop', 'shop']]], ['dʒ', [['cheap', 'jeep'], ['choke', 'joke'], ['rich', 'ridge']]]],
  'dʒ': [['tʃ', [['jeep', 'cheap'], ['joke', 'choke'], ['ridge', 'rich']]], ['j', [['jet', 'yet'], ['jam', 'yam'], ['jaw', 'your']]]],
  'm': [['n', [['mail', 'nail'], ['some', 'sun'], ['map', 'nap']]]],
  'n': [['ŋ', [['thin', 'thing'], ['ran', 'rang'], ['sin', 'sing'], ['ban', 'bang']]], ['l', [['night', 'light'], ['know', 'low']]]],
  'ŋ': [['n', [['thing', 'thin'], ['rang', 'ran'], ['sing', 'sin'], ['bang', 'ban']]]],
  'h': [['∅', [['hat', 'at'], ['hair', 'air'], ['heat', 'eat'], ['hold', 'old']]]],
  'l': [['r', [['light', 'right'], ['long', 'wrong'], ['lead', 'read'], ['fly', 'fry']]], ['n', [['light', 'night'], ['low', 'know']]]],
  'r': [['l', [['right', 'light'], ['wrong', 'long'], ['read', 'lead'], ['fry', 'fly']]]],
  'w': [['v', [['west', 'vest'], ['wine', 'vine'], ['wet', 'vet']]]],
  'j': [['dʒ', [['yet', 'jet'], ['yam', 'jam'], ['your', 'jaw']]]]
};
/* nhóm cặp âm dễ nhầm, xếp theo cấp độ: [âm A, âm B, cấp] */
const PAIR_GROUPS = [
  ['ɪ', 'iː', 1], ['ʊ', 'uː', 1], ['e', 'æ', 1], ['θ', 's', 1], ['θ', 't', 1], ['ð', 'd', 1], ['v', 'b', 1], ['s', 'z', 2],
  ['s', 'ʃ', 2], ['æ', 'ʌ', 2], ['tʃ', 'ʃ', 2], ['l', 'r', 2], ['p', 'b', 2], ['k', 'ɡ', 2],
  ['n', 'ŋ', 3], ['ɒ', 'ɔː', 3], ['eɪ', 'e', 3], ['aʊ', 'əʊ', 3], ['ɜː', 'ɔː', 3], ['w', 'v', 3], ['tʃ', 'dʒ', 3], ['ɪə', 'eə', 3]
].map(([a, b, lv]) => { const c = (IPA_CON[a] || []).find(x => x[0] === b); return c ? { id: a + '-' + b, a, b, lv, pairs: c[1] } : null; }).filter(Boolean);
const PAIR_LV = ['', 'Cơ bản', 'Trung bình', 'Nâng cao'];
const ipaName = sym => { const s = IPA_SOUNDS.find(x => x[0] === sym); return s ? ipaPlain(s[5][0][0]) : sym === '∅' ? 'không có /h/' : ''; };

/* ---------- trọng âm từ: vị trí nhấn đã kiểm tra cho các từ hay gặp (giọng Anh-Anh) ---------- */
const STRESS_DB = {
  photograph: ['pho·to·graph', 0], photography: ['pho·tog·ra·phy', 1], photographic: ['pho·to·graph·ic', 2], photographer: ['pho·tog·ra·pher', 1],
  economy: ['e·con·o·my', 1], economic: ['e·co·nom·ic', 2], banana: ['ba·na·na', 1], hotel: ['ho·tel', 1], computer: ['com·pu·ter', 1],
  vegetable: ['veg·ta·ble', 0], comfortable: ['comf·ta·ble', 0], interesting: ['in·ter·est·ing', 0], vietnamese: ['Vi·et·nam·ese', 3],
  pronunciation: ['pro·nun·ci·a·tion', 3], temperature: ['tem·pera·ture', 0], develop: ['de·vel·op', 1], schedule: ['sched·ule', 0],
  wednesday: ['Wednes·day', 0], important: ['im·por·tant', 1], information: ['in·for·ma·tion', 2], education: ['ed·u·ca·tion', 2],
  necessary: ['ne·ces·sa·ry', 0], family: ['fam·i·ly', 0], restaurant: ['res·tau·rant', 0], chocolate: ['choc·late', 0], different: ['dif·fer·ent', 0],
  especially: ['es·pe·cial·ly', 1], opportunity: ['op·por·tu·ni·ty', 2], technology: ['tech·nol·o·gy', 1], technical: ['tech·ni·cal', 0],
  engineer: ['en·gi·neer', 2], japanese: ['Jap·a·nese', 2], television: ['tel·e·vi·sion', 0], advertisement: ['ad·ver·tise·ment', 1],
  begin: ['be·gin', 1], result: ['re·sult', 1], competition: ['com·pe·ti·tion', 2], compete: ['com·pete', 1], analyse: ['an·a·lyse', 0],
  analysis: ['a·nal·y·sis', 1], mathematics: ['math·e·mat·ics', 2], biology: ['bi·ol·o·gy', 1], event: ['e·vent', 1], percent: ['per·cent', 1],
  idea: ['i·de·a', 1], career: ['ca·reer', 1], coffee: ['cof·fee', 0], guitar: ['gui·tar', 1], police: ['po·lice', 1], museum: ['mu·se·um', 1],
  manager: ['man·a·ger', 0], management: ['man·age·ment', 0], deliver: ['de·liv·er', 1], decide: ['de·cide', 1], decision: ['de·ci·sion', 1],
  hospital: ['hos·pi·tal', 0], holiday: ['hol·i·day', 0], tomorrow: ['to·mor·row', 1], yesterday: ['yes·ter·day', 0], beautiful: ['beau·ti·ful', 0],
  understand: ['un·der·stand', 2], volunteer: ['vol·un·teer', 2], canada: ['Can·a·da', 0], canadian: ['Ca·na·di·an', 1],
  texture: ['tex·ture', 0], topology: ['to·pol·o·gy', 1], material: ['ma·te·ri·al', 1], environment: ['en·vi·ron·ment', 1],
  resolution: ['res·o·lu·tion', 2], architecture: ['ar·chi·tec·ture', 0], animation: ['an·i·ma·tion', 2], geometry: ['ge·om·e·try', 1],
  polygon: ['pol·y·gon', 0], rendering: ['ren·der·ing', 0], lighting: ['light·ing', 0], specular: ['spec·u·lar', 0], metallic: ['me·tal·lic', 1],
  character: ['char·ac·ter', 0], revision: ['re·vi·sion', 1], deadline: ['dead·line', 0], feedback: ['feed·back', 0], software: ['soft·ware', 0]
};
const stressOf = w => { const e = STRESS_DB[(w || '').toLowerCase()]; return e ? { parts: e[0].split('·'), at: e[1] } : null; };
function stressEl(w, big) {
  const st = stressOf(w); if (!st) return null;
  const box = prEl('div', 'p2-stress' + (big ? ' big' : ''));
  st.parts.forEach((p, k) => {
    const b = prEl('button', 'p2-syl' + (k === st.at ? ' on' : ''), k === st.at ? p.toUpperCase() : p);
    b.title = k === st.at ? 'Âm tiết được nhấn' : 'Âm tiết đọc nhẹ';
    b.addEventListener('click', () => prSay(p.toLowerCase(), k === st.at ? 0.7 : 0.8));
    box.appendChild(b);
  });
  const all = prEl('button', 'p2-syl-all', '▶ Cả từ'); all.addEventListener('click', () => prSay(w, 0.75)); box.appendChild(all);
  return box;
}

/* ---------- trọng âm câu và ngữ điệu ---------- */
const SENT_STRESS = [
  { s: 'I want to learn English.', vi: 'Tôi muốn học tiếng Anh.', w: ['I', 'want', 'to', 'learn', 'English.'],
    opts: [[1, 'Nhấn “want”: tôi thật sự muốn học (dù có người nghĩ là không).'], [3, 'Nhấn “learn”: muốn học hẳn hoi, chứ không chỉ nghe cho vui.'], [4, 'Nhấn “English”: muốn học tiếng Anh, không phải tiếng khác.']],
    q: [['Bạn muốn học tiếng Pháp à?', 4], ['Bạn có thật sự muốn học không?', 1]] },
  { s: 'She bought a red car.', vi: 'Cô ấy đã mua một chiếc xe màu đỏ.', w: ['She', 'bought', 'a', 'red', 'car.'],
    opts: [[0, 'Nhấn “She”: chính cô ấy mua, không phải người khác.'], [3, 'Nhấn “red”: màu đỏ, không phải màu khác.'], [4, 'Nhấn “car”: một chiếc xe hơi, không phải xe máy.']],
    q: [['Anh trai cô ấy mua xe đỏ à?', 0], ['Cô ấy mua xe màu xanh à?', 3]] },
  { s: 'I didn’t say he took it.', vi: 'Tôi không nói là anh ta lấy nó.', w: ['I', 'didn’t', 'say', 'he', 'took', 'it.'],
    opts: [[0, 'Nhấn “I”: người khác nói, không phải tôi.'], [2, 'Nhấn “say”: tôi có nghĩ vậy nhưng không nói ra.'], [3, 'Nhấn “he”: tôi nói người khác lấy.'], [4, 'Nhấn “took”: anh ta mượn, chứ không phải lấy.']],
    q: [['Vậy là ai đó khác đã nói ra điều này?', 0], ['Vậy theo bạn người khác lấy à?', 3]] },
  { s: 'Can you send me the file today?', vi: 'Bạn gửi cho tôi file hôm nay được không?', w: ['Can', 'you', 'send', 'me', 'the', 'file', 'today?'],
    opts: [[1, 'Nhấn “you”: muốn chính bạn gửi, không phải người khác.'], [5, 'Nhấn “file”: cần file, không phải đường link hay ảnh.'], [6, 'Nhấn “today”: cần ngay hôm nay, không đợi ngày mai.']],
    q: [['Mai gửi có được không?', 6], ['Để đồng nghiệp tôi gửi nhé?', 1]] }
];
const INTON = [
  ['↘', 'Câu kể', 'I live in Da Nang.', 'Giọng hạ xuống ở cuối câu.'],
  ['↘', 'Câu hỏi có từ để hỏi', 'Where do you work?', 'What, where, when, why, how… thường xuống giọng ở cuối.'],
  ['↗', 'Câu hỏi Yes/No', 'Do you like coffee?', 'Giọng lên ở cuối câu.'],
  ['↗ ↗ ↘', 'Liệt kê', 'I need eggs, milk, and bread.', 'Lên ở các mục đầu, xuống ở mục cuối để báo đã hết.'],
  ['↗ ↘', 'Câu hỏi lựa chọn', 'Tea or coffee?', 'Lên ở lựa chọn thứ nhất, xuống ở lựa chọn cuối.'],
  ['↘', 'Câu hỏi đuôi để xác nhận', 'It’s a nice day, isn’t it?', 'Xuống ở đuôi: bạn chắc chắn và chỉ muốn người kia đồng ý.'],
  ['↗', 'Câu hỏi đuôi hỏi thật', 'You’re coming tomorrow, aren’t you?', 'Lên ở đuôi: bạn không chắc và thật sự hỏi.']
];
const INTON_Q = [['Are you ready?', '↗'], ['What time is it?', '↘'], ['I finished the report.', '↘'], ['Is this your bag?', '↗'], ['How do you spell it?', '↘'], ['Can I sit here?', '↗'], ['We met in 2019.', '↘'], ['Did you call her?', '↗']];
const PR_PHRASES = ['How are you?', 'Nice to meet you.', 'Could you repeat that, please?', 'What do you mean?', 'I’m not sure.', 'Thank you very much.', 'See you later.', 'Excuse me.', 'Could you speak more slowly?', 'Let me think about it.'];

/* ---------- bộ từ ngành 3D ---------- */
PRON_SETS.push(
  { id: 'cg3d', icon: '🧊', title: 'Từ vựng ngành 3D', tip: 'Chú ý trọng âm của từ nhiều âm tiết và các âm cuối. Chạm vào từ để xem trọng âm từng âm tiết và nói thử.',
    words: [['texture', '/ˈtekstʃə/', 'kết cấu bề mặt · trọng âm đầu, âm /tʃ/'], ['topology', '/təˈpɒlədʒi/', 'cấu trúc lưới · nhấn âm tiết 2'], ['lighting', '/ˈlaɪtɪŋ/', 'ánh sáng · âm /aɪ/ và đuôi -ing'],
      ['material', '/məˈtɪəriəl/', 'vật liệu · nhấn âm tiết 2, âm /ə/'], ['rendering', '/ˈrendərɪŋ/', 'kết xuất · âm /r/, /d/ và -ing'], ['environment', '/ɪnˈvaɪrənmənt/', 'môi trường · nhấn âm tiết 2, âm yếu'],
      ['resolution', '/ˌrezəˈluːʃn/', 'độ phân giải · âm /z/, nhấn âm tiết 3'], ['architecture', '/ˈɑːkɪtektʃə/', 'kiến trúc · nhấn âm đầu, cụm /ktʃ/'], ['geometry', '/dʒiˈɒmətri/', 'hình học · nhấn âm tiết 2'],
      ['polygon', '/ˈpɒlɪɡən/', 'đa giác · nhấn âm đầu'], ['animation', '/ˌænɪˈmeɪʃn/', 'hoạt hình · nhấn âm tiết 3'], ['specular', '/ˈspekjələ/', 'phản xạ gương · cụm /sp/'],
      ['metallic', '/məˈtælɪk/', 'kim loại · nhấn âm tiết 2'], ['roughness', '/ˈrʌfnəs/', 'độ nhám · gh đọc /f/'], ['character', '/ˈkærəktə/', 'nhân vật · ch đọc /k/'], ['viewport', '/ˈvjuːpɔːt/', 'khung nhìn · /vj/ ở đầu']] },
  { id: 'cg3ds', icon: '🎬', title: 'Câu giao tiếp ngành 3D', tip: 'Đọc chậm trước rồi nhanh dần; nhấn vào các từ chuyên ngành và nối âm tự nhiên.',
    sentences: [['The texture needs more detail.', 'Texture cần thêm chi tiết.'], ['Please adjust the lighting.', 'Vui lòng điều chỉnh ánh sáng.'], ['The final render has too much noise.', 'Bản render cuối bị nhiễu quá nhiều.'],
      ['Could you check the topology around the shoulder?', 'Bạn kiểm tra topology quanh vai được không?'], ['I’ll send you the updated model tonight.', 'Tối nay tôi sẽ gửi bạn mô hình đã cập nhật.'],
      ['Let’s increase the resolution of the normal map.', 'Mình tăng độ phân giải của normal map nhé.'], ['The client wants a different camera angle.', 'Khách hàng muốn một góc camera khác.'], ['The material looks too shiny.', 'Vật liệu trông bóng quá.']] }
);
PR_SET_SUB.cg3d = 'Trọng âm từ chuyên ngành'; PR_SET_SUB.cg3ds = 'Nói trôi chảy trong công việc';

/* ---------- khung hiển thị một màn trong tab ---------- */
function p2View(icon, title, sub, backFn) {
  prSeqStop();
  prOpenSet = 'p2';
  pronHome.hidden = true; pronSets.hidden = true; if (pronMore) pronMore.hidden = true;
  const v = pronSetView;
  if (pronResult.parentNode === v) pronSets.parentNode.insertBefore(pronResult, pronSets);
  pronResult.innerHTML = '';
  v.innerHTML = ''; v.hidden = false;
  const back = prEl('button', 'gr-back', '← Trang phát âm');
  back.addEventListener('click', () => { (backFn || prShowHome)(); p2Top(); });
  v.appendChild(back);
  const head = prEl('div', 'vc-head');
  head.appendChild(prEl('div', 'vc-head-icon', icon));
  const hm = prEl('div', 'vc-head-meta');
  hm.appendChild(prEl('div', 'vc-head-vi', title));
  hm.appendChild(prEl('div', 'vc-head-en', sub));
  head.appendChild(hm); v.appendChild(head);
  return v;
}
/* trình chạy câu hỏi chung: q = { label, prompt, play, opts:[text], ans, why } */
function p2Quiz(box, qs, onDone) {
  let k = 0, score = 0, picked = null;
  const draw = () => {
    box.innerHTML = '';
    if (k >= qs.length) { const p = Math.round(score / qs.length * 100); onDone && onDone(p, score, qs.length, box); return; }
    const q = qs[k];
    const top = prEl('div', 'vc-card-top'); top.appendChild(prEl('span', 'ls-count', `Câu ${k + 1} / ${qs.length}`)); top.appendChild(prEl('span', 'ls-count', `Đúng: ${score}`)); box.appendChild(top);
    const card = prEl('div', 'tense-card vc-q p2-q');
    card.appendChild(prEl('div', 'vc-q-label', q.label));
    if (q.prompt) card.appendChild(prEl('div', 'p2-q-prompt', q.prompt));
    if (q.play) { const pb = prEl('button', 'irr-hear-play p2-play', '🔊'); pb.setAttribute('aria-label', 'Nghe lại'); pb.addEventListener('click', q.play); card.appendChild(pb); }
    box.appendChild(card);
    const opts = prEl('div', 'vc-opts' + (q.wide ? ' p2-wide' : ''));
    q.opts.forEach((o, i) => {
      let cls = 'vc-opt';
      if (picked != null) { if (i === q.ans) cls += ' ok'; else if (i === picked) cls += ' bad'; }
      const b = prEl('button', cls, o);
      b.addEventListener('click', () => { if (picked != null) return; picked = i; if (i === q.ans) score++; q.after && q.after(i === q.ans); draw(); });
      opts.appendChild(b);
    });
    box.appendChild(opts);
    if (picked != null) {
      if (q.why) box.appendChild(prEl('div', 'vc-fb ' + (picked === q.ans ? 'ok' : 'bad'), (picked === q.ans ? '✓ ' : '✗ ') + q.why));
      const nx = prEl('button', 'btn-primary vc-next', k + 1 < qs.length ? 'Câu tiếp →' : 'Xem kết quả');
      nx.addEventListener('click', () => { k++; picked = null; draw(); });
      box.appendChild(nx);
    } else if (q.play && !q.played) { q.played = true; setTimeout(q.play, 250); }
  };
  draw();
}
const p2Shuf = a => lsShuffle(a.slice());

/* ---------- học từng âm: bước 1 (nghe), 3 (phân biệt), 5 (kiểm tra) ---------- */
function ipaStatusLine(sym) {
  const st = ipaSt(sym), r = ipaP[sym] || {};
  const el = prEl('div', 'p2-sst p2-st-' + st);
  el.appendChild(prEl('b', null, IPA_ST[st][1] + ' ' + IPA_ST[st][0]));
  const bits = [];
  if (r.tests) bits.push(`kiểm tra ${r.tests} lần, đạt ${(r.pass || []).length} ngày`);
  if (r.sp) bits.push(`nói thử ${r.sp} lần` + (r.spLast != null ? ` (gần nhất ${r.spLast}%)` : ''));
  if (r.last != null) { const d = p2Day() - r.last; bits.push(d <= 0 ? 'luyện hôm nay' : `luyện ${d} ngày trước`); }
  el.appendChild(prEl('span', null, bits.length ? bits.join(' · ') : 'Thành thạo khi đạt bài kiểm tra ở bước 5 vào ít nhất 2 ngày khác nhau.'));
  return el;
}
function ipaStepListen(s, body) {
  const sym = s[0];
  body.appendChild(ipaStatusLine(sym));
  const sec = prEl('div', 'ipa-d-sec p2-step');
  sec.appendChild(prEl('div', 'ipa-d-h', 'Bước 1 · Nghe âm mẫu'));
  const row = prEl('div', 'pron-actions p2-layers');
  if (ipaRec[sym]) { const a = prEl('button', 'p2-l1', '🎙️ Bản ghi giọng người'); a.addEventListener('click', () => { ipaPlayRec(sym); ipaMark(sym, 'pr'); }); row.appendChild(a); }
  const hasVid = !!IPA_VID[sym];
  if (hasVid) { const b = prEl('button', 'p2-l1', '🎬 Xem video đọc mẫu'); b.addEventListener('click', () => { ipaVidPlay(sym); ipaMark(sym, 'pr'); }); row.appendChild(b); }
  else { const b = prEl('button', null, '🔊 Âm mô phỏng'); b.addEventListener('click', () => { ipaSim(sym); ipaMark(sym, 'pr'); }); row.appendChild(b); }
  const words = ipaWords(sym);
  const c = prEl('button', null, '💬 Nghe trong từ “' + words[0] + '”'); c.addEventListener('click', () => { prSay(words[0], 0.6); ipaMark(sym, 'pr'); }); row.appendChild(c);
  const d = prEl('button', null, hasVid ? '🔁 Nghe từ ví dụ, 3 lần' : '🔁 Âm → từ, 3 lần');
  d.addEventListener('click', () => { let n = 0; const go = () => { if (n++ >= 3) return; if (hasVid) { prSay(words[n - 1] || words[0], 0.7); setTimeout(go, 1600); return; } ipaSoundOrSay(sym); const cs = !!IPA_CONS_SAY[sym]; setTimeout(() => { const u = prSay(words[0], 0.7); setTimeout(go, 1800); }, cs ? 2300 : 1100); }; go(); ipaMark(sym, 'pr'); });
  row.appendChild(d);
  sec.appendChild(row);
  sec.appendChild(prEl('div', 'p2-note', hasVid ? 'Âm mẫu: xem giáo viên BBC đọc trong video bên dưới, chú ý khẩu hình. Từ ví dụ do giọng đọc của thiết bị phát.' : ipaRec[sym]
    ? 'Bản ghi là âm mẫu chính; âm mô phỏng tạo bằng máy giúp bạn hình dung đặc điểm của âm; từ ví dụ do giọng đọc của thiết bị phát.'
    : 'Âm mô phỏng được tạo bằng máy (tần số cộng hưởng) để bạn hình dung đặc điểm của âm, không thay thế giọng người. Hãy nghe thêm âm này trong từ ví dụ.'));
  if (prAccent === 'us' && IPA_US[sym]) sec.appendChild(prEl('div', 'p2-us', '🇺🇸 ' + IPA_US[sym]));
  else if (IPA_US[sym]) sec.appendChild(prEl('div', 'p2-us gb', '🇬🇧 Bảng này theo giọng Anh-Anh. ' + IPA_US[sym]));
  body.appendChild(sec);
  ipaMark(sym, 'seen');
}
function ipaStepContrast(s, body) {
  const sym = s[0], cons = IPA_CON[sym];
  if (!cons) return;
  const sec = prEl('div', 'ipa-d-sec p2-step');
  sec.appendChild(prEl('div', 'ipa-d-h', 'Bước 3 · Phân biệt với âm gần giống'));
  cons.forEach(([o, pairs]) => {
    const box = prEl('div', 'tense-card p2-con');
    const h = prEl('div', 'p2-con-h');
    h.appendChild(prEl('b', null, `/${sym}/ – ${o === '∅' ? 'không có âm' : '/' + o + '/'}`));
    if (o !== '∅' && IPA_SOUNDS.some(x => x[0] === o)) { const go = prEl('button', 'sd-link', 'Xem âm /' + o + '/ →'); go.addEventListener('click', () => ipaShow(o)); h.appendChild(go); }
    box.appendChild(h);
    const list = prEl('div', 'p2-pairs');
    pairs.forEach(([a, b2]) => {
      const it = prEl('div', 'p2-pair');
      const x = prEl('button', 'p2-pw', a); x.addEventListener('click', () => { prSay(a, 0.7); ipaMark(sym, 'pr'); });
      const y = prEl('button', 'p2-pw alt', b2); y.addEventListener('click', () => prSay(b2, 0.7));
      const both = prEl('button', 'p2-cmp', '⇄'); both.setAttribute('aria-label', 'Nghe liền hai từ');
      both.addEventListener('click', () => { const u = prSay(a, 0.7); setTimeout(() => prSay(b2, 0.7), 1300); });
      it.appendChild(x); it.appendChild(both); it.appendChild(y);
      list.appendChild(it);
    });
    box.appendChild(list);
    sec.appendChild(box);
  });
  body.appendChild(sec);
}
function ipaTestQs(sym) {
  const qs = [];
  const cons = IPA_CON[sym] || [];
  cons.forEach(([o, pairs]) => pairs.forEach(([a, b]) => {
    const pickA = Math.random() < 0.5, w = pickA ? a : b;
    qs.push({ label: 'Nghe rồi chọn từ bạn vừa nghe', play: () => prSay(w, 0.75), opts: [a + '  /' + sym + '/', b + (o === '∅' ? '  (không /h/)' : '  /' + o + '/')], ans: pickA ? 0 : 1, why: `Từ vừa nghe là “${w}”.` });
  }));
  // bổ sung: từ nào có âm này (so với ví dụ của các âm khác cùng nhóm)
  const s = IPA_SOUNDS.find(x => x[0] === sym);
  const others = IPA_SOUNDS.filter(x => x[1] === s[1] && x[0] !== sym);
  ipaWords(sym).forEach(w => {
    const ds = p2Shuf(others).slice(0, 2).map(x => ipaPlain(x[5][Math.floor(Math.random() * x[5].length)][0]));
    const opts = p2Shuf([w, ...ds]);
    qs.push({ label: `Từ nào có âm /${sym}/?`, play: null, opts, ans: opts.indexOf(w), why: `“${w}” có âm /${sym}/.`, after: () => prSay(w, 0.75) });
  });
  return p2Shuf(qs).slice(0, 6);
}
function ipaStepTest(s, body) {
  const sym = s[0];
  const sec = prEl('div', 'ipa-d-sec p2-step');
  sec.appendChild(prEl('div', 'ipa-d-h', 'Bước 5 · Kiểm tra'));
  sec.appendChild(prEl('p', 'p2-note', 'Nghe và chọn đúng ít nhất 80% để đạt. Đạt vào 2 ngày khác nhau thì âm được tính là “Thành thạo”. Sau đó thử nói vào micro.'));
  const box = prEl('div', 'p2-testbox');
  const start = prEl('button', 'btn-primary', '🧪 Bắt đầu kiểm tra (6 câu)');
  start.addEventListener('click', () => {
    p2Quiz(box, ipaTestQs(sym), (p, sc, n, bx) => {
      ipaMark(sym, 'test', p);
      bx.appendChild(prEl('div', 'vc-done-big ' + (p >= 80 ? 'p2-ok' : 'p2-bad'), `${sc} / ${n}`));
      bx.appendChild(prEl('div', 'ls-verdict', p >= 80 ? (ipaSt(sym) === 'master' ? '🏆 Thành thạo! Bạn đã đạt bài kiểm tra vào 2 ngày khác nhau.' : '✓ Đạt! Hãy làm lại vào một ngày khác để thành “Thành thạo”.') : 'Chưa đạt. Nghe lại bước 1 và bước 3 rồi thử lại nhé.'));
      const t = prEl('div', 'pr-sec-title', 'Thử nói: đọc to 3 từ ví dụ');
      bx.appendChild(t);
      bx.appendChild(prSpeakBox(ipaWords(sym).join(', '), pct => ipaMark(sym, 'sp', pct)));
      const again = prEl('button', 'btn-ghost', '🔄 Làm lại'); again.addEventListener('click', () => start.click()); bx.appendChild(again);
      const st = document.querySelector('#ipa-body .p2-sst'); if (st) st.replaceWith(ipaStatusLine(sym));
      ipaRefreshTile(sym);
    });
  });
  box.appendChild(start);
  sec.appendChild(box);
  body.appendChild(sec);
}

/* ---------- phân biệt âm dễ nhầm ---------- */
let pairBest = p2Load(P2.pairs, {}); if (!pairBest || typeof pairBest !== 'object') pairBest = {};
function prOpenPairs(id) {
  if (!id) {
    const v = p2View('⚖️', 'Minimal pairs', `${PAIR_GROUPS.length} nhóm cặp âm · nghe & chọn · nghe & phân loại · luyện nói`);
    v.appendChild(prEl('p', 'ls-level-desc', 'Có thể bạn nói một âm khá tốt nhưng vẫn chưa nghe ra khác biệt. Mỗi nhóm có danh sách cặp từ và hai bài kiểm tra nghe.'));
    [1, 2, 3].forEach(lv => {
      v.appendChild(prEl('div', 'tense-group-title', PAIR_LV[lv]));
      const grid = prEl('div', 'vc-grid');
      PAIR_GROUPS.filter(g => g.lv === lv).forEach(g => {
        const b = prEl('button', 'vc-topic' + (pairBest[g.id] >= 80 ? ' done' : ''));
        b.appendChild(prEl('span', 'vc-ticon p2-pg-ic', `/${g.a}/ /${g.b}/`));
        b.appendChild(prEl('span', 'vc-tvi', `${g.pairs[0][0]} – ${g.pairs[0][1]}`));
        b.appendChild(prEl('span', 'vc-tmeta', pairBest[g.id] != null ? `Tốt nhất ${pairBest[g.id]}%` : `${g.pairs.length} cặp từ`));
        b.addEventListener('click', () => { prOpenPairs(g.id); p2Top(); });
        grid.appendChild(b);
      });
      v.appendChild(grid);
    });
    return;
  }
  const g = PAIR_GROUPS.find(x => x.id === id);
  const v = p2View('⚖️', `/${g.a}/ và /${g.b}/`, `${PAIR_LV[g.lv]} · ${g.pairs.length} cặp từ`, () => prOpenPairs());
  const tip = prEl('div', 'pr-set-tip pr-set-tip2');
  const sa = IPA_SOUNDS.find(x => x[0] === g.a), sb = IPA_SOUNDS.find(x => x[0] === g.b);
  tip.textContent = `/${g.a}/: ${sa ? sa[3] : ''}  ·  /${g.b}/: ${sb ? sb[3] : ''}`;
  v.appendChild(tip);
  const card = prEl('div', 'tense-card p2-con');
  const list = prEl('div', 'p2-pairs');
  g.pairs.forEach(([a, b]) => {
    const it = prEl('div', 'p2-pair');
    const x = prEl('button', 'p2-pw', a); x.addEventListener('click', () => prSay(a, 0.7));
    const y = prEl('button', 'p2-pw alt', b); y.addEventListener('click', () => prSay(b, 0.7));
    const both = prEl('button', 'p2-cmp', '⇄'); both.addEventListener('click', () => { prSay(a, 0.7); setTimeout(() => prSay(b, 0.7), 1300); });
    it.appendChild(x); it.appendChild(both); it.appendChild(y); list.appendChild(it);
  });
  card.appendChild(list);
  const sp = prEl('div', 'pr-sec-title', 'Luyện nói cả cặp'); card.appendChild(sp);
  card.appendChild(prSpeakBox(g.pairs.map(p => p.join(' ')).join(', ')));
  v.appendChild(card);
  const acts = prEl('div', 'ls-sum-btns p2-acts');
  const box = prEl('div', 'p2-testbox');
  const done = (p, sc, n, bx) => {
    if (pairBest[g.id] == null || p > pairBest[g.id]) { pairBest[g.id] = p; p2Save(P2.pairs, pairBest); }
    bx.appendChild(prEl('div', 'vc-done-big ' + (p >= 80 ? 'p2-ok' : 'p2-bad'), `${sc} / ${n}`));
    bx.appendChild(prEl('div', 'ls-verdict', p >= 80 ? 'Tai bạn đã phân biệt được hai âm này!' : 'Nghe lại từng cặp bằng nút ⇄ rồi thử lại nhé.'));
    if (p < 80) [g.a, g.b].forEach(sym => { const r = ipaP[sym] || (ipaP[sym] = { pr: 0, sp: 0, pass: [], fail: 0 }); r.fail = (r.fail || 0) + 1; }); p2Save(P2.prog, ipaP);
  };
  const t1 = prEl('button', 'btn-primary', '🎧 Nghe & chọn');
  t1.addEventListener('click', () => {
    const qs = p2Shuf([...g.pairs, ...g.pairs]).slice(0, 8).map(([a, b]) => { const A = Math.random() < 0.5, w = A ? a : b; return { label: 'Bạn vừa nghe từ nào?', play: () => prSay(w, 0.75), opts: [a, b], ans: A ? 0 : 1, why: `Đó là “${w}” (${A ? '/' + g.a + '/' : '/' + g.b + '/'}).` }; });
    p2Quiz(box, qs, done); try { box.scrollIntoView({ block: 'start', behavior: 'smooth' }); } catch (e) {}
  });
  const t2 = prEl('button', 'btn-ghost', '🗂️ Nghe & phân loại âm');
  t2.addEventListener('click', () => {
    const words = p2Shuf(g.pairs.flatMap(([a, b]) => [[a, 0], [b, 1]])).slice(0, 8);
    const qs = words.map(([w, side]) => ({ label: 'Từ vừa nghe chứa âm nào?', play: () => prSay(w, 0.75), opts: [`/${g.a}/ như ${ipaName(g.a)}`, g.b === '∅' ? 'không có âm này' : `/${g.b}/ như ${ipaName(g.b)}`], ans: side, why: `“${w}” có âm ${side ? '/' + g.b + '/' : '/' + g.a + '/'}.` }));
    p2Quiz(box, qs, done); try { box.scrollIntoView({ block: 'start', behavior: 'smooth' }); } catch (e) {}
  });
  acts.appendChild(t1); acts.appendChild(t2);
  v.appendChild(acts); v.appendChild(box);
}

/* ---------- trọng âm và ngữ điệu ---------- */
let stressBest = p2Load(P2.stress, {}) || {};
function prOpenStress() {
  const v = p2View('🎯', 'Stress & intonation', 'Trọng âm từ · trọng âm câu · ngữ điệu lên xuống');
  // trọng âm từ
  v.appendChild(prEl('div', 'tense-group-title', '1. Trọng âm từ'));
  const c1 = prEl('div', 'tense-card p2-sec');
  c1.appendChild(prEl('p', 'tn-goal', 'Âm tiết được nhấn đọc to hơn, dài hơn và cao giọng hơn; các âm tiết khác đọc nhẹ, nguyên âm thường thành /ə/. Cùng một gốc từ, trọng âm có thể chuyển chỗ:'));
  ['photograph', 'photography', 'photographic'].forEach(w => { const r = prEl('div', 'p2-srow'); r.appendChild(prEl('b', 'p2-sw', w)); r.appendChild(stressEl(w)); c1.appendChild(r); });
  ['economy', 'economic'].forEach(w => { const r = prEl('div', 'p2-srow'); r.appendChild(prEl('b', 'p2-sw', w)); r.appendChild(stressEl(w)); c1.appendChild(r); });
  c1.appendChild(prEl('div', 'p2-note', 'Chạm từng âm tiết để nghe tách riêng (giọng máy đọc tách âm tiết chỉ gần đúng), rồi bấm “Cả từ”. Vị trí nhấn của các từ này đã được kiểm tra sẵn theo giọng Anh-Anh.'));
  const box1 = prEl('div', 'p2-testbox');
  const st1 = prEl('button', 'btn-primary', `🧪 Kiểm tra trọng âm (10 từ)` + (stressBest.word != null ? ` · tốt nhất ${stressBest.word}%` : ''));
  st1.addEventListener('click', () => {
    const ws = p2Shuf(Object.keys(STRESS_DB).filter(w => STRESS_DB[w][0].split('·').length >= 2)).slice(0, 10);
    p2Quiz(box1, ws.map(w => { const e = stressOf(w); return { label: 'Âm tiết nào được nhấn?', prompt: e.parts.join(' · '), play: () => prSay(w, 0.7), opts: e.parts, ans: e.at, why: `${e.parts.map((p, k) => k === e.at ? p.toUpperCase() : p).join(' · ')}` }; }),
      (p, sc, n, bx) => { if (stressBest.word == null || p > stressBest.word) { stressBest.word = p; p2Save(P2.stress, stressBest); } bx.appendChild(prEl('div', 'vc-done-big', `${sc} / ${n}`)); bx.appendChild(prEl('div', 'ls-verdict', p >= 80 ? 'Rất tốt! Bạn nghe ra trọng âm.' : 'Nghe lại từng từ, chú ý âm tiết dài và cao nhất.')); });
  });
  box1.appendChild(st1); c1.appendChild(box1);
  v.appendChild(c1);
  // trọng âm câu
  v.appendChild(prEl('div', 'tense-group-title', '2. Trọng âm câu'));
  const c2 = prEl('div', 'tense-card p2-sec');
  c2.appendChild(prEl('p', 'tn-goal', 'Cùng một câu, nhấn vào từ khác nhau sẽ đổi ý muốn nói. Giọng máy không nhấn được theo ý, nên hãy tự đọc to theo chữ in hoa rồi ghi âm để so.'));
  SENT_STRESS.forEach(x => {
    const it = prEl('div', 'p2-ss');
    it.appendChild(prEl('div', 'p2-ss-vi', x.vi));
    x.opts.forEach(([k, why]) => {
      const r = prEl('div', 'p2-ss-row');
      const s = prEl('div', 'p2-ss-s');
      x.w.forEach((w, i) => s.appendChild(prEl('span', i === k ? 'on' : null, i === k ? w.toUpperCase() : w)));
      r.appendChild(s);
      r.appendChild(prEl('div', 'p2-ss-why', why));
      it.appendChild(r);
    });
    const pb = prEl('button', 'ls-slow', '▶ Nghe câu bình thường'); pb.addEventListener('click', () => prSay(x.s, 0.85)); it.appendChild(pb);
    c2.appendChild(it);
  });
  const box2 = prEl('div', 'p2-testbox');
  const st2 = prEl('button', 'btn-primary', '🧪 Chọn từ cần nhấn theo ngữ cảnh' + (stressBest.sent != null ? ` · tốt nhất ${stressBest.sent}%` : ''));
  st2.addEventListener('click', () => {
    const qs = p2Shuf(SENT_STRESS.flatMap(x => x.q.map(([ctx, k]) => ({ label: `Người kia hỏi: “${ctx}”. Bạn trả lời “${x.s}” và nhấn vào từ nào?`, opts: x.opts.map(o => x.w[o[0]].replace(/[.?]$/, '')), ans: x.opts.findIndex(o => o[0] === k), why: x.opts.find(o => o[0] === k)[1] }))));
    p2Quiz(box2, qs, (p, sc, n, bx) => { if (stressBest.sent == null || p > stressBest.sent) { stressBest.sent = p; p2Save(P2.stress, stressBest); } bx.appendChild(prEl('div', 'vc-done-big', `${sc} / ${n}`)); });
  });
  box2.appendChild(st2); c2.appendChild(box2);
  c2.appendChild(prSpeakBox(SENT_STRESS[0].s));
  v.appendChild(c2);
  // ngữ điệu
  v.appendChild(prEl('div', 'tense-group-title', '3. Ngữ điệu lên ↗ và xuống ↘'));
  const c3 = prEl('div', 'tense-card p2-sec');
  INTON.forEach(([ar, t, s, why]) => {
    const r = prEl('div', 'p2-in');
    r.appendChild(prEl('span', 'p2-in-ar', ar));
    const tx = prEl('div'); tx.appendChild(prEl('b', null, t)); tx.appendChild(prEl('div', 'p2-in-s', s)); tx.appendChild(prEl('div', 'p2-in-why', why)); r.appendChild(tx);
    const pb = prEl('button', 'irr-conf-play', '▶'); pb.addEventListener('click', () => prSay(s, 0.85)); r.appendChild(pb);
    c3.appendChild(r);
  });
  c3.appendChild(prEl('div', 'p2-note', 'Đây là xu hướng thường gặp, không phải quy tắc bắt buộc: người bản xứ vẫn có thể lên giọng ở câu hỏi Wh- để tỏ ra thân thiện, hoặc tùy giọng địa phương.'));
  const box3 = prEl('div', 'p2-testbox');
  const st3 = prEl('button', 'btn-primary', '🧪 Lên hay xuống giọng ở cuối?' + (stressBest.inton != null ? ` · tốt nhất ${stressBest.inton}%` : ''));
  st3.addEventListener('click', () => {
    p2Quiz(box3, p2Shuf(INTON_Q).map(([s, a]) => ({ label: 'Cuối câu này giọng thường đi lên hay xuống?', prompt: s, play: () => prSay(s, 0.85), opts: ['↗ Lên', '↘ Xuống'], ans: a === '↗' ? 0 : 1, why: a === '↗' ? 'Câu hỏi Yes/No thường lên giọng.' : /\?$/.test(s) ? 'Câu hỏi có từ để hỏi thường xuống giọng.' : 'Câu kể thường xuống giọng.' })),
      (p, sc, n, bx) => { if (stressBest.inton == null || p > stressBest.inton) { stressBest.inton = p; p2Save(P2.stress, stressBest); } bx.appendChild(prEl('div', 'vc-done-big', `${sc} / ${n}`)); });
  });
  box3.appendChild(st3); c3.appendChild(box3);
  v.appendChild(c3);
}

/* ---------- kiểm tra tổng hợp ---------- */
let prTestBest = p2Load(P2.test, null);
function prOpenTest() {
  const v = p2View('📝', 'Pronunciation test', '12 câu: nghe phân biệt cặp âm, nhận ra âm trong từ, trọng âm và ngữ điệu');
  if (prTestBest != null) v.appendChild(prEl('p', 'ls-level-desc', `Kết quả tốt nhất: ${prTestBest}%.`));
  const weak = ipaWeak();
  const box = prEl('div', 'p2-testbox');
  const run = () => {
    const qs = [];
    // ưu tiên nhóm cặp âm có âm bạn hay sai
    const groups = p2Shuf(PAIR_GROUPS).sort((x, y) => (weak.includes(y.a) || weak.includes(y.b) ? 1 : 0) - (weak.includes(x.a) || weak.includes(x.b) ? 1 : 0)).slice(0, 4);
    groups.forEach(g => { const [a, b] = g.pairs[Math.floor(Math.random() * g.pairs.length)]; const A = Math.random() < 0.5, w = A ? a : b; qs.push({ label: 'Bạn vừa nghe từ nào?', play: () => prSay(w, 0.75), opts: [a, b], ans: A ? 0 : 1, why: `“${w}” · /${A ? g.a : g.b}/` }); });
    p2Shuf(IPA_SOUNDS).slice(0, 4).forEach(s => {
      const w = ipaPlain(s[5][0][0]);
      const others = p2Shuf(IPA_SOUNDS.filter(x => x[1] === s[1] && x[0] !== s[0])).slice(0, 2).map(x => x[0]);
      const opts = p2Shuf([s[0], ...others]);
      qs.push({ label: `Từ “${w}” có âm nào được tô đậm trong ví dụ?`, play: () => prSay(w, 0.75), opts: opts.map(o => '/' + o + '/'), ans: opts.indexOf(s[0]), why: `${s[5][0][0].replace(/\[|\]/g, '')} ${s[5][0][1]}` });
    });
    p2Shuf(Object.keys(STRESS_DB)).slice(0, 2).forEach(w => { const e = stressOf(w); qs.push({ label: `Âm tiết nào của “${w}” được nhấn?`, play: () => prSay(w, 0.7), opts: e.parts, ans: e.at, why: e.parts.map((p, k) => k === e.at ? p.toUpperCase() : p).join(' · ') }); });
    p2Shuf(INTON_Q).slice(0, 2).forEach(([s, a]) => qs.push({ label: 'Cuối câu giọng thường lên hay xuống?', prompt: s, play: () => prSay(s, 0.85), opts: ['↗ Lên', '↘ Xuống'], ans: a === '↗' ? 0 : 1 }));
    p2Quiz(box, p2Shuf(qs), (p, sc, n, bx) => {
      if (prTestBest == null || p > prTestBest) { prTestBest = p; p2Save(P2.test, p); }
      bx.appendChild(prEl('div', 'vc-done-big ' + (p >= 80 ? 'p2-ok' : 'p2-bad'), `${sc} / ${n}`));
      bx.appendChild(prEl('div', 'ls-verdict', p >= 80 ? 'Rất tốt!' : 'Xem lại các nhóm cặp âm và trọng âm rồi làm lại nhé.'));
      const again = prEl('button', 'btn-primary', '🔄 Làm đề mới'); again.addEventListener('click', run); bx.appendChild(again);
    });
  };
  const st = prEl('button', 'btn-primary', '🧪 Bắt đầu'); st.addEventListener('click', run);
  box.appendChild(st);
  v.appendChild(box);
}

/* ---------- trang chủ tab phát âm ---------- */
function p2HomeTop() {
  const wrap = prEl('div', 'p2-home');
  const card = prEl('div', 'tense-card vc-prog p2-prog');
  const top = prEl('div', 'vc-prog-top');
  const nums = prEl('div');
  const n = prEl('div', 'vc-prog-n'); n.appendChild(prEl('b', null, String(ipaMastered()))); n.appendChild(document.createTextNode(' / ' + IPA_SOUNDS.length)); nums.appendChild(n);
  nums.appendChild(prEl('div', 'vc-prog-l', 'âm đã thành thạo (đạt bài kiểm tra 2 ngày khác nhau)'));
  top.appendChild(nums);
  const acc = prEl('div', 'p2-accent');
  [['gb', '🇬🇧 British'], ['us', '🇺🇸 American']].forEach(([k, t]) => {
    const b = prEl('button', 'colloc-chip' + (prAccent === k ? ' active' : ''), t);
    b.addEventListener('click', () => { prAccent = k; p2Save(P2.accent, k); prShowHome(); });
    acc.appendChild(b);
  });
  top.appendChild(acc);
  card.appendChild(top);
  const bar = prEl('span', 'vc-bar'); const f = prEl('span'); f.style.width = (ipaMastered() / IPA_SOUNDS.length * 100) + '%'; bar.appendChild(f); card.appendChild(bar);
  const cnt = {}; IPA_SOUNDS.forEach(s => { const k = ipaSt(s[0]); cnt[k] = (cnt[k] || 0) + 1; });
  card.appendChild(prEl('div', 'p2-stline', Object.keys(IPA_ST).map(k => `${IPA_ST[k][1]} ${cnt[k] || 0} ${IPA_ST[k][0].toLowerCase()}`).join(' · ')));
  const v = prAccentVoice();
  card.appendChild(prEl('div', 'p2-note', (prAccent === 'us' ? '🇺🇸 Đang học giọng Anh-Mỹ. Bảng IPA vẫn là mô hình Anh-Anh, mỗi âm có ghi chú điểm khác của giọng Mỹ. ' : '🇬🇧 Đang học giọng Anh-Anh: bảng IPA là mô hình tham chiếu Anh-Anh, không đọc /r/ ở cuối âm tiết. ') +
    (v ? `Giọng đọc mẫu: ${v.name}.` : 'Thiết bị chưa có giọng đọc phù hợp nên dùng giọng mặc định; có thể cài thêm giọng trong cài đặt của máy.')));
  const weak = ipaWeak().slice(0, 8);
  if (weak.length) {
    const w = prEl('div', 'p2-weak');
    w.appendChild(prEl('span', null, '🔁 Âm cần luyện lại:'));
    weak.forEach(sym => { const b = prEl('button', 'p2-weak-b', '/' + sym + '/'); b.addEventListener('click', () => { prOpenIpa(); setTimeout(() => ipaShow(sym), 50); }); w.appendChild(b); });
    card.appendChild(w);
  }
  wrap.appendChild(card);
  const secs = [
    ['01', '/æ/', 'IPA chart · 44 sounds', 'Nguyên âm đơn · Nguyên âm đôi · Phụ âm', () => prOpenIpa()],
    ['02', '👄', 'Sound by sound', 'Nghe mẫu · Khẩu hình · Ví dụ · Phân biệt · Kiểm tra', () => { prOpenIpa(); const first = IPA_SOUNDS.find(s => ipaSt(s[0]) !== 'master') || IPA_SOUNDS[0]; setTimeout(() => ipaShow(first[0]), 50); }],
    ['03', '⚖️', 'Minimal pairs', `${PAIR_GROUPS.length} nhóm · nghe & chọn · nghe & phân loại`, () => prOpenPairs()],
    ['04', '🎯', 'Stress & intonation', 'Trọng âm từ · Trọng âm câu · Ngữ điệu', () => prOpenStress()],
    ['05', 'a‿b', 'Connected speech', 'Linking · Weak forms · Elision · Assimilation', () => prOpenLink()],
    ['06', '📝', 'Pronunciation test', 'Nghe, nhận diện, trọng âm, ngữ điệu' + (prTestBest != null ? ` · tốt nhất ${prTestBest}%` : ''), () => prOpenTest()]
  ];
  const grid = prEl('div', 'p2-secs');
  secs.forEach(([no, ic, t, sub, fn]) => {
    const b = prEl('button', 'p2-secb');
    b.appendChild(prEl('span', 'p2-sec-no', no));
    b.appendChild(prEl('span', 'p2-sec-ic', ic));
    const tx = prEl('span', 'p2-sec-tx'); tx.appendChild(prEl('b', null, t)); tx.appendChild(prEl('span', null, sub)); b.appendChild(tx);
    b.addEventListener('click', () => { fn(); p2Top(); });
    grid.appendChild(b);
  });
  wrap.appendChild(grid);
  return wrap;
}

/* ---------- tra cứu: lịch sử, yêu thích, gợi ý, cụm từ ---------- */
let prHist = p2Load(P2.hist, []); if (!Array.isArray(prHist)) prHist = [];
let prFav = p2Load(P2.fav, []); if (!Array.isArray(prFav)) prFav = [];
function prHistAdd(t) { t = t.trim(); if (!t || t.length > 120) return; prHist = [t, ...prHist.filter(x => x.toLowerCase() !== t.toLowerCase())].slice(0, 10); p2Save(P2.hist, prHist); prLookupChips(); }
function prFavToggle(t) { const i = prFav.findIndex(x => x.toLowerCase() === t.toLowerCase()); if (i >= 0) prFav.splice(i, 1); else prFav.unshift(t); prFav = prFav.slice(0, 50); p2Save(P2.fav, prFav); prLookupChips(); return i < 0; }
function prLookupChips() {
  let box = document.getElementById('p2-lchips');
  if (!box) { box = prEl('div', 'p2-lchips'); box.id = 'p2-lchips'; const q = document.getElementById('pron-quick'); if (!q) return; q.after(box); }
  box.innerHTML = '';
  const row = (label, items, cls) => { if (!items.length) return; const r = prEl('div', 'p2-lrow'); r.appendChild(prEl('span', 'p2-llab', label)); items.forEach(t => { const b = prEl('button', 'p2-lchip ' + (cls || ''), t); b.addEventListener('click', () => { prLoad(t); prHistAdd(t); }); r.appendChild(b); }); box.appendChild(r); };
  row('★ Yêu thích', prFav.slice(0, 12), 'fav');
  row('🕘 Gần đây', prHist.slice(0, 8));
  const det = prEl('details', 'p2-phr'); det.appendChild(prEl('summary', null, '💬 Cụm từ thông dụng'));
  const r = prEl('div', 'p2-lrow'); PR_PHRASES.forEach(t => { const b = prEl('button', 'p2-lchip', t); b.addEventListener('click', () => { prLoad(t); prHistAdd(t); }); r.appendChild(b); }); det.appendChild(r); box.appendChild(det);
}
// gợi ý từ khi gõ (datalist)
(function prSuggest() {
  const inp = document.getElementById('pron-input'); if (!inp) return;
  const dl = document.createElement('datalist'); dl.id = 'pron-sugg'; inp.after(dl); inp.setAttribute('list', 'pron-sugg');
  let t = 0;
  inp.addEventListener('input', () => {
    clearTimeout(t);
    t = setTimeout(() => {
      const q = inp.value.trim().toLowerCase();
      dl.innerHTML = '';
      if (q.length < 2 || /\s/.test(q)) return;
      try { prLookup('a'); } catch (e) {}
      const out = [];
      if (PR_IDX) for (const k of PR_IDX.keys()) { if (k.startsWith(q)) { out.push(k); if (out.length >= 8) break; } }
      out.forEach(k => { const o = document.createElement('option'); o.value = k; dl.appendChild(o); });
    }, 150);
  });
})();
// hướng dẫn đọc cả câu (gần đúng): từ được nhấn, dạng yếu, nối âm, ngữ điệu
const P2_FUNC = new Set("a an the and but or so to of in on at for with from by as is am are was were be been do does did have has had i you he she it we they me him her us them my your his its our their this that these those there not can could will would shall should may might must just than then if when because who which what where how".split(' '));
const P2_WEAK = { to: 'tə', for: 'fə', and: 'ən', of: 'əv', can: 'kən', at: 'ət', from: 'frəm', a: 'ə', the: 'ðə', was: 'wəz', were: 'wə', have: 'əv', has: 'əz', do: 'də', you: 'jə', them: 'ðəm', some: 'səm', than: 'ðən', but: 'bət', are: 'ə' };
function prSentGuide(text) {
  const toks = text.split(/\s+/).filter(Boolean), cl = t => t.toLowerCase().replace(/[’]/g, "'").replace(/^[^a-z']+|[^a-z']+$/g, '');
  const d = prEl('details', 'tense-card p2-guide');
  d.appendChild(prEl('summary', null, '🗣 Cách đọc cả câu (gợi ý tự động, gần đúng)'));
  const ul = prEl('ul', 'sd-tip-ol');
  const add = (h, t) => { const li = prEl('li'); li.appendChild(prEl('b', null, h + ': ')); li.appendChild(document.createTextNode(t)); ul.appendChild(li); };
  const cont = [...new Set(toks.map(cl).filter(w => w && !P2_FUNC.has(w)))];
  if (cont.length) add('Nhấn vào', cont.join(', '));
  const weak = [...new Set(toks.map(cl).filter(w => P2_WEAK[w]))];
  if (weak.length) add('Đọc yếu', weak.map(w => `${w} /${P2_WEAK[w]}/`).join(', '));
  const links = [];
  toks.forEach((t, k) => { const a = cl(t), b = cl(toks[k + 1] || ''); if (a && b && /[bcdfgklmnpstvxz]$/.test(a) && !/[,.;:!?]$/.test(t) && /^[aeiou]/.test(b) && !/^(u(se|ni)|one|eu)/.test(b)) links.push(a + '‿' + b); });
  if (links.length) add('Nối âm', links.join(', '));
  const last = text.trim(), first = cl(toks[0] || '');
  add('Ngữ điệu cuối câu', /\?$/.test(last) ? (/^(what|where|when|who|why|which|how)$/.test(first) ? '↘ câu hỏi có từ để hỏi' : '↗ câu hỏi Yes/No') : '↘ câu kể');
  d.appendChild(ul);
  d.appendChild(prEl('div', 'p2-note', 'Nối âm và đọc yếu là cách nói thường gặp trong giao tiếp nhanh, không bắt buộc với mọi người nói hay mọi giọng.'));
  return d;
}

whenPageShown('page-pron', pronSets, renderPronSets);
// leaving the tab stops the "play all" loop
document.querySelectorAll('nav.tabbar button').forEach(b => b.addEventListener('click', () => { if (b.dataset.page !== 'page-pron') prSeqStop(); }));

// quick word chips: words Vietnamese learners often say wrong
['comfortable', 'vegetable', 'Wednesday', 'clothes', 'develop', 'schedule', 'temperature', 'pronunciation'].forEach(w => {
  const btn = document.createElement('button');
  btn.textContent = w;
  btn.addEventListener('click', () => prLoad(w));
  pronQuick.appendChild(btn);
});

pronGoBtn.addEventListener('click', () => { renderPronResult(pronInput.value); if (pronInput.value.trim()) { prSay(pronInput.value.trim()); prHistAdd(pronInput.value); } });
prLookupChips();
pronInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { renderPronResult(pronInput.value); if (pronInput.value.trim()) { prSay(pronInput.value.trim()); prHistAdd(pronInput.value); } }
});

/* ============================================================
   UI WIRING - Tab navigation
============================================================ */
const tabButtons = document.querySelectorAll('nav.tabbar button');
const pages = document.querySelectorAll('.page');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.page).classList.add('active');
  });
});

/* ============================================================
   UI WIRING - Tenses page
============================================================ */
/* ---------- Tenses by CEFR level (A1 → C1) ---------- */
const tensesList = document.getElementById('grammar-root');   // the Tenses lessons live in the Grammar tab
const TN_LEVELS = [
  { n: 1, code: 'A1', vi: 'Mới bắt đầu', goal: 'Nói về bản thân, thói quen hằng ngày và việc đang làm. Kể đơn giản hôm qua ở đâu, thế nào.' },
  { n: 2, code: 'A2', vi: 'Sơ cấp', goal: 'Kể lại chuyện đã xảy ra, nói về kế hoạch, dự định và kinh nghiệm của bản thân.' },
  { n: 3, code: 'B1', vi: 'Trung cấp', goal: 'Kể chuyện có trước có sau, nhấn mạnh quá trình, nói về việc sẽ đang diễn ra, và dùng đúng thì với động từ trạng thái.' },
  { n: 4, code: 'B2', vi: 'Trung cao cấp', goal: 'Diễn đạt chính xác mốc thời gian phức tạp ở quá khứ và tương lai, kể lại dự định và lời nói trong quá khứ.' },
  { n: 5, code: 'C1', vi: 'Nâng cao', goal: 'Dùng thì một cách tinh tế: nhấn mạnh độ dài, nói lịch sự và giảm nhẹ, và dùng đảo ngữ trong văn phong trang trọng.' }
];
const TN_LV_KEY = 'hoc-tieng-anh-tense-level', TN_DONE_KEY = 'hoc-tieng-anh-tense-done';
let tnLevel = 1, tnDone = new Set();
try { tnLevel = Math.min(5, Math.max(1, +localStorage.getItem(TN_LV_KEY) || 1)); } catch (e) {}
try { const a = JSON.parse(localStorage.getItem(TN_DONE_KEY) || '[]'); if (Array.isArray(a)) tnDone = new Set(a); } catch (e) {}
const tnEl = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
const tnOf = n => TENSES.filter(t => t.lv === n);
const tnGot = n => tnOf(n).filter(t => tnDone.has(t.id)).length;

function tnPlay(text, aria) {
  const b = tnEl('span', 'play-mini', '▶');
  b.setAttribute('role', 'button'); b.setAttribute('aria-label', aria || ('Nghe: ' + text)); b.tabIndex = 0;
  b.addEventListener('click', e => { e.stopPropagation(); speak(text, 0.85); });
  return b;
}

function tnTop() {
  const m = document.querySelector('main');
  window.scrollTo(0, m ? Math.max(0, m.offsetTop - 8) : 0);
}

/* v126: viết rõ chủ ngữ cho từng dạng (am/is/are, do/does, have/has, was/were…) để người học khỏi phải đoán "S" là ai */
function fxSplit(txt) {
  const out = []; let d = 0, cur = '';
  const t = String(txt);
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (c === '(') d++; else if (c === ')') d = Math.max(0, d - 1);
    if (!d && c === '·' && /\s/.test(t[i - 1] || '') && /\s/.test(t[i + 1] || '')) { out.push(cur.trim()); cur = ''; continue; }
    cur += c;
  }
  out.push(cur.trim());
  return out.filter(Boolean);
}
const FX_SG = { i: 'I', hsi: 'He/She/It', ywt: 'You/We/They', iywt: 'I/You/We/They', ihsi: 'I/He/She/It', all: 'I/You/He/She/It/We/They' };
function fxSubjTxt(k, cap) { const v = FX_SG[k]; return cap ? v : v.replace(/(^|\/)(He|She|It|You|We|They)/g, (m, a, b) => a + b.toLowerCase()); }
const FX_SUBJ_RE = "(?:Chủ ngữ|chủ ngữ|(?<![\\w'’/])S(?![\\w'’]))";
function fxWord(w) { return w.split(' ').map(x => '[' + x[0].toUpperCase() + x[0].toLowerCase() + ']' + x.slice(1).replace(/'/g, "['’]")).join('\\s+'); }
const FX_RULES = [
  // chủ ngữ đứng trước
  [1, ['have', 'has', 'had'], [['iywt', 'have'], ['hsi', 'has'], ['all', 'had']]],
  [1, ['have to', 'has to'], [['iywt', 'have to'], ['hsi', 'has to']]],
  [1, ['have', 'has'], [['iywt', 'have'], ['hsi', 'has']]],
  [1, ['do', 'does', 'did'], [['iywt', 'do'], ['hsi', 'does'], ['all', 'did']]],
  [1, ['do', 'does'], [['iywt', 'do'], ['hsi', 'does']]],
  [1, ["don't", "doesn't"], [['iywt', "don't"], ['hsi', "doesn't"]]],
  [1, ['get', 'gets', 'got'], [['iywt', 'get'], ['hsi', 'gets'], ['all', 'got']]],
  [1, ['get', 'gets'], [['iywt', 'get'], ['hsi', 'gets']]],
  [1, ["'m not", "isn't", "aren't"], [['i', "'m not"], ['hsi', "isn't"], ['ywt', "aren't"]]],
  [1, ['am', 'is', 'are'], [['i', 'am'], ['hsi', 'is'], ['ywt', 'are']]],
  [1, ["wasn't", "weren't"], [['ihsi', "wasn't"], ['ywt', "weren't"]]],
  [1, ['was', 'were'], [['ihsi', 'was'], ['ywt', 'were']]],
  // trợ động từ đứng trước (câu hỏi)
  [0, ['am', 'is', 'are', 'was', 'were'], [['i', 'am'], ['hsi', 'is'], ['ywt', 'are'], ['ihsi', 'was'], ['ywt', 'were']]],
  [0, ['am', 'is', 'are'], [['i', 'am'], ['hsi', 'is'], ['ywt', 'are']]],
  [0, ['was', 'were'], [['ihsi', 'was'], ['ywt', 'were']]],
  [0, ['do', 'does', 'did'], [['iywt', 'do'], ['hsi', 'does'], ['all', 'did']]],
  [0, ['do', 'does', 'can'], [['iywt', 'do'], ['hsi', 'does'], ['all', 'can']]],
  [0, ['do', 'does'], [['iywt', 'do'], ['hsi', 'does']]],
  [0, ['have', 'has', 'had'], [['iywt', 'have'], ['hsi', 'has'], ['all', 'had']]],
  [0, ['have', 'has'], [['iywt', 'have'], ['hsi', 'has']]]
].map(([sf, words, out]) => {
  const aux = words.map(fxWord).join('\\s*\\/\\s*');
  const re = sf ? new RegExp(FX_SUBJ_RE + '\\s*\\+\\s*' + aux + "(?![\\w'’])") : new RegExp("(?<![\\w'’])" + aux + '\\s*\\+\\s*' + FX_SUBJ_RE);
  return { sf, re, out };
});
function fxExpand(part, depth) {
  depth = depth || 0;
  if (depth < 2) for (const r of FX_RULES) {
    const m = part.match(r.re);
    if (!m) continue;
    const pre = part.slice(0, m.index), post = part.slice(m.index + m[0].length);
    const auxCap = !r.sf && /^[A-Z]/.test(m[0]);
    const cap = r.sf && (!pre.trim() || /^[^+()]{2,24}:\s*$/.test(pre));
    // ví dụ trong ngoặc ở cuối (What is your name?) chỉ giữ ở dòng đầu, khỏi lặp lại
    const exm = post.match(/\s*\([^()]*[?.!][^()]*\)\s*$/);
    // v165: ví dụ đi kèm đúng dòng có cùng trợ động từ (Where is your school? → dòng “is”)
    let jx = 0;
    if (exm) { const ex = exm[0].toLowerCase(); const f = r.out.findIndex(([, a]) => new RegExp("(^|[^\\w'’])" + a.toLowerCase().replace(/['’]/g, "['’]") + "(?![\\w'’])").test(ex)); if (f >= 0) jx = f; }
    return r.out.flatMap(([k, a], j) => {
      const sub = fxSubjTxt(k, cap);
      const aa = auxCap ? a[0].toUpperCase() + a.slice(1) : a;
      const tail = exm && j !== jx ? post.slice(0, exm.index) : post;
      return fxExpand(pre + (r.sf ? sub + ' + ' + aa : aa + ' + ' + sub) + tail, depth + 1);
    });
  }
  // "S" còn lại (không đổi dạng theo chủ ngữ) → "chủ ngữ"
  return [part.replace(/(^|\+\s*|,\s*)S(?=\s*(?:\+|…|\?|$))/g, (m, a) => a + (a ? 'chủ ngữ' : 'Chủ ngữ'))];
}
function fxParts(txt) { return fxSplit(txt).flatMap(p => fxExpand(p)); }
// v164: giải thích chủ ngữ tách từng ý, có bảng đại từ và ví dụ đổi danh từ → đại từ
function fxSubjNote() {
  const el = (t, c, x) => { const e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; };
  const rich = (t, c, html) => { const e = el(t, c); e.innerHTML = html; return e; };
  const d = el('div', 'gx-fx-subj');
  d.appendChild(el('div', 'gx-sj-h', '👤 Chủ ngữ là gì?'));
  d.appendChild(rich('p', 'gx-sj-p', 'Chủ ngữ là <b>người hoặc vật làm hành động</b>, thường đứng <b>đầu câu</b>, trước động từ.'));
  d.appendChild(rich('p', 'gx-sj-ex', '<b>Lan</b> reads books. → chủ ngữ là <b>Lan</b>.'));
  d.appendChild(rich('p', 'gx-sj-p', 'Chủ ngữ có 2 loại: <b>đại từ</b> (I, you, he…) hoặc <b>danh từ</b> (Lan, my mother, the students…).'));
  d.appendChild(el('div', 'gx-sj-h2', '① Đại từ làm chủ ngữ'));
  const g = el('div', 'gx-sj-grid');
  [['I', 'tôi'], ['you', 'bạn / các bạn'], ['he', 'anh ấy, ông ấy'], ['she', 'cô ấy, bà ấy'], ['it', 'nó (con vật, đồ vật)'], ['we', 'chúng tôi, chúng ta'], ['they', 'họ, chúng nó']].forEach(([en, vi]) => {
    const r = el('div', 'gx-sj-row'); r.appendChild(el('b', null, en)); r.appendChild(el('span', null, vi)); g.appendChild(r);
  });
  d.appendChild(g);
  d.appendChild(el('div', 'gx-sj-h2', '② Danh từ làm chủ ngữ — đổi về đại từ để chia động từ'));
  d.appendChild(rich('p', 'gx-sj-p', '<b>Danh từ số ít</b> (chỉ 1 người / 1 vật) → chia giống <b>he / she / it</b>:'));
  const u1 = el('ul', 'gx-sj-ul');
  [['Lan', 'she'], ['my mother', 'she'], ['my father', 'he'], ['the cat', 'it']].forEach(([n, p]) => u1.appendChild(rich('li', null, `${n} → <b>${p}</b>`)));
  d.appendChild(u1);
  d.appendChild(rich('p', 'gx-sj-p', '<b>Danh từ số nhiều</b> (từ 2 người / vật trở lên) → chia giống <b>they</b>:'));
  const u2 = el('ul', 'gx-sj-ul');
  [['my friends', 'they'], ['the students', 'they'], ['Lan and Nam', 'they']].forEach(([n, p]) => u2.appendChild(rich('li', null, `${n} → <b>${p}</b>`)));
  d.appendChild(u2);
  d.appendChild(rich('p', 'gx-sj-tip', '💡 Mẹo: gặp danh từ, hãy hỏi “thay bằng đại từ nào?”, rồi chia động từ theo đại từ đó. Riêng <b>Lan and Nam</b> là 2 người nên dùng <b>they</b>.'));
  return d;
}

/* formula box: every variant on its own line, only the first keeps the badge */
function tnFxBox(rows) {
  const box = tnEl('div', 'tn-formula');
  rows.forEach(([sym, lbl, txt]) => {
    if (!txt) return;
    fxParts(txt).forEach((part, i) => {
      const r = tnEl('div', 'tn-frow' + (i ? ' tn-frow-sub' : ''));
      const s = tnEl('span', 'tn-sym' + (i ? ' tn-sym-ghost' : (sym.length > 1 ? ' tn-sym-w' : '')), i ? '·' : sym);
      if (!i && lbl) s.title = lbl;
      // v165: ví dụ trong ngoặc ở cuối công thức → tách thành dòng riêng “Ví dụ: …”
      const em = part.match(/\s*\(([^()]*[?.!])\)\s*$/);
      const ft = tnEl('span', 'tn-ftxt', em ? part.slice(0, em.index) : part);
      if (em) ft.appendChild(tnEl('span', 'tn-fex', 'Ví dụ: ' + em[1]));
      r.appendChild(s); r.appendChild(ft);
      box.appendChild(r);
    });
  });
  return box;
}

/* Wh- / How- question patterns, shared by the Tenses and Grammar tabs */
function tnQuestionCard(id) {
  const wh = typeof EX_WH_FX !== 'undefined' ? EX_WH_FX[id] : null;
  const how = typeof EX_HOW_FX !== 'undefined' ? EX_HOW_FX[id] : null;
  if (!wh && !how) return null;
  const card = tnEl('div', 'tense-card');
  card.appendChild(tnEl('h3', null, 'Câu hỏi Wh- và How-'));
  if (wh) {
    card.appendChild(tnEl('div', 'tn-sub', 'Wh- · what, where, when, why, who, whom, whose, which'));
    card.appendChild(tnFxBox([['Wh-', 'Câu hỏi Wh-', wh]]));
  }
  if (how) {
    card.appendChild(tnEl('div', 'tn-sub', 'How- · how, how many, how much, how long, how often, how far'));
    card.appendChild(tnFxBox([['How-', 'Câu hỏi How-', how]]));
  }
  return cardFold(card, 'q|' + id);
}

/* jump to the matching lesson in the Exercises tab */
function tnPracticeBtn(id, label) {
  if (typeof EX_DATA === 'undefined' || !EX_DATA[id]) return null;
  const b = tnEl('button', 'btn-ghost gr-practice', label || 'Làm bài tập dịch của bài này →');
  b.addEventListener('click', () => {
    const tab = document.querySelector('nav.tabbar button[data-page="page-exercise"]');
    if (tab) tab.click();
    try { if (typeof exOpenLesson === 'function') exOpenLesson(id); } catch (e) {}
    tnTop();
  });
  return b;
}

/* the lesson list lives in renderGrammarHome(), which shows tenses and grammar together */
function renderTenses(keepScroll) { renderGrammarHome(keepScroll); }

/* ---------- Tenses: one lesson, same layout as the Grammar tab ---------- */
function renderTenseTopicOld(id) {
  const t = TENSES.find(x => x.id === id);
  if (!t) return renderTenses();
  tnLevel = t.lv;
  try { localStorage.setItem(TN_LV_KEY, String(t.lv)); } catch (e) {}
  const L = TN_LEVELS[t.lv - 1], list = mxOf(t.lv), pos = list.findIndex(x => x.k === 'tn' && x.id === t.id);
  tensesList.innerHTML = '';

  if (typeof grSetLevel === 'function') grSetLevel(t.lv);
  const back = tnEl('button', 'gr-back', `← Ngữ pháp ${L.code}`);
  back.addEventListener('click', () => { renderGrammarHome(); tnTop(); });
  tensesList.appendChild(back);

  const head = tnEl('div', 'gr-head');
  head.appendChild(tnEl('div', 'gr-en', `${L.code} · Bài ${pos + 1}/${list.length} · ${t.en}`));
  head.appendChild(tnEl('h2', 'gr-title', t.name));
  tensesList.appendChild(head);

  const fx = tnEl('div', 'tense-card');
  fx.appendChild(tnEl('h3', null, 'Công thức'));
  fx.appendChild(tnFxBox([['+', 'Khẳng định', t.formula.pos], ['−', 'Phủ định', t.formula.neg], ['?', 'Câu hỏi', t.formula.q]]));
  tensesList.appendChild(cardFold(fx, 'tn|' + t.id + '|fx'));

  const q = tnQuestionCard(t.id);
  if (q) tensesList.appendChild(q);

  const use = tnEl('div', 'tense-card');
  use.appendChild(tnEl('h3', null, 'Dùng khi nào'));
  const ul = tnEl('ul', 'tn-usage');
  t.usage.forEach(u => ul.appendChild(tnEl('li', null, u)));
  use.appendChild(ul);
  if (t.signals && t.signals.length) {
    use.appendChild(tnEl('div', 'tn-sub', 'Dấu hiệu nhận biết'));
    const sg = tnEl('div', 'tn-signals');
    t.signals.forEach(x => sg.appendChild(tnEl('span', 'tn-sig', x)));
    use.appendChild(sg);
  }
  tensesList.appendChild(cardFold(use, 'tn|' + t.id + '|use'));

  const ex = tnEl('div', 'tense-card');
  ex.appendChild(tnEl('h3', null, 'Ví dụ'));
  t.examples.forEach(e => {
    const row = tnEl('div', 'tn-ex');
    const txt = tnEl('div', 'tn-ex-txt');
    txt.appendChild(tnEl('div', 'tn-ex-en', e.en));
    txt.appendChild(tnEl('div', 'tn-ex-vi', e.vi));
    row.appendChild(txt);
    row.appendChild(tnPlay(e.en, 'Nghe câu ví dụ'));
    ex.appendChild(row);
  });
  tensesList.appendChild(cardFold(ex, 'tn|' + t.id + '|ex'));

  if (t.mistake) {
    const mc = tnEl('div', 'tense-card gr-tips');
    mc.appendChild(tnEl('h3', null, 'Lỗi hay gặp'));
    const m = tnEl('div', 'tn-mistake');
    const w = tnEl('div', 'tn-mis-row'); w.appendChild(tnEl('span', 'tn-x', '✗')); w.appendChild(tnEl('s', null, t.mistake.wrong)); m.appendChild(w);
    const r = tnEl('div', 'tn-mis-row'); r.appendChild(tnEl('span', 'tn-v', '✓')); r.appendChild(tnEl('b', null, t.mistake.right)); r.appendChild(tnPlay(t.mistake.right, 'Nghe câu đúng')); m.appendChild(r);
    m.appendChild(tnEl('div', 'tn-mis-note', t.mistake.note));
    mc.appendChild(m);
    tensesList.appendChild(cardFold(mc, 'tn|' + t.id + '|mis'));
  }

  const pr = tnPracticeBtn(t.id);
  if (pr) tensesList.appendChild(pr);

  const done = tnEl('button', 'tn-done gr-done' + (tnDone.has(t.id) ? ' on' : ''), tnDone.has(t.id) ? '✓ Đã nắm bài này' : 'Đánh dấu đã nắm bài này');
  done.addEventListener('click', () => {
    if (tnDone.has(t.id)) tnDone.delete(t.id); else tnDone.add(t.id);
    try { localStorage.setItem(TN_DONE_KEY, JSON.stringify([...tnDone])); } catch (e) {}
    done.classList.toggle('on', tnDone.has(t.id));
    done.textContent = tnDone.has(t.id) ? '✓ Đã nắm bài này' : 'Đánh dấu đã nắm bài này';
  });
  tensesList.appendChild(done);

  tensesList.appendChild(mxNavEl('tn', t.id, t.lv));
  tnTop();
}

/* ============================================================
   UI WIRING - Grammar page
============================================================ */
const grRoot = document.getElementById('grammar-root');
function grScrollTop() {
  const m = document.querySelector('main');
  window.scrollTo(0, m ? Math.max(0, m.offsetTop - 8) : 0);
}

function grEl(tag, cls, text) {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (text != null) el.textContent = text;
  return el;
}

/* ---------- Grammar by CEFR level (A1 → C1) ---------- */
const GR_LEVELS = [
  { n: 1, code: 'A1', vi: 'Mới bắt đầu', goal: 'Nắm những mẫu câu nền tảng: chỉ vật, nói có gì ở đâu, dùng mạo từ, đại từ, giới từ và can/could.' },
  { n: 2, code: 'A2', vi: 'Sơ cấp', goal: 'So sánh, đưa lời khuyên và sự bắt buộc, nói điều kiện có thể xảy ra, dùng các mẫu câu “quá… để”, “đủ… để”.' },
  { n: 3, code: 'B1', vi: 'Trung cấp', goal: 'Câu bị động, câu tường thuật, mệnh đề quan hệ, V-ing/To V, câu điều kiện loại 2 và các cấu trúc câu thông dụng.' },
  { n: 4, code: 'B2', vi: 'Trung cao cấp', goal: 'Câu điều kiện loại 3, mệnh đề quan hệ không xác định, cấu trúc nhờ vả, nhượng bộ và các cấu trúc nhấn mạnh.' },
  { n: 5, code: 'C1', vi: 'Nâng cao', goal: 'Diễn đạt tinh tế, trang trọng: câu ước, đảo ngữ, câu điều kiện hỗn hợp, câu chẻ và “càng… càng”.' }
];
// [id, level, from topic, section indexes (null = all), title override, subtitle override]
const GR_PLAN = [
  ['be-present', 1, 'be-present'], ['howto-greet', 1, 'howto-greet'], ['howto-personal', 1, 'howto-personal'],
  ['pronouns', 1, 'pronouns'], ['plural', 1, 'plural'], ['nouns', 1, 'nouns'], ['articles', 1, 'articles'],
  ['demonstratives', 1, 'demonstratives'], ['thereis', 1, 'thereis'], ['prepositions', 1, 'prepositions'],
  ['howto-time', 1, 'howto-time'], ['howto-family', 1, 'howto-family'], ['conjunctions', 1, 'conjunctions'],
  ['modal-can', 1, 'modal', [0], 'Can / Could', 'Modal verbs: can, could'],
  ['howto-suggest', 2, 'howto-suggest'], ['possessive-s', 2, 'possessive-s'], ['frequency', 2, 'frequency'],
  ['howto-restaurant', 2, 'howto-restaurant'], ['like-ing', 2, 'like-ing'], ['havegot', 2, 'havegot'],
  ['howto-invite', 2, 'howto-invite'], ['howmuch-howadj', 2, 'howmuch-howadj'], ['howto-shop', 2, 'howto-shop'],
  ['imperative', 2, 'imperative'], ['regular-ed', 2, 'regular-ed'], ['wh-questions', 2, 'wh-questions'],
  ['howto-apologise', 2, 'howto-apologise'], ['adj-modifier', 2, 'adj-modifier'], ['compare', 2, 'compare'],
  ['howto-directions', 2, 'howto-directions'], ['prep-movement', 2, 'prep-movement'],
  ['simple-vs-continuous', 2, 'simple-vs-continuous'], ['howto-phone', 2, 'howto-phone'],
  ['verb-to-v', 2, 'verb-to-v'], ['howto-hotel', 2, 'howto-hotel'], ['adverb-manner', 2, 'adverb-manner'],
  ['modal-more', 2, 'modal', [1, 2, 3, 4], 'Động từ khuyết thiếu: may, must, should…', 'Modal verbs'],
  ['cond-1', 2, 'conditional', [0, 1, 4], 'Câu điều kiện loại 0 & 1', 'Zero & first conditional'],
  ['too', 2, 'too'], ['enough', 2, 'enough'], ['ittakes', 2, 'ittakes'], ['itsadj', 2, 'itsadj'],
  ['pp-vs-past', 3, 'pp-vs-past'], ['future-forms', 3, 'future-forms'], ['time-clauses', 3, 'time-clauses'],
  ['modal-deduction', 3, 'modal-deduction'], ['obligation', 3, 'obligation'],
  ['passive', 3, 'passive'], ['cond-2', 3, 'conditional', [2], 'Câu điều kiện loại 2', 'Second conditional'],
  ['gerund-1', 3, 'gerund', [0, 1, 3], 'V-ing và To V', 'Gerunds & infinitives'],
  ['relative-1', 3, 'relative', [0, 1], 'Mệnh đề quan hệ xác định', 'Defining relative clauses'],
  ['reported', 3, 'reported'], ['tag', 3, 'tag'],
  ['quantifiers', 3, 'quantifiers'], ['indefinite', 3, 'indefinite'], ['so-neither', 3, 'so-neither'],
  ['phrasal', 3, 'phrasal'],
  ['sothat', 3, 'sothat'], ['suchthat', 3, 'suchthat'], ['makelet', 3, 'makelet'],
  ['asktell', 3, 'asktell'], ['usedto', 3, 'usedto'], ['hadbetter', 3, 'hadbetter'], ['spend', 3, 'spend'],
  ['howto-opinion', 3, 'howto-opinion'],
  ['cond-3', 4, 'conditional', [3], 'Câu điều kiện loại 3', 'Third conditional'],
  ['relative-2', 4, 'relative', [2], 'Mệnh đề quan hệ không xác định', 'Non-defining relative clauses'],
  ['gerund-2', 4, 'gerund', [2], 'V-ing hay To V: khác nghĩa', 'stop, remember, try…'],
  ['modal-perfect', 4, 'modal-perfect'], ['passive-report', 4, 'passive-report'], ['participle', 4, 'participle'],
  ['unless-provided', 4, 'unless-provided'], ['prep-collocation', 4, 'prep-collocation'],
  ['havedone', 4, 'havedone'], ['suggest', 4, 'suggest'], ['prefer', 4, 'prefer'], ['itstime', 4, 'itstime'],
  ['although', 4, 'although'], ['paired', 4, 'paired'], ['prevent', 4, 'prevent'],
  ['howto-email', 4, 'howto-email'],
  ['wish', 5, 'wish'], ['inversion', 5, 'inversion'], ['mixedcond', 5, 'mixedcond'], ['cleft', 5, 'cleft'],
  ['themore', 5, 'themore'], ['subjunctive', 5, 'subjunctive'], ['relative-advanced', 5, 'relative-advanced'],
  ['whatever', 5, 'whatever'], ['emphasis', 5, 'emphasis'], ['discourse', 5, 'discourse']
];
/* v110: bài tổng hợp “Cách đặt câu hỏi trong tiếng Anh” */
GRAMMAR_TOPICS.push({ id: 'questions', title: 'Cách đặt câu hỏi trong tiếng Anh', en: 'How to make questions',
  intro: 'Bài tổng hợp các kiểu câu hỏi: Yes/No với to be, với động từ thường (do/does/did), với can/will…, câu hỏi Wh- và How-, và câu hỏi về chủ ngữ. Quy tắc chung: đưa trợ động từ lên trước chủ ngữ.',
  tips: ['Có to be hoặc động từ khuyết thiếu (can, will, should…) thì đảo chúng lên trước chủ ngữ, không dùng do.', 'Động từ thường thì mượn do/does/did; khi đã có trợ động từ, động từ chính trở về nguyên mẫu (Does he work…? không nói Does he works…?).', 'Câu hỏi chủ ngữ (Who called you?) không dùng do/does/did.', 'Câu hỏi gián tiếp giữ trật tự câu khẳng định: Do you know where the station is?', 'Luyện thêm ở tab Asking questions: sắp xếp từ, đổi câu khẳng định, dịch và tìm lỗi.'],
  sections: [
    { name: '1. Câu hỏi Yes/No với to be', formula: 'Am / Is / Are + S + …? · Was / Were + S + …?', usage: 'Đảo động từ to be lên trước chủ ngữ. Không dùng do/does/did với to be.',
      examples: [{ en: 'Are you tired?', vi: 'Bạn có mệt không?' }, { en: 'Is she a teacher?', vi: 'Cô ấy là giáo viên phải không?' }, { en: 'Were they at home yesterday?', vi: 'Hôm qua họ có ở nhà không?' }] },
    { name: '2. Câu hỏi Yes/No với động từ thường', formula: 'Do / Does + S + V nguyên mẫu? · Did + S + V nguyên mẫu?', usage: 'Hiện tại: do (I, you, we, they) / does (he, she, it). Quá khứ: did cho mọi chủ ngữ. Động từ chính luôn ở nguyên mẫu.',
      examples: [{ en: 'Do you like coffee?', vi: 'Bạn có thích cà phê không?' }, { en: 'Does he work here?', vi: 'Anh ấy có làm việc ở đây không?' }, { en: 'Did they win the match?', vi: 'Họ có thắng trận không?' }] },
    { name: '3. Câu hỏi với can, will, should…', formula: 'Can / Could / Will / Should / Would + S + V nguyên mẫu?', usage: 'Đảo động từ khuyết thiếu lên trước chủ ngữ; không dùng do và không thêm to.',
      examples: [{ en: 'Can you swim?', vi: 'Bạn biết bơi không?' }, { en: 'Will it rain tomorrow?', vi: 'Ngày mai trời có mưa không?' }, { en: 'Should I call him?', vi: 'Tôi có nên gọi cho anh ấy không?' }] },
    { name: '4. Câu hỏi Wh-', formula: 'Wh- + am/is/are + S + …? · Wh- + do/does/did + S + V? · Wh- + can/will + S + V?', usage: 'Đặt từ để hỏi lên đầu, phần sau giống câu hỏi Yes/No.',
      table: { head: ['Từ để hỏi', 'Hỏi về', 'Ví dụ'], rows: [['What', 'cái gì, việc gì', 'What do you do?'], ['Where', 'nơi chốn', 'Where are you from?'], ['When', 'thời gian', 'When did you arrive?'], ['Why', 'lý do', 'Why is she crying?'], ['Who', 'người', 'Who are you waiting for?'], ['Which', 'cái nào (lựa chọn)', 'Which colour do you prefer?'], ['Whose', 'của ai', 'Whose bag is this?']] },
      examples: [{ en: 'Where do you live?', vi: 'Bạn sống ở đâu?' }, { en: 'What are you doing?', vi: 'Bạn đang làm gì?' }, { en: 'Why did she leave?', vi: 'Tại sao cô ấy rời đi?' }] },
    { name: '5. Câu hỏi How-', formula: 'How + adj/adv + trợ động từ + S + …? · How much / How many + N + trợ động từ + S + V?', usage: 'How (thế nào), How old (tuổi), How long (bao lâu), How often (bao lâu một lần), How far (bao xa), How much (không đếm được, giá), How many (đếm được).',
      examples: [{ en: 'How old are you?', vi: 'Bạn bao nhiêu tuổi?' }, { en: 'How often do you exercise?', vi: 'Bạn tập thể dục bao lâu một lần?' }, { en: 'How many people came to the party?', vi: 'Có bao nhiêu người đến bữa tiệc?' }] },
    { name: '6. Câu hỏi về chủ ngữ', formula: 'Who / What + V (chia theo thì, không dùng do/does/did)', usage: 'Khi từ để hỏi chính là chủ ngữ, giữ trật tự câu khẳng định. So sánh: Who called you? (ai gọi bạn) và Who did you call? (bạn gọi ai).',
      examples: [{ en: 'Who called you last night?', vi: 'Tối qua ai gọi cho bạn?' }, { en: 'Who did you call last night?', vi: 'Tối qua bạn gọi cho ai?' }, { en: 'What happened?', vi: 'Chuyện gì đã xảy ra?' }] }
  ] });
GR_PLAN.push(['questions', 2, 'questions']);

const GR_LESSONS = GR_PLAN.map(([id, lv, from, secs, title, en]) => {
  const src = GRAMMAR_TOPICS.find(t => t.id === from);
  return { id, lv, title: title || src.title, en: en || src.en, intro: src.intro, tips: src.tips || [],
    sections: secs ? secs.map(i => src.sections[i]).filter(Boolean) : src.sections };
});
// Formulas shown like the Tenses tab: + affirmative, − negative, ? question (or numbered variants)
const GR_FX = {
  'thereis:0': [['+', 'There is + danh từ số ít / không đếm được'], ['+', 'There are + danh từ số nhiều'], ['−', "There isn't / There aren't + …"], ['?', 'Is there …? · Are there …?']],
  'passive:0': [['+', 'Chủ ngữ + am/is/are + V3/V-ed (+ by + người làm) · Quá khứ: chủ ngữ + was/were + V3/V-ed · Tương lai: chủ ngữ + will be + V3/V-ed'], ['−', 'Chủ ngữ + am/is/are + not + V3/V-ed · Quá khứ: chủ ngữ + wasn’t/weren’t + V3/V-ed'], ['?', 'Am/Is/Are + chủ ngữ + V3/V-ed? · Was/Were + chủ ngữ + V3/V-ed?']],
  'modal:0': [['+', 'Chủ ngữ (I, you, he, she, it, we, they) + can / could + V (nguyên thể)'], ['−', "Chủ ngữ + can't / couldn't + V"], ['?', 'Can / Could + chủ ngữ + V?']],
  'modal:1': [['+', 'Chủ ngữ (I, you, he, she, it, we, they) + may / might + V'], ['−', 'Chủ ngữ + may not / might not + V'], ['?', 'May I + V? (xin phép lịch sự)']],
  'modal:2': [['+', 'Chủ ngữ + must + V · I/You/We/They + have to + V · He/She/It + has to + V'], ['−', "Chủ ngữ + mustn't + V (cấm) · I/You/We/They + don't have to + V (không cần) · He/She/It + doesn't have to + V"], ['?', 'Must + chủ ngữ + V? · Do + I/you/we/they + have to + V? · Does + he/she/it + have to + V?']],
  'modal:3': [['+', 'Chủ ngữ (I, you, he, she, it, we, they) + should / ought to + V'], ['−', "Chủ ngữ + shouldn't + V"], ['?', 'Should + chủ ngữ + V?']],
  'modal:4': [['+', 'Chủ ngữ (I, you, he, she, it, we, they) + will / would + V'], ['−', "Chủ ngữ + won't / wouldn't + V"], ['?', 'Will / Would + chủ ngữ + V?']],
  'conditional:0': [['If', 'chủ ngữ + V (hiện tại: he/she/it thêm -s)'], ['→', 'chủ ngữ + V (hiện tại: he/she/it thêm -s)']],
  'conditional:1': [['If', 'chủ ngữ + V (hiện tại đơn: he/she/it thêm -s)'], ['→', 'chủ ngữ + will + V']],
  'conditional:2': [['If', 'chủ ngữ + V2 (be → were)'], ['→', 'chủ ngữ + would + V']],
  'conditional:3': [['If', 'chủ ngữ + had + V3'], ['→', 'chủ ngữ + would have + V3']],
  'mixedcond:0': [['If', 'chủ ngữ + had + V3 (quá khứ)'], ['→', 'chủ ngữ + would + V (hiện tại)']],
  'mixedcond:1': [['If', 'chủ ngữ + V2 / were (hiện tại)'], ['→', 'chủ ngữ + would have + V3 (quá khứ)']],
  'usedto:0': [['+', 'Chủ ngữ (I, you, he, she, it, we, they) + used to + V'], ['−', "Chủ ngữ + didn't use to + V"], ['?', 'Did + chủ ngữ + use to + V?']],
  'usedto:1': [['+', 'I + am used to + V-ing · He/She/It + is used to + V-ing · You/We/They + are used to + V-ing · Chủ ngữ + get / gets used to + V-ing'], ['−', "I + am not used to + V-ing · He/She/It + isn't used to + V-ing · You/We/They + aren't used to + V-ing"], ['?', 'Am/Is/Are + chủ ngữ + used to + V-ing?']],
  'hadbetter:0': [['+', 'Chủ ngữ (I, you, he, she, it, we, they) + had better + V'], ['−', 'Chủ ngữ + had better not + V']],
  'tag:0': [['+', 'Câu khẳng định, + trợ động từ + n\'t + đại từ?'], ['−', 'Câu phủ định, + trợ động từ + đại từ?']],
  'compare:0': [['+', 'Chủ ngữ + am/is/are + as + adj + as + …'], ['−', 'Chủ ngữ + am/is/are + not + as/so + adj + as + …']],
  'articles:0': [['1', 'a + danh từ đếm được số ít bắt đầu bằng ÂM phụ âm: a cat, a book, a university (/juː/), a European'], ['2', 'an + danh từ đếm được số ít bắt đầu bằng ÂM nguyên âm: an apple, an egg, an hour (h câm), an MP3'], ['+', 'a / an + tính từ + danh từ: a big house, an old car (xét âm của từ đứng ngay sau)']],
  'articles:1': [['1', 'the + danh từ đếm được số ít: the book on the table'], ['2', 'the + danh từ số nhiều: the students in my class'], ['3', 'the + danh từ không đếm được (đã xác định): the water in this bottle'], ['+', 'the + vật duy nhất / so sánh nhất / số thứ tự: the sun, the best, the first']],
  'articles:2': [['Ø', 'Không mạo từ + danh từ số nhiều / không đếm được khi nói chung: Dogs are friendly. I love music.'], ['Ø', 'Không mạo từ + tên người, thành phố, quốc gia: Lan, Hanoi, Vietnam'], ['Ø', 'Không mạo từ + bữa ăn, môn thể thao, môn học: have lunch, play football, study maths']]
};
GRAMMAR_TOPICS.forEach(t => t.sections.forEach((sec, i) => { const fx = GR_FX[t.id + ':' + i]; if (fx) sec.fx = fx; }));
function grTableCell(c) {
  const td = grEl('td'), s = String(c);
  if (s.startsWith('▶')) {
    td.className = 'gr-td-play';
    const b = grEl('span', 'play-mini', '▶');
    b.setAttribute('role', 'button');
    b.setAttribute('aria-label', 'Nghe');
    b.addEventListener('click', () => speak(s.slice(1).trim(), 0.8));
    td.appendChild(b);
    return td;
  }
  s.split(/(\/[^/\s][^/]*\/)/g).forEach(p => {
    if (!p) return;
    if (/^\/[^/\s][^/]*\/$/.test(p)) td.appendChild(grEl('span', 'gr-ipa', p));
    else td.appendChild(document.createTextNode(p));
  });
  return td;
}
function grFormula(sec) {
  let rows = sec.fx;
  if (!rows) {
    // biến thể theo chủ ngữ (I/You/We/They … rồi He/She/It …) gộp vào cùng một số thứ tự
    const parts = fxSplit(sec.formula).reduce((acc, p) => {
      const prev = acc[acc.length - 1];
      if (prev && /he\/she\/it/i.test(p) && /(^|\+\s)(I\/You\/We\/They|I\/you\/we\/they)\b/.test(prev.split(' · ').pop())) acc[acc.length - 1] = prev + ' · ' + p;
      else acc.push(p);
      return acc;
    }, []);
    rows = parts.map((p, i) => [parts.length > 1 ? String(i + 1) : '+', p]);
  }
  const box = grEl('div', 'tn-formula');
  rows.forEach(([sym, txt]) => {
    // each variant on its own line; only the first keeps the badge
    fxParts(txt).forEach((part, i) => {
      const r = grEl('div', 'tn-frow' + (i ? ' tn-frow-sub' : ''));
      const m = part.match(/^([^:+()]{2,24}):\s+(.*)$/);         // "Tính từ ngắn: adj-er + than"
      const label = i ? '·' : sym;
      const sy = grEl('span', 'tn-sym' + (i ? ' tn-sym-ghost' : (label.length > 1 ? ' tn-sym-w' : '')), label);
      if (!i) sy.title = { '+': 'Khẳng định', '−': 'Phủ định', '?': 'Câu hỏi', 'If': 'Mệnh đề điều kiện', '→': 'Mệnh đề kết quả' }[sym] || '';
      r.appendChild(sy);
      const tx = grEl('span', 'tn-ftxt');
      if (m) { tx.appendChild(grEl('span', 'tn-flabel', m[1])); tx.appendChild(document.createTextNode(m[2])); }
      else tx.textContent = part;
      r.appendChild(tx);
      box.appendChild(r);
    });
  });
  return box;
}
const GR_LV_KEY = 'hoc-tieng-anh-grammar-level', GR_DONE_KEY = 'hoc-tieng-anh-grammar-done';
let grLevel = 1, grDone = new Set();
try { grLevel = Math.min(5, Math.max(1, +localStorage.getItem(GR_LV_KEY) || 1)); } catch (e) {}
try { const a = JSON.parse(localStorage.getItem(GR_DONE_KEY) || '[]'); if (Array.isArray(a)) grDone = new Set(a); } catch (e) {}
const grOf = n => GR_LESSONS.filter(t => t.lv === n);
const grGot = n => grOf(n).filter(t => grDone.has(t.id)).length;
const grSetLevel = n => { grLevel = n; try { localStorage.setItem(GR_LV_KEY, String(n)); } catch (e) {} };
function grToggleDone(id) {
  if (grDone.has(id)) grDone.delete(id); else grDone.add(id);
  try { localStorage.setItem(GR_DONE_KEY, JSON.stringify([...grDone])); } catch (e) {}
}

/* ---------- Tenses + grammar structures, one list per level ---------- */
const MX_GOAL = [
  'Nắm các mẫu câu nền tảng: hiện tại đơn, việc đang làm, was/were, there is/are, mạo từ, đại từ, giới từ và can/could.',
  'Kể chuyện quá khứ, nói kế hoạch tương lai, hiện tại hoàn thành, so sánh, câu điều kiện loại 1 và các mẫu too/enough.',
  'Diễn đạt nhiều mốc thời gian, câu bị động, câu tường thuật, mệnh đề quan hệ, điều kiện loại 2 và các cấu trúc so… that.',
  'Thì hoàn thành phức tạp, câu điều kiện loại 3, nhờ người khác làm, câu nhượng bộ và các cặp liên từ.',
  'Diễn đạt tinh tế và trang trọng: thì hoàn thành tiếp diễn, câu ước, đảo ngữ, điều kiện hỗn hợp, câu chẻ.'
];
let mxOf = n => [
  ...tnOf(n).map(t => ({ k: 'tn', id: t.id, title: t.name, en: t.en, lv: n })),
  ...grOf(n).map(t => ({ k: 'gr', id: t.id, title: t.title, en: t.en, lv: n }))
];
let mxIsDone = it => it.k === 'tn' ? tnDone.has(it.id) : grDone.has(it.id);
const mxGot = n => mxOf(n).filter(mxIsDone).length;
const mxOpen = it => { if (it.k === 'tn') renderTenseTopic(it.id); else renderGrammarTopic(it.id); };

/* previous / next across the whole level, tenses first then structures */
function mxNavEl(kind, id, lv) {
  const list = mxOf(lv), pos = list.findIndex(x => x.k === kind && x.id === id);
  const nav = grEl('div', 'gr-nav');
  const prev = list[pos - 1];
  const next = list[pos + 1] || (lv < 5 ? mxOf(lv + 1)[0] : null);
  [[prev, '← Trước'], [next, next && next.lv !== lv ? `Sang cấp ${GR_LEVELS[next.lv - 1].code} →` : 'Tiếp →']].forEach(([other, label], k) => {
    if (!other) { nav.appendChild(grEl('span', 'gr-nav-gap')); return; }
    const b = grEl('button', 'gr-nav-btn' + (k ? ' next' : ''));
    b.appendChild(grEl('span', 'gr-nav-label', label));
    b.appendChild(grEl('span', 'gr-nav-title', other.title));
    b.addEventListener('click', () => { mxOpen(other); grScrollTop(); });
    nav.appendChild(b);
  });
  return nav;
}

function renderGrammarHomeOld(keepScroll) {
  const y = window.scrollY;
  grRoot.innerHTML = '';
  grRoot.appendChild(grEl('div', 'section-title', 'Ngữ pháp theo trình độ'));
  grRoot.appendChild(grEl('div', 'section-sub', 'Các thì và cấu trúc câu gom chung một chỗ, chia theo trình độ A1 → C1. Chạm vào một bài để xem công thức, câu hỏi Wh- và How-, ví dụ có nút nghe và lỗi hay gặp.'));
  const chips = grEl('div', 'vc-levels tn-levels');
  GR_LEVELS.forEach(L => {
    const n = mxOf(L.n).length, got = mxGot(L.n);
    const b = grEl('button', 'vc-level vc-lvl' + L.n + (L.n === grLevel ? ' active' : '') + (got === n ? ' done' : ''));
    b.appendChild(grEl('span', 'vc-level-code', L.code));
    b.appendChild(grEl('span', 'vc-level-vi', L.vi));
    b.appendChild(grEl('span', 'vc-level-n', got === n ? `✓ ${n} bài` : got ? `${got}/${n}` : `${n} bài`));
    b.setAttribute('aria-pressed', L.n === grLevel ? 'true' : 'false');
    b.addEventListener('click', () => { grSetLevel(L.n); tnLevel = L.n; renderGrammarHome(); });
    chips.appendChild(b);
  });
  grRoot.appendChild(chips);

  const L = GR_LEVELS[grLevel - 1], list = mxOf(grLevel), got = mxGot(grLevel);
  const nTense = tnOf(grLevel).length;
  const intro = grEl('div', 'tense-card tn-intro');
  const ih = grEl('div', 'tn-intro-h');
  ih.appendChild(grEl('span', 'tn-badge', L.code));
  ih.appendChild(grEl('b', null, `${L.vi} · ${list.length} bài (${nTense} thì + ${list.length - nTense} cấu trúc)`));
  intro.appendChild(ih);
  intro.appendChild(grEl('p', 'tn-goal', 'Mục tiêu: ' + (MX_GOAL[grLevel - 1] || L.goal)));
  const pg = grEl('div', 'vc-head-prog');
  pg.appendChild(grEl('span', null, `Đã nắm ${got}/${list.length}`));
  const bar = grEl('span', 'vc-bar'); const fill = grEl('span'); fill.style.width = (got / list.length * 100) + '%'; bar.appendChild(fill); bar.style.flex = '1';
  pg.appendChild(bar); intro.appendChild(pg);
  if (grLevel > 1) {
    const prev = mxOf(grLevel - 1), pgot = mxGot(grLevel - 1);
    if (pgot < prev.length) intro.appendChild(grEl('p', 'tn-tip', `💡 Bạn còn ${prev.length - pgot} bài ở ${GR_LEVELS[grLevel - 2].code} chưa đánh dấu. Nên chắc phần nền trước khi học cấp này.`));
  }
  const which = grEl('details', 'tn-which');
  which.appendChild(grEl('summary', null, 'Mình nên học ở trình độ nào?'));
  [['A1', 'Mới học, chỉ biết vài từ và câu chào hỏi.'], ['A2', 'Giới thiệu được bản thân, hỏi đáp đơn giản về cuộc sống hằng ngày.'],
   ['B1', 'Kể được chuyện đã qua, xem video có phụ đề, viết được đoạn văn ngắn.'], ['B2', 'Giao tiếp khá tự nhiên, đọc báo và xem phim hiểu ý chính.'],
   ['C1', 'Dùng tiếng Anh trôi chảy trong công việc và học thuật, muốn diễn đạt tinh tế hơn.']].forEach(([c, d]) => {
    const r = grEl('div', 'tn-which-row'); r.appendChild(grEl('span', 'tn-badge', c)); r.appendChild(grEl('span', null, d)); which.appendChild(r);
  });
  intro.appendChild(which);
  grRoot.appendChild(intro);

  [['⏱️ Các thì', 'tn'], ['🔧 Cấu trúc câu', 'gr']].forEach(([label, kind]) => {
    const part = list.filter(x => x.k === kind);
    if (!part.length) return;
    const head = grEl('div', 'tense-group-title', `${label} · ${part.filter(mxIsDone).length}/${part.length}`);
    grRoot.appendChild(head);
    const grid = grEl('div', 'gr-grid');
    part.forEach(it => {
      const done = mxIsDone(it);
      const b = grEl('button', 'gr-topic' + (done ? ' done' : ''));
      b.appendChild(grEl('span', 'gr-num', done ? '✓' : String(list.indexOf(it) + 1)));
      b.appendChild(grEl('span', 'gr-t-title', it.title));
      b.appendChild(grEl('span', 'gr-t-en', it.en));
      b.addEventListener('click', () => mxOpen(it));
      grid.appendChild(b);
    });
    grRoot.appendChild(grid);
  });

  if (grLevel < 5) {
    const nx = GR_LEVELS[grLevel];
    const nb = grEl('button', 'btn-primary vc-next-unit', `Học tiếp cấp ${nx.code} · ${nx.vi} →`);
    nb.addEventListener('click', () => { grSetLevel(nx.n); tnLevel = nx.n; renderGrammarHome(); grScrollTop(); });
    grRoot.appendChild(nb);
  }
  if (keepScroll) window.scrollTo(0, y);
}

function renderGrammarTopicOld(id) {
  const t = GR_LESSONS.find(x => x.id === id);
  if (!t) return renderGrammarHome();
  grSetLevel(t.lv);
  const L = GR_LEVELS[t.lv - 1], list = mxOf(t.lv), pos = list.findIndex(x => x.k === 'gr' && x.id === t.id);
  grRoot.innerHTML = '';

  tnLevel = t.lv;
  const back = grEl('button', 'gr-back', `← Ngữ pháp ${L.code}`);
  back.addEventListener('click', () => { renderGrammarHome(); grScrollTop(); });
  grRoot.appendChild(back);

  const head = grEl('div', 'gr-head');
  head.appendChild(grEl('div', 'gr-en', `${L.code} · Bài ${pos + 1}/${list.length} · ${t.en}`));
  head.appendChild(grEl('h2', 'gr-title', t.title));
  head.appendChild(grEl('p', 'gr-intro', t.intro));
  grRoot.appendChild(head);

  t.sections.forEach((sec, si) => {
    const card = grEl('div', 'tense-card');
    card.appendChild(grEl('h3', null, sec.name));
    if (sec.formula || sec.fx) card.appendChild(grFormula(sec));
    if (sec.usage) card.appendChild(grEl('div', 'usage gr-usage', sec.usage));
    if (sec.table) {
      const wrap = grEl('div', 'gr-table-wrap');
      const table = grEl('table', 'gr-table');
      const thead = grEl('thead'); const hr = grEl('tr');
      sec.table.head.forEach(h => hr.appendChild(grEl('th', null, h)));
      thead.appendChild(hr); table.appendChild(thead);
      const tbody = grEl('tbody');
      sec.table.rows.forEach(r => { const tr = grEl('tr'); r.forEach(c => tr.appendChild(sec.table.ipa ? grTableCell(c) : grEl('td', null, c))); tbody.appendChild(tr); });
      table.appendChild(tbody); wrap.appendChild(table); card.appendChild(wrap);
    }
    (sec.examples || []).forEach(ex => {
      const row = grEl('div', 'gr-ex');
      const txt = grEl('div', 'gr-ex-text', ex.en);
      txt.appendChild(grEl('span', 'vi', ex.vi));
      const play = grEl('span', 'play-mini', '▶');
      play.setAttribute('role', 'button');
      play.setAttribute('aria-label', 'Nghe câu ví dụ');
      play.addEventListener('click', () => speak(ex.en.replace(/→/g, '.').replace(/["“”]/g, ''), 0.85));
      row.appendChild(txt); row.appendChild(play);
      card.appendChild(row);
    });
    grRoot.appendChild(cardFold(card, 'gr|' + t.id + '|' + si));
  });

  const gq = tnQuestionCard(t.id);
  if (gq) grRoot.appendChild(gq);

  if (t.tips && t.tips.length) {
    const tips = grEl('div', 'tense-card gr-tips');
    tips.appendChild(grEl('h3', null, 'Lưu ý & lỗi hay gặp'));
    const ul = grEl('ul');
    t.tips.forEach(tip => ul.appendChild(grEl('li', null, tip)));
    tips.appendChild(ul);
    grRoot.appendChild(cardFold(tips, 'gr|' + t.id + '|tips'));
  }

  const gpr = tnPracticeBtn(t.id);
  if (gpr) grRoot.appendChild(gpr);

  const done = grEl('button', 'tn-done gr-done' + (grDone.has(t.id) ? ' on' : ''), grDone.has(t.id) ? '✓ Đã nắm bài này' : 'Đánh dấu đã nắm bài này');
  done.addEventListener('click', () => {
    grToggleDone(t.id);
    done.classList.toggle('on', grDone.has(t.id));
    done.textContent = grDone.has(t.id) ? '✓ Đã nắm bài này' : 'Đánh dấu đã nắm bài này';
  });
  grRoot.appendChild(done);

  grRoot.appendChild(mxNavEl('gr', t.id, t.lv));
  grScrollTop();
}

/* 330 câu hỏi tự soạn: [câu có ___, đáp án (| = cũng đúng), [[phương án sai, vì sao sai]…], vì sao đúng, nghĩa] */
/* GX_Q: xem file dữ liệu */
/* ============================================================
   NGỮ PHÁP v110 — phân nhóm, lộ trình theo kiến thức nền, bài học 7 bước,
   luyện tập 5 dạng có giải thích, kiểm tra cuối bài, trạng thái & ôn tập theo lịch
============================================================ */
const GX_CATS = [['base', '🧱', 'Ngữ pháp nền tảng', 'To be, đại từ, danh từ, mạo từ, giới từ…'], ['tense', '⏱️', 'Các thì', 'Hiện tại, quá khứ, tương lai, hoàn thành, tiếp diễn'],
  ['struct', '🔧', 'Cấu trúc câu', 'Câu hỏi, V-ing / To V, điều kiện, bị động, tường thuật, so sánh…'], ['comm', '💬', 'Mẫu câu giao tiếp', 'Chào hỏi, đề nghị, xin lỗi, hỏi đường, email…'],
  ['adv', '🎓', 'Ngữ pháp nâng cao', 'Đảo ngữ, câu chẻ, câu ước, điều kiện hỗn hợp…']];
const GX_CAT_OF = {};
[['base', 'be-present past-be pronouns plural nouns articles demonstratives thereis prepositions conjunctions possessive-s frequency adj-modifier adverb-manner prep-movement quantifiers indefinite havegot'],
 ['tense', 'present-simple present-continuous past-simple regular-ed past-continuous going-to future-simple present-perfect simple-vs-continuous present-perfect-continuous pp-vs-past past-perfect future-continuous future-forms stative past-perfect-continuous future-perfect future-in-past future-perfect-continuous'],
 ['comm', 'howto-greet howto-personal howto-time howto-family howto-suggest howto-restaurant howto-invite howto-shop howto-apologise howto-directions howto-phone howto-hotel howto-opinion howto-email polite-tenses'],
 ['adv', 'inversion-perfect wish inversion mixedcond cleft themore subjunctive relative-advanced whatever emphasis discourse']]
  .forEach(([c, ids]) => ids.split(' ').forEach(id => { GX_CAT_OF[id] = c; }));
const GX_TWELVE = new Set('present-simple present-continuous present-perfect present-perfect-continuous past-simple past-continuous past-perfect past-perfect-continuous future-simple future-continuous future-perfect future-perfect-continuous'.split(' '));
// lộ trình theo kiến thức tiên quyết (v135: A2 là một chặng; trong mỗi nhóm, bài xếp theo thứ tự nên học)
const GX_TRACKS = [
  { key: 'A1', lv: 1, ids: 'pronouns be-present plural nouns articles demonstratives thereis present-simple frequency present-continuous prepositions conjunctions past-be modal-can howto-greet howto-personal howto-time howto-family' },
  { key: 'A2', lv: 2, ids: 'possessive-s havegot adj-modifier adverb-manner prep-movement simple-vs-continuous past-simple regular-ed past-continuous going-to future-simple present-perfect imperative like-ing verb-to-v questions wh-questions howmuch-howadj compare modal-more too enough ittakes itsadj cond-1 howto-suggest howto-invite howto-restaurant howto-shop howto-directions howto-hotel howto-phone howto-apologise' },
  { key: 'B1', lv: 3, ids: 'present-perfect-continuous pp-vs-past past-perfect future-continuous future-forms stative time-clauses quantifiers indefinite modal-deduction obligation passive gerund-1 relative-1 cond-2 reported tag so-neither phrasal sothat suchthat makelet asktell usedto hadbetter spend howto-opinion' },
  { key: 'B2', lv: 4, ids: 'past-perfect-continuous future-perfect future-in-past cond-3 relative-2 gerund-2 modal-perfect passive-report participle unless-provided prep-collocation havedone suggest prefer itstime although paired prevent howto-email' },
  { key: 'C1', lv: 5, ids: 'future-perfect-continuous polite-tenses inversion-perfect wish mixedcond inversion cleft themore subjunctive relative-advanced whatever emphasis discourse' }
].map(t => ({ ...t, ids: t.ids.split(' ') }));
const GX_LV_NAME = ['', 'Mới bắt đầu', 'Sơ cấp', 'Trung cấp', 'Trung cao cấp', 'Nâng cao'];
const GX_TRACK_GOAL = {
  'A1': 'Nền móng: đại từ, to be, danh từ, mạo từ, there is/are, rồi mới tới hiện tại đơn, hiện tại tiếp diễn và giới từ cơ bản.',
  'A2': 'Mở rộng câu đơn và kể chuyện: sở hữu, trạng từ, quá khứ đơn, tương lai, hiện tại hoàn thành, V-ing / to V, cách đặt câu hỏi, so sánh, động từ khuyết thiếu, too / enough và câu điều kiện loại 1.',
  'B1': 'Nhiều mốc thời gian, bị động, tường thuật, mệnh đề quan hệ, điều kiện loại 2 và các cấu trúc câu thông dụng.',
  'B2': 'Thì hoàn thành phức tạp, điều kiện loại 3, mệnh đề rút gọn, nhờ vả, nhượng bộ và các cặp liên từ.',
  'C1': 'Diễn đạt tinh tế, trang trọng: câu ước, đảo ngữ, điều kiện hỗn hợp, câu chẻ, thức giả định.'
};
const GX_SYMBOLS = [['S', 'Subject – Chủ ngữ'], ['V', 'Verb – Động từ'], ['O', 'Object – Tân ngữ'], ['N', 'Noun – Danh từ'], ['Adj', 'Adjective – Tính từ'], ['Adv', 'Adverb – Trạng từ'],
  ['V1 / V nguyên mẫu', 'Động từ nguyên mẫu (go, eat)'], ['V2', 'Động từ quá khứ (went, ate)'], ['V3', 'Quá khứ phân từ (gone, eaten)'], ['V-ing', 'Động từ thêm -ing (going)'],
  ['to V', 'to + động từ nguyên mẫu (to go)'], ['sb / sth', 'somebody – ai đó / something – cái gì đó'], ['Wh-', 'Từ để hỏi: what, where, when, why, who, which, whose'], ['+ / − / ?', 'Câu khẳng định / phủ định / nghi vấn']];

// danh sách bài theo thứ tự lộ trình
GR_LESSONS.forEach(t => { if (t.id === 'frequency') t.lv = 1; });
const GX_ALL = [];
GX_TRACKS.forEach(tr => tr.ids.forEach(id => {
  const tn = TENSES.find(x => x.id === id), gr = GR_LESSONS.find(x => x.id === id);
  const src = tn || gr; if (!src) return;
  GX_ALL.push({ k: tn ? 'tn' : 'gr', id, title: tn ? tn.name : gr.title, en: tn ? tn.en : gr.en, lv: tr.lv, track: tr.key, cat: GX_CAT_OF[id] || 'struct', src });
}));
// v135: sắp GX_ALL đúng như danh sách hiển thị, để số bài, “Bài tiếp”, “← Trước” và “Học tiếp” cùng một thứ tự
(() => {
  const ti = k => GX_TRACKS.findIndex(t => t.key === k), ci = c => { const k = GX_CATS.findIndex(x => x[0] === c); return k < 0 ? 99 : k; };
  const pos = new Map(GX_ALL.map((x, i) => [x, i]));
  GX_ALL.sort((a, b) => ti(a.track) - ti(b.track) || ci(a.cat) - ci(b.cat) || pos.get(a) - pos.get(b));
})();
const gxFind = id => GX_ALL.find(x => x.id === id);
// điều hướng & danh sách theo cấp dùng thứ tự lộ trình mới
mxOf = n => GX_ALL.filter(x => x.lv === n);

/* ---------- trạng thái & lịch ôn ---------- */
const GX_KEY = 'hoc-tieng-anh-grammar-srs', GX_FAV_KEY = 'hoc-tieng-anh-grammar-fav', GX_TRACK_KEY = 'hoc-tieng-anh-grammar-track';
const GX_GAP = [1, 3, 7, 14, 30];
const gxToday = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 86400000);
let gxStore = {}, gxFav = new Set(), gxTrack = 'A1';
try { const o = JSON.parse(localStorage.getItem(GX_KEY) || 'null'); if (o && typeof o === 'object') gxStore = o; } catch (e) {}
try { const a = JSON.parse(localStorage.getItem(GX_FAV_KEY) || '[]'); if (Array.isArray(a)) gxFav = new Set(a); } catch (e) {}
try { let k = localStorage.getItem(GX_TRACK_KEY); if (/^A2\./.test(k || '')) { k = 'A2'; localStorage.setItem(GX_TRACK_KEY, k); }   // v135: A2.1 / A2.2 → A2
  if (GX_TRACKS.some(t => t.key === k)) gxTrack = k; else gxTrack = (GX_TRACKS.find(t => t.lv === grLevel) || GX_TRACKS[0]).key; } catch (e) {}
(() => {   // bài đã tự bấm “đã nắm” ở bản cũ: giữ là “đang học”, cần làm bài kiểm tra để xác nhận
  let ch = false;
  [...tnDone, ...grDone].forEach(id => { if (!gxStore[id]) { gxStore[id] = { op: gxToday(), self: 1 }; ch = true; } });
  if (ch) gxSave();
})();
function gxSave() { try { localStorage.setItem(GX_KEY, JSON.stringify(gxStore)); } catch (e) {} }
const gxRec = id => gxStore[id] || (gxStore[id] = {});
function gxOpen(id) { const r = gxRec(id); r.op = gxToday(); gxSave(); }
function gxStatus(id) {
  const r = gxStore[id];
  if (!r || (!r.op && r.n == null)) return 'new';
  if (r.last != null && r.last < 80) return 'weak';
  if (r.best >= 80) return 'done';
  return 'learning';
}
const gxMaster = id => { const r = gxStore[id]; return !!(r && r.best >= 80 && r.last >= 80 && (r.st || 0) >= 3); };
const gxDue = id => { const r = gxStore[id]; return !!(r && r.n && r.due != null && r.due <= gxToday()); };
const GX_ST = { new: ['Chưa học', 'Chưa mở bài'], learning: ['Đang học', 'Đã học nhưng chưa đạt bài kiểm tra'], weak: ['Cần ôn', 'Bài kiểm tra gần nhất chưa đạt 80%'], done: ['Đã nắm', 'Đạt bài kiểm tra từ 80% trở lên'] };
// ghi kết quả kiểm tra (cuối bài / ôn tập): pct 0–100, wrong = danh sách mã câu sai
function gxResult(id, pct, wrong) {
  const r = gxRec(id), d = gxToday();
  if (r.st) srSeed(r, GX_GAP[Math.max(0, r.st - 1)], false, r.t);   // v132: chuyển bài đã ôn sang FSRS
  r.n = (r.n || 0) + 1; r.last = pct; r.best = Math.max(r.best || 0, pct); r.t = d; if (!r.op) r.op = d;
  r.wrong = Array.from(new Set([...(wrong || []), ...((r.wrong || []).filter(q => !(wrong || []).includes(q)))])).slice(0, 12);
  if (pct >= 80) {
    if (!r.st || r.due == null || r.due <= d) { r.st = Math.min((r.st || 0) + 1, GX_GAP.length); r.due = d + srApply(r, pct >= 95 ? 4 : 3, d); }
  } else { srApply(r, pct >= 60 ? 2 : 1, d); r.st = 0; r.due = d + 1; }
  delete r.self;
  gxSave();
}
mxIsDone = it => gxStatus(it.id) === 'done';

/* ---------- câu hỏi ---------- */
const gxNorm = s => (typeof scExpand === 'function' ? scExpand(String(s)) : ' ' + String(s).toLowerCase() + ' ').replace(/[.,!?;:“”"]/g, ' ').replace(/\s+/g, ' ').trim();
const gxAns = q => String(q[1]).split('|');
// v253: câu điền từ – từ gợi ý trong ngoặc và các đáp án khác cũng đúng
const GX_FILL = {"present-simple": [["go", []], ["not eat", ["do not eat"]], 0], "present-continuous": [["sleep", ["'s sleeping"]], ["play", ["'re playing"]], 0], "past-be": [0, 0, ["", ["were not"]]], "be-present": [["", ["'s"]], ["", ["'re"]], 0], "howto-greet": [["", ["see"]], ["", ["I am", "this is"]], 0], "howto-personal": [0, ["", ["'m"]], 0], "pronouns": [["I", []], ["she", []], ["they", []]], "plural": [["book", []], ["child", ["kids"]], ["box", []]], "nouns": [["", ["a little", "more"]], ["advice", []], 0], "thereis": [["", ["'s"]], 0, 0], "howto-family": [["", ["have got", "'ve got"]], ["", ["'s"]], ["", ["has got", "'s got"]]], "conjunctions": [0, ["", ["although", "though", "yet"]], ["", ["as", "since"]]], "modal-can": [["swim", []], 0, ["", ["Can", "Would", "Will"]]], "past-simple": [["visit", []], ["", ["did not", "couldn't", "could not"]], ["see", ["watch", "read", "hear"]]], "past-continuous": [["cook", ["was making", "was preparing"]], 0, ["sleep", []]], "going-to": [["be going to", ["'m going to"]], ["be going to", ["'s going to"]], ["sell", []]], "future-simple": [["", ["'ll"]], ["", ["'ll"]], ["be", ["arrive", "come"]]], "present-perfect": [["finish", ["'ve finished", "have done", "'ve done"]], ["", ["'s"]], ["eat", ["tried", "had"]]], "howto-suggest": [["go", ["eat"]], ["watch", ["seeing"]], ["take", ["get", "call", "catch"]]], "possessive-s": [["sister", []], ["teachers", []], ["children", ["kids'"]]], "howto-restaurant": [["", ["Might"]], ["", ["get", "see"]], 0], "like-ing": [["listen", []], ["eat", []], ["walk", []]], "havegot": [0, 0, ["", ["has not"]]], "howto-invite": [["join", []], 0, 0], "howto-shop": [["", ["get", "buy"]], 0, ["big", ["larger"]]], "imperative": [["", ["Do not", "Never"]], ["", ["Go"]], ["", ["keep", "stay"]]], "regular-ed": [["play", []], ["wait", []], ["stop", []]], "wh-questions": [0, ["", ["Whom"]], 0], "howto-apologise": [0, ["", ["got"]], 0], "adj-modifier": [["", ["very", "so", "truly"]], ["", ["really"]], 0], "compare": [["good", []], 0, ["expensive", []]], "howto-directions": [["", ["ahead"]], 0, 0], "prep-movement": [["", ["in", "inside"]], 0, ["", ["over"]]], "simple-vs-continuous": [["drive", ["'m driving"]], ["boil", []], ["know", []]], "howto-phone": [["", ["it"]], ["", ["say"]], 0], "verb-to-v": [["learn", []], ["lock", []], ["buy", []]], "howto-hotel": [["", ["in"]], 0, ["", ["get", "order", "book"]]], "adverb-manner": [["slow", []], ["good", []], ["hard", []]], "modal-more": [["", ["ought to"]], ["", ["must not", "can't", "cannot"]], ["", ["might", "could"]]], "cond-1": [["rain", []], ["melt", []], ["start", ["'ll start"]]], "ittakes": [["take", []], ["get", ["to go"]], ["take", []]], "itsadj": [["learn", []], 0, ["book", ["to reserve"]]], "present-perfect-continuous": [["study", ["'ve been studying", "have been learning", "'ve been learning"]], ["work", ["'s been working"]], 0], "past-perfect": [["", ["had", "had just"]], ["lose", ["'d lost"]], ["see", []]], "future-continuous": [["fly", ["'ll be flying"]], ["do", []], ["have", ["'ll be having", "will be eating", "'ll be eating"]]], "stative": [["think", []], ["have", ["has got", "'s got"]], ["taste", []]], "pp-vs-past": [["go", ["travelled", "traveled", "flew"]], ["live", ["'ve lived"]], ["be", []]], "future-forms": [["kế hoạch đã định", []], ["quyết định ngay lúc nói", []], ["dự đoán có căn cứ", []]], "time-clauses": [["arrive", ["get there"]], ["come", ["get", "am"]], ["hear", []]], "modal-deduction": [0, ["", ["cannot", "couldn't"]], ["", ["may", "could"]]], "obligation": [["", ["must", "need to"]], ["", ["do not have to", "don't need to", "needn't"]], ["", ["'ll have to", "have to", "must", "need to"]]], "passive": [["build", []], ["grow", []], ["send", []]], "cond-2": [["have", []], ["study", ["'d study"]], ["be", ["was"]]], "gerund-1": [["listen", []], ["come", []], ["cook", []]], "relative-1": [["", ["that"]], 0, 0], "reported": [["be", ["felt"]], ["", ["'d"]], ["like", []]], "quantifiers": [["", ["a lot of", "lots of"]], ["", ["some", "several"]], ["", ["some"]]], "indefinite": [0, ["", ["anybody", "someone", "somebody"]], 0], "makelet": [["clean", ["tidy"]], ["go", ["stay"]], ["laugh", []]], "asktell": [["close", ["to shut"]], ["stop", ["to quit", "to give up"]], ["read", []]], "usedto": [0, 0, ["drive", []]], "hadbetter": [["see", []], ["not be", []], 0], "spend": [["learn", ["studying", "practising", "practicing"]], ["wait", []], ["spend", []]], "howto-opinion": [["", ["view"]], 0, 0], "past-perfect-continuous": [["wait", ["'d been waiting"]], ["rain", []], 0], "future-perfect": [["finish", ["'ll have finished"]], ["work", ["'ll have worked", "will have been", "will have been working"]], ["cook", ["made", "finished"]]], "future-in-past": [["be going to", []], ["", ["was going to", "might"]], ["", ["'d"]]], "cond-3": [["tell", ["would've told", "'d have told"]], ["invite", ["'d invited"]], ["study", ["'d studied", "had worked", "had tried"]]], "gerund-2": [["smoke", []], ["send", []], ["meet", []]], "modal-perfect": [["leave", ["have gone"]], ["pass", []], ["", ["could"]]], "passive-report": [0, ["work", []], ["be", []]], "participle": [["feel", ["Being"]], ["live", []], ["build", []]], "unless-provided": [0, ["", ["provided", "provided that", "providing", "so long as", "if"]], 0], "havedone": [["cut", []], ["repair", ["fixed", "serviced"]], ["paint", []]], "suggest": [["go", []], ["see", ["should see"]], ["take", []]], "prefer": [0, ["stay", []], 0], "itstime": [["go", []], ["start", ["began"]], 0], "although": [["", ["Though", "Even though"]], 0, 0], "prevent": [0, ["arrive", ["getting there"]], ["spread", []]], "howto-email": [0, ["", ["email", "give"]], ["hear", []]], "future-perfect-continuous": [["work", ["'ll have been working"]], ["run", []], ["study", ["learning"]]], "polite-tenses": [0, ["dùng thì quá khứ cho lịch sự", []], ["hope", ["'d hoped", "was hoping", "hoped"]]], "wish": [["have", []], ["go", ["'d gone"]], 0], "inversion": [["", ["had I"]], 0, 0], "mixedcond": [["be", ["'d be", "would be living", "'d be living"]], ["ask", ["'d have asked", "would've asked"]], ["learn", ["'d learnt", "'d learned", "had studied"]]], "cleft": [["", ["that"]], ["", ["that"]], 0], "themore": [0, ["expensive", []], ["early", ["sooner"]]], "subjunctive": [["go", ["should go"]], ["arrive", ["should arrive"]], ["be", ["should be"]]], "whatever": [["", ["much"]], 0, 0], "emphasis": [["trợ động từ nhấn mạnh", []], ["trợ động từ nhấn mạnh", []], ["", ["what is"]]], "discourse": [["", ["Nevertheless", "Nonetheless", "Still"]], ["", ["So", "Consequently", "As a result", "Thus"]], ["", ["Furthermore", "Besides", "Also", "In addition", "Plus"]]]};
const gxFillInfo = Q => { const a = (typeof GX_FILL !== 'undefined' && GX_FILL[Q.id]) || null; const r = a && a[+String(Q.qid).slice(1)]; return r || ['', []]; };
const gxFill = (sent, w) => sent.replace('___', w === '—' ? '' : w).replace(/\s+/g, ' ').replace(/\s+([,.?!])/g, '$1').replace(/^\s+/, '').replace(/^./, c => c.toUpperCase());
function gxExItems(id) {
  const arr = (typeof EX_DATA !== 'undefined' && EX_DATA[id]) || [];
  return arr.filter(r => r && r[0] && r[1] && !/→/.test(r[0]));
}
// tạo câu hỏi từ một câu mẫu tự soạn: type = mc | fill | fix
function gxCoreQ(id, ci, type) {
  const q = (GX_Q[id] || [])[ci]; if (!q) return null;
  return { id, qid: 'c' + ci, type, q };
}
function gxExQ(id, ei, type) {
  const r = gxExItems(id)[ei]; if (!r) return null;
  return { id, qid: 'e' + ei, type, r };
}
const gxPickEx = (id, n, avoid) => { const L = gxExItems(id).map((_, i) => i).filter(i => !(avoid || []).includes(i)); return lsShuffle(L).slice(0, n); };
function gxPracticeSet(id) {
  const ex = gxPickEx(id, 2);
  return [gxCoreQ(id, 0, 'mc'), gxCoreQ(id, 1, 'fill'), ex[0] != null ? gxExQ(id, ex[0], 'order') : null, gxCoreQ(id, 2, 'fix'), ex[1] != null ? gxExQ(id, ex[1], 'trans') : null].filter(Boolean);
}
/* v245: bài kiểm tra cuối bài có 3 mức khó, mỗi mức một sao (dùng lại các câu sẵn có, chỉ đổi dạng câu):
   1 Dễ   ★   chọn đáp án + sắp xếp từ (nhận biết)      · đạt từ 80%
   2 Vừa  ★★  trộn 5 dạng như trước                     · đạt từ 80% → bài "Đã nắm"
   3 Khó  ★★★ sửa lỗi, điền từ không gợi ý nghĩa, dịch  · sai tối đa 1 câu → bài "Đã nắm" */
const GX_LVL = { 1: ['Dễ', 'Chọn đáp án và sắp xếp từ. Để làm quen với cấu trúc.'], 2: ['Vừa', 'Trộn đủ 5 dạng câu. Đạt thì bài được tính là “Đã nắm”.'], 3: ['Khó', 'Sửa lỗi sai, điền từ không có gợi ý nghĩa và dịch cả câu. Chỉ được sai tối đa 1 câu.'] };
const gxStars = id => { const r = gxStore[id]; return r ? Math.max(r.star || 0, r.best >= 80 ? 2 : 0) : 0; };   // bài đã đạt từ trước bản v245 = 2 sao
const gxStarTxt = n => '★'.repeat(n) + '☆'.repeat(3 - n);
function gxTestSet(id, lv) {
  if (lv === 1) {
    const ex1 = gxPickEx(id, 3);
    return lsShuffle([gxCoreQ(id, 0, 'mc'), gxCoreQ(id, 1, 'mc'), gxCoreQ(id, 2, 'mc'), ...ex1.map(e => gxExQ(id, e, 'order'))].filter(Boolean));
  }
  if (lv === 3) {
    const ex3 = gxPickEx(id, 4);
    return lsShuffle([gxCoreQ(id, 0, 'fix'), gxCoreQ(id, 1, 'fill'), gxCoreQ(id, 2, 'fix'), ...ex3.map(e => gxExQ(id, e, 'trans'))].filter(Boolean));
  }
  const ex = gxPickEx(id, 4);
  const qs = [gxCoreQ(id, 0, 'fix'), gxCoreQ(id, 1, 'mc'), gxCoreQ(id, 2, 'fill')];
  ex.forEach((e, i) => qs.push(gxExQ(id, e, i < 2 ? 'order' : 'trans')));
  return lsShuffle(qs.filter(Boolean));
}
function gxReviewSet(ids) {
  const out = [];
  ids.forEach(id => {
    const r = gxStore[id] || {}, wrong = (r.wrong || []).filter(x => /^c\d$/.test(x)).map(x => +x.slice(1));
    const order = [...new Set([...wrong, ...lsShuffle([0, 1, 2])])];
    const types = lsShuffle(['mc', 'fill', 'fix']);
    order.slice(0, 3).forEach((ci, k) => { const q = gxCoreQ(id, ci, types[k]); if (q) out.push(q); });
  });
  return out;
}

/* v143: ghi câu sai vào Mistakes (đúng lại thì tính một lần luyện đúng) */
function gxMk(Q, ok, user) {
  if (typeof window.mkAdd !== 'function') return;
  const k = 'gx|' + Q.id + '|' + Q.qid;
  if (ok) { window.mkOk(k); return; }
  const it = gxFind(Q.id), cat = it ? it.title : '';
  if (Q.q) {
    const q = Q.q, ans = gxAns(q);
    if (Q.type === 'fix') window.mkAdd({ k, src: 'gx', cat, mode: 'fix', p: Q._wrongSent, hint: q[4], a: ans.map(a => gxFill(q[0], a)), wrong: user, why: (Q._w ? `Lỗi: “${Q._w[0] === '—' ? '(thiếu từ)' : Q._w[0]}” → ${Q._w[1]} ` : '') + q[3] });
    else if (ans[0] === '—') window.mkAdd({ k, src: 'gx', cat, mode: 'sent', ask: 'Viết lại cả câu cho đúng (chỗ trống có thể không cần từ nào)', p: q[0].replace('___', '_____'), hint: q[4], a: ans.map(a => gxFill(q[0], a)), wrong: user, why: q[3] });
    else window.mkAdd({ k, src: 'gx', cat, mode: 'blank', p: q[0].replace('___', '_____'), hint: q[4], a: ans.filter(a => a !== '—'), right: gxFill(q[0], ans[0]), wrong: user, why: q[3] });
  } else if (Q.r) {
    const r = Q.r;
    window.mkAdd({ k, src: 'gx', cat, mode: 'sent', ask: Q.type === 'order' ? 'Viết câu tiếng Anh (sắp xếp đúng trật tự từ)' : 'Dịch sang tiếng Anh', p: r[1], a: [r[0], ...(r[2] || [])], wrong: user, why: gxStructHint(Q.id) });
  }
}
/* ---------- một lượt câu hỏi (dùng cho luyện tập, kiểm tra, ôn tập) ---------- */
const GX_TYPE_VI = { mc: 'Chọn đáp án đúng', fill: 'Điền từ còn thiếu', order: 'Sắp xếp từ thành câu', fix: 'Tìm và sửa lỗi sai', trans: 'Dịch Việt → Anh' };
function gxQuiz(box, qs, opts) {
  opts = opts || {};
  const S = { i: 0, res: [] };
  const draw = () => {
    box.innerHTML = '';
    if (S.i >= qs.length) { if (opts.onDone) opts.onDone(S.res, box); return; }
    const Q = qs[S.i];
    const head = grEl('div', 'gx-q-top');
    head.appendChild(grEl('span', 'gx-q-type', `${GX_TYPE_VI[Q.type]}`));
    head.appendChild(grEl('span', 'gx-q-n', `Câu ${S.i + 1}/${qs.length}`));
    box.appendChild(head);
    if (opts.showLesson) { const it = gxFind(Q.id); if (it) box.appendChild(grEl('div', 'gx-q-from', 'Bài: ' + it.title)); }
    const body = grEl('div', 'gx-q-body'); box.appendChild(body);
    const fb = grEl('div', 'gx-fb'); fb.hidden = true;
    const next = grEl('button', 'btn-primary gx-next', S.i + 1 < qs.length ? 'Câu tiếp →' : (opts.doneLabel || 'Xem kết quả'));
    next.hidden = true;
    next.addEventListener('click', () => { S.i++; draw(); });
    const finish = (ok, detail, user) => {
      S.res.push({ id: Q.id, qid: Q.qid, ok });
      try { if (!opts.noMk) gxMk(Q, ok, user); if (window.actLog) actLog('g'); } catch (e) {}   // v162: bài kiểm tra trình độ không ghi Mistakes
      fb.hidden = false; fb.className = 'gx-fb ' + (ok ? 'ok' : 'bad');
      fb.innerHTML = '';
      fb.appendChild(grEl('div', 'gx-fb-t', ok ? '✓ Chính xác!' : '✗ Chưa đúng'));
      detail.forEach(n => fb.appendChild(n));
      next.hidden = false;
      setTimeout(() => { try { next.focus({ preventScroll: true }); fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); } catch (e) {} }, 40);
    };
    const line = (label, text, cls, say) => { const d = grEl('div', 'gx-line' + (cls ? ' ' + cls : '')); if (label) d.appendChild(grEl('span', 'gx-lbl', label)); const t = grEl('span', null, text); d.appendChild(t); if (say) d.appendChild(tnPlay(say, 'Nghe câu')); return d; };
    const why = (t, cls) => grEl('div', 'gx-why' + (cls ? ' ' + cls : ''), t);
    if (Q.q) {
      const q = Q.q, fi = gxFillInfo(Q), ans = gxAns(q).concat(Q.type === 'mc' ? [] : fi[1]), right = gxFill(q[0], ans[0]);
      if (Q.type === 'mc' || Q.type === 'fill') {
        const s = grEl('div', 'gx-sent');
        q[0].split('___').forEach((p, i) => { if (i) s.appendChild(grEl('span', 'gx-blank', '_____')); s.appendChild(document.createTextNode(p)); });
        body.appendChild(s);
        if (!opts.noVi || Q.type === 'fill') body.appendChild(grEl('div', 'gx-vi', q[4]));
        if (Q.type === 'fill' && fi[0]) body.appendChild(grEl('div', 'gx-cue', /^[\x00-\x7f]+$/.test(fi[0]) ? 'Gợi ý: dùng dạng đúng của (' + fi[0] + ')' : 'Gợi ý: ' + fi[0]));
      }
      if (Q.type === 'mc') {
        const opts2 = lsShuffle([ans[0], ...q[2].map(w => w[0])]);
        const wrap = grEl('div', 'gx-opts');
        opts2.forEach((o, k) => {
          const b = grEl('button', 'gx-opt', `${'ABC'[k]}. ${o === '—' ? '(không điền gì)' : o}`);
          b.addEventListener('click', () => {
            if (S.res.length > S.i) return;
            const ok = o === ans[0];
            wrap.querySelectorAll('.gx-opt').forEach((x, j) => { x.disabled = true; if (opts2[j] === ans[0]) x.classList.add('ok'); else if (j === k) x.classList.add('bad'); });
            const det = [line('Câu đúng', right, 'gx-right', right)];
            if (!ok) { const w = q[2].find(x => x[0] === o); if (w) det.push(why(`Vì sao “${o === '—' ? '(bỏ trống)' : o}” sai: ${w[1]}`, 'bad')); }
            det.push(why(`Vì sao “${ans[0]}” đúng: ${q[3]}`, 'ok'));
            if (ok) q[2].forEach(w => det.push(why(`“${w[0] === '—' ? '(bỏ trống)' : w[0]}” sai vì: ${w[1]}`, 'soft')));
            finish(ok, det, o === '—' ? '(bỏ trống)' : o);
          });
          wrap.appendChild(b);
        });
        body.appendChild(wrap);
      } else if (Q.type === 'fill' || Q.type === 'fix') {
        if (Q.type === 'fix') {
          const w = q[2][1] || q[2][0], wrongSent = gxFill(q[0], w[0]);
          body.appendChild(grEl('div', 'gx-ask', 'Câu sau có một lỗi sai. Hãy viết lại câu đúng:'));
          body.appendChild(grEl('div', 'gx-sent gx-bad', '✗ ' + wrongSent));
          body.appendChild(grEl('div', 'gx-vi', q[4]));
          Q._w = w; Q._wrongSent = wrongSent;
        }
        const row = grEl('div', 'gx-inrow');
        const inp = grEl(Q.type === 'fix' ? 'textarea' : 'input', 'gx-in');
        if (Q.type === 'fix') { inp.rows = 2; inp.value = Q._wrongSent; } else { inp.type = 'text'; inp.placeholder = 'Gõ từ còn thiếu…'; }
        inp.setAttribute('autocomplete', 'off'); inp.setAttribute('autocapitalize', 'off'); inp.spellcheck = false;
        const ck = grEl('button', 'btn-primary', 'Kiểm tra');
        const go = () => {
          const v = inp.value.trim(); if (!v || S.res.length > S.i) return;
          if (Q.type === 'fix' && gxNorm(v) === gxNorm(Q._wrongSent)) { inp.classList.add('gx-shake'); setTimeout(() => inp.classList.remove('gx-shake'), 400); return; }
          inp.disabled = true; ck.disabled = true;
          let ok;
          if (Q.type === 'fill') ok = ans.some(a => gxNorm(a) === gxNorm(v));
          else ok = ans.some(a => gxNorm(gxFill(q[0], a)) === gxNorm(v));
          const det = [];
          if (!ok) det.push(line('Bạn viết', v, 'gx-yours'));
          det.push(line('Câu đúng', right, 'gx-right', right));
          if (Q.type === 'fix') det.push(why(`Lỗi sai: “${Q._w[0] === '—' ? '(thiếu từ)' : Q._w[0]}” → ${Q._w[1]}`, 'bad'));
          else if (!ok) { const w = q[2].find(x => gxNorm(x[0]) === gxNorm(v)); if (w) det.push(why(`Vì sao “${v}” sai: ${w[1]}`, 'bad')); }
          det.push(why(`Vì sao “${ans[0]}” đúng: ${q[3]}`, 'ok'));
          if (ans.length > 1) det.push(why('Cũng chấp nhận: ' + ans.slice(1).join(', '), 'soft'));
          finish(ok, det, v);
        };
        ck.addEventListener('click', go);
        inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); if (S.res.length > S.i) next.click(); else go(); } });
        row.appendChild(inp); row.appendChild(ck); body.appendChild(row);
      }
    } else if (Q.r) {
      const r = Q.r, models = [r[0], ...(r[2] || [])];
      body.appendChild(grEl('div', 'gx-vi big', r[1]));
      if (Q.type === 'order') {
        body.appendChild(grEl('div', 'gx-ask', 'Chạm vào các từ để sắp xếp thành câu tiếng Anh đúng:'));
        const words = r[0].split(/\s+/).filter(Boolean);
        let order = lsShuffle(words.map((_, i) => i));
        if (order.every((x, i) => x === i) && words.length > 1) order = order.slice(1).concat(order[0]);
        const picked = [];
        const ansBox = grEl('div', 'gx-ans'), bank = grEl('div', 'gx-bank');
        const ck = grEl('button', 'btn-primary', 'Kiểm tra'), clr = grEl('button', 'btn-ghost', '↺ Làm lại');
        const drawT = () => {
          ansBox.innerHTML = ''; bank.innerHTML = '';
          if (!picked.length) ansBox.appendChild(grEl('span', 'gx-ph', 'Chạm vào các từ bên dưới…'));
          picked.forEach((wi, k) => { const t = grEl('button', 'gx-tile in', words[wi]); t.addEventListener('click', () => { if (S.res.length > S.i) return; picked.splice(k, 1); drawT(); }); ansBox.appendChild(t); });
          order.forEach(wi => { const t = grEl('button', 'gx-tile' + (picked.includes(wi) ? ' used' : ''), words[wi]); t.disabled = picked.includes(wi) || S.res.length > S.i; t.addEventListener('click', () => { picked.push(wi); drawT(); }); bank.appendChild(t); });
          ck.disabled = picked.length !== words.length || S.res.length > S.i;
        };
        ck.addEventListener('click', () => {
          const v = picked.map(i => words[i]).join(' ');
          const ok = models.some(m => lsNorm(m).join(' ') === lsNorm(v).join(' '));
          clr.disabled = true; drawT();
          const det = [];
          if (!ok) det.push(line('Bạn xếp', v, 'gx-yours'));
          det.push(line('Câu đúng', r[0], 'gx-right', r[0]));
          if (!ok) det.push(why('So sánh trật tự từ với câu đúng: ' + gxOrderHint(r[0], v), 'bad'));
          det.push(why(gxStructHint(Q.id), 'ok'));
          finish(ok, det, v);
        });
        clr.addEventListener('click', () => { picked.length = 0; drawT(); });
        body.appendChild(ansBox); body.appendChild(bank);
        const act = grEl('div', 'gx-acts'); act.appendChild(clr); act.appendChild(ck); body.appendChild(act);
        drawT();
      } else {
        body.appendChild(grEl('div', 'gx-ask', 'Dịch câu trên sang tiếng Anh:'));
        const row = grEl('div', 'gx-inrow');
        const inp = grEl('textarea', 'gx-in'); inp.rows = 2; inp.placeholder = 'Viết câu tiếng Anh…'; inp.spellcheck = false;
        const ck = grEl('button', 'btn-primary', 'Kiểm tra');
        const go = async () => {
          const v = inp.value.trim(); if (!v || S.res.length > S.i || ck.disabled) return;
          ck.disabled = true; inp.disabled = true;
          const exact = models.some(m => gxNorm(m) === gxNorm(v));
          let rep = null;
          if (!exact && typeof smartCheck === 'function') { ck.textContent = 'Đang chấm…'; try { rep = await smartCheck(v, models); } catch (e) {} }
          const ok = exact || !!(rep && rep.pass);
          const det = [];
          if (rep && rep.verdict !== 'exact') det.push(smartReport(rep, { compact: true, noTitle: ok }));
          det.push(line(ok && !exact ? 'Đáp án mẫu' : 'Câu đúng', r[0], 'gx-right', r[0]));
          if (models.length > 1) det.push(why('Cách nói khác: ' + models.slice(1).join(' · '), 'soft'));
          det.push(why(gxStructHint(Q.id), 'ok'));
          finish(ok, det, v);
        };
        ck.addEventListener('click', go);
        inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); if (S.res.length > S.i) next.click(); else go(); } });
        row.appendChild(inp); row.appendChild(ck); body.appendChild(row);
      }
    }
    box.appendChild(fb); box.appendChild(next);
  };
  draw();
  // dừng giữa chừng (hết giờ): các câu chưa trả lời tính là sai
  return { stop: () => { if (S.i >= qs.length) return; for (let k = S.res.length; k < qs.length; k++) S.res.push({ id: qs[k].id, qid: qs[k].qid, ok: false, skip: true }); S.i = qs.length; draw(); } };
}
function gxOrderHint(right, user) {
  const a = right.split(/\s+/), b = user.split(/\s+/);
  const i = a.findIndex((w, k) => lsNorm(w).join() !== lsNorm(b[k] || '').join());
  return i < 0 ? 'đúng thứ tự.' : `từ thứ ${i + 1} nên là “${a[i]}”, không phải “${b[i] || ''}”.`;
}
function gxStructHint(id) {
  const it = gxFind(id); if (!it) return '';
  if (it.k === 'tn') return `Cấu trúc của bài (${it.title}): ${it.src.formula.pos}`;
  const s = (it.src.sections || []).find(x => x.formula || x.fx);
  if (!s) return `Ghi nhớ cấu trúc của bài: ${it.title}.`;
  const f = s.formula || (s.fx || []).map(r => r[1]).join(' · ');
  return `Cấu trúc của bài (${it.title}): ${f}`;
}
function gxScoreBox(res, title, extra) {
  const n = res.length, ok = res.filter(x => x.ok).length, pct = n ? Math.round(ok / n * 100) : 0;
  const b = grEl('div', 'tense-card gx-score ' + (pct >= 80 ? 'ok' : pct >= 50 ? 'mid' : 'bad'));
  b.appendChild(grEl('div', 'gx-score-t', title));
  b.appendChild(grEl('div', 'gx-score-big', pct + '%'));
  b.appendChild(grEl('div', 'gx-score-sub', `${ok}/${n} câu đúng` + (extra ? ' · ' + extra : '')));
  return { box: b, pct, ok, n };
}

/* ---------- trang chính tab Grammar ---------- */
const gxUI = { q: '', cat: 'all', st: 'all', fav: false };
function gxBadge(id) {
  const st = gxStatus(id), b = grEl('span', 'gx-st st-' + st, GX_ST[st][0] + (st === 'done' && gxMaster(id) ? ' ★' : ''));
  b.title = st === 'done' && gxMaster(id) ? 'Thành thạo: đạt kiểm tra qua nhiều lần ôn' : GX_ST[st][1];
  return b;
}
function gxCard(it, num) {
  const st = gxStatus(it.id);
  const b = grEl('button', 'gr-topic gx-topic st-' + st);
  b.appendChild(grEl('span', 'gr-num', st === 'done' ? '✓' : String(num)));
  b.appendChild(grEl('span', 'gr-t-title', it.title));
  b.appendChild(grEl('span', 'gr-t-en', it.en));
  const meta = grEl('span', 'gx-meta');
  meta.appendChild(gxBadge(it.id));
  const r = gxStore[it.id];
  if (gxStars(it.id)) { const sp = grEl('span', 'gx-stars', gxStarTxt(gxStars(it.id))); sp.title = gxStars(it.id) + '/3 sao'; meta.appendChild(sp); }
  if (r && r.best != null) meta.appendChild(grEl('span', 'gx-best', `cao nhất ${r.best}%`));
  if (gxDue(it.id)) meta.appendChild(grEl('span', 'gx-due', '⏰ cần ôn'));
  b.appendChild(meta);
  const fv = grEl('span', 'gx-fav' + (gxFav.has(it.id) ? ' on' : ''), gxFav.has(it.id) ? '★' : '☆');
  fv.setAttribute('role', 'button'); fv.title = 'Yêu thích';
  fv.addEventListener('click', e => { e.stopPropagation(); if (gxFav.has(it.id)) gxFav.delete(it.id); else gxFav.add(it.id); try { localStorage.setItem(GX_FAV_KEY, JSON.stringify([...gxFav])); } catch (er) {} fv.classList.toggle('on', gxFav.has(it.id)); fv.textContent = gxFav.has(it.id) ? '★' : '☆'; });
  b.appendChild(fv);
  b.addEventListener('click', () => gxLesson(it.id));
  return b;
}
function gxSymbolsBox(open) {
  const d = grEl('details', 'tense-card gx-sym');
  d.open = !!open;
  d.appendChild(grEl('summary', null, '🔤 Giải thích các ký hiệu ngữ pháp (S, V, O, V2, V3…)'));
  const t = grEl('table', 'gx-sym-t');
  GX_SYMBOLS.forEach(([k, v]) => { const tr = grEl('tr'); tr.appendChild(grEl('td', 'gx-sym-k', k)); tr.appendChild(grEl('td', null, v)); t.appendChild(tr); });
  d.appendChild(t);
  return d;
}
function gxReviewIds() {
  const ids = GX_ALL.map(x => x.id).filter(id => gxDue(id) || gxStatus(id) === 'weak');
  return ids.sort((a, b) => (gxStatus(a) === 'weak' ? 0 : 1) - (gxStatus(b) === 'weak' ? 0 : 1) || ((gxStore[b].wrong || []).length - (gxStore[a].wrong || []).length));
}
function renderGrammarHome(keepScroll) {
  const y = window.scrollY;
  grRoot.innerHTML = '';
  grRoot.appendChild(grEl('div', 'section-title', 'Grammar'));
  grRoot.appendChild(grEl('div', 'section-sub', 'Học theo trình độ · Luyện tập · Ôn tập · Theo dõi tiến độ. Mỗi bài gồm 7 bước: khái niệm, công thức, cách dùng, ví dụ, lỗi thường gặp, luyện tập và kiểm tra cuối bài.'));
  // tiến độ
  const total = GX_ALL.length, cnt = { new: 0, learning: 0, weak: 0, done: 0 };
  GX_ALL.forEach(x => cnt[gxStatus(x.id)]++);
  const master = GX_ALL.filter(x => gxMaster(x.id)).length;
  const pg = grEl('div', 'tense-card gx-prog');
  const pt = grEl('div', 'gx-prog-top');
  const pn = grEl('div'); pn.appendChild(grEl('div', 'gx-prog-l', 'Tiến độ học tập · Hoàn thành'));
  const big = grEl('div', 'gx-prog-n'); big.appendChild(grEl('b', null, String(cnt.done))); big.appendChild(document.createTextNode(` / ${total} bài`)); pn.appendChild(big);
  pt.appendChild(pn);
  const stl = grEl('div', 'gx-prog-st');
  [['done', '🟢'], ['learning', '🔵'], ['weak', '🟠'], ['new', '⚪']].forEach(([k, ic]) => stl.appendChild(grEl('span', null, `${ic} ${GX_ST[k][0]}: ${cnt[k]}`)));
  if (master) stl.appendChild(grEl('span', null, `★ Thành thạo: ${master}`));
  pt.appendChild(stl);
  pg.appendChild(pt);
  const bar = grEl('span', 'vc-bar'); const fill = grEl('span'); fill.style.width = (cnt.done / total * 100) + '%'; bar.appendChild(fill); pg.appendChild(bar);
  pg.appendChild(grEl('div', 'gx-prog-note', 'Một bài chỉ được tính “Đã nắm” khi bạn đạt từ 80% ở bài kiểm tra cuối bài; “Thành thạo ★” khi vẫn đạt sau nhiều lần ôn lại (1 → 3 → 7 → 14 → 30 ngày).'));
  grRoot.appendChild(pg);
  // v119: lối vào kiểm tra xếp trình độ
  const plc = gxPlaceGet();
  const pb = grEl('button', 'gx-place-entry' + (plc ? ' done' : ''));
  pb.appendChild(grEl('span', 'gx-act-ic', '🧭'));
  const ptx = grEl('span', 'gx-act-t');
  ptx.appendChild(grEl('b', null, plc ? `Kiểm tra xếp trình độ · kết quả: ${plc.track}` : 'Chưa biết bắt đầu từ đâu? Kiểm tra xếp trình độ'));
  ptx.appendChild(grEl('span', null, plc ? `Làm ngày ${new Date(plc.d).toLocaleDateString('vi-VN')} · bấm để làm lại (50 câu mới · 15 phút)` : '50 câu từ A1 đến C1, làm trong 15 phút · app gợi ý chặng bắt đầu và tự đặt lộ trình'));
  pb.appendChild(ptx);
  pb.appendChild(grEl('span', 'vc-unit-go', '›'));
  pb.addEventListener('click', gxPlacementTest);
  // v176: lối vào kiểm tra xếp trình độ chỉ còn ở tab Today (bài kiểm tra vẫn mở ở đây khi bấm từ Hôm nay)
  if (!document.querySelector('nav.nav5')) grRoot.appendChild(pb);
  // 4 lối vào
  const acts = grEl('div', 'gx-acts4');
  const curT = GX_TRACKS.find(t => t.key === gxTrack) || GX_TRACKS[0];
  const nextL = GX_ALL.find(x => x.track === curT.key && gxStatus(x.id) !== 'done') || GX_ALL.find(x => gxStatus(x.id) !== 'done');
  const rv = gxReviewIds(), rq = gxReviewSet(rv.slice(0, 8)).length;
  const act = (ic, t, sub, fn, cls) => { const b = grEl('button', 'gx-act' + (cls ? ' ' + cls : '')); b.appendChild(grEl('span', 'gx-act-ic', ic)); const tx = grEl('span', 'gx-act-t'); tx.appendChild(grEl('b', null, t)); tx.appendChild(grEl('span', null, sub)); b.appendChild(tx); b.addEventListener('click', fn); acts.appendChild(b); };
  act('▶️', 'Học tiếp', nextL ? `${nextL.track} · ${nextL.title}` : 'Bạn đã nắm tất cả các bài!', () => { if (nextL) gxLesson(nextL.id); }, 'main');
  act('🔁', 'Ôn tập hôm nay', rv.length ? `${rv.length} bài cần ôn · ${rq} câu hỏi` : 'Chưa có bài nào đến hạn ôn', () => gxReview(), rv.length ? 'warn' : '');
  act('🏁', 'Kiểm tra cấp độ', `Đánh giá cả cấp ${curT.key} (${GX_ALL.filter(x => x.track === curT.key).length} bài)`, () => gxLevelTest(curT.key));
  act('★', 'Bài yêu thích', gxFav.size ? `${gxFav.size} bài đã lưu` : 'Bấm ☆ trên một bài để lưu', () => { gxUI.fav = !gxUI.fav; renderGrammarHome(); });
  grRoot.appendChild(acts);
  // tìm kiếm & lọc
  const sr = grEl('div', 'verb-search-row');
  const inp = grEl('input'); inp.type = 'text'; inp.id = 'gx-search'; inp.value = gxUI.q;
  inp.placeholder = 'Tìm bài: Present Simple, câu điều kiện, bị động…';
  inp.setAttribute('autocomplete', 'off');
  inp.addEventListener('input', () => { gxUI.q = inp.value; gxRenderList(); });
  sr.appendChild(inp); grRoot.appendChild(sr);
  const f1 = grEl('div', 'colloc-chips gx-f');
  [['all', 'Tất cả loại'], ...GX_CATS.map(c => [c[0], c[1] + ' ' + c[2]])].forEach(([k, l]) => { const c = grEl('button', 'colloc-chip' + (gxUI.cat === k ? ' active' : ''), l); c.addEventListener('click', () => { gxUI.cat = k; renderGrammarHome(true); }); f1.appendChild(c); });
  grRoot.appendChild(f1);
  const f2 = grEl('div', 'colloc-chips gx-f');
  [['all', 'Mọi tiến độ'], ['new', 'Chưa học'], ['learning', 'Đang học'], ['weak', 'Cần ôn'], ['done', 'Đã nắm']].forEach(([k, l]) => { const c = grEl('button', 'colloc-chip' + (gxUI.st === k ? ' active' : ''), l); c.addEventListener('click', () => { gxUI.st = k; renderGrammarHome(true); }); f2.appendChild(c); });
  const fv = grEl('button', 'colloc-chip' + (gxUI.fav ? ' active' : ''), `★ Yêu thích · ${gxFav.size}`); fv.addEventListener('click', () => { gxUI.fav = !gxUI.fav; renderGrammarHome(true); }); f2.appendChild(fv);
  grRoot.appendChild(f2);
  // chọn trình độ
  const chips = grEl('div', 'gx-tracks');
  GX_TRACKS.forEach(tr => {
    const list = GX_ALL.filter(x => x.track === tr.key), got = list.filter(x => gxStatus(x.id) === 'done').length;
    const b = grEl('button', 'gx-track vc-lvl' + tr.lv + (tr.key === gxTrack ? ' active' : ''));
    b.appendChild(grEl('b', null, tr.key));
    b.appendChild(grEl('span', null, GX_LV_NAME[tr.lv]));
    b.appendChild(grEl('span', 'gx-track-n', got ? `${got}/${list.length}` : `${list.length} bài`));
    b.addEventListener('click', () => { gxTrack = tr.key; grSetLevel(tr.lv); tnLevel = tr.lv; try { localStorage.setItem(GX_TRACK_KEY, tr.key); } catch (e) {} renderGrammarHome(true); });
    chips.appendChild(b);
  });
  grRoot.appendChild(chips);
  const list = grEl('div'); list.id = 'gx-list'; grRoot.appendChild(list);
  gxRenderList();
  grRoot.appendChild(gxSymbolsBox(false));
  if (keepScroll) window.scrollTo(0, y);
}
// v120: số thứ tự của bài = vị trí trên trang (theo nhóm, từ trên xuống) trong chặng
function gxNum(x) {
  const order = GX_CATS.flatMap(c => GX_ALL.filter(y => y.track === x.track && y.cat === c[0]));
  const k = order.indexOf(x);
  return k >= 0 ? k + 1 : GX_ALL.filter(y => y.track === x.track).indexOf(x) + 1;
}
function gxRenderList() {
  const box = document.getElementById('gx-list'); if (!box) return;
  box.innerHTML = '';
  const gxFold = x => String(x).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd');
  const q = gxFold(gxUI.q.trim());
  const filt = x => (gxUI.cat === 'all' || x.cat === gxUI.cat) && (gxUI.st === 'all' || gxStatus(x.id) === gxUI.st) && (!gxUI.fav || gxFav.has(x.id)) && (!q || gxFold(x.title + ' ' + x.en + ' ' + x.id.replace(/-/g, ' ')).includes(q));
  const flat = !!(q || gxUI.fav || gxUI.st !== 'all');
  if (flat) {
    const res = GX_ALL.filter(filt);
    box.appendChild(grEl('div', 'vc-count', `${res.length} bài` + (q ? ` khớp “${gxUI.q.trim()}”` : '')));
    if (!res.length) { box.appendChild(grEl('div', 'empty-state', gxUI.fav ? 'Chưa có bài yêu thích. Bấm ☆ trên một bài để lưu.' : 'Không có bài phù hợp.')); return; }
    const grid = grEl('div', 'gr-grid');
    res.forEach(x => { const c = gxCard(x, gxNum(x)); c.querySelector('.gr-t-en').textContent = `${x.track} · ${x.en}`; grid.appendChild(c); });
    box.appendChild(grid);
    return;
  }
  const tr = GX_TRACKS.find(t => t.key === gxTrack) || GX_TRACKS[0];
  const all = GX_ALL.filter(x => x.track === tr.key);
  const intro = grEl('div', 'tense-card tn-intro');
  const ih = grEl('div', 'tn-intro-h'); ih.appendChild(grEl('span', 'tn-badge', tr.key)); ih.appendChild(grEl('b', null, `${GX_LV_NAME[tr.lv]} · ${all.length} bài · học theo thứ tự từ trên xuống`));
  intro.appendChild(ih);
  intro.appendChild(grEl('p', 'tn-goal', 'Mục tiêu: ' + GX_TRACK_GOAL[tr.key]));
  box.appendChild(intro);
  GX_CATS.forEach(([cid, ic, label, sub]) => {
    if (gxUI.cat !== 'all' && gxUI.cat !== cid) return;
    const part = all.filter(x => x.cat === cid);
    if (!part.length) return;
    const h = grEl('div', 'tense-group-title', `${ic} ${label} · ${part.filter(x => gxStatus(x.id) === 'done').length}/${part.length}`);
    h.title = sub;
    box.appendChild(h);
    const grid = grEl('div', 'gr-grid');
    part.forEach(x => grid.appendChild(gxCard(x, gxNum(x))));
    box.appendChild(grid);
  });
  const ti = GX_TRACKS.indexOf(tr);
  if (ti < GX_TRACKS.length - 1) {
    const nx = GX_TRACKS[ti + 1];
    const nb = grEl('button', 'btn-primary vc-next-unit', `Học tiếp ${nx.key} · ${GX_LV_NAME[nx.lv]} →`);
    nb.addEventListener('click', () => { gxTrack = nx.key; grSetLevel(nx.lv); try { localStorage.setItem(GX_TRACK_KEY, nx.key); } catch (e) {} renderGrammarHome(); grScrollTop(); });
    box.appendChild(nb);
  }
}

/* v112: công thức cho những bài trước đây chỉ có bảng / ghi chú */
/* GX_EXTRA_FX: xem file dữ liệu */

/* ---------- một bài học: 7 bước ---------- */
function gxStep(n, title, nodes, key, openByDefault) {
  const card = grEl('div', 'tense-card gx-step');
  const h = grEl('h3', null); h.appendChild(grEl('span', 'gx-step-n', 'Bước ' + n)); h.appendChild(document.createTextNode(' ' + title));
  card.appendChild(h);
  nodes.filter(Boolean).forEach(x => card.appendChild(x));
  return typeof cardFold === 'function' ? cardFold(card, key) : card;   // v136: mọi bước đều có nút Close / Open
}
function gxExRow(en, vi) {
  const row = grEl('div', 'gr-ex');
  const txt = grEl('div', 'gr-ex-text', en); txt.appendChild(grEl('span', 'vi', vi));
  row.appendChild(txt); row.appendChild(tnPlay(en.replace(/→/g, '.').replace(/["“”]/g, ''), 'Nghe câu ví dụ'));
  return row;
}
function gxLesson(id) {
  const it = gxFind(id);
  if (!it) return renderGrammarHome();
  gxOpen(id);
  grSetLevel(it.lv); tnLevel = it.lv; gxTrack = it.track;
  try { localStorage.setItem(GX_TRACK_KEY, it.track); } catch (e) {}
  const t = it.src, tlist = GX_ALL.filter(x => x.track === it.track), pos = tlist.indexOf(it);
  grRoot.innerHTML = '';
  const back = grEl('button', 'gr-back', `← Ngữ pháp ${it.track}`);
  back.addEventListener('click', () => { renderGrammarHome(); grScrollTop(); });
  grRoot.appendChild(back);
  const head = grEl('div', 'gr-head');
  const cat = GX_CATS.find(c => c[0] === it.cat);
  head.appendChild(grEl('div', 'gr-en', `${it.track} · Bài ${gxNum(it)}/${tlist.length} · ${cat ? cat[1] + ' ' + cat[2] : ''}${it.k === 'tn' && !GX_TWELVE.has(id) && it.cat === 'tense' ? ' · mở rộng về thì' : ''} · ${it.en}`));
  const ht = grEl('div', 'gx-title-row');
  ht.appendChild(grEl('h2', 'gr-title', it.title));
  const fv = grEl('button', 'gx-fav big' + (gxFav.has(id) ? ' on' : ''), gxFav.has(id) ? '★' : '☆');
  fv.title = 'Lưu bài yêu thích';
  fv.addEventListener('click', () => { if (gxFav.has(id)) gxFav.delete(id); else gxFav.add(id); try { localStorage.setItem(GX_FAV_KEY, JSON.stringify([...gxFav])); } catch (e) {} fv.classList.toggle('on', gxFav.has(id)); fv.textContent = gxFav.has(id) ? '★' : '☆'; });
  ht.appendChild(fv);
  head.appendChild(ht);
  const sb = grEl('div', 'gx-st-row'); sb.appendChild(gxBadge(id)); if (gxStars(id)) sb.appendChild(grEl('span', 'gx-stars', gxStarTxt(gxStars(id))));
  const r = gxStore[id];
  if (r && r.n) sb.appendChild(grEl('span', 'gx-best', `Đã kiểm tra ${r.n} lần · cao nhất ${r.best}% · gần nhất ${r.last}%` + (r.due != null ? (r.due <= gxToday() ? ' · ⏰ cần ôn hôm nay' : ` · ôn lại sau ${r.due - gxToday()} ngày`) : '')));
  else if (r && r.self) sb.appendChild(grEl('span', 'gx-best', 'Bạn đã tự đánh dấu bài này ở bản cũ. Làm bài kiểm tra cuối bài để xác nhận.'));
  head.appendChild(sb);
  grRoot.appendChild(head);
  // Bước 1: khái niệm
  const s1 = [];
  if (it.k === 'tn') { s1.push(grEl('p', 'gx-concept', t.usage[0])); }
  else { s1.push(grEl('p', 'gx-concept', t.intro)); }
  grRoot.appendChild(gxStep(1, 'Học khái niệm', s1, 'gx|' + id + '|1', true));
  // Bước 2: công thức
  const s2 = [fxSubjNote()];
  if (it.k === 'tn') s2.push(tnFxBox([['+', 'Khẳng định', t.formula.pos], ['−', 'Phủ định', t.formula.neg], ['?', 'Câu hỏi', t.formula.q]]));
  else {
    (GX_EXTRA_FX[id] || []).forEach(([nm, rows]) => { s2.push(grEl('div', 'ex-sec-name', nm)); s2.push(grFormula({ fx: rows })); });
    const hasFx = (t.sections || []).some(sec => sec.formula || sec.fx);
    const hasTable = (t.sections || []).some(sec => sec.table);
    if (hasFx || !hasTable) (t.sections || []).forEach(sec => {
      if (!sec.formula && !sec.fx && !sec.usage) return;
      s2.push(grEl('div', 'ex-sec-name', sec.name));
      if (sec.formula || sec.fx) s2.push(grFormula(sec));
      else s2.push(grEl('div', 'gx-fx-note', '📌 ' + sec.usage));
      const e = (sec.examples || [])[0];
      if (e) { const ex = grEl('div', 'gx-fx-ex'); ex.appendChild(grEl('span', 'gx-fx-exl', 'Ví dụ: ')); ex.appendChild(document.createTextNode(e.en + ' ')); ex.appendChild(grEl('span', 'gx-fx-exvi', '— ' + e.vi)); ex.appendChild(tnPlay(e.en.replace(/→/g, '.').replace(/["“”]/g, ''), 'Nghe ví dụ')); s2.push(ex); }
    });
  }
  let tablesInStep2 = false;
  if (!s2.length && it.k === 'gr') {   // bài học theo bảng (đại từ, this/that…): đưa bảng lên bước công thức
    (t.sections || []).forEach(sec => { if (!sec.table) return; tablesInStep2 = true; s2.push(grEl('div', 'ex-sec-name', sec.name));
      const wrap = grEl('div', 'gr-table-wrap'), table = grEl('table', 'gr-table'), thead = grEl('thead'), hr = grEl('tr');
      sec.table.head.forEach(h => hr.appendChild(grEl('th', null, h))); thead.appendChild(hr); table.appendChild(thead);
      const tbody = grEl('tbody'); sec.table.rows.forEach(rw => { const tr = grEl('tr'); rw.forEach(c => tr.appendChild(sec.table.ipa ? grTableCell(c) : grEl('td', null, c))); tbody.appendChild(tr); });
      table.appendChild(tbody); wrap.appendChild(table); s2.push(wrap); });
  }
  if (!s2.length) s2.push(grEl('p', 'gx-hint', 'Bài này không có công thức riêng; hãy học các mẫu câu ở bước 3 và bước 4.'));
  s2.push(gxSymbolsBox(false));
  // v183: bài có bản học chủ động → 4 bước tương tác ở trên, bảng công thức đầy đủ thu gọn bên dưới để tra
  if (window.gxLearnHas && window.gxLearnHas(id)) {
    const ref = grEl('details', 'gxl-ref');
    ref.appendChild(grEl('summary', null, '📋 Bảng công thức đầy đủ (để tra khi cần)'));
    s2.forEach(n => n && ref.appendChild(n));
    s2.length = 0;
    s2.push(window.gxLearnBox(id), ref);
  }
  grRoot.appendChild(gxStep(2, tablesInStep2 ? 'Học công thức / bảng tổng hợp' : 'Học công thức', s2, 'gx|' + id + '|2', true));
  // Bước 3: cách dùng
  const s3 = [];
  if (it.k === 'tn') {
    const ul = grEl('ul', 'tn-usage'); t.usage.forEach(u => ul.appendChild(grEl('li', null, u))); s3.push(ul);
    if (t.signals && t.signals.length) { s3.push(grEl('div', 'tn-sub', 'Dấu hiệu nhận biết')); const sg = grEl('div', 'tn-signals'); t.signals.forEach(x => sg.appendChild(grEl('span', 'tn-sig', x))); s3.push(sg); }
  } else {
    (t.sections || []).forEach(sec => {
      if (!sec.usage && (!sec.table || tablesInStep2)) return;
      s3.push(grEl('div', 'ex-sec-name', sec.name));
      if (sec.usage) s3.push(grEl('div', 'usage gr-usage', sec.usage));
      if (sec.table && !tablesInStep2) {
        const wrap = grEl('div', 'gr-table-wrap'), table = grEl('table', 'gr-table'), thead = grEl('thead'), hr = grEl('tr');
        sec.table.head.forEach(h => hr.appendChild(grEl('th', null, h))); thead.appendChild(hr); table.appendChild(thead);
        const tbody = grEl('tbody'); sec.table.rows.forEach(rw => { const tr = grEl('tr'); rw.forEach(c => tr.appendChild(sec.table.ipa ? grTableCell(c) : grEl('td', null, c))); tbody.appendChild(tr); });
        table.appendChild(tbody); wrap.appendChild(table); s3.push(wrap);
      }
    });
  }
  const qc = tnQuestionCard(id); if (qc) s3.push(qc);
  if (s3.length) grRoot.appendChild(gxStep(3, 'Hiểu cách sử dụng', s3, 'gx|' + id + '|3'));
  // Bước 4: ví dụ
  const s4 = [];
  if (it.k === 'tn') t.examples.forEach(e => s4.push(gxExRow(e.en, e.vi)));
  else (t.sections || []).forEach(sec => (sec.examples || []).forEach(e => s4.push(gxExRow(e.en, e.vi))));
  if (s4.length < 3) gxExItems(id).slice(0, 3 - s4.length).forEach(rw => s4.push(gxExRow(rw[0], rw[1])));
  grRoot.appendChild(gxStep(4, 'Xem ví dụ', s4, 'gx|' + id + '|4'));
  // Bước 5: lỗi thường gặp
  const s5 = [];
  const mis = (w, rgt, note) => { const m = grEl('div', 'tn-mistake'); const a = grEl('div', 'tn-mis-row'); a.appendChild(grEl('span', 'tn-x', '✗')); a.appendChild(grEl('s', null, w)); a.appendChild(grEl('span', 'gx-tag bad', 'Sai')); m.appendChild(a); const b = grEl('div', 'tn-mis-row'); b.appendChild(grEl('span', 'tn-v', '✓')); b.appendChild(grEl('b', null, rgt)); b.appendChild(grEl('span', 'gx-tag ok', 'Đúng')); b.appendChild(tnPlay(rgt, 'Nghe câu đúng')); m.appendChild(b); if (note) m.appendChild(grEl('div', 'tn-mis-note', note)); return m; };
  if (it.k === 'tn' && t.mistake) s5.push(mis(t.mistake.wrong, t.mistake.right, t.mistake.note));
  (GX_Q[id] || []).slice(0, 2).forEach(q => { const w = q[2][1] || q[2][0]; s5.push(mis(gxFill(q[0], w[0]), gxFill(q[0], gxAns(q)[0]), w[1])); });
  if (it.k === 'gr' && t.tips && t.tips.length) { const ul = grEl('ul', 'gx-tips'); t.tips.forEach(tip => ul.appendChild(grEl('li', null, tip))); s5.push(ul); }
  grRoot.appendChild(gxStep(5, 'Phân biệt lỗi thường gặp', s5, 'gx|' + id + '|5'));
  // Bước 6: luyện tập
  const pbox = grEl('div', 'gx-quiz');
  const pstart = grEl('button', 'btn-primary', '✏️ Bắt đầu luyện tập (5 câu, 5 dạng)');
  const startPractice = () => gxQuiz(pbox, gxPracticeSet(id), { doneLabel: 'Xem kết quả luyện tập', onDone: (res, b) => {
    const wrong = res.filter(x => !x.ok).map(x => x.qid);
    const rr = gxRec(id); rr.wrong = Array.from(new Set([...wrong, ...(rr.wrong || [])])).slice(0, 12); gxSave();
    const sc = gxScoreBox(res, 'Kết quả luyện tập', 'chưa tính vào trạng thái bài');
    b.appendChild(sc.box);
    const again = grEl('button', 'btn-ghost', '↺ Luyện lượt khác'); again.addEventListener('click', startPractice);
    b.appendChild(again);
  } });
  pstart.addEventListener('click', startPractice);
  pbox.appendChild(grEl('p', 'gx-hint', 'Gồm: chọn đáp án đúng · điền từ còn thiếu · sắp xếp từ thành câu · tìm và sửa lỗi sai · dịch Việt → Anh. Mỗi câu sai đều có giải thích vì sao sai và vì sao đáp án đúng lại đúng.'));
  pbox.appendChild(pstart);
  grRoot.appendChild(gxStep(6, 'Luyện tập', [pbox], 'gx|' + id + '|6', true));
  // Bước 7: kiểm tra cuối bài
  const tbox = grEl('div', 'gx-quiz');
  let tLv = gxStars(id) >= 2 ? 3 : 2;   // mặc định mức Vừa (như bài kiểm tra trước đây); đã có 2 sao thì gợi ý mức Khó
  const tpick = grEl('div', 'gx-lv-pick'); tpick.setAttribute('role', 'radiogroup'); tpick.setAttribute('aria-label', 'Mức độ bài kiểm tra');
  const tnote = grEl('p', 'gx-hint');
  const tstart = grEl('button', 'btn-primary', '');
  const tHead = () => {
    tpick.innerHTML = '';
    [1, 2, 3].forEach(n => {
      const b = grEl('button', 'gx-lv' + (n === tLv ? ' on' : '') + (gxStars(id) >= n ? ' got' : '')); b.type = 'button';
      b.setAttribute('role', 'radio'); b.setAttribute('aria-checked', String(n === tLv));
      b.appendChild(grEl('b', null, GX_LVL[n][0])); b.appendChild(grEl('span', 'gx-lv-s', '★'.repeat(n)));
      if (gxStars(id) >= n) b.appendChild(grEl('span', 'gx-lv-ok', '✓ đã đạt'));
      b.addEventListener('click', () => { tLv = n; tHead(); });
      tpick.appendChild(b);
    });
    tnote.textContent = `Mức ${GX_LVL[tLv][0]}: ${GX_LVL[tLv][1]}` + (tLv === 1 ? ' Mức này chưa tính bài là “Đã nắm”.' : ' App sẽ nhắc bạn ôn lại theo lịch 1 → 3 → 7 → 14 → 30 ngày.');
    tstart.textContent = `🏁 Làm bài kiểm tra mức ${GX_LVL[tLv][0]} ${'★'.repeat(tLv)}`;
  };
  const startTest = () => { const lv = tLv; gxQuiz(tbox, gxTestSet(id, lv), { doneLabel: 'Nộp bài', noVi: lv === 3, onDone: (res, b) => {
    const n = res.length, ok = res.filter(x => x.ok).length, pct = n ? Math.round(ok / n * 100) : 0;
    const pass = lv === 3 ? (n > 0 && n - ok <= 1) : pct >= 80;
    const before = gxStars(id);
    if (lv >= 2) gxResult(id, lv === 3 && pass ? Math.max(pct, 80) : pct, res.filter(x => !x.ok).map(x => x.qid));
    else { const r0 = gxRec(id); if (!r0.op) r0.op = gxToday(); r0.wrong = Array.from(new Set([...res.filter(x => !x.ok).map(x => x.qid), ...(r0.wrong || [])])).slice(0, 12); }
    const rr = gxRec(id);
    if (pass && lv > (rr.star || 0)) rr.star = lv;
    gxSave();
    const sc = gxScoreBox(res, `Kết quả kiểm tra mức ${GX_LVL[lv][0]}`);
    let msg;
    if (pass) msg = (lv > before ? `🎉 Đạt! Bạn nhận ${'★'.repeat(lv)} cho bài này. ` : `✓ Đạt mức ${GX_LVL[lv][0]}. `)
      + (lv === 1 ? 'Thử tiếp mức Vừa để bài được tính là “Đã nắm”.' : `Bài được tính là “Đã nắm”. App sẽ nhắc ôn lại sau ${Math.max(1, (rr.due || gxToday() + 1) - gxToday())} ngày.` + (lv === 2 ? ' Muốn đủ 3 sao thì thử mức Khó.' : ''));
    else msg = lv === 3 ? 'Chưa đạt: mức Khó chỉ được sai tối đa 1 câu. Xem lại các câu sai rồi thử lại.' : lv === 2 ? 'Chưa đạt 80%. Bài chuyển sang “Cần ôn”; xem lại bước 2–5 rồi làm lại.' : 'Chưa đạt 80%. Xem lại bước 2–5 rồi làm lại nhé.';
    sc.box.appendChild(grEl('div', 'gx-score-msg', msg));
    b.appendChild(sc.box);
    const btns = grEl('div', 'ls-sum-btns');
    const again = grEl('button', 'btn-ghost', '↺ Làm lại mức ' + GX_LVL[lv][0]); again.addEventListener('click', startTest); btns.appendChild(again);
    if (pass && lv < 3) { const up = grEl('button', 'btn-primary', `Thử mức ${GX_LVL[lv + 1][0]} ${'★'.repeat(lv + 1)} →`); up.addEventListener('click', () => { tLv = lv + 1; startTest(); }); btns.appendChild(up); }
    const nx = tlist[pos + 1] || GX_ALL[GX_ALL.indexOf(it) + 1];
    if (nx) { const nb = grEl('button', pass && lv < 3 ? 'btn-ghost' : 'btn-primary', `Bài tiếp: ${nx.title} →`); nb.addEventListener('click', () => gxLesson(nx.id)); btns.appendChild(nb); }
    b.appendChild(btns);
    const st = grRoot.querySelector('.gx-st-row'); if (st) { st.innerHTML = ''; st.appendChild(gxBadge(id)); if (gxStars(id)) st.appendChild(grEl('span', 'gx-stars', gxStarTxt(gxStars(id)))); if (rr.n) st.appendChild(grEl('span', 'gx-best', `Đã kiểm tra ${rr.n} lần · cao nhất ${rr.best}% · gần nhất ${rr.last}%`)); }
  } }); };
  tstart.addEventListener('click', startTest);
  tHead();
  tbox.appendChild(tpick);
  tbox.appendChild(tnote);
  tbox.appendChild(tstart);
  grRoot.appendChild(gxStep(7, 'Kiểm tra cuối bài', [tbox], 'gx|' + id + '|7', true));
  const pr = tnPracticeBtn(id, 'Luyện thêm: bài tập dịch 5 cấp của bài này →'); if (pr) grRoot.appendChild(pr);
  // v131: luyện nói với cấu trúc của bài (tab AI Speaking)
  const talkBox = grEl('div', 'gx-talk-slot'); grRoot.appendChild(talkBox);
  const fillTalk = () => { if (typeof window.talkSlot === 'function' && talkBox.isConnected) window.talkSlot(talkBox, id); };
  // v137: chỉ tải tab AI Speaking khi bạn cuộn tới cuối bài (không tải ngay lúc mở bài)
  if (window.talkSlot) fillTalk();
  else if (window.appLoadTab && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => { if (es.some(x => x.isIntersecting)) { io.disconnect(); window.appLoadTab('page-talk').then(fillTalk, () => {}); } }, { rootMargin: '200px' });
    io.observe(talkBox);
  }
  // điều hướng
  const nav = grEl('div', 'gr-nav');
  const prev = tlist[pos - 1] || GX_ALL[GX_ALL.indexOf(it) - 1], next = tlist[pos + 1] || GX_ALL[GX_ALL.indexOf(it) + 1];
  [[prev, '← Trước'], [next, next && next.track !== it.track ? `Sang ${next.track} →` : 'Tiếp →']].forEach(([o, label], k) => {
    if (!o) { nav.appendChild(grEl('span', 'gr-nav-gap')); return; }
    const b = grEl('button', 'gr-nav-btn' + (k ? ' next' : ''));
    b.appendChild(grEl('span', 'gr-nav-label', label)); b.appendChild(grEl('span', 'gr-nav-title', o.title));
    b.addEventListener('click', () => gxLesson(o.id));
    nav.appendChild(b);
  });
  grRoot.appendChild(nav);
  grScrollTop();
}
function renderGrammarTopic(id) { gxLesson(id); }
function renderTenseTopic(id) { gxLesson(id); }

/* ---------- ôn tập hôm nay & kiểm tra cấp độ ---------- */
function gxSession(title, sub, qs, onDone) {
  grRoot.innerHTML = '';
  const back = grEl('button', 'gr-back', '← Ngữ pháp');
  back.addEventListener('click', () => { renderGrammarHome(); grScrollTop(); });
  grRoot.appendChild(back);
  const head = grEl('div', 'gr-head'); head.appendChild(grEl('div', 'gr-en', sub)); head.appendChild(grEl('h2', 'gr-title', title));
  grRoot.appendChild(head);
  const box = grEl('div', 'tense-card gx-quiz');
  grRoot.appendChild(box);
  gxQuiz(box, qs, { showLesson: true, onDone });
  grScrollTop();
}
function gxPerLesson(res) {
  const by = {};
  res.forEach(x => { const b = by[x.id] || (by[x.id] = { ok: 0, n: 0, wrong: [] }); b.n++; if (x.ok) b.ok++; else b.wrong.push(x.qid); });
  return by;
}
function gxReview() {
  const ids = gxReviewIds().slice(0, 8);
  if (!ids.length) {
    grRoot.innerHTML = '';
    const back = grEl('button', 'gr-back', '← Ngữ pháp'); back.addEventListener('click', () => renderGrammarHome()); grRoot.appendChild(back);
    const c = grEl('div', 'tense-card'); c.appendChild(grEl('h3', null, '🔁 Ôn tập ngữ pháp hôm nay'));
    c.appendChild(grEl('p', null, 'Hôm nay chưa có bài nào cần ôn. Bài sẽ xuất hiện ở đây khi đến hạn ôn (1 → 3 → 7 → 14 → 30 ngày sau khi đạt kiểm tra) hoặc khi bạn làm bài kiểm tra chưa đạt.'));
    grRoot.appendChild(c); return;
  }
  const qs = gxReviewSet(ids);
  gxSession('🔁 Ôn tập ngữ pháp hôm nay', `${ids.length} bài cần ôn · ${qs.length} câu hỏi · ưu tiên câu bạn hay sai`, lsShuffle(qs), (res, box) => {
    const by = gxPerLesson(res);
    Object.keys(by).forEach(id => gxResult(id, Math.round(by[id].ok / by[id].n * 100), by[id].wrong));
    const sc = gxScoreBox(res, 'Kết quả ôn tập'); box.appendChild(sc.box);
    const t = grEl('table', 'gx-res-t');
    Object.keys(by).forEach(id => { const tr = grEl('tr'); const p = Math.round(by[id].ok / by[id].n * 100); tr.appendChild(grEl('td', null, gxFind(id).title)); tr.appendChild(grEl('td', p >= 80 ? 'ok' : 'bad', `${by[id].ok}/${by[id].n}`)); tr.appendChild(grEl('td', null, p >= 80 ? `ôn lại sau ${gxStore[id].due - gxToday()} ngày` : 'cần ôn tiếp')); t.appendChild(tr); });
    box.appendChild(t);
    const hb = grEl('button', 'btn-primary', 'Về trang Grammar'); hb.addEventListener('click', () => { renderGrammarHome(); grScrollTop(); }); box.appendChild(hb);
  });
}
function gxLevelTest(key) {
  const ids = GX_ALL.filter(x => x.track === key).map(x => x.id);
  const qs = [];
  lsShuffle(ids).forEach((id, k) => { if (qs.length >= 20) return; const ci = Math.floor(Math.random() * 3); const q = gxCoreQ(id, ci, k % 3 === 0 ? 'fill' : 'mc'); if (q) qs.push(q); });
  gxSession(`🏁 Kiểm tra cấp ${key}`, `${qs.length} câu lấy từ ${ids.length} bài của cấp ${key}`, qs, (res, box) => {
    const by = gxPerLesson(res);
    const sc = gxScoreBox(res, `Kết quả kiểm tra cấp ${key}`); box.appendChild(sc.box);
    const weak = Object.keys(by).filter(id => by[id].ok < by[id].n);
    sc.box.appendChild(grEl('div', 'gx-score-msg', sc.pct >= 80 ? `Bạn nắm khá chắc cấp ${key}.` : 'Xem lại các bài bên dưới rồi làm lại bài kiểm tra cuối bài của từng bài nhé.'));
    if (weak.length) {
      box.appendChild(grEl('div', 'vc-done-sub', 'Bài cần xem lại:'));
      const g = grEl('div', 'gr-grid'); weak.forEach(id => { const x = gxFind(id); g.appendChild(gxCard(x, gxNum(x))); }); box.appendChild(g);
      weak.forEach(id => { const rr = gxRec(id); rr.wrong = Array.from(new Set([...by[id].wrong, ...(rr.wrong || [])])).slice(0, 12); }); gxSave();
    }
    const hb = grEl('button', 'btn-ghost', 'Về trang Grammar'); hb.addEventListener('click', () => { renderGrammarHome(); grScrollTop(); }); box.appendChild(hb);
  });
}

/* ---------- v119: bài kiểm tra xếp trình độ (v157: 50 câu A1 → C1, 15 phút, không lặp câu lần trước) ---------- */
const GX_PLACE_KEY = 'hoc-tieng-anh-placement';
const gxPlaceGet = () => { try { const o = JSON.parse(localStorage.getItem(GX_PLACE_KEY) || 'null'); if (o && /^A2\./.test(o.track)) o.track = 'A2'; return o && o.track ? o : null; } catch (e) { return null; } };
const GX_PLACE_N = { A1: 8, A2: 12, B1: 12, B2: 10, C1: 8 }, GX_PLACE_MIN = 15, GX_PLACE_SEEN = 'hoc-tieng-anh-placement-seen';
// 50 câu, không lặp câu của lần trước; ưu tiên câu chưa gặp ở các lần trước nữa, hết câu mới thì quay vòng lại
function gxPlacementPick() {
  let st = {}; try { st = JSON.parse(localStorage.getItem(GX_PLACE_SEEN) || '{}') || {}; } catch (e) {}
  const seen = new Set(st.seen || []), last = new Set(st.last || []), qs = [];
  GX_TRACKS.forEach(t => {
    const n = GX_PLACE_N[t.key] || 8, all = [];
    t.ids.filter(id => !/^howto-/.test(id)).forEach(id => (GX_Q[id] || []).forEach((q, ci) => { if (q && q[2] && q[2].length) all.push([id, ci]); }));
    const key = x => x[0] + '#' + x[1];
    let fresh = all.filter(x => !seen.has(key(x)));
    if (fresh.length < n) { all.forEach(x => seen.delete(key(x))); fresh = all.filter(x => !last.has(key(x))); }
    // mỗi bài tối đa 1 câu trước, thiếu mới lấy câu thứ hai của cùng bài
    const pick = [], usedId = new Set();
    lsShuffle(fresh).forEach(x => { if (pick.length < n && !usedId.has(x[0])) { pick.push(x); usedId.add(x[0]); } });
    lsShuffle(fresh).forEach(x => { if (pick.length < n && !pick.includes(x)) pick.push(x); });
    pick.forEach(([id, ci]) => { const q = gxCoreQ(id, ci, 'mc'); if (q) { q.track = t.key; qs.push(q); } });
  });
  const keys = qs.map(q => q.id + '#' + q.qid.slice(1));
  keys.forEach(k => seen.add(k));
  try { localStorage.setItem(GX_PLACE_SEEN, JSON.stringify({ seen: [...seen], last: keys })); } catch (e) {}
  return qs;
}
function gxPlacementTest() {
  const qs = gxPlacementPick();
  grRoot.innerHTML = '';
  const back = grEl('button', 'gr-back', '← Ngữ pháp');
  grRoot.appendChild(back);
  const head = grEl('div', 'gr-head'); head.appendChild(grEl('div', 'gr-en', `${qs.length} câu · ${GX_PLACE_MIN} phút · từ dễ (A1) đến khó (C1)`)); head.appendChild(grEl('h2', 'gr-title', '🧭 Kiểm tra xếp trình độ'));
  grRoot.appendChild(head);
  grRoot.appendChild(grEl('p', 'ls-level-desc', `Câu hỏi khó dần. Bạn có ${GX_PLACE_MIN} phút, hết giờ bài tự nộp và các câu chưa làm tính là sai. Không biết thì chọn đáp án bạn thấy hợp lý nhất. Mỗi lần làm lại sẽ là bộ câu hỏi khác.`));
  const tm = grEl('div', 'gx-timer'); grRoot.appendChild(tm);
  const box = grEl('div', 'tense-card gx-quiz');
  grRoot.appendChild(box);
  const trackOf = new Map(qs.map(q => [q.id, q.track]));
  const end = Date.now() + GX_PLACE_MIN * 60000;
  let timer = 0, timeUp = false;
  const stopT = () => { clearInterval(timer); timer = 0; };
  const tick = () => {
    if (!tm.isConnected) return stopT();
    const left = Math.max(0, Math.round((end - Date.now()) / 1000));
    tm.textContent = `⏱ Còn ${String(Math.floor(left / 60)).padStart(2, '0')}:${String(left % 60).padStart(2, '0')}`;
    tm.classList.toggle('warn', left <= 120);
    if (!left) { stopT(); timeUp = true; ctl.stop(); }
  };
  const ctl = gxQuiz(box, qs, { showLesson: false, noVi: true, noMk: true, onDone: (res, bx) => { stopT(); tm.remove(); gxPlacementResult(res, bx, trackOf, timeUp); } });
  back.addEventListener('click', () => { stopT(); renderGrammarHome(); grScrollTop(); });
  tick(); timer = setInterval(tick, 1000);
  grScrollTop();
}
// v177: đặt cùng lúc cấp cho Ngữ pháp, Bất quy tắc và Lộ trình (dùng cho kết quả kiểm tra và màn chào người mới)
function gxApplyLevel(lv) {
  const T = GX_TRACKS.find(t => t.lv === lv) || GX_TRACKS[0];
  gxTrack = T.key; grSetLevel(T.lv); tnLevel = T.lv;
  try { localStorage.setItem(GX_TRACK_KEY, T.key); } catch (e) {}
  try { localStorage.setItem('hoc-tieng-anh-irr-level', String(T.lv)); if (typeof irr !== 'undefined') irr.lv = T.lv; } catch (e) {}
  try { localStorage.setItem('hoc-tieng-anh-path-lv', String(T.lv)); } catch (e) {}
  return T;
}
window.gxApplyLevel = gxApplyLevel;
function gxPlacementResult(res, box, trackOf, timeUp) {
  const per = GX_TRACKS.map(t => { const r = res.filter(x => trackOf.get(x.id) === t.key); return { key: t.key, lv: t.lv, n: r.length, ok: r.filter(x => x.ok).length }; });
  // chặng bắt đầu = chặng đầu tiên đúng dưới 80% số câu
  let place = per.find(p => p.n && p.ok / p.n < 0.8);
  const allPass = !place;
  if (!place) place = per[per.length - 1];
  const T = GX_TRACKS.find(t => t.key === place.key);
  try { localStorage.setItem(GX_PLACE_KEY, JSON.stringify({ track: T.key, d: Date.now(), per: per.map(p => [p.key, p.ok, p.n]) })); } catch (e) {}
  gxApplyLevel(T.lv);   // v162: Lộ trình chuyển sang cấp vừa xếp
  const lvCode = ['', 'A1', 'A2', 'B1', 'B2', 'C1'][T.lv];
  const skip = res.filter(x => x.skip).length;
  if (timeUp) box.appendChild(grEl('div', 'gx-timeup', `⏰ Hết ${GX_PLACE_MIN} phút · ${skip} câu chưa làm được tính là sai.`));
  const sc = gxScoreBox(res, 'Kết quả kiểm tra xếp trình độ'); box.appendChild(sc.box);
  const rec = grEl('div', 'tense-card gx-place-rec');
  rec.appendChild(grEl('div', 'gx-place-k', allPass ? 'Bạn vững hầu hết các chặng' : 'Chặng nên bắt đầu'));
  rec.appendChild(grEl('div', 'gx-place-big', T.key));
  rec.appendChild(grEl('p', null, allPass ? `Bạn làm tốt cả ${GX_TRACKS.length} chặng. Hãy học chặng ${T.key} để hoàn thiện, và dùng “Ôn tập hôm nay” để giữ kiến thức.` : T.key === GX_TRACKS[0].key ? `Hãy bắt đầu từ chặng đầu tiên ${T.key} để xây nền chắc: ${GX_TRACK_GOAL[T.key] || ''}` : `Bạn nắm khá chắc các chặng trước ${T.key}. Bắt đầu từ ${T.key}: ${GX_TRACK_GOAL[T.key] || ''}`));
  const tb = grEl('div', 'gx-place-bars');
  per.forEach(p => {
    const r = grEl('div', 'gx-place-row' + (p.key === T.key ? ' on' : ''));
    r.appendChild(grEl('b', null, p.key));
    const bar = grEl('span', 'vc-bar'); const f = grEl('span'); f.style.width = (p.n ? p.ok / p.n * 100 : 0) + '%'; bar.appendChild(f); r.appendChild(bar);
    r.appendChild(grEl('span', 'gx-place-n', `${p.ok}/${p.n}` + (p.n && p.ok / p.n >= 0.8 ? ' ✓' : '')));
    tb.appendChild(r);
  });
  rec.appendChild(tb);
  rec.appendChild(grEl('p', 'gx-place-note', `App đã đặt Lộ trình ở cấp ${lvCode}, tab Grammar ở chặng ${T.key} và tab Irregular verbs ở cấp ${lvCode}. Gợi ý thêm: tab Vocabulary học các bài cấp ${lvCode}, tab Shadowing chọn lọc cấp ${lvCode} (hoặc thấp hơn một cấp cho dễ nói).`));
  rec.appendChild(grEl('p', 'gx-place-note', `Câu sai trong bài kiểm tra không vào Mistakes vì có thể bạn chưa học tới. Đây là ước lượng từ ${res.length} câu ngữ pháp, chưa đo kỹ năng nghe và nói. Nếu thấy bài quá dễ hoặc quá khó, cứ đổi chặng ở danh sách cấp độ trên trang Grammar.`));
  const btns = grEl('div', 'ls-sum-btns');
  const first = GX_ALL.find(x => x.track === T.key && gxStatus(x.id) !== 'done');
  // v177: nút gọn 2 dòng — việc cần làm ở trên, tên bài ở dưới
  const go = grEl('button', 'btn-primary gx-place-go');
  go.appendChild(grEl('b', null, first ? '▶ Học bài đầu tiên' : '▶ Về trang Grammar'));
  if (first) go.appendChild(grEl('small', null, first.title));
  go.addEventListener('click', () => { if (first) gxLesson(first.id); else { renderGrammarHome(); grScrollTop(); } });
  const home = grEl('button', 'btn-ghost', 'Về trang Grammar'); home.addEventListener('click', () => { renderGrammarHome(); grScrollTop(); });
  const again = grEl('button', 'btn-ghost', '🔄 Làm lại'); again.addEventListener('click', gxPlacementTest);
  btns.appendChild(go);
  if (typeof window.htaShare === 'function') {
    const sh = grEl('button', 'btn-ghost gx-place-share', '📤 Chia sẻ kết quả');
    sh.addEventListener('click', () => window.htaShare('place', { lv: T.key, per: per.map(p => [p.key, p.ok, p.n]) }));
    btns.appendChild(sh);
  }
  btns.appendChild(home); btns.appendChild(again);
  rec.appendChild(btns);
  box.appendChild(rec);
}

whenPageShown('page-grammar', grRoot, renderGrammarHome);

/* ============================================================
   UI WIRING - Collocations page
============================================================ */
function escapeRe(t) { return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

/* ============================================================
   UI WIRING - Listening / dictation page
   Sentences come from the app's own examples; the device voice reads
   them, the learner types what they hear, and each word is checked.
============================================================ */
const LS_SESSION = 10;
const LS_LEVELS = [['easy', 'Dễ'], ['medium', 'Vừa'], ['hard', 'Khó'], ['mix', 'Trộn']];
const LS_NUM = { zero:'0', one:'1', two:'2', three:'3', four:'4', five:'5', six:'6', seven:'7', eight:'8', nine:'9', ten:'10',
  eleven:'11', twelve:'12', thirteen:'13', fourteen:'14', fifteen:'15', sixteen:'16', seventeen:'17', eighteen:'18', nineteen:'19',
  twenty:'20', thirty:'30', forty:'40', fifty:'50', sixty:'60' };

function lsNorm(text) {
  return text.toLowerCase()
    .replace(/[’‘`]/g, "'").replace(/\./g, '').replace(/-/g, ' ')
    .replace(/[^a-z0-9'\s]/g, ' ')
    .split(/\s+/).map(w => w.replace(/^'+|'+$/g, '')).filter(Boolean)
    .map(w => LS_NUM[w] || w);
}

const LS_POOL = (function buildPool() {
  const seen = new Set(), out = [];
  const add = (en, note) => {
    if (!en || /[→–…"“”\/()]/.test(en)) return;
    const key = en.trim().toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    const n = lsNorm(en).length;
    if (n < 3) return;
    out.push({ en: en.trim(), note: note || '', level: n <= 5 ? 'easy' : n <= 7 ? 'medium' : 'hard' });
  };
  TENSES.forEach(t => t.examples.forEach(ex => add(ex.en, ex.vi)));
  GRAMMAR_TOPICS.forEach(t => t.sections.forEach(sec => (sec.examples || []).forEach(ex => add(ex.en, ex.vi))));
  COLLOCATIONS.forEach(g => g.items.forEach(it => add(it.ex, 'Cụm từ: ' + it.p + ' — ' + it.m)));
  ADJ_ADV_DATA.forEach(g => g.items.forEach(it => {
    add(it.ex_adj, 'Tính từ: ' + it.adj + ' — ' + it.meaning);
    add(it.ex_adv, 'Trạng từ: ' + it.adv + ' — ' + it.meaning);
  }));
  return out;
})();

// longest common subsequence between target tokens and typed tokens
function lsMatch(a, b) {
  const n = a.length, m = b.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--)
    dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const ta = new Set(), tb = new Set();
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) { ta.add(i); tb.add(j); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++;
  }
  return { ta, tb };
}

const lsCard = document.getElementById('ls-card');
const lsLevelsEl = document.getElementById('ls-levels');
let lsLevel = 'easy';
let ls = null;   // session state

function lsShuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function lsStartSession() {
  const pool = lsLevel === 'mix' ? LS_POOL : LS_POOL.filter(x => x.level === lsLevel);
  ls = { items: lsShuffle(pool).slice(0, LS_SESSION), idx: 0, results: [], lesson: null, rate: 0.9 };
  lsLoadItem();
}

function lsLoadItem() {
  const item = ls.items[ls.idx];
  const disp = item.en.split(/\s+/);
  const tokens = [], owner = [];
  disp.forEach((w, di) => lsNorm(w).forEach(t => { tokens.push(t); owner.push(di); }));
  ls.cur = { item, disp, tokens, owner, matched: new Set(), hinted: new Set(), typed: [], typedOk: new Set(), done: false, checked: false };
  lsRender();
}

function lsSpeak(rate) {
  if (ls && ls.cur) lsPlaySentence(ls.cur.item, rate);
}

/* Phát một câu: đoạn video YouTube nếu bài có mốc thời gian, ngược lại dùng giọng máy */
function lsPlaySentence(sn, rate) {
  if (ls && ls.yt && sn.start != null && lsYtPlay(sn.start, sn.end, rate && rate < 0.8 ? 0.75 : 1)) return;
  lsYtStop();
  speak(sn.en, rate || (ls && ls.rate) || 0.9);
}

function lsWordState(di) {
  const c = ls.cur;
  const idxs = c.owner.map((o, i) => o === di ? i : -1).filter(i => i >= 0);
  if (c.done || idxs.every(i => c.matched.has(i))) return 'ok';
  if (idxs.every(i => c.matched.has(i) || c.hinted.has(i))) return 'hint';
  return 'hidden';
}

function lsEl(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}

function lsRender() {
  lsCard.innerHTML = '';
  if (ls.idx >= ls.items.length) return lsRenderSummary();
  const c = ls.cur;

  const head = lsEl('div', 'ls-head');
  head.appendChild(lsEl('span', 'ls-count', `Câu ${ls.idx + 1} / ${ls.items.length}`));
  const dots = lsEl('div', 'ls-dots');
  ls.items.forEach((_, i) => {
    const r = ls.results[i];
    dots.appendChild(lsEl('span', 'ls-dot' + (r ? ' ' + r : '') + (i === ls.idx ? ' now' : '')));
  });
  head.appendChild(dots);
  lsCard.appendChild(head);

  const play = lsEl('div', 'ls-play-row');
  const big = lsEl('button', 'ls-play');
  big.setAttribute('aria-label', 'Nghe câu');
  big.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>';
  big.addEventListener('click', () => lsSpeak());
  const slow = lsEl('button', 'ls-slow', '🐢 Nghe chậm');
  slow.addEventListener('click', () => lsSpeak(0.55));
  play.appendChild(big); play.appendChild(slow);
  lsCard.appendChild(play);

  const mask = lsEl('div', 'ls-mask');
  c.disp.forEach((w, di) => {
    const st = lsWordState(di);
    const span = lsEl('span', 'ls-w ' + st, st === 'hidden' ? '•'.repeat(Math.min(Math.max(lsNorm(w).join('').length, 2), 10)) : w);
    mask.appendChild(span);
  });
  lsCard.appendChild(mask);

  if (!c.done) {
    const ta = lsEl('textarea', 'ls-input');
    ta.id = 'ls-input';
    ta.rows = 2;
    ta.placeholder = 'Gõ những gì bạn nghe được…';
    ['autocomplete', 'autocorrect', 'autocapitalize'].forEach(a => ta.setAttribute(a, 'off'));
    ta.setAttribute('spellcheck', 'false');
    ta.value = c.typedText || '';
    ta.addEventListener('input', () => { c.typedText = ta.value; });
    ta.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); lsCheck(); } });
    lsCard.appendChild(ta);

    const btns = lsEl('div', 'ls-btns');
    const check = lsEl('button', 'btn-primary', 'Kiểm tra');
    check.addEventListener('click', lsCheck);
    const hint = lsEl('button', 'btn-ghost', 'Gợi ý 1 từ');
    hint.addEventListener('click', lsHint);
    const show = lsEl('button', 'btn-ghost', 'Xem đáp án');
    show.addEventListener('click', lsReveal);
    btns.appendChild(check); btns.appendChild(hint); btns.appendChild(show);
    lsCard.appendChild(btns);
  }

  if (c.checked && !c.done) {
    const fb = lsEl('div', 'ls-feedback');
    const left = c.tokens.filter((_, i) => !c.matched.has(i) && !c.hinted.has(i)).length;
    const extra = c.typed.length - c.typedOk.size;
    fb.appendChild(lsEl('div', 'ls-msg', left
      ? `Còn ${left} từ chưa đúng. Nghe lại và sửa nhé.`
      : `Đủ từ rồi, nhưng có ${extra} từ thừa hoặc sai. Xoá bớt rồi kiểm tra lại.`));
    if (c.typed.length) {
      const typed = lsEl('div', 'ls-typed');
      typed.appendChild(lsEl('span', 'ls-typed-label', 'Bạn gõ: '));
      c.typed.forEach((t, i) => typed.appendChild(lsEl('span', c.typedOk.has(i) ? 'ok' : 'bad', t)));
      fb.appendChild(typed);
    }
    lsCard.appendChild(fb);
  }

  if (c.done) {
    const r = ls.results[ls.idx];
    const ans = lsEl('div', 'ls-answer ' + r);
    ans.appendChild(lsEl('div', 'ls-verdict', r === 'ok' ? 'Chính xác!' : r === 'hint' ? 'Đúng rồi, có dùng gợi ý.' : 'Đáp án'));
    const line = lsEl('div', 'ls-sentence');
    line.appendChild(lsEl('span', null, c.item.en));
    const again = lsEl('span', 'play-mini', '▶');
    again.setAttribute('role', 'button');
    again.setAttribute('aria-label', 'Nghe lại câu');
    again.addEventListener('click', () => lsSpeak());
    line.appendChild(again);
    ans.appendChild(line);
    if (c.item.note) ans.appendChild(lsEl('div', 'ls-note', c.item.note));
    const next = lsEl('button', 'btn-primary ls-next', ls.idx + 1 < ls.items.length ? 'Câu tiếp →' : 'Xem kết quả');
    next.addEventListener('click', lsNext);
    ans.appendChild(next);
    lsCard.appendChild(ans);
    setTimeout(() => next.focus(), 0);
  }
}

function lsCheck() {
  const c = ls.cur;
  if (c.done) return;
  const ta = document.getElementById('ls-input');
  c.typedText = ta ? ta.value : (c.typedText || '');
  const typed = lsNorm(c.typedText);
  const { ta: mt, tb } = lsMatch(c.tokens, typed);
  c.matched = mt; c.typed = typed; c.typedOk = tb; c.checked = true;
  const allIn = c.tokens.every((_, i) => mt.has(i) || c.hinted.has(i));
  const noExtra = typed.length === tb.size;
  if (allIn && noExtra) {
    c.done = true;
    ls.results[ls.idx] = c.hinted.size ? 'hint' : 'ok';
  }
  lsRender();
  const again = document.getElementById('ls-input');
  if (again) { again.focus(); again.setSelectionRange(again.value.length, again.value.length); }
}

function lsHint() {
  const c = ls.cur;
  if (c.done) return;
  const i = c.tokens.findIndex((_, k) => !c.matched.has(k) && !c.hinted.has(k));
  if (i < 0) return;
  c.owner.forEach((o, k) => { if (o === c.owner[i]) c.hinted.add(k); });
  if (c.tokens.every((_, k) => c.matched.has(k) || c.hinted.has(k))) {
    c.done = true; ls.results[ls.idx] = 'skip';
  }
  lsRender();
}

function lsReveal() {
  const c = ls.cur;
  c.done = true;
  ls.results[ls.idx] = 'skip';
  lsRender();
}

function lsNext() {
  ls.idx++;
  if (ls.idx < ls.items.length) { lsLoadItem(); lsSpeak(); }
  else lsRender();
}

function lsRenderSummary() {
  const ok = ls.results.filter(r => r === 'ok').length;
  const hint = ls.results.filter(r => r === 'hint').length;
  const skip = ls.results.filter(r => r === 'skip').length;
  const total = ls.items.length, got = ok + hint, ratio = got / total;
  const box = lsEl('div', 'ls-summary');
  box.appendChild(lsEl('div', 'ls-big', `${got} / ${total}`));
  box.appendChild(lsEl('div', 'ls-verdict', ratio >= 0.8 ? 'Tuyệt vời, tai bạn rất tốt!' : ratio >= 0.5 ? 'Khá lắm, luyện thêm chút nữa nhé!' : 'Cứ bình tĩnh, nghe nhiều sẽ quen tai.'));
  const stats = lsEl('div', 'ls-stats');
  [['ok', ok, 'đúng ngay'], ['hint', hint, 'đúng nhờ gợi ý'], ['skip', skip, 'xem đáp án']].forEach(([cls, n, label]) => {
    const st = lsEl('div', 'ls-stat ' + cls);
    st.appendChild(lsEl('span', 'n', String(n)));
    st.appendChild(lsEl('span', 'l', label));
    stats.appendChild(st);
  });
  box.appendChild(stats);

  if (ls.lesson) {
    lsSaveBest(ls.lesson.id, got, total);
    const tr = lsEl('div', 'ls-transcript');
    tr.appendChild(lsEl('div', 'ls-transcript-title', 'Toàn bộ bài nghe'));
    ls.lesson.sentences.forEach(sn => {
      const row = lsEl('div', 'ls-tr-row');
      const txt = lsEl('div', 'ls-tr-text', sn.en);
      if (sn.vi) txt.appendChild(lsEl('span', 'vi', sn.vi));
      const pl = lsEl('span', 'play-mini', '▶');
      pl.setAttribute('role', 'button');
      pl.setAttribute('aria-label', 'Nghe câu');
      pl.addEventListener('click', () => lsPlaySentence(sn));
      row.appendChild(txt); row.appendChild(pl); tr.appendChild(row);
    });
    box.appendChild(tr);
    const btns = lsEl('div', 'ls-sum-btns');
    const retry = lsEl('button', 'btn-ghost', 'Làm lại bài');
    retry.addEventListener('click', () => { lsStartLesson(ls.lesson, ls.levelObj); lsSpeak(); });
    btns.appendChild(retry);
    const lessons = ls.levelObj.lessons, li = lessons.indexOf(ls.lesson);
    const next = lsEl('button', 'btn-primary', li + 1 < lessons.length ? 'Bài tiếp theo →' : 'Về danh sách bài');
    next.addEventListener('click', () => {
      if (li + 1 < lessons.length) { lsStartLesson(lessons[li + 1], ls.levelObj); lsSpeak(); }
      else lsBackToList();
    });
    btns.appendChild(next);
    box.appendChild(btns);
  } else {
    const again = lsEl('button', 'btn-primary ls-next', `Luyện tiếp ${LS_SESSION} câu`);
    again.addEventListener('click', () => { lsStartSession(); lsSpeak(); });
    box.appendChild(again);
  }
  lsCard.appendChild(box);
}

/* ---------- CEFR lessons ---------- */
/* LS_CEFR: xem file dữ liệu */
const LS_BEST_KEY = 'hoc-tieng-anh-listen-best';
function lsLoadBest() { try { return JSON.parse(localStorage.getItem(LS_BEST_KEY) || '{}'); } catch (e) { return {}; } }
function lsSaveBest(id, got, total) {
  const best = lsLoadBest();
  if (!best[id] || got > best[id].got) best[id] = { got, total };
  try { localStorage.setItem(LS_BEST_KEY, JSON.stringify(best)); } catch (e) { /* storage unavailable */ }
}

const lsCefrEl = document.getElementById('ls-cefr');
const lsCustomEl = document.getElementById('ls-custom');
const lsRandomEl = document.getElementById('ls-random');
const lsHeadEl = document.getElementById('ls-lesson-head');
const lsLessonsEl = document.getElementById('ls-lessons');
const lsLevelDescEl = document.getElementById('ls-level-desc');
const lsCefrLevelsEl = document.getElementById('ls-cefr-levels');
let lsMode = 'cefr';
let lsCefrLevel = LS_CEFR[0];

function lsStartLesson(lesson, levelObj) {
  ls = { items: lesson.sentences.map(sn => ({ en: sn.en, note: sn.vi || '', start: sn.start, end: sn.end })), idx: 0, results: [], lesson, levelObj,
         rate: lesson.rate || levelObj.rate, yt: lesson.yt || '' };
  lsCefrEl.hidden = true; lsRandomEl.hidden = true; lsCustomEl.hidden = true; lsCard.hidden = false; lsHeadEl.hidden = false;
  const oldBox = lsHeadEl.querySelector('.ls-yt-box');
  const reuse = !!(lesson.yt && oldBox && lsYt.id === lesson.yt && lsYt.player && !lsYt.failed);
  if (!reuse) lsYtClose();
  [...lsHeadEl.children].forEach(ch => { if (!(reuse && ch === oldBox)) ch.remove(); });
  const back = lsEl('button', 'gr-back', '← Danh sách bài');
  back.addEventListener('click', lsBackToList);
  const meta = lsEl('div', 'ls-lh-meta');
  meta.appendChild(lsEl('span', 'ls-lh-level', levelObj.label + ' · ' + lesson.kind));
  meta.appendChild(lsEl('div', 'ls-lh-title', lesson.title));
  meta.appendChild(lsEl('div', 'ls-lh-vi', lesson.vi));
  const whole = lsEl('button', 'ls-slow', '🎧 Nghe cả bài');
  whole.addEventListener('click', () => {
    const first = lesson.sentences[0], last = lesson.sentences[lesson.sentences.length - 1];
    if (lesson.yt && first.start != null && lsYtPlay(first.start, last.end, 1)) return;
    speak(lesson.sentences.map(sn => sn.en).join(' '), ls.rate);
  });
  const row = lsEl('div', 'ls-lh-row');
  row.appendChild(meta); row.appendChild(whole);
  lsHeadEl.insertBefore(row, lsHeadEl.firstChild);
  lsHeadEl.insertBefore(back, lsHeadEl.firstChild);
  if (lesson.yt && !reuse) lsYtBox(lesson);
  if (lesson.free) { lsStartFreeLesson(lesson, levelObj); whole.remove(); }
  else lsLoadItem();
  grScrollTop();
}

function lsRenderLessonList() {
  lsLevelDescEl.textContent = lsCefrLevel.name + ': ' + lsCefrLevel.desc;
  lsLessonsEl.innerHTML = '';
  const best = lsLoadBest();
  lsCefrLevel.lessons.forEach(lesson => {
    const b = lsEl('button', 'ls-lesson');
    const info = lsEl('span', 'ls-lesson-info');
    info.appendChild(lsEl('span', 'ls-lesson-title', lesson.vi));
    info.appendChild(lsEl('span', 'ls-lesson-en', lesson.title));
    info.appendChild(lsEl('span', 'ls-lesson-meta', `${lesson.kind} · ${lesson.sentences.length} câu`));
    b.appendChild(info);
    const r = best[lesson.id];
    b.appendChild(lsEl('span', 'ls-lesson-badge' + (r ? ' done' : ''), r ? `✓ ${r.got}/${r.total}` : '▶'));
    b.addEventListener('click', () => { lsStartLesson(lesson, lsCefrLevel); lsSpeak(); });
    lsLessonsEl.appendChild(b);
  });
}

function lsBackToList() {
  if (ls && ls.levelObj && ls.levelObj.custom) lsShowCustom(); else lsShowLessonList();
}

function lsSetModeButton(mode) {
  document.querySelectorAll('#ls-modes .ls-mode').forEach(x => x.classList.toggle('active', x.dataset.mode === mode));
}

function lsShowLessonList() {
  lsYtClose();
  bcHide();
  lsMode = 'cefr';
  lsSetModeButton('cefr');
  lsCefrEl.hidden = false; lsHeadEl.hidden = true; lsRandomEl.hidden = true; lsCustomEl.hidden = true; lsCard.hidden = true;
  lsRenderLessonList();
}

function lsShowRandom() {
  lsYtClose();
  bcHide();
  lsMode = 'random';
  lsSetModeButton('random');
  lsCefrEl.hidden = true; lsHeadEl.hidden = true; lsRandomEl.hidden = false; lsCustomEl.hidden = true; lsCard.hidden = false;
  if (!ls || ls.lesson) lsStartSession(); else lsRender();
}

LS_CEFR.forEach(lv => {
  const n = lv.lessons.reduce((k, l) => k + l.sentences.length, 0);
  const chip = lsEl('button', 'colloc-chip' + (lv === lsCefrLevel ? ' active' : ''), `${lv.label} · ${lv.lessons.length} bài`);
  chip.title = `${lv.name}, ${n} câu`;
  chip.addEventListener('click', () => {
    lsCefrLevel = lv;
    lsCefrLevelsEl.querySelectorAll('.colloc-chip').forEach(c => c.classList.toggle('active', c === chip));
    lsRenderLessonList();
  });
  lsCefrLevelsEl.appendChild(chip);
});


/* ---------- Custom lessons (pasted text, saved on this device) ---------- */
const LS_CUSTOM_KEY = 'hoc-tieng-anh-custom-lessons';
function lsLoadCustom() {
  try { const a = JSON.parse(localStorage.getItem(LS_CUSTOM_KEY) || '[]'); return Array.isArray(a) ? a : []; }
  catch (e) { return []; }
}
function lsSaveCustom() {
  try { localStorage.setItem(LS_CUSTOM_KEY, JSON.stringify(lsCustom)); return true; } catch (e) { return false; }
}
let lsCustom = lsLoadCustom();
let lsMakeRate = 0.9;
const lsCustomLevel = () => ({ id: 'custom', label: 'Bài của bạn', name: 'Bài tự tạo', rate: 0.9, custom: true, lessons: lsCustom });

const LS_ABBR = /(?:^|[\s(])(?:mr|mrs|ms|dr|prof|st|jr|sr|vs|etc|e\.g|i\.e|a\.m|p\.m|u\.s|u\.k|no|mt|ave|approx|dept|fig|inc|ltd|co)\.$/i;
function lsSplitSentences(text) {
  const out = [];
  text.replace(/\r/g, '').split(/\n+/).forEach(line => {
    let start = 0;
    const re = /[.!?…]+["'”’)\]]*(?=\s+|$)/g;
    let m;
    while ((m = re.exec(line))) {
      const end = m.index + m[0].length;
      const piece = line.slice(start, end);
      // không tách sau từ viết tắt (Dr., Mr., e.g.) hoặc chữ cái đầu tên (J. K.)
      if (m[0] === '.' && (LS_ABBR.test(piece) || /(?:^|\s)[A-Z]\.$/.test(piece))) continue;
      out.push(piece); start = end;
    }
    out.push(line.slice(start));
  });
  return out
    .map(x => x.trim().replace(/^["“'‘]+(?=\w)/, ''))
    .filter(x => lsNorm(x).length > 0)
    .slice(0, 80);
}

const lsMakeTitle = document.getElementById('ls-make-title');
const lsMakeText = document.getElementById('ls-make-text');
const lsMakeCount = document.getElementById('ls-make-count');
const lsMakeMsg = document.getElementById('ls-make-msg');
const lsCustomList = document.getElementById('ls-custom-list');

function lsUpdateCount() {
  const raw = lsMakeText.value;
  if (lsMakeSrc === 'yt') {
    const segs = lsParseTimed(raw);
    const n = segs ? lsGroupSegments(segs).length : lsSplitSentences(raw).length;
    lsMakeCount.textContent = !n ? 'Không có phụ đề: app tự bật phụ đề YouTube' : segs ? `Sẽ tạo ${n} câu · có mốc thời gian ✓` : `Sẽ tạo ${n} câu · chưa có mốc thời gian`;
  } else {
    const n = lsSplitSentences(raw).length;
    lsMakeCount.textContent = n ? `Sẽ tạo ${n} câu` : 'Chưa có câu nào';
  }
}
lsMakeText.addEventListener('input', () => { lsUpdateCount(); lsMakeMsg.textContent = ''; });

[['Chậm', 0.75], ['Vừa', 0.9], ['Nhanh', 1.0]].forEach(([label, rate]) => {
  const chip = lsEl('button', 'colloc-chip' + (rate === lsMakeRate ? ' active' : ''), label);
  chip.addEventListener('click', () => {
    lsMakeRate = rate;
    document.querySelectorAll('#ls-speed .colloc-chip').forEach(c => c.classList.toggle('active', c === chip));
  });
  document.getElementById('ls-speed').appendChild(chip);
});

document.getElementById('ls-make-btn').addEventListener('click', () => {
  const err = msg => { lsMakeMsg.textContent = msg; lsMakeMsg.className = 'ls-make-msg err'; };
  const raw = lsMakeText.value;
  let lesson;
  if (lsMakeSrc === 'yt') {
    const id = lsYtId(lsYtUrl.value);
    if (!id) return err('Link YouTube chưa đúng. Hãy dán link dạng youtube.com/watch?v=… hoặc youtu.be/…');
    const segs = lsParseTimed(raw);
    const sentences = !/[a-z]/i.test(raw) ? [] : segs ? lsGroupSegments(segs) : lsSplitSentences(raw).map(en => ({ en, vi: '' }));
    lesson = { id: 'y' + Date.now(), title: lsMakeTitle.value.trim() || 'Video YouTube', vi: '', kind: 'YouTube', yt: id, rate: 0.9,
               created: new Date().toLocaleDateString('vi-VN'), sentences };
    if (!sentences.length) { lesson.free = true; lesson.kind = 'YouTube · Luyện theo đoạn'; lesson.vi = 'Phụ đề YouTube tự bật'; }
    if (!lsMakeTitle.value.trim()) lsYtFetchTitle(lesson);
  } else {
    const sentences = lsSplitSentences(raw);
    if (!sentences.length || !/[a-z]/i.test(raw)) return err('Hãy dán ít nhất một câu tiếng Anh vào ô phía trên.');
    const words = sentences[0].split(/\s+/);
    const title = lsMakeTitle.value.trim() || words.slice(0, 6).join(' ') + (words.length > 6 ? '…' : '');
    lesson = { id: 'u' + Date.now(), title, vi: '', kind: 'Tự tạo', rate: lsMakeRate,
               created: new Date().toLocaleDateString('vi-VN'),
               sentences: sentences.map(en => ({ en, vi: '' })) };
  }
  lsCustom.unshift(lesson);
  const saved = lsSaveCustom();
  lsMakeText.value = ''; lsMakeTitle.value = ''; lsYtUrl.value = ''; lsYtShowStatus();
  lsMakeCount.textContent = 'Chưa có câu nào';
  lsMakeMsg.textContent = saved ? '' : 'Trình duyệt không cho lưu lâu dài, bài này chỉ dùng được đến khi bạn đóng trang.';
  lsMakeMsg.className = 'ls-make-msg';
  lsStartLesson(lesson, lsCustomLevel());
  lsSpeak();
});

/* ---------- YouTube lessons: link + transcript → real audio per sentence ---------- */
let lsMakeSrc = 'text';
const lsYtUrl = document.getElementById('ls-yt-url');
const lsYtStatus = document.getElementById('ls-yt-status');
const lsYtFields = document.getElementById('ls-yt-fields');
const lsMakeHelp = document.getElementById('ls-make-help');
const LS_HELP = {
  text: 'Dán bất kỳ đoạn tiếng Anh nào: bài đọc trong sách, tin tức, lời thoại… App tự chia thành từng câu để bạn nghe và chép.',
  yt: 'Chỉ cần dán link video: app tự bật phụ đề tiếng Anh của YouTube và cho bạn luyện nghe theo từng đoạn. Muốn app chấm điểm chép chính tả thì dán thêm phụ đề có mốc thời gian (không bắt buộc).'
};
const LS_PH = { text: 'Dán đoạn tiếng Anh vào đây…', yt: 'Dán phụ đề có mốc thời gian, ví dụ:\n0:00\nHello everyone, welcome back.\n0:04\nToday we are talking about…' };

function lsSetSrc(src) {
  lsMakeSrc = src;
  document.querySelectorAll('#ls-src .ls-src-btn').forEach(x => x.classList.toggle('active', x.dataset.src === src));
  lsYtFields.hidden = src !== 'yt';
  document.getElementById('ls-speed').hidden = src === 'yt';
  lsMakeHelp.textContent = LS_HELP[src];
  lsMakeText.placeholder = LS_PH[src];
  lsMakeText.rows = src === 'yt' ? 7 : 5;
  lsMakeMsg.textContent = '';
  lsUpdateCount();
}
document.querySelectorAll('#ls-src .ls-src-btn').forEach(btn => btn.addEventListener('click', () => lsSetSrc(btn.dataset.src)));

function lsYtId(str) {
  str = (str || '').trim();
  if (/^[\w-]{11}$/.test(str)) return str;
  const m = str.match(/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/|v\/)|youtu\.be\/)([\w-]{11})/i);
  return m ? m[1] : '';
}

function lsYtShowStatus() {
  const v = lsYtUrl.value.trim(), id = lsYtId(v);
  lsYtStatus.innerHTML = ''; lsYtStatus.className = 'ls-yt-status';
  if (!v) return;
  if (!id) { lsYtStatus.classList.add('err'); lsYtStatus.textContent = 'Link chưa đúng định dạng YouTube.'; return; }
  const img = lsEl('img'); img.src = `https://i.ytimg.com/vi/${id}/mqdefault.jpg`; img.alt = ''; img.onerror = () => img.remove();
  lsYtStatus.classList.add('ok');
  lsYtStatus.appendChild(img);
  lsYtStatus.appendChild(lsEl('span', null, 'Đã nhận video ✓ Giờ dán phụ đề vào ô bên dưới.'));
}
lsYtUrl.addEventListener('input', lsYtShowStatus);

document.getElementById('ls-yt-file').addEventListener('change', e => {
  const f = e.target.files && e.target.files[0];
  if (!f) return;
  const rd = new FileReader();
  rd.onload = () => {
    lsMakeText.value = String(rd.result || '');
    if (!lsMakeTitle.value.trim()) lsMakeTitle.value = f.name.replace(/\.(srt|vtt|txt)$/i, '').replace(/[._]+/g, ' ').trim();
    lsUpdateCount(); lsMakeMsg.textContent = '';
  };
  rd.readAsText(f);
  e.target.value = '';
});

/* ---- transcript parsing ---- */
function lsTime(str) {
  const p = str.replace(',', '.').split(':').map(Number);
  return p.some(isNaN) ? NaN : p.reduce((t, x) => t * 60 + x, 0);
}
function lsCleanCaption(t) {
  return t.replace(/<[^>]+>/g, '').replace(/\{[^}]*\}/g, '')
    .replace(/\[[^\]]*\]|\((?:music|applause|laughter|laughs|cheering|âm nhạc|vỗ tay|tiếng cười)[^)]*\)|♪+|(?:^|\s)>>(?=\s|$)/gi, ' ')
    .replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ').trim();
}
function lsParseTimed(text) {
  const lines = text.replace(/\r/g, '').split('\n');
  const segs = [];
  if (/-->/.test(text)) {                         // SRT / VTT
    let cur = null;
    lines.forEach(line => {
      const m = line.match(/^\s*([\d:.,]+)\s*-->\s*([\d:.,]+)/);
      if (m) { cur = { start: lsTime(m[1]), end: lsTime(m[2]), lines: [] }; segs.push(cur); return; }
      if (!line.trim()) { cur = null; return; }
      if (cur) cur.lines.push(line);
    });
  } else {                                         // "0:05 text" or "0:05\ntext" (YouTube transcript copy)
    const re = /^\s*(\d{1,2}(?::\d{2}){1,2})(?:[.,]\d+)?\s*(.*)$/;
    let cur = null, hits = 0;
    lines.forEach(line => {
      if (/^\s*\d+\s+(?:giây|phút|giờ|seconds?|minutes?|hours?)\b/i.test(line)) return;
      const m = line.match(re);
      if (m) { hits++; cur = { start: lsTime(m[1]), end: null, lines: [m[2]] }; segs.push(cur); return; }
      if (cur) cur.lines.push(line);
    });
    if (hits < 2) return null;
  }
  const out = [];
  let prevLast = '';
  segs.forEach(sg => {
    const orig = sg.lines.map(lsCleanCaption).filter(Boolean);
    const keep = orig.slice();
    while (keep.length && keep[0] === prevLast) keep.shift();   // YouTube auto-captions repeat the previous line
    if (orig.length) prevLast = orig[orig.length - 1];
    const t = keep.join(' ').trim();
    if (t && !isNaN(sg.start)) out.push({ start: sg.start, end: (sg.end == null || isNaN(sg.end)) ? null : sg.end, text: t });
  });
  out.sort((x, y) => x.start - y.start);
  return out.length ? out : null;
}
function lsGroupSegments(segs, max) {
  segs.forEach((sg, i) => {
    const next = segs[i + 1];
    if (sg.end == null || sg.end <= sg.start) sg.end = next ? next.start : sg.start + Math.max(2, sg.text.split(/\s+/).length * 0.45);
    if (next && sg.end > next.start) sg.end = Math.max(sg.start + 0.3, next.start);
  });
  const punct = segs.some(sg => /[.!?]/.test(sg.text));
  const groups = [];
  let g = null;
  segs.forEach((sg, i) => {
    if (!g) g = { start: sg.start, end: sg.end, words: [] };
    g.words.push(...sg.text.split(/\s+/));
    g.end = Math.max(g.end, sg.end);
    const n = g.words.length, last = g.words[n - 1];
    const close = (punct ? (/[.!?…]["'”’)]*$/.test(last) && n >= 3) : n >= 6) || n >= 22 || i === segs.length - 1;
    if (close) { groups.push({ en: g.words.join(' '), vi: '', start: +g.start.toFixed(2), end: +g.end.toFixed(2) }); g = null; }
  });
  return groups.filter(x => lsNorm(x.en).length).slice(0, max || 80);
}

function lsYtFetchTitle(lesson) {
  if (!window.fetch) return;
  const ctl = window.AbortController ? new AbortController() : null;
  const tm = setTimeout(() => ctl && ctl.abort(), 6000);
  fetch('https://noembed.com/embed?url=' + encodeURIComponent('https://www.youtube.com/watch?v=' + lesson.yt), ctl ? { signal: ctl.signal } : {})
    .then(r => r.ok ? r.json() : null)
    .then(j => {
      clearTimeout(tm);
      if (!j || !j.title || lesson.title !== 'Video YouTube') return;
      lesson.title = j.title;
      lsSaveCustom();
      if (ls && ls.lesson === lesson) { const t = lsHeadEl.querySelector('.ls-lh-title'); if (t) t.textContent = j.title; }
      if (!lsCustomEl.hidden) lsRenderCustomList();
    })
    .catch(() => clearTimeout(tm));
}

/* ---- player ---- */
const lsYt = { player: null, ready: false, failed: false, id: '', timer: 0, pending: null, api: null };
function lsYtApi() {
  if (window.YT && window.YT.Player) return Promise.resolve();
  if (!lsYt.api) lsYt.api = new Promise((res, rej) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => { if (typeof prev === 'function') { try { prev(); } catch (e) {} } res(); };
    const sc = document.createElement('script');
    sc.src = 'https://www.youtube.com/iframe_api'; sc.async = true;
    sc.onerror = () => { lsYt.api = null; rej(new Error('yt-api')); };
    document.head.appendChild(sc);
    setTimeout(() => rej(new Error('yt-timeout')), 15000);
  });
  return lsYt.api;
}
/* v129: tạo trình phát YouTube muộn — chờ khung video sắp vào màn hình (hoặc tối đa 1,2 giây) rồi đợi lúc trình duyệt rảnh,
   để lúc mở bài, chuyển bước, chạm nút không bị khựng vì iframe nặng. Trong lúc chờ hiện ảnh xem trước. */
function ytHold(holder, id) {
  try { holder.classList.add('yt-wait'); holder.style.backgroundImage = `url("https://i.ytimg.com/vi/${id}/hqdefault.jpg")`; } catch (e) {}
}
function ytWhenNear(el, maxWait) {
  return new Promise(res => {
    let done = false, io = null, tm = 0;
    const go = () => {
      if (done) return; done = true;
      clearTimeout(tm); if (io) io.disconnect();
      const idle = window.requestIdleCallback || (f => setTimeout(f, 60));
      idle(() => res(), { timeout: 700 });
    };
    if (!el || !el.isConnected || !('IntersectionObserver' in window)) return go();
    el._ytGo = go;                            // cho phép bấm phát sớm hơn
    io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) go(); }, { rootMargin: '300px' });
    io.observe(el);
    tm = setTimeout(go, maxWait || 1200);
  });
}
function ytNow(el) { try { if (el && el._ytGo) el._ytGo(); } catch (e) {} }
function lsYtStop() {
  clearInterval(lsYt.timer); lsYt.timer = 0; lsYt.pending = null;
  try { if (lsYt.player && lsYt.ready) lsYt.player.pauseVideo(); } catch (e) {}
}
function lsYtClose() {
  lsYtStop();
  try { if (lsYt.player) lsYt.player.destroy(); } catch (e) {}
  lsYt.player = null; lsYt.ready = false; lsYt.failed = false; lsYt.id = '';
  const box = lsHeadEl.querySelector('.ls-yt-box');
  if (box) box.remove();
}
function lsYtFail(frame, code) {
  lsYt.failed = true; lsYt.pending = null;
  const msg = (code === 101 || code === 150) ? 'Chủ video không cho phát nhúng trong ứng dụng khác. Hãy thử video khác nhé.'
    : code === 100 ? 'Video không tồn tại, đã bị xoá hoặc để riêng tư.'
    : (code === 152 || code === 153) ? 'YouTube chỉ phát khi app được mở qua địa chỉ web (https), ví dụ GitHub Pages.'
    : 'Không tải được trình phát YouTube. Hãy kiểm tra mạng, hoặc mở app qua GitHub Pages.';
  const old = frame.querySelector('.ls-yt-err'); if (old) old.remove();
  frame.appendChild(lsEl('div', 'ls-yt-err', msg + ' Tạm thời app sẽ đọc bằng giọng máy.'));
}
function lsYtBox(lesson) {
  const timed = lesson.sentences.some(sn => sn.start != null);
  lsYt.capsSet = false;
  const box = lsEl('div', 'ls-yt-box');
  const frame = lsEl('div', 'ls-yt-frame');
  const holder = lsEl('div', 'ls-yt-holder');
  frame.appendChild(holder);
  frame.appendChild(lsEl('div', 'ls-yt-cover', 'Phụ đề đang được che'));
  box.appendChild(frame);
  const tools = lsEl('div', 'ls-yt-tools');
  tools.appendChild(lsEl('span', 'ls-yt-note', lesson.free
    ? 'Phụ đề tiếng Anh của YouTube được bật sẵn (nếu video có). Nếu video không chạy, hãy chạm vào video một lần.'
    : timed
    ? 'Bấm ▶ để nghe đúng đoạn video của câu. Nếu video không chạy, hãy chạm vào video một lần rồi bấm lại.'
    : 'Phụ đề không có mốc thời gian nên app đọc câu bằng giọng máy. Video để bạn xem cả bài.'));
  const tg = lsEl('button', 'ls-slow ls-cover-btn', lesson.free ? '🙈 Che phụ đề' : '👁 Hiện phụ đề');
  if (lesson.free) frame.classList.add('uncovered');
  tg.addEventListener('click', () => lsYtSetCover(frame.classList.contains('uncovered')));
  tools.appendChild(tg);
  box.appendChild(tools);
  lsHeadEl.appendChild(box);

  const id = lesson.yt;
  lsYt.id = id; lsYt.ready = false; lsYt.failed = false;
  ytHold(holder, id); lsYt.holder = holder;
  lsYtApi().then(() => ytWhenNear(holder)).then(() => {
    if (lsYt.id !== id || !document.body.contains(holder)) return;
    const vars = lesson.free
      ? { playsinline: 1, rel: 0, modestbranding: 1, cc_load_policy: 1, cc_lang_pref: 'en', hl: 'en', iv_load_policy: 3, fs: 0 }
      : { playsinline: 1, rel: 0, modestbranding: 1, cc_load_policy: 0, iv_load_policy: 3, fs: 0, disablekb: 1 };
    if (/^https?:$/.test(location.protocol)) vars.origin = location.origin;
    lsYt.player = new YT.Player(holder, {
      videoId: id, width: '100%', height: '100%', playerVars: vars,
      events: {
        onReady: () => {
          lsYt.ready = true;
          if (lesson.free) { lsYtCaptionsOn(); lsFreeStatus(); }
          else { try { lsYt.player.unloadModule('captions'); } catch (e) {} }
          if (lsYt.pending) { const p = lsYt.pending; lsYt.pending = null; lsYtPlay(p[0], p[1], p[2]); }
        },
        onError: e => lsYtFail(frame, e && e.data),
        onApiChange: () => { if (lesson.free && !lsYt.capsSet) lsYt.capsSet = lsYtCaptionsOn(); }
      }
    });
  }).catch(() => { if (lsYt.id === id) lsYtFail(frame, 'api'); });
}
/* Phát từ start đến end (giây). Trả về false nếu không dùng được YouTube để nơi gọi đọc bằng giọng máy. */
function lsYtPlay(start, end, rate) {
  if (lsYt.failed || !lsYt.id) return false;
  try { window.speechSynthesis && speechSynthesis.cancel(); } catch (e) {}
  if (!lsYt.player || !lsYt.ready) { ytNow(lsYt.holder); lsYt.pending = [start, end, rate]; return true; }
  const pl = lsYt.player;
  clearInterval(lsYt.timer);
  try {
    pl.setPlaybackRate(rate || 1);
    pl.seekTo(Math.max(0, start - 0.15), true);
    pl.playVideo();
  } catch (e) { return false; }
  const stopAt = end + 0.25;
  let seen = false;
  lsYt.timer = setInterval(() => {
    let t = 0;
    try { t = pl.getCurrentTime(); } catch (e) { return; }
    if (!seen) { if (t >= start - 1 && t < stopAt) seen = true; return; }   // chờ lệnh tua có hiệu lực
    if (t >= stopAt) { clearInterval(lsYt.timer); lsYt.timer = 0; try { pl.pauseVideo(); } catch (e) {} }
  }, 80);
  return true;
}
document.querySelectorAll('nav.tabbar button').forEach(b => b.addEventListener('click', () => { if (b.dataset.page !== 'page-listen') lsYtStop(); }));

/* ---------- YouTube lesson WITHOUT transcript: YouTube subtitles on + practice section by section ---------- */
const LS_SEG_KEY = 'hoc-tieng-anh-yt-seg';
let lsSegLen = 8;
try { lsSegLen = parseInt(localStorage.getItem(LS_SEG_KEY), 10) || 8; } catch (e) {}
const lsFmt = t => { t = Math.max(0, Math.floor(t)); return Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0'); };
function lsYtCaptionsOn() {
  const pl = lsYt.player;
  if (!pl) return false;
  try { pl.loadModule('captions'); } catch (e) {}
  let list = [];
  try {
    list = pl.getOption('captions', 'tracklist') || [];
    const en = list.find(t => /^en/i.test(t.languageCode) && t.kind !== 'asr') || list.find(t => /^en/i.test(t.languageCode)) || list[0];
    pl.setOption('captions', 'track', en ? { languageCode: en.languageCode, kind: en.kind } : { languageCode: 'en' });
  } catch (e) {}
  return list.length > 0;   // true once YouTube has delivered the real track list
}
function lsYtSetCover(covered) {
  const frame = lsHeadEl.querySelector('.ls-yt-frame');
  if (frame) frame.classList.toggle('uncovered', !covered);
  document.querySelectorAll('.ls-cover-btn').forEach(b => { b.textContent = covered ? '👁 Hiện phụ đề' : '🙈 Che phụ đề'; });
}
function lsStartFreeLesson(lesson, levelObj) {
  ls = { items: [], idx: 0, results: [], lesson, levelObj, rate: 1, yt: lesson.yt, free: true, seg: lesson.seg || 0, slow: false };
  lsCard.innerHTML = '';
  const c = lsCard;
  c.appendChild(lsEl('div', 'ls-free-title', 'Luyện nghe theo từng đoạn'));
  c.appendChild(lsEl('p', 'ls-free-tip', 'Cách luyện: che phụ đề → nghe một đoạn → gõ lại những gì nghe được → bấm "Hiện phụ đề" và nghe lại để tự kiểm tra.'));
  const lenRow = lsEl('div', 'ls-free-row');
  lenRow.appendChild(lsEl('span', 'ls-free-label', 'Mỗi đoạn dài'));
  const chips = lsEl('div', 'ls-speed');
  [5, 8, 12].forEach(n => {
    const ch = lsEl('button', 'colloc-chip' + (n === lsSegLen ? ' active' : ''), n + ' giây');
    ch.addEventListener('click', () => {
      const t0 = ls.seg * lsSegLen;
      lsSegLen = n;
      try { localStorage.setItem(LS_SEG_KEY, String(n)); } catch (e) {}
      ls.seg = Math.floor(t0 / n);
      chips.querySelectorAll('.colloc-chip').forEach(x => x.classList.toggle('active', x === ch));
      lsFreeStatus();
    });
    chips.appendChild(ch);
  });
  lenRow.appendChild(chips);
  c.appendChild(lenRow);
  c.appendChild(lsEl('div', 'ls-free-status', ''));
  const nav = lsEl('div', 'ls-free-nav');
  const prev = lsEl('button', 'btn-ghost', '⏮ Trước');
  const again = lsEl('button', 'btn-primary', '🔁 Nghe đoạn');
  const next = lsEl('button', 'btn-ghost', 'Tiếp ⏭');
  prev.addEventListener('click', () => { ls.seg = Math.max(0, ls.seg - 1); lsFreePlay(); });
  again.addEventListener('click', lsFreePlay);
  next.addEventListener('click', () => { ls.seg = Math.min(lsFreeMaxSeg(), ls.seg + 1); lsFreePlay(); });
  nav.appendChild(prev); nav.appendChild(again); nav.appendChild(next);
  c.appendChild(nav);
  const extra = lsEl('div', 'pron-actions ls-free-extra');
  const slow = lsEl('button', null, '🐢 Chậm: tắt');
  slow.addEventListener('click', () => { ls.slow = !ls.slow; slow.textContent = ls.slow ? '🐢 Chậm: bật' : '🐢 Chậm: tắt'; slow.classList.toggle('playing', ls.slow); });
  const cover = lsEl('button', 'ls-cover-btn', '🙈 Che phụ đề');
  cover.addEventListener('click', () => { const f = lsHeadEl.querySelector('.ls-yt-frame'); lsYtSetCover(!!(f && f.classList.contains('uncovered'))); });
  const all = lsEl('button', null, '▶ Xem liên tục');
  all.addEventListener('click', () => { try { clearInterval(lsYt.timer); lsYt.player.setPlaybackRate(ls.slow ? 0.75 : 1); lsYt.player.playVideo(); } catch (e) {} });
  extra.appendChild(slow); extra.appendChild(cover); extra.appendChild(all);
  c.appendChild(extra);
  const notes = lsEl('textarea', 'ls-input ls-free-notes');
  notes.rows = 4;
  notes.placeholder = 'Gõ những gì bạn nghe được… (tự lưu lại)';
  notes.setAttribute('spellcheck', 'false');
  notes.value = lesson.notes || '';
  notes.addEventListener('input', () => { lesson.notes = notes.value; lsSaveCustom(); });
  c.appendChild(notes);
  lsFreeStatus();
}
function lsFreeMaxSeg() {
  let d = 0;
  try { d = lsYt.player && lsYt.ready ? lsYt.player.getDuration() : 0; } catch (e) {}
  return d > 0 ? Math.max(0, Math.ceil(d / lsSegLen) - 1) : 9999;
}
function lsFreeStatus() {
  const el = lsCard.querySelector('.ls-free-status');
  if (!el || !ls || !ls.free) return;
  const s = ls.seg * lsSegLen;
  let d = 0;
  try { d = lsYt.player && lsYt.ready ? lsYt.player.getDuration() : 0; } catch (e) {}
  el.textContent = `Đoạn ${ls.seg + 1}${d ? ' / ' + (lsFreeMaxSeg() + 1) : ''} · ${lsFmt(s)} – ${lsFmt(d ? Math.min(d, s + lsSegLen) : s + lsSegLen)}`;
}
function lsFreePlay() {
  if (!ls || !ls.free) return;
  ls.lesson.seg = ls.seg; lsSaveCustom();
  lsFreeStatus();
  const s = ls.seg * lsSegLen;
  lsYtPlay(s, s + lsSegLen, ls.slow ? 0.75 : 1);
}

function lsRenderCustomList() {
  lsCustomList.innerHTML = '';
  if (!lsCustom.length) {
    lsCustomList.appendChild(lsEl('div', 'ls-empty', 'Chưa có bài nào. Dán một đoạn tiếng Anh ở trên để tạo bài đầu tiên.'));
    return;
  }
  const best = lsLoadBest();
  lsCustom.forEach(lesson => {
    const wrap = lsEl('div', 'ls-lesson-wrap');
    const b = lsEl('button', 'ls-lesson');
    if (lesson.yt) {
      const th = lsEl('img', 'ls-thumb');
      th.src = `https://i.ytimg.com/vi/${lesson.yt}/mqdefault.jpg`; th.alt = ''; th.loading = 'lazy';
      th.onerror = () => th.remove();
      b.appendChild(th);
    }
    const info = lsEl('span', 'ls-lesson-info');
    info.appendChild(lsEl('span', 'ls-lesson-title', lesson.title));
    info.appendChild(lsEl('span', 'ls-lesson-meta', `${lesson.yt ? 'YouTube · ' : ''}${lesson.free ? 'luyện theo đoạn' : lesson.sentences.length + ' câu'}${lesson.created ? ' · ' + lesson.created : ''}`));
    b.appendChild(info);
    const r = best[lesson.id];
    b.appendChild(lsEl('span', 'ls-lesson-badge' + (r ? ' done' : ''), r ? `✓ ${r.got}/${r.total}` : '▶'));
    b.addEventListener('click', () => { lsStartLesson(lesson, lsCustomLevel()); lsSpeak(); });
    const del = lsEl('button', 'ls-del', '✕');
    del.setAttribute('aria-label', 'Xoá bài ' + lesson.title);
    let timer = null;
    del.addEventListener('click', () => {
      if (!del.classList.contains('confirm')) {
        del.classList.add('confirm'); del.textContent = 'Xoá?';
        timer = setTimeout(() => { del.classList.remove('confirm'); del.textContent = '✕'; }, 3000);
        return;
      }
      clearTimeout(timer);
      lsCustom = lsCustom.filter(x => x.id !== lesson.id);
      lsSaveCustom();
      lsRenderCustomList();
    });
    wrap.appendChild(b); wrap.appendChild(del);
    lsCustomList.appendChild(wrap);
  });
}

function lsShowCustom() {
  lsYtClose();
  bcHide();
  lsMode = 'custom';
  lsSetModeButton('custom');
  lsCefrEl.hidden = true; lsHeadEl.hidden = true; lsRandomEl.hidden = true; lsCard.hidden = true; lsCustomEl.hidden = false;
  lsRenderCustomList();
}

document.querySelectorAll('#ls-modes .ls-mode').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#ls-modes .ls-mode').forEach(x => x.classList.toggle('active', x === btn));
    if (btn.dataset.mode === 'cefr') lsShowLessonList(); else if (btn.dataset.mode === 'bc') bcShow(); else if (btn.dataset.mode === 'custom') lsShowCustom(); else lsShowRandom();
  });
});

LS_LEVELS.forEach(([id, label]) => {
  const count = id === 'mix' ? LS_POOL.length : LS_POOL.filter(x => x.level === id).length;
  const chip = lsEl('button', 'colloc-chip' + (id === lsLevel ? ' active' : ''), `${label} · ${count} câu`);
  chip.addEventListener('click', () => {
    lsLevel = id;
    lsLevelsEl.querySelectorAll('.colloc-chip').forEach(c => c.classList.toggle('active', c === chip));
    lsStartSession();
    lsCard.hidden = false;
  });
  lsLevelsEl.appendChild(chip);
});
lsShowLessonList();

/* Từ vựng theo chủ đề — 38 chủ đề, 10.000 từ, mỗi từ chỉ thuộc một chủ đề. Mỗi từ: [từ, loại từ, IPA, nghĩa, ví dụ, cấp độ 1–5 = A1–C1]. groups = nhóm nghĩa */
/* VB: xem file dữ liệu */
/* Từ bổ sung theo chủ đề: [tên nhóm VI, tên nhóm EN, [ [từ, loại, phiên âm, nghĩa, ví dụ, nghĩa ví dụ, cấp độ], … ] ] */
/* VB_MORE: xem file dữ liệu */
/* Nghĩa tiếng Việt của câu ví dụ, tra theo từ (10.000 từ trong app không trùng nhau) */
/* VB_EXVI: xem file dữ liệu */
/* Động từ bổ sung (v80–v81) — [từ, loại, IPA, nghĩa, ví dụ, cấp độ, nghĩa ví dụ] */
/* VB_VERBS: xem file dữ liệu */
/* v233: dữ liệu từ vựng (data-vocab.js, ~400 KB) không còn chặn lúc mở app: file được nạp ngay sau khi trang hiện ra,
   rồi vcBoot() dựng danh sách từ. Trước lúc đó VOCAB_TOPICS / VC_ALL là mảng rỗng. */
const VOCAB_TOPICS = [];
const VC_EXTRA = {};   // 'chủ đề|từ' → { col: [[en, vi]], sit: [en, vi] }
let vcReady = false;
function vcBuildTopics() {
Object.keys(VB_VERBS).forEach(tid => {
  const t = VB.find(x => x.id === tid);
  if (t) t.groups.push({ vi: 'Động từ bổ sung', en: 'More verbs', words: VB_VERBS[tid] });
});
Object.keys(VB_MORE).forEach(tid => {
  const t = VB.find(x => x.id === tid);
  if (!t) return;
  VB_MORE[tid].forEach(g => t.groups.push({ vi: g[0], en: g[1], words: g[2].map(r => [r[0], r[1], r[2], r[3], r[4], r[5], r[6]]) }));
});
/* Chủ đề từ chức năng: số lượng, đại từ, từ hỏi, giới từ, liên từ, trạng từ, số đếm (v82) */
/* VB_BASICS: xem file dữ liệu */
VB.unshift(VB_BASICS);
/* v109: Từ vựng chuyên ngành 3D — mỗi từ kèm cụm từ thường dùng và một tình huống thực tế trong công việc */
/* VB_3D_RAW: xem file dữ liệu */
(() => {
  const have = new Set();
  VB.forEach(t => t.groups.forEach(g => g.words.forEach(r => have.add(String(r[0]).toLowerCase()))));
  VB.push({ id: 'cg3d', cat: 'pro', icon: '🧊', vi: 'Chuyên ngành 3D', en: '3D Art & CG', groups: VB_3D_RAW.map(([en, vi, ws]) => ({ vi, en, words: ws.map(r => {
    VC_EXTRA['cg3d|' + r[0]] = { col: r[7], sit: r[8] };
    return [r[0], r[1], r[2], r[3], r[4], r[5], r[6], have.has(r[0].toLowerCase()) ? '3d' : undefined];
  }) })) });
})();
VOCAB_TOPICS.push(...VB);
}

/* ============================================================
   VOCABULARY BY TOPIC — topics → lessons → list / flashcards / quiz
============================================================ */
const VC_CATS = [['life', 'Cuộc sống hằng ngày'], ['people', 'Con người'], ['work', 'Học tập & công việc'],
                 ['world', 'Thế giới quanh ta'], ['modern', 'Xã hội hiện đại'], ['fun', 'Giải trí & văn hoá'], ['pro', 'Chuyên ngành']];
// v109: cách xếp thứ hai — theo mục tiêu giao tiếp
const VC_GOALS = [['g-me', '👋 Giới thiệu bản thân & người khác', ['basics', 'family', 'appearance', 'personality', 'relationships', 'jobs']],
  ['g-day', '⏰ Sinh hoạt hằng ngày', ['routine', 'home', 'time', 'colors', 'clothes', 'weather', 'body', 'gettake']],
  ['g-eat', '🛒 Ăn uống & mua sắm', ['food', 'fruitveg', 'cooking', 'restaurant', 'shopping', 'finance']],
  ['g-go', '🧳 Đi lại & du lịch', ['city', 'transport', 'travel', 'holidays', 'nature', 'animals']],
  ['g-work', '💼 Học tập & công việc', ['school', 'office', 'technology', 'science', 'cg3d']],
  ['g-health', '🩺 Sức khoẻ & cảm xúc', ['health', 'feelings', 'sports']],
  ['g-fun', '🎮 Giải trí & sở thích', ['hobbies', 'entertainment', 'art', 'socialmedia']],
  ['g-news', '📰 Bàn về tin tức & xã hội', ['media', 'society', 'law']]];
const VC_POS = { n: 'danh từ', v: 'động từ', adj: 'tính từ', adv: 'trạng từ', phr: 'cụm từ',
                 prep: 'giới từ', conj: 'liên từ', pron: 'đại từ', det: 'từ hạn định', num: 'số từ', interj: 'thán từ' };
const VC_LEVELS = [{ n: 1, code: 'A1', vi: 'Mới bắt đầu' }, { n: 2, code: 'A2', vi: 'Sơ cấp' }, { n: 3, code: 'B1', vi: 'Trung cấp' },
                   { n: 4, code: 'B2', vi: 'Trung cao cấp' }, { n: 5, code: 'C1', vi: 'Nâng cao' }];
const vcLvCode = n => (VC_LEVELS[n - 1] || VC_LEVELS[2]).code;
const VC_ALL = [];
function vcBuildAll() {
VOCAB_TOPICS.forEach(t => {
  t.items = [];
  t.groups.forEach((g, gi) => {
    g.topic = t; g.index = gi;
    g.items = g.words.map(([w, pos, ipa, vi, ex, lv, exvi, sense]) => ({ w, pos, ipa, vi, ex, exvi: exvi || (typeof VB_EXVI !== 'undefined' ? VB_EXVI[w] : ''), lv: lv || 3, tid: t.id, gi, sense }));
    t.items.push(...g.items);
  });
  // Each topic is split by CEFR level, then each level into lessons of ~20 words (kept in theme order)
  t.levels = [];
  VC_LEVELS.forEach(L => {
    const items = t.items.filter(it => it.lv === L.n);
    if (!items.length) return;
    // v109: mỗi bài khoảng 10–15 từ, cắt theo nhóm nghĩa để từ trong một bài liên quan với nhau
    const lessons = [], runs = [], parts = [];
    items.forEach(it => { const r = runs[runs.length - 1]; if (r && r.gi === it.gi) r.items.push(it); else runs.push({ gi: it.gi, items: [it] }); });
    runs.forEach(r => {
      const m = Math.max(1, Math.ceil(r.items.length / 15));
      for (let k = 0; k < m; k++) {
        const part = r.items.slice(Math.round(k * r.items.length / m), Math.round((k + 1) * r.items.length / m));
        const last = parts[parts.length - 1];
        if (part.length < 6 && last && last.length + part.length <= 16) last.push(...part); else parts.push(part);
      }
    });
    if (parts.length > 1 && parts[parts.length - 1].length < 4) { const x = parts.pop(); parts[parts.length - 1].push(...x); }
    for (let k = 0; k < parts.length; k++) {
      const part = parts[k];
      const cnt = {};
      part.forEach(it => { cnt[it.gi] = (cnt[it.gi] || 0) + 1; });
      const gi = +Object.keys(cnt).sort((x, y) => cnt[y] - cnt[x])[0];
      lessons.push({ topic: t, level: L, index: k, vi: t.groups[gi].vi, en: part.slice(0, 4).map(it => it.w).join(', ') + (part.length > 4 ? '…' : ''), items: part });
    }
    const seen = {};
    lessons.forEach(ls => { ls.siblings = lessons; seen[ls.vi] = (seen[ls.vi] || 0) + 1; });
    const nth = {};
    lessons.forEach(ls => { if (seen[ls.vi] > 1) { nth[ls.vi] = (nth[ls.vi] || 0) + 1; ls.vi += ` (${nth[ls.vi]})`; } });
    t.levels.push({ level: L, items, lessons });
  });
  t.lessonCount = t.levels.reduce((k, x) => k + x.lessons.length, 0);
  VC_ALL.push(...t.items);
});
}
// v137: bản dịch câu ví dụ (VB_EXVI) nằm ở file riêng, chỉ nạp khi mở tab Vocabulary / Ôn tập → điền vào từ khi nạp xong
function vcFillExvi() {
  if (typeof VB_EXVI === 'undefined') return false;
  VC_ALL.forEach(it => { if (!it.exvi && VB_EXVI[it.w]) it.exvi = VB_EXVI[it.w]; });
  if (typeof VB_USE !== 'undefined') VC_ALL.forEach(it => { if (!it.use) { const u = VB_USE[it.w + '|' + it.pos]; if (u) it.use = u; } });   // v241
  return true;
}
function vcSubText() { try {
  const sub = document.getElementById('vc-sub');
  if (sub) sub.textContent = VC_ALL.length.toLocaleString('vi-VN') + ' từ không trùng nhau · ' + VOCAB_TOPICS.length +
    ' chủ đề, mỗi chủ đề chia theo 5 cấp độ A1 → C1, mỗi cấp gồm các bài khoảng 12 từ. Chạm ▶ để nghe, ✓ để đánh dấu từ đã thuộc';
} catch (e) {} }
const VC_KEY = 'hoc-tieng-anh-vocab-learned';
let vcLearned = new Set();
try { const a = JSON.parse(localStorage.getItem(VC_KEY) || '[]'); if (Array.isArray(a)) vcLearned = new Set(a); } catch (e) {}
const vcK = it => {   // v171: nhớ sẵn khoá trên từng từ (thuộc tính ẩn, không lọt vào JSON hay bản sao), đỡ tạo chuỗi lặp lại hàng chục nghìn lần
  let k = it._vk;
  if (k === undefined) { k = it.tid + '|' + it.w + (it.sense ? '|' + it.sense : ''); try { Object.defineProperty(it, '_vk', { value: k }); } catch (e) {} }
  return k;
};  // sense: nghĩa thứ hai (vd. động từ của một danh từ cùng chủ đề)
// Each word now lives in exactly one topic: move "learned" marks of words that changed topic, drop marks of removed words
function vcMigrate() {
  if (!VC_ALL.length) return;
  const home = new Map(VC_ALL.filter(it => !it.sense).map(it => [it.w.toLowerCase(), vcK(it)]));
  const valid = new Set(VC_ALL.map(vcK));
  let changed = false; const next = new Set();
  vcLearned.forEach(k => {
    if (valid.has(k)) { next.add(k); return; }
    const nk = home.get(k.slice(k.indexOf('|') + 1).toLowerCase());
    if (nk) next.add(nk);
    changed = true;
  });
  if (changed) { vcLearned = next; try { localStorage.setItem(VC_KEY, JSON.stringify([...vcLearned])); } catch (e) {} }
}
const vcIs = it => vcLearned.has(vcK(it));
// v109: từ yêu thích
const VFAV_KEY = 'hoc-tieng-anh-vocab-fav';
let vcFav = new Set();
try { const a = JSON.parse(localStorage.getItem(VFAV_KEY) || '[]'); if (Array.isArray(a)) vcFav = new Set(a); } catch (e) {}
function vcFavToggle(it) { const k = vcK(it); if (vcFav.has(k)) vcFav.delete(k); else vcFav.add(k); try { localStorage.setItem(VFAV_KEY, JSON.stringify([...vcFav])); } catch (e) {} return vcFav.has(k); }
function vcSet(it, on) {
  if (on) vcLearned.add(vcK(it)); else vcLearned.delete(vcK(it));
  try { localStorage.setItem(VC_KEY, JSON.stringify([...vcLearned])); } catch (e) {}
  if (on) srsTouch(it);   // v108: ✓ chỉ đưa từ vào trạng thái “đang học”, không phải “thành thạo”
}
/* ---------- v132: thuật toán ôn tập giãn cách FSRS (mã nguồn mở, Anki cũng dùng), tham số mặc định FSRS-4.5 ----------
   Mỗi thẻ có S = độ bền trí nhớ (số ngày còn nhớ được 90%) và D = độ khó riêng (1–10).
   Từ khó với bạn quay lại sớm hơn, từ dễ giãn dần tới tối đa 1 năm. Mức chấm: 1 Quên · 2 Khó · 3 Nhớ · 4 Dễ */
const SRW = [0.4872, 1.4003, 3.7145, 13.8206, 5.1618, 1.2298, 0.8975, 0.031, 1.6474, 0.1367, 1.0461, 2.1072, 0.0793, 0.3246, 1.587, 0.2272, 2.8755];
const SR_FACTOR = 19 / 81, SR_DECAY = -0.5, SR_MAX = 365;
function srClampD(d) { return Math.min(10, Math.max(1, d)); }
function srInitD(g) { return srClampD(SRW[4] - (g - 3) * SRW[5]); }
function srRecall(t, S) { return Math.pow(1 + SR_FACTOR * t / Math.max(S, 0.1), SR_DECAY); }   // khả năng còn nhớ sau t ngày
function srIvl(S) { return Math.min(SR_MAX, Math.max(1, Math.round(S))); }                      // giữ tỉ lệ nhớ 90% → khoảng cách = S
// trạng thái mới của một thẻ sau khi chấm g (không thay đổi thẻ gốc). rec: { S, D, lr } · today: số ngày
function srPlan(rec, g, today) {
  rec = rec || {};
  let S = rec.S, D = rec.D;
  if (!S || !D) {                                   // lần đầu (hoặc thẻ cũ chưa có S, D)
    S = SRW[g - 1]; D = srInitD(g);
    return { S, D, ivl: g === 1 ? 1 : srIvl(S) };
  }
  const t = Math.max(0, today - (rec.lr != null ? rec.lr : today));
  const R = srRecall(t, S);
  const D2 = srClampD(SRW[7] * srInitD(4) + (1 - SRW[7]) * (D - SRW[6] * (g - 3)));
  if (t === 0 && g > 1) return { S, D: D2, ivl: srIvl(S) };          // ôn lại trong cùng ngày: không tính là nhớ lâu hơn
  let S2;
  if (g === 1) S2 = Math.min(S, SRW[11] * Math.pow(D2, -SRW[12]) * (Math.pow(S + 1, SRW[13]) - 1) * Math.exp(SRW[14] * (1 - R)));
  else S2 = S * (Math.exp(SRW[8]) * (11 - D2) * Math.pow(S, -SRW[9]) * (Math.exp(SRW[10] * (1 - R)) - 1) * (g === 2 ? SRW[15] : 1) * (g === 4 ? SRW[16] : 1) + 1);
  S2 = Math.max(0.1, Math.min(S2, 3650));
  return { S: S2, D: D2, ivl: g === 1 ? 1 : srIvl(S2) };
}
// ghi kết quả vào thẻ: trả về số ngày tới lần ôn sau
function srApply(rec, g, today) {
  const p = srPlan(rec, g, today);
  rec.S = Math.round(p.S * 100) / 100; rec.D = Math.round(p.D * 100) / 100; rec.lr = today;
  return p.ivl;
}
// thẻ cũ (theo bậc cố định) → ước lượng S từ khoảng cách đang có, để không mất tiến độ
function srSeed(rec, gap, hard, lr) {
  if (rec.S && rec.D) return;
  rec.S = Math.max(1, gap || 1); rec.D = hard ? 6.5 : 5;
  if (rec.lr == null && lr) rec.lr = lr;
}
const srFmt = n => n <= 1 ? '1 ngày' : n < 30 ? n + ' ngày' : n < 365 ? Math.round(n / 30) + ' tháng' : '1 năm';
/* ---------- v108: theo dõi mọi từ đã bắt đầu học + ôn tập giãn cách 1 → 2 → 4 → 7 → 15 → 30 → 60 ngày ---------- */
const VR_KEY = 'hoc-tieng-anh-vocab-review';            // dữ liệu ôn tập bản cũ (v104–v107), chỉ đọc để chuyển sang
const SRS_KEY = 'hoc-tieng-anh-vocab-srs', VLOG_KEY = 'hoc-tieng-anh-vocab-log', VGOAL_KEY = 'hoc-tieng-anh-vocab-goal';
const VR_GAP = [1, 2, 4, 7, 15, 30, 60];
const vrToday = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 86400000);
// key → { s: mức nhớ 0–7, due: ngày đến hạn, n: số lần đúng, w: số lần sai, cd: số ngày khác nhau trả lời đúng,
//         lc: ngày đúng gần nhất, lw: lần gần nhất trả lời sai, f: ngày bắt đầu học, t: ngày ôn gần nhất }
let srs = {};
try { const o = JSON.parse(localStorage.getItem(SRS_KEY) || 'null'); if (o && typeof o === 'object') srs = o; } catch (e) {}
function srsSave() { try { localStorage.setItem(SRS_KEY, JSON.stringify(srs)); } catch (e) {} }
(() => {   // chuyển dữ liệu cũ một lần: lịch ôn cũ + các từ đã bấm ✓
  try { if (localStorage.getItem(SRS_KEY)) return; } catch (e) { return; }
  const td = vrToday();
  let old = {};
  try { old = JSON.parse(localStorage.getItem(VR_KEY) || '{}') || {}; } catch (e) {}
  Object.keys(old).forEach(k => { const [st, d] = old[k] || [0, 0]; const s = Math.min(+st || 0, 7); srs[k] = { s, due: (d || 0) + VR_GAP[Math.min(s, 6)], n: s, w: 0, cd: s, lc: d || 0, lw: 0, f: d || td, t: d || 0 }; });
  vcLearned.forEach(k => { if (!srs[k]) srs[k] = { s: 0, due: 0, n: 0, w: 0, cd: 0, lc: 0, lw: 0, f: td, t: 0 }; });
  srsSave();
})();
// nhật ký học theo ngày: day → [số câu trả lời, số câu đúng, số từ mới]
let vlog = {};
try { const o = JSON.parse(localStorage.getItem(VLOG_KEY) || '{}'); if (o && typeof o === 'object') vlog = o; } catch (e) {}
function vlogAdd(a, c, nw) {
  const d = vrToday(), r = vlog[d] || (vlog[d] = [0, 0, 0]);
  r[0] += a; r[1] += c; r[2] += nw;
  Object.keys(vlog).forEach(k => { if (+k < d - 400) delete vlog[k]; });
  try { localStorage.setItem(VLOG_KEY, JSON.stringify(vlog)); } catch (e) {}
}
let vgoal = 10;
try { const g = +localStorage.getItem(VGOAL_KEY); if ([5, 10, 15, 20, 30].includes(g)) vgoal = g; } catch (e) {}
const srsRec = it => srs[vcK(it)];
function srsTouch(it) {
  const k = vcK(it);
  if (srs[k]) return srs[k];
  const d = vrToday();
  srs[k] = { s: 0, due: d + 1, n: 0, w: 0, cd: 0, lc: 0, lw: 0, f: d, t: 0 };
  vlogAdd(0, 0, 1); srsSave();
  return srs[k];
}
// g: 0 = quên · 1 = nhớ nhưng còn chậm · 2 = nhớ chính xác · 3 = nhớ dễ dàng
function srsGrade(it, g) {
  try { if (window.actLog) actLog('v'); } catch (e) {}
  const r = srsTouch(it), d = vrToday();
  const again = r.t === d;                     // đã ôn hôm nay rồi: chỉ ghi nhận, không tăng mức thêm
  // v132: hạn ôn tính theo FSRS (độ khó riêng của từng từ); r.s vẫn là bậc để xét trạng thái
  if (r.n || r.w) srSeed(r, r.t ? Math.max(1, r.due - r.t) : VR_GAP[Math.min(Math.max(r.s - 1, 0), 6)], r.w > r.n, r.t || undefined);
  const counts = g === 0 || !again || r.due <= d;
  const ivl = counts ? srApply(r, g + 1, d) : 0;
  if (g === 0) { r.s = 0; r.due = d + 1; r.w++; r.lw = 1; }
  else {
    r.n++; r.lw = 0;
    if (r.lc !== d) { r.cd++; r.lc = d; }
    if (counts) {
      if (g !== 1) r.s = Math.min(r.s + (g === 3 ? 2 : 1), 7);
      r.due = d + ivl;
    }
  }
  r.t = d; srsSave(); vlogAdd(1, g > 0 ? 1 : 0, 0);
}
// 4 trạng thái: không bao giờ thành thạo chỉ vì bấm ✓
function vwStatus(it) {
  const r = srs[vcK(it)];
  if (!r) return 'new';
  if (r.lw || (r.w >= 2 && r.w >= r.n)) return 'weak';
  if (r.s >= 4 && r.cd >= 3) return 'master';
  return 'learning';
}
const VW_ST = { new: ['Chưa học', 'Chưa tiếp xúc với từ'], learning: ['Đang học', 'Đã xem nhưng chưa nhớ chắc'], weak: ['Cần ôn', 'Hay quên hoặc vừa trả lời sai'], master: ['Thành thạo', 'Nhớ tốt qua nhiều ngày kiểm tra'] };
const vrDue = it => { const r = srs[vcK(it)]; return !!r && r.due <= vrToday(); };
const vrLeft = it => { const r = srs[vcK(it)]; return r ? r.due - vrToday() : 9999; };
const vrTracked = () => VC_ALL.filter(it => srs[vcK(it)]);
const vrWeakScore = it => { const r = srs[vcK(it)]; return r ? r.w * 2 - r.n + (r.lw ? 3 : 0) - r.s : -99; };
function vwStreak() {
  const d = vrToday(), act = x => vlog[x] && (vlog[x][0] || vlog[x][2]);
  let k = act(d) ? d : d - 1, n = 0;
  while (act(k)) { n++; k--; }
  return n;
}
function vwAccuracy(days) {
  const d = vrToday(); let a = 0, c = 0;
  for (let k = d - days + 1; k <= d; k++) if (vlog[k]) { a += vlog[k][0]; c += vlog[k][1]; }
  return a ? Math.round(c / a * 100) : null;
}

/* ---------- speaking score: say each word (or its example) and get a score ---------- */
const VSP_KEY = 'hoc-tieng-anh-vocab-speak';
let vspBest = {};
try { const o = JSON.parse(localStorage.getItem(VSP_KEY) || '{}'); if (o && typeof o === 'object') vspBest = o; } catch (e) {}
let vspWhat = 'w';
try { if (localStorage.getItem(VSP_KEY + '-what') === 'ex') vspWhat = 'ex'; } catch (e) {}
const vspK = (it, what) => vcK(it) + (what === 'ex' ? '|ex' : '');
const vspGet = (it, what) => { const v = vspBest[vspK(it, what || 'w')]; return typeof v === 'number' ? v : null; };
// v109: lưu cả lịch sử luyện, không chỉ điểm cao nhất
let vspHist = {};
try { const o = JSON.parse(localStorage.getItem(VSP_KEY + '-hist') || '{}'); if (o && typeof o === 'object') vspHist = o; } catch (e) {}
const vspHistOf = (it, what) => vspHist[vspK(it, what || 'w')] || [];
function vspSave(it, what, pct) {
  const k = vspK(it, what);
  const h = vspHist[k] || (vspHist[k] = []);
  h.push([Math.floor(Date.now() / 86400000), pct]); if (h.length > 20) h.splice(0, h.length - 20);
  try { localStorage.setItem(VSP_KEY + '-hist', JSON.stringify(vspHist)); } catch (e) {}
  if (typeof vspBest[k] === 'number' && vspBest[k] >= pct) return;
  vspBest[k] = pct;
  try { localStorage.setItem(VSP_KEY, JSON.stringify(vspBest)); } catch (e) {}
}
const vspCls = p => p >= 90 ? 'ok' : p >= 60 ? 'mid' : 'bad';
const vspText = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\.\.\.|…/g, ' ').replace(/&/g, ' and ');
const vspTarget = (it, what) => what === 'ex' ? it.ex : it.w.replace(/\s*\.\.\.\??$/, m => m.includes('?') ? '?' : '');

/* chấm một câu trả lời: từ đơn chấm thêm theo mức giống nhau của chữ cái (ship ↔ sheep vẫn được một phần điểm) */
function vspScore(target, heard) {
  const base = prScore(vspText(target), vspText(heard));
  if (base.score >= 1 || base.a.length > 3) return base;
  const a = base.a.join(''), b = lsNorm(vspText(heard)).join('');
  if (!a || !b) return base;
  const n = a.length, m = b.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--)
    dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const sim = dp[0][0] / Math.max(n, m);
  const s = Math.min(0.89, sim * 0.95);
  return s > base.score ? { score: s, hit: base.hit, a: base.a } : base;
}


/* v168: nghe câu tự do (không có câu mẫu) — dùng cho Đặt câu hỏi và Nói chuyện với AI.
   - nghe liên tục: ngừng lấy hơi giữa câu không bị cắt
   - tự chốt sau ~1,6 giây im lặng (hoặc khi bấm dừng)
   - báo khi micro đã thật sự mở (onStart) và đưa chữ nghe được ra ngay (onText) */
function srFree(o) {
  const SRc = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SRc) { o.onDone && o.onDone('', 'unsupported'); return null; }
  let rec; try { rec = new SRc(); } catch (e) { o.onDone && o.onDone('', 'start'); return null; }
  rec.lang = o.lang || 'en-US'; rec.interimResults = true; rec.continuous = true; rec.maxAlternatives = 1;
  let fin = '', tmp = '', done = false, quiet = 0, idle = 0, started = false, err = '';
  const SIL = o.silence || 1600;
  const text = () => (fin + ' ' + tmp).replace(/\s+/g, ' ').trim();
  const vis = () => { if (document.visibilityState === 'hidden' && !done) { try { rec.stop(); } catch (e) {} setTimeout(end, 300); } };   // v178: rời app → tắt micro
  document.addEventListener('visibilitychange', vis);
  const end = () => {
    if (done) return; done = true; clearTimeout(quiet); clearTimeout(idle);
    document.removeEventListener('visibilitychange', vis);
    try { rec.onresult = rec.onerror = rec.onend = null; rec.abort(); } catch (e) {}
    try { if (typeof ttsMicEnded === 'function') ttsMicEnded(); } catch (e) {}
    o.onDone && o.onDone(text(), text() ? '' : err);
  };
  const ready = () => { if (started || done) return; started = true; try { o.onStart && o.onStart(); } catch (e) {} };
  rec.onstart = () => setTimeout(ready, 120); rec.onaudiostart = ready;
  rec.onresult = ev => {
    ready(); tmp = '';
    for (let i = ev.resultIndex; i < ev.results.length; i++) { const r = ev.results[i]; if (r.isFinal) fin += ' ' + r[0].transcript; else tmp += r[0].transcript; }
    try { o.onText && o.onText(text()); } catch (e) {}
    clearTimeout(idle); clearTimeout(quiet); quiet = setTimeout(end, SIL);
  };
  rec.onerror = ev => { err = ev && ev.error || 'error'; if (err === 'no-speech' && !text()) err = 'no-speech'; end(); };
  rec.onend = () => end();
  // mở micro mà chưa nói gì trong 8 giây → dừng
  idle = setTimeout(() => { if (!text()) { err = 'no-speech'; end(); } }, 8000);
  micOpening();   // v222: luôn mở micro ngay trong cú bấm (iPhone ngắt nếu mở trễ)
  try { rec.start(); } catch (e) { err = 'start'; end(); return null; }
  return { stop: () => { if (!done) { clearTimeout(quiet); try { rec.stop(); } catch (e) {} setTimeout(end, 700); } }, abort: () => { err = ''; fin = tmp = ''; end(); } };
}

/* v141: nghe nhanh hơn. Trước đây app chờ trình duyệt tự xác định bạn đã nói xong (thường 1–3 giây im lặng, iPhone có khi lâu hơn).
   Giờ app nhận chữ ngay trong lúc bạn nói (interim): nói đúng hết câu mẫu → chấm ngay; ngừng nói ~0.8–1.2 giây → tự chốt. */
const VSP_RELOAD_TIP = '(Trên iPhone đôi khi micro chỉ nhận ở lần nói đầu. Bấm "↻ Mở lại micro" bên dưới: app tải lại đúng chỗ này và bạn nói tiếp được.)';
let VSP_AC = null;
let VSP_END = 0, VSP_R = null, VSP_R_BUSY = false, VSP_WAKE_STOP = () => {};
/* v222: nhật ký kỹ thuật của lần mở micro gần nhất — hiện trong "Chi tiết kỹ thuật" dưới lời báo lỗi, để chụp màn hình gửi người làm app */
const VSP_DIAG = { n: 0, log: [] };
window.vspDiag = () => VSP_DIAG.log.join(' · ');   // v221: lúc phiên nhận giọng trước kết thúc — iPhone cần ~1 giây để trả micro trước khi mở phiên mới
function vspListen(target, onDone, onPartial, opts) {
  opts = opts || {};
  if (prRecog) { try { prRecog.abort(); } catch (e) {} prRecog = null; }
  let wasTalking = false;
  try { wasTalking = speechSynthesis.speaking || speechSynthesis.pending; clearTimeout(TTS.timer); TTS.keep = null; speechSynthesis.cancel(); } catch (e) {}
  /* v223: iPhone (iOS 18) — mỗi lần bấm tạo bộ nhận giọng MỚI thì từ lần 2 micro mở nhưng thu toàn im lặng (nhật ký: audio mở, không có chữ,
     ~10 s sau bị ngắt). Dùng lại MỘT bộ nhận giọng cho mọi lần nói khi bộ cũ đã kết thúc hẳn. */
  const reuse = false;   // v226: dùng lại bộ cũ không giúp được (nhật ký v223–v225) → mỗi lần một bộ mới như trước
  const r = reuse ? VSP_R : new PR_SR();
  if (TTS_IOS) VSP_R = r;
  VSP_R_BUSY = true;
  r.lang = (typeof pronVoice !== 'undefined' && pronVoice && /^en/i.test(pronVoice.lang)) ? pronVoice.lang.replace('_', '-') : 'en-US';
  const nW = lsNorm(vspText(target)).length, QUIET = nW <= 2 ? 800 : nW <= 6 ? 1000 : 1200;
  // v167: câu từ 4 từ trở lên nghe liên tục — không bị cắt khi người học ngừng lấy hơi giữa câu
  const LONG = nW >= 4;
  const TGT = new Set(lsNorm(vspText(target)));
  /* v226: thử tắt chế độ nghe liên tục trên iPhone. Nghi vấn: sau một phiên "continuous" iOS 18 không đưa tiếng vào các phiên sau
     (câu ≥ 4 từ đều dùng continuous). Đổi lại: trên iPhone câu dài có thể bị chốt sớm khi bạn ngừng lấy hơi. */
  const CONT = LONG && !TTS_IOS;
  r.interimResults = true; r.continuous = CONT; r.maxAlternatives = LONG ? 3 : 5;
  let done = false, lastAlts = null, quiet = 0, cap = 0, lastTxt = '', t0 = 0;
  prRecog = r;
  const T0 = Date.now(), D = m => { try { VSP_DIAG.log.push(m + '@' + (Date.now() - T0)); if (VSP_DIAG.log.length > 40) VSP_DIAG.log.shift(); } catch (e) {} };
  if (!opts._retried) {
    VSP_DIAG.n++;
    let sess = '-'; try { sess = navigator.audioSession ? navigator.audioSession.type : 'none'; } catch (e) {}
    let ua = ''; try { ua = (navigator.userAgent.match(/OS (\d+[_\d]*)/) || [])[1] || ''; } catch (e) {}
    VSP_DIAG.log = ['lần ' + VSP_DIAG.n, (matchMedia('(display-mode: standalone)').matches || navigator.standalone) ? 'app MH chính' : 'trình duyệt',
      'session=' + sess, 'tts=' + (speechSynthesis.speaking ? 'nói' : '') + (speechSynthesis.pending ? 'chờ' : '') + (wasTalking ? '/đã-huỷ' : ''),
      'act=' + (navigator.userActivation ? navigator.userActivation.isActive : '?'), reuse ? 'dùng lại bộ cũ' : 'bộ mới', 'liên tục=' + (CONT ? 'có' : 'không'), 'cách lần trước ' + (VSP_END ? Math.round((T0 - VSP_END) / 100) / 10 + 's' : '-')];
  } else D('mở lại');
  /* v220: trên iPhone, micro hay bị hệ thống ngắt ngay sau khi mở (lỗi "aborted" hoặc kết thúc tức thì) khi vừa có âm thanh/video
     phát trước đó. Trước đây app im lặng quay về nút "Nhấn để nói" → bấm mãi không nói được. Nay tự mở lại micro một lần. */
  const retry = () => {
    if (done || opts._retried) return false;
    done = true; clearTimeout(quiet); clearTimeout(cap);
    try { r.onresult = r.onerror = r.onend = null; r.abort(); } catch (e) {}
    if (prRecog === r) prRecog = null;
    setTimeout(() => { if (r === VSP_R) VSP_R_BUSY = false; vspListen(target, onDone, onPartial, Object.assign({}, opts, { _retried: true })); }, TTS_IOS ? 600 : 300);
    return true;
  };
  const scoreAlts = alts => {
    let best = null;
    alts.forEach(t => { if (!t || !t.trim()) return; const sc = vspScore(target, t); if (!best || sc.score > best.score) best = { ...sc, heard: t.trim() }; });
    return best;
  };
  const finish = (best, err) => {
    if (done) return; done = true;
    clearTimeout(quiet); clearTimeout(cap);
    if (prRecog === r) prRecog = null;
    /* v221: trên iPhone, "abort()" một phiên nhận giọng đang chạy làm hệ thống chưa trả micro kịp → lần nói sau bị ngắt ngay
       ("nói được lần đầu, lần 2 không được"). Có kết quả thì kết thúc nhẹ nhàng bằng stop(), chỉ abort khi huỷ. */
    try { r.onresult = r.onerror = r.onsoundstart = r.onspeechstart = r.onaudiostart = r.onstart = null; r.onend = () => { VSP_END = Date.now(); if (r === VSP_R) VSP_R_BUSY = false; }; if (best) r.stop(); else r.abort(); } catch (e) {}
    setTimeout(() => { if (r === VSP_R) VSP_R_BUSY = false; }, 1500);   // phòng khi máy không báo "end"
    try { VSP_WAKE_STOP(); } catch (e) {}

    VSP_END = Date.now();
    ttsMicEnded();
    try { if (best && window.actLog) actLog('s'); } catch (e) {}
    onDone(best, err);
  };
  let nRes = 0;
  r.onsoundstart = () => D('có tiếng'); r.onspeechstart = () => D('có giọng');
  r.onresult = ev => {
    if (!nRes++) D('chữ đầu');
    // ghép các đoạn kết quả; với đoạn đầu lấy thêm các phương án khác máy đoán
    let head = '', fin = true;
    // v170: với từng đoạn máy nghe được, chọn phương án có nhiều từ trùng với câu mẫu nhất (nhận đúng hơn khi phát âm chưa chuẩn)
    for (let i = 0; i < ev.results.length; i++) {
      const res = ev.results[i]; let pick = res[0].transcript;
      if (res.length > 1 && ev.results.length > 1) {
        let bestHit = -1;
        for (let k = 0; k < res.length; k++) { const ws = lsNorm(res[k].transcript); const hit = ws.filter(w => TGT.has(w)).length - ws.length * 0.01; if (hit > bestHit) { bestHit = hit; pick = res[k].transcript; } }
      }
      head += pick + ' '; if (!res.isFinal) fin = false;
    }
    const alts = [head];
    if (ev.results.length === 1) for (let k = 1; k < ev.results[0].length; k++) alts.push(ev.results[0][k].transcript);
    lastAlts = alts;
    const best = scoreAlts(alts);
    const txt = head.trim();
    if (onPartial && txt && txt !== lastTxt) { try { onPartial(txt); } catch (e) {} }
    lastTxt = txt;
    if (best && best.score >= 0.999) return finish(best, null);   // đã nói đúng hết → không cần chờ im lặng
    if (fin && !LONG) return finish(best, null);
    clearTimeout(quiet);
    // đã nghe được gần hết câu (≥ 85%) thì chỉ chờ im lặng ngắn; câu dài đã chốt đoạn thì chờ vừa phải
    // câu chưa nghe đủ thì cho người học ngừng lấy hơi tới ~1,6 giây rồi nói tiếp
    const wait = best && best.score >= 0.85 ? 450 : LONG ? 1600 : fin ? 700 : QUIET;
    quiet = setTimeout(() => finish(scoreAlts(lastAlts), null), wait);
  };
  r.onerror = ev => {
    D('lỗi:' + ev.error);
    if (!lastAlts && (ev.error === 'aborted' || ev.error === 'audio-capture') && Date.now() - t0 < 4000 && retry()) return;
    if (lastAlts && ev.error !== 'not-allowed' && ev.error !== 'service-not-allowed') return finish(scoreAlts(lastAlts), null);
    finish(null, ev.error === 'not-allowed' || ev.error === 'service-not-allowed'
      ? 'Bạn cần cho phép micro và nhận dạng giọng nói cho trình duyệt (iPhone: Cài đặt → Safari → Micrô).'
      : ev.error === 'no-speech' ? 'Không nghe thấy gì. Hãy nói to và gần micro hơn nhé.'
      : ev.error === 'network' ? 'Nhận dạng giọng nói cần có mạng. Kiểm tra kết nối rồi thử lại.'
      : ev.error === 'audio-capture' ? 'Không tìm thấy micro, hoặc micro đang được app khác dùng. Hãy đóng app đó rồi thử lại.'
      : ev.error === 'aborted' ? 'Micro bị ngắt (aborted). Bấm nói lại nhé.' : 'Không nhận dạng được (' + ev.error + '). Hãy thử lại.');
  };
  r.onend = () => {
    D('end');
    if (lastAlts) return finish(scoreAlts(lastAlts), null);
    if (t0 && Date.now() - t0 < 1500 && retry()) return;     // micro vừa mở đã tắt → mở lại một lần
    finish(null, 'Không nghe rõ. Bấm nói lại và đọc to hơn nhé.');
  };
  // báo cho giao diện biết micro đã thật sự mở (trước đó nói sẽ bị mất chữ đầu)
  let started = false;
  const ready = () => { if (started || done) return; started = true; try { opts.onStart && opts.onStart(); } catch (e) {} };
  r.onaudiostart = () => { D('audio'); ready(); }; r.onstart = () => { D('start'); setTimeout(ready, 120); };
  cap = setTimeout(() => { if (lastAlts) finish(scoreAlts(lastAlts), null); else { try { r.stop(); } catch (e) {} } }, nW <= 2 ? 7000 : 15000);
  // giọng mẫu đang đọc → chờ nó dừng hẳn rồi mới mở micro (tránh tiếng "bụp" và micro thu lại chính giọng máy)
  /* v222: iPhone chỉ cho mở nhận giọng NGAY TRONG lúc người dùng bấm. Mọi khoảng chờ (đợi giọng mẫu tắt, đợi đổi chế độ âm thanh,
     đợi phiên trước nhả micro) đều làm lệnh mở rơi ra ngoài cú bấm → hệ thống ngắt ngay ("aborted"). Lần bấm đầu thường không phải chờ
     nên chạy được, các lần sau rơi vào nhánh chờ nên hỏng. Giờ luôn mở micro ngay, đồng bộ với cú bấm. */
  micOpening();
  /* v227: giả thuyết từ máy thật (iOS 27): micro chỉ nhận tiếng khi máy vừa phát âm thanh (lần nói đầu thường ngay sau câu mẫu).
     Ngay trong cú bấm, phát một tiếng rất nhỏ ~0,12 giây để iPhone kích hoạt âm thanh rồi mới mở micro. */
  if (TTS_IOS) {
    try {
      const C = window.AudioContext || window.webkitAudioContext;
      if (C) {
        VSP_AC = VSP_AC || new C();
        if (VSP_AC.state === 'suspended') VSP_AC.resume();
        // v228: phát đoạn IM LẶNG (toàn số 0) thay cho tiếng 440 Hz — vẫn kích hoạt âm thanh của iPhone nhưng không nghe thấy gì
        const buf = VSP_AC.createBuffer(1, Math.round(VSP_AC.sampleRate * 0.12), VSP_AC.sampleRate);
        const src = VSP_AC.createBufferSource(); src.buffer = buf; src.connect(VSP_AC.destination); src.start();
        D('kích hoạt âm thanh');
      }
    } catch (e) { D('kích hoạt lỗi'); }
  }
  // v225: gỡ phần ép "play-and-record" + mở thêm luồng micro của v224 (làm micro kẹt cả ở lần nói đầu)
  t0 = Date.now();
  D('gọi start');
  try { r.start(); } catch (e) {
    D('start lỗi:' + (e && e.name)); if (!retry()) finish(null, 'Không mở được micro. Hãy thử lại.'); }
}

function vcStartSpeak(only) {
  if (prRecog) { try { prRecog.abort(); } catch (e) {} prRecog = null; }
  let items = only || vc.unit.items;
  if (!only && items.length > 40) items = lsShuffle(items).slice(0, 20);
  // từ chưa đạt lên trước, từ đã đạt ≥ 90% xuống cuối
  const weak = items.filter(it => (vspGet(it, vspWhat) ?? -1) < 90), good = items.filter(it => (vspGet(it, vspWhat) ?? -1) >= 90);
  vc.sp = { what: vspWhat, qs: [...weak, ...good].map(it => ({ it, best: null, last: null, tries: 0, err: '', prev: vspGet(it, vspWhat) })), idx: 0, busy: false };
  vcRenderSpeak();
}

function vcRenderSpeak() {
  const body = document.getElementById('vc-body');
  if (!body) return;
  body.innerHTML = '';
  const S = vc.sp;
  if (S.idx >= S.qs.length) return vcSpeakSummary();
  const q = S.qs[S.idx], it = q.it, target = vspTarget(it, S.what);

  // chọn đọc từ hay đọc câu
  const bar = lsEl('div', 'vc-list-bar vsp-bar');
  const chips = lsEl('div', 'colloc-chips');
  [['w', '🔤 Đọc từ'], ['ex', '💬 Đọc câu ví dụ']].forEach(([w, label]) => {
    const c = lsEl('button', 'colloc-chip' + (S.what === w ? ' active' : ''), label);
    c.addEventListener('click', () => {
      if (S.what === w) return;
      vspWhat = w; try { localStorage.setItem(VSP_KEY + '-what', w); } catch (e) {}
      vcStartSpeak();
    });
    chips.appendChild(c);
  });
  bar.appendChild(chips);
  body.appendChild(bar);

  const top = lsEl('div', 'vc-card-top');
  top.appendChild(lsEl('span', 'ls-count', `${S.what === 'ex' ? 'Câu' : 'Từ'} ${S.idx + 1} / ${S.qs.length}`));
  const dots = lsEl('div', 'ls-dots');
  S.qs.forEach((x, i) => dots.appendChild(lsEl('span', 'ls-dot' + (x.best ? ' ' + ({ ok: 'ok', mid: 'hint', bad: 'skip' })[vspCls(x.best.pct)] : '') + (i === S.idx ? ' now' : ''))));
  top.appendChild(dots);
  body.appendChild(top);

  const card = lsEl('div', 'tense-card wr-card vsp-card');
  card.appendChild(lsEl('div', 'vc-q-label', S.what === 'ex' ? 'Đọc to câu này' : 'Đọc to từ này'));
  if (S.what === 'ex') {
    const ex = lsEl('div', 'vsp-sent'); ex.innerHTML = vcExMain(it); card.appendChild(ex);
    if (it.exvi) card.appendChild(lsEl('div', 'vsp-sent-vi', it.exvi));
    card.appendChild(lsEl('div', 'vsp-sub', `${it.w} · ${it.vi}`));
  } else {
    card.appendChild(lsEl('div', 'vc-f-big', it.w));
    card.appendChild(lsEl('div', 'vc-f-ipa', it.ipa));
    const pos = VC_POS[it.pos] || it.pos;
    card.appendChild(lsEl('div', 'vsp-sub', (pos ? pos + ' · ' : '') + it.vi));
  }
  const prev = q.prev;
  const hist = vspHistOf(it, S.what);
  if (prev != null) card.appendChild(lsEl('div', 'vsp-prev ' + vspCls(prev), `Cao nhất: ${prev}%` + (hist.length ? ` · gần nhất: ${hist[hist.length - 1][1]}% · đã luyện ${hist.length} lần` : '')));
  card.appendChild(lsEl('div', 'vsp-note', 'Điểm ước lượng: app so chữ mà máy nhận dạng giọng nói nghe được với từ mẫu, không phân tích từng âm như công cụ đánh giá phát âm chuyên dụng. Hãy nghe mẫu, ghi âm giọng mình rồi so sánh.'));
  const audio = lsEl('div', 'wr-audio');
  const a1 = lsEl('button', 'ls-slow', '🔊 Nghe mẫu'); a1.addEventListener('click', () => speak(target, S.what === 'ex' ? 0.85 : 0.8));
  const a2 = lsEl('button', 'ls-slow', '🐢 Chậm'); a2.addEventListener('click', () => speak(target, 0.5));
  audio.appendChild(a1); audio.appendChild(a2);
  card.appendChild(audio);
  body.appendChild(card);

  const out = lsEl('div', 'pr-speak-out vsp-out');
  const recOut = lsEl('div', 'pr-rec-out');

  if (!PR_SR) {
    out.className = 'pr-speak-out warn';
    out.textContent = 'Trình duyệt này chưa hỗ trợ nhận dạng giọng nói nên chưa chấm điểm được. Trên iPhone hãy mở app bằng Safari; trên máy tính dùng Chrome hoặc Edge. Bạn vẫn có thể ghi âm để tự so với giọng mẫu.';
  } else if (q.err) {
    out.className = 'pr-speak-out warn'; out.textContent = q.err;
  } else if (q.last) {
    prShowScore(out, q.last);
    if (q.tries > 1) out.appendChild(lsEl('div', 'vsp-tries', `Lần ${q.tries} · điểm cao nhất lượt này: ${q.best.pct}%`));
  }
  out.classList.add('vsp-out');

  const btns = lsEl('div', 'pr-speak-btns vsp-btns');
  const mic = lsEl('button', 'btn-primary pr-mic', S.busy ? '👂 Đang nghe… hãy đọc to' : q.tries ? '🎙️ Nói lại' : '🎙️ Bấm rồi đọc to');
  if (S.busy) mic.classList.add('listening');
  mic.disabled = !PR_SR;
  mic.addEventListener('click', () => {
    if (S.busy) { try { prRecog && prRecog.stop(); } catch (e) {} return; }
    S.busy = true; q.err = '';
    vcRenderSpeak();
    vspListen(target, (best, err) => {
      if (vc.sp !== S || S.qs[S.idx] !== q) return;
      S.busy = false;
      if (best) {
        best.pct = Math.round(best.score * 100);
        q.tries++; q.last = best;
        if (!q.best || best.pct > q.best.pct) q.best = best;
        vspSave(it, S.what, best.pct);
        try {   // v143: đọc chưa khớp (< 60%) → Mistakes; đọc tốt (≥ 80%) → tính một lần luyện đúng
          const mk = 'say|' + String(target).toLowerCase();
          if (best.pct >= 80) { if (window.mkOk) window.mkOk(mk); }
          else if (best.pct < 60 && window.mkAdd) window.mkAdd({ k: mk, src: 'say', cat: S.what === 'ex' ? 'Câu ví dụ' : 'Từ vựng', mode: 'say', p: vspText(target), a: [vspText(target)], right: vspText(target), hint: it.ipa ? it.ipa + ' · ' + it.vi : it.vi, wrong: best.heard ? 'Máy nghe thành: “' + best.heard + '”' : '', pct: best.pct });
        } catch (e) {}
      } else if (err) q.err = err;
      vcRenderSpeak();
    }, t => { const b = document.getElementById('vc-body'), o = b && b.querySelector('.vsp-out'); if (o && vc.sp === S && S.busy) { o.className = 'pr-speak-out vsp-out vsp-live'; o.textContent = '👂 ' + t; } });
  });
  const rec = lsEl('button', 'btn-ghost pr-rec', '⏺ Ghi âm & nghe lại');
  rec.addEventListener('click', () => prToggleRecord(target, rec, recOut));
  btns.appendChild(mic); btns.appendChild(rec);
  body.appendChild(btns);
  body.appendChild(out);
  body.appendChild(recOut);

  const nav = lsEl('div', 'vsp-nav');
  if (S.idx > 0) {
    const pv = lsEl('button', 'btn-ghost', '← Trước');
    pv.addEventListener('click', () => { vspStop(); S.idx--; vcRenderSpeak(); });
    nav.appendChild(pv);
  }
  const nx = lsEl('button', q.best ? 'btn-primary' : 'btn-ghost', S.idx + 1 < S.qs.length ? (q.best ? (S.what === 'ex' ? 'Câu tiếp →' : 'Từ tiếp →') : 'Bỏ qua →') : 'Xem kết quả');
  nx.addEventListener('click', () => { vspStop(); S.idx++; vcRenderSpeak(); });
  nav.appendChild(nx);
  body.appendChild(nav);
}
function vspStop() {
  const S = vc.sp;
  if (S) S.busy = false;
  if (prRecog) { try { prRecog.abort(); } catch (e) {} prRecog = null; }
}

function vspRow(it, what, pct) {
  const row = vcRow(it, !!(vc.unit && (vc.unit.mix || vc.unit.review)));
  row.querySelectorAll('.vsp-badge').forEach(b => b.remove());
  const line = row.querySelector('.vc-line');
  if (line) line.appendChild(lsEl('span', 'vsp-badge ' + (pct == null ? 'skip' : vspCls(pct)), pct == null ? 'chưa nói' : pct + '%'));
  return row;
}

function vcSpeakSummary() {
  const body = document.getElementById('vc-body'), S = vc.sp;
  const done = S.qs.filter(q => q.best), skip = S.qs.filter(q => !q.best);
  const box = lsEl('div', 'tense-card vc-done');
  if (!done.length) {
    box.appendChild(lsEl('div', 'vc-done-big', '🎙️'));
    box.appendChild(lsEl('div', 'ls-verdict', 'Bạn chưa nói từ nào trong lượt này.'));
    box.appendChild(lsEl('div', 'vc-done-sub', 'Bấm 🎙️ rồi đọc to từng từ để app chấm điểm phát âm.'));
    const again = lsEl('button', 'btn-primary', 'Bắt đầu lại'); again.addEventListener('click', () => vcStartSpeak());
    box.appendChild(again);
    body.appendChild(box);
    return;
  }
  const avg = Math.round(done.reduce((k, q) => k + q.best.pct, 0) / done.length);
  const big = lsEl('div', 'vc-done-big vsp-avg ' + vspCls(avg), avg + '%');
  box.appendChild(big);
  box.appendChild(lsEl('div', 'vc-done-sub', `Độ khớp nhận diện giọng nói trung bình · ${done.length} ${S.what === 'ex' ? 'câu' : 'từ'} đã nói (không phải điểm phát âm tuyệt đối)`));
  box.appendChild(lsEl('div', 'ls-verdict', avg >= 90 ? 'Tuyệt vời! Máy nghe bạn rất rõ 🎉' : avg >= 70 ? 'Khá tốt! Luyện thêm vài từ chưa đạt là ổn.' : 'Cứ luyện tiếp nhé: nghe mẫu, đọc chậm và rõ âm cuối.'));
  const ok = done.filter(q => q.best.pct >= 90), mid = done.filter(q => q.best.pct >= 60 && q.best.pct < 90), bad = done.filter(q => q.best.pct < 60);
  const stats = lsEl('div', 'ls-stats');
  [['ok', ok.length, 'đạt ≥ 90%'], ['hint', mid.length, '60 – 89%'], ['skip', bad.length, 'dưới 60%']].forEach(([c, n, l]) => {
    const st = lsEl('div', 'ls-stat ' + c); st.appendChild(lsEl('span', 'n', String(n))); st.appendChild(lsEl('span', 'l', l)); stats.appendChild(st);
  });
  box.appendChild(stats);
  if (skip.length) box.appendChild(lsEl('div', 'vc-done-sub', `Bỏ qua ${skip.length} ${S.what === 'ex' ? 'câu' : 'từ'} chưa nói`));
  const low = [...bad, ...mid].sort((x, y) => x.best.pct - y.best.pct);
  const weak = [...low, ...skip];
  if (low.length) {
    box.appendChild(lsEl('div', 'vc-done-sub', S.what === 'ex' ? 'Những câu cần luyện thêm:' : 'Những từ cần luyện thêm:'));
    const card = lsEl('div', 'vc-card vc-wrong');
    low.forEach(q => card.appendChild(vspRow(q.it, S.what, q.best.pct)));
    box.appendChild(card);
  }
  if (S.what === 'w') {
    const newOk = ok.map(q => q.it).filter(it => !vcIs(it));
    if (newOk.length) {
      const mk = lsEl('button', 'btn-ghost wr-mark', `✓ Đánh dấu đã thuộc ${newOk.length} từ đạt ≥ 90%`);
      mk.addEventListener('click', () => { newOk.forEach(it => vcSet(it, true)); vcUpdateProg(); mk.disabled = true; mk.textContent = '✓ Đã đánh dấu'; });
      box.appendChild(mk);
    }
  }
  const btns = lsEl('div', 'ls-sum-btns');
  const again = lsEl('button', 'btn-ghost', 'Chấm lại tất cả'); again.addEventListener('click', () => vcStartSpeak());
  btns.appendChild(again);
  if (weak.length) {
    const rv = lsEl('button', 'btn-primary', `Luyện lại ${weak.length} ${S.what === 'ex' ? 'câu' : 'từ'}`);
    rv.addEventListener('click', () => vcStartSpeak(weak.map(q => q.it)));
    btns.appendChild(rv);
  }
  box.appendChild(btns);
  vcNextUnitBtn(box);
  body.appendChild(box);
}
const vcTopic = id => VOCAB_TOPICS.find(t => t.id === id);
const vcFold = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
const vcRoot = document.getElementById('vc-root');
const vc = { view: 'home', topic: null, unit: null, mode: 'list', filter: 'all', q: '', cards: null, quiz: null, lv: {}, pos: null, posLv: 0, posN: 60, cat: 'all', tst: 'all', rev: false, revF: 'due', revN: 60, org: 'cat', fLv: 0, fSt: 'all', fFav: false };
try { if (localStorage.getItem('hoc-tieng-anh-vocab-org') === 'goal') vc.org = 'goal'; } catch (e) {}
const VC_POS_TABS = [['v', 'Động từ'], ['adj', 'Tính từ'], ['adv', 'Trạng từ'], ['n', 'Danh từ'], ['phr', 'Cụm từ'], ['other', 'Từ khác']];
const vcPosOk = it => !vc.pos || (vc.pos === 'other' ? !['v', 'adj', 'adv', 'n', 'phr'].includes(it.pos) : it.pos === vc.pos);
let vcFront = 'en';

// v241: dòng gợi ý cách dùng (mẫu dùng viết tay, hoặc cụm lấy từ câu ví dụ)
function vcUseEl(it, cls) {
  if (!it || !it.use) return null;
  const auto = it.use.charAt(0) === '~';
  const d = lsEl('div', cls || 'vc-use');
  d.appendChild(lsEl('span', 'vc-use-l', auto ? 'Cụm hay gặp' : 'Cách dùng'));
  d.appendChild(document.createTextNode(auto ? it.use.slice(1) : it.use));
  return d;
}
window.vcUseEl = vcUseEl;
function vcExHtml(it) {
  const main = vcExMain(it);
  if (!it.exvi) return main;
  return main + '<span class="vc-exvi">' + it.exvi.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</span>';
}
function vcExMain(it) {
  const ex = it.ex.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const tryRe = src => { const re = new RegExp(src, 'i'); return re.test(ex) ? ex.replace(re, '<b>$1</b>') : null; };
  const w = it.w.replace(/^be /, '').replace(/[?!.]$/, '');
  let out = tryRe('\\b(' + escapeRe(w) + ')');
  if (out) return out;
  // dạng khác của từ: took, fell, feet, dating…
  const parts = w.split(/\s+/), first = parts[0].toLowerCase();
  const rest = parts.slice(1).map(escapeRe).join('\\s+');
  const stem = x => x.length > 3 ? x.replace(/[ey]$/, '') : x;
  const forms = [escapeRe(stem(first))];
  const verb = IRREGULAR_VERBS.find(v => v.v1 === first);
  if (verb) [verb.v2, verb.v3].forEach(f => f.split('/').forEach(x => forms.push(escapeRe(x.trim()))));
  const plural = { foot: 'feet', tooth: 'teeth', child: 'children', person: 'people', mouse: 'mice', leaf: 'leaves' }[first];
  if (plural) forms.push(plural);
  out = tryRe('\\b((?:' + forms.join('|') + ')\\w*' + (rest ? '(?:\\s+' + rest + ')?' : '') + ')');
  if (!out && parts.length > 1) out = tryRe('\\b(' + escapeRe(stem(parts[parts.length - 1])) + '\\w*)');
  return out || ex;
}
function vcPlayBtn(label, aria, text, rate) {
  const b = lsEl('span', 'play-mini' + (label === '▶' ? '' : ' play-alt'), label);
  b.setAttribute('role', 'button');
  b.setAttribute('aria-label', aria);
  b.addEventListener('click', e => { e.stopPropagation(); speak(text, rate || 0.8); });
  return b;
}
function vcBar(ratio) {
  const bar = lsEl('span', 'vc-bar');
  const fill = lsEl('span');
  fill.style.width = Math.round(ratio * 100) + '%';
  bar.appendChild(fill);
  return bar;
}
const vcCount = items => items.filter(vcIs).length;

/* ---------- v109: chi tiết một từ (gợi ý tự động từ dữ liệu trong app) ---------- */
function vcForms(it) {
  const w = it.w;
  if (/\s/.test(w) || !/^[a-z]+$/i.test(w) || /^[A-Z]/.test(w)) return [];   // v252: bỏ tên riêng, chữ viết tắt
  const lw = w.toLowerCase();
  if (it.pos === 'v') {
    if (lw === 'be') return [['be', 'nguyên mẫu'], ['am / is / are', 'hiện tại'], ['was / were', 'quá khứ (V2)'], ['been', 'quá khứ phân từ (V3)'], ['being', 'dạng V-ing']];
    const IRR = typeof IRREGULAR_VERBS !== 'undefined' ? IRREGULAR_VERBS : [];
    let irr = IRR.find(v => v.v1 === lw) || null, pre = '';
    if (lw === 'lie' && /dối/.test(it.vi || '')) irr = null;                    // lie – lied (nói dối)
    if (!irr) { const m = /^(un|re|over|out|under|mis|fore|up|with)([a-z]{3,})$/.exec(lw); const base = m && IRR.find(v => v.v1 === m[2]); if (base && !['relay', 'outfit', 'refit', 'recost', 'unfit'].includes(lw)) { irr = base; pre = m[1]; } }
    const baseW = irr && pre ? lw.slice(pre.length) : lw.replace(/^(un|re|over|out|under|mis|fore|up)(?=[a-z]{3,}$)/, m0 => (irr ? '' : m0));
    const DBL2 = ['admit', 'commit', 'permit', 'submit', 'omit', 'emit', 'transmit', 'regret', 'prefer', 'refer', 'occur', 'transfer', 'control', 'patrol', 'equip', 'begin', 'forget', 'upset', 'input', 'babysit', 'kidnap', 'format', 'unplug', 'unzip', 'unwrap', 'overlap', 'rebrand', 'travel', 'cancel', 'label', 'model', 'signal', 'quarrel', 'pedal', 'dial', 'fuel', 'level', 'total', 'equal', 'marvel', 'shovel', 'unravel', 'bevel', 'handicap', 'worship', 'program', 'acquit', 'deter', 'excel', 'expel', 'compel', 'rebel', 'propel', 'defer', 'infer', 'confer', 'incur', 'recur', 'outrun', 'overrun', 'rerun', 'reset', 'offset', 'outbid', 'forbid', 'regret', 'shadowban', 'squat', 'quit', 'quiz', 'enrol'];
    const NODBL = ['rebrand'];
    const mono = /^[^aeiou]*[aeiou][^aeiouwxy]$/.test(baseW);
    const dbl = (mono || DBL2.includes(lw) || DBL2.includes(baseW)) && !NODBL.includes(lw);
    const last = w.slice(-1);
    const ck = /[aeiou]c$/.test(lw);                                            // panic → panicked
    const s3 = lw === 'have' ? 'has' : /(s|sh|ch|x|z|o)$/.test(lw) ? (lw === 'quiz' ? 'quizzes' : w + 'es') : /[^aeiou]y$/.test(lw) ? w.slice(0, -1) + 'ies' : w + 's';
    const ing = /ie$/.test(lw) ? w.slice(0, -2) + 'ying' : /(ye|oe|ee)$/.test(lw) ? w + 'ing' : /[^aeiou]e$/.test(lw) || /ue$/.test(lw) ? w.slice(0, -1) + 'ing' : ck ? w + 'king' : dbl ? w + last + 'ing' : w + 'ing';
    const ed = /e$/.test(lw) ? w + 'd' : /[^aeiou]y$/.test(lw) ? w.slice(0, -1) + 'ied' : ck ? w + 'ked' : dbl ? w + last + 'ed' : w + 'ed';
    const addPre = f => f.split('/').map(x => pre + x.trim()).join(' / ');
    return [[w, 'nguyên mẫu'], [s3, 'ngôi thứ ba số ít'], [irr ? addPre(irr.v2) : ed, 'quá khứ (V2)'], [irr ? addPre(irr.v3) : ed, 'quá khứ phân từ (V3)'], [ing, 'dạng V-ing']];
  }
  if (it.pos === 'n') {
    const u = it.use || '';
    let m;
    if ((m = /số nhiều \(số ít: ([a-z\-]+)/i.exec(u))) return [[w, 'dạng số nhiều'], [m[1], 'số ít']];
    if (/số ít và số nhiều giống nhau/.test(u)) return [[w, 'số ít và số nhiều giống nhau']];
    if (/luôn (ở )?số nhiều/.test(u)) return [[w, 'luôn ở số nhiều']];
    if (/đi với động từ số nhiều/.test(u)) return [[w, 'đi với động từ số nhiều']];
    if (/thường số nhiều/.test(u)) return [[w, 'thường dùng ở số nhiều']];
    if ((m = /(?:^|· |\()số nhiều: ([a-z\-]+(?: \/ [a-z\-]+)?)/i.exec(u))) return m[1].toLowerCase() === lw ? [[w, 'số ít và số nhiều giống nhau']] : [[w, 'số ít'], [m[1], 'số nhiều']];
    if (/đi với động từ số ít/.test(u)) return [[w, 'đi với động từ số ít, không có dạng số nhiều']];
    const CNT = ['room', 'job', 'paper', 'exercise', 'breakfast', 'lunch', 'dinner', 'darling', 'chicken', 'cheese', 'coffee', 'tea', 'interest', 'experience', 'hair', 'time'];
    if (!CNT.includes(lw) && /^không đếm được|\(không đếm được|: không đếm được/.test(u) && !/thường không đếm được/.test(u)) return [[w, 'danh từ không đếm được']];
    if (!CNT.includes(lw) && /^không dùng a:/.test(u)) return [[w, 'danh từ không đếm được']];
    const IRR = { vertex: 'vertices', index: 'indices', matrix: 'matrices', appendix: 'appendices', analysis: 'analyses', crisis: 'crises', thesis: 'theses', hypothesis: 'hypotheses', oasis: 'oases', basis: 'bases', axis: 'axes', diagnosis: 'diagnoses', phenomenon: 'phenomena', criterion: 'criteria', cactus: 'cacti', fungus: 'fungi', nucleus: 'nuclei', radius: 'radii', stimulus: 'stimuli', larva: 'larvae', formula: 'formulas / formulae', antenna: 'antennae', curriculum: 'curricula', bacterium: 'bacteria', man: 'men', woman: 'women', child: 'children', grandchild: 'grandchildren', stepchild: 'stepchildren', godchild: 'godchildren', person: 'people', foot: 'feet', tooth: 'teeth', goose: 'geese', mouse: 'mice', ox: 'oxen', die: 'dice', leaf: 'leaves', knife: 'knives', life: 'lives', wife: 'wives', housewife: 'housewives', midwife: 'midwives', half: 'halves', shelf: 'shelves', bookshelf: 'bookshelves', wolf: 'wolves', thief: 'thieves', scarf: 'scarves', loaf: 'loaves', calf: 'calves', hoof: 'hooves', elf: 'elves', self: 'selves', quiz: 'quizzes', potato: 'potatoes', tomato: 'tomatoes', hero: 'heroes', mango: 'mangoes', mosquito: 'mosquitoes', volcano: 'volcanoes', tornado: 'tornadoes', echo: 'echoes', buffalo: 'buffalo / buffaloes', sheep: 'sheep', fish: 'fish', deer: 'deer', moose: 'moose', bison: 'bison', reindeer: 'reindeer', salmon: 'salmon', tuna: 'tuna', squid: 'squid', shrimp: 'shrimp', aircraft: 'aircraft', spacecraft: 'spacecraft', offspring: 'offspring', series: 'series', species: 'species', headquarters: 'headquarters', crossroads: 'crossroads', means: 'means', yen: 'yen', information: '', advice: '', furniture: '', news: '', homework: '', housework: '', luggage: '', baggage: '', equipment: '', knowledge: '', weather: '', traffic: '', music: '', money: '', rice: '', bread: '', water: '', milk: '', sugar: '', salt: '', butter: '', scenery: '', jewellery: '', rubbish: '', trash: '', pollution: '', electricity: '', software: '', feedback: '', research: '', evidence: '', progress: '', accommodation: '', health: '', luck: '', fun: '', work: '', tennis: '', football: '', golf: '', chess: '', yoga: '', karaoke: '', badminton: '', basketball: '', volleyball: '', baseball: '', rugby: '', hockey: '', judo: '', karate: '', swimming: '', running: '', cycling: '', shopping: '', cooking: '', camping: '', fishing: '', hiking: '', jogging: '', skiing: '', surfing: '', sailing: '', dancing: '', singing: '', reading: '', gardening: '', smoking: '' };
    if (lw in IRR) return IRR[lw] ? (IRR[lw] === lw ? [[w, 'số ít và số nhiều giống nhau']] : [[w, 'số ít'], [IRR[lw], 'số nhiều']]) : [[w, 'danh từ không đếm được']];
    if (/fish$/.test(lw)) return [[w, 'số ít và số nhiều giống nhau']];
    if (/(wo)?man$/.test(lw) && !['human', 'roman', 'german', 'shaman', 'talisman', 'ottoman'].includes(lw)) return [[w, 'số ít'], [w.slice(0, -2) + 'en', 'số nhiều']];
    if (['mathematics', 'maths', 'physics', 'economics', 'politics', 'athletics', 'gymnastics', 'statistics', 'genetics', 'robotics', 'ethics', 'civics', 'aerobics', 'electronics', 'linguistics'].includes(lw)) return [[w, 'tên môn học / lĩnh vực: đi với động từ số ít']];
    if (lw === 'biceps') return [[w, 'số ít và số nhiều giống nhau']];
    if (/ing$/.test(lw) && lw.length > 5 && (/^(go|do|play) /.test(u) || /^(việc|môn|sự|hoạt động|nghề|ngành|trò)\b/.test(it.vi || ''))) return [[w, 'danh từ chỉ hoạt động (thường không đếm được)']];
    if (/s$/.test(lw) && !/(ss|us|is|as|os|ous|ess)$/.test(lw) && !['bus', 'gas', 'lens', 'plus', 'yes'].includes(lw)) return [[w, 'đang ở dạng số nhiều']];
    const pl = /(s|sh|ch|x|z)$/.test(lw) ? w + 'es' : /[^aeiou]y$/.test(lw) ? w.slice(0, -1) + 'ies' : w + 's';
    return [[w, 'số ít'], [pl, 'số nhiều (nếu đếm được)']];
  }
  return [];
}
function vcFamily(it) {
  const w = it.w.toLowerCase();
  if (/\s/.test(w)) return [];
  const stem = w.replace(/(ation|ition|ment|ness|ity|ive|ful|less|able|ible|ance|ence|ing|ed|er|or|ist|ly|al|ous|y|e|s)$/, '');
  if (stem.length < 4) return [];
  // v252: chỉ nhận từ cùng gốc thật sự (đuôi phái sinh), và nghĩa tiếng Việt phải có điểm chung khi gốc ngắn
  const SUF = /^(?:[a-z])?(?:|s|es|d|ed|e|er|ers|or|ist|ian|ion|tion|ation|ition|ment|ness|iness|ity|ive|ative|ful|less|able|ible|ance|ence|ant|ent|ing|ly|ily|al|ial|ous|ious|y|ic|ical|ism|ship|hood|ise|ize|ify|en|ary|ory|ure|th|ee|ess|ery|ry|age|cy|ncy)$/;
  const BAD = ['counter', 'sweater', 'customer', 'corner', 'marshmallow', 'porter', 'portion', 'poster', 'shower', 'flower', 'tower', 'letter', 'matter', 'number', 'master', 'paper', 'butter', 'batter', 'ladder', 'summer', 'dinner', 'supper', 'pepper', 'carpet', 'planet', 'plaster', 'cluster', 'sister', 'mister', 'minister', 'chapter', 'character', 'factory', 'history', 'country', 'county', 'pantry', 'century', 'entry', 'party', 'parting', 'partner', 'particle', 'capital', 'capable', 'several', 'general', 'generous', 'mineral', 'interval', 'internal', 'animal', 'hospital', 'original', 'comment', 'moment', 'apartment', 'department', 'element', 'document', 'instrument', 'monument', 'cement', 'garment'];
  const key = s => new Set((s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').split(/[^a-z]+/).filter(t => t.length >= 3 && !['mot', 'cai', 'con', 'nguoi', 'cua', 'cho', 'lam', 'viec', 'duoc', 'khong', 'nhu', 'voi', 'cac', 'nhung', 'tinh', 'thuoc', 'co', 'hay', 'rat', 've', 'su', 'bi', 'dang', 'nha'].includes(t)));
  const mine = key(it.vi);
  const share = x => { const k = key(x.vi); for (const t of mine) if (k.has(t)) return true; return false; };
  const BADP = new Set(["absorbing|absorb", "absorb|absorbing", "affection|affect", "affect|affection", "analytical|analytics", "analytics|analytical", "authority|author", "author|authority", "catchy|catch", "catch|catchy", "celebration|celebrity", "celebrity|celebration", "challenge|challenging", "challenging|challenge", "chilled|chills", "chills|chilled", "chills|chilly", "chilly|chills", "closed|close", "close|closed", "companion|company", "company|companion", "compare|compartment", "compartment|compare", "competent|compete", "competent|competition", "compete|competent", "competition|competent", "composer|compost", "compose|compost", "composition|compost", "compost|compose", "compost|composer", "compost|composition", "conditioner|condition", "condition|conditioner", "conductor|conduct", "conduct|conductor", "conservation|conservative", "conservative|conservation", "conservative|conserve", "conserve|conservative", "controller|controlling", "controlling|controller", "currently|current", "current|currently", "customs|custom", "custom|customs", "declined|decline", "decline|declined", "defendant|defend", "defendant|defender", "defender|defendant", "defend|defendant", "demanding|demand", "demand|demanding", "detective|detect", "detect|detective", "determined|determine", "determine|determined", "dictate|dictator", "dictator|dictate", "diplomacy|diploma", "diplomatic|diploma", "diplomat|diploma", "diploma|diplomacy", "diploma|diplomat", "diploma|diplomatic", "diversion|diversity", "diversity|diversion", "encourage|encouraging", "encouraging|encourage", "engineer|engine", "engine|engineer", "excellent|excel", "excel|excellent", "execute|executive", "executive|execute", "experience|experiment", "experiment|experience", "finale|finally", "finally|finale", "floral|florist", "florist|floral", "generate|generation", "generation|generate", "generation|generator", "generator|generation", "hairstyle|hairstylist", "hairstylist|hairstyle", "handy|hand", "hand|handy", "header|head", "head|header", "highlighter|highlights", "highlights|highlighter", "horrible|horror", "horror|horrible", "install|instalment", "instalment|install", "journaling|journal", "journaling|journalism", "journaling|journalist", "journalism|journaling", "journalist|journaling", "journal|journaling", "memorable|memo", "memorial|memorise", "memorise|memorial", "memory|memo", "memo|memorable", "memo|memory", "minutes|minute", "minute|minutes", "moderation|moderator", "moderator|moderation", "monetise|money", "money|monetise", "motivation|motive", "motive|motivation", "objective|object", "object|objective", "offended|offender", "offender|offended", "organise|organism", "organism|organise", "overseas|oversee", "oversee|overseas", "package|pack", "pack|package", "practical|practice", "practice|practical", "preservative|preserve", "preserve|preservative", "principal|principled", "principled|principal", "profession|professor", "professor|profession", "projector|project", "project|projector", "promptly|prompt", "prompt|promptly", "qualified|qualifier", "qualifier|qualified", "radiation|radiator", "radiator|radiation", "realise|realism", "realise|realistic", "realism|realise", "realistic|realise", "reduced|reduce", "reduce|reduced", "rewarding|reward", "reward|rewarding", "running|runny", "runny|running", "scorching|scorch", "scorch|scorching", "seasonal|seasoning", "seasoning|season", "seasoning|seasonal", "season|seasoning", "secretary|secret", "secret|secretary", "slippers|slippery", "slippery|slippers", "soothe|soothing", "soothing|soothe", "specialist|speciality", "speciality|specialist", "spirits|spiritual", "spiritual|spirits", "starry|star", "star|starry", "sticker|stick", "stick|sticker", "streamers|stream", "streamers|streamer", "streamers|streaming", "streamer|streamers", "streaming|streamers", "stream|streamers", "stretcher|stretch", "stretcher|stretching", "stretcher|stretchy", "stretching|stretcher", "stretchy|stretcher", "stretch|stretcher", "studious|studio", "studio|studious", "subjective|subject", "subject|subjective", "surveyor|survey", "survey|surveyor", "terminal|terminus", "terminus|terminal", "thrilled|thriller", "thriller|thrilled", "thriller|thrilling", "thrilling|thriller", "trace|track", "track|trace", "trainee|train", "trainee|trainers", "trainers|trainee", "train|trainee", "unfriendly|unfriend", "unfriend|unfriendly", "universe|university", "university|universe", "warmly|warm", "warm|warmly"]);
  const seen = new Set([w]), out = [];
  VC_ALL.forEach(x => {
    const xw = x.w.toLowerCase();
    if (BADP.has(w + '|' + xw)) return;
    if (out.length >= 6 || seen.has(xw) || /\s/.test(xw) || !xw.startsWith(stem) || BAD.includes(xw) || BAD.includes(w)) return;
    if (!SUF.test(xw.slice(stem.length))) return;
    if (!(share(x) || stem.length >= 6)) return;
    seen.add(xw); out.push(x);
  });
  return out;
}
// v252: so nghĩa tiếng Việt để không ghép nhầm nghĩa khác của cùng một từ (bat = con dơi ≠ Bát Tràng, fan = người hâm mộ ≠ quạt)
const VC_VI_STOP = new Set('con cái cái. người sự một có là của cho và bị được làm đi ra vào lên xuống nói chung các những rất khi như với ở trong trên dưới để thì mà này đó kia ai gì nào việc đồ cách hay hoặc lại đã đang sẽ không chưa tôi bạn anh chị em nó họ mình ta về từ đến theo tại bằng cùng nhau thân mật trang trọng nhiều ít hơn nhất quá lắm thật thêm còn nữa cũng chỉ vẫn đều mỗi mọi vài số loại kiểu món thứ lúc nơi chỗ phần bên phía mặt tính chất thuộc tên gọi nghĩa dùng ví dụ thường'.split(' '));
function vcViKey(vi) {
  const out = new Set();
  String(vi || '').toLowerCase().replace(/\([^)]*\)/g, ' ').split(/[^a-zà-ỹđ]+/).forEach(t => { if (t.length >= 2 && !VC_VI_STOP.has(t)) out.add(t); });
  return out;
}
function vcSameSense(it, vi) {
  const mine = vcViKey(it.vi);
  if (!mine.size) return true;
  if (!vi) return false;
  const k = vcViKey(vi);
  for (const t of mine) if (k.has(t)) return true;
  return false;
}
const VC_LIGHT_V = new Set(['get', 'take', 'make', 'have', 'do', 'go', 'give', 'put', 'set', 'keep', 'come', 'turn', 'look', 'run', 'break', 'bring', 'call', 'cut', 'fall', 'hold', 'pick', 'be']);
function vcDetail(it) {
  const box = lsEl('div', 'vw-detail');
  const lw = it.w.toLowerCase(), re = new RegExp('\\b' + escapeRe(lw) + '\\b', 'i');
  const sec = (title, list) => { if (!list.length) return; box.appendChild(lsEl('div', 'vw-dt-h', title)); const ul = lsEl('ul', 'vw-dt-l'); list.forEach(x => ul.appendChild(x)); box.appendChild(ul); };
  const li = (en, vi, sayIt) => { const l = lsEl('li'); const b = lsEl('b', null, en); l.appendChild(b); if (vi) l.appendChild(document.createTextNode(' – ' + vi)); if (sayIt !== false) l.appendChild(vcPlayBtn('▶', 'Nghe', en)); return l; };
  box.appendChild(lsEl('div', 'vw-dt-top', `${it.w} · ${it.ipa} · ${VC_POS[it.pos] || it.pos} · ${vcLvCode(it.lv)} (ước lượng)`));
  const fam = vcFamily(it);
  sec('1. Các dạng của từ', vcForms(it).map(([f, l]) => li(f, l)).concat(fam.map(x => li(x.w, `${VC_POS[x.pos] || x.pos} · ${x.vi}`))));
  const ex = VC_EXTRA[it.tid + '|' + it.w];
  const cols = ex ? ex.col.map(([a, b]) => li(a, b)) : [];
  const colSeen = new Set(ex ? ex.col.map(c => String(c[0]).toLowerCase()) : []);
  const light = it.pos === 'v' && VC_LIGHT_V.has(lw);
  const okCol = (p, m) => { const k = String(p).toLowerCase(); if (k === lw || colSeen.has(k)) return false; if (!light && !vcSameSense(it, m)) return false; colSeen.add(k); return true; };
  if (cols.length < 5) {
    VC_ALL.forEach(x => { if (cols.length < 5 && x !== it && /\s/.test(x.w) && re.test(x.w) && okCol(x.w, x.vi)) cols.push(li(x.w, x.vi)); });
    try { COLLOCATIONS.forEach(g => g.items.forEach(c => { if (cols.length < 6 && re.test(c.p) && okCol(c.p, c.m)) cols.push(li(c.p, c.m)); })); } catch (e) {}
  }
  sec('2. Cụm từ thường đi cùng', cols);
  const grp = VC_ALL.filter(x => x !== it && x.tid === it.tid && x.gi === it.gi);
  const rel = grp.filter(x => x.pos === it.pos).concat(grp.filter(x => x.pos !== it.pos)).slice(0, 6);
  sec('3. Từ liên quan (cùng nhóm nghĩa)', rel.map(x => li(x.w, x.vi)));
  const more = [];
  const reCase = /^[A-Z]/.test(it.w) ? new RegExp('\\b' + escapeRe(it.w) + '\\b') : re;
  const w1 = escapeRe(lw);
  const reAsVerb = new RegExp("(?:\\b(?:to|can|can't|could|will|won't|would|should|must|may|might|i|you|we|they|he|she|it|don't|doesn't|didn't|not|let's|please|never|always)\\s+" + w1 + "\\b)|^" + w1 + "\\s+(?:you|i|we|they|he|she|it)\\b", 'i');
  const reAsNoun = new RegExp("\\b(?:a|an|the|this|that|my|your|his|her|our|their|some|any)\\s+" + w1 + "\\b", 'i');
  const modalN = it.pos === 'n' && ['can', 'will', 'may', 'might', 'must'].includes(lw);
  const posOk = en => /\s/.test(lw) ? true : modalN ? (reAsNoun.test(en) || new RegExp('\\b' + w1 + '(?:s\\b| of\\b| opener)', 'i').test(en)) : it.pos === 'n' ? !reAsVerb.test(en) : it.pos === 'v' ? !reAsNoun.test(en) : true;
  const addEx = (en, vi, own) => { if (more.length < 3 && en && en !== it.ex && reCase.test(en) && (own || (vcSameSense(it, vi) && posOk(en))) && !more.some(m => m[0] === en)) more.push([en, vi]); };
  if (ex && ex.sit) addEx(ex.sit[0], ex.sit[1], true);
  try { Object.values(EX_DATA).forEach(arr => arr.forEach(r => addEx(r[0], r[1]))); } catch (e) {}
  try { PA_LESSONS.forEach(l => l.s.forEach(r => addEx(r[1], r[0]))); } catch (e) {}
  VC_ALL.forEach(x => { if (x !== it) addEx(x.ex, x.exvi); });
  sec(ex ? '4. Ví dụ trong công việc 3D & thêm ví dụ' : '4. Thêm ví dụ', more.map(([en, vi]) => { const l = lsEl('li', 'vw-dt-ex'); l.appendChild(lsEl('span', null, en)); l.appendChild(vcPlayBtn('▶', 'Nghe câu', en)); if (vi) l.appendChild(lsEl('span', 'vw-dt-vi', vi)); return l; }));
  box.appendChild(lsEl('div', 'vw-dt-note', 'Dạng từ, cụm từ và ví dụ được app gợi ý tự động từ dữ liệu có sẵn, nên có thể chưa đầy đủ. Cấp độ là ước lượng, không phải CEFR chính thức.'));
  return box;
}

/* ---------- one word row (list + search) ---------- */
function vcRow(it, showTopic) {
  const row = lsEl('div', 'vc-row' + (vcIs(it) ? ' learned' : ''));
  const main = lsEl('div', 'vc-main');
  const line = lsEl('div', 'vc-line');
  line.appendChild(lsEl('span', 'vc-word', it.w));
  line.appendChild(lsEl('span', 'vc-pos', VC_POS[it.pos] || it.pos));
  line.appendChild(lsEl('span', 'vc-lv vc-lv' + it.lv, vcLvCode(it.lv)));
  { const st = vwStatus(it); if (st !== 'new') { const b = lsEl('span', 'vw-st st-' + st, VW_ST[st][0]); b.title = VW_ST[st][1]; line.appendChild(b); } }
  const sp = vspGet(it, 'w');
  if (sp != null) { const bd = lsEl('span', 'vsp-badge ' + vspCls(sp), '🎙️ ' + sp + '%'); bd.title = 'Điểm phát âm cao nhất'; line.appendChild(bd); }
  main.appendChild(line);
  if (showTopic) {
    const t = vcTopic(it.tid);
    main.appendChild(lsEl('div', 'vc-tag', `${t.icon} ${t.vi} › ${t.groups[it.gi].vi}`));
  }
  main.appendChild(lsEl('div', 'vc-ipa', it.ipa));
  main.appendChild(lsEl('div', 'vc-mean', it.vi));
  { const u = vcUseEl(it); if (u) main.appendChild(u); }
  const ex = lsEl('div', 'vc-ex');
  ex.innerHTML = vcExHtml(it);
  main.appendChild(ex);
  const btns = lsEl('div', 'vc-btns');
  btns.appendChild(vcPlayBtn('▶', 'Nghe từ ' + it.w, it.w));
  btns.appendChild(vcPlayBtn('💬', 'Nghe câu ví dụ', it.ex, 0.85));
  const fv = lsEl('button', 'vc-fav' + (vcFav.has(vcK(it)) ? ' on' : ''), vcFav.has(vcK(it)) ? '★' : '☆');
  fv.setAttribute('aria-label', 'Yêu thích ' + it.w); fv.title = 'Thêm vào / bỏ khỏi từ yêu thích';
  fv.addEventListener('click', e => { e.stopPropagation(); const on = vcFavToggle(it); fv.classList.toggle('on', on); fv.textContent = on ? '★' : '☆'; });
  btns.appendChild(fv);
  const mo = lsEl('button', 'vc-more', 'ⓘ');
  mo.setAttribute('aria-label', 'Xem chi tiết từ ' + it.w); mo.title = 'Xem chi tiết: dạng từ, cụm từ, từ liên quan, thêm ví dụ';
  mo.addEventListener('click', e => { e.stopPropagation(); const d = main.querySelector('.vw-detail'); if (d) { d.remove(); mo.classList.remove('on'); } else { main.appendChild(vcDetail(it)); mo.classList.add('on'); } });
  btns.appendChild(mo);
  const ck = lsEl('button', 'vc-check' + (vcIs(it) ? ' on' : ''), '✓');
  ck.setAttribute('aria-label', 'Đánh dấu đã thuộc ' + it.w);
  ck.addEventListener('click', () => {
    const on = !vcIs(it);
    vcSet(it, on);
    ck.classList.toggle('on', on);
    row.classList.toggle('learned', on);
    vcUpdateProg();
  });
  btns.appendChild(ck);
  row.appendChild(main); row.appendChild(btns);
  return row;
}

/* ---------- home: progress, search, topic grid ---------- */
function vcRenderHome() {
  vc.view = 'home'; vc.topic = null; vc.unit = null;
  vcRoot.innerHTML = '';
  if (!vcReady) { vcRoot.appendChild(lsEl('p', 'lazy-wait', 'Đang tải từ vựng…')); return; }
  vcRoot.appendChild(vcDashboard());

  const sr = lsEl('div', 'verb-search-row');
  const inp = lsEl('input');
  inp.type = 'text'; inp.id = 'vc-search'; inp.value = vc.q;
  inp.placeholder = 'Tìm trong ' + VC_ALL.length.toLocaleString('vi-VN') + ' từ... (ví dụ: weather, bác sĩ)';
  inp.setAttribute('autocomplete', 'off'); inp.setAttribute('autocapitalize', 'off');
  inp.addEventListener('input', () => { vc.q = inp.value; vcRenderHomeBody(); });
  sr.appendChild(inp);
  vcRoot.appendChild(sr);
  // lọc theo loại từ
  const pc = lsEl('div', 'colloc-chips vc-pos-chips');
  pc.setAttribute('role', 'group'); pc.setAttribute('aria-label', 'Lọc theo loại từ');
  const learnedAll = vrTracked(), dueN = learnedAll.filter(vrDue).length;
  const rc = lsEl('button', 'colloc-chip vr-chip' + (vc.rev ? ' active' : ''), '📚 Ôn tập · ' + learnedAll.length.toLocaleString('vi-VN'));
  if (dueN) { const d = lsEl('span', 'vr-dot', String(dueN)); d.title = dueN + ' từ đến hạn ôn hôm nay'; rc.appendChild(d); }
  rc.setAttribute('aria-pressed', vc.rev ? 'true' : 'false');
  rc.addEventListener('click', () => { vc.rev = !vc.rev; vc.pos = null; vc.revN = 60; vcRenderHome(); });
  pc.appendChild(rc);
  VC_POS_TABS.forEach(([k, label]) => {
    const c = lsEl('button', 'colloc-chip' + (vc.pos === k ? ' active' : ''), label);
    c.setAttribute('aria-pressed', vc.pos === k ? 'true' : 'false');
    c.addEventListener('click', () => {
      vc.pos = vc.pos === k ? null : k; vc.posLv = 0; vc.posN = 60; vc.rev = false;
      rc.classList.remove('active'); rc.setAttribute('aria-pressed', 'false');
      pc.querySelectorAll('.colloc-chip:not(.vr-chip)').forEach((b, i) => { const on = VC_POS_TABS[i][0] === vc.pos; b.classList.toggle('active', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
      vcRenderHomeBody();
    });
    pc.appendChild(c);
  });
  vcRoot.appendChild(pc);
  // v109: bộ lọc cấp độ, trạng thái, yêu thích
  const fbox = lsEl('details', 'vw-filters');
  fbox.open = vcAnyF();
  const nAct = (vc.fLv ? 1 : 0) + (vc.fSt !== 'all' ? 1 : 0) + (vc.fFav ? 1 : 0);
  fbox.appendChild(lsEl('summary', null, '⚙️ Bộ lọc: cấp độ · trạng thái · yêu thích' + (nAct ? ` (${nAct} đang bật)` : '')));
  const fr1 = lsEl('div', 'colloc-chips');
  [[0, 'Mọi cấp'], ...VC_LEVELS.map(L => [L.n, L.code])].forEach(([k, l]) => { const c = lsEl('button', 'colloc-chip' + (vc.fLv === k ? ' active' : ''), l); c.addEventListener('click', () => { vc.fLv = k; vcRenderHome(); }); fr1.appendChild(c); });
  const fr2 = lsEl('div', 'colloc-chips');
  [['all', 'Mọi trạng thái'], ['new', 'Từ mới'], ['learning', 'Đang học'], ['weak', 'Cần ôn'], ['master', 'Thành thạo']].forEach(([k, l]) => { const c = lsEl('button', 'colloc-chip' + (vc.fSt === k ? ' active' : ''), l); c.addEventListener('click', () => { vc.fSt = k; vcRenderHome(); }); fr2.appendChild(c); });
  const fav = lsEl('button', 'colloc-chip' + (vc.fFav ? ' active' : ''), `★ Yêu thích · ${vcFav.size}`); fav.addEventListener('click', () => { vc.fFav = !vc.fFav; vcRenderHome(); }); fr2.appendChild(fav);
  fbox.appendChild(fr1); fbox.appendChild(fr2);
  if (nAct) { const rs = lsEl('button', 'ls-slow', '✕ Bỏ lọc'); rs.addEventListener('click', () => { vc.fLv = 0; vc.fSt = 'all'; vc.fFav = false; vcRenderHome(); }); fbox.appendChild(rs); }
  vcRoot.appendChild(fbox);
  const body = lsEl('div'); body.id = 'vc-body';
  vcRoot.appendChild(body);
  vcRenderHomeBody();
}

function vcTopicCard(t) {
  const got = vcCount(t.items), n = t.items.length;
  const b = lsEl('button', 'vc-topic' + (got === n ? ' done' : ''));
  b.appendChild(lsEl('span', 'vc-ticon', t.icon));
  b.appendChild(lsEl('span', 'vc-tvi', t.vi));
  b.appendChild(lsEl('span', 'vc-ten', t.en));
  b.appendChild(lsEl('span', 'vc-tmeta', got ? `${got}/${n} đã thuộc` : `${n} từ · ${t.lessonCount} bài`));
  b.appendChild(vcBar(got / n));
  b.addEventListener('click', () => vcOpenTopic(t));
  return b;
}

const vcAnyF = () => !!(vc.fLv || vc.fSt !== 'all' || vc.fFav);
const vcFOk = it => (!vc.fLv || it.lv === vc.fLv) && (vc.fSt === 'all' || vwStatus(it) === vc.fSt) && (!vc.fFav || vcFav.has(vcK(it)));
function vcRenderHomeBody() {
  const body = document.getElementById('vc-body');
  body.innerHTML = '';
  const q = vc.q.trim();
  if (q || vcAnyF()) {
    const fq = vcFold(q), lq = q.toLowerCase(), plain = fq === lq;
    const match = s => plain ? vcFold(s).includes(fq) : s.toLowerCase().includes(lq);
    const ipaQ = /[ˈˌəɪʊæɒʌɜːŋθðʃʒ/]/.test(q);
    const res = VC_ALL.filter(it => vcPosOk(it) && vcFOk(it) && (!q || match(it.w) || match(it.vi) || (q.length >= 4 && match(it.ex)) || (ipaQ && it.ipa.includes(q.replace(/\//g, '')))));
    const rank = it => vcFold(it.w) === fq ? 0 : vcFold(it.w).startsWith(fq) ? 1 : match(it.w) ? 2 : 3;
    res.sort((a, b) => rank(a) - rank(b));
    const topics = (vc.pos || !q || vcAnyF()) ? [] : VOCAB_TOPICS.filter(t => match(t.vi) || match(t.en));
    if (topics.length) {
      body.appendChild(lsEl('div', 'tense-group-title', 'Chủ đề phù hợp'));
      const grid = lsEl('div', 'vc-grid');
      topics.forEach(t => grid.appendChild(vcTopicCard(t)));
      body.appendChild(grid);
    }
    const units = [];
    if (!vc.pos && q && !vcAnyF()) VOCAB_TOPICS.forEach(t => t.levels.forEach(x => x.lessons.forEach(g => { if (!topics.includes(t) && match(g.vi)) units.push(g); })));
    if (units.length) {
      body.appendChild(lsEl('div', 'tense-group-title', 'Bài học phù hợp'));
      const list = lsEl('div', 'vc-units');
      units.slice(0, 12).forEach(g => list.appendChild(vcUnitCard(g, true)));
      body.appendChild(list);
    }
    if (!res.length) { if (!topics.length && !units.length) body.appendChild(lsEl('div', 'empty-state', vc.fFav && !vcFav.size ? 'Bạn chưa có từ yêu thích. Bấm ☆ bên cạnh một từ để lưu.' : 'Không tìm thấy từ phù hợp.')); return; }
    if (!q && res.length) {
      const qa = lsEl('div', 'vc-actions vw-f-acts');
      const a1 = lsEl('button', 'btn-ghost', '🃏 Học bằng thẻ'); a1.addEventListener('click', () => vcOpenUnit({ mix: true, icon: '🔎', vi: 'Từ đã lọc', en: `${Math.min(30, res.length)} từ`, items: lsShuffle(res).slice(0, 30) }, 'cards'));
      const a2 = lsEl('button', 'btn-ghost', '📝 Kiểm tra'); a2.addEventListener('click', () => vcOpenUnit({ mix: true, icon: '🔎', vi: 'Kiểm tra từ đã lọc', en: `${Math.min(10, res.length)} câu`, items: res.length >= 8 ? res : VC_ALL, quick: Math.min(10, res.length) }, 'quiz'));
      qa.appendChild(a1); qa.appendChild(a2); body.appendChild(qa);
    }
    body.appendChild(lsEl('div', 'vc-count', `${res.length.toLocaleString('vi-VN')} từ` + (q.length >= 4 ? ' (tìm cả trong câu ví dụ)' : '') + (vcAnyF() ? ' · đang lọc' : '')));
    const card = lsEl('div', 'tense-card vc-card');
    let shownN = 80;
    res.slice(0, shownN).forEach(it => card.appendChild(vcRow(it, true)));
    body.appendChild(card);
    if (res.length > shownN) {
      const more = lsEl('button', 'btn-ghost vc-pos-more', `Xem thêm (còn ${res.length - shownN} từ)`);
      more.addEventListener('click', () => {
        res.slice(shownN, shownN + 80).forEach(it => card.appendChild(vcRow(it, true))); shownN += 80;
        if (res.length > shownN) more.textContent = `Xem thêm (còn ${res.length - shownN} từ)`; else more.remove();
      });
      body.appendChild(more);
    }
    return;
  }
  if (vc.rev) return vrRender(body);
  if (vc.pos) return vcRenderPos(body);
  // bộ lọc chủ đề: theo nhóm và theo tiến độ
  const stOf = t => { const got = vcCount(t.items); return got === 0 ? 'new' : got >= t.items.length ? 'done' : 'doing'; };
  const ORG = vc.org === 'goal' ? VC_GOALS.map(([id, l, ids]) => [id, l, t => ids.includes(t.id)]) : VC_CATS.map(([id, l]) => [id, l, t => t.cat === id]);
  if (vc.cat !== 'all' && !ORG.some(o => o[0] === vc.cat)) vc.cat = 'all';
  const box = lsEl('div', 'tense-card vc-tfilter');
  const row0 = lsEl('div', 'colloc-chips vw-org');
  [['cat', '📂 By category'], ['goal', '🎯 By goal']].forEach(([k, l]) => {
    const c = lsEl('button', 'colloc-chip' + (vc.org === k ? ' active' : ''), l);
    c.addEventListener('click', () => { vc.org = k; vc.cat = 'all'; try { localStorage.setItem('hoc-tieng-anh-vocab-org', k); } catch (e) {} vcRenderHomeBody(); });
    row0.appendChild(c);
  });
  box.appendChild(row0);
  const row1 = lsEl('div', 'colloc-chips vc-tf-cats');
  [['all', 'Tất cả chủ đề', () => true], ...ORG].forEach(([cid, label, fn]) => {
    const n = VOCAB_TOPICS.filter(fn).length;
    const c = lsEl('button', 'colloc-chip' + (vc.cat === cid ? ' active' : ''), `${label} · ${n}`);
    c.setAttribute('aria-pressed', vc.cat === cid ? 'true' : 'false');
    c.addEventListener('click', () => { vc.cat = cid; vcRenderHomeBody(); });
    row1.appendChild(c);
  });
  box.appendChild(row1);
  const row2 = lsEl('div', 'colloc-chips vc-tf-st');
  [['all', 'Mọi tiến độ'], ['new', 'Chưa học'], ['doing', 'Đang học'], ['done', 'Đã thuộc hết']].forEach(([k, label]) => {
    const pool = VOCAB_TOPICS.filter(t => vc.cat === 'all' || (ORG.find(o => o[0] === vc.cat) || [0, 0, () => true])[2](t));
    const n = k === 'all' ? pool.length : pool.filter(t => stOf(t) === k).length;
    const c = lsEl('button', 'colloc-chip' + (vc.tst === k ? ' active' : ''), `${label} · ${n}`);
    c.setAttribute('aria-pressed', vc.tst === k ? 'true' : 'false');
    c.addEventListener('click', () => { vc.tst = k; vcRenderHomeBody(); });
    row2.appendChild(c);
  });
  box.appendChild(row2);
  if (vc.cat !== 'all' || vc.tst !== 'all') {
    const rs = lsEl('button', 'ls-slow vc-tf-reset', '✕ Bỏ lọc');
    rs.addEventListener('click', () => { vc.cat = 'all'; vc.tst = 'all'; vcRenderHomeBody(); });
    box.appendChild(rs);
  }
  body.appendChild(box);
  let shown = 0;
  ORG.forEach(([cid, label, fn]) => {
    if (vc.cat !== 'all' && vc.cat !== cid) return;
    const ts = VOCAB_TOPICS.filter(t => fn(t) && (vc.tst === 'all' || stOf(t) === vc.tst));
    if (!ts.length) return;
    shown += ts.length;
    body.appendChild(lsEl('div', 'tense-group-title', label));
    const grid = lsEl('div', 'vc-grid');
    ts.forEach(t => grid.appendChild(vcTopicCard(t)));
    body.appendChild(grid);
  });
  if (!shown) body.appendChild(lsEl('div', 'empty-state', vc.tst === 'done' ? 'Chưa có chủ đề nào thuộc hết. Cố lên nhé!' : vc.tst === 'doing' ? 'Chưa có chủ đề nào đang học. Chọn một chủ đề để bắt đầu.' : 'Không có chủ đề phù hợp.'));
}

/* ---------- danh sách theo loại từ (động từ, tính từ, ...) ---------- */
function vcRenderPos(body) {
  const label = (VC_POS_TABS.find(x => x[0] === vc.pos) || [, ''])[1];
  const all = VC_ALL.filter(vcPosOk);
  const items = (vc.posLv ? all.filter(it => it.lv === vc.posLv) : all).slice().sort((a, b) => a.lv - b.lv);
  const head = lsEl('div', 'tense-card vc-pos-head');
  const top = lsEl('div', 'vc-prog-top');
  const nums = lsEl('div');
  const n = lsEl('div', 'vc-prog-n');
  n.appendChild(lsEl('b', null, label));
  nums.appendChild(n);
  const got = vcCount(items);
  nums.appendChild(lsEl('div', 'vc-prog-l', `${items.length.toLocaleString('vi-VN')} từ${vc.posLv ? ' cấp ' + vcLvCode(vc.posLv) : ''} · đã thuộc ${got}`));
  top.appendChild(nums);
  head.appendChild(top);
  head.appendChild(vcBar(items.length ? got / items.length : 0));
  const lvs = lsEl('div', 'colloc-chips vc-pos-lv');
  [[0, 'Tất cả', all.length], ...VC_LEVELS.map(L => [L.n, L.code, all.filter(it => it.lv === L.n).length])].forEach(([k, txt, cnt]) => {
    if (k && !cnt) return;
    const c = lsEl('button', 'colloc-chip' + (vc.posLv === k ? ' active' : ''), `${txt} · ${cnt}`);
    c.addEventListener('click', () => { vc.posLv = k; vc.posN = 60; vcRenderHomeBody(); });
    lvs.appendChild(c);
  });
  head.appendChild(lvs);
  const acts = lsEl('div', 'vc-actions vc-pos-acts');
  const pick = () => { const todo = items.filter(it => !vcIs(it)); return lsShuffle(todo.length >= 20 ? todo : items).slice(0, 20); };
  const sub = `20 ${label.toLowerCase()} ngẫu nhiên${vc.posLv ? ' cấp ' + vcLvCode(vc.posLv) : ''}`;
  const rv = lsEl('button', 'btn-primary', '🃏 Ôn nhanh 20 từ');
  rv.addEventListener('click', () => vcOpenUnit({ mix: true, icon: '🃏', vi: 'Ôn ' + label.toLowerCase(), en: sub, items: pick() }, 'cards'));
  const qz = lsEl('button', 'btn-ghost', '📝 Kiểm tra');
  qz.addEventListener('click', () => vcOpenUnit({ mix: true, icon: '📝', vi: 'Kiểm tra ' + label.toLowerCase(), en: sub, items: pick() }, 'quiz'));
  acts.appendChild(rv); acts.appendChild(qz);
  head.appendChild(acts);
  body.appendChild(head);
  if (!items.length) { body.appendChild(lsEl('div', 'empty-state', 'Chưa có từ nào ở cấp này.')); return; }
  const card = lsEl('div', 'tense-card vc-card');
  items.slice(0, vc.posN).forEach(it => card.appendChild(vcRow(it, true)));
  body.appendChild(card);
  if (items.length > vc.posN) {
    const more = lsEl('button', 'btn-ghost vc-pos-more', `Xem thêm (còn ${(items.length - vc.posN).toLocaleString('vi-VN')} từ)`);
    more.addEventListener('click', () => {
      const from = vc.posN; vc.posN += 60;
      items.slice(from, vc.posN).forEach(it => card.appendChild(vcRow(it, true)));
      if (items.length > vc.posN) more.textContent = `Xem thêm (còn ${(items.length - vc.posN).toLocaleString('vi-VN')} từ)`; else more.remove();
    });
    body.appendChild(more);
  }
}

/* ---------- v108: bảng tiến độ học mỗi ngày ---------- */
let vwChartDays = 7;
function vcDashboard() {
  const d = vrToday(), today = vlog[d] || [0, 0, 0];
  const tracked = vrTracked(), due = tracked.filter(vrDue).length, master = tracked.filter(it => vwStatus(it) === 'master').length;
  const acc = vwAccuracy(30), streak = vwStreak(), newT = today[2], pct = Math.min(100, Math.round(newT / vgoal * 100));
  const box = lsEl('div', 'tense-card vw-dash');
  const top = lsEl('div', 'vw-d-top');
  const tt = lsEl('div');
  tt.appendChild(lsEl('div', 'vw-d-title', 'Tiến độ học từ vựng'));
  const gl = lsEl('div', 'vw-d-goal');
  gl.appendChild(document.createTextNode('Mục tiêu hôm nay: '));
  const sel = lsEl('select', 'vw-goal'); sel.setAttribute('aria-label', 'Số từ mới mỗi ngày');
  [5, 10, 15, 20, 30].forEach(n => { const o = lsEl('option', null, n + ' từ mới'); o.value = n; if (n === vgoal) o.selected = true; sel.appendChild(o); });
  sel.addEventListener('change', () => { vgoal = +sel.value; try { localStorage.setItem(VGOAL_KEY, String(vgoal)); } catch (e) {} vcRenderHome(); });
  gl.appendChild(sel);
  tt.appendChild(gl);
  top.appendChild(tt);
  const rnd = lsEl('button', 'btn-primary vc-rnd', due ? `🔁 Ôn ${Math.min(20, due)} từ đến hạn` : '🎲 Học 20 từ mới');
  rnd.addEventListener('click', () => {
    if (due) { const list = tracked.filter(vrDue).sort((a, b) => vrLeft(a) - vrLeft(b) || vrWeakScore(b) - vrWeakScore(a)).slice(0, 20); vcOpenUnit({ mix: true, rev: true, icon: '🔁', vi: 'Ôn từ đến hạn hôm nay', en: `${list.length} từ`, items: list }, 'cards'); }
    else vcStartMix();
  });
  top.appendChild(rnd);
  box.appendChild(top);
  const grid = lsEl('div', 'vw-stats');
  const stat = (big, lbl, cls) => { const s = lsEl('div', 'vw-stat' + (cls ? ' ' + cls : '')); s.appendChild(lsEl('b', null, big)); s.appendChild(lsEl('span', null, lbl)); grid.appendChild(s); };
  stat(`${newT}/${vgoal}`, 'Từ mới hôm nay', newT >= vgoal ? 'ok' : '');
  stat(String(due), 'Từ cần ôn hôm nay', due ? 'warn' : 'ok');
  stat(acc == null ? '–' : acc + '%', 'Tỷ lệ trả lời đúng (30 ngày)');
  stat(streak + ' ngày', 'Chuỗi ngày học liên tục', streak >= 3 ? 'ok' : '');
  box.appendChild(grid);
  const pg = lsEl('div', 'vw-goalbar');
  pg.appendChild(lsEl('span', null, pct >= 100 ? '🎉 Đã đạt mục tiêu hôm nay!' : `Đã hoàn thành ${pct}% mục tiêu hôm nay`));
  pg.appendChild(vcBar(pct / 100));
  box.appendChild(pg);
  // biểu đồ tuần / tháng
  const ch = lsEl('div', 'vw-chart');
  const chTop = lsEl('div', 'vw-ch-top');
  chTop.appendChild(lsEl('span', 'vw-ch-t', 'Số câu đã trả lời'));
  const tg = lsEl('div', 'colloc-chips vw-ch-tg');
  [[7, '7 ngày'], [30, '30 ngày']].forEach(([n, l]) => { const c = lsEl('button', 'colloc-chip' + (vwChartDays === n ? ' active' : ''), l); c.addEventListener('click', () => { vwChartDays = n; vcRenderHome(); }); tg.appendChild(c); });
  chTop.appendChild(tg);
  ch.appendChild(chTop);
  const bars = lsEl('div', 'vw-bars' + (vwChartDays > 7 ? ' m' : ''));
  let mx = 1; for (let k = d - vwChartDays + 1; k <= d; k++) mx = Math.max(mx, (vlog[k] || [0])[0]);
  const DN = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  for (let k = d - vwChartDays + 1; k <= d; k++) {
    const r = vlog[k] || [0, 0, 0], col = lsEl('div', 'vw-bar');
    const dt = new Date(k * 86400000);
    col.title = `${dt.getUTCDate()}/${dt.getUTCMonth() + 1}: ${r[0]} câu, đúng ${r[1]}, ${r[2]} từ mới`;
    const stack = lsEl('div', 'vw-bar-s'); stack.style.height = Math.round(r[0] / mx * 100) + '%';
    const ok = lsEl('div', 'vw-bar-ok'); ok.style.height = (r[0] ? Math.round(r[1] / r[0] * 100) : 0) + '%';
    stack.appendChild(ok); col.appendChild(stack);
    col.appendChild(lsEl('span', 'vw-bar-l', vwChartDays > 7 ? (dt.getUTCDate() % 5 === 0 || k === d ? String(dt.getUTCDate()) : '') : DN[dt.getUTCDay()]));
    bars.appendChild(col);
  }
  ch.appendChild(bars);
  const lg = lsEl('div', 'vw-legend'); lg.innerHTML = '<span class="vw-lg ok"></span>trả lời đúng <span class="vw-lg"></span>trả lời sai';
  ch.appendChild(lg);
  box.appendChild(ch);
  const foot = lsEl('div', 'vw-d-foot');
  foot.appendChild(lsEl('span', null, `✓ Tự đánh dấu đã thuộc: ${vcCount(VC_ALL).toLocaleString('vi-VN')}`));
  foot.appendChild(lsEl('span', null, `🟢 Thành thạo (qua kiểm tra): ${master.toLocaleString('vi-VN')}`));
  foot.appendChild(lsEl('span', null, `${VC_ALL.length.toLocaleString('vi-VN')} từ · ${VOCAB_TOPICS.length} chủ đề`));
  box.appendChild(foot);
  return box;
}

/* ---------- Ôn tập: mọi từ đã bắt đầu học ---------- */
function vrSpeakCard(body) {
  const keys = Object.keys(vspHist).filter(k => !/\|ex$/.test(k) && vspHist[k].length);
  if (!keys.length) return;
  const map = {}; VC_ALL.forEach(it => { map[vspK(it, 'w')] = it; });
  const rows = keys.map(k => ({ it: map[k], h: vspHist[k] })).filter(r => r.it).map(r => ({ ...r, last: r.h[r.h.length - 1][1], best: Math.max(...r.h.map(x => x[1])) }))
    .sort((a, b) => a.last - b.last || b.h.length - a.h.length);
  if (!rows.length) return;
  const card = lsEl('div', 'tense-card vr-speak');
  const hh = lsEl('div', 'vr-weak-h');
  hh.appendChild(lsEl('b', null, '🎙️ Lịch sử luyện phát âm'));
  const weak = rows.filter(r => r.last < 90).slice(0, 10).map(r => r.it);
  if (weak.length) { const b = lsEl('button', 'ls-slow', `Luyện lại ${weak.length} từ chưa khớp`); b.addEventListener('click', () => vcOpenUnit({ mix: true, rev: true, icon: '🎙️', vi: 'Luyện phát âm từ chưa khớp', en: `${weak.length} từ`, items: weak }, 'speak')); hh.appendChild(b); }
  card.appendChild(hh);
  const tb = lsEl('table', 'vw-table vr-sp-t');
  const th = lsEl('tr'); ['Từ', 'Gần nhất', 'Cao nhất', 'Lần luyện'].forEach(x => th.appendChild(lsEl('th', null, x))); tb.appendChild(th);
  rows.slice(0, 12).forEach(r => {
    const tr = lsEl('tr');
    const td = lsEl('td'); td.appendChild(lsEl('b', null, r.it.w)); td.appendChild(vcPlayBtn('▶', 'Nghe mẫu', r.it.w)); tr.appendChild(td);
    tr.appendChild(lsEl('td', 'vsp-c ' + vspCls(r.last), r.last + '%'));
    tr.appendChild(lsEl('td', null, r.best + '%'));
    tr.appendChild(lsEl('td', null, String(r.h.length)));
    tb.appendChild(tr);
  });
  card.appendChild(tb);
  card.appendChild(lsEl('div', 'vw-dt-note', 'Điểm độ khớp là ước lượng từ nhận dạng giọng nói của trình duyệt. Từ có điểm gần nhất thấp được xếp lên đầu.'));
  body.appendChild(card);
}
function vrRender(body) {
  const all = vrTracked(), td = vrToday();
  const due = all.filter(vrDue), doneT = all.filter(it => srs[vcK(it)].t === td && !vrDue(it));
  const forget = all.filter(it => vwStatus(it) === 'weak'), master = all.filter(it => vwStatus(it) === 'master');
  const learning = all.filter(it => vwStatus(it) === 'learning');
  const head = lsEl('div', 'tense-card vc-pos-head vr-head');
  const top = lsEl('div', 'vc-prog-top');
  const nums = lsEl('div');
  const n = lsEl('div', 'vc-prog-n'); n.appendChild(lsEl('b', null, '📚 Ôn tập')); nums.appendChild(n);
  nums.appendChild(lsEl('div', 'vc-prog-l', all.length ? `Đang theo dõi ${all.length.toLocaleString('vi-VN')} từ bạn đã bắt đầu học` : 'Chưa có từ nào'));
  top.appendChild(nums); head.appendChild(top);
  const grid = lsEl('div', 'vw-stats');
  [[due.length, 'Đến hạn hôm nay', due.length ? 'warn' : 'ok'], [doneT.length, 'Đã ôn xong hôm nay', 'ok'], [forget.length, 'Còn quên', forget.length ? 'bad' : ''], [master.length, 'Nhớ lâu (thành thạo)', 'ok']]
    .forEach(([v, l, c]) => { const s = lsEl('div', 'vw-stat ' + c); s.appendChild(lsEl('b', null, String(v))); s.appendChild(lsEl('span', null, l)); grid.appendChild(s); });
  head.appendChild(grid);
  head.appendChild(lsEl('div', 'vr-how', 'Mọi từ bạn đã xem, lật thẻ hoặc trả lời đều được theo dõi. Quên thì ôn lại từ ngày mai; nhớ nhưng chậm thì ôn sớm; nhớ đúng thì giãn lịch 1 → 2 → 4 → 7 → 15 → 30 → 60 ngày; nhớ dễ thì giãn xa hơn. Thành thạo khi nhớ đúng ở ít nhất 4 mức ôn và qua 3 ngày khác nhau.'));
  if (!all.length) {
    body.appendChild(head);
    body.appendChild(lsEl('div', 'empty-state', 'Mở một chủ đề rồi học bằng thẻ nhớ hoặc làm bài kiểm tra. Các từ bạn đã gặp sẽ hiện ở đây kèm lịch ôn.'));
    vrSpeakCard(body);
    return;
  }
  const order = arr => arr.slice().sort((a, b) => vrLeft(a) - vrLeft(b) || vrWeakScore(b) - vrWeakScore(a));
  const pick = () => { const d = order(due); return d.length ? d.slice(0, 20) : order(forget.length ? forget : all).slice(0, 20); };
  const sub = due.length ? `${Math.min(20, due.length)} từ đến hạn ôn` : forget.length ? 'Những từ bạn còn quên' : '20 từ cần ôn sớm nhất';
  const acts = lsEl('div', 'vc-actions vc-pos-acts');
  const rv = lsEl('button', 'btn-primary', due.length ? `🃏 Ôn ${Math.min(20, due.length)} từ đến hạn` : '🃏 Ôn thêm');
  rv.addEventListener('click', () => vcOpenUnit({ mix: true, rev: true, icon: '📚', vi: 'Ôn tập', en: sub, items: pick() }, 'cards'));
  const qz = lsEl('button', 'btn-ghost', '📝 Kiểm tra');
  qz.addEventListener('click', () => vcOpenUnit({ mix: true, rev: true, icon: '📝', vi: 'Kiểm tra ôn tập', en: sub, items: pick() }, 'quiz'));
  const wr = lsEl('button', 'btn-ghost', '✍️ Viết từ');
  wr.addEventListener('click', () => vcOpenUnit({ mix: true, rev: true, icon: '✍️', vi: 'Viết lại từ cần ôn', en: sub, items: pick() }, 'write'));
  acts.appendChild(rv); acts.appendChild(qz); acts.appendChild(wr);
  head.appendChild(acts);
  body.appendChild(head);
  // từ yếu nhất
  const weakest = all.filter(it => vrWeakScore(it) > 0).sort((a, b) => vrWeakScore(b) - vrWeakScore(a)).slice(0, 8);
  if (weakest.length) {
    const wb = lsEl('div', 'tense-card vr-weak');
    const wh = lsEl('div', 'vr-weak-h');
    wh.appendChild(lsEl('b', null, '🎯 Từ yếu nhất'));
    const wbtn = lsEl('button', 'ls-slow', 'Luyện các từ này');
    wbtn.addEventListener('click', () => vcOpenUnit({ mix: true, rev: true, icon: '🎯', vi: 'Luyện từ yếu nhất', en: `${weakest.length} từ hay quên`, items: weakest }, 'quiz'));
    wh.appendChild(wbtn); wb.appendChild(wh);
    const ch = lsEl('div', 'vr-weak-l');
    weakest.forEach(it => { const r = srs[vcK(it)]; const c = lsEl('button', 'vr-weak-c'); c.appendChild(lsEl('b', null, it.w)); c.appendChild(lsEl('span', null, `${it.vi} · sai ${r.w}, đúng ${r.n}`)); c.addEventListener('click', () => speak(it.w, 0.8)); ch.appendChild(c); });
    wb.appendChild(ch);
    body.appendChild(wb);
  }
  vrSpeakCard(body);
  const F = [['due', 'Đến hạn hôm nay', due], ['weak', 'Cần ôn', forget], ['learning', 'Đang học', learning], ['master', 'Thành thạo', master], ['all', 'Tất cả', all]];
  if (!F.some(x => x[0] === vc.revF)) vc.revF = 'due';
  const chips = lsEl('div', 'colloc-chips vr-filter');
  F.forEach(([k, label, arr]) => {
    const c = lsEl('button', 'colloc-chip' + (vc.revF === k ? ' active' : ''), `${label} · ${arr.length.toLocaleString('vi-VN')}`);
    c.addEventListener('click', () => { vc.revF = k; vc.revN = 60; vcRenderHomeBody(); });
    chips.appendChild(c);
  });
  body.appendChild(chips);
  let items = F.find(x => x[0] === vc.revF)[2];
  items = vc.revF === 'weak' ? items.slice().sort((a, b) => vrWeakScore(b) - vrWeakScore(a)) : order(items);
  if (!items.length) {
    body.appendChild(lsEl('div', 'empty-state', vc.revF === 'due' ? '🎉 Hôm nay bạn đã ôn xong. Hẹn mai nhé!' : vc.revF === 'master' ? 'Chưa có từ nào thành thạo. Một từ được tính thành thạo khi bạn nhớ đúng nó qua nhiều lần ôn, ở ít nhất 3 ngày khác nhau.' : vc.revF === 'weak' ? 'Không có từ nào bạn đang quên. Tuyệt!' : 'Chưa có từ nào.'));
    return;
  }
  const card = lsEl('div', 'tense-card vc-card');
  const add = it => {
    const row = vcRow(it, true);
    const left = vrLeft(it), r = srs[vcK(it)];
    const tag = lsEl('span', 'vr-tag ' + (left <= 0 ? 'due' : ''), left <= 0 ? '⏰ cần ôn hôm nay' : left === 1 ? 'ôn lại ngày mai' : `ôn lại sau ${left} ngày`);
    tag.title = `Mức nhớ ${r.s}/7 · đúng ${r.n} lần · sai ${r.w} lần`;
    row.querySelector('.vc-line').appendChild(tag);
    card.appendChild(row);
  };
  items.slice(0, vc.revN).forEach(add);
  body.appendChild(card);
  if (items.length > vc.revN) {
    const more = lsEl('button', 'btn-ghost vc-pos-more', `Xem thêm (còn ${(items.length - vc.revN).toLocaleString('vi-VN')} từ)`);
    more.addEventListener('click', () => {
      const from = vc.revN; vc.revN += 60;
      items.slice(from, vc.revN).forEach(add);
      if (items.length > vc.revN) more.textContent = `Xem thêm (còn ${(items.length - vc.revN).toLocaleString('vi-VN')} từ)`; else more.remove();
    });
    body.appendChild(more);
  }
}


function vcStartMix() {
  const todo = VC_ALL.filter(it => !vcIs(it));
  const items = lsShuffle(todo.length >= 20 ? todo : VC_ALL).slice(0, 20);
  vcOpenUnit({ mix: true, icon: '🎲', vi: 'Ôn nhanh ngẫu nhiên', en: '20 từ từ nhiều chủ đề', items }, 'cards');
}

/* ---------- topic page: list of lessons ---------- */
function vcOpenTopic(t) {
  vc.topic = t;
  vcRenderTopicPage();
  grScrollTop();
}

function vcHead(icon, title, sub) {
  const head = lsEl('div', 'vc-head');
  head.appendChild(lsEl('div', 'vc-head-icon', icon));
  const hm = lsEl('div', 'vc-head-meta');
  hm.appendChild(lsEl('div', 'vc-head-vi', title));
  hm.appendChild(lsEl('div', 'vc-head-en', sub));
  const pr = lsEl('div', 'vc-head-prog'); pr.id = 'vc-head-prog';
  hm.appendChild(pr);
  head.appendChild(hm);
  return head;
}

function vcUnitCard(g, showTopic) {
  const n = g.items.length, got = vcCount(g.items);
  const b = lsEl('button', 'vc-unit' + (got === n ? ' done' : ''));
  b.appendChild(lsEl('span', 'vc-unit-num', got === n ? '✓' : String(g.index + 1)));
  const info = lsEl('span', 'vc-unit-info');
  info.appendChild(lsEl('span', 'vc-unit-vi', g.vi));
  info.appendChild(lsEl('span', 'vc-unit-en', showTopic ? `${g.topic.icon} ${g.topic.vi} · ${g.level ? g.level.code : g.en}` : g.en));
  info.appendChild(lsEl('span', 'vc-tmeta', got ? `${got}/${n} đã thuộc` : `${n} từ`));
  info.appendChild(vcBar(got / n));
  b.appendChild(info);
  b.appendChild(lsEl('span', 'vc-unit-go', '›'));
  b.addEventListener('click', () => { vc.topic = g.topic; vcOpenUnit(g); });
  return b;
}

function vcRenderTopicPage() {
  const t = vc.topic;
  vc.view = 'topic'; vc.unit = null;
  vcRoot.innerHTML = '';
  const back = lsEl('button', 'gr-back', '← Tất cả chủ đề');
  back.addEventListener('click', () => { vcRenderHome(); grScrollTop(); });
  vcRoot.appendChild(back);
  vcRoot.appendChild(vcHead(t.icon, t.vi, `${t.en} · ${t.items.length} từ · ${t.lessonCount} bài`));
  const acts = lsEl('div', 'vc-actions');
  const rv = lsEl('button', 'btn-primary', '🃏 Ôn nhanh 20 từ');
  rv.addEventListener('click', () => {
    const todo = t.items.filter(it => !vcIs(it));
    vcOpenUnit({ review: true, topic: t, icon: t.icon, vi: 'Ôn nhanh: ' + t.vi, en: '20 từ ngẫu nhiên trong chủ đề',
                 items: lsShuffle(todo.length >= 20 ? todo : t.items).slice(0, 20) }, 'cards');
  });
  acts.appendChild(rv);
  vcRoot.appendChild(acts);
  let cur = t.levels.find(x => x.level === vc.lv[t.id]);
  if (!cur) cur = t.levels.find(x => vcCount(x.items) < x.items.length) || t.levels[0];
  vc.lv[t.id] = cur.level;
  // v108: 3 chế độ kiểm tra
  const tc = lsEl('div', 'tense-card vw-tests');
  tc.appendChild(lsEl('div', 'vw-tests-h', '📝 Kiểm tra'));
  const lesson = cur.lessons.find(g => vcCount(g.items) < g.items.length) || cur.lessons[0];
  const rounds = Math.ceil(t.items.length / 20);
  [['⚡', 'Kiểm tra nhanh', '10 câu ngẫu nhiên, hợp để làm mỗi ngày', () => vcOpenUnit({ review: true, topic: t, quick: 10, icon: t.icon, vi: 'Kiểm tra nhanh: ' + t.vi, en: '10 câu ngẫu nhiên trong chủ đề', items: t.items }, 'quiz')],
   ['📘', 'Kiểm tra theo bài', `Tất cả ${lesson.items.length} từ của bài đang học (${cur.level.code}): ${lesson.vi}`, () => vcOpenUnit(lesson, 'quiz')],
   ['📋', 'Kiểm tra toàn bộ chủ đề', `${t.items.length} từ, chia ${rounds} lượt, mỗi lượt 20 câu`, () => vcOpenUnit({ review: true, topic: t, icon: t.icon, vi: 'Kiểm tra toàn bộ: ' + t.vi, en: `${t.items.length} từ · ${rounds} lượt`, items: t.items }, 'quiz')]]
    .forEach(([ic, ti, de, fn]) => {
      const b = lsEl('button', 'vw-test');
      b.appendChild(lsEl('span', 'vw-test-ic', ic));
      const tx = lsEl('span', 'vw-test-t'); tx.appendChild(lsEl('b', null, ti)); tx.appendChild(lsEl('span', null, de)); b.appendChild(tx);
      b.addEventListener('click', fn);
      tc.appendChild(b);
    });
  vcRoot.appendChild(tc);
  vcRoot.appendChild(lsEl('div', 'tense-group-title', 'Chọn cấp độ'));
  const chips = lsEl('div', 'vc-levels');
  t.levels.forEach(x => {
    const got = vcCount(x.items), n = x.items.length;
    const b = lsEl('button', 'vc-level vc-lvl' + x.level.n + (x === cur ? ' active' : '') + (got === n ? ' done' : ''));
    b.appendChild(lsEl('span', 'vc-level-code', x.level.code));
    b.appendChild(lsEl('span', 'vc-level-vi', x.level.vi));
    b.appendChild(lsEl('span', 'vc-level-n', got === n ? `✓ ${n} từ` : got ? `${got}/${n}` : `${n} từ`));
    b.setAttribute('aria-pressed', x === cur ? 'true' : 'false');
    b.addEventListener('click', () => { vc.lv[t.id] = x.level; vcRenderTopicPage(); });
    chips.appendChild(b);
  });
  vcRoot.appendChild(chips);
  const lvHead = lsEl('div', 'vc-lvhead');
  lvHead.appendChild(lsEl('div', 'tense-group-title', `${cur.level.code} · ${cur.level.vi} · ${cur.lessons.length} bài`));
  const lvRv = lsEl('button', 'btn-ghost vc-lvrv', '🃏 Ôn cả cấp ' + cur.level.code);
  lvRv.addEventListener('click', () => {
    const todo = cur.items.filter(it => !vcIs(it));
    vcOpenUnit({ review: true, topic: t, icon: t.icon, vi: `Ôn ${cur.level.code}: ${t.vi}`, en: `20 từ ngẫu nhiên cấp ${cur.level.code}`,
                 items: lsShuffle(todo.length >= 20 ? todo : cur.items).slice(0, 20) }, 'cards');
  });
  lvHead.appendChild(lvRv);
  vcRoot.appendChild(lvHead);
  const list = lsEl('div', 'vc-units');
  cur.lessons.forEach((g, i) => {
    list.appendChild(vcUnitCard(g));
    const from = Math.floor(i / 3) * 3;
    if (((i + 1) % 3 === 0 || i === cur.lessons.length - 1) && i > from) {
      const grp = cur.lessons.slice(from, i + 1), items = grp.flatMap(x => x.items);
      const mastered = items.filter(it => vwStatus(it) === 'master').length;
      const b = lsEl('button', 'vw-grpq');
      b.appendChild(lsEl('span', 'vw-grpq-ic', '🏁'));
      const tx = lsEl('span', 'vw-test-t');
      tx.appendChild(lsEl('b', null, `Kiểm tra tổng hợp bài ${from + 1}–${i + 1}`));
      tx.appendChild(lsEl('span', null, `${items.length} từ của ${grp.length} bài vừa học` + (mastered ? ` · thành thạo ${mastered}` : '')));
      b.appendChild(tx);
      b.addEventListener('click', () => vcOpenUnit({ review: true, topic: t, icon: '🏁', vi: `Kiểm tra tổng hợp bài ${from + 1}–${i + 1}`, en: `${cur.level.code} · ${items.length} từ`, items }, 'quiz'));
      list.appendChild(b);
    }
  });
  vcRoot.appendChild(lsEl('p', 'vw-cefr', 'Cấp độ A1 → C1 của từng từ là ước lượng của app dựa trên độ phổ biến và độ khó, không phải phân loại CEFR chính thức.'));
  vcRoot.appendChild(list);
  vcUpdateProg();
}

/* ---------- lesson page: list / cards / quiz ---------- */
function vcOpenUnit(u, mode) {
  vc.unit = u; vc.mode = mode || 'list'; vc.filter = 'all';
  if (u.topic) vc.topic = u.topic;
  vcRenderUnit();
  grScrollTop();
}

function vcNextUnit() {
  const u = vc.unit;
  if (!u || u.mix || u.review || !u.topic) return null;
  if (u.siblings) {
    if (u.siblings[u.index + 1]) return u.siblings[u.index + 1];
    const li = u.topic.levels.findIndex(x => x.lessons === u.siblings);
    const nl = u.topic.levels[li + 1];
    return nl ? nl.lessons[0] : null;
  }
  return u.topic.groups[u.index + 1] || null;
}

function vcRenderUnit() {
  const u = vc.unit;
  vc.view = 'unit';
  vcRoot.innerHTML = '';
  const back = lsEl('button', 'gr-back', u.rev ? '← Ôn tập' : u.mix ? '← Tất cả chủ đề' : '← ' + u.topic.vi);
  back.addEventListener('click', () => { if (u.mix) vcRenderHome(); else vcRenderTopicPage(); grScrollTop(); });
  vcRoot.appendChild(back);
  if (u.level && u.topic) vc.lv[u.topic.id] = u.level;
  const sub = (u.mix || u.review) ? u.en : u.siblings
    ? `${u.level.code} ${u.level.vi} · Bài ${u.index + 1}/${u.siblings.length} · ${u.items.length} từ`
    : `Bài ${u.index + 1}/${u.topic.groups.length} · ${u.en}`;
  vcRoot.appendChild(vcHead(u.mix ? u.icon : u.topic.icon, u.vi, sub));
  if (u.siblings) vcRoot.appendChild(lsEl('div', 'vw-goal-line', `🎯 Mục tiêu bài: nhớ nghĩa và dùng được ${u.items.length} từ về “${u.vi.replace(/ \(\d+\)$/, '')}”. Học bằng thẻ nhớ, rồi làm bài kiểm tra; cứ 3 bài có một bài kiểm tra tổng hợp.`));
  const modes = lsEl('div', 'ls-modes vc-modes');
  [['list', 'Danh sách'], ['cards', 'Thẻ nhớ'], ['quiz', 'Kiểm tra'], ['write', 'Viết từ'], ['speak', '🎙️ Độ khớp phát âm']].forEach(([m, label]) => {
    const b = lsEl('button', 'ls-mode' + (vc.mode === m ? ' active' : '') + (m === 'speak' ? ' vsp-mode' : ''), label);
    b.dataset.vcMode = m;
    b.addEventListener('click', () => { vspStop(); vc.mode = m; vcRenderUnit(); });
    modes.appendChild(b);
  });
  vcRoot.appendChild(modes);
  const body = lsEl('div'); body.id = 'vc-body';
  vcRoot.appendChild(body);
  vcUpdateProg();
  if (vc.mode === 'list') vcRenderList();
  else if (vc.mode === 'cards') vcStartCards();
  else if (vc.mode === 'write') wrStart(vcWriteCtx());
  else if (vc.mode === 'speak') vcStartSpeak();
  else vcStartQuiz();
}

function vcUpdateProg() {
  const el = document.getElementById('vc-head-prog');
  const src = vc.view === 'unit' ? vc.unit : vc.view === 'topic' ? vc.topic : null;
  if (!el || !src) return;
  const n = src.items.length, got = vcCount(src.items);
  el.innerHTML = '';
  el.appendChild(lsEl('span', null, `Đã thuộc ${got}/${n}`));
  el.appendChild(vcBar(got / n));
}

function vcNextUnitBtn(box) {
  const nx = vcNextUnit();
  if (!nx) return;
  const b = lsEl('button', 'btn-primary vc-next-unit', nx.level && nx.level !== (vc.unit && vc.unit.level) ? `Sang cấp ${nx.level.code}: ${nx.vi} →` : `Bài tiếp: ${nx.vi} →`);
  b.addEventListener('click', () => vcOpenUnit(nx));
  box.appendChild(b);
}

function vcRenderList() {
  const body = document.getElementById('vc-body');
  body.innerHTML = '';
  const bar = lsEl('div', 'vc-list-bar');
  const chips = lsEl('div', 'colloc-chips');
  [['all', 'Tất cả'], ['todo', 'Chưa thuộc'], ['done', 'Đã thuộc']].forEach(([f, label]) => {
    const c = lsEl('button', 'colloc-chip' + (vc.filter === f ? ' active' : ''), label);
    c.addEventListener('click', () => { vc.filter = f; vcRenderList(); });
    chips.appendChild(c);
  });
  bar.appendChild(chips);
  body.appendChild(bar);
  const items = vc.unit.items.filter(it => vc.filter === 'all' || (vc.filter === 'done') === vcIs(it));
  if (!items.length) {
    body.appendChild(lsEl('div', 'empty-state', vc.filter === 'done'
      ? 'Chưa có từ nào được đánh dấu. Bấm ✓ bên cạnh từ bạn đã thuộc.'
      : 'Tuyệt vời! Bạn đã thuộc hết các từ trong bài này.'));
  } else {
    const card = lsEl('div', 'tense-card vc-card');
    items.forEach(it => card.appendChild(vcRow(it, !!(vc.unit.mix || vc.unit.review))));
    body.appendChild(card);
  }
  vcNextUnitBtn(body);
}

/* ---------- v108: thẻ nhớ hai mặt thực sự ---------- */
const VFRONT_KEY = 'hoc-tieng-anh-vocab-front';
try { if (localStorage.getItem(VFRONT_KEY) === 'vi') vcFront = 'vi'; } catch (e) {}
function vcStartCards() {
  const items = vc.unit.items;
  const R = !!vc.unit.rev;
  const first = R ? items.slice() : [...lsShuffle(items.filter(it => !vcIs(it))), ...lsShuffle(items.filter(vcIs))];
  vc.cards = { deck: first, idx: 0, flipped: false, newly: 0, again: new Set(), res: [0, 0, 0, 0] };
  vcRenderCard();
  const it = vc.cards.deck[0];
  if (it && vcFront === 'en') speak(it.w, 0.8);
}
function vcFlipCard() {
  const C = vc.cards; if (!C || C.flipped) return;
  C.flipped = true;
  const el = document.querySelector('#vc-body .vc-flip'); if (el) el.classList.add('flipped');
  vcCardButtons();
  const it = C.deck[C.idx];
  if (vcFront === 'vi') speak(it.w, 0.8);
}
function vcCardButtons() {
  const C = vc.cards, it = C.deck[C.idx];
  const btns = document.querySelector('#vc-body .vc-card-btns'); if (!btns) return;
  btns.innerHTML = '';
  const audio = document.querySelector('#vc-body .vc-audio'); if (audio) audio.hidden = vcFront === 'vi' && !C.flipped;
  if (!C.flipped) {
    const fl = lsEl('button', 'btn-primary vc-flip-btn', '↻ Lật thẻ xem đáp án');
    fl.addEventListener('click', vcFlipCard);
    btns.appendChild(fl);
    btns.classList.remove('graded');
    return;
  }
  btns.classList.add('graded');
  const R = !!vc.unit.rev;
  [[0, '↺ Chưa nhớ', 'btn-ghost vc-g0'], [1, '🐢 Nhớ chậm', 'btn-ghost vc-g1'], [2, '✓ Đã nhớ', 'btn-primary vc-g2'], [3, '⚡ Dễ', 'btn-ghost vc-g3']].forEach(([g, label, cls]) => {
    const b = lsEl('button', cls, label);
    b.title = ['Quên: ôn lại từ đầu, gặp lại cuối lượt này', 'Nhớ nhưng còn chậm: ôn lại sớm', 'Nhớ chính xác: giãn lịch ôn', 'Nhớ dễ dàng: giãn lịch ôn nhiều hơn'][g];
    b.addEventListener('click', () => {
      C.res[g]++;
      srsGrade(it, g);
      if (g === 0) {
        if (!R && vcIs(it)) vcSet(it, false);
        if (!C.again.has(it)) { C.again.add(it); C.deck.push(it); }   // gặp lại ở cuối lượt
      } else if (g >= 2 && !vcIs(it)) { vcSet(it, true); C.newly++; }
      vcNextCard();
    });
    btns.appendChild(b);
  });
}
function vcRenderCard() {
  const body = document.getElementById('vc-body');
  body.innerHTML = '';
  const C = vc.cards;
  if (C.idx >= C.deck.length) {
    const box = lsEl('div', 'tense-card vc-done');
    box.appendChild(lsEl('div', 'vc-done-big', '🎉'));
    box.appendChild(lsEl('div', 'ls-verdict', `Xong ${C.deck.length} lượt thẻ!`));
    const tb = lsEl('div', 'vw-res');
    [['Đã nhớ', C.res[2] + C.res[3], 'ok'], ['Nhớ chậm', C.res[1], ''], ['Chưa nhớ', C.res[0], 'bad']].forEach(([l, v, c]) => { const s = lsEl('div', 'vw-stat ' + c); s.appendChild(lsEl('b', null, String(v))); s.appendChild(lsEl('span', null, l)); tb.appendChild(s); });
    box.appendChild(tb);
    box.appendChild(lsEl('div', 'vc-done-sub', C.again.size ? `${C.again.size} từ chưa nhớ sẽ được nhắc ôn lại từ ngày mai.` : C.newly ? `Bạn vừa nhớ thêm ${C.newly} từ.` : 'Lật lại thêm vài lượt để nhớ lâu hơn nhé.'));
    const btns = lsEl('div', 'ls-sum-btns');
    if (C.again.size) {
      const ag = lsEl('button', 'btn-ghost', `🔁 Học lại ${C.again.size} từ chưa nhớ`);
      const list = [...C.again];
      ag.addEventListener('click', () => vcOpenUnit({ mix: true, rev: true, icon: '🔁', vi: 'Học lại từ chưa nhớ', en: `${list.length} từ`, items: list }, 'cards'));
      btns.appendChild(ag);
    }
    const again = lsEl('button', 'btn-ghost', 'Học lại cả lượt');
    again.addEventListener('click', vcStartCards);
    const quiz = lsEl('button', 'btn-primary', 'Làm bài kiểm tra →');
    quiz.addEventListener('click', () => { vc.mode = 'quiz'; vcRenderUnit(); });
    btns.appendChild(again); btns.appendChild(quiz);
    box.appendChild(btns);
    vcNextUnitBtn(box);
    body.appendChild(box);
    return;
  }
  const it = C.deck[C.idx];
  const top = lsEl('div', 'vc-card-top');
  top.appendChild(lsEl('span', 'ls-count', `Thẻ ${C.idx + 1} / ${C.deck.length}` + (C.again.has(it) && C.idx >= C.deck.length - C.again.size ? ' · gặp lại' : '')));
  const dir = lsEl('div', 'colloc-chips vc-dir');
  [['en', 'Anh → Việt'], ['vi', 'Việt → Anh']].forEach(([k, l]) => {
    const c = lsEl('button', 'colloc-chip' + (vcFront === k ? ' active' : ''), l);
    c.addEventListener('click', () => { if (vcFront === k) return; vcFront = k; try { localStorage.setItem(VFRONT_KEY, k); } catch (e) {} C.flipped = false; vcRenderCard(); });
    dir.appendChild(c);
  });
  top.appendChild(dir);
  body.appendChild(top);
  const st = vwStatus(it);
  const card = lsEl('div', 'vc-flip' + (C.flipped ? ' flipped' : ''));
  card.setAttribute('role', 'button'); card.tabIndex = 0;
  card.setAttribute('aria-label', C.flipped ? 'Thẻ đã lật' : 'Chạm để lật thẻ');
  const inner = lsEl('div', 'vc-flip-in');
  const front = lsEl('div', 'vc-face front');
  front.appendChild(lsEl('span', 'vc-f-badge2', 'Chưa xem đáp án'));
  if (st !== 'new') front.appendChild(lsEl('span', 'vw-st st-' + st, VW_ST[st][0]));
  if (vcFront === 'en') {
    front.appendChild(lsEl('div', 'vc-f-big', it.w));
    const ipa = lsEl('div', 'vc-f-ipa', it.ipa + ' ');
    ipa.appendChild(vcPlayBtn('▶', 'Nghe từ ' + it.w, it.w));
    front.appendChild(ipa);
    front.appendChild(lsEl('div', 'vc-f-ask', 'Bạn hãy nhớ nghĩa của từ này.'));
  } else {
    front.appendChild(lsEl('div', 'vc-f-big vc-f-vi', it.vi));
    front.appendChild(lsEl('div', 'vc-pos', VC_POS[it.pos] || it.pos));
    front.appendChild(lsEl('div', 'vc-f-ask', 'Bạn hãy nhớ từ tiếng Anh.'));
  }
  front.appendChild(lsEl('div', 'vc-f-tap', '👆 Chạm để lật thẻ'));
  const back = lsEl('div', 'vc-face back');
  back.appendChild(lsEl('span', 'vc-f-badge2 ans', 'Đáp án'));
  if (vcFront === 'en') {
    back.appendChild(lsEl('div', 'vc-f-mean big', it.vi));
    back.appendChild(lsEl('div', 'vc-f-line', `${it.w} · ${it.ipa}`));
  } else {
    back.appendChild(lsEl('div', 'vc-f-big', it.w));
    back.appendChild(lsEl('div', 'vc-f-ipa', it.ipa));
    back.appendChild(lsEl('div', 'vc-f-line', it.vi));
  }
  back.appendChild(lsEl('div', 'vc-f-pos', 'Từ loại: ' + (VC_POS[it.pos] || it.pos)));
  const ex = lsEl('div', 'vc-f-ex'); ex.innerHTML = '<span class="vc-f-exl">Ví dụ:</span> ' + vcExHtml(it); back.appendChild(ex);
  inner.appendChild(front); inner.appendChild(back);
  card.appendChild(inner);
  card.addEventListener('click', e => { if (e.target.closest('.play-mini')) return; if (!C.flipped) vcFlipCard(); else speak(it.w, 0.8); });
  card.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); if (!C.flipped) vcFlipCard(); } });
  body.appendChild(card);
  const audio = lsEl('div', 'vc-audio');
  const a1 = lsEl('button', 'ls-slow', '▶ Nghe từ');
  a1.addEventListener('click', () => speak(it.w, 0.8));
  const a2 = lsEl('button', 'ls-slow', '💬 Nghe câu ví dụ');
  a2.addEventListener('click', () => speak(it.ex, 0.85));
  audio.appendChild(a1); audio.appendChild(a2);
  body.appendChild(audio);
  body.appendChild(lsEl('div', 'vc-card-btns'));
  vcCardButtons();
}
function vcNextCard() {
  const C = vc.cards;
  C.idx++; C.flipped = false;
  vcRenderCard();
  vcUpdateProg();
  const it = C.deck[C.idx];
  if (it && vcFront === 'en') speak(it.w, 0.8);
}

/* ---------- v108: bài kiểm tra — 5 dạng câu hỏi, chia lượt, phân tích kết quả ---------- */
const VQ_TYPES = { en2vi: 'Nghĩa tiếng Việt', vi2en: 'Từ tiếng Anh', listen: 'Nghe chọn từ', ctx: 'Chọn từ theo ngữ cảnh', fill: 'Điền từ vào câu' };
function vcBlank(it) {
  const h = vcExMain(it);
  const m = /<b>(.*?)<\/b>/.exec(h);
  if (!m) return null;
  const dec = s => s.replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
  const ans = dec(m[1]);
  if (!ans.trim() || ans.split(/\s+/).length > 4) return null;
  return { sent: dec(h.replace(/<b>.*?<\/b>/, '_____')), ans };
}
function vcStartQuiz() {
  const u = vc.unit;
  let items = u.items;
  const ROUND = 20;
  if (u.quick) { items = lsShuffle(items).slice(0, u.quick); }
  if (!u.quick && items.length > 25) {
    if (!u._order) { u._order = lsShuffle(items); u._round = 0; }
    items = u._order.slice(u._round * ROUND, u._round * ROUND + ROUND);
  }
  const src = u.items.length >= 8 ? u.items : VC_ALL;
  const order = ['en2vi', 'vi2en', 'listen', 'ctx', 'fill'];
  vc.quiz = {
    qs: lsShuffle(items).map((it, i) => {
      let type = order[i % order.length];
      const bl = (type === 'ctx' || type === 'fill') ? vcBlank(it) : null;
      if ((type === 'ctx' || type === 'fill') && !bl) type = i % 2 ? 'vi2en' : 'en2vi';
      const ds = [];
      for (const x of lsShuffle(src)) {
        if (ds.length === 3) break;
        if (x === it || [it, ...ds].some(y => y.vi === x.vi || y.w === x.w)) continue;
        if (type === 'ctx' && x.pos !== it.pos && ds.length < 2 && src.some(z => z.pos === it.pos && z !== it && !ds.includes(z))) continue;
        ds.push(x);
      }
      return { it, type, bl, opts: lsShuffle([it, ...ds]), picked: null, typed: null, spoken: false };
    }),
    idx: 0, score: 0, wrong: []
  };
  vcRenderQuiz();
}
function vcQuizAnswer(q, ok) {
  const Q = vc.quiz;
  if (ok) Q.score++; else Q.wrong.push(q.it);
  try { const it = q.it, k = 'vc|' + it.w; if (ok) { if (window.mkOk) window.mkOk(k); } else if (window.mkAdd) window.mkAdd({ k, src: 'vc', cat: (typeof VC_POS !== 'undefined' && VC_POS[it.pos]) || '', mode: 'word', p: it.vi, hint: (it.ipa || '') + ' · bắt đầu bằng “' + String(it.w).charAt(0) + '”, ' + String(it.w).length + ' chữ cái', a: [it.w], wrong: q.picked && q.picked.w ? q.picked.w : (q.typed || '') }); } catch (e) {}
  srsGrade(q.it, ok ? 2 : 0);
  vcRenderQuiz();
  speak(q.it.w, 0.8);
}
function vcRenderQuiz() {
  const body = document.getElementById('vc-body');
  body.innerHTML = '';
  const Q = vc.quiz, u = vc.unit;
  if (Q.idx >= Q.qs.length) {
    const n = Q.qs.length, r = Q.score / n;
    const box = lsEl('div', 'tense-card vc-done');
    const rounds = u._order ? Math.ceil(u._order.length / 20) : 0;
    if (rounds) box.appendChild(lsEl('div', 'vw-round', `Lượt ${u._round + 1} / ${rounds}`));
    box.appendChild(lsEl('div', 'vc-done-big', `${Q.score} / ${n}`));
    box.appendChild(lsEl('div', 'ls-verdict', r >= 0.9 ? 'Xuất sắc! Bạn nắm rất chắc.' : r >= 0.6 ? 'Khá tốt! Ôn lại vài từ sai là ổn.' : 'Cần ôn thêm, luyện lại các từ sai nhé.'));
    const tb = lsEl('table', 'vw-table');
    const wrongU = [...new Set(Q.wrong)];
    [['Tổng số câu', n], ['Trả lời đúng', Q.score], ['Trả lời sai', n - Q.score], ['Tỷ lệ đúng', Math.round(r * 100) + '%'], ['Từ cần học lại', wrongU.length + ' từ']].forEach(([a, b]) => {
      const tr = lsEl('tr'); tr.appendChild(lsEl('td', null, a)); tr.appendChild(lsEl('td', null, String(b))); tb.appendChild(tr);
    });
    box.appendChild(tb);
    // theo dạng câu hỏi
    const by = {};
    Q.qs.forEach(q => { const b = by[q.type] || (by[q.type] = [0, 0]); b[1]++; if ((q.picked && q.picked === q.it) || q.typedOk) b[0]++; });
    const bt = lsEl('div', 'vw-bytype');
    Object.keys(by).forEach(k => { const [c, t] = by[k]; bt.appendChild(lsEl('span', 'vw-bt' + (c === t ? ' ok' : c / t < 0.5 ? ' bad' : ''), `${VQ_TYPES[k]}: ${c}/${t}`)); });
    box.appendChild(bt);
    if (wrongU.length) {
      box.appendChild(lsEl('div', 'vc-done-sub', 'Những từ cần học lại:'));
      const card = lsEl('div', 'vc-card vc-wrong');
      wrongU.forEach(it => card.appendChild(vcRow(it, false)));
      box.appendChild(card);
    }
    const btns = lsEl('div', 'ls-sum-btns');
    if (wrongU.length) {
      const rw = lsEl('button', 'btn-primary', `🔁 Luyện lại ${wrongU.length} từ trả lời sai`);
      rw.addEventListener('click', () => vcOpenUnit({ mix: true, rev: true, icon: '🔁', vi: 'Luyện lại từ trả lời sai', en: `${wrongU.length} từ`, items: wrongU }, 'quiz'));
      const rc = lsEl('button', 'btn-ghost', '🃏 Ôn từ sai bằng thẻ');
      rc.addEventListener('click', () => vcOpenUnit({ mix: true, rev: true, icon: '🃏', vi: 'Ôn từ trả lời sai', en: `${wrongU.length} từ`, items: wrongU }, 'cards'));
      btns.appendChild(rw); btns.appendChild(rc);
    }
    if (rounds && u._round + 1 < rounds) {
      const nx = lsEl('button', wrongU.length ? 'btn-ghost' : 'btn-primary', `Lượt tiếp (${u._round + 2}/${rounds}) →`);
      nx.addEventListener('click', () => { u._round++; vcStartQuiz(); grScrollTop(); });
      btns.appendChild(nx);
    } else {
      const again = lsEl('button', 'btn-ghost', 'Làm bài mới');
      again.addEventListener('click', () => { if (u._order) { u._order = null; } vcStartQuiz(); });
      btns.appendChild(again);
    }
    box.appendChild(btns);
    vcNextUnitBtn(box);
    body.appendChild(box);
    return;
  }
  const q = Q.qs[Q.idx], it = q.it;
  const top = lsEl('div', 'vc-card-top');
  const rounds = u._order ? Math.ceil(u._order.length / 20) : 0;
  top.appendChild(lsEl('span', 'ls-count', (rounds ? `Lượt ${u._round + 1}/${rounds} · ` : '') + `Câu ${Q.idx + 1} / ${Q.qs.length}`));
  top.appendChild(lsEl('span', 'ls-count', `Đúng: ${Q.score}`));
  body.appendChild(top);
  const pr = lsEl('div', 'tense-card vc-q');
  pr.appendChild(lsEl('div', 'vw-qtype', VQ_TYPES[q.type]));
  if (q.type === 'en2vi') {
    pr.appendChild(lsEl('div', 'vc-q-label', 'Từ này nghĩa là gì?'));
    pr.appendChild(lsEl('div', 'vc-f-big', it.w));
    const ipa = lsEl('div', 'vc-f-ipa', it.ipa + ' ');
    ipa.appendChild(vcPlayBtn('▶', 'Nghe từ', it.w));
    pr.appendChild(ipa);
  } else if (q.type === 'vi2en') {
    pr.appendChild(lsEl('div', 'vc-q-label', 'Từ tiếng Anh nào có nghĩa'));
    pr.appendChild(lsEl('div', 'vc-f-big vc-f-vi', it.vi));
    pr.appendChild(lsEl('div', 'vc-pos', VC_POS[it.pos] || it.pos));
  } else if (q.type === 'listen') {
    pr.appendChild(lsEl('div', 'vc-q-label', 'Nghe và chọn từ đúng'));
    const play = lsEl('button', 'ls-play');
    play.setAttribute('aria-label', 'Nghe từ');
    play.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>';
    play.addEventListener('click', () => speak(it.w, 0.8));
    pr.appendChild(play);
    const slow = lsEl('button', 'ls-slow', '🐢 Nghe chậm');
    slow.addEventListener('click', () => speak(it.w, 0.5));
    pr.appendChild(slow);
  } else {
    pr.appendChild(lsEl('div', 'vc-q-label', q.type === 'fill' ? 'Gõ từ còn thiếu vào chỗ trống' : 'Chọn từ phù hợp với chỗ trống'));
    pr.appendChild(lsEl('div', 'vw-sent', q.bl.sent));
    if (it.exvi && q.type === 'fill') pr.appendChild(lsEl('div', 'vw-sent-vi', it.exvi));
    if (q.type === 'ctx') pr.appendChild(lsEl('div', 'vw-sent-note', 'Đáp án ở dạng gốc, trong câu có thể đổi dạng (thêm -s, -ed…).'));
    else pr.appendChild(lsEl('div', 'vw-sent-note', `Gợi ý: ${VC_POS[it.pos] || it.pos} · ${it.vi} · bắt đầu bằng “${q.bl.ans.charAt(0)}”, ${q.bl.ans.length} chữ cái`));
  }
  body.appendChild(pr);
  if (q.type === 'fill') {
    const done = q.typed != null;
    const row = lsEl('div', 'vw-fill');
    const inp = lsEl('input', 'vw-fill-in'); inp.type = 'text'; inp.setAttribute('autocomplete', 'off'); inp.setAttribute('autocapitalize', 'off'); inp.spellcheck = false;
    inp.placeholder = 'Gõ từ…'; if (done) { inp.value = q.typed; inp.disabled = true; }
    const ck = lsEl('button', 'btn-primary', 'Kiểm tra');
    const go = () => {
      const v = inp.value.trim().toLowerCase(); if (!v || q.typed != null) return;
      const okv = [q.bl.ans.toLowerCase(), it.w.toLowerCase()];
      q.typed = inp.value.trim(); q.typedOk = okv.includes(v.replace(/[.,!?]+$/, ''));
      q.picked = q.typedOk ? it : { w: q.typed };
      vcQuizAnswer(q, q.typedOk);
    };
    ck.addEventListener('click', go);
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); go(); } });
    if (!done) { row.appendChild(inp); row.appendChild(ck); body.appendChild(row); setTimeout(() => { try { if (matchMedia('(hover:hover)').matches) inp.focus(); } catch (e) {} }, 30); }
    else { row.appendChild(lsEl('div', 'vw-fill-res ' + (q.typedOk ? 'ok' : 'bad'), (q.typedOk ? '✓ ' : '✗ ') + q.typed)); body.appendChild(row); }
  } else {
    const opts = lsEl('div', 'vc-opts');
    q.opts.forEach(o => {
      const label = q.type === 'en2vi' ? o.vi : o.w;
      let cls = 'vc-opt';
      if (q.picked) { if (o === it) cls += ' ok'; else if (o === q.picked) cls += ' bad'; }
      const b = lsEl('button', cls, label);
      b.addEventListener('click', () => { if (q.picked) return; q.picked = o; vcQuizAnswer(q, o === it); });
      opts.appendChild(b);
    });
    body.appendChild(opts);
  }
  if (q.picked) {
    const ok = q.picked === it;
    const fb = lsEl('div', 'vc-fb ' + (ok ? 'ok' : 'bad'));
    fb.appendChild(lsEl('div', 'vc-fb-title', ok ? 'Chính xác!' : 'Chưa đúng rồi.'));
    const line = lsEl('div', 'vc-fb-line');
    line.appendChild(lsEl('b', null, it.w));
    line.appendChild(document.createTextNode(` ${it.ipa} · ${it.vi}`));
    if (q.bl) line.appendChild(document.createTextNode(` · trong câu: “${q.bl.ans}”`));
    fb.appendChild(line);
    const ex = lsEl('div', 'vc-ex'); ex.innerHTML = vcExHtml(it); fb.appendChild(ex);
    body.appendChild(fb);
    const next = lsEl('button', 'btn-primary vc-next', Q.idx + 1 < Q.qs.length ? 'Câu tiếp →' : 'Xem kết quả');
    next.addEventListener('click', () => { Q.idx++; vcRenderQuiz(); });
    body.appendChild(next);
    setTimeout(() => { try { next.focus({ preventScroll: true }); } catch (e) {} }, 30);
  } else if (!q.spoken && (q.type === 'en2vi' || q.type === 'listen')) {
    q.spoken = true;
    speak(it.w, 0.8);
  }
}
document.querySelectorAll('nav.tabbar button[data-page="page-vocab"]').forEach(b =>
  b.addEventListener('click', () => { if (vc.view === 'home') vcRenderHome(); else if (vc.view === 'topic') vcRenderTopicPage(); }));
whenPageShown('page-vocab', vcRoot, vcRenderHome);
// v233: dựng từ vựng khi file dữ liệu đã nạp; vẽ lại những chỗ đang hiển thị
function vcBoot() {
  if (vcReady || typeof VB === 'undefined') return vcReady;
  try { vcBuildTopics(); vcBuildAll(); } catch (e) { console.error(e); return false; }
  vcReady = true; PR_IDX = null;
  vcFillExvi(); vcMigrate(); vcSubText();
  try { const pg = document.getElementById('page-vocab'); if (pg && pg.classList.contains('active') && vc.view === 'home') vcRenderHome(); } catch (e) {}
  try { window.dispatchEvent(new Event('hta-vocab-ready')); } catch (e) {}
  return true;
}
window.vcBoot = vcBoot;
window.vcIsReady = () => vcReady;
vcBoot();

/* IRR_EX: xem file dữ liệu */
/* ============================================================
   IRREGULAR VERBS tab — v88: cùng kiểu với tab Vocabulary
   Trang chủ: tiến độ · tìm kiếm · lọc theo nhóm biến đổi · cấp độ A1 → C1 · các bài ~20 động từ
   Trong bài: Danh sách · Thẻ nhớ · Kiểm tra · Viết V2·V3 · Chấm điểm
============================================================ */
const IRR_LEVELS = [
  { n: 1, code: 'A1', vi: 'Mới bắt đầu', goal: 'Những động từ dùng hằng ngày nhất (be, have, go, eat…). Thuộc nhóm này là kể được những việc đơn giản trong quá khứ.' },
  { n: 2, code: 'A2', vi: 'Sơ cấp', goal: 'Động từ thông dụng khi kể chuyện, đi lại, mua sắm, học tập. Đây là nhóm gặp nhiều nhất trong bài thi cơ bản.' },
  { n: 3, code: 'B1', vi: 'Trung cấp', goal: 'Mở rộng vốn động từ để kể chuyện chi tiết, hiểu tin tức và phim ảnh. Có thêm các động từ ghép re-, mis-, over-.' },
  { n: 4, code: 'B2', vi: 'Trung cao cấp', goal: 'Động từ trong văn viết, tin tức và công việc, nhiều động từ ghép under-, over-, with-, out-.' },
  { n: 5, code: 'C1', vi: 'Nâng cao', goal: 'Động từ trang trọng, mang tính văn chương hoặc ít gặp, giúp đọc hiểu sách báo nâng cao.' }
];
const IRR_PATTERNS = { ABB: 'A-B-B', ABC: 'A-B-C', ABA: 'A-B-A', AAA: 'A-A-A' };
const IRR_PAT_HINT = { AAA: 'Ba dạng giống nhau (cut – cut – cut)', ABB: 'V2 giống V3 (buy – bought – bought)', ABA: 'V3 giống V1 (come – came – come)', ABC: 'Ba dạng khác nhau (go – went – gone)' };
const IRR_PAT_ORDER = ['ABB', 'ABC', 'ABA', 'AAA'];
const irrFirst = x => x.split('/')[0].trim().toLowerCase();
const irrAlts = x => x.split('/').map(s => s.trim().toLowerCase()).filter(Boolean);
IRREGULAR_VERBS.forEach(v => {
  const a = irrFirst(v.v1), b = irrFirst(v.v2), c = irrFirst(v.v3);
  v.pat = a === b && b === c ? 'AAA' : b === c ? 'ABB' : a === c ? 'ABA' : 'ABC';
  const e = IRR_EX[v.v1];
  if (e) { v.ex = e[0]; v.exvi = e[1]; }
  if (!v.lv) v.lv = 5;
});

/* ---------- lessons: mỗi cấp chia theo nhóm biến đổi rồi chia bài ~20 từ ---------- */
const IRR_UNITS = [];
IRR_LEVELS.forEach(L => {
  const items = IRREGULAR_VERBS.filter(v => v.lv === L.n)
    .sort((a, b) => IRR_PAT_ORDER.indexOf(a.pat) - IRR_PAT_ORDER.indexOf(b.pat) || a.v1.localeCompare(b.v1));
  const n = Math.max(1, Math.round(items.length / 20));
  L.items = items; L.units = [];
  for (let k = 0; k < n; k++) {
    const part = items.slice(Math.round(k * items.length / n), Math.round((k + 1) * items.length / n));
    const pats = IRR_PAT_ORDER.filter(p => part.some(v => v.pat === p)).map(p => IRR_PATTERNS[p]);
    const u = { level: L, index: k, items: part, vi: `Bài ${k + 1} · ${pats.join(', ')}`,
                en: part.slice(0, 4).map(v => v.v1).join(', ') + (part.length > 4 ? '…' : ''), siblings: L.units };
    L.units.push(u); IRR_UNITS.push(u);
  }
});
try {
  const sub = document.querySelector('#page-irregular .section-sub');
  if (sub) sub.textContent = `${IRREGULAR_VERBS.length} động từ chia theo cấp A1 → C1, mỗi cấp gồm các bài khoảng 20 từ. Học bằng thẻ nhớ hai mặt, điền V2/V3 vào câu, nghe nhận diện, chấm độ khớp giọng nói và lịch ôn 1 · 3 · 7 · 14 · 30 ngày`;
} catch (e) {}

/* ---------- progress ---------- */
const IRR_LV_KEY = 'hoc-tieng-anh-irr-level', IRR_DONE_KEY = 'hoc-tieng-anh-irr-done', IRR_SP_KEY = 'hoc-tieng-anh-irr-speak';
let irrDone = new Set(), irrSpBest = {};
try { const a = JSON.parse(localStorage.getItem(IRR_DONE_KEY) || '[]'); if (Array.isArray(a)) irrDone = new Set(a); } catch (e) {}
try { const o = JSON.parse(localStorage.getItem(IRR_SP_KEY) || '{}'); if (o && typeof o === 'object') irrSpBest = o; } catch (e) {}
const irrIs = v => irrDone.has(v.v1);
function irrSet(v, on) {
  if (on) irrDone.add(v.v1); else irrDone.delete(v.v1);
  if (typeof irrSrs !== 'undefined') {
    const r = irrSrs[v.v1] || (irrSrs[v.v1] = { b: 0, n: 0, w: 0, due: irrToday(), last: irrToday() });
    if (on) { r.b = Math.max(r.b || 0, 2); r.due = irrToday() + 3; r.bad = false; } else { r.b = 0; r.bad = false; r.due = irrToday(); }
    irrSrsSave();
  }
  try { localStorage.setItem(IRR_DONE_KEY, JSON.stringify([...irrDone])); } catch (e) {}
}
const irrCount = items => items.filter(irrIs).length;
const irrSpK = (v, what) => v.v1 + (what === 'ex' ? '|ex' : '');
const irrSpGet = (v, what) => { const x = irrSpBest[irrSpK(v, what || 'w')]; return typeof x === 'number' ? x : null; };
function irrSpSave(v, what, pct) {
  const k = irrSpK(v, what);
  if (typeof irrSpBest[k] === 'number' && irrSpBest[k] >= pct) return;
  irrSpBest[k] = pct;
  try { localStorage.setItem(IRR_SP_KEY, JSON.stringify(irrSpBest)); } catch (e) {}
}
const irrSay3 = v => [v.v1, v.v2, v.v3].map(irrFirst).join(', ');

const irrRoot = document.getElementById('irr-root');
const irr = { view: 'home', lv: 1, pat: null, patLv: 0, q: '', unit: null, mode: 'list', filter: 'all', cards: null, quiz: null, wr: null, sp: null, spWhat: 'w' };
try { irr.lv = Math.min(5, Math.max(1, +localStorage.getItem(IRR_LV_KEY) || 1)); } catch (e) {}
try { if (localStorage.getItem(IRR_SP_KEY + '-what') === 'ex') irr.spWhat = 'ex'; } catch (e) {}
const irrBody = () => document.getElementById('irr-body');
const irrTop = () => grScrollTop();

function irrExHtml(v, withVi) {
  if (!v.ex) return '';
  let ex = v.ex.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const forms = [...new Set([...irrAlts(v.v2), ...irrAlts(v.v3)])].sort((a, b) => b.length - a.length).map(escapeRe);
  const re = new RegExp('(^|[^A-Za-z-])(' + forms.join('|') + ')(?![A-Za-z])', 'i');
  ex = ex.replace(re, '$1<b>$2</b>');
  if (withVi !== false && v.exvi) ex += '<span class="vc-exvi">' + v.exvi.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</span>';
  return ex;
}
function irrForms(v, big) {
  const box = lsEl('div', 'irr-forms' + (big ? ' big' : ''));
  [['V1', v.v1, v.ipa], ['V2', v.v2, v.ipa2], ['V3', v.v3, v.ipa3]].forEach(([lab, f, ipa]) => {
    const c = lsEl('div', 'irr-form');
    c.appendChild(lsEl('span', 'irr-form-lab', lab));
    const w = lsEl('span', 'irr-form-w', f);
    c.appendChild(w);
    c.appendChild(lsEl('span', 'irr-form-ipa', ipa || ''));
    const pb = lsEl('span', 'play-mini irr-form-play', '▶'); pb.setAttribute('aria-hidden', 'true');
    c.appendChild(pb);
    c.setAttribute('role', 'button'); c.tabIndex = 0;
    c.setAttribute('aria-label', 'Nghe ' + f);
    const say = e => { e.stopPropagation(); speak(irrFirst(f), 0.8); };
    c.addEventListener('click', say);
    c.addEventListener('keydown', e => { if (e.key === 'Enter') say(e); });
    box.appendChild(c);
  });
  return box;
}

/* ---------- one verb row ---------- */
function irrRow(v, showLv) {
  const row = lsEl('div', 'vc-row irr-row' + (irrIs(v) ? ' learned' : ''));
  row.dataset.v1 = v.v1;
  const main = lsEl('div', 'vc-main');
  const line = lsEl('div', 'vc-line');
  line.appendChild(lsEl('span', 'vc-word', v.v1));
  line.appendChild(lsEl('span', 'irr-pat', IRR_PATTERNS[v.pat]));
  if (v.multi) { const m = lsEl('span', 'irr-multi', '⚑ nhiều dạng'); m.title = 'Có dạng thay thế ở V2 hoặc V3'; line.appendChild(m); }
  if (showLv) line.appendChild(lsEl('span', 'vc-lv vc-lv' + v.lv, IRR_LEVELS[v.lv - 1].code));
  const st = irrStatus(v);
  if (st !== 'new') { const sb = lsEl('span', 'irr-st irr-st-' + st, IRR_ST[st][1] + ' ' + IRR_ST[st][0]); sb.title = IRR_ST[st][2] + (irrSrs[v.v1] ? ' · ' + irrFmtDue(irrSrs[v.v1]) : ''); line.appendChild(sb); }
  main.appendChild(line);
  main.appendChild(irrForms(v));
  main.appendChild(lsEl('div', 'vc-mean', v.meaning));
  const an = irrAltNote(v); if (an) main.appendChild(lsEl('div', 'irr-alt', '⚑ ' + an));
  if (v.ex) { const ex = lsEl('div', 'vc-ex'); ex.innerHTML = irrExHtml(v); main.appendChild(ex); }
  const btns = lsEl('div', 'vc-btns');
  btns.appendChild(vcPlayBtn('▶', 'Nghe 3 dạng của ' + v.v1, irrSaySample(v)));
  if (v.ex) btns.appendChild(vcPlayBtn('💬', 'Nghe câu ví dụ', v.ex, 0.85));
  const fv = lsEl('button', 'irr-fav' + (irrFav.has(v.v1) ? ' on' : ''), irrFav.has(v.v1) ? '★' : '☆');
  fv.setAttribute('aria-label', 'Yêu thích ' + v.v1);
  fv.addEventListener('click', () => { if (irrFav.has(v.v1)) irrFav.delete(v.v1); else irrFav.add(v.v1); irrFavSave(); fv.classList.toggle('on', irrFav.has(v.v1)); fv.textContent = irrFav.has(v.v1) ? '★' : '☆'; });
  btns.appendChild(fv);
  const ck = lsEl('button', 'vc-check' + (irrIs(v) ? ' on' : ''), '✓');
  ck.setAttribute('aria-label', 'Đánh dấu đã thuộc ' + v.v1); ck.title = 'Đánh dấu đã thuộc (chuyển sang “Đang thành thạo”, ôn lại sau 3 ngày)';
  ck.addEventListener('click', () => {
    const on = !irrIs(v);
    irrSet(v, on);
    ck.classList.toggle('on', on); row.classList.toggle('learned', on);
    irrUpdateProg();
  });
  btns.appendChild(ck);
  row.appendChild(main); row.appendChild(btns);
  return row;
}

/* ---------- home ---------- */
function irrRenderHome() {
  irrSpStop();
  irr.view = 'home'; irr.unit = null;
  irrRoot.innerHTML = '';
  const total = IRREGULAR_VERBS.length, got = irrCount(IRREGULAR_VERBS);
  const prog = lsEl('div', 'tense-card vc-prog');
  const top = lsEl('div', 'vc-prog-top');
  const nums = lsEl('div');
  const n = lsEl('div', 'vc-prog-n');
  n.appendChild(lsEl('b', null, String(got)));
  n.appendChild(document.createTextNode(' / ' + total));
  nums.appendChild(n);
  nums.appendChild(lsEl('div', 'vc-prog-l', `động từ đã thuộc (đang thành thạo + thành thạo) · ${IRR_UNITS.length} bài`));
  top.appendChild(nums);
  const due = irrDue();
  const rnd = lsEl('button', 'btn-primary vc-rnd', due.length ? `📅 Ôn hôm nay · ${due.length}` : '🎲 Ôn nhanh 20 từ');
  if (due.length) rnd.addEventListener('click', e => { e.stopImmediatePropagation(); irrOpenUnit({ mix: true, icon: '📅', vi: 'Ôn tập hôm nay', en: `${Math.min(30, due.length)} động từ đến lịch ôn hoặc trả lời sai`, items: lsShuffle(due).slice(0, 30) }, 'cards'); });
  rnd.addEventListener('click', () => {
    const todo = IRREGULAR_VERBS.filter(v => !irrIs(v));
    irrOpenUnit({ mix: true, icon: '🎲', vi: 'Ôn nhanh ngẫu nhiên', en: '20 động từ từ mọi cấp độ', items: lsShuffle(todo.length >= 20 ? todo : IRREGULAR_VERBS).slice(0, 20) }, 'cards');
  });
  top.appendChild(rnd);
  prog.appendChild(top);
  prog.appendChild(vcBar(got / total));
  const cnt = {}; IRREGULAR_VERBS.forEach(v => { const k = irrStatus(v); cnt[k] = (cnt[k] || 0) + 1; });
  const sts = lsEl('div', 'irr-sts');
  IRR_ST_ORDER.forEach(k => {
    const b = lsEl('button', 'irr-stc irr-st-' + k + (irr.stf === k ? ' active' : ''));
    b.appendChild(lsEl('b', null, String(cnt[k] || 0)));
    b.appendChild(lsEl('span', null, IRR_ST[k][1] + ' ' + IRR_ST[k][0]));
    b.title = IRR_ST[k][2];
    b.addEventListener('click', () => { irr.stf = irr.stf === k ? null : k; irr.q = ''; irr.pat = null; irr.lim = 80; irrRenderHome(); });
    sts.appendChild(b);
  });
  prog.appendChild(sts);
  prog.appendChild(lsEl('div', 'irr-sts-note', 'Trả lời đúng thì từ được hẹn ôn lại sau 1 → 3 → 7 → 14 → 30 ngày; trả lời sai thì về “Cần ôn”.'));
  irrRoot.appendChild(prog);

  const sr = lsEl('div', 'verb-search-row');
  const inp = lsEl('input');
  inp.type = 'text'; inp.id = 'verb-search'; inp.value = irr.q;
  inp.placeholder = `Tìm trong ${total} động từ… (go, ăn, written)`;
  inp.setAttribute('autocomplete', 'off'); inp.setAttribute('autocapitalize', 'off');
  inp.placeholder = `Tìm V1, V2, V3, nghĩa hoặc IPA… (go, ăn, /ɡɒt/)`;
  let histT = 0;
  const pushHist = () => { const q = irr.q.trim(); if (q.length < 2) return; irrHist = [q, ...irrHist.filter(x => x !== q)].slice(0, 8); try { localStorage.setItem(IRR_HIST_KEY, JSON.stringify(irrHist)); } catch (e) {} };
  inp.addEventListener('input', () => { irr.q = inp.value; irr.lim = 80; irrRenderHomeBody(); clearTimeout(histT); histT = setTimeout(pushHist, 1500); });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') { clearTimeout(histT); pushHist(); } });
  sr.appendChild(inp);
  irrRoot.appendChild(sr);
  if (irrHist.length && !irr.q) {
    const hh = lsEl('div', 'irr-hist');
    hh.appendChild(lsEl('span', 'irr-hist-l', '🕘 Tìm gần đây:'));
    irrHist.forEach(h => { const c = lsEl('button', 'irr-hist-c', h); c.addEventListener('click', () => { irr.q = h; irrRenderHome(); }); hh.appendChild(c); });
    const clr = lsEl('button', 'irr-hist-x', 'Xóa'); clr.addEventListener('click', () => { irrHist = []; try { localStorage.removeItem(IRR_HIST_KEY); } catch (e) {} hh.remove(); }); hh.appendChild(clr);
    irrRoot.appendChild(hh);
  }
  if (!irr.q && !irr.stf && !irr.pat) {
    const tools = lsEl('div', 'irr-tools');
    [['📚', 'Verb list · 305', 'Xem tất cả, lọc và phân trang', () => { irr.stf = 'all'; irr.lim = 80; irrRenderHome(); }],
     ['🧩', 'Patterns', 'A-A-A · A-B-B · A-B-A · A-B-C', () => { irrRenderPatTable(); irrTop(); }],
     ['⚠️', 'Confusing verbs', 'lie/lay, rise/raise, read…', () => { irrRenderConf(); irrTop(); }],
     ['👂', 'Listen & identify', 'Nghe một dạng, chọn V1 / V2 / V3', () => { const todo = IRREGULAR_VERBS.filter(v => v.lv <= Math.max(2, irr.lv) && v.pat !== 'AAA'); irrOpenUnit({ mix: true, icon: '👂', vi: 'Nghe & nhận diện', en: '20 động từ ngẫu nhiên', items: lsShuffle(todo).slice(0, 20) }, 'hear'); }],
     ['★', 'Favorites', `${irrFav.size} động từ`, () => { irr.stf = 'fav'; irr.lim = 80; irrRenderHome(); }]
    ].forEach(([ic, t, sub, fn]) => { const b = lsEl('button', 'irr-tool'); b.appendChild(lsEl('span', 'irr-tool-ic', ic)); const tx = lsEl('span'); tx.appendChild(lsEl('b', null, t)); tx.appendChild(lsEl('span', null, sub)); b.appendChild(tx); b.addEventListener('click', fn); tools.appendChild(b); });
    irrRoot.appendChild(tools);
    irrRoot.appendChild(irrTestBox());
  }

  const pc = lsEl('div', 'colloc-chips vc-pos-chips');
  pc.setAttribute('role', 'group'); pc.setAttribute('aria-label', 'Lọc theo nhóm biến đổi');
  if (irr.stf) irr.pat = null;
  IRR_PAT_ORDER.forEach(k => {
    const c = lsEl('button', 'colloc-chip' + (irr.pat === k ? ' active' : ''), IRR_PATTERNS[k]);
    c.title = IRR_PAT_HINT[k];
    c.setAttribute('aria-pressed', irr.pat === k ? 'true' : 'false');
    c.addEventListener('click', () => {
      irr.pat = irr.pat === k ? null : k; irr.patLv = 0; if (irr.stf) { irr.stf = null; irrRenderHome(); return; }
      pc.querySelectorAll('.colloc-chip').forEach((b, i) => { const on = IRR_PAT_ORDER[i] === irr.pat; b.classList.toggle('active', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
      irrRenderHomeBody();
    });
    pc.appendChild(c);
  });
  irrRoot.appendChild(pc);
  const body = lsEl('div'); body.id = 'irr-body';
  irrRoot.appendChild(body);
  irrRenderHomeBody();
}

function irrUnitCard(u, showLv) {
  const n = u.items.length, got = irrCount(u.items);
  const b = lsEl('button', 'vc-unit' + (got === n ? ' done' : ''));
  b.appendChild(lsEl('span', 'vc-unit-num', got === n ? '✓' : String(u.index + 1)));
  const info = lsEl('span', 'vc-unit-info');
  info.appendChild(lsEl('span', 'vc-unit-vi', showLv ? `${u.level.code} · ${u.vi}` : u.vi));
  info.appendChild(lsEl('span', 'vc-unit-en', u.en));
  info.appendChild(lsEl('span', 'vc-tmeta', got ? `${got}/${n} đã thuộc` : `${n} động từ`));
  info.appendChild(vcBar(got / n));
  b.appendChild(info);
  b.appendChild(lsEl('span', 'vc-unit-go', '›'));
  b.addEventListener('click', () => irrOpenUnit(u));
  return b;
}

// bộ lọc phụ khi tìm kiếm / xem danh sách
function irrSfOk(v) { const f = irr.sf || 'all'; return (f === 'all' || (f === 'review' ? irrStatus(v) === 'review' : f === 'todo' ? !irrIs(v) : f === 'fav' ? irrFav.has(v.v1) : f === 'multi' ? v.multi : true)) && (!irr.slv || v.lv === irr.slv); }
function irrSfChips() {
  const w = lsEl('div', 'irr-sf');
  const row = lsEl('div', 'colloc-chips');
  [['all', 'Tất cả'], ['review', '🔁 Cần ôn'], ['todo', 'Chưa thuộc'], ['fav', '★ Yêu thích'], ['multi', '⚑ Có dạng thay thế']].forEach(([k, t]) => { const c = lsEl('button', 'colloc-chip' + ((irr.sf || 'all') === k ? ' active' : ''), t); c.addEventListener('click', () => { irr.sf = k; irr.lim = 80; irrRenderHomeBody(); }); row.appendChild(c); });
  w.appendChild(row);
  const lv = lsEl('div', 'colloc-chips');
  [[0, 'Mọi cấp'], ...IRR_LEVELS.map(L => [L.n, L.code])].forEach(([k, t]) => { const c = lsEl('button', 'colloc-chip' + ((irr.slv || 0) === k ? ' active' : ''), t); c.addEventListener('click', () => { irr.slv = k; irr.lim = 80; irrRenderHomeBody(); }); lv.appendChild(c); });
  w.appendChild(lv);
  return w;
}
function irrPaged(body, res) {
  const lim = irr.lim || 80;
  body.appendChild(lsEl('div', 'vc-count', `${res.length} động từ` + (res.length > lim ? ` · đang hiện ${lim}` : '')));
  const card = lsEl('div', 'tense-card vc-card');
  res.slice(0, lim).forEach(v => card.appendChild(irrRow(v, true)));
  body.appendChild(card);
  if (res.length > lim) { const m = lsEl('button', 'btn-ghost irr-more', `Xem thêm ${Math.min(80, res.length - lim)} động từ ↓`); m.addEventListener('click', () => { irr.lim = lim + 80; const y = window.scrollY; irrRenderHomeBody(); window.scrollTo(0, y); }); body.appendChild(m); }
}
function irrRenderHomeBody() {
  const body = irrBody();
  if (!body) return;
  body.innerHTML = '';
  const q = irr.q.trim();
  if (q) {
    const fq = vcFold(q), lq = q.toLowerCase(), viq = fq !== lq;   // có dấu → chỉ tìm theo nghĩa tiếng Việt
    const inForms = v => !viq && [v.v1, v.v2, v.v3].some(x => irrAlts(x).some(f => f.includes(fq)));
    const wordRe = new RegExp('(^|[\\s,;()/])' + escapeRe(viq ? lq : fq));
    const inMean = v => wordRe.test(viq ? v.meaning.toLowerCase() : vcFold(v.meaning));
    const ipaQ = /[ɑæɒɔəɜɪʊʌθðʃʒŋˈː\/]/.test(q);
    const inIpa = v => ipaQ && [v.ipa, v.ipa2, v.ipa3].some(x => (x || '').replace(/[\/ˈˌ]/g, '').includes(q.replace(/[\/ˈˌ]/g, '').trim()));
    const res = IRREGULAR_VERBS.filter(v => (!irr.pat || v.pats.has(irr.pat)) && irrSfOk(v) && (inIpa(v) || (!ipaQ && (inForms(v) || inMean(v)))));
    const rank = v => irrAlts(v.v1).includes(fq) ? 0 : [v.v2, v.v3].some(x => irrAlts(x).includes(fq)) ? 1 : inForms(v) ? 2 : 3;
    res.sort((a, b) => rank(a) - rank(b) || a.lv - b.lv);
    body.appendChild(irrSfChips());
    if (!res.length) { body.appendChild(lsEl('div', 'empty-state', 'Không tìm thấy động từ phù hợp.')); return; }
    irrPaged(body, res);
    return;
  }
  if (irr.stf) {
    const res = IRREGULAR_VERBS.filter(v => irr.stf === 'all' ? true : irr.stf === 'fav' ? irrFav.has(v.v1) : irrStatus(v) === irr.stf).filter(irrSfOk).slice().sort((a, b) => a.lv - b.lv || a.v1.localeCompare(b.v1));
    const h = lsEl('div', 'vc-lvhead');
    h.appendChild(lsEl('div', 'tense-group-title', irr.stf === 'all' ? '📚 Tất cả động từ' : irr.stf === 'fav' ? '★ Động từ yêu thích' : `${IRR_ST[irr.stf][1]} ${IRR_ST[irr.stf][0]}`));
    const x = lsEl('button', 'btn-ghost vc-lvrv', '✕ Đóng'); x.addEventListener('click', () => { irr.stf = null; irrRenderHome(); }); h.appendChild(x);
    body.appendChild(h);
    if (irr.stf !== 'all' && irr.stf !== 'fav') body.appendChild(lsEl('p', 'ls-level-desc', IRR_ST[irr.stf][2] + '.'));
    body.appendChild(irrSfChips());
    if (!res.length) { body.appendChild(lsEl('div', 'empty-state', irr.stf === 'fav' ? 'Chưa có động từ yêu thích. Bấm ☆ bên cạnh động từ để lưu.' : 'Không có động từ nào ở mục này.')); return; }
    if (res.length >= 4) { const pr = lsEl('div', 'ls-sum-btns'); const a = lsEl('button', 'btn-primary', '🃏 Luyện bằng thẻ'); a.addEventListener('click', () => irrOpenUnit({ mix: true, icon: '🃏', vi: 'Luyện danh sách đã lọc', en: `${Math.min(30, res.length)} động từ`, items: lsShuffle(res).slice(0, 30) }, 'cards')); const b = lsEl('button', 'btn-ghost', '📝 Kiểm tra'); b.addEventListener('click', () => irrOpenUnit({ mix: true, icon: '📝', vi: 'Kiểm tra danh sách đã lọc', en: `${Math.min(20, res.length)} động từ`, items: lsShuffle(res).slice(0, 20) }, 'quiz')); pr.appendChild(a); pr.appendChild(b); body.appendChild(pr); }
    irrPaged(body, res);
    return;
  }
  if (irr.pat) return irrRenderPat(body);

  body.appendChild(lsEl('div', 'tense-group-title', 'Chọn cấp độ'));
  const chips = lsEl('div', 'vc-levels');
  IRR_LEVELS.forEach(L => {
    const n = L.items.length, got = irrCount(L.items);
    const b = lsEl('button', 'vc-level vc-lvl' + L.n + (L.n === irr.lv ? ' active' : '') + (got === n ? ' done' : ''));
    b.appendChild(lsEl('span', 'vc-level-code', L.code));
    b.appendChild(lsEl('span', 'vc-level-vi', L.vi));
    b.appendChild(lsEl('span', 'vc-level-n', got === n ? `✓ ${n} từ` : got ? `${got}/${n}` : `${n} từ`));
    b.setAttribute('aria-pressed', L.n === irr.lv ? 'true' : 'false');
    b.addEventListener('click', () => {
      irr.lv = L.n; try { localStorage.setItem(IRR_LV_KEY, String(L.n)); } catch (e) {}
      irrRenderHomeBody();
    });
    chips.appendChild(b);
  });
  body.appendChild(chips);
  const L = IRR_LEVELS[irr.lv - 1];
  const intro = lsEl('div', 'tense-card tn-intro irr-intro');
  intro.appendChild(lsEl('p', 'tn-goal', L.goal));
  const pats = lsEl('div', 'irr-pat-sum');
  IRR_PAT_ORDER.forEach(p => {
    const k = L.items.filter(v => v.pat === p).length;
    if (!k) return;
    const s = lsEl('span', 'irr-pat', `${IRR_PATTERNS[p]} · ${k}`);
    s.title = IRR_PAT_HINT[p];
    pats.appendChild(s);
  });
  intro.appendChild(pats);
  body.appendChild(intro);
  const lvHead = lsEl('div', 'vc-lvhead');
  lvHead.appendChild(lsEl('div', 'tense-group-title', `${L.code} · ${L.vi} · ${L.units.length} bài`));
  const lvRv = lsEl('button', 'btn-ghost vc-lvrv', '🃏 Ôn cả cấp ' + L.code);
  lvRv.addEventListener('click', () => {
    const todo = L.items.filter(v => !irrIs(v));
    irrOpenUnit({ mix: true, icon: '🃏', vi: `Ôn cấp ${L.code}`, en: `20 động từ ngẫu nhiên cấp ${L.code}`, items: lsShuffle(todo.length >= 20 ? todo : L.items).slice(0, 20) }, 'cards');
  });
  lvHead.appendChild(lvRv);
  body.appendChild(lvHead);
  const list = lsEl('div', 'vc-units');
  L.units.forEach(u => list.appendChild(irrUnitCard(u)));
  body.appendChild(list);
}

/* ---------- danh sách theo nhóm biến đổi ---------- */
function irrRenderPat(body) {
  const all = IRREGULAR_VERBS.filter(v => v.pats.has(irr.pat));
  const items = (irr.patLv ? all.filter(v => v.lv === irr.patLv) : all).slice().sort((a, b) => a.lv - b.lv || a.v1.localeCompare(b.v1));
  const head = lsEl('div', 'tense-card vc-pos-head');
  const top = lsEl('div', 'vc-prog-top');
  const nums = lsEl('div');
  const n = lsEl('div', 'vc-prog-n');
  n.appendChild(lsEl('b', null, 'Nhóm ' + IRR_PATTERNS[irr.pat]));
  nums.appendChild(n);
  const got = irrCount(items);
  nums.appendChild(lsEl('div', 'vc-prog-l', `${IRR_PAT_HINT[irr.pat]} · ${items.length} từ${irr.patLv ? ' cấp ' + IRR_LEVELS[irr.patLv - 1].code : ''} · đã thuộc ${got}`));
  top.appendChild(nums);
  head.appendChild(top);
  head.appendChild(vcBar(items.length ? got / items.length : 0));
  const lvs = lsEl('div', 'colloc-chips vc-pos-lv');
  [[0, 'Tất cả', all.length], ...IRR_LEVELS.map(L => [L.n, L.code, all.filter(v => v.lv === L.n).length])].forEach(([k, txt, cnt]) => {
    if (k && !cnt) return;
    const c = lsEl('button', 'colloc-chip' + (irr.patLv === k ? ' active' : ''), `${txt} · ${cnt}`);
    c.addEventListener('click', () => { irr.patLv = k; irrRenderHomeBody(); });
    lvs.appendChild(c);
  });
  head.appendChild(lvs);
  const acts = lsEl('div', 'vc-actions vc-pos-acts');
  const pick = () => { const todo = items.filter(v => !irrIs(v)); return lsShuffle(todo.length >= 20 ? todo : items).slice(0, 20); };
  const sub = `20 động từ nhóm ${IRR_PATTERNS[irr.pat]}${irr.patLv ? ' cấp ' + IRR_LEVELS[irr.patLv - 1].code : ''}`;
  const rv = lsEl('button', 'btn-primary', '🃏 Ôn nhanh 20 từ');
  rv.addEventListener('click', () => irrOpenUnit({ mix: true, icon: '🃏', vi: 'Ôn nhóm ' + IRR_PATTERNS[irr.pat], en: sub, items: pick() }, 'cards'));
  const qz = lsEl('button', 'btn-ghost', '📝 Kiểm tra');
  qz.addEventListener('click', () => irrOpenUnit({ mix: true, icon: '📝', vi: 'Kiểm tra nhóm ' + IRR_PATTERNS[irr.pat], en: sub, items: pick() }, 'quiz'));
  acts.appendChild(rv); acts.appendChild(qz);
  head.appendChild(acts);
  body.appendChild(head);
  const card = lsEl('div', 'tense-card vc-card');
  items.forEach(v => card.appendChild(irrRow(v, true)));
  body.appendChild(card);
}

/* ---------- lesson page ---------- */
function irrOpenUnit(u, mode) {
  irr.unit = u; irr.mode = mode || 'list'; irr.filter = 'all';
  irrRenderUnit();
  irrTop();
}
function irrNextUnit() {
  const u = irr.unit;
  if (!u || u.mix) return null;
  if (u.siblings[u.index + 1]) return u.siblings[u.index + 1];
  const nl = IRR_LEVELS[u.level.n];
  return nl && nl.units[0] ? nl.units[0] : null;
}
function irrNextUnitBtn(box) {
  const nx = irrNextUnit();
  if (!nx) return;
  const b = lsEl('button', 'btn-primary vc-next-unit', nx.level !== irr.unit.level ? `Sang cấp ${nx.level.code}: ${nx.vi} →` : `Bài tiếp: ${nx.vi} →`);
  b.addEventListener('click', () => { irr.lv = nx.level.n; irrOpenUnit(nx); });
  box.appendChild(b);
}
function irrRenderUnit() {
  irrSpStop();
  const u = irr.unit;
  irr.view = 'unit';
  irrRoot.innerHTML = '';
  const back = lsEl('button', 'gr-back', '← Tất cả động từ');
  back.addEventListener('click', () => { irrRenderHome(); irrTop(); });
  irrRoot.appendChild(back);
  if (!u.mix) irr.lv = u.level.n;
  const sub = u.mix ? u.en : `${u.level.code} ${u.level.vi} · Bài ${u.index + 1}/${u.siblings.length} · ${u.items.length} động từ`;
  const hd = vcHead(u.mix ? u.icon : '🔁', u.vi, sub);
  const hp = hd.querySelector('#vc-head-prog'); if (hp) hp.id = 'irr-head-prog';
  irrRoot.appendChild(hd);
  const modes = lsEl('div', 'ls-modes vc-modes');
  modes.classList.add('irr-modes');
  [['list', 'Danh sách'], ['cards', 'Thẻ nhớ'], ['quiz', 'Kiểm tra'], ['write', 'Viết V2·V3'], ['ctx', 'Điền câu'], ['hear', 'Nghe'], ['speak', 'Phát âm']].forEach(([m, label]) => {
    const b = lsEl('button', 'ls-mode' + (irr.mode === m ? ' active' : ''), label);
    b.dataset.vcMode = m;
    b.addEventListener('click', () => { irr.mode = m; irrRenderUnit(); });
    modes.appendChild(b);
  });
  irrRoot.appendChild(modes);
  const body = lsEl('div'); body.id = 'irr-body';
  irrRoot.appendChild(body);
  irrUpdateProg();
  if (irr.mode === 'list') irrRenderList();
  else if (irr.mode === 'cards') irrStartCards();
  else if (irr.mode === 'quiz') irrStartQuiz();
  else if (irr.mode === 'ctx') irrStartCtx();
  else if (irr.mode === 'hear') irrStartHear();
  else if (irr.mode === 'speak') irrStartSpeak();
  else irrStartWrite();
}
function irrUpdateProg() {
  const el = irrRoot.querySelector('#irr-head-prog');
  if (!el || !irr.unit) return;
  const n = irr.unit.items.length, got = irrCount(irr.unit.items);
  el.innerHTML = '';
  el.appendChild(lsEl('span', null, `Đã thuộc ${got}/${n}`));
  el.appendChild(vcBar(got / n));
}

function irrRenderList() {
  const body = irrBody();
  body.innerHTML = '';
  const bar = lsEl('div', 'vc-list-bar');
  const chips = lsEl('div', 'colloc-chips');
  [['all', 'Tất cả'], ['todo', 'Chưa thuộc'], ['done', 'Đã thuộc']].forEach(([f, label]) => {
    const c = lsEl('button', 'colloc-chip' + (irr.filter === f ? ' active' : ''), label);
    c.addEventListener('click', () => { irr.filter = f; irrRenderList(); });
    chips.appendChild(c);
  });
  bar.appendChild(chips);
  const all = lsEl('button', 'ls-slow irr-seq', irrSeq ? '⏹ Dừng' : '▶ Nghe lần lượt');
  all.addEventListener('click', () => irrSeqPlay(all));
  bar.appendChild(all);
  body.appendChild(bar);
  const items = irr.unit.items.filter(v => irr.filter === 'all' || (irr.filter === 'done') === irrIs(v));
  if (!items.length) {
    body.appendChild(lsEl('div', 'empty-state', irr.filter === 'done'
      ? 'Chưa có động từ nào được đánh dấu. Bấm ✓ bên cạnh từ bạn đã thuộc.'
      : 'Tuyệt vời! Bạn đã thuộc hết các động từ trong bài này.'));
  } else {
    const card = lsEl('div', 'tense-card vc-card');
    items.forEach(v => card.appendChild(irrRow(v, !!irr.unit.mix)));
    body.appendChild(card);
  }
  irrNextUnitBtn(body);
}

/* nghe lần lượt V1, V2, V3 của các từ trong danh sách */
let irrSeq = null;
function irrSeqStop() {
  if (!irrSeq) return;
  irrSeq.stop = true;
  document.querySelectorAll('#irr-root .irr-row.speaking').forEach(r => r.classList.remove('speaking'));
  if (irrSeq.btn) irrSeq.btn.textContent = '▶ Nghe lần lượt';
  irrSeq = null;
}
function irrSeqPlay(btn) {
  if (irrSeq) { irrSeqStop(); try { speechSynthesis.cancel(); } catch (e) {} return; }
  const rows = [...document.querySelectorAll('#irr-root .irr-row')];
  if (!rows.length) return;
  const st = { stop: false, btn }; irrSeq = st; btn.textContent = '⏹ Dừng';
  let i = 0;
  const next = () => {
    if (st.stop) return;
    rows.forEach(r => r.classList.remove('speaking'));
    if (i >= rows.length || !rows[i].isConnected) { irrSeqStop(); return; }
    const row = rows[i++];
    row.classList.add('speaking');
    try { row.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) {}
    const v = IRREGULAR_VERBS.find(x => x.v1 === row.dataset.v1);
    const u = speak(irrSay3(v), 0.75);
    let done = false;
    const go = () => { if (done || st.stop) return; done = true; setTimeout(next, 800); };
    try { if (u && u.addEventListener) { u.addEventListener('end', go); u.addEventListener('error', go); } } catch (e) {}
    setTimeout(go, 3500);
  };
  next();
}

/* ---------- flashcards ---------- */
/* thẻ nhớ hai mặt: mặt trước bắt nhớ lại, chạm để lật xem đáp án */
const IRR_CDIR_KEY = 'hoc-tieng-anh-irr-cdir';
function irrStartCards() {
  const items = irr.unit.items;
  try { irr.cdir = localStorage.getItem(IRR_CDIR_KEY) === 'vi' ? 'vi' : 'v1'; } catch (e) { irr.cdir = 'v1'; }
  irr.cards = { deck: [...lsShuffle(items.filter(v => irrStatus(v) === 'review')), ...lsShuffle(items.filter(v => irrStatus(v) !== 'review' && !irrIs(v))), ...lsShuffle(items.filter(v => irrIs(v) && irrStatus(v) !== 'review'))], idx: 0, newly: 0, again: new Set(), flip: false, ok: 0 };
  irrRenderCard();
}
function irrRenderCard() {
  const body = irrBody();
  body.innerHTML = '';
  const C = irr.cards;
  if (C.idx >= C.deck.length) {
    const box = lsEl('div', 'tense-card vc-done');
    box.appendChild(lsEl('div', 'vc-done-big', '🎉'));
    box.appendChild(lsEl('div', 'ls-verdict', `Xong ${C.deck.length} thẻ!`));
    box.appendChild(lsEl('div', 'vc-done-sub', `Bạn nhớ ${C.ok} lượt, ${C.again.size} từ cần ôn lại. Kết quả đã được ghi vào lịch ôn.`));
    const btns = lsEl('div', 'ls-sum-btns');
    const again = lsEl('button', 'btn-ghost', 'Học lại');
    again.addEventListener('click', irrStartCards);
    const quiz = lsEl('button', 'btn-primary', 'Điền V2 / V3 vào câu →');
    quiz.addEventListener('click', () => { irr.mode = 'ctx'; irrRenderUnit(); });
    btns.appendChild(again); btns.appendChild(quiz);
    box.appendChild(btns);
    irrNextUnitBtn(box);
    body.appendChild(box);
    return;
  }
  const v = C.deck[C.idx];
  const top = lsEl('div', 'vc-card-top');
  top.appendChild(lsEl('span', 'ls-count', `Thẻ ${C.idx + 1} / ${C.deck.length}`));
  const dir = lsEl('div', 'colloc-chips irr-cdir');
  [['v1', 'V1 → V2, V3'], ['vi', 'Nghĩa → V1, V2, V3']].forEach(([k, t]) => {
    const c = lsEl('button', 'colloc-chip' + (irr.cdir === k ? ' active' : ''), t);
    c.addEventListener('click', () => { irr.cdir = k; try { localStorage.setItem(IRR_CDIR_KEY, k); } catch (e) {} C.flip = false; irrRenderCard(); });
    dir.appendChild(c);
  });
  top.appendChild(dir);
  body.appendChild(top);
  const card = lsEl('button', 'vc-flash irr-flash irr-card2' + (C.flip ? ' back' : ''));
  const st = irrStatus(v);
  if (st !== 'new') card.appendChild(lsEl('span', 'vc-f-badge', IRR_ST[st][1] + ' ' + IRR_ST[st][0]));
  if (!C.flip) {
    card.setAttribute('aria-label', 'Lật thẻ');
    if (irr.cdir === 'vi') {
      card.appendChild(lsEl('div', 'vc-q-label', 'Động từ nào có nghĩa'));
      card.appendChild(lsEl('div', 'vc-f-big vc-f-vi', v.meaning));
      card.appendChild(lsEl('div', 'irr-card-ask', 'Nhớ lại cả V1, V2 và V3'));
    } else {
      card.appendChild(lsEl('div', 'vc-f-big', v.v1));
      card.appendChild(lsEl('div', 'vc-f-ipa', (v.ipa || '') + ' · ' + v.meaning));
      card.appendChild(lsEl('div', 'irr-card-ask', 'Bạn nhớ V2 và V3 của từ này không?'));
    }
    card.appendChild(lsEl('div', 'irr-card-tap', '👆 Chạm để lật thẻ'));
    card.addEventListener('click', () => { C.flip = true; irrSeen(v); irrRenderCard(); speak(irrSaySample(v), 0.8); });
  } else {
    card.setAttribute('aria-label', 'Nghe lại ' + v.v1);
    card.appendChild(lsEl('div', 'vc-f-mean', `${v.v1} · ${v.meaning}`));
    card.appendChild(irrForms(v, true));
    card.appendChild(lsEl('div', 'irr-pat', `${IRR_PATTERNS[v.pat]} · ${IRR_PAT_HINT[v.pat]}`));
    const an = irrAltNote(v); if (an) card.appendChild(lsEl('div', 'irr-alt', '⚑ ' + an));
    if (v.ex) { card.appendChild(lsEl('div', 'vc-f-sep')); const ex = lsEl('div', 'vc-f-ex'); ex.innerHTML = irrExHtml(v); card.appendChild(ex); }
    card.addEventListener('click', () => speak(irrSaySample(v), 0.8));
  }
  body.appendChild(card);
  const audio = lsEl('div', 'vc-audio');
  if (C.flip) {
    const a1 = lsEl('button', 'ls-slow', '▶ Nghe 3 dạng'); a1.addEventListener('click', () => speak(irrSaySample(v), 0.8)); audio.appendChild(a1);
    if (v.ex) { const a2 = lsEl('button', 'ls-slow', '💬 Nghe câu ví dụ'); a2.addEventListener('click', () => speak(v.ex, 0.85)); audio.appendChild(a2); }
  } else if (irr.cdir === 'v1') { const a0 = lsEl('button', 'ls-slow', '▶ Nghe V1'); a0.addEventListener('click', () => speak(irrSayForm(v, 0), 0.8)); audio.appendChild(a0); }
  body.appendChild(audio);
  const btns = lsEl('div', 'vc-card-btns');
  if (!C.flip) {
    const fl = lsEl('button', 'btn-primary irr-flipbtn', '👀 Lật thẻ xem đáp án');
    fl.addEventListener('click', () => { C.flip = true; irrSeen(v); irrRenderCard(); speak(irrSaySample(v), 0.8); });
    btns.appendChild(fl);
  } else {
    const no = lsEl('button', 'btn-ghost', '↺ Chưa nhớ');
    no.addEventListener('click', () => { irrGrade(v, false, 'card'); if (!C.again.has(v)) { C.again.add(v); C.deck.push(v); } irrNextCard(); });
    const yes = lsEl('button', 'btn-primary', '✓ Đã nhớ');
    yes.addEventListener('click', () => { irrGrade(v, true, 'card'); C.ok++; irrNextCard(); });
    btns.appendChild(no); btns.appendChild(yes);
  }
  body.appendChild(btns);
}
function irrNextCard() {
  const C = irr.cards;
  C.idx++; C.flip = false;
  irrRenderCard();
  irrUpdateProg();
  const v = C.deck[C.idx];
  if (v && irr.cdir === 'v1') speak(irrSayForm(v, 0), 0.8);
}

/* ---------- quiz: hỏi V2, V3 hoặc nghĩa ---------- */
function irrRegular(w) {
  w = irrFirst(w);
  if (/e$/.test(w)) return w + 'd';
  if (/[^aeiou]y$/.test(w)) return w.slice(0, -1) + 'ied';
  return w + 'ed';
}
function irrStartQuiz() {
  const items = irr.unit.items;
  const pool = items.length >= 8 ? items : IRREGULAR_VERBS.filter(v => v.lv === items[0].lv);
  const types = irr.unit.test ? ['v2', 'ctx', 'v3', 'mean'] : ['v2', 'v3', 'mean'];
  irr.quiz = {
    qs: lsShuffle(items).map((v, i) => {
      let type = types[i % types.length];
      if (type === 'ctx' && !irrCtx(v)) type = 'v2';
      let right, opts;
      if (type === 'ctx') {
        const c = irrCtx(v); right = c.form;
        const bad = new Set(irrNeedForms(v, c)); opts = [right];
        [c.need === 'v2' ? irrFirst(v.v3) : irrFirst(v.v2), irrRegular(v.v1), irrFirst(v.v1).replace(/e$/, '') + 'ing', ...(c.need === 'v3' ? [irrFirst(v.v1)] : [])].forEach(x => { if (opts.length < 4 && !bad.has(x) && !opts.includes(x)) opts.push(x); });
        opts = lsShuffle(opts);
      } else if (type === 'mean') {
        right = v.v1;
        const ds = [];
        for (const x of lsShuffle(pool.length >= 4 ? pool : IRREGULAR_VERBS)) {
          if (ds.length === 3) break;
          if (x === v || ds.includes(x.v1) || x.meaning === v.meaning) continue;
          ds.push(x.v1);
        }
        opts = lsShuffle([right, ...ds]);
      } else {
        right = type === 'v2' ? v.v2 : v.v3;
        const bad = new Set(irrAlts(right));
        const cand = [irrRegular(v.v1), type === 'v2' ? v.v3 : v.v2, v.v1];
        if (type === 'v3' && !/e$/.test(irrFirst(v.v1))) cand.push(irrFirst(v.v1) + 'en');
        lsShuffle(pool).forEach(x => cand.push(type === 'v2' ? x.v2 : x.v3));
        const ds = [];
        for (const c of cand) {
          if (ds.length === 3) break;
          const alts = irrAlts(c);
          if (alts.some(a => bad.has(a))) continue;
          if (ds.some(d => irrAlts(d).some(a => alts.includes(a)))) continue;
          ds.push(c);
        }
        opts = lsShuffle([right, ...ds]);
      }
      return { v, type, right, opts, picked: null, spoken: false };
    }),
    idx: 0, score: 0, wrong: []
  };
  irrRenderQuiz();
}
function irrRenderQuiz() {
  const body = irrBody();
  body.innerHTML = '';
  const Q = irr.quiz;
  if (Q.idx >= Q.qs.length) {
    const n = Q.qs.length, r = Q.score / n;
    const box = lsEl('div', 'tense-card vc-done');
    box.appendChild(lsEl('div', 'vc-done-big', `${Q.score} / ${n}`));
    box.appendChild(lsEl('div', 'ls-verdict', r >= 0.9 ? 'Xuất sắc! Bạn nắm rất chắc bài này.' : r >= 0.6 ? 'Khá tốt! Ôn lại vài từ sai là ổn.' : 'Cần ôn thêm, thử lật thẻ ghi nhớ nhé.'));
    if (Q.wrong.length) {
      box.appendChild(lsEl('div', 'vc-done-sub', 'Những động từ bạn chọn sai:'));
      const card = lsEl('div', 'vc-card vc-wrong');
      [...new Set(Q.wrong)].forEach(v => card.appendChild(irrRow(v, false)));
      box.appendChild(card);
    }
    const btns = lsEl('div', 'ls-sum-btns');
    const again = lsEl('button', 'btn-ghost', 'Làm bài mới');
    again.addEventListener('click', irrStartQuiz);
    const cards = lsEl('button', 'btn-primary', 'Ôn bằng thẻ →');
    cards.addEventListener('click', () => { irr.mode = 'cards'; irrRenderUnit(); });
    btns.appendChild(again); btns.appendChild(cards);
    box.appendChild(btns);
    irrNextUnitBtn(box);
    body.appendChild(box);
    return;
  }
  const q = Q.qs[Q.idx], v = q.v;
  const top = lsEl('div', 'vc-card-top');
  top.appendChild(lsEl('span', 'ls-count', `Câu ${Q.idx + 1} / ${Q.qs.length}`));
  top.appendChild(lsEl('span', 'ls-count', `Đúng: ${Q.score}`));
  body.appendChild(top);
  const pr = lsEl('div', 'tense-card vc-q');
  if (q.type === 'ctx') {
    const c = irrCtx(v);
    pr.appendChild(lsEl('div', 'vc-q-label', 'Chọn dạng đúng của “' + irrFirst(v.v1) + '” trong câu'));
    pr.appendChild(irrCtxSentence(c, lsEl('span', 'irr-cx-gap' + (q.picked ? (q.picked === q.right ? ' ok' : ' bad') : ''), q.picked ? c.raw : '_____')));
    if (v.exvi) pr.appendChild(lsEl('div', 'irr-cx-vi sm', v.exvi));
  } else if (q.type === 'mean') {
    pr.appendChild(lsEl('div', 'vc-q-label', 'Động từ nào có nghĩa'));
    pr.appendChild(lsEl('div', 'vc-f-big vc-f-vi', v.meaning));
  } else {
    pr.appendChild(lsEl('div', 'vc-q-label', q.type === 'v2' ? 'Quá khứ đơn (V2) của' : 'Quá khứ phân từ (V3) của'));
    pr.appendChild(lsEl('div', 'vc-f-big', v.v1));
    const ipa = lsEl('div', 'vc-f-ipa', v.ipa + ' ');
    ipa.appendChild(vcPlayBtn('▶', 'Nghe từ', irrFirst(v.v1)));
    pr.appendChild(ipa);
    pr.appendChild(lsEl('div', 'vsp-sub', v.meaning));
  }
  body.appendChild(pr);
  const opts = lsEl('div', 'vc-opts');
  q.opts.forEach(o => {
    let cls = 'vc-opt';
    if (q.picked) { if (o === q.right) cls += ' ok'; else if (o === q.picked) cls += ' bad'; }
    const b = lsEl('button', cls, o);
    b.addEventListener('click', () => {
      if (q.picked) return;
      q.picked = o;
      if (o === q.right) Q.score++; else Q.wrong.push(v);
      irrGrade(v, o === q.right, 'quiz');
      irrRenderQuiz();
      speak(q.type === 'ctx' ? v.ex : irrSaySample(v), 0.8);
    });
    opts.appendChild(b);
  });
  body.appendChild(opts);
  if (q.picked) {
    const fb = lsEl('div', 'vc-fb ' + (q.picked === q.right ? 'ok' : 'bad'));
    fb.appendChild(lsEl('div', 'vc-fb-title', q.picked === q.right ? 'Chính xác!' : 'Chưa đúng rồi.'));
    const line = lsEl('div', 'vc-fb-line');
    line.appendChild(lsEl('b', null, `${v.v1} – ${v.v2} – ${v.v3}`));
    line.appendChild(document.createTextNode(` · ${v.meaning}`));
    fb.appendChild(line);
    if (q.type === 'ctx') fb.appendChild(lsEl('div', 'irr-cx-why', '💡 ' + IRR_WHY[irrCtx(v).why]));
    else if (v.ex) { const ex = lsEl('div', 'vc-ex'); ex.innerHTML = irrExHtml(v); fb.appendChild(ex); }
    body.appendChild(fb);
    const next = lsEl('button', 'btn-primary vc-next', Q.idx + 1 < Q.qs.length ? 'Câu tiếp →' : 'Xem kết quả');
    next.addEventListener('click', () => { Q.idx++; irrRenderQuiz(); });
    body.appendChild(next);
  } else if (!q.spoken && q.type !== 'mean') {
    q.spoken = true;
    speak(irrFirst(v.v1), 0.8);
  }
}

/* ---------- viết V2 và V3 ---------- */
function irrStartWrite(only) {
  let items = only || irr.unit.items;
  irr.wr = { qs: [...lsShuffle(items.filter(v => !irrIs(v))), ...lsShuffle(items.filter(irrIs))].map(v => ({ v, tries: 0, ok2: null, ok3: null, a2: '', a3: '', done: false, first: null })), idx: 0 };
  irrRenderWrite();
}
function irrRenderWrite() {
  const body = irrBody();
  body.innerHTML = '';
  const W = irr.wr;
  if (W.idx >= W.qs.length) return irrWriteSummary();
  const q = W.qs[W.idx], v = q.v;
  const top = lsEl('div', 'vc-card-top');
  top.appendChild(lsEl('span', 'ls-count', `Từ ${W.idx + 1} / ${W.qs.length}`));
  const dots = lsEl('div', 'ls-dots');
  W.qs.forEach((x, i) => dots.appendChild(lsEl('span', 'ls-dot' + (x.done ? (x.first ? ' ok' : ' skip') : '') + (i === W.idx ? ' now' : ''))));
  top.appendChild(dots);
  body.appendChild(top);
  const card = lsEl('div', 'tense-card wr-card irr-wr');
  card.appendChild(lsEl('div', 'vc-q-label', 'Viết dạng V2 và V3 của'));
  card.appendChild(lsEl('div', 'vc-f-big', v.v1));
  card.appendChild(lsEl('div', 'vc-f-ipa', v.ipa));
  card.appendChild(lsEl('div', 'vsp-sub', v.meaning));
  const audio = lsEl('div', 'wr-audio');
  const a1 = lsEl('button', 'ls-slow', '🔊 Nghe V1'); a1.addEventListener('click', () => speak(irrFirst(v.v1), 0.8));
  audio.appendChild(a1);
  card.appendChild(audio);
  const grid = lsEl('div', 'irr-wr-grid');
  const mk = (lab, key, ok, val) => {
    const box = lsEl('label', 'irr-wr-f' + (ok === true ? ' ok' : ok === false ? ' bad' : ''));
    box.appendChild(lsEl('span', 'irr-form-lab', lab));
    const inp = lsEl('input', 'wr-input');
    inp.type = 'text'; inp.value = val; inp.dataset.k = key;
    inp.setAttribute('autocomplete', 'off'); inp.setAttribute('autocapitalize', 'off'); inp.setAttribute('autocorrect', 'off'); inp.spellcheck = false;
    inp.placeholder = lab === 'V2' ? 'quá khứ đơn' : 'quá khứ phân từ';
    if (q.done) inp.disabled = true;
    box.appendChild(inp);
    return { box, inp };
  };
  const f2 = mk('V2', 'a2', q.ok2, q.a2), f3 = mk('V3', 'a3', q.ok3, q.a3);
  grid.appendChild(f2.box); grid.appendChild(f3.box);
  card.appendChild(grid);
  body.appendChild(card);
  const check = () => {
    q.a2 = f2.inp.value.trim(); q.a3 = f3.inp.value.trim();
    if (!q.a2 || !q.a3) { (q.a2 ? f3 : f2).inp.focus(); return; }
    const norm = s => s.toLowerCase().replace(/[’']/g, '').replace(/\s+/g, ' ').trim();
    q.ok2 = irrAlts(v.v2).includes(norm(q.a2)); q.ok3 = irrAlts(v.v3).includes(norm(q.a3));
    q.tries++;
    if (q.ok2 && q.ok3) { q.done = true; if (q.first === null) q.first = q.tries === 1; irrGrade(v, q.first, 'wr', q.first ? 100 : 50); speak(irrSaySample(v), 0.8); }
    irrRenderWrite();
  };
  [f2.inp, f3.inp].forEach(inp => inp.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    if (inp === f2.inp && !f3.inp.value.trim()) f3.inp.focus(); else check();
  }));
  if (q.done) {
    const fb = lsEl('div', 'vc-fb ' + (q.first ? 'ok' : 'bad'));
    fb.appendChild(lsEl('div', 'vc-fb-title', q.first ? 'Chính xác!' : 'Đúng rồi — lần sau nhớ ngay nhé.'));
    const line = lsEl('div', 'vc-fb-line');
    line.appendChild(lsEl('b', null, `${v.v1} – ${v.v2} – ${v.v3}`));
    line.appendChild(document.createTextNode(` · ${IRR_PATTERNS[v.pat]}`));
    fb.appendChild(line);
    if (v.ex) { const ex = lsEl('div', 'vc-ex'); ex.innerHTML = irrExHtml(v); fb.appendChild(ex); }
    body.appendChild(fb);
    const next = lsEl('button', 'btn-primary vc-next', W.idx + 1 < W.qs.length ? 'Từ tiếp →' : 'Xem kết quả');
    next.addEventListener('click', () => { W.idx++; irrRenderWrite(); });
    body.appendChild(next);
    setTimeout(() => { try { next.focus(); } catch (e) {} }, 0);
  } else {
    if (q.tries) {
      const fb = lsEl('div', 'vc-fb bad');
      fb.appendChild(lsEl('div', 'vc-fb-title', 'Chưa đúng, sửa ô màu đỏ rồi kiểm tra lại.'));
      if (q.tries >= 2) fb.appendChild(lsEl('div', 'vc-fb-line', `Gợi ý: V2 bắt đầu bằng "${irrFirst(v.v2).slice(0, 2)}…", V3 bắt đầu bằng "${irrFirst(v.v3).slice(0, 2)}…"`));
      body.appendChild(fb);
    }
    const btns = lsEl('div', 'ls-sum-btns');
    const show = lsEl('button', 'btn-ghost', '👀 Xem đáp án');
    show.addEventListener('click', () => { q.a2 = irrFirst(v.v2); q.a3 = irrFirst(v.v3); q.ok2 = q.ok3 = true; q.done = true; q.first = false; irrGrade(v, false, 'wr', 0); speak(irrSaySample(v), 0.8); irrRenderWrite(); });
    const ck = lsEl('button', 'btn-primary', 'Kiểm tra');
    ck.addEventListener('click', check);
    btns.appendChild(show); btns.appendChild(ck);
    body.appendChild(btns);
    setTimeout(() => { try { ((q.ok2 === true) ? f3 : f2).inp.focus({ preventScroll: true }); } catch (e) {} }, 0);
  }
}
function irrWriteSummary() {
  const body = irrBody(), W = irr.wr;
  const ok = W.qs.filter(q => q.first), miss = W.qs.filter(q => !q.first);
  const box = lsEl('div', 'tense-card vc-done');
  box.appendChild(lsEl('div', 'vc-done-big', `${ok.length} / ${W.qs.length}`));
  box.appendChild(lsEl('div', 'ls-verdict', ok.length === W.qs.length ? 'Tuyệt vời! Viết đúng hết ngay lần đầu.' : ok.length / W.qs.length >= 0.6 ? 'Khá tốt! Viết lại vài từ sai là thuộc.' : 'Cần ôn thêm, xem lại danh sách rồi viết lại nhé.'));
  if (miss.length) {
    box.appendChild(lsEl('div', 'vc-done-sub', 'Những động từ cần viết lại:'));
    const card = lsEl('div', 'vc-card vc-wrong');
    miss.forEach(q => card.appendChild(irrRow(q.v, false)));
    box.appendChild(card);
  }
  box.appendChild(lsEl('div', 'vc-done-sub', 'Kết quả đã được ghi vào lịch ôn: từ viết đúng ngay được hẹn ôn lại, từ sai chuyển sang “Cần ôn”.'));
  const btns = lsEl('div', 'ls-sum-btns');
  const again = lsEl('button', 'btn-ghost', 'Viết lại tất cả'); again.addEventListener('click', () => irrStartWrite());
  btns.appendChild(again);
  if (miss.length) { const rv = lsEl('button', 'btn-primary', `Viết lại ${miss.length} từ sai`); rv.addEventListener('click', () => irrStartWrite(miss.map(q => q.v))); btns.appendChild(rv); }
  box.appendChild(btns);
  irrNextUnitBtn(box);
  body.appendChild(box);
}

/* ---------- chấm điểm phát âm: đọc 3 dạng hoặc câu ví dụ ---------- */
function irrSpStop() {
  if (irr.sp) irr.sp.busy = false;
  if (prRecog) { try { prRecog.abort(); } catch (e) {} prRecog = null; }
}
const irrSpTarget = (v, what) => what === 'ex' && v.ex ? v.ex : irrSay3(v);
function irrStartSpeak(only) {
  irrSpStop();
  const items = only || irr.unit.items;
  const weak = items.filter(v => (irrSpGet(v, irr.spWhat) ?? -1) < 90), good = items.filter(v => (irrSpGet(v, irr.spWhat) ?? -1) >= 90);
  irr.sp = { what: irr.spWhat, qs: [...weak, ...good].map(v => ({ v, best: null, last: null, tries: 0, err: '', prev: irrSpGet(v, irr.spWhat) })), idx: 0, busy: false };
  irrRenderSpeak();
}
function irrRenderSpeak() {
  const body = irrBody();
  if (!body) return;
  body.innerHTML = '';
  const S = irr.sp;
  if (S.idx >= S.qs.length) return irrSpeakSummary();
  const q = S.qs[S.idx], v = q.v, target = irrSpTarget(v, S.what);
  const bar = lsEl('div', 'vc-list-bar vsp-bar');
  const chips = lsEl('div', 'colloc-chips');
  [['w', '🔤 Đọc 3 dạng'], ['ex', '💬 Đọc câu ví dụ']].forEach(([w, label]) => {
    const c = lsEl('button', 'colloc-chip' + (S.what === w ? ' active' : ''), label);
    c.addEventListener('click', () => {
      if (S.what === w) return;
      irr.spWhat = w; try { localStorage.setItem(IRR_SP_KEY + '-what', w); } catch (e) {}
      irrStartSpeak();
    });
    chips.appendChild(c);
  });
  bar.appendChild(chips);
  body.appendChild(bar);
  const top = lsEl('div', 'vc-card-top');
  top.appendChild(lsEl('span', 'ls-count', `${S.what === 'ex' ? 'Câu' : 'Từ'} ${S.idx + 1} / ${S.qs.length}`));
  const dots = lsEl('div', 'ls-dots');
  S.qs.forEach((x, i) => dots.appendChild(lsEl('span', 'ls-dot' + (x.best ? ' ' + ({ ok: 'ok', mid: 'hint', bad: 'skip' })[vspCls(x.best.pct)] : '') + (i === S.idx ? ' now' : ''))));
  top.appendChild(dots);
  body.appendChild(top);
  const card = lsEl('div', 'tense-card wr-card vsp-card');
  card.appendChild(lsEl('div', 'vc-q-label', S.what === 'ex' ? 'Đọc to câu này' : 'Đọc to cả 3 dạng'));
  if (S.what !== 'ex' && IRR_SOUND[v.v1]) card.appendChild(lsEl('div', 'irr-alt', `⚑ Viết giống nhau nhưng đọc khác: V1 ${(v.ipa || '').split(' · ')[0]}, V2 – V3 ${(v.ipa2 || '').split(' · ')[0]}. Nên luyện thêm bằng câu ví dụ.`));
  if (S.what === 'ex' && v.ex) {
    const ex = lsEl('div', 'vsp-sent'); ex.innerHTML = irrExHtml(v, false); card.appendChild(ex);
    if (v.exvi) card.appendChild(lsEl('div', 'vsp-sent-vi', v.exvi));
    card.appendChild(lsEl('div', 'vsp-sub', `${v.v1} – ${v.v2} – ${v.v3} · ${v.meaning}`));
  } else {
    card.appendChild(lsEl('div', 'vc-f-big irr-say3', `${irrFirst(v.v1)} – ${irrFirst(v.v2)} – ${irrFirst(v.v3)}`));
    card.appendChild(lsEl('div', 'vc-f-ipa', [v.ipa, v.ipa2, v.ipa3].map(x => (x || '').split(' · ')[0]).join('  ')));
    card.appendChild(lsEl('div', 'vsp-sub', v.meaning));
  }
  if (q.prev != null) card.appendChild(lsEl('div', 'vsp-prev ' + vspCls(q.prev), `Kỷ lục trước: ${q.prev}%`));
  const audio = lsEl('div', 'wr-audio');
  const sample = S.what === 'ex' ? target : irrSaySample(v);
  const a1 = lsEl('button', 'ls-slow', '🔊 Nghe mẫu'); a1.addEventListener('click', () => speak(sample, S.what === 'ex' ? 0.85 : 0.75));
  const a2 = lsEl('button', 'ls-slow', '🐢 Chậm'); a2.addEventListener('click', () => speak(sample, 0.5));
  audio.appendChild(a1); audio.appendChild(a2);
  card.appendChild(audio);
  body.appendChild(card);
  const out = lsEl('div', 'pr-speak-out vsp-out');
  const recOut = lsEl('div', 'pr-rec-out');
  if (!PR_SR) {
    out.className = 'pr-speak-out warn';
    out.textContent = 'Trình duyệt này chưa hỗ trợ nhận dạng giọng nói nên chưa chấm điểm được. Trên iPhone hãy mở app bằng Safari; trên máy tính dùng Chrome hoặc Edge. Bạn vẫn có thể ghi âm để tự so với giọng mẫu.';
  } else if (q.err) {
    out.className = 'pr-speak-out warn'; out.textContent = q.err;
  } else if (q.last) {
    prShowScore(out, q.last);
    if (q.tries > 1) out.appendChild(lsEl('div', 'vsp-tries', `Lần ${q.tries} · độ khớp cao nhất lượt này: ${q.best.pct}%`));
  }
  out.classList.add('vsp-out');
  const btns = lsEl('div', 'pr-speak-btns vsp-btns');
  const mic = lsEl('button', 'btn-primary pr-mic', S.busy ? '👂 Đang nghe… hãy đọc to' : q.tries ? '🎙️ Nói lại' : '🎙️ Bấm rồi đọc to');
  if (S.busy) mic.classList.add('listening');
  mic.disabled = !PR_SR;
  mic.addEventListener('click', () => {
    if (S.busy) { try { prRecog && prRecog.stop(); } catch (e) {} return; }
    S.busy = true; q.err = '';
    irrRenderSpeak();
    vspListen(target, (best, err) => {
      if (irr.sp !== S || S.qs[S.idx] !== q) return;
      S.busy = false;
      if (best) {
        best.pct = Math.round(best.score * 100);
        q.tries++; q.last = best;
        if (!q.best || best.pct > q.best.pct) q.best = best;
        irrSpSave(v, S.what, best.pct);
      } else if (err) q.err = err;
      irrRenderSpeak();
    }, t => { const b = irrBody(), o = b && b.querySelector('.vsp-out'); if (o && irr.sp === S && S.busy) { o.className = 'pr-speak-out vsp-out vsp-live'; o.textContent = '👂 ' + t; } });
  });
  const rec = lsEl('button', 'btn-ghost pr-rec', '⏺ Ghi âm & nghe lại');
  rec.addEventListener('click', () => prToggleRecord(target, rec, recOut));
  btns.appendChild(mic); btns.appendChild(rec);
  body.appendChild(btns);
  body.appendChild(out);
  body.appendChild(recOut);
  const nav = lsEl('div', 'vsp-nav');
  if (S.idx > 0) {
    const pv = lsEl('button', 'btn-ghost', '← Trước');
    pv.addEventListener('click', () => { irrSpStop(); S.idx--; irrRenderSpeak(); });
    nav.appendChild(pv);
  }
  const nx = lsEl('button', q.best ? 'btn-primary' : 'btn-ghost', S.idx + 1 < S.qs.length ? (q.best ? (S.what === 'ex' ? 'Câu tiếp →' : 'Từ tiếp →') : 'Bỏ qua →') : 'Xem kết quả');
  nx.addEventListener('click', () => { irrSpStop(); S.idx++; irrRenderSpeak(); });
  nav.appendChild(nx);
  body.appendChild(nav);
}
function irrSpeakSummary() {
  const body = irrBody(), S = irr.sp;
  const done = S.qs.filter(q => q.best), skip = S.qs.filter(q => !q.best);
  const box = lsEl('div', 'tense-card vc-done');
  if (!done.length) {
    box.appendChild(lsEl('div', 'vc-done-big', '🎙️'));
    box.appendChild(lsEl('div', 'ls-verdict', 'Bạn chưa nói từ nào trong lượt này.'));
    box.appendChild(lsEl('div', 'vc-done-sub', 'Bấm 🎙️ rồi đọc to cả 3 dạng để app đo độ khớp nhận diện giọng nói.'));
    const again = lsEl('button', 'btn-primary', 'Bắt đầu lại'); again.addEventListener('click', () => irrStartSpeak());
    box.appendChild(again);
    body.appendChild(box);
    return;
  }
  const avg = Math.round(done.reduce((k, q) => k + q.best.pct, 0) / done.length);
  box.appendChild(lsEl('div', 'vc-done-big vsp-avg ' + vspCls(avg), avg + '%'));
  box.appendChild(lsEl('div', 'vc-done-sub', `Độ khớp nhận diện giọng nói trung bình · ${done.length} ${S.what === 'ex' ? 'câu' : 'từ'} đã nói (không phải điểm phát âm tuyệt đối)`));
  box.appendChild(lsEl('div', 'ls-verdict', avg >= 90 ? 'Tuyệt vời! Máy nghe bạn rất rõ 🎉' : avg >= 70 ? 'Khá tốt! Luyện thêm vài từ chưa đạt là ổn.' : 'Cứ luyện tiếp nhé: nghe mẫu, đọc chậm và rõ âm cuối.'));
  const ok = done.filter(q => q.best.pct >= 90), mid = done.filter(q => q.best.pct >= 60 && q.best.pct < 90), bad = done.filter(q => q.best.pct < 60);
  const stats = lsEl('div', 'ls-stats');
  [['ok', ok.length, 'đạt ≥ 90%'], ['hint', mid.length, '60 – 89%'], ['skip', bad.length, 'dưới 60%']].forEach(([c, n, l]) => {
    const st = lsEl('div', 'ls-stat ' + c); st.appendChild(lsEl('span', 'n', String(n))); st.appendChild(lsEl('span', 'l', l)); stats.appendChild(st);
  });
  box.appendChild(stats);
  if (skip.length) box.appendChild(lsEl('div', 'vc-done-sub', `Bỏ qua ${skip.length} ${S.what === 'ex' ? 'câu' : 'từ'} chưa nói`));
  const low = [...bad, ...mid].sort((x, y) => x.best.pct - y.best.pct);
  const weak = [...low, ...skip];
  if (low.length) {
    box.appendChild(lsEl('div', 'vc-done-sub', 'Những từ cần luyện thêm:'));
    const card = lsEl('div', 'vc-card vc-wrong');
    low.forEach(q => card.appendChild(irrRow(q.v, false)));
    box.appendChild(card);
  }
  const btns = lsEl('div', 'ls-sum-btns');
  const again = lsEl('button', 'btn-ghost', 'Chấm lại tất cả'); again.addEventListener('click', () => irrStartSpeak());
  btns.appendChild(again);
  if (weak.length) {
    const rv = lsEl('button', 'btn-primary', `Luyện lại ${weak.length} ${S.what === 'ex' ? 'câu' : 'từ'}`);
    rv.addEventListener('click', () => irrStartSpeak(weak.map(q => q.v)));
    btns.appendChild(rv);
  }
  box.appendChild(btns);
  irrNextUnitBtn(box);
  body.appendChild(box);
}

/* ============================================================
   v115 · Bất quy tắc: tiến độ 5 trạng thái + lịch ôn 1·3·7·14·30 ngày, dạng thay thế,
   bài điền V2/V3 theo ngữ cảnh, nghe & nhận diện, động từ dễ nhầm, kiểm tra tổng hợp
============================================================ */
const IRR_SRS_KEY = 'hoc-tieng-anh-irr-srs', IRR_FAV_KEY = 'hoc-tieng-anh-irr-fav', IRR_HIST_KEY = 'hoc-tieng-anh-irr-hist';
const IRR_INT = [1, 3, 7, 14, 30];
const irrToday = () => { const d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 864e5); };
let irrSrs = {}, irrFav = new Set(), irrHist = [];
try { const o = JSON.parse(localStorage.getItem(IRR_SRS_KEY) || '{}'); if (o && typeof o === 'object' && !Array.isArray(o)) irrSrs = o; } catch (e) {}
try { const a = JSON.parse(localStorage.getItem(IRR_FAV_KEY) || '[]'); if (Array.isArray(a)) irrFav = new Set(a); } catch (e) {}
try { const a = JSON.parse(localStorage.getItem(IRR_HIST_KEY) || '[]'); if (Array.isArray(a)) irrHist = a.slice(0, 8); } catch (e) {}
// từ đã đánh dấu ✓ ở bản cũ → coi như "đang thành thạo", ôn lại sau 3 ngày
irrDone.forEach(k => { if (!irrSrs[k]) irrSrs[k] = { b: 2, n: 0, w: 0, due: irrToday() + 3, last: irrToday() }; });
const irrSrsSave = () => { try { localStorage.setItem(IRR_SRS_KEY, JSON.stringify(irrSrs)); } catch (e) {} };
const irrFavSave = () => { try { localStorage.setItem(IRR_FAV_KEY, JSON.stringify([...irrFav])); } catch (e) {} };
const IRR_ST = {
  new: ['Chưa học', '○', 'Chưa bắt đầu'],
  learning: ['Đang học', '📖', 'Đã xem V1 – V2 – V3'],
  review: ['Cần ôn', '🔁', 'Trả lời sai, chưa nhớ hoặc đến lịch ôn'],
  mastering: ['Đang thành thạo', '🌿', 'Đã trả lời đúng qua các bài kiểm tra'],
  master: ['Thành thạo', '🏆', 'Nhớ chính xác qua nhiều lần ôn cách ngày']
};
const IRR_ST_ORDER = ['new', 'learning', 'review', 'mastering', 'master'];
function irrStatus(v) {
  const r = irrSrs[v.v1];
  if (!r) return 'new';
  if (r.bad || (r.b >= 1 && r.due <= irrToday())) return 'review';
  return r.b >= 4 ? 'master' : r.b >= 2 ? 'mastering' : 'learning';
}
const irrDue = () => IRREGULAR_VERBS.filter(v => irrStatus(v) === 'review');
function irrSeen(v) { if (!irrSrs[v.v1]) { irrSrs[v.v1] = { b: 0, n: 0, w: 0, due: irrToday(), last: irrToday() }; irrSrsSave(); } }
// chấm một lần trả lời: đúng → lên một bậc và hẹn ôn sau 1, 3, 7, 14, 30 ngày; sai → về bậc thấp, ôn ngay
function irrGrade(v, ok, kind, val, grade) {
  try { if (window.actLog && kind !== 'rv') actLog('v'); } catch (e) {}
  try {   // v143: Mistakes (không tính thẻ tự chấm)
    if (kind !== 'card' && kind !== 'rv' && v && v.v1) {
      const k = 'irr|' + v.v1;
      if (ok) { if (window.mkOk) window.mkOk(k); }
      else if (window.mkAdd) window.mkAdd({ k, src: 'irr', cat: 'Động từ bất quy tắc', mode: 'irr', p: `“${v.v1}” (${v.meaning || ''})`, a: [v.v2 + '|' + v.v3], right: `${v.v1} → ${v.v2} → ${v.v3}`, why: v.ipa ? 'Phiên âm: ' + v.ipa : '' });
    }
  } catch (e) {}
  const r = irrSrs[v.v1] || (irrSrs[v.v1] = { b: 0, n: 0, w: 0, due: irrToday(), last: irrToday() });
  const t = irrToday();
  // v132: FSRS cho hạn ôn; thẻ cũ được ước lượng từ bậc đang có
  if (r.n || r.b) srSeed(r, IRR_INT[Math.max(0, (r.b || 1) - 1)], (r.w || 0) * 2 > (r.n || 0), r.last);
  r.n = (r.n || 0) + 1; r.last = t;
  if (ok) {
    // chỉ lên bậc khi đã đến hạn (học dồn trong một ngày không làm bậc tăng vọt)
    if (r.bad || r.b < 2 || r.due <= t) { r.b = Math.min(5, (r.b || 0) + 1); r.due = t + srApply(r, grade || 3, t); }
    r.bad = false;
  } else { r.w = (r.w || 0) + 1; r.b = r.b >= 2 ? 1 : 0; srApply(r, 1, t); r.due = t; r.bad = true; }
  if (kind === 'wr' && val != null) r.wr = Math.max(r.wr || 0, val);
  if (r.b >= 2) irrDone.add(v.v1); else irrDone.delete(v.v1);
  try { localStorage.setItem(IRR_DONE_KEY, JSON.stringify([...irrDone])); } catch (e) {}
  irrSrsSave();
}
const irrFmtDue = r => { if (!r) return ''; const d = r.due - irrToday(); return d <= 0 ? 'ôn hôm nay' : d === 1 ? 'ôn ngày mai' : `ôn sau ${d} ngày`; };

/* ---------- dạng thay thế: mỗi tổ hợp V2/V3 có thể thuộc một nhóm khác ---------- */
const irrPatOf = (a, b, c) => a === b && b === c ? 'AAA' : b === c ? 'ABB' : a === c ? 'ABA' : 'ABC';
const IRR_ALT_NOTE = {
  get: 'gotten là dạng V3 phổ biến trong tiếng Anh Mỹ (I have gotten better); tiếng Anh Anh dùng got (I have got better). “have got” còn có nghĩa là “có”.',
  dive: 'dove hay gặp trong tiếng Anh Mỹ, dived dùng cả Anh và Mỹ. V3 luôn là dived.',
  prove: 'proved và proven đều đúng ở V3; proven hay dùng như tính từ (a proven method).',
  sneak: 'snuck là dạng thân mật, phổ biến ở Mỹ; sneaked trang trọng hơn.',
  bear: 'borne: “mang, chịu đựng” (costs borne by the company). born chỉ dùng trong “be born” = được sinh ra.',
  be: 'was dùng với I / he / she / it; were dùng với you / we / they.',
  fit: 'fit (V2, V3) phổ biến trong tiếng Anh Mỹ; tiếng Anh Anh thường dùng fitted.',
  speed: 'sped: đi nhanh, lao đi; speeded (up): làm tăng tốc độ.',
  plead: 'pled hay gặp ở Mỹ (văn nói, pháp lý); pleaded dùng phổ biến hơn.',
  mow: 'mown hay dùng như tính từ (freshly mown grass); mowed dùng được ở cả V2 và V3.',
  sow: 'sown phổ biến hơn ở V3; sowed vẫn đúng.',
  knit: 'knitted dùng khi nói đan len; knit hay dùng nghĩa bóng (a close-knit family).',
  wet: 'wet phổ biến hơn; wetted ít gặp, thường trong văn kỹ thuật.',
  wed: 'wed và wedded đều đúng; wed hay gặp trên báo chí.',
  thrive: 'thrived phổ biến hơn nhiều; throve / thriven mang tính văn chương.',
  hew: 'hewn hay dùng như tính từ (rough-hewn); hewed cũng đúng.',
  saw: 'saw (cưa) khác với saw là V2 của see. V3: sawn (Anh) hoặc sawed (Mỹ).',
  input: 'input phổ biến hơn; inputted cũng được chấp nhận.',
  bust: 'busted phổ biến trong tiếng Anh Mỹ, mang tính thân mật.',
  clothe: 'clad mang tính văn chương, thường dùng như tính từ (ivy-clad walls).',
  bereave: 'bereaved: mất người thân; bereft (of): mất đi, thiếu (bereft of hope).'
};
IRREGULAR_VERBS.forEach(v => {
  const A = irrAlts(v.v1), B = irrAlts(v.v2), C = irrAlts(v.v3);
  const combos = [];
  // cùng số dạng ở V2 và V3 → ghép theo thứ tự (burnt–burnt, burned–burned); khác số → mọi tổ hợp (dived/dove – dived)
  const pairs = B.length === C.length ? B.map((b, i) => [b, C[i]]) : B.flatMap(b => C.map(c => [b, c]));
  pairs.forEach(([b, c]) => { const p = irrPatOf(A[0], b, c); if (!combos.some(x => x.p === p)) combos.push({ b, c, p }); });
  v.pats = new Set(combos.map(x => x.p));
  v.combos = combos;
  v.multi = B.length > 1 || C.length > 1;
});
function irrAltNote(v) {
  if (!v.multi && !IRR_ALT_NOTE[v.v1]) return '';
  const parts = [];
  if (v.pats.size > 1) parts.push(v.combos.map(x => `${irrFirst(v.v1)} – ${x.b} – ${x.c} (${IRR_PATTERNS[x.p]})`).join(' · ') + '.');
  if (IRR_ALT_NOTE[v.v1]) parts.push(IRR_ALT_NOTE[v.v1]);
  else if ([...irrAlts(v.v2), ...irrAlts(v.v3)].some(x => /t$/.test(x)) && [...irrAlts(v.v2), ...irrAlts(v.v3)].some(x => /ed$/.test(x)))
    parts.push('Cả hai dạng đều đúng: dạng -ed phổ biến hơn trong tiếng Anh Mỹ, dạng -t hay gặp hơn trong tiếng Anh Anh.');
  else if (v.multi) parts.push('Các dạng cách nhau bằng “/” đều đúng; dạng đứng trước phổ biến hơn.');
  return parts.join(' ');
}

/* ---------- câu ngữ cảnh lấy từ câu ví dụ: tìm chỗ V2/V3 và lý do ---------- */
const IRR_SKIP = /^(always|never|just|already|ever|not|n't|recently|finally|also|often|all|both|been|being|once|still|really|nearly|almost|completely|suddenly|quickly)$/;
const irrTokW = t => t.toLowerCase().replace(/[’]/g, "'").replace(/[^a-z'-]/g, '');
function irrCtx(v) {
  if (v._ctx !== undefined) return v._ctx;
  v._ctx = null;
  if (!v.ex) return null;
  const toks = v.ex.split(/\s+/);
  const f2 = irrAlts(v.v2), f3 = irrAlts(v.v3), f1 = irrAlts(v.v1);
  let k = -1;
  toks.forEach((t, i) => { const w = irrTokW(t); if (k < 0 && (f2.includes(w) || f3.includes(w)) && !(f1.includes(w) && !f2.includes(w) && !f3.includes(w))) k = i; });
  if (k < 0) return null;
  const form = irrTokW(toks[k]);
  let need = 'v2', why = 'past';
  for (let j = k - 1; j >= Math.max(0, k - 4); j--) {
    const w = irrTokW(toks[j]);
    if (IRR_SKIP.test(w)) continue;
    if (/^(have|has|had|'ve|'d|haven't|hasn't|hadn't)$/.test(w) || /'ve$|'d$/.test(w)) { need = 'v3'; why = 'perfect'; }
    else if (/^(is|are|am|was|were|be|been|being|get|gets|got|isn't|aren't|wasn't|weren't)$/.test(w) || /'s$|'re$|'m$/.test(w) && f3.includes(form) && !f2.includes(form)) { need = 'v3'; why = 'passive'; }
    break;
  }
  if (need === 'v2' && !f2.includes(form) && f3.includes(form)) { need = 'v3'; why = 'adj'; }
  if (v.v1 === 'be') { need = 'v2'; why = 'past'; }
  const pre = toks.slice(0, k).join(' '), m = toks[k].match(/^([^A-Za-z]*)([A-Za-z'’-]+)(.*)$/) || ['', '', toks[k], ''];
  const post = toks.slice(k + 1).join(' ');
  v._ctx = { pre: (pre ? pre + ' ' : '') + m[1], post: m[3] + (post ? ' ' + post : ''), form, need, why, raw: m[2] };
  return v._ctx;
}
const IRR_WHY = {
  past: 'Câu kể một việc đã xảy ra và kết thúc trong quá khứ (thì quá khứ đơn), nên dùng V2.',
  perfect: 'Sau have / has / had là thì hoàn thành, nên dùng V3 (quá khứ phân từ).',
  passive: 'Sau be (is, was, were, been…) mang nghĩa bị động, nên dùng V3.',
  adj: 'Ở đây động từ được dùng như tính từ / bị động rút gọn, nên dùng V3.'
};
const irrNeedForms = (v, c) => c.need === 'v2' ? irrAlts(v.v2) : irrAlts(v.v3);
// dạng sai để làm câu "sửa lỗi": dạng còn lại (nếu khác) hoặc dạng -ed tự tạo
function irrWrongForm(v, c) {
  const ok = new Set(irrNeedForms(v, c));
  const other = c.need === 'v2' ? irrAlts(v.v3) : irrAlts(v.v2);
  const o = other.find(x => !ok.has(x));
  if (o) return o;
  const reg = irrRegular(v.v1);
  if (!ok.has(reg) && !irrAlts(v.v2).includes(reg) && !irrAlts(v.v3).includes(reg)) return reg;
  if (c.need === 'v3') { const b = irrFirst(v.v1); if (!ok.has(b)) return b; }
  return null;
}

/* ---------- chế độ "Điền câu": 5 dạng bài, có giải thích V2 hay V3 ---------- */
function irrStartCtx(only) {
  const items = (only || irr.unit.items).filter(v => irrCtx(v));
  const types = ['fill', 'choose', 'fix', 'trans', 'fill'];
  irr.cx = { qs: lsShuffle(items).map((v, i) => {
    const c = irrCtx(v);
    let type = types[i % types.length];
    if (type === 'fix' && !irrWrongForm(v, c)) type = 'choose';
    if (type === 'trans' && !v.exvi) type = 'fill';
    let opts = null;
    if (type === 'choose') {
      const right = c.form;
      const cand = [c.need === 'v2' ? irrFirst(v.v3) : irrFirst(v.v2), irrRegular(v.v1), irrFirst(v.v1).replace(/e$/, '') + 'ing'];
      if (c.need === 'v3') cand.push(irrFirst(v.v1));
      const bad = new Set(irrNeedForms(v, c));
      opts = [right];
      cand.forEach(x => { if (opts.length < 4 && !bad.has(x) && !opts.includes(x)) opts.push(x); });
      opts = lsShuffle(opts);
    }
    return { v, c, type, opts, ans: '', picked: null, done: false, ok: null };
  }), idx: 0, score: 0 };
  irrRenderCtx();
}
function irrCtxSentence(c, gap) {
  const s = lsEl('div', 'irr-cx-s');
  s.appendChild(document.createTextNode(c.pre));
  s.appendChild(gap);
  s.appendChild(document.createTextNode(c.post));
  return s;
}
function irrRenderCtx() {
  const body = irrBody(); body.innerHTML = '';
  const X = irr.cx;
  if (!X.qs.length) { body.appendChild(lsEl('div', 'empty-state', 'Bài này chưa có câu ngữ cảnh.')); return; }
  if (X.idx >= X.qs.length) {
    const n = X.qs.length, wrong = X.qs.filter(q => !q.ok).map(q => q.v);
    const box = lsEl('div', 'tense-card vc-done');
    box.appendChild(lsEl('div', 'vc-done-big', `${X.score} / ${n}`));
    box.appendChild(lsEl('div', 'ls-verdict', X.score / n >= 0.9 ? 'Xuất sắc! Bạn dùng V2 / V3 rất chắc.' : X.score / n >= 0.6 ? 'Khá tốt! Xem lại giải thích các câu sai nhé.' : 'Cần luyện thêm: nhớ quy tắc “quá khứ đơn → V2, sau have/be → V3”.'));
    if (wrong.length) { box.appendChild(lsEl('div', 'vc-done-sub', 'Những động từ cần xem lại:')); const card = lsEl('div', 'vc-card vc-wrong'); [...new Set(wrong)].forEach(v => card.appendChild(irrRow(v, false))); box.appendChild(card); }
    const btns = lsEl('div', 'ls-sum-btns');
    const again = lsEl('button', 'btn-ghost', 'Làm lại'); again.addEventListener('click', () => irrStartCtx());
    btns.appendChild(again);
    if (wrong.length) { const rv = lsEl('button', 'btn-primary', `Luyện lại ${new Set(wrong).size} từ sai`); rv.addEventListener('click', () => irrStartCtx([...new Set(wrong)])); btns.appendChild(rv); }
    box.appendChild(btns); irrNextUnitBtn(box); body.appendChild(box); return;
  }
  const q = X.qs[X.idx], v = q.v, c = q.c;
  const top = lsEl('div', 'vc-card-top');
  top.appendChild(lsEl('span', 'ls-count', `Câu ${X.idx + 1} / ${X.qs.length}`));
  top.appendChild(lsEl('span', 'ls-count', `Đúng: ${X.score}`));
  body.appendChild(top);
  const card = lsEl('div', 'tense-card vc-q irr-cx');
  const LBL = { fill: '✍️ Điền dạng đúng của động từ trong ngoặc', choose: '🔘 Chọn dạng đúng', fix: '🛠️ Câu có một lỗi động từ — gõ lại từ đúng', trans: '🇻🇳 Dịch sang tiếng Anh: điền động từ còn thiếu' };
  card.appendChild(lsEl('div', 'vc-q-label', LBL[q.type]));
  const show = q.done;
  if (q.type === 'trans') card.appendChild(lsEl('div', 'irr-cx-vi', v.exvi));
  let inp = null;
  if (q.type === 'fix') {
    const wrongW = irrWrongForm(v, c);
    card.appendChild(irrCtxSentence(c, lsEl('b', 'irr-cx-bad' + (show ? ' fixed' : ''), show ? c.raw : wrongW)));
  } else {
    const gap = lsEl('span', 'irr-cx-gap' + (show ? (q.ok ? ' ok' : ' bad') : ''), show ? c.raw : (q.type === 'fill' ? `_____ (${irrFirst(v.v1)})` : '_____'));
    card.appendChild(irrCtxSentence(c, gap));
  }
  if (q.type === 'fill' && v.exvi && show) card.appendChild(lsEl('div', 'irr-cx-vi sm', v.exvi));
  body.appendChild(card);
  const finish = ok => {
    q.done = true; q.ok = ok; if (ok) X.score++;
    irrGrade(v, ok, 'cx');
    irrRenderCtx();
    speak(v.ex, 0.85);
  };
  if (q.type === 'choose') {
    const opts = lsEl('div', 'vc-opts');
    q.opts.forEach(o => {
      let cls = 'vc-opt';
      if (q.done) { if (o === c.form) cls += ' ok'; else if (o === q.picked) cls += ' bad'; }
      const b = lsEl('button', cls, o);
      b.addEventListener('click', () => { if (q.done) return; q.picked = o; finish(irrNeedForms(v, c).includes(o)); });
      opts.appendChild(b);
    });
    body.appendChild(opts);
  } else if (!q.done) {
    const row = lsEl('div', 'irr-cx-in');
    inp = lsEl('input', 'wr-input'); inp.type = 'text'; inp.value = q.ans;
    inp.placeholder = q.type === 'fix' ? 'Từ đúng là…' : 'Gõ động từ đúng dạng…';
    inp.setAttribute('autocomplete', 'off'); inp.setAttribute('autocapitalize', 'off'); inp.setAttribute('autocorrect', 'off'); inp.spellcheck = false;
    const ck = lsEl('button', 'btn-primary', 'Kiểm tra');
    const go = () => { const a = inp.value.trim().toLowerCase().replace(/[’']/g, "'"); if (!a) { inp.focus(); return; } q.ans = a; finish(irrNeedForms(v, c).includes(a)); };
    ck.addEventListener('click', go);
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); go(); } });
    row.appendChild(inp); row.appendChild(ck);
    body.appendChild(row);
    const skip = lsEl('button', 'sd-link irr-cx-skip', '👀 Không biết, xem đáp án');
    skip.addEventListener('click', () => { q.ans = ''; finish(false); });
    body.appendChild(skip);
    setTimeout(() => { try { inp.focus({ preventScroll: true }); } catch (e) {} }, 0);
  }
  if (q.done) {
    const fb = lsEl('div', 'vc-fb ' + (q.ok ? 'ok' : 'bad'));
    fb.appendChild(lsEl('div', 'vc-fb-title', q.ok ? 'Chính xác!' : q.ans || q.picked ? `Chưa đúng: “${q.ans || q.picked}”. Đáp án: ${irrNeedForms(v, c).join(' / ')}` : `Đáp án: ${irrNeedForms(v, c).join(' / ')}`));
    let why = IRR_WHY[c.why];
    if (!q.ok && q.ans && irrAlts(v.v1).includes(q.ans) && c.need === 'v2') why += ' V1 chỉ dùng cho hiện tại.';
    else if (!q.ok && (q.ans || q.picked) && c.need === 'v2' && irrAlts(v.v3).includes(q.ans || q.picked)) why += ' V3 chỉ đứng sau have / has / had hoặc be, không đứng một mình.';
    else if (!q.ok && (q.ans || q.picked) && c.need === 'v3' && irrAlts(v.v2).includes(q.ans || q.picked)) why += ' V2 không đứng sau have hoặc be.';
    fb.appendChild(lsEl('div', 'irr-cx-why', '💡 ' + why));
    const line = lsEl('div', 'vc-fb-line'); line.appendChild(lsEl('b', null, `${v.v1} – ${v.v2} – ${v.v3}`)); line.appendChild(document.createTextNode(` · ${v.meaning}`)); fb.appendChild(line);
    body.appendChild(fb);
    const next = lsEl('button', 'btn-primary vc-next', X.idx + 1 < X.qs.length ? 'Câu tiếp →' : 'Xem kết quả');
    next.addEventListener('click', () => { X.idx++; irrRenderCtx(); });
    body.appendChild(next);
    setTimeout(() => { try { next.focus({ preventScroll: true }); } catch (e) {} }, 0);
  }
}

/* ---------- Nghe & nhận diện: nghe một dạng, chọn V1 / V2 / V3 ---------- */
// "read" viết giống nhau nhưng đọc khác: dùng cách viết đồng âm để giọng máy đọc đúng
const IRR_SOUND = { read: ['reed', 'red', 'red'], reread: ['reread', 'rered', 'rered'], misread: ['misreed', 'misred', 'misred'], proofread: ['proofreed', 'proofred', 'proofred'], lipread: ['lipreed', 'lipred', 'lipred'] };
const irrSayForm = (v, k) => IRR_SOUND[v.v1] ? IRR_SOUND[v.v1][k] : irrFirst([v.v1, v.v2, v.v3][k]);
const irrSaySample = v => IRR_SOUND[v.v1] ? IRR_SOUND[v.v1].join(', ') : irrSay3(v);
function irrStartHear(only) {
  const items = (only || irr.unit.items).filter(v => v.pat !== 'AAA' || IRR_SOUND[v.v1]);
  irr.hr = { qs: lsShuffle(items).map(v => {
    const F = [irrFirst(v.v1), irrFirst(v.v2), irrFirst(v.v3)];
    const ks = [0, 1, 2].filter(k => IRR_SOUND[v.v1] || k === 0 || F[k] !== F[0]);
    const k = ks[Math.floor(Math.random() * ks.length)];
    return { v, k, picked: null };
  }), idx: 0, score: 0 };
  irrRenderHear();
}
function irrRenderHear() {
  const body = irrBody(); body.innerHTML = '';
  const H = irr.hr;
  if (!H.qs.length) { body.appendChild(lsEl('div', 'empty-state', 'Bài này toàn động từ có 3 dạng giống nhau nên không cần luyện nghe phân biệt.')); return; }
  if (H.idx >= H.qs.length) {
    const box = lsEl('div', 'tense-card vc-done');
    box.appendChild(lsEl('div', 'vc-done-big', `${H.score} / ${H.qs.length}`));
    box.appendChild(lsEl('div', 'ls-verdict', H.score / H.qs.length >= 0.9 ? 'Tai rất tốt! Bạn phân biệt được các dạng động từ.' : 'Nghe lại các từ sai, chú ý nguyên âm và âm cuối.'));
    const btns = lsEl('div', 'ls-sum-btns'); const again = lsEl('button', 'btn-primary', 'Nghe lượt mới'); again.addEventListener('click', () => irrStartHear()); btns.appendChild(again); box.appendChild(btns);
    irrNextUnitBtn(box); body.appendChild(box); return;
  }
  const q = H.qs[H.idx], v = q.v;
  const F = [irrFirst(v.v1), irrFirst(v.v2), irrFirst(v.v3)];
  const top = lsEl('div', 'vc-card-top');
  top.appendChild(lsEl('span', 'ls-count', `Câu ${H.idx + 1} / ${H.qs.length}`));
  top.appendChild(lsEl('span', 'ls-count', `Đúng: ${H.score}`));
  body.appendChild(top);
  const card = lsEl('div', 'tense-card vc-q irr-hear');
  card.appendChild(lsEl('div', 'vc-q-label', `Bạn vừa nghe dạng nào của động từ ${F[0].toUpperCase()}?`));
  card.appendChild(lsEl('div', 'vsp-sub', v.meaning));
  const play = lsEl('button', 'irr-hear-play', '🔊'); play.setAttribute('aria-label', 'Nghe lại');
  play.addEventListener('click', () => speak(irrSayForm(v, q.k), 0.75));
  card.appendChild(play);
  const slow = lsEl('button', 'ls-slow', '🐢 Nghe chậm'); slow.addEventListener('click', () => speak(irrSayForm(v, q.k), 0.5));
  card.appendChild(slow);
  body.appendChild(card);
  const opts = lsEl('div', 'vc-opts irr-hear-opts');
  // các dạng viết giống nhau gộp thành một lựa chọn (trừ read: viết giống nhưng đọc khác)
  const choices = [];
  [0, 1, 2].forEach(k => { const lab = ['V1', 'V2', 'V3'][k]; const same = !IRR_SOUND[v.v1] && choices.find(c => c.w === F[k]); if (same) same.labs.push(lab), same.ks.push(k); else choices.push({ w: F[k], labs: [lab], ks: [k], ipa: [v.ipa, v.ipa2, v.ipa3][k] }); });
  choices.forEach(ch => {
    const right = ch.ks.includes(q.k);
    let cls = 'vc-opt irr-hear-o';
    if (q.picked) { if (right) cls += ' ok'; else if (q.picked === ch) cls += ' bad'; }
    const b = lsEl('button', cls);
    b.appendChild(lsEl('b', null, ch.labs.join(' / ')));
    b.appendChild(document.createTextNode(' · ' + ch.w));
    if (q.picked) b.appendChild(lsEl('span', 'irr-hear-ipa', (ch.ipa || '').split(' · ')[0]));
    b.addEventListener('click', () => { if (q.picked) return; q.picked = ch; if (right) H.score++; irrGrade(v, right, 'hr'); irrRenderHear(); });
    opts.appendChild(b);
  });
  body.appendChild(opts);
  if (q.picked) {
    const fb = lsEl('div', 'vc-fb ' + (q.picked.ks.includes(q.k) ? 'ok' : 'bad'));
    fb.appendChild(lsEl('div', 'vc-fb-title', q.picked.ks.includes(q.k) ? 'Chính xác!' : `Đó là ${['V1', 'V2', 'V3'][q.k]}: ${F[q.k]}`));
    const line = lsEl('div', 'vc-fb-line'); line.appendChild(lsEl('b', null, `${v.v1} – ${v.v2} – ${v.v3}`)); line.appendChild(document.createTextNode(`  ${[v.ipa, v.ipa2, v.ipa3].map(x => (x || '').split(' · ')[0]).join(' ')}`)); fb.appendChild(line);
    const cmp = lsEl('div', 'vc-audio');
    [0, 1, 2].forEach(k => { const b = lsEl('button', 'ls-slow', `▶ ${['V1', 'V2', 'V3'][k]}`); b.addEventListener('click', () => speak(irrSayForm(v, k), 0.75)); cmp.appendChild(b); });
    fb.appendChild(cmp);
    body.appendChild(fb);
    const next = lsEl('button', 'btn-primary vc-next', H.idx + 1 < H.qs.length ? 'Câu tiếp →' : 'Xem kết quả');
    next.addEventListener('click', () => { H.idx++; irrRenderHear(); });
    body.appendChild(next);
  } else if (!q.played) { q.played = true; setTimeout(() => speak(irrSayForm(v, q.k), 0.75), 200); }
}

/* ---------- động từ dễ nhầm lẫn ---------- */
/* IRR_CONF: xem file dữ liệu */
function irrRenderConf(id) {
  irrSpStop(); irr.view = 'conf';
  irrRoot.innerHTML = '';
  const back = lsEl('button', 'gr-back', id ? '← Các động từ dễ nhầm' : '← Tất cả động từ');
  back.addEventListener('click', () => { if (id) irrRenderConf(); else irrRenderHome(); irrTop(); });
  irrRoot.appendChild(back);
  if (!id) {
    irrRoot.appendChild(vcHead('⚠️', 'Confusing verbs', `${IRR_CONF.length} cặp hay nhầm: dạng, nghĩa, cách đọc và bài tập phân biệt`));
    const list = lsEl('div', 'vc-units');
    IRR_CONF.forEach((c, i) => {
      const b = lsEl('button', 'vc-unit');
      b.appendChild(lsEl('span', 'vc-unit-num', String(i + 1)));
      const info = lsEl('span', 'vc-unit-info'); info.appendChild(lsEl('span', 'vc-unit-vi', c.t)); info.appendChild(lsEl('span', 'vc-unit-en', c.sub)); b.appendChild(info);
      b.appendChild(lsEl('span', 'vc-unit-go', '›'));
      b.addEventListener('click', () => { irrRenderConf(c.id); irrTop(); });
      list.appendChild(b);
    });
    irrRoot.appendChild(list);
    return;
  }
  const c = IRR_CONF.find(x => x.id === id);
  irrRoot.appendChild(vcHead('⚠️', c.t, c.sub));
  const card = lsEl('div', 'tense-card irr-conf');
  const tb = lsEl('table', 'irr-conf-t'); const hr = lsEl('tr'); ['V1', 'V2', 'V3', 'Nghĩa'].forEach(h => hr.appendChild(lsEl('th', null, h))); tb.appendChild(hr);
  c.rows.forEach(r => {
    const tr = lsEl('tr');
    [r[0], r[1], r[2]].forEach((f, k) => { const td = lsEl('td'); const b = lsEl('button', 'irr-conf-w', f); b.addEventListener('click', () => speak(c.id === 'read' ? ['reed', 'red', 'red'][k] : f.replace(/\(.*\)/, '').split('/')[0].trim(), 0.75)); td.appendChild(b); tr.appendChild(td); });
    const tdm = lsEl('td', 'irr-conf-m'); tdm.appendChild(lsEl('div', null, r[4])); tdm.appendChild(lsEl('div', 'irr-conf-ipa', r[3])); tr.appendChild(tdm);
    tb.appendChild(tr);
  });
  card.appendChild(tb);
  card.appendChild(lsEl('div', 'sd-tip-t', 'Cách dùng'));
  card.appendChild(lsEl('p', 'tn-goal', c.use));
  card.appendChild(lsEl('div', 'sd-tip-t', 'Ví dụ'));
  c.ex.forEach(([en, vi], k) => { const r = lsEl('div', 'irr-conf-ex'); const pb = lsEl('button', 'irr-conf-play', '▶'); pb.setAttribute('aria-label', 'Nghe câu'); pb.addEventListener('click', () => speak(c.say ? c.say[k] : en.replace(/\s*\/.*\/$/, ''), 0.85)); r.appendChild(pb); const t = lsEl('div'); t.appendChild(lsEl('div', 'irr-conf-en', en)); t.appendChild(lsEl('div', 'vc-exvi', vi)); r.appendChild(t); card.appendChild(r); });
  card.appendChild(lsEl('div', 'sd-tip-t', 'Lỗi thường gặp'));
  card.appendChild(lsEl('div', 'irr-conf-err', c.err));
  irrRoot.appendChild(card);
  // bài tập phân biệt
  const qz = lsEl('div', 'tense-card irr-conf-qz');
  qz.appendChild(lsEl('div', 'vc-q-label', '🧩 Bài tập phân biệt'));
  c.qz.forEach(([s, ans, opts, why]) => {
    const it = lsEl('div', 'irr-conf-q');
    it.appendChild(lsEl('div', 'irr-conf-qs', s));
    const row = lsEl('div', 'colloc-chips');
    const fb = lsEl('div', 'irr-conf-fb');
    opts.forEach(o => {
      const b = lsEl('button', 'colloc-chip', o);
      b.addEventListener('click', () => {
        if (it.dataset.done) return; it.dataset.done = '1';
        row.querySelectorAll('button').forEach(x => { if (x.textContent === ans) x.classList.add('ok'); else if (x === b) x.classList.add('bad'); x.disabled = true; });
        fb.className = 'irr-conf-fb ' + (o === ans ? 'ok' : 'bad');
        fb.textContent = (o === ans ? '✓ Đúng. ' : `✗ Đáp án: ${ans}. `) + why;
      });
      row.appendChild(b);
    });
    it.appendChild(row); it.appendChild(fb);
    qz.appendChild(it);
  });
  irrRoot.appendChild(qz);
  const i = IRR_CONF.indexOf(c);
  if (IRR_CONF[i + 1]) { const nx = lsEl('button', 'btn-primary vc-next-unit', `Tiếp: ${IRR_CONF[i + 1].t} →`); nx.addEventListener('click', () => { irrRenderConf(IRR_CONF[i + 1].id); irrTop(); }); irrRoot.appendChild(nx); }
}

/* ---------- bảng tổng hợp 4 nhóm biến đổi ---------- */
function irrRenderPatTable() {
  irrSpStop(); irr.view = 'pats';
  irrRoot.innerHTML = '';
  const back = lsEl('button', 'gr-back', '← Tất cả động từ'); back.addEventListener('click', () => { irrRenderHome(); irrTop(); }); irrRoot.appendChild(back);
  irrRoot.appendChild(vcHead('🧩', 'Patterns', 'Học theo quy luật thay vì thuộc danh sách dài'));
  const EXS = { AAA: ['cut', 'put', 'let', 'hit', 'cost', 'set'], ABB: ['buy', 'make', 'have', 'find', 'tell', 'keep'], ABA: ['come', 'run', 'become', 'overcome'], ABC: ['go', 'see', 'write', 'take', 'speak', 'eat'] };
  const grid = lsEl('div', 'irr-pt-grid');
  ['AAA', 'ABB', 'ABA', 'ABC'].forEach(p => {
    const all = IRREGULAR_VERBS.filter(v => v.pat === p), alt = IRREGULAR_VERBS.filter(v => v.pat !== p && v.pats.has(p));
    const got = irrCount(all);
    const c = lsEl('div', 'tense-card irr-pt');
    const h = lsEl('div', 'irr-pt-h'); h.appendChild(lsEl('b', null, IRR_PATTERNS[p])); h.appendChild(lsEl('span', 'irr-pt-n', `${all.length} từ`)); c.appendChild(h);
    c.appendChild(lsEl('div', 'irr-pt-hint', IRR_PAT_HINT[p]));
    const exl = lsEl('div', 'irr-pt-ex');
    EXS[p].map(w => IRREGULAR_VERBS.find(v => v.v1 === w)).filter(Boolean).forEach(v => { const b = lsEl('button', 'irr-pt-v', `${irrFirst(v.v1)} – ${irrFirst(v.v2)} – ${irrFirst(v.v3)}`); b.addEventListener('click', () => speak(irrSaySample(v), 0.75)); exl.appendChild(b); });
    c.appendChild(exl);
    c.appendChild(lsEl('div', 'irr-pt-meta', `Đã thuộc ${got}/${all.length}` + (alt.length ? ` · thêm ${alt.length} từ có dạng thay thế thuộc nhóm này` : '')));
    c.appendChild(vcBar(all.length ? got / all.length : 0));
    const acts = lsEl('div', 'ls-sum-btns');
    const ls = lsEl('button', 'btn-ghost', '📋 Xem danh sách'); ls.addEventListener('click', () => { irr.pat = p; irr.patLv = 0; irrRenderHome(); irrTop(); });
    const pr = lsEl('button', 'btn-primary', '🃏 Luyện 20 từ'); pr.addEventListener('click', () => { const todo = all.filter(v => !irrIs(v)); irrOpenUnit({ mix: true, icon: '🃏', vi: 'Luyện nhóm ' + IRR_PATTERNS[p], en: IRR_PAT_HINT[p], items: lsShuffle(todo.length >= 20 ? todo : all).slice(0, 20) }, 'cards'); });
    acts.appendChild(ls); acts.appendChild(pr); c.appendChild(acts);
    grid.appendChild(c);
  });
  irrRoot.appendChild(grid);
  const multi = IRREGULAR_VERBS.filter(v => v.multi);
  irrRoot.appendChild(lsEl('p', 'ls-level-desc', `⚑ ${multi.length} động từ có dạng thay thế ở V2 hoặc V3 (ví dụ dive – dived/dove – dived). Mỗi từ được xếp vào nhóm theo dạng phổ biến nhất, và hiện ghi chú khi dạng còn lại thuộc nhóm khác.`));
}

/* ---------- kiểm tra tổng hợp 10 / 30 / 50 câu, ưu tiên từ cần ôn và hay sai ---------- */
function irrPickTest(n, lv) {
  const pool = IRREGULAR_VERBS.filter(v => !lv || v.lv === lv);
  const score = v => { const r = irrSrs[v.v1]; const st = irrStatus(v); return (st === 'review' ? 0 : st === 'learning' ? 1 : st === 'new' ? 2 : st === 'mastering' ? 3 : 4) - (r ? Math.min(2, (r.w || 0) * 0.5) : 0) + Math.random() * 1.5; };
  return pool.map(v => [v, score(v)]).sort((a, b) => a[1] - b[1]).slice(0, n).map(x => x[0]);
}
function irrTestBox() {
  const box = lsEl('div', 'tense-card irr-test');
  box.appendChild(lsEl('div', 'vc-q-label', '📝 Mixed test'));
  box.appendChild(lsEl('p', 'ls-level-desc', 'Câu hỏi chọn ngẫu nhiên, ưu tiên từ cần ôn, từ hay sai và từ chưa học. Gồm hỏi V2, V3, nghĩa và chọn dạng đúng trong câu.'));
  let lv = 0;
  const lvs = lsEl('div', 'colloc-chips');
  [[0, 'Mọi cấp'], ...IRR_LEVELS.map(L => [L.n, L.code])].forEach(([k, t]) => { const c = lsEl('button', 'colloc-chip' + (k === lv ? ' active' : ''), t); c.addEventListener('click', () => { lv = k; lvs.querySelectorAll('.colloc-chip').forEach(x => x.classList.toggle('active', x === c)); }); lvs.appendChild(c); });
  box.appendChild(lvs);
  const row = lsEl('div', 'irr-test-row');
  [[10, '⚡ Nhanh · 10 câu'], [30, '🎯 Theo cấp · 30 câu'], [50, '🏁 Tổng hợp · 50 câu']].forEach(([n, t]) => {
    const b = lsEl('button', n === 10 ? 'btn-primary' : 'btn-ghost', t);
    b.addEventListener('click', () => { const items = irrPickTest(n, lv); irrOpenUnit({ mix: true, test: true, icon: '📝', vi: `Kiểm tra ${n} câu`, en: (lv ? 'Cấp ' + IRR_LEVELS[lv - 1].code : 'Mọi cấp độ') + ' · ưu tiên từ cần ôn', items }, 'quiz'); });
    row.appendChild(b);
  });
  box.appendChild(row);
  return box;
}

document.querySelectorAll('nav.tabbar button').forEach(b => b.addEventListener('click', () => {
  if (b.dataset.page !== 'page-irregular') { irrSeqStop(); irrSpStop(); return; }
  if (irr.view === 'home') irrRenderHome();
}));
whenPageShown('page-irregular', irrRoot, irrRenderHome);

/* ============================================================
   WRITE MODE ("Viết từ") — shared by the vocabulary & collocation tabs.
   See the meaning + hear the word → type it in English.
   ctx = { body, items, word, meaning, pos, ipa, exHtml, isLearned, markLearned, row, afterMark, nextBtn }
============================================================ */
const wrNorm = s => (s || '').toLowerCase().replace(/[’‘`]/g, "'").replace(/[.?!,;:]+/g, ' ').replace(/\s+/g, ' ').trim();
const wrIsLetter = ch => /[a-z0-9]/i.test(ch);

function wrStart(ctx, only) {
  let items = only || ctx.items;
  if (!only && items.length > 40) items = lsShuffle(items).slice(0, 25);
  const todo = items.filter(it => !ctx.isLearned(it)), done = items.filter(it => ctx.isLearned(it));
  ctx.st = { qs: [...lsShuffle(todo), ...lsShuffle(done)].map(it => ({ it, attempts: 0, shown: new Set(), retype: false, done: false, result: null, last: '', diff: null })), idx: 0 };
  wrRender(ctx);
  wrSayCurrent(ctx);
}
function wrSayCurrent(ctx) {
  const q = ctx.st.qs[ctx.st.idx];
  if (q) speak(ctx.word(q.it), 0.8);
}
function wrLetterIdx(ans) { const out = []; for (let i = 0; i < ans.length; i++) if (wrIsLetter(ans[i])) out.push(i); return out; }

/* letter-level LCS: which typed letters are right, which answer letters are missing */
function wrDiff(typed, ans) {
  const a = typed.toLowerCase(), b = ans.toLowerCase();
  const n = a.length, m = b.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--)
    dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const okA = new Set(); let i = 0, j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) { okA.add(i); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++;
  }
  return { okA, missing: Math.max(0, m - okA.size) };
}

function wrMask(q, ans) {
  const box = lsEl('div', 'wr-mask');
  ans.split(' ').reduce((pos, word) => {
    const wd = lsEl('span', 'wr-wd');
    for (let k = 0; k < word.length; k++) {
      const ch = word[k], gi = pos + k;
      if (!wrIsLetter(ch)) { wd.appendChild(lsEl('span', 'wr-ch punct', ch)); continue; }
      const show = q.done || q.shown.has(gi);
      wd.appendChild(lsEl('span', 'wr-ch' + (q.shown.has(gi) && !q.done ? ' rev' : '') + (q.done ? ' fin ' + q.result : ''), show ? ch : ''));
    }
    box.appendChild(wd);
    return pos + word.length + 1;
  }, 0);
  return box;
}

function wrRender(ctx) {
  const body = ctx.body();
  body.innerHTML = '';
  const S = ctx.st;
  if (S.idx >= S.qs.length) return wrSummary(ctx);
  const q = S.qs[S.idx], it = q.it, ans = ctx.word(it);

  const top = lsEl('div', 'vc-card-top');
  top.appendChild(lsEl('span', 'ls-count', `Từ ${S.idx + 1} / ${S.qs.length}`));
  const dots = lsEl('div', 'ls-dots');
  S.qs.forEach((x, i) => dots.appendChild(lsEl('span', 'ls-dot' + (x.result ? ' ' + x.result : '') + (i === S.idx ? ' now' : ''))));
  top.appendChild(dots);
  body.appendChild(top);

  const card = lsEl('div', 'tense-card wr-card');
  card.appendChild(lsEl('div', 'vc-q-label', q.retype ? 'Gõ lại cho đúng một lần để nhớ' : 'Viết bằng tiếng Anh'));
  card.appendChild(lsEl('div', 'vc-f-big vc-f-vi wr-mean', ctx.meaning(it)));
  const pos = ctx.pos(it);
  if (pos) card.appendChild(lsEl('div', 'vc-pos', pos));
  const audio = lsEl('div', 'wr-audio');
  const a1 = lsEl('button', 'ls-slow', '🔊 Nghe'); a1.addEventListener('click', () => speak(ans, 0.8));
  const a2 = lsEl('button', 'ls-slow', '🐢 Chậm'); a2.addEventListener('click', () => speak(ans, 0.5));
  audio.appendChild(a1); audio.appendChild(a2);
  card.appendChild(audio);
  card.appendChild(wrMask(q, ans));
  const letters = wrLetterIdx(ans).length;
  card.appendChild(lsEl('div', 'wr-count', `${letters} chữ cái` + (ans.includes(' ') ? ` · ${ans.split(' ').length} từ` : '')));
  const ex = lsEl('div', 'vc-ex wr-ex');
  const exHtml = ctx.exHtml(it);
  ex.innerHTML = q.done ? exHtml : exHtml.replace(/<b>.*?<\/b>/, '<span class="wr-gap">_____</span>');
  card.appendChild(ex);
  body.appendChild(card);

  if (!q.done) {
    const inp = lsEl('input', 'wr-input');
    inp.type = 'text'; inp.value = q.last || '';
    inp.placeholder = q.retype ? 'Gõ lại: ' + ans : 'Gõ từ tiếng Anh…';
    ['autocomplete', 'autocorrect', 'autocapitalize'].forEach(a => inp.setAttribute(a, 'off'));
    inp.setAttribute('spellcheck', 'false');
    inp.addEventListener('input', () => { q.last = inp.value; });
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); wrCheck(ctx); } });
    body.appendChild(inp);
    const btns = lsEl('div', 'ls-btns');
    const check = lsEl('button', 'btn-primary', 'Kiểm tra'); check.addEventListener('click', () => wrCheck(ctx));
    btns.appendChild(check);
    if (!q.retype) {
      const hint = lsEl('button', 'btn-ghost', 'Gợi ý 1 chữ'); hint.addEventListener('click', () => wrHint(ctx));
      const show = lsEl('button', 'btn-ghost', 'Xem đáp án'); show.addEventListener('click', () => wrReveal(ctx));
      btns.appendChild(hint); btns.appendChild(show);
    } else {
      const skip = lsEl('button', 'btn-ghost', 'Bỏ qua →'); skip.addEventListener('click', () => { q.done = true; wrNext(ctx); });
      btns.appendChild(skip);
    }
    body.appendChild(btns);
    if (q.diff) {
      const fb = lsEl('div', 'ls-feedback');
      fb.appendChild(lsEl('div', 'ls-msg', q.retype ? 'Đáp án là "' + ans + '". Gõ lại đúng một lần để nhớ nhé.' : `Chưa đúng (lần ${q.attempts}/3). Chữ đỏ là chữ sai hoặc thừa` + (q.diff.missing ? `, còn thiếu ${q.diff.missing} chữ.` : '.')));
      if (q.diff.typed) {
        const t = lsEl('div', 'wr-diff');
        t.appendChild(lsEl('span', 'ls-typed-label', 'Bạn viết: '));
        [...q.diff.typed].forEach((ch, i) => t.appendChild(lsEl('span', ch === ' ' ? 'sp' : q.diff.okA.has(i) ? 'ok' : 'bad', ch === ' ' ? ' ' : ch)));
        fb.appendChild(t);
      }
      body.appendChild(fb);
    }
    setTimeout(() => { try { inp.focus({ preventScroll: true }); } catch (e) {} }, 30);
  } else {
    const r = q.result;
    const box = lsEl('div', 'ls-answer ' + r);
    box.appendChild(lsEl('div', 'ls-verdict', r === 'ok' ? 'Chính xác! 🎉' : r === 'hint' ? 'Đúng rồi!' : 'Cố lên, lần sau sẽ nhớ!'));
    const line = lsEl('div', 'ls-sentence');
    line.appendChild(lsEl('span', 'wr-ans', ans));
    const ipa = ctx.ipa(it);
    if (ipa) line.appendChild(lsEl('span', 'vc-ipa wr-ipa', ipa));
    const again = lsEl('span', 'play-mini', '▶'); again.setAttribute('role', 'button'); again.addEventListener('click', () => speak(ans, 0.8));
    line.appendChild(again);
    box.appendChild(line);
    const next = lsEl('button', 'btn-primary ls-next', S.idx + 1 < S.qs.length ? 'Từ tiếp →' : 'Xem kết quả');
    next.addEventListener('click', () => wrNext(ctx));
    box.appendChild(next);
    body.appendChild(box);
  }
}

function wrCheck(ctx) {
  const S = ctx.st, q = S.qs[S.idx], ans = ctx.word(q.it);
  const typed = (q.last || '').trim();
  if (!typed) return;
  if (wrNorm(typed) === wrNorm(ans)) {
    if (!q.retype) q.result = q.attempts === 0 && q.shown.size === 0 ? 'ok' : 'hint';
    q.done = true; q.diff = null;
    speak(ans, 0.8);
  } else if (q.retype) {
    q.diff = Object.assign(wrDiff(typed, ans), { typed });
  } else {
    q.attempts++;
    q.diff = Object.assign(wrDiff(typed, ans), { typed });
    if (q.attempts >= 3) { q.result = 'skip'; q.retype = true; q.last = ''; speak(ans, 0.7); }
  }
  wrRender(ctx);
}
function wrHint(ctx) {
  const S = ctx.st, q = S.qs[S.idx], ans = ctx.word(q.it);
  const idx = wrLetterIdx(ans).find(i => !q.shown.has(i));
  if (idx == null) return wrReveal(ctx);
  q.shown.add(idx);
  if (wrLetterIdx(ans).every(i => q.shown.has(i))) return wrReveal(ctx);
  wrRender(ctx);
}
function wrReveal(ctx) {
  const S = ctx.st, q = S.qs[S.idx], ans = ctx.word(q.it);
  q.result = 'skip'; q.retype = true; q.last = ''; q.diff = { okA: new Set(), missing: 0, typed: '' };
  speak(ans, 0.7);
  wrRender(ctx);
}
function wrNext(ctx) {
  { const q = ctx.st.qs[ctx.st.idx]; if (q && q.result && !q.logged && ctx.onAnswer) { q.logged = 1; ctx.onAnswer(q.it, q.result); } }
  ctx.st.idx++;
  wrRender(ctx);
  wrSayCurrent(ctx);
}
function wrSummary(ctx) {
  const body = ctx.body(), S = ctx.st;
  const ok = S.qs.filter(q => q.result === 'ok'), hint = S.qs.filter(q => q.result === 'hint'), skip = S.qs.filter(q => q.result === 'skip');
  const box = lsEl('div', 'tense-card vc-done');
  box.appendChild(lsEl('div', 'vc-done-big', `${ok.length + hint.length} / ${S.qs.length}`));
  const r = ok.length / S.qs.length;
  box.appendChild(lsEl('div', 'ls-verdict', r >= 0.9 ? 'Tuyệt vời! Bạn viết đúng gần như hết.' : r >= 0.6 ? 'Khá lắm! Viết lại các từ sai thêm một lượt nhé.' : 'Viết nhiều lần sẽ nhớ lâu, thử lại nhé!'));
  const stats = lsEl('div', 'ls-stats');
  [['ok', ok.length, 'đúng ngay'], ['hint', hint.length, 'đúng sau gợi ý'], ['skip', skip.length, 'xem đáp án']].forEach(([c, n, l]) => {
    const st = lsEl('div', 'ls-stat ' + c); st.appendChild(lsEl('span', 'n', String(n))); st.appendChild(lsEl('span', 'l', l)); stats.appendChild(st);
  });
  box.appendChild(stats);
  const review = [...hint, ...skip].map(q => q.it);
  if (review.length) {
    box.appendChild(lsEl('div', 'vc-done-sub', 'Những từ cần viết lại:'));
    const card = lsEl('div', 'vc-card vc-wrong');
    review.forEach(it => card.appendChild(ctx.row(it)));
    box.appendChild(card);
  }
  const newOk = ok.map(q => q.it).filter(it => !ctx.isLearned(it));
  if (newOk.length) {
    const mk = lsEl('button', 'btn-ghost wr-mark', `✓ Đánh dấu đã thuộc ${newOk.length} từ viết đúng ngay`);
    mk.addEventListener('click', () => { newOk.forEach(it => ctx.markLearned(it)); ctx.afterMark(); mk.disabled = true; mk.textContent = '✓ Đã đánh dấu'; });
    box.appendChild(mk);
  }
  const btns = lsEl('div', 'ls-sum-btns');
  const again = lsEl('button', 'btn-ghost', 'Viết lại tất cả'); again.addEventListener('click', () => wrStart(ctx));
  btns.appendChild(again);
  if (review.length) { const rv = lsEl('button', 'btn-primary', `Viết lại ${review.length} từ sai`); rv.addEventListener('click', () => wrStart(ctx, review)); btns.appendChild(rv); }
  box.appendChild(btns);
  ctx.nextBtn(box);
  body.appendChild(box);
}

function vcWriteCtx() {
  return { body: () => document.getElementById('vc-body'), items: vc.unit.items, word: it => it.w, meaning: it => it.vi,
           pos: it => VC_POS[it.pos] || '', ipa: it => it.ipa, exHtml: vcExHtml, isLearned: vcIs, markLearned: it => vcSet(it, true),
           row: it => vcRow(it, false), afterMark: vcUpdateProg, nextBtn: vcNextUnitBtn,
           onAnswer: (it, r) => srsGrade(it, r === 'ok' ? 2 : r === 'hint' ? 1 : 0) };
}

/* BC_LEVELS: xem file dữ liệu */
/* ==========================================================================
   VIDEO BC — British Council LearnEnglish videos (YouTube embeds), by CEFR
   ========================================================================== */
var BC_STATE = { lv: 'a2', q: '', cur: null, watched: null, seg: 0, slow: false };
const BC_KEY = 'hoc-tieng-anh-bc-watched';
function bcWatched() {
  if (!BC_STATE.watched) {
    let arr = [];
    try { arr = JSON.parse(localStorage.getItem(BC_KEY) || '[]'); } catch (e) {}
    BC_STATE.watched = new Set(Array.isArray(arr) ? arr : []);
  }
  return BC_STATE.watched;
}
function bcSaveWatched() { try { localStorage.setItem(BC_KEY, JSON.stringify([...bcWatched()])); } catch (e) {} }
/* v207: podcast "A1 English Listening Practice" của kênh YouTube Listening Time (Conner Pe, giọng Mỹ, nói chậm và rõ).
   Chỉ nhúng trình phát chính thức của YouTube, có ghi nguồn; app không tải hay sao chép video / lời thoại. */
const LT_A1 = [["erjMgola4fQ", "Language Learning", "3:43"], ["uVGV8LG3HHM", "Cooking", "5:59"], ["eYAaLWdx_h0", "Weather", "5:04"], ["2XRnB4wy4yA", "Pets", "4:28"], ["98pYyFdHw38", "New Year's Resolutions", "4:11"], ["aQ0w2I0Eb9I", "Daily Routine", "4:46"], ["Y6CERK3AXCw", "Social Media Apps", "4:31"], ["uxbG_tFS0Jw", "Exercise", "4:47"], ["ApzkloKc3Lc", "Homes", ""], ["jbdoyphEcsc", "Soccer", ""], ["v95eemWZ-4s", "Jobs", ""], ["Wlehc1l50bk", "Transportation", "4:25"], ["96SnY-0Ofw0", "Technology", ""], ["XWq58Abc7zk", "Supermarket", ""], ["h6sAX1y35Zg", "Money", ""], ["SXR3KPLyyt0", "Education", ""], ["2hFGsSB02JY", "Free Time", ""], ["CSj8Y_s_38c", "American Sports", ""], ["U39JONkW2FE", "The Internet", ""], ["cRemof9m4BQ", "Productivity", "7:40"], ["PMuwE810XGk", "The English Language", ""], ["osfpfrKapZU", "Music", "6:52"], ["SbKOqfbsnd4", "Summer", "6:24"], ["qLR9QD8vxK8", "Countries", ""], ["vvnTnvSuF6o", "Working from Home", ""], ["BKK3QuZ0nFM", "Staying Organized", ""]];
const LT_PLAYLIST = 'https://www.youtube.com/playlist?list=PLhNRdHEdUQewzYZ0X6gt3x9_CVen_HldI';
/* v214: Miss Honey · Slow English Podcast (Tayanna Ortiz) — các khoá A1 và A2 trong tab "Khoá học" của kênh. Chỉ nhúng trình phát YouTube. */
const MH_LV = {"a1": [["TnZrQthIWAQ", "Learn English While I Chat With You | BEGINNER english listening", "8:42"], ["YZIuyMhCtBg", "Absolute Beginner English | Comprehensible input for Beginners", "10:02"], ["_Wc9iN5hT_0", "ABSOLUTE BEGINNER ENGLISH | What's In My Bag?", "12:24"], ["2QsxCYPZ-6o", "English Listening Practice for Beginners: My Weekend! (A1-A2)", "14:37"], ["zmBWacJ6CQk", "Slow English Conversations (A1+ comprehensible input)", "39:21"], ["7WGo4np9MxQ", "Beginner English Speaking Practice | Real-Life Role Play (A1)", "15:37"], ["mNuwbXsPoh8", "ABSOLUTE Beginner Slow English - What is my favorite holiday?", "10:01"], ["y82fpgtwujY", "How to Introduce yourself in English — FOR BEGINNERS!", "10:50"], ["D-NNZadsYY4", "Slow English Podcast - The Giving Tree for Beginners (A1–A2)", "11:38"], ["VJyK8k2GJoY", "A Day in My Life - Slow English Podcast (A1 – Present Simple)", "7:26"], ["OZNwavtgRQM", "Slow English Reading: Rainbow Fish for Beginners (A1–A2)", "10:59"], ["F1lzm63PToM", "Learn English with SLOW Interviews (comprehensible input) - A1+ Sleep Routines", "16:01"], ["eQKkCYrlSrI", "A1 BEGINNER Slow English Podcast — SLEEP & REST Vocabulary", "11:58"], ["5e0hnKuaxiI", "SLOW English Podcast —- Chat with me about foods!", "3:13"], ["hP0EceBuGjg", "SLOW English Podcast for Beginners— talking about GOALS", "6:52"], ["k4Vsa0AONT4", "SLOW English Podcast for Beginners! — talking about friends", "3:51"], ["i6W7d30fcf0", "Practice SLOW English Podcast - Talking about Weather", "7:37"], ["9Zb2NO0131g", "Practice SLOW English for A1 Beginners! — Talk about FAMILY", "2:58"], ["PH3vpQRdxoE", "Slow English Listening for Beginners - Talking about LANGUAGES", "3:03"], ["GcsCi5H4L_Y", "Beginner English Slow Listening Practice —- Talking about ME", "2:37"], ["kVNYOW3eMk4", "Slow English for Beginners (A1 Listening Practice)", "4:39"]], "a2": [["aSGMUmmT-nY", "Spend a Day at the Beach With Me | Learn English Naturally", "16:19"], ["rhaTiv7qTjI", "How to Actually Learn English With Me", "7:41"], ["HuXMurDSOBE", "What YOU Taught Me About Hope | Slow English Listening", "7:42"], ["kjZ4pJfpfYE", "Learn IN, ON & AT Naturally | English Listening Practice", "16:28"], ["GSjp0YTNP2U", "Pronunciation Practice: 50+ English Words to Sound Natural", "21:28"], ["ftzw9ImVrgE", "100+ Essential English Words for Daily Life | Slow English Vocabulary", "1:00:55"], ["XhP506HYiuk", "Learn English Travel Vlog | for BEGINNERS", "15:45"], ["XhU_0SsNFKE", "Sleep and Learn English: Shadow Positive Affirmations", "19:11"], ["qxKNbwkIM30", "How to ACTUALLY Learn English (10 Tips That Really Work)", "23:58"], ["ieYe7AF6mnI", "Learn English at Home (Slow English)", "17:46"], ["wKZkxYCGMdw", "Slow English Reading - Learn English with Children's Books (comprehensible input)", "7:42"], ["VbOpdmAPmkE", "Learn English Vlog | My trip to the Elephant Sanctuary(comprehensible input)", "20:31"], ["O9c2XvxMuwg", "English Sleep Learning: Shadowing Positive Affirmations", "20:39"], ["XcNt1AorUrM", "Slow English Podcast | A day in my life! A2 English Listening Practice", "11:34"], ["DhIqcI_SgOE", "ASMR Learn English while sleeping with relaxing sounds: Slow English Podcast", "16:29"], ["CJoVQHh4H2E", "Slow English Podcast - My day! A2 Listening Practice", "11:42"], ["dtacwt0Tmiw", "Daily English Affirmations for Speaking, Confidence & Fluency - “I am a fluent English speaker”", "12:28"], ["EZJO4dDrROU", "Learn English with SLOW conversations (comprehensible input) - A1+ WEEKEND ROUTINES", "9:41"], ["JJM5EdE1NBM", "My WEIRD trip in Puerto Escondido (storytime)— SLOW ENGLISH for Intermediate Listeners!", "14:03"], ["JUxfEKz2dE4", "Grocery Store ESSENTIALS — for A1-A2 Beginners!", "13:50"], ["5QOcANSJyUE", "The SCARIEST BEACH DAY! — Slow English Podcast for A1-A2 Beginners (comprehensible input)", "14:59"], ["ETQxQ2S9CbU", "Powerful Daily Affirmations - Learn English and Practice Gratitude (comprehensible input)", "11:48"], ["fwMNNw0T4X0", "Speak like a NATIVE! COMMON abbreviations! — Slow English Podcast for A2 Beginners!", "14:53"], ["Sgwkz08fcdE", "Essential AIRPORT Vocabulary — SLOW English Podcast for A2 Beginners", "10:47"], ["rzgcw1eDycI", "84 English Phrases for Beginners! — Speak like a Native!", "18:54"], ["iAEYuZNVJoM", "SLOW English Podcast for A2-B1 intemediate levels!— Planning my first trip!", "20:22"], ["3fmVrPDmTHo", "SLOW English Podcast! BUS STORIES for Beginners!", "4:44"], ["hal7tBBhYm8", "SLOW English for A2 High Beginners —- How COLORS make me feel?", "9:23"], ["3m4rVUGPd0A", "Slow English Stories - Level A2 Listening - A Weird Phone Call!!", "3:40"]]};
const MH_PLAYLISTS = { a1: 'https://www.youtube.com/playlist?list=PL8f0I_2tet-f2hkTKFPgWS7koHkY4_Pw1', a2: 'https://www.youtube.com/playlist?list=PL8f0I_2tet-dJp0Dlyv0Wr_ZQXbEWyJyL' };
try { Object.keys(MH_LV).forEach(id => { const L = BC_LEVELS.find(l => l.id === id); if (L && !L.cols.some(c => c.src === 'mh')) L.cols.splice(L.cols.findIndex(c => c.src !== 'lt') < 0 ? L.cols.length : L.cols.findIndex(c => c.src !== 'lt'), 0, { icon: '🍯', name: 'Miss Honey · Slow English', src: 'mh', v: MH_LV[id] }); }); } catch (e) {}
try { const a1 = BC_LEVELS.find(l => l.id === 'a1'); if (a1 && !a1.cols.some(c => c.src === 'lt')) a1.cols.unshift({ icon: '🎧', name: 'Listening Time · Podcast A1', src: 'lt', v: LT_A1.map(([id, t, d]) => [id, t, d || '~5:00']) }); } catch (e) {}
/* v229: gỡ toàn bộ video British Council (theo yêu cầu chủ app). Mục Nghe → Video chỉ còn Listening Time và Miss Honey;
   cấp nào không còn video thì bỏ khỏi danh sách. */
try {
  BC_LEVELS.forEach(L => { L.cols = L.cols.filter(c => c.src); });
  for (let i = BC_LEVELS.length - 1; i >= 0; i--) if (!BC_LEVELS[i].cols.length) BC_LEVELS.splice(i, 1);
  if (!BC_LEVELS.some(l => l.id === BC_STATE.lv) && BC_LEVELS[0]) BC_STATE.lv = BC_LEVELS[0].id;
} catch (e) {}
/* v229: ghi công từng video — tên kênh, link tới video gốc trên YouTube và trang kênh */
const YT_SRC = {
  bbc: { name: 'BBC Learning English', who: 'BBC', url: 'https://www.youtube.com/@bbclearningenglish' },
  lt: { name: 'Listening Time', who: 'Conner Pe', url: LT_PLAYLIST, urlLabel: 'Danh sách phát' },
  mh: { name: 'Miss Honey · Slow English Podcast', who: 'Tayanna Ortiz', url: 'https://www.youtube.com/@Slow_English_Podcast' }
};
function ytCredit(src, id, tag) {
  const S = YT_SRC[src] || YT_SRC.bbc;
  const p = document.createElement(tag || 'p'); p.className = 'yt-credit';
  p.appendChild(document.createTextNode('Video © ' + S.name + (S.who && S.who !== 'BBC' ? ' (' + S.who + ')' : '') + ' · '));
  const a = document.createElement('a'); a.href = 'https://www.youtube.com/watch?v=' + id; a.target = '_blank'; a.rel = 'noopener'; a.textContent = '▶ Xem trên YouTube';
  p.appendChild(a); p.appendChild(document.createTextNode(' · '));
  const c = document.createElement('a'); c.href = S.url; c.target = '_blank'; c.rel = 'noopener'; c.textContent = S.urlLabel || 'Kênh';
  p.appendChild(c);
  return p;
}
window.ytCredit = ytCredit;
const BC_FLAT = [];
BC_LEVELS.forEach(lv => lv.cols.forEach(c => c.v.forEach(v => BC_FLAT.push({ id: v[0], t: v[1], d: v[2], lv, col: c }))));
function bcEl() { return document.getElementById('ls-bc'); }
function bcHide() {
  const el = document.getElementById('ls-bc');
  if (!el || el.hidden) return;
  if (el.querySelector('.ls-yt-holder, iframe')) { lsYtClose(); const fr = el.querySelector('.bc-frame'); if (fr) fr.innerHTML = ''; }
  el.hidden = true;
}
function bcShow() {
  lsYtClose();
  lsMode = 'bc';
  lsSetModeButton('bc');
  lsCefrEl.hidden = true; lsHeadEl.hidden = true; lsRandomEl.hidden = true; lsCustomEl.hidden = true; lsCard.hidden = true;
  bcEl().hidden = false;
  if (BC_STATE.cur) bcRenderPlayer(); else bcRenderList();
}
function bcLevelCount(lv) { return lv.cols.reduce((k, c) => k + c.v.length, 0); }
function bcCard(item) {
  const b = lsEl('button', 'bc-card' + (bcWatched().has(item.id) ? ' done' : ''));
  const th = lsEl('div', 'bc-thumb');
  const img = lsEl('img');
  img.loading = 'lazy'; img.alt = ''; img.src = `https://i.ytimg.com/vi/${item.id}/mqdefault.jpg`;
  img.addEventListener('error', () => img.remove());
  th.appendChild(img);
  th.appendChild(lsEl('span', 'bc-dur', item.d));
  if (bcWatched().has(item.id)) th.appendChild(lsEl('span', 'bc-tick', '✓'));
  b.appendChild(th);
  const info = lsEl('div', 'bc-info');
  info.appendChild(lsEl('div', 'bc-title', item.t));
  info.appendChild(lsEl('div', 'bc-meta', `${item.lv.name} · ${item.col.name}`));
  b.appendChild(info);
  b.addEventListener('click', () => { BC_STATE.cur = item.id; bcRenderPlayer(); grScrollTop(); });
  return b;
}
function bcRenderList() {
  const root = bcEl();
  root.innerHTML = '';
  const intro = lsEl('div', 'bc-intro');
  intro.appendChild(lsEl('div', 'bc-intro-t', '📺 Video Listening Time & Miss Honey'));
  intro.appendChild(lsEl('div', 'bc-intro-s', `${BC_FLAT.length} video miễn phí, xếp theo trình độ: các kênh YouTube Listening Time (podcast A1 của Conner Pe) và Miss Honey · Slow English Podcast (A1–A2). Video phát bằng trình phát chính thức của YouTube, bản quyền thuộc chủ kênh. App này không liên kết và không được các kênh trên bảo trợ.`));
  root.appendChild(intro);

  const chips = lsEl('div', 'colloc-chips bc-levels');
  BC_LEVELS.forEach(lv => {
    const c = lsEl('button', 'colloc-chip' + (lv.id === BC_STATE.lv && !BC_STATE.q ? ' active' : ''), `${lv.name} · ${bcLevelCount(lv)}`);
    c.dataset.lv = lv.id;
    c.addEventListener('click', () => { BC_STATE.lv = lv.id; BC_STATE.q = ''; bcRenderList(); });
    chips.appendChild(c);
  });
  root.appendChild(chips);

  const sr = lsEl('div', 'verb-search-row');
  const inp = lsEl('input');
  inp.type = 'text'; inp.id = 'bc-search'; inp.value = BC_STATE.q;
  inp.placeholder = 'Tìm video... (ví dụ: email, IELTS, present perfect)';
  inp.setAttribute('autocomplete', 'off'); inp.setAttribute('autocapitalize', 'off');
  inp.addEventListener('input', () => {
    BC_STATE.q = inp.value; bcRenderBody();
    chips.querySelectorAll('.colloc-chip').forEach(c => c.classList.toggle('active', !BC_STATE.q.trim() && c.dataset.lv === BC_STATE.lv));
  });
  sr.appendChild(inp);
  root.appendChild(sr);
  const body = lsEl('div'); body.id = 'bc-body';
  root.appendChild(body);
  bcRenderBody();
}
function bcRenderBody() {
  const body = document.getElementById('bc-body');
  if (!body) return;
  body.innerHTML = '';
  const bcN = x => x.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/\s+/g, ' ').trim();
  const q = bcN(BC_STATE.q || '');
  if (q) {
    const hits = BC_FLAT.filter(x => bcN(x.t + ' ' + x.col.name + ' ' + x.lv.name).includes(q));
    body.appendChild(lsEl('div', 'tense-group-title', `${hits.length} video khớp “${BC_STATE.q.trim()}”`));
    const g = lsEl('div', 'bc-grid');
    hits.slice(0, 80).forEach(x => g.appendChild(bcCard(x)));
    body.appendChild(g);
    if (!hits.length) body.appendChild(lsEl('p', 'ls-level-desc', 'Không tìm thấy. Thử từ khoá tiếng Anh ngắn hơn nhé.'));
    return;
  }
  const lv = BC_LEVELS.find(l => l.id === BC_STATE.lv) || BC_LEVELS[0];
  const total = bcLevelCount(lv);
  const seen = BC_FLAT.filter(x => x.lv === lv && bcWatched().has(x.id)).length;
  const head = lsEl('div', 'bc-lvhead');
  const top = lsEl('div', 'bc-lvtop');
  top.appendChild(lsEl('div', 'bc-lvname', `${lv.name} · ${lv.label}`));
  top.appendChild(lsEl('div', 'bc-lvcount', `Đã xem ${seen}/${total}`));
  head.appendChild(top);
  head.appendChild(vcBar(total ? seen / total : 0));
  head.appendChild(lsEl('p', 'ls-level-desc', lv.desc));
  body.appendChild(head);
  lv.cols.forEach(c => {
    body.appendChild(lsEl('div', 'tense-group-title', `${c.icon} ${c.name} · ${c.v.length}`));
    const g = lsEl('div', 'bc-grid');
    BC_FLAT.filter(x => x.col === c).forEach(x => g.appendChild(bcCard(x)));
    body.appendChild(g);
  });
}
const BC_NOTES_KEY = 'hoc-tieng-anh-bc-notes';
function bcNotesAll() { try { return JSON.parse(localStorage.getItem(BC_NOTES_KEY) || '{}') || {}; } catch (e) { return {}; } }
function bcNote(id) { return bcNotesAll()[id] || { seg: 0, notes: '' }; }
function bcSetNote(id, patch) {
  const all = bcNotesAll();
  all[id] = Object.assign({ seg: 0, notes: '' }, all[id] || {}, patch);
  try { localStorage.setItem(BC_NOTES_KEY, JSON.stringify(all)); } catch (e) {}
}
function bcSecs(d) { return String(d).split(':').reduce((t, x) => t * 60 + (parseInt(x, 10) || 0), 0); }
function bcDuration(item) {
  let d = 0;
  try { d = lsYt.player && lsYt.ready && lsYt.id === item.id ? lsYt.player.getDuration() : 0; } catch (e) {}
  return d > 0 ? d : bcSecs(item.d);
}
function bcMaxSeg(item) { return Math.max(0, Math.ceil(bcDuration(item) / lsSegLen) - 1); }
function bcSetCover(covered) {
  const fr = document.querySelector('#ls-bc .ls-yt-frame');
  if (fr) fr.classList.toggle('uncovered', !covered);
  const b = document.querySelector('#ls-bc .bc-cover');
  if (b) { b.textContent = covered ? '👁 Hiện phụ đề' : '🙈 Che phụ đề'; b.classList.toggle('playing', !covered); }
}
function bcStatus(item) {
  const el = document.querySelector('#ls-bc .bc-dstatus');
  if (!el) return;
  const s = BC_STATE.seg * lsSegLen, d = bcDuration(item);
  el.textContent = `Đoạn ${BC_STATE.seg + 1} / ${bcMaxSeg(item) + 1} · ${lsFmt(s)} – ${lsFmt(Math.min(d || s + lsSegLen, s + lsSegLen))}`;
}
function bcPlaySeg(item) {
  BC_STATE.seg = Math.max(0, Math.min(bcMaxSeg(item), BC_STATE.seg));
  bcSetNote(item.id, { seg: BC_STATE.seg });
  bcStatus(item);
  const s = BC_STATE.seg * lsSegLen;
  lsYtPlay(s, s + lsSegLen, BC_STATE.slow ? 0.75 : 1);
}
function bcRenderPlayer() {
  const root = bcEl();
  const i = BC_FLAT.findIndex(x => x.id === BC_STATE.cur);
  if (i < 0) { BC_STATE.cur = null; bcRenderList(); return; }
  const item = BC_FLAT[i];
  BC_STATE.lv = item.lv.id;
  lsYtClose();
  root.innerHTML = '';
  const back = lsEl('button', 'btn-ghost bc-back', '← Danh sách video');
  back.addEventListener('click', () => { lsYtClose(); BC_STATE.cur = null; bcRenderList(); grScrollTop(); });
  root.appendChild(back);
  root.appendChild(lsEl('div', 'ls-lh-level bc-plevel', `${item.lv.name} · ${item.col.icon} ${item.col.name}`));
  root.appendChild(lsEl('div', 'ls-lh-title bc-ptitle', item.t));
  root.appendChild(lsEl('div', 'bc-pmeta', `⏱ ${item.d}`));

  // video (YouTube IFrame API, subtitles on but covered for dictation)
  const frame = lsEl('div', 'ls-yt-frame bc-frame');
  const holder = lsEl('div', 'ls-yt-holder');
  frame.appendChild(holder);
  frame.appendChild(lsEl('div', 'ls-yt-cover', 'Phụ đề đang được che'));
  root.appendChild(frame);
  const id = item.id;
  lsYt.id = id; lsYt.ready = false; lsYt.failed = false; lsYt.capsSet = false;
  ytHold(holder, id); lsYt.holder = holder;
  const fail = code => {
    lsYt.failed = true; lsYt.pending = null;
    const old = frame.querySelector('.ls-yt-err'); if (old) old.remove();
    frame.appendChild(lsEl('div', 'ls-yt-err', (code === 152 || code === 153 || code === 'api')
      ? 'Video chỉ phát khi mở app qua địa chỉ web (GitHub Pages). Bản xem trước không phát được.'
      : 'Không phát được video này. Hãy bấm "Mở trên YouTube" hoặc thử video khác.'));
  };
  lsYtApi().then(() => ytWhenNear(holder)).then(() => {
    if (lsYt.id !== id || !document.body.contains(holder)) return;
    const vars = { playsinline: 1, rel: 0, modestbranding: 1, cc_load_policy: 1, cc_lang_pref: 'en', hl: 'en', iv_load_policy: 3 };
    if (/^https?:$/.test(location.protocol)) vars.origin = location.origin;
    lsYt.player = new YT.Player(holder, {
      videoId: id, width: '100%', height: '100%', playerVars: vars,
      events: {
        onReady: () => {
          lsYt.ready = true; lsYtCaptionsOn(); bcStatus(item);
          if (lsYt.pending) { const p = lsYt.pending; lsYt.pending = null; lsYtPlay(p[0], p[1], p[2]); }
        },
        onError: e => fail(e && e.data),
        onApiChange: () => { if (!lsYt.capsSet) lsYt.capsSet = lsYtCaptionsOn(); }
      }
    });
  }).catch(() => { if (lsYt.id === id) fail('api'); });

  // dictation panel, right under the video
  const note = bcNote(id);
  BC_STATE.seg = Math.min(note.seg || 0, bcMaxSeg(item));
  const p = lsEl('div', 'bc-dict');
  p.appendChild(lsEl('div', 'bc-dtitle', '✍️ Nghe & chép chính tả'));
  p.appendChild(lsEl('p', 'bc-dtip', 'Nghe từng đoạn ngắn → gõ lại những gì nghe được → bấm "Hiện phụ đề" và nghe lại để tự sửa.'));
  const lenRow = lsEl('div', 'ls-free-row');
  lenRow.appendChild(lsEl('span', 'ls-free-label', 'Mỗi đoạn dài'));
  const chips = lsEl('div', 'ls-speed');
  [5, 8, 12].forEach(n => {
    const ch = lsEl('button', 'colloc-chip' + (n === lsSegLen ? ' active' : ''), n + ' giây');
    ch.addEventListener('click', () => {
      const t0 = BC_STATE.seg * lsSegLen;
      lsSegLen = n;
      try { localStorage.setItem(LS_SEG_KEY, String(n)); } catch (e) {}
      BC_STATE.seg = Math.floor(t0 / n);
      bcSetNote(id, { seg: BC_STATE.seg });
      chips.querySelectorAll('.colloc-chip').forEach(x => x.classList.toggle('active', x === ch));
      bcStatus(item);
    });
    chips.appendChild(ch);
  });
  lenRow.appendChild(chips);
  p.appendChild(lenRow);
  p.appendChild(lsEl('div', 'ls-free-status bc-dstatus', ''));
  const nav = lsEl('div', 'ls-free-nav');
  const prev = lsEl('button', 'btn-ghost bc-prev', '⏮ Trước');
  const again = lsEl('button', 'btn-primary bc-play', '🔁 Nghe đoạn');
  const next = lsEl('button', 'btn-ghost bc-nextseg', 'Tiếp ⏭');
  prev.addEventListener('click', () => { BC_STATE.seg--; bcPlaySeg(item); });
  again.addEventListener('click', () => bcPlaySeg(item));
  next.addEventListener('click', () => { BC_STATE.seg++; bcPlaySeg(item); });
  nav.appendChild(prev); nav.appendChild(again); nav.appendChild(next);
  p.appendChild(nav);
  const extra = lsEl('div', 'pron-actions ls-free-extra');
  const slow = lsEl('button', 'bc-slow' + (BC_STATE.slow ? ' playing' : ''), BC_STATE.slow ? '🐢 Chậm: bật' : '🐢 Chậm: tắt');
  slow.addEventListener('click', () => { BC_STATE.slow = !BC_STATE.slow; slow.textContent = BC_STATE.slow ? '🐢 Chậm: bật' : '🐢 Chậm: tắt'; slow.classList.toggle('playing', BC_STATE.slow); });
  const cover = lsEl('button', 'bc-cover', '👁 Hiện phụ đề');
  cover.addEventListener('click', () => bcSetCover(frame.classList.contains('uncovered')));
  const all = lsEl('button', 'bc-all', '▶ Xem liên tục');
  all.addEventListener('click', () => { try { clearInterval(lsYt.timer); lsYt.player.setPlaybackRate(BC_STATE.slow ? 0.75 : 1); lsYt.player.playVideo(); } catch (e) {} });
  extra.appendChild(slow); extra.appendChild(cover); extra.appendChild(all);
  p.appendChild(extra);
  const ta = lsEl('textarea', 'ls-input bc-notes');
  ta.rows = 5;
  ta.placeholder = 'Gõ những gì bạn nghe được… (tự lưu cho từng video)';
  ta.setAttribute('spellcheck', 'false'); ta.setAttribute('autocapitalize', 'off'); ta.setAttribute('autocorrect', 'off');
  ta.value = note.notes || '';
  ta.addEventListener('input', () => bcSetNote(id, { notes: ta.value }));
  p.appendChild(ta);
  root.appendChild(p);
  bcStatus(item);

  const row = lsEl('div', 'bc-actions');
  const done = bcWatched().has(id);
  const w = lsEl('button', done ? 'btn-ghost bc-done on' : 'btn-ghost bc-done', done ? '✓ Đã xem' : '○ Đánh dấu đã xem');
  w.addEventListener('click', () => {
    const s = bcWatched();
    if (s.has(id)) s.delete(id); else s.add(id);
    bcSaveWatched();
    const on = s.has(id);
    w.classList.toggle('on', on); w.textContent = on ? '✓ Đã xem' : '○ Đánh dấu đã xem';
  });
  row.appendChild(w);
  const nx = BC_FLAT[i + 1];
  const n = lsEl('button', 'btn-primary bc-next', nx ? 'Video tiếp →' : 'Hết danh sách');
  n.disabled = !nx;
  n.addEventListener('click', () => {
    bcWatched().add(id); bcSaveWatched();
    BC_STATE.cur = nx.id; bcRenderPlayer(); grScrollTop();
  });
  row.appendChild(n);
  root.appendChild(row);
  const yt = lsEl('a', 'btn-ghost bc-yt', '↗ Mở trên YouTube');
  yt.href = `https://www.youtube.com/watch?v=${id}`; yt.target = '_blank'; yt.rel = 'noopener';
  root.appendChild(yt);
  root.appendChild(ytCredit(item.col.src, item.id));
  root.appendChild(lsEl('p', 'bc-credit', 'Mẹo: nói nhanh quá thì bật 🐢 Chậm (0.75×). Video không phát trong bản xem trước, hãy mở app qua GitHub Pages.'));
}



/* Mouse wheel scrolls horizontal rows (tab bar) on desktop */
document.querySelectorAll('nav.tabbar').forEach(el => el.addEventListener('wheel', e => {
  if (el.scrollWidth <= el.clientWidth || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
  el.scrollLeft += e.deltaY; e.preventDefault();
}, { passive: false }));
/* ============================================================
   VOICE PICKER — 7 English voices (accent + gender), saved on this device
============================================================ */
const VOICE_KEY = 'hoc-tieng-anh-voice';
const VOICE_PRESETS = [
  { id: 'us-f', flag: '🇺🇸', label: 'Mỹ · Nữ', langs: ['en-us'], gender: 'f' },
  { id: 'us-m', flag: '🇺🇸', label: 'Mỹ · Nam', langs: ['en-us'], gender: 'm' },
  { id: 'gb-f', flag: '🇬🇧', label: 'Anh · Nữ', langs: ['en-gb'], gender: 'f' },
  { id: 'gb-m', flag: '🇬🇧', label: 'Anh · Nam', langs: ['en-gb'], gender: 'm' },
  { id: 'au', flag: '🇦🇺', label: 'Úc', langs: ['en-au', 'en-nz'] },
  { id: 'in', flag: '🇮🇳', label: 'Ấn Độ', langs: ['en-in'] },
  { id: 'ie', flag: '🇮🇪', label: 'Ireland · Nam Phi', langs: ['en-ie', 'en-za', 'en-scotland', 'en-gb-u-sd-gbsct', 'en-ca', 'en-sg'] }
];
const VOICE_F = /samantha|\bava\b|allison|susan|\bzoe|nicky|joelle|noelle|\bkate\b|serena|stephanie|martha|karen|catherine|moira|tessa|fiona|veena|\bisha\b|zira|\baria\b|jenny|sonia|libby|natasha|neerja|emily|michelle|female|victoria|vicki|kathy|princess|shelley|sandy|\bflo\b|grandma|hazel|heera|clara|molly|\bleah\b|\bamy\b|\bemma\b|olivia|salli|joanna|kendra|kimberly|\bivy\b|nicole|raveena|aditi|google us english/i;
const VOICE_M = /\b(alex|aaron|fred|evan|nathan|tom|daniel|arthur|oliver|lee|gordon|rishi|david|mark|guy|ryan|william|prabhat|connor|male|ralph|junior|albert|eddy|reed|rocko|grandpa|george|james|brian|matthew|justin|joey|russell|sean|liam|thomas|christopher|eric|roger|andrew|brandon|davis|tony|jason|ravi|hemant|kunal)\b/i;
const VOICE_NOVELTY = /albert|bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox|deranged|hysterical|\beddy\b|\bflo\b|grandma|grandpa|\breed\b|rocko|\bsandy\b|shelley|\bralph\b|junior|\bkathy\b|princess|\bfred\b/i;
const vNorm = l => (l || '').toLowerCase().replace(/_/g, '-');
const vGender = v => VOICE_F.test(v.name) ? 'f' : VOICE_M.test(v.name) ? 'm' : '';
// v236: chất lượng giọng: iOS/macOS ghi trong voiceURI (com.apple.voice.premium… / .enhanced…), có khi tên không ghi
const vQual = v => { const t = (v.name || '') + ' ' + (v.voiceURI || ''); return /premium|neural|natural/i.test(t) ? 2 : /enhanced|online/i.test(t) || /^google\b/i.test(v.name || '') ? 1 : 0; };
const vQualTxt = v => ['', ' · ★ Nâng cao', ' · ★★ Cao cấp'][vQual(v)];
const vName = v => v.name.replace(/\s*\((enhanced|premium|nâng cao|cao cấp)\)\s*$/i, '').replace(/\s*\(.*\)$/, '');
function vScore(v, p) {
  const lang = vNorm(v.lang);
  const li = p.langs.findIndex(l => lang === l || lang.startsWith(l + '-'));
  if (li < 0) return -Infinity;
  let s = 10 - li * 2;
  if (p.gender) { const g = vGender(v); if (g && g !== p.gender) return -Infinity; s += g === p.gender ? 8 : 2; }   // v236: không lấy giọng khác giới cho ô Nam / Nữ
  if (VOICE_NOVELTY.test(v.name)) s -= 20;
  s += vQual(v) * 4;
  if (v.localService) s += 1;
  // v142: giọng Google của Chrome tự nhiên hơn hẳn giọng Microsoft cài sẵn trên Windows (David, Zira, Mark… nghe rất "robot")
  if (/^google\b/i.test(v.name)) s += 4;
  if (/^microsoft (david|zira|mark|hazel|george|susan|james|catherine|linda|richard|heera|ravi|sean)\b/i.test(v.name) && !/online|natural/i.test(v.name)) s -= 6;
  return s;
}
let vAll = [], vResolved = {};
let vSel = 'p:us-f';
try { vSel = localStorage.getItem(VOICE_KEY) || 'p:us-f'; } catch (e) {}
function vCurrent() {
  if (vSel.startsWith('v:')) return vAll.find(v => v.voiceURI === vSel.slice(2)) || null;
  return vResolved[vSel.slice(2)] || null;
}
function vLabel() {
  if (vSel.startsWith('v:')) { const v = vCurrent(); return v ? vName(v) : 'Giọng đọc'; }
  const p = VOICE_PRESETS.find(x => 'p:' + x.id === vSel);
  return p ? p.label : 'Giọng đọc';
}
function vRefresh() {
  if (!('speechSynthesis' in window)) return;
  vAll = speechSynthesis.getVoices().filter(v => vNorm(v.lang).startsWith('en'));
  const used = new Set();
  vResolved = {};
  VOICE_PRESETS.forEach(p => {
    let best = null, bs = -Infinity;
    vAll.forEach(v => { const s = vScore(v, p) - (used.has(v.voiceURI) ? 6 : 0); if (s > bs) { bs = s; best = v; } });
    if (best && bs > -5) { vResolved[p.id] = best; used.add(best.voiceURI); }
  });
  pronVoice = vCurrent() || pickEnglishVoice();
  vUpdateButton();
  if (vSheet && !vSheet.hidden) vRenderSheet();
}
function vSelect(sel) {
  vSel = sel;
  try { localStorage.setItem(VOICE_KEY, sel); } catch (e) {}
  pronVoice = vCurrent() || pickEnglishVoice();
  vUpdateButton();
  vRenderSheet();
}
function vTry(v) {
  if (!v || !('speechSynthesis' in window)) return;
  const u = new SpeechSynthesisUtterance("Hello! Nice to meet you. Let's practise English together.");
  u.voice = v; u.lang = (v.lang || 'en-US').replace('_', '-'); u.rate = 0.9;
  ttsPlay(u);
}

const vSheet = document.getElementById('vsheet');
const vBtn = document.getElementById('voice-btn');
function vUpdateButton() { if (vBtn) vBtn.querySelector('.hv-label').textContent = vLabel(); }
function vRow(flag, title, sub, active, off, onPick, onPlay) {
  const b = document.createElement('button');
  b.className = 'vrow' + (active ? ' active' : '') + (off ? ' off' : '');
  const f = document.createElement('span'); f.className = 'vflag'; f.textContent = flag; b.appendChild(f);
  const info = document.createElement('span'); info.className = 'vinfo';
  const t = document.createElement('b'); t.textContent = title; info.appendChild(t);
  const s = document.createElement('small'); s.textContent = sub; info.appendChild(s);
  b.appendChild(info);
  if (active) { const c = document.createElement('span'); c.className = 'vcheck'; c.textContent = '✓'; b.appendChild(c); }
  if (onPlay) {
    const pl = document.createElement('span'); pl.className = 'vplay'; pl.textContent = '▶';
    pl.setAttribute('role', 'button'); pl.setAttribute('aria-label', 'Nghe thử ' + title);
    pl.addEventListener('click', e => { e.stopPropagation(); onPlay(); });
    b.appendChild(pl);
  }
  b.addEventListener('click', onPick);
  return b;
}
function vRenderSheet() {
  const list = document.getElementById('vlist'), all = document.getElementById('vall-list'), msg = document.getElementById('vmsg');
  list.innerHTML = ''; all.innerHTML = ''; msg.textContent = '';
  VOICE_PRESETS.forEach(p => {
    const v = vResolved[p.id];
    list.appendChild(vRow(p.flag, p.label, v ? vName(v) + vQualTxt(v) : 'Máy bạn chưa có giọng này',
      vSel === 'p:' + p.id, !v,
      () => { if (!v) { msg.textContent = 'Máy bạn chưa có giọng "' + p.label + '". Xem hướng dẫn tải thêm giọng ở dưới.'; return; } vSelect('p:' + p.id); vTry(v); },
      v ? () => vTry(v) : null));
  });
  document.getElementById('vall-count').textContent = vAll.length;
  vAll.slice().sort((a, b) => vQual(b) - vQual(a) || a.name.localeCompare(b.name)).forEach(v => all.appendChild(vRow(vQual(v) ? '⭐' : '🔈', vName(v), v.lang + (vGender(v) === 'f' ? ' · nữ' : vGender(v) === 'm' ? ' · nam' : '') + vQualTxt(v),
    vSel === 'v:' + v.voiceURI, false, () => { vSelect('v:' + v.voiceURI); vTry(v); }, () => vTry(v))));
  if (!vAll.length) all.appendChild(Object.assign(document.createElement('p'), { className: 'vtip', textContent: 'Chưa đọc được danh sách giọng của máy. Hãy thử lại sau vài giây.' }));
}
function vOpen() { vRefresh(); vRenderSheet(); vSheet.hidden = false; document.body.classList.add('vsheet-open'); }
function vClose() { vSheet.hidden = true; document.body.classList.remove('vsheet-open'); }
if (vBtn) vBtn.addEventListener('click', vOpen);
vSheet.querySelector('.vsheet-backdrop').addEventListener('click', vClose);
document.getElementById('vsheet-close').addEventListener('click', vClose);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !vSheet.hidden) vClose(); });
if ('speechSynthesis' in window) {
  speechSynthesis.onvoiceschanged = vRefresh;
  vRefresh();
  setTimeout(vRefresh, 600); setTimeout(vRefresh, 2000);
}
vUpdateButton();

/* ---------- 🔧 Kiểm tra âm thanh (giọng đọc + micro) ---------- */
(function () {
  const out = document.getElementById('vdiag-out'), bT = document.getElementById('vdiag-tts'), bM = document.getElementById('vdiag-mic');
  if (!out || !bT) return;
  const line = (ok, text) => { const d = document.createElement('div'); d.className = 'vdiag-l ' + (ok === true ? 'ok' : ok === false ? 'bad' : 'info'); d.textContent = (ok === true ? '✓ ' : ok === false ? '✗ ' : '• ') + text; out.appendChild(d); return d; };
  const tips = list => { const ul = document.createElement('ol'); ul.className = 'vdiag-tips'; list.forEach(t => { const li = document.createElement('li'); li.innerHTML = t; ul.appendChild(li); }); out.appendChild(ul); };
  const IOS_TIPS = [
    'Tắt <b>chế độ Im lặng</b>: gạt nút bên hông iPhone (hoặc giữ <b>nút Tác vụ</b> trên iPhone 15 Pro trở lên) cho đến khi không còn biểu tượng chuông gạch chéo. Giọng đọc của trình duyệt bị tắt tiếng khi máy đang ở chế độ Im lặng.',
    'Tăng âm lượng bằng nút bên hông khi đang mở app, và kiểm tra tai nghe Bluetooth có đang kết nối không.',
    'Sau khi cập nhật iOS, các giọng đã tải có thể bị xoá: vào <b>Cài đặt → Trợ năng → Nội dung được đọc → Giọng nói → Tiếng Anh</b>, tải lại giọng (ví dụ Samantha hoặc Ava), rồi chọn lại giọng trong app.',
    'Vuốt tắt hẳn app (hoặc Safari) rồi mở lại. Nếu app được thêm vào Màn hình chính, hãy mở lại từ biểu tượng.',
    'Nếu vẫn không được, hãy khởi động lại iPhone một lần: lỗi kẹt giọng đọc của iOS thường hết sau khi khởi động lại.'
  ];
  function tryVoice(voice, label) {
    return new Promise(res => {
      const u = new SpeechSynthesisUtterance('Testing, one, two, three. Can you hear me?');
      if (voice) { u.voice = voice; u.lang = (voice.lang || 'en-US').replace('_', '-'); } else u.lang = 'en-US';
      u.rate = 0.95;
      const t0 = Date.now(); let started = false, fin = false;
      const end = r => { if (fin) return; fin = true; res(r); };
      u.onstart = () => { started = true; };
      u.onend = () => end({ ok: started || Date.now() - t0 > 800, ms: Date.now() - t0 });
      u.onerror = e => end({ ok: false, err: e && e.error });
      try { speechSynthesis.cancel(); } catch (e) {}
      setTimeout(() => { try { speechSynthesis.resume(); speechSynthesis.speak(u); } catch (e) { end({ ok: false, err: 'speak' }); } }, 150);
      setTimeout(() => { if (!started) end({ ok: false, err: 'timeout' }); }, 4500);
    });
  }
  bT.addEventListener('click', async () => {
    out.innerHTML = '';
    if (!('speechSynthesis' in window)) { line(false, 'Trình duyệt này không hỗ trợ giọng đọc. Trên iPhone hãy mở bằng Safari.'); return; }
    bT.disabled = true;
    const all = speechSynthesis.getVoices(), en = all.filter(v => /^en/i.test(v.lang));
    line(en.length > 0 ? true : false, `Máy có ${en.length} giọng tiếng Anh (tổng ${all.length} giọng).`);
    const cur = (typeof pronVoice !== 'undefined' && pronVoice) ? pronVoice : null;
    line(null, 'Giọng đang chọn: ' + (cur ? `${cur.name} (${cur.lang}${cur.localService === false ? ', giọng trực tuyến' : ''})` : 'giọng mặc định của máy'));
    const w = line(null, 'Đang đọc thử câu "Testing, one, two, three"…');
    let r = await tryVoice(cur, 'chọn');
    w.remove();
    if (r.ok) {
      line(true, 'Máy đã phát giọng đọc. Nếu bạn vẫn không nghe thấy gì, máy đang tắt tiếng:');
      if (TTS_IOS) tips(IOS_TIPS.slice(0, 2)); else tips(['Kiểm tra âm lượng và loa / tai nghe của máy.']);
    } else {
      line(false, 'Giọng đang chọn không phát được' + (r.err && r.err !== 'timeout' ? ` (lỗi: ${r.err})` : '') + '. Thử với giọng mặc định…');
      const r2 = await tryVoice(null, 'mặc định');
      if (r2.ok) {
        line(true, 'Giọng mặc định phát được → giọng bạn chọn đã bị xoá hoặc lỗi sau khi cập nhật. App đã chuyển về giọng mặc định; bạn có thể chọn lại giọng khác ở danh sách trên.');
        try { localStorage.setItem(VOICE_KEY, 'p:us-f'); vSel = 'p:us-f'; vRefresh(); } catch (e) {}
      } else {
        line(false, 'Máy chưa phát được giọng đọc nào. Hãy thử lần lượt:');
        tips(TTS_IOS ? IOS_TIPS : ['Mở app bằng Chrome, Edge hoặc Safari bản mới.', 'Kiểm tra máy có cài giọng tiếng Anh (Windows: Cài đặt → Thời gian & ngôn ngữ → Giọng nói).', 'Tải lại trang.']);
      }
    }
    bT.disabled = false;
  });
  bM.addEventListener('click', async () => {
    out.innerHTML = '';
    bM.disabled = true;
    // 1) quyền micro + ghi âm
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      micOpening();
      try { const st = await navigator.mediaDevices.getUserMedia({ audio: true }); st.getTracks().forEach(t => t.stop()); line(true, 'Micro hoạt động và đã được cho phép.'); }
      catch (e) { ttsMicEnded(); line(false, 'Không mở được micro (' + (e && e.name || 'lỗi') + ').'); tips(TTS_IOS ? ['Vào <b>Cài đặt → Safari → Micrô</b> (hoặc Cài đặt → Quyền riêng tư → Micrô) và chọn Cho phép / Hỏi.', 'Nếu vẫn bị từ chối sau khi cập nhật iOS, hãy khởi động lại iPhone rồi thử lại.'] : ['Bấm biểu tượng ổ khoá trên thanh địa chỉ và cho phép Micro.']); bM.disabled = false; return; }
    } else line(false, 'Trình duyệt không hỗ trợ ghi âm.');
    micOpening();
    // 2) nhận dạng giọng nói
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { line(false, 'Trình duyệt chưa hỗ trợ nhận dạng giọng nói nên phần chấm điểm phát âm không dùng được. Trên iPhone hãy dùng Safari.'); bM.disabled = false; return; }
    const w = line(null, 'Hãy nói to: "Hello, how are you?"');
    try { speechSynthesis.cancel(); } catch (e) {}
    const r = new SR(); r.lang = 'en-US'; r.interimResults = false; r.maxAlternatives = 1;
    let got = false;
    const done = () => { bM.disabled = false; ttsMicEnded(); };
    const tm = setTimeout(() => { if (!got) { try { r.abort(); } catch (e) {} } }, 8000);
    r.onresult = ev => { got = true; clearTimeout(tm); w.remove(); line(true, 'Nhận dạng giọng nói hoạt động. Máy nghe được: "' + ev.results[0][0].transcript + '"');
      // v179: Windows tự giảm âm lượng các âm thanh khác khi có app mở micro → tiếng lúc to lúc nhỏ
      if (/Windows/.test(navigator.userAgent)) tips(['Nếu tiếng đọc bị nhỏ đi mỗi khi dùng micro: mở <b>Bảng điều khiển → Âm thanh → thẻ Liên lạc (Communications)</b>, chọn <b>Không làm gì (Do nothing)</b>. Windows mặc định tự giảm 80% âm lượng khi có app dùng micro.']);
      else if (TTS_IOS) tips(['Nếu sau khi dùng micro tiếng đọc nhỏ đi hoặc phát ra loa trong (loa nghe gọi): app đã tự chuyển lại chế độ phát. Nếu vẫn còn, hãy vuốt tắt hẳn app rồi mở lại, hoặc cập nhật iOS 17 trở lên.']);
      done(); };
    r.onerror = ev => { got = true; clearTimeout(tm); w.remove(); line(false, 'Nhận dạng giọng nói lỗi: ' + ev.error + '.'); tips(ev.error === 'audio-capture' ? ['Không tìm thấy micro, hoặc micro đang được app khác dùng (gọi điện, ghi âm, Zalo…). Hãy đóng app đó rồi thử lại.', 'Trên máy tính: kiểm tra đã cắm micro / tai nghe có micro chưa.'] : ev.error === 'not-allowed' || ev.error === 'service-not-allowed' ? ['Vào <b>Cài đặt → Quyền riêng tư & Bảo mật → Nhận dạng lời nói</b> và bật cho Safari, đồng thời bật <b>Siri & Đọc chính tả</b> (Cài đặt → Cài đặt chung → Bàn phím → Bật Đọc chính tả).'] : ev.error === 'network' ? ['Nhận dạng giọng nói cần mạng. Kiểm tra Wi-Fi / 4G rồi thử lại.'] : ['Nói gần micro hơn rồi thử lại.']); done(); };
    r.onend = () => { clearTimeout(tm); if (!got) { w.remove(); line(false, 'Không nghe thấy gì trong 8 giây.'); tips(['Nói to và gần micro hơn.', 'Nếu micro báo đang nghe mà không có kết quả, hãy vuốt tắt hẳn app rồi mở lại (lỗi hay gặp trên iPhone sau khi vừa phát âm thanh).']); } done(); };
    try { r.start(); } catch (e) { line(false, 'Không bắt đầu nghe được.'); done(); }
  });
})();


/* v129: hoạt ảnh trang trí theo mùa chỉ chạy khi đầu trang đang hiện; máy yếu hoặc bật tiết kiệm dữ liệu thì đứng yên */
(function () {
  const root = document.documentElement;
  try {
    const c = navigator.connection, mem = navigator.deviceMemory, cores = navigator.hardwareConcurrency;
    if ((c && c.saveData) || (mem && mem <= 2) || (cores && cores <= 2)) root.classList.add('deco-still');
  } catch (e) {}
  const hero = document.querySelector('header.hero');
  if (hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(es => es.forEach(e => root.classList.toggle('deco-off', !e.isIntersecting)), { rootMargin: '40px' }).observe(hero);
  }
})();
/* ============================================================
   HERO STATS + TAB BAR NICETIES
============================================================ */
(function () {
  const el = document.getElementById('hero-stats');
  if (el) {
    [[VC_ALL.length, 'từ vựng'], [IRREGULAR_VERBS.length, 'động từ bất quy tắc'], [TENSES.length + GR_LESSONS.length, 'bài ngữ pháp']]
      .forEach(([n, label]) => {
        const box = document.createElement('div');
        box.className = 'hero-stat';
        const num = document.createElement('span'); num.className = 'n'; num.textContent = n;
        const lab = document.createElement('span'); lab.className = 'l'; lab.textContent = label;
        box.appendChild(num); box.appendChild(lab); el.appendChild(box);
        if (label === 'từ vựng') {   // v233: số từ có khi dữ liệu từ vựng nạp xong
          if (!n) num.textContent = '…';
          window.addEventListener('hta-vocab-ready', () => { num.textContent = VC_ALL.length; });
        }
      });
  }
  const bar = document.querySelector('nav.tabbar');
  const mainEl = document.querySelector('main');
  document.querySelectorAll('nav.tabbar button').forEach(btn => {
    btn.addEventListener('click', () => {
      if (bar) {
        const left = btn.offsetLeft - (bar.clientWidth - btn.offsetWidth) / 2;
        if (typeof bar.scrollTo === 'function') bar.scrollTo({ left, behavior: 'smooth' }); else bar.scrollLeft = left;
      }
      const top = mainEl ? mainEl.offsetTop - 8 : 0;
      if (window.scrollY > top) window.scrollTo(0, top);
    });
  });
})();
