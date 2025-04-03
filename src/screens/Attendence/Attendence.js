import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/color';

const Attendence = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View
        style={{
          flexDirection: 'row',
          padding: 16,
          backgroundColor: appColors.white,
        }}>
        {/* <Text
                  style={{color: appColors.primaryColor}}
                  onPress={() => navigation.goBack()}>
                  Back
                </Text> */}
        <Text style={styles.headerText}>Attendence</Text>
      </View>
      <TouchableOpacity style={styles.classStyle}>
          <Text style={styles.textStyle}>Class 1</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Attendence;

const styles = StyleSheet.create({
  headerText: {
    color: appColors.black,
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
    fontSize: 16,
  },
  classStyle:{
    margin:16,
    backgroundColor:appColors.white,
    borderRadius:16,
    padding:16,
    borderWidth:1,
    borderColor:appColors.primaryColor
  },
  textStyle:{
    color:appColors.primaryColor,
    fontSize:16
  }
});
