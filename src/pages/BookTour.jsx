import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Checkbox, Form } from "antd";
import Quantity from "../components/Quantity";
import DefaultInput from "../components/inputs/DefaultInput";
import DefaultTextArea from "../components/inputs/DefaultTextArea";
import DefaultDatePicker from "../components/inputs/DefaultDatePicker";
import { locationIcon } from "../assets/search_icons";
import { durationIcon, expenseIcon } from "../assets/tour_icons";
import AddressForm from "../components/book_tour/AddressForm";
import SuccessModal from "../components/book_tour/SuccessModal";
import getDestinationById from "../api/services/getDestinationById";
import getDurationString from "../utils/getDurationString";
import numberWithDots from "../utils/numberWithDots";
import dayjs from "dayjs";
import bookTour from "../api/services/bookTour";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const BookTour = () => {
  const navigate = useNavigate();
  const { tourId } = useParams();
  const [form] = Form.useForm();
  const [success, setSuccess] = useState(false);
  const [tourInfo, setTourInfo] = useState();
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const [startDate, setStartDate] = useState(dayjs().add(1, "day"));
  const [paymentCheck, setPaymentCheck] = useState(true);
  const [policyCheck, setPolicyCheck] = useState(true);

  const endDate = dayjs(startDate).add(tourInfo?.dayDuration ?? 0, "day");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        form.setFieldValue("email", user.email);
      } else {
        navigate("/destination");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fetch tour info
  useEffect(() => {
    const fetchTourInfo = async () => {
      const destination = await getDestinationById(tourId);
      setTourInfo(destination);
    };
    fetchTourInfo();
  }, [tourId]);

  // Calculate total price
  useEffect(() => {
    setTotal(tourInfo?.price * quantity);
  }, [quantity, tourInfo?.price]);

  const handleBookTour = () => {
    form.validateFields().then(async (values) => {
      if (values.paymentCheck && values.policyCheck) {
        const result = await bookTour({
          uid: auth.currentUser.uid,
          tourId,
          quantity,
          total,
          ...values,
          startDate: dayjs(startDate).toDate(),
          endDate: dayjs(endDate).toDate(),
          createdAt: dayjs().toDate()
        });
        if (result.success) {
          setSuccess(true);
        } else {
          console.log(result.error);
        }
      } else {
        setPaymentCheck(values.paymentCheck);
        setPolicyCheck(values.policyCheck);
      }
    });
  };

  return (
    <Form form={form}>
      <div className="flex items-start gap-x-5 pt-[30px] pb-[50px] px-[80px] book-tour">
        {/* Left side */}
        <div className="container pt-[15px] pb-[63px] w-[65.625%]">
          {/* Tour info */}
          <div className="flex gap-x-5 p-5 rounded-10 border-1 border-grey-darker">
            {/* Tour image */}
            <img
              src={tourInfo?.tourImages && tourInfo.tourImages[0]}
              alt="Tour"
              className="w-[240px] h-[180px] rounded-10 object-cover object-center"
            />
            <div className="flex flex-col justify-between flex-1 font-medium">
              {/* Top row */}
              <div className="flex justify-between">
                {/* Tour name */}
                <div className="book-tour-info-container">
                  <h3>Tour của bạn</h3>
                  <div className="book-tour-info">
                    <p>{tourInfo?.location}</p>
                    <img src={locationIcon} alt="Location" />
                  </div>
                </div>
                {/* Duration */}
                <div className="book-tour-info-container">
                  <h3>Thời gian</h3>
                  <div className="book-tour-info">
                    <p>
                      {getDurationString(
                        tourInfo?.dayDuration,
                        tourInfo?.nightDuration
                      )}
                    </p>
                    <img
                      src={durationIcon}
                      alt="Duration"
                      className="w-[25px]"
                    />
                  </div>
                </div>
                {/* Expense */}
                <div className="book-tour-info-container">
                  <h3>Đơn giá</h3>
                  <p>{numberWithDots(tourInfo?.price)} VNĐ</p>
                </div>
              </div>
              {/* Bottom row */}
              <div className="flex gap-x-[78px]">
                {/* Customer quantity */}
                <div className="book-tour-info-container">
                  <h3>Số lượng khách:</h3>
                  <Quantity
                    value={quantity}
                    setValue={setQuantity}
                    min={1}
                    max={100}
                    className={"mt-5"}
                  />
                </div>
                {/* Tạm tính */}
                <div className="flex-1 flex justify-center">
                  <div className="book-tour-info-container h-full">
                    <h3>Tạm tính:</h3>
                    <p className="mb-[10px] text-24">
                      {numberWithDots(total)} VNĐ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Book tour form */}
          <h2 className="mt-[30px]">Thông tin đặt tour</h2>
          <div className="flex flex-col gap-y-[25px] mt-[30px]">
            <div className="book-form-row">
              <DefaultInput
                name={"name"}
                label={"Họ và tên"}
                required
                rules={[{ required: true, message: "Hãy nhập họ và tên" }]}
              />
              <DefaultInput
                name={"phoneNumber"}
                type={"number"}
                label={"Số điện thoại"}
                placeholder={"567 890 123"}
                required
                prefix={<p className="text-18 text-black47">+84</p>}
                rules={[
                  { required: true, message: "Hãy nhập số điện thoại" },
                  {
                    validator: (_, value) => {
                      if (value == null) return Promise.resolve();
                      if (value.length === 10 || value.length === 11) {
                        return Promise.resolve();
                      } else {
                        return Promise.reject();
                      }
                    },
                    message: "Số điện thoại không hợp lệ",
                  },
                ]}
              />
            </div>
            <div className="book-form-row">
              <DefaultInput
                name={"email"}
                label={"Email"}
                placeholder={"example@email.com"}
                required
                rules={[
                  { required: true, message: "Hãy nhập email" },
                  { type: "email", message: "Email không hợp lệ" },
                ]}
              />
              <DefaultDatePicker
                name={"startDate"}
                label={"Ngày khởi hành"}
                required
                placeholder={"dd/mm/yyyy"}
                initialValue={startDate}
                value={startDate}
                onChange={setStartDate}
                rules={[
                  { required: true, message: "Hãy chọn ngày khởi hành" },
                  {
                    validator: (_, value) => {
                      if (value == null) return Promise.resolve();
                      if (dayjs(value).isAfter(dayjs(), "day")) {
                        return Promise.resolve();
                      } else {
                        return Promise.reject();
                      }
                    },
                    message:
                      "Vui lòng chọn ngày khởi hành trễ hơn hôm nay ít nhất 1 ngày",
                  },
                ]}
              />
            </div>
            <AddressForm />
            <DefaultTextArea
              name={"note"}
              label={"Ghi chú về chuyến đi"}
              placeholder="Các yêu cầu về chuyến đi như chỗ ở, món ăn, đi lại,..."
            />
          </div>
          {/* Payment */}
          <h2 className="mt-[30px]">
            Thanh toán toàn bộ trước khi tour khởi hành
          </h2>
          <div className="between-row px-[15px] py-[14px] rounded-10 border-1 border-black47 mt-[10px]">
            <div className="row gap-x-[15px] font-medium text-20">
              <Form.Item
                name={"paymentCheck"}
                valuePropName="checked"
                initialValue={false}
                className="payment-checkbox"
              >
                <Checkbox
                  id="paymentCb"
                  onChange={(e) => setPaymentCheck(e.target.checked)}
                />
              </Form.Item>
              <label htmlFor="paymentCb" className=" text-[#222222]">
                Tôi cam kết thanh toán đầy đủ 100% chuyến đi trước khi khởi hành
              </label>
            </div>
            <img src={expenseIcon} alt="Money" />
          </div>
          {!paymentCheck && (
            <p className="mt-2 text-[#FF0000] text-16">
              Vui lòng cam kết thanh toán
            </p>
          )}
        </div>
        {/* Right side */}
        <div className="container flex-1 py-[25px] book-summary">
          <h2>Tóm tắt chuyến đi</h2>
          <p className="mt-[30px]">
            <span>Tour: </span>
            {tourInfo?.location}
          </p>
          <div className="flex justify-between mt-[15px]">
            <p>
              <span>Ngày đi: </span>
              <br />
              <br />
              {dayjs(startDate).format("DD/MM/YYYY")}
            </p>
            <div className="w-[1px] bg-grey" />
            <p>
              <span>Ngày về: </span>
              <br />
              <br />
              {dayjs(endDate).format("DD/MM/YYYY")}
            </p>
          </div>
          <p className="mt-5">
            <span>Thời gian: </span>
            {getDurationString(tourInfo?.dayDuration, tourInfo?.nightDuration)}
          </p>
          <p className="mt-[30px]">
            <span>Số lượng khách: </span>
            {quantity} người
          </p>
          <div className="between-row text-green mt-[50px]">
            <h3 className="font-medium text-22">Tổng cộng:</h3>
            <p className="font-semibold text-25">{numberWithDots(total)} VNĐ</p>
          </div>
          <div className="row gap-x-[10px] mt-[55px] text-14">
            <Form.Item
              name={"policyCheck"}
              valuePropName="checked"
              initialValue={false}
            >
              <Checkbox
                id="policyCb"
                onChange={(e) => setPolicyCheck(e.target.checked)}
                className="small-checkbox"
              />
            </Form.Item>
            <label
              htmlFor="policyCb"
              className="font-medium"
              style={{ letterSpacing: "0.25px" }}
            >
              Xác nhận đồng ý với chính sách tour
              <span className="text-red"> *</span>
            </label>
          </div>
          {!policyCheck && (
            <p className="text-[#FF0000] text-16">Vui lòng xác nhận</p>
          )}
          <button
            onClick={handleBookTour}
            className="default-btn w-full mt-[10px]"
          >
            XÁC NHẬN ĐẶT TOUR
          </button>
        </div>
        <SuccessModal
          open={success}
          onCancel={() => navigate("/")}
          email={form.getFieldValue("email")}
        />
      </div>
    </Form>
  );
};

export default BookTour;
