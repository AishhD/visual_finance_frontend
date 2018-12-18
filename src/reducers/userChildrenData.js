export const userChildrenData = (state = "", action) => {
    switch (action.type) {
        case "UPDATE_CHILDREN_DATA":
            return action.payload
        default:
            return state
    }
}