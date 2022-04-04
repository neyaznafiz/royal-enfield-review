import React from 'react';

const Blogs = () => {
    return (
        <div className='pb-20'>

<div className='px-32'>
<h2 className='text-center text-2xl font-bold rounded-t-md mt-5 bg-gray-300 py-2'>Explore Some Question And Answer</h2>
</div>

          <div className='mx-64 mt-20'>
              <h2 className='text-2xl font-bold'>What is semantic tag ?</h2>
              <p> A semantic tag is an HTML tag. HTML is a markup language. A semantic tag is that describes the meaning for the browser and developer clearly. like if you want to create a form, you can use the div tag for this, then you can create a form, but, div defines that div is created a section for the form, then you can create form using form tag, form tag define the form area. here form tag is a semantic tag.</p>
          </div>

          <div className='mx-64 mt-20'>
              <h2 className='text-2xl font-bold'>What is Context API ?</h2>
              <p>If you share data in many components using props (parent to child), you use the props concept,  first share data from parent to a child then another, the context API made it easy for us, you can share any data between two components without using every level props. You can share data from the parent component to any child component directly using context API. </p>
          </div>

          <div className='mx-64 mt-20'>
              <h2 className='text-2xl font-bold'> Difference between inline-block and inline-block-element.</h2>
              <p> </p>
          </div>
        </div>
    );
};

export default Blogs;