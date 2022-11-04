import React from 'react'

const Filter = (props) => {
  return (
    <div className='mt-3'>
          <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">{props.title}</h5>
                  </div>
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                      <label class="form-check-label" for="flexCheckChecked">
                          Checked checkbox
                      </label>
              </div>
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                  <label class="form-check-label" for="flexCheckChecked">
                      Checked checkbox
                  </label>
              </div>
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                  <label class="form-check-label" for="flexCheckChecked">
                      Checked checkbox
                  </label>
              </div>
          </div>
    </div>
  )
}

export default Filter