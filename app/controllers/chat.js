module.exports.beginChat = (app, req, res) => {
  const dataForm = req.body;
  req.assert("name", "Name or Nickname required.").notEmpty();
  req
    .assert("name", "Name or Nickname required between 3 and 15 caracters.")
    .len(3, 15);
  const errors = req.validationErrors();
  if (errors) {
    res.render("index", {
      validation: errors,
    });
    return;
  }
  app.get('io').emit('msgToClient', {
    name: dataForm.name,
    message: 'Logged in chat'
  });

  app.get('io').emit('partneerToClient', {
    name: dataForm.name,
  });


  res.render("chat", {
    dataForm: dataForm
  });
};