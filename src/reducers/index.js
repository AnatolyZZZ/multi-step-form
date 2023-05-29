import  {SET_FIELD, SET_PAYMENT, SET_PLAN, ADD_OPTION, REMOVE_OPTION, SET_STEP, CHANGE_VALID} from '../actions/index.js'

const initialState  = {
    name : '',
    email : '',
    phone : '',
    valid : {name : true, email : true, phone : true},
    current_step : 1,
    yearly : 'monthly',
    plan : {},
    add_ons : []
}

export const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_FIELD : 
            const res = {...state};
            res[action.field] = action.payload;
            return res
        case SET_PAYMENT :
            return {...state, yearly : action.payload}
        case SET_PLAN :
            return {...state, plan : action.payload}
        case ADD_OPTION :
            const new_add_ons = [...state.add_ons].push(action.payload)
            return {...state, add_ons : new_add_ons}
        case REMOVE_OPTION :
            const new_add_ons2 = [...state.add_ons];
            const indx = new_add_ons2.indexOf(action.payload);
            new_add_ons2.splice(indx, 1);
            return {...state, add_ons : new_add_ons2}
        case SET_STEP :
            return {...state, current_step : action.payload};
        case CHANGE_VALID : 
            const validation = {...state.valid};
            validation[action.field] = !validation[action.field]
            return {...state, valid : validation}
        default : 
            return {...state}
    }
}