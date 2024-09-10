import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors } from "../constants/styles";
import { Avatar } from "react-native-paper";
const { height, width } = Dimensions.get("window");
const Box = ({ name, specialist, details, age }) => {
  return (
    <View style={styles.box}>
      <View style={styles.content}>
        <Avatar.Image
          size={100}
          source={{
            uri: "https://p.kindpng.com/picc/s/451-4517876_default-profile-hd-png-download.png",
          }}
        />
        <Text style={styles.text1}>
          {name} ~ {age}yrs
        </Text>
        <Text style={styles.text2}>{specialist}</Text>
        <Text style={styles.text3}>{details}</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: "#fffffd", fontSize: 17 }}>
            Book Your Ticket
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  box: {
    height: width / 1.3,
    width: height / 3,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: colors.br,
    marginRight: 12,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 8,
  },
  text1: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  text2: {
    textAlign: "center",
    fontSize: 19,
    fontWeight: "900",
  },
  text3: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 12,
    backgroundColor: colors.buttonColor,
    width: "100%",
    alignSelf: "center",
    borderRadius: colors.br,
  },
});
