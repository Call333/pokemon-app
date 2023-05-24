import { View, Text, StyleSheet } from "react-native";
import CardGeneration from "../CardGeneration/CardGeneration";
import { useEffect } from "react";


function Home(){

    useEffect(
        () => {
            <Home></Home>
        }, []
    )
    return(
        <View style={styles.container}>
            <CardGeneration limitPoke={151} offsetPoke={0} generation={'1º Geração'} urlPhoto={'https://cdn.ome.lt/7tKZxleB7lUO1JuJtuPU7vWZirg=/770x0/smart/uploads/conteudo/fotos/Pokemon-G1-610x322.jpg'}></CardGeneration>
            <CardGeneration limitPoke={100} offsetPoke={151} generation={'2º Geração'} urlPhoto={'https://cdn.ome.lt/uM5rsW4WGpgHatmlImq16J76fgw=/770x0/smart/uploads/conteudo/fotos/Pokemon-G2-610x325.jpg'}></CardGeneration>
            <CardGeneration limitPoke={135} offsetPoke={251} generation={'3º Geração'} urlPhoto={'https://cdn.ome.lt/9l_1eVO3MWqTZbC-9NEcgu9Ko20=/770x0/smart/uploads/conteudo/fotos/Pokemon-G3-610x325.jpg'}></CardGeneration>
            <CardGeneration limitPoke={107} offsetPoke={386} generation={'4º Geração'} urlPhoto={'https://cdn.ome.lt/rCwpkWlgUW9s5fppkypRAzv19w0=/770x0/smart/uploads/conteudo/fotos/Pokemon-G4-610x325.jpg'}></CardGeneration>
            <CardGeneration limitPoke={156} offsetPoke={493} generation={'5º Geração'} urlPhoto={'https://cdn.ome.lt/m9yYg6gc2OAOS5RlCrIx50F1if8=/770x0/smart/uploads/conteudo/fotos/Pokemon-G5-610x325.jpg'}></CardGeneration>
            <CardGeneration limitPoke={72} offsetPoke={649} generation={'6º Geração'} urlPhoto={'https://cdn.ome.lt/Hwz_XX6MaIYqcutDbBGO30VumUw=/770x0/smart/uploads/conteudo/fotos/Pokemon-G6-610x325.jpg'}></CardGeneration>
        </View>
    )    
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
})

export default Home;