import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
  },
  iconBox: {
    width: 20,
    height: 20,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  number: {
    color: COLORS.white,
    fontWeight: "500",
    fontSize: 12,
  },
});

export default styles;
