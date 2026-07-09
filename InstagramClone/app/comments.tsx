import React, { useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

type Comment = {
  id: number;
  username: string;
  comment: string;
};

export default function CommentsScreen() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      username: "roberto",
      comment: "Excelente publicación 🔥",
    },
    {
      id: 2,
      username: "usuario1",
      comment: "Me gustó mucho.",
    },
  ]);

  const [text, setText] = useState("");

  function publishComment() {
    if (text.trim() === "") return;

    const newComment: Comment = {
      id: Date.now(),
      username: "Tú",
      comment: text,
    };

    setComments([...comments, newComment]);
    setText("");
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.commentContainer}>
            <Text style={styles.username}>
              {item.username}
            </Text>

            <Text>{item.comment}</Text>
          </View>
        )}
      />

      <View style={styles.footer}>
        <TextInput
          placeholder="Escribe un comentario..."
          value={text}
          onChangeText={setText}
          style={styles.input}
        />

        <TouchableOpacity onPress={publishComment}>
          <Text style={styles.button}>
            Publicar
          </Text>
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

  commentContainer: {
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },

  username: {
    fontWeight: "bold",
    marginBottom: 4,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 0.5,
    borderColor: "#ddd",
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
  },

  button: {
    marginLeft: 15,
    color: "#0095F6",
    fontWeight: "bold",
  },
});