import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@src/redux";
import { getTimedStatusMessageOccurred } from "@src/redux/selectors";
import { setTimedStatusMessageOccured } from "@src/redux/features/generalGlobalData";

const useResetTimedStatusMessage = () => {
  const dispatch = useAppDispatch();
  const timedStatusMessageOccurred = useAppSelector(
    getTimedStatusMessageOccurred,
  );

  useEffect(() => {
    if (timedStatusMessageOccurred) {
      const timer = setTimeout(
        () => dispatch(setTimedStatusMessageOccured(false)),
        5500,
      );

      return () => clearTimeout(timer);
    }

    return () => {};
  }, [dispatch, timedStatusMessageOccurred]);
};

export default useResetTimedStatusMessage;
