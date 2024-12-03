<template>
  <header class="app-header">
    <div class="logo-container">
      <img src="@/assets/Fabamzlogo.png" alt="Fabamz Logo" class="logo" />
      <span class="header-name">FABAMZ_MOVIES</span>
    </div>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search movie"
      class="search-bar"
      @input="$emit('search', searchQuery)"
    />
  </header>
</template>

<script>
export default {
    name: 'MovieAppHeader',
  data() {
    return {
      searchQuery: "",
    };
  },
};
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(to right, rgb(255, 0, 102), rgb(183, 214, 248));
  color: white;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 80px;
  height: 80px;
  margin-right: 10px;
  border-radius: 40px;
}

.logo:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}

.header-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(156, 146, 88); 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.search-bar {
  padding: 0.5rem;
  border-radius: 20px;
  border: none;
  font-size: 1rem;
  width: 300px;
}

@media (max-width: 768px) {
  .logo {
    width: 40px;
    height: 40px;
  }

  .app-name {
    font-size: 1.2rem;
  }

  .search-bar {
    width: 200px;
  }
}

</style>
