function encrypt(data) {
  return "encrypted data";
}

function send(url, data) {
  const encrypedData = encrypt(data);
  console.log(`sending ${encrypedData} to ${url}`);
}

module.exports = { send };
