import { createContext, useContext, useState, useMemo } from "react";

type ModalProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

type Props = {
  children: React.ReactNode;
};

const Context = createContext<ModalProps>({} as ModalProps);

export const AuthModalContext = ({ children }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState("");

  const conextValue = useMemo(
    () => ({
      modalVisible,
      setModalVisible,
      message,
      setMessage,
    }),
    [modalVisible, message],
  );

  return <Context.Provider value={conextValue}>{children}</Context.Provider>;
};

export const useAuthModalContext = () => useContext(Context);
