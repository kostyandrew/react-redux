import {configureStore} from "@reduxjs/toolkit";

import rootReducer from "./reducers";

const store = configureStore({ reducer: rootReducer })
window.store = store;

store.subscribe(() => {
    console.log(store.getState());
})

export default store;

