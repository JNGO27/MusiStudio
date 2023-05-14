import type { NavigationState, PartialState } from "@react-navigation/native";

// eslint-disable-next-line import/prefer-default-export
export const getActiveRouteName = (
  state: NavigationState | PartialState<NavigationState> | undefined,
): string => {
  let route;
  if (state && "index" in state && state.routes) {
    route = state.routes[state.index ?? 0];
  } else {
    return "";
  }

  if (route.state && "index" in route.state) {
    return getActiveRouteName(route.state);
  }

  return route.name;
};
