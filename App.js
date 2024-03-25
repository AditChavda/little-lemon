import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "./screens/Onboarding";

export default function App() {
  return (
    <NavigationContainer>
      <OnboardingScreen />
    </NavigationContainer>
  );
}
