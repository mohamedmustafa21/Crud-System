import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {createContext} from 'react'
import './style.css'



const Home = ({ contacts, deleteContact }) => {

  function Header() {
    const [darkMode, setDarkMode] = React.useState(false);
    const [view, setView] = React.useState(false);

  
    React.useEffect(() => {
      const body = document.body;
      const toggle = document.querySelector(".toggle-inner");
      const display = document.querySelector('.dispaly')
      const click = document.getElementById('switch-click')
      console.log(click)
      // console.log(display)

     
      if (darkMode === true) {
        body.classList.add("dark-mode");
        toggle.classList.add("toggle-active");
        display.classList.remove("d-none");
        click.innerHTML = 'Edit Mode'
        // document.querySelectorAll('.dispaly').style = 'display :none'
        
      } else {
        body.classList.remove("dark-mode");
        toggle.classList.remove("toggle-active");
        display.classList.add("d-none");
        click.innerHTML = 'Perview Mode'
        // click.innerHtml = 'hello2'

        // display.style = `display : `
        // document.querySelectorAll('.dispaly').style = 'display :'



      }
      // if (view === true) {
      //   dis.style = `display :none`
      // } else {
       
      //   dis.style = `display :`

      // }

    }, [darkMode]);
  
    return (
      <header>
        <div
          id="toggle"
          onClick={() =>
            
 darkMode === false ? setDarkMode(true) : setDarkMode(false)

          }
        >
          <div className="toggle-inner" />
          
        </div>
      </header>
    );
  }
  
  
  return (

    <div className="container">
      <div className="row d-flex flex-column">
      
        <Link to="/add" className="btn btn-info my-5 ml-auto ">
          Add Contact
        </Link>
        <main className="d-flex justify-content-center">
        <p id="switch-click" className="mt-5 fw-bold "></p>
      <Header />
      
    </main>
        <div className="col-md-12 mx-auto my-4">
          <table className="table table-hover">
            
            <thead className="table-header bg-dark text-white">
              
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            
            <tbody>
              
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id} >
                    <td className="fs-bold text-center">{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                   
                    <td className="dispaly">
                      <Link 
                        to={`/edit/${contact.id}`}
                        className="btn btn-sm btn-primary mr-1  "
                      >
                        Edit
                     </Link>
                      <button
                        type="button"
                        onClick={() => deleteContact(contact.id)}
                        className="btn btn-sm btn-danger  "
                      >
                        Delete
                      </button>
                    </td>
                  
                   
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
