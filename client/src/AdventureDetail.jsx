import React from 'react';
import axios from 'axios';

class AdventureDetail extends React.Component {
  state = { 
    details: null,
    selectedImage: null,
    displayImage: null
  }

  componentDidMount() {
    let config = {
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    }
    axios.get(`/api/listitem/${this.props.match.params.id}`, config)
    .then(response => {
      console.log(response.data);
      this.setState({
        details: response.data
      })
    })
  }

  handleFileChange = (e) => {
    this.setState({ selectedImage: e.target.files[0] })
  }

  handleImageSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData();
    fd.append('file', this.state.selectedImage);
    fd.append('upload_preset', 'namr3phs');

    axios({
      url: 'https://api.cloudinary.com/v1_1/brandon205/upload',
      method: 'POST',
      headers: {
        'Content-Type': 'application-x-www-form-urlencoded'
      },
      data: fd
    }).then(res => {
      console.log('Sent it');
      let config = {
        headers: {
          Authorization: `Bearer ${this.props.token}`
        }
      }
      axios.put(`/api/listitem/${this.props.match.params.id}`, { _id: this.props.match.params.id, name: this.state.details.name, description: this.state.details.description, photo: res.data.secure_url, catId: this.state.details.categories[0] }, config)
      .then(response => {
        this.setState({ displayImage: res.data.secure_url });;
      })
    }).catch(err => console.log(err));
  }

  render() { 
    let content;
    let re = /^https/;
    if (this.state.details) {
      if (this.state.details.photo.match(re)) {
        content = (
          <div className="App">
            <h1>{this.state.details.name}</h1>
            <p>{this.state.details.description}</p>
            <img src={this.state.photo} alt="Event" />
          </div>
        )
      } else if (this.state.displayImage){
        content = (
        <div className="App">
          <h1>{this.state.details.name}</h1>
          <p>{this.state.details.description}</p>
          <img src={this.state.displayImage} alt="Event"/>
        </div>
        )
      } else {
        content = (
          <div className="App">
            <h1>{this.state.details.name}</h1>
            <p>{this.state.details.description}</p>
            <input type="file" onChange={this.handleFileChange} />
            <button onClick={this.handleImageSubmit}>Add Photo</button>
          </div>
        )
      }
    } else {
      content = (
        <p>Loading...</p>
      )
    }

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default AdventureDetail;