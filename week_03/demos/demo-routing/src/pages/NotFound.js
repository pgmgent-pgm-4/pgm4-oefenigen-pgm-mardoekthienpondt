import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function NotFound() {
  const error = useRouteError();
  return (
    <div>
      {console.log(error)}

      {/* {error.status} {error.statusText} - {error.error.message} */}
    </div>
  );
}
