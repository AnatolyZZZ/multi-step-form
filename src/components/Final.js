import './Final.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { setLoading } from '../actions';

export const Final = (props) => {
    const dispatch =  useDispatch();
    const loading = useSelector(state => state.loading);
    const cur_state = useSelector(state => state);
    // console.log(cur_state)
    // const fields = useSelector(state => state.fields);
    // const options = useSelector(state => state.options);
    useEffect(() => {
        const para = {
            method : 'POST',
            headers :{"Content-Type" : "application/json"},
            body : JSON.stringify(cur_state)
        }
        const saveData = async () => {
            dispatch(setLoading(true));
            const res = await fetch('http://localhost:5000/api/answers', para);
            console.log(res);
            const r = await res.json()
            console.log(r.msg)
            if (res.ok) {
                dispatch(setLoading(false))
            }
            console.log(loading)
        }
   
        saveData(); 
      }, []);
    return <div className='step'>
        <div className='step-content'>
            <div className='container mooved centered'>
                {loading ? <iframe src="https://giphy.com/embed/sSgvbe1m3n93G" width="180" height="180" frameBorder="0" className="giphy-embed" allowFullScreen alt='loading'> </iframe> : <img src='./images/icon-thank-you.svg' alt='thankyou'/>}
                
                <h2 className='step-header'>Thank you!</h2>
                <p className="feature final">Thanks for confirming yout subscription! We hope you have fun using our platform. If you ever need support please feel free to mail us at support@loremgaming.com.</p>
             </div>
        </div>
    </div>
}