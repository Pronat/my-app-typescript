import {reducer, StateType, TOGGLE_CONSTANT} from "./Reducer";

test("test of reducer should be true", () => {
    const state: StateType = {collapsed: false}
    const newState = reducer(state, {type: TOGGLE_CONSTANT})
    expect(newState.collapsed).toBe(true)
})

test("test of reducer should be false", () => {
    const state: StateType = {collapsed: true}
    const newState = reducer(state, {type: TOGGLE_CONSTANT})
    expect(newState.collapsed).toBe(false)
})

test("fake type", () => {
    const state: StateType = {collapsed: true}
    // const newState = reducer(state, {type: TOGGLE_CONSTANT})
    expect(()=>{
        reducer(state, {type: "FAKE"})
    }).toThrowError();
})