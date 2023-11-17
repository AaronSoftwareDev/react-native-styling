import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function StylishCards() {
  return (
    <View>
      <Text style={styles.headingText}>Victoria Falls</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
        source={require('../assets/image1.jpg')}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          
            
            <Text style={styles.cardDescription}>Zambia's Victoria Falls: Where Nature Roars in Majesty!</Text>
            
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
    card: {
        width: 350,
        
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
        alignSelf:'center'
        
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 2,
       
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
        
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {
        color: '#000000'
    }

})