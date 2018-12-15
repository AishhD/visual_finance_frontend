import { combineReducers } from "redux"
import { filterData } from './filterData'
import { userAge } from './userAge'

export default combineReducers({
    filterData,
    userAge
})