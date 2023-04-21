import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import SearchResultCard from './SearchResultCard'
import Modal from "react-native-modal";


const Search = ({ navigation }) => {
    const [recentSearch, setRecentSearch] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,])
    const [showModal, setShowModal] = useState(false)
    const [time, setTime] = useState(['All', 'Newest', 'Oldest', 'Popularity'])
    const [selectedtime, setselectedtime] = useState(['All'])
    const [rate, setRate] = useState(['5', '4', '3', '2', '1'])
    const [selectedRate, setselectedRate] = useState(['5'])
    const [category, setCategory] = useState(['Indian', 'Chinese', 'Italian', 'Spanish', 'Cereal', 'Spanish1', 'Spanish2', 'Spanish3', 'Spanish4',])
    const [selectedCategory, setselectedCategory] = useState(['Indian'])

    const toggleModal = () => {
        setShowModal(!showModal);
    };



    const handleRate = (item) => {

        if (selectedRate.includes(item)) {
            let array = [...selectedRate]
            const index = array.indexOf(item);
            if (index > -1) { // only splice array when item is found
                array.splice(index, 1); // 2nd parameter means remove one item only
                setselectedRate(array)
            }
        } else {
            let array = [...selectedRate]
            array.push(item)
            setselectedRate(array);
        }
    }
    const handleCategory = (item) => {

        if (selectedCategory.includes(item)) {
            let array = [...selectedCategory]
            const index = array.indexOf(item);
            if (index > -1) { // only splice array when item is found
                array.splice(index, 1); // 2nd parameter means remove one item only
                setselectedCategory(array)
            }
        } else {
            let array = [...selectedCategory]
            array.push(item)
            setselectedCategory(array);
        }
    }
    const handleTime = (item) => {

        if (selectedtime.includes(item)) {
            let array = [...selectedtime]
            const index = array.indexOf(item);
            if (index > -1) { // only splice array when item is found
                array.splice(index, 1); // 2nd parameter means remove one item only
                setselectedtime(array)
            }
        } else {
            let array = [...selectedtime]
            array.push(item)
            setselectedtime(array);
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: 30, paddingTop: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/arrow-left.png')} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: 'Poppins', fontSize: 18, fontWeight: 800, lineHeight: 27, color: '#121212', marginLeft: -5 }}>Search Recipes</Text>
                    <View></View>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 17 }}>
                    <View style={{
                        display: 'flex', flexDirection: 'row', alignItems: 'center', borderColor: '#D9D9D9',
                        borderWidth: 1, borderRadius: 10, backgroundColor: '#FFFFFF', minWidth: '80%', paddingLeft: 10
                    }}>
                        <Image source={require('../assets/search-normal.png')} style={{ width: 18, height: 18 }} />
                        <TextInput style={{ padding: 10, height: 40 }} placeholderTextColor='#D9D9D9' placeholder='Search recipe'></TextInput>
                    </View>
                    <TouchableOpacity style={{ paddingHorizontal: 5 }} onPress={toggleModal}>
                        <View style={{ backgroundColor: '#129575', borderRadius: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                            <Image source={require('../assets/setting-4.png')} resizeMode='contain' style={{ height: 20, width: 20 }} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ display: 'flex', flexDirection: 'column' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                        <Text style={{
                            fontFamily: 'Poppins', fontSize: 16, fontWeight: 800,
                            lineHeight: 24, color: '#000000',
                        }}>Search Result</Text>
                        <Text style={{
                            fontFamily: 'Poppins', fontSize: 11, fontWeight: 400,
                            lineHeight: 16, color: '#A9A9A9',
                        }}>269 results</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} vertical={true} >
                        {recentSearch.map((item, i) => {
                            return (
                                <View key={i} style={{ display: 'flex', flexDirection: 'row' }}>
                                    <SearchResultCard />
                                    <SearchResultCard />
                                </View>
                            )
                        })

                        }
                    </ScrollView>
                </View>


            </View>

            <Modal isVisible={showModal}
                onBackdropPress={toggleModal} style={{
                    position: 'absolute', width: '100%', left: -20, height: 430, top: 328,
                    borderRadius: 50, backgroundColor: '#FFF', paddingBottom: 20
                }}>
                <View style={{ flex: 1, padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>


                    <View >
                        <Text style={{ fontSize: 14, lineHeight: 21, fontWeight: 700, fontFamily: 'Poppins', color: '#000000' }}>Filter Search</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 10 }}>
                        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline' }} >
                            <Text style={{ fontSize: 14, lineHeight: 21, fontWeight: 700, fontFamily: 'Poppins', color: '#000000' }}>Time</Text>
                            <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                                {time.map((item, i) => {
                                    return (
                                        <>{selectedtime.includes(item) ?
                                            <TouchableOpacity key={i} onPress={() => handleTime(item)}>
                                                <View style={{ backgroundColor: '#129575', borderRadius: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 7, paddingHorizontal: 20, marginRight: 5 }}>
                                                    <Text style={{ color: '#FFF', fontFamily: 'Poppins', fontStyle: 'normal', fontSize: 11, lineHeight: 16, fontWeight: 600, textAlign: 'center' }}>
                                                        {item}
                                                    </Text>
                                                </View>
                                            </TouchableOpacity> :
                                            <TouchableOpacity key={i} onPress={() => handleTime(item)}>
                                                <View style={{ backgroundColor: '#FFF', borderRadius: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 7, paddingHorizontal: 20, marginRight: 5 }}>
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
                        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline' }}>
                            <Text style={{ fontSize: 14, lineHeight: 21, fontWeight: 700, fontFamily: 'Poppins', color: '#000000' }}>Rate</Text>
                            <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                                {rate.map((item, i) => {
                                    return (
                                        <>{selectedRate.includes(item) ?
                                            <TouchableOpacity onPress={() => handleRate(item)} key={i}>
                                                <View style={{ backgroundColor: '#129575', borderRadius: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 7, paddingHorizontal: 20, marginRight: 5 }}>
                                                    <Text style={{ color: '#FFF', fontFamily: 'Poppins', fontStyle: 'normal', fontSize: 11, lineHeight: 16, fontWeight: 600, textAlign: 'center' }}>
                                                        {item} ⭐
                                                    </Text>
                                                </View>
                                            </TouchableOpacity> :
                                            <TouchableOpacity onPress={() => handleRate(item)} key={i}>
                                                <View style={{ backgroundColor: '#FFF', borderRadius: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 7, paddingHorizontal: 20, marginRight: 5 }}>
                                                    <Text style={{ color: '#129575', fontFamily: 'Poppins', fontStyle: 'normal', fontSize: 11, lineHeight: 16, fontWeight: 600, textAlign: 'center' }}>
                                                        {item} ⭐
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                        }</>
                                    )
                                })}
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline' }}>
                            <Text style={{ fontSize: 14, lineHeight: 21, fontWeight: 700, fontFamily: 'Poppins', color: '#000000' }}>Category</Text>
                            <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }} >
                                {category.map((item, i) => {
                                    return (<>{selectedCategory.includes(item) ?
                                        <TouchableOpacity onPress={() => handleCategory(item)} key={i}>
                                            <View style={{
                                                marginBottom: 10, backgroundColor: '#129575', borderRadius: 10, display: 'flex', flexDirection: 'row',
                                                alignItems: 'center', justifyContent: 'center', paddingVertical: 7, paddingHorizontal: 20
                                            }}>
                                                <Text style={{ color: '#FFF', fontFamily: 'Poppins', fontStyle: 'normal', fontSize: 11, lineHeight: 16, fontWeight: 600, textAlign: 'center' }}>
                                                    {item}
                                                </Text>
                                            </View>
                                        </TouchableOpacity> :
                                        <TouchableOpacity onPress={() => handleCategory(item)} key={i}>
                                            <View style={{
                                                marginBottom: 10, backgroundColor: '#FFF', borderRadius: 10, display: 'flex', flexDirection: 'row',
                                                alignItems: 'center', justifyContent: 'center', paddingVertical: 7, paddingHorizontal: 20
                                            }}>
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

                    </View>
                    <View >
                        <TouchableOpacity onPress={toggleModal}>
                            <View style={{ backgroundColor: '#129575', borderRadius: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 80 }}>
                                <Text style={{ fontFamily: 'Poppins', fontSize: 16, color: '#fff', fontWeight: 600 }}>Filter</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                </View>
            </Modal>

        </View>

    )
}

export default Search