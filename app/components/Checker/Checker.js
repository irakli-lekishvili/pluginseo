import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class extends React.Component {
  render() {
    return (
      <div>
        <TextField hintText='Enter your domain here'/>
        <RaisedButton> Check </RaisedButton>
      </div>
    )
  }
}
