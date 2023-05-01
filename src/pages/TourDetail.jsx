import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../components/Title";
import ImageSlider from "../components/tour/ImageSlider";
import { locationIcon, durationIcon, expenseIcon } from "../assets/tour_icons";

const types = [
  "Đi bộ",
  "Đạp xe",
  "Khám phá",
  "Leo núi",
  "Chèo thuyền",
  "Cắm trại",
  "Vượt thác",
  "Lặn biển",
  "Giải trí",
];

const longDescription =
  "Cao Bằng nằm ở vùng Đông Bắc Việt Nam, sở hữu vẻ đẹp thiên nhiên kỳ thú, thác Bản Giốc hùng vĩ, dãy núi đá vôi bao quanh những bản làng dân tộc thiểu số rực rỡ sắc màu, dòng sông Quây Sơn ngoằn ngoèo. lảng theo cánh đồng lúa xanh tốt. Nền văn hóa đặc sắc, đa dạng của các dân tộc thiểu số. Nếu bạn là người yêu thiên nhiên và đam mê khám phá thì tour đạp xe vòng cung Cao Bằng là một sự lựa chọn lý tưởng. \nDọc theo con đường dài 280km từ thủ đô Hà Nội, bức tranh non nước Cao Bằng hiện lên trước mắt du khách với cung đường Lướt theo triền núi, thấp thoáng hai bên là những nếp nhà sàn đặc trưng của đồng bào các dân tộc Tày, Nùng. \nTrong hành trình 5 Ngày Đạp Xe Cao Bằng, quý khách được tự do khám phá vẻ đẹp kỳ vĩ nhưng không hề kém phần thơ mộng của dãy núi đá vôi, cây cối với non nước mây trời. leo lên đỉnh núi để ngắm nhìn toàn cảnh dòng sông Quây Sơn Đẹp mê hồn, lững lờ trôi theo cánh đồng lúa Ngọc Côn hay tham gia chèo thuyền Kayak trên dòng Quây Sơn đổ về thác Bản Giốc. Đạp xe trên con đường đất, ghê gớm chém đá, men theo những ruộng lúa xanh tốt hay đường làng bê tông để cảm nhận vẻ đẹp dung dị, đời thường của các đồng bào dân tộc nơi đây. Hơn nữa, sẽ thật tiếc nếu không nhắc đến món ngon địa phương. Chắc chắn rằng bạn không chỉ mải mê thử một món ăn mà còn có thể thử nhiều món ăn được chế biến từ đồng bào dân tộc thiểu số khách hàng. \nTại mỗi điểm dừng của chuyến tham quan, bạn sẽ ở homestay sinh thái, nhà nghỉ hoặc khách sạn nơi bạn ngủ và thưởng thức các món ăn địa phương như xôi, lặt tồn hun khói, hủ tiếu. Trong tour Đạp Xe Cao Bằng cách này, bạn có thể thưởng thức cảnh đẹp như tranh vẽ. phong cảnh, hít thở không khí trong lành và sống như những người dân địa phương. Tóm lại, công việc tham gia chuyến du lịch này rất xứng đáng với công sức cũng như thời gian của bạn. Thật là một Vòng Quay Đạp Xe Cao Bằng tuyệt vời!";

const schedule = [
  {
    title: "Hà Nội – Cao Bằng - Me Farmstay",
    body: "6h30 sáng. Bỏ lại sau lưng những ồn ào nhiệt huyết của phố thị, đoàn bắt đầu khởi hành đi Cao Bằng – Miền viễn đông bắc của Việt Nam. Chiêm ngưỡng cảnh quan, những địa danh được ghi vào sử sách của 2 cuộc chiến tranh vĩ đại bảo vệ tổ quốc của dân tộc Việt Nam. Tham gia chương trình vui nhộn trên xe hay lắng nghe những bài thuyết minh về mảnh đất và con người miền Đông Bắc. \n11h30 sáng; đoàn đến thành phố Bắc Cạn nghỉ ngơi ăn trưa \n13h30; đoàn khởi hành đi tiếp lên Cao Bằng, bức tranh Non Nước Cao Bằng hiện ra trước mắt du khách với cung đường Lướt theo triền miên, thấp thoáng hai bên là những nếp nhà sàn đặc trưng của đồng bào các dân tộc Tày, Nùng . \n17h30: đoàn về nơi tập trung lấy phòng nghỉ ngơi thư giãn tại gia đình cùng người dân \n19h00: Đoàn ăn tối và tham gia văn nghệ cùng thôn bản",
  },
  {
    title: "Hà Quảng – Trà Lĩnh – Núi Mắt Thần ",
    body: "6h45: Ăn sáng tại khách sạn với các món đặc sản địa phương. \n7h15: Là thủ tục trả phòng và thanh toán \n7h45: Xe đưa quý khách ra khỏi thành phố đến ngã ba Hà Quảng – nối với đường tỉnh 203 về Trà Lĩnh \n8h20: Sau khi nghe phổ biến cách thao tác xe và đạp xe an toàn trên đường, chúng ta bắt đầu hành trình đạp xe chinh phục những con dốc đầu tiên trên những con đường phủ đầy màu xanh của núi non hùng vĩ và phong cảnh nương nương hữu tình. \nĐây là chương trình đạp xe ngắm cảnh và tìm hiểu về cuộc sống, con người và những giá trị độc đáo của công viên địa chất toàn cầu, Do vây, không ai giành áo vàng chung cuộc, mà đạp và giúp đỡ lẫn nhau, cùng nhau chiến thắng. \n9h45: Đoàn chúng ta nghỉ ngơi tại một bản ven đường để tiếp nước, hoa quả và một số đồ ăn nhanh. \n10h10: Đoàn tiếp tục hành trình xuyên qua những dãy núi, nương ngô và cánh đồng lúa để đến với núi đại diện xã Quang Vinh nghỉ ngơi . \n11h20:sau khi chinh phục được ban đầu đầy kỹ năng và không tiếc phần hào hứng, chúng ta dừng lại nghỉ ngơi ăn trưa bên đường. \nChiều: 14h30: Đoàn tiếp tục hành trình đi về Thung Lũng Núi Thung Nà Ma, trên đường đi chúng ta bị choáng ngợp bởi cảnh quan hùng vĩ, nên thơ và Kềnh giữa núi non, thung lũng và những thác nước tràn ngày. đêm, dẫn nguồn cho các dòng sông, suối chảy biết bên những dãy đá vôi tạo nên 36 hồ liên hoàn và đổ nước ra hồ Thang Hen thơ Mộng \n15h30: Đoàn ta đến chân núi mắt thần, tự do dạo chơi, ngắm cánh đồng cỏ mênh mông, bát ngát tạo nên một bức tranh sơn thủy hữu tình. \n16h30: sau khi tham quan và dạo chơi trên đồng cỏ, \n17h30: Đoàn chuẩn bị cắm trại \n18h45: Tập trung ăn tối và giao lưu tại khách sạn Tỷ sao \n21h00: kết thúc ngày 1 đạp xe",
  },
  {
    title: "Nam Trà - Trùng Khánh – Phong Nặm – Ngọc Côn – Bản Giốc",
    body: "6h45: Ăn sáng tại khu cắm trại \n7h30; làm thủ tục dọn dẹp vệ sinh xung quanh khu cắm trại \n7h45: Đoàn tập trung khởi động buổi sáng trước khu vực bắt đầu một ngày mới tràn đầy năng lượng và phấn khích. \n8h00: bắt đầu đạp xe từ khách sạn, đi qua thị trấn khoảng 4 km đường bê tông sau đó chúng ta rẽ vào đường con đất, con gà, ổ voi trên đường để dẫn sang thị trấn Trùng Khánh. Tuy nhiên, bù lại chúng ta đạp xe trên con đường vắng vẻ, thanh bình, tĩnh lặng để ngắm cảnh núi non trùng điệp, hòa quyện với sông nước mây trời. Cung đường hôm nay giảm dốc hơn hôm qua, nhưng chất lượng đường thì không được như mong muốn. \n9h45: Chúng ta đạp xe đến xã Quang Trung nghỉ ngơi, tiếp nước và đồ ăn nhanh. \n10h10: Tiếp tục đạp xe qua cánh đồng, men theo dòng sông, khe mơ mộng mơ màng lướt về Trùng Khánh. \n10h30: Đoàn đến Trung tâm chợ Trùng Khánh đoàn tiếp tục đạp xe theo tỉnh lộ để về điểm ngắm toàn cảnh thung lũng Ngọc Côn nơi con Sông Quây Sơn bắt đầu chảy vào đất Việt. \n11h20: Đoàn tiếp tục đạp xe men theo đường biên và dòng sông Quây Sơn đến thác nước Ngọc Côn Ăn trưa. \n13h30: Sau bữa trưa, đoàn tiếp tục đạp xe men theo dòng sông để về thác Bản Giốc. \n15h00 về khách sạn nghỉ ngơi thư giãn \n16h30: xuống thác khám quan chụp ảnh thác Bản Giốc/ Hoặc tham quan động Ngườm Ngao \n18h30: Ăn tối và nghỉ đêm tại khách sạn",
  },
  {
    title: "Bản Giốc - Quảng Uyên",
    body: "Quý khách thức dậy vào buổi sáng sớm, đi bộ xuống thác để thưởng thức không khí trong lành và ngắm nhìn thác nước mê hồn. \n6h30; Quay vào khách sạn ăn sáng \n7h30 – 7h45: Trả phòng khách sạn \n7h45 – 8h00;Khởi động buổi sáng cho một ngày tràn đầy khí thế và dẻo giai đoạn. \n8h00 – 9h15: Đoàn bắt đầu đạp xe men theo dòng sông Quây Sơn trên đường Vành đai biên giới để đến với ngã ba \nHôm nay thực sự là một ngày thử thách với mỗi chúng ta, khi đạp xe trên cung đường đầy đá quý, chinh phục ít nhất 3 con váy dài, ngoằn nghèo và cao trên 10 %, Xuyên qua những bản làng bình yên và tĩnh lặng, ngắm nhìn những ngọn núi cao vút đồ, những cánh rừng nguyên sinh u tịch. \n12h20: Đoàn đạp xe đến thị trấn Hạ Lang – nghỉ đi ăn trưa. \nChiểu: tiếp tục chinh phục một đoạn đinh 8 km nữa trước khi đổ dốc về thị trấn Quảng Uyên. \n16h30: Đoàn vào thị trấn, nhận phòng nghỉ dưỡng.",
  },
  {
    title: "Quảng Uyên – Phia Thắp – Tụ do – Đông khê – Hà Nội",
    body: "6h30: Quý khách ăn sáng tại nhà hàng địa phương \n7h30: Trả phòng khách sạn \n7h45: Bắt đầu hành trình đạp xe xuyên qua những bản làng bình yên và bằng phẳng, ngắm nhìn quan thiên nhiên hữu tình và mộc mạc vào buổi sớm mai. \nNgày hôm nay với cung đường nhẹ nhàng và ít trượt dốc, ghé thăm mấy làng làng của đồng bào dân tôc để chiêm ngưỡng những làng nghề thủ công truyền thống của họ như làng rèn phúc sen, làng làm hương, đan dệt, làm giấy… \nSau khi thăm quan và tìm hiểu về lịch sử làng nghể, chúng ta tiếp tục hành trình đạp xe trên con đường mới trải bê tông, hay một đoạn đường đất băng qua những thung lũng, cánh đồng và thảo nguyên bao la để đến với các làng nằm khuất sau dãy núi. \n10h30: Đoàn đến xã Tự Do nghỉ dưỡng sức để chinh phục con dốc xây dựng nối giữa Ngọc Động bản Lung. \nTiếp tục đạp xe 12km nữa xuyên qua thôn bản để đến trạm y tế Trưng Vương đoàn \n11h30: Kết thúc chương trình đạp xe tại đây. \n11h45: Xe ô tô đón đoàn về Cao Bằng ăn trưa \n12h20- 13h30; ăn trưa \n14h00: Đoàn lên xe bắt đầu hành trình 5 tiếng khởi hành về Hà Nội. \n19h00: Về đến Hà Nội. Kết thúc chương trình.",
  },
];

const notes = [
  {
    title: "Giá Tour Bao Gồm:",
    body: "Xe ô tô phục vụ theo hành trình, lái xe chuyên nghiệp, thân thiện. \nDịch vụ lưu trú tại khách sạn, Homestay (Nhà cộng đồng) chăn ga, gối đệm riêng, Cắm trại \nĂn 05 bữa chính theo chương trình: Trưa 180.000 vnđ/bữa. Tối 200.000 vnđ. Ăn 02 bữa sáng: 50.000đ/bữa \nHướng dẫn viên chuyên nghiệp theo đoàn phục vụ suốt tuyến. \nVé thăm quan thắng cảnh tại các điểm thăm quan theo chương trình. \nBảo hiểm quy định mức bù tối đa 100.000.000 VND/người/vụ.04 chai nước 500ml/người/ngày trên xe \nVé tắm vòi sen nước nóng có bể cộng đồng và phòng tắm riêng \nGiao lưu văn nghệ dân tộc (Áp dụng cho đoàn 20 khách: Đội nhảy + lửa lửa + ngô )Xe đạp địa hình cao cấp Trek, Cannondale \nXe tải thùng xe dạp cho đoàn trên 6 khấc",
  },
  {
    title: "Giá Tour không bao gồm:",
    body: "Đồ uống (rượu, bia, nước ngọt...) trong các bữa ăn và trong suốt chương trình. \nCác chi phí cá nhân (điện thoại, giặt là, mua sắm, ăn uống ngoài chương trình). \nThuế gia tăng 10% (VAT) \nTiền thưởng (Tip) cho lái xe, hướng dẫn viên: 100.000 VND/ khách/ cả chuyến đi. Quý khách chủ động phương tiện đến Sân bay Tân Sơn Nhất và quay về điểm phát. Công ty du lịch sẽ hỗ trợ đặt vé máy bay giá tốt nhất!",
  },
];

const TourDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-[10px] pb-[30px]">
      <div className="flex gap-x-5">
        {/* Left side */}
        <div className="w-[65.625%]">
          {/* Image slider */}
          <ImageSlider />
        </div>
        {/* Right side */}
        <div className="bg-white w-full flex flex-col items-center justify-center">
          {/* Tour info */}
          <div className="w-full flex flex-col gap-y-[55px] mt-[9%]">
            <div className="tour-info">
              <div className="tour-info-img-container">
                <img src={locationIcon} alt="Location" />
              </div>
              <p>Cao Bằng</p>
            </div>
            <div className="tour-info">
              <div className="tour-info-img-container">
                <img src={durationIcon} alt="Duration" />
              </div>
              <p>5 ngày 4 đêm</p>
            </div>
            <div className="tour-info">
              <div className="tour-info-img-container">
                <img src={expenseIcon} alt="Expense" />
              </div>
              <p>6.600.000 VNĐ</p>
            </div>
          </div>
          {/* Type tags */}
          <div className="flex flex-wrap gap-[10px] ml-[8.57%] mr-[3.8%] mt-[58px]">
            {types.map((type, i) => (
              <div
                key={i}
                className="px-[11px] py-2 bg-grey rounded-5 font-medium text-20 text-[#7B7B7B]"
              >
                {type}
              </div>
            ))}
          </div>
          {/* Book button */}
          <button
            onClick={() => navigate("/book-tour")}
            className="w-[200px] default-btn mt-[60px] mb-[40px]"
          >
            ĐẶT TOUR
          </button>
        </div>
      </div>
      <div className="w-[65.625%]">
        {/* Description */}
        <Title
          text={"Chương trình tour"}
          className={"w-fit mx-auto mt-[13px] mb-[15px]"}
        />
        {/* Long description */}
        {longDescription.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
        {/* Schedule */}
        {schedule.map((day, i) => (
          <div key={i}>
            <h3 className="font-bold">{`Ngày ${i + 1}: ${day.title}`}</h3>
            {day.body.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ))}
        {/* Notes */}
        {notes.map((note, i) => (
          <Fragment key={i}>
            <br />
            <h4 className="font-semibold italic">{note.title}</h4>
            {note.body.split("\n").map((line, i) => (
              <p key={i} className="font-light">
                {line}
              </p>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default TourDetail;
