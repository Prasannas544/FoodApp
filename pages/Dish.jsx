import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const Dish = () => {
    return (
        <View style={{ width: 150, height: 231,marginRight:10}}>
            <View style={{ width: 150, height: 170, backgroundColor: '#D9D9D9', borderRadius: 12,position:'absolute',bottom:10}}>
                <View style={{ height: 110, width: 110, marginTop: -50, alignSelf: 'center' }} >
                    <Image source={require('../assets/Image.png')} style={{ height: 117, width: 110 }} />
                </View>
                <View style={{
                    top: -26, right: 0, position: 'absolute', paddingHorizontal: 7, paddingVertical: 3, backgroundColor: '#FFE1B3',
                    gap: 5, borderRadius: 20, display: 'flex', flexDirection: 'row', alignItems: 'center'
                }}>
                    <Image source={require('../assets/star.png')} style={{ height: 10, width: 10 }} />
                    <Text style={{ color: '#000000', fontSize: 11, lineHeight: 16, fontFamily: 'Poppins' }}>4.5</Text>
                </View>

                <View>
                    <Text style={{
                        color: '#484848', fontSize: 16, lineHeight: 21, fontWeight: 700, fontFamily: 'Poppins',
                        paddingHorizontal: 10, textAlign: 'center'
                    }}>Classic Greek Salad</Text>

                </View>
                {/* <View style={{ position: 'absolute', bottom: 13, }}> */}
                <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, }}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Text
                            style={{
                                color: '#A9A9A9', fontSize: 11, lineHeight: 16, fontWeight: 400, fontFamily: 'Poppins', marginBottom: 5
                            }}> Time</Text>
                        <Text style={{
                            color: '#484848', fontSize: 11, lineHeight: 16, fontWeight: 600, fontFamily: 'Poppins',
                        }}> 15 Mins</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{ backgroundColor: '#FFF', padding: 4, borderRadius: 50 }}>
                            <Image source={require('../assets/Inactive.png')} style={{ width: 16, height: 16 }} />
                        </TouchableOpacity>
                    </View>
                    {/* </View> */}
                </View>
            </View>
        </View >
    )
}

export default Dish