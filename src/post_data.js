import React, { Component } from 'react';
import axios from 'axios';

class PostData extends Component {

    inputData = {
        userId: '',
        title: '',
        body: ''
    }

    render() {
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="details">
                        <div>
                    <pre>USERID: 
                    <input type="number" onChange={this.handleIdChange} />
                    </pre>
                    </div>
                    <div>
                    <pre>TITLE : 
                    <input type="text" onChange={this.handleTitleChange} />
                    </pre>
                    </div>
                    <div>
                    <pre>BODY  : 
                    <input type="text" onChange={this.handleBodyChange} />
                    <br />
                    </pre>
                    </div>
                    </div>
                    <button type="submit">post data</button>
                </form>
                <button className="getButton"type="button" onClick={this.fetchPosts}>FetchPosts</button>
            </div>
        )
    }

    handleIdChange = event => {
        this.inputData.userId = event.target.value;
    }
    handleTitleChange = event => {
        this.inputData.title = event.target.value;
    }
    handleBodyChange = event => {
        this.inputData.body = event.target.value;
    }
    
    async fetchPosts() {
        
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            if (response.status !== 200) {
                throw new Error("Invalid request");
            }
            const data = await response.data;
            console.log(data);
        }
        catch (error) {
            console.log(error.message);
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            userId: this.inputData.userId,
            title: this.inputData.title,
            body: this.inputData.body
        }
        if(this.inputData.userId===''||this.inputData.title===''||this.inputData.body==='')
        prompt("Enter Input");
        else{
        console.log(user);
        axios.post("https://jsonplaceholder.typicode.com/posts", user).then(res => { console.log(res.data); })
        }
    }


}
export default PostData;