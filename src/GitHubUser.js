import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const GitHubUser = (props) => (
  <div>
    <h1>GitHubUser</h1>
    {console.log(props.user)}
    <Card>
      <Image src={props.user.avatar_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.user.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.user.location}</span>
        </Card.Meta>
        <Card.Description>
          {props.user.html_url}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          {props.user.followers} Followers
        </a>
      </Card.Content>
    </Card>
  </div>
)

export default GitHubUser
