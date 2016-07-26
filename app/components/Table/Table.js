import connectToStores from 'alt-utils/lib/connectToStores'
import { SeoStore } from 'stores'

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

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}
