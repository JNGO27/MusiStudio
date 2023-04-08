import { useCallback } from "react";
import {
  StackActions,
  useNavigation,
  useFocusEffect,
} from "@react-navigation/native";

const useUnFocusedScreenToParent = () => {
  const navigator = useNavigation();

  useFocusEffect(
    useCallback(() => {
      function helper() {
        navigator.addListener("focus", (e) => {
          if (e.target) {
            navigator.dispatch(StackActions.popToTop());
          }
        });
      }

      return () => helper();
    }, [navigator]),
  );
};

export default useUnFocusedScreenToParent;
