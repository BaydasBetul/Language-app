import "./App.css";
import Header from "./components/header/Header";
import Card from "./components/cards/Cards";
import { categories } from "./components/helpers/Data";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="card-container">
          {categories.map((card, index)=> (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
