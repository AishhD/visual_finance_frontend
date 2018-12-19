import { combineReducers } from "redux"
import { filterData } from './filterData'
import { userAge } from './userAge'
import { userLocation } from './userLocation'
import { userChildren } from './userChildren'
import { username } from './username'

import { allAgeGroups } from './allAgeGroups'
import { authorised } from './authorised'
import { childrenData } from './childrenData'
import { allCities } from './allCities'
import { userAgeData } from './userAgeData'
import { userLocationData } from './userLocationData'
import { userChildrenData } from './userChildrenData'
import { userToken } from './userToken'

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
    userToken
})