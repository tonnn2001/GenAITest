const REC2 = { note: "Câu này trong file PDF không hiển thị đủ các mục kéo-thả/đáp án, nên nội dung được dựng lại từ phần giải thích." };

window.EXAMS.exam2 = {
  id: "exam2",
  title: "Practice Exam 2",
  subtitle: "GMetrix – Generative AI",
  questions: [
    X("Sử dụng kéo và thả để nối mỗi loại AI với một tình huống mà loại AI đó được sử dụng.",
      [["AI Tạo sinh", "Tạo ra một nhân vật trong một trò chơi điện tử."],
       ["AI Dự đoán", "Ước tính doanh số bán hàng năm tới dựa trên dữ liệu bán hàng hiện có."],
       ["AI Phân loại", "Gán các vận động viên trượt tuyết vào các nhóm học theo khả năng của họ."],
       ["AI Phân tích", "Giúp một cửa hàng quần áo xác định các mô hình bán hàng."],
       ["AI Thống kê", "Giúp xác định đánh giá rủi ro cho các dự án đường bộ."]],
      "AI tạo sinh tạo nội dung; AI dự đoán ước tính dữ liệu tương lai; AI phân loại gán dữ liệu vào nhóm; AI phân tích khám phá các mô hình (ví dụ mô hình mua sắm); AI thống kê dùng để tìm hiểu dữ liệu như đánh giá rủi ro dự án."),

    X("Một công ty tiếp thị đang tìm hiểu về các mô hình AI và cố gắng tìm ra mô hình AI nào nên sử dụng để nâng cao hoạt động kinh doanh của mình.\n\nPhân loại mỗi mô hình AI tạo sinh là mô hình văn bản hoặc mô hình hình ảnh.",
      [["Open AI GPTx", "Mô hình Văn bản"],
       ["Google Gemini", "Mô hình Văn bản"],
       ["DALL-E", "Mô hình Hình ảnh"],
       ["Adobe Firefly", "Mô hình Hình ảnh"]],
      "Mô hình văn bản: Open AI GPTx, Google Gemini. Mô hình hình ảnh: DALL-E, Adobe Firefly.", REC2),

    S("Một công ty nghiên cứu đang tìm hiểu về AI và các mô hình khác nhau của nó.\n\nMô hình nào sử dụng lượng lớn dữ liệu huấn luyện để hình thành nội dung do AI tạo ra?",
      ["Mô hình Ngôn ngữ Lớn (LLM)", "Bộ biến đổi Chuyển đổi Văn bản sang Văn bản (T5)", "Biểu diễn Mã hóa Hai chiều từ Bộ biến đổi (BERT)", "OpenAI Codex"], 0,
      "LLM sử dụng lượng lớn dữ liệu huấn luyện để hình thành nội dung do AI tạo ra. BERT hiểu ngữ cảnh của từ; T5 biến mọi tác vụ NLP thành văn bản-sang-văn bản; Codex tạo mã lập trình."),

    M("Một công ty đang chuyển sang sử dụng AI tạo sinh để tạo ra hình ảnh dùng trong các quảng cáo tạp chí.\n\nHai tính năng máy tính nào là quan trọng nhất trên một máy chủ sẽ chạy các mô hình hình ảnh này? (Chọn hai)",
      ["Một bộ nguồn mạnh mẽ.", "Một lượng RAM đáng kể.", "Một bộ xử lý trung tâm (CPU) mạnh mẽ.", "Một bộ xử lý đồ họa (GPU) mạnh mẽ."], [0, 3],
      "Máy chủ chạy mô hình hình ảnh cần một bộ nguồn mạnh mẽ và một GPU mạnh mẽ. Với mô hình hình ảnh, GPU đảm nhận hầu hết công việc mô hình hóa nên CPU và RAM ít quan trọng hơn."),

    X("Sử dụng kéo và thả, hãy ghép mỗi kịch bản AI tạo sinh với loại AI đang được sử dụng.",
      [["Một đoạn lời dẫn biến thành một nhân vật trên màn hình lồng tiếng cho lời dẫn đó.", "Âm thanh sang video (audio-to-video)"],
       ["Nói vào một ứng dụng ngôn ngữ nước ngoài và nhìn thấy bản dịch.", "Âm thanh sang văn bản (audio-to-text)"],
       ["Chuyển ngữ một video.", "Video sang văn bản (video-to-text)"],
       ["Nhập một cụm từ và tạo ra một bức ảnh.", "Văn bản sang hình ảnh (text-to-image)"]],
      "Lời dẫn → nhân vật lồng tiếng: audio-to-video. Nói vào app ngôn ngữ và xem bản dịch: audio-to-text. Chuyển ngữ video: video-to-text. Nhập cụm từ tạo ảnh: text-to-image."),

    M("Những tình huống nào là ví dụ về mô hình AI tạo sinh thực hiện các nhiệm vụ cho con người trong các ứng dụng độc lập? (Chọn hai)",
      ["Hiển thị nhu cầu nhân sự dựa trên xu hướng lưu lượng khách ghé thăm.",
       "Đề xuất một đơn thuốc cho ai đó dựa trên kết quả xét nghiệm.",
       "Nhận được câu trả lời cho câu hỏi nghiên cứu bằng cách sử dụng Siri.",
       "Gửi lời nhắc cho ai đó dựa trên lịch cá nhân trong Outlook."], [2, 3],
      "Gửi lời nhắc dựa trên lịch trong Outlook và hỏi Siri là ví dụ về AI tạo sinh. Hiển thị nhu cầu nhân sự dựa trên lưu lượng khách là AI dự đoán; đề xuất đơn thuốc là AI đề xuất."),

    X("Sử dụng thao tác kéo và thả để ghép mỗi công cụ AI với một nhiệm vụ mà công cụ đó thực hiện cho người dùng.",
      [["Meta GPT", "Tạo nhiều bài đăng trên mạng xã hội, dựa trên một số thông tin đầu vào."],
       ["Adobe Express", "Tạo tài liệu thiết kế đồ họa, bao gồm tờ rơi, biểu ngữ và hình ảnh mạng xã hội."],
       ["Claude", "Tạo tài liệu kỹ thuật dựa trên thông tin Giao diện Lập trình Ứng dụng (API)."]],
      "Meta GPT: tạo nhiều bài đăng mạng xã hội. Adobe Express: tạo tài liệu thiết kế đồ họa. Claude: tạo tài liệu kỹ thuật dựa trên thông tin API."),

    Y("Với mỗi câu lệnh được sử dụng để cố gắng tạo nội dung bằng AI tạo sinh, hãy chỉ ra Yes nếu câu lệnh sẽ tạo ra nội dung, và No nếu nó không tạo ra nội dung.",
      [["Soạn thảo một bản Chính sách cho phép sử dụng (AUP) cho một học khu.", true],
       ["Đưa ra một số lời khuyên về sơ yếu lý lịch và các thủ thuật khi tham gia phỏng vấn cho một vị trí trong học khu.", true],
       ["Viết một câu chuyện về việc khai trương một ngôi trường mới.", true],
       ["Cho tôi xem chính sách AUP chính xác từ một học khu.", false]],
      "AI tạo sinh sẽ không tiết lộ một tài liệu độc quyền (hoặc lưu hành nội bộ) từ một tổ chức."),

    X("Sử dụng danh sách thả xuống để xác định các loại tóm tắt của một báo cáo hoặc một cuốn sách.",
      [["Loại tóm tắt này lấy ra các câu quan trọng nhất từ một báo cáo hoặc một cuốn sách.", "Extractive: Tóm tắt Trích xuất"],
       ["Loại tóm tắt này diễn giải lại văn bản từ một báo cáo hoặc một cuốn sách thành một bản tóm tắt.", "Abstractive: Tóm tắt Trừu tượng"]],
      "Tóm tắt trích xuất kéo các câu quan trọng nhất trực tiếp. Tóm tắt trừu tượng diễn giải lại văn bản thành một bản tóm tắt. Tóm tắt dựa trên truy vấn cung cấp câu trả lời cho các câu hỏi cụ thể.",
      null, ["Query-based: Tóm tắt Dựa trên Truy vấn"]),

    S("Một công ty cung cấp dịch vụ ăn uống đang soạn thảo một bản đề xuất kinh doanh và cần AI hỗ trợ viết một bản tóm tắt vận hành.\n\nLoại câu lệnh nào sẽ cho ra một dàn ý, xem lại dàn ý đó, và sau đó viết thành bản tóm tắt?",
      ["Chain-of-thought - Câu lệnh theo Tư duy chuỗi", "Iterative refinement - Tinh chỉnh lặp lại", "Recursive - Câu lệnh đệ quy", "Decomposition - Câu lệnh phân tách"], 0,
      "Chain-of-thought bao gồm việc khái niệm hóa dàn ý, xem lại dàn ý, rồi viết đoạn văn. Iterative refinement tinh chỉnh qua nhiều câu lệnh; recursive dùng một đầu ra làm đầu vào cho câu lệnh sau; decomposition chia nhỏ nhiệm vụ."),

    Y("Đối với mỗi nhận định liên quan đến Dữ liệu định danh cá nhân (PII) và quyền riêng tư dữ liệu trong AI tạo sinh, hãy chỉ ra Yes nếu nhận định đó là đúng và No nếu nhận định đó là sai.",
      [["Che dấu dữ liệu tĩnh (Static data masks) thay đổi vĩnh viễn dữ liệu được sử dụng trong một mô hình AI.", true],
       ["Dữ liệu định danh cá nhân (PII) bị để lại trong AI tạo sinh có thể gây ra hành vi trộm cắp danh tính.", true],
       ["Mã hóa bằng token sử dụng tên giả để che giấu dữ liệu.", false]],
      "Mã hóa bằng token sử dụng ký hiệu để che giấu dữ liệu. Giả danh (pseudonymization) mới sử dụng tên giả để che giấu dữ liệu."),

    M("Một đội thể thao chuyên nghiệp đang tìm cách sử dụng AI tạo sinh cho mục đích tiếp thị muốn biết những hạn chế của AI tạo sinh.\n\nMột số hạn chế của AI tạo sinh là gì? (Chọn hai)",
      ["Lượng dữ liệu được xuất ra từ một mô hình có giới hạn trần.", "Lượng dữ liệu được nhập vào một mô hình có giới hạn trần.", "Đầu ra không phải lúc nào cũng đáng tin cậy.", "Có sự thiếu hụt các tiêu chuẩn chung về cách thức sử dụng AI."], [2, 3],
      "Hạn chế gồm đầu ra không đáng tin cậy và không có các tiêu chuẩn chung về cách thức sử dụng AI. Lượng dữ liệu nhập vào/xuất ra không bị giới hạn ở bất kỳ số lượng bản ghi nào."),

    S("Một công ty đang phát triển một mô hình AI để sử dụng dữ liệu từ các cuộc trò chuyện qua điện thoại để xây dựng một chatbot cần phải đảm bảo rằng các cuộc trò chuyện về khách hàng không được đưa vào mô hình.\n\nNhững cài đặt nào đảm bảo rằng những cuộc trò chuyện này không được đưa vào mô hình?",
      ["Cài đặt quyền riêng tư", "Cảm xúc", "Làm sạch dữ liệu", "Siêu tham số"], 0,
      "Cài đặt quyền riêng tư giúp đảm bảo các cuộc trò chuyện không nhằm mục đích đưa vào mô hình sẽ không được dùng để huấn luyện. Cảm xúc: tích cực/tiêu cực; làm sạch dữ liệu: loại bỏ thông tin thừa; siêu tham số: kiểm soát việc huấn luyện."),

    S("Việc sử dụng dữ liệu thay đổi nhanh chóng để tạo ra khi sử dụng AI tạo sinh có ảnh hưởng gì?",
      ["Quá trình tạo ra đầu ra bị làm chậm.", "Dữ liệu hiện tại trở nên lỗi thời", "Dữ liệu luôn luôn mới nhất", "Kết quả đầu ra đã tạo từ trước đó bị thay đổi."], 1,
      "Dữ liệu thay đổi nhanh có thể làm cho dữ liệu hiện tại trở nên lỗi thời, vì LLM cần được huấn luyện lại trước khi tập dữ liệu được cập nhật."),

    X("Sử dụng phương pháp kéo và thả để ghép mỗi câu lệnh với sự biến đổi mà nó sẽ thực hiện đối với các nội dung được tạo ra bằng AI tạo sinh.",
      [["Định dạng kết quả đầu ra theo Hướng dẫn Phong cách AP", "Chỉnh sửa và hiệu đính tài liệu."],
       ["Hiển thị xu hướng dân số khu vực dưới dạng biểu đồ", "Cung cấp hình ảnh trực quan hóa dữ liệu"],
       ["Biến nội dung mô tả cảnh bãi biển thành một bức ảnh.", "Chuyển đổi nội dung thành một loại phương tiện truyền thông khác."]],
      "Định dạng theo AP Style = chỉnh sửa và hiệu đính. Biểu đồ xu hướng dân số = trực quan hóa dữ liệu. Biến mô tả thành ảnh = chuyển đổi sang loại phương tiện khác."),

    Y("Đối với mỗi nhận định liên quan đến các câu lệnh dịch nội dung sang ngôn ngữ khác, hãy chỉ ra Yes (có) nếu nhận định đó là đúng và No (không) nếu nhận định đó là sai.",
      [["Một câu lệnh đơn lẻ có thể tạo ra nội dung và dịch nội dung đó sang một ngôn ngữ khác.", true],
       ["Một kết quả đầu ra trước đó có thể được dịch sang một ngôn ngữ khác trong câu lệnh tiếp theo.", true],
       ["Nội dung được tạo ra phải có cùng ngôn ngữ với câu lệnh của nó trước khi nội dung đó có thể được dịch.", false]],
      "Vì một câu lệnh đơn lẻ có thể tạo nội dung và dịch luôn, nên nội dung không cần được tạo bằng cùng ngôn ngữ với câu lệnh trước khi dịch."),

    X("Một nhà xuất bản tạp chí ngoài trời đang tìm cách sử dụng AI tạo sinh để giúp tạo ra hình ảnh nền cho nội dung.\n\nSử dụng phương pháp kéo và thả, hãy ghép mỗi câu lệnh với mục đích của nó.",
      [["Hiện một bức ảnh về hai căn nhà gỗ trên núi.", "Tạo ra một hình ảnh cho một mục đích cụ thể."],
       ["Yêu cầu một bức tranh màu nước về một người phụ nữ và con chó của cô ấy.", "Một ý tưởng nghệ thuật."],
       ["Hãy thể hiện bức ảnh này như thể đó là vào buổi chiều muộn.", "Chuyển đổi một hình ảnh."]],
      "Ảnh hai căn nhà gỗ trên núi = tạo hình ảnh cho mục đích cụ thể. Tranh màu nước người phụ nữ và con chó = ý tưởng nghệ thuật. Thể hiện ảnh vào buổi chiều muộn = chuyển đổi hình ảnh."),

    S("Câu lệnh AI tạo sinh nào là phù hợp nhất để biến một hình ảnh tĩnh thành video?",
      ["Tạo hoạt ảnh cho hình ảnh những ngọn núi từ trái sang phải.",
       "Tạo một video với hai ngọn núi như thể máy ảnh đang lia qua chúng từ trái sang phải.",
       "Thêm tuyết vào những ngọn núi trong video đã tải lên.",
       "Tạo một video sử dụng hình ảnh những ngọn núi phủ tuyết và hình ảnh những ngọn núi không có tuyết."], 0,
      "Câu lệnh yêu cầu hình ảnh chuyển động hoặc tạo hoạt ảnh là phù hợp để biến hình ảnh thành video. Các phương án khác là tạo video từ văn bản, thêm đối tượng vào video, hoặc nội suy giữa hai hình ảnh."),

    S("Bạn có một video đen trắng về một cảnh công viên với sân chơi trẻ em và những đứa trẻ trong video.\n\nBạn sẽ sử dụng câu lệnh nào để tô màu video đó chính xác nhất có thể?",
      ["Tô màu video cảnh công viên.",
       "Chuyển đổi video cảnh công viên thành một video có tông màu.",
       "Tô màu video, sử dụng màu sắc chính xác cho bầu trời và cỏ, tông màu da, và màu quần áo mà trẻ em thường mặc.",
       "Chuyển bầu trời thành màu xanh dương và cỏ thành màu xanh lá cây."], 2,
      "Khi tô màu video, càng cung cấp nhiều chi tiết thì đầu ra càng chính xác. Chỉ yêu cầu tô màu sẽ dẫn đến rủi ro thiếu chính xác."),

    Y("Đối với mỗi đặc điểm được liệt kê sau đây để xây dựng một câu lệnh AI tạo sinh nhằm tạo ra một hình đại diện đọc một kịch bản, hãy chỉ ra Yes nếu đặc điểm đó nên được liệt kê và No nếu không.",
      [["Nhân vật nên được đồng bộ khẩu hình miệng với văn bản.", true],
       ["Nhân vật nên có cử chỉ theo kịch bản.", true],
       ["Nhân vật nên thể hiện cảm xúc đa dạng trong suốt video.", false]],
      "Một câu lệnh mô tả quá phức tạp hoặc quá mơ hồ sẽ không tạo ra một video tốt về hình đại diện đọc một kịch bản."),

    M("Một video hướng dẫn sắp được trình chiếu cho những người không nói cùng ngôn ngữ với người thuyết trình.\n\nKhi viết câu lệnh (prompt) để tự động tạo phụ đề, những hướng dẫn nào sau đây nên được đưa vào trong prompt? (Chọn 2 phương án)",
      ["Phông chữ dễ đọc.", "Bản chép lời chính xác.", "Viết lại nội dung để đúng ngữ pháp hơn.", "Cố gắng thể hiện cảm xúc hoặc tâm trạng của người nói."], [0, 1],
      "Câu lệnh tạo phụ đề nên yêu cầu phông chữ dễ đọc và bản chép lời chính xác. Không nên viết lại cho đúng ngữ pháp hoặc thể hiện cảm xúc vì có thể làm phụ đề sai lệch so với nội dung thật."),

    S("Một quản trị viên hệ thống quản lý học tập (LMS) mới muốn tìm hiểu cách các tệp XML được sử dụng để cấu hình hệ thống LMS.\n\nCâu lệnh (prompt) nào dưới đây là phù hợp nhất để nhận được thông tin đó?",
      ["Giải thích cách các tệp XML được sử dụng để cấu hình các hệ thống quản lý học tập.",
       "Giải thích cách các tệp XML được sử dụng để cấu hình LMS.",
       "Giải thích cách các tệp XML cấu hình LMS.",
       "Giải thích cách các tệp XML cấu hình hệ thống quản lý học tập của tôi."], 0,
      "Quản trị viên mới chưa quen với viết tắt, nên câu lệnh nên viết đầy đủ “hệ thống quản lý học tập” thay vì “LMS”, và hỏi chung chứ không phải “của tôi”."),

    S("Một quản trị viên trang web không thành công khi cố gắng tạo ra phần mô tả cho một trung tâm võ thuật. Một đồng nghiệp gợi ý rằng nên thêm một “persona” (nhân vật hoặc vai trò) vào câu lệnh để có kết quả tốt hơn.\n\nCâu lệnh nào dưới đây thể hiện việc thêm persona như đồng nghiệp đã gợi ý?",
      ["Hãy mô tả, với giọng điệu tràn đầy năng lượng, những lợi ích của việc tham gia các khóa học võ thuật tại trung tâm của bạn.",
       "Là một huấn luyện viên võ thuật tràn đầy năng lượng, hãy mô tả những lợi ích của việc tham gia các khóa học võ thuật tại trung tâm của bạn.",
       "Hãy mô tả những lợi ích của việc tham gia các khóa học võ thuật tại trung tâm của bạn.",
       "Là một huấn luyện viên võ thuật, hãy mô tả những lợi ích của việc tham gia các khóa học võ thuật tại trung tâm của bạn."], 1,
      "Persona = đặt đầu ra vào góc nhìn của một người cụ thể (huấn luyện viên võ thuật) và thêm cảm xúc/phong cách đặc trưng (tràn đầy năng lượng). Các câu khác chỉ thêm vai trò hoặc chỉ thêm cảm xúc."),

    S("Một nhà xuất bản muốn sử dụng Trí tuệ nhân tạo tạo sinh (Generative AI) để dịch các bài viết trong bản tin của một tạp chí công nghệ sang nhiều ngôn ngữ khác nhau. Tuy nhiên, nhà xuất bản lo ngại rằng một số từ chuyên ngành có thể bị dịch sai ngữ cảnh.\n\nVậy nhà xuất bản nên thêm yếu tố nào vào mỗi câu lệnh (prompt) để đảm bảo các từ đó được dịch chính xác theo ngữ cảnh nhất?",
      ["Hướng dẫn về phong cách viết.", "Vai trò.", "Bảng thuật ngữ.", "Mẫu (template)."], 2,
      "Một bảng thuật ngữ (glossary) giúp đảm bảo các từ và cụm từ chuyên ngành được dịch chính xác theo ngữ cảnh. Hướng dẫn phong cách, vai trò và template không giúp cải thiện độ chính xác khi dịch."),

    Y("Với mỗi loại dữ liệu bổ sung có thể được thêm vào trong một câu lệnh (prompt) của Trí tuệ nhân tạo tạo sinh (Generative AI), hãy chọn “Có” (Yes) nếu dữ liệu đó có thể giúp tạo ra kết quả đầu ra có mục tiêu cụ thể hơn, và chọn “Không” (No) nếu không giúp được.",
      [["Thêm các tài liệu để AI sử dụng làm tư liệu nghiên cứu.", true],
       ["Tham chiếu đến một cuộc trò chuyện trước đó trong cùng một chuỗi hội thoại.", true],
       ["Yêu cầu AI tạo bản tóm tắt.", false]],
      "Thêm tài liệu nghiên cứu hoặc tham chiếu cuộc trò chuyện trước giúp AI hiểu rõ hơn ngữ cảnh. Yêu cầu tạo bản tóm tắt chỉ thu hẹp phạm vi nội dung, không giúp đầu ra có mục tiêu cụ thể hơn."),

    M("Một trợ lý nghiên cứu đang thực hiện một số nghiên cứu lịch sử bằng cách sử dụng Trí tuệ nhân tạo tạo sinh (Generative AI).\n\nTrợ lý này có thể làm gì để kiểm chứng thông tin được trình bày trong kết quả đầu ra của AI? (Chọn 2 cách)",
      ["Đối chiếu chéo kết quả đầu ra.", "Cho rằng kết quả là chính xác và không cần kiểm chứng.", "Hỏi ý kiến của chuyên gia về chủ đề đó.", "Chạy lại câu lệnh (prompt)."], [0, 2],
      "Hai cách hiệu quả nhất: đối chiếu chéo kết quả với các nguồn đáng tin cậy khác, và hỏi ý kiến chuyên gia trong lĩnh vực. Chạy lại câu lệnh và thấy kết quả tương tự không chứng minh được tính chính xác."),

    Y("Với mỗi phương pháp được sử dụng để kiểm tra độ chính xác của kết quả do Trí tuệ nhân tạo sinh ra, hãy chọn “Có” (Yes) nếu phương pháp đó có thể dùng để xác minh dữ liệu số, và chọn “Không” (No) nếu không thể dùng.",
      [["Sử dụng công cụ phân tích thống kê để xác minh dữ liệu.", true],
       ["Đối chiếu chéo dữ liệu.", true],
       ["Yêu cầu công cụ AI tự kiểm tra độ chính xác của các con số.", false]],
      "Một công cụ AI không thể xác minh điều mà chính nó không biết chắc chắn là đúng ngay từ đầu, nên không nên yêu cầu AI tự xác nhận độ chính xác của các con số nó tạo ra."),

    M("Những yếu tố nào trong Trí tuệ nhân tạo có thể khiến các mô hình AI khác nhau có mức độ thiên lệch (bias) khác nhau? (Chọn 2 yếu tố)",
      ["Tinh chỉnh (Fine-tuning)", "Phân tách từ thành mã (Tokenization)", "Dữ liệu huấn luyện được chia sẻ (Shared training data)", "Kỹ thuật tiền xử lý dữ liệu (Preprocessing techniques)"], [0, 3],
      "Tinh chỉnh và các kỹ thuật tiền xử lý dữ liệu có thể khiến các mô hình có mức độ thiên vị khác nhau. Các mô hình dùng cùng dữ liệu huấn luyện thường có cùng kiểu thiên lệch; tokenization thường không gây thiên lệch khác nhau."),

    S("Câu lệnh nào dưới đây có thể gây ra sự thiên lệch (bias) trong kết quả mà Trí tuệ nhân tạo tạo ra?",
      ["Hãy cho tôi biết giới hạn về kích thước của một cơ sở dữ liệu MySQL.",
       "Hãy cho tôi thấy tất cả lợi ích của việc sử dụng một hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) và đưa ra ví dụ về những công cụ mà chúng ta có thể sử dụng để lưu trữ dữ liệu về tình trạng sức khỏe và thể lực.",
       "Hãy cho tôi biết tất cả những lợi ích của MySQL trong việc lưu trữ dữ liệu về tình trạng sức khỏe và thể lực.",
       "Hãy cho tôi biết các ưu điểm và nhược điểm của việc sử dụng MySQL để lưu trữ dữ liệu về tình trạng sức khỏe và thể lực."], 2,
      "Câu lệnh chỉ yêu cầu liệt kê lợi ích (mặt tích cực) của một công cụ cụ thể (MySQL), không hỏi nhược điểm hay so sánh, nên câu trả lời thiên về một chiều. Câu hỏi về ưu/nhược điểm là cân bằng; câu hỏi giới hạn kích thước là kỹ thuật, khách quan."),

    Y("Với mỗi câu dưới đây, hãy chọn Yes (Đúng) nếu phát biểu đúng, và No (Sai) nếu phát biểu sai.",
      [["Generative AI có thể được sử dụng để lan truyền sự thiên lệch (bias).", true],
       ["Không tính đến các ngày lễ tôn giáo khi lập lịch làm việc là một ví dụ về sự thiên lệch.", true],
       ["Tình trạng kinh tế có thể là một nguồn gây thiên lệch.", true]],
      "AI học từ dữ liệu do con người tạo ra nên có thể tái tạo thành kiến; bỏ qua ngày lễ của một nhóm tôn giáo là thiên lệch; dữ liệu huấn luyện chủ yếu từ một tầng lớp xã hội cũng có thể gây thiên lệch."),

    X("Phân loại từng câu lệnh dùng để tạo hình ảnh về sân bóng chày sau đây là câu lệnh zero-shot hay câu lệnh few-shot.",
      [["Hãy tạo một hình ảnh về sân bóng chày.", "Zero-shot"],
       ["Hãy tạo một hình ảnh về sân vận động bóng chày.", "Zero-shot"],
       ["Hãy tạo một hình ảnh về những người đang chơi bóng rổ, sau đó tạo một hình ảnh về sân bóng chày nơi mọi người đang chơi bóng chày.", "Few-shot"],
       ["Sử dụng hình ảnh này của một sân vận động bóng chày hạng nhỏ làm điểm khởi đầu, hãy tạo một hình ảnh về sân vận động nơi mọi người đang chơi bóng chày.", "Few-shot"]],
      "Zero-shot: yêu cầu tạo nội dung mà không có ví dụ hoặc hướng dẫn cụ thể nào trước đó. Few-shot: cung cấp một hoặc vài ví dụ, hoặc hướng dẫn dựa trên ngữ cảnh có sẵn.", REC2),

    Y("Với mỗi câu dưới đây, hãy chọn Yes (Đúng) nếu phát biểu đúng, và No (Sai) nếu phát biểu sai.",
      [["Dữ liệu có bản quyền thường được dùng để huấn luyện các mô hình AI.", true],
       ["Quy trình sử dụng AI trong môi trường chuyên nghiệp của công ty nên được ghi chép và minh bạch.", true],
       ["Công ty nên tuân theo các quy định của cơ quan quản lý ngành về việc sử dụng dữ liệu có bản quyền trong AI.", false]],
      "Hiện chưa có cơ quan quản lý chính thức nào đặt ra quy định cụ thể về việc AI dùng dữ liệu có bản quyền. Vì vậy công ty nên xin phép chủ sở hữu dữ liệu và tuân thủ quy trình đạo đức nội bộ."),

    M("AI tạo sinh giúp con người giao tiếp hiệu quả hơn giữa các ngôn ngữ khác nhau bằng cách nào? (Chọn hai)",
      ["Viết theo nhiều phong cách khác nhau", "Sửa ngữ pháp", "Dịch ngôn ngữ theo thời gian thực", "Cung cấp các bài học để học ngôn ngữ"], [2, 3],
      "Dịch theo thời gian thực và cung cấp bài học ngôn ngữ giúp giao tiếp giữa các ngôn ngữ. Sửa ngữ pháp và viết theo phong cách chỉ cải thiện ngôn ngữ trong cùng một tiếng."),

    S("Một công ty nghiên cứu khoa học muốn đảm bảo rằng dữ liệu của mình không bị rò rỉ ra các mô hình AI công khai.\n\nVậy công ty nên làm gì?",
      ["Ẩn danh dữ liệu trước khi nhập vào mô hình AI công khai.",
       "Làm theo hướng dẫn từ các cơ quan quản lý về việc xử lý dữ liệu trong mô hình AI.",
       "Thiết lập quy định nội bộ cấm chia sẻ dữ liệu với các mô hình AI công khai.",
       "Không cho phép sử dụng công cụ AI."], 2,
      "Hiện chưa có cơ quan chính thức đặt ra quy định chung cho xử lý dữ liệu AI, nên công ty phải tự xây dựng chính sách bảo mật nội bộ. Không cho dùng AI là không thực tế; ẩn danh chỉ áp dụng khi huấn luyện mô hình nội bộ."),

    X("Sử dụng các mũi tên thả xuống để hoàn thành câu nhận định về cách tránh lan truyền thông tin sai lệch qua AI tạo sinh và hậu quả của việc này.",
      [["Trong một công ty, để tránh lan truyền thông tin sai lệch là cần thiết phải có", "Sự giám sát của con người (human oversight)"],
       ["Làm như vậy sẽ giúp công ty tránh được", "Các hậu quả về tài chính và pháp lý (financial and legal repercussions)"]],
      "Trong một công ty, sự giám sát của con người là cần thiết để tránh lan truyền thông tin sai. Làm như vậy giúp công ty tránh được các hậu quả về tài chính và pháp lý.",
      { note: "Trong file PDF câu này không hiển thị các lựa chọn thả xuống, nên đáp án lấy từ phần giải thích, lựa chọn nhiễu do mình tự thêm." },
      ["Chi phí vận hành tăng cao", "Việc tự động hóa hoàn toàn"]),

    S("Một người dùng Generative AI để tạo ra một hình đại diện (avatar) của một người nổi tiếng, rồi khiến hình đó nói ra điều mà người thật chưa từng nói.\n\nVậy trong trường hợp này, người đó đã tạo ra điều gì?",
      ["Face Swap (Hoán đổi khuôn mặt)", "Synthetic Media (Phương tiện tổng hợp)", "Deepfake (Giả mạo sâu)", "Voice Clone (Giả giọng / Nhái giọng)"], 2,
      "Deepfake là dạng phương tiện tổng hợp dùng để ghép mặt hoặc giọng của ai đó vào video, khiến người xem tưởng họ thật sự nói hoặc làm điều đó. Voice clone chỉ có giọng; face swap chỉ thay khuôn mặt."),

    M("Hai nhận định sai lầm phổ biến về AI tạo sinh? (Chọn hai)",
      ["AI được mọi người trên thế giới sử dụng như nhau.", "AI phân tích các mẫu dữ liệu và biến chúng thành cơ hội.", "AI sẽ làm thay đổi thị trường việc làm.", "AI sẽ thay thế sự giao tiếp giữa con người."], [0, 3],
      "Hai hiểu lầm: AI sẽ thay thế con người trong giao tiếp (không thể thay thế cảm xúc và kết nối thật) và AI được mọi người dùng như nhau (không phải ai cũng có thiết bị, internet, kỹ năng)."),

    M("Những đặc điểm nào của dữ liệu có thể khiến mô hình AI tạo sinh bị thiên lệch (bias)? (Chọn 2)",
      ["Độ tuổi", "Quốc tịch", "Khả năng sử dụng công nghệ", "Dữ liệu không đầy đủ"], [0, 1],
      "Độ tuổi và quốc tịch là những yếu tố dễ làm AI bị thiên lệch. Khả năng sử dụng công nghệ và dữ liệu không đầy đủ không phải là yếu tố gây thiên lệch dữ liệu."),

    M("Đâu là ba trong số các mô hình của Trí tuệ nhân tạo tạo sinh (Generative AI). (Chọn 3 mô hình)",
      ["Bộ mã hóa tự biến phân (Variational Autoencoders – VAEs).", "Đảo ngược (Reversal).", "Mô hình biến đổi (Transformer).", "Dự báo (Forecasting).", "Mô hình khuếch tán (Diffusion)."], [0, 2, 4],
      "Các mô hình phổ biến: Diffusion, Transformer, VAEs và GANs (Mạng đối nghịch sinh)."),

    M("Trong các lựa chọn dưới đây, hai loại nào là dữ liệu đầu vào mà bạn có thể dùng với AI tạo sinh? (Chọn 2)",
      ["Văn bản", "Âm thanh", "Công thức thống kê", "Mạng nơ-ron"], [0, 1],
      "AI tạo sinh có thể nhận nhiều loại đầu vào như văn bản, âm thanh, hình ảnh, video."),

    M("Khi chọn một công cụ AI, bạn cần xem xét những yếu tố nào? (Chọn 3 yếu tố)",
      ["Chi phí", "Tốc độ", "Dễ sử dụng", "Phong cách", "Khả năng tùy chỉnh (Customizability)"], [0, 2, 4],
      "Yếu tố cần cân nhắc: mục đích và tính năng, tính dễ sử dụng, chi phí, cập nhật và hỗ trợ, quyền riêng tư dữ liệu, bảo mật, chất lượng, khả năng tùy chỉnh, các tham số kiểm soát đầu ra."),

    S("Nếu bạn nhập câu lệnh sau vào một AI tạo hình ảnh, thì bạn đang muốn AI tạo ra điều gì?\n\n“Hãy tạo một logo có hình cây thông nằm giữa hai chữ D và C. Hãy làm nổi bật hai màu xanh dương và xanh lá cây.”",
      ["Tạo ra một hình ảnh phục vụ cho một mục đích cụ thể.", "Biến đổi một hình ảnh có sẵn.", "Tóm tắt nội dung của một hình ảnh.", "Khám phá một ý tưởng nghệ thuật."], 0,
      "Câu lệnh yêu cầu AI tạo một logo theo mô tả rõ ràng (cây thông, chữ D và C, màu xanh dương và xanh lá cây) → tạo hình ảnh cho một mục đích cụ thể."),

    S("Bạn đang viết một câu chuyện về một căn nhà gỗ bên hồ nước.\nBạn có sẵn vài bức ảnh về những căn nhà gỗ ven hồ, nhưng bạn muốn có một tấm ảnh trông như được chụp vào cuối những năm 1800.\n\nVậy bạn nên dùng câu lệnh (prompt) nào cho AI?",
      ["Tạo một bức ảnh gốc về căn nhà gỗ bên hồ.", "Vẽ một bức tranh về hồ nước trên núi có căn nhà gỗ.", "Tạo một bức ảnh về một căn nhà gỗ kiểu xưa.", "Sử dụng các bức ảnh đã tải lên, hãy tạo một phiên bản cổ điển (vintage)."], 3,
      "Vì đã có sẵn ảnh mẫu, bạn tải ảnh lên AI và yêu cầu chỉnh lại theo phong cách cổ điển. Từ “vintage” hay “sepia” thường dùng để làm ảnh trông như ảnh cũ."),

    S("Reverse Prompting là gì?",
      ["Dùng thông tin trái ngược với điều mình muốn AI tạo ra.", "Nhập vào AI toàn những dữ liệu mang ý nghĩa tiêu cực.", "Dựa vào những dự đoán trong tương lai để tạo câu hỏi và nhận lại thông tin về quá khứ.", "Dùng kết quả AI tạo ra để đoán lại câu hỏi gốc ban đầu."], 3,
      "Reverse prompting (đặt câu hỏi ngược) nghĩa là dùng câu trả lời của AI để đoán ra ban đầu người ta đã hỏi AI điều gì."),

    S("Bạn đang tạo một bài học khoa học cho học sinh tiểu học về phát minh ra ô tô. Bạn nhập vào AI câu lệnh:\n“Giải thích cách hoạt động của động cơ đốt trong.”\nKết quả AI tạo ra lại quá phức tạp so với học sinh nhỏ tuổi.\n\nVậy bạn nên thêm phần hướng dẫn nào để AI tạo ra câu trả lời phù hợp với học sinh tiểu học hơn?",
      ["Hãy viết lại sao cho học sinh tiểu học có thể hiểu.", "Rút ngắn phần giải thích.", "Làm cho câu trả lời đơn giản hơn.", "Tránh dùng từ ngữ phức tạp và cho ví dụ cụ thể."], 0,
      "Khi muốn AI viết cho người nhỏ tuổi, hãy nói rõ đối tượng, ví dụ: “Hãy viết lại sao cho học sinh tiểu học có thể hiểu.”")
  ]
};
