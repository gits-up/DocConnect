import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../constants/styles";
import { Avatar } from "react-native-paper";

const FinalBookScreen = ({ navigation, route }) => {
  return (
    <View style={{ ...defaultStyle, padding: 0 }}>
      <View
        style={{
          flex: 1,
          position: "relative",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Avatar.Icon
              icon={"arrow-left"}
              style={{
                backgroundColor: colors.backgroundColor,
                resizeMode: "contain",
              }}
              color={colors.textColor}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              textAlign: "center",
              flex: 1,
            }}
          >
            Payment Information
          </Text>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: colors.br,
              elevation: 5,
              backgroundColor: colors.backgroundColor,
              padding: 10,
              marginVertical: 10,
            }}
          >
            <Text style={styles.text}>Doctor Details</Text>
            <Text style={styles.text1}>
              Name : {route?.params?.doctor?.name}
            </Text>
            <Text style={styles.text1}>age : {route?.params?.doctor?.age}</Text>
            <Text style={styles.text1}>
              Specialist : {route?.params?.doctor?.specialist}
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <View style={styles.container}>
            <Text style={styles.text}>Doctor Fee </Text>
            <Text style={styles.text}>Rs. 500</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Service Fee </Text>
            <Text style={styles.text}>Rs. 100</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Discount </Text>
            <Text style={styles.text}>Rs. 0</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Total </Text>
            <Text style={styles.text}>Rs. 600</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.primaryColor,
              padding: 10,
              borderRadius: colors.br,
              elevation: 5,
              marginVertical: 10,
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Pay
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FinalBookScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 5,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    paddingVertical: 10,
  },
  text1: {
    fontWeight: "500",
    fontSize: 18,
  },
});
