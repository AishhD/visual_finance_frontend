export const userLocationData = (state = "", action) => {
    switch (action.type) {
        case "UPDATE_LOCATION_DATA":
            return action.payload
        default:
            return state
    }
}

