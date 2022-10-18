import {Component} from 'react'
import './index.css'

class MatchItem extends Component {
  render() {
    const {item, clickThumbnail} = this.props
    const {thumbnailUrl, id} = item

    const selectThumbnail = () => {
      clickThumbnail(id)
    }
    return (
      <li className="image-lists">
        <button type="button" onClick={selectThumbnail} className="btn">
          <img src={thumbnailUrl} className="img" alt="thumbnail" />
        </button>
      </li>
    )
  }
}

export default MatchItem
