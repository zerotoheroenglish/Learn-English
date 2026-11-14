const EX_DATA = {
  /* ---------- A2 · động từ có quy tắc ---------- */
  'regular-ed': [
    ['I worked at home yesterday.', 'Hôm qua tôi làm việc ở nhà.'],
    ['She lived in Hue for five years.', 'Cô ấy đã sống ở Huế năm năm.'],
    ['We studied English together last night.', 'Tối qua chúng tôi học tiếng Anh cùng nhau.'],
    ['The bus stopped in front of my house.', 'Xe buýt đã dừng trước nhà tôi.'],
    ['He planned the trip last month.', 'Tháng trước anh ấy lên kế hoạch cho chuyến đi.'],
    ['They played football in the rain.', 'Họ đã chơi bóng đá dưới mưa.'],
    ['My mother cooked a big dinner.', 'Mẹ tôi đã nấu một bữa tối thật thịnh soạn.'],
    ['I visited my old school last week.', 'Tuần trước tôi về thăm trường cũ.'],
    ["We didn't watch the match.", 'Chúng tôi đã không xem trận đấu.'],
    ['She tried to call me three times.', 'Cô ấy đã thử gọi cho tôi ba lần.'],
    ['The children carried their bags to the car.', 'Bọn trẻ đã mang cặp ra xe.'],
    ["He didn't answer my message.", 'Anh ấy đã không trả lời tin nhắn của tôi.']
  ],
  /* ---------- A1 · tenses ---------- */
  'present-simple': [
    ['I live in Ho Chi Minh City.', 'Tôi sống ở Thành phố Hồ Chí Minh.'],
    ['She works at a small company.', 'Cô ấy làm việc ở một công ty nhỏ.'],
    ["My brother doesn't like coffee.", 'Em trai tôi không thích cà phê.'],
    ['Do you go to school by bike?', 'Bạn đi học bằng xe đạp phải không?', ['Do you go to school by bicycle?']],
    ['We often eat rice for dinner.', 'Chúng tôi thường ăn cơm vào buổi tối.'],
    ['The shop opens at seven every morning.', 'Cửa hàng mở cửa lúc bảy giờ mỗi sáng.']
  ],
  'present-continuous': [
    ['I am reading a book now.', 'Bây giờ tôi đang đọc sách.'],
    ['My mother is cooking in the kitchen.', 'Mẹ tôi đang nấu ăn trong nhà bếp.'],
    ["He isn't working today.", 'Hôm nay anh ấy không làm việc.'],
    ['Why are you crying?', 'Sao bạn lại khóc?'],
    ['It is raining heavily outside.', 'Bên ngoài trời đang mưa to.'],
    ['We are learning English this week.', 'Tuần này chúng tôi đang học tiếng Anh.']
  ],
  'past-be': [
    ['I was tired last night.', 'Tối qua tôi mệt.'],
    ['They were at the park yesterday.', 'Hôm qua họ ở công viên.'],
    ["The weather wasn't good on Sunday.", 'Chủ nhật thời tiết không tốt.'],
    ['Were you at home this morning?', 'Sáng nay bạn có ở nhà không?'],
    ['My parents were very young then.', 'Lúc đó ba mẹ tôi còn rất trẻ.'],
    ['It was my first day at work.', 'Đó là ngày đầu tiên tôi đi làm.']
  ],
  /* ---------- A1 · grammar ---------- */
  'thereis': [
    ['There is a book on the table.', 'Có một quyển sách trên bàn.'],
    ['There are two chairs in my room.', 'Có hai cái ghế trong phòng tôi.'],
    ["There isn't any milk in the fridge.", 'Trong tủ lạnh không có sữa.'],
    ['Are there many people at the party?', 'Có nhiều người ở buổi tiệc không?'],
    ['How many students are there in your class?', 'Có bao nhiêu học sinh trong lớp của bạn?'],
    ['There was a small shop near my house.', 'Trước đây có một cửa hàng nhỏ gần nhà tôi.']
  ],
  'demonstratives': [
    ['This is my new phone.', 'Đây là điện thoại mới của tôi.'],
    ['That house is very old.', 'Ngôi nhà kia rất cũ.'],
    ['These books are mine.', 'Những quyển sách này là của tôi.'],
    ['Those birds are beautiful.', 'Những con chim kia thật đẹp.'],
    ['Is this your bag?', 'Cái túi này có phải của bạn không?'],
    ["I don't like that idea.", 'Tôi không thích ý kiến đó.']
  ],
  'articles': [
    ['I have a cat and a dog.', 'Tôi có một con mèo và một con chó.'],
    ['She is an engineer.', 'Cô ấy là một kỹ sư.'],
    ['The book on the table is mine.', 'Quyển sách ở trên bàn là của tôi.'],
    ['We eat breakfast at seven.', 'Chúng tôi ăn sáng lúc bảy giờ.'],
    ['He plays the guitar very well.', 'Anh ấy chơi ghi ta rất hay.'],
    ['My father is a teacher at a big school.', 'Ba tôi là giáo viên ở một trường lớn.']
  ],
  'nouns': [
    ['I need some water.', 'Tôi cần một chút nước.'],
    ["There isn't any sugar left.", 'Không còn chút đường nào.'],
    ['She has a few friends in Da Nang.', 'Cô ấy có vài người bạn ở Đà Nẵng.'],
    ['We have little time before the test.', 'Chúng tôi có rất ít thời gian trước bài kiểm tra.'],
    ['How much rice do you eat every day?', 'Mỗi ngày bạn ăn bao nhiêu cơm?'],
    ['He drinks two bottles of milk a day.', 'Mỗi ngày anh ấy uống hai chai sữa.']
  ],
  'pronouns': [
    ['She helps me every day.', 'Cô ấy giúp tôi mỗi ngày.'],
    ['This book is mine, not yours.', 'Quyển sách này là của tôi, không phải của bạn.'],
    ['We often invite them to our house.', 'Chúng tôi hay mời họ đến nhà mình.'],
    ['He tells us funny stories every day.', 'Ngày nào anh ấy cũng kể chuyện vui cho chúng tôi nghe.'],
    ['I usually cook dinner myself.', 'Tôi thường tự nấu bữa tối.'],
    ['Their car is faster than ours.', 'Xe của họ nhanh hơn xe của chúng tôi.']
  ],
  'prepositions': [
    ['I was born in 1990.', 'Tôi sinh năm 1990.'],
    ['The meeting is on Monday morning.', 'Cuộc họp diễn ra vào sáng thứ Hai.'],
    ["She arrives at six o'clock.", 'Cô ấy đến lúc sáu giờ.'],
    ['I live with my parents in Tan Binh District.', 'Tôi sống với ba mẹ ở quận Tân Bình.'],
    ['This gift is for you.', 'Món quà này dành cho bạn.'],
    ['He walks to work from his house every day.', 'Mỗi ngày anh ấy đi bộ từ nhà đến chỗ làm.']
  ],
  'modal-can': [
    ['I can swim very well.', 'Tôi bơi rất giỏi.'],
    ["She can't drive a car.", 'Cô ấy không thể lái xe hơi.'],
    ['Can you help me with this bag?', 'Bạn giúp tôi xách cái túi này được không?'],
    ['Could you speak more slowly, please?', 'Bạn nói chậm hơn một chút được không?'],
    ['When I was five, I could not read.', 'Hồi năm tuổi, tôi chưa biết đọc.'],
    ['We can meet at the coffee shop tomorrow.', 'Ngày mai chúng ta có thể gặp nhau ở quán cà phê.']
  ],
  /* ---------- A2 · tenses ---------- */
  'past-simple': [
    ['I visited my grandmother last weekend.', 'Cuối tuần trước tôi về thăm bà.'],
    ['She bought a new laptop two days ago.', 'Hai ngày trước cô ấy mua một chiếc laptop mới.'],
    ["We didn't go to work yesterday.", 'Hôm qua chúng tôi không đi làm.'],
    ['Did you finish the report last night?', 'Tối qua bạn làm xong báo cáo chưa?'],
    ['He studied in Da Nang for three years.', 'Anh ấy đã học ở Đà Nẵng ba năm.'],
    ['The film started at eight and ended at ten.', 'Bộ phim bắt đầu lúc tám giờ và kết thúc lúc mười giờ.']
  ],
  'past-continuous': [
    ['I was cooking when you called.', 'Tôi đang nấu ăn thì bạn gọi.'],
    ['At nine last night, we were watching a film.', 'Chín giờ tối qua, chúng tôi đang xem phim.'],
    ['While she was studying, her brother was playing games.', 'Trong khi cô ấy đang học, em trai cô ấy đang chơi game.'],
    ['It was raining when I left the office.', 'Trời đang mưa khi tôi rời khỏi công ty.'],
    ["They weren't listening to the teacher.", 'Lúc đó họ không nghe cô giáo nói.'],
    ['What were you doing at this time yesterday?', 'Giờ này hôm qua bạn đang làm gì?']
  ],
  'going-to': [
    ['I am going to study abroad next year.', 'Năm sau tôi dự định đi du học.'],
    ['Look at those clouds! It is going to rain.', 'Nhìn mấy đám mây kia kìa! Trời sắp mưa rồi.'],
    ['We are going to move to a new house in June.', 'Tháng Sáu chúng tôi sẽ chuyển sang nhà mới.'],
    ["She isn't going to buy that car.", 'Cô ấy không định mua chiếc xe đó.'],
    ['Are you going to join the English club?', 'Bạn có định tham gia câu lạc bộ tiếng Anh không?'],
    ['They are going to open a small shop next month.', 'Tháng sau họ sẽ mở một cửa hàng nhỏ.']
  ],
  'future-simple': [
    ['I will call you tonight.', 'Tối nay tôi sẽ gọi cho bạn.'],
    ["It's cold. I will close the window.", 'Trời lạnh. Tôi sẽ đóng cửa sổ lại.'],
    ['She will not come to the party.', 'Cô ấy sẽ không đến dự tiệc.'],
    ['Will you help me carry this box?', 'Bạn giúp tôi mang cái thùng này nhé?'],
    ['I think it will be hot tomorrow.', 'Tôi nghĩ mai trời sẽ nóng.'],
    ["Don't worry, I will pay for the tickets.", 'Đừng lo, tôi sẽ trả tiền vé.']
  ],
  'present-perfect': [
    ['I have finished my homework.', 'Tôi đã làm xong bài tập.'],
    ['Have you ever eaten durian?', 'Bạn đã bao giờ ăn sầu riêng chưa?'],
    ['She has lived here since 2015.', 'Cô ấy đã sống ở đây từ năm 2015.'],
    ["We haven't seen that film yet.", 'Chúng tôi vẫn chưa xem bộ phim đó.'],
    ['He has worked in this company for five years.', 'Anh ấy đã làm ở công ty này năm năm rồi.'],
    ['They have just arrived at the airport.', 'Họ vừa mới đến sân bay.']
  ],
  /* ---------- A2 · grammar ---------- */
  'compare': [
    ['My bag is as heavy as yours.', 'Túi của tôi nặng bằng túi của bạn.'],
    ['This road is wider than that one.', 'Con đường này rộng hơn con đường kia.'],
    ['She is the tallest student in my class.', 'Cô ấy là học sinh cao nhất lớp tôi.'],
    ['Today is hotter than yesterday.', 'Hôm nay nóng hơn hôm qua.'],
    ['This is the most expensive phone in the shop.', 'Đây là chiếc điện thoại đắt nhất trong tiệm.'],
    ['His English is better than mine.', 'Tiếng Anh của anh ấy tốt hơn của tôi.']
  ],
  'modal-more': [
    ['It may rain this afternoon.', 'Chiều nay trời có thể mưa.'],
    ['You must wear a helmet.', 'Bạn phải đội mũ bảo hiểm.'],
    ['You should go to bed earlier.', 'Bạn nên đi ngủ sớm hơn.'],
    ["I don't have to work on Saturday.", 'Tôi không cần phải làm việc vào thứ Bảy.'],
    ['She might be at home now.', 'Có thể giờ cô ấy đang ở nhà.'],
    ["You mustn't smoke in this room.", 'Bạn không được hút thuốc trong phòng này.']
  ],
  'cond-1': [
    ['If you heat water to 100 degrees, it boils.', 'Nếu bạn đun nước đến 100 độ thì nước sẽ sôi.'],
    ['If it rains tomorrow, we will stay at home.', 'Nếu mai trời mưa, chúng tôi sẽ ở nhà.'],
    ['If you study hard, you will pass the exam.', 'Nếu bạn học chăm, bạn sẽ đậu kỳ thi.'],
    ['I will call you if I have time.', 'Tôi sẽ gọi cho bạn nếu có thời gian.'],
    ['Unless you hurry, you will miss the bus.', 'Nếu không nhanh lên, bạn sẽ lỡ xe buýt.'],
    ["If he doesn't come, we will start without him.", 'Nếu anh ấy không đến, chúng ta cứ bắt đầu, không chờ anh ấy.']
  ],
  'too': [
    ['This coffee is too hot to drink.', 'Cà phê này nóng quá, không uống được.'],
    ['He is too young to drive a car.', 'Cậu ấy còn quá nhỏ, chưa lái xe hơi được.'],
    ['The box was too heavy for me to carry.', 'Cái thùng nặng quá, tôi không mang nổi.'],
    ['I am too tired to go out tonight.', 'Tối nay tôi mệt quá, không đi chơi được.'],
    ['The question was too difficult for her to answer.', 'Câu hỏi khó quá, cô ấy không trả lời được.'],
    ['It is too late to call him now.', 'Giờ muộn quá rồi, không gọi cho anh ấy được nữa.']
  ],
  'enough': [
    ['He is old enough to vote.', 'Anh ấy đủ lớn để đi bầu cử.'],
    ["This room isn't big enough for ten people.", 'Phòng này không đủ rộng cho mười người.'],
    ["I don't have enough money to buy a new phone.", 'Tôi không có đủ tiền để mua điện thoại mới.'],
    ['She speaks English well enough to work there.', 'Cô ấy nói tiếng Anh đủ tốt để làm việc ở đó.'],
    ['Is the water warm enough for the baby?', 'Nước đã đủ ấm cho em bé chưa?'],
    ['We had enough time to finish the test.', 'Chúng tôi có đủ thời gian để làm xong bài kiểm tra.']
  ],
  'ittakes': [
    ['It takes me thirty minutes to go to work.', 'Tôi đi làm mất ba mươi phút.'],
    ['It took us two hours to clean the house.', 'Chúng tôi dọn nhà mất hai tiếng.'],
    ['How long does it take to learn English?', 'Học tiếng Anh mất bao lâu?'],
    ['It takes about ten minutes to walk there.', 'Đi bộ đến đó mất khoảng mười phút.'],
    ['It will take her a week to finish this book.', 'Cô ấy sẽ mất một tuần mới đọc xong quyển sách này.'],
    ["It doesn't take long to make this dish.", 'Làm món này không mất nhiều thời gian.']
  ],
  'itsadj': [
    ['It is easy to learn this song.', 'Bài hát này dễ học.'],
    ['It is important to drink enough water.', 'Uống đủ nước rất quan trọng.'],
    ['It was nice to meet your family.', 'Thật vui khi được gặp gia đình bạn.'],
    ['It is difficult for me to get up early.', 'Với tôi, dậy sớm rất khó.'],
    ['It is dangerous to use your phone while driving.', 'Dùng điện thoại lúc đang lái xe rất nguy hiểm.'],
    ["It isn't necessary to book a table.", 'Không cần đặt bàn trước.']
  ],
  /* ---------- B1 · tenses ---------- */
  'present-perfect-continuous': [
    ['I have been studying English for two years.', 'Tôi đã học tiếng Anh được hai năm.'],
    ['It has been raining since this morning.', 'Trời đã mưa từ sáng nay.'],
    ['She has been working here since 2019.', 'Cô ấy đã làm việc ở đây từ năm 2019.'],
    ['How long have you been waiting for me?', 'Bạn đã đợi tôi bao lâu rồi?'],
    ['They have been living in Hanoi for ten years.', 'Họ đã sống ở Hà Nội mười năm nay.'],
    ['My eyes are tired because I have been reading all day.', 'Mắt tôi mỏi vì đọc sách cả ngày.']
  ],
  'past-perfect': [
    ['When I arrived, the train had already left.', 'Khi tôi đến, tàu đã khởi hành rồi.'],
    ['She had finished dinner before he came home.', 'Cô ấy đã ăn xong bữa tối trước khi anh ấy về nhà.'],
    ["I didn't go out because I hadn't finished my work.", 'Tôi không ra ngoài vì chưa làm xong việc.'],
    ['They had never seen snow before that trip.', 'Họ chưa bao giờ thấy tuyết trước chuyến đi đó.'],
    ['By the time we got there, the shop had closed.', 'Lúc chúng tôi đến đó thì cửa hàng đã đóng.'],
    ['He told me he had lost his keys.', 'Anh ấy nói với tôi là anh ấy bị mất chìa khóa.']
  ],
  'future-continuous': [
    ['At this time tomorrow, I will be flying to Tokyo.', 'Giờ này ngày mai tôi đang bay đến Tokyo.'],
    ["Don't call at eight. I will be having dinner.", 'Đừng gọi lúc tám giờ. Lúc đó tôi đang ăn tối.'],
    ['She will be working in Da Nang next month.', 'Tháng sau cô ấy sẽ làm việc ở Đà Nẵng.'],
    ['We will be waiting for you at the station.', 'Chúng tôi sẽ đợi bạn ở nhà ga.'],
    ['This time next year, they will be studying in Australia.', 'Giờ này năm sau họ đang học ở Úc.'],
    ['What will you be doing at nine tonight?', 'Chín giờ tối nay bạn sẽ làm gì?']
  ],
  'stative': [
    ['I think this book is great.', 'Tôi nghĩ quyển sách này rất hay.'],
    ['I am thinking about changing jobs.', 'Tôi đang tính đổi việc.'],
    ['She knows the answer.', 'Cô ấy biết câu trả lời.'],
    ['This soup tastes delicious.', 'Món súp này ngon.'],
    ["We don't want more coffee, thank you.", 'Chúng tôi không muốn thêm cà phê, cảm ơn.'],
    ['He is having lunch with a client.', 'Anh ấy đang ăn trưa với một khách hàng.']
  ],
  /* ---------- B1 · grammar ---------- */
  'passive': [
    ['This house was built in 1990.', 'Ngôi nhà này được xây vào năm 1990.'],
    ['English is spoken in many countries.', 'Tiếng Anh được sử dụng ở nhiều nước.'],
    ['The report will be finished tomorrow.', 'Báo cáo sẽ được hoàn thành vào ngày mai.'],
    ['My phone has been repaired.', 'Điện thoại của tôi đã được sửa.'],
    ['The window was broken by the children.', 'Cửa sổ đã bị mấy đứa trẻ làm vỡ.'],
    ['Rice is grown in the Mekong Delta.', 'Lúa được trồng ở đồng bằng sông Cửu Long.']
  ],
  'cond-2': [
    ['If I had a lot of money, I would travel around the world.', 'Nếu tôi có nhiều tiền, tôi sẽ đi du lịch khắp thế giới.'],
    ['If I were you, I would talk to her.', 'Nếu tôi là bạn, tôi sẽ nói chuyện với cô ấy.'],
    ['She would be happier if she lived near her family.', 'Cô ấy sẽ hạnh phúc hơn nếu sống gần gia đình.'],
    ["If we had a car, we wouldn't take the bus.", 'Nếu có xe hơi, chúng tôi sẽ không đi xe buýt.'],
    ['What would you do if you lost your job?', 'Bạn sẽ làm gì nếu bạn mất việc?'],
    ['If he studied harder, he would get better marks.', 'Nếu học chăm hơn, anh ấy sẽ được điểm cao hơn.']
  ],
  'gerund-1': [
    ['I enjoy listening to music.', 'Tôi thích nghe nhạc.'],
    ['She wants to learn Japanese.', 'Cô ấy muốn học tiếng Nhật.'],
    ['He is good at cooking.', 'Anh ấy nấu ăn giỏi.'],
    ['We decided to stay at home.', 'Chúng tôi đã quyết định ở nhà.'],
    ['Thank you for helping me.', 'Cảm ơn bạn đã giúp tôi.'],
    ['They avoid eating too much sugar.', 'Họ tránh ăn quá nhiều đường.']
  ],
  'relative-1': [
    ['The man who lives next door is a doctor.', 'Người đàn ông sống ở nhà kế bên là bác sĩ.'],
    ['This is the book that I bought yesterday.', 'Đây là quyển sách mà tôi đã mua hôm qua.'],
    ['The woman whose son studies with me works at a bank.', 'Người phụ nữ có con trai học cùng tôi làm việc ở ngân hàng.'],
    ['I like the house which has a big garden.', 'Tôi thích ngôi nhà có khu vườn lớn.'],
    ['Do you know the girl who is wearing a red dress?', 'Bạn có biết cô gái đang mặc váy đỏ không?'],
    ['The restaurant that we visited last week was very good.', 'Nhà hàng mà chúng tôi đã đến tuần trước rất tốt.']
  ],
  'reported': [
    ['She said she was tired.', 'Cô ấy nói là cô ấy mệt.'],
    ['He told me he had finished the work.', 'Anh ấy nói với tôi là đã làm xong việc.'],
    ['They said they would come the next day.', 'Họ nói họ sẽ đến vào ngày hôm sau.'],
    ['My mother asked me where I had been.', 'Mẹ tôi hỏi tôi đã ở đâu.'],
    ['The teacher told us to open our books.', 'Cô giáo bảo chúng tôi mở sách ra.'],
    ['She asked me if I liked Vietnamese food.', 'Cô ấy hỏi tôi có thích món Việt không.']
  ],
  'tag': [
    ["You are a student, aren't you?", 'Bạn là sinh viên, phải không?'],
    ["She doesn't like coffee, does she?", 'Cô ấy không thích cà phê, phải không?'],
    ["They went to Da Lat last year, didn't they?", 'Năm ngoái họ đi Đà Lạt, phải không?'],
    ["It is very hot today, isn't it?", 'Hôm nay trời rất nóng, phải không?'],
    ["You can swim, can't you?", 'Bạn biết bơi, phải không?'],
    ["Let's go out tonight, shall we?", 'Tối nay mình đi ra ngoài nhé?']
  ],
  'sothat': [
    ['The film was so boring that I fell asleep.', 'Bộ phim chán đến nỗi tôi ngủ gật luôn.'],
    ['He ran so fast that nobody could catch him.', 'Anh ấy chạy nhanh đến nỗi không ai bắt kịp.'],
    ["The coffee was so hot that I couldn't drink it.", 'Cà phê nóng đến nỗi tôi không uống được.'],
    ["She speaks so quietly that I can't hear her.", 'Cô ấy nói nhỏ đến nỗi tôi không nghe được.'],
    ['It was so cold that we stayed at home.', 'Trời lạnh đến nỗi chúng tôi ở nhà luôn.'],
    ['The bag was so heavy that I had to stop.', 'Cái túi nặng đến nỗi tôi phải dừng lại.']
  ],
  'suchthat': [
    ['It was such a good film that I watched it twice.', 'Bộ phim hay đến nỗi tôi xem hai lần.'],
    ['She is such a kind person that everyone likes her.', 'Cô ấy tốt bụng đến nỗi ai cũng quý.'],
    ['They were such difficult questions that nobody could answer them.', 'Mấy câu hỏi đó khó đến nỗi không ai trả lời được.'],
    ['It was such hot weather that we stayed inside.', 'Trời nóng đến nỗi chúng tôi ở lì trong nhà.'],
    ['He has such a loud voice that I can hear him from here.', 'Giọng anh ấy to đến nỗi tôi đứng đây cũng nghe thấy.'],
    ['It was such a long day that I went to bed early.', 'Ngày hôm đó dài đến nỗi tôi đi ngủ sớm.']
  ],
  'makelet': [
    ["My parents don't let me go out late.", 'Ba mẹ tôi không cho tôi đi ra ngoài khuya.'],
    ['The film made me cry.', 'Bộ phim làm tôi khóc.'],
    ['She helped me carry the boxes.', 'Cô ấy giúp tôi mang mấy cái thùng.'],
    ['Let me show you the way.', 'Để tôi chỉ đường cho bạn.'],
    ['The teacher made us write the essay again.', 'Cô giáo bắt chúng tôi viết lại bài luận.'],
    ['His joke made everyone laugh.', 'Câu nói đùa của anh ấy làm mọi người bật cười.']
  ],
  'asktell': [
    ['She asked me to close the door.', 'Cô ấy nhờ tôi đóng cửa.'],
    ['My boss told me to finish the report today.', 'Giám đốc bảo tôi hoàn thành báo cáo hôm nay.'],
    ['The doctor advised him to eat less sugar.', 'Bác sĩ khuyên anh ấy ăn ít đường hơn.'],
    ['I asked her not to tell anyone.', 'Tôi nhờ cô ấy đừng nói với ai.'],
    ['They told us to wait outside.', 'Họ bảo chúng tôi đợi ở bên ngoài.'],
    ['He asked me to help him with his homework.', 'Anh ấy nhờ tôi giúp làm bài tập.']
  ],
  'usedto': [
    ['I used to play football when I was young.', 'Hồi nhỏ tôi thường chơi bóng đá.'],
    ["She didn't use to like coffee.", 'Trước đây cô ấy không thích cà phê.'],
    ['I am used to getting up early.', 'Tôi quen dậy sớm rồi.'],
    ['He is not used to the hot weather here.', 'Anh ấy chưa quen với thời tiết nóng ở đây.'],
    ['We used to live in a small village.', 'Chúng tôi từng sống ở một làng nhỏ.'],
    ['You will get used to driving in the city.', 'Rồi bạn sẽ quen lái xe trong thành phố thôi.']
  ],
  'hadbetter': [
    ['You had better see a doctor.', 'Bạn nên đi gặp bác sĩ.'],
    ['We had better leave now, or we will be late.', 'Chúng ta nên đi ngay, không thì sẽ trễ.'],
    ['You had better not tell him about this.', 'Bạn không nên nói với anh ấy về việc này.'],
    ['I had better finish this work tonight.', 'Tôi nên làm xong việc này tối nay.'],
    ['She had better study harder for the exam.', 'Cô ấy nên học chăm hơn cho kỳ thi.'],
    ['You had better take an umbrella.', 'Bạn nên mang theo một cây dù.']
  ],
  'spend': [
    ['I spend two hours a day learning English.', 'Tôi dành hai tiếng mỗi ngày để học tiếng Anh.'],
    ['She spends too much time watching videos.', 'Cô ấy dành quá nhiều thời gian xem video.'],
    ["Don't waste your time playing games.", 'Đừng mất thời gian chơi game.'],
    ['We spent the whole morning cleaning the house.', 'Chúng tôi đã dành cả buổi sáng để dọn nhà.'],
    ['He spends a lot of money buying books.', 'Anh ấy tiêu nhiều tiền để mua sách.'],
    ['I wasted an hour waiting for the bus.', 'Tôi mất cả tiếng đồng hồ đợi xe buýt.']
  ],
  /* ---------- B2 · tenses ---------- */
  'past-perfect-continuous': [
    ['I had been waiting for an hour when the bus came.', 'Tôi đã đợi một tiếng thì xe buýt đến.'],
    ['Her eyes were red because she had been crying.', 'Mắt cô ấy đỏ vì vừa khóc.'],
    ['They had been living there for ten years before they moved.', 'Họ đã sống ở đó mười năm trước khi chuyển đi.'],
    ['He was tired because he had been working all night.', 'Anh ấy mệt vì đã làm việc cả đêm.'],
    ['We had been talking for a while when she arrived.', 'Chúng tôi đã nói chuyện một lúc thì cô ấy đến.'],
    ['The ground was wet because it had been raining.', 'Mặt đất ướt vì trời đã mưa.']
  ],
  'future-perfect': [
    ['I will have finished the report by Friday.', 'Tôi sẽ hoàn thành báo cáo trước thứ Sáu.'],
    ['By 2030, she will have graduated.', 'Đến năm 2030, cô ấy đã tốt nghiệp rồi.'],
    ['They will have left before we arrive.', 'Họ sẽ đi rồi trước khi chúng ta đến.'],
    ['By next month, I will have saved enough money.', 'Đến tháng sau, tôi sẽ tiết kiệm đủ tiền.'],
    ['Will you have finished your homework by eight?', 'Bạn sẽ làm xong bài tập trước tám giờ chứ?'],
    ['By the end of the year, he will have worked here for ten years.', 'Đến cuối năm, anh ấy sẽ làm ở đây được mười năm.']
  ],
  'future-in-past': [
    ['I was going to call you, but I forgot.', 'Tôi định gọi cho bạn nhưng lại quên mất.'],
    ['She said she would help me.', 'Cô ấy nói sẽ giúp tôi.'],
    ['We were going to travel to Hue, but the weather was bad.', 'Chúng tôi định đi Huế nhưng thời tiết xấu.'],
    ['He promised he would come early.', 'Anh ấy hứa sẽ đến sớm.'],
    ['They were going to buy that house, but it was too expensive.', 'Họ định mua ngôi nhà đó nhưng giá quá đắt.'],
    ['I thought it would rain, so I took an umbrella.', 'Tôi nghĩ trời sẽ mưa nên mang theo dù.']
  ],
  /* ---------- B2 · grammar ---------- */
  'cond-3': [
    ['If I had known, I would have told you.', 'Nếu tôi biết, tôi đã nói với bạn.'],
    ['If she had studied harder, she would have passed the exam.', 'Nếu học chăm hơn, cô ấy đã đậu kỳ thi.'],
    ['We would have arrived on time if we had left earlier.', 'Nếu đi sớm hơn, chúng tôi đã đến đúng giờ.'],
    ["If it hadn't rained, we would have gone to the beach.", 'Nếu trời không mưa, chúng tôi đã đi biển.'],
    ["He wouldn't have missed the flight if he had taken a taxi.", 'Nếu đi taxi, anh ấy đã không lỡ chuyến bay.'],
    ['If they had invited me, I would have come.', 'Nếu họ mời tôi, tôi đã đến.']
  ],
  'relative-2': [
    ['My father, who is seventy, still works every day.', 'Ba tôi năm nay bảy mươi tuổi mà vẫn làm việc mỗi ngày.'],
    ['Da Lat, which is famous for flowers, is cool all year.', 'Đà Lạt, nơi nổi tiếng về hoa, quanh năm mát mẻ.'],
    ['My brother, whose wife is a teacher, lives in Hue.', 'Anh tôi, có vợ là giáo viên, sống ở Huế.'],
    ['This book, which I bought last year, is still useful.', 'Quyển sách này tôi mua năm ngoái, đến giờ vẫn còn hữu ích.'],
    ['Mr Nam, who teaches us English, is very patient.', 'Thầy Nam, người dạy chúng tôi tiếng Anh, rất kiên nhẫn.'],
    ['She failed the test, which surprised everyone.', 'Cô ấy thi trượt, điều này khiến mọi người ngạc nhiên.']
  ],
  'gerund-2': [
    ['He stopped smoking last year.', 'Anh ấy đã bỏ thuốc lá năm ngoái.'],
    ['We stopped to buy some water.', 'Chúng tôi dừng lại để mua nước.'],
    ['I remember locking the door.', 'Tôi nhớ là đã khóa cửa.'],
    ['Remember to lock the door before you leave.', 'Hãy nhớ khóa cửa trước khi bạn đi.'],
    ["She tried calling him, but he didn't answer.", 'Cô ấy thử gọi cho anh ấy nhưng anh ấy không nghe máy.'],
    ['I forgot to send the email.', 'Tôi quên gửi email rồi.']
  ],
  'havedone': [
    ['I had my hair cut yesterday.', 'Hôm qua tôi đã đi cắt tóc.'],
    ['She is going to have her car repaired.', 'Cô ấy sẽ đem xe đi sửa.'],
    ['We had the house painted last month.', 'Tháng trước chúng tôi đã cho sơn lại nhà.'],
    ['He got his phone fixed at the shop.', 'Anh ấy đã đem điện thoại đi sửa ở tiệm.'],
    ['Where do you have your clothes made?', 'Bạn đặt may quần áo ở đâu?'],
    ['I need to have my eyes checked.', 'Tôi cần đi kiểm tra mắt.']
  ],
  'suggest': [
    ['He suggested going to the beach.', 'Anh ấy đề nghị đi biển.'],
    ['She suggested that we should take a taxi.', 'Cô ấy đề nghị chúng ta nên đi taxi.'],
    ['I suggest booking the tickets early.', 'Tôi đề nghị đặt vé sớm.'],
    ['They suggested waiting until next week.', 'Họ đề nghị đợi đến tuần sau.'],
    ['My teacher suggested that I read more books.', 'Cô giáo đề nghị tôi đọc thêm sách.'],
    ['Can you suggest a good restaurant near here?', 'Bạn có thể giới thiệu một nhà hàng ngon gần đây không?']
  ],
  'prefer': [
    ['I prefer tea to coffee.', 'Tôi thích trà hơn cà phê.'],
    ['She prefers walking to driving.', 'Cô ấy thích đi bộ hơn lái xe.'],
    ['I would rather stay at home tonight.', 'Tối nay tôi muốn ở nhà hơn.'],
    ['He would rather work than study.', 'Anh ấy thích đi làm hơn là đi học.'],
    ['We prefer living in the countryside to living in the city.', 'Chúng tôi thích sống ở nông thôn hơn sống ở thành phố.'],
    ['Would you rather go out or eat at home?', 'Bạn muốn đi ra ngoài hay ăn ở nhà hơn?']
  ],
  'itstime': [
    ["It's time to go home.", 'Đã đến lúc về nhà.'],
    ["It's time you went to bed.", 'Đã đến lúc bạn phải đi ngủ.'],
    ["It's high time we talked about this.", 'Đã đến lúc chúng ta nói về việc này.'],
    ["It's time for dinner.", 'Đã đến giờ ăn tối.'],
    ["It's time you found a new job.", 'Đã đến lúc bạn tìm một công việc mới.'],
    ["It's time to start the meeting.", 'Đã đến lúc bắt đầu cuộc họp.']
  ],
  'although': [
    ['Although it was raining, we went out.', 'Mặc dù trời mưa, chúng tôi vẫn đi ra ngoài.'],
    ['Despite the rain, we went out.', 'Mặc dù có mưa, chúng tôi vẫn đi ra ngoài.'],
    ['Although she was tired, she finished the work.', 'Mặc dù mệt, cô ấy vẫn làm xong việc.'],
    ['In spite of his age, he still plays tennis.', 'Mặc dù đã lớn tuổi, ông ấy vẫn chơi tennis.'],
    ['Despite studying hard, he failed the exam.', 'Mặc dù đã học chăm, anh ấy vẫn thi không đạt.'],
    ['Although the food was cheap, it tasted good.', 'Món ăn tuy rẻ nhưng vẫn ngon.']
  ],
  'paired': [
    ['Both my brother and I work in Ho Chi Minh City.', 'Cả anh tôi và tôi đều làm việc ở Thành phố Hồ Chí Minh.'],
    ['She not only sings but also plays the piano.', 'Cô ấy không chỉ hát mà còn chơi piano.'],
    ['Neither my father nor my mother speaks English.', 'Cả ba tôi và mẹ tôi đều không nói tiếng Anh.'],
    ['You can either call me or send me an email.', 'Bạn có thể gọi cho tôi hoặc gửi email cho tôi.'],
    ['The hotel was not only cheap but also clean.', 'Khách sạn không chỉ rẻ mà còn sạch.'],
    ['Both the food and the service were excellent.', 'Cả món ăn và dịch vụ đều tuyệt vời.']
  ],
  'prevent': [
    ['The rain prevented us from going out.', 'Trời mưa nên chúng tôi không ra ngoài được.'],
    ['My parents stopped me from buying that motorbike.', 'Ba mẹ không cho tôi mua chiếc xe máy đó.'],
    ['Nothing can prevent him from learning English.', 'Không gì có thể ngăn anh ấy học tiếng Anh.'],
    ['The noise prevented me from sleeping.', 'Tiếng ồn làm tôi không ngủ được.'],
    ['They stopped the children from playing near the road.', 'Họ không cho mấy đứa trẻ chơi gần đường.'],
    ['Heavy traffic prevented her from arriving on time.', 'Kẹt xe khiến cô ấy không đến đúng giờ được.']
  ],
  /* ---------- C1 · tenses ---------- */
  'future-perfect-continuous': [
    ['By June, I will have been working here for five years.', 'Đến tháng Sáu là tôi làm việc ở đây được năm năm.'],
    ['By the time you arrive, we will have been waiting for two hours.', 'Lúc bạn đến thì chúng tôi đã đợi được hai tiếng rồi.'],
    ['By next month, she will have been studying French for a year.', 'Đến tháng sau là cô ấy học tiếng Pháp được một năm.'],
    ['By 2030, he will have been living abroad for a decade.', 'Đến năm 2030 là anh ấy sống ở nước ngoài được mười năm.'],
    ['By the end of today, I will have been driving for ten hours.', 'Đến hết hôm nay là tôi lái xe được mười tiếng.'],
    ['By December, we will have been running this shop for three years.', 'Đến tháng Mười Hai là chúng tôi mở cửa hàng này được ba năm.']
  ],
  'polite-tenses': [
    ['I was wondering if you could help me with this.', 'Không biết bạn có thể giúp tôi việc này không.'],
    ['We were hoping to hear from you soon.', 'Chúng tôi mong sớm nhận được phản hồi từ bạn.'],
    ['Did you want to speak to the manager?', 'Bạn muốn gặp quản lý phải không?'],
    ['I was hoping you might join us tomorrow.', 'Tôi mong là mai bạn tham gia cùng chúng tôi được.'],
    ['I was wondering whether we could change the date.', 'Không biết chúng ta có thể đổi ngày không.'],
    ['I had hoped to finish the project this week.', 'Tôi đã mong hoàn thành dự án trong tuần này.']
  ],
  'inversion-perfect': [
    ['Hardly had I arrived when it started to rain.', 'Tôi vừa đến thì trời bắt đầu mưa.'],
    ['No sooner had she sat down than the phone rang.', 'Cô ấy vừa ngồi xuống thì điện thoại reo.'],
    ['Hardly had we left the house when the rain stopped.', 'Chúng tôi vừa ra khỏi nhà thì trời tạnh mưa.'],
    ['No sooner had the film started than the power went out.', 'Bộ phim vừa bắt đầu thì mất điện.'],
    ['Scarcely had he finished speaking when everyone clapped.', 'Anh ấy vừa nói xong thì mọi người vỗ tay.'],
    ['No sooner had I closed my eyes than the alarm rang.', 'Tôi vừa nhắm mắt thì đồng hồ báo thức reo.']
  ],
  /* ---------- C1 · grammar ---------- */
  'wish': [
    ['I wish I had more free time.', 'Ước gì tôi có nhiều thời gian rảnh hơn.'],
    ['I wish I could speak English fluently.', 'Ước gì tôi nói được tiếng Anh trôi chảy.'],
    ["I wish I hadn't said that.", 'Ước gì tôi đã không nói câu đó.'],
    ['She wishes she lived closer to her family.', 'Cô ấy ước mình sống gần gia đình hơn.'],
    ['If only I had studied harder at school.', 'Giá mà hồi đi học tôi học chăm hơn.'],
    ['I wish it would stop raining.', 'Ước gì trời tạnh mưa.']
  ],
  'inversion': [
    ['Never have I seen such a beautiful place.', 'Tôi chưa bao giờ thấy một nơi đẹp như vậy.'],
    ['Not until I got home did I realise my mistake.', 'Chỉ đến khi về nhà tôi mới nhận ra lỗi của mình.', ['Not until I got home did I realize my mistake.']],
    ['Only when she left did he understand.', 'Chỉ khi cô ấy rời đi anh ấy mới hiểu.'],
    ['Rarely does he complain about his work.', 'Anh ấy ít khi phàn nàn về công việc.'],
    ['Should you need any help, please call me.', 'Nếu bạn cần giúp đỡ, hãy gọi cho tôi.'],
    ['Little did we know that it was the last time.', 'Chúng tôi đâu biết rằng đó là lần cuối.']
  ],
  'mixedcond': [
    ['If I had taken that job, I would be in Singapore now.', 'Nếu hồi đó tôi nhận công việc đó thì giờ tôi đang ở Singapore.'],
    ['If she had studied medicine, she would be a doctor today.', 'Nếu cô ấy học y, hôm nay cô ấy đã là bác sĩ.'],
    ["If he weren't so shy, he would have asked her.", 'Nếu anh ấy không quá nhút nhát, anh ấy đã hỏi cô ấy rồi.'],
    ['If I had saved more money, I could buy a house now.', 'Nếu trước đây tôi tiết kiệm nhiều hơn thì giờ tôi đã mua được nhà.'],
    ["If they didn't live so far away, they would have come.", 'Nếu họ không sống xa như vậy, họ đã đến rồi.'],
    ['If I had learnt English earlier, my job would be easier now.', 'Nếu tôi học tiếng Anh sớm hơn, giờ công việc của tôi sẽ dễ hơn.', ['If I had learned English earlier, my job would be easier now.']]
  ],
  'cleft': [
    ['It was my sister who booked the tickets.', 'Chính em gái tôi là người đã đặt vé.'],
    ["It is the noise that I can't stand.", 'Thứ tôi không chịu nổi chính là tiếng ồn.'],
    ['What I need now is a cup of coffee.', 'Điều tôi cần bây giờ là một tách cà phê.'],
    ['What surprised me was her answer.', 'Điều làm tôi ngạc nhiên là câu trả lời của cô ấy.'],
    ['All I want is a quiet weekend.', 'Tôi chỉ muốn một cuối tuần yên tĩnh thôi.'],
    ['The reason why I called is that I need your advice.', 'Lý do tôi gọi là vì tôi cần lời khuyên của bạn.']
  ],
  'themore': [
    ['The more you practise, the better you get.', 'Càng luyện tập nhiều, bạn càng giỏi.', ['The more you practice, the better you get.']],
    ['The hotter the weather, the less I want to go out.', 'Trời càng nóng, tôi càng không muốn ra ngoài.'],
    ['The more I read, the more I understand.', 'Càng đọc, tôi càng hiểu.'],
    ['The sooner we leave, the better.', 'Chúng ta đi càng sớm càng tốt.'],
    ['The older he gets, the quieter he becomes.', 'Càng lớn tuổi, ông ấy càng ít nói.'],
    ['The more expensive the phone, the better the camera.', 'Điện thoại càng đắt, máy ảnh càng tốt.']
  ]
};
const EX_MORE = {
  'present-simple': [
    ['My father watches the news every evening.', 'Ba tôi xem thời sự mỗi tối.'],
    ["I don't drink milk in the morning.", 'Buổi sáng tôi không uống sữa.'],
    ['Does your sister work in a hospital?', 'Chị của bạn làm việc ở bệnh viện phải không?'],
    ['We go to the market on Sundays.', 'Chúng tôi đi chợ vào chủ nhật.'],
    ['He always finishes work at five.', 'Anh ấy luôn tan làm lúc năm giờ.'],
    ['The bus leaves every twenty minutes.', 'Xe buýt chạy hai mươi phút một chuyến.']
  ],
  'present-continuous': [
    ['They are waiting for the bus now.', 'Bây giờ họ đang đợi xe buýt.'],
    ['I am not sleeping, I am studying.', 'Tôi không ngủ, tôi đang học bài.'],
    ['What are you cooking tonight?', 'Tối nay bạn nấu món gì?'],
    ['The baby is sleeping, please be quiet.', 'Em bé đang ngủ, xin hãy giữ im lặng.'],
    ['My sister is working in Da Nang this month.', 'Tháng này chị tôi đang làm việc ở Đà Nẵng.'],
    ['Look! The dog is running after the cat.', 'Nhìn kìa! Con chó đang chạy theo con mèo.']
  ],
  'past-be': [
    ['The food was delicious last night.', 'Tối qua món ăn rất ngon.'],
    ['We were very busy last week.', 'Tuần trước chúng tôi rất bận.'],
    ["I wasn't at school yesterday.", 'Hôm qua tôi không có ở trường.'],
    ['Was the film interesting?', 'Bộ phim có hay không?'],
    ["They weren't happy with the service.", 'Lúc đó họ không hài lòng với dịch vụ.'],
    ['My first teacher was very kind.', 'Cô giáo đầu tiên của tôi rất tốt bụng.']
  ],
  'thereis': [
    ['There is a big tree in front of my house.', 'Có một cây lớn ở trước nhà tôi.'],
    ['There are five people in my family.', 'Gia đình tôi có năm người.'],
    ['Is there a pharmacy near here?', 'Gần đây có nhà thuốc không?'],
    ["There aren't any chairs in this room.", 'Trong phòng này không có cái ghế nào.'],
    ['How much water is there in the bottle?', 'Trong chai có bao nhiêu nước?'],
    ['There will be a meeting tomorrow morning.', 'Sáng mai sẽ có một cuộc họp.']
  ],
  'demonstratives': [
    ['This is my room and that is my brother’s room.', 'Đây là phòng tôi, còn kia là phòng của anh tôi.'],
    ['Who is that man over there?', 'Người đàn ông đằng kia là ai?'],
    ['These flowers are for my mother.', 'Những bông hoa này là để tặng mẹ tôi.'],
    ['I want to buy those shoes.', 'Tôi muốn mua đôi giày kia.'],
    ['That was a long day.', 'Hôm đó là một ngày dài.'],
    ['This is my first time in Hanoi.', 'Đây là lần đầu tiên tôi đến Hà Nội.']
  ],
  'articles': [
    ['There is a dog in the park.', 'Có một con chó trong công viên.'],
    ['She works as a nurse in a hospital.', 'Cô ấy làm y tá ở một bệnh viện.'],
    ['Can you open the window, please?', 'Bạn mở giúp tôi cửa sổ được không?'],
    ['We go to school by bus.', 'Chúng tôi đi học bằng xe buýt.'],
    ['He is an honest man.', 'Ông ấy là một người trung thực.'],
    ['The sun rises in the east.', 'Mặt trời mọc ở hướng đông.']
  ],
  'nouns': [
    ['There is a little milk in the glass.', 'Trong ly có một ít sữa.'],
    ['Do you have any questions?', 'Bạn có câu hỏi nào không?'],
    ['I need three kilos of rice.', 'Tôi cần ba ký gạo.'],
    ['She always gives me good advice.', 'Cô ấy luôn cho tôi những lời khuyên hay.'],
    ['We have few chairs for the party.', 'Chúng tôi có rất ít ghế cho buổi tiệc.'],
    ['How many eggs do we need?', 'Chúng ta cần bao nhiêu quả trứng?']
  ],
  'pronouns': [
    ['I often help her with her homework.', 'Tôi hay giúp cô ấy làm bài tập.'],
    ['These books are ours, not theirs.', 'Những quyển sách này là của chúng tôi, không phải của họ.'],
    ['She looks at herself in the mirror.', 'Cô ấy nhìn mình trong gương.'],
    ['Can you show me your photos?', 'Bạn cho tôi xem ảnh của bạn được không?'],
    ['They live near us.', 'Họ sống gần chúng tôi.'],
    ['My phone is old, but hers is new.', 'Điện thoại của tôi cũ, còn của cô ấy thì mới.']
  ],
  'prepositions': [
    ['The cat is on the chair.', 'Con mèo đang ở trên ghế.'],
    ['I go to work at seven in the morning.', 'Tôi đi làm lúc bảy giờ sáng.'],
    ['She writes with a blue pen.', 'Cô ấy viết bằng cây bút màu xanh.'],
    ['We live in a small house on Le Loi Street.', 'Chúng tôi sống trong một ngôi nhà nhỏ trên đường Lê Lợi.'],
    ['This letter is from my grandmother.', 'Lá thư này là của bà tôi gửi.'],
    ['I study English for my job.', 'Tôi học tiếng Anh để phục vụ công việc.']
  ],
  'modal-can': [
    ['My son can count to twenty.', 'Con trai tôi đếm được đến hai mươi.'],
    ['Can I ask you a question?', 'Tôi hỏi bạn một câu được không?'],
    ['She can cook very well.', 'Cô ấy nấu ăn rất ngon.'],
    ["I can't hear you well.", 'Tôi không nghe rõ bạn nói.'],
    ['Could you open the door for me?', 'Bạn mở cửa giúp tôi được không?'],
    ["We can't go out because it is raining.", 'Chúng tôi không thể ra ngoài vì trời đang mưa.']
  ],
  'past-simple': [
    ['We watched a film last night.', 'Tối qua chúng tôi xem một bộ phim.'],
    ["She didn't eat breakfast this morning.", 'Sáng nay cô ấy không ăn sáng.'],
    ['Did they arrive on time?', 'Họ có đến đúng giờ không?'],
    ['I met my old friend at the market.', 'Tôi đã gặp người bạn cũ ở chợ.'],
    ['He worked in Hanoi from 2018 to 2020.', 'Anh ấy đã làm việc ở Hà Nội từ năm 2018 đến năm 2020.'],
    ['My phone fell and broke yesterday.', 'Hôm qua điện thoại của tôi rơi và bị vỡ.']
  ],
  'past-continuous': [
    ['She was reading when the lights went out.', 'Cô ấy đang đọc sách thì mất điện.'],
    ['We were having dinner at seven last night.', 'Bảy giờ tối qua chúng tôi đang ăn tối.'],
    ['I was waiting outside while he was parking the car.', 'Tôi đang đợi ở ngoài trong khi anh ấy đang đậu xe.'],
    ['What were they doing when you came in?', 'Họ đang làm gì khi bạn bước vào?'],
    ['The children were playing in the yard all afternoon.', 'Bọn trẻ chơi ngoài sân suốt cả buổi chiều.'],
    ["He wasn't listening, so he missed the question.", 'Anh ấy không chú ý nghe nên bỏ lỡ câu hỏi.']
  ],
  'going-to': [
    ['I am going to visit my grandparents this weekend.', 'Cuối tuần này tôi sẽ về thăm ông bà.'],
    ['She is going to learn to drive.', 'Cô ấy định học lái xe.'],
    ["We aren't going to eat out tonight.", 'Tối nay chúng tôi không định ăn ngoài.'],
    ['Look at the sky! It is going to rain soon.', 'Nhìn bầu trời kìa! Sắp mưa rồi.'],
    ['Are they going to sell their house?', 'Họ có định bán nhà không?'],
    ['I am going to start running every morning.', 'Tôi định bắt đầu chạy bộ mỗi sáng.']
  ],
  'future-simple': [
    ['I will send you the photos tonight.', 'Tối nay tôi sẽ gửi ảnh cho bạn.'],
    ['She will be twenty next month.', 'Tháng sau cô ấy sẽ hai mươi tuổi.'],
    ["We won't forget this trip.", 'Chúng tôi sẽ không quên chuyến đi này.'],
    ['Will it rain this afternoon?', 'Chiều nay trời sẽ mưa chứ?'],
    ["Don't worry, I will help you.", 'Đừng lo, tôi sẽ giúp bạn.'],
    ['I think they will like this gift.', 'Tôi nghĩ họ sẽ thích món quà này.']
  ],
  'present-perfect': [
    ['I have never been to Japan.', 'Tôi chưa bao giờ đến Nhật Bản.'],
    ['She has already sent the email.', 'Cô ấy đã gửi email rồi.'],
    ['Have you finished your work yet?', 'Bạn đã làm xong việc chưa?'],
    ['We have known each other since high school.', 'Chúng tôi đã biết nhau từ hồi cấp ba.'],
    ['He has lost his wallet.', 'Anh ấy đã làm mất ví.'],
    ['They have visited Hue three times.', 'Họ đã đến Huế ba lần.']
  ],
  'compare': [
    ['This bag is cheaper than that one.', 'Cái túi này rẻ hơn cái kia.'],
    ['He is not as tall as his brother.', 'Anh ấy không cao bằng anh trai mình.'],
    ['Today is the busiest day of the week.', 'Hôm nay là ngày bận nhất trong tuần.'],
    ['My room is smaller than yours.', 'Phòng tôi nhỏ hơn phòng bạn.'],
    ['This is the best coffee in the city.', 'Đây là cà phê ngon nhất thành phố.'],
    ['She speaks English more fluently than I do.', 'Cô ấy nói tiếng Anh trôi chảy hơn tôi.']
  ],
  'modal-more': [
    ['You should drink more water.', 'Bạn nên uống nhiều nước hơn.'],
    ['We must finish this report today.', 'Chúng tôi phải hoàn thành báo cáo này hôm nay.'],
    ['It might be cold tonight.', 'Tối nay trời có thể lạnh.'],
    ['She has to work on Saturday morning.', 'Cô ấy phải làm việc vào sáng thứ Bảy.'],
    ["You shouldn't eat so much sugar.", 'Bạn không nên ăn nhiều đường như vậy.'],
    ['Would you like some tea?', 'Bạn có muốn uống chút trà không?']
  ],
  'cond-1': [
    ['If I have time tomorrow, I will clean the house.', 'Nếu mai tôi có thời gian, tôi sẽ dọn nhà.'],
    ["If you don't study, you will fail the test.", 'Nếu không học, bạn sẽ rớt bài kiểm tra.'],
    ['Water freezes if the temperature falls below zero.', 'Nước đóng băng nếu nhiệt độ xuống dưới không độ.'],
    ['If she calls me, I will tell her the news.', 'Nếu cô ấy gọi tôi, tôi sẽ báo tin cho cô ấy.'],
    ['Unless it stops raining, we will stay here.', 'Nếu trời không tạnh mưa, chúng tôi sẽ ở lại đây.'],
    ['If the bus is late, we will take a taxi.', 'Nếu xe buýt trễ, chúng tôi sẽ đi taxi.']
  ],
  'too': [
    ['The soup is too salty for me.', 'Món súp quá mặn đối với tôi.'],
    ['He was too tired to finish the work.', 'Anh ấy mệt quá nên không làm xong việc.'],
    ['This shirt is too small to wear.', 'Cái áo này nhỏ quá, không mặc được.'],
    ['It is too dark to read here.', 'Ở đây tối quá, không đọc sách được.'],
    ['She speaks too fast for me to understand.', 'Cô ấy nói nhanh quá, tôi không hiểu kịp.'],
    ['The bag was too expensive for us to buy.', 'Cái túi đắt quá, chúng tôi không mua nổi.']
  ],
  'enough': [
    ["He isn't strong enough to lift the box.", 'Anh ấy không đủ khỏe để nhấc cái thùng.'],
    ['We have enough chairs for everyone.', 'Chúng tôi có đủ ghế cho mọi người.'],
    ['The coffee is hot enough now.', 'Cà phê bây giờ đã đủ nóng.'],
    ['She is old enough to travel alone.', 'Cô ấy đủ lớn để đi du lịch một mình.'],
    ["I don't have enough time to cook today.", 'Hôm nay tôi không có đủ thời gian để nấu ăn.'],
    ['Is this room big enough for the party?', 'Phòng này có đủ rộng cho buổi tiệc không?']
  ],
  'ittakes': [
    ['It takes me ten minutes to walk to the market.', 'Tôi đi bộ ra chợ mất mười phút.'],
    ['It took him two years to learn Japanese.', 'Anh ấy mất hai năm để học tiếng Nhật.'],
    ['How long does it take to get to the airport?', 'Đến sân bay mất bao lâu?'],
    ['It takes us an hour to cook dinner.', 'Chúng tôi nấu bữa tối mất một tiếng.'],
    ['It will take three days to repair my phone.', 'Sửa điện thoại của tôi sẽ mất ba ngày.'],
    ["It doesn't take much time to make tea.", 'Pha trà không mất nhiều thời gian.']
  ],
  'itsadj': [
    ['It is good to see you again.', 'Thật vui được gặp lại bạn.'],
    ['It is hard to find a parking space here.', 'Ở đây rất khó tìm chỗ đậu xe.'],
    ['It is useful to learn a second language.', 'Học thêm một ngoại ngữ rất hữu ích.'],
    ['It was kind of you to help us.', 'Bạn thật tốt khi đã giúp chúng tôi.'],
    ['It is not easy to get up at five.', 'Dậy lúc năm giờ không dễ.'],
    ['It is interesting to talk to new people.', 'Nói chuyện với người mới rất thú vị.']
  ],
  'present-perfect-continuous': [
    ['I have been waiting here for twenty minutes.', 'Tôi đã đợi ở đây hai mươi phút rồi.'],
    ['She has been cooking since this morning.', 'Cô ấy đã nấu ăn từ sáng nay.'],
    ['They have been building that bridge for two years.', 'Họ đã xây cây cầu đó hai năm nay.'],
    ['How long has he been learning the guitar?', 'Anh ấy đã học ghi ta bao lâu rồi?'],
    ['We have been talking about this all week.', 'Chúng tôi đã nói về chuyện này cả tuần nay.'],
    ['My clothes are wet because I have been working in the rain.', 'Quần áo tôi ướt vì tôi làm việc dưới mưa nãy giờ.']
  ],
  'past-perfect': [
    ['She had left before I called.', 'Cô ấy đã đi trước khi tôi gọi.'],
    ['We had already eaten when they arrived.', 'Chúng tôi đã ăn xong khi họ đến.'],
    ['I realised that I had forgotten my keys.', 'Tôi nhận ra là mình đã quên chìa khóa.', ['I realized that I had forgotten my keys.']],
    ['He had worked there for ten years before he quit.', 'Anh ấy đã làm ở đó mười năm trước khi nghỉ việc.'],
    ["They hadn't finished the report by Monday.", 'Đến thứ Hai họ vẫn chưa làm xong báo cáo.'],
    ['After she had cleaned the house, she went out.', 'Sau khi dọn nhà xong, cô ấy đã đi ra ngoài.']
  ],
  'future-continuous': [
    ['This time tomorrow I will be sitting on the beach.', 'Giờ này ngày mai tôi đang ngồi trên bãi biển.'],
    ['He will be working late tonight.', 'Tối nay anh ấy sẽ làm việc muộn.'],
    ['We will be driving home at that time.', 'Lúc đó chúng tôi đang lái xe về nhà.'],
    ['Will you be using the car tomorrow?', 'Ngày mai bạn có dùng xe không?'],
    ['They will be waiting for us at the gate.', 'Họ sẽ đợi chúng ta ở cổng.'],
    ["I won't be sleeping, so you can call me.", 'Tôi sẽ không ngủ đâu, bạn cứ gọi tôi.']
  ],
  'stative': [
    ["I don't understand this question.", 'Tôi không hiểu câu hỏi này.'],
    ['She loves Vietnamese coffee.', 'Cô ấy rất thích cà phê Việt Nam.'],
    ['This cake smells wonderful.', 'Cái bánh này thơm quá.'],
    ['We are having a meeting at the moment.', 'Lúc này chúng tôi đang họp.'],
    ['He owns two small shops.', 'Anh ấy sở hữu hai cửa hàng nhỏ.'],
    ['I am seeing the doctor tomorrow.', 'Mai tôi sẽ đi khám bác sĩ.']
  ],
  'passive': [
    ['The letter was sent yesterday.', 'Lá thư đã được gửi hôm qua.'],
    ['These shoes are made in Vietnam.', 'Đôi giày này được sản xuất ở Việt Nam.'],
    ['My car is being repaired now.', 'Xe của tôi đang được sửa.'],
    ['The homework must be finished tonight.', 'Bài tập phải được làm xong tối nay.'],
    ['The door was left open.', 'Cửa bị để mở.'],
    ['Coffee is served from six in the morning.', 'Cà phê được phục vụ từ sáu giờ sáng.']
  ],
  'cond-2': [
    ['If I were rich, I would buy a house by the sea.', 'Nếu tôi giàu, tôi sẽ mua một ngôi nhà bên biển.'],
    ['If he knew her number, he would call her.', 'Nếu biết số của cô ấy, anh ấy sẽ gọi cho cô ấy.'],
    ['I would learn the piano if I had more time.', 'Tôi sẽ học piano nếu có nhiều thời gian hơn.'],
    ["If we lived in Da Lat, we wouldn't need air conditioning.", 'Nếu sống ở Đà Lạt, chúng tôi sẽ không cần máy lạnh.'],
    ['She would travel more if she spoke English well.', 'Cô ấy sẽ đi du lịch nhiều hơn nếu nói giỏi tiếng Anh.'],
    ['What would you say if he asked you?', 'Bạn sẽ nói gì nếu anh ấy hỏi bạn?']
  ],
  'gerund-1': [
    ["I don't mind waiting a little.", 'Tôi không ngại đợi một chút.'],
    ['He promised to come early.', 'Anh ấy đã hứa sẽ đến sớm.'],
    ['She is interested in learning Korean.', 'Cô ấy thích học tiếng Hàn.'],
    ['We finished cleaning at ten.', 'Chúng tôi dọn dẹp xong lúc mười giờ.'],
    ['They hope to buy a house next year.', 'Họ hy vọng sẽ mua nhà vào năm sau.'],
    ['I am tired of waking up early.', 'Tôi chán cảnh phải dậy sớm rồi.']
  ],
  'relative-1': [
    ['The woman who called you is my aunt.', 'Người phụ nữ gọi cho bạn là dì của tôi.'],
    ['I still keep the watch that my father gave me.', 'Tôi vẫn giữ chiếc đồng hồ mà ba tôi đã tặng.'],
    ['The students who study hard will pass.', 'Những học sinh học chăm sẽ đậu.'],
    ['This is the café which serves the best coffee.', 'Đây là quán cà phê phục vụ cà phê ngon nhất.'],
    ['The man whose car was stolen called the police.', 'Người đàn ông bị mất xe đã gọi cảnh sát.'],
    ['The house that we rented was very small.', 'Ngôi nhà mà chúng tôi thuê rất nhỏ.']
  ],
  'reported': [
    ['He said he was busy that day.', 'Anh ấy nói hôm đó anh ấy bận.'],
    ['She told me she would call me later.', 'Cô ấy bảo tôi là sẽ gọi lại sau.'],
    ['They said they had already eaten.', 'Họ nói họ đã ăn rồi.'],
    ['My father asked me what time I would come home.', 'Ba tôi hỏi mấy giờ tôi về nhà.'],
    ['The teacher told us not to be late.', 'Cô giáo bảo chúng tôi đừng đến trễ.'],
    ['She asked me where I lived.', 'Cô ấy hỏi tôi sống ở đâu.']
  ],
  'tag': [
    ["He is your brother, isn't he?", 'Anh ấy là anh trai bạn, phải không?'],
    ["You didn't call me, did you?", 'Bạn không gọi cho tôi, phải không?'],
    ["She will come tomorrow, won't she?", 'Mai cô ấy sẽ đến, phải không?'],
    ["We have met before, haven't we?", 'Chúng ta đã gặp nhau trước đây rồi, phải không?'],
    ["Your parents don't live here, do they?", 'Ba mẹ bạn không sống ở đây, phải không?'],
    ['Open the window, will you?', 'Mở cửa sổ giúp nhé?']
  ],
  'sothat': [
    ['He was so tired that he fell asleep on the bus.', 'Anh ấy mệt đến nỗi ngủ gục trên xe buýt.'],
    ["The box was so big that it didn't fit in my car.", 'Cái thùng to đến nỗi không vừa xe tôi.'],
    ['She was so busy that she forgot to eat lunch.', 'Cô ấy bận đến nỗi quên ăn trưa.'],
    ["The music was so loud that we couldn't talk.", 'Nhạc to đến nỗi chúng tôi không nói chuyện được.'],
    ['It rained so hard that the street was flooded.', 'Mưa to đến nỗi con đường bị ngập.'],
    ['He speaks so clearly that everyone understands him.', 'Anh ấy nói rõ đến nỗi ai cũng hiểu.']
  ],
  'suchthat': [
    ['It was such a hot day that we stayed home.', 'Hôm đó trời nóng đến nỗi chúng tôi ở nhà.'],
    ['She has such a beautiful voice that everyone listens.', 'Cô ấy có giọng hát hay đến nỗi ai cũng lắng nghe.'],
    ['They were such kind neighbours that we felt at home.', 'Hàng xóm tốt đến nỗi chúng tôi thấy như ở nhà mình.', ['They were such kind neighbors that we felt at home.']],
    ['It was such heavy traffic that we arrived late.', 'Đường đông đến nỗi chúng tôi đến trễ.'],
    ['He is such a careful driver that I always feel safe.', 'Anh ấy lái xe cẩn thận đến nỗi tôi luôn thấy an toàn.'],
    ['It was such an easy test that everyone passed.', 'Bài kiểm tra dễ đến nỗi ai cũng đậu.']
  ],
  'makelet': [
    ['My mother made me clean my room.', 'Mẹ bắt tôi dọn phòng.'],
    ['Let me help you with that bag.', 'Để tôi xách giúp bạn cái túi đó.'],
    ['The news made her very happy.', 'Tin đó làm cô ấy rất vui.'],
    ['He helped his father fix the motorbike.', 'Anh ấy giúp ba sửa xe máy.'],
    ["Don't let the children play near the river.", 'Đừng để bọn trẻ chơi gần sông.'],
    ['The song makes me think of my hometown.', 'Bài hát làm tôi nhớ đến quê nhà.']
  ],
  'asktell': [
    ['She told her son to go to bed.', 'Cô ấy bảo con trai đi ngủ.'],
    ['I asked the waiter to bring the bill.', 'Tôi nhờ người phục vụ mang hóa đơn ra.'],
    ['The teacher advised us to practise every day.', 'Cô giáo khuyên chúng tôi luyện tập mỗi ngày.'],
    ['He told me not to worry.', 'Anh ấy bảo tôi đừng lo.'],
    ['They asked us to come earlier.', 'Họ nhờ chúng tôi đến sớm hơn.'],
    ['My doctor advised me to walk thirty minutes a day.', 'Bác sĩ khuyên tôi đi bộ ba mươi phút mỗi ngày.']
  ],
  'usedto': [
    ['He used to smoke, but he stopped last year.', 'Anh ấy từng hút thuốc nhưng đã bỏ năm ngoái.'],
    ['I am not used to this hot weather yet.', 'Tôi vẫn chưa quen với thời tiết nóng này.'],
    ['We used to walk to school every day.', 'Chúng tôi từng đi bộ đến trường mỗi ngày.'],
    ['She is used to working at night.', 'Cô ấy đã quen làm việc ban đêm.'],
    ['Did you use to live in Hanoi?', 'Trước đây bạn từng sống ở Hà Nội phải không?'],
    ['He got used to the noise after a few weeks.', 'Anh ấy đã quen với tiếng ồn sau vài tuần.']
  ],
  'hadbetter': [
    ['You had better call her now.', 'Bạn nên gọi cho cô ấy ngay bây giờ.'],
    ['We had better not be late.', 'Chúng ta tốt nhất đừng đến trễ.'],
    ['He had better check the address again.', 'Anh ấy nên kiểm tra lại địa chỉ.'],
    ['You had better eat something before you go.', 'Bạn nên ăn gì đó trước khi đi.'],
    ['I had better save some money this month.', 'Tháng này tôi nên tiết kiệm một ít tiền.'],
    ['They had better book the tickets today.', 'Họ nên đặt vé hôm nay.']
  ],
  'spend': [
    ['He spends every evening studying English.', 'Anh ấy dành mỗi buổi tối để học tiếng Anh.'],
    ['We spent two hours waiting at the airport.', 'Chúng tôi mất hai tiếng đợi ở sân bay.'],
    ['She spends a lot of time helping her mother.', 'Cô ấy dành nhiều thời gian để giúp mẹ.'],
    ["Don't waste money buying things you don't need.", 'Đừng phí tiền mua những thứ bạn không cần.'],
    ['I spent the whole weekend cleaning the garden.', 'Tôi đã dành cả cuối tuần để dọn khu vườn.'],
    ['They spend too much time arguing.', 'Họ dành quá nhiều thời gian để cãi nhau.']
  ],
  'past-perfect-continuous': [
    ['She had been studying for three hours before dinner.', 'Cô ấy đã học ba tiếng trước bữa tối.'],
    ['They had been driving all day, so they were tired.', 'Họ lái xe cả ngày nên rất mệt.'],
    ['He had been looking for a job for months before he found one.', 'Anh ấy tìm việc mấy tháng trời mới tìm được.'],
    ['I had been working there for a year when the company closed.', 'Tôi đã làm ở đó được một năm thì công ty đóng cửa.'],
    ['We had been talking on the phone when the signal dropped.', 'Chúng tôi đang nói chuyện điện thoại thì mất sóng.'],
    ['Her hands were dirty because she had been gardening.', 'Tay cô ấy bẩn vì vừa làm vườn.']
  ],
  'future-perfect': [
    ['By next year, we will have saved enough for a car.', 'Đến năm sau, chúng tôi sẽ tiết kiệm đủ tiền mua xe.'],
    ['She will have left by the time you arrive.', 'Cô ấy sẽ đi rồi khi bạn đến.'],
    ['They will have built the new bridge by 2028.', 'Họ sẽ xây xong cây cầu mới trước năm 2028.'],
    ['I will have read this book by Sunday.', 'Tôi sẽ đọc xong quyển sách này trước chủ nhật.'],
    ["By six o'clock, he will have finished his shift.", 'Đến sáu giờ, anh ấy sẽ xong ca làm.'],
    ['We will have lived here for ten years next month.', 'Tháng sau là chúng tôi sống ở đây được mười năm.']
  ],
  'future-in-past': [
    ['He said he would call me back.', 'Anh ấy nói sẽ gọi lại cho tôi.'],
    ['I was going to buy that phone, but it sold out.', 'Tôi định mua chiếc điện thoại đó nhưng hết hàng mất rồi.'],
    ['She knew she would miss her family.', 'Cô ấy biết mình sẽ nhớ gia đình.'],
    ['We were going to meet at six, but he came late.', 'Chúng tôi định gặp nhau lúc sáu giờ nhưng anh ấy đến trễ.'],
    ['They promised they would send the money.', 'Họ hứa sẽ gửi tiền.'],
    ['I thought the meeting would finish earlier.', 'Tôi cứ nghĩ cuộc họp sẽ kết thúc sớm hơn.']
  ],
  'cond-3': [
    ['If we had booked earlier, we would have got cheaper tickets.', 'Nếu đặt sớm hơn, chúng tôi đã mua được vé rẻ hơn.', ['If we had booked earlier, we would have gotten cheaper tickets.']],
    ["If I hadn't been so tired, I would have gone with you.", 'Nếu tôi không quá mệt, tôi đã đi cùng bạn.'],
    ['She would have called you if she had had your number.', 'Nếu có số của bạn, cô ấy đã gọi cho bạn rồi.'],
    ['If the weather had been better, we would have gone camping.', 'Nếu thời tiết tốt hơn, chúng tôi đã đi cắm trại.'],
    ['He would have passed if he had answered the last question.', 'Nếu trả lời được câu cuối, anh ấy đã đậu.'],
    ['If they had told me earlier, I would have prepared.', 'Nếu họ nói với tôi sớm hơn, tôi đã chuẩn bị.']
  ],
  'relative-2': [
    ['My sister, who lives in Can Tho, visits us every summer.', 'Chị tôi sống ở Cần Thơ, mùa hè nào cũng đến thăm chúng tôi.'],
    ['Hoi An, which is famous for its old town, attracts many tourists.', 'Hội An, nơi nổi tiếng với phố cổ, thu hút rất nhiều khách du lịch.'],
    ['Our teacher, whose daughter studies abroad, speaks three languages.', 'Cô giáo của chúng tôi, có con gái đang du học, nói được ba thứ tiếng.'],
    ['The meeting, which lasted three hours, was very tiring.', 'Cuộc họp kéo dài ba tiếng, rất mệt.'],
    ['He arrived late, which annoyed everyone.', 'Anh ấy đến trễ, điều đó làm mọi người khó chịu.'],
    ['My old laptop, which I bought in 2015, still works.', 'Chiếc laptop cũ tôi mua từ năm 2015 vẫn còn chạy tốt.']
  ],
  'gerund-2': [
    ['I stopped eating sugar last month.', 'Tôi đã bỏ ăn đường từ tháng trước.'],
    ['We stopped to take some photos.', 'Chúng tôi dừng lại để chụp vài tấm ảnh.'],
    ["Don't forget to call your mother.", 'Đừng quên gọi cho mẹ bạn.'],
    ['I remember meeting him at a wedding.', 'Tôi nhớ đã gặp anh ấy ở một đám cưới.'],
    ['He tried to open the window, but it was stuck.', 'Anh ấy cố mở cửa sổ nhưng nó bị kẹt.'],
    ['Try drinking warm water before bed.', 'Hãy thử uống nước ấm trước khi đi ngủ.']
  ],
  'havedone': [
    ['I am going to have my hair cut tomorrow.', 'Ngày mai tôi sẽ đi cắt tóc.'],
    ['She had her bag stolen on the bus.', 'Cô ấy bị mất cắp túi trên xe buýt.'],
    ['We need to have the air conditioner cleaned.', 'Chúng tôi cần cho người vệ sinh máy lạnh.'],
    ['He has his shirts washed at a laundry.', 'Anh ấy đem áo đi giặt ở tiệm.'],
    ['They had their photos taken at the beach.', 'Họ đã nhờ người chụp ảnh cho mình ở bãi biển.'],
    ['When did you have your car serviced?', 'Bạn đem xe đi bảo dưỡng khi nào?']
  ],
  'suggest': [
    ['I suggest leaving before six.', 'Tôi đề nghị đi trước sáu giờ.'],
    ['She suggested that we meet at the café.', 'Cô ấy đề nghị chúng ta gặp nhau ở quán cà phê.'],
    ['He suggested taking the train instead.', 'Anh ấy đề nghị chuyển sang đi tàu.'],
    ['My friend suggested that I should see a doctor.', 'Bạn tôi đề nghị tôi nên đi khám bác sĩ.'],
    ['They suggested changing the plan.', 'Họ đề nghị thay đổi kế hoạch.'],
    ['Can you suggest a cheaper hotel?', 'Bạn có thể giới thiệu một khách sạn rẻ hơn không?']
  ],
  'prefer': [
    ['I prefer rice to bread.', 'Tôi thích cơm hơn bánh mì.'],
    ['She would rather work from home.', 'Cô ấy thích làm việc ở nhà hơn.'],
    ['We prefer travelling by train to flying.', 'Chúng tôi thích đi tàu hơn đi máy bay.', ['We prefer traveling by train to flying.']],
    ['He prefers tea to coffee in the morning.', 'Buổi sáng anh ấy thích trà hơn cà phê.'],
    ['I would rather stay here than go out in this rain.', 'Tôi thà ở đây còn hơn ra ngoài dưới trời mưa này.'],
    ['Would you rather eat now or later?', 'Bạn muốn ăn bây giờ hay để lát nữa?']
  ],
  'itstime': [
    ["It's time to leave for the airport.", 'Đã đến lúc đi ra sân bay.'],
    ["It's time you called your parents.", 'Đã đến lúc bạn nên gọi cho ba mẹ.'],
    ["It's high time he found a job.", 'Đã đến lúc anh ấy phải tìm một công việc.'],
    ["It's time for the children to go to bed.", 'Đã đến giờ bọn trẻ đi ngủ.'],
    ["It's time we started saving money.", 'Đã đến lúc chúng ta bắt đầu tiết kiệm tiền.'],
    ["It's time to turn off the lights.", 'Đã đến lúc tắt đèn.']
  ],
  'although': [
    ['Although he was sick, he went to work.', 'Mặc dù bị bệnh, anh ấy vẫn đi làm.'],
    ['Despite the traffic, we arrived on time.', 'Mặc dù kẹt xe, chúng tôi vẫn đến đúng giờ.'],
    ['Although the hotel was cheap, it was very clean.', 'Khách sạn tuy rẻ nhưng rất sạch.'],
    ['In spite of the noise, the baby slept well.', 'Mặc dù ồn ào, em bé vẫn ngủ ngon.'],
    ['Despite being tired, she kept studying.', 'Mặc dù mệt, cô ấy vẫn tiếp tục học.'],
    ['Although they are rich, they live simply.', 'Mặc dù giàu có, họ vẫn sống giản dị.']
  ],
  'paired': [
    ['Both my parents and my sister work in Hanoi.', 'Cả ba mẹ tôi và chị tôi đều làm việc ở Hà Nội.'],
    ['He not only speaks English but also Chinese.', 'Anh ấy không chỉ nói tiếng Anh mà còn nói tiếng Trung.'],
    ['Neither the bus nor the train was on time.', 'Cả xe buýt lẫn tàu đều không đúng giờ.'],
    ['You can either pay now or pay later.', 'Bạn có thể trả bây giờ hoặc trả sau.'],
    ['Both the house and the garden need cleaning.', 'Cả ngôi nhà và khu vườn đều cần dọn dẹp.'],
    ['She is not only kind but also very patient.', 'Cô ấy không chỉ tốt bụng mà còn rất kiên nhẫn.']
  ],
  'prevent': [
    ['The rain stopped us from finishing the match.', 'Trời mưa khiến chúng tôi không đấu hết trận được.'],
    ['A high fence prevents the dog from running away.', 'Hàng rào cao ngăn con chó chạy đi mất.'],
    ['His back pain prevented him from working.', 'Cơn đau lưng khiến anh ấy không làm việc được.'],
    ['Nothing will stop her from trying again.', 'Không gì ngăn được cô ấy thử lại lần nữa.'],
    ['The police prevented people from entering the building.', 'Cảnh sát không cho mọi người vào tòa nhà.'],
    ['The flood prevented the children from going to school.', 'Trận lụt khiến bọn trẻ không đi học được.']
  ],
  'future-perfect-continuous': [
    ['By next week, I will have been studying here for a month.', 'Đến tuần sau là tôi học ở đây được một tháng.'],
    ["By ten o'clock, they will have been travelling for twelve hours.", 'Đến mười giờ là họ đi được mười hai tiếng.', ["By ten o'clock, they will have been traveling for twelve hours."]],
    ['By the end of this year, she will have been teaching for twenty years.', 'Đến cuối năm nay là cô ấy dạy học được hai mươi năm.'],
    ['By tomorrow morning, it will have been raining for three days.', 'Đến sáng mai là trời mưa được ba ngày.'],
    ['By the time we finish, we will have been working for ten hours.', 'Lúc xong việc thì chúng tôi đã làm được mười tiếng rồi.'],
    ['By May, he will have been saving money for two years.', 'Đến tháng Năm là anh ấy tiết kiệm tiền được hai năm.']
  ],
  'polite-tenses': [
    ['I was wondering if you had any free time this week.', 'Không biết tuần này bạn có thời gian rảnh không.'],
    ['I was hoping we could talk for a few minutes.', 'Tôi mong chúng ta có thể nói chuyện vài phút.'],
    ['Did you need anything else?', 'Bạn có cần gì nữa không?'],
    ['I was wondering if I could leave early today.', 'Không biết hôm nay tôi về sớm được không.'],
    ['We were hoping you would join our team.', 'Chúng tôi mong bạn sẽ tham gia nhóm của chúng tôi.'],
    ['I was wondering whether you had received my email.', 'Không biết bạn đã nhận được email của tôi chưa.']
  ],
  'inversion-perfect': [
    ['Hardly had the meeting begun when the fire alarm rang.', 'Cuộc họp vừa bắt đầu thì chuông báo cháy reo.'],
    ['No sooner had we sat down than the waiter came.', 'Chúng tôi vừa ngồi xuống thì người phục vụ đến.'],
    ['Scarcely had she opened the door when the cat ran out.', 'Cô ấy vừa mở cửa thì con mèo chạy ra.'],
    ['No sooner had he left the office than it started raining.', 'Anh ấy vừa rời văn phòng thì trời bắt đầu mưa.'],
    ['Hardly had I sat down when the phone rang again.', 'Tôi vừa ngồi xuống thì điện thoại lại reo.'],
    ['No sooner had the train stopped than everyone stood up.', 'Tàu vừa dừng thì mọi người đứng dậy.']
  ],
  'wish': [
    ['I wish I knew the answer.', 'Tôi ước gì mình biết câu trả lời.'],
    ['She wishes she had studied harder.', 'Cô ấy ước gì mình đã học chăm hơn.'],
    ['I wish my neighbours would be quieter.', 'Tôi ước gì hàng xóm của tôi yên tĩnh hơn.', ['I wish my neighbors would be quieter.']],
    ['If only we had more time.', 'Giá như chúng ta có nhiều thời gian hơn.'],
    ['He wishes he could travel more.', 'Anh ấy ước gì mình có thể đi du lịch nhiều hơn.'],
    ["I wish I hadn't eaten so much.", 'Tôi ước gì mình đã không ăn nhiều như vậy.']
  ],
  'inversion': [
    ['Never had I felt so tired.', 'Tôi chưa bao giờ thấy mệt như vậy.'],
    ['Seldom does she complain.', 'Cô ấy hiếm khi phàn nàn.'],
    ['Only after the meeting did I understand the problem.', 'Chỉ sau cuộc họp tôi mới hiểu vấn đề.'],
    ['Not only did he apologise, but he also paid for the damage.', 'Anh ấy không chỉ xin lỗi mà còn trả tiền thiệt hại.', ['Not only did he apologize, but he also paid for the damage.']],
    ['Hardly ever do we eat out.', 'Chúng tôi hầu như không bao giờ ăn ngoài.'],
    ['Had I known about the traffic, I would have left earlier.', 'Nếu tôi biết trước là kẹt xe, tôi đã đi sớm hơn.']
  ],
  'mixedcond': [
    ["If he had slept well, he wouldn't be so tired now.", 'Nếu tối qua ngủ ngon thì giờ anh ấy đã không mệt như vậy.'],
    ['If I spoke Japanese, I would have taken that job.', 'Nếu tôi biết tiếng Nhật, tôi đã nhận công việc đó.'],
    ['If she had studied abroad, she would speak English better now.', 'Nếu cô ấy đi du học, giờ cô ấy sẽ nói tiếng Anh tốt hơn.'],
    ["If we weren't so busy, we would have visited you.", 'Nếu chúng tôi không quá bận, chúng tôi đã đến thăm bạn.'],
    ['If they had bought the house then, they would be rich today.', 'Nếu hồi đó họ mua ngôi nhà đó, hôm nay họ đã giàu.'],
    ["If I were more careful, I wouldn't have lost my phone.", 'Nếu tôi cẩn thận hơn, tôi đã không làm mất điện thoại.']
  ],
  'cleft': [
    ['It was my father who taught me to ride a bike.', 'Chính ba tôi là người dạy tôi đi xe đạp.'],
    ['It is her smile that I remember most.', 'Chính nụ cười của cô ấy là điều tôi nhớ nhất.'],
    ['What I want is a quiet place to work.', 'Điều tôi muốn là một chỗ yên tĩnh để làm việc.'],
    ['What worries me is the cost.', 'Điều làm tôi lo là chi phí.'],
    ['All I need is a few more days.', 'Tôi chỉ cần thêm vài ngày nữa thôi.'],
    ['The reason why she left is that she found a better job.', 'Lý do cô ấy nghỉ việc là vì cô ấy tìm được việc tốt hơn.']
  ],
  'themore': [
    ['The harder you work, the luckier you get.', 'Càng chăm chỉ, bạn càng gặp may.'],
    ['The earlier we start, the sooner we finish.', 'Bắt đầu càng sớm thì xong càng sớm.'],
    ['The more I listen to English, the easier it becomes.', 'Càng nghe tiếng Anh nhiều, tôi càng thấy dễ.'],
    ['The colder it gets, the more tea I drink.', 'Trời càng lạnh, tôi càng uống nhiều trà.'],
    ['The bigger the house, the higher the bills.', 'Nhà càng lớn, hóa đơn càng cao.'],
    ['The longer you wait, the harder it will be.', 'Bạn càng chờ lâu thì càng khó.']
  ]
};
const EX_WH_FX = {
  'regular-ed': 'Wh- + did + chủ ngữ + V (nguyên thể, không thêm -ed)? · Who / What làm chủ ngữ thì giữ V-ed và bỏ did: Who called you?',
  'present-simple': 'Wh- + do + I/you/we/they + V (nguyên thể)? (Where do you live?) · Wh- + does + he/she/it + V (nguyên thể)? (What does she do?) · Wh- + am/is/are + chủ ngữ + tính từ / danh từ / nơi chốn? (Where is your school?) · Who / What làm chủ ngữ thì không cần do/does: Who / What + V-s/es + tân ngữ? (Who lives here?)',
  'present-continuous': 'Wh- + am/is/are + chủ ngữ + V-ing? · Who/What + is + V-ing? (khi hỏi về chủ ngữ)',
  'past-be': 'Wh- + was + I/he/she/it + tính từ / danh từ / nơi chốn? (Where was she yesterday?) · Wh- + were + you/we/they + tính từ / danh từ / nơi chốn? (Why were you late?)',
  'past-simple': 'Wh- + did + chủ ngữ + V (nguyên thể)? · Who/What làm chủ ngữ thì giữ V2, bỏ did: Who broke it?',
  'past-continuous': 'Wh- + was + I/he/she/it + V-ing? · Wh- + were + you/we/they + V-ing?',
  'going-to': 'Wh- + am/is/are + chủ ngữ + going to + V?',
  'future-simple': 'Wh- + will + chủ ngữ + V? · Who will + V? (hỏi về chủ ngữ)',
  'present-perfect': "Wh- + have + I/you/we/they + V3? · Wh- + has + he/she/it + V3? · Who + has + V3? (khi hỏi về chủ ngữ)",
  'present-perfect-continuous': "Wh- + have + I/you/we/they + been + V-ing? · Wh- + has + he/she/it + been + V-ing? · Why / What + have/has + chủ ngữ + been + V-ing?",
  'past-perfect': 'Wh- + had + chủ ngữ + V3 (+ before / when + quá khứ đơn)?',
  'future-continuous': 'Wh- + will + chủ ngữ + be + V-ing?',
  'stative': 'Wh- + do/does + chủ ngữ + think / know / want / like + tân ngữ? (What do you think about it?) · Động từ trạng thái không dùng V-ing: không nói “What are you knowing?”',
  'past-perfect-continuous': "Wh- + had + chủ ngữ + been + V-ing + when / before …? · Why + had + chủ ngữ + been + V-ing?",
  'future-perfect': 'Wh- + will + chủ ngữ + have + V3 + by + mốc thời gian?',
  'future-in-past': 'Wh- + was/were + chủ ngữ + going to + V? · Wh- + would + chủ ngữ + V?',
  'future-perfect-continuous': "Wh- + will + chủ ngữ + have been + V-ing + by + mốc thời gian? (ít gặp — câu hỏi quen thuộc của thì này là How long, xem khối How- bên dưới)",
  'polite-tenses': 'I was wondering + Wh- + chủ ngữ + V (trật tự câu kể, không đảo) · Could you tell me + Wh- + chủ ngữ + V?',
  'inversion-perfect': 'Câu hỏi không đảo ngữ Hardly / No sooner; hỏi bằng trật tự thường: Wh- + had + chủ ngữ + V3 + when + chủ ngữ + V2? (What had you finished when she arrived?)',
  'thereis': "What + is there + (to V) …? · Who + is there + in + nơi chốn? · Where + is there + a + danh từ + near here?",
  'demonstratives': 'What + is this / that? · What + are these / those? · Whose + danh từ + is this / that?',
  'articles': 'Wh- + is + the + danh từ (đã xác định)? · Why + do/does + chủ ngữ + want + a / an + danh từ?',
  'nouns': "What + do/does + chủ ngữ + need / buy? (some / any + danh từ) · Which + danh từ + do/does + chủ ngữ + want? · Hỏi số lượng thì dùng How many / How much — xem khối How- bên dưới",
  'pronouns': 'Who + V-s/es / V2 + tân ngữ? — hỏi chủ ngữ (Who called you?) · Who(m) + do/does/did + chủ ngữ + V (nguyên thể)? — hỏi tân ngữ (Who did you call?) · Whose + danh từ + is + this / that? (Whose bag is this?)',
  'prepositions': 'Where + do/does + chủ ngữ + V? — hỏi nơi chốn (Where do you work?) · When / What time + do/does + chủ ngữ + V? — hỏi thời gian (What time does the film start?) · Who + do/does + chủ ngữ + V + with? (Who do you live with?) · What + do/does + chủ ngữ + V + for? — giới từ đứng cuối câu (What do you need it for?)',
  'modal-can': 'Wh- + can / could + chủ ngữ + V (nguyên thể)?',
  'compare': 'Which + danh từ + is + adj-er / more + adj, A or B? (Which city is bigger, Ha Noi or Da Nang?) · Who / Which + is + the + adj-est / the most + adj + in + nhóm / nơi chốn? (Who is the tallest in your class?)',
  'modal-more': 'Wh- + should / must / may + chủ ngữ + V? · Wh- + do/does + chủ ngữ + have to + V?',
  'cond-1': 'Wh- + will + chủ ngữ + V (nguyên thể) + if + chủ ngữ + V (hiện tại đơn)? (Where will you go if it rains?) · What will happen + if + chủ ngữ + V (hiện tại đơn)? (What will happen if we miss the bus?)',
  'too': 'Why + am/is/are + chủ ngữ + too + adj + to V? · Who / What + is + too + adj + to V?',
  'enough': 'Why + isn’t / aren’t + chủ ngữ + adj + enough + to V? · Who + is + adj + enough + to V?',
  'ittakes': "Why + does / did + it take + so long + to V? · What + takes + (ai đó) + nhiều thời gian nhất? · Hỏi thời lượng thì dùng How long — xem khối How- bên dưới",
  'itsadj': 'Why + is it + adj + to V? · What + is + adj + to V?',
  'passive': 'Wh- + am/is/are + chủ ngữ + V3? (Where is rice grown?) · When / Where + was/were + chủ ngữ + V3? (When was this bridge built?) · Who + was/were + chủ ngữ + V3 + by? — “by” đứng cuối câu (Who was this book written by?)',
  'cond-2': 'Wh- + would + chủ ngữ + V (nguyên thể) + if + chủ ngữ + V2 / were + tính từ / danh từ? (What would you do if you were rich?)',
  'gerund-1': 'Wh- + do/does + chủ ngữ + enjoy / like / avoid + V-ing? · Wh- + do/does + chủ ngữ + want / decide + to V?',
  'relative-1': 'Wh- + is / are + danh từ + who / that / which + V? (Who is the man who lives next door?) · What + is + the name of + danh từ + who / that + V? (What is the name of the girl who sings?)',
  'reported': 'Hỏi trực tiếp: Wh- + did + chủ ngữ + say / tell + (ai đó)? (What did he tell you?) · Tường thuật câu hỏi Wh-: chủ ngữ + asked + (ai đó) + Wh- + chủ ngữ + V (lùi thì, trật tự câu kể) (She asked me where I lived.)',
  'tag': 'Câu hỏi đuôi không dùng Wh- Wh- · Nhưng mệnh đề Wh- nằm được trong câu: You know where she lives, don’t you?',
  'sothat': 'Why + was/were + chủ ngữ + so + adj + that + chủ ngữ + V2? (Why was he so tired that he fell asleep?) · Who / What + V2 + so + adv + that + chủ ngữ + V2? (Who spoke so fast that nobody understood?)',
  'suchthat': 'Why + was it + such + (a/an) + adj + danh từ + that + chủ ngữ + V2? (Why was it such a hot day that the school closed?) · Who + is + such + (a/an) + adj + danh từ + that + chủ ngữ + V? (Who is such a good singer that everyone listens?)',
  'makelet': 'What + makes + ai đó + V? · Who + made + ai đó + V? · Why + do/does + chủ ngữ + let + ai đó + V?',
  'asktell': 'Wh- + did + chủ ngữ + ask / tell / advise + ai đó + to V? · Who + told + ai đó + to V?',
  'usedto': 'Wh- + did + chủ ngữ + use to + V? (bỏ -d của used) · Why + am/is/are + chủ ngữ + not used to + V-ing?',
  'hadbetter': 'Wh- + had + chủ ngữ + better + V? · Hoặc hỏi lời khuyên bằng: What should + chủ ngữ + V?',
  'spend': "Why + do/does + chủ ngữ + spend / waste + thời gian + V-ing? · What + do/does + chủ ngữ + spend + tiền + on? · Who + spends + nhiều thời gian nhất + V-ing?",
  'cond-3': 'Wh- + would + chủ ngữ + have + V3 + if + chủ ngữ + had + V3?',
  'relative-2': 'Wh- + do/does + chủ ngữ, who / which + V, + V? — mệnh đề giữa hai dấu phẩy chỉ bổ sung thông tin (Where does your brother, who lives in Hue, work?)',
  'gerund-2': 'Why + did + chủ ngữ + stop + V-ing (bỏ hẳn) / to V (dừng lại để làm)? · What + do/does + chủ ngữ + remember / forget + V-ing hay to V?',
  'havedone': "Where / When + do/does/did + chủ ngữ + have + cái gì + V3? · What + did + chủ ngữ + have + V3? · Who + does + chủ ngữ + get + to V + cho mình?",
  'suggest': 'Wh- + do/does + chủ ngữ + suggest + V-ing? · Where / What + do you suggest + (that) + chủ ngữ + V?',
  'prefer': 'Which + do/does + chủ ngữ + prefer, A or B? · Wh- + would + chủ ngữ + rather + V?',
  'itstime': 'Why / When + is it time + (for ai đó) + to V? · What + do you think + it’s time + to V?',
  'although': 'Wh- + did + chủ ngữ + V + although + chủ ngữ + V? · Wh- + did + chủ ngữ + V + despite + danh từ / V-ing?',
  'paired': 'Who + V-s/es + both A and B? (Who speaks both English and French?) · Which + danh từ + is + not only A but also B? (Which phone is not only cheap but also fast?) · Why + can + neither A nor B + V? (Why can neither Lan nor Nam come?)',
  'prevent': 'What + prevented / stopped + ai đó + from + V-ing? · Why + did + chủ ngữ + stop + ai đó + from + V-ing?',
  'wish': 'Wh- + do/does + chủ ngữ + wish + (that) + chủ ngữ + V2 / had + V3 / could + V?',
  'inversion': 'Câu hỏi Wh- vốn đã đảo trợ động từ lên trước chủ ngữ: Wh- + do/did/have/am-is-are + chủ ngữ + V? (Where did you go?) · Câu trả lời mới dùng đảo ngữ: Not until + thời điểm + did + chủ ngữ + V (nguyên thể) (Not until ten did I go home.)',
  'mixedcond': 'Wh- + would + chủ ngữ + V (bây giờ) + if + chủ ngữ + had + V3 (quá khứ)? · Wh- + would + chủ ngữ + have + V3 + if + chủ ngữ + V2 / were?',
  'cleft': 'What + is it + that + chủ ngữ + V? (What is it that you want?) · Who / Where + was it + that + chủ ngữ + V2? (Where was it that you met her?)',
  'themore': "What + V + the + so sánh hơn + chủ ngữ + V? (What gets easier the more you practise?) · Why + do/does + chủ ngữ + V + the + so sánh hơn + chủ ngữ + V?"
};
const EX_WH = {
  'regular-ed': [
    ['Where did you work last year?', 'Năm ngoái bạn làm việc ở đâu?'],
    ['What did she study at university?', 'Hồi đại học cô ấy học ngành gì?'],
    ['Why did they stop the car?', 'Sao họ lại dừng xe lại?']
  ],
  'present-simple': [
    ['Where do you live?', 'Bạn sống ở đâu?'],
    ['What does your sister do every morning?', 'Chị của bạn làm gì mỗi sáng?'],
    ['Why is he always late?', 'Sao anh ấy lúc nào cũng trễ?']
  ],
  'present-continuous': [
    ['What are you doing now?', 'Bây giờ bạn đang làm gì?'],
    ['Why is the baby crying?', 'Sao em bé lại khóc?'],
    ['Who is standing at the door?', 'Ai đang đứng ở cửa?']
  ],
  'past-be': [
    ['Where were you yesterday?', 'Hôm qua bạn ở đâu?'],
    ['Why was she so tired last night?', 'Sao tối qua cô ấy mệt vậy?'],
    ['Who was your first teacher?', 'Giáo viên đầu tiên của bạn là ai?']
  ],
  'thereis': [
    ['How many people are there in your family?', 'Gia đình bạn có bao nhiêu người?'],
    ['What is there to eat in the fridge?', 'Trong tủ lạnh có gì để ăn?'],
    ['How much sugar is there in this cake?', 'Trong cái bánh này có bao nhiêu đường?']
  ],
  'demonstratives': [
    ['What is this?', 'Cái này là cái gì?'],
    ['Whose bag is that?', 'Cái túi kia là của ai?'],
    ['Who are those people?', 'Những người kia là ai?']
  ],
  'articles': [
    ['Where is the nearest bus stop?', 'Trạm xe buýt gần nhất ở đâu?'],
    ['Who is the man at the door?', 'Người đàn ông ở cửa là ai?'],
    ['Why do you want a new phone?', 'Sao bạn muốn một chiếc điện thoại mới?']
  ],
  'nouns': [
    ['How many eggs are there in the box?', 'Trong hộp có bao nhiêu quả trứng?'],
    ['How much water do you drink every day?', 'Mỗi ngày bạn uống bao nhiêu nước?'],
    ['How many friends does she have in Da Nang?', 'Cô ấy có bao nhiêu người bạn ở Đà Nẵng?']
  ],
  'pronouns': [
    ['Who sits next to you in class?', 'Ai ngồi cạnh bạn trong lớp?'],
    ['Whose phone is this?', 'Điện thoại này của ai?'],
    ['Which of these bags is yours?', 'Cái túi nào trong mấy cái này là của bạn?']
  ],
  'prepositions': [
    ['Where do you work?', 'Bạn làm việc ở đâu?'],
    ['When does the shop open?', 'Cửa hàng mở cửa khi nào?'],
    ['Who do you live with?', 'Bạn sống với ai?']
  ],
  'modal-can': [
    ['What can you cook?', 'Bạn biết nấu món gì?'],
    ['Where can I buy a SIM card?', 'Tôi mua sim ở đâu được?'],
    ['When can we meet?', 'Khi nào mình gặp nhau được?']
  ],
  'past-simple': [
    ['Where did you go last weekend?', 'Cuối tuần trước bạn đi đâu?'],
    ['What time did the film start?', 'Bộ phim bắt đầu lúc mấy giờ?'],
    ['Who broke this glass?', 'Ai đã làm vỡ cái ly này?']
  ],
  'past-continuous': [
    ['What were you doing at nine last night?', 'Chín giờ tối qua bạn đang làm gì?'],
    ['Where were they going when you saw them?', 'Họ đang đi đâu khi bạn thấy họ?'],
    ['Why was she crying this morning?', 'Sáng nay sao cô ấy khóc?']
  ],
  'going-to': [
    ['What are you going to do tomorrow?', 'Ngày mai bạn định làm gì?'],
    ['Where are they going to stay in Hue?', 'Họ định ở đâu khi tới Huế?'],
    ['When is she going to start her new job?', 'Khi nào cô ấy bắt đầu công việc mới?']
  ],
  'future-simple': [
    ['What will you do after work?', 'Sau giờ làm bạn sẽ làm gì?'],
    ['When will they arrive?', 'Khi nào họ sẽ đến?'],
    ['Who will pay for the tickets?', 'Ai sẽ trả tiền vé?']
  ],
  'present-perfect': [
    ['How long have you lived in this city?', 'Bạn đã sống ở thành phố này bao lâu?'],
    ['Where have you been?', 'Bạn đã đi đâu vậy?'],
    ['How many times has she visited Hue?', 'Cô ấy đã đến Huế mấy lần rồi?']
  ],
  'compare': [
    ['Which bag is cheaper?', 'Cái túi nào rẻ hơn?'],
    ['Who is the tallest in your class?', 'Ai cao nhất lớp bạn?'],
    ['Which city is more beautiful, Hue or Hoi An?', 'Thành phố nào đẹp hơn, Huế hay Hội An?']
  ],
  'modal-more': [
    ['What should I do now?', 'Giờ tôi nên làm gì?'],
    ['Why must we leave so early?', 'Sao chúng ta phải đi sớm vậy?'],
    ['When do you have to finish the report?', 'Khi nào bạn phải hoàn thành báo cáo?']
  ],
  'cond-1': [
    ['What will you do if it rains tomorrow?', 'Nếu mai trời mưa bạn sẽ làm gì?'],
    ['Where will we go if the beach is closed?', 'Chúng ta sẽ đi đâu nếu bãi biển đóng cửa?'],
    ["Who will help us if he doesn't come?", 'Ai sẽ giúp chúng ta nếu anh ấy không đến?']
  ],
  'too': [
    ['Why are you too tired to go out?', 'Sao bạn mệt đến mức không ra ngoài được?'],
    ['Why was he too tired to finish the work?', 'Sao anh ấy mệt đến mức không làm xong việc?'],
    ['Which bag is too heavy for you to carry?', 'Cái túi nào nặng quá, bạn không mang nổi?']
  ],
  'enough': [
    ["Why isn't this room big enough for us?", 'Sao phòng này không đủ rộng cho chúng ta?'],
    ['Who is old enough to vote?', 'Ai đủ tuổi để đi bầu cử?'],
    ["Why don't you have enough money to buy it?", 'Sao bạn không có đủ tiền để mua nó?']
  ],
  'ittakes': [
    ['How long did it take her to finish the book?', 'Cô ấy đọc xong quyển sách mất bao lâu?'],
    ['How long does it take to cook this dish?', 'Nấu món này mất bao lâu?'],
    ['Why does it take so long to repair a phone?', 'Sao sửa một cái điện thoại lại lâu vậy?']
  ],
  'itsadj': [
    ['Why is it difficult to get up early?', 'Sao thức dậy sớm lại khó vậy?'],
    ['What is important to remember before the test?', 'Điều gì quan trọng cần nhớ trước kỳ thi?'],
    ['Why is it dangerous to use a phone while driving?', 'Sao dùng điện thoại khi lái xe lại nguy hiểm?']
  ],
  'present-perfect-continuous': [
    ['How long have you been learning English?', 'Bạn đã học tiếng Anh bao lâu rồi?'],
    ['What have you been doing all morning?', 'Cả buổi sáng bạn đã làm gì vậy?'],
    ['Why has she been crying?', 'Sao nãy giờ cô ấy khóc vậy?']
  ],
  'past-perfect': [
    ['Where had she gone before you arrived?', 'Cô ấy đã đi đâu trước khi bạn đến?'],
    ['What had you done before the meeting started?', 'Bạn đã làm gì trước khi cuộc họp bắt đầu?'],
    ['Why had the train already left?', 'Sao lúc đó tàu đã chạy mất rồi?']
  ],
  'future-continuous': [
    ['What will your sister be doing this time tomorrow?', 'Giờ này ngày mai chị bạn đang làm gì?'],
    ['Where will they be waiting for us?', 'Họ sẽ đợi chúng ta ở đâu?'],
    ['Who will be driving tomorrow morning?', 'Sáng mai ai sẽ lái xe?']
  ],
  'stative': [
    ['What do you think about this plan?', 'Bạn nghĩ gì về kế hoạch này?'],
    ['Who knows the answer?', 'Ai biết câu trả lời?'],
    ['Why do you want to change jobs?', 'Sao bạn muốn đổi công việc?']
  ],
  'passive': [
    ['When was this house built?', 'Ngôi nhà này được xây khi nào?'],
    ['Where are these shoes made?', 'Đôi giày này được sản xuất ở đâu?'],
    ['Who was the window broken by?', 'Cửa sổ bị ai làm vỡ?']
  ],
  'cond-2': [
    ['Where would you live if you had a lot of money?', 'Nếu có nhiều tiền bạn sẽ sống ở đâu?'],
    ['What would you say if he asked you for help?', 'Bạn sẽ nói gì nếu anh ấy nhờ bạn giúp?'],
    ['Who would you call if you needed help at night?', 'Bạn sẽ gọi ai nếu bạn cần giúp đỡ lúc nửa đêm?']
  ],
  'gerund-1': [
    ['What do you enjoy doing at the weekend?', 'Cuối tuần bạn thích làm gì?'],
    ['Why did they decide to stay at home?', 'Sao họ quyết định ở nhà?'],
    ['What are you interested in learning?', 'Bạn hứng thú học cái gì?']
  ],
  'relative-1': [
    ['Who is the man who is wearing a blue shirt?', 'Người đàn ông đang mặc áo xanh là ai?'],
    ['Which is the book that you bought yesterday?', 'Quyển sách mà bạn mua hôm qua là quyển nào?'],
    ['Where is the café that serves the best coffee?', 'Quán cà phê phục vụ cà phê ngon nhất ở đâu?']
  ],
  'reported': [
    ['What did she say to you?', 'Cô ấy nói gì với bạn?'],
    ['He asked me why I was late.', 'Anh ấy hỏi tôi tại sao tôi đến trễ.'],
    ['She asked me how long I had waited.', 'Cô ấy hỏi tôi đã đợi bao lâu.']
  ],
  'tag': [
    ["You know where she lives, don't you?", 'Bạn biết cô ấy sống ở đâu, phải không?'],
    ["You remember what time it starts, don't you?", 'Bạn nhớ mấy giờ nó bắt đầu, phải không?'],
    ["She told you why she left, didn't she?", "Cô ấy nói với bạn vì sao cô ấy đi rồi, phải không?"]
  ],
  'sothat': [
    ['What was so funny that everyone laughed?', 'Có chuyện gì buồn cười đến mức ai cũng cười vậy?'],
    ['Who ran so fast that nobody could catch him?', 'Ai chạy nhanh đến nỗi không ai bắt kịp?'],
    ['What was so heavy that you had to stop?', 'Cái gì nặng đến nỗi bạn phải dừng lại?']
  ],
  'suchthat': [
    ['Which film was such a big hit that everyone talked about it?', 'Bộ phim nào ăn khách đến mức ai cũng bàn tán?'],
    ['Why was it such a difficult test that nobody passed?', 'Sao bài kiểm tra đó khó đến mức không ai đậu?'],
    ['Where did you find such a good restaurant that you went back twice?', 'Bạn tìm đâu ra nhà hàng ngon đến mức phải quay lại hai lần?']
  ],
  'makelet': [
    ['What makes you laugh?', 'Điều gì làm bạn cười?'],
    ['Who made you clean the room?', 'Ai bắt bạn dọn phòng?'],
    ["Why don't your parents let you go out late?", 'Sao ba mẹ bạn không cho bạn ra ngoài khuya?']
  ],
  'asktell': [
    ['What did she ask you to do?', 'Cô ấy nhờ bạn làm gì?'],
    ['Who told you to wait outside?', 'Ai bảo bạn đợi ở ngoài?'],
    ['Why did the doctor advise him to eat less sugar?', 'Sao bác sĩ khuyên anh ấy ăn ít đường hơn?']
  ],
  'usedto': [
    ['Where did you use to live?', 'Trước đây bạn từng sống ở đâu?'],
    ['What did he use to do before he moved here?', 'Trước khi chuyển đến đây anh ấy từng làm gì?'],
    ["Why aren't you used to this weather yet?", 'Sao bạn vẫn chưa quen với thời tiết này?']
  ],
  'hadbetter': [
    ['What do you think I had better do?', 'Bạn nghĩ tôi nên làm gì thì hơn?'],
    ['Where do you think we had better park?', 'Bạn nghĩ chúng ta nên đỗ xe ở đâu thì hơn?'],
    ['When do you think they had better book the tickets?', 'Bạn nghĩ khi nào họ nên đặt vé thì hơn?']
  ],
  'spend': [
    ['How much time do you spend learning English every day?', 'Mỗi ngày bạn dành bao nhiêu thời gian để học tiếng Anh?'],
    ['How much money does he spend buying books?', 'Anh ấy tiêu bao nhiêu tiền mua sách?'],
    ['Why do they spend so much time arguing?', 'Sao họ tốn nhiều thời gian cãi nhau vậy?']
  ],
  'past-perfect-continuous': [
    ['How long had you been waiting when the bus came?', 'Bạn đã đợi bao lâu thì xe buýt đến?'],
    ['What had she been doing before dinner?', 'Trước bữa tối cô ấy đã làm gì?'],
    ['Why had he been working all night?', 'Sao lúc đó anh ấy lại làm việc suốt đêm?']
  ],
  'future-perfect': [
    ['What will you have finished by Friday?', 'Đến thứ Sáu bạn sẽ làm xong việc gì?'],
    ['How much money will you have saved by next month?', 'Đến tháng sau bạn sẽ tiết kiệm được bao nhiêu tiền?'],
    ['Where will they have gone by the time we arrive?', 'Lúc chúng ta đến thì họ sẽ đi đâu rồi?']
  ],
  'future-in-past': [
    ['What were you going to say?', 'Lúc nãy bạn định nói gì?'],
    ['Where were they going to travel last summer?', 'Mùa hè năm ngoái họ định đi đâu?'],
    ['Who did she say would help her?', 'Cô ấy nói ai sẽ giúp cô ấy?']
  ],
  'cond-3': [
    ['What would you have done if you had known?', 'Nếu biết thì bạn đã làm gì?'],
    ["Where would we have gone if it hadn't rained?", 'Nếu trời không mưa thì chúng ta đã đi đâu?'],
    ["Who would have helped you if I hadn't been there?", 'Nếu tôi không ở đó thì ai đã giúp bạn?']
  ],
  'relative-2': [
    ['What do you think of Hoi An, which is famous for its old town?', 'Bạn nghĩ gì về Hội An, nơi nổi tiếng với phố cổ?'],
    ['When did you last see Mr Nam, who taught us English?', 'Lần cuối bạn gặp thầy Nam, người dạy chúng ta tiếng Anh, là khi nào?'],
    ['Why did Mr Nam, who teaches us English, leave the school?', 'Sao thầy Nam, người dạy tiếng Anh cho chúng tôi, lại nghỉ dạy ở trường?']
  ],
  'gerund-2': [
    ['Why did he stop smoking?', 'Sao anh ấy bỏ thuốc lá?'],
    ['What do you remember doing that day?', 'Bạn nhớ mình đã làm gì hôm đó?'],
    ['What did you forget to buy?', 'Bạn quên mua gì rồi?']
  ],
  'havedone': [
    ['Where do you have your hair cut?', 'Bạn cắt tóc ở đâu?'],
    ['When did she have her car repaired?', 'Cô ấy đem xe đi sửa khi nào?'],
    ['How much did it cost to have the house painted?', 'Sơn lại nhà tốn bao nhiêu tiền?']
  ],
  'suggest': [
    ['What do you suggest doing this weekend?', 'Cuối tuần này bạn đề nghị làm gì?'],
    ['Where do you suggest we eat tonight?', 'Tối nay bạn đề nghị chúng ta ăn ở đâu?'],
    ['Who suggested taking the train?', 'Ai đề nghị đi tàu?']
  ],
  'prefer': [
    ['Which do you prefer, tea or coffee?', 'Bạn thích cái nào hơn, trà hay cà phê?'],
    ['Why does she prefer walking to driving?', 'Sao cô ấy thích đi bộ hơn lái xe?'],
    ['Where would you rather live, in the city or in the countryside?', 'Bạn thích sống ở đâu hơn, thành phố hay nông thôn?']
  ],
  'itstime': [
    ['Why do you think it’s time we changed the plan?', 'Sao bạn nghĩ đã đến lúc chúng ta đổi kế hoạch?'],
    ['Who thinks it\'s time we had a break?', 'Ai nghĩ đã đến lúc chúng ta nghỉ một chút?'],
    ["Why is it time to go home already?", "Sao đã đến giờ về rồi vậy?"]
  ],
  'although': [
    ['Why did you go out although it was raining?', 'Sao bạn vẫn ra ngoài mặc dù trời mưa?'],
    ['Why did she keep working although she was tired?', 'Sao cô ấy vẫn tiếp tục làm việc dù đã mệt?'],
    ['Where did they go despite the heavy rain?', 'Họ đã đi đâu mặc dù mưa to?']
  ],
  'paired': [
    ['Who speaks both English and Chinese?', 'Ai nói được cả tiếng Anh và tiếng Trung?'],
    ['Which hotel is not only cheap but also clean?', 'Khách sạn nào không chỉ rẻ mà còn sạch?'],
    ['Why does neither the bus nor the train stop here?', 'Sao cả xe buýt lẫn tàu đều không dừng ở đây?']
  ],
  'prevent': [
    ['What prevented you from coming yesterday?', 'Hôm qua vì chuyện gì mà bạn không đến được?'],
    ['Why did they stop the children from playing near the road?', 'Sao họ không cho bọn trẻ chơi gần đường?'],
    ['Who stopped him from buying that motorbike?', 'Ai không cho anh ấy mua chiếc xe máy đó?']
  ],
  'future-perfect-continuous': [
    ['How long will you have been working here by June?', 'Đến tháng Sáu là bạn làm việc ở đây được bao lâu?'],
    ['How long will they have been waiting by the time we arrive?', 'Lúc chúng ta đến thì họ đã đợi được bao lâu rồi?'],
    ['How long will he have been living abroad by 2030?', 'Đến năm 2030 là anh ấy sống ở nước ngoài được bao lâu?']
  ],
  'polite-tenses': [
    ['I was wondering what time the shop opens.', 'Không biết cửa hàng mở cửa lúc mấy giờ.'],
    ['Could you tell me where the station is?', 'Bạn chỉ giúp tôi nhà ga ở đâu được không?'],
    ['I was wondering how much this tour costs.', 'Không biết tour này giá bao nhiêu.']
  ],
  'inversion-perfect': [
    ['What had he done when the police arrived?', 'Khi cảnh sát đến thì anh ấy đã làm gì?'],
    ['Where had she gone when you called her?', 'Khi bạn gọi thì cô ấy đã đi đâu?'],
    ['Why had they left before the show started?', 'Sao họ lại rời đi trước khi buổi diễn bắt đầu?']
  ],
  'wish': [
    ['What do you wish you had studied?', 'Bạn ước gì mình đã học ngành nào?'],
    ['Where do you wish you lived?', 'Bạn ước mình sống ở đâu?'],
    ['What do you wish you could do better?', 'Bạn ước mình có thể làm gì giỏi hơn?']
  ],
  'inversion': [
    ['When did you realise your mistake?', 'Bạn nhận ra lỗi của mình khi nào?', ['When did you realize your mistake?']],
    ['Why have you never told me this before?', 'Sao trước giờ bạn chưa bao giờ nói với tôi chuyện này?'],
    ['How often does he complain about his work?', 'Anh ấy có hay phàn nàn về công việc không?']
  ],
  'mixedcond': [
    ['Where would you be now if you had taken that job?', 'Nếu bạn nhận công việc đó thì giờ bạn đang ở đâu?'],
    ['What would she be doing now if she had studied medicine?', 'Nếu cô ấy học y thì giờ cô ấy đang làm gì?'],
    ["What would you have bought if you weren't so careful with money?", "Nếu không quá tiết kiệm thì bạn đã mua gì?"]
  ],
  'cleft': [
    ['What is it that you want to know?', 'Điều bạn muốn biết là gì?'],
    ['Who was it that called you last night?', 'Người gọi cho bạn tối qua là ai?'],
    ['Where was it that you met her?', 'Bạn đã gặp cô ấy ở đâu vậy?']
  ],
  'themore': [
    ['Why does it get easier the more you practise?', 'Sao càng luyện tập thì càng thấy dễ?', ['Why does it get easier the more you practice?']],
    ['Why do you sleep better the more you exercise?', 'Sao càng tập thể dục nhiều thì càng ngủ ngon?'],
    ['Why is it cheaper the earlier you book?', 'Sao đặt càng sớm thì càng rẻ?']
  ]
};
const EX_HOW_FX = {
  'regular-ed': 'How + did + chủ ngữ + V (nguyên thể)? · How long / How many times + did + chủ ngữ + V?',
  'present-simple': 'How + do + I/you/we/they + V (nguyên thể)? (How do you go to school?) · How + does + he/she/it + V (nguyên thể)? (How does she cook rice?) · How + am/is/are + chủ ngữ? — hỏi sức khoẻ, tình trạng (How is your mother?) · How often + do/does + chủ ngữ + V? (How often do you exercise?) · How far + is it + from + nơi A + to + nơi B? (How far is it from here to the station?) · How old + am/is/are + chủ ngữ? (How old is your brother?)',
  'present-continuous': 'How + am/is/are + chủ ngữ + V-ing? · How many + danh từ số nhiều + are + V-ing?',
  'past-be': 'How + was + I/he/she/it? — hỏi cảm nhận, tình trạng (How was the trip?) · How + were + you/we/they? (How were your exams?) · How old + was/were + chủ ngữ + when + chủ ngữ + V2? (How old were you when you started school?) · How long + was/were + chủ ngữ + in / at + nơi chốn? (How long were you in Da Lat?)',
  'past-simple': 'How + did + chủ ngữ + V (nguyên thể)? · How long / How often / How many + did + chủ ngữ + V?',
  'past-continuous': 'How + was/were + chủ ngữ + V-ing? (How were they travelling?) · How fast + was/were + chủ ngữ + V-ing? (How fast was he driving?) · How many + danh từ số nhiều + were + V-ing? (How many people were waiting?)',
  'going-to': 'How + am/is/are + chủ ngữ + going to + V? · How long + am/is/are + chủ ngữ + going to + V?',
  'future-simple': 'How + will + chủ ngữ + V? · How much / How long + will + chủ ngữ + V?',
  'present-perfect': 'How long + have/has + chủ ngữ + V3? · How many (times) + have/has + chủ ngữ + V3?',
  'present-perfect-continuous': 'How long + have/has + chủ ngữ + been + V-ing? (đây là câu hỏi How- hay gặp nhất của thì này)',
  'past-perfect': 'How long + had + chủ ngữ + V3 + before + chủ ngữ + V2? (How long had you lived there before you moved?) · How many times + had + chủ ngữ + V3 + before + chủ ngữ + V2? (How many times had she failed before she passed?)',
  'future-continuous': 'How long + will + chủ ngữ + be + V-ing? (How long will you be staying?) · How many + danh từ số nhiều + will be + V-ing + mốc thời gian? (How many people will be working tomorrow?)',
  'stative': 'How + do/does + chủ ngữ + feel + about + danh từ? (How do you feel about the new job?) · How + do/does + chủ ngữ + like + danh từ? (How do you like Ha Noi?) · How much + do/does + chủ ngữ + know / want / need + tân ngữ? (How much do you know about it?)',
  'past-perfect-continuous': 'How long + had + chủ ngữ + been + V-ing + before / when + chủ ngữ + V2? (How long had you been waiting when the bus came?)',
  'future-perfect': 'How much / How many + will + chủ ngữ + have + V3 + by + mốc thời gian?',
  'future-in-past': 'How + was/were + chủ ngữ + going to + V? · How long + was/were + chủ ngữ + going to + V?',
  'future-perfect-continuous': 'How long + will + chủ ngữ + have been + V-ing + by + mốc thời gian?',
  'polite-tenses': 'I was wondering how + chủ ngữ + V — trật tự câu kể (I was wondering how you did it.) · Could you tell me + how long / how much + chủ ngữ + V? — trật tự câu kể (Could you tell me how much it costs?)',
  'inversion-perfect': 'How long / How many + had + chủ ngữ + V3 + when + chủ ngữ + V2? — hỏi bằng trật tự thường, không đảo ngữ (How long had they known each other when they married?)',
  'thereis': 'How many + danh từ số nhiều + are there + nơi chốn? (How many students are there in your class?) · How much + danh từ không đếm được + is there + nơi chốn? (How much milk is there in the fridge?)',
  'demonstratives': 'How much + is + this / that + danh từ số ít? (How much is this shirt?) · How much + are + these / those + danh từ số nhiều? (How much are these shoes?) · How many of + these / those + danh từ + do/does + chủ ngữ + want? (How many of these apples do you want?)',
  'articles': 'How much + is + a / an + danh từ? · How far + is + the + danh từ?',
  'nouns': 'How many + danh từ đếm được số nhiều + do/does + chủ ngữ + V? (How many books do you have?) · How much + danh từ không đếm được + do/does + chủ ngữ + V? (How much water do you drink?) · How many + bottles / kilos of + danh từ + do/does + chủ ngữ + need? (How many kilos of rice do we need?)',
  'pronouns': 'How + do/does + chủ ngữ + help + me / him / her / them? (How does she help them?) · How many of + us / you / them + are + tính từ / nơi chốn? (How many of you are free tonight?)',
  'prepositions': 'How + do/does + chủ ngữ + go + to + nơi chốn? (How do you go to work?) · How far + is it + from + nơi A + to + nơi B? (How far is it from Hue to Da Nang?)',
  'modal-can': 'How + can / could + chủ ngữ + V? · How well + can + chủ ngữ + V?',
  'compare': 'How + adj + am/is/are + chủ ngữ? · How much + adj-er / more + adj + is + A + than + B?',
  'modal-more': 'How + should / must + chủ ngữ + V? · How often + do/does + chủ ngữ + have to + V?',
  'cond-1': 'How + will + chủ ngữ + V + if + chủ ngữ + V (hiện tại đơn)? (How will you get home if it rains?) · How much + danh từ + will + chủ ngữ + V + if + chủ ngữ + V (hiện tại đơn)? (How much money will you save if you cook at home?)',
  'too': 'How + can + chủ ngữ + V + if + chủ ngữ + am/is/are + too + adj? (How can I study if I am too tired?) · How many + danh từ số nhiều + are + too + adj + to V? (How many boxes are too heavy to carry?)',
  'enough': 'How many of + us / them + am/is/are + adj + enough + to V? · How + can + chủ ngữ + V + nếu không có + enough + danh từ?',
  'ittakes': 'How long + does / did + it take + (ai đó) + to V? (dạng How- chuẩn của cấu trúc này)',
  'itsadj': 'How + adj + is it + (for ai đó) + to V? · How easy / How important + is it + to V?',
  'passive': 'How + was/were + chủ ngữ + V3? · How many + danh từ + are + V3 + mỗi năm?',
  'cond-2': 'How + would + chủ ngữ + V + if + chủ ngữ + V2 / were + tính từ / danh từ? (How would you feel if you were me?) · How much + danh từ + would + chủ ngữ + V + if + chủ ngữ + V2? (How much money would you need if you moved abroad?)',
  'gerund-1': 'How good + am/is/are + chủ ngữ + at + V-ing? · How + do/does + chủ ngữ + avoid / enjoy + V-ing?',
  'relative-1': 'How much + is + danh từ + that + chủ ngữ + V? (How much is the bag that you want?) · How many + danh từ số nhiều + who / that + V + are there? (How many students who speak French are there?)',
  'reported': 'Tường thuật câu hỏi How-: chủ ngữ + asked + how (long / much / often) + chủ ngữ + V (lùi thì, trật tự câu kể)',
  'tag': 'Mệnh đề How- nằm được trong câu hỏi đuôi: You know how it works, don’t you?',
  'sothat': 'How + did + chủ ngữ + V + so + adv + that + chủ ngữ + V2? (How did she run so fast that she won?) · How many + danh từ số nhiều + were + so + adj + that + chủ ngữ + V2? (How many questions were so hard that you skipped them?)',
  'suchthat': 'How + was it + such + (a/an) + adj + danh từ + that + chủ ngữ + V2? (How was it such a good party that nobody left?) · How many of + them / us / you + are + such + adj + danh từ số nhiều + that + chủ ngữ + V? (How many of them are such good players that they win every game?)',
  'makelet': 'How + does + cái gì + make + ai đó + V? · How often + do/does + chủ ngữ + make / let + ai đó + V?',
  'asktell': 'How + did + chủ ngữ + ask / tell / advise + ai đó + to V? · How many times + did + chủ ngữ + ask + ai đó + to V?',
  'usedto': 'How often + did + chủ ngữ + use to + V? · How long + have/has + chủ ngữ + been used to + V-ing?',
  'hadbetter': 'How many / How early + had + chủ ngữ + better + V? · Hoặc hỏi nhẹ hơn: How do you think we had better + V?',
  'spend': 'How much time / How much money + do/does + chủ ngữ + spend + V-ing? (dạng How- chuẩn của cấu trúc này)',
  'cond-3': 'How + would + chủ ngữ + have + V3 + if + chủ ngữ + had + V3? (How would you have felt if you had lost?) · How much + danh từ + would + chủ ngữ + have + V3 + if + chủ ngữ + had + V3? (How much money would you have saved if you had taken the bus?)',
  'relative-2': 'How far / How old + is + danh từ, who / which + V? — mệnh đề sau dấu phẩy chỉ bổ sung thông tin (How old is your grandfather, who lives in Hue?)',
  'gerund-2': 'How + did + chủ ngữ + stop + V-ing? · How often + do/does + chủ ngữ + forget + to V?',
  'havedone': 'How often + do/does + chủ ngữ + have + cái gì + V3? · How much + does it cost + to have + cái gì + V3?',
  'suggest': 'How + do/does + chủ ngữ + suggest + V-ing? · How about + V-ing? (cách đề nghị thân mật)',
  'prefer': 'How + do/does + chủ ngữ + prefer + danh từ? · How many + người + prefer + A + to + B?',
  'itstime': 'How + do/does + chủ ngữ + know + it’s time + to V? (How do you know it’s time to leave?) · How + can + chủ ngữ + tell + it’s time + for + ai đó + to V? (How can you tell it’s time for him to retire?)',
  'although': 'How + did + chủ ngữ + V + although + chủ ngữ + V2? (How did he pass although he didn’t study?) · How many + danh từ số nhiều + V2 + despite + danh từ / V-ing? (How many people came despite the rain?)',
  'paired': 'How many of + them / us / you + V + both A and B? (How many of you play both football and tennis?) · How + can + chủ ngữ + be + not only A but also B? (How can a phone be not only cheap but also good?)',
  'prevent': 'How + can + chủ ngữ + prevent / stop + ai đó + from + V-ing? · How often + does + cái gì + prevent + ai đó + from + V-ing?',
  'wish': 'How often + do/does + chủ ngữ + wish + (that) + chủ ngữ + could + V? (How often do you wish you could fly?) · How much + do/does + chủ ngữ + wish + (that) + chủ ngữ + had + V3? (How much do you wish you had studied harder?)',
  'inversion': 'Câu hỏi How- cũng đảo trợ động từ lên trước chủ ngữ: How + do/did/have/am-is-are + chủ ngữ + V? · Đảo ngữ nhấn mạnh nằm ở câu trả lời',
  'mixedcond': 'How + would + chủ ngữ + V (bây giờ) + if + chủ ngữ + had + V3 (quá khứ)?',
  'cleft': 'How + was it + that + chủ ngữ + V? · How much + was it + that + chủ ngữ + V?',
  'themore': 'How much + so sánh hơn + do/does + chủ ngữ + V + the more + chủ ngữ + V? (How much better do you feel the more you sleep?)'
};
const EX_HOW = {
  'regular-ed': [
    ['How long did you wait for the bus?', 'Bạn đã đợi xe buýt bao lâu?'],
    ['How many times did he call you?', 'Anh ấy đã gọi cho bạn mấy lần?']
  ],
  'present-simple': [
    ['How do you go to work every day?', 'Mỗi ngày bạn đi làm bằng gì?'],
    ['How often does she visit her parents?', 'Cô ấy về thăm ba mẹ bao lâu một lần?']
  ],
  'present-continuous': [
    ['How are you feeling today?', 'Hôm nay bạn thấy trong người thế nào?'],
    ['How many people are waiting outside?', 'Có bao nhiêu người đang đợi ở ngoài?']
  ],
  'past-be': [
    ['How was your trip to Da Lat?', 'Chuyến đi Đà Lạt của bạn thế nào?'],
    ['How old were you in this photo?', 'Trong bức ảnh này bạn bao nhiêu tuổi?']
  ],
  'thereis': [
    ['How many chairs are there in this room?', 'Trong phòng này có bao nhiêu cái ghế?'],
    ['How much milk is there in the fridge?', 'Trong tủ lạnh còn bao nhiêu sữa?']
  ],
  'demonstratives': [
    ['How much is this shirt?', 'Cái áo này giá bao nhiêu?'],
    ['How many of these books are yours?', 'Trong mấy quyển sách này có bao nhiêu quyển là của bạn?']
  ],
  'articles': [
    ['How far is the airport from here?', 'Sân bay cách đây bao xa?'],
    ['How much is a cup of coffee here?', 'Ở đây một ly cà phê giá bao nhiêu?']
  ],
  'nouns': [
    ['How many bottles of water do we need?', 'Chúng ta cần bao nhiêu chai nước?'],
    ['How much rice is left?', 'Còn lại bao nhiêu gạo?']
  ],
  'pronouns': [
    ['How often does she help you?', 'Cô ấy có thường giúp bạn không?'],
    ['How many of them live near us?', 'Trong số họ có bao nhiêu người sống gần chúng tôi?']
  ],
  'prepositions': [
    ['How do you go to school?', 'Bạn đi học bằng gì?'],
    ['How far is it from your house to the office?', 'Từ nhà bạn đến công ty bao xa?']
  ],
  'modal-can': [
    ['How can I help you?', 'Tôi có thể giúp gì cho bạn?'],
    ['How well can she speak English?', 'Cô ấy nói tiếng Anh giỏi tới mức nào?']
  ],
  'past-simple': [
    ['How did you get here yesterday?', 'Hôm qua bạn đến đây bằng cách nào?'],
    ['How long did the meeting last?', 'Cuộc họp kéo dài bao lâu?']
  ],
  'past-continuous': [
    ['How fast were they driving when the accident happened?', 'Lúc xảy ra tai nạn họ đang lái nhanh cỡ nào?'],
    ['How many people were waiting at the station?', 'Có bao nhiêu người đang đợi ở nhà ga?']
  ],
  'going-to': [
    ['How are you going to get to the airport?', 'Bạn định đến sân bay bằng cách nào?'],
    ['How long are they going to stay in Hue?', 'Họ định ở Huế bao lâu?']
  ],
  'future-simple': [
    ['How will you pay, by card or in cash?', 'Bạn sẽ trả bằng thẻ hay tiền mặt?'],
    ['How much will the tickets cost?', 'Vé sẽ tốn bao nhiêu tiền?']
  ],
  'present-perfect': [
    ['How many books have you read this year?', 'Năm nay bạn đã đọc bao nhiêu quyển sách?'],
    ['How long has he worked in this company?', 'Anh ấy đã làm ở công ty này bao lâu?']
  ],
  'compare': [
    ['How much cheaper is this bag than that one?', 'Cái túi này rẻ hơn cái kia bao nhiêu?'],
    ['How tall is your brother?', 'Anh trai bạn cao bao nhiêu?']
  ],
  'modal-more': [
    ['How often do you have to work at the weekend?', 'Bạn có thường phải làm việc cuối tuần không?'],
    ['How should I tell her the news?', 'Tôi nên báo tin đó cho cô ấy thế nào?']
  ],
  'cond-1': [
    ['How will you get home if it rains?', 'Nếu trời mưa bạn sẽ về nhà bằng cách nào?'],
    ['How much will we save if we book early?', 'Nếu đặt sớm chúng ta sẽ tiết kiệm được bao nhiêu?']
  ],
  'too': [
    ['How can I eat this soup when it is too salty?', 'Làm sao tôi ăn được món súp này khi nó quá mặn?'],
    ['How many people are too busy to join us?', 'Có bao nhiêu người bận quá không tham gia cùng chúng ta được?']
  ],
  'enough': [
    ['How many of us are old enough to vote?', 'Trong chúng ta có bao nhiêu người đủ tuổi để đi bầu cử?'],
    ["How can we finish if we don't have enough time?", 'Làm sao chúng ta làm xong được nếu không có đủ thời gian?']
  ],
  'ittakes': [
    ['How long does it take you to get to work?', 'Bạn đến chỗ làm mất bao lâu?'],
    ['How long did it take them to build this bridge?', 'Họ xây cây cầu này mất bao lâu?']
  ],
  'itsadj': [
    ['How easy is it to learn this song?', 'Học bài hát này dễ cỡ nào?'],
    ['How important is it to drink enough water?', 'Uống đủ nước quan trọng tới mức nào?']
  ],
  'present-perfect-continuous': [
    ['How long has it been raining?', 'Trời đã mưa bao lâu rồi?'],
    ['How long have they been living in Hanoi?', 'Họ đã sống ở Hà Nội bao lâu rồi?']
  ],
  'past-perfect': [
    ['How long had you waited before the doctor came?', 'Bạn đã đợi bao lâu trước khi bác sĩ đến?'],
    ['How many times had she visited Hue before she moved there?', 'Cô ấy đã đến Huế mấy lần trước khi chuyển tới đó?']
  ],
  'future-continuous': [
    ['How long will you be staying in Da Nang?', 'Bạn sẽ ở Đà Nẵng trong bao lâu?'],
    ['How many people will be working tomorrow?', 'Ngày mai sẽ có bao nhiêu người làm việc?']
  ],
  'stative': [
    ['How do you feel about this plan?', 'Bạn thấy kế hoạch này thế nào?'],
    ['How much does she know about the problem?', 'Cô ấy biết bao nhiêu về vấn đề này?']
  ],
  'passive': [
    ['How was this bridge built?', 'Cây cầu này được xây như thế nào?'],
    ['How many cars are made here every year?', 'Mỗi năm có bao nhiêu chiếc xe được sản xuất ở đây?']
  ],
  'cond-2': [
    ['How would you feel if you lost your phone?', 'Bạn sẽ thấy thế nào nếu mất điện thoại?'],
    ['How much would you pay if the price were lower?', 'Bạn sẽ trả bao nhiêu nếu giá thấp hơn?']
  ],
  'gerund-1': [
    ['How good are you at cooking?', 'Bạn nấu ăn giỏi tới mức nào?'],
    ['How do you avoid eating too much sugar?', 'Bạn tránh ăn quá nhiều đường bằng cách nào?']
  ],
  'relative-1': [
    ['How much is the bag that you bought yesterday?', 'Cái túi mà bạn mua hôm qua giá bao nhiêu?'],
    ['How many students who study here come from Hue?', 'Trong số học sinh học ở đây có bao nhiêu em đến từ Huế?']
  ],
  'reported': [
    ['She asked me how long I had lived in this city.', 'Cô ấy hỏi tôi đã sống ở thành phố này bao lâu.'],
    ['He asked me how I had got there.', 'Anh ấy hỏi tôi đã đến đó bằng cách nào.', ['He asked me how I had gotten there.']]
  ],
  'tag': [
    ["You know how this machine works, don't you?", 'Bạn biết cái máy này chạy thế nào, phải không?'],
    ["You remember how much it cost, don't you?", 'Bạn nhớ nó giá bao nhiêu, phải không?']
  ],
  'sothat': [
    ['How many people were so tired that they left early?', 'Có bao nhiêu người mệt đến nỗi phải về sớm?'],
    ['How tired were you? So tired that you fell asleep?', 'Bạn mệt cỡ nào? Mệt đến mức ngủ gật luôn à?']
  ],
  'suchthat': [
    ['How was the queue? Was it such a long queue that you left?', 'Hàng thế nào? Dài đến mức bạn bỏ về luôn à?'],
    ['How was the film? Was it such a good film that you cried?', 'Phim thế nào? Hay đến mức bạn khóc luôn à?']
  ],
  'makelet': [
    ['How often does your mother make you clean your room?', 'Mẹ bắt bạn dọn phòng bao lâu một lần?'],
    ['How did your boss make you change your mind?', 'Sếp làm cách nào khiến bạn đổi ý?']
  ],
  'asktell': [
    ['How many times did he ask you to help him?', 'Anh ấy đã nhờ bạn giúp mấy lần?'],
    ['How did the doctor tell her to take the medicine?', 'Bác sĩ dặn cô ấy uống thuốc thế nào?']
  ],
  'usedto': [
    ['How often did you use to play football?', 'Trước đây bạn có hay chơi bóng đá không?'],
    ['How long did it take you to get used to the weather here?', 'Bạn mất bao lâu mới quen với thời tiết ở đây?']
  ],
  'hadbetter': [
    ['How many tickets do you think we had better book?', 'Bạn nghĩ chúng ta nên đặt bao nhiêu vé thì hơn?'],
    ['How early do you think we had better arrive?', 'Bạn nghĩ chúng ta nên đến sớm cỡ nào thì hơn?']
  ],
  'spend': [
    ['How much money do you spend on books every month?', 'Mỗi tháng bạn tiêu bao nhiêu tiền cho sách?'],
    ['How many hours does she spend watching videos?', 'Cô ấy dành bao nhiêu tiếng để xem video?']
  ],
  'past-perfect-continuous': [
    ['How long had she been studying before dinner?', 'Cô ấy đã học bao lâu trước bữa tối?'],
    ['How long had they been living there before they moved?', 'Họ đã sống ở đó bao lâu trước khi chuyển đi?']
  ],
  'future-perfect': [
    ['How much money will you have saved by the end of the year?', 'Đến cuối năm bạn sẽ tiết kiệm được bao nhiêu tiền?'],
    ['How many books will he have read by June?', 'Đến tháng Sáu anh ấy sẽ đọc xong bao nhiêu quyển sách?']
  ],
  'future-in-past': [
    ['How were you going to tell her the news?', 'Bạn định báo tin cho cô ấy thế nào?'],
    ['How long were they going to stay in Hanoi?', 'Họ định ở Hà Nội bao lâu?']
  ],
  'cond-3': [
    ["How would you have felt if they hadn't invited you?", "Nếu họ không mời thì bạn sẽ cảm thấy thế nào?"],
    ['How much would we have paid if we had booked later?', 'Nếu đặt muộn hơn thì chúng ta đã phải trả bao nhiêu?']
  ],
  'relative-2': [
    ['How far is Da Lat, which is famous for flowers, from here?', 'Đà Lạt, nơi nổi tiếng về hoa, cách đây bao xa?'],
    ['How old is your brother, who lives in Hue?', 'Anh trai bạn, người sống ở Huế, bao nhiêu tuổi?']
  ],
  'gerund-2': [
    ['How did he stop smoking?', 'Anh ấy bỏ thuốc lá bằng cách nào?'],
    ['How often do you forget to lock the door?', 'Bạn có hay quên khóa cửa không?']
  ],
  'havedone': [
    ['How often do you have your car serviced?', 'Bạn đem xe đi bảo dưỡng bao lâu một lần?'],
    ['How much does it cost to have a shirt made?', 'May một cái áo tốn bao nhiêu tiền?']
  ],
  'suggest': [
    ['How do you suggest solving this problem?', 'Bạn đề nghị giải quyết vấn đề này thế nào?'],
    ['How about taking the train instead?', 'Hay là mình đi tàu?']
  ],
  'prefer': [
    ['How do you prefer your coffee, with or without sugar?', 'Bạn thích cà phê thế nào, có đường hay không đường?'],
    ['How many people prefer tea to coffee?', 'Có bao nhiêu người thích trà hơn cà phê?']
  ],
  'itstime': [
    ["How do you know it's time to leave?", 'Sao bạn biết đã đến lúc phải đi?'],
    ["How many times do I have to say it's time for bed?", 'Tôi phải nói bao nhiêu lần là đã đến giờ đi ngủ?']
  ],
  'although': [
    ['How did they arrive on time despite the traffic?', 'Kẹt xe vậy mà sao họ vẫn đến đúng giờ được?'],
    ['How many people came despite the rain?', 'Trời mưa vậy mà có bao nhiêu người đến?']
  ],
  'paired': [
    ['How many of you speak both English and Chinese?', 'Trong các bạn có bao nhiêu người nói được cả tiếng Anh và tiếng Trung?'],
    ['How can a hotel be both cheap and clean?', 'Sao một khách sạn lại vừa rẻ vừa sạch được?']
  ],
  'prevent': [
    ['How can we prevent children from playing near the road?', 'Làm sao chúng ta ngăn bọn trẻ chơi gần đường được?'],
    ['How do you stop your dog from running away?', 'Bạn làm cách nào để con chó không chạy đi mất?']
  ],
  'future-perfect-continuous': [
    ['How long will you have been studying English by next year?', 'Đến năm sau là bạn học tiếng Anh được bao lâu?'],
    ['How long will she have been teaching by the end of this year?', 'Đến cuối năm nay là cô ấy dạy học được bao lâu?']
  ],
  'polite-tenses': [
    ['I was wondering how I could contact him.', 'Không biết tôi có thể liên hệ với anh ấy bằng cách nào.'],
    ['Could you tell me how long the journey takes?', 'Bạn cho tôi hỏi chuyến đi mất bao lâu?']
  ],
  'inversion-perfect': [
    ['How long had he been at the office when the fire alarm rang?', 'Anh ấy đã ở văn phòng bao lâu thì chuông báo cháy reo?'],
    ['How many people had left before the show started?', 'Có bao nhiêu người đã rời đi trước khi buổi diễn bắt đầu?']
  ],
  'wish': [
    ['How do you wish you had spent your twenties?', 'Bạn ước gì mình đã sống những năm tuổi hai mươi thế nào?'],
    ['How often do you wish you had more free time?', 'Bạn có hay ước mình có nhiều thời gian rảnh hơn không?']
  ],
  'inversion': [
    ['How many times have you been abroad?', 'Bạn đã ra nước ngoài mấy lần rồi?'],
    ['How quickly did you understand the problem?', 'Bạn hiểu ra vấn đề nhanh cỡ nào?']
  ],
  'mixedcond': [
    ['How would your life be different now if you had moved abroad?', 'Nếu bạn ra nước ngoài thì giờ cuộc sống của bạn sẽ khác thế nào?'],
    ['How much money would you have now if you had saved more?', 'Nếu bạn đã tiết kiệm nhiều hơn thì giờ bạn sẽ có bao nhiêu tiền?']
  ],
  'cleft': [
    ['How is it that you never get tired?', 'Làm sao mà bạn không bao giờ thấy mệt vậy?'],
    ['How was it that nobody saw him leave?', 'Làm sao mà không ai thấy anh ta rời đi?']
  ],
  'themore': [
    ['How does the price change the more you buy?', 'Mua càng nhiều thì giá thay đổi thế nào?'],
    ['How much do you improve the more you practise?', 'Càng luyện tập nhiều thì bạn tiến bộ được bao nhiêu?', ['How much do you improve the more you practice?']]
  ]
};
const EX_A2 = {
 'possessive-s': {
  whfx: 'Whose + danh từ + am/is/are + …? · Wh- + am/is/are + tên + ’s + danh từ? (What is Lan’s number?)',
  howfx: 'How old / How far / How big + is + tên + ’s + danh từ? (How old is Nam’s car?)',
  s: [
   ['This is my sister’s bike.', 'Đây là xe đạp của chị tôi.'],
   ['My brother’s room is very tidy.', 'Phòng của anh tôi rất gọn gàng.'],
   ['The children’s toys are on the floor.', 'Đồ chơi của bọn trẻ ở trên sàn.'],
   ['My parents’ house is near the market.', 'Nhà của ba mẹ tôi ở gần chợ.'],
   ['That is Nam’s new phone.', 'Kia là điện thoại mới của Nam.'],
   ['The teachers’ room is upstairs.', 'Phòng giáo viên ở trên lầu.'],
   ['I borrowed my friend’s car.', 'Tôi đã mượn xe của bạn tôi.'],
   ['The dog’s name is Milu.', 'Con chó tên là Milu.'],
   ['Lan and Nam’s house is very big.', 'Nhà của Lan và Nam rất lớn.'],
   ['The door of the car is broken.', 'Cửa xe bị hỏng.'],
   ['My wife’s family lives in Hue.', 'Gia đình vợ tôi sống ở Huế.'],
   ['I don’t know my neighbour’s name.', 'Tôi không biết tên người hàng xóm.']
  ],
  wh: [
   ['Whose bag is this?', 'Cái túi này của ai?'],
   ['What is your friend’s name?', 'Bạn của bạn tên gì?'],
   ['Where is your parents’ house?', 'Nhà ba mẹ bạn ở đâu?']
  ],
  how: [
   ['How old is your sister’s son?', 'Con trai chị bạn mấy tuổi?'],
   ['How far is your brother’s house from here?', 'Nhà anh bạn cách đây bao xa?']
  ]
 },
 'frequency': {
  whfx: 'Wh- + do/does + chủ ngữ + trạng từ + V? · What + do/does + chủ ngữ + usually / often + V?',
  howfx: 'How often + do/does + chủ ngữ + V? · Trả lời: once a week, twice a month, every day…',
  s: [
   ['I always get up at six.', 'Tôi luôn dậy lúc sáu giờ.'],
   ['She usually walks to work.', 'Cô ấy thường đi bộ đi làm.'],
   ['We often eat out on Friday.', 'Chúng tôi hay ăn ngoài vào thứ Sáu.'],
   ['He never drinks coffee at night.', 'Anh ấy không bao giờ uống cà phê buổi tối.'],
   ['They are usually late.', 'Họ thường đến trễ.'],
   ['I sometimes watch films in English.', 'Thỉnh thoảng tôi xem phim tiếng Anh.'],
   ['My father rarely goes to the cinema.', 'Ba tôi hiếm khi đi xem phim.'],
   ['I go to the gym twice a week.', 'Tôi đến phòng gym hai lần một tuần.'],
   ['She visits her parents every Sunday.', 'Chủ nhật nào cô ấy cũng về thăm ba mẹ.'],
   ['We have a meeting once a month.', 'Chúng tôi họp một lần mỗi tháng.'],
   ['I have never tried durian.', 'Tôi chưa bao giờ thử sầu riêng.'],
   ['He is always friendly to customers.', 'Anh ấy luôn thân thiện với khách hàng.']
  ],
  wh: [
   ['What do you usually do at the weekend?', 'Cuối tuần bạn thường làm gì?'],
   ['Where do you often have lunch?', 'Bạn hay ăn trưa ở đâu?'],
   ['Why are you always late?', 'Sao bạn lúc nào cũng trễ vậy?']
  ],
  how: [
   ['How often do you exercise?', 'Bạn tập thể dục bao lâu một lần?'],
   ['How often does she call her family?', 'Cô ấy gọi về cho gia đình bao lâu một lần?']
  ]
 },
 'like-ing': {
  whfx: 'What + do/does + chủ ngữ + like / love / hate + V-ing? · Who + likes + V-ing?',
  howfx: 'How much + do/does + chủ ngữ + like + V-ing? · How many người + like + V-ing?',
  s: [
   ['I love listening to music.', 'Tôi rất thích nghe nhạc.'],
   ['She hates getting up early.', 'Cô ấy ghét phải dậy sớm.'],
   ['We enjoy cooking together.', 'Chúng tôi thích nấu ăn cùng nhau.'],
   ['He doesn’t like working at night.', 'Anh ấy không thích làm việc ban đêm.'],
   ['I don’t mind waiting a few minutes.', 'Tôi không ngại đợi vài phút.'],
   ['My son loves playing football.', 'Con trai tôi rất thích chơi bóng đá.'],
   ['They like travelling by train.', 'Họ thích đi du lịch bằng tàu.'],
   ['I can’t stand sitting in traffic.', 'Tôi không chịu nổi cảnh ngồi kẹt xe.'],
   ['She likes reading before bed.', 'Cô ấy thích đọc sách trước khi ngủ.'],
   ['We don’t like eating out every day.', 'Chúng tôi không thích ăn ngoài mỗi ngày.'],
   ['My wife enjoys growing vegetables.', 'Vợ tôi thích trồng rau.'],
   ['I hate washing the dishes.', 'Tôi ghét rửa chén.']
  ],
  wh: [
   ['What do you like doing in your free time?', 'Bạn thích làm gì khi rảnh?'],
   ['Why does he hate flying?', 'Sao anh ấy ghét đi máy bay?'],
   ['Who likes swimming in your family?', 'Trong nhà bạn ai thích bơi?']
  ],
  how: [
   ['How do you like spending your evenings?', 'Bạn thích dành buổi tối thế nào?'],
   ['How many people like working from home?', 'Có bao nhiêu người thích làm việc ở nhà?']
  ]
 },
 'havegot': {
  whfx: 'What / Which + have/has + chủ ngữ + got? · Who + has got + …?',
  howfx: 'How many / How much + have/has + chủ ngữ + got?',
  s: [
   ['I’ve got two brothers.', 'Tôi có hai anh em trai.'],
   ['She’s got a new job.', 'Cô ấy có công việc mới.'],
   ['We haven’t got any milk.', 'Chúng tôi không còn sữa nào.'],
   ['He hasn’t got a car.', 'Anh ấy không có xe hơi.'],
   ['They’ve got a big house in Da Lat.', 'Họ có một ngôi nhà lớn ở Đà Lạt.'],
   ['I’ve got a headache today.', 'Hôm nay tôi bị đau đầu.'],
   ['Have you got a pen?', 'Bạn có bút không?'],
   ['Has she got any children?', 'Cô ấy có con chưa?'],
   ['My phone has got a good camera.', 'Điện thoại của tôi có máy ảnh tốt.'],
   ['We’ve got enough time.', 'Chúng ta có đủ thời gian.'],
   ['I haven’t got your number.', 'Tôi không có số của bạn.'],
   ['They’ve got three cats and a dog.', 'Họ có ba con mèo và một con chó.']
  ],
  wh: [
   ['What have you got in your bag?', 'Trong túi bạn có gì?'],
   ['Who has got the keys?', 'Ai đang giữ chìa khóa?'],
   ['Which room has got a balcony?', 'Phòng nào có ban công?']
  ],
  how: [
   ['How many brothers have you got?', 'Bạn có mấy anh em trai?'],
   ['How much money have we got?', 'Chúng ta còn bao nhiêu tiền?']
  ]
 },
 'howmuch-howadj': {
  whfx: 'What / Which / Where + do/does + chủ ngữ + V? (hỏi thông tin không phải số lượng)',
  howfx: 'How many + danh từ số nhiều …? · How much + danh từ không đếm được …? · How much + is/are …? (giá) · How old / tall / far / long …?',
  s: [
   ['How many people work in your office?', 'Văn phòng bạn có bao nhiêu người làm?'],
   ['How much water do you drink a day?', 'Mỗi ngày bạn uống bao nhiêu nước?'],
   ['How much does this shirt cost?', 'Cái áo này giá bao nhiêu?'],
   ['How old is your grandmother?', 'Bà của bạn bao nhiêu tuổi?'],
   ['How far is the station from here?', 'Nhà ga cách đây bao xa?'],
   ['How much sugar do you need for the cake?', 'Bạn cần bao nhiêu đường để làm bánh?'],
   ['How many eggs do we have left?', 'Mình còn bao nhiêu quả trứng?'],
   ['How much work do you have today?', 'Hôm nay bạn có bao nhiêu việc?'],
   ['How long is the film?', 'Bộ phim dài bao lâu?'],
   ['How tall are you?', 'Bạn cao bao nhiêu?'],
   ['How big is your new flat?', 'Căn hộ mới của bạn rộng bao nhiêu?'],
   ['How many chairs do we need for the party?', 'Mình cần bao nhiêu cái ghế cho bữa tiệc?']
  ],
  wh: [
   ['How much are these bananas?', 'Mấy quả chuối này bao nhiêu tiền?'],
   ['How expensive is the hotel?', 'Khách sạn đắt cỡ nào?'],
   ['How deep is the swimming pool?', 'Hồ bơi sâu bao nhiêu?']
  ],
  how: [
   ['How much is this phone?', 'Cái điện thoại này bao nhiêu tiền?'],
   ['How many people are coming tonight?', 'Tối nay có bao nhiêu người đến?']
  ]
 },
 'imperative': {
  whfx: 'What / Where / Why + should + chủ ngữ + V? (hỏi lời khuyên)',
  howfx: 'How + should + chủ ngữ + V? · How many / How much + should + chủ ngữ + V?',
  s: [
   ['Open the window, please.', 'Làm ơn mở cửa sổ.'],
   ['Don’t touch that, it’s hot.', 'Đừng chạm vào đó, nóng lắm.'],
   ['Turn left at the traffic lights.', 'Rẽ trái ở đèn giao thông.'],
   ['Let’s go home now.', 'Giờ mình về nhà thôi.'],
   ['Please sit down.', 'Mời ngồi.'],
   ['Don’t forget your keys.', 'Đừng quên chìa khóa của bạn.'],
   ['Call me when you arrive.', 'Đến nơi thì gọi tôi nhé.'],
   ['Let’s not wait here.', 'Mình đừng đợi ở đây nữa.'],
   ['You should take a short break.', 'Bạn nên nghỉ một chút.'],
   ['You shouldn’t eat so late.', 'Bạn không nên ăn khuya như vậy.'],
   ['Be careful on the stairs.', 'Cẩn thận cầu thang nhé.'],
   ['Don’t worry, everything is fine.', 'Đừng lo, mọi chuyện ổn cả.']
  ],
  wh: [
   ['What should I say to her?', 'Tôi nên nói gì với cô ấy?'],
   ['Where should we meet?', 'Chúng ta nên gặp nhau ở đâu?'],
   ['Why shouldn’t I tell her?', 'Sao tôi không nên nói với cô ấy?']
  ],
  how: [
   ['How should I cook this fish?', 'Tôi nên nấu con cá này thế nào?'],
   ['How many tickets should we buy?', 'Chúng ta nên mua bao nhiêu vé?']
  ]
 },
 'wh-questions': {
  whfx: 'Wh- + do/does/did + S + V? · Wh- + am/is/are/was/were + S? · Wh- + am/is/are/was/were + S + V-ing? · Wh- + will/can/should/must + S + V? · Who / What + V? (Wh- làm chủ ngữ) · Wh- … + giới từ?',
  howfx: 'How many / How much + …? · How often + do/does + S + V? · How long + does it take / have + S + V3?',
  s: [
   ['What does your father do?', 'Ba bạn làm nghề gì?'],
   ['Where did you buy that jacket?', 'Bạn mua cái áo khoác đó ở đâu?'],
   ['Where were you last night?', 'Tối qua bạn ở đâu?'],
   ['Why is the shop closed today?', 'Sao hôm nay cửa hàng đóng cửa?'],
   ['What were you doing at eight last night?', 'Lúc tám giờ tối qua bạn đang làm gì?'],
   ['When will you finish the report?', 'Khi nào bạn sẽ làm xong báo cáo?'],
   ['Which bus goes to the airport?', 'Xe buýt nào đi sân bay?'],
   ['What are you doing this evening?', 'Tối nay bạn làm gì?'],
   ['What should I bring to the party?', 'Tôi nên mang gì đến bữa tiệc?'],
   ['What happened to your phone?', 'Điện thoại của bạn bị sao vậy?'],
   ['Who did you go there with?', 'Bạn đi tới đó với ai?'],
   ['What are you looking for?', 'Bạn đang tìm cái gì?']
  ],
  wh: [
   ['Why must we wear a uniform?', 'Sao chúng ta phải mặc đồng phục?'],
   ['How many people came to the meeting?', 'Có bao nhiêu người đến dự cuộc họp?'],
   ['How much money do you need?', 'Bạn cần bao nhiêu tiền?']
  ],
  how: [
   ['How often do you visit your grandparents?', 'Bạn về thăm ông bà bao lâu một lần?'],
   ['How long does it take to get to your office?', 'Đến chỗ bạn làm mất bao lâu?']
  ]
 },
 'adj-modifier': {
  whfx: 'What + am/is/are + chủ ngữ + like? (hỏi cảm nhận) · Why + am/is/are + chủ ngữ + so + tính từ?',
  howfx: 'How + tính từ + am/is/are + chủ ngữ? (How expensive is it?)',
  s: [
   ['The film was really good.', 'Bộ phim hay thật.'],
   ['I’m a bit tired today.', 'Hôm nay tôi hơi mệt.'],
   ['This restaurant is quite expensive.', 'Nhà hàng này khá đắt.'],
   ['The weather is extremely hot in May.', 'Thời tiết tháng Năm cực kỳ nóng.'],
   ['These shoes are a bit small for me.', 'Đôi giày này hơi chật với tôi.'],
   ['It’s a very nice day.', 'Hôm nay là một ngày rất đẹp.'],
   ['My new job is quite interesting.', 'Công việc mới của tôi khá thú vị.'],
   ['The coffee here is really strong.', 'Cà phê ở đây đậm thật.'],
   ['That question was a bit difficult.', 'Câu hỏi đó hơi khó.'],
   ['Their house is very clean and tidy.', 'Nhà họ rất sạch sẽ và gọn gàng.'],
   ['The bus was extremely crowded this morning.', 'Sáng nay xe buýt cực kỳ đông.'],
   ['This soup is a little salty.', 'Món súp này hơi mặn.']
  ],
  wh: [
   ['What was the film like?', 'Bộ phim thế nào?'],
   ['Why is this one so expensive?', 'Sao cái này đắt vậy?'],
   ['What makes you really happy?', 'Điều gì làm bạn thật sự vui?']
  ],
  how: [
   ['How expensive is this hotel?', 'Khách sạn này đắt cỡ nào?'],
   ['How tired are you after work?', 'Sau giờ làm bạn mệt cỡ nào?']
  ]
 },
 'prep-movement': {
  whfx: 'Where + do/does/did + chủ ngữ + go / walk / drive …? · Which + đường / cầu + …?',
  howfx: 'How + do/does/did + chủ ngữ + get + into / out of / across …? · How far + …?',
  s: [
   ['She walked into the room.', 'Cô ấy bước vào phòng.'],
   ['Go along this street and turn left.', 'Đi dọc con đường này rồi rẽ trái.'],
   ['We walked across the bridge.', 'Chúng tôi đi bộ qua cầu.'],
   ['The train goes through a long tunnel.', 'Tàu chạy xuyên qua một đường hầm dài.'],
   ['Go past the bank and you will see it.', 'Đi ngang qua ngân hàng là bạn sẽ thấy.'],
   ['He ran up the stairs.', 'Anh ấy chạy lên cầu thang.'],
   ['The cat jumped off the table.', 'Con mèo nhảy xuống khỏi bàn.'],
   ['We walked around the lake.', 'Chúng tôi đi bộ vòng quanh hồ.'],
   ['A plane flew over our house.', 'Một chiếc máy bay bay qua trên nhà chúng tôi.'],
   ['She came out of the shop with two bags.', 'Cô ấy bước ra khỏi cửa hàng với hai cái túi.'],
   ['Get off the bus at the market.', 'Xuống xe buýt ở chợ nhé.'],
   ['He walked towards the station.', 'Anh ấy đi về phía nhà ga.']
  ],
  wh: [
   ['Where did they go after the film?', 'Sau khi xem phim họ đi đâu?'],
   ['Which street should I go along?', 'Tôi nên đi dọc con đường nào?'],
   ['Who walked into the room first?', 'Ai bước vào phòng đầu tiên?']
  ],
  how: [
   ['How do I get into the building?', 'Tôi vào tòa nhà bằng cách nào?'],
   ['How far did you walk along the beach?', 'Bạn đã đi bộ dọc bãi biển bao xa?']
  ]
 },
 'simple-vs-continuous': {
  whfx: 'What + do/does + chủ ngữ + V? (thói quen) · What + am/is/are + chủ ngữ + V-ing? (lúc này)',
  howfx: 'How often + do/does + chủ ngữ + V? · How many hours + am/is/are + chủ ngữ + V-ing?',
  s: [
   ['I work in a bank, but today I am working at home.', 'Tôi làm ở ngân hàng, nhưng hôm nay tôi làm ở nhà.'],
   ['She usually takes the bus, but she is driving today.', 'Cô ấy thường đi xe buýt, nhưng hôm nay cô ấy lái xe.'],
   ['We live in Hue, but we are staying in Hanoi this week.', 'Chúng tôi sống ở Huế, nhưng tuần này đang ở Hà Nội.'],
   ['He plays tennis every Sunday.', 'Chủ nhật nào anh ấy cũng chơi tennis.'],
   ['Look! The children are playing in the garden.', 'Nhìn kìa! Bọn trẻ đang chơi ngoài vườn.'],
   ['It rains a lot in September.', 'Tháng Chín trời mưa nhiều.'],
   ['It is raining now, so take an umbrella.', 'Bây giờ trời đang mưa, nhớ mang dù.'],
   ['My sister is learning Korean this year.', 'Năm nay chị tôi đang học tiếng Hàn.'],
   ['I know the answer.', 'Tôi biết câu trả lời.'],
   ['They don’t eat meat.', 'Họ không ăn thịt.'],
   ['Why are you wearing a coat? It isn’t cold.', 'Sao bạn mặc áo khoác? Trời có lạnh đâu.'],
   ['The shop opens at eight every morning.', 'Cửa hàng mở cửa lúc tám giờ mỗi sáng.']
  ],
  wh: [
   ['What do you do?', 'Bạn làm nghề gì?'],
   ['What are you doing at the moment?', 'Lúc này bạn đang làm gì?'],
   ['Where does your brother work?', 'Anh bạn làm việc ở đâu?']
  ],
  how: [
   ['How often do you work from home?', 'Bạn làm việc ở nhà bao lâu một lần?'],
   ['How many hours are you working today?', 'Hôm nay bạn làm mấy tiếng?']
  ]
 },
 'verb-to-v': {
  whfx: 'What / Where / Who + do/does + chủ ngữ + want / need / plan + to V?',
  howfx: 'How + do/does + chủ ngữ + plan / hope + to V? · How long + do/does + chủ ngữ + want + to V?',
  s: [
   ['I want to learn English well.', 'Tôi muốn học giỏi tiếng Anh.'],
   ['We decided to take a taxi.', 'Chúng tôi đã quyết định đi taxi.'],
   ['She needs to rest after work.', 'Cô ấy cần nghỉ ngơi sau giờ làm.'],
   ['They hope to open a small shop.', 'Họ hy vọng mở một tiệm nhỏ.'],
   ['He promised to call me tonight.', 'Anh ấy đã hứa tối nay sẽ gọi cho tôi.'],
   ['Don’t forget to lock the door.', 'Đừng quên khóa cửa.'],
   ['I am trying to save money.', 'Tôi đang cố gắng tiết kiệm tiền.'],
   ['My son is learning to swim.', 'Con trai tôi đang học bơi.'],
   ['I would like to book a table for two.', 'Tôi muốn đặt bàn cho hai người.'],
   ['Would you like to come with us?', 'Bạn có muốn đi cùng chúng tôi không?'],
   ['My boss wants me to finish it today.', 'Sếp muốn tôi làm xong việc đó hôm nay.'],
   ['They plan to move to Da Nang.', 'Họ dự định chuyển đến Đà Nẵng.']
  ],
  wh: [
   ['What do you want to do tonight?', 'Tối nay bạn muốn làm gì?'],
   ['Where do they plan to go?', 'Họ dự định đi đâu?'],
   ['Who do you need to call?', 'Bạn cần gọi cho ai?']
  ],
  how: [
   ['How do you plan to get there?', 'Bạn định đến đó bằng cách nào?'],
   ['How long do you want to stay?', 'Bạn muốn ở lại bao lâu?']
  ]
 },
 'adverb-manner': {
  whfx: 'Who + V + trạng từ? · Why + do/does + chủ ngữ + V + so + trạng từ?',
  howfx: 'How well / How quickly / How carefully + do/does/can + chủ ngữ + V?',
  s: [
   ['Please drive slowly.', 'Làm ơn lái xe chậm thôi.'],
   ['She speaks English very well.', 'Cô ấy nói tiếng Anh rất giỏi.'],
   ['He opened the door quietly.', 'Anh ấy mở cửa nhẹ nhàng.'],
   ['They waited patiently for an hour.', 'Họ kiên nhẫn đợi suốt một tiếng.'],
   ['My son can read quickly now.', 'Giờ con trai tôi đọc nhanh rồi.'],
   ['She smiled happily at the camera.', 'Cô ấy cười tươi với máy ảnh.'],
   ['He works hard every day.', 'Anh ấy làm việc chăm chỉ mỗi ngày.'],
   ['Please listen carefully.', 'Hãy lắng nghe cẩn thận.'],
   ['The old man walked slowly to the bus stop.', 'Ông cụ đi chậm rãi ra trạm xe buýt.'],
   ['I can easily finish this today.', 'Tôi có thể dễ dàng làm xong việc này trong hôm nay.'],
   ['She sings beautifully.', 'Cô ấy hát rất hay.'],
   ['He arrived late again.', 'Anh ấy lại đến trễ.']
  ],
  wh: [
   ['Who speaks English well in your office?', 'Ở công ty bạn ai nói tiếng Anh giỏi?'],
   ['Why do you work so hard?', 'Sao bạn làm việc chăm chỉ vậy?'],
   ['Why does he speak so fast?', 'Sao anh ấy nói nhanh vậy?']
  ],
  how: [
   ['How well do you speak English?', 'Bạn nói tiếng Anh giỏi cỡ nào?'],
   ['How quickly can you finish this?', 'Bao lâu thì bạn làm xong cái này?']
  ]
 },
 'howto-suggest': {
  whfx: 'What / Where / When + shall we + V? · What about + V-ing?',
  howfx: 'How about + V-ing? · How shall we + V?',
  s: [
   ['Let’s go out tonight.', 'Tối nay mình đi chơi đi.'],
   ['Shall we take a taxi?', 'Mình đi taxi nhé?'],
   ['Why don’t we eat at home?', 'Sao mình không ăn ở nhà nhỉ?'],
   ['How about going to the beach?', 'Hay là đi biển?'],
   ['What about next Saturday?', 'Thứ Bảy tới thì sao?'],
   ['Maybe we could ask Nam.', 'Hay là mình hỏi Nam.'],
   ['Let’s meet in front of the cinema.', 'Mình gặp nhau trước rạp phim nhé.'],
   ['Good idea!', 'Ý hay đó!'],
   ['Sounds great.', 'Nghe hay đấy.'],
   ['I would love to, but I am busy.', 'Tôi rất muốn, nhưng tôi bận.'],
   ['Maybe another time.', 'Để dịp khác vậy.'],
   ['Let’s not take the car today.', 'Hôm nay mình đừng đi xe hơi.']
  ],
  wh: [
   ['What shall we do this weekend?', 'Cuối tuần này mình làm gì đây?'],
   ['Where shall we meet?', 'Mình gặp nhau ở đâu?'],
   ['When shall we leave?', 'Mấy giờ mình đi?']
  ],
  how: [
   ['How about meeting at six?', 'Hay là sáu giờ gặp nhau?'],
   ['How shall we get there?', 'Mình đến đó bằng gì đây?']
  ]
 },
 'howto-restaurant': {
  whfx: 'What + do you recommend? · What time + do you close? · Where + am/is/are + …?',
  howfx: 'How much + is / are + …? · How long + will it take?',
  s: [
   ['A table for two, please.', 'Cho tôi bàn hai người.'],
   ['Could I see the menu, please?', 'Cho tôi xem thực đơn được không?'],
   ['I would like the chicken, please.', 'Cho tôi món gà.'],
   ['I will have the same.', 'Tôi gọi giống vậy.'],
   ['Just water for me, thanks.', 'Tôi chỉ uống nước lọc thôi, cảm ơn.'],
   ['Is this dish spicy?', 'Món này có cay không?'],
   ['Could we have some more bread?', 'Cho chúng tôi thêm bánh mì được không?'],
   ['Can I have the bill, please?', 'Cho tôi tính tiền nhé.'],
   ['Is service included?', 'Đã tính phí phục vụ chưa?'],
   ['Can I pay by card?', 'Tôi trả bằng thẻ được không?'],
   ['The food was delicious.', 'Món ăn rất ngon.'],
   ['Sorry, I didn’t order this.', 'Xin lỗi, tôi không gọi món này.']
  ],
  wh: [
   ['What do you recommend?', 'Bạn gợi ý món nào?'],
   ['What time do you close?', 'Mấy giờ nhà hàng đóng cửa?'],
   ['Where are the toilets, please?', 'Nhà vệ sinh ở đâu ạ?']
  ],
  how: [
   ['How much is the set menu?', 'Thực đơn theo set giá bao nhiêu?'],
   ['How long will it take?', 'Mất bao lâu ạ?']
  ]
 },
 'howto-invite': {
  whfx: 'What time / Where + would you like + to V? · Who else + is coming?',
  howfx: 'How about + V-ing? · How many people + would you like + to invite?',
  s: [
   ['Would you like to join us?', 'Bạn tham gia cùng chúng tôi nhé?'],
   ['Do you want to come with me?', 'Bạn muốn đi cùng tôi không?'],
   ['Are you free on Saturday?', 'Thứ Bảy bạn rảnh không?'],
   ['Would you like a cup of coffee?', 'Bạn uống một ly cà phê nhé?'],
   ['Shall I carry that for you?', 'Để tôi xách giúp bạn nhé?'],
   ['Can I help you with your bags?', 'Tôi xách giúp túi cho bạn nhé?'],
   ['I will give you a hand.', 'Để tôi giúp một tay.'],
   ['Yes, please.', 'Vâng, cho tôi xin.'],
   ['That would be lovely.', 'Vậy thì tuyệt quá.'],
   ['No, thanks. I am fine.', 'Không, cảm ơn. Tôi ổn mà.'],
   ['I would love to, but I can’t tonight.', 'Tôi rất muốn, nhưng tối nay tôi không đi được.'],
   ['Thank you, that is very kind.', 'Cảm ơn bạn, bạn thật tốt bụng.']
  ],
  wh: [
   ['What time would you like to meet?', 'Bạn muốn gặp lúc mấy giờ?'],
   ['Who else is coming?', 'Còn ai đến nữa không?'],
   ['Where would you like to go?', 'Bạn muốn đi đâu?']
  ],
  how: [
   ['How about dinner at my place?', 'Hay là ăn tối ở nhà tôi?'],
   ['How many people would you like to invite?', 'Bạn muốn mời bao nhiêu người?']
  ]
 },
 'howto-shop': {
  whfx: 'Where + can I find + …? · What time + does the shop open? · Which one + …?',
  howfx: 'How much + is / are + …? · How many + do you have left?',
  s: [
   ['Excuse me, where can I find the milk?', 'Xin lỗi, sữa để ở đâu ạ?'],
   ['Do you have this in size M?', 'Cái này có size M không ạ?'],
   ['Can I try it on?', 'Tôi mặc thử được không?'],
   ['Where is the fitting room?', 'Phòng thử đồ ở đâu ạ?'],
   ['It is a bit too tight.', 'Hơi chật một chút.'],
   ['Have you got a bigger one?', 'Có cái lớn hơn không ạ?'],
   ['I am just looking, thanks.', 'Tôi chỉ xem thôi, cảm ơn.'],
   ['I will take it.', 'Tôi lấy cái này.'],
   ['Do you take cards?', 'Ở đây nhận thẻ không ạ?'],
   ['Can I have a receipt, please?', 'Cho tôi xin hóa đơn.'],
   ['I would like to return this.', 'Tôi muốn trả lại món này.'],
   ['Is this on sale?', 'Món này đang giảm giá à?']
  ],
  wh: [
   ['Where is the fruit section?', 'Khu trái cây ở đâu ạ?'],
   ['What time does the shop open?', 'Cửa hàng mở cửa lúc mấy giờ?'],
   ['Which one is cheaper?', 'Cái nào rẻ hơn?']
  ],
  how: [
   ['How much is this jacket?', 'Cái áo khoác này bao nhiêu tiền?'],
   ['How many do you have left?', 'Còn lại bao nhiêu cái ạ?']
  ]
 },
 'howto-apologise': {
  whfx: 'Why + were you + late? · What + happened? · Who + should I apologise to?',
  howfx: 'How late + were you? · How + can I make it up to you?',
  s: [
   ['Sorry I am late.', 'Xin lỗi tôi đến trễ.'],
   ['I am really sorry about that.', 'Tôi thật sự xin lỗi về chuyện đó.'],
   ['It is my fault.', 'Lỗi của tôi.'],
   ['It won’t happen again.', 'Chuyện này sẽ không lặp lại nữa.'],
   ['I missed the bus.', 'Tôi lỡ chuyến xe buýt.'],
   ['I was stuck in traffic.', 'Tôi bị kẹt xe.'],
   ['Something came up at work.', 'Ở chỗ làm có việc đột xuất.'],
   ['I am afraid I can’t come tonight.', 'Tôi e là tối nay tôi không đến được.'],
   ['I completely forgot about the meeting.', 'Tôi quên bẵng mất cuộc họp.'],
   ['That is OK, don’t worry about it.', 'Không sao đâu, đừng bận tâm.'],
   ['Never mind, these things happen.', 'Thôi không sao, chuyện đó vẫn xảy ra mà.'],
   ['Sorry for keeping you waiting.', 'Xin lỗi đã để bạn đợi.']
  ],
  wh: [
   ['Why were you late this morning?', 'Sáng nay sao bạn đến trễ?'],
   ['What happened to you yesterday?', 'Hôm qua bạn bị gì vậy?'],
   ['Who should I apologise to?', 'Tôi nên xin lỗi ai?']
  ],
  how: [
   ['How late were you?', 'Bạn trễ bao lâu?'],
   ['How can I make it up to you?', 'Tôi làm sao để bù lại cho bạn đây?']
  ]
 },
 'howto-directions': {
  whfx: 'Where + is + the nearest + …? · Which way + is + …? · What + is the best way + to + …?',
  howfx: 'How + do I get to + …? · How far + is it + from here? · How long + does it take?',
  s: [
   ['Go straight on for about two hundred metres.', 'Đi thẳng khoảng hai trăm mét.'],
   ['Turn right after the bridge.', 'Qua cầu thì rẽ phải.'],
   ['Take the second turning on the right.', 'Rẽ ở ngã rẽ thứ hai bên phải.'],
   ['Walk past the school and keep going.', 'Đi ngang qua trường rồi đi tiếp.'],
   ['Cross the road at the crossing.', 'Băng qua đường ở vạch kẻ.'],
   ['It is on your left.', 'Nó nằm bên tay trái bạn.'],
   ['It is next to the pharmacy.', 'Nó nằm cạnh nhà thuốc.'],
   ['It is opposite the market.', 'Nó đối diện chợ.'],
   ['It is between the bank and the café.', 'Nó nằm giữa ngân hàng và quán cà phê.'],
   ['It is about five minutes’ walk.', 'Đi bộ khoảng năm phút.'],
   ['Is there a bank near here?', 'Gần đây có ngân hàng không ạ?'],
   ['Sorry, I am not from here.', 'Xin lỗi, tôi không phải người ở đây.']
  ],
  wh: [
   ['Where is the nearest pharmacy?', 'Nhà thuốc gần nhất ở đâu ạ?'],
   ['Which way is the city centre?', 'Trung tâm thành phố đi hướng nào ạ?'],
   ['What is the best way to the airport?', 'Đi sân bay đường nào tiện nhất ạ?']
  ],
  how: [
   ['How do I get to the market?', 'Đi ra chợ thế nào ạ?'],
   ['How far is it from here?', 'Cách đây bao xa ạ?']
  ]
 },
 'howto-phone': {
  whfx: 'What time + do you open? · Who + should I speak to? · Where exactly + are you?',
  howfx: 'How long + does + … + last? · How much + is + …? · Could you tell me how + …',
  s: [
   ['Hello, I am calling about the English course.', 'Chào anh/chị, tôi gọi để hỏi về khóa tiếng Anh.'],
   ['Could I speak to Mr Nam, please?', 'Cho tôi gặp anh Nam được không ạ?'],
   ['This is Lan speaking.', 'Tôi là Lan đây.'],
   ['Is that the Grand Hotel?', 'Đây có phải khách sạn Grand không ạ?'],
   ['Do I need to book in advance?', 'Tôi có cần đặt trước không ạ?'],
   ['Sorry, could you repeat that?', 'Xin lỗi, anh/chị nhắc lại được không?'],
   ['Could you speak a little louder, please?', 'Anh/chị nói to hơn một chút được không ạ?'],
   ['Could you spell that, please?', 'Anh/chị đánh vần giúp được không ạ?'],
   ['Hold on a moment, please.', 'Vui lòng giữ máy một lát.'],
   ['I will call back later.', 'Lát nữa tôi gọi lại.'],
   ['Thanks for your help.', 'Cảm ơn anh/chị đã giúp.'],
   ['Could you tell me how much it costs?', 'Cho tôi hỏi giá bao nhiêu ạ?']
  ],
  wh: [
   ['What time do you open?', 'Mấy giờ bên mình mở cửa ạ?'],
   ['Where exactly are you?', 'Chính xác bên mình ở đâu ạ?'],
   ['Who should I speak to about this?', 'Việc này tôi nên hỏi ai ạ?']
  ],
  how: [
   ['How long does the course last?', 'Khóa học kéo dài bao lâu ạ?'],
   ['How much is a ticket for two people?', 'Vé cho hai người bao nhiêu ạ?']
  ]
 },
 'howto-hotel': {
  whfx: 'What time + is check-out? · Where + is + …? · Which floor + is + …?',
  howfx: 'How much + is a room for one night? · How many nights + …?',
  s: [
   ['I have a reservation under the name Lan.', 'Tôi có đặt phòng tên Lan.'],
   ['I would like to check in, please.', 'Tôi muốn nhận phòng.'],
   ['Do you have any rooms available?', 'Bên mình còn phòng trống không ạ?'],
   ['Is breakfast included?', 'Có bao gồm bữa sáng không ạ?'],
   ['Could I have an extra towel?', 'Cho tôi xin thêm một cái khăn.'],
   ['Could you call a taxi for me?', 'Gọi giúp tôi một chiếc taxi được không ạ?'],
   ['Can I leave my luggage here?', 'Tôi gửi hành lý ở đây được không ạ?'],
   ['The air conditioning isn’t working.', 'Máy lạnh không chạy.'],
   ['There is no hot water in my room.', 'Phòng tôi không có nước nóng.'],
   ['Could I change rooms?', 'Tôi đổi phòng được không ạ?'],
   ['I would like to check out, please.', 'Tôi muốn trả phòng.'],
   ['Is there Wi-Fi in the room?', 'Trong phòng có Wi-Fi không ạ?']
  ],
  wh: [
   ['What time is check-out?', 'Mấy giờ phải trả phòng ạ?'],
   ['Where is the lift?', 'Thang máy ở đâu ạ?'],
   ['Which floor is my room on?', 'Phòng tôi ở tầng mấy ạ?']
  ],
  how: [
   ['How much is a room for one night?', 'Phòng một đêm bao nhiêu ạ?'],
   ['How many nights would you like to stay?', 'Anh/chị muốn ở mấy đêm ạ?']
  ]
 }
};
const EX_A1B1 = {
 'be-present': {
  whfx: 'Wh- + am/is/are + chủ ngữ + …? (What is your name? · Where are they?)',
  howfx: 'How + am/is/are + chủ ngữ? · How old / How far / How tall + am/is/are + chủ ngữ?',
  s: [
   ['I am a student at a language centre.', 'Tôi là học viên ở một trung tâm ngoại ngữ.'],
   ['She is my younger sister.', 'Cô ấy là em gái tôi.'],
   ['We are very happy today.', 'Hôm nay chúng tôi rất vui.'],
   ['He isn’t a doctor; he is a nurse.', 'Anh ấy không phải bác sĩ; anh ấy là y tá.'],
   ['They aren’t at school now.', 'Bây giờ họ không ở trường.'],
   ['I’m not hungry, thank you.', 'Tôi không đói, cảm ơn.'],
   ['My parents are from Nghe An.', 'Ba mẹ tôi quê ở Nghệ An.'],
   ['It is very hot in June.', 'Tháng Sáu trời rất nóng.'],
   ['Are you tired after work?', 'Sau giờ làm bạn có mệt không?'],
   ['Is your office far from here?', 'Văn phòng của bạn có xa đây không?'],
   ['My son is six years old.', 'Con trai tôi sáu tuổi.'],
   ['The children are in the garden.', 'Bọn trẻ đang ở ngoài vườn.']
  ],
  wh: [
   ['What is your job?', 'Công việc của bạn là gì?'],
   ['Where are you from?', 'Bạn quê ở đâu?'],
   ['Who is your English teacher?', 'Giáo viên tiếng Anh của bạn là ai?']
  ],
  how: [
   ['How is your new job?', 'Công việc mới của bạn thế nào?'],
   ['How far is your school from your house?', 'Trường bạn cách nhà bao xa?']
  ]
 },
 'plural': {
  whfx: 'Wh- + am/is/are + danh từ số nhiều …? · Which + danh từ số nhiều + do + chủ ngữ + V?',
  howfx: 'How many + danh từ số nhiều + are there …? · How many + danh từ số nhiều + do/does + chủ ngữ + V?',
  s: [
   ['There are two cities I want to visit.', 'Có hai thành phố tôi muốn đến.'],
   ['I need three boxes for these books.', 'Tôi cần ba cái thùng cho mấy cuốn sách này.'],
   ['My feet are cold.', 'Chân tôi lạnh.'],
   ['Those men work at the factory.', 'Mấy người đàn ông đó làm ở nhà máy.'],
   ['We need two knives and four dishes.', 'Chúng ta cần hai con dao và bốn cái đĩa.'],
   ['The babies are sleeping.', 'Mấy em bé đang ngủ.'],
   ['There are many fish in the river.', 'Dưới sông có nhiều cá.'],
   ['There are five people in the lift.', 'Có năm người trong thang máy.'],
   ['Brush your teeth before bed.', 'Đánh răng trước khi đi ngủ.'],
   ['The leaves fall in autumn.', 'Lá rụng vào mùa thu.'],
   ['My watches are both broken.', 'Hai cái đồng hồ của tôi đều hỏng.'],
   ['The women and children are on the boat.', 'Phụ nữ và trẻ em đang ở trên thuyền.']
  ],
  wh: [
   ['What are those boxes for?', 'Mấy cái thùng kia để làm gì?'],
   ['Where are my keys?', 'Chìa khóa của tôi đâu rồi?'],
   ['Which shoes do you want to buy?', 'Bạn muốn mua đôi giày nào?']
  ],
  how: [
   ['How many children are there in the class?', 'Trong lớp có bao nhiêu đứa trẻ?'],
   ['How many tomatoes do you need?', 'Bạn cần bao nhiêu quả cà chua?']
  ]
 },
 'conjunctions': {
  whfx: 'Why + do/does/did + chủ ngữ + V? (hỏi lý do, trả lời bằng because) · What / Who + …, A or B?',
  howfx: 'How + do/does/did + chủ ngữ + V, A or B? · How many + danh từ + …?',
  s: [
   ['I like tea but I don’t like coffee.', 'Tôi thích trà nhưng không thích cà phê.'],
   ['She is tired because she works all day.', 'Cô ấy mệt vì phải làm việc cả ngày.'],
   ['It is raining, so we are staying at home.', 'Trời đang mưa nên chúng tôi ở nhà.'],
   ['Do you want rice or noodles?', 'Bạn muốn ăn cơm hay mì?'],
   ['He speaks English and Chinese.', 'Anh ấy nói tiếng Anh và tiếng Trung.'],
   ['The room is small but very clean.', 'Căn phòng nhỏ nhưng rất sạch.'],
   ['I am often late because the bus is slow.', 'Tôi hay trễ vì xe buýt chạy chậm.'],
   ['We can walk or take a taxi.', 'Mình đi bộ hoặc bắt taxi cũng được.'],
   ['She is hungry, so she is making a sandwich.', 'Cô ấy đói nên đang làm bánh mì kẹp.'],
   ['I often call him, but he never answers.', 'Tôi hay gọi cho anh ấy nhưng anh ấy chẳng bao giờ bắt máy.'],
   ['He is at home because he is ill.', 'Anh ấy ở nhà vì bị ốm.'],
   ['My brother studies and works at the same time.', 'Anh tôi vừa học vừa làm.']
  ],
  wh: [
   ['Why are you at home today?', 'Sao hôm nay bạn ở nhà?'],
   ['What do you want, tea or juice?', 'Bạn muốn gì, trà hay nước ép?'],
   ['Who do you want to invite, Lan or Mai?', 'Bạn muốn mời ai, Lan hay Mai?']
  ],
  how: [
   ['How do you go to work, by bus or by motorbike?', 'Bạn đi làm bằng gì, xe buýt hay xe máy?'],
   ['How many languages does he speak?', 'Anh ấy nói được mấy thứ tiếng?']
  ]
 },
 'howto-greet': {
  whfx: 'What + is your name? · Where + do/does + chủ ngữ + work / live? · Who + is + …?',
  howfx: 'How + are you? · How + was + danh từ? (How was your weekend?)',
  s: [
   ['Good morning, everyone.', 'Chào buổi sáng mọi người.'],
   ['How are you today?', 'Hôm nay bạn khỏe không?'],
   ['I’m fine, thanks. And you?', 'Tôi khỏe, cảm ơn. Còn bạn?'],
   ['Nice to meet you.', 'Rất vui được gặp bạn.'],
   ['This is my colleague, Mr Nam.', 'Đây là đồng nghiệp của tôi, anh Nam.'],
   ['Hi, I’m Lan. I work in marketing.', 'Chào, tôi là Lan. Tôi làm bên marketing.'],
   ['Have a nice day!', 'Chúc một ngày tốt lành!'],
   ['See you tomorrow morning.', 'Hẹn gặp sáng mai.'],
   ['It was nice meeting you.', 'Gặp được bạn thật vui.'],
   ['Long time no see!', 'Lâu quá không gặp!'],
   ['Please say hello to your family.', 'Cho tôi gửi lời chào gia đình bạn.'],
   ['Take care and see you soon.', 'Giữ gìn sức khỏe, hẹn sớm gặp lại.']
  ],
  wh: [
   ['What’s your name, please?', 'Cho hỏi bạn tên gì?'],
   ['What company do you work for?', 'Bạn làm cho công ty nào?'],
   ['Who is the woman next to Nam?', 'Người phụ nữ cạnh Nam là ai?']
  ],
  how: [
   ['How are you doing?', 'Dạo này bạn thế nào?'],
   ['How was your weekend?', 'Cuối tuần của bạn thế nào?']
  ]
 },
 'howto-personal': {
  whfx: 'What + is your + name / address / email? · Where + were you born?',
  howfx: 'How + do you spell that? · How old + are you?',
  s: [
   ['My name is Hiep.', 'Tôi tên Hiệp.'],
   ['I’m thirty-two years old.', 'Tôi ba mươi hai tuổi.'],
   ['I live in District 7 with my family.', 'Tôi sống ở Quận 7 cùng gia đình.'],
   ['I’m an engineer at a small company.', 'Tôi là kỹ sư ở một công ty nhỏ.'],
   ['My phone number is 0912 345 678.', 'Số điện thoại của tôi là 0912 345 678.'],
   ['Could you spell your surname, please?', 'Bạn đánh vần họ giúp tôi được không?'],
   ['I’m single.', 'Tôi còn độc thân.'],
   ['I’m married and I have two children.', 'Tôi có gia đình và hai con.'],
   ['Sorry, what’s your name again?', 'Xin lỗi, bạn tên gì nhỉ?'],
   ['My email is lan at gmail dot com.', 'Email của tôi là lan@gmail.com.'],
   ['I was born in nineteen ninety-four in Hue.', 'Tôi sinh năm 1994 ở Huế.'],
   ['Please write your address here.', 'Vui lòng viết địa chỉ của bạn vào đây.']
  ],
  wh: [
   ['What’s your date of birth?', 'Ngày sinh của bạn là ngày nào?'],
   ['Where were you born?', 'Bạn sinh ra ở đâu?'],
   ['What’s your email address?', 'Email của bạn là gì?']
  ],
  how: [
   ['How do you spell that?', 'Chỗ đó đánh vần thế nào?'],
   ['How old are you?', 'Bạn bao nhiêu tuổi?']
  ]
 },
 'howto-time': {
  whfx: 'What time + is it? · What day + is it today? · When + do/does + chủ ngữ + V?',
  howfx: 'How long + does it take + to V? · How many hours + do/does + chủ ngữ + V?',
  s: [
   ['It’s half past seven.', 'Bảy giờ rưỡi rồi.'],
   ['It’s a quarter to nine.', 'Chín giờ kém mười lăm.'],
   ['I get up at six every morning.', 'Sáng nào tôi cũng dậy lúc sáu giờ.'],
   ['The shop opens at eight and closes at ten.', 'Cửa hàng mở lúc tám giờ và đóng lúc mười giờ.'],
   ['My birthday is on the tenth of June.', 'Sinh nhật tôi ngày mười tháng Sáu.'],
   ['Today is Tuesday the fifth of May.', 'Hôm nay là thứ Ba ngày năm tháng Năm.'],
   ['I have breakfast at seven o’clock.', 'Tôi ăn sáng lúc bảy giờ.'],
   ['I finish work at five in the afternoon.', 'Tôi tan làm lúc năm giờ chiều.'],
   ['We have a meeting at ten past nine.', 'Chúng tôi họp lúc chín giờ mười.'],
   ['I go to bed at about eleven.', 'Tôi đi ngủ khoảng mười một giờ.'],
   ['The class starts in fifteen minutes.', 'Lớp học bắt đầu sau mười lăm phút nữa.'],
   ['I usually have lunch at noon.', 'Tôi thường ăn trưa lúc giữa trưa.']
  ],
  wh: [
   ['What time is it now?', 'Bây giờ mấy giờ rồi?'],
   ['What day is it today?', 'Hôm nay là thứ mấy?'],
   ['When does your class start?', 'Lớp của bạn bắt đầu khi nào?']
  ],
  how: [
   ['How long is your lunch break?', 'Giờ nghỉ trưa của bạn dài bao lâu?'],
   ['How many hours do you sleep every night?', 'Mỗi đêm bạn ngủ mấy tiếng?']
  ]
 },
 'howto-family': {
  whfx: 'What + does + người thân + do? · Where + do/does + người thân + live? · Who + is + …?',
  howfx: 'How old + is + người thân? · How many + người thân + do/does + chủ ngữ + have?',
  s: [
   ['My family is quite small.', 'Gia đình tôi khá nhỏ.'],
   ['I have one older brother and one younger sister.', 'Tôi có một anh trai và một em gái.'],
   ['My father is a farmer.', 'Ba tôi làm nông.'],
   ['My mother works at a hospital.', 'Mẹ tôi làm ở bệnh viện.'],
   ['My grandmother lives with us.', 'Bà tôi sống cùng chúng tôi.'],
   ['My wife is a teacher.', 'Vợ tôi là giáo viên.'],
   ['She has long black hair.', 'Cô ấy có mái tóc đen dài.'],
   ['My best friend is quiet but very kind.', 'Bạn thân tôi ít nói nhưng rất tốt bụng.'],
   ['My son looks like his father.', 'Con trai tôi giống ba nó.'],
   ['I live with my parents.', 'Tôi sống với ba mẹ.'],
   ['My uncle lives in Can Tho.', 'Chú tôi sống ở Cần Thơ.'],
   ['My cousin is studying in Australia.', 'Anh họ tôi đang du học ở Úc.']
  ],
  wh: [
   ['What does your mother do?', 'Mẹ bạn làm nghề gì?'],
   ['Where do your parents live?', 'Ba mẹ bạn sống ở đâu?'],
   ['Who is the oldest in your family?', 'Trong nhà bạn ai lớn tuổi nhất?']
  ],
  how: [
   ['How old is your daughter?', 'Con gái bạn mấy tuổi?'],
   ['How many cousins do you have?', 'Bạn có bao nhiêu anh chị em họ?']
  ]
 },
 'pp-vs-past': {
  whfx: 'When + did + chủ ngữ + V? (luôn dùng quá khứ đơn) · What + have/has + chủ ngữ + V3? (chưa nói rõ lúc nào)',
  howfx: 'How long + have/has + chủ ngữ + V3? · How many times + have/has + chủ ngữ + V3?',
  s: [
   ['I have lived in this city for ten years.', 'Tôi đã sống ở thành phố này mười năm rồi.'],
   ['I lived in Hanoi when I was a child.', 'Hồi nhỏ tôi sống ở Hà Nội.'],
   ['She has just finished her report.', 'Cô ấy vừa làm xong báo cáo.'],
   ['We finished the project last Friday.', 'Chúng tôi hoàn thành dự án hôm thứ Sáu tuần trước.'],
   ['Have you ever been to Singapore?', 'Bạn đã bao giờ đến Singapore chưa?'],
   ['I went to Singapore in 2018.', 'Tôi đã đến Singapore năm 2018.'],
   ['He hasn’t called me since Monday.', 'Anh ấy không gọi tôi từ thứ Hai đến giờ.'],
   ['I haven’t finished my homework yet.', 'Tôi vẫn chưa làm xong bài tập.'],
   ['She has already left the office.', 'Cô ấy đã rời văn phòng rồi.'],
   ['My brother bought a new car two weeks ago.', 'Anh tôi mua xe mới cách đây hai tuần.'],
   ['I have never eaten snake meat.', 'Tôi chưa bao giờ ăn thịt rắn.'],
   ['We have worked together since 2021.', 'Chúng tôi làm việc cùng nhau từ năm 2021.']
  ],
  wh: [
   ['When did you start learning English?', 'Bạn bắt đầu học tiếng Anh khi nào?'],
   ['What have you done today?', 'Hôm nay bạn đã làm những gì?'],
   ['Where did you buy this phone?', 'Bạn mua cái điện thoại này ở đâu?']
  ],
  how: [
   ['How long have you worked here?', 'Bạn làm ở đây bao lâu rồi?'],
   ['How many times have you been to Hanoi?', 'Bạn ra Hà Nội mấy lần rồi?']
  ]
 },
 'future-forms': {
  whfx: 'What + are you going to + V? · When + will + chủ ngữ + V? · Who + is going to + V?',
  howfx: 'How long + are you going to + V? · How + will + chủ ngữ + V?',
  s: [
   ['I’m going to start a new course next month.', 'Tháng sau tôi định bắt đầu một khóa học mới.'],
   ['Look at those clouds! It’s going to rain.', 'Nhìn mấy đám mây kìa! Trời sắp mưa.'],
   ['I think she will like this gift.', 'Tôi nghĩ cô ấy sẽ thích món quà này.'],
   ['I’m meeting my boss at nine tomorrow.', 'Chín giờ sáng mai tôi gặp sếp.'],
   ['The train leaves at six fifteen.', 'Tàu khởi hành lúc sáu giờ mười lăm.'],
   ['Don’t worry, I will do it for you.', 'Đừng lo, tôi sẽ làm việc đó giúp bạn.'],
   ['We’re going to buy a house next year.', 'Năm sau chúng tôi định mua nhà.'],
   ['I’m flying to Da Nang on Saturday.', 'Thứ Bảy tôi bay vào Đà Nẵng.'],
   ['He probably won’t come tonight.', 'Chắc tối nay anh ấy không đến đâu.'],
   ['It’s cold in here. I will close the window.', 'Trong này lạnh. Để tôi đóng cửa sổ.'],
   ['She’s going to tell him the truth tonight.', 'Tối nay cô ấy sẽ nói thật với anh ta.'],
   ['The film starts at eight thirty.', 'Phim bắt đầu lúc tám giờ rưỡi.']
  ],
  wh: [
   ['What are you going to do after the course?', 'Sau khóa học bạn định làm gì?'],
   ['When will you know the result?', 'Khi nào bạn biết kết quả?'],
   ['Who is going to book the hotel?', 'Ai sẽ đặt khách sạn?']
  ],
  how: [
   ['How long are you going to stay in Hue?', 'Bạn định ở Huế bao lâu?'],
   ['How will you tell her the news?', 'Bạn sẽ báo tin cho cô ấy thế nào?']
  ]
 },
 'modal-deduction': {
  whfx: 'Who / What + could + …? · Why + might + chủ ngữ + V?',
  howfx: 'How old + must + chủ ngữ + be? · How + can + chủ ngữ + be so sure?',
  s: [
   ['He must be at work now.', 'Chắc chắn giờ anh ấy đang ở chỗ làm.'],
   ['She might be in a meeting.', 'Có thể cô ấy đang họp.'],
   ['That can’t be his wife.', 'Đó không thể là vợ anh ta.'],
   ['They must be very tired after the trip.', 'Chắc họ mệt lắm sau chuyến đi.'],
   ['The keys might be in your other bag.', 'Chìa khóa có thể nằm trong cái túi kia của bạn.'],
   ['He can’t be forty; he looks much younger.', 'Anh ấy không thể bốn mươi được; trông trẻ hơn nhiều.'],
   ['She must know the answer.', 'Chắc chắn cô ấy biết câu trả lời.'],
   ['It could be a mistake.', 'Có thể là nhầm lẫn thôi.'],
   ['They can’t be at home; the lights are off.', 'Họ không thể ở nhà; đèn tắt hết rồi.'],
   ['This must be the right address.', 'Đây chắc chắn là đúng địa chỉ.'],
   ['He might not want to talk about it.', 'Có thể anh ấy không muốn nói về chuyện đó.'],
   ['She must be waiting for us downstairs.', 'Chắc cô ấy đang đợi chúng ta ở dưới nhà.']
  ],
  wh: [
   ['Who could that be at the door?', 'Ai mà gõ cửa giờ này nhỉ?'],
   ['What might he be doing now?', 'Giờ anh ấy có thể đang làm gì?'],
   ['Why might they be late?', 'Sao họ lại có thể trễ nhỉ?']
  ],
  how: [
   ['How old must he be?', 'Anh ấy chắc khoảng bao nhiêu tuổi?'],
   ['How can you be so sure?', 'Sao bạn chắc chắn được vậy?']
  ]
 },
 'obligation': {
  whfx: 'Wh- + do/does + chủ ngữ + have to + V? (What time do you have to leave?)',
  howfx: 'How early / How much + do/does + chủ ngữ + have to + V?',
  s: [
   ['I have to wear a uniform at work.', 'Ở chỗ làm tôi phải mặc đồng phục.'],
   ['You mustn’t smoke in this building.', 'Bạn không được hút thuốc trong tòa nhà này.'],
   ['You don’t have to come if you are busy.', 'Nếu bận thì bạn không cần đến.'],
   ['She has to look after her mother.', 'Cô ấy phải chăm sóc mẹ.'],
   ['I had to work last Sunday.', 'Chủ nhật tuần trước tôi phải đi làm.'],
   ['We will have to leave very early.', 'Chúng ta sẽ phải đi rất sớm.'],
   ['Students must not use phones in class.', 'Học sinh không được dùng điện thoại trong lớp.'],
   ['He doesn’t have to pay for parking.', 'Anh ấy không phải trả phí gửi xe.'],
   ['Do I have to book a table?', 'Tôi có cần đặt bàn trước không?'],
   ['You must tell her the truth.', 'Bạn phải nói thật với cô ấy.'],
   ['I didn’t have to wait very long.', 'Tôi không phải đợi lâu.'],
   ['Visitors must sign in at reception.', 'Khách phải ký tên ở quầy lễ tân.']
  ],
  wh: [
   ['What time do you have to be at the airport?', 'Mấy giờ bạn phải có mặt ở sân bay?'],
   ['Why do we have to change trains?', 'Sao chúng ta phải đổi tàu?'],
   ['Which form do I have to fill in?', 'Tôi phải điền vào mẫu nào?']
  ],
  how: [
   ['How early do we have to get up?', 'Chúng ta phải dậy sớm cỡ nào?'],
   ['How much do I have to pay in advance?', 'Tôi phải trả trước bao nhiêu?']
  ]
 },
 'time-clauses': {
  whfx: 'Wh- + will + chủ ngữ + V + when / after + hiện tại đơn? (What will you do when you finish?)',
  howfx: 'How + will + chủ ngữ + V + when + hiện tại đơn? · How long + until + …?',
  s: [
   ['I will call you when I arrive.', 'Tôi sẽ gọi bạn khi tôi đến nơi.'],
   ['Wait here until I come back.', 'Đợi ở đây cho tới khi tôi quay lại.'],
   ['I will text you as soon as I get home.', 'Tôi sẽ nhắn cho bạn ngay khi về tới nhà.'],
   ['Finish your homework before you go out.', 'Làm xong bài tập rồi hãy đi chơi.'],
   ['We will have dinner after the film ends.', 'Chúng ta sẽ ăn tối sau khi phim kết thúc.'],
   ['She will be happy when she hears the news.', 'Cô ấy sẽ vui khi nghe tin này.'],
   ['Don’t leave until the rain stops.', 'Đừng đi cho tới khi tạnh mưa.'],
   ['I will let you know as soon as I find out.', 'Tôi sẽ báo bạn ngay khi tôi biết tin.'],
   ['Turn off the lights before you leave.', 'Tắt đèn trước khi bạn về.'],
   ['When the meeting finishes, I will come and see you.', 'Khi họp xong tôi sẽ qua gặp bạn.'],
   ['He will start the project after he has signed the contract.', 'Anh ấy sẽ bắt đầu dự án sau khi ký hợp đồng.'],
   ['I will wait here while you buy the tickets.', 'Tôi đợi ở đây trong lúc bạn mua vé.']
  ],
  wh: [
   ['What will you do when you finish university?', 'Bạn sẽ làm gì khi học xong đại học?'],
   ['Where will you go after the conference?', 'Sau hội nghị bạn sẽ đi đâu?'],
   ['Who will look after the dog while we are away?', 'Ai sẽ trông con chó khi mình đi vắng?']
  ],
  how: [
   ['How will you contact me when you arrive?', 'Khi tới nơi bạn sẽ liên lạc với tôi thế nào?'],
   ['How long do we have to wait until the shop opens?', 'Chúng ta phải đợi bao lâu cho tới khi cửa hàng mở cửa?']
  ]
 },
 'quantifiers': {
  whfx: 'What / Which + of + the + danh từ …? · Why + is there + so much / so many + …?',
  howfx: 'How much + danh từ không đếm được …? · How many of + them / the + danh từ …?',
  s: [
   ['There isn’t much milk in the fridge.', 'Trong tủ lạnh không còn nhiều sữa.'],
   ['We have plenty of time before the train.', 'Chúng ta còn khối thời gian trước giờ tàu chạy.'],
   ['A few friends came to help us.', 'Vài người bạn đã đến giúp chúng tôi.'],
   ['I only have a little money left.', 'Tôi chỉ còn một ít tiền.'],
   ['There are too many cars on this road.', 'Đường này quá nhiều xe.'],
   ['He put too much salt in the soup.', 'Anh ấy cho quá nhiều muối vào súp.'],
   ['Most of the students passed the exam.', 'Phần lớn học sinh đã đỗ kỳ thi.'],
   ['There is enough food for everyone.', 'Có đủ đồ ăn cho mọi người.'],
   ['Few people know about this place.', 'Rất ít người biết đến chỗ này.'],
   ['None of my friends like durian.', 'Không ai trong đám bạn tôi thích sầu riêng.'],
   ['She has a lot of experience in marketing.', 'Cô ấy có nhiều kinh nghiệm trong ngành marketing.'],
   ['We don’t have enough chairs for the meeting.', 'Chúng ta không đủ ghế cho cuộc họp.']
  ],
  wh: [
   ['What do most of your classmates do now?', 'Phần lớn bạn học của bạn giờ làm gì?'],
   ['Which of these bags is yours?', 'Cái túi nào trong số này là của bạn?'],
   ['Why is there so much traffic today?', 'Sao hôm nay xe cộ đông thế?']
  ],
  how: [
   ['How much sugar do you take in your coffee?', 'Bạn uống cà phê với bao nhiêu đường?'],
   ['How many of them are coming tonight?', 'Tối nay mấy người trong số họ đến?']
  ]
 },
 'indefinite': {
  whfx: 'Who + V + …? · What else + do/does + chủ ngữ + V? · Where + can + chủ ngữ + find + somewhere …?',
  howfx: 'How + does + everyone / everybody + V? · How much + does everything + cost?',
  s: [
   ['There is something in my eye.', 'Có cái gì đó trong mắt tôi.'],
   ['Nobody answered the door.', 'Không ai ra mở cửa.'],
   ['I didn’t see anything strange.', 'Tôi không thấy gì lạ cả.'],
   ['Someone left a bag on the bus.', 'Ai đó để quên cái túi trên xe buýt.'],
   ['Everyone is waiting for you.', 'Mọi người đang đợi bạn.'],
   ['Is there anyone at home?', 'Có ai ở nhà không?'],
   ['I looked everywhere but found nothing.', 'Tôi tìm khắp nơi mà chẳng thấy gì.'],
   ['Let’s go somewhere quiet.', 'Mình đi đâu đó yên tĩnh đi.'],
   ['Nothing happened last night.', 'Tối qua chẳng có chuyện gì xảy ra.'],
   ['Everything is ready for the party.', 'Mọi thứ đã sẵn sàng cho buổi tiệc.'],
   ['Would you like something to drink?', 'Bạn uống chút gì nhé?'],
   ['There is nowhere to park around here.', 'Quanh đây chẳng có chỗ nào đậu xe.']
  ],
  wh: [
   ['Who wants something to drink?', 'Ai muốn uống gì không?'],
   ['What else do you need?', 'Bạn còn cần gì nữa không?'],
   ['Where can we find somewhere cheap to eat?', 'Mình tìm chỗ nào ăn rẻ được nhỉ?']
  ],
  how: [
   ['How does everyone get to the office?', 'Mọi người đến văn phòng bằng cách nào?'],
   ['How much does everything cost in total?', 'Tổng cộng mọi thứ hết bao nhiêu?']
  ]
 },
 'so-neither': {
  whfx: 'Who else + V + …? · Which of you + can / do + V?',
  howfx: 'How about you? · How many of you + have/do + V?',
  s: [
   ['I’m hungry. — So am I.', 'Tôi đói rồi. — Tôi cũng vậy.'],
   ['I don’t like horror films. — Neither do I.', 'Tôi không thích phim kinh dị. — Tôi cũng không.'],
   ['She can’t drive. — Neither can her husband.', 'Cô ấy không biết lái xe. — Chồng cô ấy cũng không.'],
   ['I have been to Hue twice. — So have I.', 'Tôi đã đến Huế hai lần. — Tôi cũng vậy.'],
   ['He was late this morning. — So was I.', 'Sáng nay anh ấy đến trễ. — Tôi cũng vậy.'],
   ['I didn’t sleep well last night. — Neither did I.', 'Tối qua tôi ngủ không ngon. — Tôi cũng vậy.'],
   ['My sister loves cooking. — So does my mother.', 'Chị tôi mê nấu ăn. — Mẹ tôi cũng vậy.'],
   ['I won’t be at the meeting. — Neither will I.', 'Tôi sẽ không dự họp. — Tôi cũng không.'],
   ['I’m not ready yet. — Neither am I.', 'Tôi chưa sẵn sàng. — Tôi cũng chưa.'],
   ['They have finished. — So have we.', 'Họ làm xong rồi. — Chúng tôi cũng xong.'],
   ['I don’t eat meat. — Oh, I do.', 'Tôi không ăn thịt. — Ồ, tôi thì có.'],
   ['I live near the beach. — So does my brother.', 'Tôi sống gần biển. — Anh tôi cũng vậy.']
  ],
  wh: [
   ['Who else likes spicy food?', 'Còn ai thích đồ cay nữa không?'],
   ['Which of you can swim?', 'Trong các bạn ai biết bơi?'],
   ['What do you both do at the weekend?', 'Cuối tuần hai bạn làm gì?']
  ],
  how: [
   ['How about you?', 'Còn bạn thì sao?'],
   ['How many of you have been to Japan?', 'Mấy người trong các bạn đã đến Nhật?']
  ]
 },
 'phrasal': {
  whfx: 'What time + do/does + chủ ngữ + get up? · Who + is going to + pick up + …? · Why + did + chủ ngữ + give up + …?',
  howfx: 'How + did + chủ ngữ + find out + …? · How well + do/does + chủ ngữ + get on with + ai?',
  s: [
   ['I get up at half past five every day.', 'Ngày nào tôi cũng dậy lúc năm rưỡi.'],
   ['Please turn off the air conditioner.', 'Làm ơn tắt máy lạnh.'],
   ['I’m looking for my glasses.', 'Tôi đang tìm cái kính.'],
   ['She looks after her grandmother every weekend.', 'Cuối tuần nào cô ấy cũng chăm bà.'],
   ['He gave up smoking two years ago.', 'Anh ấy bỏ thuốc lá hai năm trước.'],
   ['I will pick you up at the airport.', 'Tôi sẽ đón bạn ở sân bay.'],
   ['We have run out of printer paper.', 'Chúng ta hết giấy in rồi.'],
   ['Put on your jacket; it’s cold outside.', 'Mặc áo khoác vào đi; ngoài trời lạnh.'],
   ['I get on well with my new colleagues.', 'Tôi hợp với mấy đồng nghiệp mới.'],
   ['Could you turn the music down?', 'Bạn vặn nhỏ nhạc lại được không?'],
   ['I found out the truth yesterday.', 'Hôm qua tôi đã biết được sự thật.'],
   ['Take off your shoes before you come in.', 'Cởi giày ra trước khi vào nhà.']
  ],
  wh: [
   ['What time do you usually get up?', 'Bạn thường dậy lúc mấy giờ?'],
   ['Who is going to pick up the children?', 'Ai sẽ đón bọn trẻ?'],
   ['Why did he give up his job?', 'Sao anh ấy lại nghỉ việc?']
  ],
  how: [
   ['How did you find out about the job?', 'Bạn biết được công việc này bằng cách nào?'],
   ['How well do you get on with your boss?', 'Bạn hợp với sếp đến mức nào?']
  ]
 },
 'howto-opinion': {
  whfx: 'What + do you think about + …? · Why + do you disagree? · Which + option + do you prefer?',
  howfx: 'How + do you feel about + V-ing? · How many people + agree with + …?',
  s: [
   ['In my opinion, this plan is too risky.', 'Theo tôi, kế hoạch này quá mạo hiểm.'],
   ['I think we should wait a few days.', 'Tôi nghĩ chúng ta nên đợi vài ngày.'],
   ['I completely agree with you.', 'Tôi hoàn toàn đồng ý với bạn.'],
   ['I’m afraid I don’t agree.', 'Tôi e là tôi không đồng ý.'],
   ['That’s a good point.', 'Ý đó hay đấy.'],
   ['I see what you mean, but it costs too much.', 'Tôi hiểu ý bạn, nhưng tốn kém quá.'],
   ['I’m not so sure about that.', 'Chỗ đó tôi không chắc lắm.'],
   ['It seems to me that nobody read the report.', 'Tôi thấy hình như chẳng ai đọc bản báo cáo.'],
   ['You may be right, but let’s check again.', 'Có thể bạn đúng, nhưng mình kiểm tra lại đi.'],
   ['Personally, I prefer the first option.', 'Cá nhân tôi thích phương án đầu hơn.'],
   ['I’d rather not say.', 'Tôi không muốn nói ra.'],
   ['Everyone has a different opinion on this.', 'Mỗi người một ý về chuyện này.']
  ],
  wh: [
   ['What do you think about this idea?', 'Bạn nghĩ sao về ý tưởng này?'],
   ['Why do you disagree with the manager?', 'Sao bạn không đồng ý với quản lý?'],
   ['Which option do you prefer?', 'Bạn thích phương án nào hơn?']
  ],
  how: [
   ['How do you feel about working at the weekend?', 'Bạn thấy chuyện làm việc cuối tuần thế nào?'],
   ['How many people agree with this plan?', 'Có bao nhiêu người đồng ý với kế hoạch này?']
  ]
 }
};
const EX_B2C1 = {
 'modal-perfect': {
  whfx: 'Wh- + could / might + chủ ngữ + have + V3? · What + should + chủ ngữ + have + V3?',
  howfx: 'How + could + chủ ngữ + have + V3? · How long + must + chủ ngữ + have + V3?',
  s: [
   ['She must have left early.', 'Chắc cô ấy đã về sớm.'],
   ['He might have forgotten the meeting.', 'Có thể anh ấy đã quên cuộc họp.'],
   ['They can’t have finished already.', 'Họ không thể làm xong rồi được.'],
   ['I should have booked the tickets earlier.', 'Lẽ ra tôi nên đặt vé sớm hơn.'],
   ['You shouldn’t have told him.', 'Lẽ ra bạn không nên nói với anh ta.'],
   ['The ground is wet; it must have rained.', 'Mặt đất ướt; chắc trời đã mưa.'],
   ['She could have missed the train.', 'Có thể cô ấy đã lỡ tàu.'],
   ['We needn’t have hurried.', 'Lẽ ra chúng ta không cần vội.'],
   ['He must have been very tired.', 'Chắc anh ấy đã rất mệt.'],
   ['You could have called me.', 'Lẽ ra bạn có thể gọi cho tôi mà.'],
   ['They can’t have seen us in the dark.', 'Trời tối thế, họ không thể nào thấy chúng tôi được.'],
   ['I shouldn’t have eaten so much.', 'Lẽ ra tôi không nên ăn nhiều thế.']
  ],
  wh: [
   ['Who could have taken my umbrella?', 'Ai có thể đã lấy cái dù của tôi?'],
   ['What should I have said to her?', 'Lẽ ra tôi nên nói gì với cô ấy?'],
   ['Where might they have gone?', 'Họ có thể đã đi đâu?']
  ],
  how: [
   ['How could he have known about it?', 'Sao anh ấy lại có thể biết chuyện đó?'],
   ['How long must they have waited?', 'Chắc họ đã phải đợi bao lâu?']
  ]
 },
 'passive-report': {
  whfx: 'What + is said about + …? · Where + is + chủ ngữ + believed to + V? · Who + is thought to + V?',
  howfx: 'How many + danh từ + are reported to + V? · How old + is + chủ ngữ + said to be?',
  s: [
   ['It is said that the company is in trouble.', 'Người ta nói rằng công ty đang gặp khó khăn.'],
   ['He is believed to be living abroad.', 'Người ta tin rằng anh ta đang sống ở nước ngoài.'],
   ['The painting is thought to be very valuable.', 'Bức tranh được cho là rất có giá trị.'],
   ['Prices are expected to rise next year.', 'Giá cả dự kiến sẽ tăng vào năm sau.'],
   ['It is reported that three people were injured.', 'Theo tin đưa, ba người đã bị thương.'],
   ['She is known to have worked for the government.', 'Người ta biết rằng bà ấy từng làm cho chính phủ.'],
   ['The bridge is said to be over a hundred years old.', 'Cây cầu được cho là đã hơn một trăm năm tuổi.'],
   ['It is believed that the fire started in the kitchen.', 'Người ta tin rằng đám cháy bắt đầu từ nhà bếp.'],
   ['He is said to have left the country last week.', 'Người ta nói ông ta đã rời khỏi đất nước tuần trước.'],
   ['The team is expected to win the final.', 'Đội này được kỳ vọng sẽ thắng trận chung kết.'],
   ['It was thought that the plan would fail.', 'Người ta từng nghĩ kế hoạch sẽ thất bại.'],
   ['Several houses are reported to have been damaged.', 'Theo tin đưa, nhiều ngôi nhà đã bị hư hại.']
  ],
  wh: [
   ['What is said about the new manager?', 'Người ta nói gì về vị quản lý mới?'],
   ['Where is he believed to be living now?', 'Người ta tin giờ ông ta đang sống ở đâu?'],
   ['Who is thought to be responsible?', 'Ai bị cho là người chịu trách nhiệm?']
  ],
  how: [
   ['How many people are reported to be missing?', 'Theo tin đưa, có bao nhiêu người mất tích?'],
   ['How old is the temple said to be?', 'Ngôi chùa được cho là bao nhiêu tuổi?']
  ]
 },
 'participle': {
  whfx: 'Who + is + the + người + V-ing …? · What + is + the + danh từ + V3 …? · Which of + the + danh từ + V3 …?',
  howfx: 'How many + danh từ + V3 / V-ing + … + V?',
  s: [
   ['Feeling tired, she went to bed early.', 'Cảm thấy mệt, cô ấy đi ngủ sớm.'],
   ['Walking home, I met an old friend.', 'Trên đường đi bộ về nhà, tôi gặp một người bạn cũ.'],
   ['The man waiting outside is my uncle.', 'Người đàn ông đang đợi bên ngoài là chú tôi.'],
   ['Built in 1890, the bridge is still in use.', 'Được xây năm 1890, cây cầu vẫn đang được sử dụng.'],
   ['Having finished work, he went to the gym.', 'Làm xong việc, anh ấy đi tập gym.'],
   ['The woman living upstairs is a doctor.', 'Người phụ nữ sống ở tầng trên là bác sĩ.'],
   ['Most of the goods sold here are imported.', 'Phần lớn hàng bán ở đây là hàng nhập.'],
   ['Not knowing the way, we asked a local.', 'Không biết đường, chúng tôi hỏi một người dân ở đó.'],
   ['Written in simple English, the book is easy to read.', 'Được viết bằng tiếng Anh đơn giản, cuốn sách rất dễ đọc.'],
   ['Having lived there for years, she knows every street.', 'Sống ở đó nhiều năm, cô ấy thuộc từng con đường.'],
   ['The money spent on repairs was wasted.', 'Số tiền bỏ ra sửa chữa coi như phí.'],
   ['Opening the letter, he started to smile.', 'Mở lá thư ra, anh ấy bắt đầu mỉm cười.']
  ],
  wh: [
   ['Who is the man standing by the door?', 'Người đàn ông đứng cạnh cửa là ai?'],
   ['What is the language spoken in that region?', 'Ngôn ngữ được nói ở vùng đó là gì?'],
   ['Which of the books borrowed last week is yours?', 'Cuốn nào trong số sách mượn tuần trước là của bạn?']
  ],
  how: [
   ['How many of the people invited to the party came?', 'Trong số những người được mời dự tiệc, có bao nhiêu người đến?'],
   ['How many cars parked here belong to staff?', 'Có bao nhiêu xe đậu ở đây là của nhân viên?']
  ]
 },
 'unless-provided': {
  whfx: 'Wh- + will + chủ ngữ + V + unless / in case + hiện tại đơn?',
  howfx: 'How long / How much + … + provided that / in case + hiện tại đơn?',
  s: [
   ['We will go to the beach unless it rains.', 'Chúng tôi sẽ đi biển trừ khi trời mưa.'],
   ['You can borrow my car as long as you drive carefully.', 'Bạn mượn xe tôi được, miễn là lái cẩn thận.'],
   ['Take an umbrella in case it rains later.', 'Mang theo dù phòng khi lát nữa trời mưa.'],
   ['I won’t say anything unless you ask me.', 'Tôi sẽ không nói gì trừ khi bạn hỏi.'],
   ['He will sign the contract provided that we lower the price.', 'Anh ấy sẽ ký hợp đồng với điều kiện chúng ta giảm giá.'],
   ['Leave now, otherwise you will miss the train.', 'Đi ngay đi, không thì bạn sẽ lỡ tàu.'],
   ['I will go even if nobody comes with me.', 'Tôi vẫn đi ngay cả khi không ai đi cùng.'],
   ['Keep a copy in case the file is deleted.', 'Giữ một bản phòng khi tệp bị xóa.'],
   ['You can stay here as long as you want.', 'Bạn muốn ở đây bao lâu cũng được.'],
   ['Unless we leave now, we will be late.', 'Nếu không đi ngay, chúng ta sẽ trễ.'],
   ['She will help you provided you ask politely.', 'Cô ấy sẽ giúp bạn nếu bạn hỏi lịch sự.'],
   ['Write down the address in case you forget it.', 'Ghi địa chỉ lại phòng khi bạn quên.']
  ],
  wh: [
   ['Why do you always carry an umbrella? — In case it rains.', 'Sao bạn lúc nào cũng mang ô? — Phòng khi trời mưa.'],
   ['What should we do in case it rains?', 'Mình nên làm gì phòng khi trời mưa?'],
   ['Which road should we take in case the bridge is closed?', 'Mình nên đi đường nào phòng khi cầu bị cấm?']
  ],
  how: [
   ['How will you get home unless someone picks you up?', 'Nếu không ai đón thì bạn về nhà bằng cách nào?'],
   ['How much food should we buy in case more guests come?', 'Mình nên mua bao nhiêu đồ ăn phòng khi có thêm khách?']
  ]
 },
 'prep-collocation': {
  whfx: 'What + am/is/are + chủ ngữ + interested in? · Who + is responsible for + …? · What + did + chủ ngữ + complain about?',
  howfx: 'How good + am/is/are + chủ ngữ + at + V-ing? · How much + does it depend on + …?',
  s: [
   ['I’m interested in learning Japanese.', 'Tôi muốn học tiếng Nhật.'],
   ['She is very good at solving problems.', 'Cô ấy rất giỏi giải quyết vấn đề.'],
   ['He is afraid of making mistakes.', 'Anh ấy sợ mắc lỗi.'],
   ['We are proud of our students.', 'Chúng tôi tự hào về học trò của mình.'],
   ['Everything depends on the weather.', 'Mọi thứ phụ thuộc vào thời tiết.'],
   ['She apologised for arriving late.', 'Cô ấy xin lỗi vì đến trễ.'],
   ['They complained about the noise.', 'Họ phàn nàn về tiếng ồn.'],
   ['This bag belongs to my sister.', 'Cái túi này là của chị tôi.'],
   ['I’m worried about my father’s health.', 'Tôi lo cho sức khỏe của ba tôi.'],
   ['He is responsible for the whole team.', 'Anh ấy chịu trách nhiệm cả đội.'],
   ['This model is different from the old one.', 'Mẫu này khác với mẫu cũ.'],
   ['She succeeded in finding a better job.', 'Cô ấy đã tìm được công việc tốt hơn.']
  ],
  wh: [
   ['What are you interested in?', 'Bạn quan tâm đến điều gì?'],
   ['Who is responsible for this project?', 'Ai chịu trách nhiệm dự án này?'],
   ['What did they complain about?', 'Họ phàn nàn về chuyện gì?']
  ],
  how: [
   ['How good is she at English?', 'Cô ấy giỏi tiếng Anh cỡ nào?'],
   ['How much does it depend on the budget?', 'Chuyện đó phụ thuộc vào ngân sách đến mức nào?']
  ]
 },
 'howto-email': {
  whfx: 'What + should I write in + …? · Who + should I send + … + to? · When + do you need + …?',
  howfx: 'How + should I + end / start + a formal email? · How long + should + … + be?',
  s: [
   ['Dear Mr Brown, I am writing to ask about your course.', 'Kính gửi ông Brown, tôi viết thư để hỏi về khóa học của ông.'],
   ['Thank you for your email of the third of May.', 'Cảm ơn email ngày mùng ba tháng Năm của anh/chị.'],
   ['I would be grateful if you could reply before Friday.', 'Tôi rất cảm kích nếu anh/chị trả lời trước thứ Sáu.'],
   ['Please find attached the report you asked for.', 'Xin xem báo cáo anh/chị yêu cầu trong tệp đính kèm.'],
   ['Unfortunately, I am unable to attend the meeting.', 'Rất tiếc là tôi không thể dự cuộc họp.'],
   ['Could you please send me the price list?', 'Anh/chị gửi giúp tôi bảng giá được không?'],
   ['I look forward to hearing from you.', 'Mong sớm nhận được hồi âm của anh/chị.'],
   ['Yours sincerely, Nguyen Van Hiep.', 'Trân trọng, Nguyễn Văn Hiệp.'],
   ['Hi Nam, just a quick note to say thank you.', 'Chào Nam, viết nhanh mấy dòng để cảm ơn bạn.'],
   ['Let me know what you think.', 'Cho mình biết bạn nghĩ sao nhé.'],
   ['Sorry for the late reply.', 'Xin lỗi vì trả lời muộn.'],
   ['I have attached two photos to this email.', 'Tôi có đính kèm hai tấm ảnh trong email này.']
  ],
  wh: [
   ['What should I write in the subject line?', 'Tôi nên viết gì ở dòng tiêu đề?'],
   ['Who should I send this email to?', 'Tôi nên gửi email này cho ai?'],
   ['When do you need my reply?', 'Khi nào anh/chị cần tôi trả lời?']
  ],
  how: [
   ['How should I end a formal email?', 'Email trang trọng nên kết thúc thế nào?'],
   ['How long should the email be?', 'Email nên dài bao nhiêu?']
  ]
 },
 'subjunctive': {
  whfx: 'What + do you suggest + chủ ngữ + V? · Who + did they insist + should + V?',
  howfx: 'How soon + is it necessary that + chủ ngữ + V? · How many + … + is it required that + chủ ngữ + V?',
  s: [
   ['I suggest that he go alone.', 'Tôi đề nghị anh ấy đi một mình.'],
   ['She insisted that we be on time.', 'Cô ấy nhất quyết yêu cầu chúng tôi phải đúng giờ.'],
   ['It is essential that every student have a visa.', 'Điều cốt yếu là mỗi học viên phải có thị thực.'],
   ['The doctor recommended that she stay in bed.', 'Bác sĩ khuyên cô ấy nằm nghỉ trên giường.'],
   ['They demanded that the manager apologise.', 'Họ yêu cầu quản lý phải xin lỗi.'],
   ['It is important that he arrive before nine.', 'Điều quan trọng là anh ấy phải tới trước chín giờ.'],
   ['I propose that the meeting be postponed.', 'Tôi đề nghị hoãn cuộc họp lại.'],
   ['The law requires that every driver wear a seatbelt.', 'Luật quy định mọi tài xế phải thắt dây an toàn.'],
   ['He asked that we not tell anyone.', 'Anh ấy yêu cầu chúng tôi đừng nói với ai.'],
   ['It is vital that we act now.', 'Điều sống còn là chúng ta phải hành động ngay.'],
   ['The committee recommended that the rule be changed.', 'Hội đồng đề nghị sửa đổi quy định đó.'],
   ['I suggest that we should postpone the trip.', 'Tôi đề nghị chúng ta nên hoãn chuyến đi.']
  ],
  wh: [
   ['What do you suggest we do now?', 'Bạn đề nghị chúng ta làm gì bây giờ?'],
   ['Who suggested that he go alone?', 'Ai đề nghị anh ấy đi một mình?'],
   ['Why is it essential that everyone arrive early?', 'Sao mọi người nhất thiết phải đến sớm?']
  ],
  how: [
   ['How important is it that everyone be on time?', 'Việc mọi người phải đúng giờ quan trọng đến mức nào?'],
   ['How did they insist that the money be paid?', 'Họ yêu cầu khoản tiền đó phải được trả bằng cách nào?']
  ]
 },
 'discourse': {
  whfx: 'What, in short, + am/is/are + …? · Why, therefore, + did + chủ ngữ + V? · Which, on the other hand, + …?',
  howfx: 'How, for example, + would + chủ ngữ + V? · How much, overall, + did + chủ ngữ + V?',
  s: [
   ['The service was slow. However, the food was excellent.', 'Phục vụ chậm. Tuy nhiên, món ăn thì tuyệt.'],
   ['Costs rose sharply. As a result, we raised our prices.', 'Chi phí tăng mạnh. Vì vậy, chúng tôi đã tăng giá.'],
   ['The flat is small. Moreover, it is very expensive.', 'Căn hộ thì nhỏ. Hơn nữa, nó còn rất đắt.'],
   ['He is quiet, whereas his brother never stops talking.', 'Anh ấy ít nói, còn em trai thì nói không ngừng.'],
   ['She studied for weeks; nevertheless, she failed.', 'Cô ấy ôn mấy tuần liền; tuy vậy vẫn trượt.'],
   ['Sales fell last quarter. Therefore, we cut costs.', 'Doanh số quý trước giảm. Vì vậy, chúng tôi cắt giảm chi phí.'],
   ['In addition, the hotel offers free breakfast.', 'Ngoài ra, khách sạn còn có bữa sáng miễn phí.'],
   ['Some cities, for instance Hue, are much quieter.', 'Một số thành phố, ví dụ như Huế, yên tĩnh hơn nhiều.'],
   ['In short, the plan worked well.', 'Nói ngắn gọn, kế hoạch đã có hiệu quả.'],
   ['On the other hand, the price is reasonable.', 'Mặt khác, giá cả lại hợp lý.'],
   ['The road was closed; consequently, we arrived late.', 'Đường bị chặn; vì thế chúng tôi đến trễ.'],
   ['Overall, it was a successful year.', 'Nhìn chung, đó là một năm thành công.']
  ],
  wh: [
   ['What, in short, is your conclusion?', 'Nói ngắn gọn thì kết luận của bạn là gì?'],
   ['As a result, what did the company decide to do?', 'Kết quả là công ty đã quyết định làm gì?'],
   ['On the other hand, which option costs less?', 'Mặt khác, phương án nào rẻ hơn?']
  ],
  how: [
   ['How, for example, would you solve this?', 'Chẳng hạn, bạn sẽ giải quyết việc này thế nào?'],
   ['How much, overall, did the trip cost?', 'Nhìn chung, chuyến đi tốn hết bao nhiêu?']
  ]
 },
 'whatever': {
  whfx: 'Wh- + mệnh đề chính + whenever / whatever / no matter what + mệnh đề?',
  howfx: 'How + can / do + chủ ngữ + V + wherever / whatever + mệnh đề?',
  s: [
   ['However hard I try, I can’t remember his name.', 'Dù cố thế nào tôi cũng không nhớ nổi tên anh ấy.'],
   ['No matter what you say, he won’t change his mind.', 'Dù bạn nói gì anh ấy cũng không đổi ý.'],
   ['Whatever you decide, I will support you.', 'Dù bạn quyết thế nào, tôi vẫn ủng hộ.'],
   ['Whoever calls, tell them I am out.', 'Ai gọi thì nói là tôi đi vắng.'],
   ['Wherever you go, take this with you.', 'Dù bạn đi đâu cũng mang theo cái này.'],
   ['However tired you are, please call me.', 'Dù bạn mệt đến đâu cũng hãy gọi cho tôi.'],
   ['No matter how late it is, give me a call.', 'Dù muộn đến mấy cũng cứ gọi cho tôi.'],
   ['Whenever you need help, just ask.', 'Bất cứ khi nào cần giúp, cứ hỏi tôi.'],
   ['However fast he runs, he can’t catch the bus.', 'Dù chạy nhanh đến mấy anh ấy cũng không kịp xe buýt.'],
   ['Whatever happens, stay calm.', 'Dù có chuyện gì cũng hãy bình tĩnh.'],
   ['No matter who asks, don’t give out the password.', 'Bất kể ai hỏi, đừng đưa mật khẩu ra.'],
   ['However much it costs, I will buy it.', 'Đắt đến mấy tôi cũng mua.']
  ],
  wh: [
   ['Who should I call whenever there is a problem?', 'Có vấn đề gì thì tôi nên gọi cho ai?'],
   ['Where can I find you whenever I need help?', 'Khi cần giúp thì tôi tìm bạn ở đâu?'],
   ['Why does he refuse no matter what we offer?', 'Sao dù mình đưa ra gì anh ấy cũng từ chối?']
  ],
  how: [
   ['How do you stay in touch wherever you are?', 'Dù ở đâu, bạn giữ liên lạc bằng cách nào?'],
   ['How do you stay calm whatever happens?', 'Làm sao bạn giữ được bình tĩnh dù có chuyện gì xảy ra?']
  ]
 },
 'relative-advanced': {
  whfx: 'Who / What / Which + am/is/are + the + danh từ + giới từ + whom / which + mệnh đề?',
  howfx: 'How many of + them / the + danh từ + V? · How long + was + the + danh từ + at which + mệnh đề?',
  s: [
   ['This is the report on which our decision was based.', 'Đây là bản báo cáo làm cơ sở cho quyết định của chúng tôi.'],
   ['She is the lawyer to whom I sent the documents.', 'Cô ấy là luật sư mà tôi đã gửi hồ sơ.'],
   ['I have three brothers, all of whom live abroad.', 'Tôi có ba anh em trai, cả ba đều sống ở nước ngoài.'],
   ['She wrote ten books, most of which were bestsellers.', 'Bà ấy viết mười cuốn sách, phần lớn đều bán chạy.'],
   ['The hotel was fully booked, which surprised us.', 'Khách sạn kín phòng, điều đó làm chúng tôi bất ngờ.'],
   ['The company has two offices, one of which is in Hue.', 'Công ty có hai văn phòng, một trong số đó ở Huế.'],
   ['She speaks four languages, which is very impressive.', 'Cô ấy nói được bốn thứ tiếng, thật đáng nể.'],
   ['This is the house in which he was born.', 'Đây là ngôi nhà nơi ông ấy sinh ra.'],
   ['We interviewed forty people, none of whom had experience.', 'Chúng tôi phỏng vấn bốn mươi người, không ai có kinh nghiệm.'],
   ['The train was cancelled, which meant a long wait.', 'Chuyến tàu bị hủy, nghĩa là phải đợi rất lâu.'],
   ['He is the colleague with whom I share an office.', 'Anh ấy là đồng nghiệp chung phòng làm việc với tôi.'],
   ['They hired six people, all of whom started last week.', 'Họ tuyển sáu người, tất cả đều bắt đầu từ tuần trước.']
  ],
  wh: [
   ['Who is the person to whom I should speak?', 'Người tôi nên nói chuyện cùng là ai?'],
   ['What is the subject in which she specialises?', 'Cô ấy chuyên sâu về lĩnh vực nào?'],
   ['Which is the project on which you worked longest?', 'Dự án nào là dự án bạn làm lâu nhất?']
  ],
  how: [
   ['How many of the people with whom you work speak English?', 'Trong số những người làm việc cùng bạn, có bao nhiêu người nói tiếng Anh?'],
   ['How long was the meeting at which the decision was made?', 'Cuộc họp đưa ra quyết định đó kéo dài bao lâu?']
  ]
 },
 'emphasis': {
  whfx: 'What exactly + did + chủ ngữ + V? · Who on earth + V? · Which one + do you really + V?',
  howfx: 'How on earth + did + chủ ngữ + V? · How much better / far more + …?',
  s: [
   ['I do like this song.', 'Tôi thích bài hát này thật mà.'],
   ['She does know the answer.', 'Cô ấy biết câu trả lời thật đấy.'],
   ['He did call you yesterday.', 'Hôm qua anh ấy có gọi bạn thật.'],
   ['Never will I forget that day.', 'Không bao giờ tôi quên được ngày hôm đó.'],
   ['Do come in and sit down.', 'Mời vào và ngồi đi ạ.'],
   ['Never have I seen such a beautiful sunset.', 'Chưa bao giờ tôi thấy hoàng hôn đẹp đến thế.'],
   ['So tired was he that he fell asleep at his desk.', 'Anh ấy mệt đến mức ngủ gục ngay trên bàn.'],
   ['This is by far the best coffee in town.', 'Đây là cà phê ngon nhất thành phố, hơn hẳn chỗ khác.'],
   ['She had no experience whatsoever.', 'Cô ấy hoàn toàn không có chút kinh nghiệm nào.'],
   ['I don’t mind at all.', 'Tôi không phiền chút nào.'],
   ['It is far more expensive than I expected.', 'Nó đắt hơn tôi tưởng rất nhiều.'],
   ['Such was her anger that nobody spoke.', 'Cô ấy giận đến mức không ai dám lên tiếng.']
  ],
  wh: [
   ['What exactly did he say?', 'Chính xác thì anh ta đã nói gì?'],
   ['Who on earth told you that?', 'Rốt cuộc là ai nói với bạn chuyện đó?'],
   ['Which one do you really prefer?', 'Thật ra bạn thích cái nào hơn?']
  ],
  how: [
   ['How on earth did you find this place?', 'Rốt cuộc bạn tìm ra chỗ này bằng cách nào?'],
   ['How much better is this one?', 'Cái này tốt hơn bao nhiêu?']
  ]
 }
};
const EX_ADD = {"present-simple":[["My mother gets up at five every day.","Mẹ tôi dậy lúc năm giờ mỗi ngày."],["They don't live near the city centre.","Họ không sống gần trung tâm thành phố."],["Does he speak English at work?","Anh ấy có nói tiếng Anh ở chỗ làm không?"],["Water boils at one hundred degrees.","Nước sôi ở một trăm độ."],["I am a teacher, and my wife is a nurse.","Tôi là giáo viên, còn vợ tôi là y tá."],["The children aren't at home on weekdays.","Bọn trẻ không ở nhà vào các ngày trong tuần."],["She studies English every evening.","Cô ấy học tiếng Anh mỗi tối."],["Is your office on the third floor?","Văn phòng của bạn ở tầng ba phải không?"]],"present-continuous":[["She is talking on the phone right now.","Cô ấy đang nói chuyện điện thoại ngay lúc này."],["Are the children doing their homework?","Bọn trẻ đang làm bài tập phải không?"],["I am wearing my new shoes today.","Hôm nay tôi đang mang đôi giày mới."],["We aren't watching TV; we are playing cards.","Chúng tôi không xem TV; chúng tôi đang chơi bài."],["Is he driving to work this week?","Tuần này anh ấy lái xe đi làm à?"],["My father is fixing the car in the garage.","Bố tôi đang sửa xe trong ga-ra."],["Listen! Someone is knocking at the door.","Nghe này! Có ai đó đang gõ cửa."],["They are building a new school near my house.","Họ đang xây một trường học mới gần nhà tôi."]],"past-be":[["The shop was closed on Monday.","Cửa hàng đóng cửa vào thứ Hai."],["Where were you last night?","Tối qua bạn ở đâu?"],["I was very hungry after the long walk.","Tôi rất đói sau chuyến đi bộ dài."],["The tickets weren't expensive.","Vé không đắt."],["Was your grandfather a farmer?","Ông của bạn từng là nông dân phải không?"],["We were in Da Lat last summer.","Mùa hè năm ngoái chúng tôi ở Đà Lạt."],["The exam was easy, but it was very long.","Bài thi dễ nhưng rất dài."],["Why were they late this morning?","Sao sáng nay họ đến muộn?"]],"past-simple":[["We went to the beach last summer.","Mùa hè năm ngoái chúng tôi đi biển."],["He didn't call me yesterday.","Hôm qua anh ấy không gọi cho tôi."],["Did she pass the exam?","Cô ấy có đậu kỳ thi không?"],["I cleaned my room on Sunday morning.","Tôi dọn phòng vào sáng Chủ nhật."],["They sold their old car last month.","Tháng trước họ đã bán chiếc xe cũ."],["Where did you buy that bag?","Bạn mua cái túi đó ở đâu?"],["My parents got married in 1995.","Bố mẹ tôi cưới nhau năm 1995."],["I lost my keys and looked for them for an hour.","Tôi làm mất chìa khóa và tìm chúng suốt một tiếng."]],"past-continuous":[["I was walking home when I saw an accident.","Tôi đang đi bộ về nhà thì thấy một vụ tai nạn."],["Was she sleeping when you got home?","Lúc bạn về nhà, cô ấy đang ngủ à?"],["We weren't working at that time.","Lúc đó chúng tôi không làm việc."],["The sun was shining and the birds were singing.","Mặt trời đang chiếu sáng và chim đang hót."],["He cut his finger while he was cooking.","Anh ấy bị đứt tay trong lúc đang nấu ăn."],["Were you driving fast when the police stopped you?","Lúc cảnh sát chặn lại, bạn đang lái nhanh à?"],["At midnight, my neighbours were still singing karaoke.","Lúc nửa đêm, hàng xóm của tôi vẫn đang hát karaoke."],["My phone rang while I was taking a shower.","Điện thoại của tôi reo khi tôi đang tắm."]],"going-to":[["He is going to paint his room this weekend.","Cuối tuần này anh ấy sẽ sơn phòng."],["What are you going to do after work?","Sau giờ làm bạn định làm gì?"],["I'm not going to drink coffee tonight.","Tối nay tôi sẽ không uống cà phê."],["Be careful! You are going to fall.","Cẩn thận! Bạn sắp ngã kìa."],["Is she going to have a baby?","Cô ấy sắp có em bé phải không?"],["We are going to have a party on Saturday.","Chúng tôi định tổ chức tiệc vào thứ Bảy."],["My brother is going to get married next spring.","Anh trai tôi sẽ cưới vào mùa xuân tới."],["Where are you going to stay in Hanoi?","Bạn định ở đâu tại Hà Nội?"]],"future-simple":[["I'm tired. I think I will go to bed early.","Tôi mệt. Chắc tôi sẽ đi ngủ sớm."],["The shop will open at nine tomorrow.","Ngày mai cửa hàng sẽ mở lúc chín giờ."],["Will you be at home this evening?","Tối nay bạn có ở nhà không?"],["He won't tell anyone your secret.","Anh ấy sẽ không kể bí mật của bạn với ai."],["Maybe I will buy a new phone next year.","Có lẽ năm sau tôi sẽ mua điện thoại mới."],["The phone is ringing. I will answer it.","Điện thoại đang reo. Tôi sẽ nghe máy."],["I promise I won't be late again.","Tôi hứa sẽ không đến muộn nữa."],["Will they finish the work on time?","Họ có làm xong việc đúng hạn không?"]],"present-perfect":[["I have already had lunch.","Tôi ăn trưa rồi."],["Has she called you today?","Hôm nay cô ấy có gọi cho bạn không?"],["They haven't decided yet.","Họ vẫn chưa quyết định."],["We have lived in this flat for three years.","Chúng tôi đã sống ở căn hộ này được ba năm."],["Have you ever travelled by plane?","Bạn đã bao giờ đi máy bay chưa?"],["My sister has just bought a new car.","Chị tôi vừa mua một chiếc xe mới."],["He has never cooked dinner for us.","Anh ấy chưa bao giờ nấu bữa tối cho chúng tôi."],["I haven't seen my cousin since last Tet.","Tôi chưa gặp em họ kể từ Tết năm ngoái."]],"present-perfect-continuous":[["He has been playing games since lunch.","Cậu ấy chơi game từ trưa đến giờ."],["Have you been crying? Your eyes are red.","Bạn vừa khóc à? Mắt bạn đỏ kìa."],["We haven't been sleeping well lately.","Dạo này chúng tôi ngủ không ngon."],["She has been learning Japanese for six months.","Cô ấy đã học tiếng Nhật được sáu tháng."],["How long have they been working on this project?","Họ làm dự án này bao lâu rồi?"],["I have been looking for my glasses all morning.","Tôi tìm kính suốt cả buổi sáng."],["It hasn't been raining much this month.","Tháng này trời không mưa nhiều."],["The kids are dirty because they have been playing outside.","Bọn trẻ lấm lem vì chơi ngoài trời nãy giờ."]],"past-perfect":[["I had never eaten pho before I came to Vietnam.","Trước khi đến Việt Nam, tôi chưa bao giờ ăn phở."],["Had you met him before the party?","Bạn đã gặp anh ấy trước bữa tiệc chưa?"],["The film had already started when we got there.","Phim đã bắt đầu khi chúng tôi đến."],["She was sad because she had lost her cat.","Cô ấy buồn vì đã làm mất con mèo."],["We hadn't booked a table, so we waited outside.","Chúng tôi chưa đặt bàn nên phải chờ bên ngoài."],["He said he had finished the report.","Anh ấy nói là đã làm xong báo cáo."],["By the time the doctor came, the pain had gone.","Khi bác sĩ đến thì cơn đau đã hết."],["After they had eaten dinner, they went for a walk.","Sau khi ăn tối xong, họ đi dạo."]],"future-continuous":[["I will be working from home tomorrow.","Ngày mai tôi sẽ làm việc ở nhà."],["Will you be going to the shop later?","Lát nữa bạn có đi cửa hàng không?"],["She won't be coming to the meeting this afternoon.","Chiều nay cô ấy sẽ không đến dự cuộc họp."],["At ten o'clock, the children will be sleeping.","Lúc mười giờ, bọn trẻ đang ngủ rồi."],["This time next week, we will be lying on the beach.","Giờ này tuần sau chúng tôi đang nằm trên bãi biển."],["Don't come at noon. I will be cooking lunch.","Đừng đến lúc trưa. Lúc đó tôi đang nấu bữa trưa."],["What will he be doing at this time tomorrow?","Giờ này ngày mai anh ấy sẽ làm gì?"],["They will be travelling around Europe all summer.","Họ sẽ đi du lịch khắp châu Âu suốt mùa hè."]],"stative":[["I need a new laptop.","Tôi cần một chiếc máy tính xách tay mới."],["She doesn't believe his story.","Cô ấy không tin câu chuyện của anh ta."],["This bag belongs to my sister.","Cái túi này là của chị tôi."],["What are you thinking about?","Bạn đang nghĩ gì vậy?"],["Do you remember her name?","Bạn có nhớ tên cô ấy không?"],["He has two children.","Anh ấy có hai đứa con."],["We are having a great time here.","Chúng tôi đang rất vui ở đây."],["The chef is tasting the soup now.","Đầu bếp đang nếm thử món súp."]],"past-perfect-continuous":[["She had been working there for five years before she got a promotion.","Cô ấy làm ở đó năm năm mới được thăng chức."],["How long had you been waiting when the doctor called you?","Bạn đã chờ bao lâu thì bác sĩ gọi tên?"],["He hadn't been sleeping well, so he looked tired.","Dạo đó anh ấy ngủ không ngon nên trông mệt mỏi."],["The road was wet because it had been raining all night.","Đường ướt vì trời đã mưa suốt đêm."],["They had been arguing for an hour before they made up.","Họ cãi nhau cả tiếng đồng hồ rồi mới làm lành."],["I was out of breath because I had been running.","Tôi thở không ra hơi vì vừa chạy."],["Had she been studying English before she moved to London?","Cô ấy đã học tiếng Anh trước khi chuyển đến London phải không?"],["We had been planning the trip for months before we finally went.","Chúng tôi lên kế hoạch cho chuyến đi suốt mấy tháng rồi mới đi được."]],"future-perfect":[["By the time you wake up, I will have left.","Lúc bạn thức dậy thì tôi đã đi rồi."],["Will they have finished the road by next summer?","Họ sẽ làm xong con đường trước mùa hè tới chứ?"],["She won't have arrived by noon.","Đến trưa cô ấy vẫn chưa tới đâu."],["By Friday, we will have sold all the tickets.","Đến thứ Sáu, chúng tôi sẽ bán hết vé."],["I will have cooked dinner before you get home.","Tôi sẽ nấu xong bữa tối trước khi bạn về nhà."],["By the end of the course, you will have learnt a thousand words.","Đến cuối khóa, bạn sẽ học được một nghìn từ."],["He won't have finished the book by tomorrow.","Đến mai anh ấy vẫn chưa đọc xong cuốn sách đâu."],["By 2035, the city will have grown a lot.","Đến năm 2035, thành phố sẽ phát triển rất nhiều."]],"future-in-past":[["She told me she was going to quit her job.","Cô ấy nói với tôi rằng cô ấy định nghỉ việc."],["I knew you would like this restaurant.","Tôi biết bạn sẽ thích nhà hàng này."],["He said he wouldn't be late.","Anh ấy nói sẽ không đến muộn."],["We were going to watch a film, but we fell asleep.","Chúng tôi định xem phim nhưng lại ngủ quên."],["Were you going to tell me about it?","Bạn có định kể cho tôi nghe chuyện đó không?"],["I hoped the weather would be better.","Tôi đã hy vọng thời tiết sẽ đẹp hơn."],["They weren't going to come, but they changed their minds.","Lúc đầu họ không định đến, nhưng rồi đổi ý."],["She promised she would write to me every week.","Cô ấy hứa sẽ viết thư cho tôi mỗi tuần."]],"future-perfect-continuous":[["By next Christmas, we will have been living here for four years.","Đến Giáng sinh năm sau, chúng tôi sẽ sống ở đây được bốn năm."],["By noon, I will have been sitting in this meeting for three hours.","Đến trưa, tôi sẽ ngồi trong cuộc họp này được ba tiếng."],["How long will you have been working here by the end of the year?","Đến cuối năm, bạn sẽ làm việc ở đây được bao lâu?"],["By September, she will have been teaching at this school for ten years.","Đến tháng Chín, cô ấy sẽ dạy ở trường này được mười năm."],["By the time he retires, he will have been driving taxis for thirty years.","Đến khi nghỉ hưu, ông ấy sẽ lái taxi được ba mươi năm."],["By eight o'clock, the children will have been playing for two hours.","Đến tám giờ, bọn trẻ sẽ chơi được hai tiếng."],["She won't have been waiting long when you arrive.","Khi bạn đến, cô ấy sẽ chưa phải chờ lâu."],["By next month, they will have been dating for a year.","Đến tháng sau, họ sẽ hẹn hò được một năm."]],"polite-tenses":[["I was wondering if you could send me the file.","Không biết anh/chị có thể gửi cho tôi tập tin được không."],["We were hoping to start the project next week.","Chúng tôi mong có thể bắt đầu dự án vào tuần sau."],["Did you want a receipt?","Anh/chị có cần hóa đơn không ạ?"],["I was wondering whether you were free on Friday.","Không biết thứ Sáu anh/chị có rảnh không."],["I was hoping to ask you a small favour.","Tôi muốn nhờ anh/chị một việc nhỏ."],["Were you looking for something special?","Anh/chị đang tìm món gì đặc biệt ạ?"],["I wasn't planning to stay long, so I'll go now.","Tôi cũng không định ở lâu, nên giờ tôi về đây."],["We had hoped to see you at the party.","Chúng tôi đã mong được gặp anh/chị ở bữa tiệc."]],"inversion-perfect":[["Never have I seen such a beautiful sunset.","Chưa bao giờ tôi thấy cảnh hoàng hôn đẹp như vậy."],["Rarely have we had such a good team.","Hiếm khi chúng tôi có một đội tốt như vậy."],["Hardly had the class started when the lights went out.","Lớp học vừa mới bắt đầu thì mất điện."],["No sooner had I paid than I saw a cheaper one.","Tôi vừa trả tiền xong thì thấy một cái rẻ hơn."],["Scarcely had we arrived when the party ended.","Chúng tôi vừa đến thì bữa tiệc kết thúc."],["Never had she felt so happy before.","Trước đó cô ấy chưa bao giờ thấy hạnh phúc như vậy."],["No sooner had he got home than his boss called.","Anh ấy vừa về đến nhà thì sếp gọi."],["Hardly had the plane landed when people started to stand up.","Máy bay vừa hạ cánh thì mọi người bắt đầu đứng dậy."]],"be-present":[["I am from Da Nang.","Tôi đến từ Đà Nẵng."],["Is she your teacher? Yes, she is.","Cô ấy là giáo viên của bạn à? Đúng vậy."],["I am thirty years old.","Tôi ba mươi tuổi."],["We aren't late; we are early.","Chúng tôi không muộn; chúng tôi đến sớm."],["The coffee is too hot.","Cà phê nóng quá."],["Are your brothers at work today?","Hôm nay các anh của bạn có đi làm không?"],["Are they your children? No, they aren't.","Họ là con của bạn à? Không phải."],["My office is on the second floor.","Văn phòng của tôi ở tầng hai."]],"howto-greet":[["Good afternoon, Mrs Hoa.","Chào buổi chiều, cô Hoa."],["How's it going?","Dạo này thế nào?"],["Not bad, thanks.","Cũng ổn, cảm ơn."],["Let me introduce my friend, Minh.","Để tôi giới thiệu bạn tôi, Minh."],["Pleased to meet you too.","Tôi cũng rất vui được gặp bạn."],["Good night, sleep well.","Chúc ngủ ngon."],["See you next week.","Hẹn gặp lại tuần sau."],["Have a good weekend!","Chúc cuối tuần vui vẻ!"]],"howto-personal":[["What's your surname?","Họ của bạn là gì?"],["How old are you?","Bạn bao nhiêu tuổi?"],["Where are you from?","Bạn đến từ đâu?"],["I'm from Quang Ngai.","Tôi đến từ Quảng Ngãi."],["What do you do?","Bạn làm nghề gì?"],["I'm a student at a university in Hanoi.","Tôi là sinh viên một trường đại học ở Hà Nội."],["What's your address?","Địa chỉ của bạn là gì?"],["My address is 25 Tran Phu Street.","Địa chỉ của tôi là số 25 đường Trần Phú."]],"pronouns":[["He calls her every evening.","Anh ấy gọi cho cô ấy mỗi tối."],["Is this pen yours?","Cây bút này là của bạn phải không?"],["We cook dinner ourselves.","Chúng tôi tự nấu bữa tối."],["Please give it to him.","Làm ơn đưa nó cho anh ấy."],["Their house is big, but ours is small.","Nhà họ to, nhưng nhà chúng tôi nhỏ."],["She doesn't know them.","Cô ấy không biết họ."],["The cat is washing itself.","Con mèo đang tự liếm lông."],["My bag is blue and his is black.","Túi của tôi màu xanh còn của anh ấy màu đen."]],"plural":[["I eat two potatoes for lunch.","Tôi ăn hai củ khoai tây vào bữa trưa."],["The buses are full in the morning.","Xe buýt đông kín vào buổi sáng."],["My children love stories.","Các con tôi thích nghe truyện."],["There are three mice in the kitchen.","Có ba con chuột trong bếp."],["We need some glasses for the drinks.","Chúng tôi cần vài cái ly để uống nước."],["Those countries are very beautiful.","Những đất nước đó rất đẹp."],["The sheep are eating grass.","Những con cừu đang ăn cỏ."],["She washes the dishes after dinner.","Cô ấy rửa bát đĩa sau bữa tối."]],"nouns":[["Can I have some bread, please?","Cho tôi xin một ít bánh mì."],["There aren't any apples in the bag.","Không có quả táo nào trong túi."],["How much money do you have?","Bạn có bao nhiêu tiền?"],["I have a few questions for you.","Tôi có vài câu hỏi cho bạn."],["We need a little salt for the soup.","Chúng ta cần một chút muối cho món súp."],["She buys two loaves of bread every morning.","Cô ấy mua hai ổ bánh mì mỗi sáng."],["There is some information on the website.","Có một số thông tin trên trang web."],["He has little money at the end of the month.","Cuối tháng anh ấy còn rất ít tiền."]],"articles":[["I eat an apple every morning.","Mỗi sáng tôi ăn một quả táo."],["The moon is very bright tonight.","Tối nay mặt trăng rất sáng."],["She is a doctor at the hospital near my house.","Cô ấy là bác sĩ ở bệnh viện gần nhà tôi."],["I like music and films.","Tôi thích âm nhạc và phim ảnh."],["There is a cat in the kitchen. The cat is black.","Có một con mèo trong bếp. Con mèo màu đen."],["He goes to work by train.","Anh ấy đi làm bằng tàu hỏa."],["It takes an hour to get there.","Mất một tiếng để đến đó."],["Please close the door.","Làm ơn đóng cửa lại."]],"demonstratives":[["Are these your keys?","Đây có phải chìa khóa của bạn không?"],["That is a good idea.","Đó là một ý hay."],["This coffee is very strong.","Cà phê này rất đậm."],["Those are my friends from school.","Đó là những người bạn cùng trường của tôi."],["Is that your car over there?","Chiếc xe ở đằng kia có phải của bạn không?"],["These apples are very sweet.","Những quả táo này rất ngọt."],["I'm very busy this week.","Tuần này tôi rất bận."],["Yes, it is. This is my bag.","Đúng vậy. Đây là túi của tôi."]],"thereis":[["There is a bank on the corner.","Có một ngân hàng ở góc đường."],["There are some eggs in the fridge.","Có vài quả trứng trong tủ lạnh."],["Is there a toilet on this floor?","Có nhà vệ sinh ở tầng này không?"],["There isn't a lift in this building.","Tòa nhà này không có thang máy."],["How many rooms are there in your house?","Nhà bạn có bao nhiêu phòng?"],["There are a lot of motorbikes on the street.","Có rất nhiều xe máy trên đường."],["Are there any good restaurants near here?","Gần đây có nhà hàng nào ngon không?"],["There was a big storm last night.","Tối qua có một cơn bão lớn."]],"prepositions":[["My birthday is in May.","Sinh nhật tôi vào tháng Năm."],["We have a party on Saturday evening.","Chúng tôi có tiệc vào tối thứ Bảy."],["She is at the office now.","Bây giờ cô ấy đang ở văn phòng."],["The keys are in my bag.","Chìa khóa ở trong túi tôi."],["I often go to the cinema with my friends.","Tôi thường đi xem phim với bạn bè."],["He works from Monday to Friday.","Anh ấy làm việc từ thứ Hai đến thứ Sáu."],["This coffee is for my boss.","Ly cà phê này là cho sếp tôi."],["I wait for the bus at the bus stop.","Tôi chờ xe buýt ở trạm xe buýt."]],"howto-time":[["What time is it?","Mấy giờ rồi?"],["It's ten o'clock.","Bây giờ là mười giờ."],["It's twenty past four.","Bây giờ là bốn giờ hai mươi."],["What day is it today?","Hôm nay là thứ mấy?"],["It's Friday.","Hôm nay là thứ Sáu."],["I take a shower at half past six.","Tôi tắm lúc sáu giờ rưỡi."],["The film starts at a quarter past eight.","Phim bắt đầu lúc tám giờ mười lăm."],["On Sundays, I get up late.","Vào Chủ nhật, tôi dậy muộn."]],"howto-family":[["Do you have any brothers or sisters?","Bạn có anh chị em không?"],["I'm an only child.","Tôi là con một."],["How old is your daughter?","Con gái bạn bao nhiêu tuổi?"],["My grandfather is very tall and thin.","Ông tôi rất cao và gầy."],["My aunt has two sons.","Dì tôi có hai con trai."],["What does your husband do?","Chồng bạn làm nghề gì?"],["My sister looks like my mother.","Em gái tôi trông giống mẹ tôi."],["My best friend lives next door.","Bạn thân của tôi sống ngay nhà bên cạnh."]],"conjunctions":[["She likes cats, but her husband likes dogs.","Cô ấy thích mèo, nhưng chồng cô ấy thích chó."],["I'm tired, so I'm going to bed.","Tôi mệt nên tôi đi ngủ đây."],["Is your phone black or white?","Điện thoại của bạn màu đen hay trắng?"],["We stay at home because it is cold.","Chúng tôi ở nhà vì trời lạnh."],["My father cooks and my mother cleans.","Bố tôi nấu ăn còn mẹ tôi dọn dẹp."],["The shirt is nice, but it is expensive.","Cái áo đẹp, nhưng đắt."],["He is happy because he has a new job.","Anh ấy vui vì có công việc mới."],["You can call me or send me a message.","Bạn có thể gọi hoặc nhắn tin cho tôi."]],"modal-can":[["Can you speak Chinese?","Bạn có nói được tiếng Trung không?"],["My grandmother can't use a smartphone.","Bà tôi không biết dùng điện thoại thông minh."],["Could I use your pen, please?","Cho tôi mượn bút của bạn được không?"],["He could swim when he was four.","Anh ấy biết bơi khi mới bốn tuổi."],["You can park your car here.","Bạn có thể đỗ xe ở đây."],["I couldn't sleep last night.","Tối qua tôi không ngủ được."],["Can we pay by card?","Chúng tôi trả bằng thẻ được không?"],["Could you repeat that, please?","Bạn nhắc lại giúp tôi được không?"]],"howto-suggest":[["Let's have a coffee.","Mình đi uống cà phê đi."],["Shall we start now?","Chúng ta bắt đầu bây giờ nhé?"],["Why don't we go by train?","Sao chúng ta không đi bằng tàu hỏa?"],["How about watching a film tonight?","Tối nay xem phim thì sao?"],["What about eating out on Friday?","Thứ Sáu đi ăn ngoài thì thế nào?"],["Let's not wait for him.","Mình đừng chờ anh ấy nữa."],["That's a good idea!","Ý hay đấy!"],["Sorry, I can't. Maybe next week?","Xin lỗi, mình không đi được. Tuần sau nhé?"]],"possessive-s":[["My mother's cooking is the best.","Mẹ tôi nấu ăn ngon nhất."],["This is Lan's umbrella.","Đây là cái ô của Lan."],["The students' books are on the desk.","Sách của các học sinh ở trên bàn."],["My grandfather's house is in the countryside.","Nhà của ông tôi ở quê."],["Where is the men's toilet?","Nhà vệ sinh nam ở đâu?"],["I don't like the colour of the walls.","Tôi không thích màu của những bức tường."],["Is this your son's bike?","Đây có phải xe đạp của con trai bạn không?"],["The end of the film is very sad.","Đoạn kết của bộ phim rất buồn."]],"frequency":[["I usually drink tea in the afternoon.","Tôi thường uống trà vào buổi chiều."],["She is never late for work.","Cô ấy không bao giờ đi làm muộn."],["Do you often go swimming?","Bạn có hay đi bơi không?"],["We hardly ever eat fast food.","Chúng tôi hầu như không bao giờ ăn đồ ăn nhanh."],["He sometimes works on Saturdays.","Anh ấy thỉnh thoảng làm việc vào thứ Bảy."],["I clean the house once a week.","Tôi dọn nhà mỗi tuần một lần."],["My children are always hungry after school.","Con tôi lúc nào cũng đói sau giờ học."],["How often do you visit your grandparents?","Bạn có hay về thăm ông bà không?"]],"howto-restaurant":[["Do you have a table for four?","Còn bàn cho bốn người không?"],["Are you ready to order?","Anh/chị gọi món chưa ạ?"],["What do you recommend?","Anh/chị gợi ý món nào?"],["I'd like a bowl of beef noodle soup.","Cho tôi một tô phở bò."],["Can I have it without onions?","Cho tôi món đó không hành được không?"],["Anything to drink?","Anh/chị uống gì không ạ?"],["An iced coffee, please.","Cho tôi một ly cà phê đá."],["Could we have the bill, please?","Cho chúng tôi tính tiền nhé."]],"like-ing":[["Do you like swimming?","Bạn có thích bơi không?"],["She doesn't like driving at night.","Cô ấy không thích lái xe ban đêm."],["My father loves working in the garden.","Bố tôi rất thích làm vườn."],["I enjoy talking with my friends.","Tôi thích trò chuyện với bạn bè."],["They hate waiting in long lines.","Họ ghét phải xếp hàng dài."],["Does your son like drawing?","Con trai bạn có thích vẽ không?"],["We don't mind sharing a room.","Chúng tôi không ngại ở chung phòng."],["He likes playing chess with his grandfather.","Cậu ấy thích chơi cờ với ông."]],"havegot":[["I've got a new bike.","Tôi có một chiếc xe đạp mới."],["Have you got any brothers?","Bạn có anh em trai không?"],["She hasn't got much time today.","Hôm nay cô ấy không có nhiều thời gian."],["We've got a meeting at ten.","Chúng tôi có cuộc họp lúc mười giờ."],["Has your house got a garden?","Nhà bạn có vườn không?"],["He's got blue eyes and short hair.","Anh ấy có mắt xanh và tóc ngắn."],["They haven't got any children.","Họ không có con."],["I've got a bad cold.","Tôi bị cảm nặng."]],"howto-invite":[["Would you like to have dinner with us?","Bạn có muốn ăn tối với chúng tôi không?"],["Do you want to watch the match with me?","Bạn có muốn xem trận đấu với tôi không?"],["Are you free this evening?","Tối nay bạn có rảnh không?"],["Would you like some tea?","Bạn có muốn uống chút trà không?"],["Shall I open the window?","Tôi mở cửa sổ nhé?"],["Can I help you with the dishes?","Tôi giúp bạn rửa bát nhé?"],["Sure, I'd love to.","Chắc chắn rồi, tôi rất muốn."],["Thanks, but I've got other plans.","Cảm ơn, nhưng tôi có kế hoạch khác rồi."]],"howmuch-howadj":[["How many children have you got?","Bạn có mấy đứa con?"],["How much milk is there in the fridge?","Trong tủ lạnh còn bao nhiêu sữa?"],["How much are these shoes?","Đôi giày này bao nhiêu tiền?"],["How many languages do you speak?","Bạn nói được mấy thứ tiếng?"],["How expensive is the hotel?","Khách sạn đắt cỡ nào?"],["How deep is the river?","Con sông sâu bao nhiêu?"],["How much time do we have?","Chúng ta còn bao nhiêu thời gian?"],["How heavy is your suitcase?","Va li của bạn nặng bao nhiêu?"]],"howto-shop":[["Excuse me, do you sell phone chargers?","Xin lỗi, ở đây có bán sạc điện thoại không?"],["How much is this jacket?","Cái áo khoác này bao nhiêu tiền?"],["Do you have it in blue?","Cái này có màu xanh không?"],["It doesn't fit me.","Nó không vừa với tôi."],["Have you got a smaller size?","Có cỡ nhỏ hơn không?"],["Can I pay in cash?","Tôi trả tiền mặt được không?"],["Could I exchange this for a bigger one?","Tôi đổi cái này lấy cái lớn hơn được không?"],["Can you give me a discount?","Bạn bớt giá cho tôi được không?"]],"imperative":[["Close the door, please.","Làm ơn đóng cửa lại."],["Don't be late tomorrow.","Ngày mai đừng đến muộn nhé."],["Wash your hands before dinner.","Rửa tay trước khi ăn tối."],["Let's take a photo together.","Chúng ta chụp chung một tấm ảnh nhé."],["Don't park your car here.","Đừng đỗ xe ở đây."],["You should see a doctor.","Bạn nên đi khám bác sĩ."],["Should I bring an umbrella?","Tôi có nên mang ô không?"],["You shouldn't drink so much coffee.","Bạn không nên uống nhiều cà phê như vậy."]],"regular-ed":[["We walked to the park after dinner.","Chúng tôi đi bộ đến công viên sau bữa tối."],["She opened the window because it was hot.","Cô ấy mở cửa sổ vì trời nóng."],["I washed my car on Sunday.","Tôi rửa xe vào Chủ nhật."],["The film ended at eleven.","Bộ phim kết thúc lúc mười một giờ."],["He dropped his phone on the floor.","Anh ấy làm rơi điện thoại xuống sàn."],["Did you enjoy the party?","Bạn có thích bữa tiệc không?"],["They waited for the bus for half an hour.","Họ chờ xe buýt nửa tiếng."],["My sister cried when she watched the film.","Em gái tôi khóc khi xem bộ phim."]],"wh-questions":[["Where do you live?","Bạn sống ở đâu?"],["What time did you get up this morning?","Sáng nay bạn dậy lúc mấy giờ?"],["Why was she angry?","Sao cô ấy lại giận?"],["Where were you going when I saw you?","Bạn đang đi đâu khi tôi thấy bạn vậy?"],["Who can help me with this box?","Ai giúp tôi khiêng cái hộp này được không?"],["How often do you go to the gym?","Bạn đi tập gym bao lâu một lần?"],["How many people came to the meeting?","Có bao nhiêu người đến dự cuộc họp?"],["Who are you waiting for?","Bạn đang chờ ai vậy?"]],"howto-apologise":[["I'm so sorry about the mistake.","Tôi rất xin lỗi về lỗi đó."],["Sorry, I didn't mean to do that.","Xin lỗi, tôi không cố ý làm vậy."],["Sorry, I can't come because I am ill.","Xin lỗi, tôi không đến được vì tôi bị ốm."],["I'm afraid I can't help you today because I'm very busy.","Tôi e là hôm nay tôi không giúp bạn được vì tôi rất bận."],["Sorry, my phone was off.","Xin lỗi, điện thoại của tôi bị tắt."],["I'm sorry for the noise last night.","Tôi xin lỗi vì tiếng ồn tối qua."],["No problem at all.","Không sao đâu."],["It's all right. It wasn't your fault.","Không sao. Đó không phải lỗi của bạn."]],"adj-modifier":[["The test was quite easy.","Bài kiểm tra khá dễ."],["My grandmother is very old but really healthy.","Bà tôi đã rất già nhưng vẫn rất khỏe."],["This is a really beautiful beach.","Đây là một bãi biển rất đẹp."],["The room is a bit dark.","Căn phòng hơi tối."],["He is an extremely good driver.","Anh ấy là một tài xế cực kỳ giỏi."],["The water is very cold this morning.","Sáng nay nước rất lạnh."],["Her family is quite big.","Gia đình cô ấy khá đông."],["The new bridge is really long.","Cây cầu mới dài thật."]],"compare":[["My brother is older than me.","Anh tôi lớn tuổi hơn tôi."],["This book is more interesting than that one.","Cuốn sách này hay hơn cuốn kia."],["Hanoi is colder than Ho Chi Minh City in winter.","Vào mùa đông, Hà Nội lạnh hơn Thành phố Hồ Chí Minh."],["She is the most beautiful girl in the village.","Cô ấy là cô gái đẹp nhất làng."],["My car is not as fast as yours.","Xe của tôi không nhanh bằng xe của bạn."],["This is the worst day of my life.","Đây là ngày tệ nhất đời tôi."],["Is the train faster than the bus?","Tàu hỏa có nhanh hơn xe buýt không?"],["Her new flat is bigger than her old one.","Căn hộ mới của cô ấy rộng hơn căn cũ."]],"howto-directions":[["Excuse me, how do I get to the station?","Xin lỗi, làm sao để đến nhà ga?"],["Where is the nearest bus stop?","Trạm xe buýt gần nhất ở đâu?"],["Turn left at the end of the street.","Rẽ trái ở cuối đường."],["Take the first turning on the left.","Rẽ vào ngã rẽ đầu tiên bên trái."],["Go straight on until you see the church.","Đi thẳng cho đến khi bạn thấy nhà thờ."],["It is on your right, next to the bakery.","Nó ở bên phải bạn, cạnh tiệm bánh."],["Is it far from here?","Chỗ đó có xa đây không?"],["It is about ten minutes by bus.","Đi xe buýt mất khoảng mười phút."]],"prep-movement":[["The children ran out of the classroom.","Bọn trẻ chạy ra khỏi lớp học."],["Get on the bus at this stop.","Lên xe buýt ở trạm này."],["He walked down the hill slowly.","Anh ấy chậm rãi đi bộ xuống đồi."],["The dog jumped into the water.","Con chó nhảy xuống nước."],["We drove through the city centre.","Chúng tôi lái xe xuyên qua trung tâm thành phố."],["She swam across the river.","Cô ấy bơi qua sông."],["Walk along the beach and you will see the hotel.","Đi dọc bãi biển là bạn sẽ thấy khách sạn."],["A boy ran towards me and said hello.","Một cậu bé chạy về phía tôi và chào."]],"simple-vs-continuous":[["She drinks coffee every morning, but today she is drinking tea.","Sáng nào cô ấy cũng uống cà phê, nhưng hôm nay cô ấy đang uống trà."],["What do you do? — I'm a nurse.","Bạn làm nghề gì? — Tôi là y tá."],["What are you doing? — I'm cooking.","Bạn đang làm gì vậy? — Tôi đang nấu ăn."],["He doesn't usually work late, but he is working late this week.","Anh ấy thường không làm muộn, nhưng tuần này anh ấy đang làm muộn."],["I want a glass of water.","Tôi muốn một ly nước."],["Listen! Someone is singing next door.","Nghe kìa! Ai đó đang hát ở nhà bên."],["My father reads the newspaper every morning.","Bố tôi đọc báo mỗi sáng."],["We are not going out tonight because it is raining.","Tối nay chúng tôi không đi chơi vì trời đang mưa."]],"howto-phone":[["Hello, this is Minh from ABC Company.","Xin chào, tôi là Minh từ công ty ABC."],["I'm calling about my order.","Tôi gọi về đơn hàng của tôi."],["Could you tell me what time you open?","Cho tôi hỏi mấy giờ bên mình mở cửa ạ?"],["Could you tell me where the office is?","Cho tôi hỏi văn phòng ở đâu ạ?"],["Sorry, I can't hear you very well.","Xin lỗi, tôi nghe không rõ lắm."],["Can I leave a message?","Tôi để lại lời nhắn được không?"],["Could you ask him to call me back?","Nhờ anh ấy gọi lại cho tôi được không ạ?"],["Thank you. Goodbye.","Cảm ơn bạn. Tạm biệt."]],"verb-to-v":[["She wants to become a doctor.","Cô ấy muốn trở thành bác sĩ."],["I need to buy some food.","Tôi cần mua ít đồ ăn."],["He forgot to turn off the lights.","Anh ấy quên tắt đèn."],["We hope to see you again soon.","Chúng tôi hy vọng sớm gặp lại bạn."],["They are learning to cook Vietnamese food.","Họ đang học nấu món Việt."],["I would like to speak to the manager.","Tôi muốn nói chuyện với quản lý."],["My mother asked me to buy some eggs.","Mẹ nhờ tôi mua vài quả trứng."],["The teacher told us to be quiet.","Cô giáo bảo chúng tôi giữ trật tự."]],"howto-hotel":[["I booked a double room for two nights.","Tôi đã đặt một phòng đôi cho hai đêm."],["What time is breakfast?","Bữa sáng lúc mấy giờ?"],["Could you wake me up at six, please?","Sáu giờ gọi tôi dậy giúp được không ạ?"],["Could I have the Wi-Fi password, please?","Cho tôi xin mật khẩu Wi-Fi được không?"],["The TV in my room doesn't work.","TV trong phòng tôi bị hỏng."],["Could you clean my room, please?","Dọn phòng giúp tôi được không ạ?"],["What time do I have to check out?","Tôi phải trả phòng lúc mấy giờ?"],["Could I have the bill, please?","Cho tôi xin hóa đơn được không?"]],"adverb-manner":[["He drives very carefully.","Anh ấy lái xe rất cẩn thận."],["The children played happily in the garden.","Bọn trẻ chơi vui vẻ trong vườn."],["Please speak clearly.","Làm ơn nói rõ ràng."],["She closed the door angrily.","Cô ấy giận dữ đóng cửa lại."],["I can't run fast.","Tôi không chạy nhanh được."],["He answered the question correctly.","Anh ấy trả lời câu hỏi chính xác."],["The baby is sleeping peacefully.","Em bé đang ngủ yên bình."],["She did the test badly.","Cô ấy làm bài kiểm tra không tốt."]],"modal-more":[["I may be late tonight.","Tối nay tôi có thể về muộn."],["You must stop at a red light.","Bạn phải dừng lại khi đèn đỏ."],["He has to get up early for work.","Anh ấy phải dậy sớm để đi làm."],["Do we have to wear a uniform?","Chúng tôi có phải mặc đồng phục không?"],["You ought to call your mother.","Bạn nên gọi cho mẹ."],["She might not come to the party.","Cô ấy có thể sẽ không đến bữa tiệc."],["You don't have to bring anything.","Bạn không cần mang gì cả."],["Should I call him now?","Tôi có nên gọi anh ấy bây giờ không?"]],"cond-1":[["If you mix red and white, you get pink.","Trộn màu đỏ với màu trắng thì ra màu hồng."],["If I see him, I will give him your message.","Nếu tôi gặp anh ấy, tôi sẽ chuyển lời nhắn của bạn."],["If it is sunny tomorrow, we will go to the beach.","Nếu mai trời nắng, chúng ta sẽ đi biển."],["You will feel better if you sleep early.","Bạn sẽ thấy khỏe hơn nếu ngủ sớm."],["What will you do if you miss the train?","Bạn sẽ làm gì nếu lỡ chuyến tàu?"],["If she doesn't hurry, she will be late.","Nếu không nhanh lên, cô ấy sẽ bị muộn."],["Unless you take a map, you will get lost.","Nếu không mang bản đồ, bạn sẽ bị lạc."],["If you don't water plants, they die.","Nếu không tưới nước, cây sẽ chết."]],"too":[["The tea is too sweet for me to drink.","Trà ngọt quá, tôi không uống được."],["She is too short to reach the top shelf.","Cô ấy thấp quá không với tới kệ trên cùng."],["It is too cold to swim today.","Hôm nay lạnh quá không bơi được."],["He walks too slowly to catch the bus.","Anh ấy đi chậm quá nên không kịp xe buýt."],["My son is too young to go to school.","Con trai tôi còn nhỏ quá, chưa đi học được."],["This flat is too expensive for us to rent.","Căn hộ này đắt quá, chúng tôi không thuê nổi."],["I was too busy to call you yesterday.","Hôm qua tôi bận quá không gọi cho bạn được."],["The music is too loud for me to sleep.","Nhạc to quá tôi không ngủ được."]],"enough":[["He is tall enough to play basketball.","Anh ấy đủ cao để chơi bóng rổ."],["The water isn't clean enough to drink.","Nước không đủ sạch để uống."],["Do we have enough eggs to make a cake?","Chúng ta có đủ trứng để làm bánh không?"],["She didn't run fast enough to win.","Cô ấy chạy không đủ nhanh để thắng."],["The car is big enough for five people.","Chiếc xe đủ rộng cho năm người."],["I didn't sleep enough last night.","Tối qua tôi ngủ không đủ."],["Are you old enough to drive?","Bạn đủ tuổi lái xe chưa?"],["We don't have enough time to visit the museum.","Chúng ta không đủ thời gian để thăm bảo tàng."]],"ittakes":[["It takes me five minutes to make coffee.","Tôi pha cà phê mất năm phút."],["It took us three hours to drive to Vung Tau.","Chúng tôi lái xe đến Vũng Tàu mất ba tiếng."],["How long did it take you to do your homework?","Bạn làm bài tập mất bao lâu?"],["It will take a long time to build the new airport.","Xây sân bay mới sẽ mất nhiều thời gian."],["It takes her an hour to get ready in the morning.","Buổi sáng cô ấy mất một tiếng để chuẩn bị."],["It didn't take me long to find the hotel.","Tôi tìm khách sạn không mất nhiều thời gian."],["It took my father a week to paint the house.","Bố tôi sơn nhà mất một tuần."],["How long will it take to fix the car?","Sửa xe sẽ mất bao lâu?"]],"itsadj":[["It is fun to play with children.","Chơi với trẻ con thật vui."],["It is expensive to eat out every day.","Ăn ngoài mỗi ngày thì tốn kém."],["It was hard for him to find a job.","Anh ấy đã rất vất vả mới tìm được việc."],["It is not safe to swim here.","Bơi ở đây không an toàn."],["Is it easy to learn Vietnamese?","Học tiếng Việt có dễ không?"],["It is important for children to sleep well.","Ngủ ngon rất quan trọng đối với trẻ em."],["I find it difficult to remember new words.","Tôi thấy khó nhớ từ mới."],["She finds it easy to talk to strangers.","Cô ấy thấy dễ nói chuyện với người lạ."]],"pp-vs-past":[["I have seen this film twice.","Tôi đã xem bộ phim này hai lần."],["I saw it last week with my wife.","Tuần trước tôi xem phim đó với vợ."],["Have you finished your lunch yet?","Bạn ăn trưa xong chưa?"],["She hasn't been to Hue since 2019.","Cô ấy chưa đến Huế kể từ năm 2019."],["When did you start this job?","Bạn bắt đầu công việc này khi nào?"],["I have known him for twenty years.","Tôi đã quen anh ấy được hai mươi năm."],["We met at university in 2005.","Chúng tôi gặp nhau ở đại học năm 2005."],["He has just left. He left five minutes ago.","Anh ấy vừa đi. Anh ấy đi cách đây năm phút."]],"future-forms":[["I'm having dinner with my parents tonight.","Tối nay tôi ăn tối với bố mẹ."],["The plane lands at ten thirty.","Máy bay hạ cánh lúc mười giờ ba mươi."],["I'm not going to drive; I will take a taxi.","Tôi không định lái xe; tôi sẽ đi taxi."],["Maybe I will visit you next summer.","Có lẽ mùa hè tới tôi sẽ đến thăm bạn."],["She's going to study medicine at university.","Cô ấy định học y ở đại học."],["What time does the class start tomorrow?","Ngày mai lớp học bắt đầu lúc mấy giờ?"],["We're playing football after work on Friday.","Thứ Sáu sau giờ làm chúng tôi sẽ đá bóng."],["Be careful! You're going to drop the plates.","Cẩn thận! Bạn sắp làm rơi đĩa kìa."]],"time-clauses":[["I will tell him when I see him.","Tôi sẽ nói với anh ấy khi gặp anh ấy."],["Please call me as soon as you arrive at the airport.","Hãy gọi cho tôi ngay khi bạn đến sân bay."],["We will wait until the shop opens.","Chúng tôi sẽ đợi đến khi cửa hàng mở cửa."],["Before you go to bed, brush your teeth.","Trước khi đi ngủ, hãy đánh răng."],["After I finish work, I will go to the gym.","Sau khi làm xong, tôi sẽ đi tập gym."],["She won't leave until her husband comes home.","Cô ấy sẽ không đi cho đến khi chồng về."],["As soon as I have read the email, I will reply.","Ngay khi đọc xong email, tôi sẽ trả lời."],["When you have finished, you can go home.","Khi làm xong, bạn có thể về nhà."]],"modal-deduction":[["You must be hungry after work.","Chắc hẳn bạn đói sau giờ làm."],["That can't be true.","Chuyện đó không thể là thật được."],["She might be sleeping now.","Có thể bây giờ cô ấy đang ngủ."],["He must be very rich; he has three cars.","Chắc hẳn anh ấy rất giàu; anh ấy có ba chiếc xe."],["The phone is ringing. It might be my mother.","Điện thoại đang reo. Có thể là mẹ tôi."],["They can't be married; they only met last month.","Họ không thể là vợ chồng được; họ mới gặp nhau tháng trước."],["He must be working late tonight.","Chắc hẳn tối nay anh ấy đang làm muộn."],["You can't be serious!","Bạn nói đùa đấy chứ!"]],"obligation":[["You must wear a seat belt in the car.","Bạn phải thắt dây an toàn trong xe."],["We don't have to work tomorrow.","Ngày mai chúng tôi không phải làm việc."],["You mustn't touch the paintings.","Bạn không được chạm vào các bức tranh."],["Did you have to wait long at the bank?","Bạn có phải chờ lâu ở ngân hàng không?"],["She had to stay at home because she was ill.","Cô ấy phải ở nhà vì bị ốm."],["You will have to show your passport.","Bạn sẽ phải xuất trình hộ chiếu."],["Does he have to work on Sundays?","Anh ấy có phải làm việc vào Chủ nhật không?"],["We didn't have to pay for the drinks.","Chúng tôi không phải trả tiền đồ uống."]],"passive":[["The room is cleaned every day.","Căn phòng được dọn mỗi ngày."],["This song was written by a young singer.","Bài hát này được một ca sĩ trẻ sáng tác."],["The new bridge will be opened next month.","Cây cầu mới sẽ được khánh thành vào tháng tới."],["My bike was stolen last night.","Xe đạp của tôi bị lấy cắp tối qua."],["The meeting has been cancelled.","Cuộc họp đã bị hủy."],["Are these cakes made by hand?","Những chiếc bánh này được làm thủ công phải không?"],["The road is being repaired this week.","Con đường đang được sửa trong tuần này."],["Phones must be turned off during the exam.","Điện thoại phải được tắt trong giờ thi."]],"cond-2":[["If I were taller, I would play basketball.","Nếu tôi cao hơn, tôi sẽ chơi bóng rổ."],["If she had more free time, she would learn to cook.","Nếu có nhiều thời gian rảnh hơn, cô ấy sẽ học nấu ăn."],["I wouldn't do that if I were you.","Nếu tôi là bạn, tôi sẽ không làm vậy."],["If it weren't so expensive, I would buy it.","Nếu nó không đắt như vậy, tôi sẽ mua."],["Where would you live if you could live anywhere?","Bạn sẽ sống ở đâu nếu có thể sống bất cứ nơi nào?"],["If they didn't work so much, they would be less tired.","Nếu không làm việc nhiều như vậy, họ sẽ bớt mệt."],["He would help you if he were here.","Anh ấy sẽ giúp bạn nếu có mặt ở đây."],["If I had a dog, I would walk it every day.","Nếu tôi có một con chó, tôi sẽ dắt nó đi dạo mỗi ngày."]],"gerund-1":[["He stopped smoking last year.","Anh ấy bỏ hút thuốc năm ngoái."],["I want to visit Japan one day.","Tôi muốn một ngày nào đó được đến Nhật Bản."],["She is afraid of flying.","Cô ấy sợ đi máy bay."],["We plan to go camping next weekend.","Chúng tôi định đi cắm trại cuối tuần tới."],["He suggested going to the beach.","Anh ấy gợi ý đi biển."],["I'm looking forward to seeing you.","Tôi mong được gặp bạn."],["They agreed to help us.","Họ đồng ý giúp chúng tôi."],["She left without saying goodbye.","Cô ấy rời đi mà không nói lời tạm biệt."]],"relative-1":[["The girl who sits next to me is very funny.","Cô gái ngồi cạnh tôi rất vui tính."],["I lost the pen that you gave me.","Tôi làm mất cây bút mà bạn đưa tôi."],["Do you know a shop which sells cheap phones?","Bạn có biết cửa hàng nào bán điện thoại rẻ không?"],["The man whose dog bit me said sorry.","Người đàn ông có con chó cắn tôi đã xin lỗi."],["People who work at night need more sleep.","Những người làm việc ban đêm cần ngủ nhiều hơn."],["This is the photo that I took in Sa Pa.","Đây là tấm ảnh tôi chụp ở Sa Pa."],["The teacher who taught me English lives in Hue.","Thầy giáo dạy tôi tiếng Anh sống ở Huế."],["I need a bag which is big enough for my laptop.","Tôi cần một cái túi đủ lớn để đựng máy tính xách tay."]],"reported":[["He said he lived in Da Nang.","Anh ấy nói anh ấy sống ở Đà Nẵng."],["She told me she was learning Japanese.","Cô ấy kể với tôi là đang học tiếng Nhật."],["They said they couldn't come.","Họ nói họ không thể đến."],["He asked me if I was hungry.","Anh ấy hỏi tôi có đói không."],["She asked me why I was late.","Cô ấy hỏi tôi tại sao đến muộn."],["My boss told me to send the email.","Sếp bảo tôi gửi email."],["The doctor told him not to eat fried food.","Bác sĩ bảo ông ấy đừng ăn đồ chiên."],["He said he had seen the film before.","Anh ấy nói anh ấy đã xem bộ phim đó rồi."]],"tag":[["It isn't very far, is it?","Chỗ đó không xa lắm, phải không?"],["You have finished your work, haven't you?","Bạn đã làm xong việc rồi, phải không?"],["He can't speak French, can he?","Anh ấy không nói được tiếng Pháp, phải không?"],["They were at home last night, weren't they?","Tối qua họ ở nhà, phải không?"],["She lives near here, doesn't she?","Cô ấy sống gần đây, phải không?"],["I'm late, aren't I?","Tôi đến muộn, phải không?"],["You won't tell anyone, will you?","Bạn sẽ không kể với ai chứ?"],["The film was good, wasn't it?","Bộ phim hay nhỉ?"]],"quantifiers":[["How many people came to the party?","Có bao nhiêu người đến bữa tiệc?"],["There were plenty of seats on the bus.","Trên xe buýt có rất nhiều chỗ ngồi."],["I have a few minutes before the meeting.","Tôi có vài phút trước cuộc họp."],["Could I have a little sugar in my coffee?","Cho tôi một chút đường vào cà phê được không?"],["There is too much noise in this room.","Phòng này ồn quá."],["We don't have many vegetables left.","Chúng ta không còn nhiều rau."],["Little rain falls here in the dry season.","Vào mùa khô, ở đây rất ít mưa."],["All of my friends live in the city.","Tất cả bạn bè tôi đều sống ở thành phố."]],"indefinite":[["Somebody is knocking at the door.","Có ai đó đang gõ cửa."],["I don't know anybody here.","Tôi không quen ai ở đây."],["Is there anything I can do for you?","Tôi giúp gì được cho bạn không?"],["Everybody likes her.","Mọi người đều thích cô ấy."],["I can't find my glasses anywhere.","Tôi không tìm thấy kính ở đâu cả."],["There is nothing in the fridge.","Trong tủ lạnh không có gì cả."],["Did anyone call me?","Có ai gọi cho tôi không?"],["I want to live somewhere warm.","Tôi muốn sống ở một nơi nào đó ấm áp."]],"so-neither":[["I like Vietnamese food. — So do I.","Tôi thích món Việt. — Tôi cũng vậy."],["I can't swim. — Neither can I.","Tôi không biết bơi. — Tôi cũng không."],["She is a teacher. — So is her husband.","Cô ấy là giáo viên. — Chồng cô ấy cũng vậy."],["I haven't seen that film. — Neither have I.","Tôi chưa xem bộ phim đó. — Tôi cũng chưa."],["We went to the beach last weekend. — So did we.","Cuối tuần trước chúng tôi đi biển. — Chúng tôi cũng vậy."],["He isn't married. — Neither is his brother.","Anh ấy chưa kết hôn. — Anh trai anh ấy cũng chưa."],["I will be there at six. — So will I.","Tôi sẽ có mặt lúc sáu giờ. — Tôi cũng vậy."],["I don't like coffee. — Oh, I do.","Tôi không thích cà phê. — Ồ, tôi thì có."]],"phrasal":[["Please turn on the lights.","Làm ơn bật đèn lên."],["She grew up in a small village.","Cô ấy lớn lên ở một ngôi làng nhỏ."],["Can you look after my cat this weekend?","Cuối tuần này bạn trông con mèo giúp tôi được không?"],["I usually wake up at six.","Tôi thường thức dậy lúc sáu giờ."],["Don't give up! You can do it.","Đừng bỏ cuộc! Bạn làm được mà."],["Please fill in this form.","Vui lòng điền vào mẫu đơn này."],["The TV is too loud. Please turn it down.","TV to quá. Làm ơn vặn nhỏ lại."],["We set off early in the morning.","Chúng tôi khởi hành từ sáng sớm."]],"sothat":[["The room was so dark that I couldn't see anything.","Căn phòng tối đến mức tôi không thấy gì."],["She was so happy that she cried.","Cô ấy vui đến mức bật khóc."],["The test was so easy that everyone finished early.","Bài kiểm tra dễ đến mức ai cũng làm xong sớm."],["He drove so fast that he got a ticket.","Anh ấy lái nhanh đến mức bị phạt."],["The shoes were so expensive that I didn't buy them.","Đôi giày đắt đến mức tôi không mua."],["I was so hungry that I ate two bowls of rice.","Tôi đói đến mức ăn hai bát cơm."],["She sings so well that she won the contest.","Cô ấy hát hay đến mức đã thắng cuộc thi."],["The street is so noisy that I can't sleep.","Con phố ồn đến mức tôi không ngủ được."]],"suchthat":[["It was such a beautiful view that we took many photos.","Cảnh đẹp đến mức chúng tôi chụp rất nhiều ảnh."],["He is such a funny man that everyone laughs at his jokes.","Anh ấy vui tính đến mức ai cũng cười vì những câu đùa của anh ấy."],["It was such bad weather that the flight was cancelled.","Thời tiết tệ đến mức chuyến bay bị hủy."],["She is such a good cook that we always eat at her house.","Cô ấy nấu ăn giỏi đến mức chúng tôi luôn ăn ở nhà cô ấy."],["They are such lovely children that everyone loves them.","Bọn trẻ dễ thương đến mức ai cũng yêu quý."],["It was such an interesting book that I couldn't stop reading.","Cuốn sách hay đến mức tôi không thể ngừng đọc."],["It was such a cold night that we stayed by the fire.","Đêm lạnh đến mức chúng tôi ngồi cạnh đống lửa."],["He made such a big mistake that he lost his job.","Anh ấy mắc lỗi lớn đến mức bị mất việc."]],"makelet":[["My boss made me work late.","Sếp bắt tôi làm muộn."],["Let me pay for dinner tonight.","Để tôi trả tiền bữa tối nay."],["Could you help me find my keys?","Bạn giúp tôi tìm chìa khóa được không?"],["The cold weather made him feel ill.","Trời lạnh làm anh ấy bị ốm."],["My parents let me use their car.","Bố mẹ cho tôi dùng xe của họ."],["She helped her mother to cook dinner.","Cô ấy giúp mẹ nấu bữa tối."],["Don't make me wait too long.","Đừng bắt tôi chờ quá lâu."],["Let the children play outside for an hour.","Hãy để bọn trẻ chơi ngoài trời một tiếng."]],"asktell":[["My mother told me to wear a coat.","Mẹ bảo tôi mặc áo khoác."],["He asked his friend to lend him some money.","Anh ấy nhờ bạn cho mượn ít tiền."],["The police told the driver to stop.","Cảnh sát bảo tài xế dừng lại."],["She reminded me to buy some milk.","Cô ấy nhắc tôi mua sữa."],["The doctor advised me not to drink alcohol.","Bác sĩ khuyên tôi không uống rượu."],["I told my son not to play with fire.","Tôi bảo con trai đừng nghịch lửa."],["She wants me to go with her.","Cô ấy muốn tôi đi cùng."],["They asked me to take a photo of them.","Họ nhờ tôi chụp ảnh cho họ."]],"usedto":[["My father used to work in a factory.","Bố tôi từng làm việc trong một nhà máy."],["There used to be a cinema here.","Ở đây từng có một rạp chiếu phim."],["I didn't use to eat vegetables.","Trước đây tôi không ăn rau."],["She is used to living alone.","Cô ấy đã quen sống một mình."],["I can't get used to the cold weather.","Tôi không sao quen được với thời tiết lạnh."],["Did your grandmother use to sing to you?","Bà của bạn có từng hát cho bạn nghe không?"],["We are used to eating dinner late.","Chúng tôi quen ăn tối muộn."],["He used to have long hair.","Anh ấy từng để tóc dài."]],"hadbetter":[["You had better wear a coat; it's cold outside.","Bạn nên mặc áo khoác; ngoài trời lạnh đấy."],["We had better hurry, or we will miss the train.","Chúng ta nên nhanh lên, kẻo lỡ tàu."],["He had better not drive after drinking.","Anh ấy tốt nhất không nên lái xe sau khi uống rượu."],["I had better go to bed now.","Tôi nên đi ngủ bây giờ thì hơn."],["You had better not forget your passport.","Bạn tốt nhất đừng quên hộ chiếu."],["She had better tell her parents the truth.","Cô ấy nên nói thật với bố mẹ."],["We had better check the weather before we go.","Chúng ta nên xem thời tiết trước khi đi."],["You had better not be late for the interview.","Bạn tốt nhất đừng đến muộn buổi phỏng vấn."]],"spend":[["She spends an hour every morning doing exercise.","Mỗi sáng cô ấy dành một tiếng để tập thể dục."],["I spent all my money on clothes.","Tôi đã tiêu hết tiền vào quần áo."],["Don't waste your time worrying about it.","Đừng phí thời gian lo lắng về chuyện đó."],["They spent the afternoon swimming in the sea.","Họ dành cả buổi chiều bơi ở biển."],["How much time do you spend reading each day?","Mỗi ngày bạn dành bao nhiêu thời gian để đọc sách?"],["He wastes a lot of money on games.","Anh ấy lãng phí nhiều tiền vào game."],["My mother spends hours cooking for Tet.","Mẹ tôi dành hàng giờ nấu nướng cho Tết."],["We wasted the whole day looking for a hotel.","Chúng tôi phí cả ngày để tìm khách sạn."]],"howto-opinion":[["I think this phone is too expensive.","Tôi nghĩ chiếc điện thoại này đắt quá."],["In my view, we need more time.","Theo tôi, chúng ta cần thêm thời gian."],["What do you think about the new plan?","Bạn nghĩ sao về kế hoạch mới?"],["I agree with you up to a point.","Tôi đồng ý với bạn ở một mức độ nào đó."],["I don't think that's a good idea.","Tôi không nghĩ đó là ý hay."],["How do you feel about working at weekends?","Bạn thấy sao về chuyện làm việc cuối tuần?"],["Exactly! That's what I think too.","Chính xác! Tôi cũng nghĩ vậy."],["I'm sorry, but I see it differently.","Xin lỗi, nhưng tôi nhìn nhận khác."]],"cond-3":[["If I had seen you, I would have said hello.","Nếu tôi thấy bạn, tôi đã chào rồi."],["If he had been careful, he wouldn't have had the accident.","Nếu anh ấy cẩn thận thì đã không gặp tai nạn."],["We wouldn't have got lost if we had taken a map.","Nếu mang theo bản đồ, chúng tôi đã không bị lạc."],["If you had asked me, I would have helped you.","Nếu bạn nhờ, tôi đã giúp bạn rồi."],["If she hadn't missed the bus, she wouldn't have been late.","Nếu cô ấy không lỡ xe buýt thì đã không đến muộn."],["What would you have done if you had lost your passport?","Bạn sẽ làm gì nếu khi đó bị mất hộ chiếu?"],["If I had set an alarm, I wouldn't have overslept.","Nếu tôi đặt báo thức thì đã không ngủ quên."],["They would have won if they had played better.","Nếu chơi tốt hơn, họ đã thắng."]],"relative-2":[["My mother, who is a nurse, works at night.","Mẹ tôi, một y tá, làm ca đêm."],["Hanoi, which is the capital of Vietnam, has many lakes.","Hà Nội, thủ đô của Việt Nam, có nhiều hồ."],["My neighbour, whose son is a doctor, is very friendly.","Bác hàng xóm của tôi, có con trai là bác sĩ, rất thân thiện."],["The Mekong, which flows through six countries, is very long.","Sông Mê Kông, chảy qua sáu quốc gia, là một con sông rất dài."],["Mr Hai, who owns the café, is my uncle.","Ông Hai, chủ quán cà phê, là chú tôi."],["He forgot my birthday, which made me sad.","Anh ấy quên sinh nhật tôi, điều đó khiến tôi buồn."],["My car, which is ten years old, still runs well.","Chiếc xe của tôi đã mười năm tuổi mà vẫn chạy tốt."],["Lan, whose English is excellent, works as a guide.","Lan, người nói tiếng Anh rất giỏi, làm hướng dẫn viên."]],"gerund-2":[["I remember visiting this place as a child.","Tôi nhớ đã đến nơi này hồi nhỏ."],["Please remember to bring your passport.","Nhớ mang theo hộ chiếu nhé."],["I'll never forget seeing the sea for the first time.","Tôi sẽ không bao giờ quên lần đầu nhìn thấy biển."],["She forgot to buy bread on the way home.","Cô ấy quên mua bánh mì trên đường về."],["Try turning the computer off and on again.","Thử tắt máy tính rồi bật lại xem."],["I tried to call you, but your phone was off.","Tôi cố gọi cho bạn nhưng điện thoại bạn tắt máy."],["He stopped working at sixty.","Ông ấy nghỉ làm việc năm sáu mươi tuổi."],["On the way home, we stopped to have a coffee.","Trên đường về, chúng tôi dừng lại uống cà phê."]],"modal-perfect":[["He must have forgotten my number.","Chắc hẳn anh ấy đã quên số của tôi."],["She might have gone to the market.","Có thể cô ấy đã đi chợ."],["They can't have left yet; their car is still here.","Họ chưa thể đi được; xe họ vẫn còn đây."],["You should have told me earlier.","Lẽ ra bạn nên nói với tôi sớm hơn."],["I shouldn't have spent so much money.","Lẽ ra tôi không nên tiêu nhiều tiền như vậy."],["The lights are off; they must have gone to bed.","Đèn tắt rồi; chắc họ đã đi ngủ."],["He could have been hurt.","Anh ấy có thể đã bị thương."],["She can't have said that; she's always so polite.","Cô ấy không thể nào nói vậy được; cô ấy luôn rất lịch sự."]],"passive-report":[["It is said that this temple is a thousand years old.","Người ta nói ngôi chùa này đã có một nghìn năm tuổi."],["She is said to be the best doctor in the city.","Người ta nói cô ấy là bác sĩ giỏi nhất thành phố."],["It is thought that the price of rice will go up.","Người ta cho rằng giá gạo sẽ tăng."],["The thief is believed to have left the city.","Người ta tin rằng tên trộm đã rời khỏi thành phố."],["It is expected that the new road will open in May.","Người ta dự kiến con đường mới sẽ thông xe vào tháng Năm."],["He is known to be very generous.","Ông ấy được biết đến là người rất hào phóng."],["It was reported that the storm had damaged many houses.","Có tin rằng cơn bão đã làm hư hại nhiều ngôi nhà."],["The restaurant is said to serve the best pho in town.","Người ta nói nhà hàng này có món phở ngon nhất thành phố."]],"participle":[["Hearing the news, she started to cry.","Nghe tin, cô ấy bắt đầu khóc."],["The girl sitting by the window is my cousin.","Cô gái ngồi cạnh cửa sổ là em họ tôi."],["Made in Japan, this car is very reliable.","Được sản xuất tại Nhật, chiếc xe này rất bền."],["Having lost his keys, he couldn't get into the house.","Vì làm mất chìa khóa, anh ấy không vào nhà được."],["The photos taken at the wedding are beautiful.","Những tấm ảnh chụp ở đám cưới rất đẹp."],["Not having enough money, they decided to stay at home.","Vì không có đủ tiền, họ quyết định ở nhà."],["Students wanting to join the club should sign here.","Học sinh muốn tham gia câu lạc bộ nên ký tên ở đây."],["Tired after the long trip, we went straight to bed.","Mệt sau chuyến đi dài, chúng tôi đi ngủ ngay."]],"unless-provided":[["I won't go unless you come with me.","Tôi sẽ không đi trừ khi bạn đi cùng tôi."],["You can use my laptop as long as you are careful.","Bạn dùng máy tính của tôi cũng được, miễn là cẩn thận."],["Bring some water in case you get thirsty.","Mang theo nước phòng khi bạn khát."],["We will finish on time provided that nobody is ill.","Chúng ta sẽ xong đúng hạn với điều kiện không ai bị ốm."],["Unless you book now, there won't be any seats.","Nếu bạn không đặt ngay, sẽ không còn chỗ."],["Take my number in case you need help.","Cầm lấy số của tôi phòng khi bạn cần giúp đỡ."],["As long as you are happy, I am happy.","Miễn là bạn vui thì tôi cũng vui."],["He can come provided he brings his own food.","Anh ấy có thể đến với điều kiện tự mang đồ ăn."]],"prep-collocation":[["She is tired of waiting.","Cô ấy chán phải chờ đợi rồi."],["I'm not very good at remembering names.","Tôi không giỏi nhớ tên người lắm."],["He thanked me for helping him.","Anh ấy cảm ơn tôi vì đã giúp anh ấy."],["We are looking forward to meeting you.","Chúng tôi mong được gặp bạn."],["My son is crazy about football.","Con trai tôi mê bóng đá."],["They insisted on paying for dinner.","Họ nhất quyết trả tiền bữa tối."],["She is famous for her beautiful voice.","Cô ấy nổi tiếng với giọng hát hay."],["He is used to working with children.","Anh ấy quen làm việc với trẻ em."]],"havedone":[["I'm going to have my car washed tomorrow.","Ngày mai tôi sẽ đem xe đi rửa."],["She had her nails done for the wedding.","Cô ấy đi làm móng cho đám cưới."],["We got our roof repaired after the storm.","Chúng tôi cho sửa mái nhà sau cơn bão."],["Where did you get your phone fixed?","Bạn sửa điện thoại ở đâu vậy?"],["He had his wallet stolen at the market.","Anh ấy bị trộm ví ở chợ."],["I need to get my passport renewed.","Tôi cần đi gia hạn hộ chiếu."],["I had the mechanic check the brakes.","Tôi nhờ thợ máy kiểm tra phanh."],["She got her brother to carry the boxes.","Cô ấy nhờ em trai khiêng mấy cái hộp."]],"suggest":[["I suggest taking a break.","Tôi đề nghị nghỉ giải lao một chút."],["She suggested that we should go by train.","Cô ấy đề nghị chúng tôi nên đi tàu hỏa."],["He suggests starting the meeting at nine.","Anh ấy đề nghị bắt đầu cuộc họp lúc chín giờ."],["The doctor suggested that I drink more water.","Bác sĩ khuyên tôi uống nhiều nước hơn."],["What do you suggest doing this weekend?","Bạn gợi ý làm gì vào cuối tuần này?"],["My manager suggested that we hire more staff.","Quản lý của tôi đề nghị chúng tôi tuyển thêm nhân viên."],["I suggest that you call her first.","Tôi đề nghị bạn gọi cho cô ấy trước."],["Can you suggest a good book for beginners?","Bạn có thể gợi ý một cuốn sách hay cho người mới học không?"]],"prefer":[["I prefer summer to winter.","Tôi thích mùa hè hơn mùa đông."],["She prefers reading books to watching TV.","Cô ấy thích đọc sách hơn xem TV."],["I'd rather walk than take the bus.","Tôi thà đi bộ còn hơn đi xe buýt."],["Which do you prefer, tea or coffee?","Bạn thích cái nào hơn, trà hay cà phê?"],["He would rather not talk about it.","Anh ấy không muốn nói về chuyện đó."],["We prefer cooking at home to eating out.","Chúng tôi thích nấu ăn ở nhà hơn ăn ngoài."],["I'd rather have fish than chicken tonight.","Tối nay tôi thích ăn cá hơn ăn gà."],["My children prefer cats to dogs.","Bọn trẻ nhà tôi thích mèo hơn chó."]],"itstime":[["It's time to get up.","Đến giờ dậy rồi."],["It's time for lunch.","Đến giờ ăn trưa rồi."],["It's time you cleaned your room.","Đã đến lúc con dọn phòng rồi đấy."],["It's high time the government did something.","Đã đến lúc chính phủ phải làm gì đó."],["It's time for us to say goodbye.","Đã đến lúc chúng ta nói lời tạm biệt."],["It's time we bought a new car.","Đã đến lúc chúng ta mua xe mới rồi."],["It's high time you stopped smoking.","Đã đến lúc bạn phải bỏ thuốc rồi."],["It's time to go to school.","Đến giờ đi học rồi."]],"although":[["Although the test was hard, she passed.","Mặc dù bài thi khó, cô ấy vẫn đậu."],["Despite the cold, the children played outside.","Mặc dù trời lạnh, bọn trẻ vẫn chơi ngoài trời."],["Even though he is rich, he never buys expensive things.","Mặc dù giàu có, anh ấy không bao giờ mua đồ đắt tiền."],["In spite of being ill, she went to the meeting.","Mặc dù bị ốm, cô ấy vẫn đi họp."],["Though it was late, the shop was still open.","Dù đã muộn, cửa hàng vẫn mở."],["Despite having little money, they are happy.","Mặc dù có ít tiền, họ vẫn hạnh phúc."],["Although I set an alarm, I woke up late.","Mặc dù đã đặt báo thức, tôi vẫn dậy muộn."],["In spite of the bad weather, the flight left on time.","Mặc dù thời tiết xấu, chuyến bay vẫn cất cánh đúng giờ."]],"paired":[["Both Lan and her husband are doctors.","Cả Lan và chồng cô ấy đều là bác sĩ."],["He is not only smart but also hard-working.","Anh ấy không chỉ thông minh mà còn chăm chỉ."],["Neither my sister nor I can cook well.","Cả chị tôi lẫn tôi đều không nấu ăn giỏi."],["You can either stay here or come with us.","Bạn có thể ở lại đây hoặc đi cùng chúng tôi."],["The room was both small and dark.","Căn phòng vừa nhỏ vừa tối."],["She not only cooked dinner but also washed the dishes.","Cô ấy không chỉ nấu bữa tối mà còn rửa bát."],["Neither the TV nor the radio works.","Cả TV lẫn radio đều không hoạt động."],["We can either take a taxi or walk.","Chúng ta có thể đi taxi hoặc đi bộ."]],"prevent":[["The storm prevented the boats from leaving.","Cơn bão khiến tàu thuyền không thể rời bến."],["My mother stopped me from eating too many sweets.","Mẹ ngăn tôi ăn quá nhiều kẹo."],["The cold kept us from going swimming.","Cái lạnh khiến chúng tôi không đi bơi được."],["This medicine prevents you from getting sick.","Loại thuốc này giúp bạn không bị ốm."],["The fence stops the cows from going onto the road.","Hàng rào ngăn bò đi ra đường."],["Nothing could stop him from becoming a singer.","Không gì có thể ngăn anh ấy trở thành ca sĩ."],["A headache prevented her from finishing the test.","Cơn đau đầu khiến cô ấy không làm xong bài kiểm tra."],["Please keep the children from touching the oven.","Làm ơn đừng để bọn trẻ chạm vào lò nướng."]],"howto-email":[["Dear Ms Lan, thank you for your quick reply.","Kính gửi chị Lan, cảm ơn chị đã trả lời nhanh."],["I am writing to confirm our meeting on Monday.","Tôi viết thư này để xác nhận cuộc họp của chúng ta vào thứ Hai."],["I would like to apply for the position of sales assistant.","Tôi muốn ứng tuyển vào vị trí trợ lý bán hàng."],["Please let me know if you have any questions.","Vui lòng cho tôi biết nếu anh/chị có câu hỏi nào."],["I am sorry for any trouble this may cause.","Xin lỗi vì sự bất tiện này."],["Best wishes, Hiep.","Thân mến, Hiệp."],["Hi Mai, how are things with you?","Chào Mai, dạo này bạn thế nào?"],["Talk soon!","Nói chuyện sau nhé!"]],"wish":[["I wish I were taller.","Ước gì tôi cao hơn."],["She wishes she had a bigger house.","Cô ấy ước có một ngôi nhà lớn hơn."],["I wish I had gone to the party.","Ước gì tôi đã đi dự tiệc."],["If only I could fly.","Giá mà tôi có thể bay."],["I wish you would stop talking.","Ước gì bạn thôi nói đi."],["He wishes he hadn't sold his car.","Anh ấy ước gì đã không bán chiếc xe."],["If only it weren't so hot today.","Giá mà hôm nay trời không nóng như vậy."],["I wish I didn't have to work tomorrow.","Ước gì ngày mai tôi không phải đi làm."]],"inversion":[["Never have I eaten such delicious food.","Chưa bao giờ tôi được ăn món ngon như vậy."],["Rarely do we see such talent.","Hiếm khi chúng ta thấy tài năng như vậy."],["Not until midnight did he come home.","Mãi đến nửa đêm anh ấy mới về nhà."],["Only when I lost my job did I understand the value of money.","Chỉ khi mất việc tôi mới hiểu giá trị của đồng tiền."],["Little did she know what was waiting for her.","Cô ấy đâu biết điều gì đang chờ mình."],["Should you have any questions, please contact us.","Nếu anh/chị có câu hỏi nào, vui lòng liên hệ chúng tôi."],["Were I in your position, I would accept the offer.","Nếu tôi ở vị trí của bạn, tôi sẽ nhận lời."],["Not only is she beautiful, but she is also very clever.","Cô ấy không những xinh đẹp mà còn rất thông minh."]],"mixedcond":[["If I had gone to bed earlier, I wouldn't feel so tired now.","Nếu tối qua tôi đi ngủ sớm hơn, giờ tôi đã không mệt như vậy."],["If she weren't afraid of flying, she would have visited us.","Nếu cô ấy không sợ đi máy bay, cô ấy đã đến thăm chúng tôi rồi."],["If we had bought that land, we would be rich now.","Nếu chúng tôi mua mảnh đất đó, giờ chúng tôi đã giàu."],["If he were more organised, he wouldn't have missed the deadline.","Nếu anh ấy ngăn nắp hơn, anh ấy đã không trễ hạn."],["If I hadn't met my wife, I would still live in Hanoi.","Nếu không gặp vợ tôi thì giờ tôi vẫn sống ở Hà Nội."],["If you had listened to me, you wouldn't be in trouble now.","Nếu bạn nghe lời tôi thì giờ đã không gặp rắc rối."],["If I didn't love her, I wouldn't have married her.","Nếu không yêu cô ấy thì tôi đã không cưới cô ấy."],["If they had fixed the roof, the house wouldn't be wet now.","Nếu họ sửa mái nhà, giờ ngôi nhà đã không bị ướt."]],"cleft":[["It was Nam who broke the window.","Chính Nam là người làm vỡ cửa sổ."],["It is the price that worries me.","Chính giá cả là điều khiến tôi lo."],["What I like about her is her honesty.","Điều tôi thích ở cô ấy là sự trung thực."],["What he said made me angry.","Những gì anh ấy nói làm tôi tức giận."],["All you need to do is sign here.","Bạn chỉ cần ký vào đây là xong."],["It was in Hue that I met my wife.","Chính ở Huế tôi đã gặp vợ mình."],["The reason why he was late is that his car broke down.","Lý do anh ấy đến muộn là xe anh ấy bị hỏng."],["What we need is more time.","Điều chúng ta cần là thêm thời gian."]],"themore":[["The more you eat, the fatter you get.","Càng ăn nhiều, bạn càng béo."],["The faster you drive, the more dangerous it is.","Lái xe càng nhanh càng nguy hiểm."],["The more money he earns, the more he spends.","Anh ấy càng kiếm được nhiều tiền thì càng tiêu nhiều."],["The less you sleep, the more tired you feel.","Càng ngủ ít, bạn càng thấy mệt."],["The bigger the city, the worse the traffic.","Thành phố càng lớn, giao thông càng tệ."],["The more I know him, the more I like him.","Càng quen anh ấy, tôi càng quý anh ấy."],["The higher we climbed, the colder it got.","Chúng tôi càng leo cao, trời càng lạnh."],["The more, the merrier.","Càng đông càng vui."]],"subjunctive":[["The teacher insisted that every student be on time.","Giáo viên yêu cầu mọi học sinh phải đúng giờ."],["It is necessary that he see a doctor.","Anh ấy cần phải đi khám bác sĩ."],["I recommend that she take the morning train.","Tôi khuyên cô ấy nên đi chuyến tàu buổi sáng."],["The boss demanded that the report be finished today.","Sếp yêu cầu báo cáo phải hoàn thành trong hôm nay."],["It is essential that you not miss the first class.","Điều cần thiết là bạn không được bỏ lỡ buổi học đầu tiên."],["They suggested that the party be held outdoors.","Họ đề nghị tổ chức bữa tiệc ngoài trời."],["It is important that everyone know the rules.","Điều quan trọng là mọi người đều biết các quy định."],["My doctor advised me to rest for a week.","Bác sĩ khuyên tôi nghỉ ngơi một tuần."]],"relative-advanced":[["This is the company for which I have worked for ten years.","Đây là công ty tôi đã làm việc mười năm nay."],["The man to whom you spoke is my boss.","Người đàn ông bạn vừa nói chuyện là sếp tôi."],["She has two sons, both of whom are engineers.","Bà ấy có hai con trai, cả hai đều là kỹ sư."],["I read five reports, none of which were useful.","Tôi đọc năm bản báo cáo, không bản nào hữu ích."],["He passed the exam, which made his parents very proud.","Anh ấy đậu kỳ thi, điều đó khiến bố mẹ anh ấy rất tự hào."],["The town in which I grew up has changed a lot.","Thị trấn nơi tôi lớn lên đã thay đổi nhiều."],["We met many people, some of whom became our friends.","Chúng tôi gặp nhiều người, một số đã trở thành bạn bè."],["The chair on which she was sitting was broken.","Cái ghế cô ấy đang ngồi bị gãy."]],"whatever":[["Whatever you do, don't tell her.","Dù bạn làm gì, đừng nói với cô ấy."],["However busy you are, you should rest.","Dù bận đến đâu, bạn cũng nên nghỉ ngơi."],["No matter where you live, you can learn online.","Dù sống ở đâu, bạn cũng có thể học trực tuyến."],["Whoever wins, it will be a good game.","Dù ai thắng, đó cũng sẽ là một trận đấu hay."],["Come whenever you like.","Bạn thích đến lúc nào cũng được."],["No matter how hard it is, don't give up.","Dù khó đến đâu, đừng bỏ cuộc."],["You can sit wherever you want.","Bạn muốn ngồi đâu cũng được."],["However much he eats, he never gets fat.","Dù ăn bao nhiêu, anh ấy cũng không bao giờ béo."]],"emphasis":[["I did tell you about the meeting.","Tôi đã nói với bạn về cuộc họp rồi mà."],["She does work very hard.","Cô ấy thực sự làm việc rất chăm chỉ."],["Do be careful on the road.","Nhớ cẩn thận trên đường nhé."],["He really does love his job.","Anh ấy thực sự yêu công việc của mình."],["So beautiful was the view that we stayed for hours.","Cảnh đẹp đến mức chúng tôi ở lại hàng giờ."],["What's more, the hotel is right next to the beach.","Hơn nữa, khách sạn nằm ngay cạnh bãi biển."],["I have no idea at all.","Tôi hoàn toàn không biết."],["This is the very book I was looking for.","Đây chính là cuốn sách tôi đang tìm."]],"discourse":[["The hotel was expensive. However, the rooms were small.","Khách sạn đắt. Tuy nhiên, phòng lại nhỏ."],["He was ill; therefore, he stayed at home.","Anh ấy bị ốm; vì vậy, anh ấy ở nhà."],["The job is well paid. Moreover, it is close to my home.","Công việc lương cao. Hơn nữa, lại gần nhà tôi."],["I like the city, whereas my wife prefers the countryside.","Tôi thích thành phố, trong khi vợ tôi thích nông thôn hơn."],["It was raining. Nevertheless, we went for a walk.","Trời mưa. Dù vậy, chúng tôi vẫn đi dạo."],["Many fruits, for example mangoes, grow well here.","Nhiều loại trái cây, ví dụ như xoài, rất hợp trồng ở đây."],["Furthermore, the course is free for students.","Ngoài ra, khóa học miễn phí cho sinh viên."],["In conclusion, we need to save more energy.","Tóm lại, chúng ta cần tiết kiệm năng lượng hơn."]]};
const EX_MARK = {"regular-ed": ["\\b\\w{2,}ed\\b", "động từ có quy tắc thêm -ed", 0], "present-simple": ["\\b(do|does)\\b|\\b(he|she|it)\\s+\\w+s\\b|\\b(i|you|we|they)\\s+(?!am\\b|are\\b|was\\b|were\\b|will\\b|had\\b|would\\b)\\w+|\\b(every|always|usually|often|never|sometimes)\\b", "thì hiện tại đơn", 0], "present-continuous": ["\\b(am|is|are)\\s+(not\\s+)?\\w+ing\\b", "am / is / are + V-ing", 0], "past-be": ["\\b(was|were)\\b", "was / were", 0], "thereis": ["\\bthere\\s+(is|are|was|were)\\b|\\b(is|are|was|were)\\s+there\\b", "there is / there are", 0], "demonstratives": ["\\b(this|that|these|those)\\b", "this / that / these / those", 0], "articles": ["\\b(a|an|the)\\b", "mạo từ a / an / the", 0], "nouns": ["\\b(some|any|much|many|a lot of|a little|a few|bottles? of|cups? of|glass(es)? of|pieces? of|kilos? of|bags? of)\\b|\\b(little|few|advice|information|furniture|news|luggage|money|water)\\b", "danh từ đếm được / không đếm được (some, any, much, many…)", 0], "pronouns": ["\\b(me|him|her|us|them|my|your|his|our|their|mine|yours|hers|ours|theirs)\\b", "đại từ (me, him, my, mine…)", 0], "prepositions": ["\\b(in|on|at|with|to|for|from)\\b", "giới từ in / on / at / with / to / for / from", 0], "modal-can": ["\\b(can|could|cannot)\\b", "can / could", 0], "past-simple": ["\\b(\\w{2,}ed|went|came|saw|bought|ate|took|made|had|did|got|was|were|met|left|told|said|gave|found|wrote|ran|drank|slept|spent|sold|sent|felt|kept|began|became|thought|taught|caught|brought|flew|drove|rode|swam|sang|won|lost|paid|heard|knew|understood|stood|sat|chose|broke|forgot|built)\\b", "động từ ở quá khứ đơn", 0], "past-continuous": ["\\b(was|were)\\s+(\\w+\\s+)?(not\\s+)?\\w+ing\\b", "was / were + V-ing", 0], "going-to": ["\\b(am|is|are|was|were)\\s+(\\w+\\s+)?(not\\s+)?going to\\b", "be going to + V", 0], "future-simple": ["\\bwill\\b", "will + V", 0], "present-perfect": ["\\b(have|has)\\s+(not\\s+)?(never\\s+|ever\\s+|just\\s+|already\\s+|recently\\s+)?(\\w{2,}ed|been|gone|done|seen|eaten|had|made|taken|written|bought|met|known|lost|found|read|heard|left|got|gotten|become|come|given|told|said|spent|sent|won|chosen|broken|forgotten|begun|drunk|flown|run|sung|swum|thought|taught|caught|brought|built|kept|paid|sold|understood|driven|ridden|fallen|grown|worn)\\b", "have / has + V3", 0], "compare": ["\\b\\w+er than\\b|\\b(more|less) \\w+ than\\b|\\bas \\w+ as\\b|\\bthe \\w+est\\b|\\bthe most\\b|\\b(better|worse) than\\b|\\bthe (best|worst)\\b", "so sánh (-er than, more … than, as … as, the most…)", 0], "modal-more": ["\\b(may|might|must|should|have to|has to|ought to|need to)\\b", "may / might / must / should…", 0], "cond-1": ["\\bif\\b", "If + hiện tại, … will / hiện tại", 0], "too": ["\\btoo\\s+\\w+\\s+(for\\s+\\w+\\s+)?to\\b", "too + tính từ + to V", 0], "enough": ["\\benough\\b", "… enough to V", 0], "ittakes": ["\\bit\\s+(takes|took|will take|take|does not take|did not take|usually takes|only takes)\\b", "It takes … to V", 0], "itsadj": ["\\bit\\s+(is|was|will be)\\s+(not\\s+)?(very\\s+|really\\s+|so\\s+|quite\\s+)?\\w+\\s+(for\\s+\\w+\\s+)?to\\b", "It's + tính từ + to V", 0], "present-perfect-continuous": ["\\b(have|has)\\s+(not\\s+)?been\\s+\\w+ing\\b", "have / has been + V-ing", 0], "past-perfect": ["\\bhad\\s+(not\\s+)?(already\\s+|just\\s+|never\\s+)?(\\w{2,}ed|\\w+en|been|gone|done|seen|left|lost|met|told|said|spent|bought|made|had|found|read|heard|sent|kept|thought|begun|flown|run|won|paid)\\b", "had + V3", 0], "future-continuous": ["\\bwill\\s+(not\\s+)?be\\s+\\w+ing\\b", "will be + V-ing", 0], "stative": ["\\b(know|knows|believe|believes|think|thinks|like|likes|love|loves|hate|hates|want|wants|need|needs|own|owns|belong|belongs|seem|seems|understand|understands|prefer|prefers|smell|smells|taste|tastes|remember|mean|means)\\b|\\b(thinking|having|seeing|tasting|smelling)\\b", "động từ trạng thái (know, like, want, believe…)", 0], "passive": ["\\b(am|is|are|was|were|be|been|being)\\s+(not\\s+)?(\\w{2,}ed|built|made|written|grown|sold|given|taken|seen|done|known|found|told|eaten|spoken|stolen|broken|chosen|held|kept|paid|sent|taught|thrown|worn|cut|put|set|hit|shut)\\b", "câu bị động be + V3", 0], "cond-2": ["\\bif\\b[^.]*\\b(would|could|might)\\b|\\b(would|could|might)\\b[^.]*\\bif\\b", "If + quá khứ, … would + V", 0], "gerund-1": ["\\b(enjoy|enjoys|enjoyed|avoid|avoids|avoided|finish|finished|mind|keep|kept|stop|stopped|like|likes|love|loves|hate|want|wants|wanted|decide|decided|hope|hoped|plan|planned|need|needs|would like|agree|agreed|refuse|refused|learn|learned|try|tried|start|started|began|begin|practise|practice|suggest|suggested|forget|forgot|remember)\\s+(not\\s+)?(to\\s+\\w+|\\w+ing)\\b|\\b(at|for|of|about|in|without|before|after|by)\\s+\\w+ing\\b|\\b(promise|promised|offer|offered|seem|seemed|manage|managed|afford|expect|expected)\\s+to\\b", "V-ing hoặc to V sau động từ", 0], "relative-1": ["\\b(who|which|that|whose|where)\\b", "mệnh đề quan hệ who / which / that", 0], "reported": ["\\b(said|told|asked|explained|replied|answered|says|tells|mentioned|promised|admitted)\\b", "câu tường thuật (said, told, asked…)", 0], "tag": [",\\s*(is|are|was|were|do|does|did|have|has|had|will|would|can|could|should|shall|am)(\\s+not)?\\s+(i|you|he|she|it|we|they|there)\\s*\\?", "câu hỏi đuôi (…, isn't it?)", 0], "sothat": ["\\bso\\s+(much\\s+|many\\s+|few\\s+|little\\s+)?\\w+(\\s+\\w+)?\\s+that\\b", "so + tính từ / trạng từ + that", 0], "suchthat": ["\\bsuch\\s+(a\\s+|an\\s+)?(\\w+\\s+){1,3}that\\b", "such (a / an) + tính từ + danh từ + that", 0], "makelet": ["\\b(make|makes|made|let|lets|help|helps|helped)\\s+(me|you|him|her|us|them|everyone|everybody|my|the|our|his|their|people)\\b", "make / let / help + người + V", 0], "asktell": ["\\b(ask|asks|asked|tell|tells|told|advise|advised|advises|remind|reminded|want|wanted|encourage|encouraged|invite|invited|warn|warned)\\s+\\w+(\\s+\\w+)?\\s+(not\\s+)?to\\s+\\w+", "ask / tell / advise + người + to V", 0], "usedto": ["\\bused to\\b", "used to / be used to", 0], "hadbetter": ["\\bhad better\\b|'d better\\b", "had better + V", 0], "spend": ["\\b(spend|spends|spent|spending|waste|wastes|wasted|wasting)\\b[^.]*\\b\\w+ing\\b", "spend / waste + thời gian + V-ing", 0], "past-perfect-continuous": ["\\bhad\\s+(not\\s+)?been\\s+\\w+ing\\b", "had been + V-ing", 0], "future-perfect": ["\\bwill\\s+(not\\s+)?have\\s+(\\w{2,}ed|\\w+en|been|done|made|had|left|met|paid|sold|built|read|found|spent|sent|got|bought|won|lost|taught)\\b", "will have + V3", 0], "future-in-past": ["\\b(was|were)\\s+(not\\s+)?going to\\b|\\bwould\\b", "was going to / would", 0], "cond-3": ["\\b(would|could|might)\\s+(not\\s+)?have\\s+\\w+", "If + had V3, … would have V3", 0], "relative-2": [",\\s*(who|which|whose|where|whom)\\b", "mệnh đề quan hệ có dấu phẩy (, who / , which)", 0], "gerund-2": ["\\b(stop|stopped|stops|remember|remembered|forget|forgot|try|tried|regret|regretted|go on|went on|mean|meant)\\s+(not\\s+)?(to\\s+\\w+|\\w+ing)\\b", "stop / remember / forget / try + V-ing hoặc to V", 0], "havedone": ["\\b(have|has|had|get|got|gets|having|getting)\\s+(my|his|her|our|their|your|the|a|an|its)\\s+(\\w+\\s+){1,2}(\\w{2,}ed|cut|done|checked|fixed|repaired|made|built|cleaned|painted|delivered|taken|sent|washed|serviced|printed|installed|dyed|styled|replaced)\\b", "have / get + vật + V3", 0], "suggest": ["\\b(suggest|suggests|suggested|recommend|recommends|recommended)\\b", "suggest + V-ing / that…", 0], "prefer": ["\\b(prefer|prefers|preferred|would rather)\\b|'d rather\\b", "prefer … to … / would rather … than", 0], "itstime": ["\\bit\\s+is\\s+(high\\s+|about\\s+)?time\\b", "It's time…", 0], "although": ["\\b(although|though|even though|despite|in spite of)\\b", "although / despite", 0], "paired": ["\\bboth\\b[^.]*\\band\\b|\\bnot only\\b[^.]*\\bbut\\b|\\beither\\b[^.]*\\bor\\b|\\bneither\\b[^.]*\\bnor\\b", "both … and / not only … but also", 0], "prevent": ["\\b(prevent|prevents|prevented|stop|stops|stopped|keep|kept|discourage|discouraged|ban|banned)\\s+(\\w+\\s+){1,3}from\\s+\\w+ing\\b", "prevent / stop + người + from + V-ing", 0], "future-perfect-continuous": ["\\bwill\\s+have\\s+been\\s+\\w+ing\\b", "will have been + V-ing", 0], "polite-tenses": ["\\b(i was wondering|we were wondering|i was hoping|we were hoping|i wondered|i had hoped|we had hoped|i wanted to ask|i was going to ask|would you mind|could you possibly)\\b|\\bdid you (want|need|wish)\\b|\\bi (wanted|needed|thought) \\b|\\b(would|could) you\\b", "dùng thì để nói lịch sự (I was wondering…)", 0], "inversion-perfect": ["\\b(hardly|scarcely|barely)\\s+had\\b|\\bno sooner had\\b", "Hardly had … when / No sooner had … than", 0], "wish": ["\\b(wish|wishes|wished|if only)\\b", "wish / if only", 0], "inversion": ["(^\\s*|[.!?]\\s*)(never|rarely|seldom|little|not only|hardly|no sooner|only then|only when|only after|under no circumstances|not until|at no time|nowhere)\\b[^.]*?\\b(have|has|had|do|does|did|is|are|was|were|will|can|could|would|should)\\s+(i|you|he|she|it|we|they|the|this|my)\\b", "đảo ngữ (Never have I…)", 0], "mixedcond": ["\\bif\\b[^.]*\\b(would|could|might)\\b|\\b(would|could|might)\\b[^.]*\\bif\\b", "câu điều kiện hỗn hợp (If + had V3, … would + V)", 0], "cleft": ["\\bit\\s+(is|was)\\s+(\\w+\\s+){1,4}(who|that)\\b|\\bwhat\\s+(\\w+\\s+){1,4}(is|was)\\b|\\bthe reason (why|that)\\b|\\ball\\s+(\\w+\\s+){1,3}(is|was)\\b", "câu chẻ (It is … who / that…)", 0], "themore": ["\\bthe\\s+(more|less|\\w+er)\\b[^.]*\\bthe\\s+(more|less|\\w+er)\\b", "The + so sánh hơn …, the + so sánh hơn", 0], "possessive-s": ["\\b\\w+'s\\b|\\b\\w+s'(\\s|$)", "sở hữu cách 's / s'", 0], "frequency": ["\\b(always|usually|often|sometimes|rarely|seldom|never|hardly ever|occasionally|normally|generally|frequently)\\b", "trạng từ tần suất (always, usually…)", 0], "like-ing": ["\\b(like|likes|liked|love|loves|loved|hate|hates|hated|enjoy|enjoys|enjoyed|prefer|prefers|cannot stand|do not mind|does not mind)\\s+\\w+ing\\b", "like / love / hate + V-ing", 0], "havegot": ["\\b\\w+'s got\\b|\\b(have|has)\\s+(\\w+\\s+)?(not\\s+)?got\\b", "have got / has got", 0], "howmuch-howadj": ["\\bhow\\s+\\w+", "how much / how many / how + tính từ", 0], "imperative": ["(^\\s*|[.!?]\\s*)(please\\s+)?(do not\\s+|never\\s+)?(open|close|turn|take|go|come|sit|stand|wait|look|listen|be|have|try|call|send|give|bring|put|keep|stop|remember|drive|read|write|tell|ask|let|make|help|eat|drink|wear|check|use|follow|meet|speak|walk|switch|lock|wash|clean|finish|start)\\b|(^\\s*|[.!?,]\\s*)(please\\s+)?(do not|never)\\s+\\w+", "câu mệnh lệnh (động từ đứng đầu câu)", 1], "wh-questions": ["\\b(what|where|when|why|who|whom|whose|which|how)\\b[^.?!]*\\?", "câu hỏi Wh-", 0], "adj-modifier": ["\\b(very|really|quite|rather|pretty|extremely|too|a bit|a little|fairly|incredibly|absolutely|totally|completely|so)\\s+\\w+", "từ tăng giảm mức độ + tính từ", 0], "prep-movement": ["\\b(into|out of|onto|across|along|through|up|down|past|towards|toward|over|around|off)\\b", "giới từ chỉ chuyển động (into, across, through…)", 0], "simple-vs-continuous": ["\\b(am|is|are)\\s+(not\\s+)?\\w+ing\\b|\\b(every|always|usually|often|never|sometimes)\\b|\\b(he|she|it)\\s+\\w+s\\b|\\b(know|knows|like|likes|want|wants|need|needs)\\b", "hiện tại đơn và hiện tại tiếp diễn", 0], "verb-to-v": ["\\b(want|wants|wanted|need|needs|needed|decide|decided|hope|hopes|hoped|plan|plans|planned|would like|learn|learned|try|tried|forget|forgot|remember|agree|agreed|promise|promised|refuse|refused|expect|expected|afford|manage|managed)\\s+(not\\s+)?to\\s+\\w+|\\b(trying|learning|planning|hoping|deciding|wanting|needing|like|love)\\s+to\\s+\\w+", "động từ + to V", 0], "adverb-manner": ["\\b\\w{3,}ly\\b|\\b(well|hard|fast)\\b", "trạng từ chỉ cách thức (slowly, well…)", 0], "howto-suggest": ["\\b(let us|let's|how about|what about|why do not we|why don't we|shall we|we could|maybe we could|would you like to)\\b", "cách rủ rê, đề nghị (Let's…, How about…)", 1], "howto-restaurant": ["\\b(i would like|can i have|could i have|could we have|may i have|i will have|the bill|the check|a table for|menu|order)\\b", "cách gọi món (I'd like…, Could I have…)", 1], "howto-invite": ["\\b(would you like|do you want to|can i help|shall i|let me|are you free|join us|come to)\\b", "cách mời và ngỏ ý giúp", 1], "howto-shop": ["\\b(excuse me|where can i find|do you have|have you got|how much|can i try|could i try|bigger|smaller|size|do you sell)\\b", "cách hỏi khi mua sắm", 1], "howto-apologise": ["\\b(sorry|apologi[sz]e|my apologies|forgive me)\\b", "cách xin lỗi (Sorry…, I apologise…)", 1], "howto-directions": ["\\b(turn left|turn right|go straight|on your left|on your right|next to|opposite|between|how do i get to|where is|go past|take the|cross)\\b", "cách hỏi và chỉ đường", 1], "howto-phone": ["\\b(hello|this is|i am calling|could i speak|can i speak|may i speak|speaking|hold on|call back|leave a message|could you repeat)\\b", "cách nói khi gọi điện", 1], "howto-hotel": ["\\b(reservation|booking|book|check in|check out|room|reception|wake-up call|key|breakfast)\\b", "cách nói ở khách sạn", 1], "be-present": ["\\b(am|is|are)\\b", "am / is / are", 0], "plural": ["\\b\\w{3,}s\\b|\\b(children|people|men|women|feet|teeth|mice)\\b", "danh từ số nhiều", 0], "conjunctions": ["\\b(and|but|or|so|because)\\b", "liên từ and / but / or / so / because", 0], "howto-greet": ["\\b(hello|hi|good morning|good afternoon|good evening|nice to meet you|my name is|i am|this is|how are you)\\b", "cách chào hỏi, giới thiệu", 1], "howto-personal": ["\\b(my name is|i am|i live|i come from|i was born|my phone number|my email|years old|could you spell|what is your)\\b", "cách nói thông tin cá nhân", 1], "howto-time": ["\\b(o'clock|half past|quarter|past|am|pm|a\\.m\\.|p\\.m\\.|at \\d|monday|tuesday|wednesday|thursday|friday|saturday|sunday|every day|morning|evening)\\b", "cách nói giờ và việc hằng ngày", 1], "howto-family": ["\\b(mother|father|mom|mum|dad|sister|brother|wife|husband|son|daughter|parents|grandmother|grandfather|family|friend|uncle|aunt|cousin|children)\\b", "từ về gia đình, bạn bè", 1], "pp-vs-past": ["\\b(have|has)\\s+(not\\s+)?(never\\s+|ever\\s+|just\\s+|already\\s+)?(\\w{2,}ed|been|gone|done|seen|eaten|had|made|taken|written|bought|met|known|lived)\\b|\\b(yesterday|ago|last \\w+|in (19|20)\\d\\d)\\b", "hiện tại hoàn thành hoặc quá khứ đơn", 1], "future-forms": ["\\bwill\\b|\\bgoing to\\b|\\b(am|is|are)\\s+\\w+ing\\b", "will / be going to / hiện tại tiếp diễn", 0], "modal-deduction": ["\\b(must|might|may|could|cannot|can not)\\s+(not\\s+)?be\\b", "must be / might be / can't be", 0], "obligation": ["\\b(have to|has to|had to|must|need to|needn't)\\b", "have to / must / mustn't", 0], "time-clauses": ["\\b(when|as soon as|until|before|after|while|once)\\b", "when / as soon as / until…", 0], "quantifiers": ["\\b(much|many|a few|a little|few|little|plenty of|a lot of|lots of|several|enough)\\b", "lượng từ (much, many, a few…)", 0], "indefinite": ["\\b(some|any|no|every)(one|body|thing|where)\\b|\\bno one\\b", "đại từ bất định (something, anyone…)", 0], "so-neither": ["\\b(so|neither|nor)\\s+(do|does|did|am|is|are|was|were|have|has|had|can|could|will|would)\\s+(i|we|they|he|she|you)\\b", "So do I / Neither do I", 1], "phrasal": ["\\b(get|gets|got|pick|picked|turn|turned|give|gave|look|looked|take|took|put|find|found|go|went|come|came|set|run|ran|wake|woke|grow|grew|break|broke|call|called|fill|filled|carry|carried|hand|handed|throw|threw|work|worked|sit|sat|stand|stood)\\s+(\\w+\\s+)?(up|down|on|off|out|in|over|back|away|after|into|through)\\b", "cụm động từ (get up, pick up…)", 0], "howto-opinion": ["\\b(in my opinion|i think|i believe|i agree|i disagree|i do not agree|i see what you mean|personally|from my point of view|i feel that|you are right)\\b|\\b(agree|disagree|good point|not so sure|i doubt|exactly|absolutely)\\b", "cách nêu ý kiến", 1], "modal-perfect": ["\\b(must|might|may|could|cannot|can not|should|would)\\s+(not\\s+)?have\\s+\\w+", "must / might / can't have + V3", 0], "passive-report": ["\\bit\\s+is\\s+(said|believed|thought|known|reported|expected|claimed|estimated|understood)\\b|\\b(is|are|was|were)\\s+(said|believed|thought|known|reported|expected|claimed|supposed)\\s+to\\b", "It is said that… / be said to…", 0], "participle": ["(^\\s*|[.!?]\\s*)(having\\s+)?\\w+(ing|ed)\\b[^.,]*,|\\b\\w+\\s+(living|working|sitting|standing|wearing|waiting|called|named|made|written|built|taken)\\b", "mệnh đề phân từ (V-ing / V3)", 1], "unless-provided": ["\\b(unless|as long as|provided that|providing that|provided|in case|otherwise|on condition that|so long as)\\b", "unless / as long as / provided that / in case", 0], "prep-collocation": ["\\b(interested in|good at|bad at|afraid of|proud of|responsible for|worried about|famous for|keen on|tired of|fond of|apologi[sz]ed? for|depends? on|succeed in|insist on|listen to|wait for|look forward to|similar to|different from|married to|capable of|aware of|thank \\w+ for)\\b|\\b(complain\\w* about|belongs? to|succeed\\w* in|believe in|arrive\\w* at|think\\w* about|dream\\w* of|care\\w* about|laugh\\w* at|look\\w* after)\\b", "tính từ / động từ + giới từ", 1], "howto-email": ["\\b(dear|i am writing|best regards|kind regards|yours sincerely|yours faithfully|i look forward|please find|could you please|thank you for)\\b", "cụm từ dùng trong email", 1], "subjunctive": ["\\b(suggest|insist|recommend|demand|request|propose|require|essential|important|vital|necessary)\\w*\\s+that\\b", "thức giả định (suggest that he go…)", 0], "discourse": ["\\b(however|moreover|therefore|furthermore|in addition|nevertheless|consequently|as a result|on the other hand|in contrast|thus|hence|besides)\\b|\\b(whereas|for instance|for example|in short|in conclusion|instead|meanwhile|otherwise|to sum up|overall)\\b", "từ nối (however, moreover, therefore…)", 0], "whatever": ["\\b(however|whatever|whoever|wherever|whenever|whichever|no matter)\\b", "however / whatever / no matter…", 0], "relative-advanced": ["\\b(in|on|at|for|with|of|to|from|by|about)\\s+(which|whom)\\b|\\b(some|many|most|all|none|both|one|each|several|few)\\s+of\\s+(which|whom)\\b|\\bwhose\\b", "giới từ + which / whom, one of which…", 0], "questions": ["\\?\\s*$|\\?","câu hỏi (kết thúc bằng dấu ?)", 1], "emphasis": ["\\b(do|does|did)\\s+(really\\s+)?(like|love|want|need|know|think|believe|hope|enjoy|remember|understand|try|care|feel|agree|appreciate|miss|have|look)\\b|\\bwhat is more\\b|\\b(never|rarely|seldom)\\s+(have|has|had|did|do)\\b|\\bit\\s+(is|was)\\s+(\\w+\\s+){1,4}(who|that)\\b|\\b(do|does|did)\\s+(really\\s+)?(?!not\\b|you\\b|i\\b|we\\b|they\\b|he\\b|she\\b|it\\b)\\w+|\\bnever will\\b", "cách nhấn mạnh (I do like…, what's more…)", 1]};
const EX_SIT = [{"lv": 1, "icon": "👋", "title": "Làm quen với bạn mới", "task": "Bạn vừa làm quen với Tom, một người bạn nước ngoài. Viết tin nhắn giới thiệu bản thân cho Tom.", "need": [["Nói tên của bạn", "\\b(my name is|i am|call me|this is)\\b"], ["Nói bạn sống ở đâu hoặc đến từ đâu", "\\b(live|from|city|town|vietnam|hanoi|saigon|ho chi minh|da nang)\\b"], ["Nói bạn làm nghề gì hoặc học gì", "\\b(work|job|student|study|teacher|engineer|doctor|nurse|office|company|school|university|designer|developer|accountant)\\b"]], "min": 12, "sample": "Hi Tom, my name is Lan. I am from Vietnam and I live in Da Nang. I work as an accountant in a small company. Nice to meet you!"}, {"lv": 1, "icon": "☕", "title": "Hủy hẹn cà phê", "task": "Tối nay bạn không thể đi cà phê với bạn vì phải làm việc muộn. Nhắn tin xin lỗi, nói lý do và hẹn một ngày khác.", "need": [["Xin lỗi", "\\b(sorry|apologi[sz]e)\\b"], ["Nói lý do", "\\b(because|work|busy|have to|has to|meeting|late)\\b"], ["Hẹn ngày khác", "\\b(tomorrow|another day|next|monday|tuesday|wednesday|thursday|friday|saturday|sunday|weekend|later|other day|another time)\\b"]], "min": 12, "sample": "Hi Mai, I am sorry, but I can't meet you tonight. I have to work late at the office. Can we have coffee on Saturday morning?"}, {"lv": 1, "icon": "🗺️", "title": "Hỏi đường ở khách sạn", "task": "Bạn ở khách sạn và muốn đến bảo tàng thành phố. Viết vài câu hỏi lễ tân: bảo tàng ở đâu và có đi bộ được không.", "need": [["Nhắc đến bảo tàng", "\\b(museum)\\b"], ["Hỏi đường / vị trí", "\\b(where|how can i get|how do i get|way to|how to get)\\b"], ["Hỏi về việc đi bộ hoặc khoảng cách", "\\b(walk|far|near|on foot|distance|minutes)\\b"]], "min": 10, "sample": "Excuse me, where is the city museum? Is it far from here? Can I walk there?"}, {"lv": 1, "icon": "🍜", "title": "Gọi món ở quán", "task": "Ở một quán ăn, bạn muốn gọi một tô phở bò và một ly trà đá, rồi hỏi giá.", "need": [["Gọi phở / món ăn", "\\b(pho|noodle|soup|beef)\\b"], ["Gọi đồ uống", "\\b(tea|drink|water|coffee|juice)\\b"], ["Hỏi giá", "\\b(how much|price|cost|bill)\\b"]], "min": 10, "sample": "Hello, can I have a bowl of beef pho and a glass of iced tea, please? How much is it?"}, {"lv": 1, "icon": "🎂", "title": "Mời dự sinh nhật", "task": "Mời bạn đến dự sinh nhật của bạn vào thứ Bảy lúc 7 giờ tối, tại nhà bạn.", "need": [["Nói về sinh nhật / bữa tiệc", "\\b(birthday|party)\\b"], ["Nói thời gian", "\\b(saturday|7|seven)\\b"], ["Nói địa điểm", "\\b(my house|my home|at home|my place|my flat|my apartment)\\b"], ["Lời mời", "\\b(come|join|would you like|invite|can you)\\b"]], "min": 12, "sample": "Hi Nam! It's my birthday on Saturday. I'm having a small party at my house at seven in the evening. Can you come?"}, {"lv": 2, "icon": "🏖️", "title": "Kể về kỳ nghỉ", "task": "Viết tin nhắn cho bạn kể về kỳ nghỉ vừa rồi: bạn đã đi đâu, đã làm gì và cảm thấy thế nào.", "need": [["Nói nơi bạn đã đi", "\\b(went|visited|travel\\w*|trip|holiday|vacation|stayed)\\b"], ["Kể việc đã làm (quá khứ)", "\\b(swam|ate|saw|took|walked|played|bought|tried|climbed|visited|went|enjoyed|spent)\\b"], ["Nói cảm nhận", "\\b(great|happy|fun|enjoy\\w*|wonderful|amazing|beautiful|loved|liked|relaxing|tired|fantastic|nice)\\b"]], "min": 20, "sample": "Hi Linh! Last week I went to Phu Quoc with my family. We stayed near the beach, swam every morning and ate a lot of seafood. It was really relaxing and I didn't want to come home!"}, {"lv": 2, "icon": "🏨", "title": "Báo sự cố phòng khách sạn", "task": "Phòng khách sạn của bạn: điều hòa không chạy và không có nước nóng. Viết tin nhắn cho lễ tân nhờ xử lý.", "need": [["Nói về điều hòa", "\\b(air|conditioner|air-con|aircon|a/c|ac)\\b"], ["Nói về nước nóng", "\\b(hot water|shower|water)\\b"], ["Nhờ giúp / sửa", "\\b(could you|can you|please|fix|repair|send|change|check)\\b"]], "min": 18, "sample": "Hello, this is room 305. The air conditioner isn't working and there is no hot water in the shower. Could you please send someone to fix them? Thank you."}, {"lv": 2, "icon": "🤒", "title": "Xin nghỉ vì ốm", "task": "Nhắn cho sếp hoặc giáo viên: bạn bị ốm nên hôm nay không đến được, và cho biết bạn sẽ làm bù hoặc gửi bài thế nào.", "need": [["Nói bạn bị ốm", "\\b(sick|ill|fever|cold|unwell|headache|flu|not feeling well|stomach)\\b"], ["Nói bạn không đến được", "\\b(can not come|cannot come|not come|will not be|stay at home|stay home|day off|absent|miss|not be able)\\b"], ["Hứa làm bù / gửi bài", "\\b(send|catch up|tomorrow|make up|finish|later|homework|report|email)\\b"]], "min": 18, "sample": "Good morning Mr Hai, I am sorry but I have a high fever, so I can't come to work today. I will finish the report at home and email it to you this afternoon."}, {"lv": 2, "icon": "🎬", "title": "Rủ bạn đi xem phim", "task": "Rủ bạn đi xem phim cuối tuần này, gợi ý thời gian cụ thể và hỏi ý kiến bạn ấy.", "need": [["Nhắc đến phim / rạp", "\\b(movie|film|cinema)\\b"], ["Gợi ý thời gian", "\\b(saturday|sunday|weekend|evening|night|pm|o'clock|\\d)\\b"], ["Hỏi ý kiến / rủ", "\\b(do you want|would you like|what do you think|are you free|how about|shall we|let's|let us|can you|why don't we)\\b"]], "min": 18, "sample": "Hey Tuan, there's a new action film at the cinema. Are you free on Saturday evening? How about the 7 pm show? Let me know what you think!"}, {"lv": 2, "icon": "🎁", "title": "Cảm ơn món quà", "task": "Viết lời cảm ơn bạn vì món quà sinh nhật: nói bạn thích nó và bạn sẽ dùng nó thế nào.", "need": [["Lời cảm ơn", "\\b(thank|thanks)\\b"], ["Nhắc đến món quà", "\\b(gift|present|book|bag|watch|scarf|shirt|it)\\b"], ["Nói bạn thích", "\\b(love|like|beautiful|perfect|great|wonderful|lovely)\\b"], ["Nói bạn sẽ dùng thế nào", "\\b(use|wear|read|put|every day|will|going to)\\b"]], "min": 18, "sample": "Thank you so much for the birthday present! I really love the scarf, the colour is perfect. I am going to wear it every day this winter."}, {"lv": 3, "icon": "📅", "title": "Dời lịch họp", "task": "Đồng nghiệp muốn dời cuộc họp sáng mai. Bạn đồng ý nhưng chỉ rảnh buổi chiều. Trả lời và đề xuất một giờ cụ thể.", "need": [["Đồng ý", "\\b(ok|okay|sure|fine|no problem|agree|of course|that works)\\b"], ["Nói bạn rảnh buổi chiều", "\\b(afternoon|after lunch)\\b"], ["Đề xuất giờ cụ thể", "\\b(\\d|o'clock|pm|two|three|four|five)\\b"], ["Nhắc đến cuộc họp", "\\b(meeting|meet)\\b"]], "min": 25, "sample": "Hi Minh, sure, we can move the meeting. Unfortunately, I'm busy tomorrow morning, but I'm free in the afternoon. Would 2:30 pm work for you? If not, I could also do 4 pm."}, {"lv": 3, "icon": "💼", "title": "Khuyên bạn muốn bỏ việc", "task": "Bạn thân muốn nghỉ việc vì áp lực quá lớn. Viết lời khuyên cho bạn ấy, có nêu lý do.", "need": [["Đưa ra lời khuyên", "\\b(should|why do not you|why don't you|i think|if i were you|had better|maybe|advise|could)\\b"], ["Nêu lý do", "\\b(because|since|so|as|otherwise)\\b"], ["Nhắc đến công việc", "\\b(job|work|boss|company|office|career)\\b"]], "min": 25, "sample": "I understand how you feel, but I don't think you should quit right away. If I were you, I would talk to your boss about the workload first. You could also start looking for a new job before you leave, because it may take a few months to find one."}, {"lv": 3, "icon": "⭐", "title": "Viết đánh giá nhà hàng", "task": "Viết một đánh giá ngắn về nhà hàng bạn vừa ăn: món ăn, cách phục vụ, giá cả, và bạn có giới thiệu cho người khác không.", "need": [["Nói về món ăn", "\\b(food|dish|meal|delicious|tasty|menu|soup|noodles?)\\b"], ["Nói về phục vụ", "\\b(service|staff|waiter|waitress|friendly|helpful|slow)\\b"], ["Nói về giá", "\\b(price|expensive|cheap|reasonable|cost|value|affordable)\\b"], ["Có giới thiệu hay không", "\\b(recommend|suggest|should try|worth|come back|go back|again)\\b"]], "min": 30, "sample": "We had dinner at Lotus Kitchen last night. The food was fresh and tasty, especially the grilled fish. The staff were friendly, although the service was a little slow. Prices are reasonable for the quality, so I would definitely recommend it."}, {"lv": 3, "icon": "📚", "title": "Hỏi thông tin khóa học", "task": "Viết email hỏi trung tâm về một khóa học tiếng Anh: lịch học, học phí và có lớp buổi tối không.", "need": [["Hỏi lịch học", "\\b(schedule|timetable|when|time|days|start)\\b"], ["Hỏi học phí", "\\b(fee|fees|price|cost|how much|tuition)\\b"], ["Hỏi lớp buổi tối", "\\b(evening|night|after work)\\b"]], "min": 30, "sample": "Dear Sir or Madam, I am interested in your intermediate English course. Could you tell me when the next course starts and what the timetable is? I would also like to know the course fee. As I work during the day, do you have any evening classes? Thank you."}, {"lv": 3, "icon": "🚗", "title": "Xin lỗi vì đến muộn buổi phỏng vấn", "task": "Bạn bị lỡ buổi phỏng vấn sáng nay vì xe hỏng giữa đường. Viết email xin lỗi và xin hẹn lại.", "need": [["Xin lỗi", "\\b(sorry|apologi[sz]e|apologies)\\b"], ["Giải thích lý do", "\\b(car|motorbike|bike|broke|breakdown|traffic|accident|flat tyre|flat tire)\\b"], ["Xin hẹn lại", "\\b(another|reschedule|new time|again|other time|chance|available|arrange)\\b"]], "min": 30, "sample": "Dear Ms Hoa, I am very sorry that I missed the interview this morning. My motorbike broke down on the way and I could not find a taxi in time. I am still very interested in the position. Would it be possible to reschedule the interview for another day this week?"}, {"lv": 4, "icon": "📦", "title": "Trả lời khách hàng phàn nàn", "task": "Một khách hàng phàn nàn vì đơn hàng giao trễ một tuần. Viết thư trả lời: xin lỗi, giải thích ngắn gọn và đề xuất bồi thường.", "need": [["Xin lỗi", "\\b(apologi[sz]e|sorry|regret|apologies)\\b"], ["Giải thích nguyên nhân", "\\b(because|due to|as a result|caused|problem|delay|issue|shortage)\\b"], ["Đề xuất bồi thường", "\\b(refund|discount|voucher|free|compensat\\w*|offer)\\b"]], "min": 40, "sample": "Dear Mr Long, thank you for letting us know about your order, and please accept our sincere apologies for the delay. Due to a problem with our delivery partner, several orders were held at the warehouse last week. Your package has now been sent and should arrive tomorrow. To make up for the inconvenience, we would like to offer you a 20% discount on your next order."}, {"lv": 4, "icon": "🏠", "title": "Đề xuất làm việc từ xa", "task": "Viết email đề xuất với sếp cho bạn làm việc ở nhà 2 ngày mỗi tuần, nêu ít nhất 2 lợi ích.", "need": [["Nêu đề xuất", "\\b(would like|suggest|propose|could i|request|would it be possible|i was wondering)\\b"], ["Nói về làm ở nhà", "\\b(home|remote|remotely)\\b"], ["Nêu lợi ích", "\\b(productive|productivity|save|time|focus|efficient|benefit|traffic|commute|cost)\\b"]], "min": 40, "sample": "Dear Ms Lan, I was wondering whether it would be possible for me to work from home two days a week. Not only would this save me nearly two hours of commuting each day, but it would also allow me to focus better on writing reports. I would of course remain available online during office hours and come in for all team meetings."}, {"lv": 4, "icon": "🙏", "title": "Từ chối lời mời làm việc", "task": "Một công ty mời bạn về làm. Viết thư cảm ơn, từ chối lịch sự vì bạn đã nhận việc ở nơi khác, và mong giữ liên lạc.", "need": [["Cảm ơn", "\\b(thank|grateful|appreciate)\\b"], ["Từ chối", "\\b(decline|unfortunately|unable|can not accept|cannot accept|not able|another offer|other offer|accepted)\\b"], ["Mong giữ liên lạc", "\\b(in touch|future|contact|opportunit\\w*)\\b"]], "min": 40, "sample": "Dear Mr Brown, thank you very much for offering me the position of marketing executive. I really appreciate the time you and your team spent with me. Unfortunately, I have decided to accept another offer that is closer to my home, so I must decline. I hope we will have the chance to work together in the future, and I would be happy to stay in touch."}, {"lv": 4, "icon": "🗣️", "title": "Phản hồi ý kiến trong cuộc họp", "task": "Đồng nghiệp đề xuất cắt giảm ngân sách quảng cáo. Viết phản hồi: đồng ý một phần nhưng nêu mối lo của bạn và lý do.", "need": [["Đồng ý một phần", "\\b(agree|point|right|understand|see what you mean|makes sense)\\b"], ["Nêu mối lo", "\\b(however|but|worried|concern\\w*|risk|although|while)\\b"], ["Nêu lý do", "\\b(sales|customers|because|could|might|may|lose|fall)\\b"]], "min": 40, "sample": "I agree that we need to reduce costs, and advertising is one of our biggest expenses. However, I'm worried that cutting the budget completely could hurt our sales, because many new customers find us through online ads. Perhaps we could reduce it gradually and check the results every month."}, {"lv": 4, "icon": "✉️", "title": "Thư giới thiệu đồng nghiệp", "task": "Viết thư ngắn giới thiệu một đồng nghiệp cũ cho công ty khác: bạn biết người đó thế nào, điểm mạnh của họ và lời đề cử.", "need": [["Nói mối quan hệ", "\\b(worked with|colleague|known|team|manager|supervis\\w*)\\b"], ["Nêu điểm mạnh", "\\b(hard-working|hardworking|reliable|creative|skilled|responsible|excellent|talented|honest|organi[sz]ed|friendly)\\b"], ["Lời đề cử", "\\b(recommend|confident|without hesitation|asset)\\b"]], "min": 40, "sample": "To whom it may concern, I am pleased to recommend Nguyen Van Hung, who worked in my team for three years. Hung is hard-working, reliable and very good at solving problems under pressure. He was also popular with customers because of his patience. I am confident that he would be a great asset to your company."}, {"lv": 5, "icon": "📱", "title": "Quan điểm về mạng xã hội cho trẻ em", "task": "Viết một đoạn ngắn nêu quan điểm của bạn về việc cấm trẻ dưới 16 tuổi dùng mạng xã hội. Có lập luận và nhắc đến ý kiến trái chiều.", "need": [["Nêu quan điểm", "\\b(i believe|in my view|in my opinion|i think|i would argue|personally|it seems to me)\\b"], ["Đưa lập luận", "\\b(because|since|as|evidence|research|studies|mental health|addict\\w*|sleep)\\b"], ["Nhắc đến ý kiến trái chiều", "\\b(however|on the other hand|although|while|admittedly|critics|some people|others argue)\\b"]], "min": 55, "sample": "In my view, a complete ban on social media for children under sixteen would do more good than harm. Research increasingly links heavy social media use to poor sleep and anxiety among teenagers. Admittedly, critics argue that such a ban would be impossible to enforce and might cut young people off from useful communities. Even so, clear age limits would at least give parents stronger support when setting rules at home."}, {"lv": 5, "icon": "💰", "title": "Thương lượng lương", "task": "Công ty mời bạn làm việc với mức lương thấp hơn mong muốn. Viết email cảm ơn và đề nghị mức cao hơn, có lý do thuyết phục.", "need": [["Cảm ơn", "\\b(thank|appreciate|grateful|delighted|pleased)\\b"], ["Đề nghị mức cao hơn", "\\b(higher|increase|raise|more|revise|reconsider)\\b"], ["Lý do thuyết phục", "\\b(experience|skills|market|responsibilit\\w*|qualification\\w*|achiev\\w*|results)\\b"]], "min": 55, "sample": "Dear Ms Thu, thank you for the offer; I am genuinely excited about joining the team. Before accepting, I was hoping we could discuss the salary. Given my six years of experience managing regional sales, and the fact that similar roles in the market currently pay around 10% more, I wonder whether you might be able to reconsider the figure. I am confident I can deliver results quickly."}, {"lv": 5, "icon": "⚠️", "title": "Thông báo sự cố hệ thống", "task": "Bạn là quản lý. Viết thông báo cho khách hàng rằng hệ thống gặp sự cố khiến một số dữ liệu hiển thị sai, và nêu các biện pháp đang thực hiện.", "need": [["Thông báo", "\\b(inform|notify|aware|would like to let|writing to|let you know)\\b"], ["Mô tả sự cố", "\\b(issue|incident|error|problem|breach|outage|fault)\\b"], ["Nêu biện pháp", "\\b(measures|steps|fixed|resolve\\w*|working|investigat\\w*|ensure|prevent)\\b"]], "min": 55, "sample": "We are writing to inform you that a technical issue on Monday caused some account balances to be displayed incorrectly for several hours. No money was lost and no personal data was exposed. Our engineers have fixed the error, and we are investigating its cause to ensure that it does not happen again. We sincerely apologise for any confusion this may have caused."}, {"lv": 5, "icon": "📝", "title": "Phản hồi lời phê bình", "task": "Sếp phê bình báo cáo của bạn còn sơ sài. Viết phản hồi chuyên nghiệp: ghi nhận góp ý, giải thích ngắn gọn và cam kết cải thiện với thời hạn cụ thể.", "need": [["Ghi nhận góp ý", "\\b(thank|appreciate|understand|take on board|fair|point|feedback)\\b"], ["Giải thích ngắn gọn", "\\b(because|due to|time|deadline|limited|data)\\b"], ["Cam kết với thời hạn", "\\b(by|deadline|monday|tuesday|wednesday|thursday|friday|tomorrow|next week|end of)\\b"]], "min": 50, "sample": "Thank you for the feedback on my report; I agree that the analysis section was too brief. I was waiting for the final sales data, which only arrived the day before the deadline, but I should have told you about the delay earlier. I will revise the report with a full comparison by region and send it to you by Thursday afternoon."}, {"lv": 5, "icon": "🌳", "title": "Đề xuất trồng cây ở khu phố", "task": "Viết đề xuất ngắn gửi chính quyền địa phương về việc trồng thêm cây xanh trong khu phố: lợi ích và nguồn lực thực hiện.", "need": [["Nêu đề xuất", "\\b(propose|suggest|would like to|recommend|request)\\b"], ["Nêu lợi ích", "\\b(air|shade|environment|health|cool\\w*|green|beautif\\w*|temperature)\\b"], ["Nói về nguồn lực", "\\b(fund\\w*|budget|volunteer\\w*|cost|support|resident\\w*|sponsor\\w*)\\b"]], "min": 50, "sample": "We would like to propose planting around fifty trees along Le Loi Street and in the small park beside the market. Apart from providing shade during the hot season, trees would help cool the area and improve air quality for the many children who walk to school here. Local residents have already offered to volunteer at weekends, so the main cost would be the young trees themselves, which a nearby business has agreed to sponsor."}];
