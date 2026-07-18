export async function login(username, password) {

    const response = await fetch(
        "http://localhost:8080/realms/winter-olympics-application-realm/protocol/openid-connect/token",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                client_id: "winter-olympics-application",
                username: username,
                password: password,
                grant_type: "password"
            })
        }
    );


    const data = await response.json();


    if (!response.ok) {
        console.log(data);
        throw new Error(data.error_description);
    }


    return data;
}