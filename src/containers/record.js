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
            <Text style={{ color: "white", fontSize: 12, marginLeft: 5 }}>Rekaman panggilan 26/02/2002</Text>
          </View>
          <Image
            source={{ uri: "https://i.ibb.co/1fkxTRY/play-button.png" }}
            style={{
              height: 40,
              width: 40,
              resizeMode: "contain",
              marginRight: 5,
            }}
          />
        </View>
        <View style={{ borderRadius: 5, height: 70, width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB", marginTop: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 12, marginLeft: 5 }}>Rekaman panggilan 26/02/2002</Text>
          </View>
          <Image
            source={{ uri: "https://i.ibb.co/1fkxTRY/play-button.png" }}
            style={{
              height: 40,
              width: 40,
              resizeMode: "contain",
              marginRight: 5,
            }}
          />

        </View>
      </View>
    );
  }
}

export default Recent;
