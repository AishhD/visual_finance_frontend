export const authorised = (state = "", action) => {
    switch (action.type) {
        case "UPDATE_AUTHORISED":
            return action.payload
        default:
            return state
    }
}


