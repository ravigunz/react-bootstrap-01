import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function UserCard({ name, username, id, website, phone, email, companyInfo }) {
  return (
    <Card>
      <Card.Header>{username} - <b>{id}</b></Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {phone}<br />{email}<br />{companyInfo}
        </Card.Text>
        <Button variant="primary">{website}</Button>
      </Card.Body>
    </Card>
  );
}