import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Favourites from '../js/components/Favourites/Favourites';

const store = configureMockStore();

describe('Favourites', function() {
    test('snapshot renders with empty favourites', function() {
        const citiesStub = [];
        const favouritesStub = [];

        const component = renderer.create(<Favourites cities={citiesStub} favourites={favouritesStub} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('snapshot renders with non-empty favourites', function() {
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
            position: {
                city: 'London'
            },
            weather: weatherStub,
            loading: 0,
            errorMsg: null
        };
        const citiesStub = [cityStub];
        const favouritesStub = ['London'];


        const storeMock = store();

        const component = renderer.create(<Provider store={storeMock}><Favourites cities={citiesStub} favourites={favouritesStub} /></Provider>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});