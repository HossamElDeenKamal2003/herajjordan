<template>
  <div class="parent">
    <!-- Navbar -->
    <div class="second-nav">
      <div>
        <a href="profile">
          <h3 v-if="user.username" style="color: white;">{{ user.username }}</h3>
        </a>
      </div>
      <div>
        <a data-testid="logo-link" href="/">
          <img alt="Haraj" src="https://v8-cdn.haraj.com.sa/assets/images/haraj-logo.png" />
        </a>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mt-4">
      <div class="row">
        <!-- Left Column: Account Settings and Change Password -->
        <div class="col-md-4">
          <div class="card mb-3">
            <div class="card-header">Account Settings</div>
            <div class="card-body">
              <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="user.username" placeholder="Username" />
                <button class="btn btn-primary" @click="updateUsername" :disabled="loading">
                  <span v-if="loading && updatingField === 'username'" class="spinner-border spinner-border-sm"
                    role="status" aria-hidden="true"></span>
                  <span v-else>Edit Username</span>
                </button>
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="user.email" placeholder="Email" />
                <button class="btn btn-primary" @click="updateEmail" :disabled="loading">
                  <span v-if="loading && updatingField === 'email'" class="spinner-border spinner-border-sm"
                    role="status" aria-hidden="true"></span>
                  <span v-else>Edit Email</span>
                </button>
              </div>
            </div>

          </div>


          <div class="card mb-3">
            <div class="card-header">Change Password</div>
            <div class="card-body">
              <div class="input-group mb-3">
                <input type="password" class="form-control" v-model="oldPassword" placeholder="Old Password" />
              </div>
              <div class="input-group mb-3">
                <input type="password" class="form-control" v-model="newPassword" placeholder="New Password" />
              </div>
              <button class="btn btn-primary" @click="updatePassword" :disabled="loading">
                <span v-if="loading && updatingField === 'password'" class="spinner-border spinner-border-sm"
                  role="status" aria-hidden="true"></span>
                <span v-else>Update Password</span>
              </button>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">المفضلة</div>
                <div class="card-body">
                  <div v-if="favoritePosts.length === 0">
                    <p>No favorite products yet.</p>
                  </div>
                  <div v-else>
                    <div v-for="(favorite, index) in favoritePosts" :key="index" class="card mb-3">
                      <img :src="favorite.images[0]" class="card-img-top" alt="Product Image"
                        v-if="favorite.images && favorite.images.length > 0" />
                      <div class="card-body">
                        <h5 class="card-title">{{ favorite.title }}</h5>
                        <p class="card-text">{{ favorite.content }}</p>

                        <router-link :to="`/details/${favorite._id}`" class="details-link">التفاصيل</router-link>
                        <p class="text-muted">Posted on {{ new Date(favorite.createdAt).toLocaleDateString() }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: User Posts with Product Image -->
        <div class="col-md-8" style="height: 90vh; overflow: auto;">

          <!-- Regular User Posts -->
          <div v-for="(post, index) in posts" :key="index" class="card mb-3">
            <div class="card-header">
              منشوراتي
            </div>

            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text">{{ post.content }}</p>
              <p class="text-muted">Posted on {{ new Date(post.createdAt).toLocaleDateString() }}</p>
              <div>
                <router-link :to="`/details/${post._id}`" class="details-link">التفاصيل</router-link>

              </div>
              <!-- Favorite Button -->
              <button class="btn btn-outline-warning" @click="toggleFavorite(post)">
                <span v-if="isFavorite(post._id)">Remove from Favorites</span>
                <span v-else>Add to Favorites</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Favorite Products Section Positioned Below Settings -->

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        id: localStorage.getItem('id'),
        username: localStorage.getItem('username'),
        email: localStorage.getItem('email'),
      },
      oldPassword: '',
      newPassword: '',
      posts: [],
      favoritePosts: [],
      loading: false,
      updatingField: '',
    };
  },
  methods: {
    updateEmail() {
      this.loading = true;
      this.updatingField = 'email';

      axios.patch('https://heraj-backend.onrender.com/users/update-email', {
        id: this.user.id,
        email: this.user.email,
      })
        .then(response => {
          this.user.email = response.data.message.email;
          localStorage.setItem('email', this.user.email);
        })
        .catch(error => {
          console.error(error);
          alert(error.message);
        })
        .finally(() => {
          this.loading = false;
          this.updatingField = '';
        });
    },
    toggleFavorite(post) {
      // Toggle favorite status for the post
      if (this.isFavorite(post._id)) {
        this.removeFromFavorites(post);
      } else {
        this.addToFavorites(post);
      }
    },
    addToFavorites(post) {
      const id = localStorage.getItem('id');
      axios.post(`https://heraj-backend.onrender.com/product/add-to-favorites/${id}`, { postId: post._id })
        .then(() => {
          this.getFavoritePosts();
        })
        .catch(error => {
          console.error(error);
          alert(error.message);
        });
    },
    removeFromFavorites(post) {
      const id = localStorage.getItem('id');
      axios.post(`https://heraj-backend.onrender.com/product/remove-from-favorites/${id}`, { postId: post._id })
        .then(() => {
          this.getFavoritePosts();
        })
        .catch(error => {
          console.error(error);
          alert(error.message);
        });
    },
    isFavorite(postId) {
      return this.favoritePosts.some(post => post._id === postId);
    },
    getPosts() {
      axios.post('https://heraj-backend.onrender.com/product/getUserproducts', {
        userId: localStorage.getItem('id'),
      }).then(response => {
        console.log(response);
        this.posts = response.data.userPosts.reverse();
      }).catch(error => {
        console.log(error);
        alert(error.message);
      });
    },
    getFavoritePosts() {
      const id = localStorage.getItem('id');
      axios.get(`https://heraj-backend.onrender.com/product/get-favourite/${id}`).then(response => {
        this.favoritePosts = response.data.favouriteProducts.reverse();
      }).catch(error => {
        console.log(error);
        alert(error.message);
      });
    },
  },
  created() {
    this.getPosts();
    this.getFavoritePosts();
  },
};
</script>

<style scoped>
.parent {
  width: 100%;
}

.second-nav {
  display: flex;
  justify-content: space-between;
  background-color: rgb(60, 60, 207);
  padding: 10px;
  align-items: center;
}

.second-nav div {
  display: flex;
  align-items: center;
}

.second-nav div:first-child {
  order: 1;
}

.second-nav div:last-child {
  order: 2;
}

.second-nav a {
  color: white;
  font-size: larger;
  text-decoration: none;
}

.second-nav div img {
  width: 150px;
  height: auto;
}

.card {
  border-radius: 8px;
}

.input-group .btn {
  margin-left: 10px;
}

.spinner-border {
  width: 1rem;
  height: 1rem;
}

@media (max-width: 768px) {
  .container {
    padding: 0 10px;
  }

  .second-nav div {
    flex-direction: column;
  }

  .second-nav div:first-child {
    order: 1;
    margin-bottom: 10px;
  }

  .second-nav div:last-child {
    order: 2;
  }
}
</style>
