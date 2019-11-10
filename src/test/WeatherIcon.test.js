import React from 'react';
import renderer from 'react-test-renderer';

import WeatherIcon from '../js/components/WeatherIcon/WeatherIcon';

describe('WeatherIcon', function() {
    test('snapshot renders', function() {
        const weatherStub = {
            weather: [{
                icon: '50n'
            }]
        };

        const component = renderer.create(<WeatherIcon weather={weatherStub} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});