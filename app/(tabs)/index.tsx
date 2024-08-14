import { View, Text, Button } from "react-native";
import {
  useGlobalSearchParams,
  Link,
  useFocusEffect,
  router,
} from "expo-router";
import { useCallback } from "react";

export default function Page1() {
  const { query } = useGlobalSearchParams<{ query?: string }>();

  useFocusEffect(
    useCallback(() => {
      console.log("useFocusEffect ", query);
      const id = setTimeout(() => {
        router.setParams({ query: undefined });
      }, 1000);
      return () => clearTimeout(id);
    }, [query])
  );

  return (
    <View style={{ flex: 1, gap: 8 }}>
      <Text>Home page</Text>
      <Text>
        This page has a useFocusEffect that will clear the 'query' search
        parameter after 1 second.
      </Text>
      <Text>
        Unfortunately, this doesn't work if the route that we navigated here
        from isn't in the same navigator as this route.
      </Text>
      <Text>query value: {query}</Text>
      <Link href="/workingPage" asChild>
        <Button title={"Go to working page"} />
      </Link>
      <Link href="/brokenPage" asChild>
        <Button title={"Go to broken page"} />
      </Link>
    </View>
  );
}
