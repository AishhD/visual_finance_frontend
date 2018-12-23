export const averageUserSpending = (state = "", action) => {
    switch (action.type) {
        case "UPDATE_AVERAGE_USER_SPENDING":
            return action.payload
        default:
            return state
    }
}

