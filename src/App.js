import "./App.css";
import images from "./assets/data/images"
import Image from "./components/Image";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isPrevDisable, setPrevDisable] = useState(false);
  const [isNextDisable, setNextDisable] = useState(false);

  const prevBtnClick = () => {
    if (count > 0) {
      setCount(count - 1);
      setNextDisable(false);
    } else {
      setPrevDisable(true);
    }
  };

  const nextBtnClick = () => {
    if (count < images.length - 1) {
      setCount(count + 1);
      setPrevDisable(false);
    } else {
      setNextDisable(true);
    }
  };
  return (
    <div className="App">
      <header>
        <h2>Image Gallery</h2>
      </header>
    
      <section>
     
      <Image image={images[count].src} />
       
        <div className="buttons-div">
          <Button
            caption="Prev"
            onclick={prevBtnClick}
            disable={isPrevDisable}
          />
          <span>
            {count + 1} of {images.length}
          </span>
          <Button
            caption="Next"
            onclick={nextBtnClick}
            disable={isNextDisable}
          />
        </div>
      </section> 
      <footer className="footer">copyright @2023</footer>
    </div>
  );
  
}

export default App;
