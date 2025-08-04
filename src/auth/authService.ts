const API_URL = import.meta.env.VITE_API_BASE_URL

export const login = () => {
    // Use direct navigation instead of fetch to avoid CORS issues
    // Your backend will handle the redirect to Google OAuth
    window.location.href = `${API_URL}/auth/google/`
}

export const logout = () => {
    window.location.href = `${API_URL}/auth/logout/`
}

export const getUser = async () => {
    const response = await fetch(`${API_URL}/auth/me/`, {
        method: 'GET',
        // TODO: Check how to add it to every request
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    console.log(response)

    return response.json()
}