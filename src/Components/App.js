
import '../Styles/App.css';
import { Molecula1 } from './Molecula1';

function App(props) {
  const list=props.list
  return (
    <div className="App">
      {list.map((crear)=><Molecula1 theme={crear.theme}/>)}
    </div>
  );
}

export default App;
