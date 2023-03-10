import { createSlice } from "@reduxjs/toolkit";

export const availableColors = ['#D199E7', '#72C1ED', '#A196F1', '#7D72ED'] as const

type Color = typeof availableColors[number]

interface colorState {
  color: Color,
  direction: number
}

const initialState: colorState = {
  color: '#D199E7',
  direction: 1
};

const colorSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    cycleColor: (state) => {
      const currentIndex = availableColors.indexOf(state.color);
      const nextIndex = currentIndex +  + state.direction;

      if (nextIndex === availableColors.length || nextIndex < 0) {
        const newDirection = -1 * state.direction; // flip the direction
        return {
          ...state,
          color: availableColors[currentIndex + newDirection],
          direction: newDirection,
        };
      }
      return {
        ...state,
        color: availableColors[nextIndex]
      };
    }
  },
})

export default colorSlice
