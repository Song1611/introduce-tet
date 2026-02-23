// Mock data cho website Tết Việt Nam
const tetData = {
    headers: [
        {
            title: "Hoạt Động Ngày Tết",
            paragraph: "Khám phá không khí lễ hội sôi động với các trò chơi dân gian và phong tục múa lân đặc sắc."
        },
        {
            title: "Món Ăn Ngày Tết",
            paragraph: "Thưởng thức tinh hoa ẩm thực truyền thống với hương vị đậm đà bản sắc Việt trong mỗi món ăn."
        },
        {
            title: "Phong Tục Ngày Tết",
            paragraph: "Gìn giữ và tôn vinh những giá trị văn hóa, đạo lý tốt đẹp được lưu truyền qua nhiều thế hệ."
        }
    ],
    
    about: {
        paragraph: "Tết Nguyên Đán, hay còn gọi là Tết Âm lịch, là dịp lễ quan trọng nhất trong năm của người Việt Nam. Đây là thời điểm đánh dấu sự chuyển giao giữa năm cũ và năm mới theo âm lịch, mang ý nghĩa về sự khởi đầu mới, sum họp gia đình và tôn vinh truyền thống tổ tiên. Tết không chỉ là một ngày lễ đơn thuần mà còn là dịp để mọi người sum vầy bên gia đình, thể hiện lòng hiếu thảo với ông bà, cha mẹ và gửi gắm những ước vọng tốt đẹp cho năm mới.",
        why: [
            "Đoàn tụ gia đình",
            "Tôn vinh tổ tiên",
            "Khởi đầu năm mới",
            "Cầu may mắn, tài lộc"
        ],
        why2: [
            "Bảo tồn văn hóa",
            "Gắn kết cộng đồng",
            "Nghỉ ngơi thư giãn",
            "Vui xuân đón Tết"
        ]
    },
    
    features: [
        {
            icon: "fa-solid fa-house-chimney",
            title: "Trang Trí Nhà Cửa",
            text: "Dọn dẹp, trang hoàng nhà cửa với hoa đào, hoa mai, câu đối đỏ mang ý nghĩa may mắn",
            image: "img/dacsactetviet/trang-tri-nha-ngay-tet-10.webp",
            detailDescription: "Việc dọn dẹp và trang trí nhà cửa trước Tết là một truyền thống vô cùng quan trọng. Người Việt tin rằng việc làm sạch nhà cửa giúp xua đuổi những điều không may của năm cũ và chuẩn bị không gian sạch sẽ, tươi mới để đón nhận tài lộc, may mắn trong năm mới. Những cành hoa mai vàng rực rỡ ở miền Nam hay hoa đào hồng thắm ở miền Bắc không chỉ tô điểm cho không gian mà còn tượng trưng cho sự sinh sôi, nảy nở và hy vọng. Câu đối đỏ với những lời chúc tốt đẹp cũng là phần không thể thiếu, mang lại không khí hân hoan cho mỗi gia đình."
        },
        {
            icon: "fa-solid fa-gifts",
            title: "Lì Xì Đầu Năm",
            text: "Phong tục tặng lì xì cho trẻ em và người lớn tuổi, mang lại may mắn và phước lành",
            image: "img/dacsactetviet/li-xi-dau-nam.jpg",
            detailDescription: "Lì xì là một phong tục đẹp mang ý nghĩa cầu chúc may mắn, sức khỏe và tài lộc. Những phong bao lì xì đỏ thắm không chỉ chứa đựng số tiền nhỏ mà còn là thông điệp yêu thương, sự quan tâm của người lớn dành cho trẻ nhỏ và lòng hiếu thảo của con cháu đối với ông bà, cha mẹ. Màu đỏ của bao lì xì tượng trưng cho hy vọng, sự thịnh vượng và xua đuổi điềm xấu. Đây là khoảnh khắc ý nghĩa nhất khi cả gia đình quây quần sau lễ cúng giao thừa để dành cho nhau những lời chúc tốt đẹp nhất."
        },
        {
            icon: "fa-solid fa-bowl-food",
            title: "Ẩm Thực Truyền Thống",
            text: "Bánh chưng, bánh tét, thịt kho, dưa hành - những món ăn không thể thiếu ngày Tết",
            image: "img/dacsactetviet/am-thuc-truyen-thong.jpg",
            detailDescription: "Mâm cơm ngày Tết là linh hồn của ngày lễ, thể hiện sự no đủ và lòng biết ơn đối với tổ tiên. Bánh chưng, bánh tét với hình vuông và tròn tượng trưng cho trời và đất, nhắc nhở con cháu về cội nguồn và đạo lý 'Uống nước nhớ nguồn'. Thịt kho tàu truyền thống với trứng tròn xoe mang ý nghĩa 'mẹ tròn con vuông', gia đình hạnh phúc. Sự kết hợp giữa vị mặn của thịt, vị béo của mỡ và vị chua của dưa hành tạo nên hương vị đặc trưng không thể tìm thấy ở bất kỳ dịp nào khác trong năm."
        },
        {
            icon: "fa-solid fa-people-group",
            title: "Sum Họp Gia Đình",
            text: "Cả nhà quây quân bên mâm cơm Tết, chia sẻ niềm vui và kỷ niệm đẹp",
            image: "img/dacsactetviet/xung-hop-gia-dinh.jpg",
            detailDescription: "Tết là dịp để những người con xa quê trở về đoàn tụ. Ý nghĩa lớn nhất của Tết chính là 'Về nhà'. Dù ai đi đâu, làm gì, ngày Tết cũng mong muốn được quây quần bên mâm cơm gia đình, được nghe tiếng cười của ông bà, cha mẹ. Những bữa cơm tất niên, những đêm canh nồi bánh chưng bên bếp lửa hồng là những ký ức vô giá, thắt chặt tình cảm gia đình và tiếp thêm năng lượng cho mỗi người trước khi bước vào một năm mới đầy bận rộn."
        }
    ],
    
    traditions: [
        {
            icon: "fa-solid fa-broom",
            name: "Tổng Vệ Sinh",
            text: "Dọn dẹp nhà cửa sạch sẽ trước Tết để đón năm mới với không gian trong lành, tươi mới"
        },
        {
            icon: "fa-solid fa-jedi",
            name: "Cúng Ông Táo",
            text: "Tiễn Ông Táo về trời vào ngày 23 tháng Chạp để báo cáo với Ngọc Hoàng về gia đình"
        },
        {
            icon: "fa-solid fa-tree",
            name: "Dựng Cây Nêu",
            text: "Dựng cây nêu trước cửa nhà để xua đuổi tà ma, đón lộc vào nhà trong năm mới"
        },
        {
            icon: "fa-solid fa-hand-holding-heart",
            name: "Xin Chữ Đầu Năm",
            text: "Xin chữ từ người có đức, có tài để cầu may mắn, học hành tiến bộ trong năm mới"
        },
        {
            icon: "fa-solid fa-church",
            name: "Đi Chùa Đầu Năm",
            text: "Đi lễ chùa đầu năm để cầu bình an, sức khỏe và may mắn cho gia đình"
        },
        {
            icon: "fa-solid fa-seedling",
            name: "Hái Lộc Đầu Năm",
            text: "Hái lộc từ cây cối, mang về nhà với hy vọng năm mới tràn đầy may mắn và tài lộc"
        }
    ],
    
    gallery: [
        {
            title: "Cây Mai Ngày Tết",
            image: "img/hinhanhtet/cay-mai-ngay-tet.jpg"
        },
        {
            title: "Bánh Tét Truyền Thống",
            image: "img/hinhanhtet/banh-tet-ngay-tet.jpg"
        },
        {
            title: "Lì Xì Ngày Tết",
            image: "img/hinhanhtet/li-xi-ngay-tet.jpg"
        },
        {
            title: "Mâm Ngũ Quả",
            image: "img/hinhanhtet/mam-ngu-qua-ngay-tet-2.jpg"
        },
        {
            title: "Múa Lân Ngày Tết",
            image: "img/hinhanhtet/mua-lan-ngay-tet.jpg"
        },
        {
            title: "Pháo Hoa Đêm Giao Thừa",
            image: "img/hinhanhtet/phao-hoa-dem-giao-thua.jpg"
        },
        {
            title: "Chợ Tết Việt Nam",
            image: "img/hinhanhtet/Hinh-anh-cho-tet-Viet-Nam-3.jpg"
        },
        {
            title: "Tảo Mộ Ngày Tết",
            image: "img/hinhanhtet/tham-mo-ngay-tet.jpg"
        },
        {
            title: "Không Khí Chợ Tết",
            image: "img/hinhanhtet/hinh-anh-cho-tet-41.jpg"
        }
    ],
    
    foods: [
        {
            img: "img/monanngaytet/banh-chung-ngay-tet.jpg",
            name: "Bánh Chưng",
            text: "Món ăn truyền thống không thể thiếu, tượng trưng cho đất trời và lòng hiếu thảo",
            detailDescription: "Bánh Chưng là món ăn có lịch sử lâu đời từ thời vua Hùng, gắn liền với sự tích 'Bánh Chưng, Bánh Dày'. Được làm từ những nguyên liệu gần gũi như gạo nếp, đậu xanh, thịt lợn và gói trong lá dong xanh mướt, Bánh Chưng có hình vuông tượng trưng cho đất. Việc gói và luộc bánh chưng trong đêm 29, 30 Tết đã trở thành một nét văn hóa đẹp, là dịp để các thành viên trong gia đình quây quần bên bếp lửa, ôn lại chuyện cũ và cầu chúc cho nhau một năm mới ấm no."
        },
        {
            img: "img/monanngaytet/thit-kho-tau.jpeg",
            name: "Thịt Kho Trứng",
            text: "Món ăn đậm đà, thơm ngon, biểu tượng của sự ấm no, đủ đầy",
            detailDescription: "Thịt kho tàu (hay thịt kho hột vịt) là món ăn mang đậm phong vị phương Nam. Những miếng thịt được kho mềm cùng với trứng vịt tròn trịa mang ý nghĩa sự trọn vẹn, sum vầy. Màu vàng sóng sánh của nước mắm cá cơm cùng hương vị béo ngậy tạo nên một món ăn cực kỳ đưa cơm trong những ngày Xuân."
        },
        {
            img: "img/monanngaytet/mut-tet.jpg",
            name: "Mứt Tết",
            text: "Các loại mứt ngọt ngào để đãi khách, mang ý nghĩa cuộc sống ngọt ngào, sum vầy",
            detailDescription: "Khay mứt Tết là vật trang trí vừa là đặc sản không thể thiếu trên bàn tiếp khách. Từ mứt gừa cay nồng, mứt dừa thơm béo đến mứt hạt sen thanh tao, mỗi loại mứt đều mang một thông điệp về sự ngọt ngào, may mắn. Ngồi nhâm nhi chén trà nóng cùng miếng mứt ngọt chính là lúc mọi người bắt đầu những câu chuyện đầu xuân đầy hứng khởi."
        },
        {
            img: "img/monanngaytet/cha-gio.jpg",
            name: "Giò Chả",
            text: "Món ăn truyền thống được chế biến công phu, thể hiện sự chu đáo của gia chủ",
            detailDescription: "Giò lụa, chả quế là những món ăn tinh tế, thể hiện sự khéo léo và tỉ mỉ của người nội trợ. Giò được làm từ thịt nạc thăn ngon nhất, giã nhuyễn và gói trong lá chuối, mang đến hương vị tự nhiên, giòn dai đặc trưng. Đây là món ăn trang trọng thường dùng để dâng cúng tổ tiên và tiếp đãi khách quý trong những ngày đại lễ."
        },
        {
            img: "img/monanngaytet/xoi-gac1.webp",
            name: "Xôi Gấc",
            text: "Xôi đỏ tươi từ quả gấc, mang ý nghĩa may mắn và tài lộc",
            detailDescription: "Xôi gấc với màu đỏ tự nhiên rực rỡ từ quả gấc chín, là biểu tượng của sự may mắn, khởi đầu hanh thông. Trong quan niệm của người Việt, màu đỏ đại diện cho hạnh phúc và tài lộc, vì thế đĩa xôi gấc luôn chiếm vị trí trang trọng trong mâm cỗ cúng giao thừa và những bữa cơm đầu năm."
        },
        {
            img: "img/monanngaytet/canh-mang.jpg",
            name: "Canh Măng",
            text: "Món canh thanh mát, giải ngán sau những bữa ăn đậm đà ngày Tết",
            detailDescription: "Canh măng khô hầm xương là món canh truyền thống giúp cân bằng vị giác trong mâm cỗ Tết có nhiều đồ nếp và thịt mỡ. Với vị ngọt thanh từ xương, giòn sần sật của măng, món ăn này mang đến cảm giác nhẹ nhàng, ấm áp và rất bổ dưỡng cho sức khỏe trong những ngày vui chơi lễ hội."
        }
    ],
    
    activities: [
        {
            icon: "fa-solid fa-dragon",
            title: "Múa Lân Sư Rồng",
            text: "Biểu diễn múa lân, múa rồng mang lại không khí sôi động, xua đuổi tà ma",
            image: "img/hoatdongngaytet/mua-lan-su-rong.jpg",
            detailDescription: "Tiếng trống múa lân vang dội khắp phố phường là dấu hiệu rõ ràng nhất của Tết. Múa lân không chỉ là một môn nghệ thuật mà còn mang ý nghĩa tâm linh sâu sắc, biểu tượng cho sự thịnh vượng, hanh thông và xua đuổi những điều không tốt lành. Những màn biểu diễn điêu luyện từ múa lân, múa sư đến múa rồng luôn thu hút sự quan tâm của cả người lớn và trẻ em, tạo nên bầu không khí vui tươi, náo nức cho cả cộng đồng."
        },
        {
            icon: "fa-solid fa-gamepad",
            title: "Chơi Trò Chơi Dân Gian",
            text: "Đánh đu, đánh cờ, bịt mắt bắt dê - những trò chơi gắn liền với tuổi thơ",
            image: "img/hoatdongngaytet/tro-choi-dan-gian.jpg",
            detailDescription: "Sau khi hoàn thành các nghi lễ thờ cúng, mọi người thường tụ tập tại sân đình hoặc các bãi đất trống để tham gia các trò chơi dân gian. Đánh đu, chọi gà, kéo co hay đấu vật không chỉ là giải trí mà còn là cách để rèn luyện sức khỏe, thể hiện tinh thần đoàn kết và cộng đồng. Những trò chơi này giúp kết nối các thế hệ, gợi nhớ về nguồn cội và giữ gìn bản sắc truyền thống giữa nhịp sống hiện đại."
        },
        {
            icon: "fa-solid fa-fire",
            title: "Xem Pháo Hoa",
            text: "Ngắm pháo hoa rực rỡ đêm giao thừa, chào đón năm mới tràn đầy hy vọng",
            image: "img/hoatdongngaytet/phao-hoa.jpg",
            detailDescription: "Khoảnh khắc giao thừa với những màn pháo hoa rực rỡ trên bầu trời đêm là lúc mọi hy vọng, mong ước cho năm mới được gửi gắm. Ánh sáng lung linh của pháo hoa tượng trưng cho sự rạng rỡ, may mắn và niềm tin vào một tương lai tươi sáng hơn. Người dân thường tụ tập bên các hồ lớn hay khu trung tâm để cùng nhau đếm ngược, chia sẻ những cái ôm ấm áp và gửi những lời chúc tốt đẹp nhất đến người thân, bạn bè."
        },
        {
            icon: "fa-solid fa-gift",
            title: "Tặng Quà Biếu Tết",
            text: "Trao tặng quà cho người thân, bạn bè thể hiện tình cảm và sự quan tâm",
            image: "img/hoatdongngaytet/hop-qua-tang-tet-cho-doi-tac-khach-hang.jpg",
            detailDescription: "Quà biếu Tết là cách thể hiện lòng tri ân và sự quan tâm một cách tinh tế. Những giỏ quà đầy đặn với trà, bánh, rượu hay những món đặc sản quê nhà được gửi trao kèm theo lời chúc sức khỏe và thành công. Hành động này giúp thắt chặt thêm các mối quan hệ xã hội, công việc và khẳng định tình cảm gắn bó giữa những người thân thiết sau một năm làm việc vất vả."
        }
    ],
    
    contact: {
        address: "Nguyễn Huy Chương, Điện Bàn Đông, Đà Nẵng",
        phone: "0905903332",
        email: "doansong1611@gmail.com",
        facebook: "https://www.facebook.com/oanxuanthanhh",
        youtube: "https://youtube.com",
        instagram: "https://instagram.com"
    }
};
