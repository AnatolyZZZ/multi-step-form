const SET_FIELD = 'SET_FIELD', SET_PAYMENT = "SET_PAYMENT", SET_PLAN = 'SET_PLAN', SET_STEP = 'SET_STEP', CHANGE_VALID = 'CHANGE_VALID', CHANGE_UNVALID = 'CHANGE_UNVALID', TOGGLE_SELECTED='TOGGLE_SELECTED'

export {SET_FIELD, SET_PAYMENT, SET_PLAN, SET_STEP, CHANGE_VALID, CHANGE_UNVALID, TOGGLE_SELECTED}

export const setField = (name, str) => {
    return {
        type : SET_FIELD,
        field : name,
        payload : str
    }
}

export const setPayment = (yearly) => {
    return {
        type: SET_PAYMENT,
        payload : yearly
    }
}

export const setPlan = (plan) => {
    return {
        type : SET_PLAN,
        payload : plan
    }
}

export const setStep = (id) => {
    return {
        type : SET_STEP,
        payload : id
    }
}

export const changeValid = (name) => {
    return {
        type : CHANGE_VALID,
        payload: name
    }
}

export const changeUnValid = (name) => {
    return {
        type : CHANGE_UNVALID,
        payload : name
    }
}

export const toggleSelected = (name, id) => {
    return {
        type : TOGGLE_SELECTED,
        payload : id,
        name : name
    }
}