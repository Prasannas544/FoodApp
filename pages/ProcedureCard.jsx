import { View, Text } from 'react-native'
import React from 'react'

const ProcedureCard = () => {
    return (
        <View style={{
            width: '100%', opacity: 0.5, backgroundColor: '#D9D9D9', borderRadius: 12, paddingVertical: 10,
            display: 'flex', alignItems: 'flex-start', flexDirection: 'column', paddingHorizontal: 15
        }}>
            <Text style={{
                color: '#121212', fontFamily: 'Poppins', fontStyle: 'normal',
                fontSize: 11, lineHeight: 16, fontWeight: 700, textAlign: 'center'
            }} >Step n</Text>
            <Text style={{
                color: '#A9A9A9', fontFamily: 'Poppins', fontStyle: 'normal',
                fontSize: 11, lineHeight: 16, fontWeight: 400, textAlign: 'left'
            }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa voluptatem optio, amet placeat consequuntur
                dicta quibusdam tempore illum cupiditate id numquam fugit ullam autem, doloribus atque natus praesentium, voluptatibus est.</Text>

        </View>
    )
}

export default ProcedureCard