import { Image, StyleSheet, Text, TextInput, View } from 'react-native'

import React from 'react'

const SearchBar = () => {
    return (
        <View style={styles.searchbarcontainer}>
            <View style={styles.searchbar}>
                <Image source={require('/Users/user/Desktop/womenapitask/women_ecommerce/assets/magnifying-glass.png')} style={styles.searchimage} />
                <TextInput
                    placeholder='What are you looking for?'
                    placeholderTextColor='gray'
                />
            </View>
        </View>

    )
}

export default SearchBar

const styles = StyleSheet.create({
    searchbarcontainer:{
        backgroundColor: '#ededed',
        height: 98
    },
    searchbar: {
        flexDirection: 'row',
        padding: 10,
        borderWidth: .2,
        borderRadius: 10,
        margin: 10,
        backgroundColor:"white",
        marginTop:15,

    },
    searchimage: {
        height: 23,
        width: 23,
        opacity:.7,
        marginRight:13
    }
})