import { DatePicker, Button, Select, Descriptions, Pagination } from 'antd';
import React from 'react'

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const BookedTours = () => {
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

      <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", background: "#FFFFFF",  
                    marginLeft : "150px", border:"1px solid rgba(0, 0, 0, 0.47)", borderRadius:"10px", marginTop : "25px", width : "1200px", height : "180px"}}>
        <img
          style={{
            marginLeft : "30px",
            width : "200px",
            height : "150px"
          }}
          src='logo.png'
        />

        <Descriptions style={{marginLeft : "46px"}}>
          <Descriptions.Item label="Mã đặt Tour" 
            contentStyle={{
              color: "green",
            }}
            >LQNSU346JK</Descriptions.Item>
          <Descriptions.Item label="Họ tên khách hàng">Phạm Thị Thu Trang</Descriptions.Item>
          <Descriptions.Item label="SĐT">09xx xxx xxx</Descriptions.Item>
          <Descriptions.Item label="Tour đã đặt"> Cao Bằng</Descriptions.Item>
          <Descriptions.Item label="Trạng thái" 
            contentStyle={{
              color: "#FF9648"
            }}>Chưa thanh toán</Descriptions.Item>
          <Descriptions.Item label="Số lượng khách"> 1</Descriptions.Item>
          <Descriptions.Item label="Tổng cộng" 
            contentStyle={{
              color: "#396746"
            }}> 6.600.000 VNĐ</Descriptions.Item>
        </Descriptions>
      </div>
      <Button style={{marginTop : "20px", left : "650px" , border: "none"}}>
        Xem thêm...
      </Button>

    </div>
  )
}

export default BookedTours