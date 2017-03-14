// seems like when the only file is index.js you dont need to specify it when naming the path
// read up on https://github.com/reactjs/reselect
import { fetchCampaignById } from '../../api';

const INIT_APP                    = 'INIT_APP';
const FETCH_CAMPAIGN_DATA         = 'FETCH_CAMPAIGN_DATA'
const FETCH_CAMPAIGN_DATA_SUCCESS = 'FETCH_CAMPAIGN_DATA_SUCCESS'
const FETCH_CAMPAIGN_DATA_FAILURE = 'FETCH_CAMPAIGN_DATA_FAILURE'

export const INITIAL_STATE = { data: null, isFetching: false };

// able to export these constants because they are functions
export const initializeApp = () => ({ type: INIT_APP });
export const getCampaignData = payload => ({ type: FETCH_CAMPAIGN_DATA, payload });
export const getCampaignDataSuccess = payload => ({ type: FETCH_CAMPAIGN_DATA_SUCCESS, payload });
export const getCampaignDataFailure = error => ({ type: FETCH_CAMPAIGN_DATA_FAILURE, error });

export const getCampaignDataThunk = (id) => dispatch => {
    dispatch(getCampaignData(id));
    return fetchCampaignById(id).then(
      data => dispatch(getCampaignDataSuccess(data)),
      err => dispatch(getCampaignDataFailure(err)),
      );
}

export const getLegislatorsByStateThunk = usState => dispatch => {
    dispatch(getLegislators(usState));
    return whofundsmeApi.fetchLegislatorsByState(usState).then(data => {
      console.log(data);
    });
}

// A break will allow you continue processing in the function. Just returning out of the switch is fine if that's all you want to do in the function.
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INIT_APP:
            return {
                ...state,
                appInitialized: true
            };
        case FETCH_CAMPAIGN_DATA:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_CAMPAIGN_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            }
        case FETCH_CAMPAIGN_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        default:
            return state;
    }
};

export default reducer;
