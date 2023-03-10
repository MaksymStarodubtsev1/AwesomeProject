import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from "react-native-reanimated";
import { availableColors } from "../../store/color/colorSlice";

interface Props {
  title: string;
  onPress: () => void;
  backgroundColor: typeof availableColors[number];
}

const ReanimatedButton = ({ title, onPress, backgroundColor }: Props) => {
  const progress = useDerivedValue(() => {
    return withSpring(availableColors.indexOf(backgroundColor));
  });

  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1, 2, 3],
      availableColors
    );

    return {
      backgroundColor,
    };
  });

  return (
    <Animated.View style={[rStyle, styles.container]}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
       <Text>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 5,
  },
  button: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ReanimatedButton;
