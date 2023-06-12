import { Button, Modal, Spin, message } from "antd";
import React, { useState } from 'react';
import updateTourStatus from "../../api/services/updateTourStatus";
import refresh from "../../utils/refreshPage";

const ConfirmPayment = ({open, handleCancel, tourId}) => {
    const [loading, setLoading] = useState(false);
    
    const handleConfirm = () => {
        setLoading(false);
        handleCancel();
        updateTourStatus(tourId, 2);
        message.success("Xác nhận thanh đoán đầy đủ thành công");
        // refresh();
    }

    return (
        <>
        <Modal centered open={open} onCancel={handleCancel} footer={null}>
            <Spin spinning={loading}>
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
            </Spin>
        </Modal>
        </>
    );
};

export default ConfirmPayment;
