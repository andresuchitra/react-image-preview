import React, {Component} from 'react';
import './App.css';
import ReactToPrint from 'react-to-print'
import ImageInput from './components/ImageInput.js'

const MAX_HEIGHT =  100
const MAX_WIDTH = 800

class App extends Component {
  state= {
    savedImage: '',
    image: '',
    file: null,
    height: 100,
    width: 800,
  }

  onChangeImage = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        image: reader.result
      });
    }

    console.log(file)
    reader.readAsDataURL(file)
  }
  onChangeHeight = (newVal) => {
    if(newVal) {
        newVal = Number(newVal)
    }
    else {
        newVal = MAX_HEIGHT;
    }

    newVal = newVal > MAX_HEIGHT ? 100 : Number(newVal);
    this.setState({height: newVal})
  }

  onChangeWidth = (newVal) => {
    if(newVal) {
        newVal = Number(newVal)
    }
    else {
        newVal = MAX_WIDTH;
    }
    
    newVal = newVal > MAX_WIDTH ? 800 : Number(newVal);
    this.setState({width: newVal})
  }


  saveImage = (imageFile) => {
    return Promise.resolve("http://lorempixel.com/800/100/cats/");
  }

  render() {
    let {image} = this.state;
    let $imageUrl = null;
    if (image) {
      $imageUrl = (<img src={image} className="border border-primary"  style={{'height' : `${this.state.height}px`, 'width' : `${this.state.width}px`, 'object-fit': 'none'}} alt="preview" />);
    } else {
      $imageUrl = (<div className="d-flex justify-content-center align-items-center border" style={{'height' : `${this.state.height}px`, 'width' : `${this.state.width}px`}}><span>Image Preview</span></div>);
    }

    return (
      <div className="p-2 container">
        <ImageInput onChangeHeight={(val) => this.onChangeHeight(val)} 
                    onChangeWidth={(val) => this.onChangeWidth(val)}
                    onChangeImage={(val) => this.onChangeImage(val)}
        />

        <div className="p-2">
          <ReactToPrint
              trigger={() => <button className="btn btn-primary">Print!</button>}
              content={() => this.myRef}
            />
          <div className="mt-3" ref={el => (this.myRef = el)}>
            {$imageUrl}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
