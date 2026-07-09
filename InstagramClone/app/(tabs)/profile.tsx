import React from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
} from "react-native";

const posts = Array.from({ length: 18 }, (_, i) => ({
  id: i.toString(),
  image: `https://picsum.photos/400/400?random=${50 + i}`,
}));

export default function ProfileScreen() {
  return (
    <FlatList
      data={posts}
      numColumns={3}
      ListHeaderComponent={() => (
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://i.pravatar.cc/150?img=8",
            }}
            style={styles.avatar}
          />

          <Text style={styles.username}>
            roberto_dev
          </Text>

          <View style={styles.stats}>
            <View>
              <Text style={styles.number}>18</Text>
              <Text>Posts</Text>
            </View>

            <View>
              <Text style={styles.number}>210</Text>
              <Text>Seguidores</Text>
            </View>

            <View>
              <Text style={styles.number}>150</Text>
              <Text>Siguiendo</Text>
            </View>
          </View>
        </View>
      )}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },

  username: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20,
  },

  stats: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  number: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },

  image: {
    width: "33.33%",
    aspectRatio: 1,
  },
});