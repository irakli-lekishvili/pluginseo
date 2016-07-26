import connectToStores from 'alt-utils/lib/connectToStores'
import {Tabs, Tab} from 'material-ui/Tabs'
import { SeoStore } from 'stores'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

@connectToStores
export default class Table extends React.Component {
  constructor(props) {
    super(props)
  }

  static getStores() {
    return [SeoStore]
  }

  static getPropsFromStores() {
    return SeoStore.getState()
  }

  _renderCheck(item, index) {
    return (
      <Tab key={index} label={item.get('title')}>
        <h1>HOW TO FIX YOUR {item.get('title').toUpperCase()}</h1>
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
