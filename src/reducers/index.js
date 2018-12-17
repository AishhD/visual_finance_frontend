import { combineReducers } from "redux"
import { filterData } from './filterData'
import { userAge } from './userAge'
import { userLocation } from './userLocation'
import { userChildren } from './userChildren'
import { username } from './username'
import { password } from './password'
import { passwordConf } from './passwordConf'
import { allAgeGroups } from './allAgeGroups'
import { authorised } from './authorised'

export default combineReducers({
    filterData,
    userAge,
    userLocation,
    userChildren,
    username,
    password,
    passwordConf,
    allAgeGroups,
    authorised
})