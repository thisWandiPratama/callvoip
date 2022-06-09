import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

class Dial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: []
    };
  }

  render() {
    console.log(this.state.phone)
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 100, width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB", marginTop: 5 }}>
          <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>{this.state.phone.toString().replace(/,/g, '')}</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
          <TouchableOpacity onPress={() => {
            this.state.phone.push(1)
            this.setState({
              phone: this.state.phone
            })
          }} style={{ height: 100, width: "33.3333333333%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.state.phone.push(2)
            this.setState({
              phone: this.state.phone
            })
          }
          } style={{ height: 100, width: "33.3333333333%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.state.phone.push(3)
            this.setState({
              phone: this.state.phone
            })
          }
          } style={{ height: 100, width: "33.3333333333%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.state.phone.push(4)
            this.setState({
              phone: this.state.phone
            })
          }
          } style={{ height: 100, width: "33.3333333333%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.state.phone.push(5)
            this.setState({
              phone: this.state.phone
            })
          }
          } style={{ height: 100, width: "33.3333333333%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.state.phone.push(6)
            this.setState({
              phone: this.state.phone
            })

          }
          } style={{ height: 100, width: "33.3333333333%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.state.phone.push(7)
            this.setState({
              phone: this.state.phone
            })
          }
          } style={{ height: 100, width: "33.3333333333%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.state.phone.push(8)
            this.setState({
              phone: this.state.phone
            })
          }
          } style={{ height: 100, width: "33.3333333333%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.state.phone.push(9)
            this.setState({
              phone: this.state.phone
            })
          }
          } style={{ height: 100, width: "33.3333333333%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.state.phone.push("*")
            this.setState({
              phone: this.state.phone
            })
          }} style={{ height: 100, width: "33.3333333333%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.state.phone.push(0)
            this.setState({
              phone: this.state.phone
            })
          }
          } style={{ height: 100, width: "33.3333333333%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.state.phone.push("#")
            this.setState({
              phone: this.state.phone
            })
          }} style={{ height: 100, width: "33.3333333333%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>#</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 100, width: "33.3333333333%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            <Image
              source={{ uri: "https://i.ibb.co/n8H1rxL/user-1.png" }}
              style={{ height: 50, width: 50 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 100, width: "33.3333333333%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB", backgroundColor: "yellowgreen" }}>
            <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.state.phone.pop()
            this.setState({
              phone: this.state.phone
            })
          }
          } style={{ height: 100, width: "33.3333333333%", alignItems: "center", justifyContent: "center", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB" }}>
            <Image
              source={{ uri: "https://i.ibb.co/q1RYGZV/backspace-arrow.png" }}
              style={{ height: 50, width: 50 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Dial;
