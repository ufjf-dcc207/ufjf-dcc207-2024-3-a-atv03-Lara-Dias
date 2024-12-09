import './App.css';
import Animal from './Animal';
import Exibicao from './Exibicao';
import {ReactNode} from "react";

type AnimaisTuplaType=[string,string,number,boolean]

const ANIMAIS: AnimaisTuplaType[] = [
  ["🦭","Foca",97.3,true],
  ["🦈","Tubarão",1508.3,true],
  ["🐋","Baleia",2015.20,true],

];



function App() {
  const exA1: ReactNode[] = [];
  const exB2: ReactNode[] = [];

  for(let i=0;i<ANIMAIS.length;i++){
    const ex = ANIMAIS[i][2]<200.00?exA1:exB2
    ex.push(
      <Animal
        key={ANIMAIS[i][1]}  
        icone={ANIMAIS[i][0]} 
        nome={ANIMAIS[i][1]} 
        peso={ANIMAIS[i][2]}
        extincao={ANIMAIS[i][3]}
    />
  );
  }
  return (
    <div className="app">
      <Exibicao 
        abertura= {new Date("2024-11-05T08:00-03:00")} 
        fechamento = {new Date("2024-11-05T16:00-03:00")} 
        cercado="A1"
        >{exA1}
        
        </Exibicao>
      <Exibicao 
        abertura= {new Date("2024-11-05T08:00-03:00")} 
        fechamento = {new Date("2024-11-05T16:00-03:00")} 
        cercado="B1"
      >{exB2}
        
      </Exibicao>
    </div>
  );
}

export default App
