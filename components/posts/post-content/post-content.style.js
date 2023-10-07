import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    rowGap: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.white,
  },
  textContent: {
    fontSize: 14,
    fontWeight: "300",
    color: COLORS.white,
  },
});

export default styles;
