import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {LatLng, Marker} from 'react-native-maps';

const CustomMapView = ({
  latitude,
  longitude,
  markerTitle = 'Selected Location',
  markerDescription = 'This is your pinned location',
  onMarkerDrag,
}: {
  latitude: number;
  longitude: number;
  markerTitle?: string;
  markerDescription?: string;
  onMarkerDrag?: (coords: {latitude: number; longitude: number}) => void;
}) => {
  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true}
        followsUserLocation={true}>
        <Marker
          coordinate={{latitude, longitude}}
          title="Selected Location"
          description="This is your pinned location"
          draggable
          onDragEnd={e => onMarkerDrag?.(e.nativeEvent.coordinate)}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
  },
});

export default CustomMapView;
