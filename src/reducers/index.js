import { combineReducers } from "redux"
import { filterData } from './filterData'
import { userAge } from './userAge'
import { userLocation } from './userLocation'
import { userChildren } from './userChildren'

export default combineReducers({
    filterData,
    userAge,
    userLocation,
    userChildren
})