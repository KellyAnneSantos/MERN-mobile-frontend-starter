import { SET_CURR_USER } from "../actions/AuthActions";
import isEmpty from "../../assets/common/isEmpty";

export default function (state, action) {
  switch (action.type) {
    case SET_CURR_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
}
