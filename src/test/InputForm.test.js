import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import InputForm from '../js/components/InputForm/InputForm';

const store = configureMockStore();

describe('InputForm', function() {
    test('snapshot renders', function() {
        const storeMock = store();

        const component = renderer.create(<Provider store={storeMock} ><InputForm /></Provider>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});