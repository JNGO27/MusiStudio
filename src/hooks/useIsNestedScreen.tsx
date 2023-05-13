import { useNavigationState } from "@react-navigation/native";

import type { NavigationState } from "@react-navigation/native";

import { noHeader } from "@src/utils/constants";

const isNestedScreen = (state: NavigationState) => {
  const filteredScreens = state.routes.filter(({ name }) => noHeader.has(name));
  return filteredScreens.length >= 1;
};

const useIsNestedScreen = () => {
  const isNested = isNestedScreen(useNavigationState((state) => state));
  return isNested;
};

export default useIsNestedScreen;
