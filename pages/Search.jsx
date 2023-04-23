import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SearchResultCard from './SearchResultCard'

import data from '../data/data.json'

const Search = ({ navigation }) => {
    const [recentSearch, setRecentSearch] = useState([1, 3, 5, 7, 9, 11, 13, 15, 17])

    return (
        <View style={{ flex: 1, paddingHorizontal: 30, paddingTop: 10 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../assets/arrow-left.png')} style={{ width: 20, height: 20 }} /></TouchableOpacity>
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
                <TouchableOpacity onPress={() => navigation.navigate('SearchResult')} style={{ paddingHorizontal: 5 }} >
                    <View style={{ backgroundColor: '#129575', borderRadius: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                        <Image source={require('../assets/setting-4.png')} resizeMode='contain' style={{ height: 20, width: 20 }} />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <Text style={{
                    fontFamily: 'Poppins', fontSize: 16, fontWeight: 800,
                    lineHeight: 24, color: '#000000', marginVertical: 20
                }}>Recent Search</Text>
                <View >
                    <ScrollView showsVerticalScrollIndicator={false} vertical={true} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >
                        {recentSearch.map((item, i) => {
                            return (
                                <View key={i} style={{ display: 'flex', flexDirection: 'row' }}>
                                    <SearchResultCard data={data[(item - 1) % 10]} />
                                    <SearchResultCard data={data[item % 10]} />
                                </View>
                            )
                        })

                        }
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default Search