export const username = (state = "", action) => {
    switch (action.type) {
        case "UPDATE_USERNAME":
            return action.payload
        default:
            return state
    }
}
