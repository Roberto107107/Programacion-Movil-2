import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

export default function PostCard({ post }) {
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
        />
      </View>

      {/* Imagen */}
      <Image
        source={{ uri: post.image }}
        style={styles.image}
      />

      {/* Iconos */}
      <View style={styles.actions}>
        <View style={styles.leftIcons}>
          <Ionicons
            name="heart-outline"
            size={28}
          />

          <Ionicons
            name="chatbubble-outline"
            size={27}
            style={{ marginLeft: 15 }}
          />

          <Ionicons
            name="paper-plane-outline"
            size={27}
            style={{ marginLeft: 15 }}
          />
        </View>

        <Ionicons
          name="bookmark-outline"
          size={27}
        />
      </View>

      {/* Likes */}
      <Text style={styles.likes}>
        {post.likes} Me gusta
      </Text>

      {/* Descripción */}
      <Text style={styles.description}>
        <Text style={styles.username}>
          {post.username}
        </Text>{" "}
        {post.description}
      </Text>

      <Text style={styles.comments}>
        Ver comentarios
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
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
  },

  image: {
    width: "100%",
    height: 400,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingTop: 10,
  },

  leftIcons: {
    flexDirection: "row",
  },

  likes: {
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 12,
  },

  description: {
    marginTop: 6,
    marginHorizontal: 12,
  },

  comments: {
    marginTop: 5,
    marginHorizontal: 12,
    color: "gray",
    marginBottom: 10,
  },
});