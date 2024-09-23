import { YMaps, Map, Placemark } from 'react-yandex-maps';

export function YaMaps() {
  return (
    <>
      {' '}
      <YMaps>
        <Map
          width="100"
          defaultState={{ center: [68.962931, 33.05643], zoom: 16 }}
        >
          <Placemark geometry={[68.962931, 33.05643]} />
        </Map>
      </YMaps>
    </>
  );
}

export default YaMaps;
