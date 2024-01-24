import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, phone, address
}) => (
  <div>
    <h1>Welcome, {name}!</h1>
    <p>{email}</p>
    <p>{phone}</p>
    <p>{address}</p>
  </div>
);