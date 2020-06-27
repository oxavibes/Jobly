<template>
  <div>
    <div class="padding-top-80 section-padding-bottom alice-bg">
      <div class="container">
        <div class="row">
          <div class="col">
            <div
              class="section-padding-150 error-page-wrap text-center white-bg"
            >
              <div class="icon">
                <img
                  src="../../public/assets/images/error.png"
                  class="img-fluid"
                  alt
                />
              </div>
              <h1>Pagina no encontrada</h1>
              <p>
                Lo sentimos, parece que la pagina que estas buscando no existe.
              </p>
              <a @click="$router.replace('/job-listing')" class="button"
                >Regresar</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "errorPage"
};
</script>

<style>
</style>
