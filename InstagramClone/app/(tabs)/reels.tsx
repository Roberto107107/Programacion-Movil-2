import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View,
} from "react-native";

const reels = Array.from({ length: 10 }, (_, i) => ({
  id: i.toString(),
}));

export default function ReelsScreen() {
  return (
    <FlatList
      pagingEnabled
      data={reels}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.video}>
          <Text style={styles.text}>
            Reel #{item.id}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  video: {
    height: 700,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
});