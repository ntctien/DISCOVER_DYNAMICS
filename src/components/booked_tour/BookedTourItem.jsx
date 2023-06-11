import { Descriptions } from 'antd';
import { useEffect, useState } from "react";
import numberWithDots from "../../utils/numberWithDots";
import tourStatus from "../../constants/tourStatus";

const BookedTourItem = ({item}) => {
    return (
        <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", background: "#FFFFFF",  
                    marginLeft : "150px", border:"1px solid rgba(0, 0, 0, 0.47)", borderRadius:"10px", marginTop : "25px", width : "1200px", height : "180px"}}>
        <img
          style={{
            marginLeft : "30px",
            width : "200px",
            height : "150px"
          }}
          src='logo.png'
          alt='Logo'
        />

        <Descriptions style={{marginLeft : "46px"}}>
          <Descriptions.Item label="Mã đặt Tour" 
            contentStyle={{
              color: "green",
            }}>
                {item.id}
            </Descriptions.Item>

          <Descriptions.Item label="Họ tên khách hàng">
                {item.name}
            </Descriptions.Item>

          <Descriptions.Item label="SĐT">
                {item.phoneNumber}
            </Descriptions.Item>

          <Descriptions.Item label="Tour đã đặt"> 
                {item.destinationInfo?.location}
          </Descriptions.Item>

          <Descriptions.Item label="Trạng thái" 
            contentStyle={{
                color: tourStatus[item?.status].color,
            }}>
                {tourStatus[item?.status].title}
            </Descriptions.Item>

          <Descriptions.Item label="Số lượng khách"> 
                {item.quantity}
            </Descriptions.Item>

          <Descriptions.Item label="Tổng cộng" 
            contentStyle={{
                color: "#396746"
            }}> 
                {numberWithDots(item.total) + " VNĐ"}
            </Descriptions.Item>
        </Descriptions>
      </div>
    )
};

export default BookedTourItem;



