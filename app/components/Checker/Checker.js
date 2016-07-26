import { SeoStore } from 'stores'
import { SeoActions }  from 'actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class Checker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: ''
    }
  }

  render() {
    return (
      <div>
        <TextField
          hintText='Enter your domain here'
          value={this.state.url}
          onChange={(e) => this.setState({url: e.target.value})}
        />
        <RaisedButton onClick={::this._onClick}>Check</RaisedButton>
      </div>
    )
  }

  _onClick() {
    SeoActions.updateUrl(this.state.url)
    SeoStore.fetchSeo()
  }
}
