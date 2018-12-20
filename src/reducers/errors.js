export const errors = (state = "", action) => {
    switch (action.type) {
        case "UPDATE_ERRORS":
            return action.payload
        default:
            return state
    }
}
