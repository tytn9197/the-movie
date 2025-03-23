

# React Native Project

This is a modern React Native application bootstrapped with [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Overview

This project is a React Native mobile application that provides [`The Movie DB`](https://www.themoviedb.org/) with movie list view and moview details. It's built using the latest React Native 0.76 and follows modern development practices.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js >= 18.0.0
- Yarn >= 4.0.0
- React Native CLI >= 15.0.0
- React Native >= 0.76.0
- Android SDK > 17.0.0
- CocoaPods > 1.15.0 (for iOS development)

**Recommended tools:**
- NVM for managing Node.js versions
- SDKMAN for managing Android SDK versions

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/tytn9197/the-movie.git
cd your-repo-name
```

### 2. Install dependencies
You should install both npm and yarn

```
    npm install
```

then 

```
    yarn install
```
using yarn install to get data from @storybook/react.

### 3. iOS Setup (macOS only)

```bash
cd ios
pod install
cd ..
```

# 4. Environment Configuration (IMPORTANT)

Create a `KEYS.ts` file in the `src/constants/` directory:

```typescript
export const KEYS = {
   ACCESS_TOKEN: 'YOUR_ACCESS_TOKEN',
   API_KEY: 'YOUR_API_KEY',
}
```

Replace the placeholder values with your actual API keys. After login to [`The Movie DB`](https://www.themoviedb.org/), you can get api key and access token in [`Settings`](https://www.themoviedb.org/settings/api)

## Running the Application

### Run on Android

```bash
npx react-native run-android
```

### Run on iOS

```bash
npx react-native run-ios
```

## Project Structure
src/ 

├── assets/ # Images, fonts, and other static assets 

├── components/ # Reusable UI components 

│───├── atoms/ # Basic building blocks (buttons, inputs, labels, etc.) 

│───├── molecules/ # Groups of atoms functioning together (form fields, menu items) 

│───├── organisms/ # Complex UI components composed of molecules/atoms 

│───├── templates/ # Page layouts with placeholders for content 


├── constants/ # Application constants and configuration 

├── navigation/ # Navigation configuration 

├── screens/ # Application screens 

├── services/ # API services and other external services 


├── store/ # State management (Redux/Context) 

├── styles/ # Global styles 

└── utils/ # Utility functions 

## Features

```
- HOME page: 
    1/ Movie List
        a/ Filter by category type
        b/ Search movies by name
        c/ Load more movies (both normal listing and searched listing)
        d/ Pull to refresh list
        e/ Animation for header and screen navagation
    2/ Movie details:
        a/ View details 
        b/ View cast members
        c/ Director and Writer are filtered properly base on ID

```
NOTE: Values are persisted 

## TODO
1/ Because time is limited, I cannot write a proper Atomic design pattern. I'll update update components with Storybook in future. 

2/ I'll refactor code, there are several components are repeated.

3/ Add theme dark and light. 

...

## Troubleshooting
#### There is a bug in Android. It will crash the app when we goBack from details screen to listing screen. The root cause is react native screens. Here is a temporary solution: 
Find `startTransitionRecursive` in `node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/Screen.kt`
 and delete that function

from 
 ```
private fun startTransitionRecursive(parent: ViewGroup?) {
    parent?.let {
        for (i in 0 until it.childCount) {
            val child = it.getChildAt(i)

            if (parent is SwipeRefreshLayout && child is ImageView) {
                // SwipeRefreshLayout class which has CircleImageView as a child,
                // does not handle `startViewTransition` properly.
                // It has a custom `getChildDrawingOrder` method which returns
                // wrong index if we called `startViewTransition` on the views on new arch.
                // We add a simple View to bump the number of children to make it work.
                // TODO: find a better way to handle this scenario
                it.addView(View(context), i)
            } else {
                child?.let { view -> it.startViewTransition(view) }
            }

            if (child is ScreenStackHeaderConfig) {
                // we want to start transition on children of the toolbar too,
                // which is not a child of ScreenStackHeaderConfig
                startTransitionRecursive(child.toolbar)
            }

            if (child is ViewGroup) {
                startTransitionRecursive(child)
            }
        }
    }
}
 ```

 to
 ```
private fun startTransitionRecursive(parent: ViewGroup?) {
}
 ```



## Acknowledgments

- [React Navigation V7](https://reactnavigation.org/) - Routing and navigation for React Native apps
  - Bottom Tabs Navigator
  - Native Stack Navigator
- [Redux](https://redux.js.org/) & [Redux Toolkit](https://redux-toolkit.js.org/) - State management solution
- [Redux Persist](https://github.com/rt2zz/redux-persist) - Persist and rehydrate Redux stores
- [React Native MMKV](https://github.com/mrousavy/react-native-mmkv) - Fast, efficient key-value storage
- [React Native Fast Image](https://github.com/DylanVann/react-native-fast-image) - Performant image loading
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) - Animation library
- [React Native SVG](https://github.com/software-mansion/react-native-svg) - SVG support for React Native
- [Lottie React Native](https://github.com/lottie-react-native/lottie-react-native) - Animation library for Lottie files
- [React Native Progress](https://github.com/oblador/react-native-progress) - Progress indicators and spinners
- [React Native Unistyles](https://github.com/jpudysz/react-native-unistyles) - Universal styling solution
- [Storybook](https://storybook.js.org/) - Development environment for UI components

Development Tools:
- [TypeScript](https://www.typescriptlang.org/) - Static type checking for JavaScript
- [ESLint](https://eslint.org/) - JavaScript linting utility
- [Prettier](https://prettier.io/) - Code formatter
- [Jest](https://jestjs.io/) - JavaScript testing framework
- [Babel](https://babeljs.io/) - JavaScript compiler
- [Metro](https://facebook.github.io/metro/) - JavaScript bundler for React Native
- [Reactotron](https://github.com/infinitered/reactotron) - Debugging tool for React Native

---
