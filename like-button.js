class LikeButton {
  constructor() {
    this.state = {isLiked: false}
  }

  setState(state) {
    const oldEl = this.el
    this.state = state
    this.el = this.render()
    if (this.onStateChange) {
      this.onStateChange(oldEl, this.el)
    }
  }

  changeLikeText() {
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
    this.el = createDOMFromString(domString)
    this.el.addEventListener('click', () => {
      this.changeLikeText()
    }, false)
    return this.el
  }
}

const el = document.querySelector('#app')
const likeButton1 = new LikeButton()
el.appendChild(likeButton1.render())
likeButton1.onStateChange = (oldEl, newEl) => {
  el.insertBefore(newEl, oldEl)
  el.removeChild(oldEl)
}

const likeButton2 = new LikeButton()
el.appendChild(likeButton2.render())