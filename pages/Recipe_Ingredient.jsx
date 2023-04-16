import { View, Text, Image } from 'react-native'
import React from 'react'

const Recipe_Ingredient = () => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 30, paddingTop: 10 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Image source={require('../assets/arrow-left.png')} style={{ width: 20, height: 20 }} />
                <Image source={require('../assets/more.png')} style={{ width: 24, height: 24 }} />
            </View>
        </View>
    )
}

export default Recipe_Ingredient