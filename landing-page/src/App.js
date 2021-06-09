import './App.css';
import Header from './components/header';
import Welcome from './components/Welcome';
import Announcement from './components/announcement';
import Form from './components/form';
import CreateAd from './components/CreateAd';

function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <Announcement/>
      <Form/>
      <CreateAd/>
    </div>
  );
}

export default App;
