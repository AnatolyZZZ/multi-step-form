import steps from '../form-data.json';

export const Menu = (props) => {
    return <div className='menu'>
        {steps.steps.map((elt, idx) => {
            return <div className='menu-item' key={idx}>
                        <div className='menu-number'>
                            {idx + 1}
                        </div>
                        <div className='desktop-only'>
                            <h4>Step{idx + 1}</h4>
                            <h3>{elt.short}</h3>
                        </div>
                    </div>}
                )
        }
        <div className='menu-item'>
            <div className='menu-number'>
                {steps.length}
            </div>
            <div className='desktop-only'>
                <h4>Step{steps.length}</h4>
                <h3>Summary</h3>
            </div>
        </div>        
    </div>
}