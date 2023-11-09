import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    rowGap: 10,
  },
  textInput: {
    width: 200,
    backgroundColor: COLORS.white,
    color: "black",
    height: 40,
    paddingLeft: 6,
    borderRadius: 6,
  },
  pickImgBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: COLORS.blue,
    marginTop: 10,
    borderRadius: 6,
  },
  btnText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 14,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 100
  }
});

export default styles;
