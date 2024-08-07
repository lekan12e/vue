export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const logInAction = (id) => {
    return {
        type: LOG_IN,
        payload: id
    }
}