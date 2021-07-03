import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Icon, List, Grid, Input, Table, Feed, Menu, Container, Label } from 'semantic-ui-react';

class App extends Component {
  render(){
    return (
      <div>
        <br />
        <Container>
        <Table celled>
            <Table.Header>
              <Table.Row textAlign='right'>
                  <Table.HeaderCell colSpan='3'>
                    <Input icon='search' placeholder='Search document' />
                  </Table.HeaderCell>
                </Table.Row>
              <Table.Row textAlign='center'>
                <Table.HeaderCell>Nama Document</Table.HeaderCell>
                <Table.HeaderCell>Jenis File</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Panduan Belajar Javascript</Label>
                </Table.Cell>
                <Table.Cell textAlign='center'>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar JS</Table.Cell>
                <Table.Cell textAlign='center'>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar CSS</Table.Cell>
                <Table.Cell textAlign='center'>PDF</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron left' />
                    </Menu.Item>
                    <Menu.Item as='a'>1</Menu.Item>
                    <Menu.Item as='a'>2</Menu.Item>
                    <Menu.Item as='a'>3</Menu.Item>
                    <Menu.Item as='a'>4</Menu.Item>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron right' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>
        <br />
        <Container>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column width={12}>
              <Feed>
              <Feed.Event>
                  <Feed.Label>
                    <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                  </Feed.Label>
                  <Feed.Content>
                    <Feed.Summary>
                      <Feed.User>Elliot Fu</Feed.User> added you as a friend
                      <Feed.Date>1 Hour Ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name='like' />4 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label image='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' />
                  <Feed.Content>
                    <Feed.Summary>
                      You submitted a new post to the page
                      <Feed.Date>3 days ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra text>
                      Saya senang belajar pemrograman.
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name='like' />11 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>                

                <Feed.Event>
                  <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                  <Feed.Content>
                    <Feed.Summary>
                      <a>Helen Troy</a> added <a>2 new illustrations</a>
                      <Feed.Date>4 days ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra images>
                      <a>
                        <img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' />
                      </a>
                      <a>
                        <img src='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' />
                      </a>
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name='like' />2 Like
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
              </Grid.Column>            
              <Grid.Column width={4}>
                <h5>Website Terkait</h5>
                <List>
                  <List.Item>
                    <List.Icon name='linkify' />
                    <List.Content>
                      <a href='http://www.google.com'>Google</a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='linkify' />
                    <List.Content>
                      <a href='http://www.facebook.com'>Facebook</a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='linkify' />
                    <List.Content>
                      <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='linkify' />
                    <List.Content>
                      <a href='http://www.Niomic.com'>Niomic</a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='linkify' />
                    <List.Content>
                      <a href='http://www.reactjs.org'>React</a>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <br />
      </div>
    );
  }
}

export default App;
