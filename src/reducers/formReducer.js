import { submitIt } from "../utils/api-request"

const form = (state= {check:null,submit:null}, action) => {
    switch (action.type) {
        case "SUBMIT":
            submitIt(action.payload)
            .then(response => {
                alert("success");
                return {
                    ...state,
                    submit :"success"
                };
            })
            .catch(error =>{
                alert(error);
                action.asyncDispatch({ type: "SUBMIT_FAIL", payload: error });
            });
            break;  
        case"CHECK_SUCCESS":
            return {
                ...state,
                check :"success"
            };
        default:
            return state
    }
};

export default form;