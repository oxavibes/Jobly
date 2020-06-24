<template>
  <div class="searchAndFilter-wrapper">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="searchAndFilter-block">
            <div class="searchAndFilter">
              <form action="#" class="search-form">
                <input type="text" placeholder="Palabras claves" />
                <select class="selectpicker" id="search-location">
                  <option value selected>Ubicación</option>
                  <option value="california">California</option>
                  <option value="las-vegas">Las Vegas</option>
                  <option value="new-work">New Work</option>
                  <option value="carolina">Carolina</option>
                  <option value="chicago">Chicago</option>
                  <option value="silicon-vally">Silicon Vally</option>
                  <option value="washington">Washington DC</option>
                  <option value="neveda">Neveda</option>
                </select>
                <select class="selectpicker" id="search-category">
                  <option value selected>Categoría</option>
                  <option value="real-state">Real State</option>
                  <option value="vehicales">Vehicales</option>
                  <option value="electronics">Electronics</option>
                  <option value="beauty">Beauty</option>
                  <option value="furnitures">Furnitures</option>
                </select>
                <button class="button primary-bg">
                  <i class="fas fa-search"></i>Buscar empleo
                </button>
              </form>
              <div class="filter-categories">
                <h4>Categorías</h4>
                <ul>
                  <li>
                    <a href="job-listing.html">
                      <i data-feather="bar-chart-2"></i>Diseño / UX
                      <span>(233)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      <i data-feather="edit-3"></i>Programación
                      <span>(46)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      <i data-feather="feather"></i>Data Science & Analytics
                      <span>(156)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      <i data-feather="briefcase"></i>Desarrollo Mobile
                      <span>(98)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      <i data-feather="package"></i>Engineer & Architects
                      <span>(188)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      <i data-feather="pie-chart"></i>Marketing Dgital
                      <span>(124)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      <i data-feather="command"></i>SysAdmin / Devops / Qa
                      <span>(584)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      <i data-feather="globe"></i>Soporte
                      <span>(233)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      <i data-feather="headphones"></i>Innovacion y Agilidad
                      <span>(15)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      <i data-feather="radio"></i>Telecomunicaciónes
                      <span>(03)</span>
                    </a>
                  </li>
                </ul>
              </div>
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