import Animal from './Animal'
import Exibicao from './Exibicao';
import './App.css'

function App() {
  return (
    <div className="app">
      <Exibicao 
        abertura= {new Date("2024-11-05T08:00-03:00")} 
        fechamento = {new Date("2024-11-05T16:00-03:00")} 
        cercado="A1"
        >
        <Animal icone="🦭" nome="Foca" peso={97.3} extincao={true}/>
        <Animal icone="🐋" nome="Baleia" peso={147.9} extincao={true}/>
        </Exibicao>
      <Exibicao 
        abertura= {new Date("2024-11-05T08:00-03:00")} 
        fechamento = {new Date("2024-11-05T16:00-03:00")} 
        cercado="B1"
      >
        <Animal icone="🦈" nome="Tubarão" peso={3445.69} extincao={true}/>
      </Exibicao>
    </div>
  );
}

export default App
