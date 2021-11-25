import React from 'react'
import '../Styles/Blog.css'
import BlogItem from './Sub components/Blog_item' 
import blogImg1 from '../Images/blog1.png'
import blogImg2 from '../Images/blog2.png'
import blogImg3 from '../Images/blog3.png'
import blogImg4 from '../Images/blog4.png'
import blogImg5 from '../Images/blog5.png'
import blogImg6 from '../Images/blog6.png'
import { FaChevronRight } from "react-icons/fa";


export default function Blog() {
    const blog1 = {
        date : "November 10, 2021",
        title : "The End of the Bonus Culture Is Coming to Wall Street"
    }
    const blog2 = {
        date : "November 16, 2021",
        title : "What to Expect From the 2020 Oscar Nominations"
    }
    const blog3 = {
        date : "November 18, 2021",
        title : "China State Firm’s $6 Billion Is Loss Among Nation’s"
    }
    const blog4 = {
        date : "November 20, 2021",
        title : "A brand for a company is like a reputation person"
    }
    const blog5 = {
        date : "November 26, 2021",
        title : "10 days quick challange for boost your online visitors"
    }
    const blog6 = {
        date : "November 30, 2021",
        title : "The Belgian Exodus of World War One"
    }


    return (
        <section className="container blog-body">
            <h2>About Our Team Member We have Powerful User Experience.</h2>

            <div className="blog-section">
                <BlogItem img={blogImg1} date={blog1.date} title={blog1.title}/>
                <BlogItem img={blogImg2} date={blog2.date} title={blog2.title}/>
                <BlogItem img={blogImg3} date={blog3.date} title={blog3.title}/>
                <BlogItem img={blogImg4} date={blog4.date} title={blog4.title}/>
                <BlogItem img={blogImg5} date={blog5.date} title={blog5.title}/>
                <BlogItem img={blogImg6} date={blog6.date} title={blog6.title}/>

            </div>

            <div className="page-number">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#"> <FaChevronRight /> </a>
            </div>

        </section>
    );
}
