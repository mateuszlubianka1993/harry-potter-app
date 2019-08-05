export default (state=[], action) => {
    switch(action.type) {
        case 'GET_SPELLS':
            return action.payload;
        default:
            return state;
    };
};