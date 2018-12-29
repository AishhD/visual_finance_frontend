import { combineReducers } from "redux"
import { filterData } from './filterData'
import { userAge } from './userAge'
import { userLocation } from './userLocation'
import { userChildren } from './userChildren'
import { username } from './username'
import { errors } from './errors'
import { allAgeGroups } from './allAgeGroups'
import { authorised } from './authorised'
import { childrenData } from './childrenData'
import { allCities } from './allCities'
import { userAgeData } from './userAgeData'
import { userLocationData } from './userLocationData'
import { userChildrenData } from './userChildrenData'
import { userToken } from './userToken'
import { userSpending } from './userSpending'
import { nationalAverage } from './nationalAverage'
import { averageUserSpending } from './averageUserSpending'
import { spendingDataID } from './spendingDataID'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    filterData,
    userAge,
    userLocation,
    userChildren,
    username,
    allAgeGroups,
    authorised,
    childrenData,
    allCities,
    userAgeData,
    userLocationData,
    userChildrenData,
    userToken,
    errors,
    userSpending,
    nationalAverage,
    averageUserSpending,
    spendingDataID,
    form: formReducer,
})