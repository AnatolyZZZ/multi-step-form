import { useSelector } from "react-redux"
import steps from '../form-data.json';



export const Confirmation = (props) => {
    const step = useSelector(state => state.current_step)
    const nextStep = step === steps.length ? "Confirm" : "Next Step";
    const prevStep = step === 0 ? '' : "Go Back"
    return <div className="container confirmation">
        <button className="backBtn">{prevStep}</button>
        <button className="forwardBtn">{nextStep}</button>
    </div>
}