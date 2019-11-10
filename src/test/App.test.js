import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from '../js/components/App/App';

const middlewares = [thunk];
const store = configureMockStore(middlewares);

describe('App', function() {
    test('snapshot renders', function() {
        const storeMock = store({
            cities: [
                {
                    position: {
                        city: 'London'
                    }
                }
            ],
            favourites: ['London']
        });

        const geolocationMock = {
            getCurrentPosition: jest.fn()
        };
        global.navigator.geolocation = geolocationMock;

        const weatherMock = {};

        global.fetch = () => {
            return Promise.resolve(weatherMock);
        };

        const component = renderer.create(<Provider store={storeMock} ><App /></Provider>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});