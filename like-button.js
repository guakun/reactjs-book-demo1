class LikeButton extends Component {
  constructor(props) {
    super(props)
    this.state = {isLiked: false}
  }

  onClick() {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render() {
    const domString = `
 <button class="g-button like-button" style="background: ${this.props.bgColor}">
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
mount(new LikeButton({bgColor: '#ddd'}), el)

