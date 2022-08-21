function errorHandler(error) {
  const { name, message, stack } = error;
  console.log(name, message);

  //   logger.error({ name, message, stack });
  // console.log("Internal Server Error!")
}

function two() {
  console.log("Two");
}

// module.exports.errorHandler = errorHandler;
// module.exports.two = two;

module.exports = {
  errorHandler,
  two,
};
