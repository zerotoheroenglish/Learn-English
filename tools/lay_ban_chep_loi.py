# -*- coding: utf-8 -*-
"""
Lấy bản chép lời (phụ đề tiếng Anh có mốc thời gian) cho các video BBC trong app,
ghi vào data/bbc-subs.json. App tự đọc file này: mở video là có chữ chạy, chính tả, quiz.

Cách chạy (máy tính có Python 3.9+, hoặc app a-Shell trên iPhone):
    pip install "youtube-transcript-api>=1.2,<2"
    python3 lay_ban_chep_loi.py
Chạy trong thư mục của app: ghi vào data/bbc-subs.json.
Chạy riêng một mình (ví dụ trong a-Shell): tự tải danh sách video từ trang web của app,
ghi ra file bbc-subs.json ngay cạnh nó — sau đó tải file này lên thư mục data/ của kho GitHub.
Chạy lại bất cứ lúc nào: video đã có sẽ được bỏ qua, chỉ lấy video mới hoặc lần trước bị lỗi.
"""
import json, os, re, sys, time, datetime

SITE = 'https://zerotoheroenglish.github.io/Learn-English/'
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SRC = os.path.join(ROOT, 'js', 'tab-shadowing.js')
if os.path.exists(SRC):
    OUT = os.path.join(ROOT, 'data', 'bbc-subs.json')
else:                       # chạy riêng (a-Shell…): ghi ngay cạnh file này
    OUT = os.path.join(os.getcwd(), 'bbc-subs.json')


# danh sách dự phòng khi chạy riêng (không có thư mục app bên cạnh)
BUILTIN_IDS = [["x72gP4HrU58", "Talking about family"], ["sJ7sRSK2in4", "Talking about routines"], ["qHWtJtRSYjc", "Talking about jobs"], ["R3oVOu-sxHE", "Talking about exercise"], ["JgB6-RWnV9M", "Talking about travel"], ["QBddNulwhKo", "Talking about seasons"], ["S7mfygW40Cs", "Talking about days out"], ["BSABmr8hX7s", "Talking about films"], ["j64n3KdIob0", "How to talk about your brain"], ["fLB70DZdqIE", "Talking about your worries"], ["gL6DT-PdLoQ", "Talking about confidence"], ["I_tRSrPru94", "Hello, what's your name?"], ["wUF33157hYI", "How to talk about likes and dislikes"], ["1vUTq-Pd4Vs", "Talking about ability"], ["ceOhxZjDt-g", "What's this?"], ["gCs4knrlnD4", "Talk about your habits"], ["kTf0V4HyFtM", "Talk about what you did last weekend"], ["yyClpj_GJDc", "How are you feeling?"], ["osDr7To4Ml4", "What is she like?"], ["SHXPpsIJTb0", "Where is the train station?"], ["2hnJy9H8J3Y", "Come back vs Go back"], ["tFirN40-6mY", "Mustn't vs Don't have to"], ["k-yvS6WYxkM", "4 ways to use just"], ["uldbn_Prt8s", "3 facts about The"], ["MqjKOZSdG90", "Box set: English In A Minute 1"], ["d6J0OMjcQfc", "Box set: English In A Minute 5"], ["4GIInD4HCec", "Box set: English In A Minute 6"], ["LppAASWtUZU", "Box set: English In A Minute 16"], ["irsx_Be019E", "Box set: English In A Minute 30"], ["bRnGm3y0IFU", "Box set: English In A Minute 31"], ["xFsYrTIndhI", "Present simple and present continuous"], ["jwmKjgwlMk8", "Present perfect and past simple"], ["3dA7P5arkyc", "Used to"], ["V2quIYo41Ig", "Used to & would"], ["ZXN3wROCpfs", "May, might and could"], ["foyWhOHhTT0", "Question tags"], ["3OuqzHxlrHc", "The second conditional"], ["zS2bmhmGCsI", "Keeping things professional"], ["i5KWMkGsPOk", "Working with someone new?"], ["4zB8KhyYlx4", "Box set: English at Work, episodes 6–10"], ["3v912B6RJ9c", "Box set: English at Work, episodes 26–30"], ["o1BC8uOzdXo", "Box set: English at Work, episodes 31–35"], ["BzP-prBHWcA", "Box set: English at Work, episodes 36–40"], ["KwDJnXt3ZVQ", "The schwa"], ["psI7E_J1zPo", "'was' and 'were'"], ["hbu6X_TYqMQ", "How fluent speakers pronounce 'can'"], ["IC-mO3QcAOY", "'Have to'"], ["c1l4HRaCMdw", "Elision of /t/"], ["i_ohrkQmzdQ", "Assimilation of /t/ and /p/"], ["lc2eOCVJMuQ", "Assimilation of /t/ followed by /k/"], ["DzCvN1dJP1Y", "Assimilation of /t/ and /j/"], ["KJFC6ZgoPKo", "Tim's final words of wisdom"], ["9ifQ3xRz4hM", "Learning multiple languages"], ["nB9lNrkfc88", "Is student life all good?"], ["bKfFvme1b8I", "Box set: Food"], ["L5R7yqpN5fg", "Box set: Coffee"], ["-p1gn1lMVqw", "Box set: Sport"], ["CYcYeTaBRvE", "Box set: The future"], ["WMokf0EgTcA", "Box set: Wellbeing"], ["2Hko4TrWZYI", "Box set: Green issues"], ["2FrA6kHzVQ4", "Box set: Art & culture"], ["xnnTR_T7SQ4", "Box set: Psychology"], ["uznubNHZgoE", "Box set: Human behaviour 2"], ["B_CxyglDW8Y", "Box set: Human emotions 2"], ["GVfJi0dpwB0", "Box set: Technology 2"], ["nsO1H6Zk2K4", "Box set: Technology and lifestyle"], ["m9LyXOBmQvo", "Box set: Business & work 2"], ["b5DOQ7iOzO4", "Box set: Lifestyle (1 giờ)"], ["_LlyKiROzhU", "Box set: Human emotions (1 giờ)"], ["fcN0BXzK8bg", "Box set: All about language (1 giờ)"], ["3IWtnBniKF4", "Earth 'pushed beyond its limit', UN warns"], ["qRsLwL9lJQg", "Social media more popular news source than TV"], ["2FZEznNC-Fs", "Is social media 'the new smoking'?"], ["RImcqAT3m2M", "Huge power cuts in Spain and Portugal"], ["vHM8sdoJdoY", "2025: The year's big news stories"], ["o1VxetMgFOQ", "DNA study: better coffee?"], ["tZ-Pbwdqlt0", "Can diet improve memory?"], ["J8hDuZHGPR0", "Fixing things to help the planet"], ["SNPL0QhjRwI", "Climate crisis: last warning for humanity?"], ["SAOCMGiIcKM", "London Marathon goes ahead"], ["kgCC4Do5T50", "2022 review of the year"], ["RNDkCueeZvw", "The News Review podcast"], ["JAUAzf8zBog", "Have a pop"], ["Q67ix5L4rQU", "To have a good nose"], ["pSqGi9Ljk7g", "One step at a time"], ["8D5Ag-TxErg", "Box set: 7 two-word English expressions"], ["97U5wwPXzs8", "Box set: 8 action verbs"], ["bwYEdYaXExw", "Box set: 'Human body' expressions 2"], ["zAFDy50EBkw", "Box set: 8 expressions with prepositions"], ["PSpGU3ZXTRs", "Box set: English vocabulary mega-class"], ["3OHaShkdCNY", "Greek to me"], ["BVxXhEqDcPc", "A tower of strength"]]


def video_ids():
    if os.path.exists(SRC):
        js = open(SRC, encoding='utf-8').read()
    else:
        try:
            import urllib.request
            js = urllib.request.urlopen(SITE + 'js/tab-shadowing.js', timeout=30).read().decode('utf-8')
        except Exception:
            return [tuple(x) for x in BUILTIN_IDS]
    m = re.search(r'const SH_BBC = (\[.*?\]);\n', js, re.S)
    if not m:
        return [tuple(x) for x in BUILTIN_IDS]
    ids = []
    for lv in json.loads(m.group(1)):
        for col in lv['cols']:
            for vid, title in col['v']:
                ids.append((vid, title))
    return ids


def ts(x):
    h, r = divmod(x, 3600)
    m, s = divmod(r, 60)
    return '%02d:%02d:%06.3f' % (h, m, s)


def to_vtt(snips):
    out = []
    for i, (start, dur, text) in enumerate(snips):
        end = start + (dur or 2)
        if i + 1 < len(snips):
            end = min(end, snips[i + 1][0]) if snips[i + 1][0] > start else end
        text = ' '.join(str(text).replace('\n', ' ').split())
        if text:
            out.append('%s --> %s\n%s\n' % (ts(start), ts(end), text))
    return '\n'.join(out)


def fetch_one(api, vid):
    from youtube_transcript_api import NoTranscriptFound
    tl = api.list(vid)
    try:
        t = tl.find_manually_created_transcript(['en-GB', 'en', 'en-US'])
    except NoTranscriptFound:
        t = tl.find_generated_transcript(['en', 'en-GB', 'en-US'])
    return [(s.start, s.duration, s.text) for s in t.fetch()]


def main():
    try:
        from youtube_transcript_api import YouTubeTranscriptApi
    except ImportError:
        sys.exit('Thiếu thư viện. Chạy trước:  pip install "youtube-transcript-api>=1.2,<2"')
    data = {'made': '', 'v': {}}
    if os.path.exists(OUT):
        try:
            data = json.load(open(OUT, encoding='utf-8'))
            data.setdefault('v', {})
        except Exception:
            pass
    api = YouTubeTranscriptApi()
    ids = video_ids()
    ok = skip = fail = blocked = 0
    for n, (vid, title) in enumerate(ids, 1):
        if data['v'].get(vid):
            skip += 1
            continue
        if blocked >= 3 and not ok:
            fail += 1
            continue   # mạng đang bị YouTube chặn: không thử tiếp cho đỡ mất thời gian
        for attempt in range(3):
            try:
                snips = fetch_one(api, vid)
                data['v'][vid] = to_vtt(snips)
                ok += 1
                print('[%d/%d] ✓ %s (%d dòng)' % (n, len(ids), title, len(snips)))
                break
            except Exception as e:
                name = type(e).__name__
                if name in ('RequestBlocked', 'IpBlocked'):
                    blocked = blocked + 1
                if name in ('RequestBlocked', 'IpBlocked') or attempt == 2:
                    fail += 1
                    print('[%d/%d] ✗ %s: %s' % (n, len(ids), title, name))
                    if name in ('RequestBlocked', 'IpBlocked'):
                        print('   YouTube đang chặn mạng này (máy chủ đám mây, VPN…). Hãy chạy trên điện thoại hoặc máy tính ở nhà.')
                    break
                time.sleep(3 * (attempt + 1))
        time.sleep(1.2)   # đi chậm để YouTube không chặn
        # lưu dần, lỡ dừng giữa chừng vẫn giữ được phần đã lấy
        data['made'] = datetime.date.today().isoformat()
        os.makedirs(os.path.dirname(OUT), exist_ok=True)
        json.dump(data, open(OUT, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
    print('\nXong: lấy mới %d, đã có sẵn %d, lỗi %d. File: %s' % (ok, skip, fail, OUT))
    if fail:
        print('Chạy lại lệnh để thử lấy các video bị lỗi.')
    if fail and not ok and not skip:
        sys.exit(1)   # không lấy được video nào → báo lỗi rõ ràng (GitHub Actions hiện dấu ✗ đỏ)


if __name__ == '__main__':
    main()
