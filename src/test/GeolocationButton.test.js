import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import GeolocationButton from '../js/components/GeolocationButton/GeolocationButton';

const middlewares = [thunk];
const store = configureMockStore(middlewares);

describe('GeolocationButton', function() {
    test('snapshot renders', function() {
        const storeMock = store();

        const geolocationMock = {
            getCurrentPosition: jest.fn()
        };
        global.navigator.geolocation = geolocationMock;

        const component = renderer.create(<Provider store={storeMock} ><GeolocationButton /></Provider>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});