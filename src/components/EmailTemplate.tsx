import * as React from 'react';

interface EmailTemplateProps {
  firstname: string;
  lastname: string;
  phonenumber: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstname,
  lastname,
  email,
  phonenumber,
  message
}) => (
  <div>
    <h1>Welcome, {firstname}!</h1>
    <h1>Welcome, {lastname}!</h1>
    <h1>Welcome, {phonenumber}!</h1>
    <h1>Welcome, {email}!</h1>
    <h1>Welcome, {message}!</h1>
  </div>
);
