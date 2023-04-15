import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const Recipes = () => {
    return (
        <View style={{ width: 251, height: 145, marginRight: 8, marginLeft: 2 }}>
            <View style={{
                elevation: 5,
                width: 251, height: 95, backgroundColor: '#FFFFFF', shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowOpacity: 0.1,
                shadowRadius: 20,
                borderRadius: 10, position: 'absolute', bottom: 10
            }}>
                <View style={{ position: 'absolute', height: 86, width: 79, marginTop: -35, alignSelf: 'flex-end' }} >
                    <Image source={require('../assets/Image.png')} style={{ height: 86, width: 79 }} />
                </View>

                <View>
                    <Text style={{
                        color: '#484848', fontSize: 16, lineHeight: 21, fontWeight: 700, fontFamily: 'Poppins',
                        paddingHorizontal: 10, paddingVertical: 10, textAlign: 'left'
                    }}>Steak with tomato...</Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', paddingLeft: 10, paddingBottom: 5, gap: 2 }}>
                    <Image source={require('../assets/star.png')} style={{ height: 10, width: 10 }} />
                    <Image source={require('../assets/star.png')} style={{ height: 10, width: 10 }} />
                    <Image source={require('../assets/star.png')} style={{ height: 10, width: 10 }} />
                    <Image source={require('../assets/star.png')} style={{ height: 10, width: 10 }} />
                    <Image source={require('../assets/star.png')} style={{ height: 10, width: 10 }} />
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingTop: 5 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/card_avatar.png')} style={{ height: 25, width: 25 }} />
                        <Text style={{
                            color: '#A9A9A9', fontSize: 11, lineHeight: 16, fontWeight: 400, fontFamily: 'Poppins',
                            paddingLeft: 10, textAlign: 'left'
                        }}>By James Zidane</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/timer.png')} style={{ height: 17, width: 17 }} />

                        <Text style={{
                            color: '#A9A9A9', fontSize: 11, lineHeight: 16, fontWeight: 400, fontFamily: 'Poppins',
                            paddingLeft: 10, textAlign: 'left'
                        }}>20 mins</Text>
                    </View>
                </View>


            </View>
        </View >
    )
}

export default Recipes