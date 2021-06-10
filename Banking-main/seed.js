const mongoose = require('mongoose');
const Customer = require('./models/user');

mongoose
  .connect('mongodb://localhost:27017/banking', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('connected');
  })
  .catch((err) => {
    console.log('error', err);
  });

const v = async () => {
  await Customer.deleteMany({});
  await Customer.insertMany([
    {
      username: 'sai shankar',
      email: 'saishankar@gmail.com',
      Balance: 500,
      avatar:
        'https://images.unsplash.com/photo-1601233749763-354ad977e784?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=995&q=80',
      contact: 8219232323,
      about:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam .',
    },
    {
      username: 'singh',
      email: 'singgmail.com',
      Balance: 500,
      avatar:
        'https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1061&q=80',
      contact: 7712400440,
      about:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum.',
    },
    {
      username: 'sharma',
      email: 'aryana@gmail.com',
      Balance: 500,
      avatar:
        'https://images.unsplash.com/photo-1596747742222-008b5a85bc0f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      contact: 8823324064,
      about:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum.',
    },
    {
      username: 'axena',
      email: 'dhawan78@gmail.com',
      Balance: 500,
      avatar:
        'https://images.unsplash.com/photo-1604995236333-84f3249e572c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80',
      contact: 7790422189,
      about:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam.',
    },
    {
      username: 'sahil ',
      email: 'Dogra@gmail.com',
      Balance: 500,
      avatar:
        'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1086&q=80',
      contact: 6631123098,
      about:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum.',
    },
    {
      username: 'preetam ',
      email: 'preeta@gmail.com',
      Balance: 500,
      avatar:
        'https://images.unsplash.com/photo-1581125119293-4803aa54b372?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      contact: 8234580971,
      about:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum.',
    },
    {
      username: ' kapoor',
      email: 'kapoor@gmail.com',
      Balance: 500,
      avatar:
        'https://images.unsplash.com/photo-1600896997793-b8ed3459a17f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      contact: 2098453187,
      about:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam.',
    },
  ]);
};

v();
