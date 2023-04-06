import { useCallback } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

const useUnFocusedScreenToParent = () => {
  const navigator = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const outOfFocusNavigation = () => navigator.goBack();

      return () => outOfFocusNavigation();
    }, [navigator]),
  );
};

export default useUnFocusedScreenToParent;
