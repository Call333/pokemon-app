import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";



export default function CardGeneration(props) {
    const [limite, setLimite] = useState(0)
    const [offset, setOffSet] = useState(0)

    function att() {
        setLimite(props.limitPoke)
        setOffSet(props.offsetPoke)
        return limite, offset   
    }

    useEffect(() => {
        console.log(limite);
        console.log(offset);
    }, [limite])

    
    return (
        <>
            <TouchableOpacity onPress={att}>
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

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,

        backgroundColor: '#fff'
    },
    title: {
        fontWeight: '600'
    }
})