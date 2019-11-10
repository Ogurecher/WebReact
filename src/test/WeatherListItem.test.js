import React from 'react';
import renderer from 'react-test-renderer';

import WeatherListItem from '../js/components/WeatherListItem/WeatherListItem';

describe('WeatherListItem', function() {
    test('snapshot renders', function() {
        const labelStub = 'Wind';
        const contentStub = [`10deg`, `; 10 m/s`];

        const component = renderer.create(<WeatherListItem label={labelStub} content={contentStub} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});