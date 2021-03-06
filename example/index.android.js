/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import SelectInput from 'react-native-select-input-ios';

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';

export default class example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueSmall0: 0,
      valueSmall1: 1,
      valueLarge:  2,
    };
  }

  onSubmitEditingSmall0(value) {
    this.setState({
      valueSmall0: value
    });
  }

  onSubmitEditingSmall1(value) {
    this.setState({
      valueSmall1: value
    });
  }

  onSubmitEditingLarge(value) {
    this.setState({
      valueLarge: value
    });
  }

  getBananaImage() {
    let state = this.state;
    var bananaImage = require('./assets/sad-banana.gif');

    (state.valueSmall0 === 1) &&
    (state.valueSmall1 === 1) &&
    (state.valueLarge  === 1) &&
    (bananaImage = require('./assets/happy-banana.gif'));

    return bananaImage;
  }

  getPickerOptions() {
    return [
      { value: 0, label: 'Apple'      },
      { value: 1, label: 'Banana'     },
      { value: 2, label: 'Orange'     },
      { value: 3, label: 'Strawberry' }
    ];
  }

  render() {
    let state = this.state;
    let bananaImage = this.getBananaImage();

    return (
      <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
        <View style={styles.row}>
          <View style={styles.smallInputWrapper}>
            <Text style={styles.label}>
              Small dialog input
            </Text>

            <SelectInput
              value={state.valueSmall0}
              options={this.getPickerOptions()}
              onCancelEditing={() => console.log('onCancel')}
              onSubmitEditing={this.onSubmitEditingSmall0.bind(this)}
              style={[styles.selectInput, styles.selectInputSmall]}
              labelStyle={styles.selectInputInner}
            />
          </View>

          <View style={styles.smallInputWrapper}>
            <Text style={styles.label}>
              Small dropdown input
            </Text>

            <SelectInput
              value={state.valueSmall1}
              mode={'dropdown'}
              options={this.getPickerOptions()}
              onCancelEditing={() => console.log('onCancel')}
              onSubmitEditing={this.onSubmitEditingSmall1.bind(this)}
              style={[styles.selectInput, styles.selectInputSmall]}
              labelStyle={styles.selectInputInner}
            />
          </View>
        </View>

        <Text style={styles.label}>
          Large dialog input
        </Text>

        <SelectInput
          value={state.valueLarge}
          options={this.getPickerOptions()}
          onCancelEditing={() => console.log('onCancel')}
          onSubmitEditing={this.onSubmitEditingLarge.bind(this)}
          style={[styles.selectInput, styles.selectInputLarge]}
          labelStyle={styles.selectInputInner}
        />

        <View style={styles.bananawrapper}>
          <Image
            style={{width: 100, height: 100 }}
            source={bananaImage}
          />
        </View>

        <View style={styles.line}/>
      </ScrollView>
    );
  }
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const MARGIN_LARGE = 16;

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    flex:                     1,
    width:                    SCREEN_WIDTH,
    padding:                  MARGIN_LARGE,
    flexDirection:            'column',
    justifyContent:           'flex-start',
  },
  label: {
    fontSize:                 13,
    marginTop:                MARGIN_LARGE,
  },
  row: {
    flexDirection:            'row',
    justifyContent:           'space-between',
  },
  smallInputWrapper: {
    flexDirection:            'column'
  },
  selectInput: {
    backgroundColor:          '#FFFFFF',
    borderWidth:              1,
    borderColor:              'black',
    marginTop:                MARGIN_LARGE,
    overflow:                 'hidden'
  },
  selectInputInner: {
    height:                   36,
    borderRadius:             4,
  },
  selectInputSmall: {
    width:                    SCREEN_WIDTH * 0.5 - (MARGIN_LARGE * 2),
  },
  selectInputLarge: {
    width:                    SCREEN_WIDTH - (MARGIN_LARGE * 2),
  },
  bananawrapper: {
    margin:                   MARGIN_LARGE * 2,
    marginBottom:             0,
    flexDirection:            'column',
    alignItems:               'center',
    justifyContent:           'center',
  },
  line: {
    width:                    SCREEN_WIDTH * 0.75,
    height:                   1,
    marginLeft:               SCREEN_WIDTH * 0.075,
    backgroundColor:          'black',
  }
});

AppRegistry.registerComponent('example', () => example);
