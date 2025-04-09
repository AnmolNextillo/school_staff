import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {appColors} from '../../utils/color';
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
//   import { hitMyClassMate } from '../../redux/MyClassMateSlice';
import HomeProfileIcon from '../../assets/svg/HomeProfileIcon';

const StudentList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // const [myClassmates, setMyClassmates] = useState(null)

  // const responseClassMates = useSelector((state) => state.myClassMateReducer.data)

  // useEffect(() => {
  //   dispatch(hitMyClassMate())
  // }, [])

  // useEffect(() => {
  //   if (responseClassMates != null && responseClassMates.status === 1) {
  //     setMyClassmates(responseClassMates.data)
  //   }
  // }, [responseClassMates])

  const studentData = [
    {id: '1', name: 'Jobanpreet Singh', photo: null},
    {id: '2', name: 'Inaaya Arora', photo: null},
    {id: '3', name: 'Aarav Thakur', photo: null},
    {id: '4', name: 'Viraaj', photo: null},
    {id: '5', name: 'Gurniwaz Singh Samagh', photo: null},
    {id: '1', name: 'Jobanpreet Singh', photo: null},
    {id: '2', name: 'Inaaya Arora', photo: null},
    {id: '3', name: 'Aarav Thakur', photo: null},
    {id: '4', name: 'Viraaj', photo: null},
    {id: '5', name: 'Gurniwaz Singh Samagh', photo: null},
  ];

  const handleSubmit = () => {};

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        {' '}
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
          <Text style={styles.headerText}>Student List</Text>
        </View>
        <ScrollView style={{padding: 16}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={studentData}
            style={{paddingBottom: 32}}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <View
                style={{
                  backgroundColor: appColors.white,
                  flexDirection: 'row',
                  backgroundColor: appColors.white,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  marginTop: 8,
                  borderRadius: 10,
                }}>
                <Text style={{fontSize: 16, textAlignVertical: 'top'}}>
                  {index + 1 + '.'}
                </Text>
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      marginLeft: 8,
                      fontSize: 16,
                      fontWeight: '600',
                      color: appColors.primaryColor,
                    }}>
                    {item.name}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{alignItems: 'flex-start'}}>
                      <Text
                        style={{
                          backgroundColor: appColors.success_green,
                          width: 80,
                          textAlign: 'center',
                          margin: 8,
                          color: appColors.white,
                          paddingVertical: 4,
                          borderRadius: 4,
                        }}>
                        Present
                      </Text>
                    </TouchableOpacity>
                    <View style={{flex: 1}} />
                  </View>
                </View>

                <View style={styles.profileImage}>
                  <HomeProfileIcon height={32} width={32} />
                </View>
              </View>
            )}
          />
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Mark Attendence</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StudentList;

const styles = StyleSheet.create({
  headerText: {
    color: appColors.black,
    fontWeight: '500',
    marginRight: 16,
    textAlign: 'center',
    flex: 1,
    fontSize: 16,
  },
  columnSmall: {
    flex: 1,
  },
  columnLarge: {
    flex: 3,
  },
  columnMedium: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: appColors.lightGray,
  },
  profileImage: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: appColors.black,
    borderRadius: 6,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: appColors.primaryColor,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  buttonText: {
    color: appColors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
