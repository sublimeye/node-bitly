'use strict';

var bitlyData = (bitlyInstance) => {
  return {
    /**
     * Request the information about a single bitly link
     * @param  {String} link The string bitly link
     * @return {Promise}
     */
    info : (link) => {
      return new Promise((resolve, reject) => {
        return bitlyInstance.doRequest(bitlyInstance.generateNiceUrl({
          format: bitlyInstance.config.format,
          domain: bitlyInstance.config.domain,
          link: link
        }, 'link/info')).then((result) => {
          return resolve(result.data);
        }, (error) => {
          return reject(error);
        })
      });
    }
  }
};

export default bitlyData;
