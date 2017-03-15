import fetch from 'isomorphic-fetch';

const BTC_API_ROOT = 'http://54.213.83.132/hackoregon/http/';


// you can put export infront of const if the constant contains a function? - lookup!

import { fetchCampaignById, fetchTransactionsById, fetchSpendingById } from './btcApi';

// exports all the functions in the btcApi object
export const btcApi = {
    fetchCampaignById,
    fetchTransactionsById,
    fetchSpendingById
}
