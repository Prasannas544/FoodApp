import { View, Text, TouchableOpacity, Image, ScrollView, PanResponder } from 'react-native'
import React, { useRef, useState } from 'react'
import { ImageBackground } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';


import SavedRecipeCard from './SavedRecipeCard'
import data from '../data/data.json'

const SavedRecipe = ({ navigation }) => {
    const bookmarks = useSelector(state => state.bookmark.value);
    let filtered = data.filter(f => bookmarks.includes(f.name))
    const [savedRecipes, setSavedRecipes] = useState(filtered)

    const scrollViewRef = useRef(null);
    const [lastTapTime, setLastTapTime] = useState(0);


    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderTerminationRequest: () => false,
            onPanResponderRelease: (evt, gestureState) => {
                // Calculate the time elapsed since the last tap
                const currentTime = Date.now();
                const timeElapsed = currentTime - lastTapTime;

                // If the tap count is 2 and the time elapsed is less than 500ms, it's a double tap
                if (timeElapsed < 500) {
                    navigation.navigate('Recipe_Ingredient',data)
                    console.log('Double tap detected!');
                    // Reset tap count and last tap time
                    setLastTapTime(0);
                } else {
                    // Update tap count and last tap time
                    setLastTapTime(currentTime);
                }
            },
        })
    ).current;


    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style={{ paddingHorizontal: 30, paddingTop: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Poppins', fontSize: 18, fontWeight: 800, lineHeight: 27, color: '#121212', marginLeft: -5 }}>Saved Recipes</Text>
                    <View></View>
                </View>


                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                    <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false} vertical={true} contentContainerStyle={{ paddingBottom: 150, alignItems: 'center' }} >
                        {savedRecipes.map((item, i) => {
                            return (
                                <TouchableOpacity style={{ marginVertical: 10 }} key={i}  {...panResponder.panHandlers}>
                                    <SavedRecipeCard data={item} />
                                </TouchableOpacity>)
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
                        <TouchableOpacity >
                            <Image source={require('../assets/Active.png')} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>
                        <View></View>
                        <TouchableOpacity onPress={() => { navigation.navigate('Notifications') }}>
                            <Image source={require('../assets/notif.png')} style={{ width: 24, height: 24 }} />
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