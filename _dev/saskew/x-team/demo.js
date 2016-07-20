import React from 'react';
import ReactDOM from 'react-dom';
import Form, {Text} from './src/index';

ReactDOM.render((
  <Form>
    <Text
      name="name"
      validate={['required']}
      placeholder="Type your name here"
      label="Your name"/>
    <Text
      name="email"
      validate={['required', 'email']}
      placeholder="Type your email here"
      label="E-mail"/>
    <Text
      name="name"
      validate={['url']}
      placeholder="Type your website url here"
      label="Website"/>
  </Form>
), document.getElementById('container'));
