import './App.css';
import Header from './components/header';
import Welcome from './components/Welcome';
import Announcement from './components/announcement';

function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <Announcement/>
    </div>
  );
}

export default App;
