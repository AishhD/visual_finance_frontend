export const allAgeGroups = (state = "", action) => {
    switch (action.type) {
        case "UPDTAE_ALL_AGE_GROUPS":
            return action.payload
        default:
            return state
    }
}

