import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native-elements'


const Home = () => {
 
    const [cuisine, setcuisine] = useState(['Indian', 'Chinese', 'Italian', 'Spanish'])
    const [selectedcuisine, setselectedcuisine] = useState(['All'])

    return (
        <View style={{ flex: 1, paddingTop: 20, }}>
            <View style={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25 }}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: '600', fontFamily: 'Poppins', lineHeight: 30, color: '#000000' }}>Hello Fola</Text>
                    <Text style={{ fontSize: 11, fontWeight: '400', fontFamily: 'Poppins', lineHeight: 16, color: '#A9A9A9' }}>What are you cooking today ?</Text>
                </View>
                <View><Image source={require('../assets/Avatar.png')} style={{ width: 50, height: 50 }} /></View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', borderColor: '#D9D9D9', borderWidth: 1, borderRadius: 10, backgroundColor: '#FFFFFF', minWidth: '70%', paddingLeft: 10 }}>
                    <Image source={require('../assets/search-normal.png')} style={{ width: 18, height: 18 }} />
                    <TextInput style={{ padding: 10, height: 40 }} placeholderTextColor='#D9D9D9' placeholder='Search recipe'></TextInput>
                </View>
                <TouchableOpacity style={{ paddingHorizontal: 5 }} >
                    <View style={{ backgroundColor: '#129575', borderRadius: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                        <Image source={require('../assets/setting-4.png')} resizeMode='contain' style={{ height: 20, width: 20 }} />

                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 25, flex: 1, display: 'flex', flexDirection: 'row', paddingHorizontal: 25 }} >
                {selectedcuisine.map((item, i) => {
                    return (
                        <TouchableOpacity key={i}>
                            <View style={{ backgroundColor: '#129575', borderRadius: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 7, paddingHorizontal: 20 }}>
                                <Text style={{ color: '#FFF', fontFamily: 'Poppins', fontStyle: 'normal', fontSize: 11, lineHeight: 16, fontWeight: 600, textAlign: 'center' }}>
                                    {item}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
                {cuisine.map((item, i) => {
                    return (
                        <TouchableOpacity key={i}>
                            <View style={{ backgroundColor: '#FFFFFF', borderRadius: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 7, paddingHorizontal: 20 }}>
                                <Text style={{ color: '#129575', fontFamily: 'Poppins', fontStyle: 'normal', fontSize: 11, lineHeight: 16, fontWeight: 600, textAlign: 'center' }}>
                                    {item}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View style={{ flex: 3, display: 'flex', flexDirection: 'row', paddingHorizontal: 25 }}>
         
            </View>
            <View style={{ flex: 3, display: 'flex', flexDirection: 'row', paddingHorizontal: 25 }}></View>
            <View style={{ flex: 1, marginBottom: 15 }}>
                <View style={{ display: 'flex', alignSelf: 'center' }}>

                    <TouchableOpacity style={{
                        width: 48, height: 48, borderRadius: 24, backgroundColor: '#129575', marginBottom: -10,
                        display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Image source={require('../assets/Plus.png')} style={{ height: 21, width: 21 }} />
                    </TouchableOpacity>
                </View>

                <View>

                    <Image source={require('../assets/Bg.png')} style={{ width: '100%', height: 50, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingTop: 12 }} >
                        <TouchableOpacity>
                            <Image source={require('../assets/Home.png')} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assets/Inactive.png')} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>
                        <View></View>

                        <TouchableOpacity>
                            <Image source={require('../assets/notif.png')} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assets/profile.png')} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>



                    </Image>
                </View>

            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})