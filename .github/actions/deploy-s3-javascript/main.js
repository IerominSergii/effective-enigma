const core = require("@actions/core");
const exec = require("@actions/exec");
const github = require("@actions/github");

function run() {
  core.notice("Hello from Deploy S3 JavaScript Action!");
}

run();
