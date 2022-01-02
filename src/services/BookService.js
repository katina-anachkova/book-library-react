let baseUrl = 'http://localhost:3030/data'

export function getAll() {
    return fetch(`${baseUrl}/books?sortBy=_createdOn%20desc`)
        .then(res => res.json())
}

export function getOne(id){
    return fetch(`${baseUrl}/books/` + id)
        .then(res => res.json())
}