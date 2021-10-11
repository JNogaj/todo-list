export function registerRoutes(app, databaseClient) {
  console.log({ databaseClient });
  app.get('/tasks', async (req, res) => {
    const tasks = await databaseClient.collection('tasks').find().toArray();
    res.json(tasks);
  });

  app.post('/tasks', async (req, res) => {
    const result = await databaseClient.collection('tasks').insert(req.body);
    res.json(result);
  });

  app.put('/tasks/:id', (req, res) => {
    return databaseClient
      .collection('tasks')
      .updateOne({ _id: req.params.id }, { $set: req.body });
  });

  app.delete('/tasks/:id', (req, res) => {
    return databaseClient.collection('tasks').deleteOne({ _id: req.params.id });
  });
}
