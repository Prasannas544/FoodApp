import { View, Text, ImageBackground, PanResponder, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const DOUBLE_TAP_DELAY = 300; // in milliseconds

const SavedRecipeCard = () => {
    const navigation = useNavigation()
    const lastTapRef = React.useRef(0);

    const panResponder = React.useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderTerminationRequest: () => false,
            onPanResponderRelease: (_, gestureState) => {
                const now = Date.now();

                if (now - lastTapRef.current <= DOUBLE_TAP_DELAY) {
                    navigation.navigate('Recipe_Ingredient')
                } else {
                    lastTapRef.current = now;
                }
            },
        })
    ).current;

    return (
        <View style={{ borderRadius: 10, overflow: 'hidden' }} {...panResponder.panHandlers} >
            <ImageBackground style={{
                width: 315, height: 150
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
                        <Text style={{ color: '#FFFFFF', fontSize: 14, lineHeight: 21, fontFamily: 'Poppins', fontWeight: 700 }}>
                            Traditional spare ribs baked</Text>


                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ color: '#D9D9D9', fontSize: 8, lineHeight: 12, fontFamily: 'Poppins', fontWeight: 400 }}>
                                By Chef John
                            </Text>
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

export default SavedRecipeCard