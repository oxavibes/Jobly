<template>
  <div class="newsletter-bg padding-top-90 padding-bottom-90">
    <div class="container">
      <div class="row">
        <div class="col-xl-5 col-lg-6">
          <div class="newsletter-wrap">
            <h3>Boletín informativo</h3>
            <p>
              Recibe los empleos a tu correo para que no te pierdas ni una
              oportunidad. No te preocupes, no llenaremos tu buzón de spam 😉
            </p>
            <form action="#" class="newsletter-form form-inline">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <button class="btn button">
                Suscríbete
                <i class="fas fa-caret-right"></i>
              </button>
              <p class="newsletter-error">
                0 - Por favor, ingresa un email válido
              </p>
              <p class="newsletter-success">¡Gracias por suscribirte!</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Newsletter"
};
</script>

<style scoped>
.newsletter-form .form-group {
  width: calc(100% - 170px);
  margin-right: 0;
}

.form-inline {
  justify-content: space-between;
}
</style>
