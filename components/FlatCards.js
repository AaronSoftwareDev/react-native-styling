import {StyleSheet, Text, View} from 'react-native'
import { ReactDOM } from 'react'


export default function FlastCards (){
    return(
        <View>
          <Text style={styles.headingText}>Flast Cards</Text>
          <View style={styles.container}>
            <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
            </View>
            <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
            </View>
            <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
            </View>

          </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        alignSelf:'center'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8
    },
    cardOne: {
        backgroundColor: '#EF5354'
    },
    cardTwo: {
        backgroundColor: '#50DBB4'
    },
    cardThree: {
        backgroundColor: '#5DA3FA'
    }
})
