import React from 'react'
import { TouchableOpacity } from 'react-native'
import { TouchableHighlight } from 'react-native'
import { Pressable, Text, StyleSheet, View, Image } from 'react-native'

function LocationHeaderComponent() {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => { }}>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Kashmir House</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10, marginTop: 8 }}>
                    <Text style={{ fontSize: 14 }}>Delhi</Text>
                    <Image
                        style={{ width: 15, height: 15 }}
                        source={require('../assets/location.png')} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // backgroundColor: '#d3d3d3aa',
        paddingTop: 25,
        paddingBottom: 15,
        paddingHorizontal: 20
    }
})



export default LocationHeaderComponent