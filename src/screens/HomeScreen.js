import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import CategoryCards from "../components/CategoryCards";
import LocationHeaderComponent from "../components/LocationHeaderComponent";
import SearchBar from "../components/SearchBar";
import { ImageSlider } from "react-native-image-slider-banner";
import { SafeAreaView } from "react-native";
import { homeScreenStyles } from "../styles/HomeScreenStyles";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={homeScreenStyles.container}>
      <ScrollView stickyHeaderIndices={[1]} stickyHeaderHiddenOnScroll={false}>
        <LocationHeaderComponent />
        <SearchBar />
        <CategoryCards />
        <View style={homeScreenStyles.separator} />
        <View style={homeScreenStyles.imgSliderContainer}>
          <ImageSlider
            data={[
              { img: require("../assets/cooking.png") },
              { img: require("../assets/gardening.png") },
              { img: require("../assets/house_keeping.png") },
            ]}
            localImg={true}
            autoPlay={true}
            timer={2500}
            caroselImageStyle={{
              borderRadius: 10,
              maxHeight: 220,
              maxWidth: "96%",
              marginVertical: 10,
              alignSelf: "center",
            }}
            indicatorContainerStyle={{
              marginVertical: 0,
              position: "relative",
              bottom: 0,
            }}
          />
        </View>
        <View style={homeScreenStyles.separator} />
        <View style={{ width: "100%", height: 200 }}>
          <Image
            style={{ width: "100%", height: 200 }}
            source={require("../assets/refer.png")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
