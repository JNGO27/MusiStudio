import { createContext, useContext, useState, useMemo } from "react";

type ModalProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

type Props = {
  children: React.ReactNode;
};

const Context = createContext<ModalProps>({} as ModalProps);

export const AddButtonModalContext = ({ children }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const conextValue = useMemo(
    () => ({
      modalVisible,
      setModalVisible,
    }),
    [modalVisible],
  );

  return <Context.Provider value={conextValue}>{children}</Context.Provider>;
};

export const useAddButtonModalContext = () => useContext(Context);
