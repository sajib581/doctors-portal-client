import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import wilson from '../../../images/wilson.png'

const Blogs = () => {
    const blogData = [
        {
            title: 'Check at least a doctor in a year for your teeth',
            description: 'It is a long established fact that by the readable content of a lot layout. The point ',
            author: 'Dr. Cudi',
            authorImg: wilson,
            date: '23 April 2019'
        },
        {
            title: 'Two time brush in a day can keep you healthy',
            description: 'It is a long established fact that by the readable content of a lot layout. The point     ',
            author: 'Dr. Sinthia',
            authorImg: wilson,
            date: '23 April 2019'
        },
        {
            title: 'The tooth cancer is taking a challenge',
            description: 'It is a long established fact that by the readable content of a lot layout. The point ',
            author: 'Dr. Cudi',
            authorImg: wilson,
            date: '23 April 2019'
        },
    ]
    return (
        <section className="blogs my-5" id="Blogs">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blogs;