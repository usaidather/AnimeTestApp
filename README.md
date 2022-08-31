# AnimeTestApp

BASIC STEPS TO RUN THIS PROJECT

1) yarn
2) cd ios
3) pod install

If there is any error or if you are unable to build this project then delete node module, Yarn.lock file and from iOS folder delete pods folders and podfile.lock

then repeat steps 1,2,3 again.

To run this app on iOS run below command
npx react-native run-ios

To run this app on android run below command
npx react-native run-android

PROECT STRUCTURE.
Screens:
Every screen folder will have two files one would end with index that will handle all the buisness logics and api calls  and other will have UI Component of the screen.

Fonts and screen view sizes are dynamically handled in utils/AppTheme.js

ENV variable are defined in .env file.

