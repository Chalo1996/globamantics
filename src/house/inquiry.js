import { useState } from "react";

const Inquiry = () => {
  const [ contactInfo, setContactInfo ] = useState( {
    name: "",
    email: "",
    remarks: "",
  } );

  const onChange = ( e ) => {
    setContactInfo( { ...contactInfo, [ e.target.name ]: e.target.value } );
  };

  const onSubmit = ( e ) => {
    e.preventDefault();
    console.log( contactInfo );
    alert(contactInfo)
    // Add your logic here to handle form submission (e.g., send data to server)
  };

  return (
    <form onSubmit={ onSubmit } className="mt-2">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          id="name"
          name="name"
          value={ contactInfo.name }
          onChange={ onChange }
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          id="email"
          name="email"
          className="form-control"
          placeholder="Email Address"
          value={ contactInfo.email }
          onChange={ onChange }
        />
      </div>
      <div className="form-group">
        <label htmlFor="remarks">Remarks</label>
        <input
          type="text"
          id="remarks"
          name="remarks"
          className="form-control"
          placeholder="Remarks"
          value={ contactInfo.remarks }
          onChange={ onChange }
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-2"
        disabled={ !contactInfo.name || !contactInfo.email }
        onClick={ onSubmit }
      >
        Submit
      </button>
    </form>
  );
};

export default Inquiry;
