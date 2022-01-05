import Products from '../faqData.json'

const initialState = {
    discover: Products,
    confirmList: [],
    finishedList: []
}

export default function orderReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TO_CONFIRM_LIST": {
            const newState = {...state, confirmList: [...state.confirmList, action.payload]}
            return newState
        }
        case "REMOVE_FROM_READING_LIST": {
            const newState = {...state, confirmList: state.confirmList.filter((book)=>book.id !== action.payload)}
            return newState
        }
        case "ADD_TO_FINISHED_LIST": {
            const newState = {...state,confirmList: state.confirmList.filter((book)=>book.id !== action.payload.id), finishedList: [...state.finishedList, action.payload]}
            return newState
        }

        default:
            return state
    }
}