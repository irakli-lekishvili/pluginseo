import connectToStores from 'alt-utils/lib/connectToStores'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { SeoStore } from 'stores'
import { SeoActions } from 'actions'

@connectToStores
export default class extends React.Component {
  static getStores() {
    return [SeoStore]
  }

  static getPropsFromStores() {
    return SeoStore.getState()
  }
  render() {
    return (
      <div>
        <button onClick={this.onClick}>Click</button>
        <ul>
          {this.props.todos.map((todo) => {
            return (
              <li key={todo.id}>{todo.text}</li>
              );
          })}
        </ul>
        {/* <TextField hintText='Enter your domain here'/> */}
        {/* <RaisedButton> Check </RaisedButton> */}
      </div>
    )
  }

  onClick() {
    SeoActions.updateTodo(1, 'ravi')
  }
}
