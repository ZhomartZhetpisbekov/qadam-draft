import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 10,
  },
  signUpBtn: {
    width: 200,
    paddingVertical: 10,
    backgroundColor: COLORS.orange,
    marginTop: 10,
    borderRadius: 6,
  },
  signUpText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 14,
    textAlign: 'center',
  },
  linkBtn: {
    padding: 5,
  },
  linkText: {
    color: "white",
    fontWeight: "500",
  },
});

export default styles;
