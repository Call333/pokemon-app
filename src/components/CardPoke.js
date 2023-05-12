import { Image, View, Text, StyleSheet } from "react-native";


function CardPoke() {
    return (
        <View style={styles.card}>
            <View style={styles.card__top}>
                <View style={styles.card_top_number}>
                    <Text>#001</Text>
                </View>
                <View style={styles.card_top_name}>
                    <Text>Bulbasaur</Text>
                </View>
            </View>
            <View style={styles.card_bottom}>
                <View style={styles.types}>
                    <Text style={styles.type}>Grass</Text>
                    <Text style={styles.type}>Poison</Text>
                </View>
                <Image
                    source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' }}
                    style={{ height: 70, width: 70 }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#48C9B0',
        height: '90%',
        width: '45%',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        fontFamily: 'Segoi UI',
        margin: '2%',
    },
    card__top: {
        display: 'flex',
        flexDirection: 'column'
    },
    card_top_number: {
        textAlign: 'right',
    },
    card_top_name: { 
        
    },
    card_bottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },  
    types: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    type: {
        height: 15,
        width: 50,
        borderRadius: 12,
        backgroundColor: '#F9EBEA',
        marginBottom: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
    },
})

export default CardPoke;
