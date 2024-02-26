import { View } from 'react-native';

// import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

// const iosadid = "your-ios-id";
// const androidadid = "your-android-id";

// const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : Platform.OS === 'android' ? androidadid : iosadid;

export default function Banner() {

return(
  <View style={{backgroundColor: '#222', height: 70, width: '100%'}} />
//   <BannerAd
//   unitId={adUnitId}
// size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
)

}