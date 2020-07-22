<template>
  <div class="account-entry">
    <div
      class="modal fade"
      id="exampleModalLong2"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><i data-feather="edit"></i>Registration</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="account-type">
              <label for="idRegisterCan">
                <input id="idRegisterCan" type="radio" name="register" />
                <span>Candidate</span>
              </label>
              <label for="idRegisterEmp">
                <input id="idRegisterEmp" type="radio" name="register" />
                <span>Employer</span>
              </label>
            </div>
            <form action="#">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Username"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  class="form-control"
                />
              </div>
              <div class="more-option terms">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value
                    id="defaultCheck2"
                  />
                  <label class="form-check-label" for="defaultCheck2">
                    I accept the
                    <a href="#">terms & conditions</a>
                  </label>
                </div>
              </div>
              <button class="button primary-bg btn-block">Register</button>
            </form>
            <div class="shortcut-login">
              <span>Or connect with</span>
              <div class="buttons">
                <a href="#" class="facebook">
                  <i class="fab fa-facebook-f"></i>Facebook
                </a>
                <a href="#" class="google">
                  <i class="fab fa-google"></i>Google
                </a>
              </div>
              <p>
                Already have an account?
                <a href="#">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterModal"
};
</script>

<style></style>
