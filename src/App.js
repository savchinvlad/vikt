import Header from './Components/header';
import HelloPage from './Components/HelloPage';
import Recent from './Components/recent';
import './scss/index.scss';

function App() {
  let a = [0];
  function booleanToString(b) {
    const sum = b.reduce((total, amount) => total + amount);
    return sum % 2 ? 'odd' : 'even';
  }
  console.log(booleanToString(a));

  return (
    <div>
      <Header></Header>
      <HelloPage></HelloPage>
      <Recent></Recent>
    </div>
  );
}

export default App;
