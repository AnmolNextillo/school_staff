import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { appColors } from '../../utils/color'
import { getImage } from '../../utils/getImages';
import { useDispatch, useSelector } from 'react-redux';
import PlusIcon from '../../assets/svg/PlusIcon';

const Annoucement = ({ navigation }) => {
  
  // const dispatch = useDispatch()
  // const [announcement, setAnnouncement] = useState(null)
  // const responseAnnouncements = useSelector((state) => state.announcementsReducer.data)

  // useEffect(() => {
  //   dispatch(hitAnnouncements())
  // }, [])

  // useEffect(() => {
  //   if (responseAnnouncements != null && responseAnnouncements.status == 1) {
  //     setAnnouncement(responseAnnouncements.data)
  //   }
  // }, [responseAnnouncements])

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
          {/* {announcement != null &&
            announcement.map((item, index) => (
              
            ))} */}
        </ScrollView>

        <TouchableOpacity
          style={styles.fab}
          onPress={() => navigation.navigate("AddAnnoucement")}>
          <PlusIcon />
        </TouchableOpacity>
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
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 20,
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
    padding:16
  },
})