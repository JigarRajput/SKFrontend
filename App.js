import { StyleSheet, Text, View, Platform, SafeAreaView, StatusBar, ScrollView, Image } from 'react-native';
import CategoryCards from './components/CategoryCards';
import LocationHeaderComponent from './components/LocationHeaderComponent';
import SearchBar from './components/SearchBar';
import { ImageSlider } from "react-native-image-slider-banner";
import gardening from './assets/gardening.png'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        stickyHeaderIndices={[1]}
        stickyHeaderHiddenOnScroll={false}>
        <LocationHeaderComponent />
        <SearchBar />
        <CategoryCards />
        <View style={styles.separator} />
        <View style={styles.imgSliderContainer}>
          <ImageSlider
            data={[
              { img: require('./assets/cooking.png') },
              { img: require('./assets/gardening.png') },
              { img: require('./assets/house_keeping.png') },
            ]}
            localImg={true}
            autoPlay={true}
            timer={2500}
            caroselImageStyle={{ borderRadius: 10, maxHeight: 220, maxWidth: '96%', marginVertical: 10, alignSelf: 'center' }}
            indicatorContainerStyle={{ marginVertical: 0, position: 'relative', bottom: 0 }}
          />
        </View>
        <View style={styles.separator} />
        <View style={{ width: '100%', height: 200 }}>
          {/* <View>
              <Text>Refer and get free services</Text>
              <Text>Invite and get 300*</Text>
          </View> */}

          <Image style={{ width: '100%', height: 200 }} source={require('./assets/refer.png')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  separator: {
    height: 10,
    width: '100%',
    backgroundColor: '#ebebeb',
    marginTop: 10
  },
  imgSliderContainer: {
    paddingHorizontal: 10,
    height: 250
  }
});
