import React from 'react'
import Filter from './Filter';

function Profile(){

    return(
        <div>
        <div class="container">
          <div class="row">
            <div class="col-2">
              <Filter title="Tags" />
              <Filter title="Category" />
              <Filter title="Sub-Category" />
            </div>
            <div class="col-10">
              <div className='mt-4'>
                <div class="card text-center">
                  <div class="d-flex justify-content-between card-header">
                    <p>-Unmesh <br /><div className='bg-secondary bg-gradient'>technology</div></p>
                    <h5>Importance of React </h5>
                    <p>24 March</p>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit obcaecati illum aliquam magni, quis mollitia ratione placeat molestias doloribus? Tempora doloribus maiores vitae. Adipisci, inventore. Sint, illo. Cum aspernatur modi nobis corporis odit delectus officia eveniet voluptate explicabo ullam voluptatem molestias labore quia id iusto, necessitatibus et magnam error quasi accusamus porro ducimus, nam laboriosam dolorem? Fuga sint eaque ab adipisci unde. Praesentium, iusto a repellat voluptate consequatur asperiores quam saepe doloribus sapiente vero ullam soluta ratione harum modi. Quibusdam aliquid libero sint veniam minus quas quia ducimus aspernatur repudiandae porro in, hic dolor a natus excepturi quis sapiente ipsum.</h5>
                    <button type="button" class="btn btn-warning me-3">Update</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

            
        </div>
    )
}

export default Profile




