import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  SafeAreaView,
  FlatList,
} from "react-native";

import NamesListItem from "./.expo/components/NamesListItem";
import TextInputField from "./.expo/components/TextInputField";
import { StatusBar } from "expo-status-bar";


export default function App() {
  const [namesList, setNamesList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function showModal() {
    setModalVisible(true);
  }
  function hideModal() {
    setModalVisible(false);
  }
  function addingNameHandler(enteredText) {
    setNamesList((currentNames) => [
      { text: enteredText, key: Math.random().toString() },
      ...currentNames,
    ]);
    hideModal();
  }
  function deleteNameHandler(key) {
    setNamesList((currentNames) =>
      currentNames.filter((item) => item.key !== key)
    );
  }
  return (
    <>
    <StatusBar style="dark" />
    <SafeAreaView style={styles.container}>
      <Text style={styles.dummyText}>Alexandra application</Text>
      <Button
        style={styles.button}
        title="Who is Alexandra"
        onPress={showMessage}
      />
      <Button title="add Name" onPress={showModal} />
      <TextInputField notVisible={hideModal} 
      visible={modalVisible} 
      addHandler={addingNameHandler} />
      <View style={styles.listNames}>
        <Text>List of names</Text>
        <FlatList
          data={namesList}
          renderItem={(item) => {
            return (
              <NamesListItem
                text={item.item.text}
                id={item.item.key}
                deleteHandler={deleteNameHandler}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
    </>
  );
}

const showMessage = (event) => {
  return Alert.alert("Sashka", "kakashka", [
    {
      text: "Yes",
    },
    {
      text: "no",
    },
  ]);
};

const styles = StyleSheet.create({
  listNames: {
    color: "blue",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    flex: 1,
   // flexDirection:"column",
    alignItems:"center",
  //  width: "90%",
    gap: 20,
  },

  dummyText: {
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "white",
    fontSize: 22,
    borderWidth: 11,
    borderColor: "purple",
  },
  button: {
    color: "#f194ff",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
   // alignItems: "center",
   // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "orange",
   // justifyContent: "flex-start",
    gap: 20,
    // justifyContent: 'center',
  },  
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});
