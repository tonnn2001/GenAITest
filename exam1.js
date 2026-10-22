const REC = { note: "Câu này trong file PDF không hiển thị đủ các mục kéo-thả/đáp án, nên nội dung được dựng lại từ phần giải thích." };

window.EXAMS.exam1 = {
  id: "exam1",
  title: "Practice Exam 1",
  subtitle: "GMetrix – Generative AI",
  questions: [
    S("Một công ty tiếp thị chưa quen với AI và đang tìm hiểu về các loại AI khác nhau.\n\nĐầu ra nào là kết quả của AI tạo sinh?",
      ["Phát hiện sự bất thường trong mô hình bán hàng cho một thức uống mới.",
       "Phân loại phản hồi từ một sự kiện là tích cực hoặc tiêu cực.",
       "Biết số lượng nhân viên cần thiết cho một sự kiện công khai sắp tới.",
       "Một ngôi nhà được thêm vào một bức ảnh sau khi được mô tả."], 3,
      "Một ngôi nhà được thêm vào ảnh sau khi được mô tả là ví dụ về AI tạo sinh. Biết cần bao nhiêu nhân viên là AI dự đoán; phân loại phản hồi tích cực/tiêu cực là AI phân loại; phát hiện bất thường trong doanh số là AI phân tích."),

    X("Phân loại xem mỗi ví dụ sẽ được thực hiện bằng cách sử dụng AI tạo sinh hay công cụ tìm kiếm.",
      [["Mọi người đặt câu hỏi để có câu trả lời.", "AI tạo sinh"],
       ["Một câu trả lời được tạo cho mỗi yêu cầu.", "AI tạo sinh"],
       ["Mọi người sử dụng cụm từ để có câu trả lời.", "Công cụ tìm kiếm"],
       ["Nhiều câu trả lời được tạo ra cho mỗi yêu cầu.", "Công cụ tìm kiếm"]],
      "AI tạo sinh: mọi người đặt câu hỏi, và một câu trả lời được tạo cho mỗi yêu cầu. Công cụ tìm kiếm: mọi người dùng cụm từ, và nhiều kết quả được trả về cho mỗi yêu cầu.", REC),

    Y("Đối với mỗi tuyên bố liên quan đến LLM (Mô hình ngôn ngữ lớn), hãy cho biết Yes nếu tuyên bố đó đúng và No nếu nó sai.",
      [["LLM có thể tự động hóa các quy trình nội bộ lặp đi lặp lại.", true],
       ["LLM được đào tạo trên các bộ dữ liệu khổng lồ.", true],
       ["LLM hoàn toàn dựa trên thực tế.", false]],
      "LLM sử dụng quá nhiều dữ liệu đến mức sẽ có những ý kiến và quan điểm khác nhau về nội dung mà chúng tạo ra, nên không thể nói là hoàn toàn dựa trên thực tế."),

    Y("Đối với mỗi tuyên bố sau đây về cách các mô hình hình ảnh được đào tạo trong AI tạo sinh, hãy cho biết Yes nếu câu lệnh đó đúng và No nếu nó sai.",
      [["Các mô hình hình ảnh được đào tạo trên các cặp văn bản-hình ảnh có thể được gắn thẻ thủ công.", true],
       ["Các mô hình hình ảnh được đào tạo trên các cặp văn bản-hình ảnh có thể được gắn thẻ tự động bằng cách sử dụng máy học.", false],
       ["Các mô hình hình ảnh được đào tạo chỉ bằng cách sử dụng bộ dữ liệu lớn của các hình ảnh khác để tìm hiểu các quy tắc.", false]],
      "Các mô hình hình ảnh được đào tạo bằng cách sử dụng các bộ dữ liệu lớn và văn bản liên quan để học các quy tắc."),

    S("Một chuyên gia tiếp thị đang tham dự một hội nghị quốc tế và muốn gọi một ly latte nhưng không nói được ngôn ngữ bản địa ở đó. Người đó gõ “Một Mocha Latte, làm ơn.” và cho nhân viên pha chế xem kết quả “Einen Mokka Latte, bitte.”\n\nLoại AI nào đang được sử dụng?",
      ["Âm thanh thành âm thanh.", "Chuyển âm thanh thành văn bản.", "Chuyển văn bản thành văn bản.", "Chuyển văn bản thành âm thanh."], 2,
      "Người đó nhập văn bản và tạo ra văn bản, nên loại AI là Text-to-text. Không có âm thanh liên quan."),

    X("Sử dụng kéo và thả, khớp từng lời nhắc ban đầu với loại mà nó đại diện.",
      [["Viết mã sẽ tạo ra một số ngẫu nhiên.", "Zero-shot"],
       ["Viết mã sẽ tạo ra một số ngẫu nhiên từ 1 đến 10.", "One-shot"],
       ["Viết mã sẽ tạo ra một số ngẫu nhiên giữa hai số ngẫu nhiên được tạo trước đó.", "Few-shot"]],
      "Không có ví dụ → zero-shot. Một ví dụ → one-shot. Một vài ví dụ → few-shot."),

    X("Sử dụng danh sách thả xuống, cung cấp đầu vào cần thiết và đầu ra được tạo ra với từng loại dữ liệu.",
      [["Đầu vào của OCR (nhận dạng ký tự quang học)", "Hình ảnh"],
       ["Đầu ra của OCR", "Văn bản"],
       ["Đầu vào của mô hình tạo khuôn mặt người đang nói (talking-head)", "Âm thanh"],
       ["Đầu ra của mô hình talking-head", "Video"]],
      "OCR tạo văn bản từ văn bản trên hình ảnh (Hình ảnh → Văn bản). Mô hình talking-head dùng âm thanh để tạo video (Âm thanh → Video).", REC),

    X("Sử dụng kéo và thả, kết hợp từng công cụ AI với một tác vụ mà được thực hiện bởi người dùng.",
      [["Custom GPT", "Có thể được tùy chỉnh với một bộ dữ liệu cụ thể về cách trả lời các truy vấn của khách hàng."],
       ["Google Gems", "Bạn có thể sử dụng để tạo bản tóm tắt cuộc họp trong Tài liệu."],
       ["Microsoft CoPilots", "Sử dụng Power Automate để gửi bảng tính bán hàng được cập nhật hàng tuần."]],
      "Custom GPT tùy chỉnh với tập dữ liệu cụ thể. Google Gems nâng cao năng suất trong Google Workspace (tóm tắt cuộc họp trong Docs). Microsoft CoPilots tích hợp với công cụ Microsoft, gồm cả Power Automate."),

    S("Một lập trình viên đã có kinh nghiệm đang học Python và muốn biết cách sử dụng nó để tạo ra một số ngẫu nhiên.\n\nCâu lệnh nào sẽ hiển thị mã mà họ muốn xem?",
      ["Viết mã tạo ra một số ngẫu nhiên.",
       "Viết mã Python sẽ cung cấp cho tôi một số ngẫu nhiên từ 1 đến 10.",
       "Làm cách nào để lấy một số ngẫu nhiên trong Python?",
       "Viết mã Python tạo ra một số ngẫu nhiên."], 3,
      "Câu lệnh nên khẳng định và cụ thể cho những gì cần. Nếu không chỉ định ngôn ngữ, sẽ thấy mã cho nhiều ngôn ngữ khác nhau. Câu lệnh cũng không yêu cầu một phạm vi cụ thể cho số ngẫu nhiên."),

    M("Danh mục nào sau đây khi được sử dụng để thu thập dữ liệu có thể tạo ra sự thiên lệch (hay thành kiến) trong đầu ra của AI tạo sinh? (Chọn hai)",
      ["Giới tính", "Chủng tộc", "Vị trí địa lý", "Dữ liệu thống kê"], [0, 1],
      "Thiên lệch tập trung vào thành kiến cá nhân như giới tính hoặc chủng tộc. Vị trí địa lý và dữ liệu thống kê không phải nguồn gây thiên lệch."),

    X("Dùng kỹ thuật kéo thả và ghép nối, hãy ghép mỗi vấn đề đầu ra của AI tạo sinh với một đặc điểm của vấn đề đó.",
      [["Thiên lệch (Bias)", "Đầu ra có lợi cho những người có địa vị kinh tế xã hội nhất định."],
       ["Thông tin sai lệch (Misinformation)", "Đầu ra trình bày thông tin sai lệch là thực tế."],
       ["Ảo giác (Hallucination)", "Đầu ra không dựa trên dữ liệu đào tạo hoặc kiến thức tương tự."]],
      "Có lợi cho một nhóm nhất định = thiên lệch. Thông tin không chính xác được trình bày như thực tế = thông tin sai lệch. Đầu ra không dựa trên dữ liệu đào tạo = ảo giác."),

    M("Một công ty giải trí đang tìm cách sử dụng AI tạo sinh để phát triển các chiến dịch tiếp thị.\n\nNhững yếu tố nào là những yếu tố cần cân nhắc khi lựa chọn công cụ AI cho các chiến dịch tiếp thị này? (Chọn hai)",
      ["Phân tích cạnh tranh", "Chi phí", "Dễ sử dụng", "Nhu cầu tiếp thị"], [1, 2],
      "Tính dễ sử dụng và chi phí là những yếu tố cần xem xét khi lựa chọn công cụ. Tiếp thị và cạnh tranh là cân nhắc về những gì đầu ra tạo ra, không phải cho bản thân lựa chọn công cụ."),

    S("Câu lệnh nào sau đây là một ví dụ về kỹ thuật few-shot prompt cho nội dung tạo tờ rơi tiếp thị quảng cáo chăm sóc thú cưng?",
      ["Xây dựng tờ rơi tiếp thị cho doanh nghiệp chăm sóc thú cưng. Bao gồm từ khóa “shine.”",
       "Xây dựng tờ rơi tiếp thị cho doanh nghiệp chăm sóc thú cưng (dog grooming).",
       "Dưới đây là một số câu cửa miệng tiếp thị: “Groom to bloom,” “Goggie waggie,” “a fine canine.”",
       "Xây dựng tờ rơi tiếp thị cho doanh nghiệp chăm sóc thú cưng. Bao gồm các từ khóa “groom to bloom” và “doggie waggie.”"], 3,
      "Câu lệnh có nhiều ví dụ → few-shot. Không có ví dụ cụ thể → zero-shot. Một từ khóa “shine” → one-shot. Chỉ đưa vài từ mà không yêu cầu xây dựng gì rõ ràng là ví dụ về fine-tuning."),

    M("Những vấn đề nào với dữ liệu gây ra thiên lệch (bias) trong tập dữ liệu và trong đầu ra của AI tạo sinh? (Chọn hai)",
      ["Thiếu dữ liệu.", "Sự bất thường trong dữ liệu.", "Tâm lý tiêu cực bất thường do một sự kiện.", "Thiếu sự đa dạng."], [2, 3],
      "Thiếu sự đa dạng và tình cảm tiêu cực bất thường do một sự kiện có thể gây thiên lệch. Thiếu dữ liệu không nhất thiết gây thiên lệch; sự bất thường trong dữ liệu không gây thiên lệch trực tiếp."),

    Y("Một công ty kinh doanh đồ trượt tuyết đang tìm hiểu cách sử dụng AI tạo sinh muốn biết các yêu cầu cụ thể để tạo ra đầu ra từ AI.\n\nĐối với mỗi tiêu chí liên quan đến khả năng tạo ra kết quả đầu ra một cách nhanh chóng, hãy chỉ ra Yes nếu tiêu chí đó đúng và No nếu tiêu chí đó sai.",
      [["Internet tốc độ cao", true], ["GPU cao cấp", true], ["Một lượng nhỏ dữ liệu", false]],
      "AI tạo sinh yêu cầu nhiều năng lượng điện, kết nối internet tốc độ cao và càng nhiều GPU càng tốt. Một lượng nhỏ dữ liệu thường không đủ cho một bộ mẫu để tạo ra đầu ra chính xác."),

    M("Những loại dữ liệu nào nên tránh sử dụng khi thu thập dữ liệu để đào tạo mô hình AI tạo sinh? (Chọn hai)",
      ["Thông tin cá nhân", "Dữ liệu lịch sử", "Dữ liệu cá nhân của công ty", "KPI"], [0, 2],
      "Thông tin cá nhân và dữ liệu cá nhân của công ty không nên là một phần của quá trình đào tạo. Dữ liệu lịch sử và KPI thường được dùng để đào tạo mô hình AI."),

    S("Hãy xác định yếu tố không nhất quán trong bức hình sau đây (là kết quả đầu ra của AI tạo sinh)?",
      ["Các tủ hồ sơ không giống nhau.", "Những chiếc ghế có những đặc điểm khác nhau.", "Các màn hình không giống nhau.", "Đồng hồ hiển thị các thời gian khác nhau."], 3,
      "Đồng hồ hiển thị thời gian khác nhau mặc dù chúng ở trong cùng một phòng, đây là sự không nhất quán của AI tạo sinh. Hai ghế khác nhau trông vẫn thực tế; hai màn hình và hai tủ hồ sơ không cần giống hệt nhau.",
      { image: "img/e1-q17.jpg" }),

    Y("Đối với mỗi câu dưới đây liên quan đến việc thu thập nội dung để tạo một câu lệnh đầu vào nhằm tạo ra một công thức nấu ăn sử dụng các thực phẩm có sẵn trong nhà, hãy cho biết Yes nếu câu đó đúng và No nếu câu đó sai.",
      [["Cho biết thực phẩm nào trong nhà nên là một phần của câu lệnh.", true],
       ["Có ý tưởng về bữa ăn nào được mong muốn nên là một phần của câu lệnh.", true],
       ["Hỏi những gì cần thiết tại cửa hàng nên là một phần của câu lệnh.", false]],
      "Nếu mục tiêu là hiển thị công thức dùng thực phẩm có sẵn trong nhà, thì việc hỏi cần mua gì ở cửa hàng không liên quan và không nên là một phần của câu lệnh."),

    M("Bạn có một kết quả đầu ra của AI tạo sinh về số lượng cây ở mỗi lục địa được trả về ở dạng đoạn văn.\n\nCâu lệnh nào sẽ tóm tắt dữ liệu để làm cho nó dễ đọc hơn? (Chọn hai)",
      ["Hiển thị số lượng cây trên mỗi lục địa ở định dạng biểu đồ.",
       "Hiển thị số lượng cây trên mỗi lục địa ở định dạng bảng.",
       "Hiển thị số lượng cây trên mỗi lục địa ở định dạng được đánh số.",
       "Hiển thị số lượng cây trên mỗi lục địa ở định dạng gạch đầu dòng."], [0, 1],
      "Yêu cầu hiển thị ở dạng bảng hoặc biểu đồ cho phép xem bản tóm tắt dữ liệu dễ đọc. Danh sách gạch đầu dòng hoặc đánh số không nhất thiết tóm tắt dữ liệu."),

    M("Một học sinh lớp 9 quan tâm đến việc xây dựng nhà cửa muốn có một lời giải thích kỹ lưỡng về sự đối lập của cosin trong hình học.\n\nCâu lệnh nào sau đây sẽ giúp học sinh nhận được lời giải thích được cá nhân hóa theo cấp lớp mình sau khi có câu trả lời tiêu chuẩn ban đầu? (Chọn hai)",
      ["Đưa ra một ví dụ về sự đối lập của cosin.",
       "Hiển thị một ví dụ liên quan đến xây dựng nhà ở.",
       "Giải thích sự đối lập của cosin cho học sinh lớp 9.",
       "Giải thích sự đối lập của cosin."], [1, 2],
      "Điều chỉnh nội dung cho phù hợp với cấp lớp và cung cấp ví dụ thực tế (xây dựng nhà ở) làm cho khái niệm dễ hiểu. Chỉ đặt câu hỏi hoặc chỉ yêu cầu một ví dụ có thể không cung cấp đủ cá nhân hóa."),

    Y("Đối với mỗi câu lệnh cho AI tạo sinh, hãy cho biết Yes nếu câu lệnh có hiệu quả trong việc mô tả nội dung của hình ảnh và No nếu không.",
      [["Nền của hình ảnh này là gì?", true],
       ["Tạo nền màu xanh lá cây cho hình ảnh của máy ảnh.", false],
       ["Xây dựng một hình ảnh tương tự bằng cách sử dụng nền của hình ảnh này.", false]],
      "Chỉ câu đầu tiên mô tả nội dung của hình ảnh. Hai câu sai đều tạo ra nội dung mới chứ không mô tả nội dung."),

    X("Sử dụng kéo và thả, khớp từng câu lệnh AI tạo sinh với vai trò của nó trong việc tạo hoặc chuyển đổi video.",
      [["Tạo video chuyển đổi hình ảnh mặt trời mọc thành hình ảnh hoàng hôn.", "Nội suy giữa các hình ảnh."],
       ["Tạo video cho thấy bãi biển và bầu trời đầy nắng với những đám mây nhẹ.", "Tạo video từ lời nhắc."],
       ["Xóa người lướt khỏi video hiện có.", "Xóa đối tượng khỏi video."]],
      "Chuyển từ mặt trời mọc sang hoàng hôn = nội suy giữa các hình ảnh. Video được mô tả bằng văn bản = tạo video từ lời nhắc. Xóa người lướt web khỏi video = xóa đối tượng khỏi video."),

    Y("Đối với mỗi câu dưới đây liên quan đến các giả định khi lấy nội dung từ đầu vào cho AI tạo sinh, hãy cho biết Có nếu câu đó đúng và Không nếu câu đó sai.",
      [["Thêm ngữ cảnh vào lời nhắc AI sẽ giúp tạo ra đầu ra tốt hơn.", true],
       ["Có thể chắc chắn rằng một công cụ AI sẽ biết bạn đang nói về điều gì.", false],
       ["Việc gán cho một câu lệnh AI một nhân cách không ảnh hưởng đến đầu ra.", false]],
      "Không chắc chắn khi cho rằng AI sẽ biết bạn đang nói về điều gì. Cung cấp cho câu lệnh một nhân cách hoàn toàn ảnh hưởng đến đầu ra (ví dụ đổi từ góc nhìn ngôi thứ nhất sang ngôi thứ ba)."),

    S("Một biên tập viên chỉnh sửa bản sao đang sử dụng ChatGPT để giúp chỉnh sửa ngữ pháp, chính tả và lựa chọn từ của các bài báo được sử dụng cho một tạp chí. Người biên tập viên muốn đảm bảo rằng các yếu tố này nhất quán cho tất cả các bài viết đang được chỉnh sửa.\n\nNgười biên tập viên nên bao gồm những gì trong mỗi câu lệnh để đảm bảo tính nhất quán về ngữ pháp, chính tả và lựa chọn từ giữa các bài viết này?",
      ["Một nhân cách.", "Bảng thuật ngữ.", "Bản hướng dẫn sử dụng phong cách trình bày.", "Một vai trò."], 2,
      "Tham chiếu đến hướng dẫn phong cách (như Microsoft Style Guide hoặc AP Style Guide) giúp đảm bảo ngữ pháp, chính tả và lựa chọn từ nhất quán. Nhân cách ảnh hưởng giọng điệu; vai trò ảnh hưởng phong cách; bảng thuật ngữ giúp dịch dữ liệu sang ngữ cảnh phù hợp."),

    S("Một đội ngũ nhân viên bán hàng muốn sử dụng AI tạo sinh để gửi email cập nhật các sản phẩm mới cho khách hàng của mình.\n\nĐội ngũ bán hàng có thể sử dụng những gì trong phạm vi của một công cụ AI để đảm bảo mỗi khách hàng sẽ nhận được một email được cá nhân hóa cho riêng mình nhưng có cùng chủ đề nội dung giống nhau?",
      ["Kết nối với cơ sở dữ liệu.", "Mail Merge.", "API cho dữ liệu.", "Một biểu mẫu."], 3,
      "Một biểu mẫu (template) cho phép đầu ra có cùng nội dung nhiều lần, với dấu ngoặc vuông cho các phần tùy chỉnh. Mail Merge dùng trong Word, không phải AI tạo sinh; cơ sở dữ liệu/API khiến công cụ AI phải vượt ra ngoài phạm vi của nó."),

    Y("Một người đang tìm kiếm thông tin về các nhà hàng có mức giá tốt trong khu vực mà người đó đang đi du lịch bằng cách chạy cùng một câu lệnh nhiều lần để nhận được một số kết quả.\n\nNgười đó đang sử dụng kỹ thuật nhắc nhở nào? (Chọn Yes nếu kỹ thuật được áp dụng và chọn No nếu nó không được áp dụng.)",
      [["Self-consistency", true], ["Zero-shot", false], ["Few-shot", false], ["Generate knowledge", false]],
      "Chạy cùng một câu lệnh nhiều lần để so sánh nhiều kết quả là kỹ thuật self-consistency."),

    Y("Đối với mỗi câu lệnh AI tạo sinh sau đây, hãy cho biết Yes nếu câu lệnh sử dụng kỹ thuật đảo ngược kết quả (reverse prompting) và No nếu không sử dụng kỹ thuật này.",
      [["Tôi đang phỏng vấn ai đó cho vị trí thiết kế đồ họa. Tôi nên bắt đầu với ba câu hỏi phỏng vấn nào?", true],
       ["Nếu tôi muốn cải thiện các cuộc họp nhóm của mình, bạn sẽ đưa ra những lời khuyên cụ thể nào?", true],
       ["Hệ thống cơ sở dữ liệu nào sẽ tốt nhất để sử dụng cho dữ liệu yêu cầu một lượng lớn phân tích thống kê?", false]],
      "Trong câu lệnh đảo ngược, câu lệnh bắt đầu với kết quả mong muốn và yêu cầu AI liệt kê các bước, công cụ hoặc yếu tố cần thiết để đạt được kết quả đó. Hỏi nên dùng hệ thống CSDL nào không phải là một kết quả cuối cùng đã biết."),

    M("Một nhà nghiên cứu đang sử dụng AI tạo sinh để kiểm tra tính chân thực của các sự kiện hiện tại có trong một bản tin.\n\nLàm thế nào nhà nghiên cứu có thể xác minh rằng các sự kiện trong kết quả đầu ra AI tạo sinh là chính xác? (Chọn hai)",
      ["Đây là những sự thật, chúng không cần xác minh.", "Sử dụng các trang web kiểm tra thực tế.", "Tham chiếu chéo dữ liệu.", "Chạy lại câu lệnh."], [1, 2],
      "Tham khảo chéo dữ liệu và sử dụng các trang web kiểm tra thực tế là hai phương pháp hiệu quả. Chạy lại câu lệnh không xác minh bất kỳ sự kiện nào."),

    Y("Đối với mỗi tuyên bố liên quan đến AI và tác động của AI tạo sinh đối với thị trường việc làm, hãy cho biết Yes nếu tuyên bố đó đúng và No nếu sai.",
      [["Có nỗi sợ rằng AI sẽ tiếp quản việc làm và nhân loại.", true],
       ["AI có thể đóng vai trò như một công cụ tạo việc làm.", true],
       ["Mọi công việc cuối cùng sẽ được điều hành bởi AI.", false]],
      "AI có thể tạo ra việc làm (chỉ là những công việc khác đi); không đúng khi nói mọi công việc cuối cùng sẽ do AI điều hành."),

    S("Một nhà phát triển muốn xây dựng một mô hình AI và đang tìm cách sử dụng Azure Open AI để xây dựng mô hình. Nhà phát triển nhận thấy rằng Microsoft có các rào chắn bảo vệ (guardrails) cho bất kỳ dữ liệu nào trong mô hình AI.\n\nLàm thế nào những rào chắn bảo vệ đó có thể gây ra sự thiên vị cho những dữ liệu được sử dụng cho mô hình?",
      ["Thiên vị được đưa vào trong câu lệnh mọi người sử dụng để tạo nội dung.",
       "Rào chắn chỉ gây thiên vị nếu chúng bị tắt.",
       "Một thực thể (entity) định nghĩa thế nào là nội dung có hại và không có hại.",
       "Lượng dữ liệu trong mô hình bị hạn chế."], 2,
      "Guardrails bảo vệ khỏi nội dung độc hại. Thiên vị đến từ khả năng tiếp cận quá mức do những gì một thực thể định nghĩa là nội dung có hại, có thể làm sai lệch dữ liệu trong mô hình."),

    S("Một công ty công nghệ muốn xây dựng một mô hình AI bằng cách sử dụng dữ liệu từ trang web của nhà sản xuất. Một số dữ liệu đó có bản quyền.\n\nCách thích hợp để kết hợp dữ liệu đó vào mô hình AI của họ là gì?",
      ["Công ty nên tuân theo các quy định của ngành về cách sử dụng dữ liệu.",
       "Công ty nên thực hiện các biện pháp bảo vệ cho dữ liệu.",
       "Công ty nên xin phép sử dụng dữ liệu.",
       "Công ty nên thay đổi dữ liệu để không vi phạm luật bản quyền."], 2,
      "Công ty nên tuân thủ luật bản quyền và không sử dụng dữ liệu mà không có sự cho phép của chủ sở hữu. Hiện không có cơ quan/bộ luật nào điều chỉnh riêng AI tạo sinh; hàng rào bảo vệ không lọc bỏ dữ liệu có bản quyền; thay đổi dữ liệu có thể làm nó vô dụng."),

    M("Đối với những nhiệm vụ nào trong cuộc sống mà người ta có thể tận dụng AI tạo sinh để thực hiện chúng hiệu quả hơn? (Chọn hai)",
      ["Giúp hỗ trợ tinh thần.", "Tạo một bản tóm tắt của một lượng lớn văn bản.", "Lập danh sách thực phẩm cần mua từ một công thức nấu ăn.", "Giúp tạo ra một tác phẩm nghệ thuật gốc."], [1, 2],
      "AI tạo sinh giúp lập danh sách mua sắm từ công thức hoặc tóm tắt lượng lớn văn bản. Nó không tạo nội dung gốc (kết quả luôn đến từ dữ liệu hiện có) và không nhằm hỗ trợ tinh thần."),

    M("Một số hệ quả pháp lý khi sử dụng nội dung được tạo ra bởi AI tạo sinh một cách không phù hợp là gì? (Chọn hai)",
      ["Vi phạm bản quyền.", "Khiếu nại về tội xúc phạm danh dự.", "Thiên vị.", "Mã hóa."], [0, 1],
      "Hệ quả pháp lý gồm khiếu nại về tội xúc phạm danh dự và vi phạm bản quyền. Thiên vị dẫn đến việc có thể dùng nội dung không phù hợp; mã hóa dữ liệu xóa thông tin cá nhân khỏi dữ liệu."),

    Y("Đối với mỗi tuyên bố sau đây liên quan đến quyền riêng tư dữ liệu và AI tạo sinh, hãy cho biết Yes nếu tuyên bố đó đúng và No nếu nó sai.",
      [["Nội dung do con người tạo có thể được sử dụng để đào tạo mô hình AI.", true],
       ["Mọi người có thể chọn không sử dụng dữ liệu của họ trong mô hình AI.", true],
       ["Các công cụ AI tạo sinh trả về dữ liệu cá nhân giống như các trang web có về mọi người.", false]],
      "Các công cụ AI tạo sinh không trả về dữ liệu cá nhân của mọi người trừ khi dữ liệu đó được nhập vào mô hình AI."),

    M("Những loại nội dung nào được tạo bằng AI tạo sinh có thể dẫn đến các hệ quả dân sự (bị kiện) hoặc hình sự (bị truy tố)? (Chọn hai)",
      ["Bắt nạt", "Cảm xúc tiêu cực", "Nói chuyện phiếm", "Rình rập", "Loại trừ"], [0, 3],
      "Bắt nạt, tội ác thù hận, gian lận, rình rập và gian lận đều có thể dẫn đến hệ quả dân sự hoặc hình sự. Cảm xúc tiêu cực, loại trừ và tin đồn có khả năng gây hại nhưng không dẫn đến hệ quả dân sự/hình sự."),

    S("Câu lệnh AI tạo sinh nào đang sử dụng kỹ thuật khai thác kiến thức (generate knowledge prompt)?",
      ["Định nghĩa về thổi thủy tinh.",
       "Định nghĩa về thổi thủy tinh. Sau đó cho tôi biết nó được sử dụng như thế nào để làm chai coca.",
       "Nếu một căn phòng là 10 feet x 8 feet, diện tích của căn phòng là bao nhiêu? Nhân hai bên để có kết quả.",
       "Một chiếc sedan được sử dụng để lái xe trong thành phố. Một chiếc SUV được sử dụng để lái xe ngoài trời. Vai trò của crossover là gì?"], 1,
      "Câu lệnh khai thác kiến thức yêu cầu kiến thức chung về chủ đề rồi đến kiến thức cụ thể. Chia nhỏ các bước là chain-of-thought; không có bối cảnh là zero-shot; có một số hướng dẫn là few-shot."),

    S("Bạn là một giáo viên Sinh học tại một trường cao đẳng cộng đồng. Bạn muốn giới thiệu một công cụ AI cho sinh viên năm nhất của mình để giúp họ học các khái niệm mới, luyện tập viết và chuẩn bị cho các kỳ thi.\n\nCông cụ AI nào tốt nhất trong việc tạo ra các cuộc hội thoại giống con người, trả lời câu hỏi và cung cấp thông tin về nhiều chủ đề khác nhau?",
      ["ChatGPT", "Stable Diffusion", "Azure AI Studio", "Adobe Firefly"], 0,
      "ChatGPT là công cụ tốt nhất để tạo hội thoại giống con người và trả lời câu hỏi. Azure AI Studio là nền tảng doanh nghiệp; Stable Diffusion và Adobe Firefly thiên về tạo/chỉnh sửa hình ảnh và video."),

    S("Các bạn cùng lớp của bạn đã lập một nhóm học tập để chuẩn bị cho kỳ thi cuối kỳ môn Lịch sử Thế giới. Nhóm đã quyết định mỗi người sẽ chia sẻ các ghi chú đã viết trong suốt học kỳ, sau đó sử dụng AI tạo sinh để hỗ trợ việc ôn tập cho kỳ thi cuối kỳ.\n\nCâu lệnh nào sẽ tóm tắt thông tin được nhóm xem xét một cách tốt nhất?",
      ["Sử dụng đề cương môn học Lịch sử Thế giới đã tải lên để tạo một bản tóm tắt.",
       "Phân tích các ghi chú đã tải lên và sắp xếp thông tin theo thứ tự thời gian.",
       "Tạo một bản đề cương ôn tập về Lịch sử Thế giới.",
       "Viết một bản tóm tắt về Lịch sử Thế giới có thể dùng để giảng dạy cho một nhóm học sinh."], 1,
      "Câu lệnh tốt nhất là phân tích các ghi chú đã tải lên và sắp xếp thông tin theo thứ tự thời gian, vì nó dựa trên chính nội dung nhóm đã xem xét."),

    S("Các học sinh ở trường mới của bạn được mời nộp tác phẩm nghệ thuật về một linh vật. Tên linh vật là Tornados.\n\nBạn nên sử dụng câu lệnh AI nào?",
      ["Tạo một hình ảnh hoạt hình biến hình (animorphic) của một cơn lốc xoáy đang ôm quả bóng bầu dục và đội mũ bảo hiểm bóng bầu dục",
       "Tạo một hình ảnh động (GIF) về lốc xoáy sử dụng màu sắc của trường.",
       "Tạo một hình ảnh học sinh đang cưỡi trên lốc xoáy.",
       "Tạo một hình ảnh ghép cảnh lốc xoáy quét qua trường học."], 0,
      "Câu lệnh AI tốt nhất là tạo một hình ảnh hoạt hình biến hình (animorphic) của một cơn lốc xoáy đang ôm quả bóng bầu dục và đội mũ bảo hiểm bóng bầu dục."),

    S("Bạn được giao nhiệm vụ chuyển đổi một video hướng dẫn sao cho người xem không thể sử dụng âm thanh vẫn có thể tiếp cận được.\n\nBạn nên sử dụng câu lệnh AI nào?",
      ["Thêm phụ đề vào video đã tải lên.", "Chuyển video này thành một bài thuyết trình dạng slide.", "Tắt âm thanh của video này và thêm phụ đề.", "Dịch video đã tải lên sang tiếng Tây Ban Nha."], 0,
      "Để video có thể tiếp cận với người xem không dùng được âm thanh, hãy ra lệnh cho AI thêm phụ đề vào video đã tải lên."),

    X("Bạn cần cải thiện một câu lệnh AI ban đầu để nhận được kết quả đầu ra có mục tiêu cụ thể hơn. Hãy di chuyển từng loại cải tiến ở bên trái đến ví dụ phù hợp ở bên phải.",
      [["Nội dung", "Hãy cụ thể, không viết tắt cũng như không mặc định rằng công cụ tạo AI sẽ hiểu rõ các tình huống."],
       ["Phong cách", "Cung cấp ví dụ về tông giọng (tone) hoặc hướng dẫn thiết kế (design guide)."],
       ["Vai trò", "Gán cho AI một vai trò."],
       ["Bối cảnh", "Hãy mô tả tình huống, không được mặc định rằng công cụ AI tạo sinh sẽ biết các điều kiện xung quanh."]],
      "Nội dung: cụ thể, không viết tắt. Phong cách: cung cấp ví dụ về tông giọng hoặc hướng dẫn thiết kế. Vai trò: gán cho AI một vai trò. Bối cảnh: mô tả tình huống, không mặc định AI biết điều kiện xung quanh."),

    M("Sau khi một câu lệnh ban đầu tạo ra đầu ra, bạn có thể bổ sung thêm ba yếu tố đầu vào nào để gợi ra kết quả có mục tiêu rõ hơn? (Chọn 3)",
      ["Cuộc hội thoại trước đó trong cùng một chuỗi hội thoại.", "Biểu mẫu.", "Tài liệu để sử dụng cho việc nghiên cứu.", "Video hướng dẫn.", "Website."], [0, 1, 2],
      "Các yếu tố bổ sung gồm: ví dụ minh họa (few-shot), bảng thuật ngữ để dịch, biểu mẫu (templates), tài liệu để nghiên cứu, và cuộc hội thoại trước đó trong cùng chuỗi."),

    M("Một công ty xây dựng mô hình AI để dự đoán nhu cầu nhân sự cho một trung tâm giải trí. Họ muốn đảm bảo dữ liệu cá nhân không được đưa vào mô hình để loại bỏ nguy cơ trộm cắp danh tính.\n\nLoại hành động nào có thể được thực thi nếu một mô hình AI gây ra hành vi trộm cắp danh tính? (Chọn hai)",
      ["Hành động dân sự (bị kiện)", "Hành động hình sự (bị truy tố)", "Hành động kỷ luật nội bộ", "Hành động quảng bá thương hiệu"], [0, 1],
      "Công ty chủ yếu lo ngại về hai vấn đề: hành động dân sự (bị kiện) có thể bị thực hiện bởi những người bị đánh cắp danh tính và hành động hình sự (bị truy tố) vì vi phạm pháp luật.",
      { note: "Trong file PDF câu này không hiển thị các đáp án, nên 2 đáp án đúng được lấy từ phần giải thích, 2 đáp án nhiễu là do mình tự thêm." }),

    S("Làm thế nào người dùng có thể tránh được những rủi ro liên quan đến việc sử dụng kết quả đầu ra của AI tạo sinh?",
      ["Tránh sử dụng AI.", "Trích dẫn các nguồn thông tin của bạn.", "Thuê một luật sư giỏi.", "Sự giám sát của con người."], 3,
      "Để tránh rủi ro từ đầu ra của AI, luôn xác thực thông tin bằng sự giám sát của con người. Kiểm tra tính xác thực thường xuyên giúp ngăn chặn việc phát tán thông tin sai lệch hoặc có hại."),

    M("Ba tác động tích cực nào mà AI Tạo sinh mang lại cho xã hội? (chọn 3)",
      ["Giúp vượt qua rào cản ngôn ngữ.", "Giúp thực hiện các nhiệm vụ cuộc sống hàng ngày hiệu quả hơn.", "Mang lại sự bình đẳng trong giáo dục.", "Khơi nguồn sáng tạo.", "Xây dựng an toàn tài chính."], [0, 1, 3],
      "Tác động tích cực gồm: giao tiếp tốt hơn qua các ngôn ngữ, khơi nguồn sáng tạo, và thực hiện các nhiệm vụ cuộc sống hàng ngày hiệu quả hơn (thực đơn, công thức, danh sách mua sắm, tóm tắt tin nhắn dài...).")
  ]
};
