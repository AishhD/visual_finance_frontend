export const spendingDataID = (state = null, action) => {
    switch (action.type) {
        case "UPDATE_SPENDING_DATA_ID":
            console.log("in")
            return action.payload
        default:
            return state
    }
}

