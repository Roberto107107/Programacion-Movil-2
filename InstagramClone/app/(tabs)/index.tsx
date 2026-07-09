import React from "react";

import {
  FlatList,
  SafeAreaView
} from "react-native";

import Header from "../../src/components/Header";

import StoryItem from "../../src/components/StoryItem";

import PostCard from "../../src/components/PostCard";

import { stories } from "../../src/data/stories";

import { posts } from "../../src/data/posts";

export default function FeedScreen(){

    const renderStories=()=>{

        return(

            <FlatList

                horizontal

                data={stories}

                keyExtractor={(item)=>item.id}

                renderItem={({item})=>(

                    <StoryItem

                        username={item.username}

                        avatar={item.avatar}

                    />

                )}

                showsHorizontalScrollIndicator={false}

                contentContainerStyle={{

                    paddingVertical:10,

                    paddingHorizontal:10

                }}

            />

        );

    }

    return(

        <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>

            <Header/>

            <FlatList

                data={posts}

                keyExtractor={(item)=>item.id}

                renderItem={({item})=>(

                    <PostCard post={item}/>

                )}

                ListHeaderComponent={renderStories}

                showsVerticalScrollIndicator={false}

            />

        </SafeAreaView>

    );

}