const a = (state =[], action) => {
    switch (action.type) {
        case "ADD_A":
            return state= [
                ...state,
                action.payload
            ]
        default:
            return state
    }
};
export default a;