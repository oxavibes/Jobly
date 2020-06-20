<template>
  <div class="account-entry">
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i data-feather="user"></i>Login
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form action="#">
              <div class="form-group">
                <input type="email" placeholder="Email Address" class="form-control" />
              </div>
              <div class="form-group">
                <input type="password" placeholder="Password" class="form-control" />
              </div>
              <div class="more-option">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">Remember Me</label>
                </div>
                <a href="#">Forget Password?</a>
              </div>
              <button class="button primary-bg btn-block">Login</button>
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
                Don't have an account?
                <a href="#">Register</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>