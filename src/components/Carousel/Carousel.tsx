import {View, Text, FlatList, Image, useWindowDimensions} from 'react-native';
import { useState } from 'react';
import colors from '../../theme/color';

interface ICarousel {
  images: string[];
}

const Carousel = ({images}: ICarousel) => {
  const {width} = useWindowDimensions();
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={{width: width, aspectRatio: 1}} />
        )}
        horizontal
        pagingEnabled
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          width: "100%",
        }}>
       {images.map( (_, index) => (<View
       key={index}
          style={{
            width: 10,
            aspectRatio: 1,
            backgroundColor: activeImageIndex === index ? colors.primary  : colors.white,
            borderRadius: 5,
            margin: 10,
            marginHorizontal: 5
          }}
        /> ))}
      </View>
    </View>
  );
};

export default Carousel;
