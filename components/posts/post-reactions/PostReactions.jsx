import { View, Text, ScrollView } from "react-native";
import ReactionBtn from "../../common/reaction-btn/ReactionBtn";

import styles from "./post-reactions.style";
import { icons } from "../../../constants";

const PostReactions = ({ post }) => {
  return (
    <View style={styles.container}>
      <ReactionBtn source={icons.like} number={post.likesNum} />
      <ReactionBtn source={icons.comment} number={post.commentsNum} />
    </View>
  );
};

export default PostReactions;
