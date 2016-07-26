import connectToStores from 'alt-utils/lib/connectToStores'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { SeoStore } from 'stores'
import { SeoActions } from 'actions'
import Spinner from 'react-spinkit'

@connectToStores
export default class Checker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: ''
    }

    SeoStore.fetchSeo()
  }

  static getStores() {
    return [SeoStore]
  }

  static getPropsFromStores() {
    return SeoStore.getState()
  }
  render() {
    return (
      <div>
        <Spinner spinnerName='double-bounce' />
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
    SeoStore.fetchSeo()
  }
}
