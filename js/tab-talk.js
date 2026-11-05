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
    let rec = null, finalText = '';
    const stop = () => { try { rec && rec.stop(); } catch (e) {} };
    const reset = () => { rec = null; btn.classList.remove('on'); btn.textContent = '🎤 Nhấn để nói'; };
    btn.disabled = !SR;
    btn.addEventListener('click', () => {
      if (rec) { stop(); return; }
      hush();
      finalText = ''; live.textContent = ''; live.className = 'tk-live';
      try {
        rec = new SR();
        rec.lang = 'en-US'; rec.interimResults = true; rec.maxAlternatives = 1; rec.continuous = false;
      } catch (e) { live.textContent = 'Không mở được micro.'; return; }
      btn.classList.add('on'); btn.textContent = '⏹ Đang nghe… nhấn để dừng';
      rec.onresult = ev => {
        let interim = '';
        for (let i = ev.resultIndex; i < ev.results.length; i++) {
          const r = ev.results[i]; if (r.isFinal) finalText += r[0].transcript + ' '; else interim += r[0].transcript;
        }
        live.textContent = (finalText + interim).trim();
      };
      rec.onerror = ev => {
        const er = ev && ev.error;
        live.className = 'tk-live err';
        live.textContent = er === 'not-allowed' || er === 'service-not-allowed' ? 'Bạn chưa cho phép dùng micro. Bật quyền micro cho trang này, hoặc gõ câu trả lời.'
          : er === 'no-speech' ? 'Chưa nghe thấy gì. Nhấn micro rồi nói to, rõ hơn nhé.'
          : er === 'network' ? 'Nhận giọng nói cần mạng. Kiểm tra kết nối, hoặc gõ câu trả lời.' : 'Micro gặp lỗi. Thử lại hoặc gõ câu trả lời.';
      };
      rec.onend = () => {
        reset();
        const t = (finalText || live.textContent || '').trim();
        if (t && !live.classList.contains('err')) { live.textContent = ''; onText(t); }
      };
      try { rec.start(); } catch (e) { reset(); }
    });
    row.addEventListener('submit', e => { e.preventDefault(); const t = inp.value.trim(); if (!t) { inp.focus(); return; } inp.value = ''; stop(); onText(t); });
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
    modes.appendChild(m1); modes.appendChild(m2);
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
    const shape = sc ? '\nJSON keys, in this order: ' + (sc.propertyOrdering || Object.keys(sc.properties)).map(k => sc.properties[k].type === 'ARRAY' ? `"${k}": [strings]` : `"${k}": string`).join(', ') + '.' : '';
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
      const req = { model, messages: toMessages(body), max_completion_tokens: re ? 2048 : (gc.maxOutputTokens || 1024) };
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
  window.talkOpen = id => { const s = TALK_SCENES.find(x => x.id === id); if (s) intro(s); else home(); };
  document.querySelectorAll('nav.tabbar button').forEach(b => b.addEventListener('click', () => {
    if (b.dataset.page !== 'page-talk') { if (R || A) hush(); return; }
    if (!R && !A && !root.querySelector('.tk-intro, .tk-ai')) home();
  }));
  home();
})();
