import './blog.css'

import React from "react"
import { Grid } from '@material-ui/core'

import BlogCard from './blog-card/blog-card'
import allBlogs from './blog-entries/allblogs'

function Blog() {
  console.log(allBlogs)
  let allBlogCards = [];
  allBlogs.forEach(blogEntry => {
    allBlogCards.push(
      <BlogCard date={blogEntry.date} title={blogEntry.title} blurb={blogEntry.blurb} content={blogEntry.content} />
    )
  });

  return(
    <div className="App">
      <header className="App-header">
        <br />
        <h1>Blogs</h1>
        <br />
        <Grid container xs={11} spacing={2} justify="center" alignItems="stretch">
          {allBlogCards}
        </Grid>
      </header>
    </div>
  )
}
export default Blog;