import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import { useClipboard } from '@react-native-community/clipboard'
import { useSelector, useDispatch } from 'react-redux';
import { addBm, removeBm } from '../redux/reducers/BookmarkSlice';
import { addRating, removeRating } from '../redux/reducers/RatingSlice';

import RecipeCard from './RecipeCard'
import ProcedureCard from './ProcedureCard'
import IngredientCard from './IngredientCard'

const Recipe_Ingredient = ({ navigation, route }) => {
    const bookmarks= useSelector(state => state.bookmark.value);
    const dispatch = useDispatch();
    const [clipboard_value, setString] = useClipboard();

    const [filter, setfilter] = useState(['Ingredient', 'Procedure'])
    const [selectedF, setselectedF] = useState('Ingredient')
    const [showModal, setShowModal] = useState(false)
    const [showRateModal, setShowRateModal] = useState(false)
    const [rating, setRating] = useState(5)
    const [showShareModal, setShowShareModal] = useState(false)

    const addBookmark = () => {
        dispatch(addBm(route.params.name))
    }
    const removeBookmark = () => {
        dispatch(removeBm(route.params.name));
    }

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    const toggleRateModal = () => {
        setShowRateModal(!showRateModal);
    };
    const toggleShareModal = () => {
        setShowShareModal(!showShareModal);
    };

    const copyToClipboard = () => {
        let text = 'www.applink_here.com' //url goes here
        setString(text);
        console.log(clipboard_value)
    };


    return (
        <View style={{ flex: 1, paddingHorizontal: 30, paddingTop: 10 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/arrow-left.png')} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleModal}>
                    <Image source={require('../assets/more.png')} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            </View>
            <View>
                <View style={{ paddingTop: 10, borderRadius: 10 }}>
                    <RecipeCard data={route.params} addBookmark={addBookmark} bookmarks={bookmarks} />
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10, width: '100%' }}>
                    <Text style={{ flex: 0.7, color: '#000000', fontSize: 14, lineHeight: 21, fontWeight: 700, fontFamily: 'Poppins', }}>{route.params.name}</Text>
                    <Text style={{ flex: 0.3, color: '#A9A9A9', fontSize: 14, lineHeight: 21, fontWeight: 400, fontFamily: 'Poppins' }}>
                        ( 13k reviews )</Text>
                </View>
            </View>

            <View style={{ paddingTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <View style={{ width: 40, height: 40, borderRadius: 20 }}>
                        <Image source={require('../assets/unplashDP.jpg')} style={{ width: 40, height: 40, borderRadius: 20 }} />

                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={{
                            color: '#121212', fontFamily: 'Poppins', fontStyle: 'normal',
                            fontSize: 14, lineHeight: 21, fontWeight: 700, textAlign: 'center'
                        }}>{route.params.chef}</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/location.png')} style={{ width: 17, height: 17 }} />

                            <Text style={{
                                color: '#A9A9A9', fontFamily: 'Poppins', fontStyle: 'normal',
                                fontSize: 11, lineHeight: 16, fontWeight: 400, textAlign: 'center'
                            }}>Delhi, India</Text>

                        </View>
                    </View>
                </View>
                <TouchableOpacity style={{ width: 85, backgroundColor: '#129575', borderRadius: 10, paddingVertical: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                    <View style={{}}>
                        <Text style={{ color: '#FFF', fontFamily: 'Poppins', fontStyle: 'normal', fontSize: 11, lineHeight: 16, fontWeight: 600, textAlign: 'center' }}>
                            Follow
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ paddingTop: 10 }}>
                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'stretch' }} >
                    {filter.map((item, i) => {
                        return (
                            <>{item == selectedF ?
                                <TouchableOpacity key={i} style={{ flexGrow: 1, backgroundColor: '#129575', borderRadius: 10, paddingVertical: 8, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                    <View style={{}}>
                                        <Text style={{ color: '#FFF', fontFamily: 'Poppins', fontStyle: 'normal', fontSize: 11, lineHeight: 16, fontWeight: 600, textAlign: 'center' }}>
                                            {item}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => setselectedF(item)} key={i} style={{
                                    flexGrow: 1, backgroundColor: '#FFF', borderRadius: 10, paddingVertical: 8,
                                    display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <View style={{}}>
                                        <Text style={{ color: '#129575', fontFamily: 'Poppins', fontStyle: 'normal', fontSize: 11, lineHeight: 16, fontWeight: 600, textAlign: 'center' }}>
                                            {item}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            }</>
                        )
                    })}
                </View>
            </View>
            <View style={{ paddingTop: 10, display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                    <Image source={require('../assets/Icon.png')} style={{ width: 17, marginRight: 5 }} resizeMode='contain' />
                    <Text >1 serve</Text>
                </View>
                {selectedF == 'Ingredient' ? <Text>{route.params.ingredients.length} Items</Text> :
                    <Text>{route.params.procedure.length} Steps</Text>}
            </View>
            <ScrollView style={{ flex: 2 }} showsVerticalScrollIndicator={false} vertical={true} contentContainerStyle={{ alignItems: 'center', paddingBottom: 50 }}>
                {selectedF == 'Ingredient' ?
                    <>{
                        route.params.ingredients.map((item, i) => {
                            return (
                                <View key={i} style={{ marginVertical: 5, width: '100%' }}>
                                    <IngredientCard ing={item} />
                                </View>

                            )
                        })}
                    </>
                    :
                    <>
                        {
                            route.params.procedure.map((item, i) => {
                                return (
                                    <View key={i} style={{ marginVertical: 5, width: '100%' }}>
                                        <ProcedureCard step={item} idx={i} />
                                    </View>

                                )
                            })
                        }
                    </>
                }

            </ScrollView>

            <Modal isVisible={showModal} animationIn='slideInRight' animationOut='slideOutRight' onBackdropPress={toggleModal}
                style={{
                    position: 'absolute', alignSelf: 'flex-end', top: 15, right: 15, width: 164,
                    borderRadius: 8, backgroundColor: '#FFF', height: 140,
                }}>
                <View style={{ flex: 1, paddingHorizontal: 15, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
                    <TouchableOpacity onPress={() => { toggleModal(); toggleShareModal(); }}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                            <Image source={require('../assets/shareicn.png')} style={{ width: 20, height: 20 }} />
                            <Text style={{ paddingLeft: 16, fontSize: 14, lineHeight: 21, fontWeight: 700, fontFamily: 'Poppins', color: '#000000' }}>Share</Text>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { toggleModal(); toggleRateModal(); }}>

                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/Staricn.png')} style={{ width: 20, height: 20 }} />
                            <Text style={{ paddingLeft: 16, fontSize: 14, lineHeight: 21, fontWeight: 700, fontFamily: 'Poppins', color: '#000000' }}>Rate Recipe</Text>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { toggleModal(); removeBookmark() }}>

                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/Activeicn.png')} style={{ width: 20, height: 20 }} />
                            <Text style={{ paddingLeft: 16, fontSize: 14, lineHeight: 21, fontWeight: 700, fontFamily: 'Poppins', color: '#000000' }}>Unsave</Text>

                        </View>
                    </TouchableOpacity>



                </View>
            </Modal>

            <Modal isVisible={showRateModal} onBackdropPress={toggleRateModal} animationIn='bounceIn' animationOut='bounceOut'
                style={{
                    position: 'absolute', alignSelf: 'flex-end', top: 250, alignSelf: 'center', width: 180,
                    borderRadius: 8, backgroundColor: '#FFF', height: 91,
                }}>
                <View style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                        <Text style={{ fontSize: 11, lineHeight: 16, fontWeight: 400, fontFamily: 'Poppins', color: '#000000' }}>Rate Recipe</Text>

                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '70%' }}>
                        <TouchableOpacity onPress={() => setRating(1)}>
                            <Text>⭐</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setRating(2)}>
                            <Text>⭐</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setRating(3)}>
                            <Text>⭐</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setRating(4)}>
                            <Text>⭐</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setRating(5)}>
                            <Text>⭐</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => { dispatch(addRating(route.params.name, rating)); toggleRateModal(); }}>

                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{
                                fontSize: 8, lineHeight: 12, fontWeight: 700, fontFamily: 'Poppins', borderRadius: 6,
                                color: '#FFF', backgroundColor: '#FFAD30', paddingVertical: 4, paddingHorizontal: 20
                            }}>Send</Text>

                        </View>
                    </TouchableOpacity>



                </View>
            </Modal>

            <Modal isVisible={showShareModal} onBackdropPress={toggleShareModal} animationIn='bounceIn' animationOut='bounceOut'
                style={{
                    position: 'absolute', alignSelf: 'flex-end', top: 250, alignSelf: 'center', width: 310,
                    borderRadius: 8, backgroundColor: '#FFF',
                }}>
                <View style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', paddingHorizontal: 15, paddingVertical: 20, rowGap: 10 }}>
                    <Text style={{ fontSize: 20, lineHeight: 30, fontWeight: 700, fontFamily: 'Poppins', color: '#000000' }}>Recipe Link</Text>


                    <Text style={{ fontSize: 11, lineHeight: 16, fontWeight: 400, fontFamily: 'Poppins', color: '#797979' }}>
                        Copy recipe link and share your recipe link with  friends and family.</Text>

                    <View style={{
                        backgroundColor: '#D9D9D9', width: '90%', borderRadius: 9,
                        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                    }}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ flex: 0.7, fontSize: 11, lineHeight: 16, fontWeight: 600, fontFamily: 'Poppins', color: '#121212' }}>url linke here sliced </Text>
                        </View>

                        <TouchableOpacity onPress={() => { copyToClipboard(); toggleShareModal(); }}>
                            <View style={{
                                flex: 0.3, backgroundColor: '#129575', borderRadius: 10,
                                display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 15
                            }}>
                                <Text style={{ fontFamily: 'Poppins', fontSize: 16, color: '#fff', fontWeight: 600 }}>Copy Link</Text>
                            </View>
                        </TouchableOpacity>



                    </View>
                    <TouchableOpacity style={{ position: 'absolute', top: 15, right: 15 }} onPress={toggleShareModal}>
                        <Image source={require('../assets/crossicn.png')} style={{ height: 5, width: 5 }} />
                    </TouchableOpacity>



                </View>
            </Modal >


        </View >
    )
}

export default Recipe_Ingredient