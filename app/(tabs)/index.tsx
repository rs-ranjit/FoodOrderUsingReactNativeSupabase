import { View, ScrollView, FlatList, StyleSheet } from "react-native";
import products from "@/assets/data/products";
import ProductListItem from "@/components/ProductListItems";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <ProductListItem product={products[5]} />
        <ProductListItem product={products[1]} /> */}

        <FlatList
          data={products}
          renderItem={({ item }) => <ProductListItem product={item} />}
          numColumns={2}
          contentContainerStyle={{ gap: 10, padding: 10 }}
          columnWrapperStyle={{ gap: 10 }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
