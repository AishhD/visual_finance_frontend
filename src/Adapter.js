

const usersURL = "http://localhost:3000/api/v1/users"
const signInURL = "http://localhost:3000/api/v1/users/login"
const ageURL = "http://localhost:3000/api/v1/age_options"
const cityURL = "http://localhost:3000/api/v1/city_options"
const childrenURL = "http://localhost:3000/api/v1/spending_categories/1"

// -----users-----

export const getUsers = () => {
    return fetch(`${usersURL}`).then(resp => resp.json());
}

export const postUsers = object => {
    return fetch(usersURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user: object })
    }).then(resp => resp.json());
}

export const signInUsers = object => {
    return fetch(signInURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user: object })
    }).then(resp => resp.json());
}

export const patchUser = object => {
    console.log(object.id)
    return fetch(`${usersURL}/${object.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user: object })
    }).then(resp => resp.json());
};

// -----Age-----

export const getAgeGroups = () => {
    return fetch(`${ageURL}`).then(resp => resp.json());
}

// -----City-----

export const getCityGroups = () => {
    return fetch(`${cityURL}`).then(resp => resp.json());
}

// -----Children-----

export const getChildrenData = () => {
    return fetch(`${childrenURL}`).then(resp => resp.json());
}
