import { createSelector } from "reselect";

import { UserState } from "./user.reducer";
import { RootState } from "../store";

export let selectUserReducer = (state: RootState): UserState => state.user;

export let selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);
