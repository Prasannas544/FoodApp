import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


const SearchResultCard = () => {
    return (
        <View>
            <ImageBackground style={{
                width: 150, height: 150, margin: 7, borderRadius: 10,
            }} source={require('../assets/searchR.png')}>
                <LinearGradient colors={['rgba(0, 0, 0, 0)', '#000000']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }} style={{ flex: 1, borderRadius: 10 }}>

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
                    <View style={{ position: 'absolute', bottom: 0, padding: 10 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 11, lineHeight: 16, fontFamily: 'Poppins', fontWeight: 800 }}>
                            Traditional spare ribs baked</Text>
                        <Text style={{ color: '#A9A9A9', fontSize: 8, lineHeight: 12, fontFamily: 'Poppins', fontWeight: 400 }}>
                            By Chef John</Text>
                    </View>

                </LinearGradient>
            </ImageBackground>
        </View>

    )
}

export default SearchResultCard