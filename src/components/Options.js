import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {setPlan, setPayment, changeValid } from '../actions';
import { ErrorMsg } from "./ErrorMsg";

export const Options = (props) => {
    const yearly = useSelector(state => state.yearly);
    let monthlyClass = yearly === 'monthly' ? 'selected' : 'unselected';
    let yearlyClass = yearly === 'yearly' ? 'selected' : 'unselected';
    const plan = useSelector (state => state.plan);
    const dispatch = useDispatch();

    const ckeckRadio = (name) => {      
            const r = document.querySelector(`#${name}`);
            r.checked = true
            
    }
    useEffect(()=> ckeckRadio(yearly), [yearly]);
    
    // the name of radio =>
    // props.options[yearly] to get array of options 
    // props.options[yearly][plan] number of needed option
    // .name to extract name
    // yearly+name used in rendering as id
    useEffect(()=> {
        if(plan !== null ) {
            ckeckRadio(yearly+props.options[yearly][plan].name)
        }
    }
    , [plan]
    );
    
    return <>
            <div className='options'>
                {props.options[yearly].map((elt, idx) => {
                return <label htmlFor={yearly + elt.name} key={idx} className='option option-flex'>
                            <div className='flex-small-screen'>
                                <img src={elt.image} alt='plan' className='planImg'/>
                                <div>
                                    <p className='planName'>{elt.name}</p>
                                    <p className='planPrice'>{elt.price}</p>
                                </div>
                                <input 
                                    className='hiddenInput'
                                    type='radio' 
                                    value={yearly + elt.name}
                                    name={props.header} id={yearly + elt.name} onChange={(e) => {dispatch(setPlan(idx)); dispatch(changeValid('plan'))}}
                                />
                            </div>
                        </label>
                })}
            </div>

            <div className="flex-between">
                <div></div>
                <ErrorMsg var='plan'/>
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
}