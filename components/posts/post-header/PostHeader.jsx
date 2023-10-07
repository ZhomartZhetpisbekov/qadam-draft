import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, icons, images } from "../../../constants";
import styles from "./post-header.style";

const PostHeader = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.postInfo}>
        <TouchableOpacity style={styles.profilePicBox}>
          <Image
            source={post.profilePic}
            style={styles.profilePic}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={styles.infoBox}>
          <View style={styles.infoTop}>
            <TouchableOpacity>
              <Text style={styles.profileName}>@{post.profileName}</Text>
            </TouchableOpacity>
            <Text style={{ color: COLORS.darkGray }}>·</Text>
            <Text style={{ color: COLORS.darkGray }}>{post.date}</Text>
          </View>
          <View style={styles.infoBottom}>
            <Text style={{ color: COLORS.gray }}>from</Text>
            <TouchableOpacity>
              <Text style={{ color: COLORS.white }}>{post.goal}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.infoBtn}>
        <Text style={styles.dots}>···</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostHeader;
