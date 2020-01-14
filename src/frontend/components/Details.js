import React from 'react';
import ReactTimeout from 'react-timeout'

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, this will be the details page for each Movie & TV show :)"
    }
  }

  comingSoon = () => {
    this.setState({ message: "Coming Soon!" })
  }

  componentDidMount(props) {
    return this.props.setTimeout(this.comingSoon, 3000);
  }

  

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
    </div>
    );
  }
}

export default ReactTimeout(Details);