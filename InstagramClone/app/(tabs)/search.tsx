import React from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    TextInput,
    View,
} from "react-native";

const images = Array.from({ length: 30 }, (_, i) => ({
  id: i.toString(),
  image: `https://picsum.photos/400/400?random=${i + 1}`,
}));

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar"
        style={styles.search}
      />

      <FlatList
        data={images}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.image }}
            style={styles.image}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  search: {
    margin: 10,
    backgroundColor: "#efefef",
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 40,
  },

  image: {
    width: "33.33%",
    aspectRatio: 1,
  },
});