import {
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
    Animated,
  } from "react-native";
  import React, { useRef, useEffect } from "react";
  
  const Footer = () => {

    const fadeAnim = useRef(new Animated.Value(1)).current;
    const scaleAnim = useRef(new Animated.Value(1)).current;
  
    useEffect(() => {

      const animateNewIndicator = Animated.loop(
        Animated.parallel([

          Animated.sequence([
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 500,
              useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
              toValue: 1,
              duration: 200,
              useNativeDriver: true,
            }),
          ]),


          Animated.sequence([
            Animated.timing(scaleAnim, {
              toValue: 0,
              duration: 500,
              useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
              toValue: 1,
              duration: 600,
              useNativeDriver: true,
            }),
          ]),


        ])
      );
      animateNewIndicator.start();
  
      return () => animateNewIndicator.stop();
    }, [fadeAnim, scaleAnim]);




  
    return (
      <View style={styles.footer}>
        <View style={styles.iconcontainerstyle}>

          <TouchableOpacity>
            <Image
              source={require("/Users/user/Desktop/womenapitask/women_ecommerce/assets/home.png")}
              style={styles.streetstyle}
            />
          </TouchableOpacity>





          <TouchableOpacity style={styles.iconWrapper}>
            <Image
              source={require("/Users/user/Desktop/womenapitask/women_ecommerce/assets/categories.png")}
              style={styles.streetstyle}
            />

            <Animated.View
              style={[
                styles.catnewIndicator,
                {
                  opacity: fadeAnim,
                  transform: [{ scale: scaleAnim }],
                },
              ]}
            >
              <Image
                source={require("/Users/user/Desktop/womenapitask/women_ecommerce/assets/new.png")}
                style={styles.catnewImage}
              />
            </Animated.View>
          </TouchableOpacity>






          <TouchableOpacity style={styles.iconWrapper}>
            <Image
              source={require("/Users/user/Desktop/womenapitask/women_ecommerce/assets/school-bag.png")}
              style={styles.streetstyle}
            />
            <Animated.View
              style={[
                styles.newIndicator,
                {
                  opacity: fadeAnim,
                  transform: [{ scale: scaleAnim }],
                },
              ]}
            >
              <Image
                source={require("/Users/user/Desktop/womenapitask/women_ecommerce/assets/new.png")}
                style={styles.newImage}
              />
            </Animated.View>
          </TouchableOpacity>




          <TouchableOpacity>
            <Image
              source={require("/Users/user/Desktop/womenapitask/women_ecommerce/assets/heart.png")}
              style={styles.streetstyle}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("/Users/user/Desktop/womenapitask/women_ecommerce/assets/user.png")}
              style={styles.streetstyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default Footer;
  
  const styles = StyleSheet.create({
    footer: {
      backgroundColor: "white",
      height: 100,
      width: 430,
      zIndex: 3,
      position: "absolute",
      bottom: 0,
      flexDirection: "row",
    },
    iconcontainerstyle: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: 457,
      left: -8,
    },
    streetstyle: {
      height: 30,
      width: 30,
      marginTop: 20,
    },
    iconWrapper: {
      position: "relative",
    },
    newIndicator: {
      position: "absolute", 
      top: 40, 
      right: 0,
    },
    catnewIndicator: {
        position: "absolute", 
        top: 20, 
        right: 0,
      },
    newImage: {
      height: 15,
      width: 30,
    },
    catnewImage: {
        height: 10,
        width: 35,
        borderRadius:10,
      },
  });
  