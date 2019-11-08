import React from 'react';
// import axios from 'axios';

class NewListitem extends React.Component {
//   state = { 
//     name: '',
//     description: '',
//     photo: '',
//     categories = []
//   }
//   componentDidMount = () => {
//     axios.get('/api/categories')
//     .then(response => {
//       this.setState({
//         categories = response.data
//       })
//     })
//   }

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   handleSubmit = (e) => {
//     e.preventDefault()
//     var categoriesCopy = [...this.state.categories]
//     axios.post('/api/categories', {
//       name: this.state.name,
//     }).then( response => {
//       categoriesCopy = response.data
//       this.setState({
//         categories: categoriesCopy,
//         name: '',
//       })
//     })
//   }
//   render() { 
//       const mappedCategories = this.state.categories.map( (category,id) => <option value={this}">Art</option>)
//     return ( 
//       <>
//       <h1>This is the NewListitem component</h1>
//       <form>
//       <input type="text" onChange={this.handleChange} name="name" value="" placeholder="Add to your bucketlist"/>
//         <input type="hidden" onChange={this.handleChange} name="description" value=""/>
//         <input type="hidden" onChange={this.handleChange} name="photo" value=""/> 
        
//         <select name="category">
          
//           <option value="">Career</option>
//           <option value="">Education</option>
//           <option value="">Events</option>
//           <option value="">Family</option>
//           <option value="">Financial</option>
//           <option value="">Fitness</option>
//           <option value="">Food/Drink</option>
//           <option value="">Life Goals</option>
//           <option value="">Random</option>
//           <option value="">Relationships</option>
//           <option value="">Sport</option>
//           <option value="">Travel</option>
//           <option value="">Volunteer/Charity</option>
//         </select> <br />
//         <input type="submit" value="Submit"/>
//       </form> 
//       </>
//     );
//   }
}

export default NewListitem;