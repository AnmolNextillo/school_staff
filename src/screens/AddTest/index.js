import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {appColors} from '../../utils/color';
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {clearAddTest, hitAddTest} from '../../redux/AddTestSlice';
import {hitSubjectList} from '../../redux/GetSujectListSlice';
import {hitClassList} from '../../redux/GetClassListSlice';
import AnnualCalenderIcon from '../../assets/svg/AnnualCalenderIcon';
import {handleShowMessage} from '../../utils/Constants';

const AddTest = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const responseSubject = useSelector(state => state.getSubjectReducer.data);
  const responseClasses = useSelector(state => state.getClassReducer.data);
  const responseAddTest = useSelector(state => state.addTestReducer.data);

  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [date, setDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedClass, setSelectedClass] = useState('');
  const [classList, setClassList] = useState(null);
  const [subjectList, setSubjectList] = useState(null);

  useEffect(() => {
    dispatch(hitClassList());
  }, []);

  useEffect(() => {
    if (selectedClass) {
      const payload = {classId: selectedClass};
      dispatch(hitSubjectList(payload));
    }
  }, [selectedClass]);

  useEffect(() => {
    if (responseClasses && responseClasses.status === 1) {
      setClassList(responseClasses.data);
      setSelectedClass(responseClasses.data[0]._id);
    }
  }, [responseClasses]);

  useEffect(() => {
    if (responseSubject && responseSubject.status === 1) {
      setSubjectList(responseSubject.data);
    }
  }, [responseSubject]);

  const handleSubmit = () => {
    if (title && subject && date && selectedClass && totalMarks) {
      const payload = {
        title: title,
        subjectId: subject,
        date: date,
        classId: selectedClass,
        sectionId: '',
        addedByStaffId: '',
        media: '',
        totalMarks: totalMarks,
      };
      console.log("Payload Add Test ====> ",payload)
      dispatch(hitAddTest(payload));
    } else {
      // Alert.alert('Error', 'Please fill in all fields');
      handleShowMessage('Please fill in all fields', 'danger');
    }
  };

  useEffect(() => {
    if (responseAddTest != null && responseAddTest.status === 1) {
      handleShowMessage('Test added successfully','success')
      navigation.goBack();
      dispatch(clearAddTest())
    }else{
      if(responseAddTest!=null){
        handleShowMessage(responseAddTest.message,'danger')
      }
    }
  }, [responseAddTest]);

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

          {/* Class Picker */}
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedClass}
              style={styles.picker}
              onValueChange={itemValue => setSelectedClass(itemValue)}>
              {classList?.map(item => (
                <Picker.Item
                  key={item._id}
                  label={item.name}
                  value={item._id}
                />
              ))}
            </Picker>
          </View>

          {/* Subject Picker */}
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={subject}
              style={styles.picker}
              onValueChange={itemValue => setSubject(itemValue)}>
              {subjectList?.map(item => (
                <Picker.Item
                  key={item._id}
                  label={item.name}
                  value={item._id}
                />
              ))}
            </Picker>
          </View>

          {/* Date Picker */}
          <View
            style={[
              styles.input,
              {flexDirection: 'row', alignContent: 'center'},
            ]}>
            <Text
              style={{color: date ? appColors.black : appColors.grey, flex: 1}}>
              {date || 'Select Date'}
            </Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <AnnualCalenderIcon height={24} width={24} />
            </TouchableOpacity>
          </View>
          {showDatePicker && (
            <DateTimePicker
              value={date ? new Date(date) : new Date()}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) {
                  const formattedDate = selectedDate
                    .toISOString()
                    .split('T')[0]; // YYYY-MM-DD
                  setDate(formattedDate);
                }
              }}
            />
          )}

          <TextInput
            style={styles.input}
            placeholder="Total Marks"
            value={totalMarks}
            keyboardType="numeric"
            onChangeText={setTotalMarks}
          />
          {/* Description */}
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
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
    backgroundColor: appColors.white,
    margin: 16,
    borderRadius: 16,
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
    width: '100%',
  },
  pickerContainer: {
    borderRadius: 16,
    backgroundColor: appColors.white,
    borderColor: appColors.grey,
    borderWidth: 1,
    marginTop: 12,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: appColors.primaryColor,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: appColors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
