import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });
    const users = await firestore()
      .collection("users")
      .doc(auth().currentUser.uid)
      .get();
    console.log(users._data, "in action");
    dispatch({
      type: "loadUserSuccess",
      payload: users?._data,
    });
  } catch (error) {
    console.log(error, "in action");
    dispatch({
      type: "loadUserFail",
      payload: error.response.data.message,
    });
  }
};
