import { NavigationContainer } from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";
import "../Config/firebase";
import { queryClient } from "../Config/reactQuery";
import { RootStackNavigator } from "../Navigators";
import { LoadingContext } from "../Context";
import { Loading } from "../Screens/Loading";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setIsLoadingMessage] = useState("");

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SafeAreaProvider>
          <LoadingContext.Provider
            value={{
              loading: isLoading,
              message: loadingMessage,
              showLoading: (message: string) => {
                setIsLoading(true);
                setIsLoadingMessage(message);
              },
              hideLoading: () => {
                setIsLoading(false);
                setIsLoadingMessage("");
              },
            }}
          >
            {isLoading && <Loading />}
            <RootStackNavigator />
          </LoadingContext.Provider>
        </SafeAreaProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
};
