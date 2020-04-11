import api from "./api"


export const ACTION_TYPES = {
    FETCHDVDATA: "FECTHDVDATA",
    GET :"GET"
}

export const fetch = () => dispatch => {
    api.CountryStats().get()
  .then(response => {
      dispatch ({
          type: ACTION_TYPES.GET,
          payload: response.data
      })
  })
  .catch(err => console.log(err))
}

export const fetchDvData = () => dispatch => {
      api.CountryStats().fetch()
    .then(response => {
        dispatch ({
            type: ACTION_TYPES.FETCHDVDATA,
            payload: response.data
        })
    })
    .catch(err => console.log(err))
}