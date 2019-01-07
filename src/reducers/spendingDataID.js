export const spendingDataID = (state = null, action) => {
    switch (action.type) {
        case "UPDATE_SPENDING_DATA_ID":
            return action.payload
        default:
            return state
    }
}

