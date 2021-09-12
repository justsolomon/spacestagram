/// <reference types="react-scripts" />

declare namespace NodeJS {
  // Merge the existing `ProcessEnv` definition with ours
  // Any variable declared in the .env file here should be typed in the interface below
  export interface ProcessEnv {
    REACT_APP_NASA_API_KEY: string;
  }
}
