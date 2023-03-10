import { useState } from "react";

export const useColorAnimation = () => {

  const OPACITY_INCREMENT = 5;
  const OPACITY_MAX = 100;
  const OPACITY_START = 30;

  const [buttonOpacity, setButtonOpacity] = useState(OPACITY_START);

  const handleButtonPress = (value: number) => {
    if (value < OPACITY_MAX) {
      setTimeout(() => {
        setButtonOpacity(opacity => opacity + OPACITY_INCREMENT);
        handleButtonPress(value + OPACITY_INCREMENT);
      }, 60);
    }
  };

  const resetButtonOpacity = () => setButtonOpacity(OPACITY_START);

  return {handleButtonPress, buttonOpacity, resetButtonOpacity}
}
