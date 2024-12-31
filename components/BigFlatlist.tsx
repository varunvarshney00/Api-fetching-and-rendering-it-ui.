import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
const jsonData = require('../constants/women.json')

const dataArray = jsonData.data;


const BigFlatlist = () => {

  const keyExtractor = useCallback((item) => `${item.index}`, []);

  const renderItem = ({ item }) => {

    switch (item?.type) {


      case 'banner':
        {
          return (
            <TouchableOpacity style={styles.bannerstyle}>
              <Image source={{ uri: item.items[0].url }} style={styles.bannerimagestyle} />
            </TouchableOpacity>
          )


        }




      case 'grid':
        {
          const isTrendingBuz = item.header?.title === "THE LATEST TREND BUZZ";

          return (
            <View style={styles.gridstyle}>
              <View style={styles.titlecontainer}>
                <Text style={styles.titlestyle}>{item.header?.title}</Text>
              </View>

              {isTrendingBuz ? (
                <FlatList
                  data={item.items}
                  numColumns={2}
                  renderItem={({ item: trendingitem }) => {
                    // console.log("trending item==>", trendingitem.url);
                    return (
                      <TouchableOpacity>
                        <Image source={{ uri: trendingitem.url }} style={styles.trendingstyle} />
                      </TouchableOpacity>
                    );
                  }}
                />
              ) : (
                <FlatList
                  numColumns={3}
                  data={item.items}
                  renderItem={inneritem => {
                    return (
                      <TouchableOpacity style={styles.eachimagecontainer}>
                        <Image source={{ uri: inneritem.item.url }} style={styles.gridsimagetyle} />
                      </TouchableOpacity>
                    )
                  }}
                />
              )}

            </View>
          )
        }




      case 'bannerSliderWithLabel':
        {
          return (
            <View>
              <View style={styles.titlecontainer}>
                <Text style={styles.titlestyle}>{item.title || item.header?.title}</Text>
              </View>
              <FlatList
                data={item.items}
                horizontal
                renderItem={trendingitem => {
                  // console.log("trending item==>", trendingitem.item.url)
                  return (
                    <TouchableOpacity>
                      <Image source={{ uri: trendingitem.item.url }} style={styles.freshstyle} />
                    </TouchableOpacity>
                  )
                }}
              />
            </View>
          )
        }




      default:
    }
  }





  return (
    <View style={styles.bodystyle}>
      <FlatList
        data={dataArray}
        renderItem={renderItem}
      />
    </View>

  )
}

export default BigFlatlist;

const styles = StyleSheet.create({
  gridstyle: {
    // padding: 20,
    alignItems: 'center',

  },
  titlecontainer: {
    width: '100%'
  },
  titlestyle: {
    fontWeight: '300',
    fontSize: 22,
    textAlign: 'left',
    marginLeft: 5,
    marginTop:10,
    letterSpacing: 3,

  },
  bannerstyle: {
    height: 193,
    width: "100%",
    alignContent: 'center',
  },
  bannerimagestyle: {
    height: 200,
    width: 387,
    alignContent: 'center'

  },
  eachimagecontainer: {
    height: 155,
  },
  headerstyle: {
    padding: 5
  },
  gridsimagetyle: {
    height: 140,
    margin: 4,
    width: 121,
    resizeMode: 'contain'

  },
  trendingstyle: {
    height: 280,
    width: 190,
    resizeMode: 'cover',
    marginBottom: 10,
    marginLeft:5,
    marginRight:5,
    marginTop:20
  },
  freshstyle: {
    height: 330,
    width: 190,
    resizeMode: 'contain',
    marginBottom: 10,
    marginTop:15
    // marginRight:5
  },
  bodystyle: {
    padding: 20,
  }
})
