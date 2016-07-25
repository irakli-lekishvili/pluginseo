import { AppContainer } from 'containers'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()
ReactDOM.render(<AppContainer />, document.getElementById('app'));
