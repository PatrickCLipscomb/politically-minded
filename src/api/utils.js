import fetch from 'isomorphic-fetch';

// response.ok means that it was a response in the range 200-299

export const promiseToFetch = (url) => fetch(url).then(response => {
    return response.json().then(json => {
        if (!response.ok) {
            return Promise.reject(json)
        }
        return json;
    });
});

// the above function can also be written as

// export const promiseToFetch = (url) => fetch(url)
//   .then(response => response.json())
//   .then(json => ({json, response}))
//   .then(({json, response}) => {
//     if (!response.ok) {
//       return Promise.reject(json)
//     }
//     return json;
// });
