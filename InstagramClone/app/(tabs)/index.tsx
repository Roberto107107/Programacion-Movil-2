import { FlatList, View } from "react-native";

import Header from "../../src/components/Header";
import PostCard from "../../src/components/PostCard";

import { posts } from "../../src/data/posts";

export default function FeedScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header />

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard post={item} />
        )}
      />
    </View>
  );
}