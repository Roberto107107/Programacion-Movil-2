import { Stack } from "expo-router";
import { useEffect } from "react";

import { initDatabase } from "../src/database/database";

export default function RootLayout() {

  useEffect(() => {

    async function loadDatabase(){

      await initDatabase();

    }

    loadDatabase();

  }, []);

  return (

    <Stack>

      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown:false
        }}
      />

      <Stack.Screen
        name="comments"
        options={{
          title:"Comentarios"
        }}
      />

    </Stack>

  );

}