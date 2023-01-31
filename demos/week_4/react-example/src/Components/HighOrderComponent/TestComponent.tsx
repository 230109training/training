import React from 'react'
import withAuth from './withAuth';

const TestComponent = () => {
  return (
    <p>Hello World</p>
  )
}

export default withAuth(TestComponent);