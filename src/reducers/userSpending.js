const initialState = {
    spending_category: {
        alcoholic_drinks_tobacco_narcotics: 0,
        food_non_alcholic_drinks: 0,
        household_bills: 0,
        transport: 0,
        resturants_hotels: 0,
        recreation_culture: 0,
        clothing_footwear: 0,
        education: 0,
        other: 0
    }
}

export const userSpending = (state = initialState, action) => {
    switch (action.type) {

        case "UPDATE_USER_SPENDING_ALCOHOL":
            return {
                ...state,
                spending_category:
                    { ...state.spending_category, alcoholic_drinks_tobacco_narcotics: action.payload }
            }
        case "UPDATE_USER_SPENDING_FOOD":
            return {
                ...state,
                spending_category:
                    { ...state.spending_category, food_non_alcholic_drinks: action.payload }
            }
        case "UPDATE_USER_SPENDING_TRANSPORT":
            return {
                ...state,
                spending_category:
                    { ...state.spending_category, transport: action.payload }
            }
        case "UPDATE_USER_SPENDING_HOUSEHOLD":
            return {
                ...state,
                spending_category:
                    { ...state.spending_category, household_bills: action.payload }
            }
        case "UPDATE_USER_SPENDING_RESTURANTS":
            return {
                ...state,
                spending_category:
                    { ...state.spending_category, resturants_hotels: action.payload }
            }

        case "UPDATE_USER_SPENDING_RECREATION":
            return {
                ...state,
                spending_category:
                    { ...state.spending_category, recreation_culture: action.payload }
            }
        case "UPDATE_USER_SPENDING_CLOTHING":
            return {
                ...state,
                spending_category:
                    { ...state.spending_category, clothing_footwear: action.payload }
            }
        case "UPDATE_USER_SPENDING_EDUCATION":
            return {
                ...state,
                spending_category:
                    { ...state.spending_category, education: action.payload }
            }
        case "UPDATE_USER_SPENDING_OTHER":
            return {
                ...state,
                spending_category:
                    { ...state.spending_category, other: action.payload }
            }

        default:
            return state
    }
}
