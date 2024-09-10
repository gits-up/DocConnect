import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle, inputOptions } from "../constants/styles";
import { Avatar, Button, TextInput } from "react-native-paper";
import Loader from "../components/Loader";
import { FontAwesome5 } from "@expo/vector-icons";

const UpdateSavedScreen = ({ navigation }) => {
  // get the user from the data base and set the initial state
  const [userCredentials, setUserCredentials] = useState({
    name: "Aditya",
    email: "adi@mail.com",
    avatar: null,
    mobile: "891818218",
    adhar: "258025802580",
    age: "20",
    occupation: "Dilo Ka Shooter",
  });
  const loading = false; //TODO
  const handleSubmit = () => {
    // make api call to update the user
  };

  return (
    <View style={{ ...defaultStyle, padding: 0 }}>
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
      <View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "500",
            textAlign: "center",
            color: colors.textColor,
            marginBottom: 25,
          }}
        >
          Details
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          padding: 20,
          borderRadius: 10,
          borderTopLeftRadius: 100,
          borderWidth: 1,
        }}
      >
        <View style={{ height: "10%" }} />
        <View style={{ gap: 10 }}>
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
        </View>
        <View style={{ marginBottom: 80 }} />
      </ScrollView>
    </View>
  );
};

export default UpdateSavedScreen;
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
