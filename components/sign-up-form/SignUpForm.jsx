import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
// import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from "expo-image-picker";

import styles from "./sign-up-form.style";
import { useState } from "react";

const SignUpForm = ({
  email,
  setEmail,
  password,
  setPassword,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  username,
  setUsername,
  setImage,
  image,
}) => {
	const [profileImg, setProfileImg] = useState('https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png');

  const pickImage = async () => {

		let result = await ImagePicker.launchImageLibraryAsync({
			quality: 0.5
		})

		if (result.canceled) {
			console.log("User cancelled image picker");
		} else {
			setImage(result.assets[0].uri)
			setProfileImg(result.assets[0].uri)
			// console.log(result.assets[0])
		}
  };

  return (
    <View style={styles.container}>
			<TouchableOpacity onPress={pickImage}>
				<Image style={styles.img} source={{uri: profileImg}}/>
			</TouchableOpacity>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
				style={styles.textInput}
      />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail}
			style={styles.textInput} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
				style={styles.textInput}
        secureTextEntry
      />
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
				style={styles.textInput}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
				style={styles.textInput}
      />

      {/* <TouchableOpacity onPress={pickImage} style={styles.pickImgBtn}>
        <Text style={styles.btnText}>Select a Profile Photo</Text>
      </TouchableOpacity>
      {image && <Image source={{uri: image}} style={styles.img} />} */}
    </View>
  );
};

export default SignUpForm;
