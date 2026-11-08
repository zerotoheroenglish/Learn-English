/* ---------- Nói chuyện: kịch bản nhập vai do app tự soạn ----------
   Mỗi lượt: p = câu nhân vật nói (tiếng Anh) · vi = nghĩa · task = việc bạn cần nói
   need = [mẫu nhận diện trên câu đã viết thường + mở rộng viết tắt (i'm → i am), tên cấu trúc]
   model = câu mẫu · slot = [tên, mẫu lấy thông tin từ câu bạn nói, cách chèn lại] · react = [[mẫu, câu nhân vật đáp lại]] */
const TALK_SCENES = [
{ id: 'a1-meet', lv: 1, icon: '👋', title: 'Làm quen bạn mới', en: 'Meeting a new classmate',
  who: 'Emma', role: 'bạn cùng lớp tiếng Anh', goal: 'Giới thiệu tên, quê, công việc và sở thích của bạn.',
  uses: ['be-present', 'howto-greet', 'howto-personal', 'like-ing'],
  turns: [
    { p: "Hi! I'm Emma. What's your name?", vi: 'Chào bạn! Mình là Emma. Bạn tên gì?', task: 'Nói tên của bạn.',
      need: [/\b(my name is|i am|call me)\b/, "My name is … / I'm …"], model: ["My name is Nam.", "I'm Nam. Nice to meet you."],
      slot: ['name', /(?:my name is|i'm|i am|call me)\s+([A-Za-zÀ-ỹ]+)/i, ', $1'] },
    { p: "Nice to meet you{name}! Where are you from?", vi: 'Rất vui được gặp bạn! Bạn đến từ đâu?', task: 'Nói bạn đến từ đâu.',
      need: [/\b(i am from|i come from|from)\b/, "I'm from …"], model: ["I'm from Ho Chi Minh City.", "I come from Da Nang, in Vietnam."],
      slot: ['home', /from\s+([A-Z][\wÀ-ỹ]+(?:\s+[A-Z][\wÀ-ỹ]+)*)/, '$1'] },
    { p: "Oh, cool! I've heard {home|it} is a lovely place. What do you do?", vi: 'Ồ, hay quá! Mình nghe nói nơi đó đẹp lắm. Bạn làm nghề gì?', task: 'Nói nghề của bạn (hoặc bạn là sinh viên).',
      need: [/\bi am an? \w+|\bi work (as|at|in|for)\b|\bi am a student\b|\bi study\b/, "I'm a/an + nghề · I work at …"], model: ["I'm a 3D artist.", "I work at a game company. I'm a 3D modeler."],
      react: [[/\bstudent|study\b/, 'Me too! I study design.'], [/\b3d|artist|design|game\b/, 'Wow, that sounds creative!']] },
    { p: "What do you like doing in your free time?", vi: 'Lúc rảnh bạn thích làm gì?', task: 'Nói 1–2 sở thích, dùng like / love + V-ing.',
      need: [/\b(like|love|enjoy)s? \w+ing\b|\b(like|love|enjoy) to \w+/, 'I like / love / enjoy + V-ing'], model: ["I like watching movies and playing football.", "I love drawing. I also enjoy listening to music."],
      react: [[/\bmovie|film\b/, 'Me too! I watch a movie every weekend.'], [/\bmusic|sing\b/, 'Nice! Music makes me happy too.'], [/\bdraw|paint|game\b/, 'That’s so cool!']] },
    { p: "Why are you learning English?", vi: 'Tại sao bạn học tiếng Anh?', task: 'Nói lý do, dùng because hoặc to + V.',
      need: [/\bbecause\b|\bto \w+|\bfor (my )?(work|job)\b/, 'because … / to + V'], model: ["Because I want to work for a foreign company.", "I'm learning English to talk with my clients."] },
    { p: "That's great. It was nice talking to you{name}. See you in class!", vi: 'Hay quá. Rất vui được nói chuyện với bạn. Hẹn gặp ở lớp nhé!', task: 'Chào tạm biệt Emma một cách lịch sự.',
      need: [/\b(see you|bye|goodbye|nice (talking|to meet|meeting)|have a (nice|good))\b/, 'See you … / Nice talking to you too.'], model: ["Nice talking to you too. See you!", "Bye, Emma. See you tomorrow!"] }
  ] },

{ id: 'a1-family', lv: 1, icon: '👨‍👩‍👧', title: 'Kể về gia đình', en: 'Talking about your family',
  who: 'Tom', role: 'đồng nghiệp mới', goal: 'Nói gia đình có mấy người, họ là ai, làm gì.',
  uses: ['howto-family', 'havegot', 'present-simple', 'possessive-s'],
  turns: [
    { p: "Do you have a big family?", vi: 'Gia đình bạn có đông không?', task: 'Nói gia đình bạn có mấy người.',
      need: [/\bthere are \w+|\bi have \w+|\bi have got\b|\b(big|small) family\b|\bpeople in my family\b/, 'There are … people in my family · I have …'], model: ["No, it's small. There are four people in my family.", "Yes, I have a big family. There are six of us."] },
    { p: "Who are they?", vi: 'Họ là những ai?', task: 'Kể các thành viên: bố, mẹ, anh chị em…',
      need: [/\b(my )?(father|mother|dad|mum|mom|parents|brother|sister|wife|husband|son|daughter|grandmother|grandfather)\b/, 'my father, my mother, my brother…'], model: ["My father, my mother, my younger sister and me.", "My parents, my wife and my son."] },
    { p: "What does your father do?", vi: 'Bố bạn làm nghề gì?', task: 'Nói nghề của bố (hoặc một người trong nhà). Nhớ: he/she + V-s/es.',
      need: [/\b(he|she) (is|works|teaches|drives|owns|runs|sells|stays|cooks|has)\b|\b(he|she) is retired\b/, 'He is a/an … · He works at …'], model: ["He is a teacher. He teaches maths.", "He works in a factory."],
      react: [[/\bteach/, 'Oh, my mother is a teacher too!'], [/\bretired\b/, 'Nice, he can relax now.']] },
    { p: "Do you have any brothers or sisters?", vi: 'Bạn có anh chị em không?', task: 'Trả lời có / không và nói thêm một câu.',
      need: [/\b(yes|no)\b|\bi have\b|\bi do not have\b|\bonly child\b/, "Yes, I have … · No, I don't. I'm an only child."], model: ["Yes, I have one older brother.", "No, I don't. I'm an only child."],
      react: [[/\bno\b|\bdo not\b|only child/, 'Oh, so you’re an only child.'], [/\byes|i have\b/, 'That’s nice!']] },
    { p: "How often do you see your family?", vi: 'Bạn có hay gặp gia đình không?', task: 'Dùng trạng từ tần suất: always, usually, often, every weekend…',
      need: [/\b(always|usually|often|sometimes|rarely|never|every (day|week|weekend|month|year)|once|twice)\b/, 'usually / every weekend / once a month…'], model: ["I see them every weekend.", "I usually visit them once a month."] },
    { p: "That's lovely. Family is important.", vi: 'Thật tuyệt. Gia đình rất quan trọng.', task: 'Đồng ý và hỏi lại Tom về gia đình anh ấy.',
      need: [/\b(do|does|what about|how about|and you)\b.*\?|\band you\b|\bwhat about you\b|\bhow about you\b/, 'What about you? · Do you have …?'], model: ["Yes, I agree. What about you, Tom?", "I think so too. Do you have any children?"] }
  ] },

{ id: 'a1-day', lv: 1, icon: '⏰', title: 'Một ngày của bạn', en: 'Your daily routine',
  who: 'Lily', role: 'bạn qua mạng', goal: 'Kể về thói quen hằng ngày bằng thì hiện tại đơn.',
  uses: ['present-simple', 'frequency', 'howto-time', 'prepositions'],
  turns: [
    { p: "What time do you usually get up?", vi: 'Bạn thường dậy lúc mấy giờ?', task: 'Nói giờ bạn dậy. Dùng at + giờ.',
      need: [/\bat (\d|six|seven|five|eight|nine|half|a quarter|\w+ o'clock)|\bget up at\b|\bwake up at\b/, 'I get up at + giờ'], model: ["I usually get up at six thirty.", "I get up at seven o'clock."] },
    { p: "What do you do in the morning?", vi: 'Buổi sáng bạn làm gì?', task: 'Kể 2–3 việc buổi sáng. Dùng first, then, after that.',
      need: [/\b(first|then|after that|and then)\b/, 'First … Then … After that …'], model: ["First I brush my teeth, then I have breakfast.", "I take a shower, and then I drive to work."] },
    { p: "How do you get to work or school?", vi: 'Bạn đi làm / đi học bằng gì?', task: 'Nói phương tiện: by bus, by motorbike, on foot…',
      need: [/\bby (bus|bike|motorbike|car|train|taxi|grab)|\bon foot\b|\bi (usually |often |always |sometimes )?(walk|drive|ride|take|cycle)\b/, 'by + phương tiện · I walk / drive / ride'], model: ["I go to work by motorbike.", "I usually take the bus."] },
    { p: "What do you usually have for lunch?", vi: 'Bạn thường ăn trưa món gì?', task: 'Nói món bạn hay ăn trưa.',
      need: [/\b(have|eat|eats)\b/, 'I usually have / eat …'], model: ["I usually have rice with chicken.", "I often eat noodles near my office."] },
    { p: "And what do you do in the evening?", vi: 'Còn buổi tối bạn làm gì?', task: 'Kể việc buổi tối, nhớ dùng thì hiện tại đơn.',
      need: [/\bi (usually |often |always |sometimes )?(watch|cook|read|study|play|go|listen|practise|practice|learn|relax|have|do|check|talk|call|chat|work)\b/, 'I + V (hiện tại đơn)'], model: ["I cook dinner and watch TV.", "I study English for an hour, then I go to bed."] },
    { p: "Sounds like a busy day! What time do you go to bed?", vi: 'Nghe bận rộn ghê! Bạn đi ngủ lúc mấy giờ?', task: 'Nói giờ đi ngủ.',
      need: [/\bat \w+|\bgo to bed\b|\bsleep\b/, 'I go to bed at + giờ'], model: ["I go to bed at eleven.", "I usually go to bed at half past ten."] }
  ] },

{ id: 'a1-cafe', lv: 1, icon: '☕', title: 'Gọi đồ ở quán cà phê', en: 'Ordering at a café',
  who: 'Barista', role: 'nhân viên quán cà phê', goal: 'Gọi đồ uống, chọn cỡ, hỏi giá và trả tiền.',
  uses: ['howto-restaurant', 'modal-can', 'howmuch-howadj', 'nouns'],
  turns: [
    { p: "Hi there! What can I get for you?", vi: 'Xin chào! Tôi lấy gì cho bạn nhé?', task: 'Gọi một đồ uống một cách lịch sự.',
      need: [/\b(can i (have|get)|could i (have|get)|i would like|i will have|please)\b/, "Can I have …, please? · I'd like …"], model: ["Can I have an iced latte, please?", "I'd like a hot cappuccino, please."] },
    { p: "Sure. What size would you like? Small, medium or large?", vi: 'Được ạ. Bạn muốn cỡ nào? Nhỏ, vừa hay lớn?', task: 'Chọn cỡ.',
      need: [/\b(small|medium|large|regular)\b/, 'Medium, please. · A large one, please.'], model: ["Medium, please.", "A large one, please."] },
    { p: "Would you like anything to eat?", vi: 'Bạn có muốn ăn gì không?', task: 'Gọi thêm một món ăn, hoặc từ chối lịch sự.',
      need: [/\b(yes|no|can i|i would like|a |an |some |thanks|thank you)\b/, "Yes, can I have …? · No, thanks."], model: ["Yes, can I have a croissant?", "No, thank you. Just the coffee."] },
    { p: "Is that for here or to go?", vi: 'Bạn dùng tại đây hay mang đi?', task: 'Trả lời uống tại chỗ hay mang đi.',
      need: [/\b(for here|to go|take away|takeaway|here|go)\b/, 'For here, please. · To go, please.'], model: ["For here, please.", "To go, please."] },
    { p: "Great. Anything else?", vi: 'Được ạ. Còn gì nữa không?', task: 'Hỏi giá tiền.',
      need: [/\bhow much\b/, 'How much is it? · How much is that?'], model: ["No, that's all. How much is it?", "That's everything. How much is that?"] },
    { p: "That's eighty-five thousand dong. Cash or card?", vi: 'Hết 85 nghìn đồng. Tiền mặt hay thẻ?', task: 'Nói cách trả tiền và cảm ơn.',
      need: [/\b(cash|card|pay|transfer|qr)\b/, 'By card, please. · Can I pay by card?'], model: ["Card, please. Thank you!", "Can I pay by QR code? Thanks."] }
  ] },

{ id: 'a2-weekend', lv: 2, icon: '🏖️', title: 'Cuối tuần vừa rồi', en: 'Last weekend',
  who: 'Jack', role: 'đồng nghiệp', goal: 'Kể chuyện cuối tuần bằng thì quá khứ đơn.',
  uses: ['past-simple', 'past-be', 'regular-ed', 'wh-questions'],
  turns: [
    { p: "Good morning! How was your weekend?", vi: 'Chào buổi sáng! Cuối tuần của bạn thế nào?', task: 'Nói cuối tuần thế nào. Dùng was + tính từ.',
      need: [/\b(it was|was \w+|was great|was good)\b/, 'It was great / relaxing / busy.'], model: ["It was great, thanks!", "It was quite busy, but fun."] },
    { p: "What did you do?", vi: 'Bạn đã làm gì?', task: 'Kể 1–2 việc bạn đã làm. Động từ ở quá khứ (V2/V-ed).',
      need: [/\bi (went|visited|watched|played|met|cooked|stayed|cleaned|had|saw|bought|took|made|did|read|tried|traveled|travelled|studied|worked|spent|ate|drank|got|walked|rode|drove|called|finished|relaxed)\b/, 'I went / visited / watched … (V2)'], model: ["I went to the beach with my family.", "I visited my parents and cooked dinner for them."],
      react: [[/\bbeach|sea\b/, 'Lucky you! The weather was perfect.'], [/\bmovie|film|cinema\b/, 'Oh, I love movies!']] },
    { p: "Who did you go with?", vi: 'Bạn đi với ai?', task: 'Nói bạn đi cùng ai (hoặc đi một mình).',
      need: [/\bwith\b|\balone\b|\bby myself\b|\bon my own\b/, 'I went with … · I went alone.'], model: ["I went with my friends.", "I went alone. I needed some quiet time."] },
    { p: "Did you have a good time?", vi: 'Bạn có vui không?', task: 'Trả lời Yes, I did / No, I didn’t và nói thêm lý do.',
      need: [/\b(yes|no),? i (did|did not)\b|\bi had a (great|good|nice|wonderful|bad)\b/, "Yes, I did. · I had a great time."], model: ["Yes, I did. The food was amazing.", "Yes, I had a great time."] },
    { p: "What was the best part?", vi: 'Phần thích nhất là gì?', task: 'Nói điều bạn thích nhất.',
      need: [/\bthe best part was\b|\bi (really )?(loved|liked|enjoyed)\b|\bwas the best\b/, 'The best part was … · I really enjoyed …'], model: ["The best part was swimming in the sea.", "I really enjoyed the seafood."] },
    { p: "Sounds fun! I just stayed at home and slept a lot.", vi: 'Nghe vui đấy! Mình chỉ ở nhà và ngủ nhiều thôi.', task: 'Hỏi lại Jack một câu về cuối tuần của anh ấy (dùng did).',
      need: [/\bdid you\b|\bwhat did\b|\bwhere did\b|\bwhy did\b/, 'Did you …? · What did you …?'], model: ["Did you watch the football match?", "Why did you sleep so much? Were you tired?"] }
  ] },

{ id: 'a2-plans', lv: 2, icon: '🗓️', title: 'Kế hoạch tuần tới', en: 'Plans for next week',
  who: 'Sophie', role: 'bạn thân', goal: 'Nói kế hoạch bằng be going to, will và rủ bạn đi chơi.',
  uses: ['going-to', 'future-simple', 'howto-suggest', 'howto-invite'],
  turns: [
    { p: "Hey! What are you going to do this weekend?", vi: 'Này! Cuối tuần này bạn định làm gì?', task: 'Nói kế hoạch, dùng am going to + V.',
      need: [/\b(am|is|are) going to \w+|\bi am \w+ing\b|\bi plan to\b|\bi will\b/, "I'm going to + V"], model: ["I'm going to visit my grandparents.", "I'm going to finish a 3D project."] },
    { p: "Nice! Are you free on Sunday evening?", vi: 'Hay đấy! Tối Chủ nhật bạn rảnh không?', task: 'Trả lời bạn rảnh hay bận.',
      need: [/\b(yes|no|i am free|i am busy|i think so|i am not)\b/, "Yes, I'm free. · Sorry, I'm busy."], model: ["Yes, I'm free. Why?", "I think so. What's up?"] },
    { p: "There's a new film at the cinema. Would you like to come?", vi: 'Có phim mới ở rạp. Bạn muốn đi không?', task: 'Nhận lời (hoặc từ chối lịch sự và nói lý do).',
      need: [/\b(i would love to|sure|yes|sounds (good|great)|sorry|i can not|i am afraid)\b/, "I'd love to! · Sorry, I can't because …"], model: ["I'd love to! What time does it start?", "Sorry, I can't. I'm going to work late."] },
    { p: "It starts at seven. Shall we meet before the film?", vi: 'Phim chiếu lúc 7 giờ. Mình gặp nhau trước nhé?', task: 'Đề nghị giờ và chỗ gặp: Let’s… / How about…?',
      need: [/\b(let us|how about|what about|shall we|why do not we|we can|meet at)\b/, "Let's meet at … · How about …?"], model: ["Let's meet at six thirty at the café.", "How about having dinner first at six?"] },
    { p: "Good idea. I'll book the tickets. Can you bring some snacks?", vi: 'Ý hay. Mình sẽ đặt vé. Bạn mang đồ ăn vặt nhé?', task: 'Hứa sẽ làm, dùng I will (I’ll).',
      need: [/\bi will\b|\bno problem\b|\bof course\b/, "Sure, I'll … · No problem, I will …"], model: ["Sure, I'll bring some popcorn.", "No problem. I will buy some drinks too."] },
    { p: "Perfect! What will you do after the film?", vi: 'Tuyệt! Xem phim xong bạn sẽ làm gì?', task: 'Đoán / dự định sau đó, dùng will hoặc going to.',
      need: [/\bi will\b|\bgoing to\b|\bprobably\b|\bmaybe\b/, "I'll probably … · I'm going to …"], model: ["I'll probably go home early. I have work on Monday.", "Maybe we will walk around the city."] }
  ] },

{ id: 'a2-shop', lv: 2, icon: '👕', title: 'Mua áo ở cửa hàng', en: 'Buying clothes',
  who: 'Shop assistant', role: 'nhân viên bán hàng', goal: 'Hỏi cỡ, màu, giá, so sánh và quyết định mua.',
  uses: ['howto-shop', 'howmuch-howadj', 'compare', 'demonstratives', 'too'],
  turns: [
    { p: "Hello! Can I help you?", vi: 'Xin chào! Tôi giúp gì được ạ?', task: 'Nói bạn đang tìm món gì.',
      need: [/\b(i am looking for|i would like|i want|do you have|can i)\b/, "I'm looking for … · Do you have …?"], model: ["Yes, I'm looking for a white shirt.", "Do you have this jacket in blue?"] },
    { p: "What size are you?", vi: 'Bạn mặc cỡ nào?', task: 'Nói cỡ của bạn.',
      need: [/\b(small|medium|large|size|xs|s|m|l|xl|xxl)\b/, "I'm a medium. · Size M, please."], model: ["I'm a medium.", "Size L, please."] },
    { p: "Here you are. The fitting room is over there.", vi: 'Đây ạ. Phòng thử ở đằng kia.', task: 'Sau khi thử: nói áo vừa hay quá rộng / quá chật (too + adj).',
      need: [/\btoo (big|small|tight|long|short|loose)\b|\b(it )?fits\b|\b(big|small) enough\b/, "It's too small. · It fits well."], model: ["It's a bit too small. Do you have a bigger one?", "It fits perfectly."] },
    { p: "We also have this one. It's cheaper but the material is thinner.", vi: 'Chúng tôi còn mẫu này. Rẻ hơn nhưng vải mỏng hơn.', task: 'So sánh hai cái áo (dùng so sánh hơn: -er / more …).',
      need: [/\b\w+er than\b|\bmore \w+ than\b|\b(better|worse|cheaper|nicer|thicker|thinner|softer)\b/, 'This one is cheaper / more comfortable than …'], model: ["The first one is more comfortable than this one.", "This one is cheaper, but I prefer the thicker one."] },
    { p: "Good choice. Anything else?", vi: 'Lựa chọn tốt. Còn gì nữa không ạ?', task: 'Hỏi giá.',
      need: [/\bhow much\b/, 'How much is it? · How much is this?'], model: ["No, thanks. How much is it?", "How much is this shirt?"] },
    { p: "It's four hundred and fifty thousand. We have a ten percent discount today.", vi: '450 nghìn. Hôm nay giảm giá 10%.', task: 'Quyết định mua và cách trả tiền.',
      need: [/\bi will take\b|\bi will buy\b|\bcan i pay\b|\bby card\b|\bin cash\b/, "I'll take it. · Can I pay by card?"], model: ["Great, I'll take it. Can I pay by card?", "I'll take it, thanks."] }
  ] },

{ id: 'a2-directions', lv: 2, icon: '🧭', title: 'Hỏi đường', en: 'Asking for directions',
  who: 'Local', role: 'người dân địa phương', goal: 'Hỏi đường, hiểu chỉ dẫn và xác nhận lại.',
  uses: ['howto-directions', 'prep-movement', 'imperative', 'ittakes'],
  turns: [
    { p: "You look lost. Can I help you?", vi: 'Trông bạn như bị lạc. Tôi giúp được không?', task: 'Hỏi đường đến một nơi (bảo tàng, ga tàu…).',
      need: [/\b(where is|how (do|can) i get to|is there a|could you tell me|can you tell me|the way to)\b/, 'Excuse me, how do I get to …?'], model: ["Yes, please. How do I get to the train station?", "Excuse me, where is the history museum?"] },
    { p: "Go straight on, then turn left at the traffic lights. It's next to the bank.", vi: 'Đi thẳng, rồi rẽ trái ở đèn giao thông. Nó ở cạnh ngân hàng.', task: 'Nhắc lại chỉ dẫn để xác nhận.',
      need: [/\b(straight|turn left|left)\b/, 'So I go straight and turn left …?'], model: ["So I go straight on and turn left at the lights?", "Straight on, then left at the traffic lights. Got it."] },
    { p: "That's right. It's on the left, next to the bank.", vi: 'Đúng rồi. Nó ở bên trái, cạnh ngân hàng.', task: 'Hỏi mất bao lâu để đi bộ tới đó.',
      need: [/\bhow long\b|\bhow far\b/, 'How long does it take to walk there? · How far is it?'], model: ["How long does it take to walk there?", "Is it far? How far is it?"] },
    { p: "It takes about ten minutes on foot.", vi: 'Đi bộ khoảng 10 phút.', task: 'Hỏi có xe buýt / cách khác không.',
      need: [/\b(is there|can i take|bus|taxi|grab|another way)\b/, 'Is there a bus? · Can I take a taxi?'], model: ["Is there a bus that goes there?", "Can I take a taxi instead?"] },
    { p: "Yes, the number 18 bus stops right outside.", vi: 'Có, xe buýt số 18 dừng ngay bên ngoài.', task: 'Cảm ơn người giúp bạn.',
      need: [/\b(thank|thanks|appreciate)\b/, 'Thank you so much! · Thanks for your help.'], model: ["Thank you so much for your help!", "Thanks a lot. Have a nice day!"] }
  ] },

{ id: 'a2-hotel', lv: 2, icon: '🏨', title: 'Nhận phòng khách sạn', en: 'Checking in at a hotel',
  who: 'Receptionist', role: 'lễ tân khách sạn', goal: 'Nhận phòng, hỏi tiện ích và nhờ giúp đỡ.',
  uses: ['howto-hotel', 'modal-can', 'thereis', 'present-perfect'],
  turns: [
    { p: "Good evening. Welcome to the Riverside Hotel. Do you have a reservation?", vi: 'Chào buổi tối. Chào mừng đến khách sạn Riverside. Anh/chị có đặt phòng chưa?', task: 'Nói bạn đã đặt phòng và tên đặt phòng.',
      need: [/\b(i have a reservation|i have booked|i booked|under the name|my name is|yes)\b/, "Yes, I have a reservation under the name …"], model: ["Yes, I have a reservation under the name Nguyen.", "Yes, I booked a double room online."] },
    { p: "Thank you. Could I see your passport, please?", vi: 'Cảm ơn. Cho tôi xem hộ chiếu được không?', task: 'Đưa hộ chiếu và nói một câu lịch sự.',
      need: [/\b(here you are|here it is|of course|sure)\b/, 'Here you are. · Of course, here it is.'], model: ["Of course. Here you are.", "Sure, here it is."] },
    { p: "You're in room 512 on the fifth floor. Breakfast is from six to ten.", vi: 'Anh/chị ở phòng 512 tầng 5. Ăn sáng từ 6 đến 10 giờ.', task: 'Hỏi về một tiện ích: wifi, hồ bơi, phòng gym…',
      need: [/\b(is there|are there|do you have|what is the|can i use|wifi|password|pool|gym)\b/, 'Is there a …? · What is the wifi password?'], model: ["Is there a swimming pool?", "What's the wifi password, please?"] },
    { p: "Yes, the pool is on the roof. It's open until nine.", vi: 'Có, hồ bơi ở trên sân thượng. Mở đến 9 giờ.', task: 'Nhờ một việc: gọi taxi sáng mai, giữ hành lý…',
      need: [/\b(could you|can you|would you|is it possible)\b/, 'Could you …, please?'], model: ["Could you call a taxi for me at seven tomorrow?", "Can you keep my luggage after check-out?"] },
    { p: "Of course. Have you stayed with us before?", vi: 'Vâng. Anh/chị đã từng ở khách sạn chúng tôi chưa?', task: 'Trả lời bằng thì hiện tại hoàn thành: I have / I haven’t…',
      need: [/\b(i have (never )?(been|stayed)|no,? i have not|yes,? i have|this is my first time|first time)\b/, "No, I haven't. This is my first time."], model: ["No, I haven't. This is my first time here.", "Yes, I have. I stayed here last year."] }
  ] },

{ id: 'b1-interview', lv: 3, icon: '💼', title: 'Phỏng vấn vị trí 3D Artist', en: 'Job interview: 3D Artist',
  who: 'Ms. Parker', role: 'trưởng phòng tuyển dụng một studio game', goal: 'Giới thiệu kinh nghiệm, kỹ năng, dự án và lý do ứng tuyển.',
  uses: ['present-perfect', 'pp-vs-past', 'present-perfect-continuous', 'past-simple'],
  turns: [
    { p: "Thanks for coming in. Could you tell me a little about yourself?", vi: 'Cảm ơn bạn đã đến. Bạn giới thiệu đôi chút về bản thân nhé?', task: 'Giới thiệu bản thân và công việc hiện tại.',
      need: [/\bi am an? \w+|\bi work (as|at|for)\b|\bi have been\b/, "I'm a … · I've been working as …"], model: ["I'm a 3D artist from Ho Chi Minh City. I've been working in games for four years.", "I work as a 3D modeler at an outsourcing studio."] },
    { p: "How long have you worked in the 3D industry?", vi: 'Bạn làm trong ngành 3D bao lâu rồi?', task: 'Nói thời gian bằng present perfect + for / since.',
      need: [/\bi have (been )?\w+ .*\b(for|since)\b/, "I've worked … for/since …"], model: ["I've worked in the industry for five years.", "I've been doing 3D since 2019."] },
    { p: "Tell me about a project you're proud of.", vi: 'Kể về một dự án bạn tự hào.', task: 'Kể một dự án đã xong (quá khứ đơn): bạn đã làm gì, kết quả ra sao.',
      need: [/\bi (made|created|modeled|modelled|built|designed|worked|did|textured|led|finished|delivered)\b/, 'I created / modeled / worked on … (V2)'], model: ["Last year I modeled all the vehicles for a racing game.", "I created the characters for a mobile RPG. It reached one million downloads."] },
    { p: "Which software are you most comfortable with?", vi: 'Bạn thành thạo phần mềm nào nhất?', task: 'Nói phần mềm bạn giỏi, dùng I’m good at / I’m comfortable with.',
      need: [/\b(good at|comfortable with|familiar with|experienced in|expert in|i (mainly |mostly |usually )?use)\b/, "I'm comfortable with … · I'm good at …"], model: ["I'm most comfortable with 3ds Max and Substance Painter.", "I mainly use Blender, and I'm also good at ZBrush."] },
    { p: "What's the biggest challenge you've faced, and how did you solve it?", vi: 'Khó khăn lớn nhất bạn từng gặp là gì, và bạn giải quyết thế nào?', task: 'Kể một khó khăn và cách giải quyết.',
      need: [/\b(the (biggest )?(challenge|problem) was|i had to|so i|i solved|i fixed|i learned|i decided)\b/, 'The biggest challenge was … so I …'], model: ["The biggest challenge was a very tight deadline, so I made a clear schedule and asked for daily feedback.", "Our scenes were too heavy, so I optimised the topology and baked the details."] },
    { p: "Why do you want to join our studio?", vi: 'Vì sao bạn muốn làm ở studio chúng tôi?', task: 'Nêu lý do: because / I’d like to…',
      need: [/\bbecause\b|\bi would like to\b|\bi want to\b|\bi am interested in\b/, "Because … · I'd like to …"], model: ["Because I love your art style and I'd like to work on bigger projects.", "I'm interested in your new game, and I want to grow as a character artist."] }
  ] },

{ id: 'b1-review', lv: 3, icon: '🧊', title: 'Họp review với trưởng nhóm 3D', en: 'Art review with your lead',
  who: 'Daniel', role: 'Art Lead', goal: 'Báo cáo tiến độ, nhận góp ý, đề xuất cách sửa và hẹn thời hạn.',
  uses: ['present-perfect', 'howto-opinion', 'modal-more', 'obligation', 'future-forms'],
  turns: [
    { p: "Hi, let's look at your model. How's it going?", vi: 'Chào, cùng xem mô hình của bạn nhé. Tiến độ thế nào rồi?', task: 'Báo cáo việc đã xong bằng present perfect (I’ve finished…).',
      need: [/\bi have (already |just )?\w+(ed|en|t|ne|de)\b|\bi have done\b/, "I've finished … / I've already …"], model: ["I've finished the high poly, and I've started the UVs.", "It's going well. I've already baked the normal maps."] },
    { p: "The silhouette looks good, but the polycount is a bit high.", vi: 'Hình dáng ổn, nhưng số polygon hơi cao.', task: 'Đồng ý và đề xuất cách giảm (I could… / I’ll…).',
      need: [/\b(i (could|can|will|should)|maybe i|how about|i think i)\b/, 'I could reduce … · I will remove …'], model: ["You're right. I could remove the hidden faces and simplify the back.", "I'll reduce the loops on the wheels."] },
    { p: "What's the target polycount for this asset?", vi: 'Mục tiêu số polygon của asset này là bao nhiêu?', task: 'Nói con số / giới hạn.',
      need: [/\b(\d+|thousand|k)\b|\b(around|about|under|less than)\b/, 'It should be under … triangles.'], model: ["It should be under fifteen thousand triangles.", "About 20k tris, I think."] },
    { p: "OK. Do you think you'll need help with the textures?", vi: 'Ừ. Bạn nghĩ có cần người giúp phần texture không?', task: 'Nêu ý kiến: I think… / In my opinion…',
      need: [/\b(i think|i do not think|in my opinion|i believe|i am not sure)\b/, 'I think … · I don’t think …'], model: ["I don't think so. I can handle them myself.", "I think I'll need some help with the decals."] },
    { p: "Great. When can you send the final version?", vi: 'Tốt. Khi nào bạn gửi bản cuối?', task: 'Hẹn thời hạn (by Friday, on Monday…), dùng will / be going to.',
      need: [/\b(by|on|before|next) \w+|\bi will\b|\bgoing to\b/, "I'll send it by … · I'm going to finish it on …"], model: ["I'll send it to you by Friday afternoon.", "I'm going to finish it on Thursday."] },
    { p: "Perfect. Anything else you need from me?", vi: 'Tốt lắm. Bạn cần mình hỗ trợ gì thêm không?', task: 'Nhờ một việc lịch sự (Could you…?) hoặc nói không cần.',
      need: [/\b(could you|can you|would you|it would be great if|no,? (thanks|thank you)|that is all)\b/, 'Could you …? · No, that’s all. Thanks.'], model: ["Could you send me the reference for the logo?", "No, that's all for now. Thanks, Daniel."] }
  ] },

{ id: 'b1-doctor', lv: 3, icon: '🩺', title: 'Đi khám bệnh', en: 'At the doctor’s',
  who: 'Dr. Lee', role: 'bác sĩ', goal: 'Tả triệu chứng, nói đã bị bao lâu và hỏi lời khuyên.',
  uses: ['present-perfect-continuous', 'present-perfect', 'hadbetter', 'modal-more'],
  turns: [
    { p: "Hello. What seems to be the problem?", vi: 'Chào bạn. Bạn bị sao vậy?', task: 'Tả triệu chứng: I have a … / My … hurts.',
      need: [/\bi have (got )?an? \w+|\bmy \w+ (hurts|aches)\b|\bi feel\b|\bi have been\b/, 'I have a headache. · My back hurts.'], model: ["I have a terrible headache and a sore throat.", "My back hurts, and I feel very tired."] },
    { p: "I see. How long have you had it?", vi: 'Tôi hiểu. Bạn bị như vậy bao lâu rồi?', task: 'Nói thời gian, dùng for / since.',
      need: [/\b(for|since) \w+/, 'For three days. · Since last Monday.'], model: ["I've had it for three days.", "Since last weekend."] },
    { p: "Have you taken any medicine?", vi: 'Bạn đã uống thuốc gì chưa?', task: 'Trả lời bằng present perfect.',
      need: [/\b(i have (taken|had|tried|used)|no,? i have not|yes,? i have|not yet)\b/, "I've taken … · No, I haven't."], model: ["Yes, I've taken some painkillers, but they didn't help.", "No, I haven't taken anything yet."] },
    { p: "Do you work long hours on a computer?", vi: 'Bạn có làm việc nhiều giờ trên máy tính không?', task: 'Nói về thói quen làm việc gần đây (I’ve been + V-ing).',
      need: [/\bi have been \w+ing\b|\b(yes|no)\b/, "Yes, I've been working ten hours a day."], model: ["Yes, I've been working ten hours a day recently.", "Yes. I've been sitting at my desk all day for a big project."] },
    { p: "That could be the reason. You should take regular breaks.", vi: 'Có thể đó là nguyên nhân. Bạn nên nghỉ giải lao thường xuyên.', task: 'Hỏi thêm lời khuyên: Should I…? / What else should I do?',
      need: [/\bshould i\b|\bwhat (else )?should\b|\bdo i need to\b|\bhow often\b/, 'Should I …? · What else should I do?'], model: ["Should I do any exercises?", "How often should I take a break?"] },
    { p: "Stretch every hour and drink more water. Come back if it doesn't get better.", vi: 'Giãn cơ mỗi giờ và uống nhiều nước hơn. Không đỡ thì quay lại.', task: 'Xác nhận sẽ làm theo và cảm ơn bác sĩ.',
      need: [/\b(i will|i am going to|thank)\b/, "I will … Thank you, doctor."], model: ["OK, I will. Thank you, doctor.", "I'll try to stretch more. Thanks for your help."] }
  ] },

{ id: 'b1-debate', lv: 3, icon: '💬', title: 'Bàn luận: học online hay học ở lớp?', en: 'Online or classroom learning?',
  who: 'Alex', role: 'bạn học', goal: 'Nêu quan điểm, đưa lý do, đồng ý / phản đối lịch sự.',
  uses: ['howto-opinion', 'compare', 'cond-2', 'although'],
  turns: [
    { p: "Do you prefer learning online or in a classroom?", vi: 'Bạn thích học online hay học trên lớp hơn?', task: 'Nêu lựa chọn và quan điểm (I prefer… / In my opinion…).',
      need: [/\b(i prefer|i would rather|in my opinion|i think|personally)\b/, 'I prefer … · In my opinion, …'], model: ["I prefer learning online because it's more flexible.", "In my opinion, classroom learning is better."] },
    { p: "Why do you think so?", vi: 'Tại sao bạn nghĩ vậy?', task: 'Đưa 2 lý do (firstly / also / because).',
      need: [/\b(because|firstly|first of all|also|another reason|besides)\b/, 'Firstly, … Also, …'], model: ["Firstly, I can study anytime. Also, I save time on travel.", "Because I can ask the teacher questions directly, and I meet other students."] },
    { p: "But online classes can be lonely, and it's easy to get distracted.", vi: 'Nhưng học online có thể cô đơn, và dễ mất tập trung.', task: 'Đồng ý một phần rồi phản biện lịch sự.',
      need: [/\b(that is true|you are right|i see what you mean|i agree|i know)\b.*\b(but|however)\b|\b(but|however)\b/, "That's true, but … · I see what you mean, but …"], model: ["That's true, but I can join online study groups.", "I see what you mean, but it depends on the person."] },
    { p: "Which one is cheaper, do you think?", vi: 'Bạn nghĩ cách nào rẻ hơn?', task: 'So sánh bằng so sánh hơn.',
      need: [/\b\w+er than\b|\bmore \w+ than\b|\bless \w+ than\b|\b(cheaper|more expensive)\b/, 'Online courses are cheaper than …'], model: ["Online courses are usually cheaper than classroom courses.", "Classroom courses are more expensive, but you get more support."] },
    { p: "If you could design the perfect course, what would it be like?", vi: 'Nếu bạn được thiết kế khóa học hoàn hảo, nó sẽ như thế nào?', task: 'Dùng câu điều kiện loại 2: If I could…, I would…',
      need: [/\bi would\b|\bit would\b|\bif i (could|were|had)\b/, 'If I could …, I would … · It would …'], model: ["If I could design it, I would mix online lessons with weekly meetings.", "It would have short videos and lots of speaking practice."] },
    { p: "Interesting idea! So, have I changed your mind at all?", vi: 'Ý hay đó! Vậy mình có làm bạn đổi ý chút nào không?', task: 'Kết luận ý kiến, có thể dùng although.',
      need: [/\b(although|even though|still|not really|a little|i agree|you have)\b/, "Although …, I still … · Not really, but …"], model: ["Although you made good points, I still prefer online learning.", "A little! Maybe a mix is the best option."] }
  ] },

{ id: 'b2-client', lv: 4, icon: '🤝', title: 'Thương lượng deadline với khách hàng', en: 'Negotiating a deadline with a client',
  who: 'Mr. Wilson', role: 'khách hàng nước ngoài của studio', goal: 'Giải thích chậm trễ, đưa phương án, thương lượng lịch mới một cách chuyên nghiệp.',
  uses: ['passive', 'cond-1', 'unless-provided', 'howto-apologise', 'although'],
  turns: [
    { p: "Hi. I was expecting the final renders today. What's happening?", vi: 'Chào. Tôi đang chờ bản render cuối hôm nay. Có chuyện gì vậy?', task: 'Xin lỗi và giải thích lý do một cách chuyên nghiệp.',
      need: [/\b(sorry|apologi[sz]e|unfortunately|i am afraid)\b/, "I'm sorry, but … · Unfortunately, …"], model: ["I'm really sorry. Unfortunately, our render farm went down last night.", "I apologise for the delay. We found some problems with the lighting."] },
    { p: "That's not good. How much work is left?", vi: 'Không ổn rồi. Còn bao nhiêu việc?', task: 'Báo cáo bằng câu bị động: … has been done / … is being fixed.',
      need: [/\b(has|have) been \w+|\b(is|are) being \w+|\b(was|were) \w+ed\b|\bhas been\b/, 'Most of the scenes have been rendered.'], model: ["Most of the scenes have been rendered. Only two shots are being fixed.", "Eight of ten shots have been finished, and the rest are being rendered now."] },
    { p: "When can you deliver everything?", vi: 'Khi nào anh/chị giao được toàn bộ?', task: 'Đưa thời hạn có điều kiện: If…, we will… / provided that…',
      need: [/\bif \w+.*\bwill\b|\bprovided (that)?\b|\bas long as\b|\bunless\b/, 'If …, we will … · provided that …'], model: ["If nothing else goes wrong, we will deliver by Thursday.", "We can deliver on Wednesday, provided that the feedback is final."] },
    { p: "Thursday is too late. Our presentation is on Wednesday morning.", vi: 'Thứ Năm thì quá muộn. Buổi thuyết trình của chúng tôi là sáng thứ Tư.', task: 'Đưa ra phương án lịch sự (We could… / Would it help if…?).',
      need: [/\b(we could|would it help if|how about|what if|we can|i was wondering if)\b/, 'We could … · Would it help if …?'], model: ["We could send you the three most important shots on Tuesday evening.", "Would it help if we delivered a preview version first?"] },
    { p: "OK, that could work. But I don't want any more delays.", vi: 'Được, cách đó có thể ổn. Nhưng tôi không muốn chậm nữa.', task: 'Cam kết rõ ràng và nói cách bạn sẽ cập nhật tiến độ.',
      need: [/\b(i promise|we will|i will|you will (get|receive|have))\b/, "We will … · I'll send you daily updates."], model: ["I understand. We will send you a progress update every evening.", "You'll have the preview by Tuesday at 6 p.m., I promise."] },
    { p: "Alright. Thanks for being honest with me.", vi: 'Được rồi. Cảm ơn đã thẳng thắn với tôi.', task: 'Kết thúc cuộc gọi chuyên nghiệp.',
      need: [/\b(thank|appreciate|look forward|talk (to you )?soon|have a (good|nice))\b/, 'Thank you for your understanding. · I appreciate …'], model: ["Thank you for your understanding. I'll keep you posted.", "I really appreciate your patience. Talk to you soon."] }
  ] },

{ id: 'b2-complaint', lv: 4, icon: '📦', title: 'Phàn nàn về đơn hàng lỗi', en: 'Complaining about a faulty order',
  who: 'Customer service', role: 'nhân viên chăm sóc khách hàng', goal: 'Trình bày vấn đề, nói điều lẽ ra phải xảy ra và yêu cầu cách giải quyết.',
  uses: ['modal-perfect', 'passive', 'past-perfect', 'howto-apologise'],
  turns: [
    { p: "Thank you for calling. How can I help you today?", vi: 'Cảm ơn quý khách đã gọi. Hôm nay tôi giúp gì được ạ?', task: 'Nói bạn gọi để phàn nàn về đơn hàng nào.',
      need: [/\b(i am calling (about|because)|i would like to (complain|report)|i have a problem with|there is a problem with)\b/, "I'm calling about … · I'd like to complain about …"], model: ["I'm calling about a graphics tablet I ordered last week.", "I'd like to complain about my order number 4521."] },
    { p: "I'm sorry to hear that. What's wrong with it?", vi: 'Rất tiếc ạ. Sản phẩm bị sao vậy?', task: 'Tả vấn đề, có thể dùng bị động (it was damaged…).',
      need: [/\b(was|were|is|are) (damaged|broken|missing|scratched|delivered|sent)\b|\bdoes not work\b|\bit (does not|will not)\b/, 'It was damaged. · The pen is missing.'], model: ["The screen was scratched, and the pen was missing.", "It doesn't turn on, and the box was damaged."] },
    { p: "When did you notice the problem?", vi: 'Quý khách phát hiện lỗi lúc nào?', task: 'Dùng quá khứ hoàn thành: … had already … when …',
      need: [/\bhad (already )?\w+|\bas soon as\b|\bwhen i (opened|received|unpacked)\b/, 'When I opened it, it had already …'], model: ["When I opened the box, the screen had already been scratched.", "As soon as I unpacked it, I saw that the pen had been left out."] },
    { p: "I apologise. It seems it wasn't checked before shipping.", vi: 'Tôi xin lỗi. Có vẻ hàng chưa được kiểm tra trước khi gửi.', task: 'Nói điều lẽ ra phải làm: It should have been… / You should have…',
      need: [/\bshould have\b|\bshould not have\b|\bcould have\b|\bmust have\b/, 'It should have been checked …'], model: ["It should have been checked before you sent it.", "Someone should have tested it. I needed it for work."] },
    { p: "We can offer a replacement or a full refund. Which would you prefer?", vi: 'Chúng tôi có thể đổi hàng mới hoặc hoàn tiền toàn bộ. Quý khách chọn cách nào?', task: 'Chọn một cách và nói rõ điều kiện (as long as / provided that).',
      need: [/\bi would (prefer|rather|like)\b|\bas long as\b|\bprovided\b|\bi will take\b/, "I'd prefer … as long as …"], model: ["I'd prefer a replacement, as long as it arrives this week.", "I'd rather have a full refund, please."] },
    { p: "Done. You'll receive a confirmation email shortly. Is there anything else?", vi: 'Xong ạ. Quý khách sẽ nhận email xác nhận ngay. Còn gì nữa không ạ?', task: 'Cảm ơn và kết thúc cuộc gọi.',
      need: [/\b(thank|that is all|no,? that is|appreciate)\b/, "No, that's all. Thank you for your help."], model: ["No, that's all. Thanks for sorting it out so quickly.", "That's everything. I appreciate your help."] }
  ] }
];

/* ============================================================
   NÓI CHUYỆN — AI Speaking Partner (v131)
   1) Nhập vai soạn sẵn: miễn phí, không cần tài khoản. App chấm câu nói theo cấu trúc của lượt
      (đã học ở tab Ngữ pháp) + ngữ pháp (LanguageTool, miễn phí) rồi nhân vật nói tiếp.
   2) Trò chuyện tự do với AI: dùng khoá của CHÍNH người học: Gemini, Groq (miễn phí) hoặc ChatGPT (OpenAI, trả phí). (v140)
      Khoá chỉ lưu trên máy này: không đồng bộ lên tài khoản, không nằm trong file sao lưu.
============================================================ */
(function () {
  const root = document.getElementById('talk-root');
  if (!root) return;
  const E = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const P = 'hoc-tieng-anh-talk', K = { prog: P, set: P + '-set', key: P + '-key', model: P + '-model', models: P + '-models', ai: P + '-ai', prov: P + '-prov' };
  const load = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  let prog = load(K.prog, {}); if (!prog || typeof prog !== 'object') prog = {};
  let set = Object.assign({ hint: null, rate: 0.9, auto: true }, load(K.set, {}));
  const LV = ['', 'A1', 'A2', 'B1', 'B2', 'C1'];
  const userLv = () => { const n = typeof tnLevel === 'number' ? tnLevel : 1; return Math.max(1, Math.min(4, n || 1)); };
  const norm = t => (typeof scExpand === 'function' ? scExpand(t) : ' ' + String(t).toLowerCase() + ' ').replace(/'d\b/g, ' would');
  const words = t => (String(t).match(/[A-Za-z']+/g) || []).length;
  const VI_RE = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i;
  const lesson = id => (typeof gxFind === 'function' ? gxFind(id) : null);
  const lessonOk = id => { try { const r = gxStore[id]; return !!(r && ((r.best || 0) >= 60 || r.self)); } catch (e) { return false; } };
  const top = () => { const m = document.getElementById('page-talk'); if (m) window.scrollTo({ top: Math.max(0, m.offsetTop - 8) }); };
  const say = (text, rate) => { try { if (typeof speak === 'function' && text) speak(text, rate || set.rate); } catch (e) {} };
  const hush = () => { try { speechSynthesis.cancel(); } catch (e) {} };
  const play = text => { const b = E('button', 'play-mini', '▶'); b.type = 'button'; b.setAttribute('aria-label', 'Nghe'); b.addEventListener('click', e => { e.stopPropagation(); say(text); }); return b; };
  const openLesson = id => {
    const nav = document.querySelector('nav.tabbar button[data-page="page-grammar"]');
    if (nav) nav.click();
    try { gxLesson(id); } catch (e) {}
  };

  /* ---------- micro: nhận giọng nói (miễn phí, có sẵn trong Chrome / Edge / Safari) ---------- */
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  function micBox(onText, opts) {
    opts = opts || {};
    const wrap = E('div', 'tk-mic-wrap');
    const btn = E('button', 'tk-mic', SR ? '🎤 Nhấn để nói' : '🎤 Máy này chưa nghe được giọng nói');
    btn.type = 'button';
    const live = E('div', 'tk-live');
    const row = E('form', 'tk-type');
    const inp = E('input'); inp.type = 'text'; inp.placeholder = 'hoặc gõ câu trả lời bằng tiếng Anh…'; inp.autocomplete = 'off'; inp.setAttribute('autocapitalize', 'sentences');
    const send = E('button', 'btn-primary', 'Gửi'); send.type = 'submit';
    row.appendChild(inp); row.appendChild(send);
    let rec = null;
    const stop = () => { if (rec) rec.stop(); };
    const reset = () => { rec = null; btn.classList.remove('on'); btn.textContent = '🎤 Nhấn để nói'; };
    btn.disabled = !SR;
    btn.addEventListener('click', () => {
      if (rec) { stop(); return; }
      hush();
      live.textContent = ''; live.className = 'tk-live';
      btn.classList.add('on'); btn.textContent = '⏳ Đang mở micro…';
      // v168: nghe liên tục (ngừng lấy hơi không bị cắt câu), tự gửi sau khi ngừng nói ~1,8 giây
      rec = srFree({
        silence: 1800,
        onStart: () => { if (rec) btn.textContent = '👂 Đang nghe… nói ngay (nhấn để gửi)'; },
        onText: t => { live.textContent = t; },
        onDone: (t, er) => {
          reset();
          if (t) { live.textContent = ''; onText(t); return; }
          if (er) {
            live.className = 'tk-live err';
            live.textContent = er === 'not-allowed' || er === 'service-not-allowed' ? 'Bạn chưa cho phép dùng micro. Bật quyền micro cho trang này, hoặc gõ câu trả lời.'
              : er === 'no-speech' ? 'Chưa nghe thấy gì. Nhấn micro rồi nói to, rõ hơn nhé.'
              : er === 'network' ? 'Nhận giọng nói cần mạng. Kiểm tra kết nối, hoặc gõ câu trả lời.' : 'Micro gặp lỗi. Thử lại hoặc gõ câu trả lời.';
          }
        }
      });
      if (!rec) reset();
    });
    row.addEventListener('submit', e => { e.preventDefault(); const t = inp.value.trim(); if (!t) { inp.focus(); return; } inp.value = ''; if (rec) { rec.abort(); reset(); } onText(t); });
    wrap.appendChild(btn); wrap.appendChild(live); wrap.appendChild(row);
    if (!SR) wrap.appendChild(E('div', 'tk-note', 'Trình duyệt này không có nhận giọng nói. Hãy dùng Chrome, Edge hoặc Safari (iPhone), hoặc gõ câu trả lời.'));
    wrap.focusInput = () => inp.focus();
    wrap.disable = on => { btn.disabled = on || !SR; inp.disabled = on; send.disabled = on; };
    return wrap;
  }

  /* ============================ TRANG CHÍNH ============================ */
  let filt = null;
  function sceneStatus(s) { const p = prog[s.id]; return p && p.n ? p : null; }
  function recommend() {
    const lv = userLv();
    return TALK_SCENES.filter(s => s.lv <= lv && !(prog[s.id] && prog[s.id].best >= 80))
      .map(s => ({ s, k: s.uses.filter(lessonOk).length / s.uses.length + (s.lv === lv ? 0.3 : 0) - (prog[s.id] ? 0.2 : 0) }))
      .sort((a, b) => b.k - a.k).slice(0, 2).map(x => x.s);
  }
  function card(s) {
    const c = E('button', 'tk-card'); c.type = 'button';
    c.appendChild(E('span', 'tk-ic', s.icon));
    const b = E('span', 'tk-cb');
    b.appendChild(E('b', null, s.title));
    b.appendChild(E('span', 'tk-en', s.en));
    const learned = s.uses.filter(lessonOk).length;
    b.appendChild(E('span', 'tk-meta', `${LV[s.lv]} · nói với ${s.who} · ${s.turns.length} lượt · đã học ${learned}/${s.uses.length} cấu trúc`));
    c.appendChild(b);
    const st = sceneStatus(s);
    c.appendChild(E('span', 'tk-score' + (st ? (st.best >= 80 ? ' ok' : ' mid') : ''), st ? st.best + '%' : 'Mới'));
    c.addEventListener('click', () => { intro(s); top(); });
    return c;
  }
  function home() {
    stopAll();
    root.innerHTML = '';
    const hero = E('div', 'tense-card tk-hero');
    hero.appendChild(E('div', 'tk-hero-t', '🗣 Bạn nói chuyện tiếng Anh'));
    hero.appendChild(E('p', 'tk-hero-s', 'Biến những gì đã học thành câu nói thật: nghe nhân vật hỏi, trả lời bằng giọng nói, app chấm cấu trúc và ngữ pháp ngay sau mỗi câu.'));
    const modes = E('div', 'tk-modes');
    const m1 = E('button', 'tk-mode'); m1.type = 'button';
    m1.innerHTML = '<b>🎭 Nhập vai theo tình huống</b><span>Kịch bản soạn sẵn A1 → B2 · miễn phí · không cần tài khoản</span>';
    m1.addEventListener('click', () => { const l = root.querySelector('.tk-list'); if (l) l.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    const m2 = E('button', 'tk-mode'); m2.type = 'button';
    const hasKey = !!aiKey();
    m2.innerHTML = '<b>🤖 Trò chuyện tự do với AI</b><span>' + (hasKey ? PROV[prov()].name + ' · đã cài khoá · nói về bất cứ chủ đề nào' : 'Dùng khoá AI của bạn (Gemini, Groq miễn phí hoặc ChatGPT) · cài một lần') + '</span>';
    m2.addEventListener('click', () => { aiHome(); top(); });
    const m3 = E('button', 'tk-mode'); m3.type = 'button';
    m3.innerHTML = '<b>🎤 Nói theo đề</b><span>20 đề A1 → C1 · nói liên tục 30 giây – 2 phút · chép lại lời nói, AI nhận xét</span>';
    m3.addEventListener('click', () => { spHome(); top(); });
    modes.appendChild(m1); modes.appendChild(m2); modes.appendChild(m3);
    hero.appendChild(modes);
    const total = TALK_SCENES.filter(s => prog[s.id] && prog[s.id].n).length;
    if (total || prog._turns) hero.appendChild(E('div', 'tk-stat', `Đã luyện ${total}/${TALK_SCENES.length} tình huống · ${prog._turns || 0} câu đã nói`));
    root.appendChild(hero);

    const rec = recommend();
    if (rec.length) {
      const box = E('div', 'tk-sec');
      box.appendChild(E('div', 'tk-sec-h', '⭐ Gợi ý cho bạn (' + LV[userLv()] + ')'));
      box.appendChild(E('div', 'tk-sec-s', 'Ưu tiên tình huống dùng những cấu trúc bạn đã học trong tab Ngữ pháp.'));
      rec.forEach(s => box.appendChild(card(s)));
      root.appendChild(box);
    }
    const list = E('div', 'tk-sec tk-list');
    list.appendChild(E('div', 'tk-sec-h', '🎭 Tất cả tình huống'));
    const chips = E('div', 'colloc-chips tk-chips');
    [[null, 'Tất cả'], [1, 'A1'], [2, 'A2'], [3, 'B1'], [4, 'B2']].forEach(([v, l]) => {
      const ch = E('button', 'colloc-chip' + (filt === v ? ' active' : ''), l); ch.type = 'button';
      ch.addEventListener('click', () => { filt = v; home(); const x = root.querySelector('.tk-list'); if (x) x.scrollIntoView({ block: 'start' }); });
      chips.appendChild(ch);
    });
    list.appendChild(chips);
    TALK_SCENES.filter(s => filt == null || s.lv === filt).forEach(s => list.appendChild(card(s)));
    root.appendChild(list);
  }

  /* ============================ NHẬP VAI ============================ */
  function back(label, fn) { const b = E('button', 'gr-back', label); b.type = 'button'; b.addEventListener('click', () => { fn(); top(); }); return b; }
  function usesBox(s, title) {
    const box = E('div', 'tk-uses');
    box.appendChild(E('div', 'tk-uses-h', title || 'Cấu trúc bạn sẽ dùng (bấm để ôn):'));
    s.uses.forEach(id => {
      const L = lesson(id); if (!L) return;
      const b = E('button', 'tk-use' + (lessonOk(id) ? ' ok' : ''), (lessonOk(id) ? '✓ ' : '') + L.title); b.type = 'button';
      b.addEventListener('click', () => openLesson(id));
      box.appendChild(b);
    });
    return box;
  }
  function intro(s) {
    stopAll();
    root.innerHTML = '';
    root.appendChild(back('← Nói chuyện', home));
    const c = E('div', 'tense-card tk-intro');
    c.appendChild(E('div', 'tk-big', s.icon));
    c.appendChild(E('h2', 'gr-title', s.title));
    c.appendChild(E('div', 'gr-en', `${LV[s.lv]} · ${s.en}`));
    c.appendChild(E('p', null, `Bạn sẽ nói chuyện với ${s.who} (${s.role}). Mục tiêu: ${s.goal}`));
    c.appendChild(usesBox(s));
    const opts = E('div', 'tk-opts');
    const hintOn = set.hint == null ? s.lv <= 1 : set.hint;
    const h = E('label', 'tk-opt'); const hc = E('input'); hc.type = 'checkbox'; hc.checked = hintOn;
    hc.addEventListener('change', () => { set.hint = hc.checked; save(K.set, set); });
    h.appendChild(hc); h.appendChild(document.createTextNode(' Hiện mẫu câu sẵn (dễ hơn)'));
    const a = E('label', 'tk-opt'); const ac = E('input'); ac.type = 'checkbox'; ac.checked = set.auto;
    ac.addEventListener('change', () => { set.auto = ac.checked; save(K.set, set); });
    a.appendChild(ac); a.appendChild(document.createTextNode(' Tự đọc câu của nhân vật'));
    opts.appendChild(h); opts.appendChild(a);
    const sp = E('div', 'colloc-chips tk-rate'); sp.appendChild(E('span', 'tk-rate-l', 'Tốc độ đọc:'));
    [[0.75, 'Chậm'], [0.9, 'Vừa'], [1, 'Thường']].forEach(([v, l]) => {
      const ch = E('button', 'colloc-chip' + (set.rate === v ? ' active' : ''), l); ch.type = 'button';
      ch.addEventListener('click', () => { set.rate = v; save(K.set, set); sp.querySelectorAll('.colloc-chip').forEach(x => x.classList.toggle('active', x === ch)); });
      sp.appendChild(ch);
    });
    opts.appendChild(sp);
    c.appendChild(opts);
    const go = E('button', 'btn-primary tk-start', '▶ Bắt đầu nói chuyện'); go.type = 'button';
    go.addEventListener('click', () => { run(s); });
    c.appendChild(go);
    const st = sceneStatus(s);
    if (st) c.appendChild(E('div', 'tk-note', `Đã luyện ${st.n} lần · tốt nhất ${st.best}% · gần nhất ${st.last}%`));
    root.appendChild(c);
  }

  let R = null;   // phiên nhập vai đang chạy
  function fill(line, slots) { return line.replace(/\{(\w+)(?:\|([^}]*))?\}/g, (m, k, d) => slots[k] || d || '').replace(/\s+([!?.,])/g, '$1').replace(/\s{2,}/g, ' '); }
  function bubble(who, text, vi, extra) {
    const b = E('div', 'tk-b ' + who);
    if (who === 'them') b.appendChild(E('div', 'tk-who', R ? R.s.who : 'AI'));
    const t = E('div', 'tk-t', text); b.appendChild(t);
    if (who === 'them') {
      const tools = E('div', 'tk-tools');
      tools.appendChild(play(text));
      if (vi) {
        const v = E('div', 'tk-vi', vi); v.hidden = true;
        const tb = E('button', 'tk-tr', 'Dịch'); tb.type = 'button';
        tb.addEventListener('click', () => { v.hidden = !v.hidden; tb.textContent = v.hidden ? 'Dịch' : 'Ẩn dịch'; });
        tools.appendChild(tb); b.appendChild(tools); b.appendChild(v);
      } else b.appendChild(tools);
    }
    if (extra) b.appendChild(extra);
    return b;
  }
  function run(s) {
    stopAll();
    R = { s, i: 0, slots: {}, res: [], react: '', hint: set.hint == null ? s.lv <= 1 : set.hint };
    root.innerHTML = '';
    const head = E('div', 'tk-top');
    head.appendChild(back('← ' + s.title, () => { R = null; intro(s); }));
    R.prog = E('div', 'tk-prog'); head.appendChild(R.prog);
    root.appendChild(head);
    R.chat = E('div', 'tk-chat'); root.appendChild(R.chat);
    R.dock = E('div', 'tk-dock'); root.appendChild(R.dock);
    turn();
  }
  function turn() {
    const s = R.s, t = s.turns[R.i];
    R.prog.textContent = `Lượt ${R.i + 1}/${s.turns.length}`;
    const line = (R.react ? R.react + ' ' : '') + fill(t.p, R.slots);
    R.react = '';
    R.chat.appendChild(bubble('them', line, t.vi));
    if (set.auto) say(line);
    R.tries = 0;
    dock(t);
  }
  function dock(t) {
    R.dock.innerHTML = '';
    const task = E('div', 'tk-task');
    task.appendChild(E('div', 'tk-task-t', '👉 ' + t.task));
    const hint = E('div', 'tk-hint');
    const showHint = () => {
      hint.innerHTML = '';
      if (t.need) hint.appendChild(E('div', 'tk-pat', 'Mẫu câu: ' + t.need[1]));
      const ul = E('div', 'tk-models');
      t.model.forEach(m => { const r = E('div', 'tk-model'); r.appendChild(E('span', null, m)); r.appendChild(play(m)); ul.appendChild(r); });
      hint.appendChild(ul);
      hint.hidden = false;
    };
    if (R.hint && t.need) { hint.appendChild(E('div', 'tk-pat', 'Mẫu câu: ' + t.need[1])); }
    else hint.hidden = true;
    const hb = E('button', 'tk-hint-b', '💡 Gợi ý câu trả lời'); hb.type = 'button';
    hb.addEventListener('click', () => { showHint(); hb.remove(); });
    task.appendChild(hint); task.appendChild(hb);
    R.dock.appendChild(task);
    const mic = micBox(text => answer(t, text, mic));
    R.dock.appendChild(mic);
    R.mic = mic;
  }
  async function answer(t, text, mic) {
    R.tries++;
    prog._turns = (prog._turns || 0) + 1; save(K.prog, prog);
    const me = bubble('me', text);
    R.chat.appendChild(me);
    mic.disable(true);
    const fb = E('div', 'tk-fb wait', 'Đang chấm câu của bạn…');
    R.chat.appendChild(fb);
    fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    const low = norm(text), n = words(text);
    const needOk = !t.need || t.need[0].test(low);
    const isVi = VI_RE.test(text);
    const short = n < (R.s.lv <= 1 ? 2 : 3);
    let g = { grammar: [], natural: [], lt: null };
    if (!isVi && typeof smartWrite === 'function') { try { g = await smartWrite(text, {}); } catch (e) {} }
    const pass = needOk && !isVi && !short && !g.grammar.length;
    fb.className = 'tk-fb ' + (pass ? 'ok' : needOk && !isVi ? 'mid' : 'bad');
    fb.innerHTML = '';
    fb.appendChild(E('div', 'tk-fb-h', pass ? (g.natural.length ? '✓ Đạt — có thể nói tự nhiên hơn' : ['✓ Tốt lắm!', '✓ Chuẩn rồi!', '✓ Rất ổn!'][R.i % 3]) : isVi ? '✗ Hãy trả lời bằng tiếng Anh' : !needOk ? '◐ Chưa dùng cấu trúc của lượt này' : short ? '◐ Hãy nói thành câu đầy đủ' : '✗ Còn lỗi ngữ pháp'));
    const ul = E('ul', 'sc-list');
    if (t.need) { const li = E('li', needOk ? 'sc-ok' : 'sc-miss', (needOk ? '✓ Đã dùng: ' : '✗ Cần dùng: ') + t.need[1]); ul.appendChild(li); }
    if (typeof scIssueLi === 'function') { g.grammar.forEach(x => ul.appendChild(scIssueLi(x))); g.natural.forEach(x => ul.appendChild(scIssueLi(x))); }
    if (!(g.lt && g.lt.ok) && !isVi) ul.appendChild(E('li', 'sc-soft', g.lt && g.lt.why === 'busy' ? '☆ Bộ kiểm tra ngữ pháp đang bận, chỉ kiểm tra lỗi hay gặp.' : '☆ Không có mạng: chỉ kiểm tra lỗi hay gặp.'));
    fb.appendChild(ul);
    const mm = E('div', 'tk-model'); mm.appendChild(E('span', 'tk-ml', 'Câu mẫu: ')); mm.appendChild(E('span', null, t.model[0])); mm.appendChild(play(t.model[0]));
    fb.appendChild(mm);
    // lấy thông tin để nhân vật dùng lại (tên, quê…)
    if (t.slot && !isVi) { const m = text.match(t.slot[1]); if (m && m[1]) R.slots[t.slot[0]] = t.slot[2].replace('$1', m[1].charAt(0).toUpperCase() + m[1].slice(1)); }
    const acts = E('div', 'tk-acts');
    const again = E('button', 'btn-ghost', '↻ Nói lại'); again.type = 'button';
    again.addEventListener('click', () => { acts.remove(); mic.disable(false); R.dock.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); });
    const next = E('button', pass ? 'btn-primary' : 'btn-ghost', pass ? 'Tiếp tục →' : 'Bỏ qua, nói tiếp →'); next.type = 'button';
    next.addEventListener('click', () => {
      acts.remove();
      R.res[R.i] = { ok: pass || (R.res[R.i] && R.res[R.i].ok), first: R.tries === 1 && pass, text, tries: R.tries, issues: g.grammar.length + (needOk ? 0 : 1) };
      if (t.react && !isVi) { const r = t.react.find(([re]) => re.test(low)); if (r) R.react = r[1]; }
      R.i++;
      if (R.i >= R.s.turns.length) finish(); else turn();
    });
    if (pass) R.res[R.i] = { ok: true, first: R.tries === 1, text, tries: R.tries, issues: 0 };
    acts.appendChild(again); acts.appendChild(next);
    fb.appendChild(acts);
    R.dock.hidden = false;
    next.focus({ preventScroll: true });
    fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  function finish() {
    const s = R.s, n = s.turns.length;
    const ok = R.res.filter(x => x && x.ok).length, first = R.res.filter(x => x && x.first).length;
    const pct = Math.round(ok / n * 100);
    const p = prog[s.id] || { n: 0, best: 0 };
    p.n++; p.last = pct; p.best = Math.max(p.best || 0, pct); p.d = Date.now();
    prog[s.id] = p; save(K.prog, prog);
    R.dock.innerHTML = '';
    R.prog.textContent = 'Hoàn thành';
    const c = E('div', 'tense-card tk-sum');
    c.appendChild(E('div', 'tk-sum-n', pct + '%'));
    c.appendChild(E('div', 'tk-sum-t', pct >= 80 ? '🎉 Bạn đã giao tiếp rất tốt!' : pct >= 50 ? '👍 Khá lắm, luyện thêm một lần nữa nhé.' : '💪 Đừng nản, ôn lại cấu trúc rồi thử lại.'));
    c.appendChild(E('div', 'tk-note', `${ok}/${n} lượt đạt · ${first} lượt đúng ngay lần đầu`));
    const miss = s.turns.map((t, i) => ({ t, r: R.res[i] })).filter(x => !x.r || !x.r.ok);
    if (miss.length) {
      c.appendChild(E('div', 'tk-uses-h', 'Các lượt nên luyện lại:'));
      miss.forEach(({ t, r }) => {
        const d = E('div', 'tk-miss');
        d.appendChild(E('div', 'tk-miss-q', '👉 ' + t.task));
        if (r && r.text) d.appendChild(E('div', 'tk-miss-u', 'Bạn nói: ' + r.text));
        const m = E('div', 'tk-model'); m.appendChild(E('span', 'tk-ml', 'Mẫu: ')); m.appendChild(E('span', null, t.model[0])); m.appendChild(play(t.model[0]));
        d.appendChild(m);
        c.appendChild(d);
      });
    }
    c.appendChild(usesBox(s, 'Ôn lại cấu trúc của tình huống này:'));
    const acts = E('div', 'tk-acts');
    const a1 = E('button', 'btn-primary', '↻ Luyện lại'); a1.type = 'button'; a1.addEventListener('click', () => { run(s); top(); });
    const a2 = E('button', 'btn-ghost', 'Tình huống khác'); a2.type = 'button'; a2.addEventListener('click', () => { home(); top(); });
    const a3 = E('button', 'btn-ghost', '🤖 Nói tự do về chủ đề này'); a3.type = 'button'; a3.addEventListener('click', () => { aiHome({ topic: s.en + ' (' + s.title + ')', lv: s.lv, scene: s }); top(); });
    acts.appendChild(a1); acts.appendChild(a2); acts.appendChild(a3);
    c.appendChild(acts);
    R.chat.appendChild(c);
    c.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ============================ TRÒ CHUYỆN VỚI GEMINI ============================ */
  const API = 'https://generativelanguage.googleapis.com/v1beta/';
  // v140: 3 nhà cung cấp AI. Mỗi bên có khoá / model riêng, tất cả chỉ lưu trên máy (không đồng bộ, không sao lưu).
  const PROV = {
    gemini: { name: 'Gemini', who: 'Google', sfx: '', tag: 'miễn phí' },
    groq: { name: 'Groq', who: 'Groq', sfx: '-groq', tag: 'miễn phí · rất nhanh', base: 'https://api.groq.com/openai/v1/' },
    openai: { name: 'ChatGPT', who: 'OpenAI', sfx: '-openai', tag: 'trả phí theo lượt dùng', base: 'https://api.openai.com/v1/' }
  };
  const prov = () => { try { const v = localStorage.getItem(K.prov); return PROV[v] ? v : 'gemini'; } catch (e) { return 'gemini'; } };
  const kk = (base, pv) => base + PROV[pv || prov()].sfx;
  const aiKey = pv => { try { return localStorage.getItem(kk(K.key, pv)) || ''; } catch (e) { return ''; } };
  const aiModel = pv => { try { return localStorage.getItem(kk(K.model, pv)) || ''; } catch (e) { return ''; } };
  const inClaude = () => !!(window.claude && typeof window.claude.use === 'function');
  function errText(e, pv) {
    const st = e && e.status, m = (e && e.msg) || '';
    pv = pv || prov();
    if (pv !== 'gemini') return errTextOAI(e, pv);
    if (e && e.offline) return 'Không kết nối được tới Google. Kiểm tra mạng rồi thử lại.';
    if (st === 400 && /api key|API_KEY/i.test(m)) return 'Khoá không đúng. Hãy sao chép lại khoá trong Google AI Studio.';
    if (st === 400 && /location|region|country/i.test(m)) return 'Gemini chưa hỗ trợ vị trí của bạn cho bản miễn phí.';
    if (st === 403) return 'Khoá chưa được phép dùng Gemini API (hoặc khoá bị giới hạn theo trang web). Hãy tạo khoá mới trong Google AI Studio.';
    if (st === 429) return 'Đã dùng hết lượt miễn phí tạm thời (Google giới hạn theo phút và theo ngày). Đợi một lát rồi thử lại, trong lúc chờ có thể luyện Nhập vai.';
    if (st >= 500) return 'Máy chủ Google đang quá tải (bản miễn phí hay bị vào giờ cao điểm). App đã tự thử lại và đổi model nhưng chưa được. Đợi khoảng một phút rồi bấm Thử lại.';
    if (e && e.empty) return 'AI không trả lời được câu này. Thử nói cách khác.';
    return 'Có lỗi khi gọi Gemini' + (st ? ' (' + st + ')' : '') + (m ? ': ' + m.slice(0, 140) : '.');
  }
  function errTextOAI(e, pv) {
    const st = e && e.status, m = (e && e.msg) || '', P2 = PROV[pv];
    if (e && e.offline) return 'Không kết nối được tới ' + P2.who + '. Kiểm tra mạng rồi thử lại.';
    if (e && e.quota) return 'Tài khoản OpenAI chưa nạp tiền hoặc đã hết tiền. Vào platform.openai.com → Billing để nạp (gói ChatGPT Plus không dùng được cho API).';
    if (st === 401) return 'Khoá không đúng hoặc đã bị xoá. Hãy tạo khoá mới trong trang ' + (pv === 'groq' ? 'console.groq.com/keys' : 'platform.openai.com/api-keys') + '.';
    if (st === 403) return 'Khoá chưa được phép dùng model này (hoặc ' + P2.who + ' chặn vùng của bạn). Thử chọn model khác hoặc tạo khoá mới.';
    if (st === 429) return pv === 'groq' ? 'Đã dùng hết lượt miễn phí tạm thời của Groq (giới hạn theo phút và theo ngày). Đợi một lát rồi thử lại.' : 'OpenAI đang giới hạn số lượt gọi của khoá này. Đợi một lát rồi thử lại.';
    if (st >= 500) return 'Máy chủ ' + P2.who + ' đang quá tải. App đã tự thử lại và đổi model nhưng chưa được. Đợi khoảng một phút rồi bấm Thử lại.';
    if (e && e.empty) return 'AI không trả lời được câu này. Thử nói cách khác.';
    return 'Có lỗi khi gọi ' + P2.name + (st ? ' (' + st + ')' : '') + (m ? ': ' + m.slice(0, 140) : '.');
  }
  // chọn model phù hợp nhất (rẻ, nhanh, đủ tốt cho hội thoại) trong danh sách model mà khoá OpenAI / Groq dùng được
  function rankOAI(ids, pv) {
    if (pv === 'groq') {
      const W = [[/gpt-oss-120b/, 90], [/kimi-k2/, 85], [/llama-3\.3-70b/, 80], [/llama-4-maverick/, 70], [/llama-4-scout/, 68], [/qwen3/, 60], [/gpt-oss-20b/, 55], [/llama-3\.1-8b/, 40]];
      return ids.filter(n => !/whisper|guard|tts|playai|orpheus|compound|distil|allam|saba|safeguard|vision|audio/i.test(n))
        .map(n => ({ n, k: (W.find(w => w[0].test(n)) || [0, 30])[1] })).sort((a, b) => b.k - a.k).map(x => x.n);
    }
    return ids.filter(n => /^(gpt-\d|o\d)/.test(n) && !/audio|realtime|tts|transcri|image|search|embed|moderat|instruct|codex|preview|oss|research|computer|dall|whisper|pro\b|-pro/.test(n))
      .map(n => {
        const v = parseFloat((n.match(/^gpt-(\d+(?:\.\d+)?)/) || [, '0'])[1]) || 0;
        if (/^gpt-/.test(n) && v < 4) return null;
        let k = v * 10 + (/o\b|4o/.test(n) && v === 4 ? 3 : 0);
        if (/mini/.test(n)) k += 50; else if (/nano/.test(n)) k += 35; else k += 15;
        if (/^o\d/.test(n)) k -= 40;
        if (/\d{4}-\d{2}-\d{2}$/.test(n)) k -= 3;
        if (/chat-latest|latest/.test(n)) k -= 10;
        return { n, k };
      }).filter(Boolean).sort((a, b) => b.k - a.k).map(x => x.n);
  }
  async function listModelsOAI(key, pv) {
    let res;
    try { res = await fetch(PROV[pv].base + 'models', { headers: { Authorization: 'Bearer ' + key } }); } catch (e) { throw { offline: true }; }
    const j = await res.json().catch(() => ({}));
    if (!res.ok) throw { status: res.status, msg: (j.error && j.error.message) || '' };
    const names = rankOAI((j.data || []).map(m => m && m.id).filter(Boolean), pv);
    if (!names.length) throw { status: 0, msg: 'Khoá này không dùng được model nào để trò chuyện.' };
    try { localStorage.setItem(kk(K.models, pv), JSON.stringify(names.slice(0, 10))); if (!names.includes(aiModel(pv))) localStorage.setItem(kk(K.model, pv), names[0]); } catch (e) {}
    return names;
  }
  // chọn model miễn phí phù hợp nhất mà khoá này dùng được (tên model của Google đổi theo thời gian)
  function rankModels(list) {
    return list.filter(m => (m.supportedGenerationMethods || []).includes('generateContent'))
      .map(m => m.name.replace(/^models\//, ''))
      .filter(n => /^gemini-/.test(n) && !/image|tts|audio|live|embed|vision|robotics|computer|nano|aqa|native|transcri|learnlm|thinking|veo|imagen/.test(n))
      .map(n => {
        const v = parseFloat((n.match(/^gemini-(\d+(?:\.\d+)?)/) || [, '0'])[1]) || 0;
        let k = v * 10;
        if (/flash/.test(n)) k += 50;
        if (/lite/.test(n)) k -= 8;
        if (/pro/.test(n)) k -= 45;
        if (/preview|exp|latest/.test(n)) k -= 30;
        if (/\d{3,}$/.test(n)) k -= 2;
        return { n, k };
      }).sort((a, b) => b.k - a.k).map(x => x.n);
  }
  async function listModels(key, pv) {
    pv = pv || prov();
    if (pv !== 'gemini') return listModelsOAI(key, pv);
    let res;
    try { res = await fetch(API + 'models?pageSize=200&key=' + encodeURIComponent(key)); } catch (e) { throw { offline: true }; }
    const j = await res.json().catch(() => ({}));
    if (!res.ok) throw { status: res.status, msg: (j.error && j.error.message) || '' };
    const names = rankModels(j.models || []);
    if (!names.length) throw { status: 0, msg: 'Khoá này không dùng được model Gemini nào để trò chuyện.' };
    try { localStorage.setItem(K.models, JSON.stringify(names.slice(0, 10))); if (!names.includes(aiModel('gemini'))) localStorage.setItem(K.model, names[0]); } catch (e) {}
    return names;
  }
  // v138: tắt / giảm "suy nghĩ" của model (Gemini 2.5 và 3 bật mặc định, làm trả lời chậm 3–8 giây).
  // Mỗi model nhận một kiểu cài đặt khác nhau; kiểu nào bị từ chối (lỗi 400) thì thử kiểu kế tiếp, nhớ lại trong phiên.
  const THINK = {};
  function thinkOpts(model) {
    if (/^gemini-2\.5/.test(model)) return [{ thinkingBudget: 0 }, null];
    if (/^gemini-([3-9]|\d\d)/.test(model)) return [{ thinkingLevel: 'minimal' }, { thinkingLevel: 'low' }, null];
    return [null];
  }
  // đọc luồng trả lời từng phần (SSE) → gọi onDelta(chữ đã nhận được tới giờ)
  async function readSSE(res, onDelta) {
    let all = '', buf = '', raw = '';
    const eat = line => {
      line = line.trim(); if (!line.startsWith('data:')) return;
      const d = line.slice(5).trim(); if (!d || d === '[DONE]') return;
      let j; try { j = JSON.parse(d); } catch (e) { return; }
      if (j.error) throw { status: j.error.code || 500, msg: j.error.message || '' };
      const c = j.candidates && j.candidates[0];
      const t = c && c.content ? (c.content.parts || []).filter(x => !x.thought).map(x => x.text || '').join('') : '';
      if (t) { all += t; try { onDelta(all); } catch (e) {} }
    };
    if (res.body && res.body.getReader) {
      const rd = res.body.getReader(), dec = new TextDecoder();
      for (;;) {
        const { value, done } = await rd.read();
        if (done) break;
        const ch = dec.decode(value, { stream: true }); buf += ch; if (raw.length < 200000) raw += ch;
        let i; while ((i = buf.indexOf('\n')) >= 0) { eat(buf.slice(0, i)); buf = buf.slice(i + 1); }
      }
      eat(buf);
    } else { raw = await res.text(); raw.split('\n').forEach(eat); }
    if (!all && raw.trim()) {   // máy chủ trả JSON thường (không theo luồng)
      try {
        const j = JSON.parse(raw);
        all = (Array.isArray(j) ? j : [j]).map(x => { const c = x && x.candidates && x.candidates[0]; return c && c.content ? (c.content.parts || []).filter(q => !q.thought).map(q => q.text || '').join('') : ''; }).join('');
        if (all) { try { onDelta(all); } catch (e) {} }
      } catch (e) {}
    }
    return all;
  }
  // ---- OpenAI / Groq (cùng chuẩn Chat Completions). Nhận body kiểu Gemini rồi đổi sang messages ----
  const OAI_R = {}, OAI_NOSTREAM = {};
  function reasonOpts(model, pv) {
    if (pv === 'openai') { if (/^gpt-5/.test(model)) return ['none', 'minimal', 'low', null]; if (/^o\d/.test(model)) return ['low', null]; return [null]; }
    if (/gpt-oss/.test(model)) return ['low', null];
    if (/qwen3/.test(model)) return ['none', null];
    return [null];
  }
  function toMessages(body) {
    const msgs = [], sys = body.systemInstruction && body.systemInstruction.parts.map(x => x.text).join('\n');
    const sc = body.generationConfig && body.generationConfig.responseSchema;
    const ty = x => !x ? 'string' : x.type === 'NUMBER' || x.type === 'INTEGER' ? 'number' : x.type === 'ARRAY' ? '[' + ty(x.items) + ', …]' : x.type === 'OBJECT' ? '{' + Object.keys(x.properties || {}).map(k => `"${k}": ${ty(x.properties[k])}`).join(', ') + '}' : 'string';
    const shape = sc ? '\nJSON keys, in this order: ' + (sc.propertyOrdering || Object.keys(sc.properties)).map(k => `"${k}": ${ty(sc.properties[k])}`).join(', ') + '.' : '';
    if (sys || shape) msgs.push({ role: 'system', content: (sys || 'Return only JSON.') + shape });
    (body.contents || []).forEach(c => msgs.push({ role: c.role === 'model' ? 'assistant' : 'user', content: (c.parts || []).map(x => x.text || '').join('') }));
    return msgs;
  }
  async function oaiOnce(body, retry, onDelta, force, pv) {
    const key = aiKey(pv); if (!key) throw { status: 0, msg: 'Chưa có khoá.' };
    let model = force || aiModel(pv);
    if (!model) model = (await listModelsOAI(key, pv))[0];
    const gc = body.generationConfig || {}, json = gc.responseMimeType === 'application/json';
    const opts = reasonOpts(model, pv), rk = pv + '|' + model;
    let dropJSON = false;
    for (;;) {
      const ri = OAI_R[rk] || 0, re = opts[Math.min(ri, opts.length - 1)];
      const stream = typeof onDelta === 'function' && !OAI_NOSTREAM[rk];
      const req = { model, messages: toMessages(body), max_completion_tokens: (gc.maxOutputTokens || 1024) + (re ? 2048 : 0) };
      if (!(pv === 'openai' && /^(gpt-5|o\d)/.test(model)) && gc.temperature != null) req.temperature = gc.temperature;
      if (re) req.reasoning_effort = re;
      if (json && !dropJSON) req.response_format = { type: 'json_object' };
      if (stream) req.stream = true;
      let res;
      try {
        res = await fetch(PROV[pv].base + 'chat/completions', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + key }, body: JSON.stringify(req) });
      } catch (e) { throw { offline: true }; }
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        const er = j.error || {}, msg = er.message || '';
        if (res.status === 400 && re && /reasoning/i.test(msg) && ri < opts.length - 1) { OAI_R[rk] = ri + 1; continue; }
        if (res.status === 400 && stream && /stream/i.test(msg)) { OAI_NOSTREAM[rk] = true; continue; }
        if (res.status === 400 && json && !dropJSON && /response_format|json/i.test(msg)) { dropJSON = true; continue; }
        if (res.status === 400 && /temperature/i.test(msg) && req.temperature != null) { gc.temperature = null; continue; }
        if (retry !== false && res.status === 404 && !force) { try { localStorage.removeItem(kk(K.model, pv)); } catch (e) {} await listModelsOAI(key, pv); return oaiOnce(body, false, onDelta, null, pv); }
        throw { status: res.status, msg, quota: er.code === 'insufficient_quota' || er.type === 'insufficient_quota' };
      }
      let txt = '';
      if (stream) {
        let buf = '';
        const eat = line => {
          line = line.trim(); if (!line.startsWith('data:')) return;
          const d = line.slice(5).trim(); if (!d || d === '[DONE]') return;
          let j; try { j = JSON.parse(d); } catch (e) { return; }
          if (j.error) throw { status: j.error.code === 'insufficient_quota' ? 429 : 500, msg: j.error.message || '' };
          const t = j.choices && j.choices[0] && j.choices[0].delta && j.choices[0].delta.content;
          if (t) { txt += t; try { onDelta(txt); } catch (e) {} }
        };
        try {
          if (res.body && res.body.getReader) {
            const rd = res.body.getReader(), dec = new TextDecoder();
            for (;;) { const { value, done } = await rd.read(); if (done) break; buf += dec.decode(value, { stream: true }); let i; while ((i = buf.indexOf('\n')) >= 0) { eat(buf.slice(0, i)); buf = buf.slice(i + 1); } }
            eat(buf);
          } else (await res.text()).split('\n').forEach(eat);
        } catch (e) { if (e && e.status) throw e; throw { offline: true }; }
      } else {
        const j = await res.json().catch(() => ({}));
        txt = (j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content) || '';
        if (txt && onDelta) { try { onDelta(txt); } catch (e) {} }
      }
      if (!txt) throw { empty: true, msg: '' };
      return txt;
    }
  }
  async function gemOnce(body, retry, onDelta, force) {
    const pv = prov();
    if (pv !== 'gemini') return oaiOnce(body, retry, onDelta, force, pv);
    const key = aiKey(); if (!key) throw { status: 0, msg: 'Chưa có khoá.' };
    let model = force || aiModel();
    if (!model) model = (await listModels(key))[0];
    const opts = thinkOpts(model);
    for (;;) {
      const ti = THINK[model] || 0, tc = opts[Math.min(ti, opts.length - 1)];
      const b = JSON.parse(JSON.stringify(body));
      if (tc) { b.generationConfig = b.generationConfig || {}; b.generationConfig.thinkingConfig = tc; }
      const stream = typeof onDelta === 'function';
      let res;
      try {
        res = await fetch(API + 'models/' + encodeURIComponent(model) + (stream ? ':streamGenerateContent?alt=sse&key=' : ':generateContent?key=') + encodeURIComponent(key), {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(b) });
      } catch (e) { throw { offline: true }; }
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        const msg = (j.error && j.error.message) || '';
        if (res.status === 400 && tc && /think/i.test(msg) && ti < opts.length - 1) { THINK[model] = ti + 1; continue; }
        if (retry !== false && res.status === 404 && !force) { try { localStorage.removeItem(K.model); } catch (e) {} await listModels(key); return gemOnce(body, false, onDelta); }
        if (retry !== false && res.status === 400 && /schema|mime|generation_?config|response/i.test(msg)) {
          const b2 = JSON.parse(JSON.stringify(body)); if (b2.generationConfig) { delete b2.generationConfig.responseSchema; delete b2.generationConfig.responseMimeType; }
          return gemOnce(b2, false, onDelta, force);
        }
        throw { status: res.status, msg };
      }
      let txt;
      if (stream) {
        try { txt = await readSSE(res, onDelta); } catch (e) { if (e && e.status) throw e; throw { offline: true }; }
        if (!txt) throw { empty: true, msg: '' };
        return txt;
      }
      const j = await res.json().catch(() => ({}));
      const c = j.candidates && j.candidates[0];
      txt = c && c.content && (c.content.parts || []).filter(p => !p.thought).map(p => p.text || '').join('');
      if (!txt) throw { empty: true, msg: (j.promptFeedback && j.promptFeedback.blockReason) || (c && c.finishReason) || '' };
      return txt;
    }
  }
  // v139: Google báo bận (5xx), hết lượt theo phút (429) hoặc mất mạng giữa chừng → tự thử lại, rồi chuyển sang model khác
  // (mỗi model miễn phí có hạn mức riêng). Chỉ báo lỗi khi đã thử hết. onRetry(n) để hiện "đang thử lại…".
  async function gem(body, retry, onDelta, onRetry) {
    const cur = aiModel();
    let list = []; try { list = JSON.parse(localStorage.getItem(kk(K.models)) || '[]'); } catch (e) {}
    const others = list.filter(m => m && m !== cur && !/pro/.test(m)).slice(0, 2);
    const plan = [null, null].concat(others);          // model đang dùng ×2, rồi tối đa 2 model dự phòng
    let last;
    for (let i = 0; i < plan.length; i++) {
      if (i) { if (onRetry) { try { onRetry(i); } catch (e) {} } await new Promise(r => setTimeout(r, i === 1 ? 900 : 400)); }
      try {
        const t = await gemOnce(body, retry, onDelta, plan[i]);
        if (plan[i]) { try { localStorage.setItem(kk(K.model), plan[i]); } catch (e) {} }   // model dự phòng chạy được → dùng tiếp
        return t;
      } catch (e) {
        last = e;
        const st = e && e.status;
        const soft = !(e && e.quota) && ((e && e.offline) || st >= 500 || st === 429 || (e && e.empty && !e.msg));
        if (!soft) throw e;
        if (st === 429 && i === 0) i = 1;                 // hết lượt: đổi model ngay, thử lại cùng model vô ích
      }
    }
    throw last;
  }
  // lấy phần "reply" đã nhận được trong JSON còn dở dang → hiện chữ dần dần
  function partReply(s) {
    const m = String(s).match(/"reply"\s*:\s*"((?:[^"\\]|\\.)*)("?)/);
    if (!m) return null;
    const raw = m[1].replace(/\\u[0-9a-fA-F]{0,3}$/, '');
    let t; try { t = JSON.parse('"' + raw + '"'); } catch (e) { t = raw; }
    return { t, done: !!m[2] };
  }
  function parseJSON(t) {
    try { return JSON.parse(t); } catch (e) {}
    const m = String(t).match(/\{[\s\S]*\}/); if (m) { try { return JSON.parse(m[0]); } catch (e) {} }
    return null;
  }
  const TOPICS = [['Tự do', 'anything the learner likes (start with everyday small talk)'], ['Công việc 3D', 'working as a 3D artist: projects, software, deadlines, feedback'],
    ['Du lịch', 'travel and holidays'], ['Ăn uống', 'food, cooking and restaurants'], ['Phim & nhạc', 'movies, series and music'],
    ['Sức khoẻ', 'health, sport and daily habits'], ['Kế hoạch', 'plans and goals for the future'], ['Phỏng vấn xin việc', 'a job interview (you are the interviewer)']];
  function focusList() {
    // cấu trúc và từ vừa học → AI tạo cơ hội để người học dùng lại
    const g = [];
    try { Object.keys(gxStore).filter(lessonOk).sort((a, b) => ((gxStore[b].t || 0) - (gxStore[a].t || 0))).slice(0, 6).forEach(id => { const L = lesson(id); if (L) g.push(L.en || L.title); }); } catch (e) {}
    const w = [];
    try { [...vcLearned].slice(-15).forEach(k => { const p = String(k).split('|'); if (p[1]) w.push(p[1]); }); } catch (e) {}
    return { g, w };
  }
  function sysPrompt(c) {
    const lv = LV[c.lv];
    const style = { A1: 'very simple words, present simple, short sentences of 5–8 words', A2: 'simple everyday English, short sentences', B1: 'clear everyday English', B2: 'natural English with some common idioms' }[lv] || 'clear everyday English';
    const f = c.focus ? focusList() : { g: [], w: [] };
    return [
      `You are Mia, a warm and patient English speaking partner for a Vietnamese learner at CEFR level ${lv}.`,
      `Conversation topic: ${c.topic}.` + (c.scene ? ` Role-play situation: ${c.scene.en}. You play: ${c.scene.role} (${c.scene.who}).` : ''),
      'Rules:',
      `- Reply in 1–3 short sentences of spoken English at level ${lv} (${style}).`,
      '- First react naturally to what the learner just said (agree, show interest, or answer their question). Understand their meaning even if their English is broken.',
      '- Then ask exactly ONE simple, natural follow-up question about what they said, like a real friend would. Move to the topic gradually; never jump to an unrelated or strange question.',
      '- Keep the conversation logical: remember what was said earlier and never ask something they already answered.',
      '- "reply" must be English only. Never lecture; be friendly.',
      '- Look ONLY at the learner\'s last message (it may come from speech recognition, so ignore punctuation, capital letters and obvious recognition errors).',
      '- If it has grammar or word-choice mistakes: "correction" = the corrected full sentence, "explain_vi" = a short explanation in Vietnamese (max 2 sentences). If it is correct: both empty strings.',
      `- "better" = how a native speaker would naturally say the learner's last message at level ${lv}; empty string if it is already natural or if it is the first turn.`,
      '- "reply_vi" = Vietnamese translation of your reply.',
      `- "hints" = 2 short example answers (English) the learner could say next, at level ${lv}.`,
      f.g.length ? `- The learner has just studied: ${f.g.join('; ')}. Naturally create chances for them to use these structures.` : '',
      f.w.length ? `- Recently learned words (use some of them naturally): ${f.w.join(', ')}.` : '',
      'Return only JSON.'
    ].filter(Boolean).join('\n');
  }
  const SCHEMA = { type: 'OBJECT', properties: { reply: { type: 'STRING' }, reply_vi: { type: 'STRING' }, correction: { type: 'STRING' }, explain_vi: { type: 'STRING' }, better: { type: 'STRING' }, hints: { type: 'ARRAY', items: { type: 'STRING' } } }, required: ['reply', 'reply_vi', 'correction', 'explain_vi', 'better', 'hints'],
    propertyOrdering: ['reply', 'reply_vi', 'correction', 'explain_vi', 'better', 'hints'] };   // reply đứng đầu → hiện và đọc được sớm

  let A = null;   // phiên trò chuyện AI
  function aiHome(pre) {
    stopAll();
    pre = pre || {};
    root.innerHTML = '';
    root.appendChild(back('← Nói chuyện', home));
    const c = E('div', 'tense-card tk-ai');
    c.appendChild(E('h2', 'gr-title', '🤖 Trò chuyện tự do với AI'));
    c.appendChild(E('p', 'tk-hero-s', 'Nói về bất cứ điều gì. AI trả lời ngắn theo trình độ của bạn, sửa từng câu bạn nói, gợi ý cách nói tự nhiên hơn và nhận xét khi kết thúc.'));
    if (inClaude()) c.appendChild(E('div', 'tk-warn', 'Bản xem trước trong Claude không gọi được AI bên ngoài. Hãy mở app trên trang web của bạn để dùng phần này.'));
    const pv = prov(), PV = PROV[pv];
    const key = aiKey();
    // chọn nhà cung cấp AI
    const pc = E('div', 'colloc-chips tk-prov'); pc.appendChild(E('span', 'tk-rate-l', 'AI:'));
    Object.keys(PROV).forEach(id => {
      const ch = E('button', 'colloc-chip' + (id === pv ? ' active' : ''), PROV[id].name + (aiKey(id) ? ' ✓' : '')); ch.type = 'button';
      ch.title = PROV[id].tag;
      ch.addEventListener('click', () => { if (id === pv) return; try { localStorage.setItem(K.prov, id); } catch (e) {} aiHome(pre); });
      pc.appendChild(ch);
    });
    c.appendChild(pc);
    c.appendChild(E('div', 'tk-note', {
      gemini: 'Gemini (Google): miễn phí, chỉ cần tài khoản Google. Giờ cao điểm đôi khi báo bận.',
      groq: 'Groq: miễn phí, không cần thẻ, trả lời rất nhanh (dùng model mã nguồn mở như GPT-OSS, Llama). Có giới hạn số lượt mỗi phút / mỗi ngày.',
      openai: 'ChatGPT (OpenAI): ổn định, nhưng phải nạp tiền trước vào tài khoản API (gói ChatGPT Plus không dùng được). Model mini rất rẻ: khoảng 5 USD dùng được nhiều tháng.'
    }[pv]));
    const setup = E('div', 'tk-setup');
    const STEPS = {
      gemini: [['Mở ', 'Google AI Studio → API keys', 'https://aistudio.google.com/apikey', ' và đăng nhập bằng tài khoản Google.'], 'Bấm "Create API key", rồi sao chép khoá (bắt đầu bằng AIza…).'],
      groq: [['Mở ', 'GroqCloud → API Keys', 'https://console.groq.com/keys', ' và đăng nhập (Google, GitHub hoặc email, không cần thẻ).'], 'Bấm "Create API Key", đặt tên tuỳ ý, rồi sao chép khoá (bắt đầu bằng gsk_…). Khoá chỉ hiện một lần.'],
      openai: [['Mở ', 'OpenAI Platform → Billing', 'https://platform.openai.com/settings/organization/billing/overview', ', đăng nhập và nạp tiền (tối thiểu khoảng 5 USD). Nên đặt giới hạn chi tiêu ở mục Limits.'],
        ['Vào ', 'API keys', 'https://platform.openai.com/api-keys', ', bấm "Create new secret key" rồi sao chép khoá (bắt đầu bằng sk-…). Khoá chỉ hiện một lần.']]
    };
    if (!key) {
      setup.appendChild(E('div', 'tk-uses-h', 'Cài đặt một lần' + (pv === 'openai' ? ':' : ' (miễn phí):')));
      const ol = E('ol', 'tk-steps');
      STEPS[pv].forEach(st => {
        const li = E('li');
        if (typeof st === 'string') li.textContent = st;
        else { li.appendChild(document.createTextNode(st[0])); const a = E('a', null, st[1]); a.href = st[2]; a.target = '_blank'; a.rel = 'noopener'; li.appendChild(a); li.appendChild(document.createTextNode(st[3])); }
        ol.appendChild(li);
      });
      ol.appendChild(E('li', null, 'Dán khoá vào ô dưới và bấm "Lưu & kiểm tra".'));
      setup.appendChild(ol);
    }
    const kr = E('form', 'tk-type');
    const ki = E('input'); ki.type = 'password'; ki.placeholder = key ? 'Khoá đã lưu: ••••' + key.slice(-4) + ' (dán khoá mới để đổi)' : 'Dán khoá ' + PV.name + ' (' + { gemini: 'AIza…', groq: 'gsk_…', openai: 'sk-…' }[pv] + ')'; ki.autocomplete = 'off'; ki.spellcheck = false;
    const kb = E('button', 'btn-primary', key ? 'Đổi khoá' : 'Lưu & kiểm tra'); kb.type = 'submit';
    kr.appendChild(ki); kr.appendChild(kb);
    const kmsg = E('div', 'tk-note');
    kr.addEventListener('submit', async e => {
      e.preventDefault();
      const v = ki.value.trim();
      if (!v) { ki.focus(); return; }
      kb.disabled = true; kmsg.className = 'tk-note'; kmsg.textContent = 'Đang kiểm tra khoá…';
      try {
        const names = await listModels(v, pv);
        try { localStorage.setItem(kk(K.key, pv), v); localStorage.setItem(kk(K.model, pv), names[0]); } catch (x) {}
        kmsg.className = 'tk-note ok'; kmsg.textContent = '✓ Khoá dùng được. Model: ' + names[0];
        setTimeout(() => aiHome(pre), 700);
      } catch (x) { kmsg.className = 'tk-note err'; kmsg.textContent = errText(x); }
      kb.disabled = false;
    });
    setup.appendChild(kr); setup.appendChild(kmsg);
    if (key) {
      const mr = E('div', 'tk-mrow');
      mr.appendChild(E('span', 'tk-rate-l', 'Model:'));
      const sel = E('select', 'tk-sel');
      const names = load(kk(K.models), []); const cur = aiModel();
      (names.length ? names : [cur]).filter(Boolean).forEach(n => { const o = E('option', null, n); o.value = n; if (n === cur) o.selected = true; sel.appendChild(o); });
      sel.addEventListener('change', () => { try { localStorage.setItem(kk(K.model), sel.value); } catch (e) {} });
      mr.appendChild(sel);
      const del = E('button', 'acct-link', 'Xoá khoá khỏi máy này'); del.type = 'button';
      del.addEventListener('click', () => { if (!confirm('Xoá khoá ' + PV.name + ' khỏi máy này?')) return; try { [K.key, K.model, K.models].forEach(k => localStorage.removeItem(kk(k))); } catch (e) {} aiHome(pre); });
      mr.appendChild(del);
      setup.appendChild(mr);
    }
    setup.appendChild(E('div', 'tk-note', '🔒 Khoá chỉ lưu trên máy này, không đồng bộ lên tài khoản và không nằm trong file sao lưu. Nội dung bạn nói được gửi tới ' + PV.who + ' để AI trả lời' + (pv === 'gemini' ? '; bản miễn phí của Google có thể dùng dữ liệu này để cải thiện dịch vụ' : '') + ', nên đừng nói thông tin riêng tư.'));
    c.appendChild(setup);

    if (key) {
      const cfg = Object.assign({ lv: userLv(), topic: TOPICS[0][1], focus: true }, load(K.ai, {}), pre.lv ? { lv: pre.lv } : {}, pre.topic ? { topic: pre.topic } : {});
      const lvc = E('div', 'colloc-chips'); lvc.appendChild(E('span', 'tk-rate-l', 'Trình độ:'));
      [1, 2, 3, 4].forEach(v => { const ch = E('button', 'colloc-chip' + (cfg.lv === v ? ' active' : ''), LV[v]); ch.type = 'button'; ch.addEventListener('click', () => { cfg.lv = v; lvc.querySelectorAll('.colloc-chip').forEach(x => x.classList.toggle('active', x === ch)); }); lvc.appendChild(ch); });
      c.appendChild(lvc);
      const tpc = E('div', 'colloc-chips'); tpc.appendChild(E('span', 'tk-rate-l', 'Chủ đề:'));
      const custom = E('input', 'tk-topic'); custom.type = 'text'; custom.placeholder = 'hoặc tự nhập chủ đề (tiếng Việt hoặc Anh)…';
      const known = TOPICS.find(t => t[1] === cfg.topic);
      if (!known) custom.value = cfg.topic;
      TOPICS.forEach(([l, v]) => { const ch = E('button', 'colloc-chip' + (cfg.topic === v ? ' active' : ''), l); ch.type = 'button'; ch.addEventListener('click', () => { cfg.topic = v; custom.value = ''; tpc.querySelectorAll('.colloc-chip').forEach(x => x.classList.toggle('active', x === ch)); }); tpc.appendChild(ch); });
      c.appendChild(tpc); c.appendChild(custom);
      const fo = E('label', 'tk-opt'); const fc = E('input'); fc.type = 'checkbox'; fc.checked = cfg.focus;
      fc.addEventListener('change', () => { cfg.focus = fc.checked; });
      fo.appendChild(fc); fo.appendChild(document.createTextNode(' Lồng ghép cấu trúc và từ vựng tôi vừa học'));
      c.appendChild(fo);
      const go = E('button', 'btn-primary tk-start', '▶ Bắt đầu trò chuyện'); go.type = 'button';
      go.addEventListener('click', () => {
        if (custom.value.trim()) cfg.topic = custom.value.trim();
        save(K.ai, { lv: cfg.lv, topic: cfg.topic, focus: cfg.focus });
        aiRun(Object.assign({}, cfg, { scene: pre.scene && pre.topic === cfg.topic ? pre.scene : null }));
        top();
      });
      c.appendChild(go);
    }
    root.appendChild(c);
  }
  function aiRun(cfg) {
    stopAll();
    A = { cfg, hist: [{ role: 'user', parts: [{ text: '(Start the conversation now: greet me in one short sentence and ask your first question.)' }] }], turns: 0, mine: [] };
    root.innerHTML = '';
    const head = E('div', 'tk-top');
    head.appendChild(back('← Trò chuyện với AI', () => { A = null; aiHome(); }));
    A.prog = E('div', 'tk-prog', LV[cfg.lv]); head.appendChild(A.prog);
    root.appendChild(head);
    A.chat = E('div', 'tk-chat'); root.appendChild(A.chat);
    A.dock = E('div', 'tk-dock'); root.appendChild(A.dock);
    const endb = E('button', 'btn-ghost tk-end', '🏁 Kết thúc & nhận xét'); endb.type = 'button';
    endb.addEventListener('click', aiEnd);
    A.endb = endb;
    A.mic = micBox(text => aiSay(text));
    A.dock.appendChild(A.mic);
    A.hints = E('div', 'tk-hints'); A.dock.insertBefore(A.hints, A.mic);
    A.dock.appendChild(endb);
    aiCall(null);
  }
  async function aiCall(myBubble) {
    const me = A;
    me.mic.disable(true);
    const wait = E('div', 'tk-b them wait', '…'); me.chat.appendChild(wait);
    wait.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    let out = null, err = null, spoken = '';
    // v138: chữ hiện dần ngay khi Google gửi tới; câu trả lời đọc lên ngay khi đủ câu, không chờ phần sửa lỗi/gợi ý
    const onDelta = all => {
      if (A !== me) return;
      const p = partReply(all); if (!p || !p.t) return;
      wait.classList.remove('wait'); wait.textContent = p.t;
      if (p.done && !spoken && set.auto) { spoken = p.t.trim(); say(spoken); }
    };
    try {
      const txt = await gem({ systemInstruction: { parts: [{ text: sysPrompt(me.cfg) }] }, contents: me.hist.slice(-24),
        generationConfig: { temperature: 0.7, maxOutputTokens: 1024, responseMimeType: 'application/json', responseSchema: SCHEMA } }, true, onDelta,
        n => { if (A === me && !spoken) { wait.classList.add('wait'); wait.textContent = n >= 2 ? 'Google đang bận, đổi sang model khác…' : 'Đang thử lại…'; } });
      out = parseJSON(txt) || { reply: txt };
    } catch (e) { err = e; }
    if (A !== me) return;
    wait.remove();
    if (err) {
      const fb = E('div', 'tk-fb bad'); fb.appendChild(E('div', 'tk-fb-h', '⚠️ ' + errText(err)));
      const r = E('button', 'btn-ghost', '↻ Thử lại'); r.type = 'button';
      r.addEventListener('click', () => { fb.remove(); aiCall(myBubble); });
      fb.appendChild(r);
      me.chat.appendChild(fb);
      me.mic.disable(false);
      return;
    }
    const reply = String(out.reply || '').trim() || '…';
    me.hist.push({ role: 'model', parts: [{ text: reply }] });
    try { if (myBubble && window.actLog) actLog('s'); } catch (e) {}
    // nhận xét câu vừa nói (gắn dưới bong bóng của người học)
    if (myBubble) {
      const corr = String(out.correction || '').trim(), why = String(out.explain_vi || '').trim(), better = String(out.better || '').trim();
      const same = (a, b) => a.toLowerCase().replace(/[^a-z' ]/g, '').trim() === b.toLowerCase().replace(/[^a-z' ]/g, '').trim();
      const fb = E('div', 'tk-fb ' + (corr && !same(corr, myBubble.text) ? 'mid' : 'ok'));
      if (corr && !same(corr, myBubble.text)) {
        fb.appendChild(E('div', 'tk-fb-h', '✏️ Sửa lại: '));
        const m = E('div', 'tk-model'); m.appendChild(E('span', null, corr)); m.appendChild(play(corr)); fb.appendChild(m);
        if (why) fb.appendChild(E('div', 'tk-why', why));
        me.mine.push({ said: myBubble.text, fix: corr, why });
        try { if (window.mkAdd) window.mkAdd({ k: 'talk|' + myBubble.text.toLowerCase().slice(0, 160), src: 'talk', cat: me.cfg && me.cfg.topic ? String(me.cfg.topic) : 'Trò chuyện tự do', mode: 'fix', p: myBubble.text, a: [corr].concat(better && !same(better, corr) ? [better] : []), why }); } catch (e) {}
      } else fb.appendChild(E('div', 'tk-fb-h', '✓ Câu của bạn ổn'));
      if (better && !same(better, myBubble.text) && !(corr && same(better, corr))) {
        const m = E('div', 'tk-model'); m.appendChild(E('span', 'tk-ml', '✨ Tự nhiên hơn: ')); m.appendChild(E('span', null, better)); m.appendChild(play(better)); fb.appendChild(m);
      }
      myBubble.el.after(fb);
    }
    me.chat.appendChild(bubbleAI(reply, out.reply_vi));
    if (set.auto && spoken !== reply) say(reply);
    me.hints.innerHTML = '';
    const hs = Array.isArray(out.hints) ? out.hints.filter(x => typeof x === 'string' && x.trim()).slice(0, 3) : [];
    if (hs.length) {
      const hb = E('button', 'tk-hint-b', '💡 Gợi ý câu trả lời'); hb.type = 'button';
      hb.addEventListener('click', () => { hb.remove(); hs.forEach(h => { const r = E('div', 'tk-model'); r.appendChild(E('span', null, h)); r.appendChild(play(h)); me.hints.appendChild(r); }); });
      me.hints.appendChild(hb);
    }
    me.mic.disable(false);
    if (me.turns >= 12) me.hints.appendChild(E('div', 'tk-note', 'Bạn đã nói khá nhiều rồi 👏 Bấm "Kết thúc & nhận xét" để xem tổng kết.'));
  }
  function bubbleAI(text, vi) {
    const b = E('div', 'tk-b them');
    b.appendChild(E('div', 'tk-who', 'Mia (AI)'));
    b.appendChild(E('div', 'tk-t', text));
    const tools = E('div', 'tk-tools'); tools.appendChild(play(text));
    if (vi) { const v = E('div', 'tk-vi', vi); v.hidden = true; const tb = E('button', 'tk-tr', 'Dịch'); tb.type = 'button'; tb.addEventListener('click', () => { v.hidden = !v.hidden; tb.textContent = v.hidden ? 'Dịch' : 'Ẩn dịch'; }); tools.appendChild(tb); b.appendChild(tools); b.appendChild(v); }
    else b.appendChild(tools);
    return b;
  }
  function aiSay(text) {
    if (!A) return;
    if (VI_RE.test(text)) { const n = E('div', 'tk-fb bad'); n.appendChild(E('div', 'tk-fb-h', 'Hãy nói bằng tiếng Anh nhé. Không biết nói thế nào? Bấm 💡 Gợi ý.')); A.chat.appendChild(n); n.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); return; }
    A.turns++;
    prog._turns = (prog._turns || 0) + 1; prog._ai = (prog._ai || 0) + 1; save(K.prog, prog);
    const b = E('div', 'tk-b me'); b.appendChild(E('div', 'tk-t', text));
    A.chat.appendChild(b);
    A.hist.push({ role: 'user', parts: [{ text }] });
    aiCall({ el: b, text });
  }
  async function aiEnd() {
    const me = A; if (!me) return;
    if (me.turns < 2) { if (!confirm('Bạn mới nói ' + me.turns + ' câu. Vẫn kết thúc?')) return; }
    me.mic.disable(true); me.endb.disabled = true; me.hints.innerHTML = '';
    const c = E('div', 'tense-card tk-sum'); c.appendChild(E('div', 'tk-note', 'Đang tổng kết buổi nói chuyện…'));
    me.chat.appendChild(c); c.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const said = me.hist.filter(h => h.role === 'user').slice(1).map(h => h.parts[0].text);
    let out = null, err = null;
    if (said.length) {
      try {
        const txt = await gem({
          contents: [{ role: 'user', parts: [{ text: `A Vietnamese learner (CEFR ${LV[me.cfg.lv]}) had this English conversation practice. Their sentences:\n` + said.map((s, i) => `${i + 1}. ${s}`).join('\n') +
            '\n\nReturn JSON: "summary_vi" (2-3 encouraging sentences in Vietnamese about their speaking), "good" (up to 3 things they did well, in Vietnamese), "fix" (up to 4 most important mistakes: objects with "wrong", "right", "why_vi"), "next_vi" (one concrete tip in Vietnamese for next time). Ignore punctuation and capitalisation.' }] }],
          generationConfig: { temperature: 0.4, maxOutputTokens: 1024, responseMimeType: 'application/json' } });
        out = parseJSON(txt);
      } catch (e) { err = e; }
    }
    if (A !== me) return;
    c.innerHTML = '';
    c.appendChild(E('div', 'tk-sum-n', '🗣 ' + said.length));
    c.appendChild(E('div', 'tk-sum-t', 'câu bạn đã nói với AI'));
    if (out) {
      if (out.summary_vi) c.appendChild(E('p', null, out.summary_vi));
      if (Array.isArray(out.good) && out.good.length) { c.appendChild(E('div', 'tk-uses-h', '👍 Bạn làm tốt:')); const ul = E('ul', 'sc-list'); out.good.forEach(g => ul.appendChild(E('li', 'sc-ok', '✓ ' + g))); c.appendChild(ul); }
      if (Array.isArray(out.fix) && out.fix.length) {
        c.appendChild(E('div', 'tk-uses-h', '✏️ Cần sửa:'));
        out.fix.forEach(f => { const d = E('div', 'tk-miss'); if (f.wrong) d.appendChild(E('div', 'tk-miss-u', '✗ ' + f.wrong)); if (f.right) { const m = E('div', 'tk-model'); m.appendChild(E('span', null, '✓ ' + f.right)); m.appendChild(play(f.right)); d.appendChild(m); } if (f.why_vi) d.appendChild(E('div', 'tk-why', f.why_vi)); c.appendChild(d); });
      }
      if (out.next_vi) c.appendChild(E('div', 'tk-tip', '🎯 Lần sau: ' + out.next_vi));
    } else {
      if (err) c.appendChild(E('div', 'tk-note err', errText(err)));
      if (me.mine.length) { c.appendChild(E('div', 'tk-uses-h', '✏️ Các câu đã được sửa:')); me.mine.forEach(f => { const d = E('div', 'tk-miss'); d.appendChild(E('div', 'tk-miss-u', '✗ ' + f.said)); const m = E('div', 'tk-model'); m.appendChild(E('span', null, '✓ ' + f.fix)); m.appendChild(play(f.fix)); d.appendChild(m); c.appendChild(d); }); }
    }
    const acts = E('div', 'tk-acts');
    const a1 = E('button', 'btn-primary', '↻ Trò chuyện tiếp chủ đề khác'); a1.type = 'button'; a1.addEventListener('click', () => { aiHome(); top(); });
    const a2 = E('button', 'btn-ghost', '🎭 Luyện nhập vai'); a2.type = 'button'; a2.addEventListener('click', () => { home(); top(); });
    acts.appendChild(a1); acts.appendChild(a2); c.appendChild(acts);
  }

  function stopAll() { hush(); try { if (R && R.mic) R.mic.disable(true); } catch (e) {} R = null; A = null; }
  // nút "Luyện nói" ở cuối bài ngữ pháp
  window.talkSlot = (box, lessonId) => {
    const list = TALK_SCENES.filter(s => s.uses.includes(lessonId));
    if (!list.length || !box) return;
    box.innerHTML = '';
    box.appendChild(E('div', 'tk-uses-h', '🗣 Dùng cấu trúc này khi nói chuyện:'));
    list.slice(0, 3).forEach(s => {
      const b = E('button', 'tk-use', s.icon + ' ' + s.title + ' · ' + LV[s.lv]); b.type = 'button';
      b.addEventListener('click', () => { const nav = document.querySelector('nav.tabbar button[data-page="page-talk"]'); if (nav) nav.click(); intro(s); top(); });
      box.appendChild(b);
    });
  };
  const SP_TASKS = [{"id":"s-a1-me","lv":1,"icon":"🙋","t":"Talk about yourself","vi":"Nói về bản thân","sec":30,"prompt":"Introduce yourself: your name, age, where you live, your job and one thing you like.","points":["Tên, tuổi","Nơi sống","Công việc / trường học","Một sở thích"],"phrases":[["My name is …","Tên tôi là …"],["I live in …","Tôi sống ở …"],["I work as …","Tôi làm …"],["I really like …","Tôi rất thích …"]],"sample":"Hi, my name is Hieu. I am twenty-eight years old and I live in Ho Chi Minh City. I work as a 3D artist. In my free time, I really like playing badminton with my friends."},{"id":"s-a1-food","lv":1,"icon":"🍜","t":"Your favourite food","vi":"Món ăn yêu thích","sec":30,"prompt":"What is your favourite food? When do you eat it, and why do you like it?","points":["Món gì","Ăn khi nào, ở đâu","Vì sao thích (vị, kỷ niệm…)"],"phrases":[["My favourite food is …","Món tôi thích nhất là …"],["I usually eat it …","Tôi thường ăn nó …"],["It is delicious and …","Nó rất ngon và …"],["because …","vì …"]],"sample":"My favourite food is bun cha. I usually eat it for lunch near my office. It has grilled pork, noodles and fresh herbs. I like it because it is delicious and not expensive."},{"id":"s-a1-home","lv":1,"icon":"🏠","t":"Your home","vi":"Ngôi nhà của bạn","sec":30,"prompt":"Describe your home. How many rooms are there? What is your favourite room?","points":["Nhà hay căn hộ","Có mấy phòng","Phòng thích nhất và vì sao"],"phrases":[["I live in a flat / a house.","Tôi sống trong căn hộ / ngôi nhà."],["There are … rooms.","Có … phòng."],["My favourite room is …","Phòng tôi thích nhất là …"],["It is small but …","Nó nhỏ nhưng …"]],"sample":"I live in a small flat with my wife. There are three rooms: a living room, a bedroom and a kitchen. My favourite room is the living room because it is bright and I can watch films there."},{"id":"s-a1-weekend","lv":1,"icon":"📅","t":"Your weekend","vi":"Cuối tuần của bạn","sec":30,"prompt":"What do you usually do at the weekend?","points":["Sáng thứ Bảy","Chiều / tối","Chủ Nhật","Đi với ai"],"phrases":[["At the weekend, I usually …","Cuối tuần tôi thường …"],["On Saturday morning, …","Sáng thứ Bảy, …"],["Sometimes I …","Thỉnh thoảng tôi …"],["with my family / friends","cùng gia đình / bạn bè"]],"sample":"At the weekend, I usually get up late. On Saturday morning, I clean my flat and go to the market. In the evening, I meet my friends for dinner. On Sunday, I visit my parents and sometimes we watch a film together."},{"id":"s-a2-trip","lv":2,"icon":"🧳","t":"A memorable trip","vi":"Một chuyến đi đáng nhớ","sec":45,"prompt":"Talk about a trip you took. Where did you go, who did you go with, and what did you do?","points":["Đi đâu, khi nào","Đi với ai, bằng gì","Làm gì ở đó","Cảm nhận"],"phrases":[["Last year, I went to …","Năm ngoái tôi đã đi …"],["We stayed in …","Chúng tôi ở …"],["The best part was …","Điều tuyệt nhất là …"],["I would love to go back.","Tôi rất muốn quay lại."]],"sample":"Last year, I went to Hoi An with my two best friends. We took the train from Saigon, and it was a long but fun journey. We stayed in a small homestay near the old town. During the day we rode bicycles to the beach, and in the evening we walked around the lantern streets. The best part was the food, especially cao lau. I would love to go back."},{"id":"s-a2-person","lv":2,"icon":"👩‍🏫","t":"A person you admire","vi":"Người bạn ngưỡng mộ","sec":45,"prompt":"Describe a person you admire. Who is this person, and why do you admire them?","points":["Người đó là ai","Ngoại hình / tính cách","Một việc người đó đã làm","Vì sao bạn ngưỡng mộ"],"phrases":[["The person I admire most is …","Người tôi ngưỡng mộ nhất là …"],["She / He is very …","Bà ấy / Ông ấy rất …"],["For example, …","Ví dụ, …"],["That's why I admire …","Đó là lý do tôi ngưỡng mộ …"]],"sample":"The person I admire most is my mother. She is a primary school teacher, and she is very patient and kind. For example, when I was a student, she worked all day and still helped me with my homework every evening. She never complained, even when she was tired. That's why I admire her so much."},{"id":"s-a2-job","lv":2,"icon":"💼","t":"Your job or studies","vi":"Công việc hoặc việc học","sec":45,"prompt":"Talk about your job or your studies. What do you do every day? What do you like and dislike about it?","points":["Làm gì / học gì","Một ngày điển hình","Điều thích","Điều không thích"],"phrases":[["I work for … / I study …","Tôi làm cho … / Tôi học …"],["Every day, I have to …","Mỗi ngày tôi phải …"],["What I like most is …","Điều tôi thích nhất là …"],["The hardest part is …","Phần khó nhất là …"]],"sample":"I work for a small game company as a 3D artist. Every day, I have to create models for the game, like trees, houses and characters. What I like most is seeing my work in the game, and my colleagues are very friendly. The hardest part is the deadlines. Sometimes we have to work late, and that can be tiring."},{"id":"s-a2-plans","lv":2,"icon":"🗓️","t":"Plans for next weekend","vi":"Kế hoạch cuối tuần tới","sec":45,"prompt":"What are you going to do next weekend? Talk about your plans.","points":["Thứ Bảy định làm gì","Chủ Nhật định làm gì","Với ai","Vì sao bạn mong chờ"],"phrases":[["Next weekend, I'm going to …","Cuối tuần tới tôi định …"],["I'm meeting … on Saturday.","Tôi sẽ gặp … vào thứ Bảy."],["If the weather is nice, …","Nếu thời tiết đẹp, …"],["I'm really looking forward to it.","Tôi rất mong chờ."]],"sample":"Next weekend, I'm going to visit my grandparents in the countryside. I'm leaving on Saturday morning by bus. If the weather is nice, my cousins and I are going to go fishing in the river. On Sunday, we're having a big family lunch because it is my grandfather's birthday. I'm really looking forward to it."},{"id":"s-b1-city","lv":3,"icon":"🏙️","t":"City or countryside?","vi":"Thành phố hay nông thôn?","sec":60,"prompt":"Would you prefer to live in a big city or in the countryside? Give reasons and examples.","points":["Lựa chọn của bạn","Lý do 1 + ví dụ","Lý do 2 + ví dụ","Nhược điểm của lựa chọn đó","Kết luận"],"phrases":[["Personally, I'd prefer …","Cá nhân tôi thích …"],["The main reason is that …","Lý do chính là …"],["On the other hand, …","Mặt khác, …"],["All in all, …","Nhìn chung, …"]],"sample":"Personally, I'd prefer to live in a big city, at least for now. The main reason is work. In a city like Saigon, there are many more job opportunities, especially in creative industries like mine. Cities are also convenient: I can find good food, cinemas and English classes near my home. On the other hand, the traffic and pollution can be terrible, and the cost of living is high. Maybe when I'm older, I'll move to a quieter place. But all in all, for a young person, I think the city is the better choice."},{"id":"s-b1-skill","lv":3,"icon":"🛠️","t":"A skill you learned","vi":"Một kỹ năng bạn đã học","sec":60,"prompt":"Talk about a skill you learned. How did you learn it, what was difficult, and how has it helped you?","points":["Kỹ năng gì, khi nào","Học bằng cách nào","Khó khăn","Lợi ích hiện tại"],"phrases":[["A few years ago, I decided to learn …","Vài năm trước tôi quyết định học …"],["At first, it was difficult because …","Lúc đầu khó vì …"],["I kept practising …","Tôi tiếp tục luyện …"],["Now it helps me …","Giờ nó giúp tôi …"]],"sample":"A few years ago, I decided to learn 3D modelling. I learned mostly by myself, using free online tutorials and practising every evening after work. At first, it was really difficult because the software had so many tools, and my early models looked terrible. But I kept practising and joined an online community where people gave me feedback. Now this skill has completely changed my life, because it became my job. It also taught me that I can learn almost anything if I'm patient."},{"id":"s-b1-tech","lv":3,"icon":"📱","t":"Technology in your life","vi":"Công nghệ trong cuộc sống","sec":60,"prompt":"How has technology changed your daily life? Is the change mostly positive or negative?","points":["Công nghệ bạn dùng nhiều nhất","Thay đổi tích cực","Thay đổi tiêu cực","Quan điểm của bạn"],"phrases":[["These days, I can't imagine life without …","Ngày nay tôi không thể tưởng tượng cuộc sống thiếu …"],["It has made … much easier.","Nó làm … dễ hơn nhiều."],["The downside is that …","Mặt trái là …"],["Overall, I think …","Nhìn chung tôi nghĩ …"]],"sample":"These days, I can't imagine life without my smartphone. It has made many things much easier: I can pay for coffee, book a taxi or video call my parents in seconds. I also use it to learn English with apps and podcasts. The downside is that I spend too much time on social media, and sometimes I check my phone instead of sleeping. Overall, I think technology is mostly positive, but we need to control how we use it."},{"id":"s-b1-advice","lv":3,"icon":"💡","t":"Advice for a new learner","vi":"Lời khuyên cho người mới học","sec":60,"prompt":"A friend wants to start learning English. What advice would you give them?","points":["2–3 lời khuyên cụ thể","Giải thích vì sao","Ví dụ từ kinh nghiệm của bạn","Lời động viên"],"phrases":[["If I were you, I would …","Nếu tôi là bạn, tôi sẽ …"],["It's a good idea to …","Nên …"],["Try not to …","Cố đừng …"],["In my experience, …","Theo kinh nghiệm của tôi, …"]],"sample":"If you want to start learning English, my first advice is to study a little every day instead of a lot once a week. Even fifteen minutes is enough at the beginning. It's also a good idea to choose materials you enjoy, like films or songs, so you don't get bored. Try not to worry too much about mistakes. In my experience, I improved much faster when I started speaking, even though my English was terrible at first. Just be patient and keep going."},{"id":"s-b2-remote","lv":4,"icon":"🏡","t":"Working from home","vi":"Làm việc tại nhà","sec":90,"prompt":"Some companies now let employees work from home permanently. What are the advantages and disadvantages, for both employees and companies?","points":["Lợi ích cho nhân viên","Lợi ích cho công ty","Bất lợi (cô đơn, khó giao tiếp…)","Giải pháp kết hợp + quan điểm"],"phrases":[["There are clear benefits for …","Có những lợi ích rõ ràng cho …"],["From the company's point of view, …","Từ góc độ công ty, …"],["That said, …","Dù vậy, …"],["In my view, the best approach is …","Theo tôi, cách tốt nhất là …"]],"sample":"There are clear benefits for employees. They save time and money on commuting, and many people find they can concentrate better at home. From the company's point of view, they can reduce office costs and hire talented people who live in other cities. That said, working from home permanently has real disadvantages. Some people feel isolated, and it's harder for junior staff to learn by watching experienced colleagues. Communication can also be slower when every small question becomes a message. In my view, the best approach is a hybrid model, where teams meet in the office two or three days a week for collaboration and work from home on the other days."},{"id":"s-b2-project","lv":4,"icon":"🚀","t":"A challenging project","vi":"Một dự án đầy thử thách","sec":90,"prompt":"Describe a challenging project you worked on. What was the challenge, what did you do, and what was the result?","points":["Bối cảnh dự án","Thử thách chính","Bạn đã làm gì (hành động cụ thể)","Kết quả + bài học"],"phrases":[["I was responsible for …","Tôi phụ trách …"],["The biggest challenge was …","Thử thách lớn nhất là …"],["To solve this, I …","Để giải quyết, tôi …"],["As a result, …","Kết quả là …"],["Looking back, …","Nhìn lại, …"]],"sample":"Last year, I was responsible for the environment art in a mobile game. The biggest challenge was performance: our forest level looked beautiful, but on mid-range phones the frame rate dropped to around twenty frames per second. To solve this, I analysed which assets were the most expensive and found that the trees had too many transparent leaves. I created simpler versions for distant trees and baked most of the lighting into textures. I also worked closely with a programmer to test each change. As a result, the frame rate rose to a stable fifty without a noticeable loss in quality. Looking back, I learned that optimisation should be planned from the start, not left until the end."},{"id":"s-b2-social","lv":4,"icon":"📲","t":"Social media and young people","vi":"Mạng xã hội và giới trẻ","sec":90,"prompt":"Should there be stricter rules about how much time children and teenagers spend on social media? Explain your opinion.","points":["Quan điểm","Lý do ủng hộ (giấc ngủ, sức khỏe tinh thần)","Ý kiến phản bác (quyền tự do, lợi ích)","Ai nên chịu trách nhiệm: gia đình, trường, công ty, nhà nước"],"phrases":[["I'm in favour of … / I'm against …","Tôi ủng hộ … / Tôi phản đối …"],["There is growing evidence that …","Ngày càng có nhiều bằng chứng rằng …"],["Critics would argue that …","Người phản đối sẽ cho rằng …"],["Ultimately, …","Rốt cuộc, …"]],"sample":"I'm in favour of stronger rules, but I don't think a simple time limit is enough. There is growing evidence that heavy social media use can affect teenagers' sleep and self-esteem, partly because the apps are designed to keep them scrolling. Critics would argue that banning or limiting social media takes away young people's freedom and ignores the benefits, like staying in touch with friends or learning new skills. I think that's a fair point. That's why, in my opinion, the most important rules should apply to companies: for example, no infinite scrolling or targeted advertising for children. Ultimately, parents and schools also need to teach young people how to use these platforms in a healthy way."},{"id":"s-b2-change","lv":4,"icon":"🔄","t":"A decision that changed your life","vi":"Quyết định thay đổi cuộc đời","sec":90,"prompt":"Talk about an important decision you made. What were the options, why did you choose as you did, and how do you feel about it now?","points":["Bối cảnh, các lựa chọn","Điều khiến bạn phân vân","Vì sao bạn chọn như vậy","Kết quả và cảm nghĩ hiện tại"],"phrases":[["At the time, I had to choose between …","Lúc đó tôi phải chọn giữa …"],["I was torn because …","Tôi phân vân vì …"],["In the end, I decided to …","Cuối cùng tôi quyết định …"],["I don't regret it at all.","Tôi không hề hối tiếc."]],"sample":"Three years ago, I had to choose between a stable job in a bank and a much less secure job at a small animation studio. I was torn because my parents strongly preferred the bank, and the salary there was almost twice as high. However, I had been teaching myself 3D modelling for two years, and I knew I would be unhappy doing something I didn't care about. In the end, I decided to join the studio. The first year was hard financially, and I had to work long hours. But I learned incredibly fast, and now I earn a reasonable salary doing something I love. I don't regret it at all, and even my parents are proud of me now."},{"id":"s-c1-ai","lv":5,"icon":"🤖","t":"AI and the future of work","vi":"AI và tương lai việc làm","sec":120,"prompt":"To what extent will artificial intelligence change the job market in the next ten years? Which skills will become more valuable?","points":["Mức độ thay đổi (nhiệm vụ vs nghề)","Ví dụ ngành bị ảnh hưởng","Kỹ năng sẽ giá trị hơn","Rủi ro, điều kiện để chuyển đổi công bằng"],"phrases":[["I'd argue that …","Tôi cho rằng …"],["Rather than replacing entire jobs, …","Thay vì thay thế cả nghề, …"],["Take … as an example.","Lấy … làm ví dụ."],["What will matter most is …","Điều quan trọng nhất sẽ là …"],["The real risk, in my view, is …","Rủi ro thực sự, theo tôi, là …"]],"sample":"I'd argue that AI will change the job market profoundly, but not in the dramatic way many headlines suggest. Rather than replacing entire jobs, it is likely to automate specific tasks within them. Take my own field, 3D art, as an example. Generating variations of a texture or unwrapping UVs could soon take seconds, but someone still needs to decide what the game should look like and whether an asset fits the story. In that sense, routine execution will become cheaper, while judgement, taste and communication will become more valuable. What will matter most is the ability to learn continuously and to work effectively alongside these tools. The real risk, in my view, is the transition. Junior positions, which are where people traditionally learn, may shrink, and not everyone will have the time or money to retrain. So companies and governments will need to invest seriously in training if the benefits are going to be shared fairly."},{"id":"s-c1-success","lv":5,"icon":"🏆","t":"What does success mean?","vi":"Thành công nghĩa là gì?","sec":120,"prompt":"People define success in very different ways. How would you define it, and has your definition changed over time?","points":["Định nghĩa phổ biến (tiền, địa vị)","Định nghĩa của bạn","Định nghĩa đã thay đổi thế nào, vì sao","Suy ngẫm kết luận"],"phrases":[["For many people, success simply means …","Với nhiều người, thành công chỉ đơn giản là …"],["When I was younger, I used to think …","Hồi nhỏ tôi từng nghĩ …"],["Over the years, I've come to realise …","Theo năm tháng, tôi dần nhận ra …"],["To me, success is less about … and more about …","Với tôi, thành công ít liên quan đến … mà nhiều hơn là …"]],"sample":"For many people, success simply means money and status: a high salary, a nice car, an impressive job title. When I was younger, I used to think the same way. I measured myself by grades and later by how much my friends were earning. Over the years, though, I've come to realise that these things are poor guides to whether a life is going well. I've met people with excellent salaries who dread every Monday, and others with modest incomes who are genuinely content. To me, success is now less about reaching a particular position and more about three things: doing work I find meaningful, continuing to grow, and having time for the people I care about. Of course, financial security matters; it's hard to feel successful when you're constantly worried about rent. But beyond a certain point, I think chasing more money often comes at the expense of the things that actually make us happy."},{"id":"s-c1-tourism","lv":5,"icon":"🌏","t":"Tourism: benefit or burden?","vi":"Du lịch: lợi hay hại?","sec":120,"prompt":"Is mass tourism more of a benefit or a burden for popular destinations? Use examples and suggest how its negative effects could be reduced.","points":["Lợi ích kinh tế","Tác hại (môi trường, giá nhà, văn hóa)","Ví dụ cụ thể (Hội An, Sa Pa, Venice…)","Giải pháp + quan điểm cân bằng"],"phrases":[["There is no doubt that …","Không thể nghi ngờ rằng …"],["However, the costs are often borne by …","Tuy nhiên cái giá thường do … gánh chịu"],["A case in point is …","Một ví dụ điển hình là …"],["One way to mitigate this would be …","Một cách giảm thiểu là …"]],"sample":"There is no doubt that tourism brings enormous economic benefits. In places like Hoi An or Sa Pa, it supports thousands of jobs, from hotel staff to street vendors, and it gives local crafts a market they would never otherwise have. However, the costs are often borne by residents rather than visitors. Rents rise as homes are converted into guesthouses, traditional shops are replaced by souvenir stalls, and natural sites can be badly damaged. A case in point is Maya Bay in Thailand, which had to close for several years so that its coral could recover. So I would say tourism is a benefit only when it is managed carefully. One way to mitigate the negative effects would be to limit visitor numbers at fragile sites and charge entry fees that go directly to conservation. Encouraging people to visit outside the peak season and to stay longer in one place would also spread the benefits more evenly. Ultimately, the goal should be tourism that local communities actually want."},{"id":"s-c1-language","lv":5,"icon":"🗣️","t":"Why learn languages in the age of AI?","vi":"Vì sao học ngoại ngữ khi đã có AI?","sec":120,"prompt":"Now that translation apps are so good, is it still worth spending years learning a foreign language? Explain your view.","points":["Thừa nhận khả năng của công cụ dịch","Điều công cụ không thay được (quan hệ, văn hóa, tư duy)","Ví dụ cá nhân / nghề nghiệp","Kết luận có sắc thái"],"phrases":[["Admittedly, …","Phải thừa nhận rằng …"],["What these tools can't do is …","Điều các công cụ này không làm được là …"],["In my own experience, …","Theo trải nghiệm của tôi, …"],["So, on balance, …","Vì vậy, cân nhắc mọi mặt, …"]],"sample":"Admittedly, translation apps have become remarkably good. For reading a menu or asking for directions in a foreign country, they are more than enough, and I use them myself all the time. What these tools can't do, at least not yet, is build relationships. When you speak to a colleague or a client in their language, even imperfectly, they respond to you differently; there is a level of trust and humour that simply doesn't happen through a screen. Learning a language also changes the way you think. You start to notice ideas and expressions that don't exist in your own language, and that makes you more open-minded. In my own experience, improving my English didn't just help me read technical documentation; it allowed me to join international online communities, get feedback from artists all over the world, and eventually find better jobs. So, on balance, I believe language learning is still very much worth it, although the reasons have shifted from pure necessity to connection and personal growth."}];   // v151: đề nói (tự soạn)
  /* ---------- v151: 🎤 NÓI THEO ĐỀ — nói liên tục 30 giây → 2 phút, app chép lại lời nói, thống kê, AI nhận xét ---------- */
  const SPK = 'hoc-tieng-anh-speak2', SPLV = ['A1', 'A2', 'B1', 'B2', 'C1'], SPWPM = [60, 80, 100, 115, 130];
  let spProg = {}; try { spProg = JSON.parse(localStorage.getItem(SPK) || '{}') || {}; } catch (e) {}
  const spSave = () => { try { localStorage.setItem(SPK, JSON.stringify(spProg)); } catch (e) {} };
  let spFilt = 0, spRec = null, spTimer = 0;
  const spStop = () => { if (spRec) { try { spRec.stop(); } catch (e) {} spRec = null; } clearInterval(spTimer); };
  // v178: rời app khi đang nói theo đề → chốt phần đã nói và tắt micro
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && spRec && spRec.finish) { try { spRec.finish(); } catch (e) {} } });
  const spWords = s => (String(s).match(/[A-Za-z][A-Za-z'’-]*/g) || []).length;
  function spHome() {
    stopAll(); spStop();
    root.innerHTML = '';
    const back = E('button', 'gr-back', '← Nói chuyện'); back.type = 'button'; back.addEventListener('click', () => { spStop(); home(); top(); });
    root.appendChild(back);
    const hero = E('div', 'tense-card tk-hero');
    hero.appendChild(E('div', 'tk-hero-t', '🎤 Nói theo đề'));
    hero.appendChild(E('p', 'tk-hero-s', 'Đọc đề, chuẩn bị vài giây rồi nói liên tục trong thời gian quy định (A1: 30 giây → C1: 2 phút). App chép lại lời bạn nói, đếm số từ, tốc độ nói. Có khoá AI thì được nhận xét chi tiết; chưa có vẫn luyện được và nghe bài nói mẫu.'));
    const done = SP_TASKS.filter(t => spProg[t.id] && spProg[t.id].n).length;
    if (done) hero.appendChild(E('div', 'tk-stat', `Đã luyện ${done}/${SP_TASKS.length} đề`));
    root.appendChild(hero);
    const chips = E('div', 'colloc-chips tk-chips');
    [[0, 'Tất cả'], ...SPLV.map((x, i) => [i + 1, x])].forEach(([v, l]) => {
      const ch = E('button', 'colloc-chip' + (spFilt === v ? ' active' : ''), l); ch.type = 'button';
      ch.addEventListener('click', () => { spFilt = v; spHome(); });
      chips.appendChild(ch);
    });
    root.appendChild(chips);
    const grid = E('div', 'rd-grid');
    SP_TASKS.filter(t => !spFilt || t.lv === spFilt).forEach(t => {
      const p = spProg[t.id], c = E('button', 'rd-card' + (p && p.n ? ' done' : '')); c.type = 'button';
      const h = E('div', 'rd-card-h'); h.appendChild(E('span', 'rd-ic', t.icon)); h.appendChild(E('span', 'rd-lv', SPLV[t.lv - 1]));
      if (p && p.best != null) h.appendChild(E('span', 'rd-st ' + (p.best >= 7 ? 'ok' : 'mid'), `✓ ${p.best}/10`)); else if (p && p.n) h.appendChild(E('span', 'rd-st nx', `Đã nói ${p.n} lần`));
      c.appendChild(h);
      c.appendChild(E('div', 'rd-card-t', t.t)); c.appendChild(E('div', 'rd-card-vi', t.vi));
      c.appendChild(E('div', 'rd-card-m', `Nói ${t.sec >= 60 ? (t.sec / 60) + ' phút' : t.sec + ' giây'}`));
      c.addEventListener('click', () => { spTask(t); top(); });
      grid.appendChild(c);
    });
    root.appendChild(grid);
  }
  function spTask(t) {
    stopAll(); spStop();
    root.innerHTML = '';
    const P = spProg[t.id] || (spProg[t.id] = { n: 0, h: [] });
    const back = E('button', 'gr-back', '← Nói theo đề'); back.type = 'button'; back.addEventListener('click', () => { spStop(); spHome(); top(); });
    root.appendChild(back);
    const head = E('div', 'gr-head');
    head.appendChild(E('div', 'gr-en', `${SPLV[t.lv - 1]} · nói ${t.sec >= 60 ? (t.sec / 60) + ' phút' : t.sec + ' giây'}`));
    head.appendChild(E('h2', 'gr-title', t.icon + ' ' + t.t));
    head.appendChild(E('div', 'rd-vi-t', t.vi));
    root.appendChild(head);
    const tc = E('div', 'tense-card');
    const pr = E('div', 'wr-task-en', t.prompt); tc.appendChild(pr);
    const pl = E('button', 'btn-ghost sp-hear', '🔊 Nghe đề'); pl.type = 'button'; pl.addEventListener('click', () => say(t.prompt)); tc.appendChild(pl);
    const d1 = E('details', 'wr-det'); d1.appendChild(E('summary', null, '🧭 Ý nên nói'));
    const ul = E('ul', 'wr-ol'); t.points.forEach(x => ul.appendChild(E('li', null, x))); d1.appendChild(ul); tc.appendChild(d1);
    const d2 = E('details', 'wr-det'); d2.appendChild(E('summary', null, '🧩 Cụm từ nên dùng'));
    const pw = E('div', 'wr-ph'); t.phrases.forEach(([en, vi]) => { const b = E('button', 'rd-gli'); b.type = 'button'; b.appendChild(E('b', null, en)); b.appendChild(E('span', null, vi)); b.addEventListener('click', () => say(en.replace(/…/g, ''))); pw.appendChild(b); }); d2.appendChild(pw); tc.appendChild(d2);
    root.appendChild(tc);

    // ghi âm
    const rc = E('div', 'tense-card sp-rec');
    const clock = E('div', 'sp-clock', fmt(t.sec));
    const mic = E('button', 'btn-primary sp-mic', '🎤 Bắt đầu nói'); mic.type = 'button';
    const live = E('div', 'sp-live', 'Bấm “Bắt đầu nói” rồi nói liên tục. Lời bạn nói sẽ hiện ở đây.');
    const ta = E('textarea', 'wr-ta sp-ta'); ta.rows = 5; ta.hidden = true; ta.spellcheck = false;
    const stat = E('div', 'sp-stat');
    const acts = E('div', 'wr-acts');
    const bAI = E('button', 'btn-primary', '✨ AI nhận xét'); bAI.type = 'button'; bAI.hidden = true;
    const bS = E('button', 'btn-ghost', '📄 Bài nói mẫu'); bS.type = 'button';
    acts.appendChild(bAI); acts.appendChild(bS);
    rc.appendChild(clock); rc.appendChild(mic); rc.appendChild(live); rc.appendChild(ta); rc.appendChild(stat); rc.appendChild(acts);
    const can = typeof PR_SR !== 'undefined' && !!PR_SR;
    if (!can) {
      mic.hidden = true; ta.hidden = false; ta.placeholder = 'Trình duyệt này chưa hỗ trợ nhận dạng giọng nói. Hãy nói thành tiếng, rồi gõ lại những gì bạn đã nói vào đây để được nhận xét.';
      live.textContent = '💡 Mẹo: trên iPhone dùng Safari, trên máy tính dùng Chrome hoặc Edge để app nghe được giọng nói.';
      bAI.hidden = false;
    }
    root.appendChild(rc);
    const out = E('div', 'wr-out'); root.appendChild(out);
    const sbox = E('div', 'tense-card wr-sample'); sbox.hidden = true; root.appendChild(sbox);
    if (P.h && P.h.length) root.insertBefore(E('div', 'rv-note wr-hist', 'Các lần trước: ' + P.h.slice(-5).map(x => `${x.w} từ · ${x.wpm} từ/phút` + (x.s != null ? ` · ${x.s}/10` : '')).join('  ·  ')), out);
    function fmt(s) { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }
    let t0 = 0, elapsed = 0;
    const showStats = () => {
      const txt = ta.value.trim(), w = spWords(txt), wpm = elapsed > 3 ? Math.round(w / (elapsed / 60)) : 0;
      stat.innerHTML = '';
      if (!w) return;
      const tgt = SPWPM[t.lv - 1];
      [[String(w), 'từ'], [wpm ? String(wpm) : '—', 'từ / phút'], [elapsed ? fmt(elapsed) : '—', 'thời gian nói']].forEach(([a, b2]) => { const d = E('div', 'rv-kpi'); d.appendChild(E('b', null, a)); d.appendChild(E('span', null, b2)); stat.appendChild(d); });
      if (wpm) stat.appendChild(E('div', 'rv-note sp-tip', wpm < tgt * 0.6 ? `Tốc độ còn chậm so với mức gợi ý ~${tgt} từ/phút. Cố nói liền mạch, đừng dừng lại để sửa từng lỗi.` : wpm > tgt * 1.6 ? 'Bạn nói khá nhanh. Nhớ nói rõ âm cuối và ngắt nghỉ ở dấu câu.' : 'Tốc độ phù hợp với cấp độ này 👍'));
    };
    ta.addEventListener('input', showStats);
    mic.addEventListener('click', () => {
      if (spRec) { finish(); return; }
      out.innerHTML = ''; stat.innerHTML = ''; ta.hidden = true; ta.value = ''; bAI.hidden = true;
      try { speechSynthesis.cancel(); } catch (e) {}
      let final = '', ended = false, alive = true, r = null, restarts = 0, lastStart = 0, heard = false;
      // v178: lỗi không tự hết (không có micro, mất mạng, bị chặn quyền) → dừng hẳn và báo rõ, không mở lại micro liên tục
      const FATAL = { 'not-allowed': 'Bạn cần cho phép micro và nhận dạng giọng nói cho trình duyệt (iPhone: Cài đặt → Safari → Micrô).',
        'service-not-allowed': 'Bạn cần cho phép micro và nhận dạng giọng nói cho trình duyệt (iPhone: Cài đặt → Safari → Micrô).',
        'audio-capture': 'Không tìm thấy micro, hoặc micro đang được app khác dùng. Hãy đóng app đang dùng micro rồi thử lại.',
        'network': 'Nhận dạng giọng nói cần có mạng. Kiểm tra Wi-Fi / 4G rồi bấm nói lại.',
        'language-not-supported': 'Máy chưa hỗ trợ nhận dạng tiếng Anh. Hãy thử Chrome, Edge hoặc Safari bản mới.' };
      const begin = () => {
        lastStart = Date.now(); heard = false;
        try { if (typeof micOpening === 'function') micOpening(); } catch (e) {}
        r = new PR_SR(); r.lang = 'en-US'; r.continuous = true; r.interimResults = true;
        r.onresult = ev => {
          let interim = ''; heard = true;
          for (let i = ev.resultIndex; i < ev.results.length; i++) { const tx = ev.results[i][0].transcript; if (ev.results[i].isFinal) final += (final ? ' ' : '') + tx.trim(); else interim += tx; }
          live.textContent = (final + ' ' + interim).trim() || '👂 Đang nghe…';
        };
        r.onerror = e => { const m = FATAL[e && e.error]; if (m) { alive = false; live.textContent = m; endRec(true); } };
        // Safari tự dừng khi im lặng → nghe tiếp; nếu micro cứ tắt ngay sau khi mở (lỗi máy) thì dừng sau vài lần thử
        r.onend = () => {
          if (!alive || !spRec) return;
          restarts = !heard && Date.now() - lastStart < 1500 ? restarts + 1 : 0;   // chỉ tính lần micro tắt ngay mà không nghe được gì
          if (restarts >= 5) { alive = false; live.textContent = 'Micro cứ tự tắt ngay sau khi mở. Hãy vuốt tắt hẳn app rồi mở lại, hoặc gõ lại những gì bạn đã nói.'; endRec(true); return; }
          setTimeout(() => { if (alive && spRec) { try { begin(); } catch (e) { endRec(); } } }, 250);
        };
        try { r.start(); } catch (e) { alive = false; live.textContent = 'Không mở được micro. Hãy thử lại.'; endRec(true); }
      };
      spRec = { stop: () => { alive = false; try { r && r.stop(); } catch (e) {} }, get text() { return final; } };
      begin();
      t0 = Date.now(); live.textContent = '👂 Đang nghe… hãy bắt đầu nói.';
      mic.textContent = '⏹ Dừng'; mic.classList.add('rec');
      spTimer = setInterval(() => { const left = t.sec - (Date.now() - t0) / 1000; clock.textContent = fmt(left); clock.classList.toggle('low', left <= 10); if (left <= 0) endRec(); }, 250);
      function endRec(err) {
        if (ended) return; ended = true;
        elapsed = Math.min(t.sec, (Date.now() - t0) / 1000);
        clearInterval(spTimer);
        const rec = spRec; spRec = null;
        if (rec) rec.stop();
        try { if (typeof ttsMicEnded === 'function') ttsMicEnded(); } catch (e) {}
        mic.textContent = '🎤 Nói lại'; mic.classList.remove('rec'); clock.textContent = fmt(t.sec); clock.classList.remove('low');
        setTimeout(() => {
          const txt = (final || '').trim();
          ta.hidden = false; ta.value = txt;
          ta.placeholder = 'Máy chưa nghe được gì. Bạn có thể gõ lại những gì đã nói vào đây.';
          live.textContent = txt ? '✍️ Máy đã chép lại lời bạn nói (bên dưới). Sửa lại nếu máy nghe sai, rồi bấm ✨ AI nhận xét.' : (err ? live.textContent : 'Máy chưa nghe được gì. Hãy nói to, gần micro hơn, hoặc gõ lại vào ô bên dưới.');
          bAI.hidden = false; showStats();
          if (txt) { P.n = (P.n || 0) + 1; P.h = (P.h || []).concat([{ t: Date.now(), w: spWords(txt), wpm: elapsed > 3 ? Math.round(spWords(txt) / (elapsed / 60)) : 0 }]).slice(-10); P.last = txt.slice(0, 2000); spSave(); try { if (window.actLog) actLog('s', 3); } catch (e) {} }
        }, 600);
      }
      spRec.finish = endRec;
    });
    const finish = () => { if (spRec && spRec.finish) spRec.finish(); };

    bS.addEventListener('click', () => {
      if (!sbox.hidden) { sbox.hidden = true; return; }
      sbox.innerHTML = '';
      const h = E('div', 'wr-sh'); h.appendChild(E('h3', null, '📄 Bài nói mẫu (' + spWords(t.sample) + ' từ)'));
      const p2 = E('button', 'btn-ghost', '🔊 Nghe'); p2.type = 'button'; p2.addEventListener('click', () => say(t.sample)); h.appendChild(p2);
      sbox.appendChild(h); sbox.appendChild(E('p', 'wr-sp', t.sample));
      sbox.appendChild(E('div', 'rv-note', 'Nghe bài mẫu, ghi lại vài cụm từ hay, rồi tự nói lại bằng ý của bạn.'));
      sbox.hidden = false; try { sbox.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {}
    });

    const SCHEMA = { type: 'OBJECT', properties: {
      score: { type: 'NUMBER' }, cefr: { type: 'STRING' }, s_task: { type: 'NUMBER' }, n_task: { type: 'STRING' }, s_flu: { type: 'NUMBER' }, n_flu: { type: 'STRING' },
      s_voc: { type: 'NUMBER' }, n_voc: { type: 'STRING' }, s_gram: { type: 'NUMBER' }, n_gram: { type: 'STRING' }, praise: { type: 'STRING' },
      errors: { type: 'ARRAY', items: { type: 'OBJECT', properties: { wrong: { type: 'STRING' }, right: { type: 'STRING' }, why: { type: 'STRING' } }, required: ['wrong', 'right', 'why'] } },
      tips: { type: 'ARRAY', items: { type: 'STRING' } }, improved: { type: 'STRING' } },
      required: ['score', 'cefr', 's_task', 'n_task', 's_flu', 'n_flu', 's_voc', 'n_voc', 's_gram', 'n_gram', 'praise', 'errors', 'tips', 'improved'],
      propertyOrdering: ['score', 'cefr', 's_task', 'n_task', 's_flu', 'n_flu', 's_voc', 'n_voc', 's_gram', 'n_gram', 'praise', 'errors', 'tips', 'improved'] };
    const SYS = ['You are an experienced, encouraging English speaking examiner for Vietnamese adult learners.',
      'You receive an automatic speech-to-text transcript of the learner speaking about a topic. The transcript may contain recognition errors and has no punctuation from the learner: do NOT penalise punctuation, capitalisation or obvious recognition mistakes, and do not comment on pronunciation (you cannot hear it).',
      'Scores 0–10: score = overall; s_task = answers the question with enough relevant content for the time; s_flu = fluency and coherence (logical flow, linking words, length relative to the time); s_voc = vocabulary range and accuracy; s_gram = grammar range and accuracy. A performance that fully meets the target level deserves 7–8.',
      'n_task, n_flu, n_voc, n_gram, praise, tips and every "why" MUST be in Vietnamese, short and concrete.',
      'errors: up to 10 real language mistakes (grammar, word choice, unnatural phrasing). "wrong" must be copied exactly from the transcript (short phrase); "right" = corrected phrase.',
      'improved: a natural spoken version of what the learner said at the target level, keeping their ideas; similar length. cefr: estimated level shown. tips: 2–3 suggestions. Return only JSON.'].join('\n');
    bAI.addEventListener('click', async () => {
      const txt = ta.value.trim(); if (!txt) { ta.hidden = false; ta.focus(); return; }
      out.innerHTML = '';
      const wait = E('div', 'tense-card wr-wait'); out.appendChild(wait);
      if (!aiKey()) {
        wait.appendChild(E('div', 'wr-need', '🔑 Cần cài khoá AI một lần (Gemini hoặc Groq miễn phí, chỉ lưu trên máy bạn).'));
        const s2 = E('button', 'btn-primary', 'Cài khoá AI →'); s2.type = 'button'; s2.addEventListener('click', () => { aiHome({}); top(); }); wait.appendChild(s2);
        return;
      }
      wait.textContent = `⏳ ${PROV[prov()].name} đang nghe lại bài nói của bạn…`;
      bAI.disabled = true;
      const user = `Topic (target level ${SPLV[t.lv - 1]}, speaking time ${t.sec} seconds, actual ${Math.round(elapsed || t.sec)} seconds):\n${t.prompt}\n\nTranscript (${spWords(txt)} words):\n"""\n${txt}\n"""`;
      let r = null, err = null;
      try { r = parseJSON(await gem({ systemInstruction: { parts: [{ text: SYS }] }, contents: [{ role: 'user', parts: [{ text: user }] }], generationConfig: { temperature: 0.2, maxOutputTokens: 4096, responseMimeType: 'application/json', responseSchema: SCHEMA } }, true, null, n => { wait.textContent = n >= 2 ? '⏳ Máy chủ bận, đang đổi model…' : '⏳ Đang thử lại…'; })); } catch (e) { err = e; }
      bAI.disabled = false;
      if (!r || r.score == null) { wait.textContent = '⚠️ ' + (err ? errText(err) : 'AI trả lời không đúng định dạng. Bấm lại nhé.'); return; }
      wait.remove();
      const sc = Math.max(0, Math.min(10, Math.round(+r.score * 10) / 10));
      const last = P.h && P.h[P.h.length - 1]; if (last && last.s == null) last.s = sc;
      P.best = Math.max(P.best || 0, sc); spSave();
      const top1 = E('div', 'tense-card gx-score ' + (sc >= 7 ? 'ok' : sc >= 5 ? 'mid' : 'bad'));
      top1.appendChild(E('div', 'gx-score-t', 'Điểm tổng'));
      top1.appendChild(E('div', 'gx-score-big', `${sc}/10`));
      top1.appendChild(E('div', 'gx-score-sub', `Trình độ thể hiện: khoảng ${String(r.cefr || '?').toUpperCase()} · đề ${SPLV[t.lv - 1]}`));
      if (r.praise) top1.appendChild(E('div', 'gx-score-msg', '👍 ' + r.praise));
      out.appendChild(top1);
      const cr = E('div', 'tense-card'); cr.appendChild(E('h3', null, '📋 Theo từng tiêu chí'));
      [['Trả lời đúng đề', r.s_task, r.n_task], ['Trôi chảy, mạch lạc', r.s_flu, r.n_flu], ['Từ vựng', r.s_voc, r.n_voc], ['Ngữ pháp', r.s_gram, r.n_gram]].forEach(([nm, s3, n3]) => {
        const v = Math.max(0, Math.min(10, +s3 || 0)), row = E('div', 'db-sk');
        const h = E('div', 'db-sk-h'); h.appendChild(E('span', 'db-sk-n', nm)); h.appendChild(E('span', 'db-sk-v', `${Math.round(v * 10) / 10}/10`)); row.appendChild(h);
        const b2 = E('div', 'db-bar wr-bar'); const f = E('span', 'db-fill'); f.style.width = v * 10 + '%'; b2.appendChild(f); row.appendChild(b2);
        if (n3) row.appendChild(E('div', 'db-sk-d', n3)); cr.appendChild(row);
      });
      cr.appendChild(E('div', 'rv-note', 'AI chỉ đọc lời đã được chép lại nên không chấm phát âm. Để luyện phát âm, dùng tab Phát âm hoặc Shadowing.'));
      out.appendChild(cr);
      const errs = (Array.isArray(r.errors) ? r.errors : []).filter(x => x && x.wrong && x.right && String(x.wrong).trim() !== String(x.right).trim() && txt.includes(String(x.wrong)));
      if (errs.length) {
        const ec = E('div', 'tense-card'); ec.appendChild(E('h3', null, `✏️ ${errs.length} lỗi cần sửa`));
        const ol = E('ol', 'wr-errs');
        errs.forEach(x => { const li = E('li'); li.appendChild(E('s', null, x.wrong)); li.appendChild(document.createTextNode(' → ')); li.appendChild(E('b', null, x.right)); if (x.why) li.appendChild(E('div', 'wr-why', x.why)); ol.appendChild(li);
          try { if (window.mkAdd) window.mkAdd({ k: 'spk|' + t.id + '|' + String(x.wrong).toLowerCase().slice(0, 80), src: 'talk', cat: 'Nói theo đề · ' + t.t, mode: 'fix', p: x.wrong, a: [x.right], why: x.why || '' }); } catch (e) {} });
        ec.appendChild(ol); ec.appendChild(E('div', 'rv-note', 'Các lỗi đã được ghi vào 📕 Sổ lỗi.'));
        out.appendChild(ec);
      }
      if (r.improved) { const ic = E('div', 'tense-card'); const h = E('div', 'wr-sh'); h.appendChild(E('h3', null, '✨ Cách nói tự nhiên hơn')); const p3 = E('button', 'btn-ghost', '🔊 Nghe'); p3.type = 'button'; p3.addEventListener('click', () => say(String(r.improved))); h.appendChild(p3); ic.appendChild(h); ic.appendChild(E('p', 'wr-sp', String(r.improved))); out.appendChild(ic); }
      if (Array.isArray(r.tips) && r.tips.length) { const tcd = E('div', 'tense-card'); tcd.appendChild(E('h3', null, '💡 Lần sau nên')); const u2 = E('ul', 'wr-ol'); r.tips.slice(0, 4).forEach(x => u2.appendChild(E('li', null, String(x)))); tcd.appendChild(u2); out.appendChild(tcd); }
      try { top1.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {}
    });
  }
  window.spOpen = id => { const t = SP_TASKS.find(x => x.id === id); if (t) spTask(t); else spHome(); };
  window.talkOpen = id => { const s = TALK_SCENES.find(x => x.id === id); if (s) intro(s); else home(); };
  // v146: các tab khác (Viết theo đề, Dịch) gọi AI qua cùng khoá / nhà cung cấp đã cài ở đây
  window.aiAPI = {
    hasKey: () => !!aiKey(),
    name: () => PROV[prov()].name,
    errText: e => errText(e),
    setup: () => { const nav = document.querySelector('nav.tabbar button[data-page="page-talk"]'); if (nav) nav.click(); setTimeout(() => { aiHome({}); top(); }, 0); },
    json: async (sys, user, schema, o) => {
      o = o || {};
      const txt = await gem({ systemInstruction: { parts: [{ text: sys }] }, contents: [{ role: 'user', parts: [{ text: user }] }],
        generationConfig: { temperature: o.temperature != null ? o.temperature : 0.3, maxOutputTokens: o.max || 4096, responseMimeType: 'application/json', responseSchema: schema } }, true, o.onDelta, o.onRetry);
      return parseJSON(txt);
    }
  };
  document.querySelectorAll('nav.tabbar button').forEach(b => b.addEventListener('click', () => {
    if (b.dataset.page !== 'page-talk') { if (R || A) hush(); spStop(); return; }
    if (!R && !A && !root.querySelector('.tk-intro, .tk-ai')) home();
  }));
  home();
})();
