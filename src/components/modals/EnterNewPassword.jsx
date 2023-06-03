import { Modal } from "antd";
import lockIcon from '../../assets/lock.svg';
import logo from '../../assets/logo.png';


const EnterNewPassword = ({ open, handleCancel }) => {
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
                    <p style={{
                        fontWeight:600, 
                        fontSize:"40px", 
                        lineHeight : "49px" ,
                        marginTop :"4px"
                    }}>
                        Quên mật khẩu </p>
                <div>

                <div style={{ 
                    fontSize: "20px", 
                    marginTop : "12px"
                    }}>
                    Nhập mật khẩu mới: 
                </div>

                <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", 
                        border:"1px solid rgba(0, 0, 0, 0.47)", borderRadius:"10px", marginTop :"8px", padding:"12px", width :"470px"}}>
                        <img
                            src={lockIcon} 
                            alt="Password"/>
                        <input 
                            type="password" 
                            placeholder="Nhập mật khẩu" 
                            style={{
                                marginLeft :"12px",
                                borderWidth :'0', 
                                outline:"none", 
                                width : "400px"
                            }}></input>
                </div>                
                <div style={{ 
                        fontSize: "20px", 
                        marginTop : "12px"
                    }}>
                    Nhập lại mật khẩu: 
                </div>

                <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", 
                        border:"1px solid rgba(0, 0, 0, 0.47)", borderRadius:"10px", marginTop :"8px", padding:"12px", width :"470px"}}>
                    <img
                        src={lockIcon} 
                        alt="Password"/>
                    <input 
                        type="password" 
                        placeholder="Nhập mật khẩu" 
                        style={{
                            marginLeft :"12px",
                            borderWidth :'0', 
                            outline:"none", 
                            width : "400px"
                        }}></input>
                </div>            
            </div>

                <button 
                    style={{
                        width : "480px", 
                        height :"52px", 
                        marginTop : '20px',
                        borderRadius:"10px", 
                        background: "#FF9648", 
                        color:"white"
                    }}>
                        XÁC NHẬN 
                </button> 
            </div>
        </Modal>
    </>
  );
};

export default EnterNewPassword;
