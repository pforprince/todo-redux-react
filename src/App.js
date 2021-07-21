import { useState, useRef } from "react";
import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNew, remove, update } from "./actions";

const MyModal = () => {
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>;
};

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  // const [contacts, setContacts] = useState([]);

  var contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const inputRef = useRef();
  return (
    <div className="App">
      <div className="container mt-5">
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>

              <th scope="col">Number</th>
              <th scope="col">Delete</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <input
                  className="form-control"
                  type="text"
                  ref={inputRef}
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </th>
              <td>
                <input
                  className="form-control"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  type="number"
                  placeholder="Number"
                />
              </td>
              <td>
                <button disabled className="btn-sm btn btn-danger">
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addNew({ name, number }));
                    setName("");
                    setNumber("");
                    inputRef.current.focus();
                  }}
                  className="btn-sm btn btn-success"
                >
                  Add
                </button>
              </td>
            </tr>
            {contacts &&
              contacts.map((contact) => {
                return (
                  <tr>
                    <th scope="row">{contact.name}</th>
                    <td>{contact.number}</td>
                    <td>
                      <button
                        onClick={() => dispatch(remove(contact.number))}
                        className="btn-sm btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                    <td>-</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
