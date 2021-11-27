import './App.css';
import Timer from './Timer';
import HomeScreen from './screens/HomeScreen'
import { Container } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
     <Container style={{paddingTop:"250px"}}>
      <Timer startCount="20"/>
     </Container>
    </div>
  );
}

export default App;

