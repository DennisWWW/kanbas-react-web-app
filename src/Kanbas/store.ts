import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import enrollmentReducer from "./Reducer/enrollmentReducer";

const store = configureStore({
  reducer: {
    enrollmentReducer,
    modulesReducer,
    accountReducer,
    assignmentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;