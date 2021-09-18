import React from 'react'

export const Home = (props) => {
    console.log("home",props.cardData.cardItems)
    console.log("home",props.cardData.cardItems.length)
    
    const style  = {
        width: "18rem"
    }

    return (
        <div>
            
            <div class="card" style={style}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYMbzZOo4IjDQJeU3_MT4_qFxpRKoH5OnWX55g1Pku_3OVEjOIkdeD-qaltEOwPVAwxvHZw0&usqp=CAc" class="card-img-top" alt="..."/>
                <div class ="card-body">
                <h5 class ="card-title">IPHONE</h5>
                <h5 class ="card-title">1500$</h5>
                <button onClick ={()=>props.addToCartHandler({price:"1500",name:"iphone"}) }class ="btn btn-primary">ADD TO CART</button>

                <button onClick ={()=>props.removeToCartHandler({price:"1500",name:"iphone"}) }class ="btn btn-primary">REMOVE CART</button>
                </div>
            </div>
        </div>
    )
}
