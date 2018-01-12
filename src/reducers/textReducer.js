import { checkIt } from "../utils/api-request"

const text = (state= null, action) => {
    switch (action.type) {
        case "SET_TEXT" :
            return action.payload;
        case "CHECK_TEXT":
            console.log('CHECK_TEXT')
            checkIt(state)
            .then(response => {
                action.asyncDispatch({ type: "CHECK_SUCCESS", payload: response });
            })
            .catch(error =>{
                action.asyncDispatch({ type: "CHECK_FAIL", payload: error });
            });
            return state;
        default:
            return state
    }
};

export default text;