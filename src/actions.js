import * as types from "./actionsType";

export const bugAdded = (description) => ({
  type: types.BUG_ADDED,
  payload: {
    description: description,
  },
});

export const bugRemoved = (id) => ({
  type: types.BUG_DELETED,
  payload: {
    id: id,
  },
});

export const bugChecked = (id) => ({
  type: types.BUG_CHECKED,
  payload: {
    id: id,
  },
});
