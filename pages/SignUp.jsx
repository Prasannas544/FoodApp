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
// import { CheckBox } from 'react-native-elements';


export default function SignUp({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState(false);

    const handleSignIn = () => {
        navigation.replace('Login');
    }
    const handleSignUp = () => {
        console.log('account created successfully')
        navigation.replace('Login');
    }

    return (
        <View style={styles.container}>
            <View style={{ alignSelf: 'flex-start', paddingHorizontal: 30, paddingVertical: 10, width: '100%' }}>

                <Text style={{ fontFamily: 'Poppins', fontSize: 20, color: '#fff', fontWeight: 600, color: '#121212' }}>Create an account</Text>
                <Text style={{ fontFamily: 'Poppins', fontSize: 11, lineHeight: 16, color: '#fff', fontWeight: 400, color: '#121212' }}>Let’s help you set up your account,{"\n"}it won’t take long.</Text>


                <View style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 15 }}>

                    <View style={styles.inputView}>
                        <Text style={{ fontFamily: 'Poppins', fontSize: 14, color: '#fff', fontWeight: 400, color: '#121212', marginBottom: 5 }}>Name</Text>
                        <TextInput
                            style={styles.TextInput}
                            placeholder=" Enter Name"
                            placeholderTextColor="#D9D9D9"
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={{ fontFamily: 'Poppins', fontSize: 14, color: '#fff', fontWeight: 400, color: '#121212', marginBottom: 5 }}>Email</Text>
                        <TextInput
                            style={styles.TextInput}
                            placeholder=" Enter Email"
                            placeholderTextColor="#D9D9D9"
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={{ fontFamily: 'Poppins', fontSize: 14, color: '#fff', fontWeight: 400, color: '#121212', marginBottom: 5 }}>Password</Text>
                        <TextInput
                            style={styles.TextInput}
                            placeholder=" Enter Password"
                            placeholderTextColor="#D9D9D9"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={{ fontFamily: 'Poppins', fontSize: 14, color: '#fff', fontWeight: 400, color: '#121212', marginBottom: 5 }}>Confirm Password</Text>
                        <TextInput
                            style={styles.TextInput}
                            placeholder=" Retype Password"
                            placeholderTextColor="#D9D9D9"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20, paddingHorizontal: 10 }}>
                    <View style={{ borderWidth: 1, borderRadius: 5, borderColor: '#FF9C00', width: 17, height: 17 }}></View>
                    <Text style={{ color: '#FF9C00', fontFamily: 'Poppins', fontStyle: 'normal', fontSize: 11, lineHeight: 16, fontWeight: 400, textAlign: 'left', paddingHorizontal: 5 }} >Accept terms & Condition</Text>
                </View>


                <TouchableOpacity style={{ marginTop: 30 }} onPress={handleSignUp} >
                    <View style={{ backgroundColor: '#129575', borderRadius: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 15, paddingHorizontal: 50 }}>
                        <Text style={{ fontFamily: 'Poppins', fontSize: 16, color: '#fff', fontWeight: 600 }}>Sign In </Text>
                        <Image source={require('../assets/ArrowRight.png')} resizeMode='contain' style={{ height: 20, width: 20 }} />
                    </View>
                </TouchableOpacity>
            </View>

            <View >
                <Image style={{ width: 195, height: 17 }} resizeMode='contain' source={require('../assets/Line.png')} />

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', gap: 15, marginTop: 15 }}>
                    <View elevation={5} style={{
                        backgroundColor: '#FFFFFF',
                        shadowColor: '#696969',
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.1,
                        shadowRadius: 5,
                        borderRadius: 10,
                        padding: 10
                    }}>
                        <Image style={{ width: 24, height: 24 }} resizeMode='contain' source={require('../assets/google.png')} />
                    </View>
                    <View elevation={5} style={{
                        backgroundColor: '#FFFFFF',
                        shadowColor: '#696969',
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.1,
                        shadowRadius: 5,
                        borderRadius: 10,
                        padding: 10
                    }}>
                        <Image source={require('../assets/facebook.png')} style={{ width: 24, height: 24 }} resizeMode='contain' /></View>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                    <Text style={{ color: '#000000', fontFamily: 'Poppins', fontStyle: 'normal', fontSize: 11, lineHeight: 16, fontWeight: 400, textAlign: 'center' }}>Already a member ? </Text>
                    <TouchableOpacity onPress={handleSignIn}>
                        <Text style={{ color: '#FF9C00', fontFamily: 'Poppins', fontStyle: 'normal', fontSize: 11, lineHeight: 16, fontWeight: 400, textAlign: 'center' }}>Sign In</Text>
                    </TouchableOpacity>
                </View>

            </View>
    </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-around",
    },
    inputView: {
        width: '100%',
        marginTop: 10
    },
    TextInput: {
        width: '100%',
        borderWidth: 1.5,
        borderColor: '#D9D9D9',
        borderRadius: 10,
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
});