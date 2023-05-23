import { useAppSelector } from "@src/redux";
import { getCurrentRoute } from "@src/redux/selectors";

import { noHeaderOptions } from "@src/utils/constants";

const useIsNestedScreen = () => {
  const currentAppRoute = useAppSelector(getCurrentRoute);

  const filteredScreens = noHeaderOptions.has(currentAppRoute);
  return filteredScreens;
};

export default useIsNestedScreen;
