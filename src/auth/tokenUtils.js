export function getUserFromToken() {
    const token = localStorage.getItem("access_token");

    if (!token) {
        return null;
    }

    try {
        const payload = JSON.parse(
            atob(
                token.split(".")[1]
                    .replace(/-/g, "+")
                    .replace(/_/g, "/")
            )
        );

        return {
            username: payload.preferred_username,
            email: payload.email,
            roles: payload.realm_access?.roles || []
        };

    } catch (error) {
        return null;
    }
}

export function isTokenExpired() {

    const token = localStorage.getItem("access_token");

    if (!token) {
        return true;
    }

    try {
        const payload = JSON.parse(
            decodeURIComponent(
                atob(
                    token.split(".")[1]
                        .replace(/-/g, "+")
                        .replace(/_/g, "/")
                        .padEnd(token.split(".")[1].length + (4 - token.split(".")[1].length % 4) % 4, "=")
                )
                .split("")
                .map(c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
                .join("")
            )
        );

        return Date.now() >= payload.exp * 1000;

    } catch (error) {
        console.error("JWT decode failed:", error);
        return true;
    }
}