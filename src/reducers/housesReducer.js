export default (state=[], action) => {
    switch(action.type) {
        case 'GET_HOUSES':
            return action.payload;
        default:
            return state;
    }
};