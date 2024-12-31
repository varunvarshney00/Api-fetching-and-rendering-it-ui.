import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import BigFlatlist from "../components/BigFlatlist";
import Footer from "../components/Footer";
import Categories from "../components/categories";

const App = () => {
  return (
    <SafeAreaView style={styles.maincontainer}>
      <Header />
      <SearchBar />
      <Categories />
      <ScrollView>
        <BigFlatlist />
      </ScrollView>
      <Footer />

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  maincontainer: {
    flex: 1
  }
})

export default App;