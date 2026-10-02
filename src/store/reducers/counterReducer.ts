import {
  INCREMENT,
  DECREMENT,
  RESET,
} from "../actions/counterActions";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

type CounterAction =
  | { type: typeof INCREMENT }
  | { type: typeof DECREMENT }
  | { type: typeof RESET };

export const counterReducer = (
  state = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return {
        value: state.value + 1,
      };

    case DECREMENT:
      return {
        value: state.value - 1,
      };

    case RESET:
      return {
        value: 0,
      };

    default:
      return state;
  }
};