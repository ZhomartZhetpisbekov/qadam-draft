import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./create-screen.style";
import { Link } from "expo-router";

const CreateScreen = () => {
  return (
    <View style={styles.container}>
      <Link href={{pathname: 'create/create-post'}} style={styles.btn}>
        <Text style={styles.text}>Post</Text>
      </Link>
      <Link href={{pathname: 'create/create-goal'}} style={styles.btn}>
        <Text style={styles.text}>Goal</Text>
      </Link>
    </View>
  );
};

export default CreateScreen;
