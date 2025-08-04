export const addToFavorites = async (bookId: string) => {
    const response = await fetch(`http://localhost:8080/likes`, {
        method: 'POST',
        body: JSON.stringify({ bookId }),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    return response.json();
}

export const deleteFromFavorites = async (bookId: string) => {
    const response = await fetch(`http://localhost:8080/likes/${bookId}`, {
        method: 'DELETE',
        credentials: 'include',
    });
    return response.json();
}