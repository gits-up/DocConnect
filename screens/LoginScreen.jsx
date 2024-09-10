import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { colors, defaultStyle, inputOptions } from "../constants/styles";
import { TextInput } from "react-native-paper";
<<<<<<< HEAD
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
<<<<<<< HEAD
=======

// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../redux/action";

>>>>>>> 002a12954f980770b9ccc1cb0f2715d6b7bf3967
=======
import auth from "@react-native-firebase/auth";
>>>>>>> 572e7e5e6a3bcdaec099ce636d9d858ff8ec2a0f
import { useNavigation } from "@react-navigation/native";
import Loader from "../components/Loader";
import { FontAwesome5 } from "@expo/vector-icons";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const { width } = Dimensions.get("window");
<<<<<<< HEAD
const LoginScreen = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  const [passwordVisible, setPasswordVisible] = useState(true);
=======

 
   const [passwordVisible, setPasswordVisible] = useState(true);
  
>>>>>>> 3e4b63d0d0cc7875870813e336d8bc38936d161e
=======
=======
const LoginScreen = ({ route }) => {
>>>>>>> 572e7e5e6a3bcdaec099ce636d9d858ff8ec2a0f
  const [passwordVisible, setPasswordVisible] = useState(true);

>>>>>>> 002a12954f980770b9ccc1cb0f2715d6b7bf3967
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    setUserCredentials({ ...userCredentials, email: route.params?.email });
  }, [route.params]);
  const { email, password } = userCredentials;

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

<<<<<<< HEAD
<<<<<<< HEAD
  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Toast.success("User account created & signed in!");
        navigation.navigate("Main");
      })
      .catch((error) => {
=======
  const handleSubmit = async() => {
    signInWithEmailAndPassword(auth,email, password)
    .then(() => {
      Toast.show(
        {
          type: "success",
          text1: "User account created & signed in!",          
        }
      );
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
      AsyncStorage.setItem("LoggedIn","IND");
    })
      .catch((error) => { 
>>>>>>> 3e4b63d0d0cc7875870813e336d8bc38936d161e
=======
  const handleSubmit = async () => {
    setLoading(true);
<<<<<<< HEAD
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Toast.show({
          type: "success",
          text1: "User account created & signed in!",
        });
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
        AsyncStorage.setItem("LoggedIn", "IND");
        setLoading(false);
      })
      .catch((error) => {
>>>>>>> 002a12954f980770b9ccc1cb0f2715d6b7bf3967
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          Alert.alert("Enter Valid email-address!");
        }
        if (error.code === "auth/user-not-found") {
          Alert.alert("Please register first!");
        }
        if (error.code === "auth/wrong-password") {
          Alert.alert("Invalid Credentials");
        }
<<<<<<< HEAD
=======

        setLoading(false);
>>>>>>> 002a12954f980770b9ccc1cb0f2715d6b7bf3967
=======
    try {
      const isLogin = await auth().signInWithEmailAndPassword(email, password);

      Toast.show({
        type: "success",
        text1: "Welcome Back!!",
>>>>>>> 572e7e5e6a3bcdaec099ce636d9d858ff8ec2a0f
      });
      navigation.navigate("Home", {
        email: isLogin.user.email,
        uid: isLogin.user.uid,
      });

      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
      setLoading(false);
    } catch (error) {
      let errorMessage = "";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = error.message;
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid Email";
      } else if (error.code === "auth/user-not-found") {
        errorMessage = "Please Register First";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Invalid Password";
      }

      errorMessage &&
        Toast.show({
          type: "error",
          text1: errorMessage,
        });

      setLoading(false);
    }
  };

  return (
    <>
      <View style={{ ...styles.container, ...defaultStyle, padding: 3 }}>
        <View style={{ height: "30%", zIndex: 99 }}></View>
        <View style={styles.secondContainer}>
          <View style={styles.form}>
            <TextInput
              {...inputOptions}
              style={styles.input}
              placeholder="Email"
<<<<<<< HEAD
<<<<<<< HEAD
              value={email}
=======
              value={userCredentials.email}
>>>>>>> 002a12954f980770b9ccc1cb0f2715d6b7bf3967
=======
              value={email}
>>>>>>> 572e7e5e6a3bcdaec099ce636d9d858ff8ec2a0f
              onChangeText={(val) =>
                setUserCredentials({ ...userCredentials, email: val })
              }
              placeholderTextColor={"#000"}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              {...inputOptions}
              style={styles.input}
              placeholderTextColor={"#000"}
              placeholder="Password"
<<<<<<< HEAD
<<<<<<< HEAD
              value={password}
=======
              value={userCredentials.password}
>>>>>>> 002a12954f980770b9ccc1cb0f2715d6b7bf3967
=======
              value={password}
>>>>>>> 572e7e5e6a3bcdaec099ce636d9d858ff8ec2a0f
              onChangeText={(val) =>
                setUserCredentials({ ...userCredentials, password: val })
              }
              secureTextEntry={passwordVisible}
              right={
                <TextInput.Icon
                  icon={passwordVisible ? "eye-off" : "eye"}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              }
            />
            <TouchableOpacity
              style={styles.btn}
              disabled={!email || !password}
              onPress={handleSubmit}
              activeOpacity={0.7}
            >
              {loading ? (
                <Loader height={25} width={25} />
              ) : (
                <>
                  <FontAwesome5
                    name="user-graduate"
                    size={19}
                    style={{ fontWeight: 500 }}
                    color="#FFFFFF"
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 400,
                      color: "#FFFFFF",
                    }}
                  >
                    Login
                  </Text>
                </>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingTop: 15 }}
              activeOpacity={0.6}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={{ color: "#000", fontSize: 16 }}>
                Don't have an account Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  input: {
    backgroundColor: colors.backgroundColor,
    borderRadius: colors.br,
    width: "100%",
    color: colors.textColor,
  },
  secondContainer: {
    backgroundColor: "#dadada",
    flex: 1,
    width: width,
    justifyContent: "center",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 12,
    alignItems: "center",
  },
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
  },
});
