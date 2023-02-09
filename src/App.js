import "./App.css";
import images from "./assets/data/images"
import Image from "./components/Image";
import Button from "./components/Button";
import { useState,useEffect} from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isPrevDisable, setPrevDisable] = useState(false);
  const [isNextDisable, setNextDisable] = useState(false);

  const prevBtnClick = () => {
    if (count >0) {
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

  useEffect(()=>{
    if(images.length===0  ){
      setPrevDisable(true);
      setNextDisable(true)
    }
  })
  useEffect(()=>{
    setPrevDisable(true)
  },[])
  useEffect(()=>{
    if((count+1)===images.length){
      //setPrevDisable(true)
      setNextDisable(true)
    }else if(count+1===1){
      setPrevDisable(true)
    }
  },[count])
  return (
    <div className="App">
      <header>
        <h2>Image Gallery</h2>
      </header>
    
      <section>
     {
      images.length!==0? <Image image={images[count].src} />:<Image/>
     }
        <div className="buttons-div">
          <Button
            caption="Prev"
            onclick={prevBtnClick}
            disable={isPrevDisable}
          />
          <span>
          {
            images.length!==0? `${count +1} of ${images.length}`:`${count} of ${images.length}`
          }
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
