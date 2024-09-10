import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { defaultStyle } from "../constants/styles";
import Box from "../components/Box";
import { doctors } from "../constants/data";

const StaffScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.listHeader}>Staff List</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        contentContainerStyle={styles.scrollViewContent}
      >
        {doctors.map((doctor, ind) => (
          <Box
            key={ind}
            name={doctor.name}
            age={doctor.age}
            details={doctor.details}
            specialist={doctor.specialist}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default StaffScreen;

const styles = StyleSheet.create({
  container: {
    ...defaultStyle,
    padding: 7,
  },
  listHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    alignSelf: "center",
  },
  scrollViewContent: {
    alignItems: "center",
    gap: 12,
  },
});
