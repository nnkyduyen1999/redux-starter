import * as actions from "./actionsType";

let currId = 0;

export const reducer = (curState = [], action) => {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...curState,
        {
          id: ++currId,
          description: action.payload.description,
          isChecked: false,
        },
      ];
    case actions.BUG_DELETED:
      return curState.filter((bug) => bug.id !== action.payload.id);
    case actions.BUG_CHECKED:
      return curState.map((bug) =>
        bug.id === action.payload.id
          ? {
              ...bug,
              isChecked: !bug.isChecked
          }
          : bug
      );
    default:
      return curState;
  }
};
