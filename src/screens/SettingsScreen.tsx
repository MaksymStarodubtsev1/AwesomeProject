import React from "react";
import { Text, View } from "react-native";


type ScreenProps = {
  route: any;
  navigation: any;
};


export const SettingsScreen = ({ route }: ScreenProps) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SettingsScreen</Text>
    </View>
  );
}
