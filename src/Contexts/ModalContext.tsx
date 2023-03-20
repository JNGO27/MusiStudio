import { createContext, useContext, useState, useMemo } from "react";

type ModalProps = {
  modalVisable: boolean;
  setModalVisable: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

type Props = {
  children: React.ReactNode;
};

const Context = createContext<ModalProps>({} as ModalProps);

export const ModalContext = ({ children }: Props) => {
  const [modalVisable, setModalVisable] = useState(false);
  const [message, setMessage] = useState("");

  const conextValue = useMemo(
    () => ({
      modalVisable,
      setModalVisable,
      message,
      setMessage,
    }),
    [modalVisable, message],
  );

  return <Context.Provider value={conextValue}>{children}</Context.Provider>;
};

export const useModalContext = () => useContext(Context);
