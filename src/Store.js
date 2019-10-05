import {
  observable, computed, action, runInAction, when, autorun
} from 'mobx';

class Store {
  @observable userName = '13shutt'

  @observable data

  @action
  setUserName = (userName) => {
    this.userName = userName;
    this.getUser()
  }

  @action
  getUser() {
    fetch(`https://api.github.com/users/${this.userName}`)
    .then(res => res.json())
    .then(json => this.data = json)
  }
}

export default new Store()


/*
.then(res => {
  if(res.status == 200)
  return res.json()
  else { return this.data = "request failed" }
})
.then(json => { this.data = json })

*/
