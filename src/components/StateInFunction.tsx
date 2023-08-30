import React , { useState } from 'react'

interface StateInFunctionProps {
    id: number ,
    name: string ,
    counter: number;
  }

export const StateInFunction: React.FC<StateInFunctionProps> = (props) => {
    const [state , setState] = useState({
        id: 1,
        name: "Shiori",
        counter:0,

    })

    const clickPlus = () => {
        setState(() => ({
          ...state,
          counter: state.counter + 1,
        }));
      };
    
      const clickMinus = () => {
        setState(() => ({
          ...state, //ป้องการการแทนที่หากไม่มีจะถูกแทนที่แล้ว state ที่เราใส่ไว้ตอนต้นจะหายไป
          counter: state.counter - 1,
        }));
      };

    return (
        <div>
          <h3>StateInFunction</h3>
          <h4>{state.name}</h4>
          <h5> counter = {state.counter}</h5>
          <button style={{ backgroundColor: 'green' }} onClick={clickPlus}>เพิ่ทขึ้น</button>
          <button style={{ backgroundColor: 'red' }} onClick={clickMinus}>ลดลง</button>
        </div>
      );
}

export default StateInFunction
