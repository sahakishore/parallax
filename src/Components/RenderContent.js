const RenderContent = (props) => {
   return(
      <>
        <div className="paralx_content_head">
          <h1 className="paralx_content_head_text">Website on Parallax Effect</h1>
          <h2 className="paralx_content_head_caption">Wonderful Animations </h2>
        </div>
       
        <div className="paralx_content_cta">
          <p>
            <b>1.Employee: </b>Hi {props.name}!
          </p>
          <p>
            <b>2.Company: </b>Welcome to {props.company}
          </p>
          <p>
            <b>3.Designation: </b>{props.designation}
          </p>
        </div>

      </>
    )
}
  
export default RenderContent