import {ActionType} from "./UncontrolledAccordion";

export type StateType = {
    collapsed: boolean
}

export const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"
export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            const stateCopy = {...state}
            stateCopy.collapsed = !stateCopy.collapsed
            return stateCopy
        default:
            throw new Error('Invalid action')
    }
    return state
}