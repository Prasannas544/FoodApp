import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'


const SplashScreen = ({ navigation }) => {

    const handlePress = () => {
        // navigation.navigate('login')
    }

    return (
        <ImageBackground style={styles.container}
            source={require('../assets/SplashScreen.jpg')}>
            <View style={styles.container}>
                {/* <Text> SplashScreen</Text> */}

                <View style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                    <Image source={require('../assets/chefhat.png')} resizeMode='contain' style={{ height: 79, width: 79 }} />
                    <Text style={{ fontFamily: 'Poppins', fontSize: 18, color: '#fff', fontWeight: 600 }}>100K+ Premium Recipe </Text>

                </View>
                <View style={{ flex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: 'Poppins', fontSize: 50, color: '#fff', fontWeight: 600 }}>Get</Text>
                    <Text style={{ fontFamily: 'Poppins', fontSize: 50, color: '#fff', fontWeight: 600 }}>Cooking</Text>
                    <Text style={{ fontFamily: 'Poppins', fontSize: 16, lineHeight: 24, color: '#fff', fontWeight: 400 }}>Simple way to find Tasty Recipe</Text>
                    <TouchableOpacity onPress={handlePress} style={{ marginTop: 30 }} >
                        <View style={{ backgroundColor: '#129575', borderRadius: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 15, paddingHorizontal: 50 }}>
                            <Text style={{ fontFamily: 'Poppins', fontSize: 16, color: '#fff', fontWeight: 600 }}>Start Cooking </Text>
                            <Image source={require('../assets/ArrowRight.png')} resizeMode='contain' style={{ height: 20, width: 20 }} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </ImageBackground>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'linear-gradient(179.98deg, rgba(0, 0, 0, 0.4) 0.01%, #000000 99.99%)',
        shadowOffset: { width: 0, height: 4 },
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4, // this property is needed for Android devices
      },
});