import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {appColors} from '../../utils/color';
import {useDispatch, useSelector} from 'react-redux';
//   import {hitHomeWork} from '../../redux/HomeWorkSlice';
import {useEffect, useState} from 'react';
import moment from 'moment';
import PlusIcon from '../../assets/svg/PlusIcon';
import {hitHomework} from '../../redux/GetHomeworkSlice';
import {useIsFocused} from '@react-navigation/core';

const HomeWorkList = ({navigation, route}) => {
  const {classId,className} = route.params;

  const dispatch = useDispatch();
  const responseHomeWork = useSelector(state => state.getHomeworkReducer.data);
  const [homeWork, setHomeWork] = useState(null);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      console.log("Class id ====> ",classId)
      const payload = {
        classId: classId,
        type: 1,
      };
      dispatch(hitHomework(payload));
    }
  }, [isFocused]);

  useEffect(() => {
    if (responseHomeWork != null && responseHomeWork.status == 1) {
      setHomeWork(responseHomeWork.data);
    }
  }, [responseHomeWork]);

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
          <Text style={styles.headerText}>Homework ({className})</Text>
        </View>
        <ScrollView style={{padding: 16}}>
          <View style={styles.container}>
            {homeWork != null &&
              homeWork.map((item,index) => (
                <TouchableOpacity style={styles.container} key={index}>
                  <View style={styles.dateContainer}>
                    {/* <MaterialIcons name="event" size={16} color="#3b82f6" /> */}
                    <View style={styles.dotedLine}></View>
                    <Text style={styles.dateText}>
                      {moment(item.date).format('MMM D, YYYY')}
                    </Text>
                    <View style={styles.dotedLine}></View>
                  </View>

                  <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('Homework', {data:item})}
                    >
                    <Text style={styles.title}>{item.subject}</Text>
                    <Text
                      style={styles.description}
                      numberOfLines={3}
                      ellipsizeMode="tail">
                      {item.description}
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              ))}
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.fab}
          onPress={() => navigation.navigate('AddHomework',{classId:classId,className:className})}>
          {/* <Text style={{color:appColors.white,fontSize:36}}>+</Text> */}
          <PlusIcon />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeWorkList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: appColors.black,
    fontWeight: '500',
    marginRight: 16,
    textAlign: 'center',
    flex: 1,
    fontSize: 16,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotedLine: {
    borderWidth: 1,
    borderColor: appColors.gray,
    borderStyle: 'dashed', // Make it dotted
    flex: 1, // Take equal space on both sides
  },
  dateText: {
    marginHorizontal: 8, // Give space to the date text
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
    color: appColors.primaryColor,
  },
  card: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: appColors.primaryColor,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 5,
    padding: 16,
  },
});
