import { Image, StyleSheet, Text, View } from "react-native";

export default function StoryItem({ username, avatar }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <Text numberOfLines={1} style={styles.text}>
        {username}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 8,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#ff3b8d",
  },
  text: {
    fontSize: 12,
    marginTop: 4,
    width: 70,
    textAlign: "center",
  },
});