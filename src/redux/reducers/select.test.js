import {select} from "./select"
import {selectAC} from "../action/select"


test('should return the database name', () => {
    let initialState = {
        select: null
    }
    let action = selectAC('sd')
    let newState = select(initialState, action)
    expect(newState.select).toBe('sd')
})