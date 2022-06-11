import { Component } from "react";
import DiceStyle from "./rolldice.module.css";
import DiceButton from "./DiceButton";
import Dice1 from "../../img/Dice1.png";
import Dice2 from "../../img/Dice2.png";
import Dice3 from "../../img/Dice3.png";
import Dice4 from "../../img/Dice4.png";
import Dice5 from "../../img/Dice5.png";
import Dice6 from "../../img/Dice6.png";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6],
      image1: "https://images-na.ssl-images-amazon.com/images/I/61b-7+cowML.png",
      image2: "https://images-na.ssl-images-amazon.com/images/I/61b-7+cowML.png",
      clicked: false,
    };
  }

  rollDice() {
    let randomNumber = Math.floor(Math.random() * 6);
    let randomNumber2 = Math.floor(Math.random() * 6);
    console.log(randomNumber, randomNumber2);

    this.setState({
      clicked: true,
      image1: this.state.images[randomNumber],
      image2: this.state.images[randomNumber2],
    });

    setTimeout(() => {
      this.setState({
        clicked: false,
      });
    }, 1300);
  }
  render() {
    return (
      <div className={`${DiceStyle.myDice}`}>
        <div>
          <img
            className={`${DiceStyle.diceImg}  ${this.state.clicked && DiceStyle.shakeImg}`}
            src={this.state.image1}
            alt="dice"
          />
          <img
            className={`${DiceStyle.diceImg} ${this.state.clicked && DiceStyle.shakeImg}`}
            src={this.state.image2}
            alt="dice"
          />
        </div>

        <DiceButton
          rollDice={() => this.rollDice()}
          clicked={this.state.clicked}
        />
      </div>
    );
  }
}

export default RollDice;
