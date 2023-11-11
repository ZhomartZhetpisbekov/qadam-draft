import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: COLORS.orange,
    marginTop: 10,
    borderRadius: 6,
  },
  btnText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 14,
		textAlign: 'center'
  },
});

export default styles;
