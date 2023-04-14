const menu = [
  {
    title: "Discover Dynamics Tours",
    items: [
      {
        title: "Giới thiệu",
      },
      {
        title: "Tại sao chọn chúng tôi",
      },
      {
        title: "Giá trị cốt lõi",
      },
      {
        title: "Du lịch có trách nhiệm",
      },
      {
        title: "Số điện thoại: 0xxxxxxxxx",
      },
      {
        title: "Email: discoverdynamics@gmail.com",
      },
    ],
  },
  {
    title: "Theo dõi",
    items: [
      {
        title: "Facebook",
      },
      {
        title: "Instagram",
      },
      {
        title: "TikTok",
      },
    ],
  },
  {
    title: "Công ty",
    items: [
      {
        title: "Về chúng tôi",
      },
      {
        title: "Văn phòng",
      },
      {
        title: "Địa chỉ",
      },
    ],
  },
  {
    title: "Chính sách",
    items: [
      {
        title: "Chính sách bảo mật",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex justify-between px-[100px] pt-[50px] pb-[82px] bg-grey">
      {menu.map((section, i) => (
        <div key={i} className="flex flex-col gap-y-[30px]">
          <h4 className="font-semibold">{section.title}</h4>
          {section.items.map((item, index) => (
            <p key={index} className="cursor-pointer">{item.title}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Footer;
