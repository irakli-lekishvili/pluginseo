import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Header, Checker } from 'components'

export default class AppContainer extends React.Component {
  render() {
    // return <Header />
    return (
      <MuiThemeProvider>
        <Checker />
      </MuiThemeProvider>
    )
  }
}
