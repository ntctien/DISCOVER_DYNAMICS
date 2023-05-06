import { Modal } from "antd";
import profileIcon from '../../assets/Profile.svg';
import logo from '../../assets/logo.png';
import { useState } from "react";
import EnterOTP from "./EnterOTP";

const ForgotPassword = ({ open, handleCancel }) => {
    const [currentModal, setCurrentModal] = useState(null);
  return (
    <>
        <Modal centered open={open} onCancel={handleCancel} footer={null}>
        <button>
            Quay lại
        </button>
            <div style={{position:"relative",background:"#FFFFFF",borderRadius:"15px",
                display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <img
                        src={logo}
                        alt="logo"
                        className="h-[80px]"/>
                    <p style={{fontWeight:600, fontSize:"40px", lineHeight : "49px" ,marginTop :"4px"}}>
                        Quên mật khẩu </p>
                    <p style={{
                        marginTop : '20px',
                        fontSize : '20.5px',
                        width :"480px"
                    }}>
                        Nhập email đã sử dụng để đăng ký tài khoản:
                    </p>

                    <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", 
                        border:"1px solid rgba(0, 0, 0, 0.47)", borderRadius:"10px", marginTop :"8px", padding:"12px", width :"480px"}}>
                            <img 
                                src={profileIcon} 
                                alt="Profile"/>
                            <input 
                                type="email" 
                                placeholder="Email" 
                                style={{marginLeft :"12px",borderWidth :'0', outline:"none", width : "400px"}}></input>
                    </div>

                    <button 
                        style={{
                            width : "480px", 
                            height :"52px", 
                            marginTop : '20px',
                            borderRadius:"10px", 
                            background: "#FF9648", 
                            color:"white"
                            }}
                        onClick={() => {handleCancel(); setCurrentModal("enter-OTP")}}>
                        NHẬN MÃ OTP 
                    </button> 
            </div>
        </Modal>
        <EnterOTP
            open={currentModal === 'enter-OTP'}
            handleCancel={() => setCurrentModal(null)} 
        />
    </>
  );
};

export default ForgotPassword;
