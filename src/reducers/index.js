import  {SET_FIELD, SET_PAYMENT, SET_PLAN, SET_STEP, CHANGE_VALID, CHANGE_UNVALID, TOGGLE_SELECTED} from '../actions/index.js'

const initialState  = {
    fields : {name : '', email : '', phone : ''},
    valid : {name : true, email : true, phone : true, plan : true},
    current_step : 1,
    yearly : 'monthly',
    plan : null,
    multichoice : {add_ons : new Set()},
}

export const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_FIELD : 
            const res = {...state.fields};
            res[action.field] = action.payload;
            return {...state, fields : res}
        case SET_PAYMENT :
            return {...state, yearly : action.payload}
        case SET_PLAN :
            return {...state, plan : action.payload}
        case SET_STEP :
            return {...state, current_step : action.payload};
        case CHANGE_VALID : 
            const validation = {...state.valid};
            validation[action.payload] = true
            return {...state, valid : validation}
        case CHANGE_UNVALID : 
            const _validation = {...state.valid};
            _validation[action.payload] = false;
            return {...state, valid : _validation};
        case TOGGLE_SELECTED :
            const multi = {...state.multichoice}
            const _set = multi[action.name];
            if (_set.has(action.payload)) {
                _set.delete(action.payload);
            } else _set.add(action.payload);
            return {...state, multichoice : multi}
        default : 
            return {...state}
    }
}