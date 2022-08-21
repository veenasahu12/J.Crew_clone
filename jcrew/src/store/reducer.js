import { ADD_LOGIN_SUCCESS } from "./action.type";

const initialstate = {
  isauth: false,
  user: {},
};

export const Reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ADD_LOGIN_SUCCESS: {
      return {
        ...state,
        isauth: true,
        user: payload,
      };
    }
    default: {
      return state;
    }
  }
};
