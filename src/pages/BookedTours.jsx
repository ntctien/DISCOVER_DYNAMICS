import { DatePicker, Button, Select, Spin } from 'antd';
import { useState, useEffect } from "react";
import BookedTourItem from '../components/booked_tour/BookedTourItem';
import { auth } from "../firebase";
import timeStampToString from "../utils/timeStampToString";
import { onAuthStateChanged } from "firebase/auth";
import getBookedTour from "../api/services/getBookedTour";
import getDestinationById from '../api/services/getDestinationById';
import BookingDetailModal from '../components/modals/BookingDetailModal';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const BookedTours = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(null);
  const [currItem, setCurrItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    let result = await getBookedTour();
    result = await Promise.all(
      result.map(async (item) => {
        const destinationInfo = await getDestinationById(item.tourId);
        
        return {
          ...item,
          destinationInfo,
          startDate: timeStampToString(item.startDate),
          endDate: timeStampToString(item.endDate),
        };
      })
    );
    setData([...result]);
    setLoading(false);
  };

  useEffect(() => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          fetchData();
        }
      });
  }, []);

  const handleItemClick = (item) => {
    setModal("detail");
    setCurrItem(item);
  };

  return (
    <div>
      <div style={{
        color: "#5C913B",
        marginLeft : "89px",
        marginTop : "35px",
        fontSize: "28px"
      }}>
        Danh sách Tour được đặt
      </div>
      <DatePicker style={{background:"#5C913B", color:"#FFFFFF", marginLeft : "1250px", height : "40px", width : "190px"}} picker='month'/>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", marginLeft : "112px"}}>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", background: "#FFFFFF",  marginLeft : "40px",
                      border:"1px solid rgba(0, 0, 0, 0.47)", borderRadius:"10px", marginTop :"24px", padding:"12px", width :"800px", height : "60px"}}>
          <input
            type = 'search'
            placeholder = 'Tìm theo Tour'
            style={{width : "800px", height : "50px", left : "112px", border: "none", borderRadius: "10px", fontSize : "16px",
            outline: "none", padding: "12px"}}></input>

          <Select
            size='small'
            defaultValue="Mã đặt Tour"
            style={{
              width : "240px", 
            }}
            onChange={handleChange}
            options={[
              {
                value: 'SĐT',
                label: 'Số điện thoại',
              },
              {
                value: 'ma-dat-tour',
                label: 'Mã đặt Tour',
              },
            ]}
          />
        </div>

        <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", marginTop : "24px"}}>
          <a style={{display: "flex", alignItems: "center", marginLeft : "40px"}}>
            Trạng thái: </a>
          <Select
            size='large'
            defaultValue="Chưa thanh toán"
            style={{
              width : 240,
              marginLeft : "10px"
            }}
            onChange={handleChange}
            options={[
              {
                value: 'Đã thanh toán',
                label: 'Đã thanh toán',
              },
            ]}
          />
        </div>
      </div>

      <Spin spinning={loading}> 
        {/* Booked tour items */}
        {data.map((item,i) =>(
          <BookedTourItem 
            item={item} 
            key={i} 
            setModal={setModal}
            setCurrItem={setCurrItem}
            onClick={() => handleItemClick(item)}
          />
        ))}
      </Spin>
      
      <Button 
        style={{
          marginTop : "20px", 
          left : "650px" , 
          border: "none"
          }}>
        Xem thêm...
      </Button>
          
      <BookingDetailModal
        open={modal === "detail"}
        onCancel={() => setModal(null)}
        data={currItem}
        admin={currItem?.status === 1}
      />
    </div>
  )
}

export default BookedTours