import { Component } from "react"
import HistoryComponent from "./HistoryComponent";
import ReservbookingComponent from "./ReservbookingComponent";
import ReservComponent from "./ReservComponent";
import RoomComponent from "./RoomComponent";
class NornmaiComponent extends Component {
    state = {}
    render(){
        return (
            <div className="bg-div">
                <h1 className="centered">Welcome to Nornmai Resort</h1>
                <RoomComponent/>
<<<<<<< HEAD
                {/* <ReservComponent/> */}
=======
                <ReservComponent/>
                <HistoryComponent/>
>>>>>>> 0cdd7baaf6e5e7539be0fab81066bdc2e771af92
            </div>
        )
    }
}
export default NornmaiComponent