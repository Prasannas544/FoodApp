import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


const RecipeCard = () => {
    return (
        <View style={{ borderRadius: 10, overflow: 'hidden' }}>
            <ImageBackground style={{
                width: '100%', height: 150
            }} source={require('../assets/searchR.png')}>
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
                                <Text style={{ color: '#000000', fontSize: 11, lineHeight: 16, fontFamily: 'Poppins' }}>4.5</Text>
                            </View>
                        </View>


                    </View>
                    <View style={{ position: 'absolute', bottom: 0, padding: 10, width: '100%' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>

                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../assets/timer.png')} style={{ height: 17, width: 17 }} />

                                <Text style={{
                                    color: '#A9A9A9', fontSize: 11, lineHeight: 16, fontWeight: 400, fontFamily: 'Poppins',
                                    paddingLeft: 5, paddingRight: 10, textAlign: 'left'
                                }}>20 mins</Text>
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
    )
}

export default RecipeCard