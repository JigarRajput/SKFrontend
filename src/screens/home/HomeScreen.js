import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import CategoryCards from "../../components/CategoryCards";
import LocationHeaderComponent from "../../components/LocationHeaderComponent";
import SearchBar from "../../components/SearchBar";
import { ImageSlider } from "react-native-image-slider-banner";
import { SafeAreaView } from "react-native";
import { homeScreenStyles } from "../../styles/HomeScreenStyles";
import { useRoute } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const routeParams = useRoute().params;
  console.log("route params obtained in Home Screen from login", routeParams);
  return (
    <SafeAreaView style={homeScreenStyles.container}>
      <ScrollView stickyHeaderIndices={[1]} stickyHeaderHiddenOnScroll={false}>
        {/* <LocationHeaderComponent userDetail={routeParams} /> */}
        <Text style={homeScreenStyles.welcomeText}>
          Welcome, {routeParams.user.fullName.split(" ")[0]}
        </Text>
        <SearchBar allProfiles={[]} setProfiles={() => {}} />
        <View style={homeScreenStyles.separator} />
        <View style={homeScreenStyles.imgSliderContainer}>
          <ImageSlider
            style={{ borderRadius: 10 }}
            data={[
              { img: require("../../assets/cooking.png") },
              { img: require("../../assets/gardening.png") },
              { img: require("../../assets/house_keeping.png") },
            ]}
            localImg={true}
            autoPlay={true}
            timer={2000}
            caroselImageStyle={{
              maxHeight: 220,
              maxWidth: "96%",
              marginVertical: 10,
              alignSelf: "center",
              resizeMode: "contain",
            }}
            indicatorContainerStyle={{
              marginVertical: 0,
              position: "relative",
              bottom: 0,
              borderRadius: 10,
            }}
          />
        </View>
        <View style={homeScreenStyles.separator} />
        <CategoryCards />
        <View style={{ width: "100%", height: 200 }}>
          <Image
            style={{ width: "100%", height: 200 }}
            source={require("../../assets/refer.png")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
