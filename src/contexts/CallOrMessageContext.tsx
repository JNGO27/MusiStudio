import { createContext, useContext, useMemo } from "react";

import type { Dispatch, SetStateAction, ReactNode } from "react";

import { useNewModalState } from "@src/hooks";

type UseStateSetter<T> = Dispatch<SetStateAction<T>>;

type ModalContextProps = {
  studentModalVisible: boolean;
  openOrCloseStudentModal: UseStateSetter<boolean>;
  familyModalVisible: boolean;
  openOrCloseFamilyModal: UseStateSetter<boolean>;
};

type Props = {
  children: ReactNode;
};

const Context = createContext<ModalContextProps>({} as ModalContextProps);

export const CallOrMessageContext = ({ children }: Props) => {
  const [studentModalVisible, openOrCloseStudentModal] = useNewModalState();
  const [familyModalVisible, openOrCloseFamilyModal] = useNewModalState();

  const contextValue = useMemo(
    () => ({
      studentModalVisible,
      openOrCloseStudentModal,
      familyModalVisible,
      openOrCloseFamilyModal,
    }),
    [
      familyModalVisible,
      openOrCloseFamilyModal,
      openOrCloseStudentModal,
      studentModalVisible,
    ],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useCallOrMessageContext = () => useContext(Context);
