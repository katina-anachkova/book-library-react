import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export function getAll() {
    return api.get(`/books?sortBy=_createdOn%20desc`)
        .then(res => res.json())
}

export function getOne(id) {
    return api.get(`/books/` + id)
        .then(res => res.json())
}

export function getMyBooks(userId) {
    return api.get(`/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
        .then(res => res.json())
}

export function createBook(book) {
    return api.post('/data/books', book)
        .then(res => res.json())
}

export function editBook(id, book) {
    return api.put('/data/books/' + id, book)
        .then(res => res.json())
}

export function deleteBook(id) {
    return api.del('/data/books/' + id)
}

//like a book
export function likeBook(bookId) {
    return api.post('/data/likes', {
        bookId
    });
}

//like count
export function getLikesByBookId(bookId) {
    return api.get(`/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`)
}

//if current user liked
export function getMyLikeByBookId(bookId, userId) {
    return api.get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

export function searchBooks(query) {
    return api.get('/data/books?where=' + encodeURIComponent(`title LIKE "${query}"`));
}

