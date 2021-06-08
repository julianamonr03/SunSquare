import './App.css';
import Header from './components/header';
import Welcome from './components/Welcome';
import Announcement from './components/announcement';
import Form from './components/form';

function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <Announcement/>
      <Form/>
    </div>
  );
}

export default App;
