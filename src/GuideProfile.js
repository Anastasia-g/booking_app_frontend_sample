import React, { Component } from 'react'

class GuideProfile extends Component {
    state = {
        data: [],
    }

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url =
            //'https://en.wikipedia.org/w/api.php?action=opensearch&search=Russia&format=json&origin=*'
            'http://localhost:8080/api/v1/guides/' + this.props.match.params.id

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({

                    
                    data: result,
                })
            })
    }

    render() {



        const { data } = this.state;
        if (data) {
            console.log('single guide data = ' + JSON.stringify(data));
            return (<p> {data.name}
            </p>);


        }

        return <p> Loading... </p>
    }
}

export default GuideProfile