# This is the test task

## Warnings
1. Some svgs aren't valid - so you'll see render errors. Don't worry, component is enclosed in `<ErrorBoundary />`.

## How to run

### Install API package

### Set up project
1. Install [bundler](https://bundler.io/).
2. In project folder `bundle install`.
3. If it says *Your Ruby version is x, but your Gemfile specified 2.7.4*, then proceed to **4**, if not - skip to **6**.
4. Install [rvm](https://rvm.io/).
5. In project folder `rvm install 2.7.4`, go to step 2.
6. In project folder `yarn install`.
7. In folder `./ios` - `bundle exec pod install`.
8. Get your token from https://www.football-data.org/client/home. Sign-up if needed.
9. Paste token in `AUTH_TOKEN` variable in `./src/config.ts`.
10. In project folder `npx react-native run-ios`, `npx react-native run-android`.

## Original description
Your task is to create a football information mobile app supporting the following requirements:
- The first screen will show a list of football teams. When a team is selected, it will show second screen with:
  - The team’s logo.
  - Names of players in the team.
  - A list of 10 (or fewer) upcoming matches for the team. You should show the name of the rival team, the date, and the competition (Champions League, Primera Division, etc.).
- API call should implement in separate library (SDK)

For this exercise, you should implement the app in React Native/TypeScript so that it runs on iOS/Android platforms.  
Football information is available from https://www.football-data.org/  
Design / implementation guidelines
  1. You can use whichever packages/components you want.
  2. You do not have to write tests.
  3. Pay attention to clean code.

Submission
Please either send a ZIP file containing the complete source files for the project, or a link to a github/bitbucket repo containing the code. Either way, I should be able to compile and run the project in a reasonable manner.  
Good luck! 
