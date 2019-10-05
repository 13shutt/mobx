import React from 'react';
import { observer } from 'mobx-react';
import { Button, Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import store from './Store'
import GitHubUser from './GitHubUser'

const handleInputChanged = (event) => {
  store.setUserName(event.target.value);
}

const App = observer(() => (
  <div>
    <h1>Hello MobX!</h1>
    <Input
      transparent
      placeholder='Search...'
      value={store.userName}
      onChange={handleInputChanged}
    />
    {
      (store.data && (store.data.id != undefined))
      ? (<GitHubUser user={store.data} />)
      : (<h1>Error</h1>)
    }
  </div>
))

export default App;
