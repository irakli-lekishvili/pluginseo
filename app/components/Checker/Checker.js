import { SeoStore } from 'stores'
import { SeoActions }  from 'actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import isURL from 'validator/lib/isURL'
import './Checker.css'

export default class Checker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      isValidUrl: false
    }
  }

  static proptTypes = {
    fetchError: React.PropTypes.string
  }

  render() {
    return (
      <div>
        <TextField
          hintText='Enter your domain here'
          value={this.state.url}
          onChange={::this._onChange}
        />
        <RaisedButton
          className='button-check'
          disabled={!this.state.isValidUrl}
          onClick={::this._onClick}
        >
          Check
        </RaisedButton>
        <br/>
        <span className='error-message'>{this.props.fetchError.message}</span>
      </div>
    )
  }

  _onChange(e) {
    let value = e.target.value
    this.setState({ url: value, isValidUrl: isURL(value) })
  }

  _onClick() {
    SeoActions.updateUrl(this.state.url)
    SeoStore.fetchSeo()
  }
}
