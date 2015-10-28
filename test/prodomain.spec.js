'use strict';

import Bitly from '../src/bitly';
import { expect } from 'chai';
import 'sepia';

let bitly;
let bitly_token = 'eb1b99efe83c7d029e7600a6b38e32d1c9c2c6d9';
const LONG_URL = 'http://example.com';
const SHORT_URL = 'http://bit.ly/1KjIwXl';
const BITLY_HASH = 'VDcn';

describe('pro domains', () => {

  beforeEach(() => {
    bitly = new Bitly(bitly_token);
  });

  afterEach(() => {
    bitly = undefined;
  });

  it('should return a success', (done) => {
    bitly.bitlyProDomain('nyti.ms').then((result) => {
      expect(result).to.have.property('status_code').and.to.equal(200);
      done();
    }, done);
  });

  it('should return an error on invalid domain', (done) => {
    bitly.bitlyProDomain('this is not a url').then((result) => {}, (error) => {
      expect(error).to.be.instanceOf(Error);
      done();
    });
  });
});
