import { submitIt } from "../utils/api-request"

const form = (state= null, action) => {
    switch (action.type) {
        case "SUBMIT":
            console.log(action.payload);
            submitIt(action.payload)
            .then(response => {
                alert("success");
                return "success";
            })
            .catch(error =>{
                alert(error);
                action.asyncDispatch({ type: "SUBMIT_FAIL", payload: error });
            });
            break;    
        default:
            return state
    }
};

export default form;