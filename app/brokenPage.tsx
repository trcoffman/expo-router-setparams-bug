import { View, Text, Button } from "react-native";
import { Link, useFocusEffect, router } from "expo-router";
import { useCallback } from "react";

export default function BrokenPage() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Broken Page</Text>
      <Button
        onPress={() => {
          router.navigate("/?query=123");
        }}
        title={"Go back to home page and set search param query to 123"}
      />
    </View>
  );
}
