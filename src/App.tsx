import "./App.css";
import Navbar from "./components/Navbar/Navbar"

export default function App() {
  return (
    <div className="App">

      <Navbar/>

      <ul className="lista">
        <li>Aprenderenos React</li>
        <li>Aprenderemos Componente</li>
      </ul>
    </div>
  );
}