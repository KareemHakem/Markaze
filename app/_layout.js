import { Stack } from "expo-router/stack";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [FontLoader] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMBold: require("../assets/fonts/DMSans-Medium.ttf"),
    DMBold: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (FontLoader) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [FontLoader]);

  return <Stack />;
}
