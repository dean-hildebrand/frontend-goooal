const API_URL = "http://localhost:3000"

// SECURITY FOLLOW-UP
// The bearer token is stored in localStorage, which is 
// not good. use devise-api to configure and read the token from a cookie

export const saveAuthToken = (token, refreshToken) => {
  localStorage.setItem("token", token)
  localStorage.setItem("refreshToken", refreshToken)
}

export const getAuthToken = () => localStorage.getItem("token")

export const clearAuth = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("refreshToken")
}

export const isAuthenticated = () => !!getAuthToken()
// Returns the raw Response so callers can decide how to read the body.
export async function authFetch(path, options = {}) {
  const token = getAuthToken()
  return fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  })
}

// Returns null when the token is missing, invalid, or expired.
export async function fetchCurrentUser() {
  const res = await authFetch("/users/tokens/info")
  if (!res.ok) return null
  return res.json()
}

export async function postAuth(path, body) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  })
  const data = await res.json()
  if (!res.ok) {
    throw new Error(
      data.error || data.errors?.full_messages?.join(", ") || "Request failed",
    )
  }
  return data
}