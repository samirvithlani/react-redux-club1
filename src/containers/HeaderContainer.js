import { connect } from "react-redux";
import { Header } from "../components/Header";


const mapStateToProps =state =>({

    //store....data
    cardData:state
})

const mapDispatchToProps =dispatch=>({

    //action will be called from here

})


export default connect(mapStateToProps,mapDispatchToProps)(Header); 