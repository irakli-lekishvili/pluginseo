import connectToStores from 'alt-utils/lib/connectToStores'
import {Tabs, Tab} from 'material-ui/Tabs'
import { SeoStore } from 'stores'
import { SeverityIcon, SeverityText } from 'helpers/TableHelpers'

@connectToStores
export default class Table extends React.Component {
  static getStores() {
    return [SeoStore]
  }

  static getPropsFromStores() {
    return SeoStore.getState()
  }

  _renderCheck(item, index) {
    return (
      <Tab
        key={index}
        icon={SeverityIcon(item.get('severity'))}
        label={item.get('title')}
      >
        <h1>how to fix your {item.get('title')}</h1>
        <h2>{SeverityText(item.get('severity'))}</h2>
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
      <div>
         <Tabs>
           { this.props.seo.get('checks') &&
             this.props.seo.get('checks').map((x, i) => this._renderCheck(x, i))
           }
        </Tabs>
      </div>
    )
  }
}
