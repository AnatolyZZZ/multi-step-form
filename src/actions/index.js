const SET_FIELD = 'SET_FIELD', SET_PAYMENT = "SET_PAYMENT", SET_PLAN = 'SET_PLAN', ADD_OPTION = "ADD_OPTION", REMOVE_OPTION = 'REMOVE_OPTION', SET_STEP = 'SET_STEP', CHANGE_VALID = 'CHANGE_VALID'

export {SET_FIELD, SET_PAYMENT, SET_PLAN, ADD_OPTION, REMOVE_OPTION, SET_STEP, CHANGE_VALID}

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

export const addOption = (id) => {
    return {
        type : ADD_OPTION,
        payload : id
    }
}

export const removeOption = (id) => {
    return {
        type : REMOVE_OPTION,
        payload : id
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
        field: name
    }
}