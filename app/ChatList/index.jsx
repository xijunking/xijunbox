import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { withNavigation } from '@react-navigation/compat';
import {
  Alert,
  // Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Button } from '@rneui/base';



export default ChatList = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const [xijunname,setXjunname] = useState('99')

    const navigation = useNavigation();

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };


    const onPressLearnMore = () => {
        // Alert
      }
      const xrender = () => {
        return (
          <View>
            你好世界
          </View>
        )
      }

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />

            {/* <Header /> */}
            <View style={styles.messList}>
                <FlatList
                    data={[
                        { title: '张三', key: 'item1', mess: '遇事不决' },
                        { title: '李四', key: 'item2', mess: '便问春风' },
                        { title: '王麻子', key: 'item3', mess: '春风不语' },
                        { title: '周扒皮', key: 'item4', mess: '谨随己心' },
                    ]}
                    renderItem={({ item, index, separators }) => (
                        <TouchableOpacity
                            // <TouchableHighlight
                            onPress={() => {
                                // alert('Pressed!')
                                // setXjunname('88');
                                navigation.navigate('ChatDetails')
                            }}
                        // onShowUnderlay={separators.highlight}
                        // onHideUnderlay={separators.unhighlight}
                        >
                            <View style={styles.chatbox}>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Image
                                        style={styles.tinyLogo}
                                        source={{
                                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                                        }}
                                    />
                                </View>

                                <View>

                                    <View style={styles.text1}>
                                        <Text>{item.title || 'xijun'}</Text>
                                        <Text>11:36</Text>
                                    </View>

                                    <View style={styles.text2}>
                                        <Text>{item.mess}</Text>
                                    </View>
                                </View>

                            </View>
                            {/* </TouchableHighlight> */}
                        </TouchableOpacity>
                    )}
                />
            </View>

        </SafeAreaView>
    )

    
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    messList: {
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
  
      backgroundColor: '#FFF'
    },
  
    chatbox: {
      // display: 'flex'
      flexDirection: 'row',
  
      // backgroundColor: '#bfa',
      marginBottom: 30
    },
  
    tinyLogo: {
      width: 40,
      height: 40,
      borderRadius: 20,
  
      marginRight: 10
    },
    text1: {
      marginBottom: 10,
      width: 300,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    text2: {
  
    },
  
  });

