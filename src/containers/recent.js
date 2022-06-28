import React, { Component } from 'react';
import { View, Text, Image, BackHandler } from 'react-native';

class Recent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    
  }

  componentDidMount() {
    this.handler = BackHandler.addEventListener('hardwareBackPress', () => { return BackHandler.exitApp() })
  }

  componentWillUnmount() {
    BackHandler.addEventListener('hardwareBackPress', () => { return BackHandler.exitApp() })
  }
  


  render() {
    return (
      <View style={{
        flex: 1,
        margin: 10
      }}>
        <View style={{ borderRadius: 5, height: 70, width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB", marginTop: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{ uri: "https://i.ibb.co/WscMtP9/telephone-1.png" }}
              style={{
                height: 40,
                width: 40,
                resizeMode: "contain",
                marginRight: 5,
                marginLeft: 5
              }}
            />
            <Text style={{ color: "white", fontSize: 12 }}>Teknisi Airman PKU</Text>
          </View>
          <Text style={{ color: "white", fontSize: 12, marginRight: 10 }}>26 Febuari 2022 12:00</Text>
        </View>
        <View style={{ borderRadius: 5, height: 70, width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB", marginTop: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{ uri: "https://i.ibb.co/WscMtP9/telephone-1.png" }}
              style={{
                height: 40,
                width: 40,
                resizeMode: "contain",
                marginRight: 5,
                marginLeft: 5
              }}
            />
            <Text style={{ color: "white", fontSize: 12 }}>Teknisi Airman PKU</Text>
          </View>
          <Text style={{ color: "white", fontSize: 12, marginRight: 10 }}>27 Febuari 2022 15:00</Text>
        </View>
      </View>
    );
  }
}

export default Recent;
