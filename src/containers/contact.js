import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, Modal } from 'react-native';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [
        {
          name: "teknsi ainn PKU",
          phone: "0834934"
        }
      ],
      modal: false,
      nama: "",
      phone1: ""
    };
  }


  contact = () => {
    return this.state.contact.map((value, index) => {
      return (
        <TouchableOpacity style={{ height: 50, width: "100%", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#aeaeae", alignItems: "center", borderRadius: 10, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000", marginLeft: 5 }}>{value.name}</Text>
          <Image
            source={{ uri: "https://i.ibb.co/9bY1nsq/phone.png" }}
            style={{ height: 35, width: 35 }}
          />
        </TouchableOpacity>
      )
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 50, backgroundColor: "#aeaeae", alignItems: "center" }}>
          <TextInput
            placeholder="search contact"
          />
        </View>
        <View style={{ margin: 20 }}>
          <ScrollView>
            {this.contact()}
          </ScrollView>
        </View>
        <TouchableOpacity onPress={() => this.setState({ modal: !this.state.modal })} style={{ height: 80, width: 80, backgroundColor: "#aeaeae", position: "absolute", bottom: 20, right: 20, alignItems: "center", justifyContent: "center", borderRadius: 50 }}>
          <Text style={{ fontSize: 50, color: "white", fontWeight: "bold" }}>+</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modal}
          onRequestClose={() => {
            this.setState({
              modal: !this.state.modal
            })
          }}
        >
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }}>
            <View style={{ height: 200, width: "100%", backgroundColor: "white", justifyContent: "center", alignItems: 'center', }}>
              <TextInput
                placeholder='Nama'
                style={{ height: 50, width: "100%", marginLeft: 30, marginRight: 20 }}
                onChangeText={(nama) => this.setState({ nama: nama })}
              />
              <TextInput
                style={{ height: 50, width: "100%", marginLeft: 30, marginRight: 20 }}
                placeholder='Phone'
                onChangeText={(phone1) => this.setState({ phone1: phone1 })}
              />
              <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => {
                  this.state.contact.push(
                    {
                      name: this.state.nama,
                      phone: this.state.phone
                    }
                  )
                  this.setState({
                    contact: this.state.contact,
                    modal: !this.state.modal
                  })
                }} style={{ height: 50, width: "40%", backgroundColor: "#aeaeae", justifyContent: "center", alignItems: "center", marginLeft: 20, marginRight: 20, borderRadius: 20 }}>
                  <Text>Simpan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 50, width: "40%", backgroundColor: "#aeaeae", justifyContent: "center", alignItems: "center", marginLeft: 20, marginRight: 20, borderRadius: 20 }}>
                  <Text>Batal</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </Modal>
      </View>
    );
  }
}

export default Contact;
