const HOST = "http://localhost:8080/";

export const api = <T>(path: string) => {
    return fetch(HOST + path)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json() as Promise<T>
        })
};

