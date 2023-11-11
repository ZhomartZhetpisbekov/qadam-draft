import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: COLORS.bgPrimary,
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  inputContainer: {
    rowGap: 10
  }
});

export default styles;
