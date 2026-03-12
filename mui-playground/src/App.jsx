import './App.css';
import AppBarMUI from './appBar/AppBar';
import BoxsMUI from './box/Boxs';
import BoxModelMUI from './boxModel/BoxModel';
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
        <BoxModelMUI/><br />
        <BoxsMUI/> <br />
      </div>
    </>
  )
}

export default App
