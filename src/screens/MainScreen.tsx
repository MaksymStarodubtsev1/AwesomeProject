import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components";
import { StyledComponentButton } from "../modules/button/StyledComponentButton";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import colorSlice from "../store/color/colorSlice";
import { useColorAnimation } from "../hooks/useColorAnimation";
import ReanimatedButton from "../modules/button/ReanimatedButton";

const Container = styled(View)({
  height: 100,
  flexDirection: 'row',
})

export const MainScreen = () => {
  const dispatch = useAppDispatch();
  const {cycleColor} = colorSlice.actions
  const color = useAppSelector(state => state.theme.color);
  const {handleButtonPress, resetButtonOpacity, buttonOpacity} = useColorAnimation()

  useEffect(() => {
    handleButtonPress(buttonOpacity);
  }, [color]);

  const handleButtonClick = () => {
    resetButtonOpacity();
    dispatch(cycleColor());
  }

  const buttonStyle = (color: string, buttonOpacity: number) => ({
    backgroundColor: color + buttonOpacity,
  })

  return (
    <Container>
      <TouchableOpacity
          onPress={handleButtonClick}
          style={{
            ...buttonStyle(color, buttonOpacity),
            ...styles.button
          }}
        >
          <Text>button 1</Text>
      </TouchableOpacity>

      <StyledComponentButton
        onPress={handleButtonClick}
        style={buttonStyle(color, buttonOpacity)}
      >
        <Text>button 2</Text>
      </StyledComponentButton>

      <ReanimatedButton
        onPress={handleButtonClick}
        backgroundColor={color}
        title='button 3'
      />
    </Container>
  );
};


const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 5
  },
});
