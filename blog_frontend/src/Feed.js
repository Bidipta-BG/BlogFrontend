import React, { useState, useEffect } from 'react'
import Filter from './Filter';

function Feed(){

    useEffect(() => { getBlogs() }, [])

    let [blogs, setBlog] = useState([])
    
    async function getBlogs(){
        let alldata = await fetch("http://localhost:4000/blogs")
        alldata = await alldata.json()  
        setBlog(alldata.data)
    }

    return(

        
            <div class="container">
              <div class="row">
                  <div class="col-2">
                      <Filter title="Tags"/>
                      <Filter title = "Category"/>
                      <Filter title="Sub-Category" />
                  </div>

                {console.log(blogs)}
                    <div class="col-10">
                    {blogs.map(ele => 
                        <div className='mt-4'>
                            <div class="card text-center">


                                <div class="d-flex justify-content-between card-header">
                                    <p>{ele.authorId.fname + ' ' + ele.authorId.lname} <br /><div className='bg-secondary bg-gradient'>{ele.category}</div></p>
                                    <h5>{ele.title} </h5>
                                    <p>{ele.publishedAt.slice(0,10)}</p>
                                </div>

                                <div class="card-body">
                                    <h5 class="card-title">{ele.body}</h5>

                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                
                
                  
              </div>
          </div>


        
    )
}

export default Feed
