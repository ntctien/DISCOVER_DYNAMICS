import { Button, Modal } from "antd";
import React, { useEffect, useState } from 'react';
import updateTourStatus from "../../api/services/updateTourStatus";
import { collection, getDocs } from "firebase/firestore";
import {db} from '../../firebase';


const ConfirmPayment = ({open, handleCancel}) => {
    const [tourId, setTourId] = useState("");

    const fetchData = async () => {
       
        await getDocs(collection(db, "bookedTour"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setTourId(newData);                
                console.log(tourId, newData);
            })
       
    }

    useEffect(()=>{
        fetchData();
    }, [])

    const handleConfirm = async () => {
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
