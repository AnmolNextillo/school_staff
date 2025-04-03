import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {appColors} from '../../utils/color';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
// import { addTest } from '../../redux/AddTestSlice';
import {Picker} from '@react-native-picker/picker';

const AddTest = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const handleSubmit = () => {
    // if (title && subject && date && selectedClass) {
    //   const newTest = {
    //     title,
    //     subjectId: subject,
    //     date,
    //     classId: selectedClass,
    //   };
    //   dispatch(addTest(newTest));
    //   Alert.alert('Success', 'Test added successfully');
    //   navigation.goBack();
    // } else {
    //   Alert.alert('Error', 'Please fill in all fields');
    // }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            padding: 16,
            backgroundColor: appColors.white,
          }}>
          <Text
            style={{color: appColors.primaryColor}}
            onPress={() => navigation.goBack()}>
            Back
          </Text>
          <Text style={styles.headerText}>Add Test</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Test Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Subject"
            value={subject}
            onChangeText={setSubject}
          />
          <TextInput
            style={styles.input}
            placeholder="Date (YYYY-MM-DD)"
            value={date}
            onChangeText={setDate}
          />
          <View style={{borderRadius:16,backgroundColor:appColors.white,borderColor:appColors.grey,borderWidth:1,marginTop:12}}>
            <Picker
              selectedValue={selectedClass}
              style={styles.picker}
              onValueChange={itemValue => setSelectedClass(itemValue)}>
              <Picker.Item label="Select Class" value="" />
              <Picker.Item label="Class 1" value="class1" />
              <Picker.Item label="Class 2" value="class2" />
              <Picker.Item label="Class 3" value="class3" />
            </Picker>
          </View>
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="Description"
            value={description}
            onChangeText={(v) => setDescription(v)}
            multiline
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Add Test</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddTest;

const styles = StyleSheet.create({
  headerText: {
    color: appColors.black,
    fontWeight: '500',
    textAlign: 'center',
    marginRight: 16,
    flex: 1,
    fontSize: 16,
  },
  inputContainer: {
    padding: 16,
    backgroundColor:appColors.white,
    margin:16,
    borderRadius:16
  },
  input: {
    borderWidth: 1,
    borderColor: appColors.grey,
    borderRadius: 8,
    padding: 10,
    marginTop: 12,
    textAlignVertical: 'top',
  },
  descriptionInput: {
    height: 80,
  },
  picker: {
    borderWidth: 1,
    
    // borderColor: appColors.grey,
    // backgroundColor: appColors.white,
  },
  button: {
    backgroundColor: appColors.primaryColor,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop:16
  },
  buttonText: {
    color: appColors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
