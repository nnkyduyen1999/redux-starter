import store from "./store";
import * as actions from "./actions";

store.dispatch(actions.bugAdded(`Bug1`));
store.dispatch(actions.bugAdded(`Bug2`));
store.dispatch(actions.bugAdded(`Bug3`));
store.dispatch(actions.bugChecked(3));
store.dispatch(actions.bugRemoved(2));

console.log(store.getState());
