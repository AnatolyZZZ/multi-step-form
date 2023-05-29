import { useSelector } from "react-redux";

export const ErrorMsg = (props) => {
    const cur_state = useSelector(state => state.valid[props.var]);
    let msg;
    switch (props.var) {
        case 'email' :
            msg = 'Email is invalid'
            break;
        default :
            msg = 'This field is required'
    }
    let classes = !cur_state ? 'error label' : 'invisible label';
    return <p className={classes}>{msg}</p>
}