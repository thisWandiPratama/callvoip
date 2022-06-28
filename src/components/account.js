import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, BackHandler } from 'react-native';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    // this.interval = setInterval(() => this.setState({ time: this.state.time + 1 }), 1000 * 60);
    this.handler = BackHandler.addEventListener('hardwareBackPress', () => { return this.props.navigation.goBack() })
  }

  componentWillUnmount() {
    // clearInterval(this.interval)
    // this.handler.remove()
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
          }}>Settings Account</Text>
        </View>
        <View style={{
          flex: 1, margin: 20
        }}>
          <View style={{
            height: 70,
            width: "100%",
            borderBottomWidth: 1,
          }}>
            <Text style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#000"
            }}>Username</Text>
            <TextInput
              placeholder='Masukkan username server voip'
            />
          </View>
          <View style={{
            height: 70,
            width: "100%",
            borderBottomWidth: 1,
            marginTop: 10
          }}>
            <Text style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#000"
            }}>Password</Text>
            <TextInput
              placeholder='Masukkan password server voip'
            />
          </View>
          <View style={{
            height: 70,
            width: "100%",
            borderBottomWidth: 1,
            marginTop: 10
          }}>
            <Text style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#000"
            }}>Domain Server</Text>
            <TextInput
              placeholder='Masukkan domain voip server voip'
            />
          </View>

          <View style={{
            height: 50,
            width: "100%",
            borderBottomWidth: 1,
            marginTop: 10,
            justifyContent: "center"
          }}>
            <Text style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#000"
            }}>Portokol</Text>
            <Text>UDP</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Account;
