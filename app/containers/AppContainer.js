import connectToStores from 'alt-utils/lib/connectToStores'
import { SeoStore } from 'stores'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Checker, Result, Loader } from 'components'
import queryString from 'query-string'

@connectToStores
export default class AppContainer extends React.Component {
  constructor(props) {
    super(props)

    const url = queryString.parse(location.search).url || ''
    this.state = { url: url }
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
        <MuiThemeProvider>
          <Checker
            url={this.state.url}
            fetchError={this.props.fetchError}
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Result seo={this.props.seo} />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Loader fetching={this.props.isFetching} />
        </MuiThemeProvider>
      </div>
    )
  }
}
