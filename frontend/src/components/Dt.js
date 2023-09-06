import React from "react";

const Form = () => {
  function submit(e) {
    const formEle = document.querySelector("form");
    e.preventDefault();
    console.log("Submited");
    const formData = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbzSBMrePV_trjsZE3255IzrDQYD7ccwQaxS7cOrbTLkDS5LHu8IGXQlTYc_dohXJMvPKA/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <form onSubmit={(e) => submit(e)} className="bg-black">
        <input type="text" name="Name" placeholder="Nmae" />
        <input type="email" name="Email" placeholder="Email" />
        <input type="text" name="Message" placeholder="Message" />
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
