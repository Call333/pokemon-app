import { Image, View, Text, StyleSheet } from "react-native";
import PokeApi from "../../services/PokeApi";
import { Pokemon } from "../../services/Pokemon";

function CardPoke(props) {
    return (
        <>
        <View style={styles.card} key={props.id}>
            <View style={styles.card__top}>
                <View style={styles.card_top_number}>
                    <Text>#{props.id}</Text>
                </View>
                <View style={styles.card_top_name}>
                    <Text style={{fontWeight: '600', textTransform: 'capitalize'}}>{props.nome}</Text>
                </View>
            </View>
            <View style={styles.card_bottom}>
                <View style={styles.types}>
                    <Text style={styles.type}>{props.type1}</Text>
                    <Text style={styles.type}>{props.type2}</Text>
                </View>
                <Image
                    source={{ uri: props.photo }}
                    style={{ height: 90, width: 90 }}
                />
            </View>
            {/* <PokeApi></PokeApi> */}
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#48C9B0',
        height: '9em',
        width: '10em',
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
        justifyContent: 'space-between',
        alignItems: 'center'
    },  
    types: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'capitalize',
        height: 40,
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
