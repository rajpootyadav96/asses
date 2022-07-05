import React, { useEffect, useState } from 'react'
import { View,SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import Input from '../../components/Input'
import Label from '../../components/Label'
import styles from './style'
import { URL } from '../../api/apiConfig'



const Home = (props) => {
  const [data, setData] = useState()                                //define useState for storing data inside state
  const img = [{ img: require('../../constants/images/home.png') },
   { img: require('../../constants/images/location.png') }, 
   { img: require('../../constants/images/search.png') }, 
   { img: require('../../constants/images/userIc.png') },]

  useEffect(() => {                                                  //Life cycle method UseEffect use for api call
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setData(json))                                 //response data set to  state variable
      .catch((error) => console.error(error))
  }, []);

//rendering flatlist for horizontal view

  const renderPlaces1 = (dataItem) => {
    return (

      <View style={styles.countryCard}>
        <Image style={styles.countryCardImage}
          source={{ uri: dataItem?.item?.thumbnailUrl }}
        />
        <View style={{ width: '30%' }}>
          <Label
            value={dataItem?.item?.title}
            LabeltxtStyle={styles.countryCardLabel}
          />
        </View>

      </View>

    )
  }

  //rendering flatlist in two columns

  const renderPlaces = (dataItem) => {
    return (
      <View style={styles.cityCardContainer}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image style={styles.cityCardImage}
            source={{ uri: dataItem?.item?.url }}
          />
        </View>

        <View style={styles.cityCardBottomContainer}>
          <View style={{ marginTop: 10 }}>
            <Label
              value={dataItem?.item?.title}
              LabeltxtStyle={styles.beachText}
            />
            <Label
              value={dataItem?.item?.id}
              LabeltxtStyle={{ fontSize: 12 }}
            />
          </View>
          <TouchableOpacity style={{ marginTop: 10 }}>
            <Image style={styles.heartIcon}
              source={require('../../constants/images/heart.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  // item seperator for flatlist

  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 15,
          width: 15,
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 20, flex: 1 }}>
        <Header
          screenName={'Home'}
          userIcon={require('../../constants/images/user.jpg')}
        />
        <View style={{ flex: 1 }}>
          <Label
            value={'Your Tour Plans'}
            LabeltxtStyle={styles.topLabel}
          />
          <View style={styles.searchContainer}>
            <Image source={require('../../constants/images/search.png')}
              style={styles.searchIcon} />
            <Input
              bottomBorder={styles.input}
              placeholder={'Search'}
            />
          </View>
          <View style={styles.view1}>
            <Label
              value={'Find Your Place'}
              LabeltxtStyle={styles.textLabel1}
            />
            <FlatList
              style={{ marginTop: 15 }}
              data={data}
              renderItem={renderPlaces1}
              horizontal={true}
              ItemSeparatorComponent={ItemDivider}
            />
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <View style={styles.placeTop}>
            <Label
              value={'Popular Places'}
              LabeltxtStyle={styles.countryCardLabel}
            /><Label
              value={'Explor'}
              LabeltxtStyle={styles.text1}
            />
          </View>

          <FlatList
            style={{ marginTop: 20 }}
            data={data}
            renderItem={renderPlaces}
            numColumns={2}
            ItemSeparatorComponent={ItemDivider}

            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
          />
        </View>
      </View>
      <View style={styles.bottomNavContainer}>
        {img?.map((item) => {
          return (
            <TouchableOpacity>
              <Image style={styles.navIcon}
                source={item?.img} />
            </TouchableOpacity>
          )
        })
        }

      </View>
    </SafeAreaView>
  )
}

export default Home
