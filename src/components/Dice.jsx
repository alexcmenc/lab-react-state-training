import { useState } from "react";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import diceEmpty from "../assets/images/dice-empty.png";

export default function Dice() {
  const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [dice, setDice] = useState(diceArr[2]);
  const handleDiceRoll = () => {
    setDice(diceEmpty);
    setTimeout(() => {
      const rand = Math.floor(Math.random() * diceArr.length);
      setDice(diceArr[rand]);
    }, 1000);
  };

  return (
    <>
      <div>
        <img
          src={dice}
          alt="dice"
          style={{ width: "30vw" }}
          onClick={handleDiceRoll}
        />
      </div>
    </>
  );
}
