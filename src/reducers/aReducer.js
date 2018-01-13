const a = (state =[], action) => {
    switch (action.type) {
        case "ADD_A":
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
};
export default a;