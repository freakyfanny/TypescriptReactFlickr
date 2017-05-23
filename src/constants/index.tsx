//Declaration of getRecent action type
export type GET_RECENT_TYPE = 'GET_RECENT';
export const GET_RECENT : GET_RECENT_TYPE = 'GET_RECENT';
export type GetRecentAction = {
    type: GET_RECENT_TYPE,
    payload: any
};

//Declaration of otherAction Types
export type OTHER_ACTION_TYPE = 'OTHER_ACTION';
export const OTHER_ACTION : OTHER_ACTION_TYPE = 'OTHER_ACTION' ;
export type OtherAction = {
    type: OTHER_ACTION_TYPE,
    payload: any
};
