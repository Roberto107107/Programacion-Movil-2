import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Instagram</Text>

      <View style={styles.right}>
        <Ionicons
          name="heart-outline"
          size={26}
          style={styles.icon}
        />

        <Ionicons
          name="paper-plane-outline"
          size={26}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",

    paddingHorizontal:15,
    paddingVertical:12,

    backgroundColor:"#fff",

    borderBottomWidth:.5,
    borderBottomColor:"#ddd"
  },

  logo:{
    fontSize:30,
    fontWeight:"700"
  },

  right:{
    flexDirection:"row",
    alignItems:"center"
  },

  icon:{
    marginRight:18
  }

});