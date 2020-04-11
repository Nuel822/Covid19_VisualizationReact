import { ACTION_TYPES } from "../action/totalstats.action"

const initialState = {
    totalFigure : []
}

export const TotalStats = (state = initialState, action) => {

        switch (action.type) {
            case ACTION_TYPES.FETCH:
                return{
                    ...state,
                    totalFigure: action.payload
                }
            default:
                return state;
        }
}