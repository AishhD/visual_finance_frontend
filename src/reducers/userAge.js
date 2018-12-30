export const userAge = (state = 0, action) => {
    switch (action.type) {
        case "UPDATE_AGE":
            return action.payload
        default:
            return state
    }
}