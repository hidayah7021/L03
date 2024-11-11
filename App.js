import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity, Alert, StyleSheet, Text, TextInput, View, ToastAndroid } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function App() {
    const [username, setUsername] = useState('');
    const [pw, setPw] = useState('');
    const [userType, setUserType] = useState(''); // State to store user type

    return (
        <View style={{ padding: 20, paddingTop: 50 }}>
            {/*Exercise 1B*/}
            <Text>User Type:</Text>
            <RNPickerSelect
                onValueChange={(value) => setUserType(value)} // Set user type
                items={[
                    { label: 'Admin', value: 'Admin' },
                    { label: 'Guest', value: 'Guest' },
                ]}
            />
            <Text>Username:</Text>
            <TextInput
                style={{ borderWidth: 1 }}
                onChangeText={(text) => setUsername(text)}
            />
            <Text>Password:</Text>
            <TextInput
                style={{ borderWidth: 1 }}
                onChangeText={(text) => setPw(text)}
                secureTextEntry
            />
            <TouchableOpacity onPress={() => ToastAndroid.show('Welcome ' + userType + ' ' + username, ToastAndroid.SHORT)}>
                <Text>Log in</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}
