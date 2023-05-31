import steps from '../form-data.json';
import { useSelector } from 'react-redux';
import { Confirmation } from './Confirmation';
import { FreeForm } from './FreeForm';
import { Options } from './Options';
import './Step.css'

export const Step = (props) => {
const step_id = useSelector(state => state.current_step);
const yearly = useSelector(state => state.yearly);

// variables to use in labels 

const cur = steps.steps[step_id];
const type = cur.type;



let mainBlock;
switch (type) {
    case 'freeform' : 
        mainBlock = <FreeForm questions ={cur.questions}/>
    break;
    case 'options' :
        mainBlock = <Options options = {cur.options} header = {cur.header}/>
        // mainBlock = <>
        //     <div className='options'>
        //         {cur.options[yearly].map((elt, idx) => {
        //         return <label htmlFor={yearly + elt.name} key={idx} className='option'>
        //                     <div key={idx} className='flex-small-screen'>
        //                         <img src={elt.image} alt='plan' className='planImg'/>
        //                         <div>
        //                             <p className='planName'>{elt.name}</p>
        //                             <p className='planPrice'>{elt.price}</p>
        //                         </div>
        //                         <input 
        //                             className='hiddenInput'
        //                             type='radio' 
        //                             value={yearly + elt.name}
        //                             name={cur.header} id={yearly + elt.name} onChange={(e) => {dispatch(setPlan(idx))}}
        //                         />
        //                     </div>
        //                 </label>
        //         })}
        //         </div>
        //     <div className='horizontalRadio'>
        //         <label htmlFor='monthly' className={monthlyClass}>Monthly</label>
        //         <div className='custom-radio'>
        //             <input type='radio' value='monthly' name='yearly' id='monthly' onChange={(e) => {dispatch(setPayment('monthly'))}}/>
        //             <input type='radio' value='yearly' name='yearly' id='yearly' onChange={(e) => {dispatch(setPayment('yearly'))}}/>
        //         </div>
        //         <label htmlFor='yearly' className={yearlyClass}>Yearly</label>
        //     </div>  
        //     </>
        
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