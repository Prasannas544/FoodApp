import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

var img
const SavedRecipeCard = ({ data }) => {
    const navigation = useNavigation()
    const imageSelector = () => {
        if (data?.img == 'searchR1') {
            img = require('../assets/searchR1.png')
        }
        if (data?.img == 'searchR2') {
            img = require('../assets/searchR2.png')
        }
        if (data?.img == 'searchR3') {
            img = require('../assets/searchR3.png')
        }
        if (data?.img == 'searchR4') {
            img = require('../assets/searchR4.png')
        }
    }
    imageSelector()

    var lastTap = null;
    handleDoubleTap = () => {
        const now = Date.now();
        if (lastTap && (now - lastTap) < 300) {
            // Handle double tap event
            navigation.navigate('Recipe_Ingredient', data)
        } else {
            lastTap = now;
        }
    };


    return (
        <TouchableOpacity activeOpacity={1} onPress={handleDoubleTap} style={{ marginVertical: 10 }}>

            <View style={{ borderRadius: 10, overflow: 'hidden' }}  >
                <ImageBackground style={{
                    width: 315, height: 150
                }} source={img}>
                    <LinearGradient colors={['rgba(0, 0, 0, 0)', '#000000']}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }} style={{ flex: 1 }}>

                        <View style={{ display: 'flex', flexDirection: 'column', padding: 10, justifyContent: 'space-between' }}>
                            <View style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                                <View style={{
                                    paddingHorizontal: 7, paddingVertical: 3,
                                    backgroundColor: '#FFE1B3', gap: 5, borderRadius: 20, display: 'flex', flexDirection: 'row', alignItems: 'center'
                                }}>
                                    <Image source={require('../assets/star.png')} style={{ height: 10, width: 10 }} />
                                    <Text style={{ color: '#000000', fontSize: 11, lineHeight: 16, fontFamily: 'Poppins' }}>{data.rating}</Text>
                                </View>
                            </View>


                        </View>
                        <View style={{ position: 'absolute', bottom: 0, padding: 10, width: '100%' }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 14, lineHeight: 21, fontFamily: 'Poppins', fontWeight: 700 }}>
                                {data.name}</Text>


                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ color: '#D9D9D9', fontSize: 8, lineHeight: 12, fontFamily: 'Poppins', fontWeight: 400 }}>
                                    By Chef {data.chef}
                                </Text>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../assets/timer.png')} style={{ height: 17, width: 17 }} />

                                    <Text style={{
                                        color: '#A9A9A9', fontSize: 11, lineHeight: 16, fontWeight: 400, fontFamily: 'Poppins',
                                        paddingLeft: 5, paddingRight: 10, textAlign: 'left'
                                    }}>{data.time} mins</Text>
                                    <View>
                                        <TouchableOpacity style={{ backgroundColor: '#FFF', padding: 4, borderRadius: 50 }}>
                                            <Image source={require('../assets/Bookmarked.png')} style={{ width: 16, height: 16 }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </LinearGradient>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}

export default SavedRecipeCard