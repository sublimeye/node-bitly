'use strict';

import Bitly from '../src/bitly';
import { expect } from 'chai';
import 'sepia';

let bitly;
let bitly_token = 'eb1b99efe83c7d029e7600a6b38e32d1c9c2c6d9';
const LONG_URL = 'http://example.com';
const SHORT_URL = 'http://bit.ly/1KjIwXl';
const BITLY_HASH = 'VDcn';

describe('module instantiation', () => {

  beforeEach(() => {
    bitly = new Bitly(bitly_token);
  });

  afterEach(() => {
    bitly = undefined;
  });

  it('should be a valid object with configuration and methods', () => {
    expect(bitly.config).to.be.an('object');
    expect(bitly.config).to.have.property('access_token').and.to.equal(bitly_token);
  });
});
