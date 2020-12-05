module.exports = function(app, client) {
  app.route('/send-message').post((req, res) => {
    const { to_number, message } = req.body;

    console.log(req);
    console.log(to_number);
    
    const target = to_number + '@c.us';

    
      client.sendText(
        target,
        message,
      ).then((resp) => {
        res.send({
          status: true,
          data: resp,
        })
      }).catch((err) => {
        res.send({
          status: false,
          message: 'something went wrong'
        })
      })
      
  });
};