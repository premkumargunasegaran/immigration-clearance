import React from 'react'
import "./homecard.css"


function homecard() {
  return (
    <div className='container'>
        
    <h2 className='text-center my-4'>What Is our Process</h2>
        <div className="row mx-auto">
    <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="course_card">
            <div className="course_card_img"><img src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ" alt="course" /></div>
            <div className="course_card_content">
                <h3 className="title">Spouse Consultancy</h3>
                <p className="description">Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry</p>
            </div>
            
        </div>
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="course_card">
            <div className="course_card_img"><img src="https://cdn-images-1.medium.com/max/1600/1*xQW9Spiz8U0tNEuX_m2blw.jpeg" alt="course" /></div>
            <div className="course_card_content">
            <h3 className="title">Spouse Consultancy</h3>
                <p className="description">Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry</p>
            </div>
           
        </div>
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="course_card">
            <div className="course_card_img"><img src="https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png" alt="course" /></div>
            <div className="course_card_content">
            <h3 className="title">Spouse Consultancy</h3>
                <p className="description">Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry</p>
            </div>
            
        </div>
    </div>
</div>
    </div>
  )
}

export default homecard