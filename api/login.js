module.exports = (req, res) => {
    let ret = JSON.stringify(req);
    res.status(200).send(ret);
  };