import React, { useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function CommentsScreen() {
  const [comment, setComment] = useState("");

  const [comments, setComments] = useState([
    {
      id: "1",
      user: "expo",
      text: "Excelente publicación 👏",
    },
    {
      id: "2",
      user: "react",
      text: "Muy buen proyecto 🔥",
    },
  ]);

  const addComment = () => {
    if (comment.trim() === "") return;

    setComments([
      ...comments,
      {
        id: Date.now().toString(),
        user: "Tú",
        text: comment,
      },
    ]);

    setComment("");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.comment}>
            <Text style={styles.user}>{item.user}</Text>
            <Text>{item.text}</Text>
          </View>
        )}
      />

      <View style={styles.footer}>
        <TextInput
          placeholder="Agregar un comentario..."
          style={styles.input}
          value={comment}
          onChangeText={setComment}
        />

        <TouchableOpacity onPress={addComment}>
          <Text style={styles.send}>Publicar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  comment: {
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },

  user: {
    fontWeight: "bold",
    marginBottom: 3,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 0.5,
    borderColor: "#ddd",
    padding: 10,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
  },

  send: {
    color: "#0095F6",
    fontWeight: "bold",
    marginLeft: 15,
  },
});