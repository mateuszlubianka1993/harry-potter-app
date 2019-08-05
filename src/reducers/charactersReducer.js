export default (state=[], action) => {
    switch(action.type) {
        case 'GET_CHARACTERS':
            return action.payload;
        default:
            return state;
    };
};
