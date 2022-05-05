import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function AddButton() {
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.AddButton} onPress={() => navigation.navigate('Settings')}>     
<Text>button</Text>          
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    AddButton: {
        flexDirection: 'row',
      //  backgroundColor: 'white',
        padding: 10,
        borderRadius: 25,
        color: '#2e2e2e',
        elevation: 24,
        shadowColor: 'darkgreen'
    },  
    text: {
        color: '#2e2e2e',
    },
    plus: {
        color: '#2e2e2e',
        fontWeight: 'bold',
    },
    plusIcon: {
        width: 50,
        height: 50,
       // backgroundColor: '#66c257',
        borderRadius: 25
    }
})