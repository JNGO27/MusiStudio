import { useAppSelector } from "@src/redux";
import { getGeneralGlobalData } from "@src/redux/selectors";

import { noHeaderOptions } from "@src/utils/constants";

const useIsNestedScreen = () => {
  const currentAppRoute = useAppSelector(getGeneralGlobalData).currentRoute;

  const isNestedScreen = () => {
    const filteredScreens = noHeaderOptions.has(currentAppRoute);
    return filteredScreens;
  };

  return isNestedScreen();
};

export default useIsNestedScreen;
