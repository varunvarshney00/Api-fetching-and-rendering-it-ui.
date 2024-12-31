import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <SafeAreaView style={styles.headerstyle}>
            <View style={styles.headerviewstyle}>
                <View >

                </View>
                <Image
                    source={require('/Users/user/Desktop/womenapitask/women_ecommerce/assets/purse.png')}
                    style={styles.streetstyle}
                />
                <Image
                    source={require('/Users/user/Desktop/womenapitask/women_ecommerce/assets/shopping-bag.png')}
                    style={styles.bagstyle}
                />
            </View>

        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    headerstyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerviewstyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        alignContent:'center',
        alignItems:'center',
        flex:1,
        marginLeft:10,
        marginBottom:10
    },
    streetstyle:{
        height:50,
        width:120,
        resizeMode:'contain',
        marginLeft:53
    },
    bagstyle: {
        height: 29,
        width: 29,
        resizeMode:'contain',
        marginRight:30
    }
})