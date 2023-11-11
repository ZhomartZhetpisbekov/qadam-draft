import { TextInput } from "react-native";
import { COLORS } from "../../../constants";
import styles from "./custom-text-input.style";

export default function CustomTextInput({placeholder, value, setValue, multiline}) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={(text) => setValue(text)}
      style={styles.textInput}
      placeholderTextColor={COLORS.darkGray}
			multiline={multiline}
    />
  );
}
