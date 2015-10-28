'use strict';

import Bitly from '../src/bitly';
import { expect } from 'chai';
import 'sepia';

let bitly;
let bitly_token = 'eb1b99efe83c7d029e7600a6b38e32d1c9c2c6d9';
const SHORT_URL = 'http://bit.ly/1KjIwXl';
const SHORT_URL_INVALID = 'http://bit.ly/invalidurl';

describe('link/clicks', () => {

  beforeEach(() => {
    bitly = new Bitly(bitly_token);
  });

  afterEach(() => {
    bitly = undefined;
  });

  it('should return a success for a single short url', (done) => {
    bitly.clicks(SHORT_URL).then((result) => {
      expect(result).to.have.property('status_code').and.to.equal(200);
      done();
    }, done);
  });

  it('should return an error for a invalid short url', (done) => {
    bitly.clicks(SHORT_URL_INVALID).then(() => {}, (error) => {
      expect(error).to.be.instanceOf(Error);
      done();
    });
  });
});
