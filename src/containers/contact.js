import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, Modal,BackHandler } from 'react-native';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [
        {
          id: 1,
          name: "Teknisi Ainn PKU",
          phone: "0834934"
        },
        {
          id: 2,
          name: "Teknisi Ainn PKU",
          phone: "0834934"
        },
        {
          id: 3,
          name: "Teknisi Aan PKU",
          phone: "0834934"
        }
      ],
      modal: false,
      nama: "",
      phone1: ""
    };
    this.arrayholder = this.state.contact;
  }

  searchFilterFunction = text => {
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    console.log(newData)
    this.setState({ contact: newData });
  };

  componentDidMount() {
    this.handler = BackHandler.addEventListener('hardwareBackPress', () => { return BackHandler.exitApp() })
  }

  componentWillUnmount() {
    BackHandler.addEventListener('hardwareBackPress', () => { return BackHandler.exitApp() })
  }
  


  contact = () => {
    return this.state.contact.map((value, index) => {
      return (
        <TouchableOpacity
          onLongPress={() => {
            this.setState({
              contact: this.state.contact.filter(obj => obj.id !== value.id)
            })
          }}
          key={index} style={{ borderRadius: 5, height: 70, width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#495565", borderWidth: 2, borderColor: "#068BFB", marginBottom: 5 }}>
          <Text style={{ fontSize: 12, fontWeight: "bold", color: "white", marginLeft: 5 }}>{value.name}</Text>
          <Image
            source={{ uri: "https://i.ibb.co/9bY1nsq/phone.png" }}
            style={{ height: 40, width: 40, marginRight: 5 }}
          />
        </TouchableOpacity>
      )
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 50, backgroundColor: "#aeaeae", alignItems: "center" }}>
          <View style={{
            marginTop: 5,
          }}>
            <TextInput
              placeholder="Search Contact"
              onChangeText={text => this.searchFilterFunction(text)}
            />
          </View>
        </View>
        <View style={{ margin: 10 }}>
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
