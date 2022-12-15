
import { Header } from './components/header/Header';
import { Frame_1 } from './components/frame_1/Frame_1';
import { Frame_2 } from './components/frame_2/Frame_2';
import { Frame_3 } from './components/frame_3/Frame_3';
import { Frame_4 } from './components/frame_4/Frame_4';
import { Frame_5 } from './components/frame_5/Frame_5';
import { Frame_6 } from './components/frame_6/Frame_6';
import { Frame_7 } from './components/frame_7/Frame_7';
import { Frame_8 } from './components/frame_8/Frame_8';
import { Frame_9 } from './components/Frame_9/Frame_9';
import { Frame_10 } from './components/Frame_10/Frame_10';
import { Frame_11 } from './components/frame_11/Frame_11';
import { Frame_12 } from './components/frame_12/Frame_12';
import { Frame_13 } from './components/frame_13/Frame_13';
import { Frame_14 } from './components/frame_14/Frame_14';
import { Frame_15 } from './components/frame_15/Frame_15';
import { Frame_16 } from './components/frame_16/Frame_16';
import { Frame_17 } from './components/frame_17/Frame_17';
import { Frame_18 } from './components/frame_18/frame_18';
import './App.css';
import { useEffect, useState } from 'react';



function App() {

  return (
    <article className="App" id="App" style={{
      height: "100vh",
      overflowY: "scroll",
      overflowX:"hidden",
      scrollSnapType: "y mandatory", backgroundColor: "black",
      scrollPadding: "80px"
    }}>
     <Header /> 
      <Frame_1 />
      <Frame_2 />
     <Frame_3 />
  <Frame_4 /> 
       <Frame_5 />
      <Frame_6 />
      <Frame_7 />
      <Frame_8 />
      <Frame_9 />
      <Frame_10 />
      <Frame_11 />
      <Frame_12 />
      <Frame_13 />
      <Frame_14 />
      <Frame_15 />
      <Frame_16 />
      <Frame_17 />
      <Frame_18 /> 


    </article>
  );
}

export default App;
