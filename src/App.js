import React, { useState } from 'react';
import './App.css';
import WebcamComponent from './WebcamComponent';

function App() {
  const [inputText, setInputText] = useState('');
  const [showImages, setShowImages] = useState(false); // hide ASL images until check button is clicked

  const aslImageUrls = {
    A: 'https://www.signingsavvy.com/images/words/alphabet/2/a1.jpg',
    B: 'https://www.signingsavvy.com/images/words/alphabet/2/b1.jpg',
    C: 'https://www.signingsavvy.com/images/words/alphabet/2/c1.jpg',
    D: 'https://www.signingsavvy.com/images/words/alphabet/2/d1.jpg',
    E: 'https://www.signingsavvy.com/images/words/alphabet/2/e1.jpg',
    F: 'https://www.signingsavvy.com/images/words/alphabet/2/f1.jpg',
    G: 'https://www.signingsavvy.com/images/words/alphabet/2/g1.jpg',
    H: 'https://www.signingsavvy.com/images/words/alphabet/2/h1.jpg',
    I: 'https://www.signingsavvy.com/images/words/alphabet/2/i1.jpg',
    J: 'https://www.signingsavvy.com/images/words/alphabet/2/j1.jpg',
    K: 'https://www.signingsavvy.com/images/words/alphabet/2/k1.jpg',
    L: 'https://www.signingsavvy.com/images/words/alphabet/2/l1.jpg',
    M: 'https://www.signingsavvy.com/images/words/alphabet/2/m1.jpg',
    N: 'https://www.signingsavvy.com/images/words/alphabet/2/n1.jpg',
    O: 'https://www.signingsavvy.com/images/words/alphabet/2/o1.jpg',
    P: 'https://www.signingsavvy.com/images/words/alphabet/2/p1.jpg',
    Q: 'https://www.signingsavvy.com/images/words/alphabet/2/q1.jpg',
    R: 'https://www.signingsavvy.com/images/words/alphabet/2/r1.jpg',
    S: 'https://www.signingsavvy.com/images/words/alphabet/2/s1.jpg',
    T: 'https://www.signingsavvy.com/images/words/alphabet/2/t1.jpg',
    U: 'https://www.signingsavvy.com/images/words/alphabet/2/u1.jpg',
    V: 'https://www.signingsavvy.com/images/words/alphabet/2/v1.jpg',
    W: 'https://www.signingsavvy.com/images/words/alphabet/2/w1.jpg',
    X: 'https://www.signingsavvy.com/images/words/alphabet/2/x1.jpg',
    Y: 'https://www.signingsavvy.com/images/words/alphabet/2/y1.jpg',
    Z: 'https://www.signingsavvy.com/images/words/alphabet/2/z1.jpg',
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    setShowImages(false); // hide images
  };

  const generateRandomString = () => {
    const length = 5; // length of the random string
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setInputText(result); // Update the input field with the random string
    setShowImages(false); // Hide images when a new string is generated
  };

  const checkAnswers = () => {
    setShowImages(true); // show images when check answers button is clicked
  };

  const renderASLImages = () => {
    return showImages && inputText.toUpperCase().split('').map((char, index) => {
      if (aslImageUrls[char]) {
        return <img key={index} src={aslImageUrls[char]} alt={`ASL sign for ${char}`} style={{ width: '100px', height: '100px' }} />;
      }
      return null;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
      <img src="https://i.ibb.co/LvgrY3B/coconut-1.png" alt="Logo" className="App-logo" /> {/* Logo added here */}
        <WebcamComponent />
        <div>
          <input type="text" value={inputText} onChange={handleInputChange} placeholder="Enter letters" />
          <button onClick={generateRandomString}>Generate Random String</button>
          <button onClick={checkAnswers}>Check Answers</button>
        </div>
        <div id="aslImages">
          {renderASLImages()}
        </div>
      </header>
    </div>
  );
}

export default App;
