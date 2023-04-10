import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import baseURL from "../../assets/common/baseUrl";

export const SET_CURR_USER = "SET_CURRENT_USER";

export const logInUser = (user, dispatch) => {
  fetch(`${baseURL}users/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        const token = data.token;
        AsyncStorage.setItem("jwt", token);
        const decoded = jwt_decode(token);
        dispatch(setCurrUser(decoded));
      } else {
        logOutUser(dispatch);
      }
    })
    .catch((err) => {
      Toast.show({
        text1: "Invalid credentials",
        topOffset: 60,
        type: "error",
      });
      logOutUser(dispatch);
    });
};

export const logOutUser = (dispatch) => {
  AsyncStorage.removeItem("jwt");
  dispatch(setCurrUser({}));
};

export const setCurrUser = (decoded) => {
  return {
    type: SET_CURR_USER,
    payload: decoded,
  };
};
