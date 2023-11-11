import { Text, TouchableOpacity } from "react-native";
import styles from "./custom-button.style";

export default function CustomButton({ btnText, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.btn}>
      <Text style={styles.btnText}>{btnText}</Text>
    </TouchableOpacity>
  );
}
