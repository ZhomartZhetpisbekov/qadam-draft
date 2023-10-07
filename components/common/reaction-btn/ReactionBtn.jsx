import { TouchableOpacity, View, Text, Image } from "react-native";

import styles from "./reaction-btn.style";

const ReactionBtn = ({ source, number }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconBox}>
        <Image source={source} style={styles.icon} resizeMode="contain" />
      </TouchableOpacity>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
};

export default ReactionBtn;
