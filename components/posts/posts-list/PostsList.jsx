import { View, Text, ScrollView } from "react-native";

import FeedPost from "../feed-post/FeedPost";
import { images } from "../../../constants";

const posts = [
  {
    id: 1,
    profilePic: images.karishev,
    profileName: "karishev",
    date: "29 Mar",
    goal: "How to become a frontend developer",
    title: "Trying to figure out the design patterns used in Flutter.",
    content:
      "For the past couple days I have been working on figuring out what could be the best design pattern when developing an application in Flutter. I discovered that Kaisar and Zhomart...",
    likesNum: 243,
    commentsNum: 76,
  },
  {
    id: 2,
    profilePic: images.jackson,
    profileName: "jackson",
    date: "13 Apr",
    goal: "How to find a girlfriend",
    title: "Trying to figure out my looks",
    content: "What is happening in my life?",
    likesNum: 43889,
    commentsNum: 766,
  },
  {
    id: 3,
    profilePic: images.karishev,
    profileName: "karishev",
    date: "29 Mar",
    goal: "How to become a dickhead",
    title: "Trying to figure how to put this",
    content:
      "When developing an application in Flutter. I discovered that I am a dick",
    likesNum: 555,
    commentsNum: 76,
  },
  {
    id: 4,
    profilePic: images.karishev,
    profileName: "karishev",
    date: "29 Mar",
    goal: "How to become a frontend developer",
    title: "Trying to figure out the design patterns used in Flutter.",
    content:
      "For the past couple days I have been working on figuring out what could be the best design pattern when developing an application in Flutter. I discovered that Kaisar and Zhomart...",
    likesNum: 421,
    commentsNum: 55,
  },
];

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
