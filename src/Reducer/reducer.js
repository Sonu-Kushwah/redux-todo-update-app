const initialstate = {
    User_data: []
}
export const todoreducer = (state = initialstate, action) => {
    switch (action.type) {
        case "ADD_DATA":
            return {
                ...state,
                User_data: [...state.User_data, action.payload]
            }
        case "RMV_DATA":
            const delData = state.User_data.filter((elm, i) => i !== action.payload)
            return {
                ...state,
                User_data: delData
            }
      
        case "UPDATE_DATA":
            const updateDAta = state.User_data.map((elk, k) => k == action.d ? action.payload : elk)
            return {
                ...state,
                User_data: updateDAta
            }
        default:
            return state
    }
}