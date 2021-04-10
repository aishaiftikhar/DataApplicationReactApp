import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Button from './Components/Button';
import Home from '@material-ui/icons/Home';
import {FaReact} from 'react-icons/fa'
import MultiChoiceLabel from './Components/MultiChoiceLabel';
import ReviewData from './Components/ReviewData';
import ProgressBar from './Components/ProgressBar';
import TextLabel from './Components/TextLabel';
import MainPage from './Pages/MainPage';
import styles from './Styles/generalStyles.module.css'
import FooterElement from './Components/FooterElement'

function App() {
  return (
    <div className="App">

<MainPage />

    </div>
  );
}

export default App;
 //*     <MultiChoiceLabel value ='this is me jhsj sjhsjs hsjhs' icon= {<FaReact/>}  <ProgressBar value={60} max={100}/>

 //*<TextLabel text={"this is what i am trying to do?"}/>
 //*<TextLabel className={styles.questions} text={"this is what i am trying to do?"}/>
 //*<InputLabelComponent label="test" type="text" />
 //*<BasicInfoPage/><CheckBox label="test"/>
 //*<BasicInfoPage/>
 //*<InfoPageOne/>
