const loader = async function(source, map) {
  let callback = this.async();
  callback(null, source, map);
};

exports.default = loader;
