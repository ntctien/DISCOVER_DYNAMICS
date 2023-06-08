import { Button, Modal } from "antd";
import React from 'react';
import {  signOut } from "firebase/auth";
import {auth} from '../../firebase';
import { useNavigate } from 'react-router-dom';

const LogOut = ({open,handleOk , handleCancel}) => {

    const refresh = () => window.location.reload(true);

    const navigate = useNavigate();
    const Logout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Logged out successfully");
            refresh();
        }).catch((error) => {
        // An error happened.
        });
    }

    return (
        <>
        <Modal centered open={open} onCancel={handleCancel} footer={null}>
            <div style={{
                width : "450px", 
                top :"30px",
                fontSize: "32px", 
                display: "flex", 
                alignItems:"center", 
                textAlign: "center"
            }}>
                Bạn có chắc chắn muốn đăng xuất không?    
            </div>

            <Button onClick={handleCancel} 
                style={{
                    fontSize: "20px", 
                    height : "50px", 
                    width : "200px", 
                    marginLeft : "24px", 
                    marginTop : "12px"
                }}>
                    Không
            </Button>

            <Button onClick={Logout} 
                style={{
                    background: "#FF9648", 
                    color: "#FFFFFF", 
                    fontSize: "20px", 
                    height : "50px", 
                    width : "200px", 
                    marginLeft : "20px"
                }}>
                    Chắc chắn
            </Button>

        </Modal>
        </>
    );
};

export default LogOut;
