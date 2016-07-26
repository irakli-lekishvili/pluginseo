import { SeoStore } from 'stores'
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
          onChange={(text) => this.setState({url: text.target.value})}
        />
        <RaisedButton onClick={::this.onClick}> Check </RaisedButton>
      </div>
    )
  }

  onClick() {
    SeoStore.fetchSeo(this.state.url)
  }
}
