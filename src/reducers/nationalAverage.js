export const nationalAverage = (state = "", action) => {
    switch (action.type) {
        case "UPDATE_NATIONAL_AVERAGE":
            return action.payload
        default:
            return state
    }
}

