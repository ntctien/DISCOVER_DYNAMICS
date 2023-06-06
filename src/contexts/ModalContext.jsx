import { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [currentModal, setCurrentModal] = useState();

  return (
    <ModalContext.Provider value={{ currentModal, setCurrentModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
