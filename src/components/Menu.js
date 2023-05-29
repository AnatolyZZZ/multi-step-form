import steps from '../form-data.json';
import './Menu.css'
import { useSelector } from 'react-redux';

export const Menu = (props) => {
    const cur_step = useSelector(state => state.current_step);
    const steps_with_summary = steps.steps 
    return <div className='menu'>
        {steps_with_summary.map((elt, idx) => {
            const classes = (idx === cur_step) ?  'menu-number number-selected' : 'menu-number'
            return <div className='menu-item' key={idx}>
                        <div>
                        <div className={classes}>
                            {idx + 1}
                        </div>
                        </div>
                        <div className='desktop-only menu-item-info'>
                            <h4>Step{idx + 1}</h4>
                            <h3>{elt.short}</h3>
                        </div>
                    </div>}
                )
        }       
    </div>
}