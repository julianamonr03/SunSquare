import './App.css';
import Header from './components/header';
import Welcome from './components/Welcome';
import Announcement from './components/announcement';
import User from './components/form';
import CreateAd from './components/CreateAd';
import Form from './components/CreateAnnoun';
/*import FormPrueba from './components/FormPrueba';*/

function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <Announcement/>
      <User/>
      <CreateAd/>
      <Form/>
    </div>
  );
}

export default App;
