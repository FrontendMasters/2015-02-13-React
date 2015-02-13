localStorage.token = localStorage.token || (Date.now()*Math.random());

exports.getJSON = (url, cb) => {
  var req = new XMLHttpRequest();
  req.onload = function () {
    if (req.status === 404) {
      cb(new Error('not found'));
    } else {
      cb(null, JSON.parse(req.response));
    }
  };
  req.open('GET', url);
  setToken(req);
  req.send();
};

exports.postJSON = (url, obj, cb) => {
  var req = new XMLHttpRequest();
  req.onload = function () {
    cb(JSON.parse(req.response));
  };
  req.open('POST', url);
  req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  setToken(req);
  req.send(JSON.stringify(obj));
};

exports.deleteJSON = (url, cb) => {
  var req = new XMLHttpRequest();
  req.onload = cb;
  req.open('DELETE', url);
  setToken(req);
  req.send();
};

function setToken (req) {
  req.setRequestHeader('authorization', localStorage.token);
}

