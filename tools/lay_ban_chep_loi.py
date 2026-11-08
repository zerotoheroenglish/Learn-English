# -*- coding: utf-8 -*-
"""
Lấy bản chép lời (phụ đề tiếng Anh có mốc thời gian) cho các video BBC trong app,
ghi vào data/bbc-subs.json. App tự đọc file này: mở video là có chữ chạy, chính tả, quiz.

Cách chạy (máy tính có Python 3.9+):
    pip install "youtube-transcript-api>=1.2,<2"
    python tools/lay_ban_chep_loi.py
Chạy lại bất cứ lúc nào: video đã có sẽ được bỏ qua, chỉ lấy video mới hoặc lần trước bị lỗi.
"""
import json, os, re, sys, time, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'js', 'tab-shadowing.js')
OUT = os.path.join(ROOT, 'data', 'bbc-subs.json')


def video_ids():
    js = open(SRC, encoding='utf-8').read()
    m = re.search(r'const SH_BBC = (\[.*?\]);\n', js, re.S)
    if not m:
        sys.exit('Không tìm thấy danh sách video (SH_BBC) trong js/tab-shadowing.js')
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
    ok = skip = fail = 0
    for n, (vid, title) in enumerate(ids, 1):
        if data['v'].get(vid):
            skip += 1
            continue
        for attempt in range(3):
            try:
                snips = fetch_one(api, vid)
                data['v'][vid] = to_vtt(snips)
                ok += 1
                print('[%d/%d] ✓ %s (%d dòng)' % (n, len(ids), title, len(snips)))
                break
            except Exception as e:
                name = type(e).__name__
                if name in ('RequestBlocked', 'IpBlocked') or attempt == 2:
                    fail += 1
                    print('[%d/%d] ✗ %s: %s' % (n, len(ids), title, name))
                    if name in ('RequestBlocked', 'IpBlocked'):
                        print('   YouTube đang chặn mạng này. Hãy chạy lại trên máy tính ở nhà (không dùng VPN).')
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


if __name__ == '__main__':
    main()
