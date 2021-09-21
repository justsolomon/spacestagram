# spacestagram

Image sharing from the final frontier.

**Live URL**: [https://spacestagram-app.netlify.app](https://spacestagram-app.netlify.app)

## Features

- View NASA's Mars Rover photos.

- Like and unlike photos.

- Persist liked photos through the browser's local storage.

- Copy and share links to the photos.

## Technologies Used

The libraries and tools I used in the project include the following:

- [React](https://reactjs.org/), to handle the UI.

- [React Redux](https://react-redux.js.org/), to manage the app's global state.

- [SCSS](https://sass-lang.com/), to style the app.

- [Axios](https://www.npmjs.com/package/axios), to make requests to NASA's Mars Rover Photos API.

- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro), to write unit tests for the React components.

## Getting Started

The following contains the steps required to get the application up and running on your local workspace.

### Prerequisites

- node v15.14.0

- yarn v1.22.10

- git v2.32.0

### Running locally

To run the app locally, follow the steps below:

1. Clone the repository to your PC using your terminal. For more info, refer to this [article.](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)

2. Navigate into the repository using the command:

   ```
   cd spacestagram
   ```

3. Install the dependencies in the package.json using the command:

   ```
   yarn install
   ```

4. After the dependencies have been installed successfully:

   1. Create a `.env` file at the root of the repository.

   2. Copy the contents of the `.env.sample` file into the `.env` file.

   3. Configure the environment variables in the now populated `.env` file with your own values.

5. Run the app in your terminal using the command:

   ```
   yarn start
   ```
