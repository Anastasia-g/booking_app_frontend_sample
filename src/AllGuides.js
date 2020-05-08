import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AllGuides extends Component {
  state = {
    data: [],
  }
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  fetchGuides() {
    console.log("fetching guides");
    const url =
      //'https://en.wikipedia.org/w/api.php?action=opensearch&search=Russia&format=json&origin=*'
      'http://localhost:8080/api/v1/guides'

    fetch(url)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        this.setState({
          data: result,
        })
      })
  }
  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    this.fetchGuides();
  }
  handleClick(id) {
    console.log("deleting " + id)

    fetch('http://localhost:8080/api/v1/guides/' + id, {
      method: 'DELETE'


    }).then(() => {console.log("calling fetch"); this.fetchGuides()});
    
  }
  handleClickEdit(id) {
    console.log("editing " + id)

    this.props.history.push('guides/edit');
    //.then(() => {console.log("calling fetch"); this.fetchGuides()});
    
  }
  render() {
    console.log("rendering");
    const { data } = this.state
    //console.log(data);


    const result = data.map((guide, index) => {
      //console.log("entry name " + guide.name);
      //console.log("index " + index);
      //console.log("entry id " + guide.id);
      const guideUrl = "/guides/" + guide.id;
      return (<tr key={index} >
        <td><Link to={guideUrl}>{guide.name}</Link>
        </td>
        <td>
          <button onClick={() => { this.handleClick(guide.id) }}>Delete</button>
          <button onClick={() => {  this.props.history.push('guides/edit/'+guide.id) }}>Edit</button>
        </td>
      </tr>
      )
    })

    return <div className="jumbotron"> <table><tbody>{result}</tbody></table></div>
  }
}

export default AllGuides