import connectToStores from 'alt-utils/lib/connectToStores'
import { SeoStore } from 'stores'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Checker, Result, Loader } from 'components'

@connectToStores
export default class AppContainer extends React.Component {
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
          <Checker fetchError={this.props.fetchError} />
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
