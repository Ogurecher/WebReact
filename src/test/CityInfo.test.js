import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import CityInfo from '../js/components/CityInfo/CityInfo';

const store = configureMockStore();

describe('CityInfo', function() {
    test('snapshot renders info', function() {
        const weatherStub = {
            name: 'London',
            wind: {
                deg: 'winddeg',
                speed: 'windspd'
            },
            weather: [{
                description: 'desc',
                icon: '50n'
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

        const cityStub = {
            weather: weatherStub,
            loading: 0,
            errorMsg: null
        };

        const storeMock = store();

        const component = renderer.create(<Provider store={storeMock}><CityInfo city={cityStub} /></Provider>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('snapshot renders loading', function() {
        const cityStub = {
            loading: 1
        };

        const storeMock = store();

        const component = renderer.create(<Provider store={storeMock}><CityInfo city={cityStub} /></Provider>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('snapshot renders error', function() {
        const cityStub = {
            errorMsg: 'Location not found'
        };

        const storeMock = store();

        const component = renderer.create(<Provider store={storeMock}><CityInfo city={cityStub} /></Provider>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});