import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Platform,
  ScrollView,
  StatusBar,
  SafeAreaView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CardFlip from 'react-native-card-flip';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import styles, { colors } from '../styles/index.style';
import SliderEntry from './SliderEntry';
import { ENTRIES1, ENTRIES2 } from '../static/entries';
import { scrollInterpolators, animatedStyles } from '../utils/animations';

const IS_ANDROID = Platform.OS === 'android';
const ACTIVE_SLIDE = 0;

export class Exam extends React.Component {
  static navigationOptions = {};

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: ACTIVE_SLIDE
    };
  }

  _renderItem({ item, index }) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }

  _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  _renderLightItem({ item, index }) {
    return <SliderEntry data={item} even={false} />;
  }

  _renderDarkItem({ item, index }) {
    return <SliderEntry data={item} even={true} />;
  }

  createCarousel(number, title) {
    const { activeSlide } = this.state;

    return (
      <View style={styles.exampleContainer}>
        <Text style={styles.subtitle}>{title}</Text>
        <Carousel
          ref={c => (this._slider1Ref = c)}
          data={ENTRIES1}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={ACTIVE_SLIDE}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          // inactiveSlideShift={20}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          autoplay={false}
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={index => this.setState({ activeSlide: index })}
        />
        <Pagination
          dotsLength={ENTRIES1.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.paginationContainer}
          dotColor={'rgba(255, 255, 255, 0.92)'}
          dotStyle={styles.paginationDot}
          inactiveDotColor={colors.black}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={this._slider1Ref}
          tappableDots={!!this._slider1Ref}
        />
      </View>
    );
  }

  // get gradient() {
  //   return (
  //     <LinearGradient
  //       colors={[colors.background1, colors.background2]}
  //       startPoint={{ x: 1, y: 0 }}
  //       endPoint={{ x: 0, y: 1 }}
  //       style={styles.gradient}
  //     />
  //   );
  // }

  render() {
    const carousel = this.createCarousel(
      1,
      'Memorize Bible verses with these nice flashcards.'
    );

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ImageBackground
            source={require('../img/pattern.jpeg')}
            style={{ width: '100%', height: '100%' }}
          >
            <StatusBar
              translucent={true}
              backgroundColor={'rgba(0, 0, 0, 0.3)'}
              barStyle={'light-content'}
            />
            {/* {this.gradient} */}
            <ScrollView
              style={styles.scrollview}
              scrollEventThrottle={200}
              directionalLockEnabled={true}
            >
              {carousel}
            </ScrollView>
          </ImageBackground>
        </View>
      </SafeAreaView>

      // <View style={styles.container}>
      // <ImageBackground source={require('../img/pattern.jpeg')} style={{ width: '100%', height: '100%' }}>
      //   <View style={styles.container1}>
      //     <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
      //       <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><Text style={styles.card_verse}>Proverbs 3:5</Text></TouchableOpacity>
      //       <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><Text style={styles.card_scripture}>Trust in the Lord with all your heart, and do not lean on your own understanding.</Text></TouchableOpacity>
      //     </CardFlip>
      //   </View>
      // </ImageBackground>
      // </View>
    );
  }
}
