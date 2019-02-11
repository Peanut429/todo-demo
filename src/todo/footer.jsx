import '../assets/style/footer.styl'

export default {
  data () {
    return {
      author: 'Peanut'
    }
  },
  render() {
    return (
      <div id="footer">
        <span>Written By {this.author}</span>
      </div>
    )
  }
}