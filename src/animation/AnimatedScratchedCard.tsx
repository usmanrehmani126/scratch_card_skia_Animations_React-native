import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScratchCardComponent from "../components/ScratchCardComponent";
import { useImage } from "@shopify/react-native-skia";

const AnimatedScratchedCard = () => {
  const image = useImage(require("../../assets/img.jpg"));
  if (!image) {
    return <Text>Loading</Text>;
  }
  return (
    <View style={{ margin: 12 }}>
      <Text style={styles.text}>
        Scratch Card Functionality with React Native Skia
      </Text>

      <ScratchCardComponent image={image} style={styles.scratchcard}>
        <View style={styles.card}>
          <Image
            source={require("../../assets/sr.jpeg")}
            style={styles.image}
          />
        </View>
      </ScratchCardComponent>
    </View>
  );
};

export default AnimatedScratchedCard;

const styles = StyleSheet.create({
  card: {
    padding: 20,
  },
  image: {
    width: 300,
    height: 500,
    borderRadius: 12,
    objectFit: "cover",
  },
  text: {
    fontSize: 18,
    padding: 4,
  },
  scratchcard: { borderRadius: 12 },
});
