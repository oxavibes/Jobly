<template>
  <!-- Search and Filter -->
  <div class="searchAndFilter-wrapper-2">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="searchAndFilter-block">
            <div class="searchAndFilter searchAndFilter-2">
              <form action="#" class="search-form">
                <input type="text" placeholder="Enter Keywords" />
                <select class="selectpicker" id="search-location">
                  <option value selected>Location</option>
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
                  <option value selected>Category</option>
                  <option value="real-state">Real State</option>
                  <option value="vehicales">Vehicales</option>
                  <option value="electronics">Electronics</option>
                  <option value="beauty">Beauty</option>
                  <option value="furnitures">Furnitures</option>
                </select>
                <button class="button">
                  <i class="fas fa-search"></i>Search Job
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Search and Filter End -->
</template>

<script>
export default {};
</script>

<style>
</style>