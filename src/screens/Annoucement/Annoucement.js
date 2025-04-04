import {  Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appColors } from '../../utils/color'
import { getImage } from '../../utils/getImages';

const Annoucement = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            padding: 16,
            backgroundColor: appColors.white,
          }}>
          <Text
            style={{ color: appColors.primaryColor }}
            onPress={() => navigation.goBack()}>
            Back
          </Text>
          <Text style={styles.headerText}>Annoucement</Text>
        </View>
        <ScrollView style={{ padding: 16 }}>
          <Image
            source={getImage('user')}
            style={styles.imageBoxStyle}
            resizeMode="contain"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Annoucement

const styles = StyleSheet.create({
  headerText: {
    color: appColors.black,
    fontWeight: '500',
    marginRight: 16,
    textAlign: 'center',
    flex: 1,
    fontSize: 16,
  },
  imageBoxStyle: {
    height: '100%',
    width: '100%',
  },
})