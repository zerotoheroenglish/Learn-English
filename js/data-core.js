const COLLOCATIONS = [
  { id: "make", group: "Make + danh từ", note: "Make: tạo ra, làm ra một thứ gì đó.",
    items: [
      { p: "make a decision", m: "đưa ra quyết định", ex: "We need to make a decision today." },
      { p: "make a mistake", m: "mắc lỗi", ex: "Everyone makes mistakes when learning." },
      { p: "make money", m: "kiếm tiền", ex: "He makes money by teaching online." },
      { p: "make friends", m: "kết bạn", ex: "She makes friends easily." },
      { p: "make progress", m: "tiến bộ", ex: "You are making good progress in English." },
      { p: "make an effort", m: "nỗ lực", ex: "Please make an effort to arrive on time." },
      { p: "make a plan", m: "lập kế hoạch", ex: "Let's make a plan for the weekend." },
      { p: "make noise", m: "làm ồn", ex: "Don't make noise in the library." },
      { p: "make a phone call", m: "gọi điện thoại", ex: "I need to make a phone call." },
      { p: "make sure", m: "đảm bảo, chắc chắn", ex: "Make sure you lock the door." }
    ] },
  { id: "do", group: "Do + danh từ", note: "Do: thực hiện một công việc, hoạt động.",
    items: [
      { p: "do homework", m: "làm bài tập về nhà", ex: "I do my homework after dinner." },
      { p: "do the housework", m: "làm việc nhà", ex: "We do the housework on Sundays." },
      { p: "do the shopping", m: "đi mua sắm, đi chợ", ex: "My mother does the shopping every Saturday." },
      { p: "do exercise", m: "tập thể dục", ex: "You should do exercise every day." },
      { p: "do your best", m: "cố gắng hết sức", ex: "Just do your best in the exam." },
      { p: "do business", m: "làm ăn, kinh doanh", ex: "They do business with Japan." },
      { p: "do someone a favor", m: "giúp ai một việc", ex: "Can you do me a favor?" },
      { p: "do the dishes", m: "rửa bát", ex: "It's your turn to do the dishes." }
    ] },
  { id: "takegetbring", group: "Take / Get / Bring + từ", note: "Take: lấy, dành, thực hiện · Get: trở nên, nhận được, đạt được · Bring: mang đến, mang lại.",
    items: [
      { p: "take a photo", m: "chụp ảnh", ex: "Can you take a photo of us?" },
      { p: "take a break", m: "nghỉ giải lao", ex: "Let's take a break for ten minutes." },
      { p: "take a shower", m: "tắm vòi sen", ex: "I take a shower every morning." },
      { p: "take a seat", m: "ngồi xuống", ex: "Please take a seat." },
      { p: "take an exam", m: "đi thi", ex: "She will take an exam next week." },
      { p: "take care of", m: "chăm sóc", ex: "She takes care of her grandmother." },
      { p: "take time", m: "mất thời gian", ex: "Learning a language takes time." },
      { p: "take part in", m: "tham gia", ex: "He took part in the competition." },
      { p: "get married", m: "kết hôn", ex: "They got married last year." },
      { p: "get ready", m: "chuẩn bị sẵn sàng", ex: "Get ready, we're leaving soon." },
      { p: "get lost", m: "bị lạc", ex: "We got lost in the old town." },
      { p: "get a job", m: "kiếm được việc làm", ex: "She got a job at a bank." },
      { p: "get better", m: "khá hơn, tiến bộ hơn", ex: "Your English is getting better." },
      { p: "get home", m: "về đến nhà", ex: "What time did you get home?" },
      { p: "get angry", m: "nổi giận", ex: "Don't get angry so easily." },
      { p: "bring an umbrella", m: "mang theo ô", ex: "Don't forget to bring an umbrella." },
      { p: "bring good luck", m: "mang lại may mắn", ex: "Some people believe cats bring good luck." },
      { p: "bring back memories", m: "gợi lại kỷ niệm", ex: "This song brings back memories of my childhood." },
      { p: "bring up", m: "nuôi nấng / nêu ra (vấn đề)", ex: "She was brought up by her grandparents." },
      { p: "bring people together", m: "gắn kết mọi người", ex: "Music brings people together." },
      { p: "bring about", m: "gây ra, mang lại (sự thay đổi)", ex: "The new law brought about many changes." },
      { p: "bring something to an end", m: "chấm dứt điều gì", ex: "They finally brought the argument to an end." }
    ] },
  { id: "have", group: "Have + danh từ", note: "Have: có, trải qua, dùng (bữa ăn).",
    items: [
      { p: "have breakfast", m: "ăn sáng", ex: "We have breakfast at 7 a.m." },
      { p: "have a good time", m: "có khoảng thời gian vui vẻ", ex: "Did you have a good time at the party?" },
      { p: "have a problem", m: "gặp vấn đề", ex: "I have a problem with my phone." },
      { p: "have a look", m: "xem qua", ex: "Can I have a look at your notes?" },
      { p: "have fun", m: "vui chơi", ex: "Have fun on your trip!" },
      { p: "have an idea", m: "có ý tưởng", ex: "I have an idea for the project." },
      { p: "have a headache", m: "bị đau đầu", ex: "I have a headache today." }
    ] },
  {"id": "break", "group": "Break + danh từ", "note": "Break: làm vỡ, phá vỡ, cắt ngang.", "items": [{"p": "break the rules", "m": "phạm luật, vi phạm quy định", "ex": "You will be punished if you break the rules."}, {"p": "break a promise", "m": "thất hứa", "ex": "He never breaks a promise."}, {"p": "break the news", "m": "báo tin (thường là tin xấu)", "ex": "Who will break the news to her?"}, {"p": "break a record", "m": "phá kỷ lục", "ex": "She broke the world record last year."}, {"p": "break the ice", "m": "phá tan sự ngượng ngùng", "ex": "He told a joke to break the ice."}, {"p": "break a habit", "m": "bỏ một thói quen", "ex": "It's hard to break a bad habit."}, {"p": "break your leg", "m": "bị gãy chân", "ex": "He broke his leg playing football."}]},
  {"id": "pay", "group": "Pay + danh từ", "note": "Pay: trả, dành cho.", "items": [{"p": "pay attention to", "m": "chú ý đến", "ex": "Please pay attention to the teacher."}, {"p": "pay a visit", "m": "ghé thăm", "ex": "We paid a visit to our grandparents."}, {"p": "pay the bill", "m": "thanh toán hoá đơn", "ex": "Let me pay the bill tonight."}, {"p": "pay in cash", "m": "trả bằng tiền mặt", "ex": "Can I pay in cash?"}, {"p": "pay a compliment", "m": "khen ngợi", "ex": "He paid her a compliment on her dress."}, {"p": "pay back", "m": "trả lại (tiền)", "ex": "I'll pay you back next week."}]},
  {"id": "keep", "group": "Keep + từ", "note": "Keep: giữ, duy trì.", "items": [{"p": "keep a secret", "m": "giữ bí mật", "ex": "Can you keep a secret?"}, {"p": "keep in touch", "m": "giữ liên lạc", "ex": "Let's keep in touch after graduation."}, {"p": "keep calm", "m": "giữ bình tĩnh", "ex": "Keep calm and try again."}, {"p": "keep a promise", "m": "giữ lời hứa", "ex": "She always keeps her promises."}, {"p": "keep an eye on", "m": "để mắt tới, trông chừng", "ex": "Could you keep an eye on my bag?"}, {"p": "keep fit", "m": "giữ dáng, giữ sức khỏe", "ex": "I swim every day to keep fit."}, {"p": "keep a diary", "m": "viết nhật ký", "ex": "She has kept a diary since she was ten."}]},
  {"id": "catch", "group": "Catch + danh từ", "note": "Catch: bắt, bắt kịp, mắc phải.", "items": [{"p": "catch a cold", "m": "bị cảm lạnh", "ex": "I caught a cold last week."}, {"p": "catch a bus", "m": "bắt xe buýt", "ex": "I need to catch the bus at 7."}, {"p": "catch fire", "m": "bắt lửa, bốc cháy", "ex": "The old house caught fire."}, {"p": "catch someone's attention", "m": "thu hút sự chú ý của ai", "ex": "The bright poster caught my attention."}, {"p": "catch up with", "m": "theo kịp", "ex": "Walk slower so I can catch up with you."}]},
  {"id": "comego", "group": "Come / Go + từ", "note": "Những cụm cố định với come và go.", "items": [{"p": "come true", "m": "trở thành sự thật", "ex": "I hope your dreams come true."}, {"p": "come first", "m": "được ưu tiên hàng đầu", "ex": "Your health should come first."}, {"p": "come to an end", "m": "kết thúc", "ex": "The holiday came to an end."}, {"p": "go wrong", "m": "trục trặc, hỏng", "ex": "Everything went wrong today."}, {"p": "go shopping", "m": "đi mua sắm", "ex": "Let's go shopping this weekend."}, {"p": "go on holiday", "m": "đi nghỉ", "ex": "We go on holiday every summer."}, {"p": "go missing", "m": "bị thất lạc, mất tích", "ex": "My keys have gone missing."}, {"p": "go to bed", "m": "đi ngủ", "ex": "I usually go to bed at 11."}]},
  {"id": "timemoney", "group": "Thời gian & tiền bạc", "note": "Các động từ hay đi với time và money.", "items": [{"p": "save time", "m": "tiết kiệm thời gian", "ex": "Taking a taxi will save time."}, {"p": "waste time", "m": "lãng phí thời gian", "ex": "Don't waste time on social media."}, {"p": "spend time", "m": "dành thời gian", "ex": "I spend time with my family on Sundays."}, {"p": "kill time", "m": "giết thời gian", "ex": "We played cards to kill time."}, {"p": "save money", "m": "tiết kiệm tiền", "ex": "She is saving money for a new laptop."}, {"p": "spend money on", "m": "tiêu tiền vào", "ex": "He spends a lot of money on clothes."}, {"p": "borrow money", "m": "vay tiền", "ex": "Can I borrow some money?"}]},
  { id: "adjnoun", group: "Cụm danh từ", note: "Những cặp tính từ và danh từ người bản xứ hay dùng.",
    items: [
      { p: "heavy rain", m: "mưa to", ex: "Heavy rain fell all night." },
      { p: "strong coffee", m: "cà phê đậm", ex: "I need a cup of strong coffee." },
      { p: "fast food", m: "đồ ăn nhanh", ex: "Too much fast food is unhealthy." },
      { p: "high price", m: "giá cao", ex: "The high price surprised everyone." },
      { p: "close friend", m: "bạn thân", ex: "She is my close friend." },
      { p: "heavy traffic", m: "giao thông đông đúc", ex: "There is heavy traffic in the city center." },
      { p: "bad habit", m: "thói quen xấu", ex: "Smoking is a bad habit." },
      { p: "hard work", m: "sự chăm chỉ", ex: "Success comes from hard work." },
      { p: "free time", m: "thời gian rảnh", ex: "What do you do in your free time?" },
      { p: "deep sleep", m: "giấc ngủ sâu", ex: "He fell into a deep sleep." }
    ] },
  { id: "adjprep", group: "Tính từ + giới từ", note: "Tính từ luôn đi kèm một giới từ cố định.",
    items: [
      { p: "interested in", m: "quan tâm, thích thú", ex: "I'm interested in music." },
      { p: "good at", m: "giỏi về", ex: "She is good at math." },
      { p: "afraid of", m: "sợ", ex: "He is afraid of dogs." },
      { p: "proud of", m: "tự hào về", ex: "We are proud of you." },
      { p: "tired of", m: "chán, mệt mỏi vì", ex: "I'm tired of waiting." },
      { p: "famous for", m: "nổi tiếng về", ex: "Hue is famous for its food." },
      { p: "different from", m: "khác với", ex: "This book is different from that one." },
      { p: "worried about", m: "lo lắng về", ex: "She is worried about her exam." },
      { p: "responsible for", m: "chịu trách nhiệm về", ex: "Who is responsible for this?" },
      { p: "similar to", m: "giống với", ex: "My bag is similar to yours." }
    ] },
  { id: "verbprep", group: "Cụm động từ", note: "Động từ đi kèm giới từ cố định trước tân ngữ.",
    items: [
      { p: "listen to", m: "nghe", ex: "I like to listen to music." },
      { p: "depend on", m: "phụ thuộc vào", ex: "It depends on the weather." },
      { p: "wait for", m: "chờ đợi", ex: "Please wait for me here." },
      { p: "belong to", m: "thuộc về", ex: "This bag belongs to Lan." },
      { p: "agree with", m: "đồng ý với", ex: "I agree with you." },
      { p: "think about", m: "nghĩ về", ex: "I'm thinking about my future." },
      { p: "apply for", m: "nộp đơn xin", ex: "She applied for a new job." },
      { p: "arrive at", m: "đến (một nơi nhỏ)", ex: "We arrived at the station early." },
      { p: "pay for", m: "trả tiền cho", ex: "I'll pay for dinner." },
      { p: "look at", m: "nhìn vào", ex: "Look at the board, please." }
    ] },
  { id: "timeprep", group: "Giới từ thời gian (in / on / at)", note: "AT + giờ, thời điểm · ON + ngày, thứ · IN + tháng, năm, mùa, buổi.",
    items: [
      { p: "at 7 o'clock", m: "lúc 7 giờ", ex: "The class starts at 7 o'clock." },
      { p: "at night", m: "vào ban đêm", ex: "I usually read at night." },
      { p: "at noon", m: "vào buổi trưa", ex: "We have lunch at noon." },
      { p: "at the weekend", m: "vào cuối tuần (Anh-Anh)", ex: "I relax at the weekend." },
      { p: "on Monday", m: "vào thứ Hai", ex: "I have English class on Monday." },
      { p: "on my birthday", m: "vào ngày sinh nhật của tôi", ex: "I got a gift on my birthday." },
      { p: "on May 5th", m: "vào ngày 5 tháng 5", ex: "The exam is on May 5th." },
      { p: "in the morning", m: "vào buổi sáng", ex: "I drink coffee in the morning." },
      { p: "in the afternoon", m: "vào buổi chiều", ex: "She studies in the afternoon." },
      { p: "in the evening", m: "vào buổi tối", ex: "We watch TV in the evening." },
      { p: "in July", m: "vào tháng Bảy", ex: "My holiday starts in July." },
      { p: "in 2026", m: "vào năm 2026", ex: "He graduated in 2026." },
      { p: "in summer", m: "vào mùa hè", ex: "It is very hot in summer." }
    ] },
  { id: "time", group: "Cụm từ chỉ thời gian", note: "Các cụm hay dùng để nói khi nào việc gì xảy ra — gợi ý luôn thì của câu.",
    items: [
      { p: "right now", m: "ngay bây giờ", ex: "I'm busy right now." },
      { p: "at the moment", m: "lúc này, hiện tại", ex: "She is working at the moment." },
      { p: "these days", m: "dạo này", ex: "Prices are high these days." },
      { p: "nowadays", m: "ngày nay", ex: "Nowadays everyone has a smartphone." },
      { p: "yesterday", m: "hôm qua", ex: "I met him yesterday." },
      { p: "the day before yesterday", m: "hôm kia", ex: "She arrived the day before yesterday." },
      { p: "tomorrow", m: "ngày mai", ex: "See you tomorrow." },
      { p: "the day after tomorrow", m: "ngày kia", ex: "We leave the day after tomorrow." },
      { p: "last week", m: "tuần trước", ex: "I visited Hanoi last week." },
      { p: "next month", m: "tháng sau", ex: "I will start a new job next month." },
      { p: "two years ago", m: "hai năm trước", ex: "I moved here two years ago." },
      { p: "so far", m: "cho đến nay", ex: "So far, everything is fine." },
      { p: "up to now", m: "cho tới bây giờ", ex: "Up to now, nobody has called." },
      { p: "for a long time", m: "trong một thời gian dài", ex: "I haven't seen her for a long time." },
      { p: "since 2020", m: "kể từ năm 2020", ex: "He has lived here since 2020." },
      { p: "in the past", m: "trong quá khứ", ex: "In the past, people walked everywhere." },
      { p: "in the future", m: "trong tương lai", ex: "I want to travel more in the future." },
      { p: "at the same time", m: "cùng lúc", ex: "They arrived at the same time." },
      { p: "on time", m: "đúng giờ", ex: "The train left on time." },
      { p: "in time", m: "kịp lúc", ex: "We got there just in time." },
      { p: "in the end", m: "cuối cùng", ex: "In the end, we decided to stay." },
      { p: "at the end of", m: "vào cuối (tháng, năm…)", ex: "I'll pay you at the end of the month." },
      { p: "all day long", m: "suốt cả ngày", ex: "It rained all day long." },
      { p: "the whole night", m: "cả đêm", ex: "The baby cried the whole night." }
    ] },
  { id: "freq", group: "Cụm từ chỉ tần suất", note: "Nói việc gì xảy ra thường xuyên đến mức nào — hay đi với thì hiện tại đơn.",
    items: [
      { p: "every day", m: "mỗi ngày", ex: "I practice English every day." },
      { p: "every other day", m: "cách ngày", ex: "She goes jogging every other day." },
      { p: "once a week", m: "một lần một tuần", ex: "We eat out once a week." },
      { p: "twice a month", m: "hai lần một tháng", ex: "I call my parents twice a month." },
      { p: "three times a year", m: "ba lần một năm", ex: "They travel three times a year." },
      { p: "from time to time", m: "thỉnh thoảng", ex: "I go to the cinema from time to time." },
      { p: "now and then", m: "đôi khi", ex: "We meet now and then." },
      { p: "once in a while", m: "thi thoảng, lâu lâu", ex: "I eat fast food once in a while." },
      { p: "most of the time", m: "hầu hết thời gian", ex: "Most of the time, he is very calm." },
      { p: "all the time", m: "lúc nào cũng", ex: "My phone rings all the time." },
      { p: "hardly ever", m: "hầu như không bao giờ", ex: "She hardly ever gets angry." }
    ] },
  {"id": "nounprep", "group": "Danh từ + giới từ", "note": "Danh từ đi với giới từ cố định.", "items": [{"p": "reason for", "m": "lý do cho", "ex": "What is the reason for your absence?"}, {"p": "interest in", "m": "sự quan tâm đến", "ex": "He has a strong interest in history."}, {"p": "answer to", "m": "câu trả lời cho", "ex": "I don't know the answer to this question."}, {"p": "solution to", "m": "giải pháp cho", "ex": "We need a solution to this problem."}, {"p": "increase in", "m": "sự tăng lên về", "ex": "There is an increase in prices."}, {"p": "advantage of", "m": "lợi thế của", "ex": "One advantage of living here is the fresh air."}, {"p": "effect on", "m": "ảnh hưởng lên", "ex": "Stress has a bad effect on health."}, {"p": "difference between", "m": "sự khác nhau giữa", "ex": "What is the difference between these two words?"}]},
  {"id": "advadj", "group": "Trạng từ + tính từ", "note": "Trạng từ đứng trước tính từ để nhấn mạnh mức độ.", "items": [{"p": "highly recommended", "m": "rất được khuyên dùng", "ex": "This restaurant is highly recommended."}, {"p": "completely different", "m": "hoàn toàn khác", "ex": "My sister is completely different from me."}, {"p": "absolutely right", "m": "hoàn toàn đúng", "ex": "You are absolutely right."}, {"p": "fully aware", "m": "hoàn toàn nhận thức được", "ex": "I am fully aware of the risks."}, {"p": "deeply sorry", "m": "vô cùng xin lỗi", "ex": "I am deeply sorry for the mistake."}, {"p": "perfectly normal", "m": "hoàn toàn bình thường", "ex": "It's perfectly normal to feel nervous."}, {"p": "bitterly cold", "m": "lạnh buốt", "ex": "It was bitterly cold last night."}, {"p": "well known", "m": "nổi tiếng, được nhiều người biết", "ex": "Hoi An is well known for its lanterns."}]},
  {"id": "verbadv", "group": "Động từ + trạng từ", "note": "Động từ đi với trạng từ chỉ cách thức thường gặp.", "items": [{"p": "work hard", "m": "làm việc chăm chỉ", "ex": "She works hard to support her family."}, {"p": "speak fluently", "m": "nói trôi chảy", "ex": "He speaks English fluently."}, {"p": "sleep soundly", "m": "ngủ say, ngủ ngon", "ex": "The baby slept soundly all night."}, {"p": "rain heavily", "m": "mưa nặng hạt", "ex": "It rained heavily yesterday."}, {"p": "drive carefully", "m": "lái xe cẩn thận", "ex": "Please drive carefully."}, {"p": "smile warmly", "m": "mỉm cười ấm áp", "ex": "She smiled warmly at us."}, {"p": "listen carefully", "m": "nghe kỹ", "ex": "Listen carefully to the instructions."}]},
  {"id": "study", "group": "Học tập", "note": "Cụm từ hay dùng khi nói về việc học.", "items": [{"p": "pass an exam", "m": "thi đỗ", "ex": "She passed the exam with high marks."}, {"p": "fail an exam", "m": "thi trượt", "ex": "He failed the exam because he didn't study."}, {"p": "take notes", "m": "ghi chép", "ex": "Students take notes during the lecture."}, {"p": "do research", "m": "nghiên cứu", "ex": "She is doing research on climate change."}, {"p": "get a degree", "m": "lấy bằng", "ex": "He got a degree in economics."}, {"p": "attend a class", "m": "tham dự lớp học", "ex": "I attend an English class every evening."}, {"p": "learn by heart", "m": "học thuộc lòng", "ex": "We had to learn the poem by heart."}]},
  {"id": "work", "group": "Công việc", "note": "Cụm từ hay dùng nơi làm việc.", "items": [{"p": "meet a deadline", "m": "kịp hạn chót", "ex": "We worked late to meet the deadline."}, {"p": "attend a meeting", "m": "dự cuộc họp", "ex": "I have to attend a meeting at 9."}, {"p": "make an appointment", "m": "đặt lịch hẹn", "ex": "I'd like to make an appointment with the doctor."}, {"p": "run a business", "m": "điều hành việc kinh doanh", "ex": "Her parents run a small business."}, {"p": "work overtime", "m": "làm thêm giờ", "ex": "He often works overtime."}, {"p": "earn a living", "m": "kiếm sống", "ex": "She earns a living as a teacher."}, {"p": "get promoted", "m": "được thăng chức", "ex": "He got promoted last month."}, {"p": "take a day off", "m": "nghỉ một ngày", "ex": "I'm taking a day off tomorrow."}]},
  {"id": "health", "group": "Sức khỏe & cảm xúc", "note": "Cụm từ nói về cơ thể và cảm xúc.", "items": [{"p": "feel sick", "m": "thấy mệt, buồn nôn", "ex": "I feel sick after eating too much."}, {"p": "lose weight", "m": "giảm cân", "ex": "He wants to lose weight."}, {"p": "put on weight", "m": "tăng cân", "ex": "I put on weight during the holidays."}, {"p": "lose your temper", "m": "nổi nóng", "ex": "He lost his temper with the children."}, {"p": "burst into tears", "m": "bật khóc", "ex": "She burst into tears when she heard the news."}, {"p": "fall asleep", "m": "ngủ thiếp đi", "ex": "I fell asleep on the sofa."}, {"p": "fall in love", "m": "phải lòng", "ex": "They fell in love at first sight."}, {"p": "get some rest", "m": "nghỉ ngơi", "ex": "You should get some rest."}]},
  {"id": "everyday", "group": "Cụm từ giao tiếp thông dụng", "note": "Những cụm cố định dùng rất nhiều khi nói chuyện.", "items": [{"p": "by the way", "m": "nhân tiện", "ex": "By the way, have you eaten yet?"}, {"p": "of course", "m": "tất nhiên", "ex": "Of course I will help you."}, {"p": "at least", "m": "ít nhất", "ex": "It will take at least two hours."}, {"p": "in fact", "m": "thực ra", "ex": "In fact, I've never been there."}, {"p": "as soon as possible", "m": "càng sớm càng tốt", "ex": "Please reply as soon as possible."}, {"p": "on purpose", "m": "cố ý", "ex": "He broke the glass on purpose."}, {"p": "by mistake", "m": "do nhầm lẫn", "ex": "I took your umbrella by mistake."}, {"p": "in a hurry", "m": "đang vội", "ex": "Sorry, I'm in a hurry."}, {"p": "for example", "m": "ví dụ", "ex": "Some fruits, for example oranges, are rich in vitamin C."}, {"p": "in my opinion", "m": "theo ý kiến của tôi", "ex": "In my opinion, the film was too long."}, {"p": "no problem", "m": "không sao, không có gì", "ex": "No problem, I can wait."}, {"p": "make yourself at home", "m": "cứ tự nhiên như ở nhà", "ex": "Come in and make yourself at home."}]},
  { id: "phrasal", group: "Cụm động từ (Phrasal verbs)", note: "Động từ + tiểu từ tạo nghĩa mới, rất hay dùng khi nói.",
    items: [
      { p: "give up", m: "từ bỏ", ex: "Never give up on your dreams." },
      { p: "look for", m: "tìm kiếm", ex: "I'm looking for my keys." },
      { p: "find out", m: "tìm ra, phát hiện", ex: "I found out the truth yesterday." },
      { p: "turn on", m: "bật (thiết bị)", ex: "Turn on the lights, please." },
      { p: "turn off", m: "tắt (thiết bị)", ex: "Turn off your phone in class." },
      { p: "get up", m: "thức dậy", ex: "I get up at six every day." },
      { p: "put on", m: "mặc vào", ex: "Put on your jacket, it's cold." },
      { p: "take off", m: "cởi ra / cất cánh", ex: "The plane takes off at noon." },
      { p: "look after", m: "chăm sóc", ex: "Can you look after my cat?" },
      { p: "run out of", m: "hết, cạn", ex: "We ran out of milk." },
      { p: "come back", m: "quay lại", ex: "Come back soon!" },
      { p: "set up", m: "thành lập, cài đặt", ex: "They set up a new company." }
    ] }
];
const GRAMMAR_TOPICS = [
 {
  "id": "thereis",
  "title": "There is / There are",
  "en": "There is / There are",
  "intro": "Dùng để nói có cái gì đó tồn tại ở đâu đó. Động từ be chia theo danh từ đứng ngay sau.",
  "sections": [
   {
    "name": "Câu khẳng định",
    "formula": "There is + danh từ số ít / không đếm được · There are + danh từ số nhiều",
    "usage": "Chọn is hay are theo danh từ đứng ngay sau. Dạng viết tắt: there's.",
    "examples": [
     {
      "en": "There is a cat under the table.",
      "vi": "Có một con mèo dưới gầm bàn."
     },
     {
      "en": "There is some milk in the fridge.",
      "vi": "Có ít sữa trong tủ lạnh."
     },
     {
      "en": "There are three students in the room.",
      "vi": "Có ba học sinh trong phòng."
     }
    ]
   },
   {
    "name": "Phủ định và câu hỏi",
    "table": {
     "head": [
      "Dạng",
      "Số ít / không đếm được",
      "Số nhiều"
     ],
     "rows": [
      [
       "Phủ định",
       "There isn't a bank near here.",
       "There aren't any chairs."
      ],
      [
       "Câu hỏi",
       "Is there a bank near here?",
       "Are there any chairs?"
      ],
      [
       "Trả lời ngắn",
       "Yes, there is. / No, there isn't.",
       "Yes, there are. / No, there aren't."
      ]
     ]
    }
   },
   {
    "name": "Hỏi số lượng",
    "formula": "How many + N số nhiều + are there …? · How much + N không đếm được + is there …?",
    "usage": "How many hỏi số lượng thứ đếm được, How much hỏi lượng thứ không đếm được.",
    "examples": [
     {
      "en": "How many people are there in your family?",
      "vi": "Gia đình bạn có bao nhiêu người?"
     },
     {
      "en": "How much water is there in the bottle?",
      "vi": "Trong chai còn bao nhiêu nước?"
     }
    ]
   },
   {
    "name": "Ở các thì khác",
    "table": {
     "head": [
      "Thì",
      "Số ít",
      "Số nhiều"
     ],
     "rows": [
      [
       "Quá khứ đơn",
       "There was a party last night.",
       "There were many people."
      ],
      [
       "Tương lai đơn",
       "There will be a test tomorrow.",
       "There will be two tests."
      ],
      [
       "Hiện tại hoàn thành",
       "There has been an accident.",
       "There have been many changes."
      ]
     ]
    }
   }
  ],
  "tips": [
   "Khi liệt kê nhiều thứ, be chia theo danh từ đầu tiên: \"There is a pen and two books on the desk.\"",
   "Không dùng \"have\" để nói ở đâu có cái gì: nói \"There is a park near my house\", không nói \"It has a park near my house\".",
   "There is / are giới thiệu thông tin mới. Khi nhắc lại thì dùng it / they: \"There is a dog outside. It is very big.\""
  ],
  "group": "basics"
 },
 {
  "id": "demonstratives",
  "title": "This / That / These / Those",
  "en": "Demonstratives",
  "intro": "Từ chỉ định dùng để chỉ người, vật ở gần hay ở xa người nói, số ít hay số nhiều.",
  "sections": [
   {
    "name": "Bảng tóm tắt",
    "table": {
     "head": [
      "Số",
      "Gần người nói",
      "Xa người nói"
     ],
     "rows": [
      [
       "Số ít",
       "this (này)",
       "that (kia, đó)"
      ],
      [
       "Số nhiều",
       "these (những … này)",
       "those (những … kia)"
      ]
     ]
    }
   },
   {
    "name": "Đứng trước danh từ",
    "formula": "this / that + N số ít · these / those + N số nhiều",
    "usage": "Đi kèm danh từ để chỉ rõ người, vật nào.",
    "examples": [
     {
      "en": "This book is mine.",
      "vi": "Cuốn sách này là của tôi."
     },
     {
      "en": "That house over there is very old.",
      "vi": "Ngôi nhà đằng kia rất cũ."
     },
     {
      "en": "These shoes are too small.",
      "vi": "Đôi giày này chật quá."
     },
     {
      "en": "Those people are my neighbors.",
      "vi": "Những người kia là hàng xóm của tôi."
     }
    ]
   },
   {
    "name": "Đứng một mình làm đại từ",
    "usage": "Thay cho danh từ đã rõ, hay dùng để giới thiệu hoặc hỏi.",
    "examples": [
     {
      "en": "This is my friend, Nam.",
      "vi": "Đây là bạn tôi, Nam."
     },
     {
      "en": "What is that?",
      "vi": "Kia là cái gì?"
     },
     {
      "en": "Are these yours?",
      "vi": "Mấy cái này có phải của bạn không?"
     }
    ]
   },
   {
    "name": "Nói về thời gian và ý kiến",
    "usage": "this dùng cho hiện tại hoặc sắp tới; that dùng cho quá khứ hoặc điều người khác vừa nói.",
    "examples": [
     {
      "en": "I'm busy this week.",
      "vi": "Tuần này tôi bận."
     },
     {
      "en": "Do you remember that day?",
      "vi": "Bạn còn nhớ ngày hôm đó không?"
     },
     {
      "en": "That's a good idea!",
      "vi": "Ý kiến hay đấy!"
     }
    ]
   },
   {
    "name": "Trả lời câu hỏi",
    "usage": "Trả lời câu hỏi có this / that thì dùng it; có these / those thì dùng they.",
    "examples": [
     {
      "en": "Is this your phone? – Yes, it is.",
      "vi": "Đây là điện thoại của bạn à? – Vâng, đúng rồi."
     },
     {
      "en": "Are those your keys? – No, they aren't.",
      "vi": "Kia có phải chìa khóa của bạn không? – Không phải."
     }
    ]
   }
  ],
  "tips": [
   "Số ít đi với is, số nhiều đi với are: \"This is…\", \"These are…\". Không nói \"These is\".",
   "Tự giới thiệu khi gọi điện thoại dùng this: \"Hello, this is Lan.\"",
   "that's là dạng viết tắt của that is. Không viết tắt this is."
  ],
  "group": "basics"
 },
 {
  "id": "prepositions",
  "group": "basics",
  "title": "Giới từ in / on / at / with / to / for / from",
  "en": "Prepositions",
  "intro": "Giới từ đứng trước danh từ, đại từ hoặc V-ing để chỉ thời gian, nơi chốn, hướng đi, mục đích… Đây là 7 giới từ dùng nhiều nhất.",
  "sections": [
   {
    "name": "In / On / At chỉ thời gian",
    "table": {
     "head": [
      "Giới từ",
      "Dùng với",
      "Ví dụ"
     ],
     "rows": [
      [
       "at",
       "giờ, thời điểm cụ thể, dịp lễ",
       "at 7 o'clock, at noon, at night, at Christmas"
      ],
      [
       "on",
       "thứ, ngày, ngày tháng cụ thể",
       "on Monday, on May 5th, on my birthday"
      ],
      [
       "in",
       "buổi, tháng, năm, mùa, khoảng thời gian",
       "in the morning, in July, in 2026, in summer, in two days"
      ]
     ]
    },
    "examples": [
     {
      "en": "The class starts at 7 o'clock.",
      "vi": "Lớp học bắt đầu lúc 7 giờ."
     },
     {
      "en": "We have a meeting on Friday.",
      "vi": "Chúng tôi có cuộc họp vào thứ Sáu."
     },
     {
      "en": "I was born in 1998.",
      "vi": "Tôi sinh năm 1998."
     }
    ]
   },
   {
    "name": "In / On / At chỉ nơi chốn",
    "table": {
     "head": [
      "Giới từ",
      "Dùng với",
      "Ví dụ"
     ],
     "rows": [
      [
       "at",
       "một điểm, địa chỉ có số nhà, nơi diễn ra hoạt động",
       "at the bus stop, at 25 Le Loi Street, at school, at work"
      ],
      [
       "on",
       "trên bề mặt, tầng nhà, tên đường, xe buýt / tàu / máy bay",
       "on the table, on the second floor, on Le Loi Street, on the bus"
      ],
      [
       "in",
       "bên trong một không gian, thành phố, quốc gia, ô tô / taxi",
       "in the room, in Hanoi, in Vietnam, in a car"
      ]
     ]
    },
    "examples": [
     {
      "en": "The book is on the table.",
      "vi": "Cuốn sách ở trên bàn."
     },
     {
      "en": "She lives in Da Nang.",
      "vi": "Cô ấy sống ở Đà Nẵng."
     },
     {
      "en": "I'll meet you at the cinema.",
      "vi": "Mình gặp bạn ở rạp chiếu phim nhé."
     }
    ]
   },
   {
    "name": "With: cùng, với, bằng, có",
    "usage": "Chỉ người đi cùng, dụng cụ dùng để làm việc gì, hoặc đặc điểm của người, vật.",
    "examples": [
     {
      "en": "I live with my parents.",
      "vi": "Tôi sống cùng bố mẹ."
     },
     {
      "en": "She cut the paper with scissors.",
      "vi": "Cô ấy cắt giấy bằng kéo."
     },
     {
      "en": "The girl with long hair is my sister.",
      "vi": "Cô gái tóc dài là em gái tôi."
     }
    ]
   },
   {
    "name": "To: đến, tới, cho",
    "usage": "Chỉ hướng đi tới đâu, người nhận, hoặc điểm kết thúc (đến lúc nào).",
    "examples": [
     {
      "en": "I go to school by bike.",
      "vi": "Tôi đi học bằng xe đạp."
     },
     {
      "en": "She gave the book to me.",
      "vi": "Cô ấy đưa cuốn sách cho tôi."
     },
     {
      "en": "The shop is open from 8 a.m. to 10 p.m.",
      "vi": "Cửa hàng mở cửa từ 8 giờ sáng đến 10 giờ tối."
     }
    ]
   },
   {
    "name": "For: cho, dành cho, trong khoảng, để",
    "usage": "Chỉ người được hưởng, mục đích, hoặc khoảng thời gian kéo dài.",
    "examples": [
     {
      "en": "This gift is for you.",
      "vi": "Món quà này dành cho bạn."
     },
     {
      "en": "I have lived here for five years.",
      "vi": "Tôi đã sống ở đây được năm năm."
     },
     {
      "en": "We went out for dinner.",
      "vi": "Chúng tôi ra ngoài ăn tối."
     }
    ]
   },
   {
    "name": "From: từ",
    "usage": "Chỉ nguồn gốc, nơi xuất phát, người gửi, hoặc thời điểm bắt đầu.",
    "examples": [
     {
      "en": "I'm from Vietnam.",
      "vi": "Tôi đến từ Việt Nam."
     },
     {
      "en": "I got a letter from my friend.",
      "vi": "Tôi nhận được thư của bạn tôi."
     },
     {
      "en": "He works from Monday to Friday.",
      "vi": "Anh ấy làm việc từ thứ Hai đến thứ Sáu."
     }
    ]
   }
  ],
  "tips": [
   "Không dùng giới từ trước next, last, this, every, today, tomorrow, yesterday: nói \"next Monday\", không nói \"on next Monday\".",
   "Phân biệt to và for: \"give it to me\" (đưa cho tôi, tôi là người nhận) khác \"buy it for me\" (mua giùm tôi).",
   "Phân biệt for và since: for + khoảng thời gian (for two years), since + mốc thời gian (since 2020).",
   "Cụm cố định nên học thuộc: at home, at night, in the morning, on time (đúng giờ), in time (kịp lúc)."
  ]
 },
 {
  "id": "passive",
  "title": "Câu bị động",
  "en": "Passive voice",
  "intro": "Dùng khi muốn nhấn mạnh hành động hoặc đối tượng chịu tác động, hoặc khi không biết, không cần nói ai làm.",
  "sections": [
   {
    "name": "Công thức chung",
    "formula": "Chủ ngữ + am/is/are + V3/V-ed (+ by + người làm) · Quá khứ: chủ ngữ + was/were + V3/V-ed · Tương lai: chủ ngữ + will be + V3/V-ed",
    "usage": "Tân ngữ của câu chủ động trở thành chủ ngữ. Động từ \"be\" chia theo thì của câu gốc.",
    "examples": [
     {
      "en": "They built this bridge in 1990. → This bridge was built in 1990.",
      "vi": "Họ xây cây cầu này năm 1990. → Cây cầu này được xây năm 1990."
     }
    ]
   },
   {
    "name": "Bị động theo từng thì",
    "table": {
     "head": [
      "Thì",
      "Công thức",
      "Ví dụ"
     ],
     "rows": [
      [
       "Hiện tại đơn",
       "am/is/are + V3",
       "English is spoken here."
      ],
      [
       "Hiện tại tiếp diễn",
       "am/is/are being + V3",
       "The room is being cleaned."
      ],
      [
       "Quá khứ đơn",
       "was/were + V3",
       "The letter was sent yesterday."
      ],
      [
       "Hiện tại hoàn thành",
       "have/has been + V3",
       "The work has been finished."
      ],
      [
       "Tương lai đơn",
       "will be + V3",
       "The results will be announced soon."
      ],
      [
       "Động từ khuyết thiếu",
       "can/must/should + be + V3",
       "This problem can be solved."
      ]
     ]
    }
   },
   {
    "name": "Khi nào dùng \"by\"",
    "usage": "Chỉ thêm \"by + người/vật thực hiện\" khi thông tin đó quan trọng. Bỏ các cụm như by people, by someone, by them.",
    "examples": [
     {
      "en": "Romeo and Juliet was written by Shakespeare.",
      "vi": "Romeo và Juliet do Shakespeare viết."
     },
     {
      "en": "My bike was stolen last night.",
      "vi": "Xe đạp của tôi bị lấy trộm tối qua."
     }
    ]
   }
  ],
  "tips": [
   "Chỉ động từ có tân ngữ mới chuyển sang bị động được: không nói \"It was happened\".",
   "Động từ bất quy tắc dùng dạng V3: write → written, make → made (xem tab Irregular verbs)."
  ],
  "group": "basics"
 },
 {
  "id": "conditional",
  "title": "Câu điều kiện",
  "en": "Conditionals",
  "intro": "Diễn tả một điều kiện và kết quả của nó. Có 4 loại chính, khác nhau ở mức độ có thật hay không.",
  "sections": [
   {
    "name": "Loại 0: sự thật hiển nhiên",
    "formula": "If + chủ ngữ + V (hiện tại), chủ ngữ + V (hiện tại)",
    "usage": "Quy luật tự nhiên, sự thật luôn đúng.",
    "examples": [
     {
      "en": "If you heat ice, it melts.",
      "vi": "Nếu bạn làm nóng đá, nó sẽ tan."
     }
    ]
   },
   {
    "name": "Loại 1: có thể xảy ra",
    "formula": "If + chủ ngữ + V (hiện tại đơn), chủ ngữ + will + V",
    "usage": "Điều kiện có thể xảy ra ở hiện tại hoặc tương lai.",
    "examples": [
     {
      "en": "If it rains, we will stay at home.",
      "vi": "Nếu trời mưa, chúng tôi sẽ ở nhà."
     }
    ]
   },
   {
    "name": "Loại 2: không có thật ở hiện tại",
    "formula": "If + chủ ngữ + V2 (be → were), chủ ngữ + would + V",
    "usage": "Giả định trái với hiện tại hoặc khó xảy ra. Với \"be\" dùng \"were\" cho mọi chủ ngữ.",
    "examples": [
     {
      "en": "If I were you, I would study harder.",
      "vi": "Nếu tôi là bạn, tôi sẽ học chăm hơn."
     },
     {
      "en": "If I had more money, I would buy a car.",
      "vi": "Nếu có nhiều tiền hơn, tôi sẽ mua xe hơi."
     }
    ]
   },
   {
    "name": "Loại 3: không có thật trong quá khứ",
    "formula": "If + chủ ngữ + had + V3, chủ ngữ + would have + V3",
    "usage": "Giả định trái với quá khứ, thường để nói điều tiếc nuối.",
    "examples": [
     {
      "en": "If you had told me, I would have helped you.",
      "vi": "Nếu bạn nói với tôi thì tôi đã giúp bạn rồi."
     }
    ]
   },
   {
    "name": "Unless = If … not",
    "formula": "Unless + I/you/we/they + V, … · Unless + he/she/it + V-s/es, …",
    "usage": "Unless nghĩa là \"trừ khi\", tương đương If … not.",
    "examples": [
     {
      "en": "You will be late unless you hurry.",
      "vi": "Bạn sẽ bị muộn trừ khi bạn nhanh lên."
     }
    ]
   }
  ],
  "tips": [
   "Không dùng \"will\" trong mệnh đề If: nói \"If it rains\", không nói \"If it will rain\".",
   "Có thể đổi chỗ hai mệnh đề. Khi mệnh đề If đứng đầu thì đặt dấu phẩy sau nó."
  ],
  "group": "basics"
 },
 {
  "id": "possessive-s",
  "title": "Sở hữu cách 's / s'",
  "en": "Possessive 's and s'",
  "intro": "Thêm 's vào sau người (hoặc con vật) để nói cái gì là của ai: Lan's bike = xe của Lan.",
  "sections": [
   {
    "name": "Cách viết",
    "formula": "Danh từ số ít + 's · Danh từ số nhiều tận cùng -s + ' · Danh từ số nhiều bất quy tắc + 's",
    "usage": "Dấu nháy đứng trước s khi danh từ số ít, và đứng sau s khi danh từ số nhiều đã có sẵn -s.",
    "table": {
     "head": [
      "Trường hợp",
      "Cách viết",
      "Ví dụ"
     ],
     "rows": [
      [
       "Người, con vật số ít",
       "+ 's",
       "Lan's bike · my brother's room"
      ],
      [
       "Tên tận cùng bằng s",
       "+ 's (hoặc chỉ ')",
       "James's car · James' car"
      ],
      [
       "Số nhiều đã có -s",
       "chỉ thêm '",
       "my parents' house · the boys' room"
      ],
      [
       "Số nhiều bất quy tắc",
       "+ 's",
       "the children's toys · women's clothes"
      ],
      [
       "Hai người cùng sở hữu",
       "'s ở người cuối",
       "Lan and Nam's house"
      ]
     ]
    },
    "examples": [
     {
      "en": "This is my sister's phone.",
      "vi": "Đây là điện thoại của chị tôi."
     },
     {
      "en": "The teachers' room is upstairs.",
      "vi": "Phòng giáo viên ở trên lầu."
     }
    ]
   },
   {
    "name": "Đồ vật thì dùng of",
    "formula": "the + danh từ + of + the + danh từ",
    "usage": "Với đồ vật, thường dùng of thay cho 's.",
    "examples": [
     {
      "en": "The door of the car is broken.",
      "vi": "Cửa xe bị hỏng."
     },
     {
      "en": "What is the name of this street?",
      "vi": "Con đường này tên gì?"
     }
    ]
   }
  ],
  "tips": [
   "'s còn là viết tắt của is: \"Lan's a doctor\" = Lan is a doctor, khác \"Lan's book\" (sách của Lan).",
   "its (của nó) không có dấu nháy; it's luôn là it is.",
   "Hỏi của ai bằng whose: \"Whose bag is this?\""
  ]
 },
 {
  "id": "frequency",
  "title": "Trạng từ chỉ tần suất",
  "en": "Adverbs and phrases of frequency",
  "intro": "Những từ cho biết việc gì xảy ra thường xuyên đến mức nào, và vị trí của chúng trong câu.",
  "sections": [
   {
    "name": "Thang tần suất",
    "table": {
     "head": [
      "Trạng từ",
      "Nghĩa",
      "Mức độ"
     ],
     "rows": [
      [
       "always",
       "luôn luôn",
       "100%"
      ],
      [
       "usually",
       "thường",
       "khoảng 90%"
      ],
      [
       "often",
       "hay, thường xuyên",
       "khoảng 70%"
      ],
      [
       "sometimes",
       "thỉnh thoảng",
       "khoảng 50%"
      ],
      [
       "rarely / seldom",
       "hiếm khi",
       "khoảng 10%"
      ],
      [
       "never",
       "không bao giờ",
       "0%"
      ]
     ]
    },
    "examples": [
     {
      "en": "I always have breakfast at home.",
      "vi": "Tôi luôn ăn sáng ở nhà."
     },
     {
      "en": "She rarely goes out on weekdays.",
      "vi": "Cô ấy hiếm khi ra ngoài vào ngày thường."
     }
    ]
   },
   {
    "name": "Đặt ở đâu trong câu",
    "formula": "Chủ ngữ + trạng từ + động từ thường · Chủ ngữ + am/is/are + trạng từ · Chủ ngữ + trợ động từ + trạng từ + động từ chính",
    "usage": "Đứng trước động từ thường, nhưng đứng sau động từ to be và sau trợ động từ.",
    "examples": [
     {
      "en": "He never drinks coffee at night.",
      "vi": "Anh ấy không bao giờ uống cà phê buổi tối."
     },
     {
      "en": "They are usually late.",
      "vi": "Họ thường đến trễ."
     },
     {
      "en": "I have never been to Japan.",
      "vi": "Tôi chưa bao giờ đến Nhật."
     }
    ]
   },
   {
    "name": "Cụm chỉ tần suất",
    "usage": "Cụm dài thường đứng đầu hoặc cuối câu, không đứng giữa như trạng từ.",
    "table": {
     "head": [
      "Cụm từ",
      "Nghĩa"
     ],
     "rows": [
      [
       "every day / every Monday",
       "mỗi ngày / mỗi thứ Hai"
      ],
      [
       "once a week",
       "một lần một tuần"
      ],
      [
       "twice a month",
       "hai lần một tháng"
      ],
      [
       "three times a year",
       "ba lần một năm"
      ],
      [
       "most days",
       "hầu như ngày nào cũng"
      ],
      [
       "from time to time",
       "thỉnh thoảng"
      ]
     ]
    },
    "examples": [
     {
      "en": "I go to the gym twice a week.",
      "vi": "Tôi đến phòng gym hai lần một tuần."
     },
     {
      "en": "Every Sunday we visit my grandparents.",
      "vi": "Chủ nhật nào chúng tôi cũng về thăm ông bà."
     }
    ]
   }
  ],
  "tips": [
   "never đã mang nghĩa phủ định, không dùng kèm not: \"I never don't go\" ✗.",
   "Hỏi tần suất bằng How often…?: \"How often do you exercise?\"",
   "sometimes có thể đứng đầu câu: \"Sometimes I walk to work.\""
  ]
 },
 {
  "id": "like-ing",
  "title": "like, love, hate + V-ing",
  "en": "like, hate, love + -ing",
  "intro": "Nói về sở thích: sau các động từ chỉ cảm xúc này, động từ theo sau thêm -ing.",
  "sections": [
   {
    "name": "Công thức",
    "formula": "I/You/We/They + love / like / enjoy / don't mind / don't like / hate + V-ing · He/She/It + loves / likes / enjoys / doesn't mind / doesn't like / hates + V-ing",
    "usage": "Dùng để nói thích hay không thích làm việc gì.",
    "table": {
     "head": [
      "Động từ",
      "Mức độ"
     ],
     "rows": [
      [
       "love + V-ing",
       "rất thích"
      ],
      [
       "like / enjoy + V-ing",
       "thích"
      ],
      [
       "don't mind + V-ing",
       "không ngại, cũng được"
      ],
      [
       "don't like + V-ing",
       "không thích"
      ],
      [
       "hate / can't stand + V-ing",
       "ghét, không chịu nổi"
      ]
     ]
    },
    "examples": [
     {
      "en": "I love listening to music.",
      "vi": "Tôi rất thích nghe nhạc."
     },
     {
      "en": "She hates getting up early.",
      "vi": "Cô ấy ghét phải dậy sớm."
     },
     {
      "en": "I don't mind waiting a few minutes.",
      "vi": "Tôi không ngại đợi vài phút."
     }
    ]
   },
   {
    "name": "Phủ định và câu hỏi",
    "formula": "I/You/We/They + don't like + V-ing · He/She/It + doesn't like + V-ing · Do/Does + chủ ngữ + like + V-ing?",
    "examples": [
     {
      "en": "Do you like cooking?",
      "vi": "Bạn có thích nấu ăn không?"
     },
     {
      "en": "He doesn't like working at night.",
      "vi": "Anh ấy không thích làm việc ban đêm."
     }
    ]
   }
  ],
  "tips": [
   "like + to V cũng đúng và nghĩa gần giống: \"I like to read before bed.\"",
   "would like + to V nghĩa là muốn, khác hẳn like + V-ing: \"I'd like to go\" = tôi muốn đi.",
   "Sau giới từ luôn dùng V-ing: \"I'm good at swimming.\""
  ]
 },
 {
  "id": "havegot",
  "title": "have got",
  "en": "have got",
  "intro": "Cách nói “có” rất thông dụng trong tiếng Anh-Anh, nghĩa giống have.",
  "sections": [
   {
    "name": "Công thức",
    "formula": "I/You/We/They + have got + … · He/She/It + has got + …",
    "usage": "Nói về sở hữu, quan hệ gia đình, ngoại hình, bệnh tật.",
    "table": {
     "head": [
      "Dạng",
      "Cách viết",
      "Viết tắt"
     ],
     "rows": [
      [
       "Khẳng định",
       "I have got a car",
       "I've got a car"
      ],
      [
       "Khẳng định (he/she/it)",
       "She has got a car",
       "She's got a car"
      ],
      [
       "Phủ định",
       "I have not got a car",
       "I haven't got a car"
      ],
      [
       "Phủ định (he/she/it)",
       "He has not got a car",
       "He hasn't got a car"
      ],
      [
       "Câu hỏi",
       "Have you got a car?",
       "Yes, I have. / No, I haven't."
      ]
     ]
    },
    "examples": [
     {
      "en": "I've got two brothers.",
      "vi": "Tôi có hai anh em trai."
     },
     {
      "en": "She hasn't got a bike.",
      "vi": "Cô ấy không có xe đạp."
     },
     {
      "en": "Have you got any questions?",
      "vi": "Bạn có câu hỏi nào không?"
     }
    ]
   },
   {
    "name": "have got hay have?",
    "usage": "Hai cách nói cùng nghĩa. have got hay dùng khi nói chuyện ở Anh; have dùng được ở mọi nơi và trang trọng hơn.",
    "table": {
     "head": [
      "have got (Anh, nói)",
      "have (chung, trang trọng hơn)"
     ],
     "rows": [
      [
       "I've got a headache.",
       "I have a headache."
      ],
      [
       "Have you got the time?",
       "Do you have the time?"
      ],
      [
       "She hasn't got a car.",
       "She doesn't have a car."
      ]
     ]
    },
    "examples": [
     {
      "en": "Do you have a pen? Have you got a pen?",
      "vi": "Bạn có bút không? (hai cách nói)"
     }
    ]
   }
  ],
  "tips": [
   "Ở quá khứ chỉ dùng had, không nói \"had got\": \"I had a car then.\"",
   "Câu hỏi với have got không dùng do: \"Do you have got…?\" ✗ → \"Have you got…?\" ✓",
   "have got chỉ nói về sở hữu, không dùng cho hành động: ăn sáng là have breakfast, không phải have got breakfast."
  ]
 },
 {
  "id": "howmuch-howadj",
  "title": "how much, how many, how + tính từ",
  "en": "how much, how many; how + adjective",
  "intro": "Cách hỏi số lượng, giá tiền và mức độ bằng how.",
  "sections": [
   {
    "name": "Hỏi số lượng",
    "formula": "How many + danh từ số nhiều + do/does/are …? · How much + danh từ không đếm được + do/does/is …?",
    "usage": "How many đi với danh từ đếm được; How much đi với danh từ không đếm được.",
    "examples": [
     {
      "en": "How many brothers do you have?",
      "vi": "Bạn có mấy anh em trai?"
     },
     {
      "en": "How much water do you drink every day?",
      "vi": "Mỗi ngày bạn uống bao nhiêu nước?"
     }
    ]
   },
   {
    "name": "Hỏi giá tiền",
    "formula": "How much + is / are + …?",
    "examples": [
     {
      "en": "How much is this shirt?",
      "vi": "Cái áo này bao nhiêu tiền?"
     },
     {
      "en": "How much are these shoes?",
      "vi": "Đôi giày này bao nhiêu tiền?"
     }
    ]
   },
   {
    "name": "How + tính từ",
    "formula": "How + tính từ + am/is/are + chủ ngữ?",
    "table": {
     "head": [
      "Câu hỏi",
      "Hỏi về",
      "Ví dụ trả lời"
     ],
     "rows": [
      [
       "How old …?",
       "tuổi",
       "I'm twenty-five."
      ],
      [
       "How tall …?",
       "chiều cao",
       "She's 1.6 metres tall."
      ],
      [
       "How far …?",
       "khoảng cách",
       "About two kilometres."
      ],
      [
       "How long …?",
       "thời gian, độ dài",
       "About an hour."
      ],
      [
       "How often …?",
       "tần suất",
       "Twice a week."
      ],
      [
       "How heavy / big …?",
       "cân nặng, kích cỡ",
       "Around five kilos."
      ]
     ]
    },
    "examples": [
     {
      "en": "How far is the station from here?",
      "vi": "Nhà ga cách đây bao xa?"
     },
     {
      "en": "How old is your daughter?",
      "vi": "Con gái bạn bao nhiêu tuổi?"
     }
    ]
   }
  ],
  "tips": [
   "Tiền, nước, thời gian, gạo… là danh từ không đếm được → dùng how much.",
   "Hỏi tuổi dùng How old are you?, không nói \"How many years…?\"",
   "How long có hai nghĩa: thời gian (How long does it take?) và độ dài (How long is the bridge?)."
  ]
 },
 {
  "id": "imperative",
  "title": "Câu mệnh lệnh và lời khuyên",
  "en": "Imperatives; should, shouldn't",
  "intro": "Bảo ai đó làm gì, rủ cùng làm, hoặc khuyên nên làm gì.",
  "sections": [
   {
    "name": "Câu mệnh lệnh",
    "formula": "Động từ nguyên thể + … · Don't + động từ nguyên thể + … · Let's + động từ nguyên thể + …",
    "usage": "Câu mệnh lệnh không có chủ ngữ. Dùng để ra lệnh, hướng dẫn, dặn dò hoặc rủ cùng làm.",
    "table": {
     "head": [
      "Dạng",
      "Ví dụ",
      "Dùng khi"
     ],
     "rows": [
      [
       "Khẳng định",
       "Open the window.",
       "bảo ai đó làm"
      ],
      [
       "Phủ định",
       "Don't touch that.",
       "bảo đừng làm"
      ],
      [
       "Thêm please",
       "Please sit down.",
       "lịch sự hơn"
      ],
      [
       "Let's + V",
       "Let's go home.",
       "rủ cùng làm"
      ],
      [
       "Let's not + V",
       "Let's not wait here.",
       "rủ đừng làm"
      ]
     ]
    },
    "examples": [
     {
      "en": "Turn left at the traffic lights.",
      "vi": "Rẽ trái ở đèn giao thông."
     },
     {
      "en": "Don't forget your keys.",
      "vi": "Đừng quên chìa khóa của bạn."
     }
    ]
   },
   {
    "name": "Lời khuyên với should",
    "formula": "Chủ ngữ + should + V · Chủ ngữ + shouldn't + V · Should + chủ ngữ + V?",
    "usage": "should nhẹ nhàng hơn câu mệnh lệnh, dùng để khuyên.",
    "examples": [
     {
      "en": "You should drink more water.",
      "vi": "Bạn nên uống nhiều nước hơn."
     },
     {
      "en": "You shouldn't eat so late.",
      "vi": "Bạn không nên ăn khuya như vậy."
     }
    ]
   }
  ],
  "tips": [
   "Câu mệnh lệnh nghe khá mạnh; thêm please hoặc dùng Could you… cho lịch sự.",
   "Let's = Let us, luôn đi với động từ nguyên thể.",
   "Sau should không thêm to: \"You should to go\" ✗ → \"You should go\" ✓"
  ]
 },
 {
  "id": "wh-questions",
  "title": "Câu hỏi Wh-",
  "en": "Wh- questions",
  "intro": "Cách đặt câu hỏi lấy thông tin: what, where, when, why, who, whose, which, how. Bài gồm 12 cấu trúc theo từng thì và từng loại câu hỏi.",
  "sections": [
   {
    "name": "Tổng quan: trật tự câu hỏi",
    "formula": "Từ hỏi + do/does/did + chủ ngữ + V? · Từ hỏi + am/is/are/was/were + chủ ngữ? · Từ hỏi + will/can/should + chủ ngữ + V?",
    "usage": "Trợ động từ luôn đứng trước chủ ngữ; động từ chính giữ nguyên thể.",
    "table": {
     "head": [
      "Từ hỏi",
      "Hỏi về",
      "Ví dụ"
     ],
     "rows": [
      [
       "what",
       "cái gì",
       "What do you want?"
      ],
      [
       "where",
       "ở đâu",
       "Where does she live?"
      ],
      [
       "when / what time",
       "khi nào, mấy giờ",
       "When did you arrive?"
      ],
      [
       "why",
       "tại sao",
       "Why are you late?"
      ],
      [
       "who",
       "ai",
       "Who is that man?"
      ],
      [
       "whose",
       "của ai",
       "Whose bag is this?"
      ],
      [
       "which",
       "cái nào",
       "Which colour do you like?"
      ],
      [
       "how",
       "thế nào",
       "How do you go to work?"
      ]
     ]
    },
    "examples": [
     {
      "en": "Where do your parents live?",
      "vi": "Ba mẹ bạn sống ở đâu?"
     },
     {
      "en": "Why did you change your job?",
      "vi": "Sao bạn đổi việc?"
     }
    ]
   },
   {
    "name": "1. Hiện tại đơn với động từ thường",
    "formula": "Wh- + do/does + S + V (nguyên thể)?",
    "usage": "Dùng do với I/you/we/they, does với he/she/it. Sau does, động từ không thêm -s.",
    "examples": [
     {
      "en": "What do you usually eat for breakfast?",
      "vi": "Bạn thường ăn sáng món gì?"
     },
     {
      "en": "Where does your sister work?",
      "vi": "Chị bạn làm việc ở đâu?"
     },
     {
      "en": "What time does the bank open?",
      "vi": "Ngân hàng mở cửa lúc mấy giờ?"
     }
    ]
   },
   {
    "name": "2. Quá khứ đơn với động từ thường",
    "formula": "Wh- + did + S + V (nguyên thể)?",
    "usage": "Did dùng cho mọi chủ ngữ. Động từ chính trở về nguyên thể, không dùng dạng quá khứ.",
    "examples": [
     {
      "en": "When did you move to Hanoi?",
      "vi": "Bạn chuyển ra Hà Nội khi nào?"
     },
     {
      "en": "What did she buy at the market?",
      "vi": "Cô ấy đã mua gì ở chợ?"
     },
     {
      "en": "Why did they leave so early?",
      "vi": "Sao họ về sớm thế?"
     }
    ]
   },
   {
    "name": "3. Với động từ be",
    "formula": "Wh- + am/is/are/was/were + S …?",
    "usage": "Không dùng do/does/did với be. Chỉ cần đưa be lên trước chủ ngữ.",
    "examples": [
     {
      "en": "Where are my keys?",
      "vi": "Chìa khoá của tôi đâu rồi?"
     },
     {
      "en": "Who is your English teacher?",
      "vi": "Giáo viên tiếng Anh của bạn là ai?"
     },
     {
      "en": "Where were you last night?",
      "vi": "Tối qua bạn ở đâu?"
     }
    ]
   },
   {
    "name": "4. Hiện tại tiếp diễn",
    "formula": "Wh- + am/is/are + S + V-ing?",
    "usage": "Hỏi về việc đang diễn ra lúc nói hoặc kế hoạch sắp tới.",
    "examples": [
     {
      "en": "What are you doing now?",
      "vi": "Bạn đang làm gì vậy?"
     },
     {
      "en": "Why is the baby crying?",
      "vi": "Sao em bé khóc thế?"
     },
     {
      "en": "Where are you going this weekend?",
      "vi": "Cuối tuần này bạn đi đâu?"
     }
    ]
   },
   {
    "name": "5. Quá khứ tiếp diễn",
    "formula": "Wh- + was/were + S + V-ing?",
    "usage": "Hỏi về việc đang diễn ra tại một thời điểm trong quá khứ.",
    "examples": [
     {
      "en": "What were you doing at 8 p.m. yesterday?",
      "vi": "Lúc 8 giờ tối qua bạn đang làm gì?"
     },
     {
      "en": "Who was she talking to?",
      "vi": "Lúc đó cô ấy đang nói chuyện với ai?"
     },
     {
      "en": "Why were they laughing?",
      "vi": "Lúc đó sao họ cười vậy?"
     }
    ]
   },
   {
    "name": "6. Tương lai với will",
    "formula": "Wh- + will + S + V (nguyên thể)?",
    "usage": "Will dùng cho mọi chủ ngữ, động từ giữ nguyên thể.",
    "examples": [
     {
      "en": "When will you finish the report?",
      "vi": "Khi nào bạn làm xong báo cáo?"
     },
     {
      "en": "What will you do after graduation?",
      "vi": "Tốt nghiệp xong bạn sẽ làm gì?"
     },
     {
      "en": "Where will we meet tomorrow?",
      "vi": "Mai chúng ta gặp nhau ở đâu?"
     }
    ]
   },
   {
    "name": "7. Với can / should / must",
    "formula": "Wh- + can/should/must + S + V (nguyên thể)?",
    "usage": "Đưa động từ khuyết thiếu lên trước chủ ngữ, không thêm do/does. Động từ sau giữ nguyên thể, không có to.",
    "examples": [
     {
      "en": "Where can I buy a SIM card?",
      "vi": "Tôi có thể mua thẻ SIM ở đâu?"
     },
     {
      "en": "What should I wear to the interview?",
      "vi": "Tôi nên mặc gì đi phỏng vấn?"
     },
     {
      "en": "Why must we wear a helmet?",
      "vi": "Sao chúng ta phải đội mũ bảo hiểm?"
     }
    ]
   },
   {
    "name": "8. Khi Wh- là chủ ngữ",
    "formula": "Who / What + động từ (chia như câu kể)?",
    "usage": "Nếu hỏi về chính chủ ngữ thì không dùng do/does/did.",
    "examples": [
     {
      "en": "Who called you this morning?",
      "vi": "Sáng nay ai gọi cho bạn?"
     },
     {
      "en": "What happened yesterday?",
      "vi": "Hôm qua đã xảy ra chuyện gì?"
     }
    ]
   },
   {
    "name": "9. Câu hỏi về số lượng",
    "formula": "How many + danh từ số nhiều + trợ động từ + S + V? · How much + danh từ không đếm được …? · How much + is/are …? (hỏi giá)",
    "usage": "How many với danh từ đếm được (books, people). How much với danh từ không đếm được (water, money, time) và khi hỏi giá.",
    "table": {
     "head": [
      "Cấu trúc",
      "Dùng với",
      "Ví dụ"
     ],
     "rows": [
      [
       "How many + N số nhiều",
       "danh từ đếm được",
       "How many brothers do you have?"
      ],
      [
       "How much + N không đếm được",
       "danh từ không đếm được",
       "How much sugar do you need?"
      ],
      [
       "How much + is/are …?",
       "hỏi giá tiền",
       "How much are these shoes?"
      ]
     ]
    },
    "examples": [
     {
      "en": "How many students are there in your class?",
      "vi": "Lớp bạn có bao nhiêu học sinh?"
     },
     {
      "en": "How much water do you drink a day?",
      "vi": "Mỗi ngày bạn uống bao nhiêu nước?"
     },
     {
      "en": "How much is this shirt?",
      "vi": "Cái áo này giá bao nhiêu?"
     }
    ]
   },
   {
    "name": "10. Câu hỏi về tần suất",
    "formula": "How often + do/does/did + S + V?",
    "usage": "Hỏi một việc xảy ra thường xuyên đến mức nào. Trả lời bằng always, usually, sometimes, never, once a week, every day…",
    "examples": [
     {
      "en": "How often do you go to the gym?",
      "vi": "Bạn đi tập gym bao lâu một lần?"
     },
     {
      "en": "How often does she visit her parents?",
      "vi": "Cô ấy về thăm bố mẹ bao lâu một lần?"
     },
     {
      "en": "How often do the buses run?",
      "vi": "Xe buýt bao lâu có một chuyến?"
     }
    ]
   },
   {
    "name": "11. Câu hỏi về thời lượng",
    "formula": "How long + does/did + it take (+ sb) + to V? · How long + have/has + S + V3/V-ed? · How long + will/is …?",
    "usage": "Hỏi một việc kéo dài bao lâu. Trả lời bằng for two hours, about ten minutes, since 2020…",
    "examples": [
     {
      "en": "How long does it take to get to the airport?",
      "vi": "Ra sân bay mất bao lâu?"
     },
     {
      "en": "How long have you lived here?",
      "vi": "Bạn sống ở đây bao lâu rồi?"
     },
     {
      "en": "How long will the meeting last?",
      "vi": "Cuộc họp sẽ kéo dài bao lâu?"
     }
    ]
   },
   {
    "name": "12. Câu hỏi có giới từ (giới từ đứng cuối câu)",
    "formula": "Từ hỏi + trợ động từ + chủ ngữ + động từ + giới từ?",
    "examples": [
     {
      "en": "Who do you live with?",
      "vi": "Bạn sống với ai?"
     },
     {
      "en": "What are you looking for?",
      "vi": "Bạn đang tìm cái gì?"
     }
    ]
   }
  ],
  "tips": [
   "Không chia động từ hai lần: \"Where does she lives?\" ✗ → \"Where does she live?\" ✓",
   "How + tính từ để hỏi mức độ: how old, how far, how long.",
   "How many + danh từ đếm được số nhiều; how much + danh từ không đếm được hoặc để hỏi giá.",
   "Với be và can/should/must/will: không thêm do/does/did. \"Where do you can buy…?\" ✗ → \"Where can you buy…?\" ✓",
   "Câu hỏi có hoặc không (Do you…?) thì không có từ hỏi đứng đầu."
  ]
 },
 {
  "id": "adj-modifier",
  "title": "Tính từ và từ tăng giảm mức độ",
  "en": "Adjectives and modifiers",
  "intro": "Dùng very, really, quite, a bit… để tăng hoặc giảm mức độ của tính từ.",
  "sections": [
   {
    "name": "Thang mức độ",
    "formula": "a bit / quite / very / really / extremely + tính từ",
    "table": {
     "head": [
      "Từ bổ nghĩa",
      "Nghĩa",
      "Ví dụ"
     ],
     "rows": [
      [
       "a bit / a little",
       "hơi",
       "a bit tired"
      ],
      [
       "quite",
       "khá",
       "quite expensive"
      ],
      [
       "very",
       "rất",
       "very good"
      ],
      [
       "really",
       "thật sự rất",
       "really delicious"
      ],
      [
       "extremely",
       "cực kỳ",
       "extremely hot"
      ],
      [
       "too",
       "quá (mang ý tiêu cực)",
       "too small"
      ]
     ]
    },
    "examples": [
     {
      "en": "The film was really good.",
      "vi": "Bộ phim hay thật."
     },
     {
      "en": "I'm a bit tired today.",
      "vi": "Hôm nay tôi hơi mệt."
     }
    ]
   },
   {
    "name": "Vị trí của tính từ",
    "formula": "Tính từ + danh từ · Chủ ngữ + am/is/are + tính từ",
    "usage": "Tính từ đứng trước danh từ hoặc sau động từ to be. Tính từ không có dạng số nhiều.",
    "examples": [
     {
      "en": "It's a very nice day.",
      "vi": "Hôm nay là một ngày rất đẹp."
     },
     {
      "en": "These shoes are quite cheap.",
      "vi": "Đôi giày này khá rẻ."
     }
    ]
   }
  ],
  "tips": [
   "too khác very: too = quá mức, thường có ý xấu. \"It's too hot\" (nóng quá chịu không nổi).",
   "a bit thường đi với tính từ tiêu cực: a bit tired, a bit difficult.",
   "Không thêm -s cho tính từ: \"two bigs houses\" ✗ → \"two big houses\" ✓"
  ]
 },
 {
  "id": "prep-movement",
  "title": "Giới từ chỉ chuyển động",
  "en": "Prepositions and adverbs of movement",
  "intro": "Những từ chỉ hướng đi: vào, ra, băng qua, dọc theo, vòng quanh…",
  "sections": [
   {
    "name": "Bảng giới từ chuyển động",
    "table": {
     "head": [
      "Giới từ",
      "Nghĩa",
      "Ví dụ"
     ],
     "rows": [
      [
       "into / out of",
       "vào trong / ra khỏi",
       "She walked into the room."
      ],
      [
       "along",
       "dọc theo",
       "Go along this street."
      ],
      [
       "across",
       "băng qua (bề mặt)",
       "Walk across the bridge."
      ],
      [
       "through",
       "xuyên qua (bên trong)",
       "We drove through the tunnel."
      ],
      [
       "past",
       "đi ngang qua",
       "Go past the bank."
      ],
      [
       "up / down",
       "lên / xuống",
       "Go up the stairs."
      ],
      [
       "over",
       "qua phía trên",
       "The plane flew over the city."
      ],
      [
       "round / around",
       "vòng quanh",
       "Walk around the lake."
      ],
      [
       "towards",
       "về phía",
       "He ran towards the bus."
      ],
      [
       "off",
       "rời khỏi, xuống khỏi",
       "Get off the bus at the market."
      ]
     ]
    },
    "examples": [
     {
      "en": "Go along this road and turn left.",
      "vi": "Đi dọc con đường này rồi rẽ trái."
     },
     {
      "en": "We walked through the park to the station.",
      "vi": "Chúng tôi đi xuyên qua công viên đến nhà ga."
     }
    ]
   },
   {
    "name": "Vị trí hay chuyển động?",
    "usage": "in, on chỉ vị trí đứng yên; into, onto chỉ sự di chuyển tới đó.",
    "table": {
     "head": [
      "Vị trí",
      "Chuyển động"
     ],
     "rows": [
      [
       "She is in the room.",
       "She goes into the room."
      ],
      [
       "The book is on the table.",
       "He puts the book onto the table."
      ],
      [
       "I am at the bus stop.",
       "I walk to the bus stop."
      ]
     ]
    },
    "examples": [
     {
      "en": "Get on the bus here and get off at the market.",
      "vi": "Lên xe buýt ở đây và xuống ở chợ."
     }
    ]
   }
  ],
  "tips": [
   "Lên/xuống xe buýt, tàu, máy bay: get on / get off. Lên/xuống xe hơi, taxi: get in / get out of.",
   "across đi trên bề mặt, through đi xuyên bên trong: across the street, through the forest.",
   "to chỉ điểm đến: go to school. Không nói \"go to home\" mà là \"go home\"."
  ]
 },
 {
  "id": "simple-vs-continuous",
  "title": "Hiện tại đơn và hiện tại tiếp diễn",
  "en": "Present simple and present continuous",
  "intro": "Hai thì này dễ lẫn: một thì nói về thói quen, một thì nói về việc đang xảy ra.",
  "sections": [
   {
    "name": "So sánh hai thì",
    "table": {
     "head": [
      "Hiện tại đơn",
      "Hiện tại tiếp diễn"
     ],
     "rows": [
      [
       "Thói quen, việc lặp lại",
       "Việc đang xảy ra lúc nói"
      ],
      [
       "Sự thật lâu dài",
       "Tình trạng tạm thời"
      ],
      [
       "always, usually, every day, on Mondays",
       "now, at the moment, today, this week"
      ],
      [
       "I work in a bank.",
       "I'm working at home this week."
      ],
      [
       "She plays tennis on Sundays.",
       "She is playing tennis right now."
      ]
     ]
    },
    "examples": [
     {
      "en": "I usually take the bus, but today I'm driving.",
      "vi": "Tôi thường đi xe buýt, nhưng hôm nay tôi lái xe."
     },
     {
      "en": "He works in Hanoi, but he's staying in Hue this month.",
      "vi": "Anh ấy làm việc ở Hà Nội, nhưng tháng này đang ở Huế."
     }
    ]
   },
   {
    "name": "Động từ không dùng tiếp diễn",
    "usage": "Động từ chỉ trạng thái (know, like, want, need, believe, understand, have nghĩa sở hữu) chỉ dùng thì đơn.",
    "examples": [
     {
      "en": "I know the answer.",
      "vi": "Tôi biết câu trả lời."
     },
     {
      "en": "She wants a cup of tea.",
      "vi": "Cô ấy muốn một tách trà."
     }
    ]
   }
  ],
  "tips": [
   "Thấy now, at the moment, today, this week → thường là tiếp diễn.",
   "Thấy always, usually, every… → thường là hiện tại đơn.",
   "\"I am knowing\" ✗ → \"I know\" ✓"
  ]
 },
 {
  "id": "verb-to-v",
  "title": "Động từ + to V",
  "en": "Verbs + to infinitive",
  "intro": "Nhóm động từ mà sau nó phải dùng to + động từ nguyên thể.",
  "sections": [
   {
    "name": "Công thức",
    "formula": "I/You/We/They + want / need / decide / hope / try / learn / forget / promise / plan + to + V · He/She/It + wants / needs / decides / hopes / tries / learns / forgets / promises / plans + to + V",
    "table": {
     "head": [
      "Động từ",
      "Nghĩa",
      "Ví dụ"
     ],
     "rows": [
      [
       "want to",
       "muốn",
       "I want to go home."
      ],
      [
       "need to",
       "cần",
       "You need to rest."
      ],
      [
       "decide to",
       "quyết định",
       "We decided to stay."
      ],
      [
       "hope to",
       "hy vọng",
       "I hope to see you soon."
      ],
      [
       "try to",
       "cố gắng",
       "She tried to call me."
      ],
      [
       "learn to",
       "học cách",
       "He learned to drive."
      ],
      [
       "forget to",
       "quên",
       "Don't forget to lock the door."
      ],
      [
       "promise to",
       "hứa",
       "They promised to help."
      ]
     ]
    },
    "examples": [
     {
      "en": "I want to learn English well.",
      "vi": "Tôi muốn học giỏi tiếng Anh."
     },
     {
      "en": "We decided to take a taxi.",
      "vi": "Chúng tôi quyết định đi taxi."
     }
    ]
   },
   {
    "name": "would like to V",
    "formula": "Chủ ngữ + would like + to + V",
    "usage": "Cách nói “muốn” lịch sự, hay dùng khi đề nghị hoặc gọi món.",
    "examples": [
     {
      "en": "I'd like to book a table for two.",
      "vi": "Tôi muốn đặt bàn cho hai người."
     },
     {
      "en": "Would you like to come with us?",
      "vi": "Bạn có muốn đi cùng chúng tôi không?"
     }
    ]
   },
   {
    "name": "want / ask ai đó làm gì",
    "formula": "Chủ ngữ + want / ask / tell + ai đó + to + V",
    "examples": [
     {
      "en": "My boss wants me to finish it today.",
      "vi": "Sếp muốn tôi làm xong việc đó hôm nay."
     },
     {
      "en": "She asked me to wait outside.",
      "vi": "Cô ấy nhờ tôi đợi bên ngoài."
     }
    ]
   }
  ],
  "tips": [
   "Sau các động từ này không dùng V-ing: \"I want going\" ✗ → \"I want to go\" ✓",
   "Nhưng sau enjoy, like, avoid, finish thì dùng V-ing.",
   "would like + to V (muốn) khác like + V-ing (thích làm thường xuyên)."
  ]
 },
 {
  "id": "adverb-manner",
  "title": "Trạng từ chỉ cách thức",
  "en": "Adverbs of manner",
  "intro": "Trạng từ cho biết hành động diễn ra thế nào: nhanh, chậm, cẩn thận, tốt…",
  "sections": [
   {
    "name": "Cách tạo trạng từ",
    "formula": "Tính từ + -ly → trạng từ",
    "table": {
     "head": [
      "Quy tắc",
      "Tính từ → Trạng từ"
     ],
     "rows": [
      [
       "Thông thường: + ly",
       "slow → slowly · quiet → quietly"
      ],
      [
       "Tận cùng -y: đổi thành -ily",
       "easy → easily · happy → happily"
      ],
      [
       "Tận cùng -le: đổi thành -ly",
       "simple → simply · terrible → terribly"
      ],
      [
       "Giữ nguyên",
       "fast → fast · hard → hard · late → late"
      ],
      [
       "Bất quy tắc",
       "good → well"
      ]
     ]
    },
    "examples": [
     {
      "en": "She speaks English very well.",
      "vi": "Cô ấy nói tiếng Anh rất giỏi."
     },
     {
      "en": "Please drive slowly.",
      "vi": "Làm ơn lái xe chậm thôi."
     }
    ]
   },
   {
    "name": "Đặt ở đâu trong câu",
    "formula": "Chủ ngữ + động từ + trạng từ · Chủ ngữ + động từ + tân ngữ + trạng từ",
    "usage": "Trạng từ chỉ cách thức đứng sau động từ, hoặc sau tân ngữ; không chen giữa động từ và tân ngữ.",
    "examples": [
     {
      "en": "He opened the door quietly.",
      "vi": "Anh ấy mở cửa nhẹ nhàng."
     },
     {
      "en": "They waited patiently for an hour.",
      "vi": "Họ kiên nhẫn đợi suốt một tiếng."
     }
    ]
   }
  ],
  "tips": [
   "good là tính từ, well là trạng từ: \"She is a good singer\" nhưng \"She sings well\".",
   "Không nói \"He opened quietly the door\": trạng từ đứng sau tân ngữ.",
   "hardly không phải trạng từ của hard: hard = chăm chỉ, hardly = hầu như không."
  ]
 },
 {
  "id": "howto-suggest",
  "title": "Nói sao để… rủ rê, đề nghị",
  "en": "How to … make suggestions",
  "intro": "Những mẫu câu rủ người khác cùng làm gì đó, và cách đồng ý hoặc từ chối.",
  "sections": [
   {
    "name": "Mẫu câu rủ rê",
    "formula": "Let's + V · Shall we + V? · Why don't we + V? · How about + V-ing? · What about + V-ing?",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa",
      "Sau nó dùng gì"
     ],
     "rows": [
      [
       "Let's go out tonight.",
       "Tối nay mình đi chơi đi.",
       "động từ nguyên thể"
      ],
      [
       "Shall we take a taxi?",
       "Mình đi taxi nhé?",
       "động từ nguyên thể"
      ],
      [
       "Why don't we eat here?",
       "Sao mình không ăn ở đây nhỉ?",
       "động từ nguyên thể"
      ],
      [
       "How about going to the beach?",
       "Hay là đi biển?",
       "V-ing"
      ],
      [
       "What about next Saturday?",
       "Thứ Bảy tới thì sao?",
       "danh từ hoặc V-ing"
      ],
      [
       "Maybe we could ask Nam.",
       "Hay là mình hỏi Nam.",
       "động từ nguyên thể"
      ]
     ]
    },
    "examples": [
     {
      "en": "Let's meet at seven in front of the cinema.",
      "vi": "Bảy giờ mình gặp nhau trước rạp phim nhé."
     },
     {
      "en": "How about having lunch together tomorrow?",
      "vi": "Hay là mai mình ăn trưa cùng nhau?"
     }
    ]
   },
   {
    "name": "Đồng ý hoặc từ chối",
    "table": {
     "head": [
      "Đồng ý",
      "Từ chối nhẹ nhàng"
     ],
     "rows": [
      [
       "Good idea!",
       "Sorry, I can't."
      ],
      [
       "Sounds great.",
       "I'd love to, but I'm busy."
      ],
      [
       "Yes, let's.",
       "Maybe another time."
      ],
      [
       "That works for me.",
       "I'm afraid I'm not free then."
      ]
     ]
    },
    "examples": [
     {
      "en": "Shall we go for a coffee? — Good idea!",
      "vi": "Mình đi cà phê nhé? — Ý hay đó!"
     },
     {
      "en": "Why don't we go on Sunday? — I'd love to, but I'm busy.",
      "vi": "Sao mình không đi chủ nhật nhỉ? — Tôi rất muốn, nhưng tôi bận."
     }
    ]
   }
  ],
  "tips": [
   "Let's + động từ nguyên thể, nhưng How about / What about + V-ing.",
   "Shall we…? nghe lịch sự và hơi trang trọng hơn Let's.",
   "Từ chối nên thêm lý do ngắn, người Anh ít khi nói No thẳng."
  ]
 },
 {
  "id": "howto-restaurant",
  "title": "Nói sao để… gọi món ở nhà hàng",
  "en": "How to … order a meal in a restaurant",
  "intro": "Từ lúc vào cửa, gọi món, cho đến lúc tính tiền.",
  "sections": [
   {
    "name": "Khi vào và gọi món",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "A table for two, please.",
       "Cho bàn hai người."
      ],
      [
       "Do you have a table by the window?",
       "Có bàn cạnh cửa sổ không ạ?"
      ],
      [
       "Could I see the menu, please?",
       "Cho tôi xem thực đơn được không?"
      ],
      [
       "I'd like the chicken, please.",
       "Cho tôi món gà."
      ],
      [
       "I'll have the same.",
       "Tôi gọi giống vậy."
      ],
      [
       "What do you recommend?",
       "Bạn gợi ý món nào?"
      ],
      [
       "Is this dish spicy?",
       "Món này có cay không?"
      ],
      [
       "Just water for me, thanks.",
       "Tôi chỉ uống nước lọc thôi."
      ]
     ]
    },
    "examples": [
     {
      "en": "Good evening. A table for three, please.",
      "vi": "Chào buổi tối. Cho chúng tôi bàn ba người."
     },
     {
      "en": "I'd like the beef noodle soup, please.",
      "vi": "Cho tôi một tô phở bò."
     }
    ]
   },
   {
    "name": "Nhân viên hay hỏi gì",
    "table": {
     "head": [
      "Nhân viên nói",
      "Nghĩa"
     ],
     "rows": [
      [
       "Are you ready to order?",
       "Anh/chị gọi món chưa ạ?"
      ],
      [
       "Anything to drink?",
       "Uống gì không ạ?"
      ],
      [
       "How would you like your steak?",
       "Bò anh/chị muốn chín mức nào?"
      ],
      [
       "Would you like a starter?",
       "Anh/chị dùng món khai vị chứ?"
      ],
      [
       "Enjoy your meal.",
       "Chúc ngon miệng."
      ]
     ]
    },
    "examples": [
     {
      "en": "Are you ready to order? — Yes, I'd like the fish.",
      "vi": "Anh gọi món chưa ạ? — Rồi, cho tôi món cá."
     }
    ]
   },
   {
    "name": "Khi tính tiền",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "Can I have the bill, please?",
       "Cho tôi tính tiền."
      ],
      [
       "Is service included?",
       "Đã tính phí phục vụ chưa?"
      ],
      [
       "Can I pay by card?",
       "Tôi trả thẻ được không?"
      ],
      [
       "Keep the change.",
       "Khỏi thối lại."
      ]
     ]
    },
    "examples": [
     {
      "en": "Excuse me, could we have the bill?",
      "vi": "Xin lỗi, cho chúng tôi tính tiền nhé."
     }
    ]
   }
  ],
  "tips": [
   "I'd like = I would like, lịch sự hơn hẳn I want.",
   "Thêm please vào cuối câu là đủ lịch sự trong hầu hết tình huống.",
   "Ở Anh gọi hóa đơn là the bill, ở Mỹ là the check."
  ]
 },
 {
  "id": "howto-invite",
  "title": "Nói sao để… mời và ngỏ ý giúp",
  "en": "How to … make invitations and offers",
  "intro": "Mời ai đó đi đâu, mời dùng gì, và ngỏ ý giúp một tay.",
  "sections": [
   {
    "name": "Lời mời",
    "formula": "Would you like to + V? · Do you want to + V? · Are you free + thời gian?",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa",
      "Mức lịch sự"
     ],
     "rows": [
      [
       "Would you like to join us?",
       "Bạn tham gia cùng nhé?",
       "lịch sự"
      ],
      [
       "Do you want to come with me?",
       "Bạn muốn đi cùng không?",
       "thân mật"
      ],
      [
       "Are you free on Saturday?",
       "Thứ Bảy bạn rảnh không?",
       "thân mật"
      ],
      [
       "We're having dinner. Care to join?",
       "Bọn mình đang ăn tối, vào ăn cùng nhé?",
       "thân mật"
      ]
     ]
    },
    "examples": [
     {
      "en": "Would you like to have dinner with us tonight?",
      "vi": "Tối nay bạn dùng bữa tối với chúng tôi nhé?"
     }
    ]
   },
   {
    "name": "Ngỏ ý giúp hoặc mời dùng gì",
    "formula": "Would you like + danh từ? · Shall I + V? · Can I help you with + danh từ?",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "Would you like some tea?",
       "Bạn uống chút trà nhé?"
      ],
      [
       "Shall I carry that for you?",
       "Để tôi xách giúp nhé?"
      ],
      [
       "Can I help you with your bags?",
       "Tôi xách giúp túi nhé?"
      ],
      [
       "I'll give you a hand.",
       "Để tôi giúp một tay."
      ]
     ]
    },
    "examples": [
     {
      "en": "Shall I open the window?",
      "vi": "Để tôi mở cửa sổ nhé?"
     }
    ]
   },
   {
    "name": "Nhận lời hoặc từ chối",
    "table": {
     "head": [
      "Nhận lời",
      "Từ chối"
     ],
     "rows": [
      [
       "Yes, please.",
       "No, thanks."
      ],
      [
       "That would be lovely.",
       "I'd love to, but I can't."
      ],
      [
       "Thank you, that's very kind.",
       "Thanks, but I'm fine."
      ]
     ]
    },
    "examples": [
     {
      "en": "Would you like some coffee? — Yes, please.",
      "vi": "Bạn uống cà phê nhé? — Vâng, cho tôi xin."
     }
    ]
   }
  ],
  "tips": [
   "Would you like + danh từ (mời dùng gì) và Would you like to + V (mời làm gì).",
   "Shall I…? là cách ngỏ ý giúp rất tự nhiên của người Anh.",
   "Trả lời \"Yes, please\" chứ không phải \"Yes, I want\"."
  ]
 },
 {
  "id": "howto-shop",
  "title": "Nói sao để… nhờ giúp khi mua sắm",
  "en": "How to … get help in shops",
  "intro": "Hỏi tìm hàng, thử đồ, hỏi giá và đổi trả.",
  "sections": [
   {
    "name": "Hỏi và tìm hàng",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "Excuse me, where can I find the milk?",
       "Xin lỗi, sữa để ở đâu ạ?"
      ],
      [
       "Do you have this in size M?",
       "Cái này có size M không ạ?"
      ],
      [
       "Have you got a bigger one?",
       "Có cái lớn hơn không ạ?"
      ],
      [
       "Is this on sale?",
       "Món này đang giảm giá à?"
      ],
      [
       "I'm just looking, thanks.",
       "Tôi chỉ xem thôi, cảm ơn."
      ]
     ]
    },
    "examples": [
     {
      "en": "Excuse me, where can I find the bread?",
      "vi": "Xin lỗi, bánh mì ở chỗ nào ạ?"
     }
    ]
   },
   {
    "name": "Thử đồ và hỏi giá",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "Can I try it on?",
       "Tôi mặc thử được không?"
      ],
      [
       "Where is the fitting room?",
       "Phòng thử đồ ở đâu?"
      ],
      [
       "How much is this?",
       "Cái này bao nhiêu tiền?"
      ],
      [
       "It's a bit too tight.",
       "Hơi chật một chút."
      ],
      [
       "I'll take it.",
       "Tôi lấy cái này."
      ]
     ]
    },
    "examples": [
     {
      "en": "Can I try these shoes on?",
      "vi": "Tôi thử đôi giày này được không?"
     },
     {
      "en": "How much are these trousers?",
      "vi": "Cái quần này bao nhiêu tiền?"
     }
    ]
   },
   {
    "name": "Trả tiền và đổi trả",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "Do you take cards?",
       "Ở đây nhận thẻ không ạ?"
      ],
      [
       "Can I have a receipt, please?",
       "Cho tôi xin hóa đơn."
      ],
      [
       "I'd like to return this.",
       "Tôi muốn trả lại món này."
      ],
      [
       "Can I exchange it for a different size?",
       "Tôi đổi size khác được không?"
      ]
     ]
    },
    "examples": [
     {
      "en": "Do you take cards? — Yes, of course.",
      "vi": "Ở đây nhận thẻ không ạ? — Có chứ ạ."
     }
    ]
   }
  ],
  "tips": [
   "Mở đầu bằng Excuse me khi muốn hỏi nhân viên.",
   "\"I'm just looking\" là câu lịch sự khi chưa muốn mua.",
   "Hỏi giá số nhiều dùng are: \"How much are these?\""
  ]
 },
 {
  "id": "howto-apologise",
  "title": "Nói sao để… xin lỗi và nêu lý do",
  "en": "How to … apologise and make excuses",
  "intro": "Xin lỗi đúng mức, đưa lý do, và cách đáp lại khi người khác xin lỗi mình.",
  "sections": [
   {
    "name": "Câu xin lỗi",
    "table": {
     "head": [
      "Mẫu câu",
      "Mức độ"
     ],
     "rows": [
      [
       "Sorry!",
       "nhẹ, hằng ngày"
      ],
      [
       "Sorry I'm late.",
       "xin lỗi vì đến trễ"
      ],
      [
       "I'm really sorry about that.",
       "nghiêm túc hơn"
      ],
      [
       "I do apologise.",
       "trang trọng"
      ],
      [
       "It's my fault.",
       "nhận lỗi"
      ],
      [
       "It won't happen again.",
       "hứa không tái diễn"
      ]
     ]
    },
    "examples": [
     {
      "en": "I'm really sorry about the mistake.",
      "vi": "Tôi thật sự xin lỗi vì sai sót đó."
     }
    ]
   },
   {
    "name": "Nêu lý do",
    "formula": "Sorry, … because … · I'm afraid I can't … because …",
    "table": {
     "head": [
      "Lý do hay dùng",
      "Nghĩa"
     ],
     "rows": [
      [
       "I missed the bus.",
       "Tôi lỡ chuyến xe buýt."
      ],
      [
       "I was stuck in traffic.",
       "Tôi bị kẹt xe."
      ],
      [
       "Something came up.",
       "Có việc đột xuất."
      ],
      [
       "I wasn't feeling well.",
       "Tôi thấy không khỏe."
      ],
      [
       "I completely forgot.",
       "Tôi quên mất."
      ]
     ]
    },
    "examples": [
     {
      "en": "Sorry I'm late. I was stuck in traffic.",
      "vi": "Xin lỗi tôi đến trễ. Tôi bị kẹt xe."
     },
     {
      "en": "I'm afraid I can't come because I have to work.",
      "vi": "Tôi e là tôi không đến được vì phải làm việc."
     }
    ]
   },
   {
    "name": "Đáp lại lời xin lỗi",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "That's OK.",
       "Không sao."
      ],
      [
       "Don't worry about it.",
       "Đừng bận tâm."
      ],
      [
       "Never mind.",
       "Thôi không sao."
      ],
      [
       "These things happen.",
       "Chuyện đó vẫn xảy ra mà."
      ]
     ]
    },
    "examples": [
     {
      "en": "Sorry about yesterday. — Don't worry about it.",
      "vi": "Xin lỗi về chuyện hôm qua. — Đừng bận tâm."
     }
    ]
   }
  ],
  "tips": [
   "Excuse me dùng khi muốn gây chú ý hoặc đi ngang qua; Sorry dùng khi đã làm sai.",
   "Sau sorry for / sorry about thì dùng danh từ hoặc V-ing: \"Sorry for being late.\"",
   "Người Anh thường xin lỗi kèm lý do ngắn, không giải thích dài dòng."
  ]
 },
 {
  "id": "howto-directions",
  "title": "Nói sao để… hỏi và chỉ đường",
  "en": "How to … give directions",
  "intro": "Hỏi đường, nghe hiểu lời chỉ đường và tự chỉ đường cho người khác.",
  "sections": [
   {
    "name": "Hỏi đường",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "Excuse me, how do I get to the station?",
       "Xin lỗi, đi đến nhà ga thế nào ạ?"
      ],
      [
       "Is there a bank near here?",
       "Gần đây có ngân hàng không ạ?"
      ],
      [
       "Where is the nearest bus stop?",
       "Trạm xe buýt gần nhất ở đâu ạ?"
      ],
      [
       "Is it far from here?",
       "Có xa đây không ạ?"
      ],
      [
       "Can you show me on the map?",
       "Chỉ giúp tôi trên bản đồ được không?"
      ]
     ]
    },
    "examples": [
     {
      "en": "Excuse me, how do I get to the market?",
      "vi": "Xin lỗi, đi ra chợ thế nào ạ?"
     }
    ]
   },
   {
    "name": "Chỉ đường",
    "formula": "Go straight on · Turn left / right · Take the first / second turning on the …",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "Go straight on for about 200 metres.",
       "Đi thẳng khoảng 200 mét."
      ],
      [
       "Turn left at the traffic lights.",
       "Rẽ trái ở đèn giao thông."
      ],
      [
       "Take the second turning on the right.",
       "Rẽ ở ngã rẽ thứ hai bên phải."
      ],
      [
       "Go past the bank.",
       "Đi ngang qua ngân hàng."
      ],
      [
       "Cross the road at the crossing.",
       "Băng qua đường ở vạch kẻ."
      ],
      [
       "It's on your left.",
       "Nó nằm bên tay trái bạn."
      ]
     ]
    },
    "examples": [
     {
      "en": "Go straight on and turn right at the corner.",
      "vi": "Đi thẳng rồi rẽ phải ở góc đường."
     }
    ]
   },
   {
    "name": "Nói vị trí và khoảng cách",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "It's next to the pharmacy.",
       "Nó nằm cạnh nhà thuốc."
      ],
      [
       "It's opposite the school.",
       "Nó đối diện trường học."
      ],
      [
       "It's between the bank and the café.",
       "Nó nằm giữa ngân hàng và quán cà phê."
      ],
      [
       "It's about five minutes' walk.",
       "Đi bộ khoảng năm phút."
      ],
      [
       "It's just around the corner.",
       "Ngay góc đường thôi."
      ]
     ]
    },
    "examples": [
     {
      "en": "The post office is opposite the market.",
      "vi": "Bưu điện đối diện chợ."
     }
    ]
   }
  ],
  "tips": [
   "Nghe không kịp thì nói: \"Sorry, could you say that again more slowly?\"",
   "Người Anh nói turning hoặc street, người Mỹ hay nói block: \"Go two blocks.\"",
   "Không chắc thì trả lời thật: \"Sorry, I'm not from here.\""
  ]
 },
 {
  "id": "howto-phone",
  "title": "Nói sao để… gọi điện hỏi thông tin",
  "en": "How to … phone for information",
  "intro": "Mở đầu cuộc gọi, hỏi thông tin, nhờ nhắc lại và kết thúc lịch sự.",
  "sections": [
   {
    "name": "Mở đầu cuộc gọi",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "Hello, I'm calling about the English course.",
       "Chào anh/chị, tôi gọi để hỏi về khóa tiếng Anh."
      ],
      [
       "Could I speak to Mr Nam, please?",
       "Cho tôi gặp anh Nam được không ạ?"
      ],
      [
       "Is that the Grand Hotel?",
       "Đây có phải khách sạn Grand không ạ?"
      ],
      [
       "This is Lan speaking.",
       "Tôi là Lan."
      ]
     ]
    },
    "examples": [
     {
      "en": "Hello, I'm calling about the room you advertised.",
      "vi": "Chào anh/chị, tôi gọi hỏi về phòng anh/chị đăng cho thuê."
     }
    ]
   },
   {
    "name": "Hỏi thông tin",
    "formula": "Could you tell me + từ hỏi + chủ ngữ + động từ? (trật tự câu kể)",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "What time do you open?",
       "Mấy giờ bên mình mở cửa ạ?"
      ],
      [
       "Could you tell me how much it costs?",
       "Cho tôi hỏi giá bao nhiêu ạ?"
      ],
      [
       "Do I need to book in advance?",
       "Tôi có cần đặt trước không ạ?"
      ],
      [
       "Is there one on Sunday?",
       "Chủ nhật có không ạ?"
      ],
      [
       "How long does the course last?",
       "Khóa học kéo dài bao lâu ạ?"
      ]
     ]
    },
    "examples": [
     {
      "en": "Could you tell me what time the last bus leaves?",
      "vi": "Cho tôi hỏi chuyến xe cuối chạy lúc mấy giờ?"
     }
    ]
   },
   {
    "name": "Khi nghe không rõ và lúc kết thúc",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "Sorry, could you repeat that?",
       "Xin lỗi, nhắc lại giúp tôi được không?"
      ],
      [
       "Could you speak more slowly, please?",
       "Anh/chị nói chậm hơn được không ạ?"
      ],
      [
       "Could you spell that, please?",
       "Đánh vần giúp tôi được không ạ?"
      ],
      [
       "Hold on a moment, please.",
       "Vui lòng giữ máy một lát."
      ],
      [
       "Thanks for your help. Goodbye.",
       "Cảm ơn anh/chị đã giúp. Tạm biệt."
      ]
     ]
    },
    "examples": [
     {
      "en": "Sorry, could you repeat that more slowly?",
      "vi": "Xin lỗi, anh/chị nhắc lại chậm hơn được không?"
     }
    ]
   }
  ],
  "tips": [
   "Sau Could you tell me… thì dùng trật tự câu kể: \"…how much it costs\", không phải \"how much does it cost\".",
   "Người Anh hay nói This is … speaking thay vì I am …",
   "Nhắc lại số và tên bằng cách đánh vần cho chắc."
  ]
 },
 {
  "id": "howto-hotel",
  "title": "Nói sao để… nhờ và hỏi ở khách sạn",
  "en": "How to … make requests and offers in a hotel",
  "intro": "Nhận phòng, nhờ giúp, báo hỏng hóc và trả phòng.",
  "sections": [
   {
    "name": "Nhận phòng",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "I have a reservation under the name Lan.",
       "Tôi có đặt phòng tên Lan."
      ],
      [
       "I'd like to check in, please.",
       "Tôi muốn nhận phòng."
      ],
      [
       "Do you have any rooms available?",
       "Bên mình còn phòng trống không ạ?"
      ],
      [
       "Is breakfast included?",
       "Có bao gồm bữa sáng không ạ?"
      ],
      [
       "What time is check-out?",
       "Mấy giờ phải trả phòng ạ?"
      ]
     ]
    },
    "examples": [
     {
      "en": "I have a reservation for two nights.",
      "vi": "Tôi có đặt phòng hai đêm."
     }
    ]
   },
   {
    "name": "Nhờ giúp",
    "formula": "Could you + V …, please? · Could I have + danh từ …?",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "Could you call a taxi for me?",
       "Gọi giúp tôi một chiếc taxi được không?"
      ],
      [
       "Could I have an extra towel?",
       "Cho tôi xin thêm một cái khăn."
      ],
      [
       "Could I have a wake-up call at seven?",
       "Gọi tôi dậy lúc bảy giờ nhé?"
      ],
      [
       "Can I leave my luggage here?",
       "Tôi gửi hành lý ở đây được không?"
      ],
      [
       "Is there Wi-Fi in the room?",
       "Trong phòng có Wi-Fi không ạ?"
      ]
     ]
    },
    "examples": [
     {
      "en": "Could you call a taxi for me, please?",
      "vi": "Anh/chị gọi giúp tôi một chiếc taxi nhé?"
     }
    ]
   },
   {
    "name": "Báo hỏng hóc và trả phòng",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "The air conditioning isn't working.",
       "Máy lạnh không chạy."
      ],
      [
       "There's no hot water.",
       "Không có nước nóng."
      ],
      [
       "The room is a bit noisy.",
       "Phòng hơi ồn."
      ],
      [
       "Could I change rooms?",
       "Tôi đổi phòng được không?"
      ],
      [
       "I'd like to check out, please.",
       "Tôi muốn trả phòng."
      ]
     ]
    },
    "examples": [
     {
      "en": "Excuse me, the air conditioning isn't working.",
      "vi": "Xin lỗi, máy lạnh trong phòng không chạy."
     }
    ]
   }
  ],
  "tips": [
   "Could you…? lịch sự hơn Can you…?, rất hợp khi nhờ nhân viên.",
   "Nhờ việc gì thêm please vào cuối là đủ lịch sự.",
   "Nhân viên hay hỏi: \"How many nights?\", \"Could I see your passport?\""
  ]
 },
 {
  "id": "be-present",
  "title": "Động từ to be: am / is / are",
  "en": "The verb be: am, is, are",
  "intro": "To be là động từ dùng nhiều nhất trong tiếng Anh: nói mình là ai, ở đâu, cảm thấy thế nào. Ba dạng am, is, are đi với ba nhóm chủ ngữ khác nhau.",
  "sections": [
   {
    "name": "Chia theo chủ ngữ",
    "fx": [
     [
      "+",
      "I + am · He/She/It + is · You/We/They + are"
     ],
     [
      "−",
      "I + am not · He/She/It + is not (isn't) · You/We/They + are not (aren't)"
     ],
     [
      "?",
      "Am + I …? · Is + he/she/it …? · Are + you/we/they …?"
     ]
    ],
    "usage": "Chủ ngữ nào đi với dạng nào là điều phải thuộc trước tiên. Trong văn nói, hầu như lúc nào cũng dùng dạng viết tắt.",
    "table": {
     "head": [
      "Chủ ngữ",
      "Đầy đủ",
      "Viết tắt",
      "Phủ định"
     ],
     "rows": [
      [
       "I",
       "I am",
       "I'm",
       "I'm not"
      ],
      [
       "He / She / It",
       "He is",
       "He's",
       "He isn't"
      ],
      [
       "You / We / They",
       "You are",
       "You're",
       "You aren't"
      ]
     ]
    },
    "examples": [
     {
      "en": "I am a teacher.",
      "vi": "Tôi là giáo viên."
     },
     {
      "en": "She isn't at home right now.",
      "vi": "Giờ cô ấy không có ở nhà."
     }
    ]
   },
   {
    "name": "Dùng to be để nói gì",
    "usage": "Tên, nghề nghiệp, quốc tịch, tuổi, nơi chốn, cảm giác — tất cả đều dùng to be.",
    "table": {
     "head": [
      "Nói về",
      "Ví dụ"
     ],
     "rows": [
      [
       "Tên, nghề nghiệp",
       "My name is Lan. · He is a doctor."
      ],
      [
       "Quốc tịch, quê quán",
       "We are Vietnamese. · She is from Hue."
      ],
      [
       "Tuổi",
       "I am twenty-five years old."
      ],
      [
       "Nơi chốn",
       "The keys are on the table."
      ],
      [
       "Cảm giác, tính chất",
       "I am tired. · The soup is hot."
      ]
     ]
    },
    "examples": [
     {
      "en": "They are from Da Nang.",
      "vi": "Họ đến từ Đà Nẵng."
     },
     {
      "en": "My brother is twelve years old.",
      "vi": "Em trai tôi mười hai tuổi."
     }
    ]
   },
   {
    "name": "Câu hỏi và trả lời ngắn",
    "formula": "Am / Is / Are + chủ ngữ + …? · Yes, chủ ngữ + am/is/are. · No, chủ ngữ + 'm not / isn't / aren't.",
    "usage": "Hỏi thì đưa am/is/are lên trước chủ ngữ, không thêm do hay does.",
    "table": {
     "head": [
      "Câu hỏi",
      "Trả lời có",
      "Trả lời không"
     ],
     "rows": [
      [
       "Are you ready?",
       "Yes, I am.",
       "No, I'm not."
      ],
      [
       "Is she a student?",
       "Yes, she is.",
       "No, she isn't."
      ],
      [
       "Are they at work?",
       "Yes, they are.",
       "No, they aren't."
      ],
      [
       "Is it cold outside?",
       "Yes, it is.",
       "No, it isn't."
      ]
     ]
    },
    "examples": [
     {
      "en": "Are you Vietnamese? — Yes, I am.",
      "vi": "Bạn là người Việt à? — Vâng, đúng rồi."
     },
     {
      "en": "Is this your bag? — No, it isn't.",
      "vi": "Đây là túi của bạn à? — Không phải."
     }
    ]
   }
  ],
  "tips": [
   "Tiếng Việt không có từ tương ứng với am/is/are nên rất hay bị bỏ quên: \"I happy\" ✗ → \"I am happy\" ✓.",
   "Nói tuổi dùng be, không dùng have: \"I am 25\" ✓, \"I have 25 years\" ✗.",
   "Trả lời ngắn khẳng định thì không viết tắt: \"Yes, I am\" ✓, \"Yes, I'm\" ✗.",
   "Hỏi với be thì đảo be lên đầu: \"Do you are busy?\" ✗ → \"Are you busy?\" ✓.",
   "Danh từ số nhiều luôn đi với are: \"The books are on the desk.\""
  ]
 },
 {
  "id": "plural",
  "title": "Danh từ số nhiều",
  "en": "Plural nouns",
  "intro": "Từ hai cái trở lên là tiếng Anh phải đổi dạng danh từ. Bài này gồm quy tắc thêm -s / -es, nhóm bất quy tắc và ba cách đọc đuôi -s.",
  "sections": [
   {
    "name": "Quy tắc thêm -s / -es",
    "formula": "Danh từ + -s · Tận cùng -s, -x, -ch, -sh + -es · Phụ âm + y → đổi y thành i + -es",
    "usage": "Phần lớn danh từ chỉ cần thêm -s. Chỉ vài nhóm chữ cái cuối mới cần -es hoặc đổi chữ.",
    "table": {
     "head": [
      "Trường hợp",
      "Cách thêm",
      "Ví dụ"
     ],
     "rows": [
      [
       "Thông thường",
       "+ s",
       "book → books · pen → pens"
      ],
      [
       "Tận cùng -s, -x, -ch, -sh",
       "+ es",
       "bus → buses · box → boxes · watch → watches"
      ],
      [
       "Phụ âm + y",
       "đổi y thành i, + es",
       "city → cities · baby → babies"
      ],
      [
       "Nguyên âm + y",
       "giữ nguyên y, + s",
       "boy → boys · day → days"
      ],
      [
       "Tận cùng -f / -fe",
       "đổi thành v, + es",
       "leaf → leaves · knife → knives"
      ],
      [
       "Tận cùng -o",
       "+ es (một số từ)",
       "tomato → tomatoes · potato → potatoes"
      ]
     ]
    },
    "examples": [
     {
      "en": "I bought three books yesterday.",
      "vi": "Hôm qua tôi mua ba cuốn sách."
     },
     {
      "en": "There are two buses every hour.",
      "vi": "Mỗi tiếng có hai chuyến xe buýt."
     }
    ]
   },
   {
    "name": "Số nhiều bất quy tắc",
    "usage": "Nhóm này không theo quy tắc nào, phải học thuộc.",
    "table": {
     "head": [
      "Số ít",
      "Số nhiều",
      "Nghĩa"
     ],
     "rows": [
      [
       "man",
       "men",
       "người đàn ông"
      ],
      [
       "woman",
       "women",
       "người phụ nữ"
      ],
      [
       "child",
       "children",
       "đứa trẻ"
      ],
      [
       "person",
       "people",
       "người"
      ],
      [
       "foot",
       "feet",
       "bàn chân"
      ],
      [
       "tooth",
       "teeth",
       "cái răng"
      ],
      [
       "mouse",
       "mice",
       "con chuột"
      ],
      [
       "fish",
       "fish",
       "con cá"
      ],
      [
       "sheep",
       "sheep",
       "con cừu"
      ]
     ]
    },
    "examples": [
     {
      "en": "Three children are playing outside.",
      "vi": "Ba đứa trẻ đang chơi ở ngoài."
     },
     {
      "en": "My feet hurt after the long walk.",
      "vi": "Chân tôi đau sau khi đi bộ xa."
     }
    ]
   },
   {
    "name": "Ba cách đọc đuôi -s",
    "formula": "/s/ sau âm vô thanh · /z/ sau âm hữu thanh và nguyên âm · /ɪz/ sau s, z, ʃ, tʃ, dʒ",
    "usage": "Đuôi -s viết giống nhau nhưng đọc ba kiểu, giống hệt quy tắc của đuôi -ed.",
    "table": {
     "head": [
      "Đọc là",
      "Khi danh từ kết thúc bằng",
      "Ví dụ"
     ],
     "rows": [
      [
       "/s/",
       "âm vô thanh: p, t, k, f",
       "books · cats · maps"
      ],
      [
       "/z/",
       "âm hữu thanh và nguyên âm: b, d, g, n, l, r…",
       "pens · days · girls · dogs"
      ],
      [
       "/ɪz/ (thêm 1 âm tiết)",
       "s, z, ʃ, tʃ, dʒ",
       "buses · watches · dishes · pages"
      ]
     ]
    },
    "examples": [
     {
      "en": "The boxes are too heavy for me.",
      "vi": "Mấy cái thùng nặng quá sức tôi."
     },
     {
      "en": "My friends work in two different cities.",
      "vi": "Bạn tôi làm việc ở hai thành phố khác nhau."
     }
    ]
   }
  ],
  "tips": [
   "Danh từ số nhiều đi với are / were: \"The books are new\" ✓, \"The books is new\" ✗.",
   "people đã là số nhiều, không thêm -s: \"many people are\" ✓, \"peoples\" chỉ dùng khi nói \"các dân tộc\".",
   "Danh từ không đếm được không có số nhiều: water, money, information, advice, furniture.",
   "Sau số đếm trong cụm tính từ ghép thì bỏ -s: \"a five-year-old boy\" ✓, không phải \"five-years-old\".",
   "Nhớ thêm -s cả khi câu đã có số: \"three book\" ✗ → \"three books\" ✓."
  ]
 },
 {
  "id": "conjunctions",
  "title": "Liên từ: and, but, or, so, because",
  "en": "Conjunctions: and, but, or, so, because",
  "intro": "Năm từ nhỏ này giúp nối hai ý thành một câu dài tự nhiên thay vì nói từng câu rời rạc.",
  "sections": [
   {
    "name": "Năm liên từ cơ bản",
    "usage": "Chọn liên từ theo quan hệ giữa hai ý: thêm vào, trái ngược, lựa chọn, kết quả hay lý do.",
    "table": {
     "head": [
      "Liên từ",
      "Nghĩa",
      "Ví dụ"
     ],
     "rows": [
      [
       "and",
       "và (thêm ý cùng chiều)",
       "I like tea and coffee."
      ],
      [
       "but",
       "nhưng (ý trái ngược)",
       "It is small but comfortable."
      ],
      [
       "or",
       "hoặc (lựa chọn)",
       "Tea or coffee?"
      ],
      [
       "so",
       "nên (kết quả)",
       "It was late, so we went home."
      ],
      [
       "because",
       "vì (lý do)",
       "We stayed in because it rained."
      ]
     ]
    },
    "examples": [
     {
      "en": "I was tired, so I went to bed early.",
      "vi": "Tôi mệt nên đi ngủ sớm."
     },
     {
      "en": "She speaks English and Japanese.",
      "vi": "Cô ấy nói được tiếng Anh và tiếng Nhật."
     }
    ]
   },
   {
    "name": "because và so",
    "formula": "Kết quả + because + lý do · Lý do + , so + kết quả",
    "usage": "Hai từ này nói cùng một chuyện nhưng ngược thứ tự. Đừng dùng cả hai trong một câu.",
    "table": {
     "head": [
      "Cách nói",
      "Câu"
     ],
     "rows": [
      [
       "because (lý do đứng sau)",
       "I stayed at home because I was ill."
      ],
      [
       "so (kết quả đứng sau)",
       "I was ill, so I stayed at home."
      ],
      [
       "Sai: dùng cả hai",
       "Because I was ill, so I stayed at home. ✗"
      ]
     ]
    },
    "examples": [
     {
      "en": "He went to bed early because he had an exam.",
      "vi": "Anh ấy đi ngủ sớm vì có bài thi."
     },
     {
      "en": "The shop was closed, so we came back later.",
      "vi": "Cửa hàng đóng cửa nên chúng tôi quay lại sau."
     }
    ]
   }
  ],
  "tips": [
   "Trước so và but thường có dấu phẩy; trước and và because thì thường không cần.",
   "Người Việt hay nói \"Vì… nên…\" rồi dịch thẳng thành \"Because… so…\" — tiếng Anh chỉ dùng một trong hai.",
   "or dùng trong câu hỏi lựa chọn: \"Do you want tea or coffee?\"",
   "Muốn nói lý do bằng một cụm danh từ thì dùng because of: \"because of the rain\" (không phải because the rain).",
   "and nối hai từ cùng loại: hai danh từ, hai động từ, hai tính từ."
  ]
 },
 {
  "id": "howto-greet",
  "title": "Nói sao để… chào hỏi và giới thiệu",
  "en": "How to … greet people and introduce yourself",
  "intro": "Câu chào, câu giới thiệu bản thân và cách tạm biệt — những câu đầu tiên của mọi cuộc gặp.",
  "sections": [
   {
    "name": "Chào hỏi",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "Hello. / Hi.",
       "Xin chào."
      ],
      [
       "Good morning / afternoon / evening.",
       "Chào buổi sáng / chiều / tối."
      ],
      [
       "How are you?",
       "Bạn khỏe không?"
      ],
      [
       "I'm fine, thanks. And you?",
       "Tôi khỏe, cảm ơn. Còn bạn?"
      ],
      [
       "Nice to meet you.",
       "Rất vui được gặp bạn."
      ],
      [
       "Nice to meet you too.",
       "Tôi cũng rất vui được gặp bạn."
      ]
     ]
    },
    "examples": [
     {
      "en": "Good morning! How are you today?",
      "vi": "Chào buổi sáng! Hôm nay bạn khỏe không?"
     },
     {
      "en": "I'm fine, thank you. And you?",
      "vi": "Tôi khỏe, cảm ơn bạn. Còn bạn thì sao?"
     }
    ]
   },
   {
    "name": "Giới thiệu bản thân và người khác",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "My name is Lan. / I'm Lan.",
       "Tôi tên Lan."
      ],
      [
       "I'm from Vietnam.",
       "Tôi đến từ Việt Nam."
      ],
      [
       "I work for a small company.",
       "Tôi làm cho một công ty nhỏ."
      ],
      [
       "This is my friend, Nam.",
       "Đây là bạn tôi, Nam."
      ],
      [
       "Have you met Nam?",
       "Bạn gặp Nam chưa?"
      ],
      [
       "Let me introduce my colleague.",
       "Để tôi giới thiệu đồng nghiệp của tôi."
      ]
     ]
    },
    "examples": [
     {
      "en": "Hi, I'm Nam. I'm from Hanoi.",
      "vi": "Chào, tôi là Nam. Tôi đến từ Hà Nội."
     },
     {
      "en": "This is my wife, Lan.",
      "vi": "Đây là vợ tôi, Lan."
     }
    ]
   },
   {
    "name": "Tạm biệt",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "Goodbye. / Bye.",
       "Tạm biệt."
      ],
      [
       "See you tomorrow.",
       "Hẹn gặp lại ngày mai."
      ],
      [
       "See you later.",
       "Hẹn gặp lại sau."
      ],
      [
       "Have a nice day.",
       "Chúc một ngày tốt lành."
      ],
      [
       "Take care.",
       "Giữ gìn sức khỏe nhé."
      ],
      [
       "It was nice meeting you.",
       "Rất vui được gặp bạn."
      ]
     ]
    },
    "examples": [
     {
      "en": "See you on Monday. Have a nice weekend!",
      "vi": "Hẹn gặp thứ Hai. Chúc cuối tuần vui vẻ!"
     },
     {
      "en": "It was nice meeting you. Take care.",
      "vi": "Rất vui được gặp bạn. Giữ gìn sức khỏe nhé."
     }
    ]
   }
  ],
  "tips": [
   "How are you? là câu chào, không phải câu hỏi thăm bệnh — cứ trả lời ngắn gọn rồi hỏi lại \"And you?\".",
   "Gặp lần đầu nói \"Nice to meet you\"; gặp lại người quen nói \"Nice to see you again\".",
   "Good night là câu chào lúc chia tay buổi tối hoặc trước khi ngủ, không dùng để chào khi gặp.",
   "Trong môi trường trang trọng, gọi Mr / Ms + họ: Mr Brown, Ms Smith.",
   "Người Anh Mỹ bắt tay khi gặp lần đầu, không cúi chào."
  ]
 },
 {
  "id": "howto-personal",
  "title": "Nói sao để… hỏi và cho thông tin cá nhân",
  "en": "How to … ask for and give personal information",
  "intro": "Tên, tuổi, nghề nghiệp, số điện thoại, email — bộ câu dùng khi đăng ký, khai thông tin hay làm quen.",
  "sections": [
   {
    "name": "Tên và cách đánh vần",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "What's your name?",
       "Bạn tên gì?"
      ],
      [
       "My name is Hiep.",
       "Tôi tên Hiệp."
      ],
      [
       "What's your surname?",
       "Họ của bạn là gì?"
      ],
      [
       "How do you spell that?",
       "Đánh vần thế nào ạ?"
      ],
      [
       "H-I-E-P.",
       "H-I-Ê-P."
      ],
      [
       "Could you say that again, please?",
       "Nhắc lại giúp tôi được không?"
      ]
     ]
    },
    "examples": [
     {
      "en": "What's your name? — My name is Lan.",
      "vi": "Bạn tên gì? — Tôi tên Lan."
     },
     {
      "en": "How do you spell your surname?",
      "vi": "Họ của bạn đánh vần thế nào?"
     }
    ]
   },
   {
    "name": "Tuổi, nghề nghiệp, nơi sống",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "How old are you?",
       "Bạn bao nhiêu tuổi?"
      ],
      [
       "I'm thirty years old.",
       "Tôi ba mươi tuổi."
      ],
      [
       "What do you do?",
       "Bạn làm nghề gì?"
      ],
      [
       "I'm an engineer.",
       "Tôi là kỹ sư."
      ],
      [
       "Where do you live?",
       "Bạn sống ở đâu?"
      ],
      [
       "I live in Ho Chi Minh City.",
       "Tôi sống ở Thành phố Hồ Chí Minh."
      ],
      [
       "Are you married?",
       "Bạn lập gia đình chưa?"
      ]
     ]
    },
    "examples": [
     {
      "en": "What do you do? — I'm a nurse.",
      "vi": "Bạn làm nghề gì? — Tôi là y tá."
     },
     {
      "en": "I live in District 7 with my family.",
      "vi": "Tôi sống ở Quận 7 cùng gia đình."
     }
    ]
   },
   {
    "name": "Số điện thoại, email, địa chỉ",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "What's your phone number?",
       "Số điện thoại của bạn là gì?"
      ],
      [
       "It's 0912 345 678.",
       "Số là 0912 345 678."
      ],
      [
       "What's your email address?",
       "Email của bạn là gì?"
      ],
      [
       "It's lan at gmail dot com.",
       "Là lan@gmail.com."
      ],
      [
       "What's your address?",
       "Địa chỉ của bạn là gì?"
      ],
      [
       "Sorry, I didn't catch that.",
       "Xin lỗi, tôi nghe không rõ."
      ]
     ]
    },
    "examples": [
     {
      "en": "What's your phone number, please?",
      "vi": "Cho tôi hỏi số điện thoại của bạn?"
     },
     {
      "en": "Sorry, could you repeat the last three numbers?",
      "vi": "Xin lỗi, nhắc lại ba số cuối giúp tôi?"
     }
    ]
   }
  ],
  "tips": [
   "Đọc số điện thoại từng số một; hai số giống nhau liền nhau thì nói \"double\": 0 9 double 1 2.",
   "Đọc email: @ là \"at\", dấu chấm là \"dot\".",
   "\"What do you do?\" là hỏi nghề nghiệp, còn \"What are you doing?\" là hỏi đang làm gì lúc này.",
   "Nghề nghiệp phải có a / an ở trước: \"I'm a teacher\" ✓, \"I'm teacher\" ✗.",
   "Không hỏi tuổi hay lương người mới quen ở nước ngoài — bị coi là riêng tư."
  ]
 },
 {
  "id": "howto-time",
  "title": "Nói sao để… nói giờ và kể việc hằng ngày",
  "en": "How to … tell the time and talk about your day",
  "intro": "Xem giờ, nói thứ ngày tháng và kể lại một ngày của mình — phần đi kèm thì hiện tại đơn.",
  "sections": [
   {
    "name": "Hỏi và nói giờ",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "What time is it?",
       "Mấy giờ rồi?"
      ],
      [
       "It's seven o'clock.",
       "Bảy giờ đúng."
      ],
      [
       "It's half past seven.",
       "Bảy giờ rưỡi."
      ],
      [
       "It's a quarter past eight.",
       "Tám giờ mười lăm."
      ],
      [
       "It's a quarter to nine.",
       "Chín giờ kém mười lăm."
      ],
      [
       "It's ten to six.",
       "Sáu giờ kém mười."
      ],
      [
       "At seven in the morning / in the evening.",
       "Lúc bảy giờ sáng / tối."
      ]
     ]
    },
    "examples": [
     {
      "en": "What time is it? — It's half past six.",
      "vi": "Mấy giờ rồi? — Sáu giờ rưỡi."
     },
     {
      "en": "The meeting starts at a quarter to ten.",
      "vi": "Cuộc họp bắt đầu lúc mười giờ kém mười lăm."
     }
    ]
   },
   {
    "name": "Thứ, ngày, tháng",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "What day is it today?",
       "Hôm nay thứ mấy?"
      ],
      [
       "It's Tuesday.",
       "Hôm nay thứ Ba."
      ],
      [
       "What's the date today?",
       "Hôm nay ngày mấy?"
      ],
      [
       "It's the third of May.",
       "Hôm nay mùng ba tháng Năm."
      ],
      [
       "on Monday · in July · in 2026",
       "vào thứ Hai · vào tháng Bảy · vào năm 2026"
      ],
      [
       "My birthday is on the tenth of June.",
       "Sinh nhật tôi ngày mười tháng Sáu."
      ]
     ]
    },
    "examples": [
     {
      "en": "What's the date today? — It's the first of October.",
      "vi": "Hôm nay ngày mấy? — Mùng một tháng Mười."
     },
     {
      "en": "I have a class on Thursday evening.",
      "vi": "Tôi có lớp vào tối thứ Năm."
     }
    ]
   },
   {
    "name": "Kể việc hằng ngày",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "I get up at six.",
       "Tôi dậy lúc sáu giờ."
      ],
      [
       "I have breakfast at half past six.",
       "Tôi ăn sáng lúc sáu giờ rưỡi."
      ],
      [
       "I go to work by motorbike.",
       "Tôi đi làm bằng xe máy."
      ],
      [
       "I start work at eight.",
       "Tôi bắt đầu làm lúc tám giờ."
      ],
      [
       "I finish work at five.",
       "Tôi tan làm lúc năm giờ."
      ],
      [
       "I go to bed at about eleven.",
       "Tôi đi ngủ khoảng mười một giờ."
      ]
     ]
    },
    "examples": [
     {
      "en": "I get up at six and have breakfast with my family.",
      "vi": "Tôi dậy lúc sáu giờ rồi ăn sáng cùng gia đình."
     },
     {
      "en": "She finishes work at five and goes to the gym.",
      "vi": "Cô ấy tan làm lúc năm giờ rồi đi tập gym."
     }
    ]
   }
  ],
  "tips": [
   "Giờ hơn dùng past, giờ kém dùng to: ten past seven (7:10), ten to seven (6:50).",
   "Cách nói nhanh gọn hơn là đọc thẳng số: 7:45 = seven forty-five.",
   "Dùng at với giờ, on với thứ và ngày, in với tháng, mùa, năm.",
   "Thứ và tháng luôn viết hoa trong tiếng Anh: Monday, July.",
   "o'clock chỉ dùng với giờ đúng: \"five o'clock\" ✓, \"five thirty o'clock\" ✗."
  ]
 },
 {
  "id": "howto-family",
  "title": "Nói sao để… nói về gia đình và bạn bè",
  "en": "How to … talk about your family and friends",
  "intro": "Gọi tên các thành viên trong nhà, miêu tả ngoại hình và tính cách, và hỏi về gia đình người khác.",
  "sections": [
   {
    "name": "Thành viên trong gia đình",
    "table": {
     "head": [
      "Từ",
      "Nghĩa"
     ],
     "rows": [
      [
       "parents · father · mother",
       "ba mẹ · bố · mẹ"
      ],
      [
       "brother · sister",
       "anh/em trai · chị/em gái"
      ],
      [
       "husband · wife",
       "chồng · vợ"
      ],
      [
       "son · daughter · child",
       "con trai · con gái · con"
      ],
      [
       "grandparents · grandfather · grandmother",
       "ông bà · ông · bà"
      ],
      [
       "uncle · aunt · cousin",
       "chú/bác · cô/dì · anh chị em họ"
      ]
     ]
    },
    "examples": [
     {
      "en": "I have one brother and two sisters.",
      "vi": "Tôi có một anh trai và hai chị gái."
     },
     {
      "en": "My grandmother lives with us.",
      "vi": "Bà tôi sống cùng chúng tôi."
     }
    ]
   },
   {
    "name": "Miêu tả người",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "He is tall and thin.",
       "Anh ấy cao và gầy."
      ],
      [
       "She has long black hair.",
       "Cô ấy có mái tóc đen dài."
      ],
      [
       "He has brown eyes.",
       "Anh ấy có đôi mắt nâu."
      ],
      [
       "She is very friendly.",
       "Cô ấy rất thân thiện."
      ],
      [
       "He is a bit shy.",
       "Anh ấy hơi nhút nhát."
      ],
      [
       "She looks like her mother.",
       "Cô ấy giống mẹ."
      ]
     ]
    },
    "examples": [
     {
      "en": "My sister is tall and has short hair.",
      "vi": "Chị tôi cao và để tóc ngắn."
     },
     {
      "en": "My best friend is quiet but very kind.",
      "vi": "Bạn thân tôi ít nói nhưng rất tốt bụng."
     }
    ]
   },
   {
    "name": "Hỏi về gia đình người khác",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "Do you have any brothers or sisters?",
       "Bạn có anh chị em không?"
      ],
      [
       "How many people are there in your family?",
       "Nhà bạn có mấy người?"
      ],
      [
       "Do you live with your parents?",
       "Bạn sống với ba mẹ à?"
      ],
      [
       "What does your father do?",
       "Ba bạn làm nghề gì?"
      ],
      [
       "How old is your daughter?",
       "Con gái bạn mấy tuổi?"
      ],
      [
       "Tell me about your family.",
       "Kể tôi nghe về gia đình bạn đi."
      ]
     ]
    },
    "examples": [
     {
      "en": "Do you have any brothers or sisters? — Yes, one brother.",
      "vi": "Bạn có anh chị em không? — Có, một anh trai."
     },
     {
      "en": "There are five people in my family.",
      "vi": "Nhà tôi có năm người."
     }
    ]
   }
  ],
  "tips": [
   "Tiếng Anh không phân biệt anh/em như tiếng Việt: cứ là brother, cần rõ thì nói older brother hay younger brother.",
   "Tóc và mắt dùng have: \"She has long hair\" ✓, chứ không phải \"She is long hair\".",
   "Chiều cao, tính cách dùng be: \"He is tall\", \"She is friendly\".",
   "parents là ba mẹ, còn relatives là họ hàng nói chung.",
   "Miêu tả nhiều tính từ thì xếp theo thứ tự: ý kiến → kích cỡ → tuổi → màu sắc: \"a beautiful little old house\"."
  ]
 },
 {
  "id": "pp-vs-past",
  "title": "Hiện tại hoàn thành hay quá khứ đơn?",
  "en": "Present perfect or past simple?",
  "intro": "Hai thì này đều nói chuyện đã xảy ra, nhưng khác nhau ở chỗ: có nói rõ thời điểm trong quá khứ hay không.",
  "sections": [
   {
    "name": "Khác nhau chỗ nào",
    "fx": [
     [
      "1",
      "Quá khứ đơn: việc đã xong, CÓ mốc thời gian quá khứ (yesterday, last week, in 2020, ago)"
     ],
     [
      "2",
      "Hiện tại hoàn thành: việc đã xảy ra nhưng KHÔNG nói rõ lúc nào, hoặc còn liên quan đến hiện tại"
     ]
    ],
    "usage": "Chỉ cần câu có mốc thời gian quá khứ đã kết thúc là phải dùng quá khứ đơn.",
    "table": {
     "head": [
      "Quá khứ đơn",
      "Hiện tại hoàn thành"
     ],
     "rows": [
      [
       "I saw that film last night.",
       "I have seen that film. (không nói lúc nào)"
      ],
      [
       "She lived in Hue for five years. (giờ không còn)",
       "She has lived in Hue for five years. (vẫn đang sống)"
      ],
      [
       "Did you eat? (bữa đó)",
       "Have you eaten yet? (tính đến giờ)"
      ],
      [
       "He came back two days ago.",
       "He has just come back."
      ]
     ]
    },
    "examples": [
     {
      "en": "I went to Japan in 2019.",
      "vi": "Tôi đã đi Nhật vào năm 2019."
     },
     {
      "en": "I have been to Japan twice.",
      "vi": "Tôi đã đến Nhật hai lần rồi."
     }
    ]
   },
   {
    "name": "Từ tín hiệu",
    "usage": "Nhìn trạng từ là đoán được thì. Mỗi nhóm đi với một thì.",
    "table": {
     "head": [
      "Đi với quá khứ đơn",
      "Đi với hiện tại hoàn thành"
     ],
     "rows": [
      [
       "yesterday, last night, last year",
       "today, this week, this year"
      ],
      [
       "two days ago, in 2020",
       "for two days, since 2020"
      ],
      [
       "when I was young",
       "just, already, yet, recently"
      ],
      [
       "What time…? When…?",
       "ever, never, so far, up to now"
      ]
     ]
    },
    "examples": [
     {
      "en": "I haven't seen her since Monday.",
      "vi": "Tôi không gặp cô ấy từ thứ Hai."
     },
     {
      "en": "We finished the report yesterday.",
      "vi": "Chúng tôi làm xong báo cáo hôm qua."
     }
    ]
   },
   {
    "name": "for, since, just, already, yet",
    "formula": "for + khoảng thời gian · since + mốc bắt đầu · just / already đứng trước V3 · yet đứng cuối câu phủ định và câu hỏi",
    "table": {
     "head": [
      "Từ",
      "Dùng thế nào",
      "Ví dụ"
     ],
     "rows": [
      [
       "for",
       "+ khoảng thời gian",
       "for three years · for a week"
      ],
      [
       "since",
       "+ mốc thời gian",
       "since 2020 · since last May"
      ],
      [
       "just",
       "vừa mới xong",
       "I have just finished."
      ],
      [
       "already",
       "đã rồi (sớm hơn mong đợi)",
       "She has already left."
      ],
      [
       "yet",
       "chưa / đã… chưa",
       "I haven't eaten yet. · Have you called her yet?"
      ]
     ]
    },
    "examples": [
     {
      "en": "I have worked here for six months.",
      "vi": "Tôi làm ở đây được sáu tháng rồi."
     },
     {
      "en": "They haven't arrived yet.",
      "vi": "Họ vẫn chưa tới."
     }
    ]
   }
  ],
  "tips": [
   "Câu có ago luôn là quá khứ đơn: \"I have met him two days ago\" ✗ → \"I met him two days ago\" ✓.",
   "When…? luôn đi với quá khứ đơn, vì câu hỏi này hỏi đúng thời điểm.",
   "have been to = đã từng đến (giờ đã về); have gone to = đã đi và còn đang ở đó.",
   "Tiếng Việt đều nói \"đã\" nên dễ nhầm — hãy tự hỏi: câu này có nói rõ lúc nào không?",
   "Với this morning / today: còn trong ngày thì dùng hiện tại hoàn thành, hết ngày rồi thì quá khứ đơn."
  ]
 },
 {
  "id": "future-forms",
  "title": "Ba cách nói tương lai: will, be going to, hiện tại tiếp diễn",
  "en": "Talking about the future: will, going to, present continuous",
  "intro": "Tiếng Anh có ba cách nói chuyện sắp tới, và chọn cách nào là tùy việc đó đã được quyết định hay sắp xếp đến đâu.",
  "sections": [
   {
    "name": "Chọn cách nào",
    "fx": [
     [
      "1",
      "will + V: quyết định ngay lúc nói, dự đoán, lời hứa"
     ],
     [
      "2",
      "be going to + V: dự định đã có sẵn, hoặc dự đoán dựa trên dấu hiệu đang thấy"
     ],
     [
      "3",
      "hiện tại tiếp diễn: lịch hẹn đã sắp xếp chắc chắn, đã hẹn với ai đó"
     ]
    ],
    "table": {
     "head": [
      "Cách nói",
      "Dùng khi",
      "Ví dụ"
     ],
     "rows": [
      [
       "will",
       "quyết định ngay lúc nói",
       "It's cold. I'll close the window."
      ],
      [
       "will",
       "dự đoán theo cảm nhận",
       "I think he will like it."
      ],
      [
       "be going to",
       "dự định đã có từ trước",
       "I'm going to look for a new job."
      ],
      [
       "be going to",
       "dự đoán theo dấu hiệu",
       "Look at the sky! It's going to rain."
      ],
      [
       "hiện tại tiếp diễn",
       "lịch hẹn cụ thể",
       "I'm meeting the doctor at ten tomorrow."
      ]
     ]
    },
    "examples": [
     {
      "en": "I'm going to study English this summer.",
      "vi": "Hè này tôi định học tiếng Anh."
     },
     {
      "en": "The phone is ringing. I'll answer it.",
      "vi": "Điện thoại reo kìa. Để tôi nghe."
     }
    ]
   },
   {
    "name": "Lịch cố định dùng hiện tại đơn",
    "formula": "Hiện tại đơn cho lịch tàu xe, giờ chiếu phim, giờ học — những việc chạy theo thời gian biểu",
    "table": {
     "head": [
      "Câu",
      "Vì sao"
     ],
     "rows": [
      [
       "The train leaves at 6:30.",
       "lịch tàu cố định"
      ],
      [
       "The film starts at eight.",
       "giờ chiếu đã in sẵn"
      ],
      [
       "My class finishes on Friday.",
       "lịch học của trường"
      ],
      [
       "I'm leaving at six.",
       "kế hoạch riêng của tôi → tiếp diễn"
      ]
     ]
    },
    "examples": [
     {
      "en": "Our flight leaves at seven in the morning.",
      "vi": "Chuyến bay của chúng ta khởi hành lúc bảy giờ sáng."
     },
     {
      "en": "I'm flying to Hanoi on Sunday.",
      "vi": "Chủ nhật tôi bay ra Hà Nội."
     }
    ]
   }
  ],
  "tips": [
   "Dự định đã nghĩ từ trước thì dùng going to; nghĩ ra ngay lúc đang nói thì dùng will.",
   "Thấy dấu hiệu rõ ràng trước mắt thì dùng going to, không dùng will: mây đen kéo tới → \"It's going to rain\".",
   "Hiện tại tiếp diễn chỉ dùng cho tương lai khi đã hẹn chắc, thường có cả thời gian và nơi chốn.",
   "Lời hứa, lời đề nghị giúp, quyết định nhanh đều dùng will: \"I'll help you.\"",
   "Trong mệnh đề sau when, if, as soon as thì không dùng will: \"when he arrives\" chứ không phải \"when he will arrive\"."
  ]
 },
 {
  "id": "modal-deduction",
  "title": "Suy đoán: must be, might be, can't be",
  "en": "Modals of deduction: must, might, can't",
  "intro": "Khi không chắc chắn mà chỉ suy đoán, tiếng Anh dùng động từ khuyết thiếu để cho biết mình tin đến mức nào.",
  "sections": [
   {
    "name": "Thang độ chắc chắn",
    "fx": [
     [
      "+",
      "Chủ ngữ + must + V (nguyên thể): gần như chắc chắn đúng"
     ],
     [
      "±",
      "Chủ ngữ + may / might / could + V: có thể, không chắc"
     ],
     [
      "−",
      "Chủ ngữ + can't + V: gần như chắc chắn không đúng"
     ]
    ],
    "usage": "Chỉ dùng khi suy đoán, không dùng khi đã biết chắc. Sau các từ này luôn là động từ nguyên thể.",
    "table": {
     "head": [
      "Mức tin",
      "Từ dùng",
      "Ví dụ"
     ],
     "rows": [
      [
       "95% đúng",
       "must",
       "He must be at work. His car isn't here."
      ],
      [
       "50% có thể",
       "may / might / could",
       "She might be in the kitchen."
      ],
      [
       "95% sai",
       "can't",
       "That can't be Nam. He is in Hue."
      ]
     ]
    },
    "examples": [
     {
      "en": "The light is on, so they must be at home.",
      "vi": "Đèn đang sáng nên chắc chắn họ ở nhà."
     },
     {
      "en": "This can't be her bag; hers is black.",
      "vi": "Đây không thể là túi của cô ấy; túi cô ấy màu đen."
     }
    ]
   },
   {
    "name": "Suy đoán việc đang diễn ra",
    "formula": "Chủ ngữ + must / might / can't + be + V-ing",
    "usage": "Muốn đoán ai đó đang làm gì ngay lúc này thì thêm be + V-ing.",
    "table": {
     "head": [
      "Câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "He must be sleeping.",
       "Chắc anh ấy đang ngủ."
      ],
      [
       "She might be working late.",
       "Có thể cô ấy đang làm muộn."
      ],
      [
       "They can't be waiting outside.",
       "Họ không thể đang đợi bên ngoài."
      ]
     ]
    },
    "examples": [
     {
      "en": "She isn't answering. She must be driving.",
      "vi": "Cô ấy không nghe máy. Chắc đang lái xe."
     },
     {
      "en": "They might be having dinner now.",
      "vi": "Có thể giờ họ đang ăn tối."
     }
    ]
   }
  ],
  "tips": [
   "Phủ định của must (suy đoán) là can't, không phải mustn't: \"He can't be at home\" ✓.",
   "mustn't nghĩa là cấm, hoàn toàn khác với suy đoán.",
   "may, might, could trong nghĩa suy đoán gần như thay nhau được; might nghe ít chắc hơn may một chút.",
   "Sau must / might / can't luôn là nguyên thể: \"must be\", \"might go\", không có to.",
   "Muốn suy đoán về quá khứ thì dùng must have / might have / can't have + V3 (xem bài ở trình độ B2)."
  ]
 },
 {
  "id": "obligation",
  "title": "Bắt buộc và không bắt buộc: have to, must, mustn't",
  "en": "Obligation: have to, must, don't have to, mustn't",
  "intro": "Nói về luật lệ và nghĩa vụ. Chỗ dễ sai nhất là don't have to (không cần) và mustn't (cấm) — nghĩa khác hẳn nhau.",
  "sections": [
   {
    "name": "Bốn cách nói",
    "fx": [
     [
      "+",
      "Chủ ngữ + must + V · Chủ ngữ + have to / has to + V"
     ],
     [
      "−",
      "Chủ ngữ + mustn't + V (cấm) · Chủ ngữ + don't / doesn't have to + V (không cần)"
     ],
     [
      "?",
      "Do / Does + chủ ngữ + have to + V?"
     ]
    ],
    "table": {
     "head": [
      "Cấu trúc",
      "Nghĩa",
      "Ví dụ"
     ],
     "rows": [
      [
       "must",
       "bắt buộc, do người nói thấy cần",
       "I must call my mother tonight."
      ],
      [
       "have to",
       "bắt buộc do quy định bên ngoài",
       "I have to wear a uniform at work."
      ],
      [
       "mustn't",
       "cấm, không được phép",
       "You mustn't park here."
      ],
      [
       "don't have to",
       "không cần, tùy bạn",
       "You don't have to come early."
      ],
      [
       "should",
       "nên, lời khuyên",
       "You should see a doctor."
      ]
     ]
    },
    "examples": [
     {
      "en": "You mustn't use your phone during the exam.",
      "vi": "Bạn không được dùng điện thoại trong lúc thi."
     },
     {
      "en": "You don't have to pay now; you can pay later.",
      "vi": "Bạn không cần trả ngay; trả sau cũng được."
     }
    ]
   },
   {
    "name": "Ở các thì khác",
    "formula": "Quá khứ: had to + V · Tương lai: will have to + V · Phủ định quá khứ: didn't have to + V",
    "usage": "must không có dạng quá khứ, nên muốn nói chuyện đã qua thì phải mượn had to.",
    "table": {
     "head": [
      "Thì",
      "Khẳng định",
      "Phủ định"
     ],
     "rows": [
      [
       "Hiện tại",
       "have to / has to",
       "don't / doesn't have to"
      ],
      [
       "Quá khứ",
       "had to",
       "didn't have to"
      ],
      [
       "Tương lai",
       "will have to",
       "won't have to"
      ]
     ]
    },
    "examples": [
     {
      "en": "I had to work last Saturday.",
      "vi": "Thứ Bảy tuần trước tôi phải đi làm."
     },
     {
      "en": "We will have to leave before six.",
      "vi": "Chúng ta sẽ phải đi trước sáu giờ."
     }
    ]
   }
  ],
  "tips": [
   "mustn't = cấm; don't have to = không cần. Nhầm hai cái này là đổi hẳn nghĩa câu.",
   "Quá khứ của must là had to: \"I must go yesterday\" ✗ → \"I had to go yesterday\" ✓.",
   "Câu hỏi hầu như luôn dùng have to: \"Do I have to book?\" chứ ít ai hỏi \"Must I book?\".",
   "need to gần nghĩa have to nhưng nhẹ hơn; needn't = don't need to = không cần.",
   "Biển báo, nội quy hay dùng must: \"Passengers must show their tickets.\""
  ]
 },
 {
  "id": "time-clauses",
  "title": "Mệnh đề thời gian: when, as soon as, until",
  "en": "Future time clauses: when, as soon as, until, before",
  "intro": "Nói chuyện tương lai nhưng sau when, as soon as, until, before, after thì dùng thì hiện tại — đây là lỗi người Việt mắc nhiều nhất.",
  "sections": [
   {
    "name": "Quy tắc không dùng will",
    "formula": "When / As soon as / Until / Before / After + hiện tại đơn, mệnh đề chính dùng will + V",
    "usage": "Chỉ mệnh đề chính được dùng will. Mệnh đề thời gian luôn ở thì hiện tại dù nói về tương lai.",
    "table": {
     "head": [
      "Từ nối",
      "Nghĩa",
      "Ví dụ"
     ],
     "rows": [
      [
       "when",
       "khi",
       "I will call you when I arrive."
      ],
      [
       "as soon as",
       "ngay khi",
       "Call me as soon as you land."
      ],
      [
       "until",
       "cho đến khi",
       "Wait here until I come back."
      ],
      [
       "before",
       "trước khi",
       "Finish it before you go home."
      ],
      [
       "after",
       "sau khi",
       "We will eat after the film ends."
      ]
     ]
    },
    "examples": [
     {
      "en": "I will text you as soon as I get home.",
      "vi": "Tôi sẽ nhắn cho bạn ngay khi tôi về tới nhà."
     },
     {
      "en": "Don't leave until the rain stops.",
      "vi": "Đừng đi cho tới khi tạnh mưa."
     }
    ]
   },
   {
    "name": "Dùng hiện tại hoàn thành cho việc làm xong trước",
    "formula": "After / When / As soon as + chủ ngữ + have / has + V3, mệnh đề chính + will + V",
    "usage": "Muốn nhấn mạnh việc kia phải xong hẳn rồi mới tới việc này thì dùng hiện tại hoàn thành.",
    "table": {
     "head": [
      "Câu",
      "Ý nhấn mạnh"
     ],
     "rows": [
      [
       "I will call you when I finish.",
       "hai việc nối nhau"
      ],
      [
       "I will call you when I have finished.",
       "xong hẳn rồi mới gọi"
      ],
      [
       "We will go out after we have eaten.",
       "ăn xong rồi mới đi"
      ]
     ]
    },
    "examples": [
     {
      "en": "I will go to bed after I have packed my bag.",
      "vi": "Tôi sẽ đi ngủ sau khi xếp xong hành lý."
     },
     {
      "en": "She will decide when she has read the report.",
      "vi": "Cô ấy sẽ quyết định khi đọc xong báo cáo."
     }
    ]
   }
  ],
  "tips": [
   "Không dùng will sau when, as soon as, until, before, after: \"when he will come\" ✗ → \"when he comes\" ✓.",
   "Nhưng when làm từ hỏi thì vẫn dùng will được: \"When will he come?\" ✓.",
   "until vừa là giới từ vừa là liên từ: until six o'clock · until I come back.",
   "Mệnh đề thời gian đứng trước thì có dấu phẩy: \"When I arrive, I will call you.\"",
   "if cũng theo quy tắc này: \"If it rains, we will stay in.\""
  ]
 },
 {
  "id": "quantifiers",
  "title": "Lượng từ: much, many, a few, a little, plenty of",
  "en": "Quantifiers: much, many, a few, a little, plenty of",
  "intro": "Nói nhiều hay ít. Chọn từ nào là tùy danh từ đếm được hay không, và tùy câu khẳng định hay phủ định.",
  "sections": [
   {
    "name": "Bảng lượng từ",
    "usage": "much đi với danh từ không đếm được, many đi với danh từ số nhiều. a lot of dùng được cho cả hai.",
    "table": {
     "head": [
      "Lượng từ",
      "Đi với",
      "Ví dụ"
     ],
     "rows": [
      [
       "much",
       "không đếm được (chủ yếu trong câu phủ định, câu hỏi)",
       "much time · How much water?"
      ],
      [
       "many",
       "số nhiều",
       "many people · How many books?"
      ],
      [
       "a lot of / lots of",
       "cả hai",
       "a lot of money · a lot of friends"
      ],
      [
       "plenty of",
       "cả hai, nghĩa dư dả",
       "plenty of time · plenty of chairs"
      ],
      [
       "a few / few",
       "số nhiều",
       "a few friends (vài) · few friends (rất ít)"
      ],
      [
       "a little / little",
       "không đếm được",
       "a little sugar (một ít) · little sugar (hầu như không)"
      ],
      [
       "most of / some of / none of",
       "cả hai + the…",
       "most of the students"
      ]
     ]
    },
    "examples": [
     {
      "en": "We don't have much time left.",
      "vi": "Chúng ta không còn nhiều thời gian."
     },
     {
      "en": "There are plenty of good restaurants near here.",
      "vi": "Gần đây có rất nhiều quán ăn ngon."
     }
    ]
   },
   {
    "name": "too much, too many, enough",
    "formula": "too much + danh từ không đếm được · too many + danh từ số nhiều · enough + danh từ · tính từ + enough",
    "usage": "too mang nghĩa quá mức, không tốt. enough là vừa đủ.",
    "table": {
     "head": [
      "Cấu trúc",
      "Ví dụ",
      "Nghĩa"
     ],
     "rows": [
      [
       "too much + N không đếm được",
       "too much salt",
       "quá nhiều muối"
      ],
      [
       "too many + N số nhiều",
       "too many people",
       "quá đông người"
      ],
      [
       "enough + N",
       "enough chairs",
       "đủ ghế"
      ],
      [
       "adj + enough",
       "big enough",
       "đủ lớn"
      ],
      [
       "not enough + N",
       "not enough money",
       "không đủ tiền"
      ]
     ]
    },
    "examples": [
     {
      "en": "There is too much sugar in this coffee.",
      "vi": "Ly cà phê này nhiều đường quá."
     },
     {
      "en": "We don't have enough chairs for everyone.",
      "vi": "Chúng ta không đủ ghế cho mọi người."
     }
    ]
   }
  ],
  "tips": [
   "a few / a little mang nghĩa tích cực (có một ít); few / little mang nghĩa tiêu cực (gần như không có).",
   "Trong câu khẳng định, much nghe sách vở — người bản xứ nói a lot of: \"I have a lot of work\" tự nhiên hơn \"much work\".",
   "enough đứng SAU tính từ nhưng đứng TRƯỚC danh từ: \"warm enough\", \"enough money\".",
   "most of, some of, none of phải có the hoặc từ sở hữu: \"most of the students\" ✓, \"most of students\" ✗.",
   "too không có nghĩa là \"rất\": \"too hot\" là nóng quá chịu không nổi, còn \"very hot\" chỉ là rất nóng."
  ]
 },
 {
  "id": "indefinite",
  "title": "Đại từ bất định: something, anyone, nobody",
  "en": "Indefinite pronouns: something, anyone, nobody, everywhere",
  "intro": "Nhóm từ ghép từ some, any, no, every với -thing, -one/-body, -where. Nhớ bảng này là nói được rất nhiều câu.",
  "sections": [
   {
    "name": "Bảng chín từ",
    "usage": "some- dùng trong câu khẳng định, any- dùng trong câu phủ định và câu hỏi, no- đã mang nghĩa phủ định sẵn.",
    "table": {
     "head": [
      "",
      "-thing (vật)",
      "-one / -body (người)",
      "-where (nơi)"
     ],
     "rows": [
      [
       "some-",
       "something",
       "someone / somebody",
       "somewhere"
      ],
      [
       "any-",
       "anything",
       "anyone / anybody",
       "anywhere"
      ],
      [
       "no-",
       "nothing",
       "no one / nobody",
       "nowhere"
      ],
      [
       "every-",
       "everything",
       "everyone / everybody",
       "everywhere"
      ]
     ]
    },
    "examples": [
     {
      "en": "There is something in my bag.",
      "vi": "Có cái gì đó trong túi tôi."
     },
     {
      "en": "I didn't see anyone at the office.",
      "vi": "Tôi không thấy ai ở văn phòng cả."
     }
    ]
   },
   {
    "name": "Cách dùng trong câu",
    "formula": "Khẳng định: some- · Phủ định và câu hỏi: any- · no- đi với động từ khẳng định",
    "usage": "Không dùng hai phủ định trong một câu: \"I didn't see nobody\" là sai.",
    "table": {
     "head": [
      "Câu",
      "Đúng / Sai"
     ],
     "rows": [
      [
       "I know someone in Hanoi.",
       "✓ khẳng định"
      ],
      [
       "Is there anything to eat?",
       "✓ câu hỏi"
      ],
      [
       "I don't need anything.",
       "✓ phủ định với any-"
      ],
      [
       "I need nothing.",
       "✓ phủ định với no-"
      ],
      [
       "I don't need nothing.",
       "✗ hai lần phủ định"
      ]
     ]
    },
    "examples": [
     {
      "en": "Nobody answered the phone.",
      "vi": "Không ai nghe máy cả."
     },
     {
      "en": "Would you like something to drink?",
      "vi": "Bạn uống gì nhé?"
     }
    ]
   }
  ],
  "tips": [
   "Các từ này là số ít: \"Everybody is here\" ✓, \"Everybody are here\" ✗.",
   "Tính từ đứng SAU chúng: \"something new\", \"nothing special\", \"somewhere quiet\".",
   "Trong lời mời hay đề nghị, câu hỏi vẫn dùng some-: \"Would you like something to eat?\"",
   "anything trong câu khẳng định nghĩa là \"bất cứ thứ gì\": \"You can order anything you like.\"",
   "-body và -one giống hệt nhau về nghĩa; -one nghe hơi trang trọng hơn một chút."
  ]
 },
 {
  "id": "so-neither",
  "title": "So do I / Neither do I",
  "en": "So do I / Neither do I",
  "intro": "Cách nói \"tôi cũng vậy\" chỉ trong ba từ. Dùng So khi đồng ý với câu khẳng định, Neither khi đồng ý với câu phủ định.",
  "sections": [
   {
    "name": "Công thức",
    "fx": [
     [
      "+",
      "So + trợ động từ + chủ ngữ (So do I, So am I, So did we)"
     ],
     [
      "−",
      "Neither / Nor + trợ động từ + chủ ngữ (Neither do I · Neither have I)"
     ]
    ],
    "usage": "Trợ động từ phải khớp với câu trước: be → am/is/are, thì đơn → do/does/did, hoàn thành → have/has, khuyết thiếu → giữ nguyên.",
    "table": {
     "head": [
      "Câu của người kia",
      "Đáp lại"
     ],
     "rows": [
      [
       "I like coffee.",
       "So do I."
      ],
      [
       "I am tired.",
       "So am I."
      ],
      [
       "I went there last year.",
       "So did I."
      ],
      [
       "I have finished.",
       "So have I."
      ],
      [
       "I can swim.",
       "So can I."
      ],
      [
       "I don't like coffee.",
       "Neither do I."
      ],
      [
       "I can't drive.",
       "Neither can I."
      ],
      [
       "I haven't eaten.",
       "Neither have I."
      ]
     ]
    },
    "examples": [
     {
      "en": "I love Vietnamese food. — So do I.",
      "vi": "Tôi mê món Việt. — Tôi cũng vậy."
     },
     {
      "en": "I can't play the guitar. — Neither can I.",
      "vi": "Tôi không chơi được guitar. — Tôi cũng không."
     }
    ]
   },
   {
    "name": "Khi không đồng ý",
    "formula": "Khẳng định → đáp lại: Oh, I don't. · Phủ định → đáp lại: Oh, I do.",
    "usage": "Muốn nói mình khác thì giữ thứ tự chủ ngữ + trợ động từ như câu thường, không đảo.",
    "table": {
     "head": [
      "Người kia nói",
      "Giống",
      "Khác"
     ],
     "rows": [
      [
       "I like durian.",
       "So do I.",
       "Oh, I don't."
      ],
      [
       "I don't eat meat.",
       "Neither do I.",
       "Oh, I do."
      ],
      [
       "I am hungry.",
       "So am I.",
       "Oh, I'm not."
      ]
     ]
    },
    "examples": [
     {
      "en": "I don't drink coffee. — Oh, I do. Every morning.",
      "vi": "Tôi không uống cà phê. — Ồ, tôi thì có. Sáng nào cũng uống."
     },
     {
      "en": "I was born in Hue. — So was my wife.",
      "vi": "Tôi sinh ra ở Huế. — Vợ tôi cũng vậy."
     }
    ]
   }
  ],
  "tips": [
   "Nhớ đảo trật tự: \"So do I\" ✓, \"So I do\" ✗.",
   "Neither đã mang nghĩa phủ định nên động từ giữ dạng khẳng định: \"Neither do I\" ✓, \"Neither don't I\" ✗.",
   "Me too và Me neither là cách nói thân mật, dùng thoải mái trong hội thoại hằng ngày.",
   "Neither đọc được cả /ˈnaɪðə/ lẫn /ˈniːðə/, hai cách đều đúng.",
   "Nor dùng thay Neither cũng được: \"Nor do I.\""
  ]
 },
 {
  "id": "phrasal",
  "title": "Cụm động từ (phrasal verbs) thường gặp",
  "en": "Common phrasal verbs",
  "intro": "Động từ cộng thêm một giới từ nhỏ là ra nghĩa mới hẳn. Đây là nhóm từ người bản xứ dùng suốt ngày trong lời nói hằng ngày.",
  "sections": [
   {
    "name": "Nhóm hay dùng nhất",
    "table": {
     "head": [
      "Cụm động từ",
      "Nghĩa",
      "Ví dụ"
     ],
     "rows": [
      [
       "get up",
       "thức dậy",
       "I get up at six."
      ],
      [
       "look for",
       "tìm kiếm",
       "I'm looking for my keys."
      ],
      [
       "look after",
       "chăm sóc",
       "She looks after her mother."
      ],
      [
       "turn on / turn off",
       "bật / tắt",
       "Turn off the light, please."
      ],
      [
       "put on / take off",
       "mặc vào / cởi ra",
       "Put on your coat."
      ],
      [
       "give up",
       "từ bỏ",
       "He gave up smoking."
      ],
      [
       "find out",
       "tìm ra, phát hiện",
       "I found out the truth."
      ],
      [
       "pick up",
       "đón, nhặt lên",
       "I'll pick you up at seven."
      ],
      [
       "get on with",
       "hợp tính với ai",
       "I get on well with my boss."
      ],
      [
       "run out of",
       "hết sạch",
       "We've run out of milk."
      ]
     ]
    },
    "examples": [
     {
      "en": "Can you pick me up at the station?",
      "vi": "Bạn đón tôi ở nhà ga được không?"
     },
     {
      "en": "We have run out of coffee again.",
      "vi": "Chúng ta lại hết cà phê rồi."
     }
    ]
   },
   {
    "name": "Tân ngữ đặt ở đâu",
    "formula": "Tách được: turn the TV on / turn on the TV · Đại từ phải đứng giữa: turn it on · Không tách được: look after her",
    "usage": "Nhóm tách được thì danh từ đặt trước hay sau đều ổn, nhưng đại từ (it, him, them) bắt buộc đứng giữa.",
    "table": {
     "head": [
      "Loại",
      "Ví dụ đúng",
      "Ví dụ sai"
     ],
     "rows": [
      [
       "Tách được + danh từ",
       "turn on the radio · turn the radio on",
       "—"
      ],
      [
       "Tách được + đại từ",
       "turn it on",
       "turn on it ✗"
      ],
      [
       "Không tách được",
       "look after the baby · look after her",
       "look the baby after ✗"
      ]
     ]
    },
    "examples": [
     {
      "en": "I took off my shoes and put them on the shelf.",
      "vi": "Tôi cởi giày ra và để lên kệ."
     },
     {
      "en": "Who is looking after the children tonight?",
      "vi": "Tối nay ai trông bọn trẻ?"
     }
    ]
   }
  ],
  "tips": [
   "Nghĩa của cụm động từ thường không đoán được từ nghĩa từng từ — phải học cả cụm.",
   "Đại từ luôn chen vào giữa với nhóm tách được: \"pick her up\" ✓, \"pick up her\" ✗.",
   "Một cụm có thể nhiều nghĩa: take off là cởi ra, và cũng là máy bay cất cánh.",
   "Văn trang trọng thường thay bằng một động từ gốc Latinh: find out → discover, give up → abandon.",
   "Học theo chủ đề (buổi sáng, công việc, đi lại) dễ nhớ hơn học theo bảng chữ cái."
  ]
 },
 {
  "id": "howto-opinion",
  "title": "Nói sao để… nêu ý kiến, đồng ý và phản đối",
  "en": "How to … give opinions, agree and disagree",
  "intro": "Bộ câu để tham gia một cuộc thảo luận: nói mình nghĩ gì, đồng tình, phản đối lịch sự và hỏi ý người khác.",
  "sections": [
   {
    "name": "Nêu ý kiến",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "I think (that) …",
       "Tôi nghĩ là…"
      ],
      [
       "In my opinion, …",
       "Theo tôi thì…"
      ],
      [
       "If you ask me, …",
       "Nếu hỏi tôi thì…"
      ],
      [
       "It seems to me that …",
       "Với tôi thì có vẻ như…"
      ],
      [
       "I feel strongly that …",
       "Tôi thấy rõ ràng là…"
      ],
      [
       "I'm not sure, but maybe …",
       "Tôi không chắc, nhưng có thể…"
      ]
     ]
    },
    "examples": [
     {
      "en": "In my opinion, working from home saves a lot of time.",
      "vi": "Theo tôi, làm việc ở nhà tiết kiệm được nhiều thời gian."
     },
     {
      "en": "I think we should book the tickets today.",
      "vi": "Tôi nghĩ hôm nay mình nên đặt vé."
     }
    ]
   },
   {
    "name": "Đồng ý và phản đối",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "I agree with you.",
       "Tôi đồng ý với bạn."
      ],
      [
       "That's a good point.",
       "Ý đó hay đấy."
      ],
      [
       "Exactly. / Absolutely.",
       "Chính xác. / Hoàn toàn đúng."
      ],
      [
       "I see what you mean, but …",
       "Tôi hiểu ý bạn, nhưng…"
      ],
      [
       "I'm afraid I don't agree.",
       "Tôi e là tôi không đồng ý."
      ],
      [
       "I'm not so sure about that.",
       "Chỗ đó tôi không chắc lắm."
      ]
     ]
    },
    "examples": [
     {
      "en": "I see what you mean, but it is too expensive for us.",
      "vi": "Tôi hiểu ý bạn, nhưng với chúng ta thì đắt quá."
     },
     {
      "en": "That's a good point. I hadn't thought of that.",
      "vi": "Ý đó hay đấy. Tôi chưa nghĩ tới."
     }
    ]
   },
   {
    "name": "Hỏi ý người khác",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "What do you think?",
       "Bạn nghĩ sao?"
      ],
      [
       "How do you feel about it?",
       "Bạn thấy chuyện đó thế nào?"
      ],
      [
       "Do you agree?",
       "Bạn đồng ý chứ?"
      ],
      [
       "What's your view on this?",
       "Quan điểm của bạn về việc này là gì?"
      ],
      [
       "Any thoughts?",
       "Có ý kiến gì không?"
      ]
     ]
    },
    "examples": [
     {
      "en": "What do you think about the new plan?",
      "vi": "Bạn nghĩ sao về kế hoạch mới?"
     },
     {
      "en": "How do you feel about moving to Da Nang?",
      "vi": "Bạn thấy chuyện chuyển vào Đà Nẵng thế nào?"
     }
    ]
   }
  ],
  "tips": [
   "Phản đối thì mở đầu bằng một câu ghi nhận rồi mới nói khác đi — nghe lịch sự hơn nhiều.",
   "\"I'm afraid…\" là cách làm mềm câu phản đối, không phải nghĩa sợ hãi.",
   "Tránh nói cộc lốc \"You are wrong\" — người bản xứ hiếm khi nói thẳng như vậy.",
   "agree là động từ, không đi với be: \"I agree\" ✓, \"I am agree\" ✗.",
   "Nói \"In my opinion\" một lần là đủ, lặp lại nhiều lần trong một đoạn nghe rất nặng nề."
  ]
 },
 {
  "id": "modal-perfect",
  "title": "Suy đoán về quá khứ: must have, might have, can't have",
  "en": "Modal perfect: must have, might have, can't have, should have",
  "intro": "Đoán chuyện đã xảy ra, hoặc tiếc nuối một việc lẽ ra nên làm. Tất cả đều theo một khuôn: modal + have + V3.",
  "sections": [
   {
    "name": "Suy đoán chuyện đã qua",
    "fx": [
     [
      "+",
      "Chủ ngữ + must have + V3: chắc chắn đã xảy ra"
     ],
     [
      "±",
      "Chủ ngữ + may / might / could have + V3: có thể đã xảy ra"
     ],
     [
      "−",
      "Chủ ngữ + can't / couldn't have + V3: chắc chắn đã không xảy ra"
     ]
    ],
    "usage": "Đây là bản quá khứ của must be / might be / can't be. Sau have luôn là V3, dù chủ ngữ là ai.",
    "table": {
     "head": [
      "Mức tin",
      "Cấu trúc",
      "Ví dụ"
     ],
     "rows": [
      [
       "95% đã xảy ra",
       "must have + V3",
       "She must have left early."
      ],
      [
       "50% có thể",
       "might / may / could have + V3",
       "He might have forgotten the meeting."
      ],
      [
       "95% không xảy ra",
       "can't / couldn't have + V3",
       "They can't have finished already."
      ]
     ]
    },
    "examples": [
     {
      "en": "The ground is wet. It must have rained last night.",
      "vi": "Mặt đất ướt. Chắc đêm qua trời đã mưa."
     },
     {
      "en": "She can't have seen my message yet.",
      "vi": "Chắc chắn cô ấy chưa thấy tin nhắn của tôi."
     }
    ]
   },
   {
    "name": "Tiếc nuối và trách móc",
    "formula": "Chủ ngữ + should have + V3 (lẽ ra nên) · Chủ ngữ + shouldn't have + V3 (lẽ ra không nên)",
    "usage": "should have nói về việc đúng ra nên làm mà đã không làm — luôn kèm chút tiếc nuối hoặc trách móc.",
    "table": {
     "head": [
      "Câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "I should have booked earlier.",
       "Lẽ ra tôi nên đặt sớm hơn."
      ],
      [
       "You shouldn't have said that.",
       "Lẽ ra bạn không nên nói vậy."
      ],
      [
       "We could have taken a taxi.",
       "Lẽ ra mình đã có thể đi taxi."
      ],
      [
       "He needn't have worried.",
       "Lẽ ra anh ấy không cần lo đến vậy."
      ]
     ]
    },
    "examples": [
     {
      "en": "I should have studied harder for the test.",
      "vi": "Lẽ ra tôi nên học chăm hơn cho bài kiểm tra."
     },
     {
      "en": "You shouldn't have paid for everything.",
      "vi": "Lẽ ra bạn không nên trả hết mọi thứ."
     }
    ]
   }
  ],
  "tips": [
   "Sau modal luôn là have nguyên dạng, không đổi theo chủ ngữ: \"she must have gone\" ✓, \"she must has gone\" ✗.",
   "Trong văn nói, have đọc nhẹ thành /əv/ — nhưng viết thì không bao giờ viết \"must of\".",
   "Phủ định suy đoán quá khứ là can't have, không phải mustn't have.",
   "should have + V3 luôn ngụ ý việc đó đã KHÔNG xảy ra.",
   "needn't have + V3 = đã làm nhưng hóa ra không cần; didn't need to + V = không cần nên đã không làm."
  ]
 },
 {
  "id": "passive-report",
  "title": "Bị động với động từ tường thuật",
  "en": "Reporting passive: It is said that… / He is said to…",
  "intro": "Cách nói \"người ta nói rằng…\" khi không muốn hoặc không cần nêu ai nói. Rất hay gặp trong báo chí và văn viết trang trọng.",
  "sections": [
   {
    "name": "Hai công thức",
    "fx": [
     [
      "1",
      "It + is / was + said / believed / thought / reported + that + mệnh đề"
     ],
     [
      "2",
      "Chủ ngữ + am/is/are + said / believed + to + V (nguyên thể)"
     ],
     [
      "3",
      "Chủ ngữ + am/is/are + said + to have + V3 (việc xảy ra trước)"
     ]
    ],
    "usage": "Hai cách nói cùng một ý. Cách 1 bắt đầu bằng It, cách 2 đưa chủ ngữ thật lên đầu.",
    "table": {
     "head": [
      "Câu gốc",
      "Cách 1 (It …)",
      "Cách 2 (chủ ngữ + to V)"
     ],
     "rows": [
      [
       "People say he is rich.",
       "It is said that he is rich.",
       "He is said to be rich."
      ],
      [
       "People believe she lives abroad.",
       "It is believed that she lives abroad.",
       "She is believed to live abroad."
      ],
      [
       "People say he left the country.",
       "It is said that he left the country.",
       "He is said to have left the country."
      ]
     ]
    },
    "examples": [
     {
      "en": "It is said that the company is in trouble.",
      "vi": "Người ta nói rằng công ty đang gặp khó khăn."
     },
     {
      "en": "The painting is believed to be very old.",
      "vi": "Người ta tin rằng bức tranh này rất cổ."
     }
    ]
   },
   {
    "name": "Các động từ hay dùng",
    "usage": "Nhóm động từ chỉ việc nói, nghĩ, tin, báo cáo đều dùng được khuôn này.",
    "table": {
     "head": [
      "Động từ",
      "Nghĩa",
      "Ví dụ"
     ],
     "rows": [
      [
       "say",
       "nói",
       "He is said to be very kind."
      ],
      [
       "believe",
       "tin",
       "The house is believed to be haunted."
      ],
      [
       "think",
       "nghĩ",
       "She is thought to be the best candidate."
      ],
      [
       "report",
       "đưa tin",
       "Three people are reported to be missing."
      ],
      [
       "expect",
       "dự kiến",
       "Prices are expected to rise."
      ],
      [
       "know",
       "biết",
       "He is known to have worked there."
      ]
     ]
    },
    "examples": [
     {
      "en": "Prices are expected to rise again next year.",
      "vi": "Giá cả dự kiến sẽ lại tăng vào năm sau."
     },
     {
      "en": "The driver is reported to have been injured.",
      "vi": "Theo tin đưa, tài xế đã bị thương."
     }
    ]
   }
  ],
  "tips": [
   "Dùng to V khi hai việc cùng thời điểm; dùng to have + V3 khi việc được nói tới xảy ra trước.",
   "Cách nói này giúp câu nghe khách quan nên báo chí rất chuộng.",
   "Quá khứ thì đổi be: \"It was said that…\", \"He was believed to be…\".",
   "Đừng lẫn với bị động thường: \"The letter was sent\" là bị động thường, không phải tường thuật.",
   "Trong hội thoại hằng ngày, người ta hay nói đơn giản hơn: \"They say he is rich\"."
  ]
 },
 {
  "id": "participle",
  "title": "Mệnh đề phân từ (rút gọn mệnh đề)",
  "en": "Participle clauses",
  "intro": "Cách rút ngắn hai mệnh đề thành một, bằng V-ing hoặc V3. Câu gọn hơn hẳn và nghe rất tự nhiên trong văn viết.",
  "sections": [
   {
    "name": "V-ing cho chủ động, V3 cho bị động",
    "fx": [
     [
      "1",
      "V-ing: khi chủ ngữ tự làm việc đó (chủ động)"
     ],
     [
      "2",
      "V3 / V-ed: khi chủ ngữ bị tác động (bị động)"
     ],
     [
      "3",
      "Having + V3: việc xảy ra trước rồi mới tới việc chính"
     ]
    ],
    "usage": "Hai mệnh đề phải cùng chủ ngữ thì mới rút gọn được.",
    "table": {
     "head": [
      "Câu đầy đủ",
      "Rút gọn"
     ],
     "rows": [
      [
       "Because she felt tired, she went home.",
       "Feeling tired, she went home."
      ],
      [
       "The man who is waiting outside is my uncle.",
       "The man waiting outside is my uncle."
      ],
      [
       "The letter which was sent yesterday arrived today.",
       "The letter sent yesterday arrived today."
      ],
      [
       "After he had finished work, he went out.",
       "Having finished work, he went out."
      ]
     ]
    },
    "examples": [
     {
      "en": "Walking home, I met an old friend.",
      "vi": "Trên đường đi bộ về nhà, tôi gặp một người bạn cũ."
     },
     {
      "en": "Built in 1890, the bridge is still in use.",
      "vi": "Được xây năm 1890, cây cầu vẫn đang được sử dụng."
     }
    ]
   },
   {
    "name": "Rút gọn mệnh đề quan hệ",
    "formula": "who / which + động từ chủ động → V-ing · who / which + be + V3 → V3",
    "usage": "Bỏ đại từ quan hệ và động từ be, giữ lại phân từ.",
    "table": {
     "head": [
      "Đầy đủ",
      "Rút gọn",
      "Loại"
     ],
     "rows": [
      [
       "the people who live next door",
       "the people living next door",
       "chủ động"
      ],
      [
       "the car which was stolen last week",
       "the car stolen last week",
       "bị động"
      ],
      [
       "the students who are waiting outside",
       "the students waiting outside",
       "chủ động"
      ],
      [
       "the money that was spent on repairs",
       "the money spent on repairs",
       "bị động"
      ]
     ]
    },
    "examples": [
     {
      "en": "The woman living upstairs is a doctor.",
      "vi": "Người phụ nữ sống ở tầng trên là bác sĩ."
     },
     {
      "en": "Most of the goods sold here are imported.",
      "vi": "Phần lớn hàng bán ở đây là hàng nhập."
     }
    ]
   }
  ],
  "tips": [
   "Hai mệnh đề phải cùng chủ ngữ, nếu không câu sẽ sai nghĩa: \"Walking home, the rain started\" ✗ (mưa không đi bộ được).",
   "V-ing là chủ động, V3 là bị động — nhìn chủ ngữ để chọn.",
   "Having + V3 nhấn mạnh việc xong trước; nếu hai việc gần như cùng lúc thì chỉ cần V-ing.",
   "Phủ định đặt not trước phân từ: \"Not knowing the way, we asked a local.\"",
   "Kiểu câu này chủ yếu dùng khi viết; nói chuyện hằng ngày vẫn tách thành hai mệnh đề cho dễ nghe."
  ]
 },
 {
  "id": "unless-provided",
  "title": "unless, as long as, provided that, in case",
  "en": "Conditional linkers: unless, as long as, provided that, in case",
  "intro": "Nhóm từ nối điều kiện ngoài if. Mỗi từ có một sắc thái riêng: trừ khi, miễn là, phòng khi.",
  "sections": [
   {
    "name": "Bảng từ nối",
    "usage": "Tất cả đều theo quy tắc của câu điều kiện: mệnh đề điều kiện dùng thì hiện tại khi nói về tương lai.",
    "table": {
     "head": [
      "Từ nối",
      "Nghĩa",
      "Ví dụ"
     ],
     "rows": [
      [
       "unless",
       "trừ khi (= if … not)",
       "We will go unless it rains."
      ],
      [
       "as long as / so long as",
       "miễn là",
       "You can stay as long as you keep quiet."
      ],
      [
       "provided / providing that",
       "với điều kiện là",
       "I'll lend you the car provided that you drive carefully."
      ],
      [
       "in case",
       "phòng khi",
       "Take an umbrella in case it rains."
      ],
      [
       "even if",
       "ngay cả khi",
       "I'll go even if it rains."
      ],
      [
       "otherwise",
       "nếu không thì",
       "Leave now, otherwise you'll be late."
      ]
     ]
    },
    "examples": [
     {
      "en": "I won't say anything unless you ask me.",
      "vi": "Tôi sẽ không nói gì trừ khi bạn hỏi."
     },
     {
      "en": "You can borrow it as long as you return it tonight.",
      "vi": "Bạn mượn được, miễn là tối nay trả lại."
     }
    ]
   },
   {
    "name": "in case khác if thế nào",
    "formula": "in case: làm trước để phòng ngừa · if: chỉ làm khi chuyện kia xảy ra",
    "usage": "in case là chuẩn bị sẵn từ trước, còn if là phản ứng sau khi sự việc xảy ra.",
    "table": {
     "head": [
      "Câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "I'll take an umbrella in case it rains.",
       "Mang dù sẵn, phòng khi mưa (mang ngay bây giờ)."
      ],
      [
       "I'll take an umbrella if it rains.",
       "Nếu trời mưa thì mới cầm dù."
      ],
      [
       "Write it down in case you forget.",
       "Ghi lại phòng khi quên."
      ],
      [
       "Call me if you have a problem.",
       "Có chuyện gì thì gọi tôi."
      ]
     ]
    },
    "examples": [
     {
      "en": "Keep a copy in case the file is deleted.",
      "vi": "Giữ một bản phòng khi tệp bị xóa."
     },
     {
      "en": "I'll call you if the meeting is cancelled.",
      "vi": "Nếu cuộc họp bị hủy thì tôi sẽ gọi bạn."
     }
    ]
   }
  ],
  "tips": [
   "unless đã mang nghĩa phủ định nên không thêm not: \"unless it doesn't rain\" ✗ → \"unless it rains\" ✓.",
   "Sau unless, as long as, in case không dùng will: \"in case it will rain\" ✗ → \"in case it rains\" ✓.",
   "as long as và provided that nghe hơi trang trọng; trong nói chuyện người ta vẫn hay dùng if.",
   "otherwise đứng đầu mệnh đề thứ hai và thường có dấu phẩy trước.",
   "even if = ngay cả khi, nhấn mạnh rằng điều kiện kia cũng không đổi được kết quả."
  ]
 },
 {
  "id": "prep-collocation",
  "title": "Tính từ và động từ đi với giới từ",
  "en": "Adjective and verb + preposition",
  "intro": "Nhiều tính từ và động từ luôn đi kèm một giới từ cố định. Đây là nhóm lỗi dai dẳng nhất vì tiếng Việt không có quy luật tương ứng.",
  "sections": [
   {
    "name": "Tính từ + giới từ",
    "table": {
     "head": [
      "Cụm",
      "Nghĩa",
      "Ví dụ"
     ],
     "rows": [
      [
       "interested in",
       "quan tâm đến",
       "I'm interested in history."
      ],
      [
       "good at / bad at",
       "giỏi / dở về",
       "She is good at maths."
      ],
      [
       "afraid of / scared of",
       "sợ",
       "He is afraid of flying."
      ],
      [
       "proud of",
       "tự hào về",
       "We are proud of our team."
      ],
      [
       "worried about",
       "lo về",
       "I'm worried about the exam."
      ],
      [
       "responsible for",
       "chịu trách nhiệm về",
       "She is responsible for sales."
      ],
      [
       "similar to / different from",
       "giống / khác",
       "This is different from mine."
      ],
      [
       "married to",
       "kết hôn với",
       "He is married to a doctor."
      ]
     ]
    },
    "examples": [
     {
      "en": "I'm not very good at remembering names.",
      "vi": "Tôi không giỏi nhớ tên lắm."
     },
     {
      "en": "She is worried about her son's health.",
      "vi": "Cô ấy lo cho sức khỏe của con trai."
     }
    ]
   },
   {
    "name": "Động từ + giới từ",
    "table": {
     "head": [
      "Cụm",
      "Nghĩa",
      "Ví dụ"
     ],
     "rows": [
      [
       "depend on",
       "phụ thuộc vào",
       "It depends on the weather."
      ],
      [
       "listen to",
       "nghe",
       "I listen to music every day."
      ],
      [
       "wait for",
       "đợi",
       "We are waiting for the bus."
      ],
      [
       "belong to",
       "thuộc về",
       "This book belongs to Lan."
      ],
      [
       "apologise for",
       "xin lỗi vì",
       "He apologised for being late."
      ],
      [
       "complain about",
       "phàn nàn về",
       "They complained about the noise."
      ],
      [
       "agree with",
       "đồng ý với",
       "I agree with you."
      ],
      [
       "succeed in",
       "thành công trong",
       "She succeeded in finding a job."
      ]
     ]
    },
    "examples": [
     {
      "en": "Everything depends on the weather tomorrow.",
      "vi": "Mọi thứ phụ thuộc vào thời tiết ngày mai."
     },
     {
      "en": "He apologised for arriving so late.",
      "vi": "Anh ấy xin lỗi vì đến quá trễ."
     }
    ]
   },
   {
    "name": "Sau giới từ dùng V-ing",
    "formula": "Tính từ / động từ + giới từ + V-ing (không dùng to V)",
    "usage": "Bất cứ khi nào sau giới từ có động từ, động từ đó phải ở dạng V-ing.",
    "table": {
     "head": [
      "Đúng",
      "Sai"
     ],
     "rows": [
      [
       "interested in learning English",
       "interested in to learn ✗"
      ],
      [
       "good at cooking",
       "good at to cook ✗"
      ],
      [
       "afraid of making mistakes",
       "afraid of make ✗"
      ],
      [
       "instead of waiting",
       "instead of to wait ✗"
      ]
     ]
    },
    "examples": [
     {
      "en": "I'm interested in learning Japanese.",
      "vi": "Tôi muốn học tiếng Nhật."
     },
     {
      "en": "He left without saying goodbye.",
      "vi": "Anh ấy đi mà không chào một tiếng."
     }
    ]
   }
  ],
  "tips": [
   "Học cả cụm, đừng học riêng từ: không phải \"interested\" mà là \"interested in\".",
   "to trong \"listen to\", \"belong to\" là giới từ, nên sau nó là danh từ hoặc V-ing, không phải động từ nguyên thể.",
   "different from là chuẩn Anh-Anh; người Mỹ cũng nói different than.",
   "Cùng một động từ, đổi giới từ là đổi nghĩa: think of (nghĩ tới) ≠ think about (suy nghĩ về).",
   "Mỗi khi gặp cụm mới, hãy ghi cả giới từ vào sổ từ vựng."
  ]
 },
 {
  "id": "howto-email",
  "title": "Nói sao để… viết email trang trọng và thân mật",
  "en": "How to … write formal and informal emails",
  "intro": "Cách mở đầu, trình bày việc cần nói và kết thúc một email — cho cả email công việc lẫn email gửi bạn bè.",
  "sections": [
   {
    "name": "Mở đầu",
    "table": {
     "head": [
      "Trang trọng",
      "Thân mật"
     ],
     "rows": [
      [
       "Dear Mr Brown,",
       "Hi Nam,"
      ],
      [
       "Dear Sir or Madam,",
       "Hello Lan,"
      ],
      [
       "I am writing to ask about …",
       "I'm writing about …"
      ],
      [
       "I am writing with regard to your email of 3 May.",
       "Thanks for your email."
      ],
      [
       "I hope this email finds you well.",
       "Hope you're doing well!"
      ]
     ]
    },
    "examples": [
     {
      "en": "Dear Ms Tran, I am writing to ask about your English course.",
      "vi": "Kính gửi chị Trần, tôi viết thư để hỏi về khóa tiếng Anh của bên chị."
     },
     {
      "en": "Hi Nam, thanks for your email last week.",
      "vi": "Chào Nam, cảm ơn email tuần trước của bạn."
     }
    ]
   },
   {
    "name": "Nội dung chính",
    "table": {
     "head": [
      "Mẫu câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "I would like to request …",
       "Tôi xin đề nghị…"
      ],
      [
       "Could you please send me …?",
       "Anh/chị gửi giúp tôi… được không?"
      ],
      [
       "I would be grateful if you could …",
       "Tôi rất cảm kích nếu anh/chị có thể…"
      ],
      [
       "Please find attached …",
       "Xin xem tệp đính kèm…"
      ],
      [
       "Unfortunately, I am unable to …",
       "Rất tiếc là tôi không thể…"
      ],
      [
       "Just a quick note to say …",
       "Viết nhanh để báo là…"
      ]
     ]
    },
    "examples": [
     {
      "en": "I would be grateful if you could reply before Friday.",
      "vi": "Tôi rất cảm kích nếu anh/chị trả lời trước thứ Sáu."
     },
     {
      "en": "Please find attached the report you asked for.",
      "vi": "Xin xem báo cáo anh/chị yêu cầu trong tệp đính kèm."
     }
    ]
   },
   {
    "name": "Kết thúc",
    "table": {
     "head": [
      "Trang trọng",
      "Thân mật"
     ],
     "rows": [
      [
       "I look forward to hearing from you.",
       "Let me know what you think."
      ],
      [
       "Thank you for your time.",
       "Thanks a lot!"
      ],
      [
       "Yours sincerely, (biết tên người nhận)",
       "Best, / Cheers,"
      ],
      [
       "Yours faithfully, (không biết tên)",
       "See you soon,"
      ],
      [
       "Kind regards,",
       "Take care,"
      ]
     ]
    },
    "examples": [
     {
      "en": "I look forward to hearing from you soon.",
      "vi": "Mong sớm nhận được hồi âm của anh/chị."
     },
     {
      "en": "Let me know what you think. Thanks a lot!",
      "vi": "Cho mình biết bạn nghĩ sao nhé. Cảm ơn nhiều!"
     }
    ]
   }
  ],
  "tips": [
   "Email trang trọng hạn chế viết tắt: viết \"I am\", \"do not\" thay vì \"I'm\", \"don't\".",
   "Biết tên người nhận thì kết bằng Yours sincerely; không biết tên thì Yours faithfully.",
   "look forward to là cụm có giới từ to, nên sau nó là V-ing: \"look forward to hearing\" ✓.",
   "Tiêu đề thư nên ngắn và rõ việc: \"Question about the May invoice\".",
   "Một email nên chỉ nói một việc chính; việc khác thì viết email riêng."
  ]
 },
 {
  "id": "subjunctive",
  "title": "Thức giả định: suggest that he be…",
  "en": "The subjunctive: insist / suggest / essential that …",
  "intro": "Sau một số động từ và tính từ chỉ yêu cầu, đề nghị, mệnh đề that dùng động từ nguyên thể không chia — kể cả với he, she, it.",
  "sections": [
   {
    "name": "Công thức",
    "fx": [
     [
      "1",
      "Động từ (suggest, recommend, insist, demand, propose, request) + that + chủ ngữ + V (nguyên thể)"
     ],
     [
      "2",
      "It is + tính từ (essential, important, vital, necessary) + that + chủ ngữ + V (nguyên thể)"
     ],
     [
      "−",
      "… that + chủ ngữ + not + V (nguyên thể)"
     ]
    ],
    "usage": "Động từ trong mệnh đề that giữ nguyên dạng gốc: he go, she be, it have — không thêm -s, không đổi theo thì.",
    "table": {
     "head": [
      "Câu",
      "Lưu ý"
     ],
     "rows": [
      [
       "I suggest that he go alone.",
       "go, không phải goes"
      ],
      [
       "She insisted that we be on time.",
       "be, không phải are"
      ],
      [
       "It is essential that every student have a visa.",
       "have, không phải has"
      ],
      [
       "They demanded that the manager not leave.",
       "phủ định chỉ cần not"
      ],
      [
       "The doctor recommended that she stay in bed.",
       "stay, không phải stayed"
      ]
     ]
    },
    "examples": [
     {
      "en": "The committee recommended that the rule be changed.",
      "vi": "Hội đồng đề nghị quy định đó được sửa đổi."
     },
     {
      "en": "It is important that he arrive before nine.",
      "vi": "Điều quan trọng là anh ấy phải có mặt trước chín giờ."
     }
    ]
   },
   {
    "name": "Cách nói thay thế",
    "formula": "… that + chủ ngữ + should + V · Động từ + tân ngữ + to V",
    "usage": "Anh-Anh thường thêm should, và nhiều câu có thể viết lại bằng to V cho nhẹ nhàng hơn.",
    "table": {
     "head": [
      "Thức giả định (Mỹ)",
      "Có should (Anh)",
      "Dạng to V"
     ],
     "rows": [
      [
       "I suggest that he go.",
       "I suggest that he should go.",
       "—"
      ],
      [
       "They insisted that she stay.",
       "They insisted that she should stay.",
       "—"
      ],
      [
       "It is vital that we act now.",
       "It is vital that we should act now.",
       "It is vital for us to act now."
      ],
      [
       "He asked that we be quiet.",
       "—",
       "He asked us to be quiet."
      ]
     ]
    },
    "examples": [
     {
      "en": "I suggest that we should postpone the meeting.",
      "vi": "Tôi đề nghị chúng ta nên hoãn cuộc họp."
     },
     {
      "en": "It is necessary for everyone to sign the form.",
      "vi": "Mọi người đều cần ký vào mẫu đơn."
     }
    ]
   }
  ],
  "tips": [
   "Động từ giữ nguyên dạng gốc kể cả với he/she/it: \"that he go\" ✓, \"that he goes\" ✗.",
   "Phủ định không dùng doesn't: \"that he not go\" ✓, \"that he doesn't go\" ✗ (trong thức giả định).",
   "suggest không đi với tân ngữ + to V: \"I suggest you to go\" ✗ → \"I suggest you go\" hoặc \"I suggest going\" ✓.",
   "insist on + V-ing là cách nói khác: \"He insisted on paying.\"",
   "Kiểu câu này gặp nhiều trong văn bản hành chính, pháp lý và học thuật."
  ]
 },
 {
  "id": "discourse",
  "title": "Từ nối văn viết: however, moreover, therefore",
  "en": "Discourse markers: however, moreover, therefore, whereas",
  "intro": "Những từ giúp đoạn văn liền mạch: thêm ý, phản biện, nêu kết quả, so sánh đối chiếu. Dùng đúng là văn nâng hẳn một bậc.",
  "sections": [
   {
    "name": "Bảng từ nối theo nhóm",
    "usage": "Chọn từ theo quan hệ giữa hai ý, và nhớ dấu câu đi kèm.",
    "table": {
     "head": [
      "Nhóm",
      "Từ nối",
      "Ví dụ"
     ],
     "rows": [
      [
       "Thêm ý",
       "moreover, furthermore, in addition, what is more",
       "The flat is small. Moreover, it is expensive."
      ],
      [
       "Trái ngược",
       "however, nevertheless, on the other hand",
       "It rained all day. However, we still enjoyed it."
      ],
      [
       "Kết quả",
       "therefore, consequently, as a result, thus",
       "Sales fell. Therefore, we cut costs."
      ],
      [
       "Đối chiếu",
       "whereas, while, in contrast",
       "He is quiet, whereas his brother never stops talking."
      ],
      [
       "Ví dụ",
       "for instance, for example, such as",
       "Some cities, for example Hue, are much quieter."
      ],
      [
       "Tóm lại",
       "in short, overall, to sum up",
       "In short, the plan worked."
      ]
     ]
    },
    "examples": [
     {
      "en": "The service was slow. However, the food was excellent.",
      "vi": "Phục vụ chậm. Tuy nhiên, món ăn thì tuyệt."
     },
     {
      "en": "Costs rose sharply. As a result, we raised our prices.",
      "vi": "Chi phí tăng mạnh. Vì vậy, chúng tôi đã tăng giá."
     }
    ]
   },
   {
    "name": "Dấu câu và vị trí",
    "formula": "Câu 1. However, câu 2. · Câu 1; however, câu 2. · Mệnh đề 1, whereas mệnh đề 2.",
    "usage": "however, therefore, moreover là trạng từ nối: chúng không nối hai mệnh đề bằng dấu phẩy như but. whereas và while là liên từ, nối trực tiếp được.",
    "table": {
     "head": [
      "Đúng",
      "Sai"
     ],
     "rows": [
      [
       "It was late. However, we went out.",
       "It was late, however we went out. ✗"
      ],
      [
       "It was late; however, we went out.",
       "—"
      ],
      [
       "He likes tea, whereas I prefer coffee.",
       "He likes tea. Whereas I prefer coffee. ✗"
      ],
      [
       "We were tired. Therefore, we stopped.",
       "We were tired, therefore we stopped. ✗"
      ]
     ]
    },
    "examples": [
     {
      "en": "She studied for weeks; nevertheless, she failed the test.",
      "vi": "Cô ấy ôn mấy tuần liền; tuy vậy vẫn trượt bài kiểm tra."
     },
     {
      "en": "My sister loves the city, whereas I prefer the countryside.",
      "vi": "Chị tôi mê thành phố, còn tôi thì thích nông thôn hơn."
     }
    ]
   }
  ],
  "tips": [
   "however đứng đầu câu mới và có dấu phẩy ngay sau; nó không thay được but ở giữa câu.",
   "whereas và while nối hai mệnh đề trong cùng một câu, dùng dấu phẩy ở giữa.",
   "Đừng rải quá nhiều từ nối: một đoạn ba câu không cần ba từ nối.",
   "moreover và furthermore hơi trang trọng; trong email thường ngày dùng also hoặc and cho tự nhiên.",
   "thus và hence rất trang trọng, hợp với văn học thuật hơn là hội thoại."
  ]
 },
 {
  "id": "whatever",
  "title": "however, whatever, no matter how",
  "en": "Concessive clauses: however, whatever, no matter",
  "intro": "Cách nói \"dù… thế nào đi nữa\" — nhấn mạnh rằng điều kiện kia không làm thay đổi kết quả.",
  "sections": [
   {
    "name": "Công thức",
    "fx": [
     [
      "1",
      "However + tính từ / trạng từ + chủ ngữ + động từ, mệnh đề chính"
     ],
     [
      "2",
      "Whatever / Whoever / Wherever / Whenever + mệnh đề, mệnh đề chính"
     ],
     [
      "3",
      "No matter how / what / who / where + mệnh đề, mệnh đề chính"
     ]
    ],
    "usage": "however ở đây khác hẳn however nghĩa \"tuy nhiên\": nó đi liền với một tính từ hoặc trạng từ.",
    "table": {
     "head": [
      "Cấu trúc",
      "Ví dụ",
      "Nghĩa"
     ],
     "rows": [
      [
       "however + adj",
       "However tired you are, call me.",
       "Dù bạn mệt đến đâu…"
      ],
      [
       "however + adv",
       "However fast he runs, he can't win.",
       "Dù chạy nhanh đến mấy…"
      ],
      [
       "whatever",
       "Whatever you decide, I'll support you.",
       "Dù bạn quyết thế nào…"
      ],
      [
       "whoever",
       "Whoever calls, say I'm out.",
       "Ai gọi đi nữa…"
      ],
      [
       "wherever",
       "Wherever you go, take this.",
       "Dù bạn đi đâu…"
      ],
      [
       "no matter what",
       "No matter what happens, stay calm.",
       "Dù có chuyện gì…"
      ]
     ]
    },
    "examples": [
     {
      "en": "However hard I try, I can't remember his name.",
      "vi": "Dù cố thế nào tôi cũng không nhớ nổi tên anh ấy."
     },
     {
      "en": "No matter what you say, he won't change his mind.",
      "vi": "Dù bạn nói gì anh ấy cũng không đổi ý."
     }
    ]
   },
   {
    "name": "Các cách nói tương đương",
    "formula": "However + adj = No matter how + adj · Whatever = No matter what · Whoever = No matter who",
    "usage": "Cặp nào cũng thay nhau được; no matter nghe thân mật hơn một chút.",
    "table": {
     "head": [
      "Trang trọng hơn",
      "Thân mật hơn"
     ],
     "rows": [
      [
       "However difficult it is, …",
       "No matter how difficult it is, …"
      ],
      [
       "Whatever he says, …",
       "No matter what he says, …"
      ],
      [
       "Whenever you arrive, …",
       "No matter when you arrive, …"
      ],
      [
       "Much as I like him, …",
       "Even though I like him, …"
      ]
     ]
    },
    "examples": [
     {
      "en": "No matter how late it is, give me a call.",
      "vi": "Dù muộn đến mấy cũng cứ gọi cho tôi."
     },
     {
      "en": "Whenever you need help, just ask.",
      "vi": "Bất cứ khi nào cần giúp, cứ hỏi tôi."
     }
    ]
   }
  ],
  "tips": [
   "however trong bài này luôn đi kèm tính từ hoặc trạng từ ngay sau; nếu đứng một mình thì nó nghĩa là \"tuy nhiên\".",
   "Sau nhóm từ này dùng thì hiện tại khi nói về tương lai: \"Whatever he says tomorrow…\" ✓.",
   "Không thêm that: \"No matter what that he says\" ✗.",
   "Mệnh đề nhượng bộ đứng trước thì có dấu phẩy ngăn cách.",
   "Cách nói văn chương: \"Try as he might, he couldn't open the door.\""
  ]
 },
 {
  "id": "relative-advanced",
  "title": "Mệnh đề quan hệ nâng cao",
  "en": "Advanced relative clauses: prepositions, quantifiers, which for a whole clause",
  "intro": "Ba kiểu mệnh đề quan hệ của văn viết trang trọng: giới từ + whom/which, lượng từ + of whom/which, và which thay cho cả mệnh đề trước.",
  "sections": [
   {
    "name": "Giới từ đứng trước đại từ quan hệ",
    "formula": "danh từ + giới từ + whom (người) / which (vật) + mệnh đề",
    "usage": "Văn nói để giới từ ở cuối, văn viết trang trọng đưa giới từ lên trước whom hoặc which.",
    "table": {
     "head": [
      "Văn nói",
      "Văn viết trang trọng"
     ],
     "rows": [
      [
       "the man who I spoke to",
       "the man to whom I spoke"
      ],
      [
       "the project which we worked on",
       "the project on which we worked"
      ],
      [
       "the colleague who I share an office with",
       "the colleague with whom I share an office"
      ],
      [
       "the house which he was born in",
       "the house in which he was born"
      ]
     ]
    },
    "examples": [
     {
      "en": "This is the report on which our decision was based.",
      "vi": "Đây là bản báo cáo mà quyết định của chúng tôi dựa vào."
     },
     {
      "en": "She is the lawyer to whom I sent the documents.",
      "vi": "Cô ấy là luật sư mà tôi đã gửi hồ sơ cho."
     }
    ]
   },
   {
    "name": "Lượng từ + of whom / of which",
    "formula": "…, all / most / some / none / both / several + of whom (người) / of which (vật) + mệnh đề",
    "usage": "Dùng để nói thêm về một phần của nhóm vừa nhắc tới, luôn có dấu phẩy phía trước.",
    "table": {
     "head": [
      "Câu",
      "Nghĩa"
     ],
     "rows": [
      [
       "I have three brothers, all of whom live abroad.",
       "ba người, cả ba đều ở nước ngoài"
      ],
      [
       "She wrote ten books, most of which were bestsellers.",
       "mười cuốn, phần lớn bán chạy"
      ],
      [
       "We interviewed forty people, none of whom had experience.",
       "bốn mươi người, không ai có kinh nghiệm"
      ],
      [
       "The company has two offices, one of which is in Hue.",
       "hai văn phòng, một ở Huế"
      ]
     ]
    },
    "examples": [
     {
      "en": "He gave me several books, two of which I had already read.",
      "vi": "Anh ấy đưa tôi mấy cuốn sách, hai trong số đó tôi đã đọc rồi."
     },
     {
      "en": "They hired six people, all of whom started last week.",
      "vi": "Họ tuyển sáu người, tất cả đều bắt đầu làm tuần trước."
     }
    ]
   },
   {
    "name": "which thay cho cả mệnh đề",
    "formula": "Mệnh đề đầy đủ, which + mệnh đề nhận xét",
    "usage": "Khi muốn nhận xét về toàn bộ sự việc vừa nói, dùng which sau dấu phẩy — không dùng what.",
    "table": {
     "head": [
      "Đúng",
      "Sai"
     ],
     "rows": [
      [
       "He arrived late, which annoyed everyone.",
       "He arrived late, what annoyed everyone. ✗"
      ],
      [
       "She passed the exam, which surprised us all.",
       "She passed the exam, that surprised us. ✗"
      ],
      [
       "The train was cancelled, which meant a long wait.",
       "—"
      ]
     ]
    },
    "examples": [
     {
      "en": "He forgot my birthday, which made me sad.",
      "vi": "Anh ấy quên sinh nhật tôi, điều đó làm tôi buồn."
     },
     {
      "en": "She speaks four languages, which is very impressive.",
      "vi": "Cô ấy nói được bốn thứ tiếng, thật đáng nể."
     }
    ]
   }
  ],
  "tips": [
   "Sau giới từ chỉ dùng whom và which, không dùng who hay that: \"to who\" ✗, \"on that\" ✗.",
   "Khi giới từ đứng trước thì không được bỏ đại từ quan hệ.",
   "which nhận xét cả mệnh đề luôn có dấu phẩy phía trước; không bao giờ dùng what ở vị trí này.",
   "all of whom, most of which… thuộc mệnh đề không xác định nên bắt buộc có dấu phẩy.",
   "Văn nói hằng ngày vẫn để giới từ ở cuối — đó không phải lỗi, chỉ là ít trang trọng hơn."
  ]
 },
 {
  "id": "emphasis",
  "title": "Nhấn mạnh: do/does/did, what's more, chính là",
  "en": "Emphasis: emphatic do, fronting, intensifiers",
  "intro": "Các cách làm nổi bật một ý: thêm trợ động từ do, đảo thành phần lên đầu câu, hoặc dùng từ tăng cường.",
  "sections": [
   {
    "name": "Nhấn mạnh bằng do / does / did",
    "formula": "Chủ ngữ + do / does / did + V (nguyên thể)",
    "usage": "Dùng khi muốn khẳng định lại điều người kia nghi ngờ, hoặc nhấn rằng điều đó có thật.",
    "table": {
     "head": [
      "Câu thường",
      "Câu nhấn mạnh"
     ],
     "rows": [
      [
       "I like it.",
       "I do like it."
      ],
      [
       "She knows the answer.",
       "She does know the answer."
      ],
      [
       "He called you.",
       "He did call you."
      ],
      [
       "Come in.",
       "Do come in. (lời mời nồng nhiệt)"
      ]
     ]
    },
    "examples": [
     {
      "en": "I did tell you about the meeting — you must have forgotten.",
      "vi": "Tôi đã nói với bạn về cuộc họp rồi mà — chắc bạn quên thôi."
     },
     {
      "en": "She does work hard, but the job is too big for one person.",
      "vi": "Cô ấy làm việc chăm thật, nhưng việc này một người làm không xuể."
     }
    ]
   },
   {
    "name": "Đưa thành phần lên đầu câu",
    "formula": "Trạng ngữ / tân ngữ + mệnh đề · Such + be + chủ ngữ + that … · So + tính từ + be + chủ ngữ + that …",
    "usage": "Đưa phần muốn nhấn lên đầu câu. Với so và such thì mệnh đề phải đảo trợ động từ.",
    "table": {
     "head": [
      "Câu thường",
      "Câu nhấn mạnh"
     ],
     "rows": [
      [
       "I will never forget that day.",
       "Never will I forget that day."
      ],
      [
       "The noise was so loud that we left.",
       "So loud was the noise that we left."
      ],
      [
       "Her anger was such that nobody spoke.",
       "Such was her anger that nobody spoke."
      ],
      [
       "I don't like the colour.",
       "The colour I don't like; the shape is fine."
      ]
     ]
    },
    "examples": [
     {
      "en": "Never have I seen such a beautiful sunset.",
      "vi": "Chưa bao giờ tôi thấy hoàng hôn đẹp đến thế."
     },
     {
      "en": "So tired was he that he fell asleep at his desk.",
      "vi": "Anh ấy mệt đến mức ngủ gục ngay trên bàn."
     }
    ]
   },
   {
    "name": "Từ tăng cường",
    "table": {
     "head": [
      "Từ",
      "Dùng với",
      "Ví dụ"
     ],
     "rows": [
      [
       "absolutely, utterly",
       "tính từ tuyệt đối",
       "absolutely perfect · utterly impossible"
      ],
      [
       "by far",
       "so sánh nhất",
       "by far the best restaurant"
      ],
      [
       "far / much / a lot",
       "so sánh hơn",
       "far more expensive · much better"
      ],
      [
       "at all",
       "câu phủ định",
       "I don't mind at all."
      ],
      [
       "whatsoever",
       "nhấn phủ định",
       "no reason whatsoever"
      ],
      [
       "the very",
       "danh từ",
       "the very next day"
      ]
     ]
    },
    "examples": [
     {
      "en": "This is by far the best coffee in town.",
      "vi": "Đây là cà phê ngon nhất thành phố, hơn hẳn chỗ khác."
     },
     {
      "en": "She had no experience whatsoever, but she learned fast.",
      "vi": "Cô ấy hoàn toàn không có kinh nghiệm, nhưng học rất nhanh."
     }
    ]
   }
  ],
  "tips": [
   "Sau do / does / did nhấn mạnh thì động từ về nguyên thể: \"He did called\" ✗ → \"He did call\" ✓.",
   "Không dùng do nhấn mạnh với câu đã có trợ động từ hay be: \"I do am tired\" ✗.",
   "Khi đưa trạng từ phủ định lên đầu (never, rarely, seldom) thì phải đảo ngữ.",
   "very đi với tính từ thường, absolutely đi với tính từ tuyệt đối: \"very good\" ✓, \"absolutely brilliant\" ✓.",
   "Nhấn mạnh dùng vừa phải; nhấn mọi câu thì chẳng còn câu nào nổi bật."
  ]
 },
 {
  "id": "regular-ed",
  "title": "Động từ có quy tắc: thêm -ed",
  "en": "Regular verbs: -ed endings",
  "intro": "Động từ có quy tắc chỉ cần thêm -ed là ra dạng quá khứ (V2) và quá khứ phân từ (V3). Bài này gồm quy tắc viết -ed và ba cách đọc đuôi -ed.",
  "sections": [
   {
    "name": "Quy tắc thêm -ed",
    "formula": "Động từ nguyên thể + -ed → V2 (quá khứ) và V3 (quá khứ phân từ), hai dạng giống nhau",
    "usage": "Động từ có quy tắc dùng chung một dạng cho V2 và V3: work → worked → worked.",
    "table": {
     "head": [
      "Trường hợp",
      "Cách thêm",
      "Ví dụ"
     ],
     "rows": [
      [
       "Thông thường",
       "+ ed",
       "work → worked · play → played"
      ],
      [
       "Tận cùng là -e",
       "+ d",
       "live → lived · like → liked"
      ],
      [
       "Phụ âm + y",
       "đổi y thành i, + ed",
       "study → studied · carry → carried"
      ],
      [
       "Nguyên âm + y",
       "giữ nguyên y, + ed",
       "play → played · enjoy → enjoyed"
      ],
      [
       "1 nguyên âm + 1 phụ âm cuối (trọng âm ở cuối)",
       "gấp đôi phụ âm, + ed",
       "stop → stopped · plan → planned"
      ]
     ]
    },
    "examples": [
     {
      "en": "I worked at home yesterday.",
      "vi": "Hôm qua tôi làm việc ở nhà."
     },
     {
      "en": "She studied English for two years.",
      "vi": "Cô ấy đã học tiếng Anh hai năm."
     }
    ]
   },
   {
    "name": "Khi nào gấp đôi phụ âm cuối",
    "usage": "Chỉ gấp đôi khi động từ kết thúc bằng 1 nguyên âm + 1 phụ âm VÀ trọng âm rơi vào âm tiết cuối. Không gấp đôi với w, x, y.",
    "table": {
     "head": [
      "Gấp đôi",
      "Không gấp đôi"
     ],
     "rows": [
      [
       "stop → stopped",
       "visit → visited (trọng âm đầu)"
      ],
      [
       "plan → planned",
       "open → opened (trọng âm đầu)"
      ],
      [
       "prefer → preferred",
       "listen → listened (trọng âm đầu)"
      ],
      [
       "admit → admitted",
       "play → played (kết thúc bằng y)"
      ],
      [
       "travel → travelled (Anh)",
       "travel → traveled (Mỹ)"
      ]
     ]
    },
    "examples": [
     {
      "en": "The bus stopped in front of my house.",
      "vi": "Xe buýt dừng trước nhà tôi."
     },
     {
      "en": "We visited my grandparents last Sunday.",
      "vi": "Chủ nhật trước chúng tôi về thăm ông bà."
     }
    ]
   },
   {
    "name": "Ba cách đọc đuôi -ed",
    "formula": "/ɪd/ sau t, d · /t/ sau âm vô thanh · /d/ sau âm hữu thanh và nguyên âm",
    "usage": "Đuôi -ed viết giống nhau nhưng đọc ba kiểu. Chỉ thêm một âm tiết khi động từ kết thúc bằng t hoặc d.",
    "table": {
     "head": [
      "Đọc là",
      "Khi động từ kết thúc bằng",
      "Ví dụ"
     ],
     "rows": [
      [
       "/ɪd/ (thêm 1 âm tiết)",
       "t, d",
       "wanted · needed · visited · decided"
      ],
      [
       "/t/",
       "âm vô thanh: p, k, f, s, ʃ, tʃ",
       "stopped · worked · laughed · washed · watched"
      ],
      [
       "/d/",
       "âm hữu thanh và nguyên âm: b, g, v, z, m, n, l, r…",
       "played · called · lived · cleaned · opened"
      ]
     ]
    },
    "examples": [
     {
      "en": "He wanted to help, so he called me.",
      "vi": "Anh ấy muốn giúp nên đã gọi cho tôi."
     },
     {
      "en": "She washed the car and cleaned the house.",
      "vi": "Cô ấy rửa xe và dọn nhà."
     }
    ]
   },
   {
    "name": "Động từ có quy tắc hay dùng",
    "usage": "Học thuộc nhóm này là kể được phần lớn chuyện đã qua. Động từ không theo quy tắc nằm ở tab Irregular verbs.",
    "table": {
     "head": [
      "Nguyên thể",
      "Quá khứ (-ed)",
      "Đọc đuôi",
      "Nghe"
     ],
     "ipa": true,
     "rows": [
      [
       "work /wɜːk/",
       "worked /wɜːkt/",
       "/t/",
       "▶ work, worked"
      ],
      [
       "stop /stɒp/",
       "stopped /stɒpt/",
       "/t/",
       "▶ stop, stopped"
      ],
      [
       "wash /wɒʃ/",
       "washed /wɒʃt/",
       "/t/",
       "▶ wash, washed"
      ],
      [
       "watch /wɒtʃ/",
       "watched /wɒtʃt/",
       "/t/",
       "▶ watch, watched"
      ],
      [
       "cook /kʊk/",
       "cooked /kʊkt/",
       "/t/",
       "▶ cook, cooked"
      ],
      [
       "ask /ɑːsk/",
       "asked /ɑːskt/",
       "/t/",
       "▶ ask, asked"
      ],
      [
       "help /help/",
       "helped /helpt/",
       "/t/",
       "▶ help, helped"
      ],
      [
       "laugh /lɑːf/",
       "laughed /lɑːft/",
       "/t/",
       "▶ laugh, laughed"
      ],
      [
       "play /pleɪ/",
       "played /pleɪd/",
       "/d/",
       "▶ play, played"
      ],
      [
       "call /kɔːl/",
       "called /kɔːld/",
       "/d/",
       "▶ call, called"
      ],
      [
       "live /lɪv/",
       "lived /lɪvd/",
       "/d/",
       "▶ live, lived"
      ],
      [
       "clean /kliːn/",
       "cleaned /kliːnd/",
       "/d/",
       "▶ clean, cleaned"
      ],
      [
       "open /ˈəʊpən/",
       "opened /ˈəʊpənd/",
       "/d/",
       "▶ open, opened"
      ],
      [
       "listen /ˈlɪsən/",
       "listened /ˈlɪsənd/",
       "/d/",
       "▶ listen, listened"
      ],
      [
       "study /ˈstʌdi/",
       "studied /ˈstʌdid/",
       "/d/",
       "▶ study, studied"
      ],
      [
       "try /traɪ/",
       "tried /traɪd/",
       "/d/",
       "▶ try, tried"
      ],
      [
       "carry /ˈkæri/",
       "carried /ˈkærid/",
       "/d/",
       "▶ carry, carried"
      ],
      [
       "answer /ˈɑːnsə/",
       "answered /ˈɑːnsəd/",
       "/d/",
       "▶ answer, answered"
      ],
      [
       "travel /ˈtrævəl/",
       "travelled /ˈtrævəld/",
       "/d/",
       "▶ travel, travelled"
      ],
      [
       "arrive /əˈraɪv/",
       "arrived /əˈraɪvd/",
       "/d/",
       "▶ arrive, arrived"
      ],
      [
       "want /wɒnt/",
       "wanted /ˈwɒntɪd/",
       "/ɪd/",
       "▶ want, wanted"
      ],
      [
       "need /niːd/",
       "needed /ˈniːdɪd/",
       "/ɪd/",
       "▶ need, needed"
      ],
      [
       "visit /ˈvɪzɪt/",
       "visited /ˈvɪzɪtɪd/",
       "/ɪd/",
       "▶ visit, visited"
      ],
      [
       "decide /dɪˈsaɪd/",
       "decided /dɪˈsaɪdɪd/",
       "/ɪd/",
       "▶ decide, decided"
      ],
      [
       "start /stɑːt/",
       "started /ˈstɑːtɪd/",
       "/ɪd/",
       "▶ start, started"
      ],
      [
       "wait /weɪt/",
       "waited /ˈweɪtɪd/",
       "/ɪd/",
       "▶ wait, waited"
      ]
     ]
    },
    "examples": [
     {
      "en": "They waited for the train and started talking.",
      "vi": "Họ đợi tàu rồi bắt đầu trò chuyện."
     },
     {
      "en": "I tried the food and liked it.",
      "vi": "Tôi thử món ăn và thấy thích."
     }
    ]
   }
  ],
  "tips": [
   "Sau didn't thì động từ về nguyên thể, không thêm -ed: \"I didn't watched\" → \"I didn't watch\".",
   "Phụ âm + y mới đổi thành i: study → studied, nhưng play → played (nguyên âm + y).",
   "Chỉ \"wanted, needed, visited…\" mới đọc thêm một âm tiết /ɪd/; \"worked, played\" vẫn một âm tiết.",
   "Đừng gấp đôi phụ âm khi trọng âm ở đầu: \"visitted\" ✗ → \"visited\" ✓.",
   "Động từ bất quy tắc không thêm -ed: go → went, buy → bought. Xem tab Irregular verbs."
  ]
 },
 {
  "id": "compare",
  "title": "So sánh",
  "en": "Comparisons",
  "intro": "So sánh bằng, so sánh hơn và so sánh nhất với tính từ, trạng từ.",
  "sections": [
   {
    "name": "So sánh bằng",
    "formula": "Chủ ngữ + am/is/are + as + adj + as + …",
    "usage": "Hai đối tượng ngang nhau. Phủ định: not as … as.",
    "examples": [
     {
      "en": "She is as tall as her brother.",
      "vi": "Cô ấy cao bằng anh trai mình."
     },
     {
      "en": "This film is not as good as the book.",
      "vi": "Bộ phim này không hay bằng cuốn sách."
     }
    ]
   },
   {
    "name": "So sánh hơn",
    "formula": "Tính từ ngắn: adj-er + than · Tính từ dài: more + adj + than",
    "usage": "Tính từ 1 âm tiết (và 2 âm tiết tận cùng -y) thêm -er. Tính từ từ 2 âm tiết trở lên dùng more.",
    "examples": [
     {
      "en": "My house is bigger than yours.",
      "vi": "Nhà tôi lớn hơn nhà bạn."
     },
     {
      "en": "This book is more interesting than that one.",
      "vi": "Cuốn sách này thú vị hơn cuốn kia."
     }
    ]
   },
   {
    "name": "So sánh nhất",
    "formula": "Tính từ ngắn: the + adj-est · Tính từ dài: the most + adj",
    "usage": "So sánh một đối tượng với cả nhóm (từ 3 đối tượng trở lên).",
    "examples": [
     {
      "en": "He is the tallest student in my class.",
      "vi": "Cậu ấy là học sinh cao nhất lớp tôi."
     },
     {
      "en": "This is the most beautiful place I have ever seen.",
      "vi": "Đây là nơi đẹp nhất tôi từng thấy."
     }
    ]
   },
   {
    "name": "Quy tắc thêm -er / -est",
    "table": {
     "head": [
      "Trường hợp",
      "Ví dụ"
     ],
     "rows": [
      [
       "Thông thường: thêm -er / -est",
       "tall → taller → tallest"
      ],
      [
       "Tận cùng -e: thêm -r / -st",
       "large → larger → largest"
      ],
      [
       "Phụ âm + y: đổi y thành i",
       "happy → happier → happiest"
      ],
      [
       "1 nguyên âm + 1 phụ âm: gấp đôi phụ âm",
       "big → bigger → biggest"
      ]
     ]
    }
   },
   {
    "name": "So sánh bất quy tắc",
    "table": {
     "head": [
      "Tính từ",
      "Hơn",
      "Nhất"
     ],
     "rows": [
      [
       "good / well",
       "better",
       "the best"
      ],
      [
       "bad / badly",
       "worse",
       "the worst"
      ],
      [
       "many / much",
       "more",
       "the most"
      ],
      [
       "little",
       "less",
       "the least"
      ],
      [
       "far",
       "farther / further",
       "the farthest / the furthest"
      ]
     ]
    }
   }
  ],
  "tips": [
   "Không dùng hai dạng cùng lúc: không nói \"more better\" hay \"the most biggest\".",
   "Nhấn mạnh so sánh hơn bằng much, far, a lot: much bigger, far more expensive."
  ],
  "group": "basics"
 },
 {
  "id": "modal",
  "title": "Động từ khuyết thiếu",
  "en": "Modal verbs",
  "intro": "Những động từ đặc biệt diễn tả khả năng, sự cho phép, nghĩa vụ, lời khuyên. Theo sau luôn là động từ nguyên thể không \"to\".",
  "sections": [
   {
    "name": "Can / Could: khả năng, xin phép",
    "formula": "Chủ ngữ (I, you, he, she, it, we, they) + can / could + V (nguyên thể)",
    "usage": "Can: khả năng ở hiện tại, xin phép. Could: khả năng trong quá khứ, hoặc lời đề nghị lịch sự hơn.",
    "examples": [
     {
      "en": "I can swim very well.",
      "vi": "Tôi bơi rất giỏi."
     },
     {
      "en": "Could you open the window, please?",
      "vi": "Bạn mở cửa sổ giúp tôi được không?"
     }
    ]
   },
   {
    "name": "May / Might: có thể xảy ra",
    "formula": "Chủ ngữ (I, you, he, she, it, we, they) + may / might + V",
    "usage": "Điều có thể xảy ra (might ít chắc chắn hơn). May còn dùng để xin phép một cách trang trọng.",
    "examples": [
     {
      "en": "It might rain this afternoon.",
      "vi": "Chiều nay trời có thể mưa."
     },
     {
      "en": "May I come in?",
      "vi": "Tôi vào được không ạ?"
     }
    ]
   },
   {
    "name": "Must / Have to: bắt buộc",
    "formula": "Chủ ngữ + must + V · I/You/We/They + have to + V · He/She/It + has to + V",
    "usage": "Must: người nói tự thấy cần phải làm. Have to: bắt buộc do quy định hoặc hoàn cảnh bên ngoài.",
    "examples": [
     {
      "en": "I must finish this report tonight.",
      "vi": "Tôi phải làm xong báo cáo này tối nay."
     },
     {
      "en": "Students have to wear uniforms.",
      "vi": "Học sinh phải mặc đồng phục."
     }
    ]
   },
   {
    "name": "Should / Ought to: lời khuyên",
    "formula": "Chủ ngữ (I, you, he, she, it, we, they) + should / ought to + V",
    "usage": "Đưa ra lời khuyên, điều nên làm.",
    "examples": [
     {
      "en": "You should see a doctor.",
      "vi": "Bạn nên đi khám bác sĩ."
     }
    ]
   },
   {
    "name": "Will / Would: quyết định, lời mời",
    "formula": "Chủ ngữ (I, you, he, she, it, we, they) + will / would + V",
    "usage": "Will: quyết định ngay lúc nói, lời hứa. Would: lời mời, yêu cầu lịch sự.",
    "examples": [
     {
      "en": "Would you like a cup of tea?",
      "vi": "Bạn có muốn uống một tách trà không?"
     },
     {
      "en": "I will call you tomorrow.",
      "vi": "Mai tôi sẽ gọi cho bạn."
     }
    ]
   }
  ],
  "tips": [
   "Sau động từ khuyết thiếu không thêm \"to\" và không chia động từ: nói \"She can speak\", không nói \"She can to speak\" hay \"She cans speak\".",
   "mustn't là không được phép, còn don't have to là không cần phải: \"You mustn't smoke here\" khác \"You don't have to come\"."
  ],
  "group": "basics"
 },
 {
  "id": "articles",
  "title": "Mạo từ a / an / the",
  "en": "Articles",
  "intro": "Mạo từ đứng trước danh từ, cho biết danh từ đó đã được xác định hay chưa.",
  "sections": [
   {
    "name": "A / An: chưa xác định",
    "formula": "a + âm phụ âm · an + âm nguyên âm",
    "usage": "Dùng với danh từ đếm được số ít, khi nhắc lần đầu hoặc không nói cụ thể cái nào. Xét theo âm đọc, không theo chữ cái.",
    "examples": [
     {
      "en": "I saw a cat and an elephant.",
      "vi": "Tôi thấy một con mèo và một con voi."
     },
     {
      "en": "She is a university student. He waited an hour.",
      "vi": "Cô ấy là sinh viên đại học. Anh ấy đã đợi một tiếng."
     }
    ]
   },
   {
    "name": "The: đã xác định",
    "formula": "the + danh từ (số ít, số nhiều, không đếm được)",
    "usage": "Dùng khi người nghe biết đang nói về cái nào: đã nhắc trước đó, là duy nhất, hoặc được xác định rõ.",
    "examples": [
     {
      "en": "I bought a book. The book is very interesting.",
      "vi": "Tôi mua một cuốn sách. Cuốn sách đó rất hay."
     },
     {
      "en": "The sun rises in the east.",
      "vi": "Mặt trời mọc ở hướng đông."
     }
    ]
   },
   {
    "name": "Không dùng mạo từ",
    "usage": "Danh từ số nhiều hoặc không đếm được khi nói chung chung; tên người, thành phố, quốc gia; bữa ăn, môn thể thao, môn học.",
    "examples": [
     {
      "en": "I love music. Dogs are friendly.",
      "vi": "Tôi yêu âm nhạc. Chó rất thân thiện."
     },
     {
      "en": "We have lunch at noon and play football after school.",
      "vi": "Chúng tôi ăn trưa lúc 12 giờ và đá bóng sau giờ học."
     }
    ]
   }
  ],
  "tips": [
   "Dùng \"the\" với tên sông, biển, dãy núi và một số nước: the Mekong, the Pacific, the USA, the UK.",
   "Một số cụm cố định không có mạo từ: go to school, go to bed, at home, by bus."
  ],
  "group": "basics"
 },
 {
  "id": "nouns",
  "title": "Danh từ đếm được & không đếm được",
  "en": "Countable & uncountable",
  "intro": "Danh từ đếm được có dạng số nhiều, danh từ không đếm được thì không. Mỗi loại đi với từ chỉ số lượng khác nhau.",
  "sections": [
   {
    "name": "Phân biệt hai loại",
    "table": {
     "head": [
      "Đếm được",
      "Không đếm được"
     ],
     "rows": [
      [
       "a book → two books",
       "water, milk, rice"
      ],
      [
       "an apple → apples",
       "money, time, information"
      ],
      [
       "a chair → chairs",
       "furniture, advice, news"
      ],
      [
       "a job → jobs",
       "work, homework, luggage"
      ]
     ]
    }
   },
   {
    "name": "Từ chỉ số lượng",
    "table": {
     "head": [
      "Với đếm được",
      "Với không đếm được",
      "Với cả hai"
     ],
     "rows": [
      [
       "many",
       "much",
       "a lot of / lots of"
      ],
      [
       "a few / few",
       "a little / little",
       "some / any"
      ],
      [
       "a number of",
       "an amount of",
       "plenty of / no"
      ]
     ]
    }
   },
   {
    "name": "Some / Any",
    "usage": "Some: câu khẳng định và lời mời. Any: câu phủ định và câu hỏi.",
    "examples": [
     {
      "en": "I have some friends in Hanoi.",
      "vi": "Tôi có vài người bạn ở Hà Nội."
     },
     {
      "en": "Do you have any questions?",
      "vi": "Bạn có câu hỏi nào không?"
     },
     {
      "en": "Would you like some coffee?",
      "vi": "Bạn uống chút cà phê nhé?"
     }
    ]
   },
   {
    "name": "A few / Few · A little / Little",
    "usage": "Có \"a\": một ít, đủ dùng (nghĩa tích cực). Không có \"a\": rất ít, gần như không có (nghĩa tiêu cực).",
    "examples": [
     {
      "en": "I have a few friends here, so I am not lonely.",
      "vi": "Tôi có vài người bạn ở đây nên không cô đơn."
     },
     {
      "en": "There is little time left. Hurry up!",
      "vi": "Còn rất ít thời gian. Nhanh lên!"
     }
    ]
   }
  ],
  "tips": [
   "Không thêm -s cho danh từ không đếm được: nói \"much information\", \"some advice\", không nói \"informations\", \"advices\".",
   "Muốn đếm danh từ không đếm được thì dùng đơn vị: a piece of advice, a glass of water, a bottle of milk."
  ],
  "group": "basics"
 },
 {
  "id": "relative",
  "title": "Mệnh đề quan hệ",
  "en": "Relative clauses",
  "intro": "Dùng đại từ quan hệ để nối hai câu, bổ sung thông tin cho danh từ đứng trước.",
  "sections": [
   {
    "name": "Các đại từ quan hệ",
    "table": {
     "head": [
      "Từ",
      "Thay cho",
      "Ví dụ"
     ],
     "rows": [
      [
       "who",
       "người (làm chủ ngữ)",
       "The man who lives next door is a doctor."
      ],
      [
       "whom",
       "người (làm tân ngữ)",
       "The girl whom I met yesterday is Lan."
      ],
      [
       "which",
       "vật, sự việc",
       "The phone which I bought is new."
      ],
      [
       "that",
       "người hoặc vật",
       "The book that you lent me is great."
      ],
      [
       "whose",
       "sở hữu (của ai, của cái gì)",
       "The boy whose bike was stolen is sad."
      ],
      [
       "where",
       "nơi chốn",
       "This is the house where I was born."
      ],
      [
       "when",
       "thời gian",
       "I remember the day when we met."
      ]
     ]
    }
   },
   {
    "name": "Mệnh đề xác định",
    "usage": "Cần thiết để biết đang nói về ai, cái gì. Không có dấu phẩy, dùng được \"that\".",
    "examples": [
     {
      "en": "The students who study hard will pass the exam.",
      "vi": "Những học sinh học chăm sẽ đỗ kỳ thi."
     }
    ]
   },
   {
    "name": "Mệnh đề không xác định",
    "usage": "Chỉ thêm thông tin phụ cho một danh từ đã rõ. Có dấu phẩy, không dùng \"that\".",
    "examples": [
     {
      "en": "My father, who is 60, still works every day.",
      "vi": "Bố tôi, năm nay 60 tuổi, vẫn đi làm hằng ngày."
     },
     {
      "en": "Hanoi, which is the capital of Vietnam, is very old.",
      "vi": "Hà Nội, thủ đô của Việt Nam, có lịch sử rất lâu đời."
     }
    ]
   }
  ],
  "tips": [
   "Khi đại từ quan hệ làm tân ngữ trong mệnh đề xác định thì có thể bỏ: \"The book (that) I read\" vẫn đúng.",
   "Không dùng \"that\" sau dấu phẩy hoặc ngay sau giới từ: nói \"the house in which I live\"."
  ],
  "group": "basics"
 },
 {
  "id": "reported",
  "title": "Câu tường thuật",
  "en": "Reported speech",
  "intro": "Thuật lại lời người khác nói. Khi động từ tường thuật ở quá khứ (said, told), lùi thì và đổi đại từ, trạng từ.",
  "sections": [
   {
    "name": "Lùi thì",
    "table": {
     "head": [
      "Lời nói trực tiếp",
      "Câu tường thuật"
     ],
     "rows": [
      [
       "Hiện tại đơn: \"I am tired.\"",
       "Quá khứ đơn: She said she was tired."
      ],
      [
       "Hiện tại tiếp diễn: \"I am working.\"",
       "Quá khứ tiếp diễn: He said he was working."
      ],
      [
       "Quá khứ đơn: \"I saw it.\"",
       "Quá khứ hoàn thành: He said he had seen it."
      ],
      [
       "will / can / may",
       "would / could / might"
      ]
     ]
    }
   },
   {
    "name": "Đổi trạng từ thời gian, nơi chốn",
    "table": {
     "head": [
      "Trực tiếp",
      "Tường thuật"
     ],
     "rows": [
      [
       "now",
       "then"
      ],
      [
       "today / tonight",
       "that day / that night"
      ],
      [
       "yesterday",
       "the day before"
      ],
      [
       "tomorrow",
       "the next day"
      ],
      [
       "last week",
       "the week before"
      ],
      [
       "here / this",
       "there / that"
      ]
     ]
    }
   },
   {
    "name": "Tường thuật câu hỏi",
    "formula": "Chủ ngữ + asked (+ ai đó) + if/whether + chủ ngữ + V · Chủ ngữ + asked + từ hỏi (what, where…) + chủ ngữ + V",
    "usage": "Câu hỏi Yes/No dùng if/whether. Câu hỏi có từ hỏi thì giữ từ hỏi. Không đảo trợ động từ lên trước chủ ngữ.",
    "examples": [
     {
      "en": "\"Are you hungry?\" → He asked me if I was hungry.",
      "vi": "\"Bạn đói không?\" → Anh ấy hỏi tôi có đói không."
     },
     {
      "en": "\"Where do you live?\" → She asked where I lived.",
      "vi": "\"Bạn sống ở đâu?\" → Cô ấy hỏi tôi sống ở đâu."
     }
    ]
   },
   {
    "name": "Tường thuật mệnh lệnh, yêu cầu",
    "formula": "Chủ ngữ + told / asked + ai đó + (not) to V",
    "usage": "Dùng to V. Phủ định thì thêm not trước to.",
    "examples": [
     {
      "en": "\"Close the door.\" → She told me to close the door.",
      "vi": "\"Đóng cửa lại.\" → Cô ấy bảo tôi đóng cửa."
     },
     {
      "en": "\"Don't be late.\" → He told us not to be late.",
      "vi": "\"Đừng đến muộn.\" → Anh ấy dặn chúng tôi đừng đến muộn."
     }
    ]
   }
  ],
  "tips": [
   "say không có tân ngữ chỉ người, tell thì có: \"He said that…\", \"He told me that…\". Không nói \"He said me\".",
   "Nếu động từ tường thuật ở hiện tại (says, tells) thì không cần lùi thì."
  ],
  "group": "basics"
 },
 {
  "id": "gerund",
  "title": "V-ing và To V",
  "en": "Gerunds & infinitives",
  "intro": "Một số động từ theo sau là V-ing, một số là to V, một số dùng được cả hai nhưng khác nghĩa.",
  "sections": [
   {
    "name": "Động từ + V-ing",
    "table": {
     "head": [
      "Động từ",
      "Ví dụ"
     ],
     "rows": [
      [
       "enjoy",
       "I enjoy reading books."
      ],
      [
       "avoid",
       "She avoids eating sugar."
      ],
      [
       "finish",
       "Have you finished doing your homework?"
      ],
      [
       "mind",
       "Do you mind opening the window?"
      ],
      [
       "keep",
       "He keeps talking in class."
      ],
      [
       "suggest",
       "I suggest going by train."
      ],
      [
       "practice",
       "You should practice speaking every day."
      ]
     ]
    }
   },
   {
    "name": "Động từ + to V",
    "table": {
     "head": [
      "Động từ",
      "Ví dụ"
     ],
     "rows": [
      [
       "want",
       "I want to learn English."
      ],
      [
       "decide",
       "They decided to move to Da Nang."
      ],
      [
       "hope",
       "We hope to see you soon."
      ],
      [
       "plan",
       "She plans to travel next year."
      ],
      [
       "need",
       "You need to rest."
      ],
      [
       "agree",
       "He agreed to help me."
      ],
      [
       "promise",
       "I promise to call you."
      ]
     ]
    }
   },
   {
    "name": "Dùng cả hai nhưng khác nghĩa",
    "table": {
     "head": [
      "Động từ",
      "+ V-ing",
      "+ to V"
     ],
     "rows": [
      [
       "stop",
       "dừng việc đang làm: stop smoking",
       "dừng lại để làm việc khác: stop to buy water"
      ],
      [
       "remember",
       "nhớ đã làm: remember meeting her",
       "nhớ phải làm: remember to lock the door"
      ],
      [
       "forget",
       "quên đã làm: forget seeing it",
       "quên phải làm: forget to call him"
      ],
      [
       "try",
       "thử làm: try adding salt",
       "cố gắng làm: try to finish early"
      ]
     ]
    }
   },
   {
    "name": "Sau giới từ dùng V-ing",
    "usage": "Sau in, on, at, of, for, about, before, after, without… động từ luôn ở dạng V-ing.",
    "examples": [
     {
      "en": "She is good at drawing.",
      "vi": "Cô ấy vẽ giỏi."
     },
     {
      "en": "Thank you for helping me.",
      "vi": "Cảm ơn bạn đã giúp tôi."
     },
     {
      "en": "I am looking forward to seeing you.",
      "vi": "Tôi rất mong được gặp bạn."
     }
    ]
   }
  ],
  "tips": [
   "Trong \"look forward to\" và \"be used to\", \"to\" là giới từ nên theo sau là V-ing.",
   "like, love, hate, start, begin dùng được cả V-ing và to V, nghĩa gần như nhau."
  ],
  "group": "basics"
 },
 {
  "id": "tag",
  "title": "Câu hỏi đuôi",
  "en": "Tag questions",
  "intro": "Câu hỏi ngắn ở cuối câu để xác nhận thông tin. Câu chính khẳng định thì đuôi phủ định, và ngược lại.",
  "sections": [
   {
    "name": "Cách tạo",
    "formula": "Khẳng định, + trợ động từ + n't + đại từ? · Phủ định, + trợ động từ + đại từ?",
    "usage": "Trợ động từ theo thì của câu chính (am/is/are, do/does/did, have/has, will, can…). Chủ ngữ ở đuôi luôn là đại từ.",
    "examples": [
     {
      "en": "You are a student, aren't you?",
      "vi": "Bạn là sinh viên, phải không?"
     },
     {
      "en": "She doesn't like coffee, does she?",
      "vi": "Cô ấy không thích cà phê, đúng không?"
     },
     {
      "en": "They went home, didn't they?",
      "vi": "Họ về nhà rồi, phải không?"
     },
     {
      "en": "You can swim, can't you?",
      "vi": "Bạn biết bơi, đúng không?"
     }
    ]
   },
   {
    "name": "Trường hợp đặc biệt",
    "table": {
     "head": [
      "Câu chính",
      "Câu hỏi đuôi"
     ],
     "rows": [
      [
       "I am …",
       "aren't I?"
      ],
      [
       "Let's …",
       "shall we?"
      ],
      [
       "Câu mệnh lệnh: Open the door…",
       "will you?"
      ],
      [
       "Everyone / Somebody …",
       "… they?"
      ],
      [
       "Nothing / Everything …",
       "… it?"
      ],
      [
       "Câu có never, hardly, no",
       "đuôi khẳng định: He never lies, does he?"
      ]
     ]
    }
   }
  ],
  "tips": [
   "Lên giọng ở đuôi khi thật sự muốn hỏi; xuống giọng khi chỉ muốn người nghe đồng ý."
  ],
  "group": "basics"
 },
 {
  "id": "pronouns",
  "title": "Đại từ",
  "en": "Pronouns",
  "intro": "Các dạng đại từ: chủ ngữ, tân ngữ, tính từ sở hữu, đại từ sở hữu và đại từ phản thân.",
  "sections": [
   {
    "name": "Bảng đại từ",
    "table": {
     "head": [
      "Chủ ngữ",
      "Tân ngữ",
      "Tính từ sở hữu",
      "Đại từ sở hữu",
      "Phản thân"
     ],
     "rows": [
      [
       "I",
       "me",
       "my",
       "mine",
       "myself"
      ],
      [
       "you",
       "you",
       "your",
       "yours",
       "yourself"
      ],
      [
       "he",
       "him",
       "his",
       "his",
       "himself"
      ],
      [
       "she",
       "her",
       "her",
       "hers",
       "herself"
      ],
      [
       "it",
       "it",
       "its",
       "—",
       "itself"
      ],
      [
       "we",
       "us",
       "our",
       "ours",
       "ourselves"
      ],
      [
       "they",
       "them",
       "their",
       "theirs",
       "themselves"
      ]
     ]
    }
   },
   {
    "name": "Cách dùng",
    "usage": "Tính từ sở hữu đứng trước danh từ (my book). Đại từ sở hữu đứng một mình, thay cho cả cụm (the book is mine). Đại từ phản thân dùng khi chủ ngữ và tân ngữ là một.",
    "examples": [
     {
      "en": "This is my phone. That one is yours.",
      "vi": "Đây là điện thoại của tôi. Cái kia là của bạn."
     },
     {
      "en": "She taught herself English.",
      "vi": "Cô ấy tự học tiếng Anh."
     },
     {
      "en": "Please help me.",
      "vi": "Làm ơn giúp tôi."
     }
    ]
   }
  ],
  "tips": [
   "Phân biệt its (của nó) với it's (= it is): \"The dog wagged its tail\", \"It's cold today\".",
   "Sau giới từ dùng dạng tân ngữ: \"between you and me\", không nói \"between you and I\"."
  ],
  "group": "basics"
 },
 {
  "id": "too",
  "group": "core20",
  "title": "Too … to",
  "en": "Quá … nên không thể",
  "intro": "Diễn tả điều gì đó vượt quá mức, khiến không thể làm được.",
  "sections": [
   {
    "name": "Công thức",
    "formula": "Chủ ngữ + am/is/are + too + adj + (for ai đó) + to V · Chủ ngữ + V + too + adv + to V",
    "usage": "Câu mang nghĩa phủ định dù không có \"not\".",
    "examples": [
     {
      "en": "The tea is too hot to drink.",
      "vi": "Trà nóng quá, không uống được."
     },
     {
      "en": "He ran too fast for me to catch up.",
      "vi": "Anh ấy chạy nhanh quá, tôi không đuổi kịp."
     },
     {
      "en": "This box is too heavy for her to carry.",
      "vi": "Cái hộp này nặng quá, cô ấy không bê nổi."
     }
    ]
   }
  ],
  "tips": [
   "Không thêm tân ngữ thừa ở cuối khi nó chính là chủ ngữ: nói \"The tea is too hot to drink\", không nói \"to drink it\"."
  ]
 },
 {
  "id": "enough",
  "group": "core20",
  "title": "… enough to",
  "en": "Đủ … để làm gì",
  "intro": "Diễn tả mức độ vừa đủ để làm được việc gì.",
  "sections": [
   {
    "name": "Công thức",
    "formula": "Chủ ngữ + am/is/are + adj + enough + (for ai đó) + to V · Chủ ngữ + V + adv + enough + to V · Chủ ngữ + V + enough + danh từ + to V",
    "usage": "enough đứng sau tính từ, trạng từ nhưng đứng trước danh từ.",
    "examples": [
     {
      "en": "He is old enough to drive.",
      "vi": "Cậu ấy đủ tuổi lái xe."
     },
     {
      "en": "She speaks English well enough to work abroad.",
      "vi": "Cô ấy nói tiếng Anh đủ tốt để làm việc ở nước ngoài."
     },
     {
      "en": "We don't have enough money to buy a house.",
      "vi": "Chúng tôi không có đủ tiền để mua nhà."
     }
    ]
   }
  ],
  "tips": [
   "Đặt đúng vị trí: \"old enough\" (sau tính từ) nhưng \"enough money\" (trước danh từ)."
  ]
 },
 {
  "id": "sothat",
  "group": "core20",
  "title": "So … that",
  "en": "Quá … đến nỗi mà",
  "intro": "Nói một tính chất ở mức cao và kết quả của nó.",
  "sections": [
   {
    "name": "Công thức",
    "formula": "Chủ ngữ + am/is/are + so + adj + that + chủ ngữ + V · Chủ ngữ + V + so + adv + that + chủ ngữ + V",
    "usage": "Mệnh đề sau \"that\" nói kết quả.",
    "examples": [
     {
      "en": "She was so tired that she fell asleep immediately.",
      "vi": "Cô ấy mệt đến nỗi ngủ thiếp đi ngay."
     },
     {
      "en": "He spoke so quickly that nobody understood him.",
      "vi": "Anh ấy nói nhanh đến nỗi không ai hiểu."
     },
     {
      "en": "There were so many people that we couldn't move.",
      "vi": "Đông người đến nỗi chúng tôi không nhúc nhích được."
     }
    ]
   }
  ],
  "tips": [
   "So … that còn đi với many / much / few / little + danh từ: \"so many people\", \"so little time\"."
  ]
 },
 {
  "id": "suchthat",
  "group": "core20",
  "title": "Such … that",
  "en": "Quá … đến nỗi mà (với danh từ)",
  "intro": "Giống so … that nhưng dùng khi có danh từ.",
  "sections": [
   {
    "name": "Công thức",
    "formula": "Chủ ngữ + V + such + (a / an) + adj + danh từ + that + chủ ngữ + V",
    "usage": "Danh từ đếm được số ít cần a / an; danh từ số nhiều hoặc không đếm được thì không.",
    "examples": [
     {
      "en": "It was such a good film that I watched it twice.",
      "vi": "Phim hay đến nỗi tôi xem hai lần."
     },
     {
      "en": "They are such kind people that everyone loves them.",
      "vi": "Họ tốt bụng đến nỗi ai cũng quý."
     },
     {
      "en": "It was such bad weather that the flight was cancelled.",
      "vi": "Thời tiết xấu đến nỗi chuyến bay bị huỷ."
     }
    ]
   }
  ],
  "tips": [
   "Đổi qua lại với so … that: \"The film was so good that…\" = \"It was such a good film that…\"."
  ]
 },
 {
  "id": "ittakes",
  "group": "core20",
  "title": "It takes … to V",
  "en": "Ai mất bao lâu để làm gì",
  "intro": "Nói thời gian cần để làm một việc.",
  "sections": [
   {
    "name": "Công thức",
    "formula": "It + takes / took + (ai đó) + thời gian + to V",
    "usage": "Chủ ngữ luôn là \"It\"; chia takes / took theo thì.",
    "examples": [
     {
      "en": "It takes me 20 minutes to get to work.",
      "vi": "Tôi mất 20 phút để đi làm."
     },
     {
      "en": "It took them three years to build the bridge.",
      "vi": "Họ mất ba năm để xây cây cầu."
     },
     {
      "en": "How long does it take to learn English?",
      "vi": "Học tiếng Anh mất bao lâu?"
     }
    ]
   }
  ],
  "tips": [
   "Cách nói khác: \"chủ ngữ + spend + thời gian + V-ing\": \"I spend 20 minutes getting to work.\""
  ]
 },
 {
  "id": "itstime",
  "group": "core20",
  "title": "It's time …",
  "en": "Đã đến lúc làm gì",
  "intro": "Nói đã đến lúc nên làm việc gì.",
  "sections": [
   {
    "name": "Công thức",
    "formula": "It's time + for ai đó + to V · It's (high) time + chủ ngữ + V2 (lùi một thì)",
    "usage": "Dạng có chủ ngữ + V2 (quá khứ) mang ý đáng lẽ phải làm rồi, hơi muộn.",
    "examples": [
     {
      "en": "It's time for us to go home.",
      "vi": "Đến lúc chúng ta về nhà rồi."
     },
     {
      "en": "It's high time you started studying.",
      "vi": "Đã đến lúc bạn phải bắt đầu học rồi."
     },
     {
      "en": "It's time to say goodbye.",
      "vi": "Đến lúc phải nói lời tạm biệt."
     }
    ]
   }
  ],
  "tips": [
   "Sau \"It's time + chủ ngữ\" dùng quá khứ đơn dù nói về hiện tại: \"It's time we left.\""
  ]
 },
 {
  "id": "itsadj",
  "group": "core20",
  "title": "It's + adj + to V",
  "en": "Thật … khi làm gì",
  "intro": "Nêu nhận xét về một việc: dễ, khó, thú vị, nguy hiểm…",
  "sections": [
   {
    "name": "Công thức",
    "formula": "It's + adj + (for ai đó) + to V · I/You/We/They + find + it + adj + to V · He/She/It + finds + it + adj + to V",
    "usage": "Hai cách nói ý kiến: chủ ngữ giả \"It\", hoặc \"find it\" (thấy rằng).",
    "examples": [
     {
      "en": "It's important to drink enough water.",
      "vi": "Uống đủ nước là điều quan trọng."
     },
     {
      "en": "It's difficult for me to wake up early.",
      "vi": "Dậy sớm đối với tôi thật khó."
     },
     {
      "en": "I find it hard to remember new words.",
      "vi": "Tôi thấy khó nhớ từ mới."
     }
    ]
   }
  ],
  "tips": [
   "Trong cấu trúc find it, không bỏ \"it\": nói \"I find it hard to…\", không nói \"I find hard to…\"."
  ]
 },
 {
  "id": "havedone",
  "group": "core20",
  "title": "Have / Get something done",
  "en": "Nhờ, thuê người khác làm gì",
  "intro": "Nói việc được người khác làm cho mình.",
  "sections": [
   {
    "name": "Công thức",
    "formula": "Chủ ngữ + have / has / had + cái gì + V3 · Chủ ngữ + get / gets / got + cái gì + V3 · I/You/We/They + have + ai đó + V (nguyên thể) · He/She/It + has + ai đó + V (nguyên thể) · I/You/We/They + get + ai đó + to V · He/She/It + gets + ai đó + to V",
    "usage": "Dạng sth + V3 là bị động: không cần nói ai làm.",
    "examples": [
     {
      "en": "I had my hair cut yesterday.",
      "vi": "Hôm qua tôi đi cắt tóc."
     },
     {
      "en": "She gets her car washed every week.",
      "vi": "Tuần nào cô ấy cũng mang xe đi rửa."
     },
     {
      "en": "I'll have the mechanic check the brakes.",
      "vi": "Tôi sẽ nhờ thợ kiểm tra phanh."
     }
    ]
   }
  ],
  "tips": [
   "\"I cut my hair\" là tự cắt, còn \"I had my hair cut\" là người khác cắt cho."
  ]
 },
 {
  "id": "makelet",
  "group": "core20",
  "title": "Make / Let / Help + sb + V",
  "en": "Bắt / để / giúp ai làm gì",
  "intro": "Nói việc khiến, cho phép hoặc giúp người khác làm gì.",
  "sections": [
   {
    "name": "Công thức",
    "formula": "make / let + ai đó + V (không có to) · help + ai đó + (to) V",
    "usage": "make: bắt, khiến. let: để, cho phép. help: giúp.",
    "examples": [
     {
      "en": "My mother made me clean my room.",
      "vi": "Mẹ bắt tôi dọn phòng."
     },
     {
      "en": "Let me help you.",
      "vi": "Để tôi giúp bạn."
     },
     {
      "en": "He helped me carry the bags.",
      "vi": "Anh ấy giúp tôi xách túi."
     }
    ]
   }
  ],
  "tips": [
   "Sau make và let không có \"to\": không nói \"made me to clean\".",
   "Ở thể bị động thì make có \"to\": \"I was made to clean my room.\""
  ]
 },
 {
  "id": "asktell",
  "group": "core20",
  "title": "Ask / Tell / Advise + sb + to V",
  "en": "Yêu cầu, bảo, khuyên ai làm gì",
  "intro": "Nói việc đề nghị người khác làm gì.",
  "sections": [
   {
    "name": "Công thức",
    "formula": "I/You/We/They + ask / tell / advise / want / remind + ai đó + (not) to V · He/She/It + asks / tells / advises / wants / reminds + ai đó + (not) to V · Quá khứ: chủ ngữ + asked / told / advised / wanted / reminded + ai đó + (not) to V",
    "usage": "Các động từ này theo sau là tân ngữ chỉ người rồi đến to V.",
    "examples": [
     {
      "en": "The teacher asked us to be quiet.",
      "vi": "Cô giáo yêu cầu chúng tôi giữ trật tự."
     },
     {
      "en": "The doctor advised me not to smoke.",
      "vi": "Bác sĩ khuyên tôi không hút thuốc."
     },
     {
      "en": "Remind me to call her.",
      "vi": "Nhắc tôi gọi cho cô ấy nhé."
     }
    ]
   }
  ],
  "tips": [
   "Phủ định đặt not trước to: \"told me not to go\"."
  ]
 },
 {
  "id": "suggest",
  "group": "core20",
  "title": "Suggest + V-ing / that …",
  "en": "Gợi ý, đề nghị",
  "intro": "Đưa ra gợi ý cho mình hoặc người khác.",
  "sections": [
   {
    "name": "Công thức",
    "formula": "I/You/We/They + suggest + V-ing · He/She/It + suggests + V-ing · I/You/We/They + suggest + that + chủ ngữ + (should) + V · He/She/It + suggests + that + chủ ngữ + (should) + V",
    "usage": "Sau that dùng động từ nguyên thể cho mọi chủ ngữ.",
    "examples": [
     {
      "en": "I suggest going by train.",
      "vi": "Tôi đề nghị đi bằng tàu hoả."
     },
     {
      "en": "She suggested that we leave early.",
      "vi": "Cô ấy đề nghị chúng tôi đi sớm."
     },
     {
      "en": "He suggested that I should rest.",
      "vi": "Anh ấy khuyên tôi nên nghỉ ngơi."
     }
    ]
   }
  ],
  "tips": [
   "Không nói \"suggest to V\" hay \"suggest sb to V\"."
  ]
 },
 {
  "id": "prefer",
  "group": "core20",
  "title": "Prefer … to … / Would rather … than …",
  "en": "Thích cái gì hơn cái gì",
  "intro": "So sánh sở thích giữa hai lựa chọn.",
  "sections": [
   {
    "name": "Công thức",
    "formula": "prefer + N / V-ing + to + N / V-ing · would rather + V + than + V",
    "usage": "prefer dùng to để so sánh; would rather dùng than.",
    "examples": [
     {
      "en": "I prefer tea to coffee.",
      "vi": "Tôi thích trà hơn cà phê."
     },
     {
      "en": "She prefers reading to watching TV.",
      "vi": "Cô ấy thích đọc sách hơn xem TV."
     },
     {
      "en": "I would rather stay home than go out.",
      "vi": "Tôi thích ở nhà hơn là ra ngoài."
     }
    ]
   }
  ],
  "tips": [
   "Sau would rather dùng động từ nguyên thể không \"to\". Rút gọn: I'd rather."
  ]
 },
 {
  "id": "hadbetter",
  "group": "core20",
  "title": "Had better + V",
  "en": "Tốt hơn hết là nên",
  "intro": "Lời khuyên mạnh, thường kèm ý cảnh báo.",
  "sections": [
   {
    "name": "Công thức",
    "formula": "Chủ ngữ (I, you, he, she, it, we, they) + had better + (not) + V (nguyên thể)",
    "usage": "Nói về hiện tại hoặc tương lai, dù có \"had\".",
    "examples": [
     {
      "en": "You had better see a doctor.",
      "vi": "Bạn nên đi khám bác sĩ thì hơn."
     },
     {
      "en": "We'd better not be late.",
      "vi": "Chúng ta tốt nhất là đừng đến muộn."
     }
    ]
   }
  ],
  "tips": [
   "Phủ định là had better not, không nói \"hadn't better\"."
  ]
 },
 {
  "id": "usedto",
  "group": "core20",
  "title": "Used to / Be used to",
  "en": "Từng làm / Đã quen với",
  "intro": "Hai cấu trúc dễ nhầm: thói quen cũ và sự quen thuộc.",
  "sections": [
   {
    "name": "Used to + V",
    "formula": "Chủ ngữ (I, you, he, she, it, we, they) + used to + V",
    "usage": "Thói quen hoặc trạng thái trong quá khứ, nay không còn.",
    "examples": [
     {
      "en": "I used to live in the countryside.",
      "vi": "Tôi từng sống ở nông thôn."
     },
     {
      "en": "He didn't use to like vegetables.",
      "vi": "Trước đây anh ấy không thích ăn rau."
     }
    ]
   },
   {
    "name": "Be / Get used to + V-ing",
    "formula": "I + am used to + V-ing · He/She/It + is used to + V-ing · You/We/They + are used to + V-ing · Chủ ngữ + get / gets used to + V-ing",
    "usage": "be: đã quen với việc gì. get: dần quen với việc gì.",
    "examples": [
     {
      "en": "I am used to getting up early.",
      "vi": "Tôi đã quen dậy sớm."
     },
     {
      "en": "You will get used to the weather here.",
      "vi": "Bạn sẽ dần quen với thời tiết ở đây."
     }
    ]
   }
  ],
  "tips": [
   "Phủ định và câu hỏi của used to: didn't use to, Did you use to…? (không có d)."
  ]
 },
 {
  "id": "spend",
  "group": "core20",
  "title": "Spend / Waste + time + V-ing",
  "en": "Dành / phí thời gian làm gì",
  "intro": "Nói thời gian, tiền bạc dùng vào việc gì.",
  "sections": [
   {
    "name": "Công thức",
    "formula": "I/You/We/They + spend / waste + thời gian / tiền + V-ing · He/She/It + spends / wastes + thời gian / tiền + V-ing · I/You/We/They + spend + tiền + on + danh từ · He/She/It + spends + tiền + on + danh từ",
    "usage": "Theo sau là V-ing, hoặc on + danh từ.",
    "examples": [
     {
      "en": "I spend two hours studying English every day.",
      "vi": "Mỗi ngày tôi dành hai tiếng học tiếng Anh."
     },
     {
      "en": "Don't waste time worrying about it.",
      "vi": "Đừng phí thời gian lo lắng về chuyện đó."
     },
     {
      "en": "She spends a lot of money on clothes.",
      "vi": "Cô ấy tiêu nhiều tiền vào quần áo."
     }
    ]
   }
  ],
  "tips": [
   "Không nói \"spend time to study\"; nói \"spend time studying\"."
  ]
 },
 {
  "id": "prevent",
  "group": "core20",
  "title": "Prevent / Stop + sb + from + V-ing",
  "en": "Ngăn cản ai làm gì",
  "intro": "Nói điều gì khiến ai đó không làm được việc gì.",
  "sections": [
   {
    "name": "Công thức",
    "formula": "I/You/We/They + prevent / stop / keep + ai đó / cái gì + from + V-ing · He/She/It + prevents / stops / keeps + ai đó / cái gì + from + V-ing",
    "usage": "Sau from luôn là V-ing.",
    "examples": [
     {
      "en": "The rain prevented us from going out.",
      "vi": "Cơn mưa khiến chúng tôi không ra ngoài được."
     },
     {
      "en": "This app stops children from watching unsuitable videos.",
      "vi": "Ứng dụng này ngăn trẻ em xem video không phù hợp."
     }
    ]
   }
  ],
  "tips": [
   "Không nói \"prevent sb to do\"."
  ]
 },
 {
  "id": "although",
  "group": "core20",
  "title": "Although / Despite",
  "en": "Mặc dù",
  "intro": "Nối hai ý trái ngược nhau.",
  "sections": [
   {
    "name": "Công thức",
    "formula": "Although / Though / Even though + chủ ngữ + V · Despite / In spite of + danh từ / V-ing",
    "usage": "Although đi với mệnh đề; despite, in spite of đi với danh từ hoặc V-ing.",
    "examples": [
     {
      "en": "Although it was raining, we went out.",
      "vi": "Mặc dù trời mưa, chúng tôi vẫn ra ngoài."
     },
     {
      "en": "Despite the rain, we went out.",
      "vi": "Bất chấp trời mưa, chúng tôi vẫn ra ngoài."
     },
     {
      "en": "In spite of being tired, she kept working.",
      "vi": "Dù mệt, cô ấy vẫn tiếp tục làm việc."
     }
    ]
   }
  ],
  "tips": [
   "Không dùng \"but\" cùng although trong một câu: không nói \"Although it rained, but we went out\".",
   "Không nói \"despite of\"; chỉ nói \"despite\" hoặc \"in spite of\"."
  ]
 },
 {
  "id": "paired",
  "group": "core20",
  "title": "Both … and / Not only … but also",
  "en": "Cặp liên từ",
  "intro": "Nối hai thành phần cùng loại trong câu.",
  "sections": [
   {
    "name": "Các cặp thường gặp",
    "table": {
     "head": [
      "Cấu trúc",
      "Nghĩa",
      "Ví dụ"
     ],
     "rows": [
      [
       "both … and",
       "cả … lẫn",
       "She speaks both English and French."
      ],
      [
       "not only … but also",
       "không những … mà còn",
       "He is not only smart but also kind."
      ],
      [
       "either … or",
       "hoặc … hoặc",
       "You can either call me or send an email."
      ],
      [
       "neither … nor",
       "không … cũng không",
       "Neither my brother nor I like coffee."
      ]
     ]
    }
   },
   {
    "name": "Ví dụ",
    "usage": "Hai vế phải cùng loại từ: cùng danh từ, cùng tính từ hoặc cùng động từ.",
    "examples": [
     {
      "en": "Both my parents and my sister are teachers.",
      "vi": "Cả bố mẹ lẫn chị tôi đều là giáo viên."
     },
     {
      "en": "She not only sings but also plays the piano.",
      "vi": "Cô ấy không những hát mà còn chơi piano."
     }
    ]
   }
  ],
  "tips": [
   "Với either … or và neither … nor, động từ chia theo chủ ngữ gần nhất: \"Neither the teacher nor the students are here.\"",
   "both … and luôn đi với động từ số nhiều."
  ]
 },
 {
  "id": "themore",
  "group": "core20",
  "title": "The + so sánh hơn …, the + so sánh hơn",
  "en": "Càng … càng",
  "intro": "Diễn tả hai sự việc thay đổi cùng nhau.",
  "sections": [
   {
    "name": "Công thức",
    "formula": "The + so sánh hơn + chủ ngữ + V, the + so sánh hơn + chủ ngữ + V",
    "usage": "Dùng so sánh hơn ở cả hai vế (xem cấu trúc So sánh).",
    "examples": [
     {
      "en": "The more you practice, the better you get.",
      "vi": "Bạn càng luyện tập nhiều thì càng giỏi."
     },
     {
      "en": "The older he gets, the wiser he becomes.",
      "vi": "Càng lớn tuổi, ông ấy càng khôn ngoan."
     },
     {
      "en": "The sooner, the better.",
      "vi": "Càng sớm càng tốt."
     }
    ]
   }
  ],
  "tips": [
   "Không quên \"the\" ở đầu cả hai vế."
  ]
 },
 {
  "id": "wish",
  "group": "core20",
  "title": "Wish / If only",
  "en": "Câu ước",
  "intro": "Nói mong muốn trái với thực tế.",
  "sections": [
   {
    "name": "Ba loại câu ước",
    "table": {
     "head": [
      "Ước cho",
      "Công thức",
      "Ví dụ"
     ],
     "rows": [
      [
       "Hiện tại",
       "Chủ ngữ + wish/wishes + chủ ngữ + V2 (be → were)",
       "I wish I were taller."
      ],
      [
       "Quá khứ",
       "Chủ ngữ + wish/wishes + chủ ngữ + had + V3",
       "I wish I had studied harder."
      ],
      [
       "Tương lai",
       "Chủ ngữ + wish/wishes + chủ ngữ + would / could + V",
       "I wish it would stop raining."
      ]
     ]
    }
   },
   {
    "name": "Ví dụ",
    "usage": "If only mang nghĩa \"giá mà\", mạnh hơn wish và dùng các thì giống wish.",
    "examples": [
     {
      "en": "I wish I had more free time.",
      "vi": "Ước gì tôi có nhiều thời gian rảnh hơn."
     },
     {
      "en": "If only I had listened to you!",
      "vi": "Giá mà tôi đã nghe lời bạn!"
     }
    ]
   }
  ],
  "tips": [
   "Với be, dùng were cho mọi chủ ngữ: \"I wish I were…\"."
  ]
 }
  ,
  { "id": "inversion", "group": "advanced", "title": "Đảo ngữ", "en": "Inversion",
    "intro": "Đưa trợ động từ lên trước chủ ngữ để nhấn mạnh. Hay gặp trong văn viết trang trọng và bài thi B2–C1.",
    "sections": [
      { "name": "Đảo ngữ với trạng từ phủ định", "formula": "Never / Rarely / Seldom / Little + trợ động từ (do/does/did, have/has, am/is/are…) + chủ ngữ + V",
        "usage": "Nhấn mạnh tính hiếm có hoặc bất ngờ của sự việc.",
        "examples": [
          { "en": "Never have I seen such a beautiful place.", "vi": "Tôi chưa từng thấy nơi nào đẹp như vậy." },
          { "en": "Rarely does she complain about her work.", "vi": "Cô ấy hiếm khi phàn nàn về công việc." },
          { "en": "Little did he know what was waiting for him.", "vi": "Anh ấy đâu biết điều gì đang chờ mình." } ] },
      { "name": "Not until / Only when / Only after", "formula": "Not until / Only when + mệnh đề + trợ động từ + chủ ngữ + V",
        "usage": "Nhấn mạnh thời điểm mà việc chính mới xảy ra.",
        "examples": [
          { "en": "Not until midnight did they arrive home.", "vi": "Mãi đến nửa đêm họ mới về tới nhà." },
          { "en": "Only when I moved abroad did I miss my mother's cooking.", "vi": "Chỉ khi ra nước ngoài tôi mới thấy nhớ cơm mẹ nấu." } ] },
      { "name": "Đảo ngữ trong câu điều kiện", "formula": "Should + chủ ngữ + V · Were + chủ ngữ + to V · Had + chủ ngữ + V3 (bỏ if)",
        "usage": "Cách nói trang trọng của câu điều kiện loại 1, 2, 3.",
        "examples": [
          { "en": "Should you need any help, please call me.", "vi": "Nếu bạn cần giúp gì, hãy gọi cho tôi." },
          { "en": "Had I known, I would have come earlier.", "vi": "Nếu tôi biết trước thì tôi đã đến sớm hơn." } ] }
    ],
    "tips": [ "Chỉ đảo ngữ khi trạng từ phủ định hoặc cụm hạn định đứng đầu câu.", "Hiện tại đơn và quá khứ đơn phải mượn do / does / did: Rarely does he…, Little did I know…", "Đảo ngữ điều kiện bỏ if: Had I known = If I had known." ] },
  { "id": "mixedcond", "group": "advanced", "title": "Câu điều kiện hỗn hợp", "en": "Mixed conditionals",
    "intro": "Kết hợp hai mốc thời gian khác nhau: điều kiện ở quá khứ và kết quả ở hiện tại, hoặc ngược lại.",
    "sections": [
      { "name": "Quá khứ → kết quả ở hiện tại", "formula": "If + chủ ngữ + had + V3, chủ ngữ + would + V",
        "usage": "Điều kiện trái với quá khứ, dẫn tới kết quả trái với hiện tại.",
        "examples": [
          { "en": "If I had studied medicine, I would be a doctor now.", "vi": "Nếu hồi đó tôi học y thì giờ tôi đã là bác sĩ." },
          { "en": "If she hadn't missed the bus, she would be here with us.", "vi": "Nếu cô ấy không lỡ xe buýt thì giờ đã ở đây với chúng ta." } ] },
      { "name": "Hiện tại → kết quả trong quá khứ", "formula": "If + chủ ngữ + V2 / were, chủ ngữ + would have + V3",
        "usage": "Một đặc điểm luôn đúng ở hiện tại dẫn tới kết quả khác trong quá khứ.",
        "examples": [
          { "en": "If I were braver, I would have spoken up at the meeting.", "vi": "Nếu tôi can đảm hơn thì tôi đã lên tiếng trong cuộc họp." },
          { "en": "If he spoke English, he would have got the job.", "vi": "Nếu anh ấy nói được tiếng Anh thì đã được nhận việc rồi." } ] }
    ],
    "tips": [ "Xác định mốc thời gian của từng vế: vế nào nói về quá khứ, vế nào nói về hiện tại.", "Dấu hiệu now / today ở vế kết quả thường cho biết đây là loại quá khứ → hiện tại." ] },
  { "id": "cleft", "group": "advanced", "title": "Câu chẻ (câu nhấn mạnh)", "en": "Cleft sentences",
    "intro": "Tách câu làm hai phần để nhấn mạnh một thông tin quan trọng.",
    "sections": [
      { "name": "It is / was … that / who …", "formula": "It + is/was + phần nhấn mạnh + that/who + phần còn lại",
        "usage": "Nhấn mạnh người, vật, thời gian hay nơi chốn, hoặc sửa thông tin sai.",
        "examples": [
          { "en": "It was Lan who called you yesterday.", "vi": "Chính Lan là người đã gọi cho bạn hôm qua." },
          { "en": "It is in Hoi An that we first met.", "vi": "Chính ở Hội An chúng tôi gặp nhau lần đầu." } ] },
      { "name": "What … is / was …", "formula": "What + chủ ngữ + V + is/was + phần nhấn mạnh",
        "usage": "Đưa điều quan trọng nhất xuống cuối câu cho nổi bật.",
        "examples": [
          { "en": "What I need is a long holiday.", "vi": "Điều tôi cần là một kỳ nghỉ dài." },
          { "en": "What surprised me was how calm he stayed.", "vi": "Điều làm tôi ngạc nhiên là anh ấy vẫn rất bình tĩnh." } ] },
      { "name": "All … is / The reason why … is that …", "formula": "All (that) + chủ ngữ + V + is … · The reason why + mệnh đề + is that …",
        "usage": "Nhấn mạnh sự đơn giản (All) hoặc lý do (The reason why).",
        "examples": [
          { "en": "All I want is some peace and quiet.", "vi": "Tất cả những gì tôi muốn là chút yên tĩnh." },
          { "en": "The reason why I'm late is that the bus broke down.", "vi": "Lý do tôi đến muộn là xe buýt bị hỏng." } ] }
    ],
    "tips": [ "Dùng who cho người, that cho cả người và vật.", "Câu chẻ rất hữu ích khi muốn sửa lại thông tin: It was Tuesday, not Monday, that we met." ] }
];
const TENSES = [
  { id: 'present-simple', lv: 1, name: 'Hiện tại đơn', en: 'Present Simple',
    formula: { pos: "I/You/We/They + V (nguyên thể) · He/She/It + V thêm -s/-es · I + am + tính từ/danh từ · He/She/It + is + tính từ/danh từ · You/We/They + are + tính từ/danh từ", neg: "I/You/We/They + don't + V · He/She/It + doesn't + V · I + am not … · He/She/It + isn't … · You/We/They + aren't …", q: "Do + I/you/we/they + V? · Does + he/she/it + V? · Am + I …? · Is + he/she/it …? · Are + you/we/they …?" },
    usage: ['Thói quen, việc lặp lại hằng ngày', 'Sự thật, chân lý', 'Lịch trình cố định (tàu, xe, lớp học)'],
    signals: ['always', 'usually', 'often', 'sometimes', 'never', 'every day', 'on Mondays'],
    examples: [
      { en: 'She works at a bank every day.', vi: 'Cô ấy làm việc ở ngân hàng mỗi ngày.' },
      { en: 'Water boils at 100 degrees Celsius.', vi: 'Nước sôi ở 100 độ C.' },
      { en: 'The bus leaves at 7 a.m.', vi: 'Xe buýt khởi hành lúc 7 giờ sáng.' }
    ],
    mistake: { wrong: 'He go to school by bike.', right: 'He goes to school by bike.', note: 'Chủ ngữ he/she/it thì động từ thêm -s/-es.' } },
  { id: 'present-continuous', lv: 1, name: 'Hiện tại tiếp diễn', en: 'Present Continuous',
    formula: { pos: "I + am + V-ing · He/She/It + is + V-ing · You/We/They + are + V-ing", neg: "I + am not + V-ing · He/She/It + isn't + V-ing · You/We/They + aren't + V-ing", q: "Am + I + V-ing? · Is + he/she/it + V-ing? · Are + you/we/they + V-ing?" },
    usage: ['Việc đang xảy ra ngay lúc nói', 'Việc tạm thời trong khoảng thời gian này', 'Kế hoạch đã sắp xếp trong tương lai gần'],
    signals: ['now', 'right now', 'at the moment', 'Look!', 'Listen!', 'this week'],
    examples: [
      { en: 'I am reading a book right now.', vi: 'Tôi đang đọc sách lúc này.' },
      { en: 'Look! The children are playing in the rain.', vi: 'Nhìn kìa! Bọn trẻ đang chơi dưới mưa.' },
      { en: 'We are meeting them tomorrow.', vi: 'Ngày mai chúng tôi sẽ gặp họ (đã hẹn).' }
    ],
    mistake: { wrong: 'I reading now.', right: 'I am reading now.', note: 'Đừng quên am/is/are trước V-ing.' } },
  { id: 'past-be', lv: 1, name: 'Quá khứ của "to be"', en: 'Was / Were',
    formula: { pos: "I/He/She/It + was + tính từ/danh từ · You/We/They + were + tính từ/danh từ", neg: "I/He/She/It + wasn't … · You/We/They + weren't …", q: "Was + I/he/she/it …? · Were + you/we/they …?" },
    usage: ['Nói về trạng thái, vị trí, cảm xúc trong quá khứ', 'Mô tả người, vật, thời tiết hôm qua, năm ngoái…'],
    signals: ['yesterday', 'last night', 'last week', 'ago', 'in 2020', 'when I was a child'],
    examples: [
      { en: 'I was tired yesterday.', vi: 'Hôm qua tôi mệt.' },
      { en: 'They were at home last night.', vi: 'Tối qua họ ở nhà.' },
      { en: 'Was the weather nice in Da Lat?', vi: 'Thời tiết ở Đà Lạt có đẹp không?' }
    ],
    mistake: { wrong: 'We was very happy.', right: 'We were very happy.', note: 'We/You/They đi với were, không dùng was.' } },

  { id: 'past-simple', lv: 2, name: 'Quá khứ đơn', en: 'Past Simple',
    formula: { pos: "Chủ ngữ (I, you, he, she, it, we, they) + V2/V-ed", neg: "Chủ ngữ + didn't + V (nguyên thể)", q: "Did + chủ ngữ + V (nguyên thể)?" },
    usage: ['Việc đã xảy ra và kết thúc trong quá khứ, có thời điểm rõ ràng', 'Chuỗi hành động nối tiếp nhau khi kể chuyện'],
    signals: ['yesterday', 'last month', 'two days ago', 'in 2019', 'when…'],
    examples: [
      { en: 'I visited my grandparents last weekend.', vi: 'Cuối tuần trước tôi đã thăm ông bà.' },
      { en: 'She bought a new phone two days ago.', vi: 'Hai ngày trước cô ấy đã mua điện thoại mới.' },
      { en: 'Did you watch the match last night?', vi: 'Tối qua bạn có xem trận đấu không?' }
    ],
    mistake: { wrong: "I didn't went to school.", right: "I didn't go to school.", note: "Sau didn't, động từ trở về nguyên thể." } },
  { id: 'past-continuous', lv: 2, name: 'Quá khứ tiếp diễn', en: 'Past Continuous',
    formula: { pos: "I/He/She/It + was + V-ing · You/We/They + were + V-ing", neg: "I/He/She/It + wasn't + V-ing · You/We/They + weren't + V-ing", q: "Was + I/he/she/it + V-ing? · Were + you/we/they + V-ing?" },
    usage: ['Việc đang diễn ra tại một thời điểm trong quá khứ', 'Việc đang diễn ra thì một việc khác xen vào (dùng với when)', 'Hai việc cùng diễn ra song song (dùng với while)'],
    signals: ['at 8 p.m. yesterday', 'at that time', 'when', 'while'],
    examples: [
      { en: 'I was cooking when you called.', vi: 'Tôi đang nấu ăn thì bạn gọi.' },
      { en: 'At 9 p.m. last night, we were watching TV.', vi: 'Lúc 9 giờ tối qua, chúng tôi đang xem tivi.' },
      { en: 'She was reading while he was sleeping.', vi: 'Cô ấy đọc sách trong khi anh ấy ngủ.' }
    ],
    mistake: { wrong: 'When I was arriving, they ate dinner.', right: 'When I arrived, they were eating dinner.', note: 'Việc xen vào dùng quá khứ đơn, việc đang diễn ra dùng quá khứ tiếp diễn.' } },
  { id: 'going-to', lv: 2, name: 'Tương lai gần "be going to"', en: 'Be going to',
    formula: { pos: "I + am going to + V · He/She/It + is going to + V · You/We/They + are going to + V", neg: "I + am not going to + V · He/She/It + isn't going to + V · You/We/They + aren't going to + V", q: "Am + I + going to + V? · Is + he/she/it + going to + V? · Are + you/we/they + going to + V?" },
    usage: ['Dự định, kế hoạch đã quyết định từ trước', 'Dự đoán dựa trên dấu hiệu nhìn thấy được'],
    signals: ['tonight', 'tomorrow', 'next week', 'this summer', 'Look at…'],
    examples: [
      { en: "I'm going to study abroad next year.", vi: 'Năm sau tôi định đi du học.' },
      { en: 'Look at those clouds! It is going to rain.', vi: 'Nhìn mây kìa! Trời sắp mưa rồi.' },
      { en: 'Are you going to visit Hue this summer?', vi: 'Hè này bạn có định đi Huế không?' }
    ],
    mistake: { wrong: 'I going to buy a car.', right: "I'm going to buy a car.", note: 'Luôn có am/is/are trước going to.' } },
  { id: 'future-simple', lv: 2, name: 'Tương lai đơn', en: 'Future Simple (will)',
    formula: { pos: "Chủ ngữ (I, you, he, she, it, we, they) + will + V (nguyên thể)", neg: "Chủ ngữ + won't (will not) + V", q: "Will + chủ ngữ + V?" },
    usage: ['Quyết định ngay lúc nói', 'Lời hứa, đề nghị, yêu cầu', 'Dự đoán dựa trên ý kiến cá nhân (I think…)'],
    signals: ['I think', 'probably', 'maybe', 'tomorrow', 'soon', 'in the future'],
    examples: [
      { en: "It's cold. I'll close the window.", vi: 'Trời lạnh. Để tôi đóng cửa sổ.' },
      { en: 'I promise I will call you tonight.', vi: 'Tôi hứa tối nay sẽ gọi cho bạn.' },
      { en: 'I think it will be sunny tomorrow.', vi: 'Tôi nghĩ ngày mai trời sẽ nắng.' }
    ],
    mistake: { wrong: 'I will to help you.', right: 'I will help you.', note: 'Sau will là động từ nguyên thể, không có to.' } },
  { id: 'present-perfect', lv: 2, name: 'Hiện tại hoàn thành', en: 'Present Perfect',
    formula: { pos: "I/You/We/They + have + V3 · He/She/It + has + V3", neg: "I/You/We/They + haven't + V3 · He/She/It + hasn't + V3", q: "Have + I/you/we/they + V3? · Has + he/she/it + V3?" },
    usage: ['Kinh nghiệm (đã từng / chưa từng)', 'Việc vừa mới xảy ra, kết quả còn ở hiện tại', 'Việc bắt đầu trong quá khứ và kéo dài đến nay (for/since)'],
    signals: ['ever', 'never', 'already', 'yet', 'just', 'for', 'since', 'so far'],
    examples: [
      { en: 'I have finished my homework.', vi: 'Tôi đã làm xong bài tập.' },
      { en: 'Have you ever eaten durian?', vi: 'Bạn đã bao giờ ăn sầu riêng chưa?' },
      { en: 'She has lived here for ten years.', vi: 'Cô ấy đã sống ở đây được 10 năm.' }
    ],
    mistake: { wrong: 'I have seen him yesterday.', right: 'I saw him yesterday.', note: 'Có thời điểm cụ thể trong quá khứ (yesterday, last week…) thì dùng quá khứ đơn.' } },

  { id: 'present-perfect-continuous', lv: 3, name: 'Hiện tại hoàn thành tiếp diễn', en: 'Present Perfect Continuous',
    formula: { pos: "I/You/We/They + have been + V-ing · He/She/It + has been + V-ing", neg: "I/You/We/They + haven't been + V-ing · He/She/It + hasn't been + V-ing", q: "Have + I/you/we/they + been + V-ing? · Has + he/she/it + been + V-ing?" },
    usage: ['Nhấn mạnh quá trình kéo dài từ quá khứ đến hiện tại', 'Việc vừa dừng lại nhưng còn để lại dấu vết'],
    signals: ['for', 'since', 'all day', 'all morning', 'How long…?', 'lately'],
    examples: [
      { en: 'I have been studying English for two years.', vi: 'Tôi đã học tiếng Anh được hai năm (và vẫn đang học).' },
      { en: 'It has been raining since morning.', vi: 'Trời mưa từ sáng đến giờ.' },
      { en: "You're tired because you've been working all day.", vi: 'Bạn mệt vì đã làm việc cả ngày.' }
    ],
    mistake: { wrong: 'I have been knowing her for years.', right: 'I have known her for years.', note: 'Động từ chỉ trạng thái (know, like, own…) không dùng dạng tiếp diễn.' } },
  { id: 'past-perfect', lv: 3, name: 'Quá khứ hoàn thành', en: 'Past Perfect',
    formula: { pos: "Chủ ngữ (I, you, he, she, it, we, they) + had + V3", neg: "Chủ ngữ + hadn't + V3", q: "Had + chủ ngữ + V3?" },
    usage: ['Việc xảy ra trước một việc khác trong quá khứ (“quá khứ của quá khứ”)', 'Hay dùng trong kể chuyện và câu tường thuật'],
    signals: ['before', 'after', 'by the time', 'already', 'when'],
    examples: [
      { en: 'When I arrived, the train had already left.', vi: 'Khi tôi đến, tàu đã rời đi rồi.' },
      { en: 'She had finished dinner before he came home.', vi: 'Cô ấy đã ăn tối xong trước khi anh ấy về.' },
      { en: 'I had never seen snow before that trip.', vi: 'Trước chuyến đi đó tôi chưa từng thấy tuyết.' }
    ],
    mistake: { wrong: 'After he finished, he had gone home.', right: 'After he had finished, he went home.', note: 'Việc xảy ra trước dùng had + V3, việc xảy ra sau dùng quá khứ đơn.' } },
  { id: 'future-continuous', lv: 3, name: 'Tương lai tiếp diễn', en: 'Future Continuous',
    formula: { pos: "Chủ ngữ (I, you, he, she, it, we, they) + will be + V-ing", neg: "Chủ ngữ + won't be + V-ing", q: "Will + chủ ngữ + be + V-ing?" },
    usage: ['Việc sẽ đang diễn ra tại một thời điểm trong tương lai', 'Hỏi lịch sự về kế hoạch của người khác'],
    signals: ['at this time tomorrow', 'at 8 p.m. tonight', 'this time next week'],
    examples: [
      { en: 'At this time tomorrow, I will be flying to Tokyo.', vi: 'Giờ này ngày mai tôi đang bay tới Tokyo.' },
      { en: "Don't call at 8. I'll be having dinner.", vi: 'Đừng gọi lúc 8 giờ. Lúc đó tôi đang ăn tối.' },
      { en: 'Will you be using the car tonight?', vi: 'Tối nay bạn có dùng xe không?' }
    ],
    mistake: { wrong: 'This time next week I will lie on the beach.', right: 'This time next week I will be lying on the beach.', note: 'Nói việc đang diễn ra ở một thời điểm tương lai thì dùng will be + V-ing.' } },
  { id: 'stative', lv: 3, name: 'Đơn hay tiếp diễn với động từ trạng thái', en: 'State vs action verbs',
    formula: { pos: "Động từ trạng thái (know, like, want, believe, own, need…) → dùng thì đơn, không thêm -ing", neg: "Không nói: I am knowing · Không nói: I am wanting", q: "Một số động từ đổi nghĩa khi thêm -ing: think, have, see, taste…" },
    usage: ['Động từ chỉ suy nghĩ, cảm xúc, sở hữu, giác quan thường không dùng dạng -ing', 'Khi mang nghĩa hành động, vài động từ vẫn dùng được dạng -ing'],
    signals: ['know', 'understand', 'like', 'love', 'hate', 'want', 'need', 'belong', 'own'],
    examples: [
      { en: 'I think this book is great.', vi: 'Tôi nghĩ cuốn sách này hay (ý kiến).' },
      { en: "I'm thinking about changing jobs.", vi: 'Tôi đang cân nhắc đổi việc (quá trình suy nghĩ).' },
      { en: 'She has two cats, and she is having lunch now.', vi: 'Cô ấy có hai con mèo, và giờ đang ăn trưa.' }
    ],
    mistake: { wrong: 'I am understanding the lesson now.', right: 'I understand the lesson now.', note: 'understand là động từ trạng thái, dùng thì đơn.' } },

  { id: 'past-perfect-continuous', lv: 4, name: 'Quá khứ hoàn thành tiếp diễn', en: 'Past Perfect Continuous',
    formula: { pos: "Chủ ngữ (I, you, he, she, it, we, they) + had been + V-ing", neg: "Chủ ngữ + hadn't been + V-ing", q: "Had + chủ ngữ + been + V-ing?" },
    usage: ['Nhấn mạnh một việc đã kéo dài liên tục trước một thời điểm/việc khác trong quá khứ', 'Giải thích nguyên nhân của một tình trạng trong quá khứ'],
    signals: ['for', 'since', 'before', 'by the time', 'all day', 'how long'],
    examples: [
      { en: 'I had been waiting for an hour when the bus came.', vi: 'Tôi đã đợi cả tiếng thì xe buýt mới tới.' },
      { en: 'Her eyes were red because she had been crying.', vi: 'Mắt cô ấy đỏ vì cô ấy đã khóc.' },
      { en: 'They had been living in Hanoi for years before they moved.', vi: 'Họ đã sống ở Hà Nội nhiều năm trước khi chuyển đi.' }
    ],
    mistake: { wrong: 'He was tired because he has been running.', right: 'He was tired because he had been running.', note: 'Câu ở quá khứ thì lùi have been → had been.' } },
  { id: 'future-perfect', lv: 4, name: 'Tương lai hoàn thành', en: 'Future Perfect',
    formula: { pos: "Chủ ngữ (I, you, he, she, it, we, they) + will have + V3", neg: "Chủ ngữ + won't have + V3", q: "Will + chủ ngữ + have + V3?" },
    usage: ['Việc sẽ hoàn thành trước một thời điểm trong tương lai'],
    signals: ['by tomorrow', 'by 2030', 'by the end of this year', 'by the time', 'before'],
    examples: [
      { en: 'I will have finished the report by Friday.', vi: 'Tôi sẽ làm xong báo cáo trước thứ Sáu.' },
      { en: 'By 2030, she will have graduated.', vi: 'Đến năm 2030, cô ấy sẽ tốt nghiệp rồi.' },
      { en: 'Will you have eaten by the time we arrive?', vi: 'Đến lúc chúng tôi tới, bạn đã ăn chưa?' }
    ],
    mistake: { wrong: 'By next year I will finish my degree. (khi muốn nhấn mạnh “đã xong”)', right: 'By next year I will have finished my degree.', note: 'Có “by + thời điểm tương lai” và ý “đã xong trước lúc đó” thì dùng will have + V3.' } },
  { id: 'future-in-past', lv: 4, name: 'Tương lai trong quá khứ', en: 'Future in the past',
    formula: { pos: "I/He/She/It + was going to + V · You/We/They + were going to + V · Chủ ngữ + would + V", neg: "I/He/She/It + wasn't going to + V · You/We/They + weren't going to + V · Chủ ngữ + wouldn't + V", q: "Was + I/he/she/it + going to + V? · Were + you/we/they + going to + V? · Would + chủ ngữ + V?" },
    usage: ['Dự định trong quá khứ (thường là không thành)', 'Lời nói/suy nghĩ về tương lai, được kể lại từ quá khứ'],
    signals: ['said', 'thought', 'knew', 'hoped', 'but', 'then'],
    examples: [
      { en: 'I was going to call you, but I forgot.', vi: 'Tôi định gọi cho bạn, nhưng lại quên mất.' },
      { en: 'She said she would help me.', vi: 'Cô ấy nói cô ấy sẽ giúp tôi.' },
      { en: 'We knew it would be a long night.', vi: 'Chúng tôi biết đó sẽ là một đêm dài.' }
    ],
    mistake: { wrong: 'He said he will come.', right: 'He said he would come.', note: 'Kể lại từ quá khứ thì will lùi thành would.' } },

  { id: 'future-perfect-continuous', lv: 5, name: 'Tương lai hoàn thành tiếp diễn', en: 'Future Perfect Continuous',
    formula: { pos: "Chủ ngữ (I, you, he, she, it, we, they) + will have been + V-ing", neg: "Chủ ngữ + won't have been + V-ing", q: "Will + chủ ngữ + have been + V-ing?" },
    usage: ['Nhấn mạnh việc sẽ kéo dài bao lâu tính đến một thời điểm trong tương lai'],
    signals: ['for + khoảng thời gian', 'by + thời điểm tương lai', 'by the time'],
    examples: [
      { en: 'By June, I will have been working here for five years.', vi: 'Đến tháng Sáu, tôi sẽ làm việc ở đây được 5 năm.' },
      { en: 'By the time you arrive, we will have been waiting for two hours.', vi: 'Lúc bạn tới, chúng tôi sẽ đợi được hai tiếng rồi.' },
      { en: "Next month, she'll have been teaching for a decade.", vi: 'Tháng sau, cô ấy sẽ dạy học tròn mười năm.' }
    ],
    mistake: { wrong: 'By June I will work here for five years.', right: 'By June I will have been working here for five years.', note: 'Nhấn mạnh độ dài tính đến mốc tương lai thì dùng will have been + V-ing.' } },
  { id: 'polite-tenses', lv: 5, name: 'Dùng thì để nói lịch sự, giảm nhẹ', en: 'Tenses for politeness',
    formula: { pos: "I was wondering if … · I was hoping … · Did you want …?", neg: "I wasn’t planning to … (từ chối nhẹ nhàng)", q: "I'm hoping you could … · We'd like …" },
    usage: ['Dùng quá khứ hoặc tiếp diễn để lời đề nghị, yêu cầu nghe mềm và lịch sự hơn', 'Rất hay gặp trong email công việc và giao tiếp trang trọng'],
    signals: ['wonder', 'hope', 'think', 'want', 'could', 'would'],
    examples: [
      { en: 'I was wondering if you could help me with this.', vi: 'Không biết bạn có thể giúp tôi việc này được không.' },
      { en: "We're hoping to hear from you soon.", vi: 'Chúng tôi mong sớm nhận được phản hồi của bạn.' },
      { en: 'Did you want to sit by the window?', vi: 'Anh/chị có muốn ngồi cạnh cửa sổ không ạ?' }
    ],
    mistake: { wrong: 'I want you to send me the file.', right: 'I was wondering if you could send me the file.', note: 'Câu đúng ngữ pháp nhưng nghe như ra lệnh. Lùi thì giúp lời nhờ lịch sự hơn.' } },
  { id: 'inversion-perfect', lv: 5, name: 'Đảo ngữ với quá khứ hoàn thành', en: 'Hardly had… when / No sooner had… than',
    formula: { pos: "Hardly/Scarcely + had + chủ ngữ + V3 + when + mệnh đề quá khứ đơn", neg: "No sooner + had + chủ ngữ + V3 + than + mệnh đề quá khứ đơn", q: "Never/Rarely + have/has/had + chủ ngữ + V3 …" },
    usage: ['Nhấn mạnh hai việc xảy ra gần như liền nhau trong quá khứ', 'Văn phong trang trọng, hay gặp trong bài viết và bài thi B2–C1'],
    signals: ['hardly', 'scarcely', 'no sooner', 'barely', 'never before'],
    examples: [
      { en: 'Hardly had I arrived when it started to rain.', vi: 'Tôi vừa mới tới thì trời đổ mưa.' },
      { en: 'No sooner had she sat down than the phone rang.', vi: 'Cô ấy vừa ngồi xuống thì điện thoại reo.' },
      { en: 'Never before had I seen such a beautiful sunset.', vi: 'Trước đây tôi chưa từng thấy hoàng hôn đẹp như vậy.' }
    ],
    mistake: { wrong: 'No sooner I had arrived than…', right: 'No sooner had I arrived than…', note: 'Sau hardly / no sooner phải đảo had lên trước chủ ngữ.' } }
];
const IRREGULAR_VERBS = [
  {"v1": "abide", "v2": "abode/abided", "v3": "abode/abided", "ipa": "/əˈbaɪd/", "ipa2": "/əˈbəʊd/", "ipa3": "/əˈbəʊd/", "meaning": "tuân theo, chịu đựng", "lv": 5},
  {"v1": "alight", "v2": "alighted/alit", "v3": "alighted/alit", "ipa": "/əˈlaɪt/", "ipa2": "/əˈlaɪtɪd/", "ipa3": "/əˈlaɪtɪd/", "meaning": "xuống (xe), đậu xuống", "lv": 5},
  {"v1": "arise", "v2": "arose", "v3": "arisen", "ipa": "/əˈraɪz/", "ipa2": "/əˈrəʊz/", "ipa3": "/əˈrɪzn/", "meaning": "phát sinh, nảy sinh", "lv": 4},
  {"v1": "awake", "v2": "awoke", "v3": "awoken", "ipa": "/əˈweɪk/", "ipa2": "/əˈwəʊk/", "ipa3": "/əˈwəʊkən/", "meaning": "tỉnh dậy, đánh thức", "lv": 4},
  {"v1": "babysit", "v2": "babysat", "v3": "babysat", "ipa": "/ˈbeɪbisɪt/", "ipa2": "/ˈbeɪbisæt/", "ipa3": "/ˈbeɪbisæt/", "meaning": "trông trẻ", "lv": 3},
  {"v1": "backslide", "v2": "backslid", "v3": "backslid/backslidden", "ipa": "/ˈbækslaɪd/", "ipa2": "/ˈbækslɪd/", "ipa3": "/ˈbækslɪd/", "meaning": "sa ngã lại, quay lại thói cũ", "lv": 5},
  {"v1": "be", "v2": "was/were", "v3": "been", "ipa": "/biː/", "ipa2": "/wɒz/ · /wɜːr/", "ipa3": "/biːn/", "meaning": "là, ở, thì", "lv": 1},
  {"v1": "bear", "v2": "bore", "v3": "borne/born", "ipa": "/beə/", "ipa2": "/bɔː/", "ipa3": "/bɔːn/", "meaning": "chịu đựng, sinh ra", "lv": 4},
  {"v1": "beat", "v2": "beat", "v3": "beaten", "ipa": "/biːt/", "ipa2": "/biːt/", "ipa3": "/ˈbiːtn/", "meaning": "đánh, thắng", "lv": 3},
  {"v1": "become", "v2": "became", "v3": "become", "ipa": "/bɪˈkʌm/", "ipa2": "/bɪˈkeɪm/", "ipa3": "/bɪˈkʌm/", "meaning": "trở thành", "lv": 2},
  {"v1": "befall", "v2": "befell", "v3": "befallen", "ipa": "/bɪˈfɔːl/", "ipa2": "/bɪˈfel/", "ipa3": "/bɪˈfɔːlən/", "meaning": "xảy đến (điều xấu)", "lv": 5},
  {"v1": "beget", "v2": "begot", "v3": "begotten", "ipa": "/bɪˈɡet/", "ipa2": "/bɪˈɡɒt/", "ipa3": "/bɪˈɡɒtn/", "meaning": "sinh ra, gây ra", "lv": 5},
  {"v1": "begin", "v2": "began", "v3": "begun", "ipa": "/bɪˈɡɪn/", "ipa2": "/bɪˈɡæn/", "ipa3": "/bɪˈɡʌn/", "meaning": "bắt đầu", "lv": 2},
  {"v1": "behold", "v2": "beheld", "v3": "beheld", "ipa": "/bɪˈhəʊld/", "ipa2": "/bɪˈheld/", "ipa3": "/bɪˈheld/", "meaning": "ngắm nhìn (văn chương)", "lv": 5},
  {"v1": "bend", "v2": "bent", "v3": "bent", "ipa": "/bend/", "ipa2": "/bent/", "ipa3": "/bent/", "meaning": "uốn cong, cúi xuống", "lv": 3},
  {"v1": "bereave", "v2": "bereaved/bereft", "v3": "bereaved/bereft", "ipa": "/bɪˈriːv/", "ipa2": "/bɪˈriːvd/ · /bɪˈreft/", "ipa3": "/bɪˈriːvd/ · /bɪˈreft/", "meaning": "lấy đi (người thân), làm mất", "lv": 5},
  {"v1": "beseech", "v2": "besought/beseeched", "v3": "besought/beseeched", "ipa": "/bɪˈsiːtʃ/", "ipa2": "/bɪˈsɔːt/", "ipa3": "/bɪˈsɔːt/", "meaning": "van nài", "lv": 5},
  {"v1": "beset", "v2": "beset", "v3": "beset", "ipa": "/bɪˈset/", "ipa2": "/bɪˈset/", "ipa3": "/bɪˈset/", "meaning": "bao vây, gây khó khăn", "lv": 5},
  {"v1": "bet", "v2": "bet", "v3": "bet", "ipa": "/bet/", "ipa2": "/bet/", "ipa3": "/bet/", "meaning": "đánh cược", "lv": 3},
  {"v1": "bid", "v2": "bid", "v3": "bid", "ipa": "/bɪd/", "ipa2": "/bɪd/", "ipa3": "/bɪd/", "meaning": "trả giá (đấu giá)", "lv": 5},
  {"v1": "bind", "v2": "bound", "v3": "bound", "ipa": "/baɪnd/", "ipa2": "/baʊnd/", "ipa3": "/baʊnd/", "meaning": "buộc, ràng buộc", "lv": 4},
  {"v1": "bite", "v2": "bit", "v3": "bitten", "ipa": "/baɪt/", "ipa2": "/bɪt/", "ipa3": "/ˈbɪtn/", "meaning": "cắn", "lv": 2},
  {"v1": "bleed", "v2": "bled", "v3": "bled", "ipa": "/bliːd/", "ipa2": "/bled/", "ipa3": "/bled/", "meaning": "chảy máu", "lv": 3},
  {"v1": "blow", "v2": "blew", "v3": "blown", "ipa": "/bləʊ/", "ipa2": "/bluː/", "ipa3": "/bləʊn/", "meaning": "thổi", "lv": 2},
  {"v1": "break", "v2": "broke", "v3": "broken", "ipa": "/breɪk/", "ipa2": "/brəʊk/", "ipa3": "/ˈbrəʊkən/", "meaning": "làm vỡ", "lv": 2},
  {"v1": "breastfeed", "v2": "breastfed", "v3": "breastfed", "ipa": "/ˈbrestfiːd/", "ipa2": "/ˈbrestfed/", "ipa3": "/ˈbrestfed/", "meaning": "cho con bú", "lv": 4},
  {"v1": "breed", "v2": "bred", "v3": "bred", "ipa": "/briːd/", "ipa2": "/bred/", "ipa3": "/bred/", "meaning": "nuôi, gây giống", "lv": 4},
  {"v1": "bring", "v2": "brought", "v3": "brought", "ipa": "/brɪŋ/", "ipa2": "/brɔːt/", "ipa3": "/brɔːt/", "meaning": "mang đến", "lv": 2},
  {"v1": "broadcast", "v2": "broadcast", "v3": "broadcast", "ipa": "/ˈbrɔːdkɑːst/", "ipa2": "/ˈbrɔːdkɑːst/", "ipa3": "/ˈbrɔːdkɑːst/", "meaning": "phát sóng", "lv": 3},
  {"v1": "browbeat", "v2": "browbeat", "v3": "browbeaten", "ipa": "/ˈbraʊbiːt/", "ipa2": "/ˈbraʊbiːt/", "ipa3": "/ˈbraʊbiːtn/", "meaning": "dọa nạt", "lv": 5},
  {"v1": "build", "v2": "built", "v3": "built", "ipa": "/bɪld/", "ipa2": "/bɪlt/", "ipa3": "/bɪlt/", "meaning": "xây dựng", "lv": 2},
  {"v1": "burn", "v2": "burnt/burned", "v3": "burnt/burned", "ipa": "/bɜːn/", "ipa2": "/bɜːnt/", "ipa3": "/bɜːnt/", "meaning": "đốt cháy, bị bỏng", "lv": 2},
  {"v1": "burst", "v2": "burst", "v3": "burst", "ipa": "/bɜːst/", "ipa2": "/bɜːst/", "ipa3": "/bɜːst/", "meaning": "nổ tung, vỡ òa", "lv": 3},
  {"v1": "bust", "v2": "bust/busted", "v3": "bust/busted", "ipa": "/bʌst/", "ipa2": "/bʌst/ · /ˈbʌstɪd/", "ipa3": "/bʌst/ · /ˈbʌstɪd/", "meaning": "làm hỏng, bắt quả tang (thân mật)", "lv": 4},
  {"v1": "buy", "v2": "bought", "v3": "bought", "ipa": "/baɪ/", "ipa2": "/bɔːt/", "ipa3": "/bɔːt/", "meaning": "mua", "lv": 1},
  {"v1": "cast", "v2": "cast", "v3": "cast", "ipa": "/kɑːst/", "ipa2": "/kɑːst/", "ipa3": "/kɑːst/", "meaning": "ném, chọn vai diễn", "lv": 4},
  {"v1": "catch", "v2": "caught", "v3": "caught", "ipa": "/kætʃ/", "ipa2": "/kɔːt/", "ipa3": "/kɔːt/", "meaning": "bắt", "lv": 2},
  {"v1": "chide", "v2": "chided/chid", "v3": "chided/chidden", "ipa": "/tʃaɪd/", "ipa2": "/ˈtʃaɪdɪd/", "ipa3": "/ˈtʃaɪdɪd/", "meaning": "quở trách", "lv": 5},
  {"v1": "choose", "v2": "chose", "v3": "chosen", "ipa": "/tʃuːz/", "ipa2": "/tʃəʊz/", "ipa3": "/ˈtʃəʊzn/", "meaning": "chọn", "lv": 2},
  {"v1": "cleave", "v2": "cleaved/clove", "v3": "cleaved/cloven", "ipa": "/kliːv/", "ipa2": "/kliːvd/", "ipa3": "/kliːvd/", "meaning": "chẻ, bổ", "lv": 5},
  {"v1": "cling", "v2": "clung", "v3": "clung", "ipa": "/klɪŋ/", "ipa2": "/klʌŋ/", "ipa3": "/klʌŋ/", "meaning": "bám chặt", "lv": 4},
  {"v1": "clothe", "v2": "clothed/clad", "v3": "clothed/clad", "ipa": "/kləʊð/", "ipa2": "/kləʊðd/ · /klæd/", "ipa3": "/kləʊðd/ · /klæd/", "meaning": "mặc quần áo cho", "lv": 5},
  {"v1": "come", "v2": "came", "v3": "come", "ipa": "/kʌm/", "ipa2": "/keɪm/", "ipa3": "/kʌm/", "meaning": "đến", "lv": 1},
  {"v1": "cost", "v2": "cost", "v3": "cost", "ipa": "/kɒst/", "ipa2": "/kɒst/", "ipa3": "/kɒst/", "meaning": "có giá", "lv": 2},
  {"v1": "creep", "v2": "crept", "v3": "crept", "ipa": "/kriːp/", "ipa2": "/krept/", "ipa3": "/krept/", "meaning": "bò, rón rén", "lv": 4},
  {"v1": "cut", "v2": "cut", "v3": "cut", "ipa": "/kʌt/", "ipa2": "/kʌt/", "ipa3": "/kʌt/", "meaning": "cắt", "lv": 2},
  {"v1": "daydream", "v2": "daydreamt/daydreamed", "v3": "daydreamt/daydreamed", "ipa": "/ˈdeɪdriːm/", "ipa2": "/ˈdeɪdremt/", "ipa3": "/ˈdeɪdremt/", "meaning": "mơ mộng", "lv": 3},
  {"v1": "deal", "v2": "dealt", "v3": "dealt", "ipa": "/diːl/", "ipa2": "/delt/", "ipa3": "/delt/", "meaning": "giải quyết, buôn bán", "lv": 3},
  {"v1": "deep-freeze", "v2": "deep-froze", "v3": "deep-frozen", "ipa": "/ˌdiːp ˈfriːz/", "ipa2": "/ˌdiːp ˈfrəʊz/", "ipa3": "/ˌdiːp ˈfrəʊzn/", "meaning": "cấp đông", "lv": 5},
  {"v1": "dig", "v2": "dug", "v3": "dug", "ipa": "/dɪɡ/", "ipa2": "/dʌɡ/", "ipa3": "/dʌɡ/", "meaning": "đào", "lv": 3},
  {"v1": "dive", "v2": "dived/dove", "v3": "dived", "ipa": "/daɪv/", "ipa2": "/daɪvd/", "ipa3": "/daɪvd/", "meaning": "lặn, nhảy xuống nước", "lv": 3},
  {"v1": "do", "v2": "did", "v3": "done", "ipa": "/duː/", "ipa2": "/dɪd/", "ipa3": "/dʌn/", "meaning": "làm", "lv": 1},
  {"v1": "draw", "v2": "drew", "v3": "drawn", "ipa": "/drɔː/", "ipa2": "/druː/", "ipa3": "/drɔːn/", "meaning": "vẽ", "lv": 2},
  {"v1": "dream", "v2": "dreamt/dreamed", "v3": "dreamt/dreamed", "ipa": "/driːm/", "ipa2": "/dremt/", "ipa3": "/dremt/", "meaning": "mơ, mơ ước", "lv": 2},
  {"v1": "drink", "v2": "drank", "v3": "drunk", "ipa": "/drɪŋk/", "ipa2": "/dræŋk/", "ipa3": "/drʌŋk/", "meaning": "uống", "lv": 1},
  {"v1": "drive", "v2": "drove", "v3": "driven", "ipa": "/draɪv/", "ipa2": "/drəʊv/", "ipa3": "/ˈdrɪvn/", "meaning": "lái xe", "lv": 2},
  {"v1": "dwell", "v2": "dwelt/dwelled", "v3": "dwelt/dwelled", "ipa": "/dwel/", "ipa2": "/dwelt/", "ipa3": "/dwelt/", "meaning": "cư ngụ, nghĩ mãi về", "lv": 4},
  {"v1": "eat", "v2": "ate", "v3": "eaten", "ipa": "/iːt/", "ipa2": "/eɪt/", "ipa3": "/ˈiːtn/", "meaning": "ăn", "lv": 1},
  {"v1": "fall", "v2": "fell", "v3": "fallen", "ipa": "/fɔːl/", "ipa2": "/fel/", "ipa3": "/ˈfɔːlən/", "meaning": "rơi, ngã", "lv": 2},
  {"v1": "feed", "v2": "fed", "v3": "fed", "ipa": "/fiːd/", "ipa2": "/fed/", "ipa3": "/fed/", "meaning": "cho ăn", "lv": 2},
  {"v1": "feel", "v2": "felt", "v3": "felt", "ipa": "/fiːl/", "ipa2": "/felt/", "ipa3": "/felt/", "meaning": "cảm thấy", "lv": 1},
  {"v1": "fight", "v2": "fought", "v3": "fought", "ipa": "/faɪt/", "ipa2": "/fɔːt/", "ipa3": "/fɔːt/", "meaning": "đánh nhau, chiến đấu", "lv": 2},
  {"v1": "find", "v2": "found", "v3": "found", "ipa": "/faɪnd/", "ipa2": "/faʊnd/", "ipa3": "/faʊnd/", "meaning": "tìm thấy", "lv": 1},
  {"v1": "fit", "v2": "fit/fitted", "v3": "fit/fitted", "ipa": "/fɪt/", "ipa2": "/fɪt/ · /ˈfɪtɪd/", "ipa3": "/fɪt/ · /ˈfɪtɪd/", "meaning": "vừa (kích cỡ), lắp vào", "lv": 2},
  {"v1": "flee", "v2": "fled", "v3": "fled", "ipa": "/fliː/", "ipa2": "/fled/", "ipa3": "/fled/", "meaning": "chạy trốn", "lv": 4},
  {"v1": "fling", "v2": "flung", "v3": "flung", "ipa": "/flɪŋ/", "ipa2": "/flʌŋ/", "ipa3": "/flʌŋ/", "meaning": "ném mạnh, quăng", "lv": 4},
  {"v1": "fly", "v2": "flew", "v3": "flown", "ipa": "/flaɪ/", "ipa2": "/fluː/", "ipa3": "/fləʊn/", "meaning": "bay", "lv": 2},
  {"v1": "forbear", "v2": "forbore", "v3": "forborne", "ipa": "/fɔːˈbeə/", "ipa2": "/fɔːˈbɔː/", "ipa3": "/fɔːˈbɔːn/", "meaning": "nhẫn nhịn, kiềm chế", "lv": 5},
  {"v1": "forbid", "v2": "forbade", "v3": "forbidden", "ipa": "/fəˈbɪd/", "ipa2": "/fəˈbæd/", "ipa3": "/fəˈbɪdn/", "meaning": "cấm", "lv": 3},
  {"v1": "forecast", "v2": "forecast", "v3": "forecast", "ipa": "/ˈfɔːkɑːst/", "ipa2": "/ˈfɔːkɑːst/", "ipa3": "/ˈfɔːkɑːst/", "meaning": "dự báo", "lv": 3},
  {"v1": "foresee", "v2": "foresaw", "v3": "foreseen", "ipa": "/fɔːˈsiː/", "ipa2": "/fɔːˈsɔː/", "ipa3": "/fɔːˈsiːn/", "meaning": "thấy trước", "lv": 4},
  {"v1": "foretell", "v2": "foretold", "v3": "foretold", "ipa": "/fɔːˈtel/", "ipa2": "/fɔːˈtəʊld/", "ipa3": "/fɔːˈtəʊld/", "meaning": "tiên đoán", "lv": 4},
  {"v1": "forget", "v2": "forgot", "v3": "forgotten", "ipa": "/fəˈɡet/", "ipa2": "/fəˈɡɒt/", "ipa3": "/fəˈɡɒtn/", "meaning": "quên", "lv": 2},
  {"v1": "forgive", "v2": "forgave", "v3": "forgiven", "ipa": "/fəˈɡɪv/", "ipa2": "/fəˈɡeɪv/", "ipa3": "/fəˈɡɪvn/", "meaning": "tha thứ", "lv": 3},
  {"v1": "forgo", "v2": "forwent", "v3": "forgone", "ipa": "/fɔːˈɡəʊ/", "ipa2": "/fɔːˈwent/", "ipa3": "/fɔːˈɡɒn/", "meaning": "bỏ qua, nhịn (không dùng)", "lv": 5},
  {"v1": "forsake", "v2": "forsook", "v3": "forsaken", "ipa": "/fəˈseɪk/", "ipa2": "/fəˈsʊk/", "ipa3": "/fəˈseɪkən/", "meaning": "từ bỏ, ruồng bỏ", "lv": 5},
  {"v1": "forswear", "v2": "forswore", "v3": "forsworn", "ipa": "/fɔːˈsweə/", "ipa2": "/fɔːˈswɔː/", "ipa3": "/fɔːˈswɔːn/", "meaning": "thề từ bỏ", "lv": 5},
  {"v1": "freeze", "v2": "froze", "v3": "frozen", "ipa": "/friːz/", "ipa2": "/frəʊz/", "ipa3": "/ˈfrəʊzn/", "meaning": "đóng băng, đông lạnh", "lv": 3},
  {"v1": "gainsay", "v2": "gainsaid", "v3": "gainsaid", "ipa": "/ˌɡeɪnˈseɪ/", "ipa2": "/ˌɡeɪnˈsed/", "ipa3": "/ˌɡeɪnˈsed/", "meaning": "phủ nhận, cãi lại", "lv": 5},
  {"v1": "get", "v2": "got", "v3": "gotten/got", "ipa": "/ɡet/", "ipa2": "/ɡɒt/", "ipa3": "/ˈɡɒtn/ · /ɡɒt/", "meaning": "lấy, nhận", "lv": 1},
  {"v1": "ghostwrite", "v2": "ghostwrote", "v3": "ghostwritten", "ipa": "/ˈɡəʊstraɪt/", "ipa2": "/ˈɡəʊstrəʊt/", "ipa3": "/ˈɡəʊstrɪtn/", "meaning": "viết thuê (đứng tên người khác)", "lv": 5},
  {"v1": "gild", "v2": "gilded/gilt", "v3": "gilded/gilt", "ipa": "/ɡɪld/", "ipa2": "/ˈɡɪldɪd/ · /ɡɪlt/", "ipa3": "/ˈɡɪldɪd/ · /ɡɪlt/", "meaning": "mạ vàng", "lv": 5},
  {"v1": "gird", "v2": "girded/girt", "v3": "girded/girt", "ipa": "/ɡɜːd/", "ipa2": "/ˈɡɜːdɪd/ · /ɡɜːt/", "ipa3": "/ˈɡɜːdɪd/ · /ɡɜːt/", "meaning": "chuẩn bị tinh thần, thắt (đai)", "lv": 5},
  {"v1": "give", "v2": "gave", "v3": "given", "ipa": "/ɡɪv/", "ipa2": "/ɡeɪv/", "ipa3": "/ˈɡɪvn/", "meaning": "cho, đưa", "lv": 1},
  {"v1": "go", "v2": "went", "v3": "gone", "ipa": "/ɡəʊ/", "ipa2": "/went/", "ipa3": "/ɡɒn/", "meaning": "đi", "lv": 1},
  {"v1": "grind", "v2": "ground", "v3": "ground", "ipa": "/ɡraɪnd/", "ipa2": "/ɡraʊnd/", "ipa3": "/ɡraʊnd/", "meaning": "xay, nghiền", "lv": 4},
  {"v1": "grow", "v2": "grew", "v3": "grown", "ipa": "/ɡrəʊ/", "ipa2": "/ɡruː/", "ipa3": "/ɡrəʊn/", "meaning": "lớn lên, trồng", "lv": 2},
  {"v1": "hamstring", "v2": "hamstrung", "v3": "hamstrung", "ipa": "/ˈhæmstrɪŋ/", "ipa2": "/ˈhæmstrʌŋ/", "ipa3": "/ˈhæmstrʌŋ/", "meaning": "cản trở, làm tê liệt", "lv": 5},
  {"v1": "handwrite", "v2": "handwrote", "v3": "handwritten", "ipa": "/ˌhændˈraɪt/", "ipa2": "/ˌhændˈrəʊt/", "ipa3": "/ˌhændˈrɪtn/", "meaning": "viết tay", "lv": 4},
  {"v1": "hang", "v2": "hung", "v3": "hung", "ipa": "/hæŋ/", "ipa2": "/hʌŋ/", "ipa3": "/hʌŋ/", "meaning": "treo", "lv": 2},
  {"v1": "have", "v2": "had", "v3": "had", "ipa": "/hæv/", "ipa2": "/hæd/", "ipa3": "/hæd/", "meaning": "có", "lv": 1},
  {"v1": "hear", "v2": "heard", "v3": "heard", "ipa": "/hɪər/", "ipa2": "/hɜːd/", "ipa3": "/hɜːd/", "meaning": "nghe", "lv": 1},
  {"v1": "heave", "v2": "heaved/hove", "v3": "heaved/hove", "ipa": "/hiːv/", "ipa2": "/hiːvd/ · /həʊv/", "ipa3": "/hiːvd/ · /həʊv/", "meaning": "nâng, kéo (vật nặng)", "lv": 4},
  {"v1": "hew", "v2": "hewed", "v3": "hewn/hewed", "ipa": "/hjuː/", "ipa2": "/hjuːd/", "ipa3": "/hjuːn/", "meaning": "đốn, chặt", "lv": 5},
  {"v1": "hide", "v2": "hid", "v3": "hidden", "ipa": "/haɪd/", "ipa2": "/hɪd/", "ipa3": "/ˈhɪdn/", "meaning": "giấu, trốn", "lv": 2},
  {"v1": "hit", "v2": "hit", "v3": "hit", "ipa": "/hɪt/", "ipa2": "/hɪt/", "ipa3": "/hɪt/", "meaning": "đánh, va", "lv": 2},
  {"v1": "hold", "v2": "held", "v3": "held", "ipa": "/həʊld/", "ipa2": "/held/", "ipa3": "/held/", "meaning": "giữ, cầm", "lv": 2},
  {"v1": "housesit", "v2": "housesat", "v3": "housesat", "ipa": "/ˈhaʊssɪt/", "ipa2": "/ˈhaʊssæt/", "ipa3": "/ˈhaʊssæt/", "meaning": "trông nhà hộ", "lv": 4},
  {"v1": "hurt", "v2": "hurt", "v3": "hurt", "ipa": "/hɜːt/", "ipa2": "/hɜːt/", "ipa3": "/hɜːt/", "meaning": "làm đau, bị đau", "lv": 2},
  {"v1": "inlay", "v2": "inlaid", "v3": "inlaid", "ipa": "/ˌɪnˈleɪ/", "ipa2": "/ˌɪnˈleɪd/", "ipa3": "/ˌɪnˈleɪd/", "meaning": "khảm, dát", "lv": 5},
  {"v1": "input", "v2": "input/inputted", "v3": "input/inputted", "ipa": "/ˈɪnpʊt/", "ipa2": "/ˈɪnpʊt/", "ipa3": "/ˈɪnpʊt/", "meaning": "nhập (dữ liệu)", "lv": 4},
  {"v1": "interweave", "v2": "interwove", "v3": "interwoven", "ipa": "/ˌɪntəˈwiːv/", "ipa2": "/ˌɪntəˈwəʊv/", "ipa3": "/ˌɪntəˈwəʊvən/", "meaning": "đan xen", "lv": 5},
  {"v1": "keep", "v2": "kept", "v3": "kept", "ipa": "/kiːp/", "ipa2": "/kept/", "ipa3": "/kept/", "meaning": "giữ lại", "lv": 2},
  {"v1": "kneel", "v2": "knelt/kneeled", "v3": "knelt/kneeled", "ipa": "/niːl/", "ipa2": "/nelt/", "ipa3": "/nelt/", "meaning": "quỳ gối", "lv": 4},
  {"v1": "knit", "v2": "knitted/knit", "v3": "knitted/knit", "ipa": "/nɪt/", "ipa2": "/ˈnɪtɪd/", "ipa3": "/ˈnɪtɪd/", "meaning": "đan (len)", "lv": 4},
  {"v1": "know", "v2": "knew", "v3": "known", "ipa": "/nəʊ/", "ipa2": "/njuː/", "ipa3": "/nəʊn/", "meaning": "biết", "lv": 1},
  {"v1": "lay", "v2": "laid", "v3": "laid", "ipa": "/leɪ/", "ipa2": "/leɪd/", "ipa3": "/leɪd/", "meaning": "đặt, đẻ (trứng)", "lv": 3},
  {"v1": "lead", "v2": "led", "v3": "led", "ipa": "/liːd/", "ipa2": "/led/", "ipa3": "/led/", "meaning": "dẫn dắt", "lv": 3},
  {"v1": "lean", "v2": "leant/leaned", "v3": "leant/leaned", "ipa": "/liːn/", "ipa2": "/lent/", "ipa3": "/lent/", "meaning": "dựa vào, nghiêng", "lv": 3},
  {"v1": "leap", "v2": "leapt/leaped", "v3": "leapt/leaped", "ipa": "/liːp/", "ipa2": "/lept/", "ipa3": "/lept/", "meaning": "nhảy vọt", "lv": 3},
  {"v1": "learn", "v2": "learnt/learned", "v3": "learnt/learned", "ipa": "/lɜːn/", "ipa2": "/lɜːnt/", "ipa3": "/lɜːnt/", "meaning": "học", "lv": 1},
  {"v1": "leave", "v2": "left", "v3": "left", "ipa": "/liːv/", "ipa2": "/left/", "ipa3": "/left/", "meaning": "rời đi, để lại", "lv": 1},
  {"v1": "lend", "v2": "lent", "v3": "lent", "ipa": "/lend/", "ipa2": "/lent/", "ipa3": "/lent/", "meaning": "cho mượn", "lv": 2},
  {"v1": "let", "v2": "let", "v3": "let", "ipa": "/let/", "ipa2": "/let/", "ipa3": "/let/", "meaning": "để cho, cho phép", "lv": 2},
  {"v1": "lie", "v2": "lay", "v3": "lain", "ipa": "/laɪ/", "ipa2": "/leɪ/", "ipa3": "/leɪn/", "meaning": "nằm", "lv": 2},
  {"v1": "light", "v2": "lit", "v3": "lit", "ipa": "/laɪt/", "ipa2": "/lɪt/", "ipa3": "/lɪt/", "meaning": "thắp, châm lửa", "lv": 2},
  {"v1": "lip-read", "v2": "lip-read", "v3": "lip-read", "ipa": "/ˈlɪpriːd/", "ipa2": "/ˈlɪpred/", "ipa3": "/ˈlɪpred/", "meaning": "đọc khẩu hình", "lv": 4},
  {"v1": "lose", "v2": "lost", "v3": "lost", "ipa": "/luːz/", "ipa2": "/lɒst/", "ipa3": "/lɒst/", "meaning": "mất, thua", "lv": 2},
  {"v1": "make", "v2": "made", "v3": "made", "ipa": "/meɪk/", "ipa2": "/meɪd/", "ipa3": "/meɪd/", "meaning": "làm, tạo ra", "lv": 1},
  {"v1": "mean", "v2": "meant", "v3": "meant", "ipa": "/miːn/", "ipa2": "/ment/", "ipa3": "/ment/", "meaning": "có nghĩa là", "lv": 2},
  {"v1": "meet", "v2": "met", "v3": "met", "ipa": "/miːt/", "ipa2": "/met/", "ipa3": "/met/", "meaning": "gặp", "lv": 1},
  {"v1": "miscast", "v2": "miscast", "v3": "miscast", "ipa": "/ˌmɪsˈkɑːst/", "ipa2": "/ˌmɪsˈkɑːst/", "ipa3": "/ˌmɪsˈkɑːst/", "meaning": "chọn vai không hợp", "lv": 5},
  {"v1": "misdeal", "v2": "misdealt", "v3": "misdealt", "ipa": "/ˌmɪsˈdiːl/", "ipa2": "/ˌmɪsˈdelt/", "ipa3": "/ˌmɪsˈdelt/", "meaning": "chia bài sai", "lv": 5},
  {"v1": "mishear", "v2": "misheard", "v3": "misheard", "ipa": "/ˌmɪsˈhɪə/", "ipa2": "/ˌmɪsˈhɜːd/", "ipa3": "/ˌmɪsˈhɜːd/", "meaning": "nghe nhầm", "lv": 3},
  {"v1": "mishit", "v2": "mishit", "v3": "mishit", "ipa": "/ˌmɪsˈhɪt/", "ipa2": "/ˌmɪsˈhɪt/", "ipa3": "/ˌmɪsˈhɪt/", "meaning": "đánh trượt (bóng)", "lv": 5},
  {"v1": "mislay", "v2": "mislaid", "v3": "mislaid", "ipa": "/ˌmɪsˈleɪ/", "ipa2": "/ˌmɪsˈleɪd/", "ipa3": "/ˌmɪsˈleɪd/", "meaning": "để thất lạc", "lv": 4},
  {"v1": "mislead", "v2": "misled", "v3": "misled", "ipa": "/ˌmɪsˈliːd/", "ipa2": "/ˌmɪsˈled/", "ipa3": "/ˌmɪsˈled/", "meaning": "làm hiểu sai, đánh lừa", "lv": 4},
  {"v1": "misread", "v2": "misread", "v3": "misread", "ipa": "/ˌmɪsˈriːd/", "ipa2": "/ˌmɪsˈred/", "ipa3": "/ˌmɪsˈred/", "meaning": "đọc nhầm", "lv": 3},
  {"v1": "misspeak", "v2": "misspoke", "v3": "misspoken", "ipa": "/ˌmɪsˈspiːk/", "ipa2": "/ˌmɪsˈspəʊk/", "ipa3": "/ˌmɪsˈspəʊkən/", "meaning": "nói nhầm, lỡ lời", "lv": 5},
  {"v1": "misspell", "v2": "misspelt/misspelled", "v3": "misspelt/misspelled", "ipa": "/ˌmɪsˈspel/", "ipa2": "/ˌmɪsˈspelt/", "ipa3": "/ˌmɪsˈspelt/", "meaning": "viết sai chính tả", "lv": 3},
  {"v1": "misspend", "v2": "misspent", "v3": "misspent", "ipa": "/ˌmɪsˈspend/", "ipa2": "/ˌmɪsˈspent/", "ipa3": "/ˌmɪsˈspent/", "meaning": "tiêu phí, dùng sai", "lv": 4},
  {"v1": "mistake", "v2": "mistook", "v3": "mistaken", "ipa": "/mɪˈsteɪk/", "ipa2": "/mɪˈstʊk/", "ipa3": "/mɪˈsteɪkən/", "meaning": "nhầm lẫn", "lv": 3},
  {"v1": "misunderstand", "v2": "misunderstood", "v3": "misunderstood", "ipa": "/ˌmɪsʌndəˈstænd/", "ipa2": "/ˌmɪsʌndəˈstʊd/", "ipa3": "/ˌmɪsʌndəˈstʊd/", "meaning": "hiểu lầm", "lv": 3},
  {"v1": "mow", "v2": "mowed", "v3": "mown/mowed", "ipa": "/məʊ/", "ipa2": "/məʊd/", "ipa3": "/məʊn/", "meaning": "cắt (cỏ)", "lv": 4},
  {"v1": "offset", "v2": "offset", "v3": "offset", "ipa": "/ˈɒfset/", "ipa2": "/ˈɒfset/", "ipa3": "/ˈɒfset/", "meaning": "bù đắp", "lv": 5},
  {"v1": "outbid", "v2": "outbid", "v3": "outbid", "ipa": "/ˌaʊtˈbɪd/", "ipa2": "/ˌaʊtˈbɪd/", "ipa3": "/ˌaʊtˈbɪd/", "meaning": "trả giá cao hơn", "lv": 5},
  {"v1": "outdo", "v2": "outdid", "v3": "outdone", "ipa": "/ˌaʊtˈduː/", "ipa2": "/ˌaʊtˈdɪd/", "ipa3": "/ˌaʊtˈdʌn/", "meaning": "làm giỏi hơn", "lv": 4},
  {"v1": "outfight", "v2": "outfought", "v3": "outfought", "ipa": "/ˌaʊtˈfaɪt/", "ipa2": "/ˌaʊtˈfɔːt/", "ipa3": "/ˌaʊtˈfɔːt/", "meaning": "đánh giỏi hơn", "lv": 5},
  {"v1": "outgrow", "v2": "outgrew", "v3": "outgrown", "ipa": "/ˌaʊtˈɡrəʊ/", "ipa2": "/ˌaʊtˈɡruː/", "ipa3": "/ˌaʊtˈɡrəʊn/", "meaning": "lớn vượt (không vừa nữa)", "lv": 4},
  {"v1": "outrun", "v2": "outran", "v3": "outrun", "ipa": "/ˌaʊtˈrʌn/", "ipa2": "/ˌaʊtˈræn/", "ipa3": "/ˌaʊtˈrʌn/", "meaning": "chạy nhanh hơn", "lv": 4},
  {"v1": "outsell", "v2": "outsold", "v3": "outsold", "ipa": "/ˌaʊtˈsel/", "ipa2": "/ˌaʊtˈsəʊld/", "ipa3": "/ˌaʊtˈsəʊld/", "meaning": "bán chạy hơn", "lv": 4},
  {"v1": "outshine", "v2": "outshone", "v3": "outshone", "ipa": "/ˌaʊtˈʃaɪn/", "ipa2": "/ˌaʊtˈʃɒn/", "ipa3": "/ˌaʊtˈʃɒn/", "meaning": "nổi bật hơn", "lv": 5},
  {"v1": "outspend", "v2": "outspent", "v3": "outspent", "ipa": "/ˌaʊtˈspend/", "ipa2": "/ˌaʊtˈspent/", "ipa3": "/ˌaʊtˈspent/", "meaning": "chi nhiều hơn", "lv": 5},
  {"v1": "outswim", "v2": "outswam", "v3": "outswum", "ipa": "/ˌaʊtˈswɪm/", "ipa2": "/ˌaʊtˈswæm/", "ipa3": "/ˌaʊtˈswʌm/", "meaning": "bơi nhanh hơn", "lv": 5},
  {"v1": "outthink", "v2": "outthought", "v3": "outthought", "ipa": "/ˌaʊtˈθɪŋk/", "ipa2": "/ˌaʊtˈθɔːt/", "ipa3": "/ˌaʊtˈθɔːt/", "meaning": "suy tính giỏi hơn", "lv": 5},
  {"v1": "overbid", "v2": "overbid", "v3": "overbid", "ipa": "/ˌəʊvəˈbɪd/", "ipa2": "/ˌəʊvəˈbɪd/", "ipa3": "/ˌəʊvəˈbɪd/", "meaning": "trả giá quá cao", "lv": 5},
  {"v1": "overbuy", "v2": "overbought", "v3": "overbought", "ipa": "/ˌəʊvəˈbaɪ/", "ipa2": "/ˌəʊvəˈbɔːt/", "ipa3": "/ˌəʊvəˈbɔːt/", "meaning": "mua quá nhiều", "lv": 4},
  {"v1": "overcome", "v2": "overcame", "v3": "overcome", "ipa": "/ˌəʊvəˈkʌm/", "ipa2": "/ˌəʊvəˈkeɪm/", "ipa3": "/ˌəʊvəˈkʌm/", "meaning": "vượt qua", "lv": 3},
  {"v1": "overdo", "v2": "overdid", "v3": "overdone", "ipa": "/ˌəʊvəˈduː/", "ipa2": "/ˌəʊvəˈdɪd/", "ipa3": "/ˌəʊvəˈdʌn/", "meaning": "làm quá mức", "lv": 4},
  {"v1": "overdraw", "v2": "overdrew", "v3": "overdrawn", "ipa": "/ˌəʊvəˈdrɔː/", "ipa2": "/ˌəʊvəˈdruː/", "ipa3": "/ˌəʊvəˈdrɔːn/", "meaning": "rút quá số dư (tài khoản)", "lv": 4},
  {"v1": "overeat", "v2": "overate", "v3": "overeaten", "ipa": "/ˌəʊvərˈiːt/", "ipa2": "/ˌəʊvərˈet/", "ipa3": "/ˌəʊvərˈiːtn/", "meaning": "ăn quá nhiều", "lv": 3},
  {"v1": "overfeed", "v2": "overfed", "v3": "overfed", "ipa": "/ˌəʊvəˈfiːd/", "ipa2": "/ˌəʊvəˈfed/", "ipa3": "/ˌəʊvəˈfed/", "meaning": "cho ăn quá nhiều", "lv": 4},
  {"v1": "overfly", "v2": "overflew", "v3": "overflown", "ipa": "/ˌəʊvəˈflaɪ/", "ipa2": "/ˌəʊvəˈfluː/", "ipa3": "/ˌəʊvəˈfləʊn/", "meaning": "bay qua (vùng trời)", "lv": 5},
  {"v1": "overhang", "v2": "overhung", "v3": "overhung", "ipa": "/ˌəʊvəˈhæŋ/", "ipa2": "/ˌəʊvəˈhʌŋ/", "ipa3": "/ˌəʊvəˈhʌŋ/", "meaning": "nhô ra phía trên", "lv": 4},
  {"v1": "overhear", "v2": "overheard", "v3": "overheard", "ipa": "/ˌəʊvəˈhɪə/", "ipa2": "/ˌəʊvəˈhɜːd/", "ipa3": "/ˌəʊvəˈhɜːd/", "meaning": "nghe lỏm", "lv": 4},
  {"v1": "overlay", "v2": "overlaid", "v3": "overlaid", "ipa": "/ˌəʊvəˈleɪ/", "ipa2": "/ˌəʊvəˈleɪd/", "ipa3": "/ˌəʊvəˈleɪd/", "meaning": "phủ lên, lát lên", "lv": 5},
  {"v1": "overpay", "v2": "overpaid", "v3": "overpaid", "ipa": "/ˌəʊvəˈpeɪ/", "ipa2": "/ˌəʊvəˈpeɪd/", "ipa3": "/ˌəʊvəˈpeɪd/", "meaning": "trả quá nhiều", "lv": 3},
  {"v1": "override", "v2": "overrode", "v3": "overridden", "ipa": "/ˌəʊvəˈraɪd/", "ipa2": "/ˌəʊvəˈrəʊd/", "ipa3": "/ˌəʊvəˈrɪdn/", "meaning": "gạt bỏ, ghi đè", "lv": 4},
  {"v1": "overrun", "v2": "overran", "v3": "overrun", "ipa": "/ˌəʊvəˈrʌn/", "ipa2": "/ˌəʊvəˈræn/", "ipa3": "/ˌəʊvəˈrʌn/", "meaning": "tràn ngập, vượt quá thời gian", "lv": 4},
  {"v1": "oversee", "v2": "oversaw", "v3": "overseen", "ipa": "/ˌəʊvəˈsiː/", "ipa2": "/ˌəʊvəˈsɔː/", "ipa3": "/ˌəʊvəˈsiːn/", "meaning": "giám sát", "lv": 4},
  {"v1": "oversell", "v2": "oversold", "v3": "oversold", "ipa": "/ˌəʊvəˈsel/", "ipa2": "/ˌəʊvəˈsəʊld/", "ipa3": "/ˌəʊvəˈsəʊld/", "meaning": "bán quá số lượng, quảng cáo quá lời", "lv": 4},
  {"v1": "overshoot", "v2": "overshot", "v3": "overshot", "ipa": "/ˌəʊvəˈʃuːt/", "ipa2": "/ˌəʊvəˈʃɒt/", "ipa3": "/ˌəʊvəˈʃɒt/", "meaning": "vượt quá (mục tiêu, chỗ dừng)", "lv": 4},
  {"v1": "oversleep", "v2": "overslept", "v3": "overslept", "ipa": "/ˌəʊvəˈsliːp/", "ipa2": "/ˌəʊvəˈslept/", "ipa3": "/ˌəʊvəˈslept/", "meaning": "ngủ quên", "lv": 3},
  {"v1": "overspend", "v2": "overspent", "v3": "overspent", "ipa": "/ˌəʊvəˈspend/", "ipa2": "/ˌəʊvəˈspent/", "ipa3": "/ˌəʊvəˈspent/", "meaning": "tiêu quá tay", "lv": 3},
  {"v1": "overtake", "v2": "overtook", "v3": "overtaken", "ipa": "/ˌəʊvəˈteɪk/", "ipa2": "/ˌəʊvəˈtʊk/", "ipa3": "/ˌəʊvəˈteɪkən/", "meaning": "vượt (xe), vượt lên", "lv": 3},
  {"v1": "overthrow", "v2": "overthrew", "v3": "overthrown", "ipa": "/ˌəʊvəˈθrəʊ/", "ipa2": "/ˌəʊvəˈθruː/", "ipa3": "/ˌəʊvəˈθrəʊn/", "meaning": "lật đổ", "lv": 4},
  {"v1": "overwrite", "v2": "overwrote", "v3": "overwritten", "ipa": "/ˌəʊvəˈraɪt/", "ipa2": "/ˌəʊvəˈrəʊt/", "ipa3": "/ˌəʊvəˈrɪtn/", "meaning": "ghi đè (tập tin)", "lv": 4},
  {"v1": "partake", "v2": "partook", "v3": "partaken", "ipa": "/pɑːˈteɪk/", "ipa2": "/pɑːˈtʊk/", "ipa3": "/pɑːˈteɪkən/", "meaning": "tham gia, dùng (đồ ăn)", "lv": 5},
  {"v1": "pay", "v2": "paid", "v3": "paid", "ipa": "/peɪ/", "ipa2": "/peɪd/", "ipa3": "/peɪd/", "meaning": "trả tiền", "lv": 2},
  {"v1": "plead", "v2": "pleaded/pled", "v3": "pleaded/pled", "ipa": "/pliːd/", "ipa2": "/ˈpliːdɪd/", "ipa3": "/ˈpliːdɪd/", "meaning": "cầu xin, bào chữa", "lv": 4},
  {"v1": "proofread", "v2": "proofread", "v3": "proofread", "ipa": "/ˈpruːfriːd/", "ipa2": "/ˈpruːfred/", "ipa3": "/ˈpruːfred/", "meaning": "đọc soát lỗi", "lv": 4},
  {"v1": "prove", "v2": "proved", "v3": "proven/proved", "ipa": "/pruːv/", "ipa2": "/pruːvd/", "ipa3": "/ˈpruːvn/", "meaning": "chứng minh", "lv": 3},
  {"v1": "put", "v2": "put", "v3": "put", "ipa": "/pʊt/", "ipa2": "/pʊt/", "ipa3": "/pʊt/", "meaning": "đặt, để", "lv": 1},
  {"v1": "quit", "v2": "quit", "v3": "quit", "ipa": "/kwɪt/", "ipa2": "/kwɪt/", "ipa3": "/kwɪt/", "meaning": "bỏ, từ bỏ", "lv": 3},
  {"v1": "read", "v2": "read", "v3": "read", "ipa": "/riːd/", "ipa2": "/red/", "ipa3": "/red/", "meaning": "đọc", "lv": 1},
  {"v1": "rebuild", "v2": "rebuilt", "v3": "rebuilt", "ipa": "/ˌriːˈbɪld/", "ipa2": "/ˌriːˈbɪlt/", "ipa3": "/ˌriːˈbɪlt/", "meaning": "xây lại", "lv": 3},
  {"v1": "recast", "v2": "recast", "v3": "recast", "ipa": "/ˌriːˈkɑːst/", "ipa2": "/ˌriːˈkɑːst/", "ipa3": "/ˌriːˈkɑːst/", "meaning": "viết lại, đổi vai diễn", "lv": 5},
  {"v1": "redo", "v2": "redid", "v3": "redone", "ipa": "/ˌriːˈduː/", "ipa2": "/ˌriːˈdɪd/", "ipa3": "/ˌriːˈdʌn/", "meaning": "làm lại", "lv": 3},
  {"v1": "relearn", "v2": "relearnt/relearned", "v3": "relearnt/relearned", "ipa": "/ˌriːˈlɜːn/", "ipa2": "/ˌriːˈlɜːnt/", "ipa3": "/ˌriːˈlɜːnt/", "meaning": "học lại", "lv": 4},
  {"v1": "relight", "v2": "relit", "v3": "relit", "ipa": "/ˌriːˈlaɪt/", "ipa2": "/ˌriːˈlɪt/", "ipa3": "/ˌriːˈlɪt/", "meaning": "thắp lại, nhóm lại", "lv": 4},
  {"v1": "remake", "v2": "remade", "v3": "remade", "ipa": "/ˌriːˈmeɪk/", "ipa2": "/ˌriːˈmeɪd/", "ipa3": "/ˌriːˈmeɪd/", "meaning": "làm lại (phim)…", "lv": 3},
  {"v1": "rend", "v2": "rent", "v3": "rent", "ipa": "/rend/", "ipa2": "/rent/", "ipa3": "/rent/", "meaning": "xé toạc (văn chương)", "lv": 5},
  {"v1": "repay", "v2": "repaid", "v3": "repaid", "ipa": "/rɪˈpeɪ/", "ipa2": "/rɪˈpeɪd/", "ipa3": "/rɪˈpeɪd/", "meaning": "trả lại (tiền), đền đáp", "lv": 3},
  {"v1": "reread", "v2": "reread", "v3": "reread", "ipa": "/ˌriːˈriːd/", "ipa2": "/ˌriːˈred/", "ipa3": "/ˌriːˈred/", "meaning": "đọc lại", "lv": 3},
  {"v1": "rerun", "v2": "reran", "v3": "rerun", "ipa": "/ˌriːˈrʌn/", "ipa2": "/ˌriːˈræn/", "ipa3": "/ˌriːˈrʌn/", "meaning": "chạy lại, chiếu lại", "lv": 4},
  {"v1": "resell", "v2": "resold", "v3": "resold", "ipa": "/ˌriːˈsel/", "ipa2": "/ˌriːˈsəʊld/", "ipa3": "/ˌriːˈsəʊld/", "meaning": "bán lại", "lv": 3},
  {"v1": "resend", "v2": "resent", "v3": "resent", "ipa": "/ˌriːˈsend/", "ipa2": "/ˌriːˈsent/", "ipa3": "/ˌriːˈsent/", "meaning": "gửi lại", "lv": 3},
  {"v1": "reset", "v2": "reset", "v3": "reset", "ipa": "/ˌriːˈset/", "ipa2": "/ˌriːˈset/", "ipa3": "/ˌriːˈset/", "meaning": "cài đặt lại", "lv": 3},
  {"v1": "resit", "v2": "resat", "v3": "resat", "ipa": "/ˌriːˈsɪt/", "ipa2": "/ˌriːˈsæt/", "ipa3": "/ˌriːˈsæt/", "meaning": "thi lại (một kỳ thi)", "lv": 3},
  {"v1": "retake", "v2": "retook", "v3": "retaken", "ipa": "/ˌriːˈteɪk/", "ipa2": "/ˌriːˈtʊk/", "ipa3": "/ˌriːˈteɪkən/", "meaning": "thi lại, chụp lại, chiếm lại", "lv": 3},
  {"v1": "retell", "v2": "retold", "v3": "retold", "ipa": "/ˌriːˈtel/", "ipa2": "/ˌriːˈtəʊld/", "ipa3": "/ˌriːˈtəʊld/", "meaning": "kể lại", "lv": 3},
  {"v1": "rethink", "v2": "rethought", "v3": "rethought", "ipa": "/ˌriːˈθɪŋk/", "ipa2": "/ˌriːˈθɔːt/", "ipa3": "/ˌriːˈθɔːt/", "meaning": "nghĩ lại", "lv": 3},
  {"v1": "rewind", "v2": "rewound", "v3": "rewound", "ipa": "/ˌriːˈwaɪnd/", "ipa2": "/ˌriːˈwaʊnd/", "ipa3": "/ˌriːˈwaʊnd/", "meaning": "tua lại", "lv": 3},
  {"v1": "rewrite", "v2": "rewrote", "v3": "rewritten", "ipa": "/ˌriːˈraɪt/", "ipa2": "/ˌriːˈrəʊt/", "ipa3": "/ˌriːˈrɪtn/", "meaning": "viết lại", "lv": 3},
  {"v1": "rid", "v2": "rid", "v3": "rid", "ipa": "/rɪd/", "ipa2": "/rɪd/", "ipa3": "/rɪd/", "meaning": "loại bỏ (get rid of)", "lv": 4},
  {"v1": "ride", "v2": "rode", "v3": "ridden", "ipa": "/raɪd/", "ipa2": "/rəʊd/", "ipa3": "/ˈrɪdn/", "meaning": "đi (xe, ngựa)", "lv": 2},
  {"v1": "ring", "v2": "rang", "v3": "rung", "ipa": "/rɪŋ/", "ipa2": "/ræŋ/", "ipa3": "/rʌŋ/", "meaning": "reo, gọi điện", "lv": 2},
  {"v1": "rise", "v2": "rose", "v3": "risen", "ipa": "/raɪz/", "ipa2": "/rəʊz/", "ipa3": "/ˈrɪzn/", "meaning": "mọc, tăng lên", "lv": 2},
  {"v1": "run", "v2": "ran", "v3": "run", "ipa": "/rʌn/", "ipa2": "/ræn/", "ipa3": "/rʌn/", "meaning": "chạy", "lv": 1},
  {"v1": "saw", "v2": "sawed", "v3": "sawn/sawed", "ipa": "/sɔː/", "ipa2": "/sɔːd/", "ipa3": "/sɔːn/", "meaning": "cưa", "lv": 4},
  {"v1": "say", "v2": "said", "v3": "said", "ipa": "/seɪ/", "ipa2": "/sed/", "ipa3": "/sed/", "meaning": "nói", "lv": 1},
  {"v1": "see", "v2": "saw", "v3": "seen", "ipa": "/siː/", "ipa2": "/sɔː/", "ipa3": "/siːn/", "meaning": "nhìn thấy", "lv": 1},
  {"v1": "seek", "v2": "sought", "v3": "sought", "ipa": "/siːk/", "ipa2": "/sɔːt/", "ipa3": "/sɔːt/", "meaning": "tìm kiếm", "lv": 3},
  {"v1": "sell", "v2": "sold", "v3": "sold", "ipa": "/sel/", "ipa2": "/səʊld/", "ipa3": "/səʊld/", "meaning": "bán", "lv": 2},
  {"v1": "send", "v2": "sent", "v3": "sent", "ipa": "/send/", "ipa2": "/sent/", "ipa3": "/sent/", "meaning": "gửi", "lv": 2},
  {"v1": "set", "v2": "set", "v3": "set", "ipa": "/set/", "ipa2": "/set/", "ipa3": "/set/", "meaning": "đặt, thiết lập", "lv": 2},
  {"v1": "sew", "v2": "sewed", "v3": "sewn", "ipa": "/səʊ/", "ipa2": "/səʊd/", "ipa3": "/səʊn/", "meaning": "may, khâu", "lv": 3},
  {"v1": "shake", "v2": "shook", "v3": "shaken", "ipa": "/ʃeɪk/", "ipa2": "/ʃʊk/", "ipa3": "/ˈʃeɪkən/", "meaning": "lắc, rung", "lv": 2},
  {"v1": "shear", "v2": "sheared", "v3": "shorn/sheared", "ipa": "/ʃɪə/", "ipa2": "/ʃɪəd/", "ipa3": "/ʃɔːn/", "meaning": "xén (lông cừu)", "lv": 5},
  {"v1": "shed", "v2": "shed", "v3": "shed", "ipa": "/ʃed/", "ipa2": "/ʃed/", "ipa3": "/ʃed/", "meaning": "rụng, rơi (nước mắt), cắt bỏ", "lv": 4},
  {"v1": "shine", "v2": "shone", "v3": "shone", "ipa": "/ʃaɪn/", "ipa2": "/ʃɒn/", "ipa3": "/ʃɒn/", "meaning": "chiếu sáng", "lv": 2},
  {"v1": "shoe", "v2": "shod/shoed", "v3": "shod/shoed", "ipa": "/ʃuː/", "ipa2": "/ʃɒd/", "ipa3": "/ʃɒd/", "meaning": "đóng móng (ngựa)", "lv": 5},
  {"v1": "shoot", "v2": "shot", "v3": "shot", "ipa": "/ʃuːt/", "ipa2": "/ʃɒt/", "ipa3": "/ʃɒt/", "meaning": "bắn, quay phim", "lv": 2},
  {"v1": "show", "v2": "showed", "v3": "shown", "ipa": "/ʃəʊ/", "ipa2": "/ʃəʊd/", "ipa3": "/ʃəʊn/", "meaning": "chỉ, cho xem", "lv": 2},
  {"v1": "shrink", "v2": "shrank", "v3": "shrunk", "ipa": "/ʃrɪŋk/", "ipa2": "/ʃræŋk/", "ipa3": "/ʃrʌŋk/", "meaning": "co lại", "lv": 3},
  {"v1": "shut", "v2": "shut", "v3": "shut", "ipa": "/ʃʌt/", "ipa2": "/ʃʌt/", "ipa3": "/ʃʌt/", "meaning": "đóng lại", "lv": 2},
  {"v1": "sight-read", "v2": "sight-read", "v3": "sight-read", "ipa": "/ˈsaɪt riːd/", "ipa2": "/ˈsaɪt red/", "ipa3": "/ˈsaɪt red/", "meaning": "đọc (nhạc) ngay lần đầu nhìn", "lv": 5},
  {"v1": "sightsee", "v2": "sightsaw", "v3": "sightseen", "ipa": "/ˈsaɪtsiː/", "ipa2": "/ˈsaɪtsɔː/", "ipa3": "/ˈsaɪtsiːn/", "meaning": "đi ngắm cảnh", "lv": 4},
  {"v1": "sing", "v2": "sang", "v3": "sung", "ipa": "/sɪŋ/", "ipa2": "/sæŋ/", "ipa3": "/sʌŋ/", "meaning": "hát", "lv": 1},
  {"v1": "sink", "v2": "sank", "v3": "sunk", "ipa": "/sɪŋk/", "ipa2": "/sæŋk/", "ipa3": "/sʌŋk/", "meaning": "chìm", "lv": 3},
  {"v1": "sit", "v2": "sat", "v3": "sat", "ipa": "/sɪt/", "ipa2": "/sæt/", "ipa3": "/sæt/", "meaning": "ngồi", "lv": 1},
  {"v1": "slay", "v2": "slew", "v3": "slain", "ipa": "/sleɪ/", "ipa2": "/sluː/", "ipa3": "/sleɪn/", "meaning": "giết (văn chương)", "lv": 5},
  {"v1": "sleep", "v2": "slept", "v3": "slept", "ipa": "/sliːp/", "ipa2": "/slept/", "ipa3": "/slept/", "meaning": "ngủ", "lv": 1},
  {"v1": "slide", "v2": "slid", "v3": "slid", "ipa": "/slaɪd/", "ipa2": "/slɪd/", "ipa3": "/slɪd/", "meaning": "trượt", "lv": 3},
  {"v1": "sling", "v2": "slung", "v3": "slung", "ipa": "/slɪŋ/", "ipa2": "/slʌŋ/", "ipa3": "/slʌŋ/", "meaning": "quăng, đeo (qua vai)", "lv": 5},
  {"v1": "slink", "v2": "slunk", "v3": "slunk", "ipa": "/slɪŋk/", "ipa2": "/slʌŋk/", "ipa3": "/slʌŋk/", "meaning": "lẻn đi", "lv": 5},
  {"v1": "slit", "v2": "slit", "v3": "slit", "ipa": "/slɪt/", "ipa2": "/slɪt/", "ipa3": "/slɪt/", "meaning": "rạch, khứa", "lv": 4},
  {"v1": "smell", "v2": "smelt/smelled", "v3": "smelt/smelled", "ipa": "/smel/", "ipa2": "/smelt/", "ipa3": "/smelt/", "meaning": "ngửi, có mùi", "lv": 2},
  {"v1": "smite", "v2": "smote", "v3": "smitten", "ipa": "/smaɪt/", "ipa2": "/sməʊt/", "ipa3": "/ˈsmɪtn/", "meaning": "đánh mạnh", "lv": 5},
  {"v1": "sneak", "v2": "sneaked/snuck", "v3": "sneaked/snuck", "ipa": "/sniːk/", "ipa2": "/sniːkt/ · /snʌk/", "ipa3": "/sniːkt/ · /snʌk/", "meaning": "lẻn, lén lút", "lv": 3},
  {"v1": "sow", "v2": "sowed", "v3": "sown/sowed", "ipa": "/səʊ/", "ipa2": "/səʊd/", "ipa3": "/səʊn/", "meaning": "gieo (hạt)", "lv": 4},
  {"v1": "speak", "v2": "spoke", "v3": "spoken", "ipa": "/spiːk/", "ipa2": "/spəʊk/", "ipa3": "/ˈspəʊkən/", "meaning": "nói chuyện", "lv": 1},
  {"v1": "speed", "v2": "sped/speeded", "v3": "sped/speeded", "ipa": "/spiːd/", "ipa2": "/sped/", "ipa3": "/sped/", "meaning": "chạy nhanh, tăng tốc", "lv": 4},
  {"v1": "spell", "v2": "spelt/spelled", "v3": "spelt/spelled", "ipa": "/spel/", "ipa2": "/spelt/", "ipa3": "/spelt/", "meaning": "đánh vần", "lv": 2},
  {"v1": "spellbind", "v2": "spellbound", "v3": "spellbound", "ipa": "/ˈspelbaɪnd/", "ipa2": "/ˈspelbaʊnd/", "ipa3": "/ˈspelbaʊnd/", "meaning": "làm say mê, mê hoặc", "lv": 5},
  {"v1": "spend", "v2": "spent", "v3": "spent", "ipa": "/spend/", "ipa2": "/spent/", "ipa3": "/spent/", "meaning": "chi tiêu, dành (thời gian)", "lv": 2},
  {"v1": "spill", "v2": "spilt/spilled", "v3": "spilt/spilled", "ipa": "/spɪl/", "ipa2": "/spɪlt/", "ipa3": "/spɪlt/", "meaning": "làm đổ, tràn", "lv": 3},
  {"v1": "spin", "v2": "spun", "v3": "spun", "ipa": "/spɪn/", "ipa2": "/spʌn/", "ipa3": "/spʌn/", "meaning": "quay tròn", "lv": 3},
  {"v1": "spit", "v2": "spat", "v3": "spat", "ipa": "/spɪt/", "ipa2": "/spæt/", "ipa3": "/spæt/", "meaning": "khạc nhổ", "lv": 4},
  {"v1": "split", "v2": "split", "v3": "split", "ipa": "/splɪt/", "ipa2": "/splɪt/", "ipa3": "/splɪt/", "meaning": "chia ra, tách", "lv": 3},
  {"v1": "spoil", "v2": "spoilt/spoiled", "v3": "spoilt/spoiled", "ipa": "/spɔɪl/", "ipa2": "/spɔɪlt/", "ipa3": "/spɔɪlt/", "meaning": "làm hỏng, chiều hư", "lv": 3},
  {"v1": "spoon-feed", "v2": "spoon-fed", "v3": "spoon-fed", "ipa": "/ˈspuːnfiːd/", "ipa2": "/ˈspuːnfed/", "ipa3": "/ˈspuːnfed/", "meaning": "mớm, bón (nghĩa bóng: làm hộ hết)", "lv": 5},
  {"v1": "spread", "v2": "spread", "v3": "spread", "ipa": "/spred/", "ipa2": "/spred/", "ipa3": "/spred/", "meaning": "lan rộng, phết", "lv": 3},
  {"v1": "spring", "v2": "sprang", "v3": "sprung", "ipa": "/sprɪŋ/", "ipa2": "/spræŋ/", "ipa3": "/sprʌŋ/", "meaning": "nhảy bật lên, nảy ra", "lv": 4},
  {"v1": "stand", "v2": "stood", "v3": "stood", "ipa": "/stænd/", "ipa2": "/stʊd/", "ipa3": "/stʊd/", "meaning": "đứng", "lv": 1},
  {"v1": "steal", "v2": "stole", "v3": "stolen", "ipa": "/stiːl/", "ipa2": "/stəʊl/", "ipa3": "/ˈstəʊlən/", "meaning": "ăn trộm", "lv": 2},
  {"v1": "stick", "v2": "stuck", "v3": "stuck", "ipa": "/stɪk/", "ipa2": "/stʌk/", "ipa3": "/stʌk/", "meaning": "dán, mắc kẹt", "lv": 3},
  {"v1": "sting", "v2": "stung", "v3": "stung", "ipa": "/stɪŋ/", "ipa2": "/stʌŋ/", "ipa3": "/stʌŋ/", "meaning": "châm, chích", "lv": 3},
  {"v1": "stink", "v2": "stank", "v3": "stunk", "ipa": "/stɪŋk/", "ipa2": "/stæŋk/", "ipa3": "/stʌŋk/", "meaning": "bốc mùi hôi", "lv": 4},
  {"v1": "strew", "v2": "strewed", "v3": "strewn/strewed", "ipa": "/struː/", "ipa2": "/struːd/", "ipa3": "/struːn/", "meaning": "rải, rắc", "lv": 5},
  {"v1": "stride", "v2": "strode", "v3": "stridden", "ipa": "/straɪd/", "ipa2": "/strəʊd/", "ipa3": "/ˈstrɪdn/", "meaning": "sải bước", "lv": 5},
  {"v1": "strike", "v2": "struck", "v3": "struck", "ipa": "/straɪk/", "ipa2": "/strʌk/", "ipa3": "/strʌk/", "meaning": "đánh, đình công", "lv": 3},
  {"v1": "string", "v2": "strung", "v3": "strung", "ipa": "/strɪŋ/", "ipa2": "/strʌŋ/", "ipa3": "/strʌŋ/", "meaning": "xâu, căng dây", "lv": 4},
  {"v1": "strive", "v2": "strove", "v3": "striven", "ipa": "/straɪv/", "ipa2": "/strəʊv/", "ipa3": "/ˈstrɪvn/", "meaning": "cố gắng, phấn đấu", "lv": 4},
  {"v1": "sublet", "v2": "sublet", "v3": "sublet", "ipa": "/ˌsʌbˈlet/", "ipa2": "/ˌsʌbˈlet/", "ipa3": "/ˌsʌbˈlet/", "meaning": "cho thuê lại", "lv": 4},
  {"v1": "swear", "v2": "swore", "v3": "sworn", "ipa": "/sweə/", "ipa2": "/swɔː/", "ipa3": "/swɔːn/", "meaning": "thề, chửi thề", "lv": 3},
  {"v1": "sweep", "v2": "swept", "v3": "swept", "ipa": "/swiːp/", "ipa2": "/swept/", "ipa3": "/swept/", "meaning": "quét", "lv": 2},
  {"v1": "swell", "v2": "swelled", "v3": "swollen", "ipa": "/swel/", "ipa2": "/sweld/", "ipa3": "/ˈswəʊlən/", "meaning": "sưng lên, phình ra", "lv": 4},
  {"v1": "swim", "v2": "swam", "v3": "swum", "ipa": "/swɪm/", "ipa2": "/swæm/", "ipa3": "/swʌm/", "meaning": "bơi", "lv": 1},
  {"v1": "swing", "v2": "swung", "v3": "swung", "ipa": "/swɪŋ/", "ipa2": "/swʌŋ/", "ipa3": "/swʌŋ/", "meaning": "đu đưa", "lv": 3},
  {"v1": "take", "v2": "took", "v3": "taken", "ipa": "/teɪk/", "ipa2": "/tʊk/", "ipa3": "/ˈteɪkən/", "meaning": "lấy, cầm", "lv": 1},
  {"v1": "teach", "v2": "taught", "v3": "taught", "ipa": "/tiːtʃ/", "ipa2": "/tɔːt/", "ipa3": "/tɔːt/", "meaning": "dạy", "lv": 1},
  {"v1": "tear", "v2": "tore", "v3": "torn", "ipa": "/teə/", "ipa2": "/tɔː/", "ipa3": "/tɔːn/", "meaning": "xé rách", "lv": 2},
  {"v1": "telecast", "v2": "telecast", "v3": "telecast", "ipa": "/ˈtelikɑːst/", "ipa2": "/ˈtelikɑːst/", "ipa3": "/ˈtelikɑːst/", "meaning": "phát sóng truyền hình", "lv": 5},
  {"v1": "tell", "v2": "told", "v3": "told", "ipa": "/tel/", "ipa2": "/təʊld/", "ipa3": "/təʊld/", "meaning": "kể, nói cho biết", "lv": 1},
  {"v1": "test-drive", "v2": "test-drove", "v3": "test-driven", "ipa": "/ˈtest draɪv/", "ipa2": "/ˈtest drəʊv/", "ipa3": "/ˈtest drɪvn/", "meaning": "lái thử (xe)", "lv": 3},
  {"v1": "think", "v2": "thought", "v3": "thought", "ipa": "/θɪŋk/", "ipa2": "/θɔːt/", "ipa3": "/θɔːt/", "meaning": "nghĩ", "lv": 1},
  {"v1": "thrive", "v2": "thrived/throve", "v3": "thrived/thriven", "ipa": "/θraɪv/", "ipa2": "/θraɪvd/", "ipa3": "/θraɪvd/", "meaning": "phát triển mạnh", "lv": 5},
  {"v1": "throw", "v2": "threw", "v3": "thrown", "ipa": "/θrəʊ/", "ipa2": "/θruː/", "ipa3": "/θrəʊn/", "meaning": "ném, vứt", "lv": 2},
  {"v1": "thrust", "v2": "thrust", "v3": "thrust", "ipa": "/θrʌst/", "ipa2": "/θrʌst/", "ipa3": "/θrʌst/", "meaning": "đẩy mạnh, ấn", "lv": 4},
  {"v1": "tread", "v2": "trod", "v3": "trodden", "ipa": "/tred/", "ipa2": "/trɒd/", "ipa3": "/ˈtrɒdn/", "meaning": "giẫm, đạp lên", "lv": 4},
  {"v1": "typeset", "v2": "typeset", "v3": "typeset", "ipa": "/ˈtaɪpset/", "ipa2": "/ˈtaɪpset/", "ipa3": "/ˈtaɪpset/", "meaning": "sắp chữ (in ấn)", "lv": 5},
  {"v1": "unbend", "v2": "unbent", "v3": "unbent", "ipa": "/ʌnˈbend/", "ipa2": "/ʌnˈbent/", "ipa3": "/ʌnˈbent/", "meaning": "duỗi thẳng, bớt căng thẳng", "lv": 5},
  {"v1": "unbind", "v2": "unbound", "v3": "unbound", "ipa": "/ʌnˈbaɪnd/", "ipa2": "/ʌnˈbaʊnd/", "ipa3": "/ʌnˈbaʊnd/", "meaning": "cởi trói, tháo ra", "lv": 5},
  {"v1": "undercut", "v2": "undercut", "v3": "undercut", "ipa": "/ˌʌndəˈkʌt/", "ipa2": "/ˌʌndəˈkʌt/", "ipa3": "/ˌʌndəˈkʌt/", "meaning": "bán phá giá, làm suy yếu", "lv": 5},
  {"v1": "underfeed", "v2": "underfed", "v3": "underfed", "ipa": "/ˌʌndəˈfiːd/", "ipa2": "/ˌʌndəˈfed/", "ipa3": "/ˌʌndəˈfed/", "meaning": "cho ăn thiếu", "lv": 5},
  {"v1": "undergo", "v2": "underwent", "v3": "undergone", "ipa": "/ˌʌndəˈɡəʊ/", "ipa2": "/ˌʌndəˈwent/", "ipa3": "/ˌʌndəˈɡɒn/", "meaning": "trải qua", "lv": 4},
  {"v1": "underlie", "v2": "underlay", "v3": "underlain", "ipa": "/ˌʌndəˈlaɪ/", "ipa2": "/ˌʌndəˈleɪ/", "ipa3": "/ˌʌndəˈleɪn/", "meaning": "là cơ sở của", "lv": 5},
  {"v1": "underpay", "v2": "underpaid", "v3": "underpaid", "ipa": "/ˌʌndəˈpeɪ/", "ipa2": "/ˌʌndəˈpeɪd/", "ipa3": "/ˌʌndəˈpeɪd/", "meaning": "trả lương thấp", "lv": 4},
  {"v1": "undersell", "v2": "undersold", "v3": "undersold", "ipa": "/ˌʌndəˈsel/", "ipa2": "/ˌʌndəˈsəʊld/", "ipa3": "/ˌʌndəˈsəʊld/", "meaning": "bán rẻ hơn", "lv": 4},
  {"v1": "underspend", "v2": "underspent", "v3": "underspent", "ipa": "/ˌʌndəˈspend/", "ipa2": "/ˌʌndəˈspent/", "ipa3": "/ˌʌndəˈspent/", "meaning": "chi tiêu ít hơn dự tính", "lv": 5},
  {"v1": "understand", "v2": "understood", "v3": "understood", "ipa": "/ˌʌndəˈstænd/", "ipa2": "/ˌʌndəˈstʊd/", "ipa3": "/ˌʌndəˈstʊd/", "meaning": "hiểu", "lv": 1},
  {"v1": "undertake", "v2": "undertook", "v3": "undertaken", "ipa": "/ˌʌndəˈteɪk/", "ipa2": "/ˌʌndəˈtʊk/", "ipa3": "/ˌʌndəˈteɪkən/", "meaning": "đảm nhận", "lv": 4},
  {"v1": "underwrite", "v2": "underwrote", "v3": "underwritten", "ipa": "/ˌʌndəˈraɪt/", "ipa2": "/ˌʌndəˈrəʊt/", "ipa3": "/ˌʌndəˈrɪtn/", "meaning": "bảo lãnh, bảo hiểm", "lv": 5},
  {"v1": "undo", "v2": "undid", "v3": "undone", "ipa": "/ʌnˈduː/", "ipa2": "/ʌnˈdɪd/", "ipa3": "/ʌnˈdʌn/", "meaning": "tháo ra, hoàn tác", "lv": 4},
  {"v1": "unfreeze", "v2": "unfroze", "v3": "unfrozen", "ipa": "/ʌnˈfriːz/", "ipa2": "/ʌnˈfrəʊz/", "ipa3": "/ʌnˈfrəʊzn/", "meaning": "rã đông, mở băng (tài khoản)", "lv": 4},
  {"v1": "unsay", "v2": "unsaid", "v3": "unsaid", "ipa": "/ʌnˈseɪ/", "ipa2": "/ʌnˈsed/", "ipa3": "/ʌnˈsed/", "meaning": "rút lại lời nói", "lv": 5},
  {"v1": "unwind", "v2": "unwound", "v3": "unwound", "ipa": "/ʌnˈwaɪnd/", "ipa2": "/ʌnˈwaʊnd/", "ipa3": "/ʌnˈwaʊnd/", "meaning": "thư giãn, tháo cuộn", "lv": 4},
  {"v1": "uphold", "v2": "upheld", "v3": "upheld", "ipa": "/ʌpˈhəʊld/", "ipa2": "/ʌpˈheld/", "ipa3": "/ʌpˈheld/", "meaning": "giữ vững, ủng hộ", "lv": 4},
  {"v1": "upset", "v2": "upset", "v3": "upset", "ipa": "/ʌpˈset/", "ipa2": "/ʌpˈset/", "ipa3": "/ʌpˈset/", "meaning": "làm buồn, làm đảo lộn", "lv": 3},
  {"v1": "wake", "v2": "woke", "v3": "woken", "ipa": "/weɪk/", "ipa2": "/wəʊk/", "ipa3": "/ˈwəʊkən/", "meaning": "thức dậy", "lv": 1},
  {"v1": "waylay", "v2": "waylaid", "v3": "waylaid", "ipa": "/weɪˈleɪ/", "ipa2": "/weɪˈleɪd/", "ipa3": "/weɪˈleɪd/", "meaning": "chặn đường, giữ lại nói chuyện", "lv": 5},
  {"v1": "wear", "v2": "wore", "v3": "worn", "ipa": "/weər/", "ipa2": "/wɔːr/", "ipa3": "/wɔːn/", "meaning": "mặc, đeo", "lv": 1},
  {"v1": "weave", "v2": "wove", "v3": "woven", "ipa": "/wiːv/", "ipa2": "/wəʊv/", "ipa3": "/ˈwəʊvn/", "meaning": "dệt", "lv": 4},
  {"v1": "webcast", "v2": "webcast", "v3": "webcast", "ipa": "/ˈwebkɑːst/", "ipa2": "/ˈwebkɑːst/", "ipa3": "/ˈwebkɑːst/", "meaning": "phát trực tuyến", "lv": 4},
  {"v1": "wed", "v2": "wed/wedded", "v3": "wed/wedded", "ipa": "/wed/", "ipa2": "/wed/", "ipa3": "/wed/", "meaning": "cưới", "lv": 4},
  {"v1": "weep", "v2": "wept", "v3": "wept", "ipa": "/wiːp/", "ipa2": "/wept/", "ipa3": "/wept/", "meaning": "khóc", "lv": 4},
  {"v1": "wet", "v2": "wet/wetted", "v3": "wet/wetted", "ipa": "/wet/", "ipa2": "/wet/", "ipa3": "/wet/", "meaning": "làm ướt", "lv": 4},
  {"v1": "win", "v2": "won", "v3": "won", "ipa": "/wɪn/", "ipa2": "/wʌn/", "ipa3": "/wʌn/", "meaning": "thắng", "lv": 2},
  {"v1": "wind", "v2": "wound", "v3": "wound", "ipa": "/waɪnd/", "ipa2": "/waʊnd/", "ipa3": "/waʊnd/", "meaning": "cuộn, lên dây, uốn khúc", "lv": 4},
  {"v1": "withdraw", "v2": "withdrew", "v3": "withdrawn", "ipa": "/wɪðˈdrɔː/", "ipa2": "/wɪðˈdruː/", "ipa3": "/wɪðˈdrɔːn/", "meaning": "rút (tiền), rút lui", "lv": 3},
  {"v1": "withhold", "v2": "withheld", "v3": "withheld", "ipa": "/wɪðˈhəʊld/", "ipa2": "/wɪðˈheld/", "ipa3": "/wɪðˈheld/", "meaning": "giữ lại, từ chối cho", "lv": 4},
  {"v1": "withstand", "v2": "withstood", "v3": "withstood", "ipa": "/wɪðˈstænd/", "ipa2": "/wɪðˈstʊd/", "ipa3": "/wɪðˈstʊd/", "meaning": "chịu đựng được", "lv": 4},
  {"v1": "wring", "v2": "wrung", "v3": "wrung", "ipa": "/rɪŋ/", "ipa2": "/rʌŋ/", "ipa3": "/rʌŋ/", "meaning": "vắt (quần áo)", "lv": 4},
  {"v1": "write", "v2": "wrote", "v3": "written", "ipa": "/raɪt/", "ipa2": "/rəʊt/", "ipa3": "/ˈrɪtn/", "meaning": "viết", "lv": 1}
];
const IPA_SOUNDS = [
  // short / long vowel pairs
  ['ɪ', 'mono', 'i ngắn', 'Môi thả lỏng, lưỡi hơi thấp hơn /iː/. Đọc ngắn, dứt khoát, nghe gần giữa “i” và “ê”.', 'Đừng kéo dài thành /iː/: ship /ʃɪp/ (con tàu) khác sheep /ʃiːp/ (con cừu).',
    [['sh[i]p', '/ʃɪp/', 'con tàu'], ['s[i]t', '/sɪt/', 'ngồi'], ['b[u]sy', '/ˈbɪzi/', 'bận rộn']], 'ngắn'],
  ['iː', 'mono', 'i dài', 'Kéo môi sang hai bên như đang cười, lưỡi nâng cao, kéo dài âm “i”.', 'Dấu ː nghĩa là đọc dài. Giữ âm lâu gần gấp đôi /ɪ/.',
    [['sh[ee]p', '/ʃiːp/', 'con cừu'], ['s[ea]', '/siː/', 'biển'], ['k[ey]', '/kiː/', 'chìa khóa']], 'dài'],
  ['ʊ', 'mono', 'u ngắn', 'Môi hơi tròn nhưng thả lỏng, lưỡi lùi về sau. Đọc ngắn, gần giữa “u” và “ư”.', 'full /fʊl/ (đầy) khác fool /fuːl/ (kẻ ngốc). Chữ “oo” có lúc đọc ngắn: book, good.',
    [['b[oo]k', '/bʊk/', 'quyển sách'], ['p[u]t', '/pʊt/', 'đặt, để'], ['c[ou]ld', '/kʊd/', 'có thể']], 'ngắn'],
  ['uː', 'mono', 'u dài', 'Chu tròn môi về phía trước, lưỡi lùi về sau, kéo dài âm “u”.', 'Giữ môi tròn suốt cả âm, đừng mở môi giữa chừng.',
    [['f[oo]d', '/fuːd/', 'thức ăn'], ['bl[ue]', '/bluː/', 'màu xanh dương'], ['t[wo]', '/tuː/', 'số hai']], 'dài'],
  ['e', 'mono', 'e', 'Miệng mở vừa, môi kéo nhẹ sang hai bên. Gần “e” tiếng Việt nhưng ngắn hơn.', 'bed /bed/ (giường) khác bad /bæd/ (tệ): /æ/ mở miệng rộng hơn nhiều.',
    [['b[e]d', '/bed/', 'cái giường'], ['t[e]n', '/ten/', 'số mười'], ['fr[ie]nd', '/frend/', 'bạn bè']], 'ngắn'],
  ['æ', 'mono', 'a bẹt', 'Mở miệng thật rộng, hạ hàm dưới, lưỡi đặt thấp, môi kéo sang hai bên.', 'Tiếng Việt không có âm này. Thử nói “e” nhưng mở miệng rộng như khi nói “a”.',
    [['c[a]t', '/kæt/', 'con mèo'], ['[a]pple', '/ˈæpl/', 'quả táo'], ['h[a]t', '/hæt/', 'cái mũ']], 'ngắn'],
  ['ə', 'mono', 'ơ rất nhẹ (schwa)', 'Miệng, môi và lưỡi thả lỏng hoàn toàn. Phát ra “ơ” thật nhẹ và ngắn.', 'Âm gặp nhiều nhất trong tiếng Anh, luôn nằm ở âm tiết không nhấn. Đừng đọc rõ từng chữ cái: about là /əˈbaʊt/.',
    [['[a]bout', '/əˈbaʊt/', 'về, khoảng'], ['teach[er]', '/ˈtiːtʃə/', 'giáo viên'], ['[a]go', '/əˈɡəʊ/', 'trước đây']], 'ngắn'],
  ['ɜː', 'mono', 'ơ dài', 'Miệng mở vừa, môi thả lỏng không tròn, kéo dài âm “ơ”.', 'Giọng Anh-Anh không cong lưỡi đọc “r”: bird /bɜːd/, work /wɜːk/.',
    [['b[ir]d', '/bɜːd/', 'con chim'], ['w[or]k', '/wɜːk/', 'làm việc'], ['l[ear]n', '/lɜːn/', 'học']], 'dài'],
  ['ɒ', 'mono', 'o ngắn', 'Môi hơi tròn, miệng mở rộng, lưỡi lùi về sau. Đọc ngắn, gần “o” tiếng Việt.', 'Giọng Mỹ thường đọc âm này thành /ɑː/: hot, dog.',
    [['h[o]t', '/hɒt/', 'nóng'], ['d[o]g', '/dɒɡ/', 'con chó'], ['w[a]tch', '/wɒtʃ/', 'xem; đồng hồ']], 'ngắn'],
  ['ɔː', 'mono', 'o dài', 'Môi tròn, miệng mở vừa, lưỡi lùi về sau, kéo dài âm “o”.', 'Các chữ “al”, “aw”, “or”, “oor” thường đọc là /ɔː/: talk, saw, door.',
    [['d[oor]', '/dɔː/', 'cánh cửa'], ['t[a]lk', '/tɔːk/', 'nói chuyện'], ['w[a]ter', '/ˈwɔːtə/', 'nước']], 'dài'],
  ['ʌ', 'mono', 'ă', 'Miệng mở vừa, lưỡi ở giữa. Đọc ngắn và dứt khoát, gần “ă” tiếng Việt.', 'cup /kʌp/ (cái cốc) khác cap /kæp/ (mũ lưỡi trai). Chữ “o” đôi khi đọc /ʌ/: money, love.',
    [['c[u]p', '/kʌp/', 'cái cốc'], ['s[u]n', '/sʌn/', 'mặt trời'], ['m[o]ney', '/ˈmʌni/', 'tiền']], 'ngắn'],
  ['ɑː', 'mono', 'a dài', 'Mở miệng rộng, lưỡi hạ thấp và lùi về sau, kéo dài âm “a”.', 'Giọng Anh-Anh không đọc “r” sau nguyên âm: car /kɑː/, park /pɑːk/.',
    [['c[ar]', '/kɑː/', 'xe hơi'], ['f[a]ther', '/ˈfɑːðə/', 'bố'], ['h[ear]t', '/hɑːt/', 'trái tim']], 'dài'],
  // diphthongs
  ['eɪ', 'diph', 'ây', 'Bắt đầu từ /e/ rồi trượt lên /ɪ/, miệng khép dần.', 'Đừng đọc thành “ê” ngắn: name là /neɪm/, không phải “nêm”.',
    [['d[ay]', '/deɪ/', 'ngày'], ['n[a]me', '/neɪm/', 'tên'], ['r[ai]n', '/reɪn/', 'mưa']], 'đôi'],
  ['aɪ', 'diph', 'ai', 'Bắt đầu từ “a” mở rộng miệng rồi trượt lên /ɪ/.', 'Gần “ai” tiếng Việt. Nhớ đọc cả âm cuối phía sau: like /laɪk/, time /taɪm/.',
    [['m[y]', '/maɪ/', 'của tôi'], ['t[i]me', '/taɪm/', 'thời gian'], ['n[igh]t', '/naɪt/', 'ban đêm']], 'đôi'],
  ['ɔɪ', 'diph', 'oi', 'Bắt đầu từ “o” môi tròn rồi trượt lên /ɪ/, môi kéo dần sang hai bên.', 'Gần “oi” tiếng Việt: boy, toy.',
    [['b[oy]', '/bɔɪ/', 'cậu bé'], ['c[oi]n', '/kɔɪn/', 'đồng xu'], ['t[oy]', '/tɔɪ/', 'đồ chơi']], 'đôi'],
  ['aʊ', 'diph', 'ao', 'Bắt đầu từ “a” mở rộng miệng rồi trượt sang /ʊ/, môi tròn dần.', 'Gần “ao” tiếng Việt: house /haʊs/, now /naʊ/.',
    [['h[ou]se', '/haʊs/', 'ngôi nhà'], ['n[ow]', '/naʊ/', 'bây giờ'], ['m[ou]th', '/maʊθ/', 'cái miệng']], 'đôi'],
  ['əʊ', 'diph', 'âu', 'Bắt đầu từ /ə/ thả lỏng rồi trượt sang /ʊ/, môi tròn dần.', 'Đừng đọc thành “ô” ngắn: go là /ɡəʊ/, home là /həʊm/. Giọng Mỹ đọc là /oʊ/.',
    [['g[o]', '/ɡəʊ/', 'đi'], ['h[o]me', '/həʊm/', 'nhà'], ['b[oa]t', '/bəʊt/', 'con thuyền']], 'đôi'],
  ['ɪə', 'diph', 'ia', 'Bắt đầu từ /ɪ/ rồi trượt nhẹ về /ə/.', 'Giọng Anh-Anh không đọc “r”: here /hɪə/. Giọng Mỹ đọc là /hɪr/.',
    [['h[ere]', '/hɪə/', 'ở đây'], ['[ear]', '/ɪə/', 'cái tai'], ['b[eer]', '/bɪə/', 'bia']], 'đôi'],
  ['eə', 'diph', 'e-ơ', 'Bắt đầu từ /e/ rồi trượt về /ə/ thả lỏng.', 'Giọng Anh-Anh không đọc “r”: hair /heə/, where /weə/.',
    [['h[air]', '/heə/', 'tóc'], ['wh[ere]', '/weə/', 'ở đâu'], ['ch[air]', '/tʃeə/', 'cái ghế']], 'đôi'],
  ['ʊə', 'diph', 'ua', 'Bắt đầu từ /ʊ/ môi tròn rồi trượt về /ə/.', 'Âm khá hiếm. Nhiều người Anh hiện nay đọc thành /ɔː/: tour /tɔː/.',
    [['t[our]', '/tʊə/', 'chuyến du lịch'], ['p[ure]', '/pjʊə/', 'tinh khiết'], ['c[ure]', '/kjʊə/', 'chữa trị']], 'đôi'],
  // consonants, voiceless / voiced pairs first
  ['p', 'cons', 'p bật hơi', 'Mím hai môi rồi bật mạnh hơi ra.', 'Đặt tờ giấy trước miệng: giấy phải rung khi đọc /p/. Âm cuối cũng phải nghe được: map /mæp/.',
    [['[p]en', '/pen/', 'cái bút'], ['[p]ark', '/pɑːk/', 'công viên'], ['ha[pp]y', '/ˈhæpi/', 'vui vẻ']], ['vô thanh', 'b']],
  ['b', 'cons', 'b', 'Mím hai môi rồi bật ra, cổ họng rung.', 'Âm cuối đọc nhẹ nhưng đừng bỏ: club /klʌb/.',
    [['[b]ook', '/bʊk/', 'quyển sách'], ['[b]ag', '/bæɡ/', 'cái túi'], ['clu[b]', '/klʌb/', 'câu lạc bộ']], ['hữu thanh', 'p']],
  ['t', 'cons', 't bật hơi', 'Đầu lưỡi chạm lợi (phần nướu sau răng trên) rồi bật hơi ra.', 'Ở đầu từ, /t/ bật hơi mạnh, nghe gần “th” tiếng Việt. Đừng nuốt /t/ ở cuối từ: cat /kæt/.',
    [['[t]ea', '/tiː/', 'trà'], ['[t]able', '/ˈteɪbl/', 'cái bàn'], ['ca[t]', '/kæt/', 'con mèo']], ['vô thanh', 'd']],
  ['d', 'cons', 'đ', 'Đầu lưỡi chạm lợi trên rồi bật ra, cổ họng rung.', 'Khác “đ” tiếng Việt một chút: lưỡi chạm lợi chứ không chạm răng. Âm cuối phải rõ: bad /bæd/.',
    [['[d]og', '/dɒɡ/', 'con chó'], ['[d]oor', '/dɔː/', 'cánh cửa'], ['ba[d]', '/bæd/', 'tệ']], ['hữu thanh', 't']],
  ['k', 'cons', 'k bật hơi', 'Cuống lưỡi chạm vòm mềm phía sau miệng rồi bật hơi ra.', 'Đầu từ bật hơi như “kh” nhẹ. Cuối từ vẫn phải nghe thấy: back /bæk/.',
    [['[c]at', '/kæt/', 'con mèo'], ['[k]ey', '/kiː/', 'chìa khóa'], ['ba[ck]', '/bæk/', 'phía sau']], ['vô thanh', 'ɡ']],
  ['ɡ', 'cons', 'g', 'Cuống lưỡi chạm vòm mềm, bật ra và rung cổ họng.', 'Âm cuối phải rõ: bag /bæɡ/ khác back /bæk/.',
    [['[g]o', '/ɡəʊ/', 'đi'], ['[g]ame', '/ɡeɪm/', 'trò chơi'], ['ba[g]', '/bæɡ/', 'cái túi']], ['hữu thanh', 'k']],
  ['f', 'cons', 'ph', 'Răng trên chạm nhẹ môi dưới rồi thổi hơi ra.', 'Chữ “ph” và “gh” cũng có thể đọc /f/: phone, laugh.',
    [['[f]ish', '/fɪʃ/', 'con cá'], ['[ph]one', '/fəʊn/', 'điện thoại'], ['lau[gh]', '/lɑːf/', 'cười']], ['vô thanh', 'v']],
  ['v', 'cons', 'v', 'Răng trên chạm nhẹ môi dưới, thổi hơi và rung cổ họng.', 'Đừng đọc thành /b/: very ≠ berry. Ở cuối từ phải giữ răng chạm môi: five /faɪv/.',
    [['[v]ery', '/ˈveri/', 'rất'], ['[v]an', '/væn/', 'xe tải nhỏ'], ['fi[v]e', '/faɪv/', 'số năm']], ['hữu thanh', 'f']],
  ['θ', 'cons', 'th thổi hơi', 'Đặt đầu lưỡi giữa hai hàm răng rồi thổi hơi nhẹ ra.', 'Không đọc thành “th” tiếng Việt, /t/ hay /s/: think khác sink.',
    [['[th]ink', '/θɪŋk/', 'nghĩ'], ['[th]ree', '/θriː/', 'số ba'], ['mou[th]', '/maʊθ/', 'cái miệng']], ['vô thanh', 'ð']],
  ['ð', 'cons', 'th rung', 'Lưỡi đặt giữa hai hàm răng như /θ/ nhưng rung cổ họng.', 'Không đọc thành /d/ hay /z/: this /ðɪs/, mother /ˈmʌðə/.',
    [['[th]is', '/ðɪs/', 'cái này'], ['mo[th]er', '/ˈmʌðə/', 'mẹ'], ['brea[th]e', '/briːð/', 'thở']], ['hữu thanh', 'θ']],
  ['s', 'cons', 'x', 'Đầu lưỡi gần lợi trên, đẩy hơi qua khe hẹp tạo tiếng “xì”.', 'Đọc rõ /s/ ở cuối từ, nhất là danh từ số nhiều: books /bʊks/.',
    [['[s]un', '/sʌn/', 'mặt trời'], ['[c]ity', '/ˈsɪti/', 'thành phố'], ['ri[c]e', '/raɪs/', 'gạo']], ['vô thanh', 'z']],
  ['z', 'cons', 'z rung', 'Giống /s/ nhưng rung cổ họng, nghe như tiếng ong “zzz”.', 'Đuôi -s sau âm hữu thanh đọc là /z/: dogs /dɒɡz/, plays /pleɪz/.',
    [['[z]oo', '/zuː/', 'sở thú'], ['ro[s]e', '/rəʊz/', 'hoa hồng'], ['dog[s]', '/dɒɡz/', 'những con chó']], ['hữu thanh', 's']],
  ['ʃ', 'cons', 's nặng (sh)', 'Chu môi ra, mặt lưỡi nâng gần vòm miệng, đẩy hơi như khi suỵt “shhh”.', 'Khác /s/: sea /siː/ khác she /ʃiː/. Đuôi “-tion” đọc là /ʃn/.',
    [['[sh]e', '/ʃiː/', 'cô ấy'], ['[sh]op', '/ʃɒp/', 'cửa hàng'], ['sta[t]ion', '/ˈsteɪʃn/', 'nhà ga']], ['vô thanh', 'ʒ']],
  ['ʒ', 'cons', 'giơ rung', 'Giống /ʃ/ nhưng rung cổ họng.', 'Hay gặp trong “-sion”, “-sure”: television, pleasure.',
    [['televi[s]ion', '/ˈtelɪvɪʒn/', 'ti vi'], ['u[s]ually', '/ˈjuːʒuəli/', 'thường thường'], ['plea[s]ure', '/ˈpleʒə/', 'niềm vui']], ['hữu thanh', 'ʃ']],
  ['tʃ', 'cons', 'ch', 'Đầu lưỡi chạm lợi trên, chu môi ra rồi bật hơi mạnh.', 'Mạnh và chu môi hơn “ch” tiếng Việt: chair, watch.',
    [['[ch]air', '/tʃeə/', 'cái ghế'], ['[ch]eese', '/tʃiːz/', 'phô mai'], ['wa[tch]', '/wɒtʃ/', 'xem; đồng hồ']], ['vô thanh', 'dʒ']],
  ['dʒ', 'cons', 'j rung', 'Giống /tʃ/ nhưng rung cổ họng.', 'Không đọc thành “gi” hay “z”: job /dʒɒb/, page /peɪdʒ/.',
    [['[j]ob', '/dʒɒb/', 'công việc'], ['[j]uice', '/dʒuːs/', 'nước ép'], ['pa[g]e', '/peɪdʒ/', 'trang sách']], ['hữu thanh', 'tʃ']],
  // other consonants
  ['m', 'cons', 'm', 'Mím hai môi lại, hơi đi ra đằng mũi.', 'Âm cuối phải khép môi: home /həʊm/.',
    [['[m]an', '/mæn/', 'người đàn ông'], ['[m]ilk', '/mɪlk/', 'sữa'], ['ho[m]e', '/həʊm/', 'nhà']], ['hữu thanh', '']],
  ['n', 'cons', 'n', 'Đầu lưỡi chạm lợi trên, hơi đi ra đằng mũi.', 'Âm cuối để lưỡi chạm lợi, khác “ng”: sun /sʌn/ khác sung /sʌŋ/.',
    [['[n]ose', '/nəʊz/', 'cái mũi'], ['[n]ine', '/naɪn/', 'số chín'], ['su[n]', '/sʌn/', 'mặt trời']], ['hữu thanh', '']],
  ['ŋ', 'cons', 'ng', 'Cuống lưỡi chạm vòm mềm, hơi đi ra đằng mũi, giống “ng” tiếng Việt.', 'Không thêm /ɡ/ phía sau: sing /sɪŋ/. Chữ “n” đứng trước k, g cũng đọc /ŋ/: think /θɪŋk/.',
    [['si[ng]', '/sɪŋ/', 'hát'], ['ri[ng]', '/rɪŋ/', 'chiếc nhẫn'], ['thi[n]k', '/θɪŋk/', 'nghĩ']], ['hữu thanh', '']],
  ['h', 'cons', 'h', 'Miệng mở, đẩy hơi nhẹ ra từ cổ họng.', 'Nhẹ hơn “h” tiếng Việt. Một số từ có “h” câm: hour, honest.',
    [['[h]at', '/hæt/', 'cái mũ'], ['[h]ouse', '/haʊs/', 'ngôi nhà'], ['[wh]o', '/huː/', 'ai']], ['vô thanh', '']],
  ['l', 'cons', 'l', 'Đầu lưỡi chạm lợi trên, hơi thoát ra hai bên lưỡi.', 'Ở cuối từ vẫn giữ lưỡi chạm lợi, đừng bỏ âm hay đọc thành “u”: ball, milk.',
    [['[l]eg', '/leɡ/', 'cái chân'], ['[l]ove', '/lʌv/', 'yêu'], ['ba[ll]', '/bɔːl/', 'quả bóng']], ['hữu thanh', '']],
  ['r', 'cons', 'r', 'Cong đầu lưỡi về phía sau, không chạm vòm miệng, môi hơi tròn.', 'Không rung lưỡi như “r” tiếng Việt. Giọng Anh-Anh chỉ đọc /r/ khi ngay sau nó là một nguyên âm: red, very, nhưng car /kɑː/.',
    [['[r]ed', '/red/', 'màu đỏ'], ['[r]ain', '/reɪn/', 'mưa'], ['ve[r]y', '/ˈveri/', 'rất']], ['hữu thanh', '']],
  ['w', 'cons', 'qu / u', 'Chu tròn môi như “u” rồi mở nhanh sang nguyên âm phía sau.', 'Khác /v/: wet ≠ vet. Chữ “wh” thường đọc là /w/: what.',
    [['[w]e', '/wiː/', 'chúng tôi'], ['[w]ater', '/ˈwɔːtə/', 'nước'], ['[wh]at', '/wɒt/', 'cái gì']], ['hữu thanh', '']],
  ['j', 'cons', 'd (miền Nam) / i', 'Mặt lưỡi nâng gần vòm miệng như “i” rồi trượt nhanh sang nguyên âm sau.', 'Ký hiệu /j/ không phải chữ j! Nó là âm “y” trong yes /jes/, giống “d” giọng miền Nam.',
    [['[y]es', '/jes/', 'vâng'], ['[y]ellow', '/ˈjeləʊ/', 'màu vàng'], ['[u]se', '/juːz/', 'sử dụng']], ['hữu thanh', '']]
];
const IPA_SPELL = {
  'ɪ': { sp: [['i', 's[i]t · b[i]g · f[i]sh · m[i]lk · k[i]ng'],
              ['y', 'g[y]m · s[y]stem · m[y]th'],
              ['ui / u', 'b[ui]ld · b[u]sy · m[i]nute'],
              ['e', 'pr[e]tty · b[e]fore · d[e]cide']],
         s: ['Th[i]s f[i]sh [i]s b[i]g.', 'G[i]ve me s[i]x m[i]nutes.',
             'We bu[i]lt a b[i]g k[i]tchen.', 'The g[y]m [i]s on th[i]s h[i]ll.'] },
  'iː': { sp: [['ee', 's[ee] · thr[ee] · gr[ee]n · sl[ee]p'],
               ['ea', 't[ea] · [ea]t · m[ea]t · cl[ea]n'],
               ['e / e_e', 'h[e] · sh[e] · w[e] · th[e]se'],
               ['ie / ei', 'f[ie]ld · bel[ie]ve · rec[ei]ve']],
          s: ['Sh[e] [ea]ts thr[ee] gr[ee]n beans.', 'W[e] n[ee]d a cup of t[ea].',
              'P[eo]ple bel[ie]ve the s[ea] [i]s d[ee]p.', 'K[ee]p the k[ey]s cl[ea]n.'] },
  'ʊ': { sp: [['u', 'p[u]t · f[u]ll · p[u]sh · s[u]gar'],
              ['oo', 'b[oo]k · l[oo]k · c[oo]k · f[oo]t · g[oo]d'],
              ['ou', 'c[ou]ld · w[ou]ld · sh[ou]ld'],
              ['o', 'w[o]man']],
         s: ['L[oo]k at this g[oo]d b[oo]k.', 'She p[u]t s[u]gar in the p[u]dding.',
             'The w[o]man c[ou]ldn’t p[u]sh it.', 'P[u]t your f[oo]t here.'] },
  'uː': { sp: [['oo', 'f[oo]d · m[oo]n · s[oo]n · sch[oo]l'],
               ['o / oe', 'd[o] · wh[o] · sh[oe]'],
               ['ue / ew', 'bl[ue] · tr[ue] · n[ew] · fl[ew]'],
               ['u / ui / ou', 'J[u]ne · r[u]le · fr[ui]t · gr[ou]p']],
          s: ['Wh[o] ate my s[ou]p?', 'The n[ew] sch[oo]l opens in J[u]ne.',
              'D[o] y[ou] want fr[ui]t j[ui]ce?', 'The m[oo]n looks bl[ue] ton[i]ght.'] },
  'e': { sp: [['e', 'b[e]d · t[e]n · r[e]d · y[e]s · l[e]ft'],
              ['ea', 'br[ea]d · h[ea]d · r[ea]dy · h[ea]lth'],
              ['a', 'm[a]ny · [a]ny'],
              ['ie / ai', 'fr[ie]nd · s[ai]d · ag[ai]n']],
         s: ['My fr[ie]nd s[ai]d the br[ea]d [i]s fresh.', 'T[e]n r[e]d p[e]ns are on my d[e]sk.',
             'Are you r[ea]dy for br[ea]kfast?', 'L[e]t’s m[ee]t ag[ai]n n[e]xt week.'] },
  'æ': { sp: [['a', 'c[a]t · b[a]g · m[a]p · h[a]nd · bl[a]ck'],
              ['a + phụ âm đôi', 'h[a]ppy · [a]pple · m[a]tch · tr[a]ffic']],
         s: ['The bl[a]ck c[a]t s[a]t on my b[a]g.', 'D[a]d h[a]s a b[a]d h[a]bit.',
             'Th[a]t m[a]n c[a]n c[a]tch the b[a]ll.', 'H[a]nd me the m[a]p and the h[a]t.'] },
  'ə': { sp: [['a', '[a]bout · ban[a]n[a] · Chin[a] · [a]go'],
              ['e', 'moth[e]r · teach[e]r · lett[e]r · op[e]n'],
              ['o', 'doct[o]r · act[o]r · less[o]n · pil[o]t'],
              ['u / ou', 's[u]pport · fam[ou]s · col[ou]r']],
         s: ['My moth[e]r [i]s a teach[e]r.', 'Can I have a ban[a]n[a]?',
             'The doct[o]r [i]s wait[i]ng for us.', 'I’ll tell you [a]bout the less[o]n lat[e]r.'] },
  'ɜː': { sp: [['er', 'h[er] · s[er]ve · p[er]son · p[er]fect'],
               ['ir', 'b[ir]d · g[ir]l · th[ir]d · sh[ir]t'],
               ['ur', 't[ur]n · n[ur]se · b[ur]n · h[ur]t'],
               ['or sau w / ear', 'w[or]k · w[or]d · w[or]ld · l[ear]n · [ear]th']],
          s: ['The g[ir]l in the p[ur]ple sh[ir]t [i]s a n[ur]se.', 'I l[ear]n new w[or]ds every day.',
              'T[ur]n left at the th[ir]d t[ur]ning.', 'H[er] b[ir]thday [i]s on Th[ur]sday.'] },
  'ɒ': { sp: [['o', 'h[o]t · st[o]p · b[o]x · cl[o]ck · s[o]ck'],
              ['a sau w', 'w[a]nt · w[a]tch · w[a]sh · wh[a]t'],
              ['au / ou', 'bec[au]se · s[au]sage · c[ou]gh']],
         s: ['St[o]p the cl[o]ck!', 'Wh[a]t do you w[a]nt to w[a]tch?',
             'The h[o]t c[o]ffee [i]s in the b[o]x.', 'I w[a]sh my s[o]cks a l[o]t.'] },
  'ɔː': { sp: [['or / our', 'sh[or]t · m[or]ning · f[our] · y[our]'],
               ['aw / au', 's[aw] · dr[aw] · l[aw] · [au]tumn · d[au]ghter'],
               ['al', 't[al]k · w[al]k · sm[al]l · b[al]l'],
               ['oor / oa', 'd[oor] · fl[oor] · b[oar]d']],
          s: ['I s[aw] f[our] sm[al]l b[al]ls.', 'W[al]k to the d[oor] and t[al]k to them.',
              'My d[au]ghter dr[aw]s every m[or]ning.', 'It’s y[our] f[au]lt, of c[our]se.'] },
  'ʌ': { sp: [['u', 'c[u]p · b[u]s · s[u]n · l[u]nch · m[u]ch'],
              ['o', 'l[o]ve · m[o]ney · c[o]me · s[o]me · M[o]nday'],
              ['ou', 'c[ou]ntry · y[ou]ng · t[ou]ch · en[ou]gh'],
              ['oo', 'bl[oo]d · fl[oo]d']],
         s: ['My br[o]ther c[o]mes h[o]me for l[u]nch.', 'The b[u]s was f[u]ll on M[o]nday.',
             'I l[o]ve this c[ou]ntry.', 'How m[u]ch m[o]ney do you have?'] },
  'ɑː': { sp: [['ar', 'c[ar] · p[ar]k · st[ar]t · h[ar]d · f[ar]m'],
               ['a (giọng Anh)', 'f[a]ther · [a]fter · cl[a]ss · [a]sk · gl[a]ss'],
               ['al / au', 'c[al]m · p[al]m · h[al]f · [au]nt · l[au]gh']],
          s: ['My f[a]ther p[ar]ked the c[ar].', 'The cl[a]ss st[ar]ts [a]fter lunch.',
              'My [au]nt l[au]ghs a lot.', 'It’s h[ar]d to walk that f[ar].'] },
  'eɪ': { sp: [['a_e', 'n[a]m[e] · l[a]te · m[a]ke · t[a]ke'],
               ['ai', 'r[ai]n · tr[ai]n · w[ai]t · p[ai]nt'],
               ['ay', 'd[ay] · s[ay] · pl[ay] · aw[ay]'],
               ['ei / ey', '[ei]ght · th[ey] · gr[ey] · n[ei]ghbour']],
          s: ['W[ai]t for the tr[ai]n in the r[ai]n.', 'Th[ey] pl[ay] every d[ay].',
              'M[a]ke a c[a]ke for J[a]ne.', 'The pl[a]ne [i]s l[a]te tod[ay].'] },
  'aɪ': { sp: [['i_e', 't[i]m[e] · l[i]ke · n[i]ce · wr[i]te'],
               ['y', 'm[y] · wh[y] · tr[y] · sk[y] · fl[y]'],
               ['igh', 'n[igh]t · l[igh]t · r[igh]t · h[igh]'],
               ['ie', 'p[ie] · t[ie] · fr[ie]d']],
          s: ['Wh[y] don’t you tr[y] it?', 'The sk[y] [i]s br[igh]t ton[igh]t.',
              'I l[i]ke r[i]ding my b[i]ke.', 'Wr[i]te the t[i]me on the r[igh]t.'] },
  'ɔɪ': { sp: [['oi', 'c[oi]n · n[oi]se · p[oi]nt · v[oi]ce · ch[oi]ce'],
               ['oy', 'b[oy] · t[oy] · enj[oy] · empl[oy]']],
          s: ['The b[oy] dropped a c[oi]n.', 'Make a ch[oi]ce and speak in a clear v[oi]ce.',
              'The t[oy] makes a loud n[oi]se.', 'J[oi]n us — you’ll enj[oy] it.'] },
  'aʊ': { sp: [['ou', 'h[ou]se · [ou]t · ab[ou]t · s[ou]th · m[ou]th'],
               ['ow', 'n[ow] · h[ow] · d[ow]n · br[ow]n · t[ow]n']],
          s: ['H[ow] ab[ou]t a walk ar[ou]nd t[ow]n?', 'The br[ow]n cow [i]s [ou]tside the h[ou]se.',
              'Sit d[ow]n n[ow], please.', 'I f[ou]nd a m[ou]se in the h[ou]se.'] },
  'əʊ': { sp: [['o_e', 'h[o]m[e] · n[o]se · th[o]se · h[o]pe'],
               ['oa', 'b[oa]t · r[oa]d · c[oa]t · s[oa]p'],
               ['ow', 'sn[ow] · kn[ow] · wind[ow] · yell[ow]'],
               ['o', 'g[o] · n[o] · s[o] · [o]pen · [o]ld']],
          s: ['I kn[o]w the r[oa]d h[o]me.', '[O]pen the wind[ow], it’s c[o]ld.',
              'Th[o]se [o]ld c[oa]ts are mine.', 'G[o] sl[ow]ly on this r[oa]d.'] },
  'ɪə': { sp: [['eer', 'b[eer] · ch[eer] · d[eer]'],
               ['ear', 'y[ear] · h[ear] · n[ear] · cl[ear]'],
               ['ere / ier', 'h[ere] · w[e’re] · p[ier] · f[ier]ce']],
          s: ['We’re h[ere], n[ear] the p[ier].', 'I can h[ear] you cl[ear]ly.',
              'Last y[ear] I drank no b[eer].', 'The d[eer] came n[ear] the house.'] },
  'eə': { sp: [['air', 'h[air] · ch[air] · f[air] · p[air]'],
               ['are', 'c[are] · sh[are] · squ[are] · st[are]'],
               ['ear / ere', 'b[ear] · p[ear] · w[ear] · th[ere] · wh[ere]']],
          s: ['Wh[ere] [i]s the ch[air]?', 'Be c[are]ful with your h[air].',
              'Th[ere] are two p[air]s over th[ere].', 'W[ear] the squ[are] scarf.'] },
  'ʊə': { sp: [['ure', 's[ure] · p[ure] · c[ure]'],
               ['our / oor', 't[our] · t[our]ist · p[oor]'],
               ['u + r', 'Eur[o]pe · d[u]ring · rur[a]l']],
          s: ['Are you s[ure] the water [i]s p[ure]?', 'The t[our] of Eur[o]pe starts in May.',
              'P[oor] Tom lost his t[our] ticket.', 'There’s no c[ure] — I’m s[ure].'] },
  'p': { sp: [['p', '[p]en · [p]ark · to[p] · sto[p] · [p]lay'],
              ['pp', 'ha[pp]y · a[pp]le · sho[pp]ing'],
              ['p câm', 'receipt · psychology (không đọc p)']],
         s: ['[P]lease [p]ut the [p]aper in my [p]ocket.', '[P]eter sto[pp]ed at the sho[p].',
             'A [p]iece of a[pp]le [p]ie.', 'Ha[pp]y [p]eo[p]le [p]lay in the [p]ark.'] },
  'b': { sp: [['b', '[b]ag · [b]ook · [b]lue · jo[b]'],
              ['bb', 'ru[bb]er · ra[bb]it · ho[bb]y'],
              ['b câm sau m', 'clim[b] · lam[b] · thum[b]']],
         s: ['[B]ob [b]ought a [b]ig [b]lue [b]ag.', 'The ra[bb]it [i]s under the [b]ed.',
             'Clim[b] down and [b]ring the [b]all.', '[B]e [b]ack [b]efore [b]reakfast.'] },
  't': { sp: [['t', '[t]ea · [t]ime · ea[t] · s[t]op'],
              ['tt', 'bu[tt]er · le[tt]er · bo[tt]le'],
              ['-ed sau âm vô thanh', 'work[ed] · stopp[ed] · wash[ed] · watch[ed]']],
         s: ['[T]om [t]ook [t]wo [t]ickets.', 'I watch[ed] TV and s[t]opp[ed] a[t] [t]en.',
             'Bu[tt]er, bu[tt]ons and a le[tt]er.', 'I[t]’s [t]oo la[t]e [t]o s[t]ar[t].'] },
  'd': { sp: [['d', '[d]oor · [d]ay · re[d] · col[d]'],
              ['dd', 'a[dd] · su[dd]en · mi[dd]le'],
              ['-ed sau âm hữu thanh', 'play[ed] · call[ed] · open[ed] · clean[ed]']],
         s: ['[D]ad [d]rove [d]own the roa[d].', 'She call[ed] an[d] open[ed] the [d]oor.',
             'A[dd] two an[d] three.', 'I [d]i[d]n’t un[d]erstan[d].'] },
  'k': { sp: [['c', '[c]at · [c]ome · [c]ar · [c]old'],
              ['k / ck', '[k]ey · [k]ind · boo[k] · ba[ck] · si[ck]'],
              ['ch', 's[ch]ool · [ch]emist · a[ch]e'],
              ['qu = /kw/', '[q]uick · [q]ueen · [q]uestion']],
         s: ['[C]an you [c]ome [q]uickly?', 'The [k]ids [k]ick[ed] the ba[ck] door.',
             'I too[k] a boo[k] to s[ch]ool.', '[C]offee or [c]ake?'] },
  'ɡ': { sp: [['g', '[g]o · [g]ive · bi[g] · [g]reen'],
              ['gg', 'e[gg] · bi[gg]er · su[gg]est'],
              ['gu / gh', '[gu]ess · [gu]itar · [gh]ost']],
         s: ['[G]ive the [g]irl a bi[g] e[gg].', 'I [gu]ess he for[g]ot his [gu]itar.',
             '[G]o and [g]et the [g]reen ba[g].', 'The do[g] be[g]an to di[g].'] },
  'f': { sp: [['f / ff', '[f]ish · [f]ive · o[ff] · co[ff]ee'],
              ['ph', '[ph]one · [ph]oto · [ph]ysics'],
              ['gh', 'lau[gh] · enou[gh] · cou[gh]']],
         s: ['My [f]riend [f]ound a [f]ree [ph]one.', 'Co[ff]ee [f]or [f]our, please.',
             'That’s enou[gh] — it’s not [f]unny.', 'I lau[gh]ed at the [ph]oto.'] },
  'v': { sp: [['v', '[v]ery · [v]illage · ne[v]er · se[v]en'],
              ['-ve cuối từ', 'gi[v]e · li[v]e · ha[v]e · lo[v]e'],
              ['f trong "of"', 'o[f] (đọc /ɒv/)']],
         s: ['Da[v]id li[v]es in a [v]illage.', 'Gi[v]e me fi[v]e minutes.',
             'I’[v]e ne[v]er dri[v]en a [v]an.', 'We ha[v]e se[v]en [v]isitors.'] },
  'θ': { sp: [['th đầu từ (từ nội dung)', '[th]ink · [th]ank · [th]ree · [th]in'],
              ['th giữa / cuối từ', 'some[th]ing · mon[th] · bo[th] · tee[th] · ba[th]'],
              ['Mẹo', 'th trong từ nội dung (think, birthday) = /θ/ vô thanh']],
         s: ['I [th]ink it’s [th]irty-[th]ree.', 'My bir[th]day [i]s on [Th]ursday.',
             'Bo[th] mon[th]s were warm.', 'Brush your tee[th] in the ba[th]room.'] },
  'ð': { sp: [['th trong từ chức năng', '[th]e · [th]is · [th]at · [th]ey · [th]en · [th]an'],
              ['th giữa từ', 'mo[th]er · fa[th]er · bro[th]er · o[th]er · wea[th]er'],
              ['-the / with', 'brea[th]e · ba[th]e · wi[th]']],
         s: ['[Th]is [i]s my mo[th]er and [th]at’s my fa[th]er.',
             '[Th]ey live toge[th]er wi[th] [th]eir bro[th]er.',
             '[Th]e wea[th]er [i]s better [th]an yesterday.', 'Put [th]ose [th]ere, not [th]ese.'] },
  's': { sp: [['s / ss', '[s]ee · [s]un · bu[s] · gla[ss] · mi[ss]'],
              ['c trước e, i, y', '[c]ity · [c]entre · ri[c]e · pla[c]e'],
              ['sc / x = /ks/', '[sc]ience · bo[x] · si[x]']],
         s: ['[S]ix [s]mall [s]andwiches.', '[S]am [s]ells [s]weets in the [c]ity.',
             'The pri[c]e of ri[c]e in[c]reased.', 'Thi[s] bu[s] [s]tops at the [s]tation.'] },
  'z': { sp: [['z / zz', '[z]oo · [z]ero · cra[z]y · bu[zz]'],
              ['s giữa hai nguyên âm', 'mu[s]ic · plea[s]e · no[s]e · choo[s]e'],
              ['-s sau âm hữu thanh', 'dog[s] · boy[s] · car[s] · i[s] · ha[s]']],
         s: ['The[s]e dog[s] are cra[z]y.', 'Plea[s]e clo[s]e your eye[s].',
             'Mu[s]ic i[s] alway[s] on.', 'He ha[s] two [z]ebra[s].'] },
  'ʃ': { sp: [['sh', '[sh]op · [sh]e · fi[sh] · wa[sh]'],
              ['-tion / -ssion', 'sta[ti]on · na[ti]on · informa[ti]on · mi[ssi]on'],
              ['ci / su / s', 'deli[ci]ous · spe[ci]al · [s]ugar · [s]ure'],
              ['ch (từ mượn)', 'ma[ch]ine · [ch]ef']],
         s: ['[Sh]e wa[sh]es the fi[sh].', 'The sta[ti]on has two [sh]ops.',
             'This cake [i]s deli[ci]ous and spe[ci]al.', '[Sh]ut the [sh]op, I’m [s]ure.'] },
  'ʒ': { sp: [['-sion / -sure', 'televi[si]on · deci[si]on · mea[su]re · plea[su]re'],
              ['su / s', 'u[su]ally · vi[s]ion'],
              ['g (từ mượn tiếng Pháp)', 'gara[g]e · bei[g]e']],
         s: ['It’s a plea[su]re to mea[su]re it.', 'I u[su]ally watch televi[si]on.',
             'She made a deci[si]on about the gara[g]e.', 'The bei[g]e car [i]s in the gara[g]e.'] },
  'tʃ': { sp: [['ch', '[ch]air · [ch]eese · tea[ch] · mu[ch]'],
               ['tch', 'wa[tch] · ma[tch] · ki[tch]en · ca[tch]'],
               ['-ture', 'pic[tu]re · fu[tu]re · na[tu]re']],
          s: ['[Ch]eese sandwi[ch]es for lun[ch].', 'Wa[tch] the ma[tch] in the ki[tch]en.',
              'Take a pic[tu]re of the [ch]ildren.', 'I tea[ch] [Ch]inese.'] },
  'dʒ': { sp: [['j', '[j]ob · [j]uice · [J]une · [j]oin'],
               ['g trước e, i, y', '[g]ym · lar[g]e · chan[g]e · pa[g]e'],
               ['dge', 'bri[dge] · fri[dge] · ju[dge]']],
          s: ['[J]ane has a new [j]ob in [J]uly.', 'Put the oran[g]e [j]uice in the fri[dge].',
              'The [j]udge lives near the bri[dge].', 'There’s a lar[g]e chan[g]e on this pa[g]e.'] },
  'm': { sp: [['m / mm', '[m]an · [m]ilk · ti[m]e · su[mm]er · swi[mm]ing'],
              ['mb (b câm)', 'cli[mb] · la[mb] · thu[mb]'],
              ['mn (n câm)', 'autu[mn]']],
         s: ['[M]y [m]other [m]akes [m]eals in the [m]orning.', 'Su[mm]er [m]eans swi[mm]ing.',
             'The la[mb] cli[mb]ed the hill.', 'Re[m]e[mb]er to co[m]e at [m]idday.'] },
  'n': { sp: [['n / nn', '[n]ame · [n]ine · su[n] · di[nn]er · su[nn]y'],
              ['kn (k câm)', '[kn]ow · [kn]ife · [kn]ee · [kn]ock'],
              ['gn (g câm)', 'sig[n] · desig[n]']],
         s: ['[N]ine [n]ew [n]ames.', 'I k[n]ow her [n]ame.',
             'Di[nn]er [i]s at [n]i[n]e.', '[N]obody k[n]ows the a[n]swer.'] },
  'ŋ': { sp: [['-ng', 'si[ng] · lo[ng] · thi[ng] · you[ng] · bri[ng]'],
              ['n trước k / g', 'thi[n]k · ba[n]k · E[n]glish · fi[n]ger'],
              ['-ing', 'walk[ing] · read[ing] · morn[ing]']],
         s: ['I’m thi[n]ki[ng] of si[ng]i[ng].', 'The you[ng] ki[ng] [i]s stro[ng].',
             'Bri[ng] everythi[ng] to the ba[n]k.', 'E[n]glish has many -i[ng] words.'] },
  'h': { sp: [['h', '[h]ouse · [h]appy · [h]ot · be[h]ind'],
              ['wh trong who', '[wh]o · [wh]ose · [wh]ole'],
              ['h câm', 'hour · honest (không đọc h)']],
         s: ['[H]ow [h]appy [h]e [i]s!', '[H]old my [h]and and [h]urry.',
             '[Wh]o [h]as my [h]at?', '[H]er [h]usband [h]elps at [h]ome.'] },
  'l': { sp: [['l đầu từ', '[l]ight · [l]ate · [l]ook · [l]ive'],
              ['-l / -ll cuối từ', 'ca[ll] · we[ll] · sma[ll] · schoo[l]'],
              ['l câm', 'ha[l]f · wa[l]k · cou[l]d · ta[l]k']],
         s: ['He[ll]o! I [l]ive [l]ocal[l]y.', '[L]ook at the [l]ittle [l]ight.',
             'Ca[ll] me [l]ater, p[l]ease.', 'A [l]ot of peop[l]e [l]ike [l]unch.'] },
  'r': { sp: [['r', '[r]ed · [r]ight · [r]oad · [r]oom · [r]un'],
              ['rr', 'so[rr]y · fe[rr]y · a[rr]ive · tomo[rr]ow'],
              ['wr (w câm)', '[wr]ite · [wr]ong · [wr]ist · [wr]ap'],
              ['Lưu ý giọng Anh', 'car, park: chữ r cuối không đọc thành âm /r/']],
         s: ['[R]ead the [r]ed book in my [r]oom.', '[R]ita [r]ides a [r]ed bike.',
             'The fe[rr]y a[rr]ives at th[r]ee.', 'I’m so[rr]y about the [wr]ong add[r]ess.',
             '[Wr]ite your name on the [wr]apper.'] },
  'w': { sp: [['w', '[w]e · [w]ater · [w]indow · [w]ork'],
              ['wh', '[wh]at · [wh]en · [wh]ere · [wh]ite'],
              ['u sau q / g', 'q[u]een · q[u]ick · lang[u]age']],
         s: ['[W]e [w]ant [w]arm [w]ater.', '[Wh]en [w]ill you [w]ash the [w]indows?',
             '[Wh]ich [w]ay to the [w]est?', 'The q[u]een [w]ore [wh]ite.'] },
  'j': { sp: [['y đầu từ', '[y]es · [y]ou · [y]ear · [y]ellow'],
              ['u / eu = /juː/', '[u]niversity · [u]se · [Eu]rope · b[eau]tiful'],
              ['i giữa từ', 'on[i]on · mill[i]on · fam[i]liar']],
         s: ['[Y]es, [y]ou may [u]se my [y]ellow bike.', '[Y]oung people study in [Eu]rope.',
             'I saw a mill[i]on [y]ellow flowers.', '[Y]esterday was a b[eau]tiful day.'] }
};
const LINK_RULES = [
  { id: 'cv', icon: '🔗', title: 'Phụ âm + nguyên âm',
    sub: 'Phụ âm cuối "nhảy" sang từ sau', short: 'turn‿off → tur‿noff',
    how: 'Khi từ trước kết thúc bằng phụ âm và từ sau bắt đầu bằng nguyên âm, phụ âm cuối được đọc như thể nó là phụ âm đầu của từ sau. Hai từ nghe như một từ dài.',
    when: 'Từ trước tận cùng bằng âm phụ âm (n, t, k, m, s, v…) — từ sau mở đầu bằng âm nguyên âm (a, e, i, o, u…).',
    mistake: 'Người Việt hay ngắt từng từ ("tơn. óp") hoặc nuốt mất phụ âm cuối ("tơ óp"). Phải giữ phụ âm cuối nhưng chuyển nó sang từ sau.',
    tip: 'Đọc chậm theo dòng "Nghe như": tur – noff, rồi nhanh dần đến khi thành một từ.',
    ex: [
      ['turn off', 'turn‿off', '/tɜː ˈnɒf/', 'tắt (máy, đèn)', '', 'tur‿noff'],
      ['pick it up', 'pick‿it‿up', '/pɪ kɪ ˈtʌp/', 'nhặt nó lên', '', 'pi‿ki‿tup'],
      ['an apple', 'an‿apple', '/ə ˈnæpl/', 'một quả táo', '', 'a‿napple'],
      ['look at', 'look‿at', '/lʊ ˈkæt/', 'nhìn vào', '', 'loo‿kat'],
      ['get up', 'get‿up', '/ɡe ˈtʌp/', 'thức dậy', '', 'ge‿tup'],
      ['come in', 'come‿in', '/kʌ ˈmɪn/', 'mời vào', '', 'cu‿min'],
      ['half an hour', 'half‿an‿hour', '/hɑː fə ˈnaʊə/', 'nửa tiếng', '', 'haa‿fa‿nour'],
      ['Is it open?', 'Is‿it‿open?', '/ɪ zɪ ˈtəʊpən/', 'Nó có mở cửa không?', '', 'i‿zi‿topen?'],
      ['check it out', 'check‿it‿out', '/tʃe kɪ ˈtaʊt/', 'xem thử đi', '', 'che‿ki‿tout'],
      ['first of all', 'first‿of‿all', '/fɜːs tə ˈvɔːl/', 'trước hết', '', 'firs‿to‿vall']
    ],
    sent: [
      ['Can I have an egg?', 'Can‿I have‿an‿egg?', 'Cho tôi một quả trứng được không?'],
      ['Put it on the table.', 'Put‿it‿on the table.', 'Đặt nó lên bàn đi.'],
      ['Let\'s look at it again.', 'Let\'s look‿at‿it‿again.', 'Mình xem lại nó lần nữa nhé.']
    ] },
  { id: 'vv', icon: '〰️', title: 'Nguyên âm + nguyên âm',
    sub: 'Chèn nhẹ /w/, /j/ hoặc /r/', short: 'go‿out → go‿wout',
    how: 'Hai nguyên âm đứng sát nhau rất khó đọc liền, nên người bản xứ chèn một âm rất nhẹ ở giữa để nối hai từ cho trơn.',
    when: 'Sau /uː, əʊ, aʊ/ (môi tròn) → chèn /w/. Sau /iː, ɪ, eɪ, aɪ, ɔɪ/ (môi dẹt) → chèn /j/. Giọng Anh-Anh: chữ r cuối từ (far, where, more) được đọc lại thành /r/ khi từ sau bắt đầu bằng nguyên âm.',
    mistake: 'Dừng hẳn giữa hai từ ("gâu. ao") hoặc chèn âm quá mạnh thành một âm tiết riêng.',
    tip: 'Mẹo: môi đang tròn thì cứ giữ tròn sang từ sau — /w/ tự xuất hiện. Môi đang dẹt thì giữ dẹt — /j/ tự xuất hiện.',
    ex: [
      ['go out', 'go‿{w}‿out', '/ɡəʊ ˈwaʊt/', 'đi ra ngoài', 'sau /əʊ/ chèn /w/', 'go‿wout'],
      ['do it', 'do‿{w}‿it', '/duː wɪt/', 'làm đi', 'sau /uː/ chèn /w/', 'doo‿wit'],
      ['how are you', 'how‿{w}‿are you', '/haʊ wə ˈjuː/', 'bạn khoẻ không', 'sau /aʊ/ chèn /w/', 'how‿wa you'],
      ['two eggs', 'two‿{w}‿eggs', '/tuː ˈweɡz/', 'hai quả trứng', 'sau /uː/ chèn /w/', 'two‿weggs'],
      ['I am', 'I‿{j}‿am', '/aɪ jæm/', 'tôi là', 'sau /aɪ/ chèn /j/', 'I‿yam'],
      ['see it', 'see‿{j}‿it', '/siː jɪt/', 'thấy nó', 'sau /iː/ chèn /j/', 'see‿yit'],
      ['say it', 'say‿{j}‿it', '/seɪ jɪt/', 'nói đi', 'sau /eɪ/ chèn /j/', 'say‿yit'],
      ['she is', 'she‿{j}‿is', '/ʃiː jɪz/', 'cô ấy là', 'sau /iː/ chèn /j/', 'she‿yiz'],
      ['far away', 'far‿{r}‿away', '/fɑː rəˈweɪ/', 'xa xôi', 'giọng Anh: r cuối được đọc lại', 'faa‿raway'],
      ['where is', 'where‿{r}‿is', '/weə rɪz/', 'ở đâu', 'giọng Anh: r cuối được đọc lại', 'wair‿riz'],
      ['more and more', 'more‿{r}‿and more', '/mɔː rən ˈmɔː/', 'ngày càng nhiều', 'giọng Anh: r cuối được đọc lại', 'maw‿ran maw']
    ],
    sent: [
      ['I always go out on Fridays.', 'I‿{j}‿always go‿{w}‿out‿on Fridays.', 'Thứ Sáu nào tôi cũng đi chơi.'],
      ['Where are you now?', 'Where‿{r}‿are you now?', 'Giờ bạn đang ở đâu?'],
      ['Try it again.', 'Try‿{j}‿it‿again.', 'Thử lại lần nữa đi.']
    ] },
  { id: 'drop', icon: '✂️', title: 'Nuốt âm /t/, /d/',
    sub: '/t/ /d/ kẹt giữa hai phụ âm bị bỏ', short: 'last night → las night',
    how: 'Khi /t/ hoặc /d/ đứng giữa hai phụ âm (cuối từ trước và đầu từ sau), người bản xứ thường không bật âm đó ra. Chữ vẫn viết, nhưng tai chỉ nghe hai phụ âm còn lại.',
    when: 'Phụ âm + t/d ở cuối từ (st, nt, ft, ld, nd…) — từ sau bắt đầu bằng phụ âm.',
    mistake: 'Khi nghe, người học cố tìm âm /t/ nên tưởng mình nghe nhầm từ. Khi nói, cố bật mạnh /t/ làm câu bị cứng.',
    tip: 'Nếu từ sau bắt đầu bằng nguyên âm thì /t/ /d/ KHÔNG bị nuốt mà nối sang (first‿of‿all) — xem quy tắc 1.',
    ex: [
      ['next day', 'nex[t] day', '/neks ˈdeɪ/', 'ngày hôm sau', '', 'nex day'],
      ['last night', 'las[t] night', '/lɑːs ˈnaɪt/', 'tối qua', '', 'laas night'],
      ['must be', 'mus[t] be', '/ˈmʌs bi/', 'chắc hẳn là', '', 'mus be'],
      ['first time', 'firs[t] time', '/fɜːs ˈtaɪm/', 'lần đầu tiên', '', 'firs time'],
      ['old man', 'ol[d] man', '/əʊl ˈmæn/', 'ông lão', '', 'ole man'],
      ['I don\'t know', 'I don[\'t] know', '/aɪ dəʊn ˈnəʊ/', 'tôi không biết', '', 'I don know'],
      ['fish and chips', 'fish an[d] chips', '/fɪʃ ən ˈtʃɪps/', 'cá và khoai tây chiên', '"and" chỉ còn /ən/', 'fish ’n’ chips'],
      ['just now', 'jus[t] now', '/dʒʌs ˈnaʊ/', 'vừa nãy', '', 'jus now']
    ],
    sent: [
      ['I met him last night.', 'I met him las[t] night.', 'Tôi đã gặp anh ấy tối qua.'],
      ['We left the next day.', 'We lef[t] the nex[t] day.', 'Chúng tôi rời đi vào hôm sau.'],
      ['I don\'t know the answer.', 'I don[\'t] know the answer.', 'Tôi không biết câu trả lời.']
    ] },
  { id: 'change', icon: '🔀', title: 'Biến âm',
    sub: 'Hai âm gặp nhau đổi thành âm khác', short: 'did you → di‿ju',
    how: 'Một số cặp âm gặp nhau ở ranh giới hai từ sẽ hoà thành một âm mới. Hay gặp nhất là khi từ sau bắt đầu bằng âm /j/ (you, your, year).',
    when: 't + j → /tʃ/ · d + j → /dʒ/ · s + j → /ʃ/ · z + j → /ʒ/ · ngoài ra /n/ đứng trước /p, b, m/ thường thành /m/.',
    mistake: 'Nghe "did you" thành một từ lạ "đi-giu" rồi không hiểu. Thật ra đó vẫn là did + you.',
    tip: 'Khi nói nhanh, cứ để hai âm hoà vào nhau tự nhiên — không cần cố tách "did. you".',
    ex: [
      ['don\'t you', 'don\'t‿you', '/ˈdəʊn tʃu/', 'bạn không… à', 't + j → /tʃ/', 'don‿chu'],
      ['meet you', 'meet‿you', '/ˈmiː tʃu/', 'gặp bạn', 't + j → /tʃ/', 'mee‿chu'],
      ['last year', 'last‿year', '/lɑːs ˈtʃɪə/', 'năm ngoái', 't + j → /tʃ/', 'laas‿cheer'],
      ['did you', 'did‿you', '/ˈdɪ dʒu/', 'bạn đã… à', 'd + j → /dʒ/', 'di‿ju'],
      ['would you', 'would‿you', '/ˈwʊ dʒu/', 'bạn có… không', 'd + j → /dʒ/', 'woo‿ju'],
      ['miss you', 'miss‿you', '/ˈmɪ ʃu/', 'nhớ bạn', 's + j → /ʃ/', 'mi‿shu'],
      ['this year', 'this‿year', '/ðɪ ˈʃɪə/', 'năm nay', 's + j → /ʃ/', 'thi‿sheer'],
      ['as you know', 'as‿you know', '/ə ʒu ˈnəʊ/', 'như bạn biết', 'z + j → /ʒ/', 'a‿zhu know'],
      ['ten pounds', 'te[n]{m} pounds', '/tem ˈpaʊndz/', 'mười bảng Anh', '/n/ trước /p, b, m/ → /m/', 'tem pounds']
    ],
    sent: [
      ['Nice to meet you.', 'Nice to meet‿you.', 'Rất vui được gặp bạn.'],
      ['Did you get my message?', 'Did‿you get my message?', 'Bạn nhận được tin nhắn của tôi chưa?'],
      ['Would you like some tea?', 'Would‿you like some tea?', 'Bạn có muốn uống chút trà không?']
    ] },
  { id: 'same', icon: '🟰', title: 'Hai phụ âm giống nhau',
    sub: 'Chỉ đọc một lần, giữ hơi lâu hơn', short: 'bad dog → ba‿dog',
    how: 'Khi từ trước kết thúc và từ sau bắt đầu bằng cùng một phụ âm, chỉ đọc âm đó một lần nhưng giữ lâu hơn một chút, không bật ra hai lần.',
    when: 'Hai phụ âm giống hệt nhau gặp nhau: d‿d, k‿c, m‿m, s‿s, t‿t…',
    mistake: 'Đọc thành hai lần rõ ràng "bát. đóc" — nghe như hai từ rời, rất cứng.',
    tip: 'Ngậm âm lại một nhịp (như đang chuẩn bị nói) rồi mới bật ra cho từ sau.',
    ex: [
      ['bad dog', 'ba[d]‿dog', '/ˌbæˈdɒɡ/', 'con chó hư', 'một /d/ giữ lâu', 'ba‿dog'],
      ['black cat', 'bla[ck]‿cat', '/ˌblæˈkæt/', 'con mèo đen', 'một /k/ giữ lâu', 'bla‿cat'],
      ['some money', 'so[me]‿money', '/sʌˈmʌni/', 'một ít tiền', 'một /m/ giữ lâu', 'su‿money'],
      ['big girl', 'bi[g]‿girl', '/ˌbɪˈɡɜːl/', 'cô bé lớn', 'một /ɡ/ giữ lâu', 'bi‿girl'],
      ['bus stop', 'bu[s]‿stop', '/ˈbʌstɒp/', 'trạm xe buýt', 'một /s/ giữ lâu', 'bu‿stop'],
      ['good day', 'goo[d]‿day', '/ˌɡʊˈdeɪ/', 'ngày tốt lành', 'một /d/ giữ lâu', 'goo‿day'],
      ['hot tea', 'ho[t]‿tea', '/ˌhɒˈtiː/', 'trà nóng', 'một /t/ giữ lâu', 'ho‿tea'],
      ['with them', 'wi[th]‿them', '/wɪˈðem/', 'với họ', 'một /ð/ giữ lâu', 'wi‿them']
    ],
    sent: [
      ['Stop playing now.', 'Sto[p]‿playing now.', 'Thôi đừng chơi nữa.'],
      ['We had dinner at nine.', 'We ha[d]‿dinner‿at nine.', 'Chúng tôi ăn tối lúc chín giờ.'],
      ['Wait at the bus stop.', 'Wait‿at the bu[s]‿stop.', 'Hãy chờ ở trạm xe buýt.']
    ] },
  { id: 'weak', icon: '🔉', title: 'Dạng yếu của từ nhỏ',
    sub: 'to, of, and, can… đọc thật nhẹ', short: 'a cup of tea → a cu‿pə tea',
    how: 'Các từ chức năng (giới từ, mạo từ, trợ động từ, liên từ) không mang nghĩa chính nên được đọc rất nhanh và nhẹ, nguyên âm thường biến thành /ə/. Chúng dính vào từ đứng cạnh và là nơi nối âm xảy ra nhiều nhất.',
    when: 'to → /tə/ · of → /əv/ · and → /ən/ · can → /kən/ · for → /fə/ · at → /ət/ · was → /wəz/ · them → /ðəm/ · do → /də/ · you → /jə/',
    mistake: 'Đọc to, rõ từng từ nhỏ ("ai. kan. suym") làm câu nghe như robot và người nghe khó bắt được từ chính.',
    tip: 'Nhấn vào từ mang nghĩa (danh từ, động từ chính, tính từ), còn từ nhỏ lướt qua thật nhanh.',
    ex: [
      ['I want to go', 'I want to go', '/aɪ ˈwɒnt tə ˈɡəʊ/', 'tôi muốn đi', 'to → /tə/', 'I want tə go'],
      ['a cup of tea', 'a cup‿of tea', '/ə ˈkʌ pəv ˈtiː/', 'một tách trà', 'of → /əv/', 'a cu‿pə tea'],
      ['I can swim', 'I can swim', '/aɪ kən ˈswɪm/', 'tôi biết bơi', 'can → /kən/', 'I kən swim'],
      ['you and me', 'you an[d] me', '/ˈjuː ən ˈmiː/', 'bạn và tôi', 'and → /ən/', 'you ’n’ me'],
      ['It\'s for you', 'It\'s for you', '/ɪts fə ˈjuː/', 'cái này cho bạn', 'for → /fə/', 'its fə you'],
      ['Look at me', 'Look‿at me', '/ˈlʊ kət ˈmiː/', 'nhìn tôi này', 'at → /ət/', 'loo‿kət me'],
      ['He was late', 'He was late', '/hi wəz ˈleɪt/', 'anh ấy đã đến muộn', 'was → /wəz/', 'he wəz late'],
      ['Tell them', 'Tell them', '/ˈtel ðəm/', 'nói với họ', 'them → /ðəm/', 'tell thəm'],
      ['What do you think?', 'What do you think?', '/ˈwɒt də jə ˈθɪŋk/', 'bạn nghĩ sao?', 'do → /də/, you → /jə/', 'wot də yə think?']
    ],
    sent: [
      ['I\'d like a cup of coffee.', 'I\'d like‿a cup‿of coffee.', 'Tôi muốn một tách cà phê.'],
      ['Give it to them.', 'Give‿it to them.', 'Đưa nó cho họ.'],
      ['She can come at six.', 'She can come‿at six.', 'Cô ấy có thể đến lúc sáu giờ.']
    ] }
];
const GX_Q = {"present-simple": [["She ___ to work by bus every day.", "goes", [["go", "Chủ ngữ she là ngôi thứ ba số ít nên động từ phải thêm -s/-es, không để nguyên mẫu."], ["going", "V-ing không đứng một mình làm động từ chính; thiếu am/is/are."]], "Thói quen hằng ngày dùng hiện tại đơn; she + V-es: go → goes.", "Cô ấy đi làm bằng xe buýt mỗi ngày."], ["My parents ___ meat.", "don't eat", [["doesn't eat", "Chủ ngữ my parents là số nhiều nên dùng don't, không dùng doesn't."], ["don't eats", "Sau don't động từ giữ nguyên mẫu, không thêm -s."]], "Phủ định hiện tại đơn với chủ ngữ số nhiều: don't + V nguyên mẫu.", "Bố mẹ tôi không ăn thịt."], ["___ your brother live in Hanoi?", "Does", [["Do", "Chủ ngữ your brother là ngôi thứ ba số ít nên dùng Does."], ["Is", "Live là động từ thường, câu hỏi cần trợ động từ do/does, không dùng to be."]], "Câu hỏi hiện tại đơn: Does + chủ ngữ số ít + V nguyên mẫu?", "Anh trai bạn có sống ở Hà Nội không?"]], "present-continuous": [["Be quiet! The baby ___.", "is sleeping", [["sleeps", "Hành động đang diễn ra ngay lúc nói nên dùng tiếp diễn, không dùng hiện tại đơn."], ["sleeping", "Thiếu to be: phải có is trước V-ing."]], "Đang xảy ra lúc nói (Be quiet!): am/is/are + V-ing.", "Im lặng nào! Em bé đang ngủ."], ["They ___ football in the park now.", "are playing", [["is playing", "Chủ ngữ they số nhiều nên dùng are."], ["are play", "Sau are phải là V-ing, không phải nguyên mẫu."]], "Now là dấu hiệu hiện tại tiếp diễn; they + are + V-ing.", "Bây giờ họ đang chơi bóng đá trong công viên."], ["What ___ you doing at the moment?", "are", [["do", "Câu có doing (V-ing) nên trợ động từ là are, không phải do."], ["is", "Chủ ngữ you đi với are."]], "Câu hỏi tiếp diễn: Wh- + am/is/are + chủ ngữ + V-ing?", "Lúc này bạn đang làm gì?"]], "past-be": [["I ___ very tired last night.", "was", [["were", "Chủ ngữ I đi với was, không dùng were (trừ câu điều kiện)."], ["am", "Last night là quá khứ nên phải dùng was."]], "Quá khứ của be: I/he/she/it + was.", "Tối qua tôi rất mệt."], ["___ you at home yesterday afternoon?", "Were", [["Was", "Chủ ngữ you luôn đi với were."], ["Did", "Câu có be (ở nhà) nên đảo were lên, không dùng did."]], "Câu hỏi với be ở quá khứ: Were + you + …?", "Chiều hôm qua bạn có ở nhà không?"], ["The shops ___ open on Sunday.", "weren't", [["wasn't", "The shops là số nhiều nên dùng weren't."], ["didn't", "Open ở đây là tính từ đi với be, nên phủ định là weren't, không dùng didn't."]], "Phủ định be ở quá khứ với chủ ngữ số nhiều: weren't.", "Chủ nhật các cửa hàng không mở cửa."]], "be-present": [["My sister ___ a nurse.", "is", [["are", "My sister là số ít nên dùng is."], ["am", "Am chỉ đi với I."]], "He/she/it/danh từ số ít + is.", "Chị tôi là y tá."], ["We ___ from Da Nang.", "are", [["is", "We là số nhiều nên dùng are."], ["be", "Be phải chia theo chủ ngữ, không để nguyên dạng be."]], "We/you/they + are.", "Chúng tôi đến từ Đà Nẵng."], ["I ___ hungry, thank you.", "'m not|am not", [["isn't", "I đi với am: I'm not / I am not."], ["don't", "Hungry là tính từ đi với be, nên phủ định là am not, không dùng don't."]], "Phủ định của be: I am not = I'm not.", "Tôi không đói, cảm ơn."]], "howto-greet": [["Nice to ___ you.", "meet", [["meeting", "Sau to dùng động từ nguyên mẫu: to meet."], ["met", "Câu chào khi gặp lần đầu dùng nguyên mẫu meet."]], "Câu chào cố định khi mới quen: Nice to meet you.", "Rất vui được gặp bạn."], ["Hi, ___ Lan. I work in marketing.", "I'm", [["my name", "Thiếu động từ: phải là My name is Lan."], ["I", "Thiếu to be: I am / I'm Lan."]], "Giới thiệu tên: I'm + tên.", "Chào, mình là Lan. Mình làm ở bộ phận marketing."], ["This ___ my colleague, Nam.", "is", [["are", "This (một người) đi với is."], ["he", "Giới thiệu người khác dùng This is…, không dùng he."]], "Giới thiệu người khác: This is + tên.", "Đây là đồng nghiệp của tôi, Nam."]], "howto-personal": [["___ is your phone number?", "What", [["How", "Hỏi số điện thoại dùng What, không dùng How."], ["Which", "Which dùng khi chọn trong vài thứ đã biết."]], "Hỏi thông tin cá nhân (tên, số điện thoại, địa chỉ): What is your …?", "Số điện thoại của bạn là gì?"], ["I ___ 25 years old.", "am", [["have", "Nói tuổi trong tiếng Anh dùng be, không dùng have."], ["is", "Chủ ngữ I đi với am."]], "Nói tuổi: I am + số + years old.", "Tôi 25 tuổi."], ["Where ___ you from?", "are", [["do", "Be from là cấu trúc với to be, nên dùng are."], ["is", "Chủ ngữ you đi với are."]], "Hỏi quê quán: Where are you from?", "Bạn đến từ đâu?"]], "pronouns": [["My mother helps ___ every day.", "me", [["I", "Sau động từ (helps) dùng đại từ tân ngữ me, không dùng I."], ["my", "My là tính từ sở hữu, phải đi kèm danh từ."]], "Vị trí tân ngữ (sau động từ) dùng me, you, him, her, us, them.", "Mẹ tôi giúp tôi mỗi ngày."], ["This isn't my bag. It's ___.", "hers", [["her", "Her phải đi với danh từ (her bag); đứng một mình dùng hers."], ["she", "She là đại từ chủ ngữ, không dùng để chỉ sở hữu."]], "Đại từ sở hữu đứng một mình: mine, yours, his, hers, ours, theirs.", "Đây không phải túi của tôi. Nó là của cô ấy."], ["___ car is red.", "Their", [["They", "They là đại từ chủ ngữ; trước danh từ cần tính từ sở hữu."], ["Theirs", "Theirs đứng một mình, không đặt trước danh từ."]], "Tính từ sở hữu + danh từ: their car.", "Xe của họ màu đỏ."]], "plural": [["I bought three ___ yesterday.", "books", [["book", "Sau số đếm lớn hơn một, danh từ phải ở số nhiều."], ["bookes", "Book chỉ thêm -s, không thêm -es."]], "Số nhiều thông thường: thêm -s.", "Hôm qua tôi mua ba cuốn sách."], ["The ___ are playing in the garden.", "children", [["childs", "Child là danh từ bất quy tắc: số nhiều là children."], ["child", "Động từ are cho thấy chủ ngữ số nhiều."]], "Child → children (số nhiều bất quy tắc).", "Bọn trẻ đang chơi trong vườn."], ["There are two ___ on the table.", "boxes", [["boxs", "Danh từ tận cùng -x thêm -es."], ["box", "Sau two cần danh từ số nhiều."]], "Danh từ tận cùng s, x, ch, sh thêm -es.", "Có hai cái hộp trên bàn."]], "nouns": [["I need ___ water.", "some", [["a", "Water là danh từ không đếm được, không dùng a."], ["many", "Many chỉ dùng với danh từ đếm được số nhiều."]], "Some dùng với danh từ không đếm được trong câu khẳng định.", "Tôi cần ít nước."], ["She gave me some good ___.", "advice", [["advices", "Advice không đếm được nên không thêm -s."], ["an advice", "Không dùng a/an với advice."]], "Advice là danh từ không đếm được.", "Cô ấy cho tôi vài lời khuyên hay."], ["How ___ money do you have?", "much", [["many", "Money không đếm được nên hỏi bằng How much."], ["lot", "Hỏi số lượng dùng How much / How many."]], "How much + danh từ không đếm được.", "Bạn có bao nhiêu tiền?"]], "articles": [["I saw ___ elephant at the zoo.", "an", [["a", "Elephant bắt đầu bằng âm nguyên âm /e/ nên dùng an."], ["the", "Lần đầu nhắc đến con voi nên dùng a/an, chưa dùng the."]], "An trước âm nguyên âm; nhắc lần đầu dùng a/an.", "Tôi thấy một con voi ở sở thú."], ["My father is ___ teacher.", "a", [["an", "Teacher bắt đầu bằng phụ âm /t/ nên dùng a."], ["—", "Nói nghề nghiệp với danh từ đếm được số ít cần có a/an."]], "Nghề nghiệp: be + a/an + danh từ.", "Bố tôi là giáo viên."], ["___ sun rises in the east.", "The", [["A", "Chỉ có một mặt trời nên dùng the."], ["An", "Sun bắt đầu bằng phụ âm, và đây là vật duy nhất nên dùng the."]], "Vật duy nhất (the sun, the moon) dùng the.", "Mặt trời mọc ở hướng đông."]], "demonstratives": [["___ shoes are too small for me.", "These", [["This", "Shoes là số nhiều nên dùng these, không dùng this."], ["That", "That chỉ dùng với số ít."]], "These/those + danh từ số nhiều.", "Đôi giày này quá nhỏ với tôi."], ["Look at ___ bird over there!", "that", [["this", "Over there (ở đằng kia) chỉ vật ở xa nên dùng that."], ["those", "Bird là số ít nên không dùng those."]], "That: số ít, ở xa người nói.", "Nhìn con chim đằng kia kìa!"], ["Are ___ your keys on the table over there?", "those", [["these", "On the table over there là ở xa nên dùng those."], ["that", "Keys là số nhiều nên không dùng that."]], "Those: số nhiều, ở xa.", "Mấy cái chìa khóa trên bàn đằng kia có phải của bạn không?"]], "thereis": [["There ___ a cat under the table.", "is", [["are", "A cat là số ít nên dùng there is."], ["have", "'Có' (tồn tại) dịch là there is, không dùng have."]], "There is + danh từ số ít.", "Có một con mèo dưới gầm bàn."], ["There ___ many people at the party last night.", "were", [["was", "Many people là số nhiều nên dùng were."], ["had", "Không dùng there had để nói 'có'."]], "There were + danh từ số nhiều (quá khứ: last night).", "Tối qua có nhiều người ở bữa tiệc."], ["___ there a pharmacy near here?", "Is", [["Are", "A pharmacy là số ít nên dùng Is there."], ["Do", "Câu hỏi với there is: đảo is lên đầu, không dùng do."]], "Câu hỏi: Is there + danh từ số ít?", "Gần đây có hiệu thuốc nào không?"]], "prepositions": [["The class starts ___ 7 o'clock.", "at", [["in", "Giờ cụ thể dùng at."], ["on", "On dùng với ngày, không dùng với giờ."]], "At + giờ (at 7 o'clock).", "Lớp học bắt đầu lúc 7 giờ."], ["My birthday is ___ May.", "in", [["on", "Tháng dùng in; on dùng với ngày cụ thể."], ["at", "At không dùng với tháng."]], "In + tháng / năm / mùa.", "Sinh nhật tôi vào tháng Năm."], ["I'll see you ___ Monday.", "on", [["in", "Thứ trong tuần dùng on."], ["at", "At dùng với giờ, không dùng với thứ."]], "On + thứ / ngày cụ thể.", "Hẹn gặp bạn vào thứ Hai."]], "howto-time": [["It's half ___ seven.", "past", [["to", "Half past = rưỡi; half to không dùng."], ["after", "Cách nói chuẩn là half past."]], "Half past seven = 7 giờ 30.", "Bảy giờ rưỡi rồi."], ["I get up ___ six every day.", "at", [["in", "Giờ cụ thể dùng at."], ["on", "On dùng với ngày."]], "At + giờ.", "Tôi dậy lúc sáu giờ mỗi ngày."], ["What time ___ it?", "is", [["are", "Hỏi giờ: What time is it?"], ["does", "Câu dùng be, không dùng does."]], "Câu hỏi giờ cố định: What time is it?", "Mấy giờ rồi?"]], "howto-family": [["I ___ two sisters.", "have", [["has", "Chủ ngữ I đi với have, không dùng has."], ["am", "Nói 'có' anh chị em dùng have, không dùng be."]], "I/you/we/they + have.", "Tôi có hai chị em gái."], ["My brother ___ married.", "is", [["has", "Married là tính từ, đi với be: is married."], ["does", "Câu dùng be + tính từ, không dùng does."]], "Tình trạng hôn nhân: be + married / single.", "Anh trai tôi đã lập gia đình."], ["She ___ a son and a daughter.", "has", [["have", "She là ngôi thứ ba số ít nên dùng has."], ["is", "Nói 'có' con dùng has, không dùng is."]], "He/she + has.", "Cô ấy có một con trai và một con gái."]], "conjunctions": [["I was tired, ___ I went to bed early.", "so", [["because", "Because nêu nguyên nhân; ở đây vế sau là kết quả nên dùng so."], ["but", "But dùng cho ý trái ngược, không phải kết quả."]], "So nối vế kết quả.", "Tôi mệt nên đi ngủ sớm."], ["I like tea ___ I don't like coffee.", "but", [["and", "Hai ý trái ngược (thích / không thích) nên dùng but."], ["so", "So chỉ kết quả, không hợp nghĩa."]], "But nối hai ý trái ngược.", "Tôi thích trà nhưng không thích cà phê."], ["She stayed at home ___ she was sick.", "because", [["so", "Vế sau là nguyên nhân nên dùng because."], ["or", "Or dùng để đưa lựa chọn."]], "Because + nguyên nhân.", "Cô ấy ở nhà vì bị ốm."]], "modal-can": [["I can ___ very well.", "swim", [["swimming", "Sau can dùng động từ nguyên mẫu."], ["to swim", "Sau can không có to."]], "Can + V nguyên mẫu.", "Tôi bơi rất giỏi."], ["She ___ speak English when she was five.", "could", [["can", "When she was five là quá khứ nên dùng could."], ["cans", "Can không bao giờ thêm -s."]], "Khả năng trong quá khứ: could.", "Cô ấy nói được tiếng Anh từ năm tuổi."], ["___ you help me, please?", "Could", [["Do", "Lời nhờ lịch sự dùng Could/Can you…? không dùng Do you help…"], ["Are", "Help là động từ thường; không dùng Are you help."]], "Nhờ lịch sự: Could you + V?", "Bạn có thể giúp tôi không?"]], "past-simple": [["I ___ my grandmother last weekend.", "visited", [["visit", "Last weekend là quá khứ nên động từ phải ở quá khứ."], ["have visited", "Có mốc thời gian quá khứ (last weekend) thì không dùng hiện tại hoàn thành."]], "Việc đã xong ở thời điểm xác định trong quá khứ: V-ed / V2.", "Cuối tuần trước tôi đến thăm bà."], ["We ___ go out because it was raining.", "didn't", [["don't", "Câu kể chuyện quá khứ (it was raining) nên dùng didn't."], ["weren't", "Go là động từ thường, phủ định dùng didn't, không dùng weren't."]], "Phủ định quá khứ đơn: didn't + V nguyên mẫu.", "Chúng tôi không ra ngoài vì trời mưa."], ["Did you ___ the news yesterday?", "see", [["saw", "Sau did, động từ trở về nguyên mẫu."], ["seen", "Seen là V3, không dùng sau did."]], "Câu hỏi quá khứ: Did + chủ ngữ + V nguyên mẫu?", "Hôm qua bạn có xem tin tức không?"]], "past-continuous": [["I ___ dinner when you called.", "was cooking", [["cooked", "Việc nấu ăn đang diễn ra thì bị cuộc gọi cắt ngang nên dùng quá khứ tiếp diễn."], ["am cooking", "Câu nói về quá khứ (called) nên không dùng hiện tại."]], "Hành động đang diễn ra trong quá khứ: was/were + V-ing.", "Tôi đang nấu bữa tối thì bạn gọi."], ["What ___ you doing at 8 p.m. last night?", "were", [["did", "Câu có doing nên trợ động từ là were."], ["was", "Chủ ngữ you đi với were."]], "Câu hỏi: Wh- + was/were + chủ ngữ + V-ing?", "Lúc 8 giờ tối qua bạn đang làm gì?"], ["While she ___, the phone rang.", "was sleeping", [["slept", "While + hành động đang kéo dài nên dùng quá khứ tiếp diễn."], ["sleeping", "Thiếu was trước V-ing."]], "While + was/were + V-ing, + quá khứ đơn.", "Trong lúc cô ấy đang ngủ thì điện thoại reo."]], "going-to": [["I ___ study abroad next year.", "am going to", [["going to", "Thiếu am trước going to."], ["am go to", "Cấu trúc đúng là am going to, không phải am go to."]], "Dự định đã có: am/is/are + going to + V.", "Năm sau tôi định đi du học."], ["Look at those clouds! It ___ rain.", "is going to", [["will to", "Sau will không có to."], ["goes to", "Dự đoán dựa trên dấu hiệu dùng is going to, không dùng goes to."]], "Dự đoán có căn cứ (mây đen): be going to.", "Nhìn mây kìa! Trời sắp mưa."], ["Are they going to ___ their house?", "sell", [["selling", "Sau going to dùng động từ nguyên mẫu."], ["sold", "Sau to không dùng quá khứ."]], "Be going to + V nguyên mẫu.", "Họ định bán nhà à?"]], "future-simple": [["Don't worry, I ___ pay for the tickets.", "will", [["am", "Quyết định ngay lúc nói / lời hứa dùng will, không dùng am + V."], ["going", "Thiếu am ... to: phải là am going to; ở đây lời hứa tự nhiên dùng will."]], "Lời hứa, quyết định tức thời: will + V.", "Đừng lo, tôi sẽ trả tiền vé."], ["I think it ___ be sunny tomorrow.", "will", [["is", "Dự đoán tương lai dùng will be, không dùng is."], ["will to", "Sau will không có to."]], "Dự đoán theo ý kiến (I think): will + V.", "Tôi nghĩ ngày mai trời sẽ nắng."], ["She won't ___ late.", "be", [["is", "Sau won't dùng động từ nguyên mẫu be."], ["being", "Sau will/won't không dùng V-ing."]], "Won't + V nguyên mẫu.", "Cô ấy sẽ không đến muộn."]], "present-perfect": [["I ___ my homework. Can I go out now?", "have finished", [["finished", "Việc vừa xong và liên quan tới hiện tại (giờ đi chơi được) dùng hiện tại hoàn thành."], ["have finish", "Sau have dùng V3: finished."]], "Kết quả còn liên quan đến hiện tại: have/has + V3.", "Tôi làm xong bài tập rồi. Giờ tôi ra ngoài được không?"], ["She ___ been to Japan twice.", "has", [["have", "She là ngôi thứ ba số ít nên dùng has."], ["is", "Hiện tại hoàn thành dùng has + been, không dùng is."]], "He/she/it + has + V3.", "Cô ấy đã đến Nhật hai lần."], ["Have you ever ___ sushi?", "eaten", [["ate", "Sau have dùng V3 eaten, không dùng V2 ate."], ["eat", "Sau have phải là V3."]], "Have you ever + V3?", "Bạn đã từng ăn sushi chưa?"]], "howto-suggest": [["Let's ___ out tonight.", "go", [["going", "Sau let's dùng động từ nguyên mẫu."], ["to go", "Sau let's không có to."]], "Let's + V nguyên mẫu.", "Tối nay mình đi chơi nhé."], ["How about ___ a film?", "watching", [["watch", "Sau how about dùng V-ing."], ["to watch", "Sau how about không dùng to V."]], "How about + V-ing?", "Xem phim nhé, được không?"], ["Why don't we ___ a taxi?", "take", [["taking", "Sau why don't we dùng nguyên mẫu."], ["took", "Đây là lời gợi ý, không dùng quá khứ."]], "Why don't we + V? (rủ rê)", "Sao mình không đi taxi nhỉ?"]], "possessive-s": [["This is my ___ phone.", "sister's", [["sisters", "Thiếu dấu ' để chỉ sở hữu."], ["sister", "Muốn nói 'của chị tôi' phải thêm 's."]], "Sở hữu cách danh từ số ít: thêm 's.", "Đây là điện thoại của chị tôi."], ["The ___ room is upstairs.", "teachers'", [["teacher's", "Phòng của các giáo viên (số nhiều) nên dấu ' đặt sau s: teachers'."], ["teachers", "Thiếu dấu ' chỉ sở hữu."]], "Danh từ số nhiều tận cùng -s: chỉ thêm '.", "Phòng giáo viên ở tầng trên."], ["Have you seen the ___ toys?", "children's", [["childrens'", "Children không tận cùng bằng s nên thêm 's: children's."], ["children", "Thiếu 's chỉ sở hữu."]], "Số nhiều bất quy tắc (children) thêm 's.", "Bạn có thấy đồ chơi của bọn trẻ không?"]], "frequency": [["I ___ have breakfast at home.", "always", [["am always", "Have là động từ thường; không chen am vào."], ["always am", "Trạng từ tần suất đứng trước động từ thường, và không cần am."]], "Trạng từ tần suất đứng trước động từ thường.", "Tôi luôn ăn sáng ở nhà."], ["She is ___ late for work.", "never", [["never is", "Với be, trạng từ tần suất đứng sau be: is never."], ["don't never", "Never đã mang nghĩa phủ định, không dùng thêm don't."]], "Be + trạng từ tần suất (is never).", "Cô ấy không bao giờ đi làm muộn."], ["How ___ do you go to the gym?", "often", [["much", "Hỏi tần suất dùng How often."], ["many", "How many hỏi số lượng đếm được."]], "Hỏi mức độ thường xuyên: How often…?", "Bạn đi tập gym bao lâu một lần?"]], "howto-restaurant": [["___ I have the chicken soup, please?", "Can|Could|May", [["Do", "Câu xin món lịch sự dùng Can/Could I have…?, không dùng Do I have."], ["Am", "Have là động từ, không đi với am trong câu này."]], "Gọi món lịch sự: Can / Could I have …, please?", "Cho tôi món súp gà nhé?"], ["Could I ___ the bill, please?", "have", [["give", "Xin hoá đơn dùng Could I have…, không dùng give."], ["having", "Sau could dùng động từ nguyên mẫu."]], "Xin thứ gì đó lịch sự: Could I have …?", "Cho tôi xin hóa đơn."], ["A table ___ two, please.", "for", [["of", "Đặt bàn cho mấy người dùng a table for + số."], ["to", "Cách nói chuẩn là a table for two."]], "A table for + số người.", "Cho chúng tôi một bàn hai người."]], "like-ing": [["I love ___ to music.", "listening", [["listen", "Sau love dùng V-ing (hoặc to V), không dùng nguyên mẫu."], ["listens", "Sau động từ love không chia -s."]], "Like/love/hate + V-ing.", "Tôi rất thích nghe nhạc."], ["My son hates ___ vegetables.", "eating", [["eat", "Sau hate dùng V-ing."], ["eats", "Không chia động từ sau hate."]], "Hate + V-ing.", "Con trai tôi ghét ăn rau."], ["Do you like ___ in the rain?", "walking", [["walk", "Sau like dùng V-ing."], ["walked", "Không dùng quá khứ sau like."]], "Do you like + V-ing?", "Bạn có thích đi dạo dưới mưa không?"]], "havegot": [["I've ___ two brothers.", "got", [["get", "Cấu trúc là have got (V3 của get), không phải have get."], ["gotten", "Nghĩa 'có' dùng have got, không dùng have gotten."]], "Have got = have (có).", "Tôi có hai anh em trai."], ["___ you got a pen?", "Have", [["Do", "Câu hỏi với have got đảo have lên đầu, không dùng do."], ["Are", "Cấu trúc là Have you got…?"]], "Câu hỏi: Have/Has + chủ ngữ + got …?", "Bạn có bút không?"], ["She ___ got any children.", "hasn't", [["haven't", "She là ngôi thứ ba số ít nên dùng hasn't."], ["doesn't", "Với have got, phủ định là hasn't got."]], "Phủ định: hasn't/haven't got.", "Cô ấy không có con."]], "howto-invite": [["Would you like ___ us for dinner?", "to join", [["joining", "Sau would like dùng to V."], ["join", "Thiếu to sau would like."]], "Would you like + to V? (mời)", "Bạn có muốn ăn tối cùng chúng tôi không?"], ["Can I ___ you with your bags?", "help", [["helping", "Sau can dùng nguyên mẫu."], ["to help", "Sau can không có to."]], "Ngỏ ý giúp: Can I help you …?", "Tôi giúp bạn mang túi nhé?"], ["Shall I ___ the window?", "open", [["opening", "Sau shall dùng nguyên mẫu."], ["to open", "Sau shall không có to."]], "Đề nghị làm giúp: Shall I + V?", "Tôi mở cửa sổ nhé?"]], "howmuch-howadj": [["How ___ people work in your office?", "many", [["much", "People đếm được nên dùng How many."], ["often", "How often hỏi tần suất, không hỏi số lượng."]], "How many + danh từ đếm được số nhiều.", "Có bao nhiêu người làm ở văn phòng bạn?"], ["How ___ sugar do you need?", "much", [["many", "Sugar không đếm được nên dùng How much."], ["long", "How long hỏi thời gian / độ dài."]], "How much + danh từ không đếm được.", "Bạn cần bao nhiêu đường?"], ["How ___ is it from here to the airport?", "far", [["long", "Hỏi khoảng cách dùng How far."], ["much", "How much hỏi số lượng / giá."]], "How far hỏi khoảng cách.", "Từ đây đến sân bay bao xa?"]], "howto-shop": [["Excuse me, where can I ___ the milk?", "find", [["finding", "Sau can dùng nguyên mẫu."], ["found", "Không dùng quá khứ sau can."]], "Where can I find …? (hỏi chỗ để hàng)", "Xin lỗi, sữa để ở đâu ạ?"], ["Can I ___ this on?", "try", [["trying", "Sau can dùng nguyên mẫu."], ["test", "Thử quần áo dùng try on, không dùng test."]], "Try something on: mặc thử.", "Tôi mặc thử cái này được không?"], ["Have you got this in a ___ size?", "bigger", [["more big", "Big là tính từ ngắn: so sánh hơn là bigger."], ["biger", "Big phải gấp đôi g: bigger."]], "So sánh hơn tính từ ngắn: adj-er.", "Cái này có cỡ lớn hơn không?"]], "imperative": [["___ forget your keys.", "Don't", [["Not", "Phủ định của câu mệnh lệnh là Don't + V, không dùng Not."], ["No", "Không dùng No trước động từ."]], "Mệnh lệnh phủ định: Don't + V.", "Đừng quên chìa khóa."], ["___ left at the traffic lights.", "Turn", [["Turning", "Câu mệnh lệnh bắt đầu bằng động từ nguyên mẫu."], ["You turning", "Thiếu động từ chia; mệnh lệnh chỉ cần Turn."]], "Câu mệnh lệnh: V nguyên mẫu đứng đầu câu.", "Rẽ trái ở đèn giao thông."], ["Please ___ quiet in the library.", "be", [["are", "Câu mệnh lệnh dùng be, không chia are."], ["being", "Mệnh lệnh dùng nguyên mẫu be."]], "Mệnh lệnh với tính từ: Be + tính từ.", "Vui lòng giữ yên lặng trong thư viện."]], "regular-ed": [["They ___ football in the rain yesterday.", "played", [["plaied", "Play tận cùng nguyên âm + y nên chỉ thêm -ed: played."], ["play", "Yesterday là quá khứ nên phải thêm -ed."]], "Động từ có quy tắc ở quá khứ: thêm -ed.", "Hôm qua họ chơi bóng dưới mưa."], ["She ___ for the bus for twenty minutes.", "waited", [["waitted", "Wait không gấp đôi t: waited."], ["waits", "Câu kể việc đã qua nên dùng quá khứ."]], "Wait → waited.", "Cô ấy chờ xe buýt hai mươi phút."], ["We ___ the shop at nine.", "stopped", [["stoped", "Stop (một âm tiết, phụ âm–nguyên âm–phụ âm) phải gấp đôi p: stopped."], ["stop", "Câu ở quá khứ nên phải thêm -ed."]], "Gấp đôi phụ âm cuối: stop → stopped.", "Chúng tôi ghé cửa hàng lúc chín giờ."]], "wh-questions": [["Where ___ your parents live?", "do", [["does", "Your parents là số nhiều nên dùng do."], ["are", "Live là động từ thường, cần trợ động từ do."]], "Wh- + do/does + chủ ngữ + V?", "Ba mẹ bạn sống ở đâu?"], ["___ did you go to the party with?", "Who", [["Whose", "Whose hỏi sở hữu (của ai)."], ["What", "Hỏi người đi cùng dùng Who."]], "Who hỏi về người.", "Bạn đi dự tiệc với ai?"], ["Why ___ she crying?", "is", [["does", "Crying (V-ing) đi với be, không dùng does."], ["do", "Chủ ngữ she và V-ing nên dùng is."]], "Wh- + is + chủ ngữ + V-ing?", "Tại sao cô ấy khóc?"]], "questions": [["Where ___ he work?", "does", [["do", "He là ngôi thứ ba số ít nên dùng does."], ["is", "Work là động từ thường, câu hỏi cần does, không dùng is."]], "Động từ thường ở hiện tại đơn: Wh- + does + he/she/it + V?", "Anh ấy làm việc ở đâu?"], ["___ you see the match last night?", "Did", [["Do", "Last night là quá khứ nên dùng Did."], ["Were", "See là động từ thường, câu hỏi quá khứ dùng did."]], "Câu hỏi quá khứ với động từ thường: Did + chủ ngữ + V?", "Tối qua bạn có xem trận đấu không?"], ["What ___ you doing now?", "are", [["do", "Có V-ing (doing) nên dùng be: are."], ["is", "Chủ ngữ you đi với are."]], "Với V-ing dùng am/is/are: What are you doing?", "Bây giờ bạn đang làm gì?"]], "howto-apologise": [["I'm sorry ___ being late.", "for", [["about", "Xin lỗi vì đã làm gì: sorry for + V-ing."], ["to", "Sorry to + V nguyên mẫu, không phải to being."]], "Sorry for + V-ing / danh từ.", "Xin lỗi vì tôi đến muộn."], ["I ___ stuck in traffic.", "was", [["am", "Việc đã xảy ra nên dùng was."], ["did", "Stuck là tính từ / V3, đi với be: was stuck."]], "Be stuck in traffic: bị kẹt xe.", "Tôi bị kẹt xe."], ["It won't ___ again.", "happen", [["happens", "Sau won't dùng nguyên mẫu."], ["happened", "Sau won't không dùng quá khứ."]], "Lời hứa: It won't happen again.", "Chuyện này sẽ không xảy ra nữa."]], "adj-modifier": [["The film was ___ good.", "really", [["real", "Đứng trước tính từ good cần trạng từ really."], ["very much", "Very much không đứng trước tính từ."]], "Trạng từ chỉ mức độ (really, very) + tính từ.", "Bộ phim hay thật."], ["It's a ___ nice day.", "very", [["much", "Much không bổ nghĩa cho tính từ nguyên dạng như nice."], ["so much", "So much không dùng trước tính từ."]], "Very + tính từ.", "Hôm nay là một ngày rất đẹp."], ["The room is ___ small for four people.", "too", [["enough", "Enough đứng sau tính từ và mang nghĩa 'đủ', không hợp ở đây."], ["so much", "So much không đứng trước tính từ."]], "Too + tính từ: quá (theo nghĩa tiêu cực).", "Phòng quá nhỏ cho bốn người."]], "compare": [["His English is ___ than mine.", "better", [["gooder", "Good là bất quy tắc: so sánh hơn là better."], ["more good", "Good không dùng more: better."]], "Good → better than.", "Tiếng Anh của anh ấy giỏi hơn của tôi."], ["My bag is as heavy ___ yours.", "as", [["than", "So sánh bằng: as … as."], ["like", "Cấu trúc bằng nhau dùng as … as."]], "As + tính từ + as.", "Túi của tôi nặng bằng túi của bạn."], ["This is the ___ restaurant in town.", "most expensive", [["expensivest", "Tính từ dài dùng most, không thêm -est."], ["more expensive", "Có the và so với cả thị trấn nên dùng so sánh nhất."]], "So sánh nhất tính từ dài: the most + adj.", "Đây là nhà hàng đắt nhất thị trấn."]], "howto-directions": [["Go straight ___ for about two hundred metres.", "on", [["in", "Cụm cố định: go straight on."], ["at", "Không nói go straight at."]], "Go straight on: đi thẳng.", "Đi thẳng khoảng hai trăm mét."], ["It's ___ your left.", "on", [["in", "Bên trái/phải dùng on your left/right."], ["at", "Không nói at your left."]], "On your left / right.", "Nó ở bên tay trái bạn."], ["How do I ___ to the station?", "get", [["going", "Sau do I dùng động từ nguyên mẫu."], ["arrive", "Arrive đi với at/in, không nói arrive to."]], "Hỏi đường: How do I get to + nơi?", "Đi tới nhà ga thế nào?"]], "prep-movement": [["She walked ___ the room.", "into", [["in", "Chuyển động đi vào bên trong dùng into."], ["at", "At chỉ vị trí, không chỉ chuyển động vào."]], "Into: đi vào bên trong.", "Cô ấy bước vào phòng."], ["He ran ___ the stairs.", "up", [["on", "Chạy lên cầu thang dùng up the stairs."], ["over", "Over là băng qua phía trên, không hợp với cầu thang."]], "Up: lên; down: xuống.", "Anh ấy chạy lên cầu thang."], ["We walked ___ the bridge to the other side.", "across", [["through", "Through là xuyên qua (trong lòng một vật), băng qua cầu dùng across."], ["along", "Along là dọc theo, không phải sang bờ bên kia."]], "Across: băng qua từ bên này sang bên kia.", "Chúng tôi đi bộ qua cầu sang bên kia."]], "simple-vs-continuous": [["I usually take the bus, but today I ___.", "am driving", [["drive", "Today (tạm thời, đang diễn ra) dùng tiếp diễn."], ["driving", "Thiếu am trước V-ing."]], "Thói quen: hiện tại đơn; việc tạm thời: hiện tại tiếp diễn.", "Tôi thường đi xe buýt, nhưng hôm nay tôi lái xe."], ["Water ___ at 100 degrees.", "boils", [["is boiling", "Sự thật hiển nhiên dùng hiện tại đơn."], ["boil", "Water là danh từ số ít nên thêm -s."]], "Sự thật hiển nhiên: hiện tại đơn.", "Nước sôi ở 100 độ."], ["I ___ the answer.", "know", [["am knowing", "Know là động từ trạng thái, không dùng tiếp diễn."], ["knows", "Chủ ngữ I không thêm -s."]], "Động từ trạng thái (know, like, want) không dùng tiếp diễn.", "Tôi biết câu trả lời."]], "howto-phone": [["Hello, ___ is Lan from ABC company.", "this", [["I", "Giới thiệu qua điện thoại dùng This is…, không dùng I is."], ["here", "Cách nói chuẩn là This is + tên."]], "Qua điện thoại: This is + tên.", "Xin chào, tôi là Lan ở công ty ABC."], ["Could you ___ that, please?", "repeat", [["repeating", "Sau could dùng nguyên mẫu."], ["to repeat", "Sau could không có to."]], "Could you repeat that?", "Bạn nhắc lại được không?"], ["Can I leave a ___?", "message", [["massage", "Massage là xoa bóp; lời nhắn là message."], ["messaging", "Sau a cần danh từ message, không dùng V-ing."]], "Leave a message: để lại lời nhắn.", "Tôi để lại lời nhắn được không?"]], "verb-to-v": [["I want ___ English well.", "to learn", [["learning", "Sau want dùng to V."], ["learn", "Thiếu to sau want."]], "Want + to V.", "Tôi muốn học giỏi tiếng Anh."], ["Don't forget ___ the door.", "to lock", [["locking", "Forget + to V: quên làm việc cần làm; forget + V-ing là quên đã làm."], ["lock", "Thiếu to sau forget."]], "Forget + to V: quên (chưa làm).", "Đừng quên khóa cửa."], ["We decided ___ a new car.", "to buy", [["buying", "Sau decide dùng to V."], ["buy", "Thiếu to sau decided."]], "Decide + to V.", "Chúng tôi quyết định mua xe mới."]], "howto-hotel": [["I have a reservation ___ the name Lan.", "under", [["with", "Đặt phòng dưới tên ai dùng under the name."], ["on", "Cụm cố định là under the name."]], "A reservation under the name + tên.", "Tôi có đặt phòng dưới tên Lan."], ["What time do I have to check ___?", "out", [["off", "Trả phòng là check out, không phải check off."], ["outside", "Cụm động từ cố định là check out."]], "Check in / check out: nhận / trả phòng.", "Mấy giờ tôi phải trả phòng?"], ["Could you ___ a taxi for me?", "call", [["calling", "Sau could dùng nguyên mẫu."], ["to call", "Sau could không có to."]], "Could you call a taxi for me?", "Bạn gọi giúp tôi một chiếc taxi được không?"]], "adverb-manner": [["Please drive ___.", "slowly", [["slow", "Bổ nghĩa cho động từ drive cần trạng từ slowly."], ["slowlly", "Slow + ly = slowly (một chữ l)."]], "Trạng từ cách thức = tính từ + ly.", "Vui lòng lái xe chậm thôi."], ["She speaks English very ___.", "well", [["good", "Good là tính từ; bổ nghĩa cho speaks phải dùng well."], ["goodly", "Không có goodly; trạng từ của good là well."]], "Good → well (bất quy tắc).", "Cô ấy nói tiếng Anh rất giỏi."], ["He works very ___.", "hard", [["hardly", "Hardly nghĩa là 'hầu như không'; làm việc chăm dùng hard."], ["hardy", "Hardy là tính từ (chịu đựng tốt), không hợp nghĩa."]], "Hard vừa là tính từ vừa là trạng từ.", "Anh ấy làm việc rất chăm chỉ."]], "modal-more": [["You ___ see a doctor about that cough.", "should", [["must to", "Sau must không có to."], ["should to", "Sau should không có to."]], "Lời khuyên: should + V.", "Bạn nên đi khám vì cơn ho đó."], ["You ___ smoke in this room. It's forbidden.", "mustn't", [["don't have to", "Don't have to là 'không cần', còn ở đây là cấm."], ["shouldn't to", "Sau shouldn't không có to."]], "Cấm: mustn't + V.", "Bạn không được hút thuốc trong phòng này."], ["It ___ rain this afternoon, so take an umbrella.", "may", [["mays", "Động từ khuyết thiếu không thêm -s."], ["may to", "Sau may không có to."]], "Khả năng: may/might + V.", "Chiều nay có thể mưa, nên mang ô theo."]], "cond-1": [["If it ___ tomorrow, we will stay at home.", "rains", [["will rain", "Mệnh đề if nói về tương lai dùng hiện tại đơn, không dùng will."], ["rain", "It là ngôi thứ ba số ít: rains."]], "If + hiện tại đơn, … will + V.", "Nếu mai trời mưa, chúng tôi sẽ ở nhà."], ["If you heat ice, it ___.", "melts", [["will melting", "Sau will dùng nguyên mẫu, và đây là sự thật nên dùng hiện tại."], ["melted", "Sự thật hiển nhiên (loại 0) dùng hiện tại đơn."]], "Loại 0: If + hiện tại, hiện tại (sự thật).", "Nếu bạn làm nóng nước đá thì nó sẽ tan."], ["If he doesn't come, we ___ without him.", "will start", [["start", "Kết quả ở tương lai nên dùng will + V."], ["would start", "Would dùng cho điều kiện không có thật (loại 2)."]], "Loại 1: If + hiện tại, will + V.", "Nếu anh ấy không đến, chúng ta sẽ bắt đầu mà không có anh ấy."]], "too": [["This coffee is too hot ___ drink.", "to", [["for", "Sau too + tính từ dùng to V (for đi với người: for me to…)."], ["that", "Too … to, không dùng too … that."]], "Too + adj + to V.", "Cà phê nóng quá, không uống được."], ["He's ___ young to drive.", "too", [["enough", "Enough đứng sau tính từ và nghĩa 'đủ', trái nghĩa câu này."], ["so", "So … that, không phải so … to."]], "Too + adj: quá … (nên không thể).", "Cậu ấy còn nhỏ quá, chưa lái xe được."], ["The box is too heavy ___ me to carry.", "for", [["to", "Chỉ người dùng for + người + to V."], ["with", "Cấu trúc đúng: too heavy for me to carry."]], "Too + adj + for + người + to V.", "Cái hộp quá nặng, tôi không bê nổi."]], "enough": [["He is old ___ to vote.", "enough", [["too", "Too nghĩa là quá, câu này cần 'đủ'."], ["very", "Very không đi với to V để chỉ mức đủ."]], "Adj + enough + to V.", "Anh ấy đủ tuổi đi bầu cử."], ["We had ___ time to finish the test.", "enough", [["too", "Too không đứng trước danh từ như time."], ["so", "So không đứng trước danh từ với nghĩa 'đủ'."]], "Enough + danh từ + to V.", "Chúng tôi có đủ thời gian làm xong bài kiểm tra."], ["This room isn't big ___ for ten people.", "enough", [["too", "Isn't big too không đúng; cần enough."], ["enough big", "Enough đứng sau tính từ: big enough."]], "Tính từ + enough (đứng sau).", "Phòng này không đủ rộng cho mười người."]], "ittakes": [["It ___ me thirty minutes to go to work.", "takes", [["take", "Chủ ngữ it nên động từ thêm -s."], ["spends", "Cấu trúc với it dùng take, không dùng spend."]], "It takes + người + thời gian + to V.", "Tôi đi làm mất ba mươi phút."], ["How long does it take ___ there?", "to get", [["getting", "Sau it take + thời gian dùng to V."], ["get", "Thiếu to."]], "How long does it take to V?", "Đến đó mất bao lâu?"], ["It ___ him two years to build the house.", "took", [["takes", "Việc đã xong trong quá khứ nên dùng took."], ["taken", "Took là quá khứ; taken là V3 cần have."]], "Quá khứ: It took …", "Anh ấy xây ngôi nhà mất hai năm."]], "itsadj": [["It is easy ___ this song.", "to learn", [["learning", "Sau It's + adj dùng to V."], ["learn", "Thiếu to."]], "It's + adj + to V.", "Bài hát này dễ học."], ["It's important ___ us to drink enough water.", "for", [["to", "Chỉ người dùng for + người + to V."], ["with", "Cấu trúc đúng: It's important for us to…"]], "It's + adj + for + người + to V.", "Uống đủ nước là quan trọng với chúng ta."], ["It isn't necessary ___ a table.", "to book", [["booking", "Sau necessary dùng to V."], ["book", "Thiếu to."]], "It isn't + adj + to V.", "Không cần đặt bàn."]], "present-perfect-continuous": [["I ___ English for two years.", "have been studying", [["am studying", "For + khoảng thời gian (bắt đầu từ quá khứ đến giờ) không dùng hiện tại tiếp diễn."], ["have studying", "Thiếu been: have been + V-ing."]], "Việc bắt đầu trong quá khứ và vẫn tiếp tục: have/has been + V-ing.", "Tôi đã học tiếng Anh được hai năm."], ["She's tired because she ___ all day.", "has been working", [["have been working", "She đi với has."], ["has working", "Thiếu been."]], "Nhấn mạnh quá trình dẫn tới kết quả hiện tại: has been + V-ing.", "Cô ấy mệt vì đã làm việc cả ngày."], ["How long ___ you been waiting?", "have", [["did", "Câu có been waiting nên trợ động từ là have."], ["are", "Hiện tại hoàn thành tiếp diễn dùng have been, không dùng are."]], "How long have you been + V-ing?", "Bạn đã đợi bao lâu rồi?"]], "past-perfect": [["When I arrived, the train ___ left.", "had already", [["has already", "Mốc là quá khứ (arrived) nên dùng had, không dùng has."], ["already", "Thiếu had: việc xảy ra trước một mốc quá khứ dùng had + V3."]], "Việc xảy ra trước một việc khác trong quá khứ: had + V3.", "Khi tôi đến thì tàu đã rời đi rồi."], ["He told me he ___ his keys.", "had lost", [["has lost", "Câu tường thuật ở quá khứ (told) nên lùi thì thành had lost."], ["had lose", "Sau had dùng V3: lost."]], "Lùi thì trong câu tường thuật: had + V3.", "Anh ấy nói với tôi là đã làm mất chìa khóa."], ["I had never ___ snow before I went to Japan.", "seen", [["saw", "Sau had dùng V3 seen."], ["see", "Sau had phải là V3."]], "Had + V3: see → seen.", "Trước khi sang Nhật tôi chưa từng thấy tuyết."]], "future-continuous": [["At this time tomorrow, I ___ to Tokyo.", "will be flying", [["will fly", "Đang diễn ra tại một thời điểm trong tương lai dùng will be + V-ing."], ["will flying", "Thiếu be."]], "Will be + V-ing: sẽ đang làm gì vào lúc nào.", "Giờ này ngày mai tôi đang bay tới Tokyo."], ["What will you ___ at nine tonight?", "be doing", [["doing", "Thiếu be sau will."], ["be do", "Sau be phải là V-ing."]], "What will you be doing…?", "Chín giờ tối nay bạn sẽ làm gì?"], ["Don't call at 8; we ___ dinner then.", "will be having", [["will have", "Chỉ việc đang diễn ra lúc 8 giờ nên dùng tiếp diễn."], ["are have", "Sai cấu trúc; phải là will be having."]], "Will be + V-ing cho việc đang diễn ra tại thời điểm tương lai.", "Đừng gọi lúc 8 giờ, lúc đó chúng tôi đang ăn tối."]], "stative": [["I ___ this book is great.", "think", [["am thinking", "Think mang nghĩa 'cho rằng' (ý kiến) là động từ trạng thái, không dùng tiếp diễn."], ["thinks", "Chủ ngữ I không thêm -s."]], "Think = cho rằng: dùng thì đơn.", "Tôi nghĩ cuốn sách này rất hay."], ["She ___ a new car.", "has", [["is having", "Have nghĩa là sở hữu là động từ trạng thái, không dùng tiếp diễn."], ["have", "She đi với has."]], "Have (sở hữu) không dùng tiếp diễn.", "Cô ấy có một chiếc xe mới."], ["This soup ___ delicious.", "tastes", [["is tasting", "Taste nghĩa là 'có vị' là trạng thái nên dùng thì đơn."], ["taste", "Soup là số ít nên thêm -s."]], "Taste/smell/look + tính từ ở thì đơn.", "Món súp này ngon."]], "pp-vs-past": [["I ___ to Japan in 2019.", "went", [["have been", "Có mốc thời gian quá khứ cụ thể (in 2019) nên dùng quá khứ đơn."], ["go", "Câu nói về năm 2019 nên phải dùng quá khứ."]], "Mốc thời gian cụ thể trong quá khứ: quá khứ đơn.", "Tôi đi Nhật năm 2019."], ["I ___ in this city for ten years.", "have lived", [["lived", "Vẫn đang sống ở đây (for ten years đến nay) nên dùng hiện tại hoàn thành."], ["am living", "For + khoảng thời gian kéo dài đến nay dùng hoàn thành."]], "Kéo dài từ quá khứ đến hiện tại: have + V3.", "Tôi sống ở thành phố này mười năm rồi."], ["Have you ever ___ to Singapore?", "been", [["gone", "Have been to = đã từng đến (và đã về); gone to = đã đi và chưa về."], ["went", "Sau have dùng V3."]], "Have you ever been to …?", "Bạn đã bao giờ đến Singapore chưa?"]], "future-forms": [["I ___ start a new course next month. I've already paid.", "'m going to|am going to", [["will", "Kế hoạch đã quyết từ trước (đã đóng tiền) dùng be going to."], ["going to", "Thiếu am."]], "Kế hoạch có sẵn: be going to.", "Tháng sau tôi sẽ bắt đầu khóa học mới. Tôi đã đóng tiền rồi."], ["The phone is ringing. — I ___ get it.", "'ll|will", [["am going to", "Quyết định ngay lúc nói dùng will; be going to dùng cho dự định có từ trước."], ["will to", "Sau will không có to."]], "Quyết định tức thời: will.", "Điện thoại reo kìa. — Để tôi nghe."], ["Look at those dark clouds! It ___ rain.", "'s going to|is going to", [["will to", "Sau will không có to."], ["is raining", "Mây đen là dấu hiệu sắp mưa, trời chưa mưa."]], "Dự đoán dựa trên dấu hiệu trước mắt: be going to.", "Nhìn mây đen kìa! Trời sắp mưa."]], "time-clauses": [["I'll call you when I ___.", "arrive", [["will arrive", "Sau when (nói về tương lai) dùng hiện tại đơn."], ["arrived", "Đây là việc ở tương lai nên không dùng quá khứ."]], "When + hiện tại đơn, … will.", "Tôi sẽ gọi bạn khi tôi đến nơi."], ["Wait here until I ___ back.", "come", [["will come", "Sau until dùng hiện tại đơn cho tương lai."], ["came", "Không dùng quá khứ."]], "Until + hiện tại đơn.", "Đợi ở đây cho đến khi tôi quay lại."], ["As soon as she ___ the news, she will be happy.", "hears", [["will hear", "Sau as soon as dùng hiện tại đơn."], ["hear", "She đi với hears."]], "As soon as + hiện tại đơn.", "Ngay khi nghe tin, cô ấy sẽ vui."]], "modal-deduction": [["The lights are on. They ___ be at home.", "must", [["can't", "Đèn sáng là bằng chứng họ ở nhà, nên dùng must (chắc chắn)."], ["mustn't", "Mustn't là cấm, không dùng để suy đoán."]], "Must be: chắc chắn là.", "Đèn đang sáng. Chắc chắn họ ở nhà."], ["He ___ be forty; he looks much younger.", "can't", [["mustn't", "Suy đoán phủ định dùng can't, không dùng mustn't."], ["must", "Trông trẻ hơn nhiều nên không thể bốn mươi: can't."]], "Can't be: không thể nào.", "Anh ấy không thể bốn mươi tuổi được, trông trẻ hơn nhiều."], ["I'm not sure. She ___ be in a meeting.", "might", [["must", "Không chắc chắn nên dùng might, không dùng must."], ["can't", "Can't là chắc chắn không, trái với 'không chắc'."]], "Might be: có thể là.", "Tôi không chắc. Có thể cô ấy đang họp."]], "obligation": [["I ___ wear a uniform at work.", "have to", [["has to", "Chủ ngữ I dùng have to."], ["must to", "Sau must không có to."]], "Have to + V: phải (quy định).", "Tôi phải mặc đồng phục ở chỗ làm."], ["You ___ come if you're busy. It's optional.", "don't have to", [["mustn't", "Mustn't là cấm; ở đây là không bắt buộc."], ["haven't to", "Phủ định của have to là don't have to."]], "Don't have to: không cần, không bắt buộc.", "Nếu bận thì bạn không cần đến. Không bắt buộc."], ["We ___ leave very early tomorrow.", "will have to", [["will must", "Must không có dạng tương lai; dùng will have to."], ["have to will", "Sai trật tự; phải là will have to."]], "Tương lai của must: will have to.", "Ngày mai chúng ta sẽ phải đi rất sớm."]], "passive": [["This house ___ in 1990.", "was built", [["built", "Ngôi nhà không tự xây; cần bị động was + V3."], ["was build", "Sau was dùng V3 built."]], "Bị động quá khứ: was/were + V3.", "Ngôi nhà này được xây năm 1990."], ["Rice ___ in the Mekong Delta.", "is grown", [["grows", "Lúa được (người) trồng nên dùng bị động."], ["is grew", "Sau is dùng V3 grown."]], "Bị động hiện tại: is/are + V3.", "Lúa được trồng ở đồng bằng sông Cửu Long."], ["The letters ___ yesterday.", "were sent", [["was sent", "The letters là số nhiều nên dùng were."], ["sent", "Thư không tự gửi; cần were + V3."]], "Were + V3 với chủ ngữ số nhiều.", "Những lá thư đã được gửi hôm qua."]], "cond-2": [["If I ___ a lot of money, I would travel around the world.", "had", [["have", "Điều kiện không có thật ở hiện tại dùng quá khứ."], ["would have", "Mệnh đề if không dùng would."]], "If + quá khứ đơn, would + V.", "Nếu có nhiều tiền, tôi sẽ đi du lịch vòng quanh thế giới."], ["If I were you, I ___ harder.", "would study", [["will study", "Câu giả định không có thật dùng would."], ["studied", "Mệnh đề kết quả cần would + V."]], "If I were you, I would + V (lời khuyên).", "Nếu tôi là bạn, tôi sẽ học chăm hơn."], ["If she ___ here, she would help us.", "were", [["is", "Điều kiện trái hiện tại dùng were."], ["will be", "Mệnh đề if không dùng will."]], "Loại 2 với be: were cho mọi chủ ngữ.", "Nếu cô ấy ở đây, cô ấy sẽ giúp chúng ta."]], "gerund-1": [["I enjoy ___ to music.", "listening", [["to listen", "Sau enjoy dùng V-ing."], ["listen", "Sau enjoy không dùng nguyên mẫu."]], "Enjoy + V-ing.", "Tôi thích nghe nhạc."], ["He promised ___ early.", "to come", [["coming", "Sau promise dùng to V."], ["come", "Thiếu to."]], "Promise + to V.", "Anh ấy hứa đến sớm."], ["She is good at ___.", "cooking", [["cook", "Sau giới từ (at) dùng V-ing."], ["to cook", "Sau giới từ không dùng to V."]], "Giới từ + V-ing.", "Cô ấy nấu ăn giỏi."]], "relative-1": [["The man ___ lives next door is a doctor.", "who", [["which", "Chỉ người dùng who, không dùng which."], ["whose", "Whose chỉ sở hữu, phải có danh từ theo sau."]], "Who thay cho người.", "Người đàn ông sống ở nhà bên cạnh là bác sĩ."], ["The restaurant ___ we visited last week was very good.", "that|which", [["who", "Nhà hàng là vật nên dùng that/which."], ["where", "Visited cần tân ngữ; dùng which/that, không dùng where."]], "That/which thay cho vật.", "Nhà hàng chúng tôi ghé tuần trước rất ngon."], ["I have a friend ___ father is a pilot.", "whose", [["who", "Chỉ sở hữu (bố của người bạn) dùng whose."], ["who's", "Who's = who is, không chỉ sở hữu."]], "Whose + danh từ: chỉ sở hữu.", "Tôi có một người bạn có bố là phi công."]], "reported": [["She said she ___ tired.", "was", [["is", "Động từ tường thuật ở quá khứ (said) nên lùi thì: is → was."], ["were", "She đi với was."]], "Lùi thì: am/is → was.", "Cô ấy nói cô ấy mệt."], ["He told me he ___ call me later.", "would", [["will", "Lùi thì will → would sau told."], ["can", "Không hợp nghĩa; câu gốc là will call."]], "Will → would trong câu tường thuật.", "Anh ấy nói sẽ gọi cho tôi sau."], ["She asked me if I ___ Vietnamese food.", "liked", [["do like", "Câu hỏi tường thuật không dùng trật tự câu hỏi và phải lùi thì."], ["like", "Sau asked phải lùi thì: like → liked."]], "Asked if + chủ ngữ + động từ lùi thì.", "Cô ấy hỏi tôi có thích món Việt không."]], "tag": [["You are a student, ___ you?", "aren't", [["don't", "Câu chính dùng are nên câu hỏi đuôi dùng aren't."], ["isn't", "Chủ ngữ you đi với are."]], "Khẳng định → đuôi phủ định cùng trợ động từ.", "Bạn là sinh viên, phải không?"], ["She doesn't eat meat, ___ she?", "does", [["doesn't", "Câu chính phủ định nên đuôi khẳng định: does she?"], ["is", "Câu chính dùng does nên đuôi cũng dùng does."]], "Phủ định → đuôi khẳng định.", "Cô ấy không ăn thịt, phải không?"], ["Let's go out tonight, ___ we?", "shall", [["will", "Câu bắt đầu bằng Let's có đuôi là shall we."], ["don't", "Đuôi cố định của Let's là shall we."]], "Let's …, shall we?", "Tối nay mình đi chơi nhé?"]], "quantifiers": [["We don't have ___ time left.", "much", [["many", "Time không đếm được nên dùng much."], ["a few", "A few đi với danh từ đếm được."]], "Much + danh từ không đếm được (thường trong câu phủ định / hỏi).", "Chúng ta không còn nhiều thời gian."], ["There are ___ apples in the basket.", "a few", [["a little", "Apples đếm được nên dùng a few."], ["much", "Much không dùng với danh từ đếm được."]], "A few + danh từ đếm được số nhiều.", "Có vài quả táo trong giỏ."], ["Can I have ___ milk in my coffee?", "a little", [["a few", "Milk không đếm được nên dùng a little."], ["many", "Many dùng với danh từ đếm được."]], "A little + danh từ không đếm được.", "Cho tôi chút sữa vào cà phê được không?"]], "indefinite": [["There is ___ in my eye.", "something", [["anything", "Câu khẳng định dùng something."], ["nothing", "Nothing mang nghĩa phủ định, trái nghĩa câu."]], "Câu khẳng định: something / someone.", "Có cái gì đó trong mắt tôi."], ["Is there ___ at home?", "anyone", [["someone", "Câu hỏi thông thường dùng anyone."], ["no one", "No one không dùng trong câu hỏi này."]], "Câu hỏi / phủ định: anyone / anything.", "Có ai ở nhà không?"], ["___ called while you were out.", "Nobody|No one", [["Anybody", "Anybody không đứng đầu câu với nghĩa phủ định."], ["Not anybody", "Không bắt đầu câu bằng Not anybody."]], "Nobody / No one + động từ khẳng định.", "Không có ai gọi trong lúc bạn đi vắng."]], "so-neither": [["I'm hungry. — So ___ I.", "am", [["do", "Câu trước dùng am nên đáp lại So am I."], ["I am", "Phải đảo ngữ: So am I."]], "So + trợ động từ + chủ ngữ.", "Tôi đói. — Tôi cũng vậy."], ["I didn't sleep well. — Neither ___ I.", "did", [["do", "Câu trước ở quá khứ (didn't) nên dùng did."], ["didn't", "Neither đã mang nghĩa phủ định nên dùng did, không dùng didn't."]], "Neither + trợ động từ khẳng định + chủ ngữ.", "Tối qua tôi ngủ không ngon. — Tôi cũng vậy."], ["She can't drive. — Neither ___ her husband.", "can", [["can't", "Sau neither dùng can (khẳng định)."], ["does", "Câu trước dùng can nên dùng can."]], "Neither can + chủ ngữ.", "Cô ấy không biết lái xe. — Chồng cô ấy cũng vậy."]], "phrasal": [["I get ___ at half past five every day.", "up", [["on", "Thức dậy là get up."], ["off", "Get off là xuống xe."]], "Get up: thức dậy.", "Tôi dậy lúc năm giờ rưỡi mỗi ngày."], ["I'll pick you ___ at the airport.", "up", [["on", "Đón ai là pick somebody up."], ["out", "Pick out là chọn ra."]], "Pick up: đón.", "Tôi sẽ đón bạn ở sân bay."], ["Please turn ___ the lights when you leave.", "off", [["out", "Tắt đèn dùng turn off."], ["down", "Turn down là vặn nhỏ."]], "Turn off: tắt.", "Vui lòng tắt đèn khi bạn ra về."]], "sothat": [["The film was ___ boring that I fell asleep.", "so", [["such", "Such đi với danh từ; trước tính từ đứng một mình dùng so."], ["too", "Too đi với to V, không đi với that."]], "So + adj + that.", "Bộ phim chán đến nỗi tôi ngủ gật."], ["He spoke so quickly ___ nobody understood him.", "that", [["than", "Cấu trúc là so … that."], ["so", "Không lặp so; dùng that."]], "So + adv + that + mệnh đề.", "Anh ấy nói nhanh đến nỗi không ai hiểu."], ["There were ___ many people that we couldn't get in.", "so", [["such", "Trước many/much dùng so, không dùng such."], ["very", "Very không đi với that."]], "So many/much + danh từ + that.", "Đông người đến nỗi chúng tôi không vào được."]], "suchthat": [["It was ___ a good film that I watched it twice.", "such", [["so", "Trước a + adj + danh từ dùng such."], ["very", "Very không đi với that."]], "Such + a/an + adj + N + that.", "Phim hay đến nỗi tôi xem hai lần."], ["They are ___ nice people that everyone likes them.", "such", [["so", "Trước adj + danh từ số nhiều dùng such."], ["such a", "Danh từ số nhiều không dùng a."]], "Such + adj + danh từ số nhiều + that.", "Họ là những người tốt đến nỗi ai cũng quý."], ["It was such a long day ___ I went to bed early.", "that", [["so", "Cấu trúc là such … that."], ["because", "Such … that diễn tả kết quả, không dùng because."]], "Such … that + kết quả.", "Hôm đó dài đến nỗi tôi đi ngủ sớm."]], "makelet": [["My mother made me ___ my room.", "clean", [["to clean", "Make + người + V nguyên mẫu (không to)."], ["cleaning", "Sau make + người không dùng V-ing."]], "Make + sb + V.", "Mẹ bắt tôi dọn phòng."], ["My parents don't let me ___ out late.", "go", [["to go", "Let + người + V nguyên mẫu."], ["going", "Không dùng V-ing sau let + người."]], "Let + sb + V.", "Bố mẹ không cho tôi đi chơi khuya."], ["His joke made everyone ___.", "laugh", [["to laugh", "Make + người + V nguyên mẫu."], ["laughed", "Không chia quá khứ sau make + người."]], "Make + sb + V.", "Câu đùa của anh ấy làm mọi người cười."]], "asktell": [["She asked me ___ the door.", "to close", [["close", "Ask + người + to V."], ["closing", "Không dùng V-ing sau ask + người."]], "Ask + sb + to V.", "Cô ấy nhờ tôi đóng cửa."], ["The doctor told him ___ smoking.", "to stop", [["stop", "Tell + người + to V."], ["stopping", "Sau tell + người dùng to V."]], "Tell + sb + to V.", "Bác sĩ bảo anh ấy bỏ thuốc lá."], ["My teacher advised me ___ more.", "to read", [["reading", "Advise + người + to V."], ["read", "Thiếu to."]], "Advise + sb + to V.", "Thầy khuyên tôi đọc nhiều hơn."]], "usedto": [["I ___ play football when I was young.", "used to", [["use to", "Câu khẳng định dùng used to."], ["was used to", "Was used to + V-ing nghĩa là quen với; ở đây là thói quen cũ."]], "Used to + V: đã từng (giờ không còn).", "Hồi nhỏ tôi từng chơi bóng đá."], ["Did you ___ live here?", "use to", [["used to", "Sau did dùng use to (không có d)."], ["using to", "Sai cấu trúc."]], "Câu hỏi: Did you use to + V?", "Bạn từng sống ở đây à?"], ["You will get used to ___ in the city.", "driving", [["drive", "Get used to + V-ing (to là giới từ)."], ["drove", "Sau to (giới từ) dùng V-ing."]], "Get/be used to + V-ing: quen với.", "Bạn sẽ quen với việc lái xe trong thành phố."]], "hadbetter": [["You had better ___ a doctor.", "see", [["to see", "Sau had better dùng V nguyên mẫu, không có to."], ["seeing", "Không dùng V-ing sau had better."]], "Had better + V.", "Bạn nên đi khám bác sĩ thì hơn."], ["We'd better ___ late.", "not be", [["don't be", "Phủ định của had better là had better not + V."], ["not to be", "Không có to."]], "Had better not + V.", "Chúng ta không nên đến muộn."], ["You ___ better take an umbrella.", "had", [["have", "Cấu trúc cố định là had better, không phải have better."], ["would", "Would better không đúng."]], "Had better (dù nói về hiện tại / tương lai).", "Bạn nên mang theo ô."]], "spend": [["I spend two hours a day ___ English.", "learning", [["to learn", "Spend + thời gian + V-ing."], ["learn", "Thiếu -ing."]], "Spend + time + V-ing.", "Mỗi ngày tôi dành hai tiếng học tiếng Anh."], ["I wasted an hour ___ for the bus.", "waiting", [["to wait", "Waste + thời gian + V-ing."], ["wait", "Thiếu -ing."]], "Waste + time + V-ing.", "Tôi phí một tiếng chờ xe buýt."], ["She ___ all weekend cleaning the house.", "spent", [["took", "It took … to V; với chủ ngữ người dùng spent … V-ing."], ["spend", "Câu ở quá khứ (all weekend đã qua)."]], "Người + spend + time + V-ing.", "Cô ấy dành cả cuối tuần dọn nhà."]], "howto-opinion": [["In my ___, this plan is too risky.", "opinion", [["think", "Cụm cố định là in my opinion."], ["mind", "In my mind không dùng để nêu ý kiến theo cách này."]], "In my opinion, …", "Theo tôi, kế hoạch này quá mạo hiểm."], ["I completely ___ with you.", "agree", [["am agree", "Agree là động từ, không đi với am."], ["agreeing", "Câu cần động từ chia: I agree."]], "I (completely) agree with you.", "Tôi hoàn toàn đồng ý với bạn."], ["I see what you ___, but it costs too much.", "mean", [["say", "Cụm cố định là I see what you mean."], ["meaning", "Sau you cần động từ chia: mean."]], "I see what you mean, but …", "Tôi hiểu ý bạn, nhưng tốn kém quá."]], "past-perfect-continuous": [["I ___ for an hour when the bus finally came.", "had been waiting", [["have been waiting", "Mốc là quá khứ (came) nên dùng had, không dùng have."], ["had waiting", "Thiếu been."]], "Quá trình kéo dài trước một mốc quá khứ: had been + V-ing.", "Tôi đã đợi một tiếng thì xe buýt mới tới."], ["The ground was wet because it ___.", "had been raining", [["has been raining", "Câu ở quá khứ (was wet) nên dùng had been."], ["had been rain", "Sau been phải là V-ing."]], "Nguyên nhân kéo dài trước một kết quả quá khứ: had been + V-ing.", "Mặt đất ướt vì trời đã mưa (một lúc lâu)."], ["How long ___ she been working there before she quit?", "had", [["has", "Before she quit là quá khứ nên dùng had."], ["was", "Hoàn thành tiếp diễn dùng had been, không dùng was been."]], "How long had + S + been + V-ing?", "Cô ấy đã làm ở đó bao lâu trước khi nghỉ việc?"]], "future-perfect": [["I ___ the report by Friday.", "will have finished", [["will finished", "Sau will dùng nguyên mẫu; nhấn mạnh hoàn thành trước mốc dùng will have + V3."], ["will have finish", "Sau have phải là V3: finished."]], "By + mốc tương lai: will have + V3.", "Tôi sẽ làm xong báo cáo trước thứ Sáu."], ["By the end of the year, he ___ here for ten years.", "will have worked", [["will work", "Tính đến một mốc tương lai, dùng tương lai hoàn thành."], ["will has worked", "Sau will dùng have, không dùng has."]], "By the end of …: will have + V3.", "Đến cuối năm, anh ấy sẽ làm ở đây được mười năm."], ["Will you have ___ dinner by eight?", "cooked", [["cook", "Sau will have dùng V3."], ["cooking", "Tương lai hoàn thành dùng V3, không dùng V-ing."]], "Will + S + have + V3?", "Đến tám giờ bạn sẽ nấu xong bữa tối chứ?"]], "future-in-past": [["I ___ call you, but I forgot.", "was going to", [["am going to", "Dự định trong quá khứ (forgot) dùng was going to."], ["was go to", "Thiếu -ing: was going to."]], "Dự định trong quá khứ không thực hiện: was/were going to.", "Tôi đã định gọi cho bạn nhưng quên mất."], ["I thought it ___ rain, so I took an umbrella.", "would", [["will", "Sau thought (quá khứ) lùi will thành would."], ["would to", "Sau would không có to."]], "Tương lai nhìn từ quá khứ: would + V.", "Tôi nghĩ trời sẽ mưa nên mang ô."], ["She said she ___ help us the next day.", "would", [["will", "Câu tường thuật quá khứ: will → would."], ["wants", "Câu gốc là will help, không phải want."]], "Said (that) … would + V.", "Cô ấy nói hôm sau sẽ giúp chúng tôi."]], "cond-3": [["If I had known, I ___ you.", "would have told", [["would tell", "Điều kiện trái quá khứ cần would have + V3."], ["will have told", "Câu không có thật ở quá khứ dùng would, không dùng will."]], "If + had V3, would have + V3.", "Nếu tôi biết thì tôi đã nói với bạn rồi."], ["If they ___ me, I would have come.", "had invited", [["invited", "Loại 3 cần had + V3 ở mệnh đề if."], ["would invite", "Mệnh đề if không dùng would."]], "If + had + V3 …", "Nếu họ mời thì tôi đã đến."], ["She would have passed if she ___ harder.", "had studied", [["studied", "Điều kiện trái quá khứ cần had + V3."], ["has studied", "Không dùng hiện tại hoàn thành trong câu điều kiện loại 3."]], "… if + had + V3.", "Nếu học chăm hơn thì cô ấy đã đỗ."]], "relative-2": [["My father, ___ is seventy, still works every day.", "who", [["that", "Mệnh đề không xác định (có dấu phẩy) không dùng that."], ["which", "Chỉ người dùng who."]], "Mệnh đề có dấu phẩy: who/which, không dùng that.", "Bố tôi, năm nay bảy mươi tuổi, vẫn đi làm hằng ngày."], ["She failed the test, ___ surprised everyone.", "which", [["that", "Which thay cho cả mệnh đề trước, không dùng that sau dấu phẩy."], ["what", "What không dùng sau dấu phẩy để nối mệnh đề."]], ", which … thay cho cả ý trước.", "Cô ấy thi trượt, điều này khiến mọi người ngạc nhiên."], ["Hue, ___ I visited last year, is very beautiful.", "which", [["where", "Visited cần tân ngữ nên dùng which; where dùng khi đã có đủ thành phần (I lived where…)."], ["that", "Sau dấu phẩy không dùng that."]], "Mệnh đề không xác định chỉ nơi làm tân ngữ: which.", "Huế, nơi tôi đến thăm năm ngoái, rất đẹp."]], "gerund-2": [["He stopped ___ last year. He doesn't smoke now.", "smoking", [["to smoke", "Stop to smoke là dừng lại để hút thuốc, trái nghĩa câu."], ["smoke", "Sau stop dùng V-ing hoặc to V, không dùng nguyên mẫu."]], "Stop + V-ing: bỏ hẳn việc gì.", "Anh ấy bỏ thuốc lá từ năm ngoái."], ["I forgot ___ the email, so I'll do it now.", "to send", [["sending", "Forget + V-ing là quên đã làm; ở đây là quên chưa làm."], ["send", "Thiếu to."]], "Forget + to V: quên làm việc cần làm.", "Tôi quên gửi email nên giờ tôi sẽ gửi."], ["I remember ___ him at a party years ago.", "meeting", [["to meet", "Remember + to V là nhớ phải làm; nhớ việc đã xảy ra dùng V-ing."], ["meet", "Sau remember không dùng nguyên mẫu."]], "Remember + V-ing: nhớ đã làm.", "Tôi nhớ đã gặp anh ấy ở một bữa tiệc nhiều năm trước."]], "modal-perfect": [["She isn't here. She must ___ early.", "have left", [["left", "Suy đoán về quá khứ: must + have + V3."], ["has left", "Sau must dùng have (nguyên mẫu), không dùng has."]], "Must have + V3: chắc hẳn đã.", "Cô ấy không ở đây. Chắc cô ấy đã về sớm."], ["He can't ___ the exam; he didn't study at all.", "have passed", [["passed", "Sau can't dùng have + V3 khi suy đoán quá khứ."], ["has passed", "Sau can't dùng have, không dùng has."]], "Can't have + V3: không thể nào đã.", "Anh ấy không thể nào đỗ được, anh ấy có học gì đâu."], ["You ___ have told me earlier! Now it's too late.", "should", [["must", "Lời trách việc đáng lẽ nên làm dùng should have."], ["can", "Can have không dùng cho lời trách."]], "Should have + V3: đáng lẽ nên (nhưng đã không).", "Lẽ ra bạn nên nói với tôi sớm hơn! Giờ muộn rồi."]], "passive-report": [["It is said ___ the company is in trouble.", "that", [["what", "It is said that…, không dùng what."], ["which", "Cấu trúc cố định là It is said that."]], "It is said / believed that + mệnh đề.", "Người ta nói rằng công ty đang gặp khó khăn."], ["She is known ___ for the government.", "to have worked", [["to work", "Việc đã xảy ra trước (đã từng làm) dùng to have + V3."], ["having worked", "Sau be known dùng to V / to have V3."]], "S + is known + to have + V3 (việc trước đó).", "Bà ấy được biết là đã từng làm cho chính phủ."], ["The bridge is believed ___ the oldest in the city.", "to be", [["being", "Sau be believed dùng to V."], ["is", "Cần to be, không chia is."]], "S + is believed + to V.", "Cây cầu được cho là lâu đời nhất thành phố."]], "participle": [["___ tired, she went to bed early.", "Feeling", [["Felt", "Chủ ngữ she tự cảm thấy (chủ động) nên dùng V-ing."], ["She felt", "Nếu thêm chủ ngữ thì cần liên từ; câu rút gọn dùng Feeling."]], "Rút gọn mệnh đề chủ động: V-ing.", "Cảm thấy mệt, cô ấy đi ngủ sớm."], ["The woman ___ upstairs is a doctor.", "living", [["lived", "Người phụ nữ tự sống (chủ động) nên dùng V-ing."], ["lives", "Hai động từ chia trong một mệnh đề; cần who lives hoặc living."]], "Rút gọn mệnh đề quan hệ chủ động: V-ing.", "Người phụ nữ sống ở tầng trên là bác sĩ."], ["___ in 1890, the bridge is still in use.", "Built", [["Building", "Cây cầu được xây (bị động) nên dùng V3."], ["It built", "Câu sai nghĩa và thiếu liên từ."]], "Rút gọn mệnh đề bị động: V3.", "Được xây năm 1890, cây cầu vẫn đang được sử dụng."]], "unless-provided": [["We'll go to the beach ___ it rains.", "unless", [["if", "If it rains thì nghĩa ngược lại (đi biển khi mưa)."], ["provided", "Provided = với điều kiện là, không hợp nghĩa."]], "Unless = if … not.", "Chúng tôi sẽ đi biển trừ khi trời mưa."], ["You can borrow my car ___ you drive carefully.", "as long as", [["unless", "Unless làm nghĩa thành 'trừ khi lái cẩn thận', sai ý."], ["in case", "In case = phòng khi, không phải điều kiện."]], "As long as / provided that: miễn là.", "Bạn có thể mượn xe miễn là lái cẩn thận."], ["Take an umbrella ___ it rains.", "in case", [["unless", "Unless nghĩa 'trừ khi', không hợp."], ["if", "Mang ô phòng trường hợp mưa dùng in case."]], "In case: phòng khi.", "Mang ô theo phòng khi trời mưa."]], "prep-collocation": [["I'm interested ___ learning Japanese.", "in", [["on", "Interested đi với in."], ["about", "Cụm đúng là interested in."]], "Interested in + V-ing / N.", "Tôi quan tâm đến việc học tiếng Nhật."], ["She apologised ___ arriving late.", "for", [["about", "Apologise for + V-ing."], ["to", "To đi với người (apologise to someone)."]], "Apologise (to sb) for + V-ing.", "Cô ấy xin lỗi vì đến muộn."], ["It depends ___ the weather.", "on", [["of", "Depend đi với on."], ["from", "Cụm đúng là depend on."]], "Depend on.", "Còn tùy vào thời tiết."]], "havedone": [["I had my hair ___ yesterday.", "cut", [["cutting", "Have + vật + V3 (được ai đó làm cho)."], ["to cut", "Không dùng to V trong cấu trúc này."]], "Have + something + V3.", "Hôm qua tôi đi cắt tóc."], ["We need to get the car ___.", "repaired", [["repair", "Get + vật + V3."], ["repairing", "Xe được sửa (bị động) nên dùng V3."]], "Get + something + V3.", "Chúng ta cần mang xe đi sửa."], ["She is having her house ___ next week.", "painted", [["paint", "Sau having + vật dùng V3."], ["painting", "Nhà được sơn nên dùng V3."]], "Be having + something + V3.", "Tuần sau nhà cô ấy sẽ được sơn."]], "suggest": [["He suggested ___ to the beach.", "going", [["to go", "Suggest + V-ing, không dùng to V."], ["go", "Thiếu -ing (hoặc phải là suggested that we go)."]], "Suggest + V-ing.", "Anh ấy đề nghị đi biển."], ["I suggest that she ___ a doctor.", "see", [["sees", "Sau suggest that dùng động từ nguyên mẫu (thức giả định)."], ["to see", "Không có to sau suggest that + chủ ngữ."]], "Suggest that + S + V nguyên mẫu.", "Tôi đề nghị cô ấy đi khám bác sĩ."], ["She suggested ___ a taxi because it was late.", "taking", [["to take", "Suggest + V-ing, không dùng to V."], ["take", "Thiếu -ing (hoặc phải là suggested that we take)."]], "Suggest + V-ing.", "Cô ấy đề nghị đi taxi vì đã muộn."]], "prefer": [["I prefer tea ___ coffee.", "to", [["than", "Prefer A to B, không dùng than."], ["from", "Cấu trúc đúng là prefer … to …"]], "Prefer A to B.", "Tôi thích trà hơn cà phê."], ["I'd rather ___ at home tonight.", "stay", [["to stay", "Sau would rather dùng nguyên mẫu không to."], ["staying", "Không dùng V-ing sau would rather."]], "Would rather + V.", "Tối nay tôi thích ở nhà hơn."], ["She would rather walk ___ take the bus.", "than", [["to", "Would rather A than B, không dùng to."], ["that", "Cấu trúc đúng là would rather … than …"]], "Would rather + V + than + V.", "Cô ấy thà đi bộ còn hơn đi xe buýt."]], "itstime": [["It's time ___ home.", "to go", [["going", "It's time + to V."], ["go", "Thiếu to."]], "It's time to V.", "Đến lúc về nhà rồi."], ["It's time we ___ the meeting.", "started", [["start", "It's time + S + V quá khứ (thức giả định)."], ["will start", "Không dùng will sau It's time + S."]], "It's (high) time + S + V2.", "Đã đến lúc chúng ta bắt đầu cuộc họp."], ["It's time ___ us to leave.", "for", [["to", "Chỉ người dùng for + người + to V."], ["with", "Cấu trúc đúng là It's time for us to…"]], "It's time for sb to V.", "Đến lúc chúng ta đi rồi."]], "although": [["___ it was raining, we went out.", "Although", [["Despite", "Despite đi với danh từ / V-ing, không đi với mệnh đề có chủ ngữ + động từ."], ["But", "But không đứng đầu câu trong cấu trúc này."]], "Although + mệnh đề.", "Mặc dù trời mưa, chúng tôi vẫn ra ngoài."], ["___ the rain, we went out.", "Despite", [["Although", "Although cần mệnh đề (S + V), the rain chỉ là danh từ."], ["Despite of", "Despite không đi với of."]], "Despite + danh từ.", "Bất chấp cơn mưa, chúng tôi vẫn ra ngoài."], ["In spite ___ being tired, she finished the work.", "of", [["for", "Cụm đúng là in spite of."], ["—", "In spite phải có of."]], "In spite of + V-ing / danh từ.", "Dù mệt, cô ấy vẫn làm xong việc."]], "paired": [["Both my brother ___ I work in Ho Chi Minh City.", "and", [["or", "Both đi với and."], ["nor", "Nor đi với neither."]], "Both … and …", "Cả anh trai tôi và tôi đều làm ở TP. Hồ Chí Minh."], ["She speaks not only English ___ also French.", "but", [["and", "Cấu trúc là not only … but also."], ["or", "Or không đi với not only."]], "Not only … but also …", "Cô ấy không chỉ nói tiếng Anh mà còn nói tiếng Pháp."], ["Neither the food ___ the service was good.", "nor", [["or", "Neither đi với nor."], ["and", "Neither … nor, không dùng and."]], "Neither … nor …", "Cả đồ ăn lẫn phục vụ đều không tốt."]], "prevent": [["The rain prevented us ___ going out.", "from", [["to", "Prevent sb from + V-ing."], ["of", "Không dùng of."]], "Prevent + sb + from + V-ing.", "Cơn mưa khiến chúng tôi không ra ngoài được."], ["Heavy traffic stopped her from ___ on time.", "arriving", [["arrive", "Sau from dùng V-ing."], ["to arrive", "Sau giới từ from không dùng to V."]], "Stop + sb + from + V-ing.", "Kẹt xe khiến cô ấy không đến đúng giờ."], ["This medicine prevents the disease ___.", "from spreading", [["to spread", "Prevent … from + V-ing."], ["spreading from", "Sai trật tự."]], "Prevent + something + from + V-ing.", "Thuốc này ngăn bệnh lây lan."]], "howto-email": [["Dear Mr Brown, I am writing ___ ask about your course.", "to", [["for", "Nêu mục đích viết thư: I am writing to + V."], ["because", "Because cần mệnh đề phía sau."]], "I am writing to + V.", "Kính gửi ông Brown, tôi viết thư để hỏi về khóa học của ông."], ["Could you please ___ me the price list?", "send", [["sending", "Sau could you please dùng nguyên mẫu."], ["to send", "Không có to."]], "Could you please + V?", "Ông/bà vui lòng gửi tôi bảng giá được không?"], ["I look forward to ___ from you.", "hearing", [["hear", "Look forward to + V-ing (to là giới từ)."], ["heard", "Sau to (giới từ) dùng V-ing."]], "I look forward to hearing from you.", "Tôi mong nhận được hồi âm của ông/bà."]], "future-perfect-continuous": [["By June, I ___ here for five years.", "will have been working", [["will be working", "Nhấn mạnh độ dài tính đến một mốc tương lai dùng will have been + V-ing."], ["will have working", "Thiếu been."]], "By + mốc tương lai, will have been + V-ing.", "Đến tháng Sáu, tôi sẽ làm ở đây được năm năm."], ["Next month, they will have ___ the shop for ten years.", "been running", [["been run", "Been run là bị động (được điều hành), sai nghĩa; cần been running."], ["running", "Thiếu been sau have."]], "Will have been + V-ing.", "Tháng sau, họ sẽ điều hành cửa hàng được mười năm."], ["How long will you have been ___ English by the end of the year?", "studying", [["study", "Sau been phải là V-ing."], ["studied", "Thì này dùng V-ing để nhấn mạnh quá trình."]], "How long will you have been + V-ing?", "Đến cuối năm bạn sẽ học tiếng Anh được bao lâu?"]], "polite-tenses": [["I ___ wondering if you could help me with this.", "was", [["were", "Chủ ngữ I đi với was."], ["did", "Wondering (V-ing) đi với be, không dùng did."]], "I was wondering if you could …: dùng quá khứ tiếp diễn để nhờ vả rất lịch sự.", "Không biết bạn có thể giúp tôi việc này không."], ["___ you want to speak to the manager?", "Did", [["Do you wanted", "Sau Do dùng nguyên mẫu; câu lịch sự dùng Did you want."], ["Were", "Want là động từ thường, không dùng Were."]], "Did you want …? (hỏi lịch sự, nhẹ nhàng).", "Anh/chị muốn gặp quản lý ạ?"], ["I ___ to finish the project this week, but it's not possible.", "had hoped", [["have hoped", "Hy vọng không thành trong quá khứ dùng had hoped."], ["had hope", "Sau had dùng V3: hoped."]], "Had hoped to V: đã mong (nhưng không thành).", "Tôi đã mong xong dự án trong tuần này, nhưng không được."]], "inversion-perfect": [["Hardly ___ I arrived when it started to rain.", "had", [["did", "Hardly … when đi với had + V3."], ["have", "Câu ở quá khứ nên dùng had."]], "Hardly + had + S + V3 + when …", "Tôi vừa đến nơi thì trời bắt đầu mưa."], ["No sooner had I closed my eyes ___ the alarm rang.", "than", [["when", "No sooner đi với than."], ["then", "Cấu trúc đúng là no sooner … than."]], "No sooner + had + S + V3 + than …", "Tôi vừa nhắm mắt thì chuông báo thức reo."], ["Scarcely had she sat down ___ the phone rang.", "when", [["than", "Scarcely đi với when (than đi với no sooner)."], ["that", "Không dùng that."]], "Scarcely + had + S + V3 + when …", "Cô ấy vừa ngồi xuống thì điện thoại reo."]], "wish": [["I wish I ___ more free time.", "had", [["have", "Ước điều trái hiện tại dùng quá khứ: had."], ["will have", "Wish không đi với will trong nghĩa này."]], "Wish + S + V2 (ước trái hiện tại).", "Ước gì tôi có nhiều thời gian rảnh hơn."], ["I wish I ___ to the party last night.", "had gone", [["went", "Ước trái quá khứ dùng had + V3."], ["would go", "Không dùng would để ước về quá khứ."]], "Wish + S + had + V3 (ước trái quá khứ).", "Ước gì tối qua tôi đã đi dự tiệc."], ["I wish it ___ stop raining.", "would", [["will", "Mong một điều thay đổi (than phiền) dùng would."], ["stops", "Cấu trúc than phiền là wish + would + V."]], "Wish + S + would + V (mong điều gì thay đổi).", "Ước gì trời tạnh mưa."]], "inversion": [["Never ___ seen such a beautiful place.", "have I", [["I have", "Trạng từ phủ định đứng đầu câu thì phải đảo trợ động từ lên trước chủ ngữ."], ["I", "Thiếu trợ động từ have."]], "Never + trợ động từ + S + V.", "Tôi chưa từng thấy nơi nào đẹp như vậy."], ["Little ___ we know that it was the last time.", "did", [["we did", "Little đứng đầu câu cần đảo ngữ: did we."], ["do", "Câu ở quá khứ (was) nên dùng did."]], "Little + did + S + V.", "Chúng tôi đâu biết đó là lần cuối."], ["Not until I got home ___ I realise my mistake.", "did", [["I did", "Not until … đứng đầu thì vế sau đảo ngữ: did I."], ["had", "Realise là quá khứ đơn, đảo bằng did."]], "Not until … + did + S + V.", "Mãi đến khi về nhà tôi mới nhận ra lỗi của mình."]], "mixedcond": [["If I had taken that job, I ___ in Singapore now.", "would be", [["would have been", "Kết quả ở hiện tại (now) dùng would + V."], ["will be", "Câu không có thật dùng would."]], "If + had V3 (quá khứ), would + V (hiện tại).", "Nếu hồi đó tôi nhận việc ấy, giờ tôi đã ở Singapore."], ["If he weren't so shy, he ___ her long ago.", "would have asked", [["would ask", "Kết quả ở quá khứ (long ago) dùng would have + V3."], ["had asked", "Mệnh đề kết quả cần would."]], "If + V2 (hiện tại), would have + V3 (quá khứ).", "Nếu anh ấy không nhút nhát như vậy thì đã ngỏ lời với cô ấy từ lâu."], ["If I ___ English earlier, my job would be easier now.", "had learnt|had learned", [["learnt", "Điều kiện trái quá khứ cần had + V3."], ["would learn", "Mệnh đề if không dùng would."]], "If + had V3, would + V.", "Nếu tôi học tiếng Anh sớm hơn thì giờ công việc đã dễ hơn."]], "cleft": [["It was my sister ___ booked the tickets.", "who", [["which", "Chỉ người dùng who (hoặc that)."], ["what", "It was … what không đúng cấu trúc câu chẻ."]], "It is/was + người + who + V.", "Chính chị tôi là người đã đặt vé."], ["The reason ___ I called is that I need your advice.", "why", [["because", "The reason why …, không dùng the reason because."], ["what", "Cấu trúc đúng là the reason why."]], "The reason why … is that …", "Lý do tôi gọi là tôi cần lời khuyên của bạn."], ["What I need ___ a long holiday.", "is", [["are", "What … làm chủ ngữ được coi là số ít: is."], ["it is", "Thừa it."]], "What + S + V + is + …", "Điều tôi cần là một kỳ nghỉ dài."]], "themore": [["The more you practise, ___ better you get.", "the", [["—", "Cấu trúc cần the ở cả hai vế."], ["more", "Better đã là so sánh hơn, không thêm more."]], "The + so sánh hơn …, the + so sánh hơn …", "Càng luyện tập nhiều, bạn càng giỏi."], ["The ___ the phone, the better the camera.", "more expensive", [["expensiver", "Tính từ dài dùng more."], ["most expensive", "Cấu trúc càng… càng dùng so sánh hơn, không dùng nhất."]], "The + more + adj dài …", "Điện thoại càng đắt thì camera càng tốt."], ["The sooner we leave, the ___ we will arrive.", "earlier", [["more early", "Early → earlier."], ["earliest", "Dùng so sánh hơn, không dùng so sánh nhất."]], "The + adj-er …, the + adj-er …", "Đi càng sớm, chúng ta đến càng sớm."]], "subjunctive": [["I suggest that he ___ alone.", "go", [["goes", "Sau suggest that dùng động từ nguyên mẫu cho mọi chủ ngữ."], ["went", "Không lùi thì trong thức giả định."]], "Suggest that + S + V nguyên mẫu.", "Tôi đề nghị anh ấy đi một mình."], ["It is important that she ___ before nine.", "arrive", [["arrives", "Sau It is important that dùng nguyên mẫu."], ["will arrive", "Không dùng will."]], "It is important that + S + V nguyên mẫu.", "Điều quan trọng là cô ấy đến trước chín giờ."], ["The committee recommended that the rule ___ changed.", "be", [["is", "Thức giả định bị động: be + V3."], ["was", "Không lùi thì trong thức giả định."]], "Recommend that + S + be + V3.", "Hội đồng đề nghị quy định đó được sửa đổi."]], "relative-advanced": [["This is the report on ___ our decision was based.", "which", [["that", "Sau giới từ không dùng that."], ["what", "Sau giới từ dùng which."]], "Giới từ + which.", "Đây là bản báo cáo mà quyết định của chúng tôi dựa vào."], ["The company has two offices, one of ___ is in Hue.", "which", [["them", "Nối hai mệnh đề cần đại từ quan hệ which, không dùng them."], ["that", "Không dùng that sau of."]], "One of which / some of whom …", "Công ty có hai văn phòng, một trong số đó ở Huế."], ["The man to ___ I spoke was very helpful.", "whom", [["who", "Sau giới từ dùng whom."], ["that", "Không dùng that sau giới từ."]], "Giới từ + whom (người).", "Người đàn ông mà tôi nói chuyện cùng rất nhiệt tình."]], "whatever": [["However ___ I try, I can't remember his name.", "hard", [["hardly", "Hardly nghĩa là hầu như không; cần hard (chăm, cố)."], ["much hard", "Sai cấu trúc."]], "However + adj/adv + S + V.", "Dù cố thế nào tôi cũng không nhớ nổi tên anh ấy."], ["___ you do, don't tell her.", "Whatever", [["However", "Tân ngữ của do là vật nên dùng whatever."], ["What", "What không mang nghĩa 'bất cứ điều gì'."]], "Whatever + S + V: dù làm gì.", "Dù bạn làm gì thì cũng đừng nói với cô ấy."], ["No matter ___ tired you are, please call me.", "how", [["what", "Trước tính từ (tired) dùng how."], ["when", "Không hợp nghĩa."]], "No matter how + adj + S + V.", "Dù mệt đến đâu, hãy gọi cho tôi."]], "emphasis": [["I ___ tell you about the meeting — you must have forgotten.", "did", [["do", "Nhấn mạnh việc đã xảy ra ở quá khứ dùng did."], ["did told", "Sau did dùng nguyên mẫu."]], "Nhấn mạnh: do/does/did + V nguyên mẫu.", "Tôi đã nói với bạn về cuộc họp rồi mà — chắc bạn quên thôi."], ["She ___ like your present. She told me.", "does", [["do", "She đi với does."], ["does likes", "Sau does dùng nguyên mẫu."]], "Does + V để nhấn mạnh.", "Cô ấy thật sự thích món quà của bạn. Cô ấy nói với tôi."], ["It's expensive, and ___ more, it's ugly.", "what's", [["which's", "Cụm cố định là what's more."], ["that's", "Cụm đúng là what's more."]], "What's more: hơn nữa.", "Nó đã đắt, lại còn xấu nữa."]], "discourse": [["The service was slow. ___, the food was excellent.", "However", [["Therefore", "Therefore chỉ kết quả, trong khi hai ý trái ngược."], ["Moreover", "Moreover bổ sung ý cùng chiều, không dùng cho ý trái ngược."]], "However: tuy nhiên.", "Phục vụ chậm. Tuy nhiên, món ăn thì tuyệt."], ["Sales fell last quarter. ___, we cut costs.", "Therefore", [["However", "However chỉ ý trái ngược, ở đây là kết quả."], ["Although", "Although không đứng một mình trước dấu phẩy như vậy."]], "Therefore: vì vậy.", "Doanh số quý trước giảm. Vì vậy, chúng tôi cắt giảm chi phí."], ["The hotel is cheap. ___, it's close to the beach.", "Moreover", [["However", "Hai ý cùng chiều (đều tốt) nên dùng moreover."], ["Therefore", "Gần biển không phải kết quả của rẻ."]], "Moreover: hơn nữa.", "Khách sạn rẻ. Hơn nữa, lại gần biển."]]};
const GX_EXTRA_FX = {
  'pronouns': [['Vị trí của đại từ', [['1', 'Đại từ chủ ngữ (I, you, he, she, it, we, they) + V: She works here.'], ['2', 'V / giới từ + đại từ tân ngữ (me, you, him, her, it, us, them): I know her. · Look at me.'], ['3', 'Tính từ sở hữu (my, your, his, her, its, our, their) + N: my book'], ['4', 'Đại từ sở hữu (mine, yours, his, hers, ours, theirs) đứng một mình = tính từ sở hữu + N: This book is mine.'], ['5', 'S + V + đại từ phản thân (myself, yourself, himself…) khi chủ ngữ và tân ngữ là một: I hurt myself.']]]],
  'nouns': [['Danh từ đếm được', [['+', 'a / an + N đếm được số ít: a book'], ['+', 'số đếm / many / a few / few + N số nhiều: two books, many books'], ['?', 'How many + N số nhiều …?']]],
    ['Danh từ không đếm được', [['+', 'N không đếm được (không có a/an, không thêm -s): water, advice'], ['+', 'much / a little / little + N không đếm được: much time'], ['+', 'đơn vị + of + N: a bottle of water, a piece of advice'], ['?', 'How much + N không đếm được …?']]],
    ['Dùng với cả hai loại', [['+', 'some (khẳng định, lời mời) / any (phủ định, câu hỏi) / a lot of / lots of + N số nhiều hoặc không đếm được']]]],
  'prepositions': [['Giới từ chỉ thời gian', [['at', 'at + giờ / thời điểm: at 7 o\'clock, at night, at the weekend'], ['on', 'on + thứ / ngày cụ thể: on Monday, on 5 May, on my birthday'], ['in', 'in + tháng / năm / mùa / buổi: in May, in 2024, in summer, in the morning']]],
    ['Giới từ chỉ nơi chốn', [['at', 'at + một điểm, địa chỉ: at the bus stop, at home, at 25 Le Loi Street'], ['on', 'on + bề mặt, tên đường, tầng: on the table, on Le Loi Street, on the 3rd floor'], ['in', 'in + không gian bao quanh, thành phố, quốc gia: in the box, in Hanoi, in Vietnam']]],
    ['With / To / For / From', [['with', 'with + người / dụng cụ / đặc điểm: with my friends, with a knife, a girl with long hair'], ['to', 'to + nơi đến / người nhận / điểm kết thúc: go to school, give it to me, from 8 to 5'], ['for', 'for + người hưởng / mục đích / khoảng thời gian: for you, for dinner, for two hours'], ['from', 'from + nguồn gốc / nơi xuất phát / điểm bắt đầu: from Vietnam, a letter from Lan, from Monday']]]],
  'howto-greet': [['Chào hỏi', [['1', 'Hello / Hi / Good morning (afternoon, evening) + (tên).'], ['?', 'How are you? → I\'m fine, thanks. And you?'], ['2', 'Nice to meet you. → Nice to meet you too.']]],
    ['Giới thiệu', [['1', 'My name is + tên. · I\'m + tên.'], ['2', 'I\'m from + nơi. · I work for / at + công ty.'], ['3', 'This is + tên (giới thiệu người khác).']]],
    ['Tạm biệt', [['1', 'Goodbye / Bye / See you + (tomorrow, later, soon).'], ['2', 'Have a nice day! · It was nice meeting you.']]]],
  'howto-personal': [['Hỏi thông tin', [['?', 'What\'s your + name / phone number / email address?'], ['?', 'How old are you? · Where are you from? · What do you do?'], ['?', 'How do you spell + từ?']]],
    ['Trả lời', [['+', 'My name is + tên. · I\'m + số + (years old).'], ['+', 'I\'m a / an + nghề. · I live in + nơi.'], ['+', 'My phone number is + số. · It\'s + đánh vần từng chữ.']]]],
  'howto-time': [['Nói giờ', [['?', 'What time is it? · What\'s the time?'], ['+', 'It\'s + giờ + o\'clock: It\'s seven o\'clock.'], ['+', 'It\'s + phút + past / to + giờ · It\'s half past / a quarter past / a quarter to + giờ.']]],
    ['Thứ, ngày, tháng', [['on', 'on + thứ: on Monday · on + the + số thứ tự + of + tháng: on the fifth of May'], ['in', 'in + tháng / năm: in May, in 2025']]],
    ['Kể việc hằng ngày', [['+', 'I/You/We/They + V + at + giờ: I get up at six. · He/She/It + V-s/es + at + giờ: She gets up at six.'], ['+', 'First … Then … After that … Finally …']]]],
  'howto-family': [['Nói về gia đình', [['+', 'I have / I\'ve got + số + thành viên: I have two sisters.'], ['+', 'There are + số + people in my family.'], ['+', 'My + thành viên + is + nghề / tuổi / tính từ: My father is a doctor.']]],
    ['Hỏi về gia đình', [['?', 'Do you have any brothers or sisters?'], ['?', 'How many people are there in your family?'], ['?', 'What does your + thành viên + do?']]]],
  'simple-vs-continuous': [['Hiện tại đơn: thói quen, sự thật', [['+', 'I/You/We/They + V (nguyên thể) … · He/She/It + V-s/es …'], ['−', 'I/You/We/They + do not (don\'t) + V · He/She/It + does not (doesn\'t) + V'], ['?', 'Do + I/you/we/they + V? · Does + he/she/it + V?']]],
    ['Hiện tại tiếp diễn: đang xảy ra, tạm thời', [['+', 'S + am / is / are + V-ing …'], ['−', 'S + am / is / are + not + V-ing'], ['?', 'Am / Is / Are + S + V-ing?']]],
    ['Động từ trạng thái', [['!', 'know, like, want, need, believe, understand, have (sở hữu) → chỉ dùng thì đơn: I know (không nói I am knowing).']]]],
  'howto-restaurant': [['Vào quán và gọi món', [['1', 'A table for + số người, please.'], ['2', 'Can / Could I have + món, please? · I\'d like + món.'], ['?', 'What do you recommend? · Is this dish spicy?']]],
    ['Tính tiền', [['1', 'Could we have the bill, please?'], ['2', 'Can I pay by card / in cash?']]]],
  'howto-shop': [['Hỏi và tìm hàng', [['?', 'Excuse me, where can I find + N? · Do you have / Have you got + N?'], ['+', 'I\'m just looking, thanks.']]],
    ['Thử đồ và hỏi giá', [['?', 'Can I try this on? · Do you have this in a smaller / bigger size?'], ['?', 'How much is this? · How much are these?']]],
    ['Trả tiền và đổi trả', [['+', 'I\'ll take it. · Can I pay by card?'], ['?', 'Can I return / exchange this?']]]],
  'prep-movement': [['Công thức', [['+', 'S + động từ chuyển động (go, walk, run, drive…) + giới từ + nơi: She walked into the room.'], ['1', 'into / out of: vào trong / ra khỏi'], ['2', 'up / down: lên / xuống'], ['3', 'across / along / through / past: băng qua / dọc theo / xuyên qua / đi ngang qua'], ['4', 'towards / onto / off: về phía / lên trên bề mặt / rời khỏi']]]],
  'gerund-1': [['Động từ + V-ing', [['+', 'I/You/We/They + enjoy / finish / avoid / mind / keep / practise / suggest + V-ing: I enjoy reading. · He/She/It + enjoys / finishes / avoids / minds / keeps / practises / suggests + V-ing: She enjoys reading.']]],
    ['Động từ + to V', [['+', 'I/You/We/They + want / need / decide / hope / plan / promise / agree / refuse + to V: I want to learn. · He/She/It + wants / needs / decides / hopes / plans / promises / agrees / refuses + to V: He wants to learn.']]],
    ['Sau giới từ', [['+', 'giới từ (in, on, at, of, for, about, before, after, without) + V-ing: good at cooking']]]],
  'relative-1': [['Công thức', [['who', 'N chỉ người + who / that + V …: The man who lives next door is a doctor.'], ['which', 'N chỉ vật + which / that + (chủ ngữ) + V …: The book which I bought is good.'], ['whose', 'N + whose + N + V …: a friend whose father is a pilot'], ['where', 'N nơi chốn + where + S + V: the town where I grew up'], ['Ø', 'Đại từ quan hệ làm tân ngữ có thể bỏ: The book (that) I bought…']]]],
  'relative-2': [['Công thức', [['+', 'N (đã xác định) + , who / which + V … , + phần còn lại của câu: My father, who is 70, still works.'], ['+', 'Câu + , which + V … (which thay cho cả câu trước): She failed, which surprised us.'], ['!', 'Có dấu phẩy · không dùng that · không được bỏ đại từ quan hệ']]]],
  'gerund-2': [['Công thức', [['stop', 'stop + V-ing: thôi, bỏ hẳn · stop + to V: dừng lại để làm việc khác'], ['remember', 'remember + V-ing: nhớ đã làm · remember + to V: nhớ phải làm'], ['forget', 'forget + V-ing: quên đã làm · forget + to V: quên phải làm'], ['try', 'try + V-ing: thử làm xem sao · try + to V: cố gắng làm'], ['regret', 'regret + V-ing: hối tiếc đã làm · regret + to V: lấy làm tiếc phải (thông báo)']]]],
  'paired': [['Công thức', [['1', 'Both A and B + V (số nhiều): Both Lan and Nam are here.'], ['2', 'Not only A but (also) B: She is not only smart but also kind.'], ['3', 'Either A or B + V (chia theo B): Either you or I am wrong.'], ['4', 'Neither A nor B + V (chia theo B): Neither the food nor the drinks were cheap.'], ['!', 'A và B phải cùng loại từ: cùng danh từ, cùng tính từ hoặc cùng động từ.']]]],
  'howto-email': [['Email trang trọng', [['1', 'Dear Mr / Ms + họ, · Dear Sir or Madam,'], ['2', 'I am writing to + V … · Could you please + V …?'], ['3', 'I look forward to hearing from you. · Best regards / Yours sincerely, + tên']]],
    ['Email thân mật', [['1', 'Hi / Hello + tên,'], ['2', 'Just a quick note to + V … · Can you + V …?'], ['3', 'See you soon! · Cheers / Best, + tên']]]],
  'howto-opinion': [['Nêu ý kiến', [['+', 'In my opinion, + mệnh đề. · I think / I believe (that) + mệnh đề.'], ['+', 'Personally, I feel that + mệnh đề.']]],
    ['Đồng ý và phản đối', [['+', 'I (completely) agree with you / with + N.'], ['−', 'I see what you mean, but + mệnh đề. · I\'m not so sure about that.']]],
    ['Hỏi ý kiến', [['?', 'What do you think about + N / V-ing? · How do you feel about + N?']]]],
  'wish': [['Ba loại câu ước', [['1', 'Hiện tại: I/You/We/They + wish + chủ ngữ + V2 / were: I wish I had more time. · He/She/It + wishes + chủ ngữ + V2 / were: She wishes she had more time.'], ['2', 'Quá khứ: I/You/We/They + wish + chủ ngữ + had + V3: I wish I had studied harder. · He/She/It + wishes + chủ ngữ + had + V3: He wishes he had studied harder.'], ['3', 'Tương lai / mong thay đổi: I/You/We/They + wish + chủ ngữ + would + V: I wish it would stop raining. · He/She/It + wishes + chủ ngữ + would + V: She wishes he would call.'], ['!', 'If only + mệnh đề: giống wish, nghĩa mạnh hơn (giá mà).']]]]
};
const LS_CEFR = [
 {
  "id": "A1",
  "label": "A1",
  "name": "Mới bắt đầu",
  "rate": 0.8,
  "desc": "Câu rất ngắn, từ vựng quen thuộc về bản thân, gia đình và sinh hoạt hằng ngày. Thì hiện tại đơn.",
  "lessons": [
   {
    "id": "a1-intro",
    "title": "Hello, I'm Linh",
    "vi": "Giới thiệu bản thân",
    "kind": "Đoạn văn",
    "sentences": [
     {
      "en": "Hi, my name is Linh.",
      "vi": "Chào, mình tên là Linh."
     },
     {
      "en": "I am twenty years old.",
      "vi": "Mình hai mươi tuổi."
     },
     {
      "en": "I come from Hue, in Vietnam.",
      "vi": "Mình đến từ Huế, Việt Nam."
     },
     {
      "en": "I am a student at a university.",
      "vi": "Mình là sinh viên đại học."
     },
     {
      "en": "I live with my sister in a small flat.",
      "vi": "Mình sống với chị gái trong một căn hộ nhỏ."
     },
     {
      "en": "I like music and cooking.",
      "vi": "Mình thích âm nhạc và nấu ăn."
     },
     {
      "en": "My favorite food is pho.",
      "vi": "Món ăn yêu thích của mình là phở."
     },
     {
      "en": "Nice to meet you!",
      "vi": "Rất vui được gặp bạn!"
     }
    ]
   },
   {
    "id": "a1-family",
    "title": "My Family",
    "vi": "Gia đình tôi",
    "kind": "Đoạn văn",
    "sentences": [
     {
      "en": "This is my family.",
      "vi": "Đây là gia đình tôi."
     },
     {
      "en": "There are five people in my family.",
      "vi": "Gia đình tôi có năm người."
     },
     {
      "en": "My father is a doctor.",
      "vi": "Bố tôi là bác sĩ."
     },
     {
      "en": "My mother is a teacher.",
      "vi": "Mẹ tôi là giáo viên."
     },
     {
      "en": "I have one brother and one sister.",
      "vi": "Tôi có một anh trai và một em gái."
     },
     {
      "en": "My brother is tall and funny.",
      "vi": "Anh trai tôi cao và vui tính."
     },
     {
      "en": "We have dinner together every evening.",
      "vi": "Tối nào chúng tôi cũng ăn tối cùng nhau."
     },
     {
      "en": "I love my family very much.",
      "vi": "Tôi rất yêu gia đình mình."
     }
    ]
   },
   {
    "id": "a1-day",
    "title": "My Day",
    "vi": "Một ngày của tôi",
    "kind": "Đoạn văn",
    "sentences": [
     {
      "en": "I get up at six o'clock.",
      "vi": "Tôi thức dậy lúc sáu giờ."
     },
     {
      "en": "I brush my teeth and take a shower.",
      "vi": "Tôi đánh răng và tắm."
     },
     {
      "en": "I have bread and milk for breakfast.",
      "vi": "Bữa sáng tôi ăn bánh mì và uống sữa."
     },
     {
      "en": "I go to work by bus.",
      "vi": "Tôi đi làm bằng xe buýt."
     },
     {
      "en": "I work from eight to five.",
      "vi": "Tôi làm việc từ tám giờ đến năm giờ."
     },
     {
      "en": "In the evening, I watch TV.",
      "vi": "Buổi tối, tôi xem TV."
     },
     {
      "en": "I go to bed at ten thirty.",
      "vi": "Tôi đi ngủ lúc mười giờ rưỡi."
     }
    ]
   },
   {
    "id": "a1-cafe",
    "title": "At the Café",
    "vi": "Ở quán cà phê",
    "kind": "Hội thoại",
    "sentences": [
     {
      "en": "Good morning. What would you like?",
      "vi": "Chào buổi sáng. Bạn muốn dùng gì?"
     },
     {
      "en": "I'd like a coffee, please.",
      "vi": "Cho tôi một ly cà phê."
     },
     {
      "en": "Hot or iced?",
      "vi": "Nóng hay đá?"
     },
     {
      "en": "Iced, with milk, please.",
      "vi": "Đá, có sữa nhé."
     },
     {
      "en": "Anything else?",
      "vi": "Còn gì nữa không ạ?"
     },
     {
      "en": "Yes, one chocolate cake.",
      "vi": "Có, một bánh sô-cô-la."
     },
     {
      "en": "That's four dollars.",
      "vi": "Tổng cộng bốn đô la."
     },
     {
      "en": "Here you are. Thank you!",
      "vi": "Gửi bạn. Cảm ơn nhé!"
     }
    ]
   },
   {
    "id": "a1-weather",
    "title": "The Weather Today",
    "vi": "Thời tiết hôm nay",
    "kind": "Đoạn văn",
    "sentences": [
     {
      "en": "Today is Monday.",
      "vi": "Hôm nay là thứ Hai."
     },
     {
      "en": "It is cold and windy.",
      "vi": "Trời lạnh và có gió."
     },
     {
      "en": "The sky is gray.",
      "vi": "Bầu trời xám xịt."
     },
     {
      "en": "I wear a warm coat and a hat.",
      "vi": "Tôi mặc áo khoác ấm và đội mũ."
     },
     {
      "en": "Maybe it will rain this afternoon.",
      "vi": "Có lẽ chiều nay trời sẽ mưa."
     },
     {
      "en": "I take my umbrella with me.",
      "vi": "Tôi mang theo ô."
     },
     {
      "en": "I like sunny days better.",
      "vi": "Tôi thích những ngày nắng hơn."
     }
    ]
   },
   {
    "id": "a1-market",
    "title": "At the Market",
    "vi": "Đi chợ",
    "kind": "Hội thoại",
    "sentences": [
     {
      "en": "Hello. How much are these apples?",
      "vi": "Chào chị. Táo này bao nhiêu tiền?"
     },
     {
      "en": "They are two dollars a kilo.",
      "vi": "Hai đô một ký."
     },
     {
      "en": "I'd like one kilo, please.",
      "vi": "Cho tôi một ký nhé."
     },
     {
      "en": "Do you want some bananas too?",
      "vi": "Bạn có muốn mua thêm chuối không?"
     },
     {
      "en": "No, thank you. Just the apples.",
      "vi": "Không, cảm ơn. Chỉ táo thôi."
     },
     {
      "en": "Here is your change.",
      "vi": "Tiền thối của bạn đây."
     },
     {
      "en": "Thank you. Have a nice day!",
      "vi": "Cảm ơn. Chúc một ngày tốt lành!"
     }
    ]
   },
   {
    "id": "a1-room",
    "title": "My Room",
    "vi": "Phòng của tôi",
    "kind": "Đoạn văn",
    "sentences": [
     {
      "en": "This is my bedroom.",
      "vi": "Đây là phòng ngủ của tôi."
     },
     {
      "en": "It is small but very nice.",
      "vi": "Phòng nhỏ nhưng rất đẹp."
     },
     {
      "en": "There is a bed next to the window.",
      "vi": "Có một cái giường cạnh cửa sổ."
     },
     {
      "en": "My desk is in the corner.",
      "vi": "Bàn học của tôi ở trong góc."
     },
     {
      "en": "There are many books on the shelf.",
      "vi": "Có nhiều sách trên kệ."
     },
     {
      "en": "My cat often sleeps on my bed.",
      "vi": "Con mèo của tôi hay ngủ trên giường tôi."
     },
     {
      "en": "I love my room.",
      "vi": "Tôi rất thích phòng của mình."
     }
    ]
   },
   {
    "id": "a1-friend",
    "title": "My Best Friend",
    "vi": "Bạn thân của tôi",
    "kind": "Đoạn văn",
    "sentences": [
     {
      "en": "My best friend is called Mai.",
      "vi": "Bạn thân của tôi tên là Mai."
     },
     {
      "en": "She lives near my house.",
      "vi": "Cô ấy sống gần nhà tôi."
     },
     {
      "en": "She has long black hair and big eyes.",
      "vi": "Cô ấy có mái tóc đen dài và đôi mắt to."
     },
     {
      "en": "She is kind and very funny.",
      "vi": "Cô ấy tốt bụng và rất vui tính."
     },
     {
      "en": "We go to the same school.",
      "vi": "Chúng tôi học cùng trường."
     },
     {
      "en": "On Sundays, we play badminton in the park.",
      "vi": "Chủ nhật, chúng tôi chơi cầu lông ở công viên."
     },
     {
      "en": "I am happy to have a friend like her.",
      "vi": "Tôi vui vì có một người bạn như cô ấy."
     }
    ]
   }
  ]
 },
 {
  "id": "A2",
  "label": "A2",
  "name": "Sơ cấp",
  "rate": 0.85,
  "desc": "Câu dài hơn, kể chuyện đã qua và việc sắp làm. Thì quá khứ đơn, tương lai, các tình huống mua sắm, đặt chỗ.",
  "lessons": [
   {
    "id": "a2-beach",
    "title": "A Weekend at the Beach",
    "vi": "Cuối tuần ở biển",
    "kind": "Đoạn văn",
    "sentences": [
     {
      "en": "Last weekend, I went to the beach with my friends.",
      "vi": "Cuối tuần trước, tôi đi biển với bạn bè."
     },
     {
      "en": "We left early on Saturday morning.",
      "vi": "Chúng tôi khởi hành sớm vào sáng thứ Bảy."
     },
     {
      "en": "The weather was sunny and warm.",
      "vi": "Thời tiết nắng và ấm áp."
     },
     {
      "en": "We swam in the sea and played volleyball.",
      "vi": "Chúng tôi bơi ở biển và chơi bóng chuyền."
     },
     {
      "en": "In the evening, we ate fresh seafood at a small restaurant.",
      "vi": "Buổi tối, chúng tôi ăn hải sản tươi ở một nhà hàng nhỏ."
     },
     {
      "en": "On Sunday, it rained, so we stayed in the hotel.",
      "vi": "Chủ nhật trời mưa nên chúng tôi ở lại khách sạn."
     },
     {
      "en": "We played cards and talked for hours.",
      "vi": "Chúng tôi chơi bài và trò chuyện hàng giờ liền."
     },
     {
      "en": "It was a short trip, but I really enjoyed it.",
      "vi": "Chuyến đi ngắn nhưng tôi thật sự rất thích."
     }
    ]
   },
   {
    "id": "a2-jacket",
    "title": "Shopping for a Jacket",
    "vi": "Mua áo khoác",
    "kind": "Hội thoại",
    "sentences": [
     {
      "en": "Excuse me, do you have this jacket in a bigger size?",
      "vi": "Xin lỗi, áo khoác này có cỡ lớn hơn không ạ?"
     },
     {
      "en": "Yes, we have it in medium and large.",
      "vi": "Có ạ, chúng tôi có cỡ vừa và lớn."
     },
     {
      "en": "Can I try on the large one?",
      "vi": "Tôi mặc thử cỡ lớn được không?"
     },
     {
      "en": "Of course. The fitting room is over there.",
      "vi": "Tất nhiên rồi. Phòng thử đồ ở đằng kia."
     },
     {
      "en": "It fits well, but I don't like the color.",
      "vi": "Áo vừa nhưng tôi không thích màu này."
     },
     {
      "en": "We also have it in black and dark blue.",
      "vi": "Chúng tôi còn màu đen và xanh đậm."
     },
     {
      "en": "I'll take the black one. How much is it?",
      "vi": "Tôi lấy cái màu đen. Bao nhiêu tiền vậy?"
     },
     {
      "en": "It's forty dollars, but today there is a ten percent discount.",
      "vi": "Giá bốn mươi đô, nhưng hôm nay được giảm mười phần trăm."
     }
    ]
   },
   {
    "id": "a2-booking",
    "title": "Booking a Table",
    "vi": "Đặt bàn nhà hàng",
    "kind": "Hội thoại",
    "sentences": [
     {
      "en": "Good evening, Green Garden Restaurant. How can I help you?",
      "vi": "Chào buổi tối, nhà hàng Green Garden xin nghe. Tôi có thể giúp gì ạ?"
     },
     {
      "en": "Hi, I'd like to book a table for tomorrow night.",
      "vi": "Chào bạn, tôi muốn đặt bàn cho tối mai."
     },
     {
      "en": "How many people will there be?",
      "vi": "Sẽ có bao nhiêu người ạ?"
     },
     {
      "en": "There will be four of us.",
      "vi": "Chúng tôi có bốn người."
     },
     {
      "en": "What time would you like to come?",
      "vi": "Quý khách muốn đến lúc mấy giờ ạ?"
     },
     {
      "en": "Around seven o'clock, if possible.",
      "vi": "Khoảng bảy giờ, nếu được."
     },
     {
      "en": "No problem. Can I have your name, please?",
      "vi": "Không vấn đề gì. Cho tôi xin tên quý khách?"
     },
     {
      "en": "My name is Nam. Thank you very much.",
      "vi": "Tôi tên Nam. Cảm ơn bạn nhiều."
     }
    ]
   },
   {
    "id": "a2-hometown",
    "title": "My Hometown",
    "vi": "Quê hương tôi",
    "kind": "Đoạn văn",
    "sentences": [
     {
      "en": "I grew up in a small town near the mountains.",
      "vi": "Tôi lớn lên ở một thị trấn nhỏ gần núi."
     },
     {
      "en": "It is quiet and the air is very fresh.",
      "vi": "Nơi đó yên tĩnh và không khí rất trong lành."
     },
     {
      "en": "There is a big market in the center of town.",
      "vi": "Có một khu chợ lớn ở trung tâm thị trấn."
     },
     {
      "en": "People there are friendly and helpful.",
      "vi": "Người dân ở đó thân thiện và hay giúp đỡ."
     },
     {
      "en": "When I was a child, I often went fishing with my grandfather.",
      "vi": "Hồi nhỏ, tôi thường đi câu cá với ông."
     },
     {
      "en": "Now I live in the city because of my job.",
      "vi": "Bây giờ tôi sống ở thành phố vì công việc."
     },
     {
      "en": "I miss my hometown, so I visit it every summer.",
      "vi": "Tôi nhớ quê nên hè nào cũng về thăm."
     }
    ]
   },
   {
    "id": "a2-doctor",
    "title": "At the Doctor's",
    "vi": "Đi khám bệnh",
    "kind": "Hội thoại",
    "sentences": [
     {
      "en": "Good morning. What seems to be the problem?",
      "vi": "Chào buổi sáng. Bạn thấy không khoẻ ở đâu?"
     },
     {
      "en": "I've had a headache and a sore throat since yesterday.",
      "vi": "Tôi bị đau đầu và đau họng từ hôm qua."
     },
     {
      "en": "Do you have a fever?",
      "vi": "Bạn có bị sốt không?"
     },
     {
      "en": "Yes, I felt very hot last night.",
      "vi": "Có, tối qua tôi thấy người rất nóng."
     },
     {
      "en": "I think you have the flu.",
      "vi": "Tôi nghĩ bạn bị cúm."
     },
     {
      "en": "Take this medicine three times a day after meals.",
      "vi": "Uống thuốc này ba lần một ngày sau bữa ăn."
     },
     {
      "en": "Drink plenty of water and get some rest.",
      "vi": "Uống nhiều nước và nghỉ ngơi nhé."
     }
    ]
   },
   {
    "id": "a2-directions",
    "title": "Asking for Directions",
    "vi": "Hỏi đường",
    "kind": "Hội thoại",
    "sentences": [
     {
      "en": "Excuse me, how can I get to the train station?",
      "vi": "Xin lỗi, làm sao để đến ga tàu ạ?"
     },
     {
      "en": "Go straight ahead and turn left at the traffic lights.",
      "vi": "Đi thẳng rồi rẽ trái ở chỗ đèn giao thông."
     },
     {
      "en": "Then walk past the post office.",
      "vi": "Sau đó đi qua bưu điện."
     },
     {
      "en": "The station is on your right, opposite the bank.",
      "vi": "Nhà ga nằm bên tay phải, đối diện ngân hàng."
     },
     {
      "en": "Is it far from here?",
      "vi": "Có xa đây không ạ?"
     },
     {
      "en": "No, it's about ten minutes on foot.",
      "vi": "Không, đi bộ khoảng mười phút thôi."
     },
     {
      "en": "Thank you so much for your help.",
      "vi": "Cảm ơn bạn rất nhiều."
     }
    ]
   },
   {
    "id": "a2-birthday",
    "title": "A Birthday Party",
    "vi": "Tiệc sinh nhật",
    "kind": "Đoạn văn",
    "sentences": [
     {
      "en": "Yesterday was my sister's birthday.",
      "vi": "Hôm qua là sinh nhật em gái tôi."
     },
     {
      "en": "We decorated the living room with balloons.",
      "vi": "Chúng tôi trang trí phòng khách bằng bóng bay."
     },
     {
      "en": "My mother made a big chocolate cake.",
      "vi": "Mẹ tôi làm một chiếc bánh sô-cô-la lớn."
     },
     {
      "en": "Her friends came at six o'clock with presents.",
      "vi": "Các bạn của em đến lúc sáu giờ, mang theo quà."
     },
     {
      "en": "We sang Happy Birthday and she blew out the candles.",
      "vi": "Chúng tôi hát mừng sinh nhật và em thổi nến."
     },
     {
      "en": "After dinner, we danced and played games.",
      "vi": "Sau bữa tối, chúng tôi nhảy và chơi trò chơi."
     },
     {
      "en": "She said it was the best birthday ever.",
      "vi": "Em nói đó là sinh nhật tuyệt nhất từ trước đến nay."
     }
    ]
   },
   {
    "id": "a2-plans",
    "title": "Plans for the Holiday",
    "vi": "Kế hoạch cho kỳ nghỉ",
    "kind": "Hội thoại",
    "sentences": [
     {
      "en": "What are you going to do during the holiday?",
      "vi": "Kỳ nghỉ này bạn định làm gì?"
     },
     {
      "en": "I'm going to visit my grandparents in the countryside.",
      "vi": "Mình sẽ về thăm ông bà ở quê."
     },
     {
      "en": "That sounds lovely. How long will you stay?",
      "vi": "Nghe hay quá. Bạn sẽ ở bao lâu?"
     },
     {
      "en": "About a week. I'll help them on the farm.",
      "vi": "Khoảng một tuần. Mình sẽ phụ ông bà việc đồng áng."
     },
     {
      "en": "What about you?",
      "vi": "Còn bạn thì sao?"
     },
     {
      "en": "I'm going to stay at home and study for my exam.",
      "vi": "Mình sẽ ở nhà ôn thi."
     },
     {
      "en": "Good luck! Let's meet when you come back.",
      "vi": "Chúc may mắn! Khi nào bạn về mình gặp nhau nhé."
     }
    ]
   }
  ]
 },
 {
  "id": "B1",
  "label": "B1",
  "name": "Trung cấp",
  "rate": 0.9,
  "desc": "Nói về kinh nghiệm, ý kiến và các tình huống ở nơi làm việc, khi đi du lịch. Hiện tại hoàn thành, câu điều kiện.",
  "lessons": [
   {
    "id": "b1-interview",
    "title": "A Job Interview",
    "vi": "Phỏng vấn xin việc",
    "kind": "Hội thoại",
    "sentences": [
     {
      "en": "Thank you for coming in today. Please have a seat.",
      "vi": "Cảm ơn bạn đã đến hôm nay. Mời bạn ngồi."
     },
     {
      "en": "Could you tell me a little about yourself?",
      "vi": "Bạn có thể giới thiệu đôi chút về bản thân không?"
     },
     {
      "en": "I graduated in marketing two years ago.",
      "vi": "Tôi tốt nghiệp ngành marketing cách đây hai năm."
     },
     {
      "en": "Since then, I have worked for a small online shop.",
      "vi": "Từ đó đến nay, tôi làm việc cho một cửa hàng trực tuyến nhỏ."
     },
     {
      "en": "I'm responsible for planning social media campaigns.",
      "vi": "Tôi phụ trách lên kế hoạch cho các chiến dịch mạng xã hội."
     },
     {
      "en": "Why do you want to work for our company?",
      "vi": "Vì sao bạn muốn làm việc cho công ty chúng tôi?"
     },
     {
      "en": "I'd like to work in a bigger team and learn from experienced people.",
      "vi": "Tôi muốn làm việc trong một nhóm lớn hơn và học hỏi từ những người giàu kinh nghiệm."
     },
     {
      "en": "That sounds great. We will contact you by the end of the week.",
      "vi": "Nghe rất tốt. Chúng tôi sẽ liên hệ với bạn trước cuối tuần."
     }
    ]
   },
   {
    "id": "b1-language",
    "title": "Learning a New Language",
    "vi": "Học một ngôn ngữ mới",
    "kind": "Đoạn văn",
    "sentences": [
     {
      "en": "I have been learning English for about three years.",
      "vi": "Tôi đã học tiếng Anh được khoảng ba năm."
     },
     {
      "en": "At first, listening was the hardest part for me.",
      "vi": "Lúc đầu, nghe là phần khó nhất đối với tôi."
     },
     {
      "en": "People spoke so fast that I could only catch a few words.",
      "vi": "Người ta nói nhanh đến nỗi tôi chỉ nghe được vài từ."
     },
     {
      "en": "Then I started watching short videos with English subtitles.",
      "vi": "Sau đó tôi bắt đầu xem các video ngắn có phụ đề tiếng Anh."
     },
     {
      "en": "I also practice dictation for fifteen minutes every day.",
      "vi": "Tôi cũng luyện chép chính tả mười lăm phút mỗi ngày."
     },
     {
      "en": "My listening has improved a lot since then.",
      "vi": "Từ đó khả năng nghe của tôi đã tiến bộ rất nhiều."
     },
     {
      "en": "If you want to learn a language, the most important thing is to practice regularly.",
      "vi": "Nếu bạn muốn học một ngôn ngữ, điều quan trọng nhất là luyện tập đều đặn."
     }
    ]
   },
   {
    "id": "b1-luggage",
    "title": "Lost Luggage",
    "vi": "Thất lạc hành lý",
    "kind": "Hội thoại",
    "sentences": [
     {
      "en": "Excuse me, my suitcase didn't come out with the other bags.",
      "vi": "Xin lỗi, vali của tôi không ra cùng với các hành lý khác."
     },
     {
      "en": "I'm sorry to hear that. Which flight were you on?",
      "vi": "Tôi rất tiếc. Bạn đi chuyến bay nào?"
     },
     {
      "en": "I was on the flight from Singapore that landed an hour ago.",
      "vi": "Tôi đi chuyến bay từ Singapore hạ cánh cách đây một tiếng."
     },
     {
      "en": "Could you describe your suitcase, please?",
      "vi": "Bạn có thể mô tả chiếc vali được không?"
     },
     {
      "en": "It's a large red suitcase with a black handle.",
      "vi": "Đó là một chiếc vali lớn màu đỏ, tay cầm màu đen."
     },
     {
      "en": "Please fill in this form and write down your hotel address.",
      "vi": "Vui lòng điền vào mẫu đơn này và ghi địa chỉ khách sạn của bạn."
     },
     {
      "en": "We will deliver it to your hotel as soon as we find it.",
      "vi": "Chúng tôi sẽ gửi đến khách sạn ngay khi tìm thấy."
     }
    ]
   },
   {
    "id": "b1-health",
    "title": "Healthy Habits",
    "vi": "Thói quen lành mạnh",
    "kind": "Đoạn văn",
    "sentences": [
     {
      "en": "More and more people are trying to live a healthier life.",
      "vi": "Ngày càng nhiều người cố gắng sống lành mạnh hơn."
     },
     {
      "en": "Doctors say that we should sleep at least seven hours a night.",
      "vi": "Bác sĩ nói rằng chúng ta nên ngủ ít nhất bảy tiếng mỗi đêm."
     },
     {
      "en": "Eating more vegetables and less sugar is also important.",
      "vi": "Ăn nhiều rau hơn và ít đường hơn cũng rất quan trọng."
     },
     {
      "en": "You don't have to go to the gym to stay fit.",
      "vi": "Bạn không cần phải đến phòng tập mới giữ được dáng."
     },
     {
      "en": "Walking for thirty minutes a day can make a big difference.",
      "vi": "Đi bộ ba mươi phút mỗi ngày có thể tạo ra khác biệt lớn."
     },
     {
      "en": "It is also a good idea to spend less time looking at screens.",
      "vi": "Dành ít thời gian nhìn màn hình hơn cũng là một ý hay."
     },
     {
      "en": "Small changes, if you keep them up, can improve your health a lot.",
      "vi": "Những thay đổi nhỏ, nếu duy trì được, có thể cải thiện sức khỏe rất nhiều."
     }
    ]
   },
   {
    "id": "b1-hotel",
    "title": "Checking into a Hotel",
    "vi": "Nhận phòng khách sạn",
    "kind": "Hội thoại",
    "sentences": [
     {
      "en": "Good afternoon. I have a reservation under the name Tran.",
      "vi": "Chào buổi chiều. Tôi đã đặt phòng dưới tên Trần."
     },
     {
      "en": "Let me check. Yes, a double room for three nights.",
      "vi": "Để tôi kiểm tra. Vâng, phòng đôi trong ba đêm."
     },
     {
      "en": "Could I see your passport, please?",
      "vi": "Cho tôi xem hộ chiếu của quý khách được không?"
     },
     {
      "en": "Breakfast is served from six thirty to ten in the restaurant on the first floor.",
      "vi": "Bữa sáng được phục vụ từ sáu giờ rưỡi đến mười giờ ở nhà hàng tầng một."
     },
     {
      "en": "Is the internet free in the room?",
      "vi": "Internet trong phòng có miễn phí không?"
     },
     {
      "en": "Yes, the password is written on your key card.",
      "vi": "Có ạ, mật khẩu được ghi trên thẻ phòng."
     },
     {
      "en": "If you need anything, just call reception.",
      "vi": "Nếu cần gì, quý khách cứ gọi lễ tân."
     }
    ]
   },
   {
    "id": "b1-volunteer",
    "title": "Volunteering",
    "vi": "Làm tình nguyện",
    "kind": "Đoạn văn",
    "sentences": [
     {
      "en": "Last summer, I spent a month volunteering at a school in the mountains.",
      "vi": "Hè năm ngoái, tôi dành một tháng làm tình nguyện ở một ngôi trường trên núi."
     },
     {
      "en": "I taught English to children aged eight to twelve.",
      "vi": "Tôi dạy tiếng Anh cho trẻ em từ tám đến mười hai tuổi."
     },
     {
      "en": "Life there was simple, and there was no internet most of the time.",
      "vi": "Cuộc sống ở đó đơn giản và hầu như không có internet."
     },
     {
      "en": "At first it was hard, but I soon got used to it.",
      "vi": "Lúc đầu thấy khó khăn, nhưng tôi nhanh chóng quen dần."
     },
     {
      "en": "The children were curious and always eager to learn.",
      "vi": "Bọn trẻ rất tò mò và luôn háo hức học hỏi."
     },
     {
      "en": "On my last day, they gave me a card they had made themselves.",
      "vi": "Vào ngày cuối, các em tặng tôi một tấm thiệp tự làm."
     },
     {
      "en": "It was one of the most meaningful experiences of my life.",
      "vi": "Đó là một trong những trải nghiệm ý nghĩa nhất đời tôi."
     }
    ]
   },
   {
    "id": "b1-complaint",
    "title": "Making a Complaint",
    "vi": "Khiếu nại đơn hàng",
    "kind": "Hội thoại",
    "sentences": [
     {
      "en": "Hello, I ordered a pair of shoes online last week.",
      "vi": "Xin chào, tuần trước tôi đặt mua một đôi giày trên mạng."
     },
     {
      "en": "When the package arrived, the shoes were the wrong size.",
      "vi": "Khi nhận hàng, giày lại sai cỡ."
     },
     {
      "en": "I'm very sorry about that. Do you have your order number?",
      "vi": "Tôi rất xin lỗi về việc đó. Bạn có mã đơn hàng không?"
     },
     {
      "en": "Yes, it's on the receipt.",
      "vi": "Có, nó ghi trên hoá đơn."
     },
     {
      "en": "Would you like an exchange or a refund?",
      "vi": "Bạn muốn đổi hàng hay hoàn tiền?"
     },
     {
      "en": "I'd prefer an exchange, if you have my size.",
      "vi": "Tôi muốn đổi hơn, nếu còn cỡ của tôi."
     },
     {
      "en": "No problem. We'll send the new pair tomorrow at no extra cost.",
      "vi": "Không vấn đề gì. Ngày mai chúng tôi sẽ gửi đôi mới, không tính thêm phí."
     }
    ]
   },
   {
    "id": "b1-place",
    "title": "A Place I Love",
    "vi": "Một nơi tôi yêu thích",
    "kind": "Bài nói",
    "sentences": [
     {
      "en": "I'd like to talk about a small café near my office.",
      "vi": "Tôi muốn kể về một quán cà phê nhỏ gần văn phòng."
     },
     {
      "en": "I first went there about two years ago with a colleague.",
      "vi": "Lần đầu tôi đến đó khoảng hai năm trước cùng một đồng nghiệp."
     },
     {
      "en": "It's decorated with plants and old photographs.",
      "vi": "Quán được trang trí bằng cây xanh và những bức ảnh cũ."
     },
     {
      "en": "The music is soft, so it's a perfect place to read or work.",
      "vi": "Nhạc nhẹ nên đây là nơi lý tưởng để đọc sách hay làm việc."
     },
     {
      "en": "The owner always remembers what I like to drink.",
      "vi": "Chủ quán luôn nhớ tôi thích uống gì."
     },
     {
      "en": "Whenever I feel stressed, I go there to relax.",
      "vi": "Mỗi khi căng thẳng, tôi lại đến đó để thư giãn."
     },
     {
      "en": "For me, it feels like a second home.",
      "vi": "Với tôi, nó như ngôi nhà thứ hai."
     }
    ]
   }
  ]
 },
 {
  "id": "B2",
  "label": "B2",
  "name": "Trung cao cấp",
  "rate": 0.95,
  "desc": "Chủ đề xã hội, công việc, môi trường. Câu phức với mệnh đề, từ nối và từ vựng học thuật hơn, tốc độ gần tự nhiên.",
  "lessons": [
   {
    "id": "b2-remote",
    "title": "Working from Home",
    "vi": "Làm việc tại nhà",
    "kind": "Đoạn văn",
    "sentences": [
     {
      "en": "Since the pandemic, working from home has become common in many industries.",
      "vi": "Kể từ đại dịch, làm việc tại nhà đã trở nên phổ biến ở nhiều ngành."
     },
     {
      "en": "Many employees appreciate not having to commute every day.",
      "vi": "Nhiều nhân viên đánh giá cao việc không phải đi lại mỗi ngày."
     },
     {
      "en": "They save time and money, and they can organize their schedule more flexibly.",
      "vi": "Họ tiết kiệm thời gian và tiền bạc, và có thể sắp xếp lịch làm việc linh hoạt hơn."
     },
     {
      "en": "However, working alone can make people feel isolated.",
      "vi": "Tuy nhiên, làm việc một mình có thể khiến người ta cảm thấy cô lập."
     },
     {
      "en": "Some find it difficult to separate their work from their personal life.",
      "vi": "Một số người thấy khó tách biệt công việc với đời sống cá nhân."
     },
     {
      "en": "As a result, many companies now offer a hybrid model.",
      "vi": "Vì vậy, nhiều công ty hiện áp dụng mô hình làm việc kết hợp."
     },
     {
      "en": "Employees spend a few days in the office and the rest of the week at home.",
      "vi": "Nhân viên làm vài ngày ở văn phòng và những ngày còn lại trong tuần ở nhà."
     }
    ]
   },
   {
    "id": "b2-social",
    "title": "Social Media",
    "vi": "Mạng xã hội",
    "kind": "Đoạn văn",
    "sentences": [
     {
      "en": "Social media has completely changed the way we communicate.",
      "vi": "Mạng xã hội đã thay đổi hoàn toàn cách chúng ta giao tiếp."
     },
     {
      "en": "It allows us to stay in touch with friends who live far away.",
      "vi": "Nó giúp chúng ta giữ liên lạc với những người bạn ở xa."
     },
     {
      "en": "On the other hand, spending too much time online can affect our mental health.",
      "vi": "Mặt khác, dành quá nhiều thời gian trên mạng có thể ảnh hưởng đến sức khỏe tinh thần."
     },
     {
      "en": "People often compare their lives with the perfect images they see on the screen.",
      "vi": "Người ta thường so sánh cuộc sống của mình với những hình ảnh hoàn hảo họ thấy trên màn hình."
     },
     {
      "en": "This can lead to stress and low self-esteem, especially among teenagers.",
      "vi": "Điều này có thể dẫn đến căng thẳng và tự ti, đặc biệt ở thanh thiếu niên."
     },
     {
      "en": "Experts recommend setting daily limits and turning off unnecessary notifications.",
      "vi": "Các chuyên gia khuyên nên đặt giới hạn hằng ngày và tắt những thông báo không cần thiết."
     },
     {
      "en": "Used wisely, social media can be a useful tool rather than a distraction.",
      "vi": "Nếu dùng khôn ngoan, mạng xã hội có thể là công cụ hữu ích thay vì gây xao nhãng."
     }
    ]
   },
   {
    "id": "b2-plastic",
    "title": "Plastic Pollution",
    "vi": "Ô nhiễm nhựa",
    "kind": "Đoạn văn",
    "sentences": [
     {
      "en": "Every year, millions of tons of plastic end up in the ocean.",
      "vi": "Mỗi năm, hàng triệu tấn nhựa trôi ra đại dương."
     },
     {
      "en": "Much of it comes from single-use items such as bags, bottles and straws.",
      "vi": "Phần lớn đến từ những đồ dùng một lần như túi, chai và ống hút."
     },
     {
      "en": "Plastic can take hundreds of years to break down completely.",
      "vi": "Nhựa có thể mất hàng trăm năm để phân hủy hoàn toàn."
     },
     {
      "en": "Sea animals often mistake it for food, which can kill them.",
      "vi": "Sinh vật biển thường nhầm nó là thức ăn, điều này có thể khiến chúng chết."
     },
     {
      "en": "Several countries have already banned plastic bags in supermarkets.",
      "vi": "Một số quốc gia đã cấm túi nhựa ở siêu thị."
     },
     {
      "en": "Individuals can help by carrying reusable bags and refusing unnecessary packaging.",
      "vi": "Mỗi người có thể góp phần bằng cách mang túi tái sử dụng và từ chối bao bì không cần thiết."
     },
     {
      "en": "If we all make small changes, the impact on the environment will be significant.",
      "vi": "Nếu tất cả chúng ta cùng thay đổi một chút, tác động đến môi trường sẽ rất đáng kể."
     }
    ]
   },
   {
    "id": "b2-sleep",
    "title": "A Podcast about Sleep",
    "vi": "Podcast về giấc ngủ",
    "kind": "Bài nói",
    "sentences": [
     {
      "en": "Welcome back to the show. Today we're talking about sleep.",
      "vi": "Chào mừng các bạn quay lại chương trình. Hôm nay chúng ta nói về giấc ngủ."
     },
     {
      "en": "Research shows that adults who sleep less than six hours are more likely to get sick.",
      "vi": "Nghiên cứu cho thấy người lớn ngủ ít hơn sáu tiếng dễ bị ốm hơn."
     },
     {
      "en": "Lack of sleep also affects our memory and our ability to concentrate.",
      "vi": "Thiếu ngủ cũng ảnh hưởng đến trí nhớ và khả năng tập trung."
     },
     {
      "en": "One common mistake is using phones in bed late at night.",
      "vi": "Một sai lầm phổ biến là dùng điện thoại trên giường lúc khuya."
     },
     {
      "en": "The blue light from screens makes it harder for the brain to relax.",
      "vi": "Ánh sáng xanh từ màn hình khiến não khó thư giãn hơn."
     },
     {
      "en": "Going to bed at the same time every night helps the body build a routine.",
      "vi": "Đi ngủ vào cùng một giờ mỗi tối giúp cơ thể hình thành thói quen."
     },
     {
      "en": "So tonight, try putting your phone away an hour before bed.",
      "vi": "Vậy tối nay, hãy thử cất điện thoại đi một tiếng trước khi ngủ."
     }
    ]
   },
   {
    "id": "b2-children-tech",
    "title": "Technology and Children",
    "vi": "Công nghệ và trẻ em",
    "kind": "Bài nói",
    "sentences": [
     {
      "en": "In my opinion, technology can be both a blessing and a curse for children.",
      "vi": "Theo tôi, công nghệ vừa có lợi vừa có hại đối với trẻ em."
     },
     {
      "en": "On the positive side, educational apps make learning more interactive and fun.",
      "vi": "Về mặt tích cực, các ứng dụng giáo dục giúp việc học sinh động và thú vị hơn."
     },
     {
      "en": "Children can also access information that was unavailable to previous generations.",
      "vi": "Trẻ em cũng có thể tiếp cận thông tin mà các thế hệ trước không có."
     },
     {
      "en": "However, too much screen time may harm their eyesight and reduce physical activity.",
      "vi": "Tuy nhiên, dùng màn hình quá nhiều có thể hại mắt và làm giảm vận động."
     },
     {
      "en": "It can also make it harder for them to develop social skills.",
      "vi": "Nó cũng có thể khiến trẻ khó phát triển kỹ năng xã hội hơn."
     },
     {
      "en": "I believe parents should set clear rules rather than ban devices completely.",
      "vi": "Tôi cho rằng cha mẹ nên đặt ra quy tắc rõ ràng thay vì cấm hẳn thiết bị."
     },
     {
      "en": "Balance is the key to making technology work for children.",
      "vi": "Sự cân bằng là chìa khoá để công nghệ mang lại lợi ích cho trẻ."
     }
    ]
   },
   {
    "id": "b2-meeting",
    "title": "A Team Meeting",
    "vi": "Cuộc họp nhóm",
    "kind": "Hội thoại",
    "sentences": [
     {
      "en": "Okay everyone, let's get started. We've got a lot to cover today.",
      "vi": "Được rồi mọi người, bắt đầu nhé. Hôm nay có nhiều việc cần bàn."
     },
     {
      "en": "First, sales dropped slightly last quarter.",
      "vi": "Trước hết, doanh số quý trước giảm nhẹ."
     },
     {
      "en": "I think it's mainly because our competitors lowered their prices.",
      "vi": "Tôi nghĩ chủ yếu là do đối thủ đã giảm giá."
     },
     {
      "en": "Should we offer discounts as well, or focus on improving quality?",
      "vi": "Chúng ta có nên giảm giá theo, hay tập trung nâng cao chất lượng?"
     },
     {
      "en": "In my view, cutting prices would hurt our brand in the long run.",
      "vi": "Theo tôi, giảm giá sẽ ảnh hưởng xấu đến thương hiệu về lâu dài."
     },
     {
      "en": "Let's gather more customer feedback before we make a decision.",
      "vi": "Hãy thu thập thêm ý kiến khách hàng trước khi quyết định."
     },
     {
      "en": "Great. We'll discuss the results at next week's meeting.",
      "vi": "Tốt. Chúng ta sẽ bàn kết quả trong cuộc họp tuần sau."
     }
    ]
   },
   {
    "id": "b2-solo",
    "title": "Travelling Alone",
    "vi": "Du lịch một mình",
    "kind": "Đoạn văn",
    "sentences": [
     {
      "en": "Travelling alone used to seem frightening to me.",
      "vi": "Trước đây, du lịch một mình có vẻ đáng sợ với tôi."
     },
     {
      "en": "Last year, I finally decided to take a two week trip around Japan by myself.",
      "vi": "Năm ngoái, tôi cuối cùng cũng quyết định tự đi Nhật hai tuần."
     },
     {
      "en": "Without anyone to rely on, I had to plan every detail and solve problems on my own.",
      "vi": "Không có ai để dựa vào, tôi phải tự lên kế hoạch mọi chi tiết và tự giải quyết vấn đề."
     },
     {
      "en": "Surprisingly, this made me far more confident.",
      "vi": "Thật bất ngờ, điều đó khiến tôi tự tin hơn hẳn."
     },
     {
      "en": "I also found it easier to meet locals and other travellers.",
      "vi": "Tôi cũng thấy dễ làm quen với người dân địa phương và những du khách khác hơn."
     },
     {
      "en": "Of course, there were moments when I felt lonely, especially at dinner.",
      "vi": "Dĩ nhiên cũng có lúc tôi thấy cô đơn, nhất là vào bữa tối."
     },
     {
      "en": "Still, I would recommend it to anyone who wants to step out of their comfort zone.",
      "vi": "Dù vậy, tôi vẫn khuyên ai muốn bước ra khỏi vùng an toàn nên thử."
     }
    ]
   },
   {
    "id": "b2-news",
    "title": "News: Electric Scooters",
    "vi": "Bản tin: xe máy điện",
    "kind": "Bản tin",
    "sentences": [
     {
      "en": "The city government has announced a new plan to reduce air pollution.",
      "vi": "Chính quyền thành phố vừa công bố kế hoạch mới nhằm giảm ô nhiễm không khí."
     },
     {
      "en": "From next year, residents who switch to electric scooters will receive financial support.",
      "vi": "Từ năm sau, người dân chuyển sang xe máy điện sẽ được hỗ trợ tài chính."
     },
     {
      "en": "Hundreds of new charging stations will also be built across the city.",
      "vi": "Hàng trăm trạm sạc mới cũng sẽ được xây dựng khắp thành phố."
     },
     {
      "en": "Officials say that motorbikes are responsible for a large share of emissions.",
      "vi": "Giới chức cho biết xe máy gây ra một phần lớn lượng khí thải."
     },
     {
      "en": "However, some residents worry about the cost and the limited battery range.",
      "vi": "Tuy nhiên, một số người dân lo ngại về chi phí và quãng đường đi được còn hạn chế của pin."
     },
     {
      "en": "Experts believe the plan could succeed if prices continue to fall.",
      "vi": "Các chuyên gia cho rằng kế hoạch có thể thành công nếu giá xe tiếp tục giảm."
     }
    ]
   }
  ]
 },
 {
  "id": "C",
  "label": "C1–C2",
  "name": "Cao cấp",
  "rate": 1.0,
  "desc": "Chủ đề trừu tượng và học thuật, câu dài nhiều mệnh đề, từ vựng nâng cao, đọc ở tốc độ tự nhiên.",
  "lessons": [
   {
    "id": "c-choice",
    "title": "The Paradox of Choice",
    "vi": "Nghịch lý của sự lựa chọn",
    "kind": "Bài giảng",
    "sentences": [
     {
      "en": "We tend to assume that having more options will make us happier.",
      "vi": "Chúng ta thường cho rằng có nhiều lựa chọn hơn sẽ khiến mình hạnh phúc hơn."
     },
     {
      "en": "Yet psychologists have found that an abundance of choice can be paralyzing.",
      "vi": "Thế nhưng các nhà tâm lý học nhận thấy quá nhiều lựa chọn có thể khiến ta tê liệt."
     },
     {
      "en": "When faced with dozens of similar products, many shoppers simply walk away without buying anything.",
      "vi": "Khi đứng trước hàng chục sản phẩm giống nhau, nhiều người bỏ đi mà không mua gì."
     },
     {
      "en": "Even when we do decide, we are often left wondering whether another option would have been better.",
      "vi": "Ngay cả khi đã quyết định, ta vẫn thường băn khoăn liệu lựa chọn khác có tốt hơn không."
     },
     {
      "en": "This constant comparison undermines our satisfaction with the choices we make.",
      "vi": "Sự so sánh liên tục này làm giảm sự hài lòng với những lựa chọn của chúng ta."
     },
     {
      "en": "Some researchers argue that setting clear criteria in advance can ease the burden.",
      "vi": "Một số nhà nghiên cứu cho rằng đặt tiêu chí rõ ràng từ trước có thể giảm bớt gánh nặng."
     },
     {
      "en": "In other words, knowing what is good enough may matter more than finding the best.",
      "vi": "Nói cách khác, biết thế nào là đủ tốt có thể quan trọng hơn việc tìm ra cái tốt nhất."
     }
    ]
   },
   {
    "id": "c-urban",
    "title": "Rapid Urbanization",
    "vi": "Đô thị hóa nhanh",
    "kind": "Bài giảng",
    "sentences": [
     {
      "en": "For the first time in history, more than half of the world's population lives in cities.",
      "vi": "Lần đầu tiên trong lịch sử, hơn một nửa dân số thế giới sống ở thành phố."
     },
     {
      "en": "Urban areas offer better access to jobs, education and healthcare.",
      "vi": "Các khu đô thị mang lại cơ hội tiếp cận việc làm, giáo dục và y tế tốt hơn."
     },
     {
      "en": "However, rapid growth often outpaces the development of infrastructure.",
      "vi": "Tuy nhiên, tốc độ tăng trưởng nhanh thường vượt quá sự phát triển của cơ sở hạ tầng."
     },
     {
      "en": "Traffic congestion, air pollution and rising housing costs are increasingly common.",
      "vi": "Tắc đường, ô nhiễm không khí và giá nhà tăng ngày càng phổ biến."
     },
     {
      "en": "Urban planners are now rethinking how cities should be designed.",
      "vi": "Các nhà quy hoạch đô thị đang suy nghĩ lại về cách thiết kế thành phố."
     },
     {
      "en": "Many advocate for compact neighborhoods where daily needs are within walking distance.",
      "vi": "Nhiều người ủng hộ những khu dân cư nhỏ gọn, nơi mọi nhu cầu hằng ngày đều trong khoảng cách đi bộ."
     },
     {
      "en": "Whether cities become more livable will depend largely on decisions made in the coming decades.",
      "vi": "Thành phố có trở nên đáng sống hơn hay không phụ thuộc phần lớn vào những quyết định trong các thập kỷ tới."
     }
    ]
   },
   {
    "id": "c-ai",
    "title": "Artificial Intelligence and Creativity",
    "vi": "Trí tuệ nhân tạo và sáng tạo",
    "kind": "Bài giảng",
    "sentences": [
     {
      "en": "Not long ago, creativity was considered a uniquely human ability.",
      "vi": "Cách đây không lâu, sự sáng tạo được coi là khả năng chỉ con người mới có."
     },
     {
      "en": "Today, algorithms can compose music, write poetry and generate realistic images in seconds.",
      "vi": "Ngày nay, thuật toán có thể soạn nhạc, làm thơ và tạo hình ảnh chân thực chỉ trong vài giây."
     },
     {
      "en": "This has raised difficult questions about authorship and originality.",
      "vi": "Điều này đặt ra những câu hỏi khó về quyền tác giả và tính độc đáo."
     },
     {
      "en": "Some artists fear that their work will be devalued or even replaced.",
      "vi": "Một số nghệ sĩ lo ngại tác phẩm của họ sẽ bị mất giá trị, thậm chí bị thay thế."
     },
     {
      "en": "Others see these tools as collaborators that can expand what they are able to create.",
      "vi": "Những người khác coi các công cụ này là cộng sự giúp mở rộng những gì họ có thể sáng tạo."
     },
     {
      "en": "Ultimately, the meaning of a work may lie less in how it was made than in how it moves us.",
      "vi": "Suy cho cùng, ý nghĩa của một tác phẩm có lẽ không nằm ở cách nó được tạo ra mà ở cách nó chạm đến chúng ta."
     }
    ]
   },
   {
    "id": "c-failure",
    "title": "The Value of Failure",
    "vi": "Giá trị của thất bại",
    "kind": "Bài giảng",
    "sentences": [
     {
      "en": "Most of us are taught from an early age to avoid mistakes at all costs.",
      "vi": "Phần lớn chúng ta được dạy từ nhỏ phải tránh sai lầm bằng mọi giá."
     },
     {
      "en": "Yet many successful entrepreneurs attribute their achievements to earlier failures.",
      "vi": "Thế nhưng nhiều doanh nhân thành đạt cho rằng thành công của họ đến từ những thất bại trước đó."
     },
     {
      "en": "Failing forces us to reflect on our assumptions and adjust our approach.",
      "vi": "Thất bại buộc chúng ta nhìn lại những giả định của mình và điều chỉnh cách làm."
     },
     {
      "en": "It also builds resilience, the capacity to recover quickly from setbacks.",
      "vi": "Nó cũng rèn khả năng phục hồi, tức là năng lực nhanh chóng vượt qua trở ngại."
     },
     {
      "en": "Organizations that punish every error tend to discourage innovation.",
      "vi": "Những tổ chức trừng phạt mọi sai sót thường kìm hãm sự đổi mới."
     },
     {
      "en": "By contrast, those that treat mistakes as learning opportunities often adapt more effectively.",
      "vi": "Ngược lại, những nơi coi sai lầm là cơ hội học hỏi thường thích nghi hiệu quả hơn."
     },
     {
      "en": "The key is not to celebrate failure itself, but to learn from it as quickly as possible.",
      "vi": "Điều quan trọng không phải là ca ngợi thất bại, mà là học hỏi từ nó nhanh nhất có thể."
     }
    ]
   },
   {
    "id": "c-memory",
    "title": "How Memory Works",
    "vi": "Trí nhớ hoạt động thế nào",
    "kind": "Bài giảng",
    "sentences": [
     {
      "en": "Contrary to popular belief, memory does not work like a video recording.",
      "vi": "Trái với suy nghĩ phổ biến, trí nhớ không hoạt động như một đoạn băng ghi hình."
     },
     {
      "en": "Each time we recall an event, the brain reconstructs it from scattered fragments.",
      "vi": "Mỗi lần nhớ lại một sự kiện, bộ não tái dựng nó từ những mảnh rời rạc."
     },
     {
      "en": "In the process, details can be altered, added or lost entirely.",
      "vi": "Trong quá trình đó, các chi tiết có thể bị thay đổi, thêm vào hoặc mất hẳn."
     },
     {
      "en": "This explains why eyewitness testimony is often less reliable than we assume.",
      "vi": "Điều này lý giải vì sao lời khai nhân chứng thường kém đáng tin hơn ta nghĩ."
     },
     {
      "en": "Emotion also plays a crucial role, making certain moments unusually vivid.",
      "vi": "Cảm xúc cũng đóng vai trò then chốt, khiến một số khoảnh khắc trở nên đặc biệt sống động."
     },
     {
      "en": "Paradoxically, the act of remembering can strengthen and distort a memory at the same time.",
      "vi": "Nghịch lý là hành động nhớ lại vừa có thể củng cố vừa làm sai lệch ký ức cùng lúc."
     }
    ]
   },
   {
    "id": "c-gig",
    "title": "The Gig Economy",
    "vi": "Nền kinh tế việc làm tự do",
    "kind": "Bài giảng",
    "sentences": [
     {
      "en": "Over the past decade, the gig economy has transformed the nature of work.",
      "vi": "Trong thập kỷ qua, nền kinh tế việc làm tự do đã thay đổi bản chất của công việc."
     },
     {
      "en": "Platforms connect millions of freelancers with clients one task at a time.",
      "vi": "Các nền tảng kết nối hàng triệu người làm tự do với khách hàng theo từng đầu việc."
     },
     {
      "en": "Advocates praise the flexibility it offers, allowing people to choose when and where they work.",
      "vi": "Những người ủng hộ ca ngợi sự linh hoạt mà nó mang lại, cho phép người ta chọn thời gian và địa điểm làm việc."
     },
     {
      "en": "Critics, however, point to the lack of job security, health insurance and pension rights.",
      "vi": "Tuy nhiên, những người phản đối chỉ ra sự thiếu ổn định việc làm, bảo hiểm y tế và quyền lương hưu."
     },
     {
      "en": "Governments are struggling to adapt labor laws designed for traditional employment.",
      "vi": "Các chính phủ đang chật vật điều chỉnh luật lao động vốn được thiết kế cho việc làm truyền thống."
     },
     {
      "en": "How this tension is resolved will shape the working lives of an entire generation.",
      "vi": "Cách giải quyết mâu thuẫn này sẽ định hình đời sống lao động của cả một thế hệ."
     }
    ]
   },
   {
    "id": "c-languages",
    "title": "Endangered Languages",
    "vi": "Những ngôn ngữ đang biến mất",
    "kind": "Bài giảng",
    "sentences": [
     {
      "en": "Linguists estimate that roughly half of the world's languages could disappear by the end of this century.",
      "vi": "Các nhà ngôn ngữ học ước tính khoảng một nửa số ngôn ngữ trên thế giới có thể biến mất vào cuối thế kỷ này."
     },
     {
      "en": "When a language dies, it takes with it a unique way of understanding the world.",
      "vi": "Khi một ngôn ngữ mất đi, nó mang theo cả một cách nhìn nhận thế giới độc đáo."
     },
     {
      "en": "Many indigenous languages contain detailed knowledge of local plants, animals and ecosystems.",
      "vi": "Nhiều ngôn ngữ bản địa chứa đựng hiểu biết chi tiết về thực vật, động vật và hệ sinh thái địa phương."
     },
     {
      "en": "Globalization and migration to cities have accelerated the decline.",
      "vi": "Toàn cầu hoá và làn sóng di cư lên thành phố đã đẩy nhanh sự suy giảm này."
     },
     {
      "en": "Younger generations often abandon their heritage language in favor of more widely spoken ones.",
      "vi": "Thế hệ trẻ thường bỏ tiếng nói của cha ông để dùng những ngôn ngữ phổ biến hơn."
     },
     {
      "en": "Revitalization efforts, from school programs to mobile apps, have shown that decline is not inevitable.",
      "vi": "Các nỗ lực phục hồi, từ chương trình trong trường học đến ứng dụng di động, cho thấy sự suy tàn không phải là điều tất yếu."
     }
    ]
   },
   {
    "id": "c-money",
    "title": "Money and Happiness",
    "vi": "Tiền bạc và hạnh phúc",
    "kind": "Bài giảng",
    "sentences": [
     {
      "en": "The relationship between wealth and happiness is more complex than it first appears.",
      "vi": "Mối quan hệ giữa sự giàu có và hạnh phúc phức tạp hơn vẻ ngoài của nó."
     },
     {
      "en": "Up to a certain point, higher income clearly reduces stress and improves quality of life.",
      "vi": "Đến một mức nhất định, thu nhập cao hơn rõ ràng giúp giảm căng thẳng và nâng cao chất lượng cuộc sống."
     },
     {
      "en": "Beyond that threshold, however, additional money seems to bring diminishing returns.",
      "vi": "Tuy nhiên, vượt qua ngưỡng đó, tiền kiếm thêm dường như mang lại lợi ích ngày càng ít."
     },
     {
      "en": "Research suggests that how we spend money matters as much as how much we earn.",
      "vi": "Nghiên cứu cho thấy cách ta tiêu tiền quan trọng không kém việc ta kiếm được bao nhiêu."
     },
     {
      "en": "Spending on experiences and on other people tends to produce more lasting satisfaction than buying possessions.",
      "vi": "Chi tiêu cho trải nghiệm và cho người khác thường mang lại sự hài lòng bền lâu hơn mua sắm đồ vật."
     },
     {
      "en": "Perhaps the real question is not how to get rich, but how to use what we have wisely.",
      "vi": "Có lẽ câu hỏi thực sự không phải là làm sao để giàu, mà là dùng những gì mình có sao cho khôn ngoan."
     }
    ]
   }
  ]
 }
];
const IRR_EX = {"abide":["She has always abided by the rules.","Cô ấy luôn tuân thủ các quy định."],"arise":["A problem arose during the meeting.","Một vấn đề đã nảy sinh trong cuộc họp."],"awake":["I awoke early because of the noise.","Tôi tỉnh dậy sớm vì tiếng ồn."],"babysit":["I babysat my cousin's son last night.","Tối qua tôi trông con trai của chị họ."],"be":["I was tired, but my friends were happy.","Tôi mệt, nhưng bạn bè tôi thì vui."],"bear":["She bore the pain without crying.","Cô ấy chịu đựng cơn đau mà không khóc."],"beat":["Our team beat them three to one.","Đội chúng tôi đã thắng họ ba một."],"become":["He became a doctor at the age of thirty.","Anh ấy trở thành bác sĩ năm ba mươi tuổi."],"befall":["Nobody knew what had befallen the old ship.","Không ai biết chuyện gì đã xảy đến với con tàu cũ."],"beget":["In the old story, the king begot three sons.","Trong câu chuyện xưa, nhà vua sinh được ba người con trai."],"begin":["The film began at eight o'clock.","Bộ phim bắt đầu lúc tám giờ."],"behold":["We beheld the sunrise over the mountains.","Chúng tôi ngắm bình minh trên dãy núi."],"bend":["He bent down to pick up the coin.","Anh ấy cúi xuống nhặt đồng xu."],"beseech":["She besought him to stay.","Cô ấy van nài anh ấy ở lại."],"beset":["The project was beset by problems from the start.","Dự án gặp đủ thứ khó khăn ngay từ đầu."],"bet":["I bet him that it would rain.","Tôi đã cược với anh ấy rằng trời sẽ mưa."],"bid":["He bid two million for the old painting.","Ông ấy trả giá hai triệu cho bức tranh cũ."],"bind":["The papers were bound with a red string.","Xấp giấy được buộc bằng một sợi dây đỏ."],"bite":["A dog bit my leg yesterday.","Hôm qua một con chó cắn vào chân tôi."],"bleed":["His nose bled after the fall.","Mũi anh ấy chảy máu sau cú ngã."],"blow":["The wind blew my hat away.","Gió thổi bay mũ của tôi."],"break":["I broke my glasses this morning.","Sáng nay tôi làm vỡ kính."],"breed":["My uncle bred chickens on his farm.","Chú tôi nuôi gà ở trang trại."],"bring":["She brought a cake to the party.","Cô ấy mang một chiếc bánh đến bữa tiệc."],"broadcast":["The match was broadcast live on TV.","Trận đấu được phát trực tiếp trên TV."],"browbeat":["He was browbeaten into signing the paper.","Anh ấy bị dọa nạt đến mức phải ký giấy."],"build":["They built a new bridge last year.","Năm ngoái họ đã xây một cây cầu mới."],"burn":["I burnt my hand on the hot pan.","Tôi bị bỏng tay vì cái chảo nóng."],"burst":["The balloon burst with a loud bang.","Quả bóng bay nổ đánh bốp."],"buy":["I bought a new phone last week.","Tuần trước tôi mua một chiếc điện thoại mới."],"cast":["She was cast as the queen in the film.","Cô ấy được chọn đóng vai nữ hoàng trong phim."],"catch":["He caught the ball with one hand.","Anh ấy bắt bóng bằng một tay."],"choose":["We chose the red one.","Chúng tôi đã chọn cái màu đỏ."],"cleave":["He cleaved the wood with an axe.","Anh ấy bổ củi bằng rìu."],"cling":["The child clung to her mother's hand.","Đứa bé bám chặt tay mẹ."],"come":["My parents came to visit me on Sunday.","Bố mẹ đến thăm tôi vào Chủ nhật."],"cost":["The tickets cost fifty dollars each.","Mỗi vé giá năm mươi đô la."],"creep":["The cat crept towards the bird.","Con mèo rón rén tiến về phía con chim."],"cut":["I cut my finger while I was cooking.","Tôi bị đứt tay khi đang nấu ăn."],"daydream":["I daydreamed about the beach all afternoon.","Tôi mơ mộng về bãi biển cả buổi chiều."],"deal":["The manager dealt with the problem quickly.","Quản lý đã giải quyết vấn đề nhanh chóng."],"dig":["The children dug a hole in the sand.","Bọn trẻ đào một cái hố trên cát."],"dive":["He dived into the cold water.","Anh ấy nhảy xuống làn nước lạnh."],"do":["I did my homework after dinner.","Tôi làm bài tập sau bữa tối."],"draw":["My son drew a picture of our house.","Con trai tôi vẽ một bức tranh ngôi nhà của chúng tôi."],"dream":["I dreamt about my old school last night.","Tối qua tôi mơ về ngôi trường cũ."],"drink":["We drank coffee at a small café.","Chúng tôi uống cà phê ở một quán nhỏ."],"drive":["She drove to work this morning.","Sáng nay cô ấy lái xe đi làm."],"dwell":["He dwelt on his mistakes for weeks.","Anh ấy cứ nghĩ mãi về lỗi lầm của mình suốt nhiều tuần."],"eat":["Have you eaten breakfast yet?","Bạn ăn sáng chưa?"],"fall":["The old man fell on the stairs.","Ông cụ bị ngã trên cầu thang."],"feed":["I fed the cat before I left.","Tôi cho mèo ăn trước khi đi."],"feel":["I felt sick after the long trip.","Tôi thấy mệt sau chuyến đi dài."],"fight":["The two boys fought in the playground.","Hai cậu bé đánh nhau ở sân chơi."],"find":["I found my keys under the sofa.","Tôi tìm thấy chìa khóa dưới ghế sofa."],"flee":["Many people fled the city before the storm.","Nhiều người đã rời khỏi thành phố trước cơn bão."],"fling":["He flung his bag on the bed.","Anh ấy quăng cái túi lên giường."],"fly":["We flew to Da Nang last summer.","Mùa hè năm ngoái chúng tôi bay ra Đà Nẵng."],"forbid":["Smoking is forbidden in this building.","Cấm hút thuốc trong tòa nhà này."],"forecast":["Rain is forecast for tomorrow.","Dự báo ngày mai có mưa."],"foresee":["Nobody foresaw the problem.","Không ai thấy trước vấn đề đó."],"foretell":["The old woman foretold his future.","Bà cụ tiên đoán tương lai của anh ấy."],"forget":["I forgot to call my mother.","Tôi quên gọi cho mẹ."],"forgive":["She forgave him for being late.","Cô ấy tha thứ cho anh ấy vì đến muộn."],"forsake":["He never forsook his friends.","Anh ấy không bao giờ bỏ rơi bạn bè."],"freeze":["The lake froze last winter.","Mùa đông năm ngoái mặt hồ đóng băng."],"get":["I got a message from my boss.","Tôi nhận được tin nhắn từ sếp."],"give":["My grandmother gave me a book.","Bà tặng tôi một cuốn sách."],"go":["We went to the cinema on Saturday.","Chúng tôi đi xem phim vào thứ Bảy."],"grind":["She ground the coffee beans by hand.","Cô ấy xay hạt cà phê bằng tay."],"grow":["My father grew vegetables in the garden.","Bố tôi trồng rau trong vườn."],"hang":["I hung the picture on the wall.","Tôi treo bức tranh lên tường."],"have":["We had a great time in Hoi An.","Chúng tôi đã có khoảng thời gian tuyệt vời ở Hội An."],"hear":["I heard a strange noise last night.","Tối qua tôi nghe thấy một tiếng động lạ."],"hew":["The statue was hewn from a single stone.","Bức tượng được đẽo từ một khối đá duy nhất."],"hide":["The boy hid behind the door.","Cậu bé trốn sau cánh cửa."],"hit":["The car hit a tree.","Chiếc xe đâm vào một cái cây."],"hold":["She held the baby in her arms.","Cô ấy bế em bé trong tay."],"hurt":["I hurt my back while lifting the box.","Tôi bị đau lưng khi nhấc cái hộp."],"inlay":["The box was inlaid with mother-of-pearl.","Chiếc hộp được khảm xà cừ."],"input":["I input all the data yesterday.","Hôm qua tôi đã nhập hết dữ liệu."],"keep":["She kept all his letters.","Cô ấy giữ lại tất cả thư của anh ấy."],"kneel":["He knelt down beside the bed.","Anh ấy quỳ xuống cạnh giường."],"knit":["My grandmother knitted me a scarf.","Bà đan cho tôi một chiếc khăn quàng."],"know":["I knew the answer, but I forgot it.","Tôi biết câu trả lời nhưng lại quên mất."],"lay":["She laid the baby on the bed.","Cô ấy đặt em bé lên giường."],"lead":["The guide led us to the old temple.","Hướng dẫn viên dẫn chúng tôi đến ngôi chùa cổ."],"lean":["He leant against the wall.","Anh ấy dựa vào tường."],"leap":["The dog leapt over the fence.","Con chó nhảy vọt qua hàng rào."],"learn":["I learnt to swim when I was six.","Tôi học bơi khi lên sáu."],"leave":["He left the office at six.","Anh ấy rời văn phòng lúc sáu giờ."],"lend":["I lent my bike to my neighbour.","Tôi cho hàng xóm mượn xe đạp."],"let":["My mother let me stay up late.","Mẹ cho tôi thức khuya."],"lie":["I lay on the beach all afternoon.","Tôi nằm trên bãi biển cả buổi chiều."],"light":["We lit some candles for the dinner.","Chúng tôi thắp vài cây nến cho bữa tối."],"lip-read":["She lip-read what he was saying.","Cô ấy đọc khẩu hình để biết anh ấy đang nói gì."],"lose":["I lost my wallet on the bus.","Tôi làm mất ví trên xe buýt."],"make":["She made a cake for my birthday.","Cô ấy làm một chiếc bánh cho sinh nhật tôi."],"meet":["I met my wife at university.","Tôi gặp vợ tôi ở trường đại học."],"mean":["I meant to call you, but I forgot.","Tôi định gọi cho bạn nhưng lại quên mất."],"mislay":["I've mislaid my glasses again.","Tôi lại để thất lạc cặp kính rồi."],"mislead":["The advert misled many customers.","Quảng cáo đó đã đánh lừa nhiều khách hàng."],"misread":["I misread the time and arrived late.","Tôi đọc nhầm giờ nên đến muộn."],"misspell":["He misspelt my name on the card.","Anh ấy viết sai chính tả tên tôi trên tấm thiệp."],"mistake":["I mistook her for her sister.","Tôi nhầm cô ấy với chị của cô ấy."],"misunderstand":["Sorry, I misunderstood your question.","Xin lỗi, tôi đã hiểu lầm câu hỏi của bạn."],"mow":["My father mowed the grass on Sunday.","Bố tôi cắt cỏ vào Chủ nhật."],"offset":["The higher price was offset by better quality.","Giá cao hơn được bù lại bằng chất lượng tốt hơn."],"outbid":["A collector outbid us at the auction.","Một nhà sưu tập trả giá cao hơn chúng tôi ở buổi đấu giá."],"outdo":["She outdid everyone in the competition.","Cô ấy làm giỏi hơn tất cả mọi người trong cuộc thi."],"outgrow":["My son has outgrown all his shoes.","Con trai tôi đã lớn đến mức không vừa đôi giày nào nữa."],"outrun":["The thief outran the police.","Tên trộm chạy nhanh hơn cảnh sát."],"outshine":["The young player outshone the stars.","Cầu thủ trẻ nổi bật hơn cả các ngôi sao."],"overcome":["She overcame her fear of flying.","Cô ấy đã vượt qua nỗi sợ đi máy bay."],"overdo":["I overdid it at the gym yesterday.","Hôm qua tôi tập gym quá sức."],"overeat":["I overate at the wedding party.","Tôi ăn quá nhiều ở tiệc cưới."],"overfeed":["They overfed the fish, and some died.","Họ cho cá ăn quá nhiều nên vài con bị chết."],"overhang":["The tree overhung the road.","Cái cây nhô ra phía trên con đường."],"overhear":["I overheard them talking about me.","Tôi nghe lỏm được họ nói về tôi."],"overpay":["I think we overpaid for this room.","Tôi nghĩ chúng ta đã trả quá nhiều cho căn phòng này."],"override":["The manager overrode my decision.","Quản lý đã gạt bỏ quyết định của tôi."],"overrun":["The meeting overran by an hour.","Cuộc họp kéo dài quá giờ một tiếng."],"oversee":["She oversaw the whole project.","Cô ấy giám sát toàn bộ dự án."],"oversleep":["I overslept and missed the bus.","Tôi ngủ quên và lỡ chuyến xe buýt."],"overtake":["A motorbike overtook us on the left.","Một chiếc xe máy vượt chúng tôi bên trái."],"overthrow":["The king was overthrown in 1789.","Nhà vua bị lật đổ năm 1789."],"partake":["Everyone partook of the meal.","Mọi người đều cùng dùng bữa."],"pay":["I paid for dinner last night.","Tối qua tôi trả tiền bữa tối."],"plead":["He pleaded with her to stay.","Anh ấy cầu xin cô ấy ở lại."],"proofread":["I proofread the report twice.","Tôi đã đọc soát lỗi bản báo cáo hai lần."],"prove":["The test proved that he was right.","Bài kiểm tra chứng minh anh ấy đúng."],"put":["I put the keys on the table.","Tôi đặt chìa khóa lên bàn."],"quit":["She quit her job last month.","Tháng trước cô ấy đã nghỉ việc."],"read":["I read that book last summer.","Tôi đã đọc cuốn sách đó mùa hè năm ngoái."],"rebuild":["The village was rebuilt after the flood.","Ngôi làng được xây lại sau trận lũ."],"redo":["I redid the test because I made many mistakes.","Tôi làm lại bài kiểm tra vì mắc nhiều lỗi."],"remake":["The old film was remade in 2020.","Bộ phim cũ được làm lại năm 2020."],"rend":["A loud cry rent the air.","Một tiếng kêu lớn xé toạc không gian."],"repay":["I repaid the money I borrowed.","Tôi đã trả lại số tiền đã mượn."],"resell":["He resold the car for a profit.","Anh ấy bán lại chiếc xe và có lãi."],"reset":["I reset my password this morning.","Sáng nay tôi đã đặt lại mật khẩu."],"retell":["The teacher retold the story in simple English.","Cô giáo kể lại câu chuyện bằng tiếng Anh đơn giản."],"rethink":["We rethought our plan after the meeting.","Chúng tôi nghĩ lại kế hoạch sau cuộc họp."],"rewind":["He rewound the video to watch the goal again.","Anh ấy tua lại video để xem lại bàn thắng."],"rewrite":["I rewrote my essay three times.","Tôi đã viết lại bài luận ba lần."],"rid":["We finally got rid of the old sofa.","Cuối cùng chúng tôi cũng bỏ được cái ghế sofa cũ."],"ride":["She rode her bike to school.","Cô ấy đạp xe đến trường."],"ring":["The phone rang in the middle of the night.","Điện thoại reo lúc nửa đêm."],"rise":["Prices rose sharply last year.","Giá cả tăng mạnh năm ngoái."],"run":["I ran five kilometres this morning.","Sáng nay tôi chạy năm cây số."],"say":["He said goodbye and left.","Anh ấy chào tạm biệt rồi đi."],"see":["I saw an old friend at the market.","Tôi gặp một người bạn cũ ở chợ."],"seek":["They sought help from the police.","Họ đã tìm kiếm sự giúp đỡ từ cảnh sát."],"sell":["We sold our old car last month.","Tháng trước chúng tôi đã bán chiếc xe cũ."],"send":["I sent you an email yesterday.","Hôm qua tôi đã gửi email cho bạn."],"set":["She set the alarm for six o'clock.","Cô ấy đặt báo thức lúc sáu giờ."],"sew":["My mother sewed a button on my shirt.","Mẹ khâu một cái cúc vào áo sơ mi của tôi."],"shake":["He shook my hand and smiled.","Anh ấy bắt tay tôi và mỉm cười."],"shear":["The farmer sheared his sheep in spring.","Người nông dân xén lông cừu vào mùa xuân."],"shed":["The trees shed their leaves in autumn.","Cây cối rụng lá vào mùa thu."],"shine":["The sun shone all day.","Mặt trời chiếu sáng cả ngày."],"shoot":["They shot the film in Ninh Binh.","Họ quay bộ phim ở Ninh Bình."],"show":["She showed me her new flat.","Cô ấy cho tôi xem căn hộ mới."],"shrink":["My shirt shrank in the wash.","Áo sơ mi của tôi bị co lại khi giặt."],"shut":["He shut the door quietly.","Anh ấy nhẹ nhàng đóng cửa."],"sightsee":["We sightsaw in Hanoi for two days.","Chúng tôi đi ngắm cảnh ở Hà Nội hai ngày."],"sing":["She sang a song at the party.","Cô ấy hát một bài ở bữa tiệc."],"sink":["The boat sank in the storm.","Con thuyền bị chìm trong cơn bão."],"sit":["We sat in the front row.","Chúng tôi ngồi ở hàng ghế đầu."],"slay":["In the story, the prince slew the dragon.","Trong truyện, hoàng tử đã giết con rồng."],"sleep":["I slept for ten hours last night.","Tối qua tôi ngủ mười tiếng."],"slide":["The children slid down the hill.","Bọn trẻ trượt xuống đồi."],"sling":["He slung his bag over his shoulder.","Anh ấy quàng túi qua vai."],"slink":["The dog slunk away after breaking the vase.","Con chó lẻn đi sau khi làm vỡ cái bình."],"slit":["She slit the envelope open with a knife.","Cô ấy rạch phong bì bằng dao."],"smell":["The kitchen smelt of fresh bread.","Căn bếp thơm mùi bánh mì mới nướng."],"smite":["The hero smote his enemy with a sword.","Người anh hùng giáng kiếm vào kẻ thù."],"sow":["The farmers sowed rice in March.","Nông dân gieo lúa vào tháng Ba."],"speak":["I spoke to the manager this morning.","Sáng nay tôi đã nói chuyện với quản lý."],"speed":["The car sped past us.","Chiếc xe lao vụt qua chúng tôi."],"spell":["He spelt my name wrong.","Anh ấy đánh vần sai tên tôi."],"spend":["We spent the weekend at the beach.","Chúng tôi dành cuối tuần ở bãi biển."],"spill":["I spilt coffee on my shirt.","Tôi làm đổ cà phê lên áo."],"spin":["The wheel spun faster and faster.","Bánh xe quay ngày càng nhanh."],"spit":["The baby spat out the medicine.","Em bé nhổ thuốc ra."],"split":["We split the bill between four people.","Chúng tôi chia hóa đơn cho bốn người."],"spoil":["The rain spoilt our picnic.","Cơn mưa làm hỏng buổi dã ngoại của chúng tôi."],"spoon-feed":["The students were spoon-fed all the answers.","Học sinh được làm hộ hết các câu trả lời."],"spread":["The news spread quickly.","Tin tức lan truyền nhanh chóng."],"spring":["The cat sprang onto the table.","Con mèo nhảy phốc lên bàn."],"stand":["We stood in line for an hour.","Chúng tôi đứng xếp hàng một tiếng."],"steal":["Someone stole my bike last night.","Tối qua có người đã lấy trộm xe đạp của tôi."],"stick":["The car got stuck in the mud.","Chiếc xe bị mắc kẹt trong bùn."],"sting":["A bee stung me on the arm.","Một con ong đốt vào tay tôi."],"stink":["The fridge stank of old fish.","Tủ lạnh bốc mùi cá ôi."],"strew":["Toys were strewn all over the floor.","Đồ chơi vương vãi khắp sàn nhà."],"stride":["He strode into the room.","Anh ấy sải bước vào phòng."],"strike":["The clock struck twelve.","Đồng hồ điểm mười hai giờ."],"string":["We strung lights around the tree.","Chúng tôi giăng đèn quanh cái cây."],"strive":["She has always striven to do her best.","Cô ấy luôn cố gắng làm tốt nhất."],"sublet":["I sublet my room while I was abroad.","Tôi cho thuê lại phòng trong thời gian ở nước ngoài."],"swear":["He swore that he was telling the truth.","Anh ấy thề rằng mình nói thật."],"sweep":["I swept the floor after dinner.","Tôi quét nhà sau bữa tối."],"swell":["My ankle has swollen after the fall.","Mắt cá chân tôi bị sưng sau cú ngã."],"swim":["We swam in the sea every morning.","Sáng nào chúng tôi cũng bơi ở biển."],"swing":["The door swung open.","Cánh cửa bật mở."],"take":["I took a lot of photos in Sa Pa.","Tôi chụp rất nhiều ảnh ở Sa Pa."],"teach":["My father taught me to ride a bike.","Bố dạy tôi đi xe đạp."],"tear":["I tore my jeans on a nail.","Tôi làm rách quần jean vì vướng đinh."],"tell":["She told me a funny story.","Cô ấy kể cho tôi một câu chuyện vui."],"think":["I thought you were at work.","Tôi tưởng bạn đang ở chỗ làm."],"thrive":["The business thrived after the move.","Việc kinh doanh phát triển mạnh sau khi chuyển địa điểm."],"throw":["He threw the ball to his dog.","Anh ấy ném bóng cho con chó."],"thrust":["She thrust the letter into my hand.","Cô ấy dúi lá thư vào tay tôi."],"tread":["Someone trod on my foot in the crowd.","Ai đó giẫm vào chân tôi trong đám đông."],"undercut":["The new shop undercut its rivals.","Cửa hàng mới bán rẻ hơn các đối thủ."],"undergo":["He underwent an operation last week.","Tuần trước anh ấy đã trải qua một ca phẫu thuật."],"underlie":["Several problems have underlain the decision.","Nhiều vấn đề là cơ sở cho quyết định này."],"underpay":["The workers were underpaid for years.","Công nhân bị trả lương thấp trong nhiều năm."],"undersell":["The supermarket undersold the small shops.","Siêu thị bán rẻ hơn các cửa hàng nhỏ."],"understand":["I understood everything the teacher said.","Tôi hiểu hết những gì thầy giáo nói."],"undertake":["She undertook the task without complaint.","Cô ấy đảm nhận nhiệm vụ mà không phàn nàn."],"underwrite":["The loan was underwritten by a big bank.","Khoản vay được một ngân hàng lớn bảo lãnh."],"undo":["He undid his tie and sat down.","Anh ấy tháo cà vạt rồi ngồi xuống."],"unwind":["We unwound by the pool after work.","Chúng tôi thư giãn bên hồ bơi sau giờ làm."],"uphold":["The court upheld the decision.","Tòa án giữ nguyên quyết định."],"upset":["His words upset her a lot.","Lời nói của anh ấy làm cô ấy rất buồn."],"wake":["I woke up at five this morning.","Sáng nay tôi thức dậy lúc năm giờ."],"wear":["She wore a red dress to the party.","Cô ấy mặc một chiếc váy đỏ đến bữa tiệc."],"weave":["This basket was woven by hand.","Chiếc giỏ này được đan bằng tay."],"wed":["They wed in a small church.","Họ cưới nhau ở một nhà thờ nhỏ."],"weep":["She wept when she heard the news.","Cô ấy khóc khi nghe tin."],"wet":["The baby wet the bed again.","Em bé lại tè dầm."],"win":["Our team won the final.","Đội chúng tôi đã thắng trận chung kết."],"wind":["I wound the old clock every night.","Tối nào tôi cũng lên dây cái đồng hồ cũ."],"withdraw":["I withdrew some money from the ATM.","Tôi rút ít tiền ở cây ATM."],"withhold":["The company withheld part of his salary.","Công ty giữ lại một phần lương của anh ấy."],"withstand":["The house withstood the strong storm.","Ngôi nhà chịu được cơn bão mạnh."],"wring":["She wrung out the wet towel.","Cô ấy vắt khô chiếc khăn ướt."],"write":["I wrote a letter to my grandmother.","Tôi viết một lá thư cho bà."],"fit":["The shoes fit me perfectly.","Đôi giày vừa với tôi hoàn hảo."],"sneak":["He sneaked out of the house at night.","Cậu ấy lẻn ra khỏi nhà vào ban đêm."],"reread":["I reread his letter many times.","Tôi đọc đi đọc lại lá thư của anh ấy."],"rerun":["The old show was rerun last summer.","Chương trình cũ được chiếu lại mùa hè năm ngoái."],"retake":["She retook the driving test and passed.","Cô ấy thi lại bằng lái và đã đậu."],"resit":["He resat the maths exam in August.","Anh ấy thi lại môn toán vào tháng Tám."],"resend":["I resent the email because she didn't get it.","Tôi gửi lại email vì cô ấy không nhận được."],"relearn":["After the accident, he relearnt how to walk.","Sau tai nạn, anh ấy phải học đi lại từ đầu."],"relight":["We relit the fire after the rain.","Chúng tôi nhóm lại đống lửa sau cơn mưa."],"recast":["The director recast the main role.","Đạo diễn đã chọn người khác cho vai chính."],"mishear":["Sorry, I misheard your name.","Xin lỗi, tôi nghe nhầm tên bạn."],"misspend":["He regretted his misspent youth.","Anh ấy hối tiếc tuổi trẻ đã sống phí hoài."],"misspeak":["The minister said he had misspoken.","Ông bộ trưởng nói rằng mình đã lỡ lời."],"misdeal":["He misdealt the cards, so we started again.","Anh ấy chia bài sai nên chúng tôi chơi lại."],"mishit":["She mishit the ball into the net.","Cô ấy đánh trượt bóng vào lưới."],"miscast":["Many critics thought he was miscast.","Nhiều nhà phê bình cho rằng anh ấy đóng vai không hợp."],"overspend":["We overspent on our holiday.","Chúng tôi đã tiêu quá tay trong kỳ nghỉ."],"oversell":["The airline oversold the flight.","Hãng bay đã bán quá số vé của chuyến bay."],"overdraw":["I overdrew my account by mistake.","Tôi lỡ rút quá số dư tài khoản."],"overwrite":["I accidentally overwrote the old file.","Tôi vô tình ghi đè lên tập tin cũ."],"overshoot":["The driver overshot the bus stop.","Tài xế chạy quá trạm xe buýt."],"overbuy":["We overbought food for the party.","Chúng tôi mua quá nhiều đồ ăn cho bữa tiệc."],"overlay":["The wooden floor was overlaid with a carpet.","Sàn gỗ được phủ một tấm thảm."],"overfly":["The plane overflew the island.","Máy bay bay qua hòn đảo."],"outsell":["This phone outsold all the others last year.","Năm ngoái chiếc điện thoại này bán chạy hơn tất cả."],"outspend":["The big company outspent its rivals on adverts.","Công ty lớn chi cho quảng cáo nhiều hơn các đối thủ."],"outthink":["The coach outthought the other team.","Huấn luyện viên đã tính toán giỏi hơn đội bạn."],"outfight":["The young boxer outfought the champion.","Võ sĩ trẻ đánh hay hơn nhà vô địch."],"outswim":["She outswam all the boys.","Cô ấy bơi nhanh hơn tất cả các cậu bé."],"underfeed":["The dogs had been underfed for weeks.","Những con chó đã bị cho ăn thiếu nhiều tuần."],"underspend":["We underspent our budget this month.","Tháng này chúng tôi chi ít hơn ngân sách."],"test-drive":["I test-drove three cars before buying one.","Tôi lái thử ba chiếc xe trước khi mua một chiếc."],"typeset":["The book was typeset by hand.","Cuốn sách được sắp chữ bằng tay."],"breastfeed":["She breastfed her baby for a year.","Cô ấy cho con bú một năm."],"handwrite":["He handwrote every invitation.","Anh ấy viết tay từng tấm thiệp mời."],"ghostwrite":["Her book was ghostwritten by a journalist.","Cuốn sách của bà ấy do một nhà báo viết thuê."],"sight-read":["She sight-read the music perfectly.","Cô ấy đọc nhạc ngay lần đầu mà không sai nốt nào."],"heave":["They heaved the heavy box onto the truck.","Họ khiêng cái hộp nặng lên xe tải."],"clothe":["The hills were clad in snow.","Những ngọn đồi phủ đầy tuyết."],"gild":["The old frame was gilded with gold.","Khung tranh cũ được mạ vàng."],"shoe":["The horse was shod last week.","Con ngựa được đóng móng tuần trước."],"saw":["He sawed the branch off the tree.","Anh ấy cưa cành cây xuống."],"chide":["She chided her son for being rude.","Bà ấy quở trách con trai vì hỗn láo."],"forgo":["He forwent his holiday to finish the project.","Anh ấy bỏ kỳ nghỉ để hoàn thành dự án."],"forbear":["She forbore to mention his mistake.","Cô ấy kiềm chế không nhắc đến lỗi của anh ta."],"forswear":["He forswore alcohol after the accident.","Anh ấy thề bỏ rượu sau vụ tai nạn."],"waylay":["I was waylaid by a neighbour on the way home.","Trên đường về tôi bị một người hàng xóm giữ lại nói chuyện."],"unbend":["After the meeting, the boss finally unbent a little.","Sau cuộc họp, sếp cuối cùng cũng bớt căng thẳng một chút."],"unbind":["She unbound her long hair.","Cô ấy xõa mái tóc dài."],"unfreeze":["The bank unfroze his account.","Ngân hàng đã mở băng tài khoản của anh ấy."],"unsay":["Some things are better left unsaid.","Có những điều tốt hơn là đừng nói ra."],"gainsay":["Nobody gainsaid her decision.","Không ai phản đối quyết định của bà ấy."],"interweave":["The two stories are interwoven in the film.","Hai câu chuyện đan xen nhau trong bộ phim."],"telecast":["The concert was telecast across the country.","Buổi hòa nhạc được truyền hình khắp cả nước."],"webcast":["The conference was webcast live.","Hội nghị được phát trực tuyến."],"bust":["My son bust his phone screen again.","Con trai tôi lại làm vỡ màn hình điện thoại."],"bereave":["He was bereft of hope after losing his job.","Anh ấy mất hết hy vọng sau khi mất việc."],"backslide":["He stopped smoking but backslid after a month.","Anh ấy bỏ thuốc nhưng một tháng sau lại hút lại."],"spellbind":["The audience was spellbound by her voice.","Khán giả bị giọng hát của cô ấy mê hoặc."],"hamstring":["The team was hamstrung by a lack of money.","Đội bị cản trở vì thiếu tiền."],"deep-freeze":["We deep-froze the fish for later.","Chúng tôi cấp đông cá để dùng sau."],"alight":["A bird alighted on the branch.","Một con chim đậu xuống cành cây."],"gird":["She girded herself for the difficult talk.","Cô ấy chuẩn bị tinh thần cho cuộc nói chuyện khó khăn."],"housesit":["I housesat for my aunt while she was away.","Tôi trông nhà hộ dì khi dì đi vắng."],"overbid":["He overbid for the house and lost money.","Anh ấy trả giá quá cao cho căn nhà và bị lỗ."]};
const IRR_CONF = [
  { id: 'lie-lay', t: 'lie – lay', sub: 'nằm · đặt (và lie = nói dối)', rows: [
      ['lie', 'lay', 'lain', '/laɪ/ · /leɪ/ · /leɪn/', 'nằm (không có tân ngữ)'],
      ['lay', 'laid', 'laid', '/leɪ/ · /leɪd/ · /leɪd/', 'đặt, để, đẻ trứng (cần tân ngữ)'],
      ['lie', 'lied', 'lied', '/laɪ/ · /laɪd/ · /laɪd/', 'nói dối (động từ có quy tắc)']],
    use: 'lie (nằm) không có tân ngữ: lie on the bed. lay (đặt) luôn cần tân ngữ: lay the book on the table. Dễ nhầm vì V2 của lie lại là lay.',
    ex: [['I lay on the sofa and fell asleep.', 'Tôi nằm trên ghế sofa rồi ngủ thiếp đi.'], ['She laid the baby in the cot.', 'Cô ấy đặt em bé vào cũi.'], ['He lied about his age.', 'Anh ta nói dối về tuổi của mình.']],
    err: '✗ I laid down for a nap. → ✓ I lay down for a nap. (không có tân ngữ nên dùng lie → lay)',
    qz: [['Yesterday I ___ in bed until ten.', 'lay', ['laid', 'lay', 'lied'], 'Nằm, không có tân ngữ, quá khứ → lie – lay.'], ['Please ___ the plates on the table.', 'lay', ['lie', 'lay', 'laid'], 'Đặt cái đĩa (có tân ngữ) → lay.'], ['The hen has ___ three eggs.', 'laid', ['lain', 'laid', 'lied'], 'Đẻ trứng → lay – laid – laid; sau has dùng V3.'], ['He ___ to the police about the accident.', 'lied', ['lay', 'laid', 'lied'], 'Nói dối → lie – lied – lied.']] },
  { id: 'rise-raise', t: 'rise – raise', sub: 'tăng lên, mọc · nâng lên', rows: [
      ['rise', 'rose', 'risen', '/raɪz/ · /rəʊz/ · /ˈrɪzn/', 'tăng, mọc, đứng dậy (tự xảy ra, không có tân ngữ)'],
      ['raise', 'raised', 'raised', '/reɪz/ · /reɪzd/ · /reɪzd/', 'nâng, giơ, tăng, nuôi (cần tân ngữ, có quy tắc)']],
    use: 'rise: chủ ngữ tự tăng / tự lên (prices rise, the sun rises). raise: ai đó làm cho cái gì tăng / lên (raise your hand, raise prices).',
    ex: [['The sun rose at six this morning.', 'Sáng nay mặt trời mọc lúc sáu giờ.'], ['Prices have risen sharply.', 'Giá cả đã tăng mạnh.'], ['She raised her hand to ask a question.', 'Cô ấy giơ tay để đặt câu hỏi.']],
    err: '✗ The company rose the prices. → ✓ The company raised the prices.',
    qz: [['Please ___ your hand if you know the answer.', 'raise', ['rise', 'raise', 'rose'], 'Giơ tay (có tân ngữ your hand) → raise.'], ['House prices have ___ again.', 'risen', ['raised', 'risen', 'rose'], 'Giá tự tăng, sau have → rise – rose – risen.'], ['They ___ three children in a small flat.', 'raised', ['rose', 'risen', 'raised'], 'Nuôi con (có tân ngữ) → raise – raised.']] },
  { id: 'sit-set', t: 'sit – set – seat', sub: 'ngồi · đặt · mời ngồi', rows: [
      ['sit', 'sat', 'sat', '/sɪt/ · /sæt/ · /sæt/', 'ngồi'],
      ['set', 'set', 'set', '/set/ · /set/ · /set/', 'đặt, cài đặt, (mặt trời) lặn'],
      ['seat', 'seated', 'seated', '/siːt/ · /ˈsiːtɪd/', 'xếp chỗ ngồi (có quy tắc, hay dùng be seated)']],
    use: 'sit là tự ngồi; set là đặt cái gì xuống; seat là xếp chỗ cho người khác (please be seated = mời ngồi).',
    ex: [['We sat in the front row.', 'Chúng tôi ngồi ở hàng ghế đầu.'], ['I set the alarm for six.', 'Tôi đặt báo thức lúc sáu giờ.'], ['Please remain seated.', 'Xin vui lòng ngồi yên tại chỗ.']],
    err: '✗ He sit next to me yesterday. → ✓ He sat next to me yesterday.',
    qz: [['She ___ by the window during the flight.', 'sat', ['set', 'sat', 'seated'], 'Tự ngồi, quá khứ → sit – sat.'], ['The sun ___ behind the hills.', 'set', ['sat', 'set', 'seat'], 'Mặt trời lặn → set (ba dạng giống nhau).'], ['Guests will be ___ at round tables.', 'seated', ['sat', 'set', 'seated'], 'Được xếp chỗ ngồi (bị động) → be seated.']] },
  { id: 'bear', t: 'bear – borne / born', sub: 'chịu đựng, mang · được sinh ra', rows: [
      ['bear', 'bore', 'borne', '/beə/ · /bɔː/ · /bɔːn/', 'chịu đựng, mang, gánh (chi phí)'],
      ['be born', 'was / were born', '—', '/bɔːn/', 'được sinh ra (chỉ dùng ở bị động)']],
    use: 'borne dùng sau have hoặc trong câu bị động có nghĩa “mang, chịu”: The costs were borne by the company. born chỉ dùng trong cụm be born: I was born in 1998. Hai từ đọc giống nhau /bɔːn/.',
    ex: [['I was born in Da Nang.', 'Tôi sinh ra ở Đà Nẵng.'], ['All costs will be borne by the client.', 'Mọi chi phí sẽ do khách hàng chịu.'], ['She bore the pain bravely.', 'Cô ấy chịu đựng cơn đau một cách dũng cảm.']],
    err: '✗ I was borne in Hue. → ✓ I was born in Hue.',
    qz: [['My daughter was ___ in May.', 'born', ['borne', 'born', 'bore'], 'Được sinh ra → be born.'], ['The travel costs were ___ by the company.', 'borne', ['born', 'borne', 'bore'], 'Chi phí được gánh chịu → borne.'], ['He ___ the bad news calmly.', 'bore', ['born', 'borne', 'bore'], 'Chịu đựng, quá khứ đơn → bear – bore.']] },
  { id: 'hang', t: 'hang – hung / hanged', sub: 'treo · treo cổ', rows: [
      ['hang', 'hung', 'hung', '/hæŋ/ · /hʌŋ/ · /hʌŋ/', 'treo (đồ vật), lơ lửng'],
      ['hang', 'hanged', 'hanged', '/hæŋ/ · /hæŋd/ · /hæŋd/', 'treo cổ (xử tử) — có quy tắc']],
    use: 'Khi treo đồ vật dùng hung. hanged chỉ dùng với nghĩa xử tử bằng cách treo cổ, thường gặp trong lịch sử, tin tức.',
    ex: [['She hung the painting above the sofa.', 'Cô ấy treo bức tranh phía trên ghế sofa.'], ['A thick fog hung over the city.', 'Một màn sương dày lơ lửng trên thành phố.'], ['The prisoner was hanged in 1820.', 'Tù nhân bị treo cổ vào năm 1820.']],
    err: '✗ I hanged my coat on the door. → ✓ I hung my coat on the door.',
    qz: [['I ___ my jacket behind the door.', 'hung', ['hanged', 'hung', 'hang'], 'Treo đồ vật → hung.'], ['Have you ___ the new curtains yet?', 'hung', ['hanged', 'hung', 'hang'], 'Treo rèm, sau have → hung.']] },
  { id: 'get', t: 'get – got / gotten', sub: 'Anh – Mỹ khác nhau ở V3', rows: [
      ['get', 'got', 'got (Anh)', '/ɡet/ · /ɡɒt/ · /ɡɒt/', 'nhận, có được, trở nên'],
      ['get', 'got', 'gotten (Mỹ)', '/ɡet/ · /ɡɑːt/ · /ˈɡɑːtn/', 'nhận, có được, trở nên']],
    use: 'Tiếng Anh Mỹ dùng gotten làm V3 (I have gotten a new job). Tiếng Anh Anh dùng got. Riêng “have got” (= có) thì cả Anh và Mỹ đều dùng got: I have got a car.',
    ex: [['She has got a new phone.', 'Cô ấy có một chiếc điện thoại mới.'], ['My English has gotten much better.', 'Tiếng Anh của tôi đã tiến bộ hơn nhiều. (Mỹ)'], ['We got home late last night.', 'Tối qua chúng tôi về nhà muộn.']],
    err: '✗ I have gotten two brothers. → ✓ I have got two brothers. (“have got” = có, không dùng gotten)',
    qz: [['We ___ home very late yesterday.', 'got', ['gotten', 'got', 'get'], 'Quá khứ đơn → got (cả Anh và Mỹ).'], ['I have ___ two sisters.', 'got', ['gotten', 'got', 'get'], '“have got” = có → luôn dùng got.']] },
  { id: 'read', t: 'read – read – read', sub: 'viết giống nhau, đọc khác nhau', rows: [
      ['read', 'read', 'read', '/riːd/ · /red/ · /red/', 'đọc']],
    use: 'V1 đọc /riːd/ (giống “reed”), còn V2 và V3 đọc /red/ (giống màu “red”). Người nghe chỉ phân biệt được qua phát âm và ngữ cảnh, nên khi luyện hãy đọc trong câu.',
    ex: [['I read every night before bed. /riːd/', 'Tối nào tôi cũng đọc sách trước khi ngủ.'], ['I read that book last summer. /red/', 'Tôi đã đọc cuốn sách đó vào mùa hè năm ngoái.'], ['Have you read the report? /red/', 'Bạn đã đọc bản báo cáo chưa?']],
    err: 'Lỗi hay gặp: đọc “I read it yesterday” thành /riːd/. Vì là quá khứ nên phải đọc /red/.',
    say: ['I read every night before bed.', 'I red that book last summer.', 'Have you red the report?'],
    qz: [['“I read it yesterday.” Từ read đọc là…', '/red/', ['/riːd/', '/red/'], 'Có “yesterday” → quá khứ → /red/.'], ['“I usually read the news online.” Từ read đọc là…', '/riːd/', ['/riːd/', '/red/'], 'Thói quen ở hiện tại → V1 /riːd/.'], ['“She has read all his novels.” Từ read đọc là…', '/red/', ['/riːd/', '/red/'], 'Sau has → V3 → /red/.']] },
  { id: 'find-found', t: 'find – found (– found)', sub: 'tìm thấy · thành lập', rows: [
      ['find', 'found', 'found', '/faɪnd/ · /faʊnd/ · /faʊnd/', 'tìm thấy, thấy rằng'],
      ['found', 'founded', 'founded', '/faʊnd/ · /ˈfaʊndɪd/', 'thành lập (có quy tắc)']],
    use: 'found vừa là V2/V3 của find, vừa là một động từ riêng nghĩa “thành lập”, có V2/V3 là founded. Tương tự: fall – fell (ngã) và fell – felled (đốn cây).',
    ex: [['I found my keys under the sofa.', 'Tôi tìm thấy chìa khóa dưới ghế sofa.'], ['The company was founded in 1995.', 'Công ty được thành lập năm 1995.'], ['She fell off her bike.', 'Cô ấy ngã xe đạp.']],
    err: '✗ The school was found in 1990. → ✓ The school was founded in 1990.',
    qz: [['The university was ___ in 1906.', 'founded', ['found', 'founded', 'finded'], 'Được thành lập → found – founded – founded.'], ['We ___ a great café near the beach.', 'found', ['founded', 'found', 'finded'], 'Tìm thấy, quá khứ → find – found.']] }
];
const BC_LEVELS=[{"id":"a1","name":"A1","label":"Mới bắt đầu","desc":"Truyện & bài hát ngắn, nói chậm, từ đơn giản","cols":[{"icon":"📖","name":"Truyện thiếu nhi","v":[["GbzMC6qAzVU","Little Red Riding Hood","2:00"],["rKB1_wBueFM","Jack and the beanstalk","3:25"],["Un4NWwcObRA","My secret team","1:57"],["oepRTA4s4XM","Princess and the dragon","2:21"],["a3P5bX8gGYI","No dogs!","3:00"]]},{"icon":"🎵","name":"Bài hát thiếu nhi","v":[["MBxeKG7_Hq4","Incy Wincy spider","1:26"],["334CSiKQsuM","If you're happy and you know it","1:52"],["eXQPD6OcugY","There was an old lady who swallowed a fly","2:19"],["Pw8aJ5CHqeQ","Wheels on the bus","1:28"],["Bsip6RWeZFw","Hickory dickory dock","0:58"]]}]},{"id":"a2","name":"A2","label":"Sơ cấp","desc":"Bài ngắn vài phút về chủ đề quen thuộc","cols":[{"icon":"⚡","name":"Bài học ngắn","v":[["Bu55AF-VFcs","Much or many? Stop making this common mistake","3:25"],["0XPMnKm5fTU","Adjective order in English","2:22"],["7MCD4HGQnEM","How to start a conversation in English","3:25"],["QCiDsT-aMEU","How to talk about numbers and dates","1:36"],["p7x5BPdL3qE","How to be polite in English","2:26"],["C8Bu5GngTGM","Phrasal verbs for travel","1:03"],["AjyGUF6Fcts","Modal verbs explained","1:19"],["84Imqztj1dk","Speak natural English: using contractions","1:56"],["aGuqM83VZhQ","Level up your English vocabulary: have, make and do","2:07"],["tDmeAlleSIY","Adjectives to talk about books in English","1:21"],["xnG57RzZoIo","Countable and uncountable nouns: food","1:05"],["GV9IFkjsQkE","Present continuous or present simple?","1:48"],["Wzt7nLGdWnc","How to use will","1:43"],["zZp1lhFr_ZM","Look out! for phrasal verbs","1:26"],["dhhzNJDYp0Y","Question words and WHEN to use them","2:11"],["mlApzsyMoIU","Things to do in London","1:07"],["nOncgVPrsoM","He, she ... or they? Pronouns in English","4:06"]]},{"icon":"💬","name":"Nói gì trong tình huống","v":[["f0mNQyzTzX8","Meeting face-to-face in English","4:15"],["jGtxHylDV6E","How to talk about where you're from in English","3:46"],["HooNbcbgi9U","Meeting new people - what to say in English","3:27"]]},{"icon":"🌱","name":"Cách học tốt hơn","v":[["tCf6LWJToUc","How to improve your vocabulary","2:00"],["KLKZdMo7cLE","How to improve your reading skills","1:56"],["XNKugimWmxw","How to practise speaking outside the classroom","2:19"],["x-gpFgtXCF4","How to improve your listening skills","2:18"],["ZfsRQ69Y-dw","How to improve your writing","2:14"]]}]},{"id":"b1","name":"B1","label":"Trung cấp","desc":"Giao tiếp hằng ngày, ngữ pháp cốt lõi","cols":[{"icon":"⚡","name":"Bài học ngắn","v":[["NemqkWSivMo","Stop making these apostrophe mistakes","3:40"],["I_IKZblTKEA","Stop confusing these English words","2:44"],["gz5_TWiz9To","How to make excuses in English","3:50"],["aOTcHDf8xIE","Stop mixing up these English verbs","3:43"],["CsABiPjnIag","How to get what you want in English","3:21"],["PIvrl8W_jh0","Shortened words in English","2:22"],["kYGcnyOpkcc","How to use 'just' in English","3:17"],["4Hd2lw8rvhc","Four ways to talk about pain in English","3:20"],["xU5D9hXy_Zg","8 rules for using articles","4:07"],["SYVe4UyWrOY","Three ways to sound more friendly in English","3:32"],["4MGpiPRgckA","Second conditional secrets unlocked!","3:58"],["dcnzs-NOFUE","Stop watching TikTok!","2:38"],["XwBSWVMaGSY","How to pronounce /p/ and /b/ right every time","2:18"],["Po5s_EOiIOU","Learn English with Taylor Swift!","4:28"],["hzoH058nl5c","Six relationship expressions you need to know","1:39"],["BlaXvVJ4Qfo","Five gaming expressions to power up your English","2:33"],["ex4VpuYw2SE","Make stories interesting with the past continuous","2:52"],["jrdE9XDkW1w","Multiply your vocabulary with prefixes","1:54"],["cI-ZGVumD00","How to disagree politely (and not so politely!)","2:22"],["meq8ZG-BxDw","New words in English","2:13"],["wrqAJIGj8M4","Telling a story: narrative tenses","2:05"],["ow4IDLt_1dY","Multiply your vocabulary in two minutes!","2:40"],["86LcmJGySw8","How to get what you want at the hairdresser","2:18"],["oAjuzbeHfJc","How to get what you want in English (2)","1:47"],["7RORN-VhsYI","Where to put the stress on words","3:23"],["9W-bmUJPFYM","Phrasal verbs with take","1:55"],["DwsQM5NinYI","How to sound more natural in English","2:02"],["qRtTiAG7hsI","When to use shall in modern English","1:28"],["_4l14OiMzvs","Learn 4 new ways to use 'get'","2:36"],["t9sAmPBmcDQ","What to say when you forget what to say","2:09"],["mweFfRqFLY4","You know how to use question tags... right?","1:57"],["t76LcMezNN4","Five ways to talk about the future in English","3:17"],["kVWFPqzmazM","How to remember phrasal verbs","3:06"],["sqNHDxk5P4w","How to use intensifiers: so & such","1:14"],["4zJ0IDirO6c","Stop eating or stop to eat. What's the difference?","1:23"],["k4mS6_XaA3A","How to get your English pronunciation right every time","1:18"],["5JNm9BeRTfk","Business English expressions with make and do","1:07"],["K44UVyaXGoM","10 relationship expressions in English","2:51"],["rfOVqO_GeUw","Zero and 1st conditionals: what's the difference?","1:36"],["aI2S1IQKg0o","When to use during in English","2:24"],["ycYedMnSLoE","How to use the past perfect and past simple","1:49"],["xiGU2pRVvos","How to pronounce past tense endings","3:04"],["kB2z9L5w7ho","How to use relative clauses","2:27"],["1CGcaolKLx4","Phrasal verbs: get through or go through?","1:45"],["OI1Qyt9wRto","Getting used to ... used to","2:41"]]},{"icon":"💬","name":"Nói gì trong tình huống","v":[["_3uWwTQJ1Co","How to show interest in English","3:34"],["YkhzAyEnI9U","How to talk about other people in English","3:20"],["hO98Bjn87KM","How to ask for a favour in English","4:12"],["dH7LF_bbHu0","How to make suggestions in English","4:02"],["c5TfNZYwLgc","How to deal with a problem in English","4:34"],["K5GJt-CRiFk","How to check if you understand someone in English","3:39"],["5U_6wdUxFQk","How to give advice in English","4:52"],["sFcWuQzA3DQ","How to respond to news in English","4:29"],["fQcga26aoL8","How to agree or disagree in English","4:23"],["T-IV_B3JGgk","How to apologise in English","3:08"],["CQDJKdmpxOI","How to talk about your job in English","5:57"],["BB7PJl3souA","How to keep a conversation going in English","4:29"],["l1herjZq-4M","How to talk about personal interests in English","4:15"],["LLvGYEjutWo","How to give instructions in English","4:47"]]},{"icon":"☕","name":"Tiếng Anh đời sống","v":[["B2y6KRLk86c","Make-up vocabulary in English - the no make-up make-up look","6:29"],["nKW6Zpe_sds","How to tell a joke in English","2:54"],["S0cCk0-wisU","Music vocabulary in English - going to a concert","2:41"],["Pwr77ZIdcaI","How to take great notes in English","2:09"],["8dK79-xKE7o","How to tell an anecdote in English","5:15"],["S-RqM06bgFo","Make-up vocabulary in English: a jewelled eye","4:56"],["N_4su81dHIo","How to say no politely in English","1:18"],["6JUZpuAXSKc","3 games to help your children learn English","2:35"],["8i1kQrybUmI","How to prepare a great presentation","1:45"],["2ZWvdI7UuOw","How to calm down before a presentation","2:23"],["dvUw15esNwA","How to look confident during a presentation","2:20"],["PS90YsHjAU4","How to deal with questions during a presentation","2:35"],["D40j0y_U4og","Tips for public speaking","3:59"],["TwqOpEr0hsc","How to disconnect from technology","3:39"],["qInS6evP5bQ","Board game recommendations","3:17"],["6A2vVxB2GH0","9 useful football expressions","3:04"],["LMwZ1CGHG8M","Learning English through film","1:37"],["zi2vvA9tK9U","How to avoid burnout","3:42"],["RYZqQHTJQZg","Learning English through film Part 2","1:36"],["Stfu9pWHgqY","Learning goals","3:17"],["dnOk9jE1bfE","Learning English through film Part 3","3:00"],["76jqZElA-O8","Improve your pronunciation","3:39"],["YeDz983icpw","How to talk about holidays and travel","2:08"],["cJSa6c8UGRY","How to talk about drama series","5:20"],["Qm-UafXeWOA","Make-up vocabulary - ombré lips","6:26"]]},{"icon":"📝","name":"Mẹo thi cử","v":[["5OvDv-RoBZw","What to do when you can't remember a word","2:37"],["Kas9bQELoFU","Get top marks in your reading exam!","3:55"],["I5l7e6oW-GM","Phrases for expressing an opinion","3:25"],["jNmwNB3xFr8","Five tips to help you during your speaking exam","2:35"]]},{"icon":"🎙️","name":"Bài giảng trực tiếp","v":[["VcA5diHiTHk","Live lesson: Talking about past habits and memories","57:54"],["vN4fxGYFbRA","Live lesson: Talking about senses in English","53:53"],["Rw2zdwZHdXg","Live lesson: Phrasal verbs for learning","1:04:29"],["W1jKAMfDV4w","Live lesson: Useful language for travel","56:37"],["jsaPEtgQJxU","Live lesson: ChatGPT and AI - future forms","1:08:33"],["saY6GkLJ6ZM","Live lesson: Home sweet home","1:00:59"],["elwdIJpEGxk","Live lesson: Useful phrasal verbs for food","1:00:44"],["c71JwT6sq5A","Grammar lesson: Talking about the future in a positive way","1:00:36"],["TWNhjul8b6k","Grammar lesson: Talking about the weather","1:08:15"],["rUTkTw_Ae_U","Grammar lesson: Talking about past habits and memories","55:47"],["RWS9i2foeqY","Grammar lesson: Phrasal verbs and expressions for Valentine's Day","1:06:53"],["Y-KL1eiNtk0","Grammar lesson: Phrasal verbs for learning","58:05"],["lvvZHPe9O5Y","Grammar lesson: Using articles","57:20"],["8yaD8MIBc4A","Grammar lesson: Adjectives with -ed and -ing","57:23"],["1oz4ur_dUHw","Grammar lesson: Modifying comparatives and superlatives","1:00:13"],["pkApF3If0LA","Vocabulary lesson: Useful language for travel","52:47"],["L8kKLal5oP8","Grammar lesson: Present perfect simple and continuous","48:17"],["CH0RHv_OX64","Grammar lesson: Articles","52:23"],["t_X-sq4Guzs","Grammar lesson: Talking positively about the future","52:10"],["33W8NxEDxuM","Grammar lesson: Future forms","1:01:29"],["3r3-jnIyg1k","Grammar lesson: Phrasal verbs and idioms to talk about money","39:39"],["_gxgYtDsFZs","Grammar lesson: Past time review","38:39"],["3O9cDyVTHrc","Grammar lesson: Phrasal verbs","47:00"],["Jed9-CD0i-E","Grammar lesson: Question forms","43:23"],["JBeIOnmP19U","Grammar lesson: Different uses of 'used to'","52:47"],["lnXTKs6NPlQ","Grammar lesson: Narrative tenses","44:27"],["tL4jQixlf-4","Grammar lesson: Talking about the weather (2)","39:39"],["UIrJlypXcSg","Grammar lesson: Talking about the future","41:34"],["XB4OG8NVfMo","Grammar lesson: Articles (2)","38:35"],["En4sR7A-NNQ","Grammar lesson: Past simple and past continuous","32:23"],["0Kw2zGXvenU","Grammar lesson: Adjectives ending in -ed and -ing","37:39"],["Qndfbk6_KSQ","Grammar lesson: Comparatives and superlatives","42:30"],["Us4rR5TeRo0","Grammar lesson: Past simple and present perfect","43:51"],["39TTkDl8tJQ","Jo's Grammar Lesson: Comparative adjectives","36:25"],["s8sO1Z4ql0Y","Jo's Grammar Lesson: Free time and question forms","35:33"],["grcWo048us8","Jo's Grammar Lesson: Film music and passives","31:20"],["p3wHpwshVbE","Jo's Grammar Lesson: Then and now","27:17"],["DLD7XyMqmcE","Live lesson: Shopping","38:51"],["IRk1THnVNHI","Live lesson: Lifestyles","37:27"]]}]},{"id":"b2","name":"B2","label":"Trung cao cấp","desc":"Công việc, email, diễn đạt tinh tế","cols":[{"icon":"⚡","name":"Bài học ngắn","v":[["Q-SQePXWfAU","How to talk about mental health in English","3:53"],["rT01xBA_XhI","How to turn one English word into five","3:54"],["q1BSh6Q1664","How to know when a letter is silent in English","5:04"],["CeSNCDbX7KQ","State verbs made simple","4:19"],["8JnoQESdVqM","How to give compliments without sounding creepy","4:40"],["jUOZRPKdwCM","Why English words don't always sound the way they look","3:37"],["upl0l0TMVM0","What are binomials?","3:04"],["j_OCOcj7rjc","How to use the past perfect continuous","2:39"],["8SGnsT44P1k","How to use reflexive and emphatic pronouns","3:32"],["3idEBX6tF-I","How to read between the lines in English","3:42"],["cRyPrHCKX9A","How to use get and have in the causative","2:57"],["FCIIIDYkqTo","How to use modals of deduction","4:19"],["3LrmrwpncpU","How to talk about your achievements","2:39"],["z_8BBCg9cNw","How to write a restaurant review","4:47"],["iro36NeCEJk","When NOT to use articles","3:18"],["sYzV2h-PHRE","What is code-switching and why does it matter?","3:06"],["ZMfABKsvpNQ","How to use correlative conjunctions","4:11"],["qkDw98THwJI","How to use double comparatives","3:20"],["2BFH004PEnM","Bang! How to use onomatopoeia","3:37"],["2Ov4fwzU0mk","How to use the third conditional","3:05"],["hv-ZvhJc7F4","Three grammar rules you can ignore","3:27"],["WD1CWuIRjTE","How to give an out of this world presentation","2:54"],["LCsvoOD2IDI","How to get out of awkward situations","2:51"],["esQ2tLeZHW8","Differences between formal and informal English","3:59"],["ApiG1F-i23I","Alternatives to if in conditionals","1:37"],["B-29U0QhNuY","Legal terms in English","2:49"],["lb0GmrW35K8","You think quite is easy? You're quite wrong!","1:52"],["EPZ9i1Pe4fw","How to use stress to communicate","2:32"],["2ezuMNqFLUk","Intensifiers will absolutely totally improve your English","2:42"],["Tfky55MB8rg","What is person-first language?","2:52"],["Bc33GoGdXUs","Write a song using cohesive devices","1:36"],["yeUuo9Njyk0","Latin words in everyday English","2:36"]]},{"icon":"💬","name":"Nói gì trong tình huống","v":[["ZveJWidWxgY","How to discuss advantages and disadvantages in English","4:31"],["kXxY15IVpJ8","How to persuade someone in English","4:05"],["fhSGDAdlAb4","How to challenge someone's ideas in English","5:06"]]},{"icon":"💼","name":"Tiếng Anh công việc","v":[["GszPDWy3o0s","How to interview for a job in English: Responding to questions - Part 1","2:28"],["5Jy0D9C-Lvs","How to interview for a job in English: Responding to competency questions - Part 2","2:37"],["WFUWj7fHCKE","How to interview for a job in English: Responding to hypothetical questions - Part 3","3:07"],["hMNKoUi8hBc","How to delegate in English - Episode 1","3:19"],["iHLxuH8dO5k","Trust your team: How to delegate in English - Episode 2","2:49"],["UcEmYk5nu3E","Learn to love your accent in English! Episode 1","3:31"],["-Md5rvHnCdA","Learn to love your accent in English! Episode 2","3:36"],["v_tRYO72AvM","Resilience in the workplace","3:17"],["QygLpn86iXw","Resilience and the power of writing","3:35"],["xy6LrryH7JY","Be kind to yourself. Build resilience","3:56"],["0WFmZMTXqMs","Conflict management in English - Episode 1","3:57"],["mJ5RbaLTnLo","Conflict management in English - Episode 2","3:46"],["Ndhyr0XjGLE","Conflict management in English - Episode 3","4:02"],["r--1F7_Z018","What is agile working?","3:27"],["rQ9UjJuAOFM","Agile management explained","2:47"],["0OVBmQX-WuE","How to have an agile workspace","3:13"],["tsg91jkeW1c","How to negotiate in English","3:38"],["a6K355f2urg","Making a business proposal in English","3:30"],["N8vDH0NL0zE","Sealing the deal when negotiating in English","3:26"]]},{"icon":"✉️","name":"Viết email","v":[["OyiYMpLyAEE","English for Emails: Email addresses","2:42"],["UV2VRpD3MVQ","English for Emails: Subjects and attachments","2:28"],["ZnSfEklfo34","English for Emails: Cc and Bcc explained","2:51"],["nPc9LI2Yq9A","English for Emails: Organising your writing","2:11"],["3-QoPcJHQws","English for Emails: Formal and informal language","2:55"]]},{"icon":"📹","name":"Video blog","v":[["fUCBUdVLQ-8","English for dating: Part 1","2:28"],["nVDOZu92k-M","English for dating: Part 2","2:28"],["SN88iJzu-Pw","Dating acronyms (and other expressions you need to know)","4:19"]]},{"icon":"🎙️","name":"Bài giảng trực tiếp","v":[["uJ0NQN8WY2E","Live lesson: Valentine's Day - the language of love!","1:15:45"],["g3OdfDIutok","Grammar lesson: AI and language learning","1:08:21"],["5Bh4mqe0cQM","Grammar lesson: New Year's Resolutions","1:16:04"],["R4d948ioTv0","Summer Quiz!","59:18"],["YMNyyvK4-tE","Grammar lesson: Playing by the rules","1:01:58"],["NSWZLHALnc4","Grammar lesson: Tea time - instructions, idioms and more","59:37"],["O7aeUHVWlCo","From Shakespeare to social media: the evolution of English idioms and expressions","1:00:03"],["fvngAeYkNRA","Shakespeare Clinic: How Shakespeare can help you learn English","1:03:33"],["0XIH0NpHdks","Grammar lesson: Patterns with reporting verbs","58:59"],["TQqhJuQoTyM","Grammar lesson: Language to talk about achievements","57:15"],["pkPLd8gy-Lc","Grammar lesson: Adjectives for describing films","1:00:26"],["cyn22u9zcX0","Grammar lesson: Adverb and adjective collocations","1:01:00"],["E7bxlLPa6UI","Vocabulary lesson: Money, money, money","1:05:28"],["y8YkE0di1jc","Grammar lesson: Jokes and humour","1:02:53"],["p0No6zOq0vk","Happy Holidays - a Christmas and New Year quiz!","1:36:10"],["i5TS2KH6Na4","Grammar & vocabulary lesson: American and British English","1:02:40"],["C8NDq5iI8hQ","Grammar lesson: As and like","45:15"],["_rLC7-NlDVY","Grammar lesson: Defining and non-defining relative clauses","51:41"],["5coZRgRyviQ","Live lesson: The devil's in the details - a Halloween story","1:00:54"],["SkPsCnAXvNQ","Grammar lesson: Second and third conditionals","59:22"],["cqohx0i9pEA","Grammar lesson: So, such and other intensifiers","1:00:04"],["9u6m5qgNa7M","World Teachers' Day","1:14:55"],["fz6jU0hZSL8","Grammar lesson: Talking about dreams and ambitions","42:58"],["Zb7t_c-gO9M","Grammar lesson: Language for fitness and health","59:03"],["LmBt5MsCvik","Grammar lesson: Mindfulness Day","50:03"],["Mo3dC2EhPEM","Grammar lesson: Hedging","1:01:54"],["G0L4CBNgwvg","Live lesson: Summer quiz - idioms, grammar and more","1:05:43"],["t2yByvDKLWE","Grammar lesson: A question of sport","57:52"],["NjJh23mrFxo","Grammar lesson: Adjectives","57:15"],["4CLIBDxwhXQ","Grammar lesson: Language for giving opinions","59:09"],["nR7DbC_fSJU","Vocabulary workshop: False friends and commonly confused words","59:49"],["xRPOumn0wB8","Grammar lesson: Correlative conjunctions","52:09"],["trTOFq_t2ZA","Shakespeare Day - LIVE","1:07:46"],["5apA0FJqDiw","Grammar lesson: Contrasting ideas","1:06:04"],["sxa4PU_xvP0","Grammar lesson: Language to talk about films and TV","51:11"],["-PgId_HUCis","Grammar lesson: Delexical verbs","49:37"],["ARkr7SOXIVI","Christmas Quiz","1:35:14"],["QHBAPUlJAj4","Grammar lesson: Question tags","58:00"],["1kIqLhX4fDo","Grammar lesson: Reflexive pronouns","49:58"],["6PQ81ZagLgU","Halloween: Scary stories and modal verbs","56:47"],["QAjYUosZjWM","Grammar lesson: Gen Z expressions - how languages evolve","42:21"],["S-vLUgL_Yhk","Grammar lesson: Language to talk about superstitions","42:13"],["yngejgA8I5g","Grammar lesson: Adjectives and dependent prepositions","51:45"],["bti96OetWCw","Grammar lesson: This, that, these and those to avoid repetition","39:15"],["3KXyQEFOVWA","Grammar lesson: Gradable and non-gradable adjectives","45:07"],["nAV4dTHn9hw","Grammar lesson: As and like (2)","34:39"],["FT9V8e0hotY","Grammar lesson: Virtual reality - second conditional","36:29"],["mXMuyOIHoio","Live lesson: Literature and reading","49:34"],["dynjvyNO7dA","Live lesson: Meetings","43:03"],["NWB7QAw_2t8","Live lesson: CVs and cover letters","46:33"]]}]},{"id":"c1","name":"C1","label":"Nâng cao · IELTS","desc":"Podcast dài, IELTS, Shakespeare","cols":[{"icon":"🎓","name":"IELTS Workshop","v":[["RDyljcd6z7I","Writing workshop: How to write a great essay conclusion","54:57"],["77uqVlua3As","Writing workshop: Writing complex sentences","1:02:20"],["ig9jN5R-VZQ","Writing workshop: What makes a good paragraph?","1:01:31"],["XEh6kL-5eq0","Writing workshop: Planning your essay - organisation and structure","1:05:38"],["RZGX9xeELkw","Writing workshop: Planning your essay and having enough to say","1:03:05"],["9W22bdlXPXk","Winter workshop: End of 2024 language quiz","1:00:47"],["bm-f_hXZGf0","Writing workshop: A covering email","1:00:25"],["RIDroWSpyvg","Speaking workshop: Discourse markers","1:04:06"],["j2eSHNiDs4M","Writing workshop: Writing informal emails","1:05:24"],["6wndNASw2YE","Writing workshop: Describing trends","1:08:35"],["YNPAbdip45c","Listening workshop: Listening for detail","1:06:26"],["uCJa8js6X5k","Writing workshop: Emails and letters","1:05:13"],["E8Hcqp1PwbM","Writing clinic: IELTS Writing Task 1 - Identifying key information","1:05:57"],["coDPQWLL1A0","Writing workshop: Using a checklist to proofread your essay","54:28"],["-n2IEqIG9rg","Reading workshop: Task types and time management","1:07:32"],["JmJxxkSJfIk","Writing workshop: Advantage and disadvantage essays","1:04:50"],["UXEaGMyAUVY","Speaking workshop: Discourse markers (2)","1:05:45"],["820wqkCrigw","Writing workshop: What makes a good paragraph? (2)","59:39"],["-vJxxKAvbNg","IELTS Writing workshop: Graphs, tables and diagrams - the overview","1:04:18"],["jOB0U-Ly1VU","Writing workshop: Checking your writing","1:00:07"],["l4VBz_r2GiE","Writing workshop: Writing a strong conclusion","1:02:12"],["nP3uodZDx9M","Writing workshop: Planning your essay","1:03:20"],["OiH--EoXR80","Writing clinic: Common mistakes and how to fix them","59:21"],["xPnkb2Gvnmg","Reading workshop: How to answer IELTS True/False/Not Given questions","1:04:16"],["-qWuGR0Xg4o","Writing workshop: Formal and informal emails","56:08"],["hUYSWV7O05w","Writing workshop: IELTS Academic Task 1 - The overview","59:19"]]},{"icon":"🔴","name":"Understanding IELTS (Live)","v":[["xnObPjWR9-M","Understanding IELTS LIVE (1)","53:33"],["McRZs6a1gss","Understanding IELTS LIVE (2)","43:16"],["eOsM_LBQWoc","Understanding IELTS LIVE (3)","47:16"],["LKqguYH-Eqk","Understanding IELTS LIVE (4)","43:29"],["xlx5QeMPbiE","Understanding IELTS LIVE (5)","47:11"],["SDviP1APKk0","Understanding IELTS: Reading and Writing","47:12"],["wHRlW2B555k","Understanding IELTS LIVE (6)","43:37"],["urYi1tC4dOE","Understanding IELTS: Writing","46:16"],["BZiF2rFjl4k","Understanding IELTS LIVE (7)","39:12"],["IxhWNNiJbSY","Understanding IELTS LIVE (8)","50:02"],["XfPlgw9WPws","Understanding IELTS LIVE (9)","44:43"],["ECjSlObbD9c","Understanding IELTS LIVE (10)","43:38"],["VIWdPtmJStM","Understanding IELTS: Writing and Listening","1:09:41"],["n8_VT4ZNOJQ","Understanding IELTS LIVE (11)","1:11:31"],["PfsawtCMenc","Understanding IELTS: Speaking","43:41"],["nJjerGREEzg","Understanding IELTS: Reading","43:11"],["KjefvYV-6Gk","Understanding IELTS ExpertTrack LIVE","42:46"],["KLfS4xj9kuE","Understanding IELTS: Writing (2)","45:38"],["dJsuAYk2oDA","Understanding IELTS: Listening","43:22"],["PEiDSHgb3nA","Understanding IELTS LIVE (12)","46:02"]]},{"icon":"🎧","name":"Podcast","v":[["6wtpTmGScZ8","Read your way to better English","29:33"],["RHrUs8jMzCM","How to get people to do things","29:08"],["KvI3_qd_Mdo","This is English: Where every accent belongs","1:04:26"],["jYiq-tRVq34","How to get along with colleagues at work","22:29"],["blMZPxKbPxE","AI and Creativity","21:49"],["A0Xn0xo2onc","World English: Whose English is it anyway?","23:21"],["x6IAe4OdysU","Terms of endearment","21:20"],["xamGagOYVHM","Emoji etiquette","19:45"],["qEczQlhBWUg","What to do when you don't understand someone in English","19:27"],["--NqGw9rfNA","Social media and language learning","24:31"]]},{"icon":"🎭","name":"Shakespeare","v":[["gqqkn7gRNkE","Star Cross'd: Romeo and Juliet retold","4:34"],["EMVYtDKORcI","The Prince of Denmark - a story vaguely inspired by Hamlet","4:02"],["d55GytFubzE","'Dear Mister Shakespeare' - Othello","5:22"],["jk8aVLKW9us","'Miranda's Letter' - The Tempest","5:15"],["uyaBs4gBHFU","Shakespeare's Julius Caesar","3:18"],["SIXseJwmWWI","King Lear Act 2 Scene 4","4:03"],["GDZsXCPvXHY","Macbeth Act I Scene V","2:06"]]}]}];
