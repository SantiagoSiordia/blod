import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Authentication, Login, Signup } from "@screens";
import React from "react";
import { BottomTabs } from "./BottomTabs";

const Stack = createNativeStackNavigator();

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="App" component={BottomTabs} />
    </Stack.Navigator>
  );
}