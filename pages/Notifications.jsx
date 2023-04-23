import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ImageBackground } from 'react-native'
import AlertCard from './AlertCard'

const SavedRecipe = ({ navigation }) => {

    const [today, settoday] = useState([1, 2, 3])
    const [filter, setfilter] = useState(['All', 'Read', 'Unread'])
    const [selectedF, setSelectedF] = useState('All')
    const [yesterday, setyesterday] = useState([1, 2, 3, 4, 5, 6, 7])

    const handleClick = (value) => {
        setSelectedF(value);
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style={{ paddingHorizontal: 30, paddingTop: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Poppins', fontSize: 18, fontWeight: 800, lineHeight: 27, color: '#121212', marginLeft: -5 }}>Notifications</Text>

                </View>

                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'stretch' }} >
                    {filter.map((item, i) => {
                        return (
                            <>
                                {item == selectedF ? <TouchableOpacity key={i} style={{
                                    flexGrow: 1, backgroundColor: '#129575',
                                    borderRadius: 10, paddingVertical: 7, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <View style={{}}>
                                        <Text style={{ color: '#FFF', fontFamily: 'Poppins', fontStyle: 'normal', fontSize: 11, lineHeight: 16, fontWeight: 600, textAlign: 'center' }}>
                                            {item}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => handleClick(item)} key={i} style={{
                                        flexGrow: 1, backgroundColor: '#FFF',
                                        borderRadius: 10, paddingVertical: 7, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <View style={{}}>
                                            <Text style={{ color: '#129575', fontFamily: 'Poppins', fontStyle: 'normal', fontSize: 11, lineHeight: 16, fontWeight: 600, textAlign: 'center' }}>
                                                {item}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>}
                            </>
                        )
                    })}
                </View>


                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                    <ScrollView showsVerticalScrollIndicator={false} vertical={true} contentContainerStyle={{ paddingBottom: 150, alignItems: 'center' }} >
                        <Text>Today</Text>
                        {today.map((item, i) => {
                            return (
                                <View style={{ marginVertical: 10 }} key={i}>
                                    <AlertCard />
                                </View>)
                        })}
                        <Text>Yeseterday</Text>
                        {yesterday.map((item, i) => {
                            return (
                                <View style={{ marginVertical: 10 }} key={i}>
                                    <AlertCard />
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
                        <TouchableOpacity >
                            <Image source={require('../assets/notif_active.png')} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('Profile') }}>
                            <Image source={require('../assets/profile.png')} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>

            </View>
        </View >
    )
}

export default SavedRecipe