import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 10,
  },
  welcomeText: {
    fontSize: 42,
    fontWeight: "bold",
    color: COLORS.orange,
    marginBottom: 32,
  },
  textInput: {
    width: "70%",
    backgroundColor: COLORS.white,
    color: "black",
    height: 40,
    paddingLeft: 6,
    borderRadius: 6,
  },
  signInBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: COLORS.orange,
    marginTop: 10,
    borderRadius: 6,
  },
  signInText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 14,
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
