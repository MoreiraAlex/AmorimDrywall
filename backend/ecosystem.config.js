module.exports = {
  apps : [{
    name   : "amorim-drywall",
    script    : "./src/index.js",
    instances : "2",
    exec_mode : "cluster"
  }]
}
