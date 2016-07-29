import { SeoStore } from 'stores'
import { SeoActions }  from 'actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import isURL from 'validator/lib/isURL'
import './Checker.scss'

export default class Checker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      url: props.url,
      isValidUrl: false
    }

    if (props.url) this.fetchSeo()
  }

  static proptTypes = {
    url: React.PropTypes.string,
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
          onClick={::this.fetchSeo}
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

  fetchSeo() {
    SeoActions.updateUrl(this.state.url)
    SeoStore.fetchSeo()
  }
}
