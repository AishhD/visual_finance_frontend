export const userChildren = (state = "", action) => {
    switch (action.type) {
        case "UPDATE_CHILDREN":
            return action.payload
        default:
            return state
    }
}

