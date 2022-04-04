import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: []}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const eachData = await response.json()
    const updatedData = {
      title: eachData.title,
      imageUrl: eachData.image_url,
      content: eachData.content,
      avatarUrl: eachData.avatar_url,
      author: eachData.author,
    }

    this.setState({blogData: updatedData})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData
    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}

export default BlogItemDetails
