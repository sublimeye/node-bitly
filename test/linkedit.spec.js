'use strict';

import Bitly from '../src/bitly';
import { expect } from 'chai';
import 'sepia';

let bitly;
let bitly_token = 'eb1b99efe83c7d029e7600a6b38e32d1c9c2c6d9';
const LONG_URL = 'http://example.com';
const SHORT_URL = 'http://bit.ly/1KjIwXl';
const BITLY_HASH = 'VDcn';

describe('Edit an existing link', () => {

  beforeEach(() => {
    bitly = new Bitly(bitly_token);
  });

  afterEach(() => {
    bitly = undefined;
  });

  it('should edit the title of an existing link', (done) => {
    bitly.linkEdit('title', SHORT_URL, 'Edited title').then((result) => {
      expect(result).to.have.property('status_code').and.to.equal(200);
      done();
    });
  });

  it('should edit the note of an existing link', (done) => {
    bitly.linkEdit('note', SHORT_URL, 'Edited note').then((result) => {
      expect(result).to.have.property('status_code').and.to.equal(200);
      done();
    });
  });

  it('should edit the private status of an existing link', (done) => {
    bitly.linkEdit('private', SHORT_URL, 'true').then((result) => {
      expect(result).to.have.property('status_code').and.to.equal(200);
      done();
    });
  });

  it('should edit the timestamp of an existing link', (done) => {
    bitly.linkEdit('user_ts', SHORT_URL, '522585000').then((result) => {
      expect(result).to.have.property('status_code').and.to.equal(200);
      done();
    });
  });

  it('should edit the archived status of an existing link', (done) => {
    bitly.linkEdit('archived', SHORT_URL, 'true').then((result) => {
      expect(result).to.have.property('status_code').and.to.equal(200);
      done();
    });
  });

  it('should take an array of metadata to edit', (done) => {
    bitly.linkEdit(['title', 'note'], SHORT_URL, ['new title', 'new note']).then((result) => {
      expect(result).to.have.property('status_code').and.to.equal(200);
      done();
    });
  });

  it('Throws if trying to edit a non existent link', (done) => {
    bitly.linkEdit('title', 'http://bit.ly/invalidhash', 'new title').then((result) => {}, (error) => {
      expect(error).to.be.instanceOf(Error);
      done();
    });
  });

  it('Throws if trying to edit a non existent metadata parameter', (done) => {
    bitly.linkEdit('normality', 'http://bit.ly/invalidhash', 'restored').then((result) => {}, (error) => {
      expect(error).to.be.instanceOf(Error);
      done();
    });
  });
});

