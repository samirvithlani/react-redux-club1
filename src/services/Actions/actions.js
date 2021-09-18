export const addToCart =(data)=>{

console.log("action",data)
    return{
        
        data:data,
        type:"ADD_TO_CART"
    }
}
export const removeToCart =(data)=>{

    console.log("action",data)
        return{
            
            data:data,
            type:"REMOVE_TO_CART"
        }
    }
    