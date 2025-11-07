import { useState } from "react";
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    { id: 1, text: "nota uno" },
    { id: 2, text: "nota dos" },
    { id: 3, text: "nota tres" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState("");

  const addNewNote = () => {
    if(newNote.trim()==='') return
  
    setNotes((prevNotes) =>[
      ...prevNotes,
      {id: Date.now.toString(), text: newNote}
    ])

    setNewNote('')
  }
  

  return (
    <View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.textItem}>{item.text} </Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.addButon}
        on
        Press={() => setModalVisible(true)}
      >
        <Text style={styles.addButtomText}>Agregar</Text>
      </TouchableOpacity>
      {
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Agregar una Nota Nueva</Text>
              <TextInput
                style={styles.input}
                placeholder="Teclear una descripcion"
                placeholderTextColor="#aaa"
                onCHangeText={setNewNote}
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => {
                    addNewNote();
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.buttonText}>Agregar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      }
    </View>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffffff",
  },
  noteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(72, 255, 133, 0.87)",
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  noteText: {
    fontSize: 18,
  },
  addButon: {
    position: "absolute",
    bottom: 50,
    right: 20,
    left: 80,
    backgroundcolor: "#666",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtomText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalButtons:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  cancelButton:{
    backgroundColor:'#ccc',
    padding:10,
    borderRadius:5,
    marginRight:10,
    alignItems:'center'
  },
  cancelButtonText:{
    fontSize:16,
    color:'#333',

  }
});
