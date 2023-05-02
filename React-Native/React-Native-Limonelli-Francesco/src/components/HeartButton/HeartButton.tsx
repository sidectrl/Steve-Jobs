import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { addBookmark, removeBookmark } from '../../redux/actions/bookmarkActions';
import { Result } from '../../models/Data';


type Pisello = {
  item: Result
}

export const HeartButton = ({ item }: Pisello) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const handlePress = () => {
    setIsFavorite(!isFavorite);
    !isFavorite ? dispatch(addBookmark(item)) : dispatch(removeBookmark(item.id.name));
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View>
        <Icon name={isFavorite ? 'heart' : 'heart-o'} size={30} color={isFavorite ? 'red' : 'black'} />
      </View>
    </TouchableOpacity>
  );
};