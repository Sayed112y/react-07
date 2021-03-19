import React, { Fragment } from 'react';
import Allproduct from './product/allproduct';
import ErrorBoundary from './ErrorBoundry';

export default function App() {
  return (
    <Fragment>
      <div className="container">
        <ErrorBoundary>
          <Allproduct />
        </ErrorBoundary>
      </div>
      </Fragment>
  )
}