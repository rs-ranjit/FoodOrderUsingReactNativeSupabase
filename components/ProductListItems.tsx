import { StyleSheet, Text, Pressable, Image } from "react-native";
import Colors from "@/constants/Colors";
import { Product } from "@/types";
import { Link } from "expo-router";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          style={styles.img}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  img: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    color: Colors.light.tint,
  },
});
