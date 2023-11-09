import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
		rowGap: 7,
    backgroundColor: COLORS.bgPrimary
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
		color: COLORS.white,
		fontWeight: 'bold'
  },
	signOutBtn: {
		paddingHorizontal: 15,
		paddingVertical: 7,
		borderRadius: 10,
		backgroundColor: COLORS.orange
	}
});

export default styles;