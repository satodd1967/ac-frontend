const baseUrl = "http://localhost:3001/api"

export const apiGet = (url) => {
    return fetch(`${baseUrl}/${url}`, {
        credentials: "include",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then(resp => resp.json())
}

export const apiPost = (url, object) => {
    return fetch(`${baseUrl}/${url}`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
      })
        .then(resp => resp.json())
}