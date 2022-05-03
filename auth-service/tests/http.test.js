import request from 'supertest';
import app from '../src/app';
import bcrypt from 'bcrypt';
import { PartnerCredential, User } from '../src/models';

describe("Authentication", () => {
  let user = null;
  let credential = null;

  beforeAll(async () => {
    user = await dummyUser();
    credential = await dummyPartnerCredential();

    await User.sync();
    await User.create(user);

    await PartnerCredential.sync();
    await PartnerCredential.create(credential);
  });

  test("It verifies users authentication endpoint", async () => {
    const response = await request(app)
      .post('/sign-in')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send({email: user.email, password: user._password});

    expect(response.statusCode).toBe(200);
    expect(Object.keys(response.body)).toContain('jwt');
  });

  test("It sends wrong email to users authentication endpoint", async () => {
    const response = await request(app)
      .post('/sign-in')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send({email: 'invalid@example.com', password: user._password});

    expect(response.statusCode).toBe(404);
  });

  test("It sends wrong password to users authentication endpoint", async () => {
    const response = await request(app)
      .post('/sign-in')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send({email: user.email, password: 'wrong-password'});

    expect(response.statusCode).toBe(401);
  });


  test("It verifies partners authentication endpoint", async () => {
    const response = await request(app)
      .post('/authorize')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send({client_id: credential.key, client_secret: credential._secret});

    expect(response.statusCode).toBe(200);
    expect(Object.keys(response.body)).toContain('jwt');
  });

  test("It sends wrong client id to authorize endpoint", async () => {
    const response = await request(app)
      .post('/authorize')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send({client_id: 'wrong-key', client_secret: credential._secret});

    expect(response.statusCode).toBe(404);
  });

  test("It sends wrong client secret to authorize endpoint", async () => {
    const response = await request(app)
      .post('/authorize')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send({client_id: credential.key, client_secret: 'wrong-secret'});

    expect(response.statusCode).toBe(401);
  });
});


const dummyUser = async (data) => {
  const user = {
    id: 1,
    email: 'john.doe@example.com',
    _password: 'secret',
    password: '',
    created_at: new Date()
  };

  Object.assign(user, data);

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user._password, salt);

  return user;
}

const dummyPartnerCredential = async (data) => {
  const credential = {
    id: 1,
    partner_id: 1,
    key: '::client_id::',
    _secret: '::client_secret::',
    secret: '',
    create_at: new Date(),
  }

  Object.assign(credential, data);

  const salt = await bcrypt.genSalt(10);
  credential.secret = await bcrypt.hash(credential._secret, salt);

  return credential;
}