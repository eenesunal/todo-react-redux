const API = "http://localhost:3001/"


// export const getTodosRequest = () => {

// }

export const GET = (request) => {
    return new Promise((resolve, reject) => {
        request.method = "GET"
        doRequest(request).then((response) => {
            console.log('----------------response:', response, '-------------')
            response.json().then(resolve).catch(reject)
        }).catch(reject)
    })
}

export const PATCH = (request) => {
    return new Promise((resolve, reject) => {
        request.method = "PATCH"
        doRequest(request).then((response) => {
            response.json().then(resolve).catch(reject)
        }).catch(reject)
    })
}

export const POST = (request) => {
    return new Promise((resolve, reject) => {
        request.method = "POST"
        doRequest(request).then((response) => {
            response.json().then(resolve).catch(reject)
        }).catch(reject)
    })
}

export const DELETE = (request) => {
    return new Promise((resolve, reject) => {
        request.method = "DELETE"
        doRequest(request).then((response) => {
            response.json().then(resolve).catch(reject)
        }).catch(reject)
    })
}

export const doRequest = (request) => {
    if (!request.headers) {
        request.headers = {}
    }

    if (request.method === "PATCH" || request.method === "POST") {
        request.headers["Content-Type"] = "application/json"
    }

    if (request.method === "DELETE") {
        request.headers["Content-Type"] = "application/javascript"
    }

    return new Promise((resolve, reject) => {
        if (request) {
            let query = request.q ? 'q=' + request.q : null

            let params = query ? `${query}&type=${request.type}` : null

            const url = params ? `${API + request.path}?${params}` : `${API + request.path}`

            fetch(new Request(url, request)).then((response) => {
                response.traceId = response.headers.get("x-trace-id")
                if (response.status < 400) {
                    console.log('-----', response)
                    return resolve(response)
                }
                return reject(response)
            }).catch((response) => {
                if (response.headers) {
                    response.traceId = response.headers.get("x-trace-id")
                }
                return reject(response)
            })
        }
    })
}