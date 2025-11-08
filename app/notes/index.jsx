import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AddNoteModal from '../../components/AddNoteModal';
import NoteList from '../../components/NoteList';

const NoteScreen = () => {
  const [notes, setNotes] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState('');

  const addNewNote = () => {
    if (!newNote || newNote.trim() === '') return;

    setNotes((prevNotes) => [
      ...prevNotes,
      { id: Date.now().toString(), text: newNote },
    ]);
    setNewNote('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <NoteList notes={notes} />
      <TouchableOpacity
        style={styles.agregarButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>agregar</Text>
      </TouchableOpacity>
      <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setNewNote={setNewNote}
        addNewNote={addNewNote}
      />
    </View>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#7e7e7e',
  },
  agregarButton: {
    backgroundColor: '#ffff',
    borderRadius: 15,
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});