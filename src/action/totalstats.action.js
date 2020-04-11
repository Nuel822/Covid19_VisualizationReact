import api from "./api"

export const ACTION_TYPES ={
    FETCH : "FETCH"
}

export const fetch = () => dispatch => {
      api.TotalStats().get()
    .then( response => {
        dispatch({
            type: ACTION_TYPES.FETCH,
            payload: response.data
        })
    })
    .catch(err => console.log(err))
}
