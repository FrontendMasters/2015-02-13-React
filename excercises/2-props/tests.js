// TODO!
//var React = require('react');
//var assert = require('../assert');

//var captureWarnings = (fn) => {
  //var _warn = console.warn;
  //var msgs = {};
  //console.warn = function (msg) {
    //msgs[msg] = true;
    //_warn.apply(console, arguments);
  //};
  //fn();
  //console.warn = _warn;
  //return msgs;
//};

//var expectWarning = (expected, fn) => {
  //var msgs = captureWarnings(fn);
  //assert(msgs[expected], `got expected warning "${expected}"`);
//};

//var doNotExpectWarning = (notExpected, fn) => {
  //var msgs = captureWarnings(fn);
  //assert(msgs[notExpected] == null, `Did not get warning "${notExpected}"`);
//};

//var noWarningsMatch = (regex, fn) => {
  //var msgs = captureWarnings(fn);
  //var failed = false;
  //Object.keys(msgs).forEach((msg) => {
    //if (regex.test(msg)) {
      //assert(false, `did not expect to match warning ${msg}`);
      //failed = true;
    //}
  //});
  //if (failed === false)
    //assert(true, `no warnings matched ${regex}`);
//};

//exports.run = (Gravatar, emailType) => {
  //var el = <Gravatar email="rpflorence@gmail.com" size="asdf"/>;

  //var Foo = React.createClass({
    //propTypes: {
      //loginId: emailType
    //},
    //render () { return null; }
  //});

  //noWarningsMatch(/undefined/, () => {
    //<Foo loginId="kimexample.com" />
  //});

//};

