import { View, Text, Image } from 'react-native'
import React from 'react'

const AlertCard = () => {
    return (
        <View style={{
            width: 315, height: 92, borderRadius: 12, backgroundColor: '#D9D9D9', paddingRight: 69,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingVertical: 10, paddingLeft: 15
        }}>
            <Text style={{ fontSize: 11, lineHeight: 16, fontFamily: 'Poppins', fontWeight: 700, color: '#121212' }}>
                New Recipe Alert!
            </Text>
            <Text style={{ fontSize: 11, lineHeight: 16, fontFamily: 'Poppins', fontWeight: 400, color: '#A9A9A9' }}>
                Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum
            </Text>
            <Text style={{ fontSize: 7, lineHeight: 10, fontFamily: 'Poppins', fontWeight: 400, color: '#A9A9A9' }}>10 mins ago</Text>

            <View style={{ position: 'absolute', right: 15, top: 10 }}>
                <Image source={require('../assets/notif_unread.png')} style={{ width: 28, height: 28 }} />
            </View>
        </View>
    )
}

export default AlertCard