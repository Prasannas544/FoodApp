import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ImageBackground } from 'react-native'
import SavedRecipeCard from './SavedRecipeCard'
import data from '../data/data.json'

const SavedRecipe = ({ navigation }) => {

    const [myRecipes, setMyRecipes] = useState(data)
    const [filter, setfilter] = useState(['Recipe', 'Videos', 'Tag'])
    const [selectedF, setSelectedF] = useState('Recipe')


    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style={{ paddingHorizontal: 30, paddingTop: 10 }}>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Poppins', fontSize: 18, fontWeight: 800, lineHeight: 27, color: '#121212', marginLeft: -5 }}>Notifications</Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <View style={{ width: '100%', display: 'flex', padding: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View >
                            <Image source={require('../assets/rando_dp.png')} style={{ width: 99, height: 99, borderRadius: 50 }} resizeMode='contain' />
                        </View>
                        <View>
                            <Text style={{ fontFamily: 'Poppins', fontSize: 11, fontWeight: 400, lineHeight: 16, color: '#A9A9A9', }}>Recipe</Text>
                            <Text style={{ fontFamily: 'Poppins', fontSize: 20, fontWeight: 700, lineHeight: 30, color: '#121212', }}>4</Text>
                        </View>
                        <View>
                            <Text style={{ fontFamily: 'Poppins', fontSize: 11, fontWeight: 400, lineHeight: 16, color: '#A9A9A9', }}>Followers</Text>
                            <Text style={{ fontFamily: 'Poppins', fontSize: 20, fontWeight: 700, lineHeight: 30, color: '#121212', }}>2.5M</Text>
                        </View>
                        <View>
                            <Text style={{ fontFamily: 'Poppins', fontSize: 11, fontWeight: 400, lineHeight: 16, color: '#A9A9A9', }}>Following</Text>
                            <Text style={{ fontFamily: 'Poppins', fontSize: 20, fontWeight: 700, lineHeight: 30, color: '#121212', }}>269</Text>
                        </View>
                    </View>
                    <View style={{ padding: 5 }}>
                        <Text style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: 700, lineHeight: 24, color: '#121212', }}>Afuwape Abiodun</Text>
                        <Text style={{ fontFamily: 'Poppins', fontSize: 11, fontWeight: 400, lineHeight: 16, color: '#A9A9A9', }}>Chef</Text>
                    </View>
                    <View style={{ padding: 5 }}>
                        <Text style={{ fontFamily: 'Poppins', fontSize: 11, fontWeight: 400, lineHeight: 16, color: '#797979', }}>
                            Private Chef
                        </Text>
                        <Text style={{ fontFamily: 'Poppins', fontSize: 11, fontWeight: 400, lineHeight: 16, color: '#797979', }}>
                            Passionate about food and life 🥘🍲🍝🍱
                        </Text>
                    </View>
                </View>


            </View>

            <View style={{ marginTop: 15, paddingHorizontal: 30 }}>
                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'stretch' }} >
                    {filter.map((item, i) => {
                        return (
                            <>{item == selectedF ?
                                <TouchableOpacity key={i} style={{
                                    flexGrow: 1, backgroundColor: '#129575', borderRadius: 10,
                                    paddingVertical: 7, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <View style={{}}>
                                        <Text style={{ color: '#FFF', fontFamily: 'Poppins', fontStyle: 'normal', fontSize: 11, lineHeight: 16, fontWeight: 600, textAlign: 'center' }}>
                                            {item}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity key={i} onPress={() => setSelectedF(item)} style={{
                                    flexGrow: 1, backgroundColor: '#FFF', borderRadius: 10,
                                    paddingVertical: 7, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <View style={{}}>
                                        <Text style={{ color: '#129575', fontFamily: 'Poppins', fontStyle: 'normal', fontSize: 11, lineHeight: 16, fontWeight: 600, textAlign: 'center' }}>
                                            {item}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            }

                            </>
                        )
                    })}
                </View>
                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                    <ScrollView showsVerticalScrollIndicator={false} vertical={true} contentContainerStyle={{ paddingBottom: 150, alignItems: 'center' }} >
                        {myRecipes.map((item, i) => {
                            return (
                                <View style={{ marginVertical: 10 }} key={i}>
                                    <SavedRecipeCard data={item} />
                                </View>)
                        })}
                    </ScrollView>
                </View>

            </View>


            {/* Bottom Navbar */}
            <View style={{ position: 'absolute', bottom: 0, right: 0, left: 0 }}>
                <View style={{ display: 'flex', alignSelf: 'center' }}>

                    <TouchableOpacity style={{
                        width: 48, height: 48, borderRadius: 24, backgroundColor: '#129575', marginBottom: -10,
                        display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Image source={require('../assets/Plus.png')} style={{ height: 21, width: 21 }} />
                    </TouchableOpacity>
                </View>
                <View>
                    <ImageBackground source={require('../assets/Bg.png')} style={{ width: '100%', height: 60, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingTop: 12 }} >
                        <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
                            <Image source={require('../assets/Home.png')} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('SavedRecipe') }}>
                            <Image source={require('../assets/Inactive.png')} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>
                        <View></View>
                        <TouchableOpacity onPress={() => { navigation.navigate('Notifications') }}>
                            <Image source={require('../assets/notif.png')} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image source={require('../assets/profile_active.png')} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>

            </View>
        </View >
    )
}

export default SavedRecipe