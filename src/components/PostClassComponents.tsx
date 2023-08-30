import React , {Component} from 'react';
import "../post.css"
import { Comment } from './Comment';

interface Props {
    userId: string;
    message: string;
  }

export default class PostClassComponents extends Component<Props>{
    render(){
        return(
            <div className='post'>
                <img src="https://www.dogthailand.net/forum.php?mod=image&aid=25230&size=2000x550&key=da5c69ecf27d5f96&type=fixnone" className="logo react" alt="React logo" />
                <p><strong>{this.props.userId}</strong> : {this.props.message}</p>
                <p>this is class Component</p>
                <p></p>
                <Comment userId="Hey" message="I need help" />
                <Comment userId="Jane" message="What is this" />
            </div>
        )    
    }
}
