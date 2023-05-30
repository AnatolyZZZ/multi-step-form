import steps from '../form-data.json';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Confirmation } from './Confirmation';
import { ErrorMsg } from './ErrorMsg';
import { setField, changeValid, setPlan, setPayment } from '../actions';
import './Step.css'

export const Step = (props) => {
const step_id = useSelector(state => state.current_step);
const cur_state = useSelector(state => state);
const yearly = useSelector(state => state.yearly);
// variables to use in labels 
let monthlyClass = yearly === 'monthly' ? 'selected' : 'unselected';
let yearlyClass = yearly === 'yearly' ? 'selected' : 'unselected';
const cur = steps.steps[step_id];
const type = cur.type;
const dispatch = useDispatch();
const ckeckRadio = (name) => {
    if (type==='options') {
        const r = document.querySelector(`#${name}`);
        r.checked = true
    } 
}
useEffect(()=> ckeckRadio(yearly), [yearly, step_id]);
// cur.options is current step options
// [yearly] to get array of options 
// cur.state.plan number of needed option
// .name to extract name
useEffect(()=> {
    if(cur_state.plan !== null & step_id === 1) {
        ckeckRadio(yearly+cur.options[yearly][cur_state.plan].name)
    }
}
, [cur_state.plan, step_id]
);


let mainBlock;
switch (type) {
    case 'freeform' : 
        mainBlock = cur.questions.map((elt, idx) => {
            const classes = cur_state.valid[elt.var] ? 'text-input' : 'text-input wrong-field'
            return <div key={idx}>
                <div className='flex-between'>
                    <p className='label'>{elt.name}</p>
                    <ErrorMsg var={elt.var}/>
                </div>
                <input key={idx} placeholder={elt.placeholder} value={cur_state[elt.var]} onChange={(e) => {
                    dispatch(setField(elt.var, e.target.value));
                    dispatch(changeValid(elt.var));
                    }} 
                    type='text' className={classes}/>
            </div>
        })
    break;
    case 'options' :
        mainBlock = <>
            <div className='options'>
                {cur.options[yearly].map((elt, idx) => {
                return <label htmlFor={yearly + elt.name} key={idx} className='option'>
                            <div key={idx} className='flex-small-screen'>
                                <img src={elt.image} alt='plan' className='planImg'/>
                                <div>
                                    <p className='planName'>{elt.name}</p>
                                    <p className='planPrice'>{elt.price}</p>
                                </div>
                                <input 
                                    className='hiddenInput'
                                    type='radio' 
                                    value={yearly + elt.name}
                                    name={cur.header} id={yearly + elt.name} onChange={(e) => {dispatch(setPlan(idx))}}
                                />
                            </div>
                        </label>
                })}
                </div>
            <div className='horizontalRadio'>
                <label htmlFor='monthly' className={monthlyClass}>Monthly</label>
                <div className='custom-radio'>
                    <input type='radio' value='monthly' name='yearly' id='monthly' onChange={(e) => {dispatch(setPayment('monthly'))}}/>
                    <input type='radio' value='yearly' name='yearly' id='yearly' onChange={(e) => {dispatch(setPayment('yearly'))}}/>
                </div>
                <label htmlFor='yearly' className={yearlyClass}>Yearly</label>
            </div>  
            </>
        
    break;
    case 'multichoice' :
        mainBlock = cur.options.map((elt, idx) => {
            return <label for={yearly + elt.name} key={idx}>
                        <div className='option' >
                            <img src={elt.image} alt='plan' className='planImg'/>
                            <p className='planName'>{elt.name}</p>
                            <p className='planPrice'>{elt.price}</p>
                            <input className='hiddenInput' type='checkbox' name={yearly + elt.name}/>
                        </div>
                    </label>
        })
        break;
    default :
        mainBlock = <></>

}



    return <div className='Step'>
            <div className='step-content'>
                <div className='container mooved'>
                    <h2 className='step-header'>{cur.header}</h2>
                    <h3 className='step-subheader'>{cur.subheader}</h3>
                    {mainBlock}
                </div> 
            </div>
            <div className='container'>
                <Confirmation/>
            </div>
            
        </div>
}