import { Divider } from "antd";
import CloseButton from "../CloseButton";

const ModalWrapper = ({ children, open, onCancel, title }) => {
  if (open)
    return (
      <>
        <div
          className="w-screen h-screen bg-black50 fixed  top-0 left-0 z-10"
          onClick={onCancel}
        ></div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 z-20">
          <div className="bg-white rounded-15 overflow-hidden">
            {/* Title */}
            <h2 className="text-center mt-[12px] font-ubuntu font-medium text-20">
              {title}
            </h2>
            <Divider className="mt-[13px] mb-0" />
            {/* Content */}
            {children}
            <CloseButton
              onClick={onCancel}
              className="absolute top-[11.5px] right-[13.5px]"
            />
          </div>
        </div>
      </>
    );
};

export default ModalWrapper;
