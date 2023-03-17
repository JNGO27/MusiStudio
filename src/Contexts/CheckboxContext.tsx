import { createContext, useContext, useState, useMemo } from "react";

type Checkbox = {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

type Props = {
  children: React.ReactNode;
};
const Context = createContext<Checkbox>({} as Checkbox);

export const CheckboxContext = ({ children }: Props) => {
  const [checked, setChecked] = useState(false);

  const conextValue = useMemo(
    () => ({
      checked,
      setChecked,
    }),
    [checked],
  );

  return <Context.Provider value={conextValue}>{children}</Context.Provider>;
};

export const useCheckboxContext = () => useContext(Context);
