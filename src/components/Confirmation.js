import { useSelector } from "react-redux"
import steps from '../form-data.json';
import './Confirmation.css'



export const Confirmation = (props) => {
    const step = useSelector(state => state.current_step)
    const nextStep = step === steps.length - 1 ? "Confirm" : "Next Step";
    return <div className="confirmation">
        {(step === 0) ? <div></div> : <button className="backBtn">Go Back</button>}
        <button className="forwardBtn">{nextStep}</button>
    </div>
}