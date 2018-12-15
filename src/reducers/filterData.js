export const filterData = (state = {}, action) => {
    switch (action.type) {
        case "SAVE_FILTERS":
            return { ...state, ...action.filters }
        case "FETCH DATA":
            return state;
        default:
            return state;
    }
}