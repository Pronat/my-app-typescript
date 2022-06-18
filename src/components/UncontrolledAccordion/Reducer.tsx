import {ActionType} from "./UncontrolledAccordion";

export const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"
export const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return !state
        default:
            throw new Error('Invalid action')
    }
    return state
}