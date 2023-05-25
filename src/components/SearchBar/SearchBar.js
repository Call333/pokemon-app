import { View, TextInput, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.searchIcon}>
        <EvilIcons name="search" size={30} color="black" />
      </View>
      <TextInput style={styles.searchBar} placeholder="Pesquise..." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  searchBar: {
    margin: ".5em",
    borderRadius: 15,
    padding: "1em",
    width: "100%",
    height: 10,
    fontSize: 15,
    borderWidth: 0.2,
    fontFamily: "verdana",
  },
  searchIcon: {
    position: 'absolute',
    right: '1em'
  },
});

export default SearchBar;
