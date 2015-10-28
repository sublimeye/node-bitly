'use strict';

import Bitly from '../src/bitly';
import { expect } from 'chai';
import 'sepia';

let bitly;
let bitly_token = 'eb1b99efe83c7d029e7600a6b38e32d1c9c2c6d9';
const LONG_URL = 'http://example.com';
const SHORT_URL = 'http://bit.ly/1KjIwXl';
const SHORT_URL_INVALID = 'http://bit.ly/invalidurl';
const BITLY_HASH = 'VDcn';

describe.only('Expand URLs', () => {

  beforeEach(() => {
    bitly = new Bitly(bitly_token);
  });

  afterEach(() => {
    bitly = undefined;
  });

  it('should return a success for a short url', (done) => {
    bitly.links.expand(SHORT_URL).then((result) => {
      expect(result).to.have.property('status_code').and.to.equal(200);
      done();
    }, done);
  });

  it('should return an error for an invalid short url', (done) => {
    bitly.links.expand(SHORT_URL).then((result) => {}, (error) => {
      expect(error).to.be.instanceOf(Error);
      done();
    });
  });

  it('should return a success for a hash', (done) => {
    bitly.links.expand(BITLY_HASH).then((result) => {
      expect(result).to.have.property('status_code').and.to.equal(200);
      done();
    }, done);
  });

  it('should return an error for an invalid hash', (done) => {
    bitly.links.expand('(ノಠ益ಠ)ノ彡┻━┻').then((result) => {}, (error) => {
      expect(error).to.be.instanceOf(Error);
      done();
    });
  });

  it('should return a success for a hash and short url mixed', (done) => {
    bitly.links.expand([SHORT_URL, BITLY_HASH]).then((result) => {
      console.log(result);
      expect(result).to.have.property('status_code').and.to.equal(200);
      done();
    }, done);
  });
});
