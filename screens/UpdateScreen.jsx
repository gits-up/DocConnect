import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle, inputOptions } from "../constants/styles";
import { Avatar, TextInput } from "react-native-paper";
import Loader from "../components/Loader";
import Tab from "../components/Tab";
import { useSelector } from "react-redux";

const arr = ["info", "info", "info", "info"];

const UpdateScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);
  const { username, email, mobile, adhar, age, occupation } = user;
  const [userCredentials, setUserCredentials] = useState({
    name: username,
    email,
    avatar: null,
    mobile,
    adhar,
    age,
    occupation,
  });
  const loading = false; //TODO
  const handleSubmit = () => {
    // make api call to update the user
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ ...defaultStyle, padding: 0 }}>
        <TouchableOpacity
          style={{ width: "20%" }}
          onPress={() => navigation.goBack()}
        >
          <Avatar.Icon
            icon={"arrow-left"}
            style={{
              backgroundColor: colors.backgroundColor,
              resizeMode: "contain",
            }}
            color={colors.textColor}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "500",
              textAlign: "center",
              color: colors.textColor,
              marginBottom: 26,
            }}
          >
            Personal Details
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            paddingTop: 20,
            paddingHorizontal: 20,
            backgroundColor: colors.backgroundColor,
            borderTopLeftRadius: 100,
            borderWidth: 1,
          }}
        >
          <View style={{ height: "5%" }} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <TextInput
              {...inputOptions}
              placeholder="Name"
              value={userCredentials.name}
              onChangeText={(val) =>
                setUserCredentials({ ...userCredentials, name: val })
              }
            />
            <TextInput
              {...inputOptions}
              placeholder="Email"
              keyboardType="email-address"
              value={userCredentials.email}
              onChangeText={(val) =>
                setUserCredentials({ ...userCredentials, email: val })
              }
              autoCapitalize="none"
            />
            <TextInput
              {...inputOptions}
              placeholder="Age"
              value={userCredentials.age}
              onChangeText={(val) =>
                setUserCredentials({ ...userCredentials, age: val })
              }
              keyboardType="number-pad"
            />

            <TextInput
              {...inputOptions}
              placeholder="Occupation"
              value={userCredentials.occupation}
              onChangeText={(val) =>
                setUserCredentials({ ...userCredentials, occupation: val })
              }
            />
            <TextInput
              {...inputOptions}
              placeholder="Adhar Number"
              value={userCredentials.adhar}
              onChangeText={(val) =>
                setUserCredentials({ ...userCredentials, adhar: val })
              }
              keyboardType="number-pad"
            />

            <TextInput
              {...inputOptions}
              placeholder="Mobile Number"
              value={userCredentials.mobile}
              onChangeText={(val) =>
                setUserCredentials({ ...userCredentials, mobile: val })
              }
              keyboardType="number-pad"
            />
            <TouchableOpacity
              style={styles.btn}
              onPress={handleSubmit}
              activeOpacity={0.7}
            >
              {loading ? (
                <Loader height={25} width={25} />
              ) : (
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: "#FFFFFF",
                  }}
                >
                  Update
                </Text>
              )}
            </TouchableOpacity>
            <View style={{ gap: 12 }}>
              <Text
                style={{
                  fontSize: 19,
                  textDecorationLine: "underline",
                  paddingTop: 10,
                }}
              >
                Other Details
              </Text>
              <Text style={{ fontSize: 18 }}>Saved people</Text>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  rowGap: 10,
                }}
              >
                {arr.map((item, index) => (
                  <Tab text={item} key={index} />
                ))}

                <Tab
                  text={"+"}
                  onPress={() => {
                    navigation.navigate("UpdateSaved");
                  }}
                />
              </View>
            </View>
            <View style={{ marginBottom: 20 }} />
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default UpdateScreen;
const styles = StyleSheet.create({
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 12,
    backgroundColor: colors.buttonColor,
    width: "100%",
    gap: 5,
    alignSelf: "center",
    borderRadius: colors.br,
    marginTop: 10,
  },
});
