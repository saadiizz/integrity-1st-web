import { createSelector } from "reselect";

const selectLoginDomain = (state) => state[("auth", "dashboard", "garage", 'appointment')];

export const makeSelectAuthToken = () =>
  createSelector(selectLoginDomain, (globalState) => globalState.token);
