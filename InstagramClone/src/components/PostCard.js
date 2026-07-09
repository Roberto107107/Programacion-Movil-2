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

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  const toggleSave = () => {
    setSaved(!saved);
  };

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: post.avatar }}
            style={styles.avatar}
          />

          <Text style={styles.username}>
            {post.username}
          </Text>
        </View>

        <Ionicons
          name="ellipsis-horizontal"
          size={20}
          color="black"
        />
      </View>

      {/* Imagen */}
      <Image
        source={{ uri: post.image }}
        style={styles.image}
      />

      {/* Botones */}
      <View style={styles.actions}>
        <View style={styles.leftActions}>
          {/* Like */}
          <TouchableOpacity onPress={toggleLike}>
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={28}
              color={liked ? "#ED4956" : "black"}
            />
          </TouchableOpacity>

          {/* Comentarios */}
          <TouchableOpacity
            onPress={() => router.push("/comments")}
          >
            <Ionicons
              name="chatbubble-outline"
              size={27}
              style={styles.iconSpacing}
            />
          </TouchableOpacity>

          {/* Compartir */}
          <TouchableOpacity>
            <Ionicons
              name="paper-plane-outline"
              size={27}
              style={styles.iconSpacing}
            />
          </TouchableOpacity>
        </View>

        {/* Guardar */}
        <TouchableOpacity onPress={toggleSave}>
          <Ionicons
            name={saved ? "bookmark" : "bookmark-outline"}
            size={27}
            color="black"
          />
        </TouchableOpacity>
      </View>

      {/* Likes */}
      <Text style={styles.likes}>
        {likes} Me gusta
      </Text>

      {/* Descripción */}
      <Text style={styles.description}>
        <Text style={styles.username}>
          {post.username}{" "}
        </Text>
        {post.description}
      </Text>

      {/* Comentarios */}
      <TouchableOpacity
        onPress={() => router.push("/comments")}
      >
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
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  userInfo: {
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
    fontSize: 14,
  },

  image: {
    width: "100%",
    height: 420,
    resizeMode: "cover",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  leftActions: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconSpacing: {
    marginLeft: 15,
  },

  likes: {
    fontWeight: "bold",
    fontSize: 14,
    marginHorizontal: 12,
  },

  description: {
    marginTop: 6,
    marginHorizontal: 12,
    fontSize: 14,
  },

  comments: {
    marginTop: 8,
    marginHorizontal: 12,
    marginBottom: 12,
    color: "#777",
    fontSize: 14,
  },
});