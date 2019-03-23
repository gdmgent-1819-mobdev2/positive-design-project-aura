import React from "react";
import { getInstance } from "./../services/firebase/firebase";

const firebase = getInstance();
// const initialState = {
//   userId: firebase.auth().currentUser.uid
// };

const initialState = {
    userId: 'Firebase User 01'
  };

export const AppContext = React.CreateContext();
export const AppConsumer = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          userId: this.state.userId
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
