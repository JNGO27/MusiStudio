import { createContext, useContext, useState, useMemo } from "react";

import type { Dispatch, SetStateAction, ReactNode } from "react";

import { useNewModalState } from "@src/hooks";

type UseStateSetter<T> = Dispatch<SetStateAction<T>>;

type OptionTypes = "" | "Call" | "Message";

type ModalContextProps = {
  modalVisible: boolean;
  openOrCloseModal: () => void;
  optionType: OptionTypes;
  setOptionType: UseStateSetter<OptionTypes>;
  phoneNumber: string;
  setPhoneNumber: UseStateSetter<string>;
};

type Props = {
  children: ReactNode;
};

const Context = createContext<ModalContextProps>({} as ModalContextProps);

export const CallOrMessageContext = ({ children }: Props) => {
  const [modalVisible, openOrCloseModal] = useNewModalState();
  const [optionType, setOptionType] = useState<OptionTypes>("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const contextValue = useMemo(
    () => ({
      modalVisible,
      openOrCloseModal,
      optionType,
      setOptionType,
      phoneNumber,
      setPhoneNumber,
    }),
    [modalVisible, openOrCloseModal, optionType, phoneNumber],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useCallOrMessageContext = () => useContext(Context);
