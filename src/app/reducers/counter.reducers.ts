import {  createReducer,on } from "@ngrx/store";
import { increament } from "../state/counter/counter.actions";

export const initialState = 0;
export const counterReducer=createReducer(
    initialState,
    on(increament,(state)=>state+1)
) //الي يخلي السله تحسب بدون تحذف
