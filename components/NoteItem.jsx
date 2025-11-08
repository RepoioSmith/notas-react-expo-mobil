import { StyleSheet, Text, View } from 'react-native';

const NoteItem = ({ note }) => {
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteText}>{note.text}</Text>
    </View>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  noteItem: {
    flex: 4,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    backgroundColor: '#000000',
    borderRadius: 10,
  },
  noteText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#ffff',
  },
});