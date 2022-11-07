import React from 'react'
import { useState } from 'react'

const Createblog = () => {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [tags,setTags] = useState("")
    const [category,setCategory] = useState("")
    const [subCategory,setSubcategory] = useState("")

    const submit = async ()=>{
        let result = fetch("localhost:4000/blogs",{
            method:'post',
            body:JSON.stringify(title,body,tags,category,subCategory),
            headers:{
                'Content-type' : 'application/json'
            }  
        })
        result = await result.json()
        console.log(result);
    }
  return (
    <div>
          <div class="row">

              <div class="w-50 mx-auto mt-3">
                  <h1>Create Blog</h1>
                  <form>
                      <div class="mt-4">
                          <label class="form-label">Title</label>
                          <input class="form-control" type="text" placeholder="Title of the blog" 
                          value={title} onChange={(e)=>setTitle(e.target.value)}/>
                      </div>
                      <div class="mt-3">
                          <label for="exampleFormControlTextarea1" class="form-label">Body</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                      <div class="mt-4">
                          <label class="form-label">Tags</label>
                          <input class="form-control" type="text" placeholder="Enter tags seperated by comma" 
                          value={tags} onChange={(e)=>setTags(e.target.value)}/>
                      </div>
                      <div class="mt-4">
                          <label for="exampleFormControlTextarea1" class="form-label">Choose a Category</label>
                          <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                              <option value="1">Technology</option>
                              <option value="2">Sci-Fi</option>
                              <option value="3">Entertainment</option>
                              <option value="4">Political</option>
                              <option value="5">Social</option>
                              <option value="6">Environment</option>
                              <option value="7">International</option>
                          </select>
                      </div>
                      <div class="mt-4">
                          <label class="form-label">Subcategory</label>
                          <input class="form-control" type="text" placeholder="Enter keywords of your blog"
                          value={subCategory} onChange={(e)=>setSubcategory(e.target.value)} />
                      </div>
                      <div class="mt-4">
                          <button onClick={submit} type="submit" class="btn btn-primary">Create Blog</button>
                      </div>
                  </form>
              </div>

          </div>
    </div>
  )
}

export default Createblog