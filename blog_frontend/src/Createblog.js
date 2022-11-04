import React from 'react'

const Createblog = () => {
  return (
    <div>
          <div class="row">

              <div class="w-50 mx-auto mt-3">
                  <h1>Create Blog</h1>
                  <form>
                      <div class="mt-4">
                          <label class="form-label">Title</label>
                          <input class="form-control" type="text" placeholder="Enter First Name" />
                      </div>
                      <div class="mt-3">
                          <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                      <div class="mt-4">
                          <label class="form-label">Tags</label>
                          <input class="form-control" type="text" placeholder="Enter tags seperated by comma" />
                      </div>
                      <div class="mt-4">
                          <label for="exampleFormControlTextarea1" class="form-label">Choose a Category</label>
                          <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                          </select>
                      </div>
                      <div class="mt-4">
                          <label class="form-label">Subcategory</label>
                          <input class="form-control" type="text" placeholder="Enter First Name" />
                      </div>
                      <div class="mt-4">
                          <button type="submit" class="btn btn-primary">Create Blog</button>
                      </div>
                  </form>
              </div>

          </div>
    </div>
  )
}

export default Createblog