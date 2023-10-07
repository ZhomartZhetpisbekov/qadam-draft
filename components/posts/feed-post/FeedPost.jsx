import { View, Text, ScrollView } from "react-native";

import PostHeader from "../post-header/PostHeader";
import PostContent from "../post-content/PostContent";
import PostReactions from "../post-reactions/PostReactions";

import styles from "./feed-post.style";

const FeedPost = ({ post }) => {
  return (
    <View style={styles.container}>
      <PostHeader post={post} />
      <PostContent post={post} />
      <PostReactions post={post} />
    </View>
  );
};

export default FeedPost;
