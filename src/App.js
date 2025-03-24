import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className='content'>
      <h2>Window Size</h2>
      <p>Width: <span>{width}px</span></p>
      <p>Height: <span>{height}px</span></p>
    </div>
  );
}

export default App;
