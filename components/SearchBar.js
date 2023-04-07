// jai Ganesh
import React from 'react'
import { TextInput, View, StyleSheet, Image } from 'react-native'

function SearchBar() {
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Image
                    style={{ width: 20, height: 20, marginEnd: 10 }}
                    source={require("../assets/search_icon.png")} />
                <TextInput
                    placeholder='search for services...'
                    // inlineImageLeft={require('../assets/search_icon.png')}
                    style={{ width: '80%', backgroundColor: 'white' }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 8,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: 'white',

    },
    searchBar: {
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        borderStyle: 'solid',
        // borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#636363',
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 10,
    }
})

export default SearchBar