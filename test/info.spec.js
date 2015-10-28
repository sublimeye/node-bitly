'use strict';

import Bitly from '../src/bitly';
import { expect } from 'chai';
import 'sepia';

let bitly;
let bitly_token = 'eb1b99efe83c7d029e7600a6b38e32d1c9c2c6d9';
const LONG_URL = 'http://example.com';
const SHORT_URL = 'http://bit.ly/1KjIwXl';
const BITLY_HASH = 'VDcn';

describe('info', () => {

  beforeEach(() => {
    bitly = new Bitly(bitly_token);
  });

  afterEach(() => {
    bitly = undefined;
  });

  it('should return a success for a short url', (done) => {
    bitly.info(SHORT_URL).then((result) => {
      expect(result).to.have.property('status_code').and.to.equal(200);
      done();
    }, done);
  });

  it('should return an success on invalid URL which is contains an error property', (done) => {
    bitly.info('htp://foocom').then((result) => {
      expect(result).to.have.property('status_code').and.to.equal(200);
      expect(result).to.have.deep.property('data.info.error');
      done();
    }, done);
  });

  it('should return a success for a hash', (done) => {
    bitly.info(BITLY_HASH).then((result) => {
      expect(result).to.have.property('status_code').and.to.equal(200);
      done();
    }, done);
  });

  it('should return an error on invalid hash', (done) => {
    bitly.info('(ノಠ益ಠ)ノ彡┻━┻').then((result) => {
      expect(result).to.have.property('status_code').and.to.equal(200);
      expect(result).to.have.deep.property('data.info.error');
      done();
    }, done);
  });

  it('should return a success for a hash and short url mixed', (done) => {
    bitly.info([SHORT_URL, BITLY_HASH]).then((result) => {
      expect(result).to.have.property('status_code').and.to.equal(200);
      done();
    }, done);
  });

  it('should return an error on invalid mixed url and hash', (done) => {
    bitly.info(['htp://foocom', '(ノಠ益ಠ)ノ彡┻━┻']).then((result) => {}, (error) => {
      expect(error).to.be.instanceOf(Error);
      done();
    });
  });
});
