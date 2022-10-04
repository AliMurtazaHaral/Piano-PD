import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { Route, Routes } from "react-router-dom";
import pdPiano from './assets/pd-piano-desk-.png';
import btnImage from './assets/button-image.PNG';
import leftCard from './assets/left-card.PNG';
import rightCard from './assets/right-card.PNG';
function App() {
  return (
    
    <div className='App'>
    <h2>Welcome to the</h2>
    <img src={pdPiano} width={400}/>
    <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <button>
    <img src={btnImage} width={50} style={{marginTop:'10px'}}/>
    </button>
    <div className='submit-section'>
      <h3>Submit</h3>
    </div>
    <div className='form-section'>
      <img src={leftCard} height={400} width = {200}/>
      <form>
        <input type='text' style={{background:'transparent'}} placeholder = "Your Stage Name"/><br/>
        <input type='text' style={{background:'transparent'}} placeholder = "Song Name"/><br/>
        <input type='text' style={{background:'transparent'}} placeholder = "Song Features"/><br/>
        <input type='text' style={{background:'transparent'}} placeholder = "Song Features"/>
        <p>We will email you within the next 7 days to inform you of your publish date. While your wait heres a preview link.</p>
      </form>
      <img src={rightCard} height={400} width = {200}/>
    </div>
    <div>
    <button className='submit-button'>
        Submit
</button>
    </div>
    </div>
  );
}

export default App;
