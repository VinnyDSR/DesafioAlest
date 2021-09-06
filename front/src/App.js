import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import data from './data';


function App() {
  const{products} = data;
  return (
    <div className="App">
      <Header></Header>
      <div className="table row">
      <Main products={products}></Main>
      </div>
    </div>
  );
}

export default App;
