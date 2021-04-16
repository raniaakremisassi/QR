import React from 'react';
import { render } from 'react-dom';
import {StyleSheet, View, Button} from 'react-native';
import {
    Image,
    Text,
    Alert,TouchableNativeFeedback,
    TextInput,
    TouchableWithoutFeedback,
    SafeAreaView,Platform,
    
  } from 'react-native'

import BottomSheet from 'reanimated-bottom-sheet'
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import  { useState, useEffect } from 'react';
import { NavigationEvents } from 'react-navigation';
import {TouchableOpacity} from 'react-native'; 
var { Dimensions } = require('react-native');
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';

const windowHeight = Dimensions.get('window').height;

export default class QRCod extends React.Component{
    constructor(props){
        super(props);
        this.state ={
        
        longitude:0,
        latitude:0,
        error:null,
       
            };  
        }
       
        static navigationOptions = {
          title : 'Map',
      };
      componentDidMount(){
        navigator.geolocation.getCurrentPosition(position =>{
          this.setState({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
            error:null
          });
  
        },
        error => this.setState({error: error.message}),
        {enableHighAccuracy:true, timeout:2000, maximumAge:2000}
        );
      }
    renderInner = () => (
        <View style={styles.panel}>
        
          <View style={styles.panelButton}>
            <Text style={styles.panelButtonTitle}>QRCode</Text>
            <QRCode
        value={JSON.stringify(this.state)}
        size={200}
        bgColor='black'
        fgColor='white'/>
          </View>
         
         
        </View>
      )
    
      renderHeader = () => (
        <View style={styles.header}>
          <View style={styles.panelHeader}>
            <View style={styles.panelHandle} />
          </View>
        </View>
      )
    
      bs = React.createRef()
    
      render() {
        const {navigate} = this.props.navigation;

        return (
          <View style={styles.container}>
              {Alert.alert(
                  'success',
                   'votre réservation est bien sauvegarder, voici votre itinéraire',
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                   ]
  
              )}
              <MapView
                style={styles.map}
                region={{
                    latitude: 37,
                    longitude : 10,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001

                }}
              > 
            <Marker coordinate={this.state}/>
            </MapView>
           
            <ScrollBottomSheet
        componentType="FlatList"
        snapPoints={[128, '50%', windowHeight - 200]}
        initialSnapIndex={2}
        renderHandle={() => (
          <View style={styles.header}>
            <View style={styles.panelHandle} />
          </View>
        )}
        data={Array.from({ length: 1 }).map((_, i) => String(i))}
        keyExtractor={i => i}
        renderItem={this.renderInner}
      />

            <TouchableWithoutFeedback onPress={() => this.bs.current.snapTo(0)}>
            <Image style={styles.map}  />

            </TouchableWithoutFeedback>
          </View>
        )
      }
    }
    
    const IMAGE_SIZE = 200
    
    const styles = StyleSheet.create({
      search: {
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 15,
      },
      container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
      },
      box: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
      },
      panelContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      panel: {
        height: 100,
        padding: 20,
        backgroundColor: '#f7f5eee8',
      },
      header: {
        backgroundColor: '#f7f5eee8',
        shadowColor: '#000000',
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      panelHeader: {
        alignItems: 'center',
      },
      panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
      },
      panelTitle: {
        fontSize: 27,
        height: 35,
      },
      panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
      },
      panelButton: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#318bfb',
        alignItems: 'center',
        marginVertical: 10,
      },
      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },
      photo: {
        width: '100%',
        height: 225,
        marginTop: 30,
      },
      map: {
        height: '100%',
        width: '100%',
      },
    })
    


