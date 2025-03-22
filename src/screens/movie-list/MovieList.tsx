import {ICONS} from '#constants/ICONS';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {MovieListStyles} from './MovieListStyles';
import {useStyles} from 'react-native-unistyles';
import {FLEX_1} from '#constants/STYLES';
import {LogoScrollView} from '#molecules/LogoScrollView/LogoScrollView';

const MovieList = () => {
  const {styles} = useStyles(MovieListStyles);

  return (
    <SafeAreaView style={FLEX_1}>
      <LogoScrollView Icon={ICONS.IC_LOGO}>
        <>
          <Text style={{fontSize: 100}}>Movie List</Text>
          <Text style={{fontSize: 100}}>Movie List</Text>
          <Text style={{fontSize: 100}}>Movie List</Text>
          <Text style={{fontSize: 100}}>Movie List</Text>
          <Text style={{fontSize: 100}}>Movie List</Text>
          <Text style={{fontSize: 100}}>Movie List</Text>
          <Text style={{fontSize: 100}}>Movie List</Text>
          <Text style={{fontSize: 100}}>Movie List</Text>
          <Text style={{fontSize: 100}}>Movie List</Text>
          <Text style={{fontSize: 100}}>Movie List</Text>
          <Text style={{fontSize: 100}}>Movie List</Text>
          <Text style={{fontSize: 100}}>Movie List</Text>
          <Text style={{fontSize: 100}}>Movie List</Text>
          <Text style={{fontSize: 100}}>Movie List</Text>
          <Text style={{fontSize: 100}}>Movie List</Text>
          <Text style={{fontSize: 100}}>Movie List</Text>
          <Text style={{fontSize: 100}}>Movie List</Text>
          <Text style={{fontSize: 100}}>Movie List</Text>
          <Text style={{fontSize: 100}}>Movie List</Text>
          <Text style={{fontSize: 100}}>Movie List</Text>
          <Text style={{fontSize: 100}}>Movie List</Text>
        </>
      </LogoScrollView>
    </SafeAreaView>
  );
};
export default MovieList;
