/**
 * @format
 */

import { AppRegistry, StatusBar } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/storage/redux/store';

const root = () => {
    return <>
        <StatusBar
          hidden
        />
        <Provider store={store}>
            <App />
        </Provider>
    </>
}

AppRegistry.registerComponent(appName, () => root);
