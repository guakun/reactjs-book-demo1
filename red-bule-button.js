class RedBuleButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red'
    }
  }

  onClick() {
    this.setState({
      color: this.state.color === 'blue' ? 'red' : 'blue'
    })
  }

  render() {
    return `
      <div style="color: ${this.state.color} ; cursor: pointer"> ${this.state.color}</div>
    `
  }
}

mount(new RedBuleButton(), el)
