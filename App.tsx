/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
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

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

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
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="头孢氨卡胶囊" children={xrender()}>
            你好，细菌！
            哈哈哈
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>

          <View>
            <Text>
              你好世界
            </Text>

            <Button title='发送'/>
            <Switch>
            </Switch>
            <TextInput></TextInput>
          </View>

        </View>


      </ScrollView> */}
      <Header />
      <View style={styles.messList}>
        <FlatList
          data={[
            { title: '张三', key: 'item1', mess: '遇事不决' },
            { title: '李四', key: 'item2', mess: '便问春风' },
            { title: '王麻子', key: 'item3', mess: '春风不语' },
            { title: '周扒皮', key: 'item4', mess: '谨随己心' },
          ]}
          renderItem={({ item, index, separators }) => (
            <TouchableHighlight
              onPress={() => {
                // alert('Pressed!')
              }}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}>
              <View style={styles.chatbox}>
                <View style={{flex:1,justifyContent:'center'}}>
                  <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                  />
                </View>

                <View>

                  <View style={styles.text1}>
                    <Text>{item.title}</Text>
                    <Text>11:36</Text>
                  </View>

                  <View style={styles.text2}>
                    <Text>{item.mess}</Text>
                  </View>
                </View>

              </View>
            </TouchableHighlight>
          )}
        />
      </View>

    </SafeAreaView>
  );
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
    paddingTop:20,
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

export default App;
