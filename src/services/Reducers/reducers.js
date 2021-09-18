export default function cardItems(state=[],action){


    switch(action.type){

        case "ADD_TO_CART":
            console.log("reducers",action)
            return[
                ...state,
                {cardData:action.data}
            ]
        case "REMOVE_TO_CART":
            state.pop()
            
            return[
                ...state
            ]    

            default:
                return state



    }

}