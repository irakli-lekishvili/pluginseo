import { Tabs, Tab } from 'material-ui/Tabs'
import { severityIcon, severityText } from 'helpers/TableHelpers'
import './Result.scss'

export default class Result extends React.Component {
  static propTypes = {
    seo: React.PropTypes.object.isRequired
  }

  _renderCheck(item, index) {
    return (
      <Tab
        key={index}
        icon={severityIcon(item.get('severity'))}
        label={item.get('title')}
      >
        <h1>how to fix your {item.get('title')}</h1>
        <h2>{severityText(item.get('severity'))}</h2>
        <ul>
          {item.get('checkItems').map((x, i) => {
            return <li key={i}>{ x.get('details') }</li>
          })}
        </ul>
        <hr/>
        <div dangerouslySetInnerHTML={{__html: item.get('advice')}} />
        <div dangerouslySetInnerHTML={{__html: item.get('fixSteps')}} />
      </Tab>
    )
  }

  render() {
    return (
      <div className='container'>
        { this.props.seo.get('checks') &&
          <Tabs>
            { this.props.seo.get('checks').map((x, i) => this._renderCheck(x, i)) }
          </Tabs>
        }
      </div>
    )
  }
}
