/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var url = {}
var i = 0
var encode = function(longUrl) {
    url[i] = longUrl
    return i++
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return url[shortUrl]
}

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */