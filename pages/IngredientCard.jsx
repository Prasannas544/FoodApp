import { View, Text } from 'react-native'
import React from 'react'

const IngredientCard = () => {
    return (
        <View style={{
            width: '100%', height: 76, opacity: 0.5, backgroundColor: '#D9D9D9', borderRadius: 12, paddingVertical: 12,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 15
        }}>
            <View style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'
            }}>
                <View style={{ width: 52, height: 52, backgroundColor: '#FFF', borderRadius: 10 }}></View>
                <Text style={{
                    color: '#121212', fontFamily: 'Poppins', fontStyle: 'normal', paddingLeft: 16,
                    fontSize: 16, lineHeight: 24, fontWeight: 700, textAlign: 'center'
                }}>Tomatoes</Text>
            </View>


            <Text style={{
                color: '#A9A9A9', fontFamily: 'Poppins', fontStyle: 'normal',
                fontSize: 14, lineHeight: 21, fontWeight: 400, textAlign: 'center'
            }}>500g</Text>
        </View>
    )
}

export default IngredientCard