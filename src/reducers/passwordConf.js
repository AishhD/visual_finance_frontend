export const passwordConf = (state = "", action) => {
    switch (action.type) {
        case "UPDATE_PASSWORD_CONF":
            return action.payload
        default:
            return state
    }
}
