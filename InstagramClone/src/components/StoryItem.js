import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    View
} from "react-native";

export default function StoryItem({
    username,
    avatar
}){

    return(

        <View style={styles.container}>

            <Image
                source={{uri:avatar}}
                style={styles.avatar}
            />

            <Text
                numberOfLines={1}
                style={styles.name}
            >
                {username}
            </Text>

        </View>

    );

}

const styles=StyleSheet.create({

container:{
    alignItems:"center",
    marginHorizontal:8
},

avatar:{
    width:72,
    height:72,

    borderRadius:36,

    borderWidth:2.5,

    borderColor:"#E1306C"
},

name:{
    fontSize:12,

    marginTop:5,

    width:70,

    textAlign:"center"
}

});