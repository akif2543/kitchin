{
  /* <div
        class="modal fade"
        id="editAccount"
        tabindex="-1"
        role="dialog"
        aria-labelledby="editAccountLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Your Account Information
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="registration-flex container">
              <div className="registration-form-item form-group">
                <label className="first-label">First name</label>
                <input
                  ref={(elem) => (editFirstName = elem)}
                  type="text"
                  className="form-control"
                  id="firstName"
                />
              </div>
              <div className="registration-form-item form-group">
                <label className="first-label">Last name</label>
                <input
                  ref={(elem) => (editLastName = elem)}
                  type="lastName"
                  className="form-control"
                  id="lastName"
                />
              </div>
              <div className="registration-form-item form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  ref={(elem) => (editEmail = elem)}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="registration-form-item form-group">
                <label for="exampleInputPassword1">
                  Password
                  <a
                    href="#"
                    class="tooltip-test"
                    title="Password must be between 8 and 16 characters."
                  >
                    <FontAwesomeIcon
                      icon="question-circle"
                      id="password-popover"
                    />
                  </a>
                </label>
                <input
                  ref={(elem) => (editPassword = elem)}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>
            {state.errors.length > 0 && (
              <div className="alert alert-danger" role="alert">
                Please correct the following errors:
                <ul>
                  {state.errors.map((error) => (
                    <li>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            {state.accountUpdated && (
              <div className="alert alert-success" role="alert">
                Your account has been updated!
              </div>
            )}
            <div class="modal-footer">
              {!state.accountUpdated && (
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              )}
              {!state.accountUpdated && (
                <button
                  onClick={updateAccount}
                  type="button"
                  class="btn btn-primary"
                >
                  Update
                </button>
              )}
              {state.accountUpdated && (
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      </div> */
}
