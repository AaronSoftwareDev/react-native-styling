import {
    StyleSheet,
    Text, View, Linking, Image, TouchableOpacity
} from 'react-native'
import React from 'react'

export default function ActivityCard() {
    function openWebsite(websiteLink) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]} >
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        Designing Recat native components
                    </Text>
                </View>
                <Image
                     source={require('../assets/image3.jpg')}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer} >
                    <Text numberOfLines={3} style={styles.headerText}>
                        "I am a meticulous software developer, passionate about crafting efficient and innovative solutions through code. My dedication to continuous learning and problem-solving drives me to create robust software that empowers and enriches user experiences."
                    </Text>
                </View>
                <View style={styles.footerContainer} >
                    <TouchableOpacity>

                        <Text style={styles.socialLinks} >Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity

                    >
                        <Text style={styles.socialLinks}>Follow me</Text>
                    </TouchableOpacity>
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
        alignSelf: 'center',
        color:'#ffffff',
        alignSelf:'center'
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
        alignContent:'center'
    },
    elevatedCard: {
        backgroundColor: '#5DA3FA',
        elevation: 3,
        alignContent:'center',
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        color:'#ffffff',
        alignSelf:'center'
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6

    }

})