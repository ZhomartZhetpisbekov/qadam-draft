import { ScrollView } from "react-native";

import FeedPost from "../feed-post/FeedPost";
import posts from "../../../constants/posts";

const PostsList = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%" }}>
      {posts.map((item) => (
        <FeedPost post={item} key={item.id} />
      ))}
    </ScrollView>
  );
};

export default PostsList;
