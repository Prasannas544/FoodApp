import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";
export default function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>

            <Text style={{ fontFamily: 'Poppins', fontSize: 30, color: '#fff', fontWeight: 600, color: '#121212' }}>Hello,</Text>
            <Text style={{ fontFamily: 'Poppins', fontSize: 20, color: '#fff', fontWeight: 400, color: '#121212' }}>Welcome Back!</Text>
            <View style={styles.inputView}>
                <Text style={{ fontFamily: 'Poppins', fontSize: 14, color: '#fff', fontWeight: 400, color: '#121212' }}>Email</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#D9D9D9"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <Text style={{ fontFamily: 'Poppins', fontSize: 14, color: '#fff', fontWeight: 400, color: '#121212' }}>Password</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#D9D9D9"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 30 }} >
                <View style={{ backgroundColor: '#129575', borderRadius: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 15, paddingHorizontal: 50 }}>
                    <Text style={{ fontFamily: 'Poppins', fontSize: 16, color: '#fff', fontWeight: 600 }}>Sign In </Text>
                    <Image source={require('../assets/ArrowRight.png')} resizeMode='contain' style={{ height: 20, width: 20 }} />
                </View>
            </TouchableOpacity>

            <View></View>
            <View>
                <Text>Logos
                </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text>Dont have an account ? </Text>
                <TouchableOpacity>
                    <Text style={styles.forgot_button}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 40,
    },
    inputView: {
        width: '100%',
        paddingHorizontal: 30
    },
    TextInput: {
        width: '100%',
        borderWidth: 1.5,
        borderColor: '#D9D9D9',
        borderRadius: 10,
        placeholderTextColor: '#D9D9D9'
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
});