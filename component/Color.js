import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "react-native/Libraries/NewAppScreen";
import styled from "style-components";

export const GradientContainer = styled(LinearGradient)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Blue = styled(Colors)`
  color: #d0efff;
`;

export const Green = styled(Colors)`
  color: #80c904;
`;

export const Red = styled(Colors)`
  color: #f28b88;
`;
