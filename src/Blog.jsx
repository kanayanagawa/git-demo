import React from 'react';
import Article from "./Article";
import *as FooBar from './components/FooBar';
import Hoge from './components/Hoge';
//関数コンポーネント
const Blog = () => {
    
    
//classコンポーネントの書き方    
//class Blog extends React.Component{
//    constructor(props){
//        super(props);
//        this.state={
//            isPublished:false,
//            count:0
//        }
//    }

    // componentDidMount(){
    //     //ボタンがクリックれたらいいねをカウントアップする
    //     document.getElementById('counter').addEventListener('click',this.countUp)
    // }

    // componentDidUpdate(){
    //     if (this.state.count >= 10){
    //         this.setState({count:0 })
    //     }
    // }
    // componentWillUnmount(){
    //     document.getElementById('counter').removeEventListener('click',this.countUp)
    // }

    //公開状態を反転させる関数
    // togglePublished = () =>{
    //     this.setState({
    //         isPublished: !this.state.isPublished
    //     })
    // };

    // countUp = () => {
    //     this.setState({count: this.state.count +1 })
    // }

    // render(){
    //     const authorName="Torahack"
        return(
            <React.Fragment>
                <Article title={"Reactの使い方"}
                //order={1}
                //isPublished={this.state.isPublished} 
                //toggle={() => this.togglePublished()}
                //author={authorName}
                //count={this.state.count}
                 />
                <FooBar.Foo />
                <FooBar.Bar />
                <Hoge />
            </React.Fragment>

            
                
        )
    //}
}

export default Blog