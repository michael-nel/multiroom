module.exports = (app) => {
  app.post('/chat', (req, res) => {
    app.app.controllers.chat.beginChat(app, req, res);
  })

  app.get('/chat', (req, res) => {
    app.app.controllers.chat.beginChat(app, req, res);
  })
}