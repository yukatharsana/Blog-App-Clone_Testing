// @ts-nocheck
import React from 'react';
import {reset} from '../../DataStorage/User'
function Login ()
{

  return (<button onClick={async () =>
  {
    await reset();
  }}>Hello</button>);
}

export default Login;
