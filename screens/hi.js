import React from 'react';
import { render } from 'react-dom';
import {StyleSheet, View, Button} from 'react-native';

export default class Hi extends React.Component{

    static navigationOptions = {
        title : 'Hi',
    };

render(){
    const {navigate} = this.props.navigation;
    return(
        < View >
        <Button
        title= "go to profile"
        onPress={() =>  navigate(
            'Appl', {name :'Jane'}
        )}
        />
        </View>
    );

}
}
