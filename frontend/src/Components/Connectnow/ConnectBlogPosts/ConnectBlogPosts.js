import React, { Component } from 'react'
import "./ConnectBlogPosts.css"

export default class ConnectBlogPosts extends Component {
    render() {
        return (
            <div className='connectBlogPosts'>
                <div className='connectBlogPosts__container'>
                <div className='connectBlogPosts__texts'>
            <h2 className='connectBlogPosts__h2'>Τελευταία Posts από το blog μας</h2>
            </div>
                <div className='connectBlogPosts__posts_container'>
                    <div className='connectBlogPosts__post'>
                    <div className='connectBlogPosts__image'>
                        <img src='https://images.unsplash.com/photo-1612831197315-3e16a8fccd3c?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' className='connectBlogPosts__img'></img>
                    </div>
                        <div className='connectBlogPosts__title'>
                            <h2 className='connectBlogPosts__h2'>About Laptos</h2>
                            <p className='connectBlogPosts__p'>This is the new era of laptops....</p>
                        </div>
                    </div>
                    <div className='connectBlogPosts__post'>
                    <div className='connectBlogPosts__image'>
                        <img className='connectBlogPosts__img' src='https://images.unsplash.com/photo-1547656807-9733c2b738c2?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'></img>
                    </div>
                        <div className='connectBlogPosts__title'>
                            <h2 className='connectBlogPosts__h2'>About Laptos</h2>
                            <p className='connectBlogPosts__p'>This is the new era of laptops....</p>
                        </div>
                    
                    </div>
                </div>

                </div>
            </div>
        )
    }
}
