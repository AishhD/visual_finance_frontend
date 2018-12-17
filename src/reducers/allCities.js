export const allCities = (state = "", action) => {
    switch (action.type) {
        case "UPDATE_ALL_CITIES":
            return action.payload
        default:
            return state
    }
}




