

```js
import React from 'react';
import {
  Router,
  NaviRoute,
  history,
  hashChange,
} from '../components/navigation';
import * as pages from './index';

export default class extends React.PureComponent {
  componentDidMount() {
    history.push('/Home/');
    hashChange();
  }
  render() {
    return (
      <Router history={history}>
        <div>
          <NaviRoute root exact path="/Home/*" component={pages.Home} />
          <NaviRoute exact path="/User/*" component={pages.User} />
        </div>
      </Router>
    );
  }
}
```
