import {Component} from 'react'
import './index.css'

class TabsData extends Component {
  render() {
    const {items, tabsData, activeStyle} = this.props
    const {displayText, tabId} = items

    const clickTab = () => {
      tabsData(tabId)
    }

    return (
      <li className="tabs-item">
        <button type="button" className="btn" onClick={clickTab}>
          <p className={`tabs ${activeStyle ? 'active-border' : 'border'}`}>
            {displayText}
          </p>
        </button>
      </li>
    )
  }
}

export default TabsData
