import IncDecCounter from "./cmps/carosellBtn/IncDecInput";
import { InputSearch } from "./cmps/InputSearch/InputSearch";




const App = () => {


  const incDecProps = {
    name: 'matan',
    max: 50000,
    min: 100,
    defaultValue: 150,
    cb: () => console.log('Error'),
    style: {}
  }


  return (
    <div className="App">
      {/* <InputSearch /> */}
      <IncDecCounter incDecProps={incDecProps} />
    </div>
  );
}

export default App;
