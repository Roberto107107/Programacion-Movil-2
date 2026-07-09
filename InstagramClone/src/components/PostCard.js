import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(post.liked);
  const [saved, setSaved] = useState(post.saved);
  const [likes, setLikes] = useState(post.likes);

  function toggleLike() {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  }

  function toggleSaved() {
    setSaved(!saved);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.user}>
          <Image source={{ uri: post.avatar }} style={styles.avatar} />
          <Text style={styles.username}>{post.username}</Text>
        </View>

        <Ionicons name="ellipsis-horizontal" size={22} />
      </View>

      <Image source={{ uri: post.image }} style={styles.image} />

      <View style={styles.actions}>
        <View style={styles.left}>
          <TouchableOpacity onPress={toggleLike}>
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={28}
              color={liked ? "#ED4956" : "#000"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              router.push("/comments")
            }
          >
            <Ionicons
              name="chatbubble-outline"
              size={27}
              style={styles.space}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons
              name="paper-plane-outline"
              size={27}
              style={styles.space}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={toggleSaved}>
          <Ionicons
            name={saved ? "bookmark" : "bookmark-outline"}
            size={27}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.likes}>{likes} Me gusta</Text>

      <Text style={styles.description}>
        <Text style={styles.username}>{post.username} </Text>
        {post.description}
      </Text>

      <TouchableOpacity onPress={() => router.push("/comments")}>
        <Text style={styles.comments}>
          Ver todos los comentarios
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 420,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  space: {
    marginLeft: 15,
  },
  likes: {
    fontWeight: "bold",
    marginHorizontal: 12,
  },
  description: {
    marginTop: 6,
    marginHorizontal: 12,
  },
  comments: {
    color: "#666",
    marginTop: 8,
    marginHorizontal: 12,
    marginBottom: 12,
  },
});