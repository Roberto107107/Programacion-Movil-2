import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Instagram</Text>

      <View style={styles.icons}>
        <Ionicons name="heart-outline" size={26} />
        <Ionicons
          name="paper-plane-outline"
          size={26}
          style={{ marginLeft: 18 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },

  logo: {
    fontSize: 28,
    fontWeight: "bold",
  },

  icons: {
    flexDirection: "row",
    alignItems: "center",
  },
});