'use strict';

var bitlyLinks = (bitlyInstance) => {
  return {
    /**
     * Request to expand a single short url, short hash or mixed array or items
     *
     * With this method, if you pass a single url or hash and it is not found the library
     * will automatically reject the request and pass an error.
     *
     * If you pass multiple items to the method, you will need to do your own error handling
     * as the results are returned as an array and will have mixed success and failures
     *
     * @param  {String|Array} items The string or array of short urls and/or hashes to expand
     * @return {Promise}
     */
    expand (items) {
      return new Promise((resolve, reject) => {
        var query = {
          format: bitlyInstance.config.format,
          domain: bitlyInstance.config.domain
        };

        bitlyInstance.sortUrlsAndHash(items, query);

        return bitlyInstance.doRequest(bitlyInstance.generateNiceUrl(query, 'expand')).then(
          (result) => {
            return resolve(result.data.expand);
          },
          (error) => {
            return reject(error);
          }
        );
      });
    }
  }
};

export default bitlyLinks;
