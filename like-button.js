class LikeButton extends Component {
  constructor() {
    super()
    this.state = {isLiked: false}
  }

  onClick() {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render() {
    const domString = `
 <button class="g-button like-button">
  <span class="like-text">${this.state.isLiked ? '取消' : '点赞'}</span>
  <svg class="icon">
    <use xlink:href="#i-like"></use>
  </svg>
</button>
      `
    return domString
  }
}

const el = document.querySelector('#app')
mount(new LikeButton(), el)

