import logo from "../assets/logo.png";
import DropdownButton from "./DropdownButton";

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
];

const Header = () => {
  return (
    <div className="row">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-[80px]" />
      {/* Menu */}
      <div className="row font-medium text-24">
        <DropdownButton items={items} label={'Điểm đến'}/> 
        <DropdownButton items={items} label={'Loại hình tour'}/>
        <p>Về chúng tôi</p>
        <p>Liên hệ</p>
      </div>
    </div>
  );
};

export default Header;
