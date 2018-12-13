

const usersURL = "http://localhost:3000/api/v1/users"


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
        body: JSON.stringify(object)
    }).then(resp => resp.json());
}

export const patchUser = object => {
    console.log(object.id)
    return fetch(`${usersURL}/${object.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
    }).then(resp => resp.json());
};