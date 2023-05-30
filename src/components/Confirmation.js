import { useSelector, useDispatch } from "react-redux"
import steps from '../form-data.json';
import './Confirmation.css'
import {changeUnValid, setStep} from  '../actions';


export const Confirmation = (props) => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const step = state.current_step;


    const checkEmpty = async (name) => {
        if (state[name] === "") {
            dispatch(changeUnValid(name));
            return false
        } else return true
    }

    const checkEmail = async () => {
        const reg = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (!state['email'].match(reg)) {
            dispatch(changeUnValid('email'));
            return false
        } else return true
    }

    const firstCheck  = async () => {
        let go = await checkEmpty('name');
        go = go & await checkEmail();
        go = go & await checkEmpty('phone');
        console.log(go);
        if (go) {
            return true
        } else return false
    }

    const goNext = async () => {
        let go = false;
        switch (step) {
            case 0 :
                go = await firstCheck();
                if (go) {
                    dispatch(setStep(step + 1));
                }
                break;
            default :
                go = false;
        }

    }

    const nextStep = step === steps.length - 1 ? "Confirm" : "Next Step";
    return <div className="flex-between confirmation">
        {(step === 0) ? <div></div> : <button className="backBtn">Go Back</button>}
        <button className="forwardBtn" onClick={(e) => {goNext()}}>{nextStep}</button>
    </div>
}