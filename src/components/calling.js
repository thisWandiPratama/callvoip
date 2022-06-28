import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, BackHandler } from 'react-native';

class Calling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      microphone: true,
      speaker: true,
      puase: false
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
        <View style={{ height: "50%", width: "100%", alignItems: "center", justifyContent: "space-around" }}>
          <Text style={{ fontWeight: "bold", fontSize: 25, color: "#000" }}> Calling... </Text>
          <Text style={{ fontWeight: "bold", fontSize: 25, color: "#000" }}> Teknisi Airnav PKU </Text>
        </View>
        <View style={{ height: "50%", width: "100%", flexDirection: "row", flexWrap: "wrap", alignContent: "flex-end" }}>
          <TouchableOpacity onPress={() => {
            this.setState({
              microphone: !this.state.microphone
            })
          }} style={{ height: 100, width: "33.3333333333%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            {this.state.microphone ?
              <Image
                source={{ uri: "https://i.ibb.co/tqWXdbG/microphone-black-shape.png" }}
                style={{
                  height: 50,
                  width: 50
                }}
              /> :

              <Image
                source={{ uri: "https://i.ibb.co/dDLqb6J/mute.png" }}
                style={{
                  height: 50,
                  width: 50
                }}
              />}
          </TouchableOpacity>
          <TouchableOpacity
            style={{ height: 100, width: "33.3333333333%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            <Image
              source={{ uri: "https://i.ibb.co/QDpH7zg/keyboards.png" }}
              style={{
                height: 50,
                width: 50
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.setState({
              speaker: !this.state.speaker
            })
          }} style={{ height: 100, width: "33.3333333333%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            {this.state.speaker ?
              <Image
                source={{ uri: "https://i.ibb.co/6BnnhRm/speaker-filled-audio-tool.png" }}
                style={{
                  height: 50,
                  width: 50
                }}
              /> :

              <Image
                source={{ uri: "https://i.ibb.co/DVPKQ1H/no-sound.png" }}
                style={{
                  height: 50,
                  width: 50
                }}
              />}
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 100, width: "33.3333333333%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            <Image
              source={{ uri: "https://i.ibb.co/hC5D9h5/add.png" }}
              style={{
                height: 50,
                width: 50
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.setState({
              puase: !this.state.puase
            })
          }} style={{ height: 100, width: "33.3333333333%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            {this.state.puase == false ?
              <Image
                source={{ uri: "https://i.ibb.co/W6KQZBc/pause.png" }}
                style={{
                  height: 50,
                  width: 50
                }}
              /> :

              <Image
                source={{ uri: "https://i.ibb.co/rw3bfNK/play-buttton.png" }}
                style={{
                  height: 50,
                  width: 50
                }}
              />}
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 100, width: "33.3333333333%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            <Image
              source={{ uri: "https://i.ibb.co/PcSPZQL/user.png" }}
              style={{
                height: 50,
                width: 50
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ height: 100, width: "50%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            <Image
              source={{ uri: "https://i.ibb.co/F8Bb0cW/phone-call-end.png" }}
              style={{
                height: 50,
                width: 50
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 100, width: "50%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            <Image
              source={{ uri: "https://i.ibb.co/MNBvwB0/record.png" }}
              style={{
                height: 50,
                width: 50
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Calling;
