import Animal from './Animal'
import './App.css'

function App() {
  return <div className="app"> 
  <Animal icone="🦭" nome="Foca" peso={97.3} extincao={true}/>
  <Animal icone="🐋" nome="Baleia" peso={147.9} extincao={true}/>
  <Animal icone="🦈" nome="Tubarão" peso={3445.69} extincao={false}/>
  </div>;
}

export default App
