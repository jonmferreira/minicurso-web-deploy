import type {Config} from 'jest';
import {defaults} from 'jest-config';

const config: Config = {
    verbose: true,
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    collectCoverageFrom: [
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/vendor/**',
    ],
    testEnvironment: "jsdom",
    testTimeout: 30000
};

export default config;
