import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, BackHandler } from 'react-native';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.handler = BackHandler.addEventListener('hardwareBackPress', () => { return this.props.navigation.goBack() })
  }

  componentWillUnmount() {
    BackHandler.addEventListener('hardwareBackPress', () => { return true })
  }


  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <View style={{
          height: 50,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
        }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
          >
            <Image
              source={{
                uri: "https://i.ibb.co/LzvDgxV/arrow.png"
              }}
              style={{
                height: 30,
                width: 30,
                marginLeft: 20,
                marginRight: 10
              }}
            />
          </TouchableOpacity>
          <Text style={{
            fontSize: 17,
            fontWeight: "bold",
            color: "#000"
          }}>Abouts Us</Text>
        </View>
        <View style={{
          flex:1,
          margin: 20
        }}>
          <Text
          style={{
            fontSize:15, 
            textAlign:"justify"
          }}
          >Voice over Internet Protocol (VoIP), is a technology that allows you to make voice calls using a broadband Internet connection instead of a regular (or analog) phone line.</Text>
        </View>
      </View>
    );
  }
}

export default About;
