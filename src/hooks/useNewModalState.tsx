import { useState } from "react";

const useNewModalState = () => {
  const [modalVisible, setModalVisable] = useState(false);

  const openOrCloseModal = () => {
    setModalVisable((prevVal) => !prevVal);
  };

  return [modalVisible, openOrCloseModal] as const;
};

export default useNewModalState;
