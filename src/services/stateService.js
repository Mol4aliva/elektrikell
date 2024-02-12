import { createAction, createReducer, configureStore, createSlice } from "@reduxjs/toolkit";
import {getDefaultFrom, getDefaultUntil} from "../utils/dates";
import {DEFAULT_ACTIVE_BUTTON} from "../Head";

const initialState = {
    activePrice: DEFAULT_ACTIVE_BUTTON,
    activeHour: 1,
};
const initialDateState = {
    from: getDefaultFrom(),
    until: getDefaultUntil(),
}

export const setActivePrice = createAction('setActivePrice');
export const setActiveHour = createAction('setActiveHour');

const main = createReducer(initialState, (builder) => {
    builder.addCase(setActivePrice, (state, action) => {
        state.activePrice = action.payload;
    }).addCase(setActiveHour, (state, action) => {
        state.activeHour = action.payload;
    });

});

const dateSlice = createSlice({
    name: "date",
    initialState: initialDateState,
    reducers: {
        setFrom: (state, action) => {
            state.from = action.payload;
        },
        setUntil: (state, action) => {
            state.until = action.payload;
        },
    }
})

export  const { setFrom, setUntil} = dateSlice.actions;
export const store = configureStore({
    reducer:{ main, date: dateSlice.reducer },
});