import { AppContainer } from 'containers'
import injectTapEventPlugin from 'react-tap-event-plugin'
import 'style.scss'

injectTapEventPlugin()
ReactDOM.render(<AppContainer />, document.getElementById('app'));
