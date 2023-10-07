import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderColor: "white",
    // borderWidth: 1,
  },
  postInfo: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  profilePicBox: {
    width: 35,
    height: 35,
    borderRadius: 100,
    borderColor: COLORS.blue,
    borderWidth: 1,
  },
  profilePic: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  infoBox: {
    rowGap: 1,
  },
  infoTop: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 2,
  },
  profileName: {
    color: COLORS.white,
    fontWeight: "500",
  },
  infoBottom: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
  },
  infoBtn: {},
  dots: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.white,
  },
});

export default styles;
