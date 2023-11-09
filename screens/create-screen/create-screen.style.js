import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 20
  },
  btn: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: COLORS.orange,
    borderRadius: 5
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default styles;
