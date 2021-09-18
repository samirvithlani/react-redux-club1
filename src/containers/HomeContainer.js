import { connect } from "react-redux";
import { Home } from "../components/Home";
import { addToCart,removeToCart } from "../services/Actions/actions";


const mapStateToProps =state =>({

    //store....data
    cardData:state
})

const mapDispatchToProps =dispatch=>({

    //action will be called from here
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(Home); 