/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { isBoolean, isIOS, isString } from '@react-native-firebase/app/lib/common';
import {
  createModuleNamespace,
  FirebaseModule,
  getFirebaseRoot,
} from '@react-native-firebase/app/lib/internal';
import { Platform } from 'react-native';
import ReactNativeFirebaseAppCheckProvider from './ReactNativeFirebaseAppCheckProvider';

import version from './version';

export {
  addTokenListener,
  getToken,
  initializeAppCheck,
  setTokenAutoRefreshEnabled,
} from './modular/index';

const statics = {};

const namespace = 'appCheck';

const nativeModuleName = 'RNFBAppCheckModule';

class FirebaseAppCheckModule extends FirebaseModule {
  getIsTokenRefreshEnabledDefault() {
    // no default to start
    isTokenAutoRefreshEnabled = undefined;

    return isTokenAutoRefreshEnabled;
  }

  newReactNativeFirebaseAppCheckProvider() {
    return new ReactNativeFirebaseAppCheckProvider();
  }

  initializeAppCheck(options) {
    // determine token refresh setting, if not specified
    if (!isBoolean(options.isTokenAutoRefreshEnabled)) {
      options.isTokenAutoRefreshEnabled = this.firebaseJson.app_check_token_auto_refresh;
    }

    // If that was not defined, attempt to use app-wide data collection setting per docs:
    if (!isBoolean(options.isTokenAutoRefreshEnabled)) {
      options.isTokenAutoRefreshEnabled = this.firebaseJson.app_data_collection_default_enabled;
    }

    // If that also was not defined, the default is documented as true.
    if (!isBoolean(options.isTokenAutoRefreshEnabled)) {
      options.isTokenAutoRefreshEnabled = true;
    }
    this.native.setTokenAutoRefreshEnabled(options.isTokenAutoRefreshEnabled);

    if (options.provider === undefined || options.provider.providerOptions === undefined) {
      throw new Error('Invalid configuration: no provider or no provider options defined.');
    }
    if (Platform.OS === 'android') {
      if (!isString(options.provider.providerOptions.android.provider)) {
        throw new Error(
          'Invalid configuration: no android provider configured while on android platform.',
        );
      }
      return this.native.configureProvider(
        options.provider.providerOptions.android.provider,
        options.provider.providerOptions.android.debugToken,
      );
    }
    if (Platform.OS === 'ios' || Platform.OS === 'macos') {
      if (!isString(options.provider.providerOptions.apple.provider)) {
        throw new Error(
          'Invalid configuration: no apple provider configured while on apple platform.',
        );
      }
      return this.native.configureProvider(
        options.provider.providerOptions.apple.provider,
        options.provider.providerOptions.apple.debugToken,
      );
    }
    throw new Error('Unsupported platform: ' + Platform.OS);
  }

  activate(siteKeyOrProvider, isTokenAutoRefreshEnabled) {
    if (!isString(siteKeyOrProvider)) {
      throw new Error('siteKeyOrProvider must be a string value to match firebase-js-sdk API');
    }

    // We wrap our new flexible interface, with compatible defaults
    rnfbProvider = new ReactNativeFirebaseAppCheckProvider();
    rnfbProvider.configure({
      android: {
        provider: 'playIntegrity',
      },
      apple: {
        provider: 'deviceCheck',
      },
      web: {
        provider: 'reCaptchaV3',
        siteKey: 'none',
      },
    });

    return this.initializeAppCheck({ provider: rnfbProvider, isTokenAutoRefreshEnabled });
  }

  setTokenAutoRefreshEnabled(isTokenAutoRefreshEnabled) {
    console.log('$$$***$$$ Token auto refresh enabled here $$$***$$$');
    this.native.setTokenAutoRefreshEnabled(isTokenAutoRefreshEnabled);
  }

  getToken(forceRefresh) {
    console.log('$$$***$$$ forceRefresh happens here. The value is: ', forceRefresh);
    if (!forceRefresh) {
      return this.native.getToken(false);
    } else {
      return this.native.getToken(true);
    }
  }

  onTokenChanged() {
    // iOS does not provide any native listening feature
    if (isIOS) {
      console.log('$$$***$$$ Token has been changed here $$$***$$$');
      return () => {};
    }
    // TODO unimplemented on Android
    console.log('$$$***$$$ Token has been changed here $$$***$$$');
    return () => {};
  }
}

// import { SDK_VERSION } from '@react-native-firebase/app-check';
export const SDK_VERSION = version;

// import appCheck from '@react-native-firebase/app-check';
// appCheck().X(...);
export default createModuleNamespace({
  statics,
  version,
  namespace,
  nativeModuleName,
  nativeEvents: false, // TODO implement ['appcheck-token-changed'],
  hasMultiAppSupport: true,
  hasCustomUrlOrRegionSupport: false,
  ModuleClass: FirebaseAppCheckModule,
});

// import appCheck, { firebase } from '@react-native-firebase/app-check';
// appCheck().X(...);
// firebase.appCheck().X(...);
export const firebase = getFirebaseRoot();
