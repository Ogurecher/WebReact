import React from 'react';
import renderer from 'react-test-renderer';

import WeatherList from '../js/components/WeatherList/WeatherList';

describe('WeatherList', function() {
    test('snapshot renders', function() {
        const weatherStub = {
            wind: {
                deg: 'winddeg',
                speed: 'windspd'
            },
            weather: [{
                description: 'desc'
            }],
            main: {
                pressure: 'pressure',
                humidity: 'humidity'
            },
            coord: {
                lat: 'lat',
                lon: 'lon'
            }
        };

        const component = renderer.create(<WeatherList weather={weatherStub} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});