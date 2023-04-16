import logo from "../assets/logo.png";
import profileIcon from "../assets/Profile.svg"
import lockIcon from "../assets/lock.svg"
import googleIcon from "../assets/google_icon.svg";
import facebookIcon from "../assets/facebook_icon.svg";
import { EyeOutlined } from '@ant-design/icons'

const LogInPopup = () => {
  return (
    <center>
      
      <div style={{position:"relative",background:"#FFFFFF",borderRadius:"15px", padding:"24px",
      display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

        <img 
        src={logo} 
        alt="Logo" 
        className="h-[80px]" 
        />
        <p 
        style={{fontWeight:600, fontSize:"40px", marginTop :"10px"}}>
          Đăng nhập </p>

        <div 
        style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", 
        border:"1px solid rgba(0, 0, 0, 0.47)", borderRadius:"10px", marginTop :"32px", padding:"12px", width :"480px"}}
        >
          <img 
          src={profileIcon} 
          alt="Profile" 
          />
          <input 
          type="email" 
          placeholder="Email" 
          style={{marginLeft :"12px",borderWidth :'0', outline:"none", width : "400px"}}>
          </input>
        </div>

        <div 
        style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", 
        border:"1px solid rgba(0, 0, 0, 0.47)", borderRadius:"10px", marginTop :"20px", padding:"12px", width :"480px"}}
        >
          <img 
          src={lockIcon} 
          alt="Password"
          />
          <input 
          type="password" 
          placeholder="Password" 
          style={{marginLeft :"16px",borderWidth :'0', outline:"none", width : "400px"}}>
          </input>
          <EyeOutlined style={{ width :"30px" ,height : "20px" , color: "#00000078" }}/>
        </div>

        <a 
        style={{fontSize : "14px", textDecoration :"underline", width :"480px", textAlign:"end", margin:"8px"}}
        >Quên mật khẩu</a>
  
        <button 
        style={{width : "480px", height :"52px", borderRadius:"10px", background: "#FF9648", color:"white"}}>
          ĐĂNG NHẬP
        </button>

        <div style = {{display:"flex", alignItems:"center ", margin: "4px"}}>
        <div style={{width : "200px", height : "0px", left : "40px", right : "416px", opacity: "0.47", border: "1px solid #000000"}}></div>
        <div> <p style = {{padding : "16px", color: "#7B7B7B", fontSize: "20px"}}> hoặc </p></div>
        <div style={{width : "200px", height : "0px", left : "320px", right : "416px", border: "1px solid rgba(0, 0, 0, 0.47)"}}></div>
        </div>

        <button 
        style = {{display : "flex", alignItems:"center", justifyContent:"center", width : "480px", height :"52px", 
        left : "40px", top : "439px", borderRadius:"10px", background: "#FFFFFF", color:"#000000", border: "1px solid rgba(0, 0, 0, 0.47)"}}>
          <img 
          src={googleIcon} 
          alt="Google"
          />
          <p style={{marginLeft : "12px"}}>Tiếp tục với Google</p>
        </button>

        <button style = {{display : "flex", alignItems:"center", justifyContent:"center", marginTop : "20px", 
        width : "480px", height :"52px", left : "40px", top : "439px", borderRadius:"10px", background: "#FFFFFF", color:"#000000", border: "1px solid rgba(0, 0, 0, 0.47)"}}>
          <img 
          src={facebookIcon} 
          alt="Facebook"
          />
          <p style={{marginLeft : "12px"}}>Tiếp tục với Facebook</p>
        </button>

        <div style = {{marginTop : "20px"}}>
          <p style = {{color: "rgba(0, 0, 0, 0.7)"}}> Chưa có tài khoản ? 
              <button style={{color:"#FF9648"}}> Đăng ký tại đây</button></p>
            </div>
          <div>
        </div>
      </div>
    </center>
  );
};

export default LogInPopup;
