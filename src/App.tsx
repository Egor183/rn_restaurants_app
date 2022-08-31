/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FC, useEffect} from 'react';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {store} from '@src/store';
import RootNavigation from './navigators';

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <RootNavigation />
        </SafeAreaProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
