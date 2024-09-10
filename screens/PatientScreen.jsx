import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { defaultStyle } from "../constants/styles";
const PatientScreen = () => {
  return (
    <View style={{ ...defaultStyle, padding: 0 }}>
      <Text>PatientScreen</Text>
    </View>
  );
};

export default PatientScreen;

const styles = StyleSheet.create({});
