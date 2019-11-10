import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import CloseButton from '../js/components/CloseButton/CloseButton';

const store = configureMockStore();

describe('CloseButton', function() {
    test('snapshot renders', function() {
        const cityStub = {
            position: {
                city: 'London'
            }
        };

        const storeMock = store();

        const component = renderer.create(<Provider store={storeMock} ><CloseButton city={cityStub} /></Provider>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});