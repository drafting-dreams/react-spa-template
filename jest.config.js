/* eslint no-useless-escape: "off" */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '.(scss|css)$': 'identity-obj-proxy',
    '.(png|jpg|jpeg|png|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
