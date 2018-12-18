export const userAgeData = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_AGE_DATA":
            return action.payload
        default:
            return state
    }
}