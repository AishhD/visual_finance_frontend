export const userToken = (state = "", action) => {
    switch (action.type) {
        case "UPDATE_USER_TOKEN":
            return action.payload
        default:
            return state
    }
}
