export const allAgeGroups = (state = "", action) => {
    switch (action.type) {
        case "UPDATE_ALL_AGE_GROUPS":
            return action.payload
        default:
            return state
    }
}

