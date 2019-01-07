

const usersURL = "http://localhost:3000/api/v1/users"
const signInURL = "http://localhost:3000/api/v1/users/login"
const ageURL = "http://localhost:3000/api/v1/age_options"
const cityURL = "http://localhost:3000/api/v1/city_options"
const nationalAverageURL = "http://localhost:3000/api/v1/national_averages"
const childrenURL = "http://localhost:3000/api/v1/children_options/1"
const currentUser = "http://localhost:3000/api/v1/users/validate"
const averageURL = "http://localhost:3000/api/v1/spending_data/average"
const countryHouseholdSpendingURL = "http://localhost:3000/api/v1/household_spendings"
const spendingDataURL = "http://localhost:3000/api/v1/spending_data"

const handleResponse = resp => {
    if (resp.ok)
        return resp.json()
    else
        return Promise.reject(resp.json())
}

// -----users-----

export const getUsers = () => {
    return fetch(`${usersURL}`).then(handleResponse);
}

export const fetchUser = userName => {
    return fetch(`${usersURL}/${userName}`).then(handleResponse);
};

export const postUsers = object => {
    return fetch(usersURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user: object })
    }).then(handleResponse);
}


export const validate = () => {
    return fetch(`${currentUser}`, {
        headers: {
            'Authorization': localStorage.getItem('token')
        },
    }).then(handleResponse)
}


export const signInUsers = object => {
    return fetch(signInURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user: object })
    }).then(handleResponse);
}

export const patchUser = object => {
    console.log(object.id)
    return fetch(`${usersURL}/${object.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user: object })
    }).then(handleResponse);
};

// -----Sending Data-----

export const postSpendingData = object => {
    return fetch(spendingDataURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ spending_data: object })
    }).then(handleResponse);
}

// -----Age-----

export const getAgeGroups = () => {
    return fetch(`${ageURL}`).then(handleResponse);
}

// -----City-----

export const getCityGroups = () => {
    return fetch(`${cityURL}`).then(handleResponse);
}

// -----Children-----

export const getChildrenData = () => {
    return fetch(`${childrenURL}`).then(handleResponse);
}

// -----National Average-----

export const getNationalAverage = () => {
    return fetch(`${nationalAverageURL}`).then(handleResponse);
}


// -----User Average-----

export const getUserAverage = () => {
    return fetch(`${averageURL}`).then(handleResponse);
}

// -----Household spending by country-----
export const getAllCountriesrtyHouseholdSpending = () => {
    return fetch(`${countryHouseholdSpendingURL}`).then(handleResponse);
};

// -----Api-----

let url = 'https://newsapi.org/v2/everything?' +
    "sources=buzzfeed&" +
    'q=save+money&' +
    // 'from=2018-06-28&' +
    'sortBy=popularity&' +
    '';

let req = new Request(url);

export const api = () => {
    return fetch(req)
        .then(resp => resp.json())
}

