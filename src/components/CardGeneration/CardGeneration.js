import { useContext, useState } from "react";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import MyContext from "../contexts/myContext";

export default function CardGeneration(props) {

    

    const [navivegacao, setNavi] = useState(props.navigation)

    const [limite, setLimite] = useState(props.limitPoke)
    const [offset, setOffSet] = useState(props.offsetPoke)

    function att() {
        navivegacao.push('Pokedex')
    }

    return (
        <>
            <TouchableOpacity onPress={att} key={props.keyId}>
                <View style={styles.container}>

                    <Text style={styles.title}>{props.generation}</Text>
                    <Image
                        style={{ height: '12em', width: '100%', borderRadius: '2em', }}
                        source={{ uri: props.urlPhoto }}
                    ></Image>

                </View>
            </TouchableOpacity>
        </>
        
    )
}

const styles = StyleSheet.create({
    container: {
        height: '14em',
        width: '22em',

        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        flexWrap: 'wrap',

        margin: 5,
        borderRadius: '2em',
        backgroundColor: '#fff',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
    },
    title: {
        fontWeight: '600'
    }
})