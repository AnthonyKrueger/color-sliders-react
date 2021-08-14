import './App.css';
import Header from "./components/Header"
import ColorBrowser from "./components/ColorBrowser"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="grid grid-cols-3">
        <ColorBrowser />
        <ColorBrowser />
        <ColorBrowser />
        <ColorBrowser />
        <ColorBrowser />
        <ColorBrowser />
      </div>
    </div>
  );
}

export default App;
