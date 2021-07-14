import * as publicUiFunctions from './ui';

// Expose public functions by attaching to `global`
global.doGet = publicUiFunctions.doGet;
