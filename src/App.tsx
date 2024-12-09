import './App.css';
import Animal from './Animal';
import Exibicao from './Exibicao';
//import {ReactNode} from "react";

type AnimaisTuplaType=[string,string,number,boolean]

const ANIMAIS: AnimaisTuplaType[] = [
  ["🦭","Foca",97.3,true],
  ["🦈","Tubarão",1508.3,true],
  ["🐋","Baleia",2015.20,true],
  ["🪼","Água viva",3.20,false],
  ["🦀","Carangueijo",0.473,false],

];



function App() {
  const exA1: AnimaisTuplaType[] = ANIMAIS.filter(animal=>animal[2]<200.0);
  const exB2: AnimaisTuplaType[] = ANIMAIS.filter(animal=>animal[2]>=200.0);

  return (
    <div className="app">
      <Exibicao 
        abertura= {new Date("2024-11-05T08:00-03:00")} 
        fechamento = {new Date("2024-11-05T16:00-03:00")} 
        cercado="A1"
        >{exA1.map(animal=> <Animal
              key={animal[1]}  
              icone={animal[0]} 
              nome={animal[1]} 
              peso={animal[2]}
              extincao={animal[3]}
            />
          )}
        
        </Exibicao>
      <Exibicao 
        abertura= {new Date("2024-11-05T08:00-03:00")} 
        fechamento = {new Date("2024-11-05T16:00-03:00")} 
        cercado="B2"
      >{exB2.map(animal=> <Animal
            key={animal[1]}  
            icone={animal[0]} 
            nome={animal[1]} 
            peso={animal[2]}
            extincao={animal[3]}
          />
        )}
        
      </Exibicao>
    </div>
  );
}

export default App
