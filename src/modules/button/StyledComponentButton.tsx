import { TouchableOpacity } from "react-native";
import styled from "styled-components";

export const StyledComponentButton = styled(TouchableOpacity)({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'blue',
  borderRadius: 5,
  padding: 10,
  margin: 5
});
