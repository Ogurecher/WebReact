import React from 'react';
import renderer from 'react-test-renderer';

import Temperature from '../js/components/Temperature/Temperature';

describe('Temperature', function() {
    test('snapshot renders', function() {
        const weatherStub = {
            main: {
                temp: '1'
            }
        };

        const component = renderer.create(<Temperature weather={weatherStub} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});