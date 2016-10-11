import React from 'react';
import { RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';

import config from '../config';

export default renderProps => (
  <html>
    <head>
      <title>
        { config.TITLE }
      </title>

      <meta charSet='utf-8' />

      <meta
        name={ config.TITLE }
        content={ 'description' }
      />

      <link rel='stylesheet' type='text/css' href='main.css' />
    </head>

    <body>
      <div
        id={ `${config.MOUNTING_POINT}` }
        dangerouslySetInnerHTML={ { __html: renderToString(
          <RouterContext { ...renderProps } />)
        } }
      />

      <script dangerouslySetInnerHTML={ { __html: `
        console.info('Server-side rendered.')
      ` } } />
      <script src='bundle.js' />
    </body>
  </html>
);