const AppReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
        case "ADD_DATA":
            return { transcations: [action.payload, ...state.transcations] }
        case "DEL_TRANS":
            return {
                transcations: state.transcations.filter(transcation => transcation.id !== action.payload),
                ...state.transcations
            }

    }
}
export default AppReducer