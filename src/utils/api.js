import axios from 'axios'


const apiKey = 'key8gkuMln6rGTgpG'

/**
 * Decorates the headers for a request.
 * @param {string} token The jwt token.
 * @return {!Object} The decorated headers object.
 */
export const decorateHeaders = token => ({
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
});



export const makeRequest = ({ url, method = 'GET', payload = null }) => {


    const dataPayload = payload ? { data: payload } : {};

    return axios({
        url,
        method,
        headers: decorateHeaders(apiKey),
        ...dataPayload
    })
        .then((res) => {
            if (res && (res.status >= 200 || res.status < 400)) {
                return res;
            }
            throw new Error("API: BAD REQUEST");
        })
};