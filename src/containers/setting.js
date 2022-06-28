import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,BackHandler } from 'react-native';

class Recent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    this.handler = BackHandler.addEventListener('hardwareBackPress', () => { return BackHandler.exitApp() })
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    BackHandler.addEventListener('hardwareBackPress', () => { return BackHandler.exitApp() })
  }

  render() {
    return (
      <View style={{
        flex: 1,
        margin: 10
      }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Account")} style={{ borderRadius: 5, height: 70, width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB", marginTop: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 12, marginLeft: 5 }}>Account</Text>
          </View>
          <Image
            source={{ uri: "https://i.ibb.co/hcrRYV6/right.png" }}
            style={{
              height: 40,
              width: 40,
              resizeMode: "contain",
              marginRight: 5,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("About")} style={{ borderRadius: 5, height: 70, width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB", marginTop: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 12, marginLeft: 5 }}>About</Text>
          </View>
          <Image
            source={{ uri: "https://i.ibb.co/hcrRYV6/right.png" }}
            style={{
              height: 40,
              width: 40,
              resizeMode: "contain",
              marginRight: 5,
            }}
          />

        </TouchableOpacity>
        <TouchableOpacity onPress={() => BackHandler.exitApp()} style={{ borderRadius: 5, height: 70, width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB", marginTop: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 12, marginLeft: 5 }}>Exit</Text>
          </View>
          <Image
            source={{ uri: "https://i.ibb.co/hcrRYV6/right.png" }}
            style={{
              height: 40,
              width: 40,
              resizeMode: "contain",
              marginRight: 5,
            }}
          />

        </TouchableOpacity>
      </View>
    );
  }
}

export default Recent;
