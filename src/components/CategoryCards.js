// jai Ganesh
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import CategoryCard from "./CategoryCard";
import serviceCategories from "../constants/serviceCategories";
// icons colors #6C4CFB - violet

function CategoryCards() {
  return (
    <View style={styles.cardContainer}>
      <CategoryCard serviceCategory={serviceCategories[0].label} />
      <CategoryCard serviceCategory={serviceCategories[1].label} />
      <CategoryCard serviceCategory={serviceCategories[2].label} />
      <CategoryCard serviceCategory={serviceCategories[3].label} />
      <CategoryCard serviceCategory={serviceCategories[4].label} />
      <CategoryCard serviceCategory={serviceCategories[5].label} />
      <CategoryCard serviceCategory={serviceCategories[6].label} />
      <CategoryCard
        serviceCategory={serviceCategories[7].label}
        numberOfLines={1}
      />
      <CategoryCard serviceCategory={serviceCategories[8].label} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    columnGap: 10,
    flexWrap: "wrap",
    rowGap: 10,
    alignContent: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
});

export default CategoryCards;
