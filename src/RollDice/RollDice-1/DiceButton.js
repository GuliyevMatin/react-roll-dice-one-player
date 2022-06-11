import { Component } from "react";
import DiceStyle from "./rolldice.module.css"
class DiceButton extends Component {
    render() {
        return (
            <div style={{marginTop:"50px"}}>
                <button disabled={this.props.clicked && true} onClick={()=>this.props.rollDice()} className={`${this.props.clicked ? DiceStyle.diceBtnClicked : DiceStyle.diceBtn}`}>{this.props.clicked ? "Rolling..." : "Roll Dice"}</button>
            </div>
        )
    }
}


export default DiceButton;