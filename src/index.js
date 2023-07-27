//Write your code here
class Api {
  #secure;
  constructor(url, method = "GET") {
    this.url = url;
    this.method = method;
    this.#secure = url.startsWith("https");
  }
  isSecure() {
    return this.#secure;
  }
  updateUrl(url) {
    this.url = url;
  }
}

//Do not remove this code
module.exports = { API };
