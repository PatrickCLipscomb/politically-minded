import fetch from 'isomorphic-fetch';

const BTC_API_ROOT = 'http://54.213.83.132/hackoregon/http/';


// you can put export infront of const if the constant contains a function
// response.ok means that it was a response in the range 200-299

export const promiseToFetch = (url) => fetch(url)
  .then(response => response.json())
  .then(json => ({json, response}))
  .then(({json, response}) => {
    if (!response.ok) {
      return Promise.reject(json)
    }
    return json;
});

export const fetchCampaignById = filerId => {
  const url = `${BTC_API_ROOT}comittee_data_by_id/${filerId}/`;
  return promiseToFetch(url);
};

export const fetchTransactionsById = filerId => {
  const url = `${BTC_API_ROOT}current_candidate_transactions_in/${filerId}/`
  return promiseToFetch(url);
}

export const fetchSpendingById = (filerId) => {
  const url = `${BTC_API_ROOT}current_candidate_transactions_out/${filerId}/`
  return promiseToFetch(url);
}
