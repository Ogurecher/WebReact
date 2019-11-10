import React from 'react';
import renderer from 'react-test-renderer';

import CityLabel from '../js/components/CityLabel/CityLabel';

describe('CityLabel', function() {
    test('snapshot renders', function() {
        const weatherStub = {
            name: 'London'
        };

        const component = renderer.create(<CityLabel weather={weatherStub} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});