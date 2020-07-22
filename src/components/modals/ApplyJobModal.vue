<template>
  <div class="apply-popup">
    <div
      class="modal fade"
      id="apply-popup-id"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i data-feather="edit"></i>APPLY FOR THIS JOB
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
          <div class="modal-body">
            <form action="#">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Full Name"
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
                <textarea class="form-control" placeholder="Message"></textarea>
              </div>
              <div class="form-group file-input-wrap">
                <label for="up-cv">
                  <input id="up-cv" type="file" />
                  <i data-feather="upload-cloud"></i>
                  <span>
                    Upload your resume
                    <span>(pdf,zip,doc,docx)</span>
                  </span>
                </label>
              </div>
              <div class="more-option">
                <input
                  class="custom-radio"
                  type="checkbox"
                  id="radio-4"
                  name="termsandcondition"
                />
                <label for="radio-4">
                  <span class="dot"></span> I accept the
                  <a href="#">terms & conditions</a>
                </label>
              </div>
              <button class="button primary-bg btn-block">
                Aplicar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApplyJobModal"
};
</script>

<style></style>
