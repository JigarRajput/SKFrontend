// jai Ganesh
import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

// icons colors #6C4CFB - violet

function CategoryCards() {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <View style={styles.cardImgContainer}>
                    <Image style={styles.cardImg} source={require('../assets/painter.png')} />
                </View>
                <Text style={styles.cardText}>Home decors..</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.cardImgContainer}>
                    <Image style={styles.cardImg} source={require('../assets/house_keeping_icon.png')} />
                </View>
                <Text style={styles.cardText}>Home Keepers</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.cardImgContainer}>
                    <Image style={styles.cardImg} source={require('../assets/chef_icon.png')} />
                </View>
                <Text style={styles.cardText}>Cooks</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.cardImgContainer}>
                    <Image style={styles.cardImg} source={require('../assets/doctor.png')} />
                </View>
                <Text style={styles.cardText}>Physicians</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.cardImgContainer}>
                    <Image style={styles.cardImg} source={require('../assets/lawyer.png')} />
                </View>
                <Text style={styles.cardText}>Lawyers</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.cardImgContainer}>
                    <Image style={styles.cardImg} source={require('../assets/engineer.png')} />
                </View>
                <Text style={styles.cardText}>Contractors</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardImgContainer: {
        paddingHorizontal: 30,
        paddingVertical: 25,
        backgroundColor: '#ebebeb',
        borderRadius: 10
    },
    cardImg: {
        width: 50,
        height: 50,
    },
    cardText: {
        textAlign: 'center',
        paddingVertical: 2,
        paddingHorizontal: 10

    },
    card: {
        flexDirection: 'column',
        backgroundColor: 'white',
        rowGap: 4,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 2,

        // maxWidth: 
        // width: 
    },
    cardContainer: {
        flexDirection: 'row',
        columnGap: 10,
        flexWrap: 'wrap',
        rowGap: 10,
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 15
    }

})

export default CategoryCards