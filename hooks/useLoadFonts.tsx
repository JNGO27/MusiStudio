// eslint-disable-next-line import/no-extraneous-dependencies
import {
  useFonts,
  Figtree_300Light,
  Figtree_300Light_Italic,
  Figtree_400Regular,
  Figtree_400Regular_Italic,
  Figtree_500Medium_Italic,
  Figtree_500Medium,
  Figtree_600SemiBold,
  Figtree_600SemiBold_Italic,
  Figtree_700Bold,
  Figtree_700Bold_Italic,
  Figtree_800ExtraBold,
  Figtree_800ExtraBold_Italic,
  Figtree_900Black,
  Figtree_900Black_Italic,
} from "@expo-google-fonts/figtree";

// eslint-disable-next-line consistent-return
const useLoadFonts = () => {
  const [fontsLoaded] = useFonts({
    Figtree_300Light,
    Figtree_300Light_Italic,
    Figtree_400Regular,
    Figtree_400Regular_Italic,
    Figtree_500Medium_Italic,
    Figtree_500Medium,
    Figtree_600SemiBold,
    Figtree_600SemiBold_Italic,
    Figtree_700Bold,
    Figtree_700Bold_Italic,
    Figtree_800ExtraBold,
    Figtree_800ExtraBold_Italic,
    Figtree_900Black,
    Figtree_900Black_Italic,
  });

  if (!fontsLoaded) {
    return "...Loading";
  }
};

export default useLoadFonts;
