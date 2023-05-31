import { useSelector, useDispatch} from "react-redux";
import { toggleSelected } from "../actions";


export const MultiChoice = (props) => {
    const dispatch = useDispatch();
    const yearly = useSelector(state => state.yearly);
    return <div className="add-ons">
        {props.options.map((elt, idx) => {
            return <label htmlFor={yearly + elt.name} key={idx} className='flex allign-center option'>
                        <div><input 
                                className='customCheckbox'
                                type='checkbox'
                                name={yearly + elt.name}
                                id={yearly + elt.name}
                                onChange={(e) => dispatch(toggleSelected(props.var, idx))}
                        /></div>
                        <div className="flex-between wide allign-center">
                            <div>
                                <p className='planName'>{elt.name}</p>
                                <p className="feature">{elt.feature}</p>
                            </div>
                                
                            <p className='add-on-price'>{elt.price}</p>
                        </div>
                    </label>
        })}
    </div> 
}