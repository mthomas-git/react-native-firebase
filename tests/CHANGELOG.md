# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [18.2.0](https://github.com/invertase/react-native-firebase/compare/v18.1.0...v18.2.0) (2023-07-13)

### Bug Fixes

- **app, ios:** incorporate firebase-ios-sdk 10.12.0 ([#7231](https://github.com/invertase/react-native-firebase/issues/7231)) ([ee66459](https://github.com/invertase/react-native-firebase/commit/ee66459cd214ffb84ce2d4e15eef79d047f075ab))

## [18.1.0](https://github.com/invertase/react-native-firebase/compare/v18.0.0...v18.1.0) (2023-06-22)

### Features

- **installations:** Firebase JS SDK V9 modular API ([#7095](https://github.com/invertase/react-native-firebase/issues/7095)) ([08cb0c2](https://github.com/invertase/react-native-firebase/commit/08cb0c2a14ed1513ece59bae0598d169118521c3))
- **remote-config:** realtime config updates ([9ded619](https://github.com/invertase/react-native-firebase/commit/9ded619e81c1523d7fa0cdbda8fc94929450a967))

### Bug Fixes

- **app, sdk:** adopt firebase-ios-sdk 10.11.0 ([f40cb5b](https://github.com/invertase/react-native-firebase/commit/f40cb5b46276dbd7977dc72f4a8bdf783d282b03))

## [18.0.0](https://github.com/invertase/react-native-firebase/compare/v17.5.0...v18.0.0) (2023-06-05)

### ⚠ BREAKING CHANGES

- **app, sdk:** this version of the underlying firebase-ios-sdk has
  a minimum Xcode requirement of 14.1 which transitively implies a macOS
  minimum version of 12.5
- **app, sdks:** firebase-ios-sdk 10.8.0 and higher require Xcode 13.3+,
  which transitively requires macOS 12.0+. You must update your CI build environments
  to meet these minimums as well as your development environments - if you have older
  hardware that still works but cannot be upgraded normally, you may like:
  https://dortania.github.io/OpenCore-Legacy-Patcher/

### Features

- **app, sdk:** ios-sdk 10.10.0, requires Xcode 14.1+ / macOS 12.5+ ([3122918](https://github.com/invertase/react-native-firebase/commit/3122918c19c27696caf51f30caafdcaa76807db8))
- **app, sdks:** ios-sdk 10.8.0 requires Xcode 13.3+; android-sdk 31.5.0 ([86dc4d5](https://github.com/invertase/react-native-firebase/commit/86dc4d5d08a4cc7c788b057b5411ccdeb413e13e))

## [17.5.0](https://github.com/invertase/react-native-firebase/compare/v17.4.3...v17.5.0) (2023-05-11)

### Features

- **firestore:** Firestore `Filter` instance. Use `Filter`, `Filter.or()` & `Filter.and()` in Firestore queries. ([#7045](https://github.com/invertase/react-native-firebase/issues/7045)) ([f7ec3d1](https://github.com/invertase/react-native-firebase/commit/f7ec3d1970f4fa8cc9752bb3cd8f1550b2a457c5))

### [17.4.3](https://github.com/invertase/react-native-firebase/compare/v17.4.2...v17.4.3) (2023-04-26)

**Note:** Version bump only for package react-native-firebase-tests

### [17.4.2](https://github.com/invertase/react-native-firebase/compare/v17.4.1...v17.4.2) (2023-04-05)

**Note:** Version bump only for package react-native-firebase-tests

### [17.4.1](https://github.com/invertase/react-native-firebase/compare/v17.4.0...v17.4.1) (2023-04-01)

**Note:** Version bump only for package react-native-firebase-tests

## [17.4.0](https://github.com/invertase/react-native-firebase/compare/v17.3.2...v17.4.0) (2023-03-25)

### Features

- **storage:** Firebase JS SDK v9 modular API ([#6958](https://github.com/invertase/react-native-firebase/issues/6958)) ([02df92e](https://github.com/invertase/react-native-firebase/commit/02df92e8d76a60e7cfaa80d65d98f4c905a89937))

### Bug Fixes

- **app-distribution, android:** update the gradle plugin to match BoM 31.2.3 release ([ebfb413](https://github.com/invertase/react-native-firebase/commit/ebfb413670d189f77384e05000e13e48abac4516))
- **ios:** bump firebase-ios-sdk to 10.7.0 ([7103473](https://github.com/invertase/react-native-firebase/commit/7103473e0f0b43e2e994aa7cb9ba553906f9cf46))

### [17.3.2](https://github.com/invertase/react-native-firebase/compare/v17.3.1...v17.3.2) (2023-03-05)

### Bug Fixes

- **app, ios:** bump firebase-ios-sdk to 10.6.0 ([06a6f69](https://github.com/invertase/react-native-firebase/commit/06a6f6945280f2b22f50f9327c57c8222c80ae8a))

### [17.3.1](https://github.com/invertase/react-native-firebase/compare/v17.3.0...v17.3.1) (2023-02-23)

**Note:** Version bump only for package react-native-firebase-tests

## [17.3.0](https://github.com/invertase/react-native-firebase/compare/v17.2.0...v17.3.0) (2023-02-15)

### Features

- **analytics:** Expose modular API that matches the Firebase web JS SDK v9 API ([#6816](https://github.com/invertase/react-native-firebase/issues/6816)) ([a42551a](https://github.com/invertase/react-native-firebase/commit/a42551aadb98ba6fdd18dde627b436e667d0a014))
- **app-check:** Expose modular API that matches the Firebase web JS SDK v9 API ([#6912](https://github.com/invertase/react-native-firebase/issues/6912)) ([bf02676](https://github.com/invertase/react-native-firebase/commit/bf0267609251a5b8e4245c300678fe7d7ea53d92))

## [17.2.0](https://github.com/invertase/react-native-firebase/compare/v17.1.0...v17.2.0) (2023-02-15)

### Features

- **app, android:** firebase-android-sdk 31.2.0 ([87156e7](https://github.com/invertase/react-native-firebase/commit/87156e75e16775db14ef8f9bf6b0049b15ee1277))

## [17.1.0](https://github.com/invertase/react-native-firebase/compare/v17.0.0...v17.1.0) (2023-02-09)

### Features

- **app, ios:** firebase-ios-sdk 10.5.0 ([cc80d7c](https://github.com/invertase/react-native-firebase/commit/cc80d7c11f533b292d1f5b681a05a206ddc93e9c))
- **perf:** Expose modular API that matches the Firebase web JS SDK v9 API ([#6771](https://github.com/invertase/react-native-firebase/issues/6771)) ([4e170ea](https://github.com/invertase/react-native-firebase/commit/4e170ead24035cd0154b153dcf1e8d69d6ab7ac9))
- **remote-config:** Expose modular API that matches the Firebase web JS SDK v9 API ([#6868](https://github.com/invertase/react-native-firebase/issues/6868)) ([e1504aa](https://github.com/invertase/react-native-firebase/commit/e1504aabd6ffba5c7d4b85c46ed44e12e0b9f916))

## [17.0.0](https://github.com/invertase/react-native-firebase/compare/v16.7.0...v17.0.0) (2023-02-02)

### ⚠ BREAKING CHANGES

- **app, ios:** You must have an APNS token before calling getToken to
  get an FCM token on iOS. Previously it was not required. See documentation
  for setAPNSToken if you are using getToken in testing or have disabled
  FCM Swizzling, and use setAPNSToken to set a token before using getToken

### Features

- **app-check:** add custom factory/provider; supports all providers ([ee7df85](https://github.com/invertase/react-native-firebase/commit/ee7df855ec0a573df5aa2e26261adf9c292aa7d5))
- **app, ios:** adopt firebase-ios-sdk 10.4.0 ([1b8df4c](https://github.com/invertase/react-native-firebase/commit/1b8df4c8e55d474c09e301f9c7b58b6128ae6485))

## [16.7.0](https://github.com/invertase/react-native-firebase/compare/v16.6.0...v16.7.0) (2023-01-28)

### Features

- **perf:** add custom screen rendering traces for android ([#6588](https://github.com/invertase/react-native-firebase/issues/6588)) ([9f2498d](https://github.com/invertase/react-native-firebase/commit/9f2498d29ee3780cba5a7a69fde8f7c370ad723b))

## [16.6.0](https://github.com/invertase/react-native-firebase/compare/v16.5.2...v16.6.0) (2023-01-27)

### Features

- **messaging:** Expose modular API that matches the Firebase web JS SDK v9 API ([#6806](https://github.com/invertase/react-native-firebase/issues/6806)) ([da82c10](https://github.com/invertase/react-native-firebase/commit/da82c1036051f0518da0401de24cef24c7ac091f))

### [16.5.2](https://github.com/invertase/react-native-firebase/compare/v16.5.1...v16.5.2) (2023-01-23)

**Note:** Version bump only for package react-native-firebase-tests

### [16.5.1](https://github.com/invertase/react-native-firebase/compare/v16.5.0...v16.5.1) (2023-01-20)

**Note:** Version bump only for package react-native-firebase-tests

## [16.5.0](https://github.com/invertase/react-native-firebase/compare/v16.4.6...v16.5.0) (2022-12-16)

### Features

- **app:** migrate `app` module to a modular API ([#6694](https://github.com/invertase/react-native-firebase/issues/6694)) ([c285016](https://github.com/invertase/react-native-firebase/commit/c285016618bb79fd3a559d5fdcb983bb2aadaa77))
- **functions:** Expose modular API that matches the Firebase web JS SDK v9 API ([#6764](https://github.com/invertase/react-native-firebase/issues/6764)) ([0b0b2e5](https://github.com/invertase/react-native-firebase/commit/0b0b2e5d5ae8ca34725f0115e48ddb072d94630e))

### Bug Fixes

- **app, sdks:** ios-sdk 10.3.0 / android-sdk 31.1.1 ([00708b6](https://github.com/invertase/react-native-firebase/commit/00708b680cd837ed23d41b27bb76b2895e719f79))

### [16.4.6](https://github.com/invertase/react-native-firebase/compare/v16.4.5...v16.4.6) (2022-11-18)

### Bug Fixes

- **app, android:** firebase-android-sdk 31.1.0 ([af089c0](https://github.com/invertase/react-native-firebase/commit/af089c00496aa55e66ea83e87b8cf54c8144c9fb))

### [16.4.5](https://github.com/invertase/react-native-firebase/compare/v16.4.4...v16.4.5) (2022-11-16)

### Bug Fixes

- **app, ios:** firebase-ios-sdk 10.2.0 ([443f460](https://github.com/invertase/react-native-firebase/commit/443f460279f6c41ce7aaaeec03a19b14135953eb))

### [16.4.4](https://github.com/invertase/react-native-firebase/compare/v16.4.3...v16.4.4) (2022-11-14)

**Note:** Version bump only for package react-native-firebase-tests

### [16.4.3](https://github.com/invertase/react-native-firebase/compare/v16.4.2...v16.4.3) (2022-11-06)

**Note:** Version bump only for package react-native-firebase-tests

### [16.4.2](https://github.com/invertase/react-native-firebase/compare/v16.4.1...v16.4.2) (2022-11-04)

**Note:** Version bump only for package react-native-firebase-tests

### [16.4.1](https://github.com/invertase/react-native-firebase/compare/v16.4.0...v16.4.1) (2022-11-02)

**Note:** Version bump only for package react-native-firebase-tests

## [16.4.0](https://github.com/invertase/react-native-firebase/compare/v16.3.1...v16.4.0) (2022-10-30)

**Note:** Version bump only for package react-native-firebase-tests

### [16.3.1](https://github.com/invertase/react-native-firebase/compare/v16.3.0...v16.3.1) (2022-10-28)

### Bug Fixes

- **app, sdks:** firebase-ios-sdk 10.1.0 / firebase-android-sdk 31.0.2 ([8367c98](https://github.com/invertase/react-native-firebase/commit/8367c9858b8d6e2a0d689d1adcc5c88c6dc377fa))

## [16.3.0](https://github.com/invertase/react-native-firebase/compare/v16.2.0...v16.3.0) (2022-10-26)

**Note:** Version bump only for package react-native-firebase-tests

## [16.2.0](https://github.com/invertase/react-native-firebase/compare/v16.1.1...v16.2.0) (2022-10-23)

**Note:** Version bump only for package react-native-firebase-tests

### [16.1.1](https://github.com/invertase/react-native-firebase/compare/v16.1.0...v16.1.1) (2022-10-21)

**Note:** Version bump only for package react-native-firebase-tests

## [16.1.0](https://github.com/invertase/react-native-firebase/compare/v16.0.0...v16.1.0) (2022-10-20)

**Note:** Version bump only for package react-native-firebase-tests

## [16.0.0](https://github.com/invertase/react-native-firebase/compare/v15.7.1...v16.0.0) (2022-10-19)

**Note:** Version bump only for package react-native-firebase-tests

## [15.7.1](https://github.com/invertase/react-native-firebase/compare/v15.7.0...v15.7.1) (2022-10-19)

**Note:** Version bump only for package react-native-firebase-tests

# [15.7.0](https://github.com/invertase/react-native-firebase/compare/v15.6.0...v15.7.0) (2022-10-01)

**Note:** Version bump only for package react-native-firebase-tests

# [15.6.0](https://github.com/invertase/react-native-firebase/compare/v15.5.0...v15.6.0) (2022-09-17)

### Bug Fixes

- **app, ios:** correctly handle firebase.json if it has UTF-8 ([4e3ac01](https://github.com/invertase/react-native-firebase/commit/4e3ac01c94389299dffc53e6d8480760f8b18033))

# [15.5.0](https://github.com/invertase/react-native-firebase/compare/v15.4.0...v15.5.0) (2022-09-16)

### Features

- **android:** firebase-android-sdk 30.5.0 ([abe7620](https://github.com/invertase/react-native-firebase/commit/abe7620c35cd91bd105d64fa64777868a3482435))
- **ios:** bump firebase-ios-sdk to 9.6.0 ([0ad70a9](https://github.com/invertase/react-native-firebase/commit/0ad70a90e01ac37c3129a170ebff47738e551a18))

# [15.4.0](https://github.com/invertase/react-native-firebase/compare/v15.3.0...v15.4.0) (2022-08-27)

### Features

- **app, ios:** bump firebase-ios-sdk to 9.5.0 ([feac7f8](https://github.com/invertase/react-native-firebase/commit/feac7f8c8b85c3cf87a34dc9a75ddb7b7b9c034b))

# [15.3.0](https://github.com/invertase/react-native-firebase/compare/v15.2.0...v15.3.0) (2022-08-07)

### Bug Fixes

- **app, sdk:** firebase-android-sdk 30.3.1 / firebase-ios-sdk 9.4.0 ([1fd7fc8](https://github.com/invertase/react-native-firebase/commit/1fd7fc837a31bad179ccf5d463c80f578d7cbd15)), closes [#6327](https://github.com/invertase/react-native-firebase/issues/6327)

# [15.2.0](https://github.com/invertase/react-native-firebase/compare/v15.1.1...v15.2.0) (2022-07-21)

### Features

- **sdks:** firebase-ios-sdk 9.3.0 / firebase-android-sdk 30.3.0 ([e03dcd1](https://github.com/invertase/react-native-firebase/commit/e03dcd19a530e178022aaebd3266e31e037c9550))

## [15.1.1](https://github.com/invertase/react-native-firebase/compare/v15.1.0...v15.1.1) (2022-06-28)

**Note:** Version bump only for package react-native-firebase-tests

# [15.1.0](https://github.com/invertase/react-native-firebase/compare/v15.0.0...v15.1.0) (2022-06-28)

### Features

- **analytics, ios:** implement firebase.json toggle to override default SKAdNewtork registration ([5da99bd](https://github.com/invertase/react-native-firebase/commit/5da99bde9f58a5d660ab9c59c61bf91db01cd962))
- **analytics, ios:** implement on-device conversion ([a1df996](https://github.com/invertase/react-native-firebase/commit/a1df996b36f2b5eb68c6443c49c5185437573fba)), closes [/firebase.google.com/support/release-notes/ios#analytics_1](https://github.com//firebase.google.com/support/release-notes/ios/issues/analytics_1) [#6321](https://github.com/invertase/react-native-firebase/issues/6321)
- **android, sdk:** use firebase-android-sdk 30.2.0 ([66e6fb0](https://github.com/invertase/react-native-firebase/commit/66e6fb0885c4f2885aeec140a9c0655a5eedd8df))
- **ios, sdk:** update to firebase-ios-sdk 9.2.0 ([7affa79](https://github.com/invertase/react-native-firebase/commit/7affa7989c64012bd6fc89fcc0ecf988e7f4e92a))

# [15.0.0](https://github.com/invertase/react-native-firebase/compare/v14.11.1...v15.0.0) (2022-06-20)

**Note:** Version bump only for package react-native-firebase-tests

## [14.11.1](https://github.com/invertase/react-native-firebase/compare/v14.11.0...v14.11.1) (2022-06-17)

**Note:** Version bump only for package react-native-firebase-tests

# [14.11.0](https://github.com/invertase/react-native-firebase/compare/v14.10.1...v14.11.0) (2022-05-27)

### Features

- **android, sdk:** firebase-android-sdk 30.1.0 ([b0462d4](https://github.com/invertase/react-native-firebase/commit/b0462d4d34d1518a50daeca09288bf4aa0e0f695))

## [14.10.1](https://github.com/invertase/react-native-firebase/compare/v14.10.0...v14.10.1) (2022-05-26)

**Note:** Version bump only for package react-native-firebase-tests

# [14.10.0](https://github.com/invertase/react-native-firebase/compare/v14.9.4...v14.10.0) (2022-05-26)

**Note:** Version bump only for package react-native-firebase-tests

## [14.9.4](https://github.com/invertase/react-native-firebase/compare/v14.9.3...v14.9.4) (2022-05-14)

### Bug Fixes

- **android:** firebase-android-sdk 30.0.1 ([c5e6b41](https://github.com/invertase/react-native-firebase/commit/c5e6b41eaec0d7238665495caf3e0f9572427e1e)), closes [#6158](https://github.com/invertase/react-native-firebase/issues/6158)

## [14.9.3](https://github.com/invertase/react-native-firebase/compare/v14.9.2...v14.9.3) (2022-05-10)

**Note:** Version bump only for package react-native-firebase-tests

## [14.9.2](https://github.com/invertase/react-native-firebase/compare/v14.9.1...v14.9.2) (2022-05-10)

**Note:** Version bump only for package react-native-firebase-tests

## [14.9.1](https://github.com/invertase/react-native-firebase/compare/v14.9.0...v14.9.1) (2022-04-28)

**Note:** Version bump only for package react-native-firebase-tests

# [14.9.0](https://github.com/invertase/react-native-firebase/compare/v14.8.1...v14.9.0) (2022-04-27)

### Features

- **firestore:** named query and data bundle APIs ([#6199](https://github.com/invertase/react-native-firebase/issues/6199)) ([96591e0](https://github.com/invertase/react-native-firebase/commit/96591e0dac957383c503e94fbf7bf0379d5569f2))

## [14.8.1](https://github.com/invertase/react-native-firebase/compare/v14.8.0...v14.8.1) (2022-04-25)

**Note:** Version bump only for package react-native-firebase-tests

# [14.8.0](https://github.com/invertase/react-native-firebase/compare/v14.7.0...v14.8.0) (2022-04-19)

### Features

- **ios, sdk:** bump firebase-ios-sdk to 8.15.0 ([377b465](https://github.com/invertase/react-native-firebase/commit/377b465bd5ac93d18f5d3792d3c0eb2ef80c8d7e))

# [14.7.0](https://github.com/invertase/react-native-firebase/compare/v14.6.0...v14.7.0) (2022-03-23)

### Features

- **ios, sdk:** bump to firebase-ios-sdk 8.14.0 ([ba1ddb5](https://github.com/invertase/react-native-firebase/commit/ba1ddb5927f12f5f0abe8a4b23b3fd68fa8626bd))

# [14.6.0](https://github.com/invertase/react-native-firebase/compare/v14.5.1...v14.6.0) (2022-03-23)

### Bug Fixes

- **storage, ios:** fix build failure for catalyst compiles ([a6dd0cd](https://github.com/invertase/react-native-firebase/commit/a6dd0cdef3bb66701fec883d163d20f14d384f10))

### Features

- **sdks:** firebase-ios-sdk 8.13.0 ([95da53e](https://github.com/invertase/react-native-firebase/commit/95da53ef6cdd1b67ade4a53dbd8164bd906b9d53))

## [14.5.1](https://github.com/invertase/react-native-firebase/compare/v14.5.0...v14.5.1) (2022-03-05)

**Note:** Version bump only for package react-native-firebase-tests

# [14.5.0](https://github.com/invertase/react-native-firebase/compare/v14.4.0...v14.5.0) (2022-02-15)

**Note:** Version bump only for package react-native-firebase-tests

# [14.4.0](https://github.com/invertase/react-native-firebase/compare/v14.3.3...v14.4.0) (2022-02-13)

**Note:** Version bump only for package react-native-firebase-tests

## [14.3.3](https://github.com/invertase/react-native-firebase/compare/v14.3.2...v14.3.3) (2022-02-12)

**Note:** Version bump only for package react-native-firebase-tests

## [14.3.2](https://github.com/invertase/react-native-firebase/compare/v14.3.1...v14.3.2) (2022-02-10)

### Bug Fixes

- **ios, sdk:** bump to firebase-ios-sdk 8.12.1 ([da6cf01](https://github.com/invertase/react-native-firebase/commit/da6cf013815c5f8f43e4c03e721f3c270a5834e2))

## [14.3.1](https://github.com/invertase/react-native-firebase/compare/v14.3.0...v14.3.1) (2022-02-07)

**Note:** Version bump only for package react-native-firebase-tests

# [14.3.0](https://github.com/invertase/react-native-firebase/compare/v14.2.4...v14.3.0) (2022-01-26)

### Features

- **app-check:** android debug token argument for app-check ([#6026](https://github.com/invertase/react-native-firebase/issues/6026)) ([6f67503](https://github.com/invertase/react-native-firebase/commit/6f6750309cc6b275772cb9c1bac7e67c2eb7d4ba))

## [14.2.4](https://github.com/invertase/react-native-firebase/compare/v14.2.3...v14.2.4) (2022-01-24)

### Bug Fixes

- **android, sdk:** bump firebase-android-sdk + versions in docs ([8bda4be](https://github.com/invertase/react-native-firebase/commit/8bda4be52bd4b19b2d330c8f95d132d7a5b5885a))

## [14.2.3](https://github.com/invertase/react-native-firebase/compare/v14.2.2...v14.2.3) (2022-01-20)

**Note:** Version bump only for package react-native-firebase-tests

## [14.2.2](https://github.com/invertase/react-native-firebase/compare/v14.2.1...v14.2.2) (2022-01-06)

**Note:** Version bump only for package react-native-firebase-tests

## [14.2.1](https://github.com/invertase/react-native-firebase/compare/v14.2.0...v14.2.1) (2021-12-31)

**Note:** Version bump only for package react-native-firebase-tests

# [14.2.0](https://github.com/invertase/react-native-firebase/compare/v14.1.0...v14.2.0) (2021-12-31)

**Note:** Version bump only for package react-native-firebase-tests

# [14.1.0](https://github.com/invertase/react-native-firebase/compare/v14.0.1...v14.1.0) (2021-12-18)

### Features

- **analytics, config:** expose automatic screenview reporting toggle ([#5948](https://github.com/invertase/react-native-firebase/issues/5948)) ([8836c01](https://github.com/invertase/react-native-firebase/commit/8836c01dcfa2f478f973a1a54253509c3368d963))

## [14.0.1](https://github.com/invertase/react-native-firebase/compare/v14.0.0...v14.0.1) (2021-12-15)

**Note:** Version bump only for package react-native-firebase-tests

# [14.0.0](https://github.com/invertase/react-native-firebase/compare/v13.1.1...v14.0.0) (2021-12-14)

**Note:** Version bump only for package react-native-firebase-tests

## [13.1.1](https://github.com/invertase/react-native-firebase/compare/v13.1.0...v13.1.1) (2021-12-14)

### Bug Fixes

- **deps:** AGP7.0.4, firebase-android-sdk 29.0.2, javascript deps ([55d0a36](https://github.com/invertase/react-native-firebase/commit/55d0a36a0addc54e347f26bb8ee88bb38b0fa4a6))

# [13.1.0](https://github.com/invertase/react-native-firebase/compare/v13.0.1...v13.1.0) (2021-12-02)

### Features

- **android, emulator:** add firebase.json config element to bypass localhost remap ([#5852](https://github.com/invertase/react-native-firebase/issues/5852)) ([ddf3f5f](https://github.com/invertase/react-native-firebase/commit/ddf3f5f43d2c8547879934c3169d3e01c0db44c0))
- **sdks:** firebase-ios-sdk 8.10.0 / firebase-android-sdk 29.0.1 ([f6949c9](https://github.com/invertase/react-native-firebase/commit/f6949c9f3669df6d8b3f78bbee97bee2f36b7df3))

## [13.0.1](https://github.com/invertase/react-native-firebase/compare/v13.0.0...v13.0.1) (2021-11-05)

### Bug Fixes

- **ios, sdks:** bump firebase-ios-sdk to 8.9.1 ([4871131](https://github.com/invertase/react-native-firebase/commit/4871131c3587e138398719ef5537731ee4fbe90a))

# [13.0.0](https://github.com/invertase/react-native-firebase/compare/v12.9.3...v13.0.0) (2021-10-31)

- feat(sdks, android)!: firebase-android-sdk v29 / minSdkVersion API19 / target+compile API31 (#5825) ([f60afe1](https://github.com/invertase/react-native-firebase/commit/f60afe158b2dc823bd7169e36c3e428470576c7e)), closes [#5825](https://github.com/invertase/react-native-firebase/issues/5825)

### Features

- **ios, sdks:** bump firebase-ios-sdk to 8.9.0 ([bb9ba50](https://github.com/invertase/react-native-firebase/commit/bb9ba50ff4df82980943c0a76069d432e5371ed6))

### BREAKING CHANGES

- firebase-android-sdk 29 requires android/build.gradle minSdkVersion 19 (as required in react-native 0.64+)

## [12.9.3](https://github.com/invertase/react-native-firebase/compare/v12.9.2...v12.9.3) (2021-10-22)

**Note:** Version bump only for package react-native-firebase-tests

## [12.9.2](https://github.com/invertase/react-native-firebase/compare/v12.9.1...v12.9.2) (2021-10-17)

**Note:** Version bump only for package react-native-firebase-tests

## [12.9.1](https://github.com/invertase/react-native-firebase/compare/v12.9.0...v12.9.1) (2021-10-10)

**Note:** Version bump only for package react-native-firebase-tests

# [12.9.0](https://github.com/invertase/react-native-firebase/compare/v12.8.0...v12.9.0) (2021-10-03)

### Features

- **sdk:** bump firebase-ios-sdk to 8.8.0 ([c56bdb3](https://github.com/invertase/react-native-firebase/commit/c56bdb3171e998efa1b7860519a06a5fb3515ac2))

# [12.8.0](https://github.com/invertase/react-native-firebase/compare/v12.7.5...v12.8.0) (2021-09-14)

### Features

- **sdk:** firebase-ios-sdk to 8.7.0 / firebase-android-sdk 28.4.1 ([ee79ab3](https://github.com/invertase/react-native-firebase/commit/ee79ab334335767e0b1603190ad0ceda890e0c10))

## [12.7.5](https://github.com/invertase/react-native-firebase/compare/v12.7.4...v12.7.5) (2021-09-04)

**Note:** Version bump only for package react-native-firebase-tests

## [12.7.4](https://github.com/invertase/react-native-firebase/compare/v12.7.3...v12.7.4) (2021-08-31)

**Note:** Version bump only for package react-native-firebase-tests

## [12.7.3](https://github.com/invertase/react-native-firebase/compare/v12.7.2...v12.7.3) (2021-08-24)

**Note:** Version bump only for package react-native-firebase-tests

## [12.7.2](https://github.com/invertase/react-native-firebase/compare/v12.7.1...v12.7.2) (2021-08-21)

**Note:** Version bump only for package react-native-firebase-tests

## [12.7.1](https://github.com/invertase/react-native-firebase/compare/v12.7.0...v12.7.1) (2021-08-20)

**Note:** Version bump only for package react-native-firebase-tests

# [12.7.0](https://github.com/invertase/react-native-firebase/compare/v12.6.1...v12.7.0) (2021-08-19)

### Features

- **app-distribution:** Implement Firebase App Distribution module ([8fa1263](https://github.com/invertase/react-native-firebase/commit/8fa1263bc657b7d1d0630bc193097cb5d4aa631a))
- **app, config:** implement setLogLevel API ([cac7be3](https://github.com/invertase/react-native-firebase/commit/cac7be33ca70b37103ba8635ed64e755e0728c9d))
- **app, ios:** adopt firebase-ios-sdk 8.6.0 ([22d79f1](https://github.com/invertase/react-native-firebase/commit/22d79f136363f2ba67e9a0920c69a71fdffdb444))
- **firestore, emulator:** implement easier useEmulator API ([f039196](https://github.com/invertase/react-native-firebase/commit/f0391966c34ff845120ac8f45c8a8cc4b4f68885))
- **installations:** implement Firebase Installations module ([3ef3410](https://github.com/invertase/react-native-firebase/commit/3ef3410e265515c8fd3653728727a0048ffdbd87))

## [12.6.1](https://github.com/invertase/react-native-firebase/compare/v12.6.0...v12.6.1) (2021-08-17)

**Note:** Version bump only for package react-native-firebase-tests

# [12.6.0](https://github.com/invertase/react-native-firebase/compare/v12.5.0...v12.6.0) (2021-08-16)

### Bug Fixes

- **app-check, ios:** allow token auto refresh config in firebase.json ([b9670c1](https://github.com/invertase/react-native-firebase/commit/b9670c1194e5460fbfcc0d90b462062eaed8538b))
- **in-app-messaging, config:** implement in_app_messaging_auto_collection_enabled firebase.json setting ([9d11ce9](https://github.com/invertase/react-native-firebase/commit/9d11ce93b81fe7818cb264bac1b36c60daac3463))
- **sdks, android:** firebase-android-sdk 28.3.1, google-services plugin 4.3.10 ([4562cd8](https://github.com/invertase/react-native-firebase/commit/4562cd8ccb70c3f964e9c038d2eca6eb87bcba60))

### Features

- **analytics, config:** expose all the native data collection toggles ([f5eaffb](https://github.com/invertase/react-native-firebase/commit/f5eaffbfaf7e165b205692dd5b1b16e87b09d5a2))
- **app, config:** implement app_data_collection_default_enabled firebase.json key ([1e47d45](https://github.com/invertase/react-native-firebase/commit/1e47d455aa3a99b4ad6e08caf491be3df63a7f55))
- **perf, config:** expose perf module deactivate toggle ([4e25bf6](https://github.com/invertase/react-native-firebase/commit/4e25bf63237f42b98ae5cd2ef424408299992c03))

# [12.5.0](https://github.com/invertase/react-native-firebase/compare/v12.4.0...v12.5.0) (2021-08-12)

### Features

- **app-check:** implement AppCheck module ([8cd4fa3](https://github.com/invertase/react-native-firebase/commit/8cd4fa33d8df8fc72f2484665423986d12fc65fa))
- **ios, sdks:** bump firebase-ios-sdk to 8.5.0 ([d4b2015](https://github.com/invertase/react-native-firebase/commit/d4b2015f8def4759b95072cd4bca86eda0443c54))

# [12.4.0](https://github.com/invertase/react-native-firebase/compare/v12.3.0...v12.4.0) (2021-07-29)

### Performance Improvements

- **messaging, ios:** Improve time to delivery of background messages on iOS ([#5547](https://github.com/invertase/react-native-firebase/issues/5547)) ([f4168b1](https://github.com/invertase/react-native-firebase/commit/f4168b154d6194cbc87e03d91787e59c8d97ea10))

# [12.3.0](https://github.com/invertase/react-native-firebase/compare/v12.2.0...v12.3.0) (2021-07-21)

**Note:** Version bump only for package react-native-firebase-tests

# [12.2.0](https://github.com/invertase/react-native-firebase/compare/v12.1.0...v12.2.0) (2021-07-16)

### Features

- firebase-ios-sdk 8.3.0 / firebase-android-sdk 28.2.1 ([c73ea10](https://github.com/invertase/react-native-firebase/commit/c73ea103b1ae8b6171d8719b752459cecb9a9359))
- **app, sdks:** use firebase-ios-sdk 8.2.0 / firebase-android-sdk 28.2.0 ([0d26af9](https://github.com/invertase/react-native-firebase/commit/0d26af9638b15eb2220d12127b3626c899818ade))

# [12.1.0](https://github.com/invertase/react-native-firebase/compare/v12.0.0...v12.1.0) (2021-06-11)

### Features

- **app:** bump SDKs: firebase-android-sdk 28.1.0 / firebase-ios-sdk 8.1.1 ([d64e2e5](https://github.com/invertase/react-native-firebase/commit/d64e2e562051a3c3da39da32582ea835b2c7d928))

# [12.0.0](https://github.com/invertase/react-native-firebase/compare/v11.5.0...v12.0.0) (2021-05-19)

### Bug Fixes

- **android:** correct lint issues for various API mis-use ([eb8d893](https://github.com/invertase/react-native-firebase/commit/eb8d89306fd569d7ef64298a99e970c653b79178)), closes [#3917](https://github.com/invertase/react-native-firebase/issues/3917)

### Features

- **database:** add database.useEmulator() ([0632ca5](https://github.com/invertase/react-native-firebase/commit/0632ca596336b2b5738734ae614f6c50a5f6f577))
- **sdks:** firebase-ios-sdk 8.0.0 / firebase-android-sdk 28.0.1 ([d97587b](https://github.com/invertase/react-native-firebase/commit/d97587b33aa4c092a0d34291e24491ca66f9bcaa))
- **storage, emulator:** implement storage emulator ([1d3e946](https://github.com/invertase/react-native-firebase/commit/1d3e946a4131a9ceaf3e82aab7f1759ef5aa2cb4))

# [11.5.0](https://github.com/invertase/react-native-firebase/compare/v11.4.1...v11.5.0) (2021-05-12)

**Note:** Version bump only for package react-native-firebase-tests

## [11.4.1](https://github.com/invertase/react-native-firebase/compare/v11.4.0...v11.4.1) (2021-04-29)

**Note:** Version bump only for package react-native-firebase-tests

# [11.4.0](https://github.com/invertase/react-native-firebase/compare/v11.3.3...v11.4.0) (2021-04-29)

### Features

- **analytics, ATT:** allow use of AnalyticsWithoutAdIdSupport pod ([da6b811](https://github.com/invertase/react-native-firebase/commit/da6b811e15b480ad55c1e804da40387ecfdef3ee))
- **app, android:** support list of Activities to ignore when detecting AppState ([#5235](https://github.com/invertase/react-native-firebase/issues/5235)) ([50a384f](https://github.com/invertase/react-native-firebase/commit/50a384f2a2ba61d078521e89594f4e576f1e1f46))
- **app, firebase-ios-sdk:** move to version 7.11.0 ([f25d25d](https://github.com/invertase/react-native-firebase/commit/f25d25d36d2df204f58f69700509a1ccb23784a9))

## [11.3.3](https://github.com/invertase/react-native-firebase/compare/v11.3.2...v11.3.3) (2021-04-24)

**Note:** Version bump only for package react-native-firebase-tests

## [11.3.2](https://github.com/invertase/react-native-firebase/compare/v11.3.1...v11.3.2) (2021-04-19)

### Bug Fixes

- **all, android:** purge jcenter() from android build ([2c6a6a8](https://github.com/invertase/react-native-firebase/commit/2c6a6a82ec363fd948ea880fd397acb886c97453))

## [11.3.1](https://github.com/invertase/react-native-firebase/compare/v11.3.0...v11.3.1) (2021-04-18)

**Note:** Version bump only for package react-native-firebase-tests

# [11.3.0](https://github.com/invertase/react-native-firebase/compare/v11.2.0...v11.3.0) (2021-04-16)

### Features

- **crashlytics:** add configuration to exception handler chaining behavior ([4c640ff](https://github.com/invertase/react-native-firebase/commit/4c640ff52e1fb692bddcbeb76a2ff2a302e56334))
- **ios, sdks:** bump firebase-ios-sdk to 7.10.0 ([d2838ff](https://github.com/invertase/react-native-firebase/commit/d2838ffeda34816219539fd1ac0c651b232e8a46))

### Performance Improvements

- increase task throughput in Android using thread pool executor ([#4981](https://github.com/invertase/react-native-firebase/issues/4981)) ([0e4e331](https://github.com/invertase/react-native-firebase/commit/0e4e3312315c020ecd760f8d3fea4f0347d2276b))

# [11.2.0](https://github.com/invertase/react-native-firebase/compare/v11.1.2...v11.2.0) (2021-03-26)

### Features

- **sdks:** firebase-ios-sdk 7.9.0 / firebase-android-sdk 26.8.0 ([324f8ff](https://github.com/invertase/react-native-firebase/commit/324f8ffa0baf759c000efa1f4a024e527eddf8d7))

## [11.1.2](https://github.com/invertase/react-native-firebase/compare/v11.1.1...v11.1.2) (2021-03-17)

**Note:** Version bump only for package react-native-firebase-tests

## [11.1.1](https://github.com/invertase/react-native-firebase/compare/v11.1.0...v11.1.1) (2021-03-16)

**Note:** Version bump only for package react-native-firebase-tests

# [11.1.0](https://github.com/invertase/react-native-firebase/compare/v11.0.0...v11.1.0) (2021-03-13)

### Features

- **app, sdks:** firebase-ios-sdk v7.8.0 / firebase-android-sdk v26.7.0 ([d2b0074](https://github.com/invertase/react-native-firebase/commit/d2b0074b36254743ce980a23e3e61771b79be52a))

# [11.0.0](https://github.com/invertase/react-native-firebase/compare/v10.8.1...v11.0.0) (2021-03-03)

### Bug Fixes

- **tests, ios:** resolve firebase-ios-sdk from app package.json ([680eb37](https://github.com/invertase/react-native-firebase/commit/680eb371da7826eef05c450d47fd12fdcb42fdb7))

### Features

- **android, sdk:** update firebase-android-sdk to 26.6.0 ([5786641](https://github.com/invertase/react-native-firebase/commit/5786641ea68dc4c0c1899a12b0a56491cff3b894)), closes [/firebase.google.com/support/release-notes/android#bom_v26-6-0](https://github.com//firebase.google.com/support/release-notes/android/issues/bom_v26-6-0)
- **ios, sdk:** bump firebase-ios-sdk to v7.7.0 ([bc893ab](https://github.com/invertase/react-native-firebase/commit/bc893ab8f44193a58ca6a119838d0464dc6081ba))

## [10.8.1](https://github.com/invertase/react-native-firebase/compare/v10.8.0...v10.8.1) (2021-02-22)

**Note:** Version bump only for package react-native-firebase-tests

# [10.8.0](https://github.com/invertase/react-native-firebase/compare/v10.7.0...v10.8.0) (2021-02-13)

### Features

- **app, android-sdk:** 26.5.0 (requires gradle v5.6.4+ / android gradle plugin v3.4.2+) ([1132f16](https://github.com/invertase/react-native-firebase/commit/1132f1629dd6b2d0ff9fdb00e47e075773a1dc60))
- **crashlytics:** add JS exception non-fatal error generation toggle ([#4904](https://github.com/invertase/react-native-firebase/issues/4904)) ([63c35b3](https://github.com/invertase/react-native-firebase/commit/63c35b3d9243a76fd77dedaa9fa83fca7fb802ae))

# [10.7.0](https://github.com/invertase/react-native-firebase/compare/v10.6.4...v10.7.0) (2021-02-09)

**Note:** Version bump only for package react-native-firebase-tests

## [10.6.4](https://github.com/invertase/react-native-firebase/compare/v10.6.3...v10.6.4) (2021-02-05)

**Note:** Version bump only for package react-native-firebase-tests

## [10.6.3](https://github.com/invertase/react-native-firebase/compare/v10.6.2...v10.6.3) (2021-02-05)

**Note:** Version bump only for package react-native-firebase-tests

## [10.6.2](https://github.com/invertase/react-native-firebase/compare/v10.6.1...v10.6.2) (2021-02-05)

**Note:** Version bump only for package react-native-firebase-tests

## [10.6.1](https://github.com/invertase/react-native-firebase/compare/v10.6.0...v10.6.1) (2021-02-04)

**Note:** Version bump only for package react-native-firebase-tests

# [10.6.0](https://github.com/invertase/react-native-firebase/compare/v10.5.1...v10.6.0) (2021-02-04)

### Features

- **app:** firebase-ios-sdk 7.4.0 -> 7.5.0, firebase-android-sdk 26.3.0 -> 26.4.0 ([9c4ada8](https://github.com/invertase/react-native-firebase/commit/9c4ada893c8c49afc454d1fe6084ba2572f2a25f))
- **perf:** support "perf_auto_collection_enabled" flag in firebase.json ([#4870](https://github.com/invertase/react-native-firebase/issues/4870)) ([e54bf49](https://github.com/invertase/react-native-firebase/commit/e54bf49ec880b309f8ffc244d3bb0da74a5d4ddd))

## [10.5.1](https://github.com/invertase/react-native-firebase/compare/v10.5.0...v10.5.1) (2021-01-19)

**Note:** Version bump only for package react-native-firebase-tests

# [10.5.0](https://github.com/invertase/react-native-firebase/compare/v10.4.1...v10.5.0) (2021-01-18)

### Features

- **app, sdks:** firebase-ios-sdk 7.4.0 / firebase-android-sdk 26.3.0 ([#4792](https://github.com/invertase/react-native-firebase/issues/4792)) ([f915c82](https://github.com/invertase/react-native-firebase/commit/f915c823d6765b21096ea3b7e52f22bb71630bec))

## [10.4.1](https://github.com/invertase/react-native-firebase/compare/v10.4.0...v10.4.1) (2021-01-08)

**Note:** Version bump only for package react-native-firebase-tests

# [10.4.0](https://github.com/invertase/react-native-firebase/compare/v10.3.1...v10.4.0) (2020-12-30)

### Features

- **analytics:** add support for analytics_auto_collection_enabled in firebase.json ([#4730](https://github.com/invertase/react-native-firebase/issues/4730)) ([9a24ecd](https://github.com/invertase/react-native-firebase/commit/9a24ecd2826bfa8ab30657287432ccaeff8b7c7c))

## [10.3.1](https://github.com/invertase/react-native-firebase/compare/v10.3.0...v10.3.1) (2020-12-18)

**Note:** Version bump only for package react-native-firebase-tests

# [10.3.0](https://github.com/invertase/react-native-firebase/compare/v10.2.0...v10.3.0) (2020-12-18)

### Features

- **app:** bump firebase-android-sdk / firebase-ios-sdk versions ([cd5a451](https://github.com/invertase/react-native-firebase/commit/cd5a451cece27204a657780ebdbcf7fa909f5100))

# [10.2.0](https://github.com/invertase/react-native-firebase/compare/v10.1.1...v10.2.0) (2020-12-11)

### Features

- firebase-ios-sdk 7.2.0 / firebase-android-sdk 26.1.1 ([#4648](https://github.com/invertase/react-native-firebase/issues/4648)) ([a158a74](https://github.com/invertase/react-native-firebase/commit/a158a74dee0dd6774c725ff1213453f8dfdcb8f5))

## [10.1.1](https://github.com/invertase/react-native-firebase/compare/v10.1.0...v10.1.1) (2020-12-02)

**Note:** Version bump only for package react-native-firebase-tests

# [10.1.0](https://github.com/invertase/react-native-firebase/compare/v10.0.0...v10.1.0) (2020-11-26)

**Note:** Version bump only for package react-native-firebase-tests

# [10.0.0](https://github.com/invertase/react-native-firebase/compare/v6.4.0...v10.0.0) (2020-11-17)

- feat(crashlytics)!: upgrade to new Firebase Crashlytics SDK (#3580) ([cad58e1](https://github.com/invertase/react-native-firebase/commit/cad58e178b43dea461e17fa4a0a3fecd507ba68a)), closes [#3580](https://github.com/invertase/react-native-firebase/issues/3580)
- feat!: all packages should depend on core (#3613) ([252a423](https://github.com/invertase/react-native-firebase/commit/252a4239e98a0f2a55c4afcd2d82e4d5f97e65e9)), closes [#3613](https://github.com/invertase/react-native-firebase/issues/3613)

### Bug Fixes

- **firestore:** update isEqual API to check collection path equality ([#3738](https://github.com/invertase/react-native-firebase/issues/3738)) ([405e040](https://github.com/invertase/react-native-firebase/commit/405e04009c1550dc6897b207ae3a63ad274c6de5))
- **messaging:** initialize app props method to fix isHeadless property ([#4082](https://github.com/invertase/react-native-firebase/issues/4082)) ([2bdebb1](https://github.com/invertase/react-native-firebase/commit/2bdebb1d3d82915d0aa9a49431d26658721a2f86))
- **messaging,ios:** keep original UNUserNotificationCenter dele… ([#3427](https://github.com/invertase/react-native-firebase/issues/3427)) ([a800cdb](https://github.com/invertase/react-native-firebase/commit/a800cdbc81bfaeeaccf602aa62ca29d2fbf68c05)), closes [#3425](https://github.com/invertase/react-native-firebase/issues/3425) [#3495](https://github.com/invertase/react-native-firebase/issues/3495)
- **ml-vision:** convert options to correct type ([#3694](https://github.com/invertase/react-native-firebase/issues/3694)) ([b462be5](https://github.com/invertase/react-native-firebase/commit/b462be542a41a4e37a201146642f1b9fd4c6a74f))
- **storage:** Changed refFromUrl regex to exclude appspot.com ([#3775](https://github.com/invertase/react-native-firebase/issues/3775)) ([c6f4699](https://github.com/invertase/react-native-firebase/commit/c6f46996191126513e02f3d20efa78d166c4db0a))

### Features

- BREAKING forward-port to firebase-android-sdk v26 / firebase-ios-sdk v7 ([70974d4](https://github.com/invertase/react-native-firebase/commit/70974d41f857a0f7fc09cb5235856d3748b30117)), closes [/firebase.google.com/support/release-notes/android#2020-10-27](https://github.com//firebase.google.com/support/release-notes/android/issues/2020-10-27) [/firebase.google.com/support/release-notes/ios#version*700*-\_october_26_2020](https://github.com//firebase.google.com/support/release-notes/ios/issues/version_700_-_october_26_2020)
- bump firebase sdk versions, add GoogleApi dep, use Android API29 ([#4122](https://github.com/invertase/react-native-firebase/issues/4122)) ([728f418](https://github.com/invertase/react-native-firebase/commit/728f41863832d21230c6eb1f55385284fef03c09))
- independently version packages ([#3513](https://github.com/invertase/react-native-firebase/issues/3513)) ([e2c2d64](https://github.com/invertase/react-native-firebase/commit/e2c2d64d2266cbdd14d4dcfefa64a08263f0af85))
- update native Firebase SDK versions ([#3663](https://github.com/invertase/react-native-firebase/issues/3663)) ([4db9dbc](https://github.com/invertase/react-native-firebase/commit/4db9dbc3ec20bf96de0efad15000f00b41e4a799))
- use latest android & ios Firebase SDKs version ([#3956](https://github.com/invertase/react-native-firebase/issues/3956)) ([e7b4bb3](https://github.com/invertase/react-native-firebase/commit/e7b4bb31b05985c044b1f01625a43e364bb653ef))
- **app, ios:** bump firebase-ios-sdk to 7.1.0 from 7.0.0 ([#4533](https://github.com/invertase/react-native-firebase/issues/4533)) ([a1e90ae](https://github.com/invertase/react-native-firebase/commit/a1e90aef20f85f9f95a37c63867389e638f3fab7))
- **auth:** verifyBeforeUpdateEmail API ([#3862](https://github.com/invertase/react-native-firebase/issues/3862)) ([aaff624](https://github.com/invertase/react-native-firebase/commit/aaff62402544d8783007b6b47b8406019cc48c84))
- **crashlytics:** add new APIs `checkForUnsentReports`, `deleteUnsentReports`,`didCrashOnPreviousExecution`,`sendUnsentReports` ([#4009](https://github.com/invertase/react-native-firebase/issues/4009)) ([52eeed3](https://github.com/invertase/react-native-firebase/commit/52eeed31b3436b0f90767298dcc515b0897ba942))
- **firestore:** query operators: 'not-in' & '!=' ([#4474](https://github.com/invertase/react-native-firebase/issues/4474)) ([9e68faf](https://github.com/invertase/react-native-firebase/commit/9e68faf0310bd5f9c3347cad3dd5b80c9c0582e1))

### BREAKING CHANGES

- alter ML imports, check iOS linking, remove old API as noted
- This is a breaking change to remove the use of the Fabric SDKs.

Co-authored-by: David Buchan-Swanson <david.buchanswanson@gmail.com>
Co-authored-by: Mike Diarmid <mike.diarmid@gmail.com>
[publish]

- breaking change to mark new internal versioning requirements.

## [9.0.2](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@9.0.1...react-native-firebase-tests@9.0.2) (2020-11-11)

**Note:** Version bump only for package react-native-firebase-tests

## [9.0.1](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@9.0.0...react-native-firebase-tests@9.0.1) (2020-11-10)

**Note:** Version bump only for package react-native-firebase-tests

# [9.0.0](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.5.3...react-native-firebase-tests@9.0.0) (2020-11-10)

### Features

- BREAKING forward-port to firebase-android-sdk v26 / firebase-ios-sdk v7 ([70974d4](https://github.com/invertase/react-native-firebase/commit/70974d41f857a0f7fc09cb5235856d3748b30117)), closes [/firebase.google.com/support/release-notes/android#2020-10-27](https://github.com//firebase.google.com/support/release-notes/android/issues/2020-10-27) [/firebase.google.com/support/release-notes/ios#version*700*-\_october_26_2020](https://github.com//firebase.google.com/support/release-notes/ios/issues/version_700_-_october_26_2020)

### BREAKING CHANGES

- alter ML imports, check iOS linking, remove old API as noted

## [8.5.3](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.5.2...react-native-firebase-tests@8.5.3) (2020-11-10)

**Note:** Version bump only for package react-native-firebase-tests

## [8.5.2](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.5.1...react-native-firebase-tests@8.5.2) (2020-11-10)

### Bug Fixes

- **storage:** Changed refFromUrl regex to exclude appspot.com ([#3775](https://github.com/invertase/react-native-firebase/issues/3775)) ([c6f4699](https://github.com/invertase/react-native-firebase/commit/c6f46996191126513e02f3d20efa78d166c4db0a))

## [8.5.1](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.5.0...react-native-firebase-tests@8.5.1) (2020-10-30)

**Note:** Version bump only for package react-native-firebase-tests

# [8.5.0](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.21...react-native-firebase-tests@8.5.0) (2020-10-30)

### Features

- **firestore:** query operators: 'not-in' & '!=' ([#4474](https://github.com/invertase/react-native-firebase/issues/4474)) ([9e68faf](https://github.com/invertase/react-native-firebase/commit/9e68faf0310bd5f9c3347cad3dd5b80c9c0582e1))

## [8.4.21](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.20...react-native-firebase-tests@8.4.21) (2020-10-21)

**Note:** Version bump only for package react-native-firebase-tests

## [8.4.20](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.19...react-native-firebase-tests@8.4.20) (2020-10-16)

**Note:** Version bump only for package react-native-firebase-tests

## [8.4.19](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.18...react-native-firebase-tests@8.4.19) (2020-10-16)

**Note:** Version bump only for package react-native-firebase-tests

## [8.4.18](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.17...react-native-firebase-tests@8.4.18) (2020-10-07)

**Note:** Version bump only for package react-native-firebase-tests

## [8.4.17](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.16...react-native-firebase-tests@8.4.17) (2020-10-07)

**Note:** Version bump only for package react-native-firebase-tests

## [8.4.16](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.15...react-native-firebase-tests@8.4.16) (2020-09-30)

**Note:** Version bump only for package react-native-firebase-tests

## [8.4.15](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.14...react-native-firebase-tests@8.4.15) (2020-09-30)

**Note:** Version bump only for package react-native-firebase-tests

## [8.4.14](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.13...react-native-firebase-tests@8.4.14) (2020-09-30)

**Note:** Version bump only for package react-native-firebase-tests

## [8.4.13](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.12...react-native-firebase-tests@8.4.13) (2020-09-30)

**Note:** Version bump only for package react-native-firebase-tests

## [8.4.12](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.11...react-native-firebase-tests@8.4.12) (2020-09-17)

**Note:** Version bump only for package react-native-firebase-tests

## [8.4.11](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.10...react-native-firebase-tests@8.4.11) (2020-09-17)

**Note:** Version bump only for package react-native-firebase-tests

## [8.4.10](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.9...react-native-firebase-tests@8.4.10) (2020-09-11)

**Note:** Version bump only for package react-native-firebase-tests

## [8.4.9](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.8...react-native-firebase-tests@8.4.9) (2020-09-11)

**Note:** Version bump only for package react-native-firebase-tests

## [8.4.8](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.7...react-native-firebase-tests@8.4.8) (2020-09-04)

**Note:** Version bump only for package react-native-firebase-tests

## [8.4.7](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.6...react-native-firebase-tests@8.4.7) (2020-09-02)

**Note:** Version bump only for package react-native-firebase-tests

## [8.4.6](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.5...react-native-firebase-tests@8.4.6) (2020-08-31)

**Note:** Version bump only for package react-native-firebase-tests

## [8.4.5](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.4...react-native-firebase-tests@8.4.5) (2020-08-30)

**Note:** Version bump only for package react-native-firebase-tests

## [8.4.4](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.3...react-native-firebase-tests@8.4.4) (2020-08-30)

**Note:** Version bump only for package react-native-firebase-tests

## [8.4.3](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.2...react-native-firebase-tests@8.4.3) (2020-08-28)

**Note:** Version bump only for package react-native-firebase-tests

## [8.4.2](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.1...react-native-firebase-tests@8.4.2) (2020-08-28)

**Note:** Version bump only for package react-native-firebase-tests

## [8.4.1](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.4.0...react-native-firebase-tests@8.4.1) (2020-08-26)

**Note:** Version bump only for package react-native-firebase-tests

# [8.4.0](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.3.8...react-native-firebase-tests@8.4.0) (2020-08-26)

### Features

- bump firebase sdk versions, add GoogleApi dep, use Android API29 ([#4122](https://github.com/invertase/react-native-firebase/issues/4122)) ([728f418](https://github.com/invertase/react-native-firebase/commit/728f41863832d21230c6eb1f55385284fef03c09))

## [8.3.8](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.3.7...react-native-firebase-tests@8.3.8) (2020-08-26)

**Note:** Version bump only for package react-native-firebase-tests

## [8.3.7](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.3.6...react-native-firebase-tests@8.3.7) (2020-08-25)

**Note:** Version bump only for package react-native-firebase-tests

## [8.3.6](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.3.5...react-native-firebase-tests@8.3.6) (2020-08-25)

**Note:** Version bump only for package react-native-firebase-tests

## [8.3.5](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.3.4...react-native-firebase-tests@8.3.5) (2020-08-24)

**Note:** Version bump only for package react-native-firebase-tests

## [8.3.4](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.3.3...react-native-firebase-tests@8.3.4) (2020-08-21)

**Note:** Version bump only for package react-native-firebase-tests

## [8.3.3](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.3.2...react-native-firebase-tests@8.3.3) (2020-08-20)

**Note:** Version bump only for package react-native-firebase-tests

## [8.3.2](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.3.1...react-native-firebase-tests@8.3.2) (2020-08-15)

**Note:** Version bump only for package react-native-firebase-tests

## [8.3.1](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.3.0...react-native-firebase-tests@8.3.1) (2020-08-15)

### Bug Fixes

- **messaging:** initialize app props method to fix isHeadless property ([#4082](https://github.com/invertase/react-native-firebase/issues/4082)) ([2bdebb1](https://github.com/invertase/react-native-firebase/commit/2bdebb1d3d82915d0aa9a49431d26658721a2f86))

# [8.3.0](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.2.1...react-native-firebase-tests@8.3.0) (2020-08-03)

### Features

- **crashlytics:** add new APIs `checkForUnsentReports`, `deleteUnsentReports`,`didCrashOnPreviousExecution`,`sendUnsentReports` ([#4009](https://github.com/invertase/react-native-firebase/issues/4009)) ([52eeed3](https://github.com/invertase/react-native-firebase/commit/52eeed31b3436b0f90767298dcc515b0897ba942))

## [8.2.1](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.2.0...react-native-firebase-tests@8.2.1) (2020-08-03)

**Note:** Version bump only for package react-native-firebase-tests

# [8.2.0](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.1.1...react-native-firebase-tests@8.2.0) (2020-08-03)

### Features

- use latest android & ios Firebase SDKs version ([#3956](https://github.com/invertase/react-native-firebase/issues/3956)) ([e7b4bb3](https://github.com/invertase/react-native-firebase/commit/e7b4bb31b05985c044b1f01625a43e364bb653ef))

## [8.1.1](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.1.0...react-native-firebase-tests@8.1.1) (2020-07-23)

**Note:** Version bump only for package react-native-firebase-tests

# [8.1.0](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.0.10...react-native-firebase-tests@8.1.0) (2020-07-10)

### Features

- **auth:** verifyBeforeUpdateEmail API ([#3862](https://github.com/invertase/react-native-firebase/issues/3862)) ([aaff624](https://github.com/invertase/react-native-firebase/commit/aaff62402544d8783007b6b47b8406019cc48c84))

## [8.0.10](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.0.9...react-native-firebase-tests@8.0.10) (2020-07-09)

**Note:** Version bump only for package react-native-firebase-tests

## [8.0.9](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.0.8...react-native-firebase-tests@8.0.9) (2020-07-09)

**Note:** Version bump only for package react-native-firebase-tests

## [8.0.8](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.0.7...react-native-firebase-tests@8.0.8) (2020-07-09)

**Note:** Version bump only for package react-native-firebase-tests

## [8.0.7](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.0.6...react-native-firebase-tests@8.0.7) (2020-07-07)

**Note:** Version bump only for package react-native-firebase-tests

## [8.0.6](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.0.5...react-native-firebase-tests@8.0.6) (2020-07-07)

**Note:** Version bump only for package react-native-firebase-tests

## [8.0.5](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.0.4...react-native-firebase-tests@8.0.5) (2020-07-06)

**Note:** Version bump only for package react-native-firebase-tests

## [8.0.4](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.0.3...react-native-firebase-tests@8.0.4) (2020-07-06)

**Note:** Version bump only for package react-native-firebase-tests

## [8.0.3](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.0.2...react-native-firebase-tests@8.0.3) (2020-07-05)

**Note:** Version bump only for package react-native-firebase-tests

## [8.0.2](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.0.1...react-native-firebase-tests@8.0.2) (2020-07-05)

**Note:** Version bump only for package react-native-firebase-tests

## [8.0.1](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@8.0.0...react-native-firebase-tests@8.0.1) (2020-06-30)

**Note:** Version bump only for package react-native-firebase-tests

# [8.0.0](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.23...react-native-firebase-tests@8.0.0) (2020-06-30)

- feat(crashlytics)!: upgrade to new Firebase Crashlytics SDK (#3580) ([cad58e1](https://github.com/invertase/react-native-firebase/commit/cad58e178b43dea461e17fa4a0a3fecd507ba68a)), closes [#3580](https://github.com/invertase/react-native-firebase/issues/3580)

### BREAKING CHANGES

- This is a breaking change to remove the use of the Fabric SDKs.

Co-authored-by: David Buchan-Swanson <david.buchanswanson@gmail.com>
Co-authored-by: Mike Diarmid <mike.diarmid@gmail.com>
[publish]

## [7.1.23](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.22...react-native-firebase-tests@7.1.23) (2020-06-26)

**Note:** Version bump only for package react-native-firebase-tests

## [7.1.22](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.21...react-native-firebase-tests@7.1.22) (2020-06-26)

**Note:** Version bump only for package react-native-firebase-tests

## [7.1.21](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.20...react-native-firebase-tests@7.1.21) (2020-06-22)

**Note:** Version bump only for package react-native-firebase-tests

## [7.1.20](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.19...react-native-firebase-tests@7.1.20) (2020-06-22)

**Note:** Version bump only for package react-native-firebase-tests

## [7.1.19](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.18...react-native-firebase-tests@7.1.19) (2020-06-22)

### Bug Fixes

- **ml-vision:** convert options to correct type ([#3694](https://github.com/invertase/react-native-firebase/issues/3694)) ([b462be5](https://github.com/invertase/react-native-firebase/commit/b462be542a41a4e37a201146642f1b9fd4c6a74f))

## [7.1.18](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.17...react-native-firebase-tests@7.1.18) (2020-06-19)

**Note:** Version bump only for package react-native-firebase-tests

## [7.1.17](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.16...react-native-firebase-tests@7.1.17) (2020-06-18)

**Note:** Version bump only for package react-native-firebase-tests

## [7.1.16](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.15...react-native-firebase-tests@7.1.16) (2020-06-18)

**Note:** Version bump only for package react-native-firebase-tests

## [7.1.15](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.14...react-native-firebase-tests@7.1.15) (2020-06-10)

**Note:** Version bump only for package react-native-firebase-tests

## [7.1.14](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.13...react-native-firebase-tests@7.1.14) (2020-06-10)

**Note:** Version bump only for package react-native-firebase-tests

## [7.1.13](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.12...react-native-firebase-tests@7.1.13) (2020-06-03)

### Bug Fixes

- **firestore:** update isEqual API to check collection path equality ([#3738](https://github.com/invertase/react-native-firebase/issues/3738)) ([405e040](https://github.com/invertase/react-native-firebase/commit/405e04009c1550dc6897b207ae3a63ad274c6de5))

## [7.1.12](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.11...react-native-firebase-tests@7.1.12) (2020-06-03)

**Note:** Version bump only for package react-native-firebase-tests

## [7.1.11](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.10...react-native-firebase-tests@7.1.11) (2020-06-03)

**Note:** Version bump only for package react-native-firebase-tests

## [7.1.10](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.9...react-native-firebase-tests@7.1.10) (2020-06-03)

**Note:** Version bump only for package react-native-firebase-tests

## [7.1.9](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.8...react-native-firebase-tests@7.1.9) (2020-06-01)

**Note:** Version bump only for package react-native-firebase-tests

## [7.1.8](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.7...react-native-firebase-tests@7.1.8) (2020-05-29)

**Note:** Version bump only for package react-native-firebase-tests

## [7.1.7](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.6...react-native-firebase-tests@7.1.7) (2020-05-29)

**Note:** Version bump only for package react-native-firebase-tests

## [7.1.6](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.5...react-native-firebase-tests@7.1.6) (2020-05-29)

**Note:** Version bump only for package react-native-firebase-tests

## [7.1.5](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.4...react-native-firebase-tests@7.1.5) (2020-05-29)

**Note:** Version bump only for package react-native-firebase-tests

## [7.1.4](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.3...react-native-firebase-tests@7.1.4) (2020-05-29)

**Note:** Version bump only for package react-native-firebase-tests

## [7.1.3](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.2...react-native-firebase-tests@7.1.3) (2020-05-29)

**Note:** Version bump only for package react-native-firebase-tests

## [7.1.2](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.1...react-native-firebase-tests@7.1.2) (2020-05-28)

**Note:** Version bump only for package react-native-firebase-tests

## [7.1.1](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.1.0...react-native-firebase-tests@7.1.1) (2020-05-28)

**Note:** Version bump only for package react-native-firebase-tests

# [7.1.0](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.0.2...react-native-firebase-tests@7.1.0) (2020-05-22)

### Features

- update native Firebase SDK versions ([#3663](https://github.com/invertase/react-native-firebase/issues/3663)) ([4db9dbc](https://github.com/invertase/react-native-firebase/commit/4db9dbc3ec20bf96de0efad15000f00b41e4a799))

## [7.0.2](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.0.1...react-native-firebase-tests@7.0.2) (2020-05-15)

**Note:** Version bump only for package react-native-firebase-tests

## [7.0.1](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.0.0...react-native-firebase-tests@7.0.1) (2020-05-13)

**Note:** Version bump only for package react-native-firebase-tests

## [7.0.0](https://github.com/invertase/react-native-firebase/compare/react-native-firebase-tests@7.0.0...react-native-firebase-tests@7.0.0) (2020-05-13)

- feat!: all packages should depend on core (#3613) ([252a423](https://github.com/invertase/react-native-firebase/commit/252a4239e98a0f2a55c4afcd2d82e4d5f97e65e9)), closes [#3613](https://github.com/invertase/react-native-firebase/issues/3613)

### BREAKING CHANGES

- breaking change to mark new internal versioning requirements.
