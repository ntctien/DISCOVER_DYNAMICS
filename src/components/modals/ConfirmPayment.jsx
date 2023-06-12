import { Button, Modal } from "antd";
import React from 'react';
import {auth} from '../../firebase';
import updateTourStatus from "../../api/services/updateTourStatus";

const ConfirmPayment = ({open, handleCancel}) => {

    const handleConfirm = async (tourId) => {
        await updateTourStatus(tourId, 3);
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
                Bạn có chắc chắn rằng tour đã được thanh toán đầy đủ không?    
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

            <Button onClick={handleConfirm} 
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

export default ConfirmPayment;
