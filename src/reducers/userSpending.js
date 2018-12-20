export const userSpending = (state = "", action) => {
    switch (action.type) {
        
        case "UPDATE_USER_SPENDING_ALCOHOL":
        return {
            ...state,
            alcoholic_drinks_tobacco_narcotics: action.payload
        }
        case "UPDATE_USER_SPENDING_FOOD":
            return {
                ...state,
                food_non_alcholic_drinks: action.payload
              }
        case "UPDATE_USER_SPENDING_TRANSPORT":
            return {
                ...state,
                transport: action.payload
            }
        case "UPDATE_USER_SPENDING_HOUSEHOLD":
            return {
                ...state,
                household_bills: action.payload
            }
        case "UPDATE_USER_SPENDING_RESTURANTS":
            return {
                ...state,
                resturants_hotels: action.payload
            }
       
        case "UPDATE_USER_SPENDING_RECREATION":
            return {
                ...state,
                recreation_culture: action.payload
            }
        case "UPDATE_USER_SPENDING_CLOTHING":
            return {
                ...state,
                clothing_footwear: action.payload
            }
        case "UPDATE_USER_SPENDING_EDUCATION":
            return {
                ...state,
                education: action.payload
            }
        case "UPDATE_USER_SPENDING_OTHER":
            return {
                ...state,
                other: action.payload
            }
            
        default:
            return state
    }
}
