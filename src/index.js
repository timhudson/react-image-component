/** @jsx React.DOM */
var React = require('react')

module.exports = React.createClass({
  getInitialState: function() {
    return {
      loaded: false
    }
  },
  render: function() {
    var divStyles = {
      position: 'relative',
      paddingBottom: Math.round(100 / Number(this.props.aspectRatio)) + '%'
    }

    var imageStyles = {
      position: 'absolute',
      top: 0, right: 0, bottom: 0, left: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundImage: 'url(' + this.props.src + ')',
      opacity: this.state.loaded ? 100 : 0,
      transition: 'opacity '+ (this.props.fadeTime || 0.6) + 's ease'
    }

    return (
      <div className='component-image' style={divStyles} >
        <div style={this.props.noFade ? null : imageStyles} />
      </div>
    )
  },
  componentDidMount: function() {
    var self = this
    var img = document.createElement('img')

    img.onload = function() {
      self.setState({loaded: true})
    }

    img.src = this.props.src
  }
})
