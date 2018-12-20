export const userSpending = (state = "", action) => {
    switch (action.type) {
        case "UPDATE_USER_SPENDING_FOOD":
            return {
                ...state,
                food_non_alcholic_drinks: action.payload
              }
            
            
        default:
            return state
    }
}
