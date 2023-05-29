import steps from '../form-data.json';
import { useSelector } from 'react-redux';
import { Confirmation } from './Confirmation';

export const Step = (props) => {
const step_id = useSelector(state => state.current_step);
const cur_state = useSelector(state => state);
const yearly = useSelector(state => state.yearly);
const cur = steps.steps[step_id];
const type = cur.type;

let mainBlock;
switch (type) {
    case 'freeform' : 
        mainBlock = cur.questions.map((elt, idx) => {
            return <input key={idx} placeholder={elt.placeholder} value={cur_state[elt.var]}/>
        })
    break;
    case 'options' :
        mainBlock = <div>
            {cur.options[yearly].map((elt, idx) => {
            return <label htmlFor={yearly + elt.name} key={idx}>
                        <div className='option' key={idx}>
                            <img src={elt.image} alt='plan' className='planImg'/>
                            <p className='planName'>{elt.name}</p>
                            <p className='planPrice'>{elt.price}</p>
                            <input className='hiddenInput' type='radio' value={yearly + elt.name} name={cur.header}/>
                        </div>
                    </label>
            })}
            <div className='horizontalRadio'>
                <label htmlFor='monthly'>Monthly</label>
                <input type='radio' value='monthly' name='yearly' id='monthly'/>
                <input type='radio' value='yearly' name='yearly' id='yearly'/>
                <label htmlFor='yearly'>Yearly</label>
            </div>  
        </div>
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
        <h2 className='step-header'>{cur.header}</h2>
        <h3 className='step-subheader'>{cur.subheader}</h3>
        {mainBlock}
        <Confirmation/>
    </div>
}