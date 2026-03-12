import './App.css';
import AppBarMUI from './appBar/AppBar';
import ButtonMUI from './buttons/Buttons';
import CardsMUI from './cards/Cards';
import TextFieldsMUI from './textField/TextFields';
import TypographyMUI from './typography/Typography';

function App() {

  return (
    <>
      <div>
        <ButtonMUI /> <br />
        <TypographyMUI/> <br />
        <TextFieldsMUI/> <br />
        <CardsMUI/> <br />
        <AppBarMUI/> <br />
      </div>
    </>
  )
}

export default App
