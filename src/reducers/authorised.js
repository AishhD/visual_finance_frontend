export const authorised = (state = "Sign up", action) => {
    switch (action.type) {
        case "UPDATE_AUTHORISED":
            return action.payload
        default:
            return state
    }
}


