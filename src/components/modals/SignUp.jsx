import { Modal, Spin, message, Input } from "antd";
import logo from '../../assets/logo.png';
import profileIcon from '../../assets/Profile.svg';
import lockIcon from '../../assets/lock.svg';
import { EyeOutlined } from '@ant-design/icons';
import googleIcon from '../../assets/google_icon.svg';
import facebookIcon from '../../assets/facebook_icon.svg';
import loadingIcon from '../../assets/loading.gif';
import React, {useState} from 'react';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth, provider, provider1 } from "../../firebase";
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import addUser from "../../api/services/addUser"

const SignUp = ({open, handleCancel, handleSignIn}) => {
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const resetForm = () => {
        setEmail('');
        setPassword('');
    };

    const onCancel = () => {
        handleCancel();
        resetForm();
    }

    const signUp = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Signed in
            const user = userCredential.user;
            await addUser(user.email, user.uid);
            message.success("Đăng ký thành công");
            onCancel();
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        }

        setLoading(false);
    }

    const signUpWithGoogle = async () => {
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, provider);
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            await addUser(user.email, user.uid);
            message.success("Đăng ký thành công");
            onCancel();
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        }
        setLoading(false);
    };

    const signUpWithFacebook = async () => {
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, provider1);
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            await addUser(user.email, user.uid);
            message.success("Đăng ký thành công");
            onCancel();
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        }
        setLoading(false);
    };

    return (
      <>
        <Modal centered open={open} onCancel={onCancel} footer={null}>
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
                    Đăng ký </p>

                <Input
                    style={{
                        border:"1px solid rgba(0, 0, 0, 0.47)", 
                        borderRadius:"10px", 
                        marginTop :"32px", 
                        padding:"12px", 
                        width :"480px"
                    }}
                    prefix = {<img 
                        src={profileIcon} 
                        alt="Profile"/>}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input.Password
                    style={{
                        border:"1px solid rgba(0, 0, 0, 0.47)", 
                        borderRadius:"10px", 
                        marginTop :"20px", 
                        padding:"12px", 
                        width :"480px"
                    }}
                    prefix = {<img
                        src={lockIcon} 
                        alt="Password"/>}
                    placeholder="Mật khẩu" 
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Input.Password
                    style={{
                        border:"1px solid rgba(0, 0, 0, 0.47)", 
                        borderRadius:"10px", 
                        marginTop :"20px", 
                        padding:"12px", 
                        width :"480px"
                    }}
                    prefix = {<img
                        src={lockIcon} 
                        alt="Password"/>}  
                    placeholder="Nhập lại mật khẩu"  
                    onChange={(e) => setPassword(e.target.value)} 
                />
                
                <button 
                    style={{
                        width : "480px", 
                        height :"52px", 
                        marginTop :"20px", 
                        borderRadius:"10px", 
                        background: "#FF9648", 
                        color:"white"
                    }}
                    onClick={signUp}>
                    ĐĂNG KÝ 
                </button>    
                
                <div style = {{display:"flex", alignItems:"center ", margin: "4px"}}>
                    <div style={{width : "200px", height : "0px", left : "40px", right : "416px", opacity: "0.47", border: "1px solid #000000"}}></div>
                    <div> <p style = {{padding : "16px", color: "#7B7B7B", fontSize: "20px"}}> 
                    hoặc </p></div>
                    <div style={{width : "200px", height : "0px", left : "320px", right : "416px", border: "1px solid rgba(0, 0, 0, 0.47)"}}></div>
                </div>

                <button onClick={signUpWithGoogle}
                    style = {{display : "flex", alignItems:"center", justifyContent:"center", width : "480px", height :"52px", 
                        left : "40px", top : "439px", borderRadius:"10px", background: "#FFFFFF", color:"#000000", border: "1px solid rgba(0, 0, 0, 0.47)"}}>
                    <img 
                        src={googleIcon} 
                        alt="Google" />
                    <p style={{marginLeft : "12px"}}>
                        Tiếp tục với Google</p>
                </button>

                <button onClick={signUpWithFacebook}
                    style = {{display : "flex", alignItems:"center", justifyContent:"center", marginTop : "20px", 
                        width : "480px", height :"52px", left : "40px", top : "439px", borderRadius:"10px", background: "#FFFFFF", color:"#000000", border: "1px solid rgba(0, 0, 0, 0.47)"}}>
                    <img 
                        src={facebookIcon} 
                        alt="Facebook" />
                    <p style={{marginLeft : "12px"}}>
                        Tiếp tục với Facebook</p>
                </button>

                <div style = {{marginTop : "20px"}}>
                    <p style = {{color: "rgba(0, 0, 0, 0.7)"}}> Đã có tài khoản? 
                    <button style={{
                                color:"#FF9648", 
                                width : "130px" 
                            }} 
                            onClick={handleSignIn}> 
                        Đăng nhập tại đây</button></p>
                </div>
          </div>

        </Modal>
      </>
    );
  };
  export default SignUp;