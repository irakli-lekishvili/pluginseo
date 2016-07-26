import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Header, Checker, Table } from 'components'

export default class AppContainer extends React.Component {
  render() {
    return (
      <div>
      <MuiThemeProvider>
        <Checker />
      </MuiThemeProvider>
      <Table />
      </div>
    )
  }
}
