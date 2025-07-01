const request = require('supertest');
const app = require('../backend/server');

let authToken;

describe('API Auth and Tasks', () => {
  // Register user
  it('POST /api/auth/register - should create a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        email: 'testuser@example.com',
        password: 'password123',
        name: 'Test User'
      });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('token');
    expect(res.body.user.email).toBe('testuser@example.com');
  });

  // Login user
  it('POST /api/auth/login - should login and return token', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'testuser@example.com',
        password: 'password123'
      });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
    authToken = res.body.token;
  });

  // Get tasks
  it('GET /api/tasks - should return tasks list', async () => {
    const res = await request(app)
      .get('/api/tasks')
      .set('Authorization', `Bearer ${authToken}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // Create task
  it('POST /api/tasks - should create a new task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        title: 'New Test Task',
        description: 'Test description',
        priority: 'high'
      });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('New Test Task');
    expect(res.body.priority).toBe('high');
  });

  // Update task
  it('PUT /api/tasks/:id - should update the task', async () => {
    // Get a task ID first
    const tasksRes = await request(app)
      .get('/api/tasks')
      .set('Authorization', `Bearer ${authToken}`);

    const taskId = tasksRes.body[0].id;

    const res = await request(app)
      .put(`/api/tasks/${taskId}`)
      .set('Authorization', `Bearer ${authToken}`)
      .send({ status: 'done' });

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('done');
  });

  // Delete task
  it('DELETE /api/tasks/:id - should delete the task', async () => {
    // Get a task ID first
    const tasksRes = await request(app)
      .get('/api/tasks')
      .set('Authorization', `Bearer ${authToken}`);

    const taskId = tasksRes.body[0].id;

    const res = await request(app)
      .delete(`/api/tasks/${taskId}`)
      .set('Authorization', `Bearer ${authToken}`);

    expect(res.statusCode).toBe(204);
  });
});
