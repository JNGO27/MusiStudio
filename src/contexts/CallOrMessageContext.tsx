import { createContext, useContext, useMemo } from "react";

import type { ReactNode } from "react";

import { useNewModalState } from "@src/hooks";

type ModalContextProps = {
  modalVisible: boolean;
  openOrCloseModal: () => void;
};

type Props = {
  children: ReactNode;
};

const Context = createContext<ModalContextProps>({} as ModalContextProps);

export const CallOrMessageContext = ({ children }: Props) => {
  const [modalVisible, openOrCloseModal] = useNewModalState();

  const contextValue = useMemo(
    () => ({
      modalVisible,
      openOrCloseModal,
    }),
    [openOrCloseModal, modalVisible],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useCallOrMessageContext = () => useContext(Context);
