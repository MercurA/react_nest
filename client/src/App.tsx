import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {getUserThunk} from './store/actions';
import IUserState from './store/interfaces/IUserState';
import { GlobalState } from "./store";
import IUser from './store/interfaces/IUser';
const mapStateToProps = (state: GlobalState) => (
  {
    users: state.globalState?.users || [],
  }
)

interface IAppProps {
  users: IUser[];
  getUserThunk: any
}

class App extends Component<IAppProps, object>{

  public render() {
    return (
      <div className="App">
        <button onClick={this.props.getUserThunk}>Click</button>
        <div>
          {this.renderList()}
        </div>
      </div>
    )
  }

  private renderList = (): JSX.Element[] => {
      return this.props.users.map((user: IUser) => (
        <div>
          <div>{user.name}</div>
          <div>{user.age}</div>
          <div>{user.location}</div>
        </div>
      ))
  }
}


export default connect(mapStateToProps, {getUserThunk})(App);
