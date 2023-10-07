import { View, Text, ScrollView } from "react-native";

import styles from "../post-content/post-content.style";

const PostContent = ({ post }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.textContent}>{post.content}</Text>
    </View>
  );
};

export default PostContent;
