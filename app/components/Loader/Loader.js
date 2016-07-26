import Dialog from 'material-ui/Dialog'
import Spinner from 'react-spinkit'

export default class Loader extends React.Component {
  static propTyps = {
    fetching: React.PropTypes.bool.isRequired
  }

  render() {
    return (
      <Dialog
          modal={true}
          open={this.props.fetching}
        >
          Loading...
          <Spinner spinnerName='three-bounce' />
        </Dialog>
    )
  }
}
