import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Categories = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.women}>WOMEN</Text>
            </TouchableOpacity>
            <TouchableOpacity><Text>MEN</Text></TouchableOpacity>
            <TouchableOpacity>
                <Text>KIDS</Text>

            </TouchableOpacity>
            <TouchableOpacity>
                <Text>PREMIUM</Text>

            </TouchableOpacity>
            <TouchableOpacity>
                <Text>INFLUENCER</Text>

            </TouchableOpacity>



        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 13,
        marginTop: 14
    },
    women:{
        fontWeight:'bold',
        textDecorationLine:'underline',
    }
})