import { Modal, Button, Spin, message } from "antd";
import logo from '../../assets/logo.png';
import lockIcon from '../../assets/lock.svg';
import loadingIcon from '../../assets/loading.gif';
import React, { useState } from 'react';
import { getAuth, updatePassword } from 'firebase/auth';

const ChangePassword = ({open, handleCancel}) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const onCancel = () => {
        handleCancel();
    }

    const changePassword = (e) => {
        setLoading(true);
        e.preventDefault();
        
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            updatePassword(user, newPassword)
            .then(() => {
                // Đổi mật khẩu thành công
                message.success('Đổi mật khẩu thành công');
                onCancel();
            }).catch((error) => {
                // Xử lý lỗi khi đổi mật khẩu
                message.error('Lỗi khi đổi mật khẩu:', error);
            });
        }
        setLoading(false);
    };

    return (
        <>
        <Modal centered open={open} onCancel={handleCancel} footer={null}>
          <div style={{position:"relative",background:"#FFFFFF",borderRadius:"15px", padding:"24px",
            display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <Spin 
                    spinning={loading}
                    indicator={
                        <img src={loadingIcon} alt="Loading" />
                    }
                />
                <img
                    src={logo}
                    alt="logo"
                    className="h-[80px]"/>
                <p style={{fontWeight:600, fontSize:"40px", lineHeight : "49px" ,marginTop :"4px"}}>
                    Đổi mật khẩu </p>
          </div>

          <div>
                <div style={{ fontSize: "20px"}}>
                    Nhập mật khẩu cũ: </div>

                <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", 
                        border:"1px solid rgba(0, 0, 0, 0.47)", borderRadius:"10px", marginTop :"8px", padding:"12px", width :"470px"}}>
                        <img
                            src={lockIcon} 
                            alt="Password"/>
                        <input 
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            type="password" 
                            placeholder="Nhập mật khẩu" 
                            style={{
                                marginLeft :"12px",
                                borderWidth :'0', 
                                outline:"none", 
                                width : "400px"
                            }}>
                        </input>
                </div>

                <div style={{ fontSize: "20px", marginTop : "12px"}}>
                    Nhập mật khẩu mới: </div>

                <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", 
                        border:"1px solid rgba(0, 0, 0, 0.47)", borderRadius:"10px", marginTop :"8px", padding:"12px", width :"470px"}}>
                        <img
                            src={lockIcon} 
                            alt="Password"/>
                        <input 
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            type="password" 
                            placeholder="Nhập mật khẩu" 
                            style={{
                                marginLeft :"12px",
                                borderWidth :'0', 
                                outline:"none", 
                                width : "400px"
                            }}>
                        </input>

                </div>

                <div style={{ fontSize: "20px", marginTop : "12px"}}>
                    Nhập lại mật khẩu: </div>

                <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", 
                        border:"1px solid rgba(0, 0, 0, 0.47)", borderRadius:"10px", marginTop :"8px", padding:"12px", width :"470px"}}>
                        <img
                            src={lockIcon} 
                            alt="Password"/>
                        <input 
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            type="password" 
                            placeholder="Nhập mật khẩu" 
                            style={{
                                marginLeft :"12px",
                                borderWidth :'0', 
                                outline:"none", 
                                width : "400px"
                            }}>
                        </input>

                </div>
          </div>

            <Button onClick={handleCancel} 
                style={{fontSize: "20px", height : "50px", width : "222px", marginTop : "20px"}}>
                    Hủy
            </Button>

            <Button onClick={changePassword} 
                style={{background: "#FF9648", color: "#FFFFFF", fontSize: "20px", height : "50px", width : "230px", 
                    marginLeft : "20px"}}>
                    Xác nhận
            </Button>

        </Modal>
        </>
    );
};

export default ChangePassword;
