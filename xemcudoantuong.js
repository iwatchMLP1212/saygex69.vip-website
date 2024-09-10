const van_han = [`
    Tình duyên của bạn trong thời gian tới sẽ gặp nhiều biến chuyển tích cực.
    Nếu bạn đang độc thân, sẽ có cơ hội gặp gỡ người đặc biệt trong một sự kiện bất ngờ.
    Nếu đã có người yêu, mối quan hệ của hai bạn sẽ trở nên bền chặt và thấu hiểu hơn.
    Hãy mở lòng để đón nhận tình yêu và sự quan tâm từ người ấy.
    `, `
    Thời gian này, tình yêu của bạn có thể gặp một vài thử thách.
    Có thể xuất hiện sự hiểu lầm giữa bạn và người ấy, nhưng đừng lo lắng quá.
    Điều quan trọng là cả hai cần lắng nghe và thấu hiểu nhau hơn. Hãy tránh những tranh cãi không cần thiết và dành thời gian cho những khoảnh khắc ngọt ngào.
    `, `
    Sự nghiệp của bạn đang trên đà phát triển. Những nỗ lực trong thời gian qua sẽ sớm được đền đáp bằng một cơ hội thăng tiến hoặc dự án lớn. Hãy tự tin vào khả năng của mình và đừng ngần ngại khi đối mặt với thách thức. Thời điểm này cũng thích hợp để bạn phát triển kỹ năng mới, giúp ích cho sự nghiệp lâu dài.
    `, `
    Sự nghiệp của bạn có dấu hiệu chững lại, nhưng đó là cơ hội để bạn xem xét lại kế hoạch và điều chỉnh hướng đi. Đừng quá vội vàng trong các quyết định quan trọng, thay vào đó hãy lắng nghe lời khuyên từ những người có kinh nghiệm. Thời gian tới, một sự thay đổi nhỏ có thể mang lại kết quả bất ngờ.
    `,
    `
    Tài chính của bạn trong thời gian tới khá ổn định, không có dấu hiệu biến động lớn. Tuy nhiên, đây là thời điểm thích hợp để bạn cân nhắc về việc đầu tư hoặc tiết kiệm nhiều hơn cho tương lai. Những khoản chi tiêu không cần thiết nên được kiểm soát chặt chẽ, giúp bạn duy trì cân bằng tài chính lâu dài.
    `,
    `
    Tài chính của bạn có thể gặp một số khó khăn trong thời gian tới. Những khoản chi bất ngờ có thể xuất hiện, khiến bạn cảm thấy hơi áp lực. Tuy nhiên, đừng lo lắng quá, hãy lập kế hoạch chi tiêu hợp lý và tránh những quyết định đầu tư rủi ro. Nếu cần, bạn cũng có thể nhờ đến sự hỗ trợ từ những người thân hoặc bạn bè.
    `,
    `Sức khỏe của bạn đang ở trạng thái tốt. Bạn nên tiếp tục duy trì lối sống lành mạnh, ăn uống đầy đủ dinh dưỡng và tập luyện thể thao thường xuyên. Đặc biệt, hãy chú ý đến giấc ngủ và tinh thần, tránh để bản thân rơi vào tình trạng căng thẳng quá mức. Một chuyến đi dã ngoại hoặc thư giãn cùng gia đình sẽ giúp bạn nạp lại năng lượng.
    `,
    `
    Sức khỏe của bạn có dấu hiệu mệt mỏi, có thể do công việc căng thẳng và lối sống không điều độ. Hãy dành thời gian nghỉ ngơi nhiều hơn và cải thiện thói quen ăn uống. Đừng quên vận động nhẹ nhàng mỗi ngày để cơ thể được thư giãn. Nếu cảm thấy không khỏe, đừng ngần ngại đi khám bác sĩ để được tư vấn kịp thời.
    `,
    `
    Gia đình bạn sẽ trải qua một giai đoạn hòa thuận và ấm cúng. Đây là lúc để bạn dành nhiều thời gian hơn cho người thân, cùng chia sẻ và hỗ trợ nhau trong cuộc sống. Một chuyến đi chơi gia đình hoặc bữa ăn ấm cúng sẽ giúp các thành viên gắn kết và hiểu nhau hơn.
    `,
    `Gia đình bạn có thể gặp một vài xung đột nhỏ trong thời gian tới, nhưng đừng lo lắng quá. Điều quan trọng là bạn nên giữ bình tĩnh và tìm cách hòa giải, lắng nghe ý kiến của từng thành viên. Một cuộc trò chuyện chân thành sẽ giúp giải quyết những vấn đề, mang lại sự hòa hợp và yêu thương.`
];


const xem_cu_doan_tuong = () => {
    const dick_width = document.getElementById('input-dick-w').value;
    const dick_height = document.getElementById('input-dick-h').value;
    const dick_radius1 = document.getElementById('input-dick-r1').value;
    const dick_radius2 = document.getElementById('input-dick-r2').value;

    // Check if all fields are filled
    if (!dick_width || !dick_height || !dick_radius1 || !dick_radius2) {
        alert("Quý khách vui lòng điền đầy đủ thông tin!");
        return;
    }

    // Convert to numbers
    const dick_width_num = parseFloat(dick_width);
    const dick_height_num = parseFloat(dick_height);
    const dick_radius1_num = parseFloat(dick_radius1);
    const dick_radius2_num = parseFloat(dick_radius2);

    // Check if input values are valid numbers
    if (isNaN(dick_width_num) || isNaN(dick_height_num) || isNaN(dick_radius1_num) || isNaN(dick_radius2_num)) {
        alert("Quý khách vui lòng chỉ điền số hợp lệ!");
        return;
    }

    // Calculate formula
    const formula = (dick_width_num * dick_height_num + dick_radius1_num * dick_radius2_num) / 10;

    document.getElementById('he-so-duong-vat').innerHTML = formula;

    let van_han_ve_tinh_yeu = 1;
    let van_han_ve_su_nghiep = 1;
    let van_han_ve_tai_chinh = 1;
    let van_han_ve_suc_khoe = 1;
    let van_han_ve_gia_dinh = 1;

// Tinh yeu: 0,1
// Cong viec: 2, 3
// Tai chinh: 4, 5
// Suc khoe: 6, 7
// Gia dinh: 8, 9

    if (formula < 5) {
        van_han_ve_tinh_yeu = 1;
        van_han_ve_su_nghiep = 3;
        van_han_ve_tai_chinh = 4;
        van_han_ve_suc_khoe = 6;
        van_han_ve_gia_dinh = 8;
    } else if (formula >= 5 && formula < 10) {
        van_han_ve_tinh_yeu = 1;
        van_han_ve_su_nghiep = 3;
        van_han_ve_tai_chinh = 5;
        van_han_ve_suc_khoe = 6;
        van_han_ve_gia_dinh = 9;
    } else if (formula >= 10 && formula < 15) {
        van_han_ve_tinh_yeu = 0;
        van_han_ve_su_nghiep = 2;
        van_han_ve_tai_chinh = 5;
        van_han_ve_suc_khoe = 7;
        van_han_ve_gia_dinh = 8;
    } else if (formula >= 15) {
        van_han_ve_tinh_yeu = 0;
        van_han_ve_su_nghiep = 2;
        van_han_ve_tai_chinh = 4;
        van_han_ve_suc_khoe = 7;
        van_han_ve_gia_dinh = 8;
    }

    // Display the results
    document.getElementById('van-han').innerHTML = `
        <div class='card mb-5'>
            <h2 class='text-primary'>Về tình yêu</h2>
            <h5>${van_han[van_han_ve_tinh_yeu]}</h5>
        </div>

        <div class='card mb-5'>
            <h2 class='text-primary'>Về công việc</h2>
            <h5>${van_han[van_han_ve_su_nghiep]}</h5>
        </div>

        <div class='card mb-5'>
            <h2 class='text-primary'>Về tài chính</h2>
            <h5>${van_han[van_han_ve_tai_chinh]}</h5>
        </div>

        <div class='card mb-5'>
            <h2 class='text-primary'>Về sức khoẻ</h2>
            <h5>${van_han[van_han_ve_suc_khoe]}</h5> 
        </div>

        <div class='card mb-5'>
            <h2 class='text-primary'>Về gia đình</h2>
            <h5>${van_han[van_han_ve_gia_dinh]}</h5>
        </div>
    `;

    document.getElementById('result').style.display = 'block';
};