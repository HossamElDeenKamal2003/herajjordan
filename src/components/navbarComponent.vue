<template>

    <!-- <div class="first-nav">
        <div class="w-full bg-background-card">
            <div class="flex items-center justify-between gap-4 px-4 py-2 mx-auto overflow-x-auto max-w-7xl md:px-0">
                <div class="text-sm whitespace-nowrap">
                    <a @click="$emit('select-category', 'سيارات')">حراج السيارات</a>
                </div>
                <div class="text-sm whitespace-nowrap">
                    <a @click="$emit('select-category', 'مستلزمات شخصية')">مستلزمات شخصية</a>
                </div>
                <div class="text-sm whitespace-nowrap">
                    <a @click="$emit('select-category', 'أجهزة')">أجهزة</a>
                </div>
                <div class="text-sm whitespace-nowrap">
                    <a @click="$emit('select-category', 'حيوانات')">مواشي و حيوانات و طيور</a>
                </div>
                <div class="text-sm whitespace-nowrap">
                    <a @click="$emit('select-category', 'عقار')">عقارات</a>
                </div>
                <div class="text-sm whitespace-nowrap">
                    <a @click="$emit('select-category', null)">الرئيسية</a>
                </div>
            </div>
        </div>
    </div> -->

    <authComponent :isVisible="authVisible" @close="closeAuth" />
    <CreatePostDialog :isVisible="isDialogVisible" @close="closeDialog" @create-post="handleCreatePost" />

    <div class="second-nav">
        <div>
            <a data-testid="logo-link" href="/">
                <img alt="حراج" src="https://v8-cdn.haraj.com.sa/assets/images/haraj-logo.png" />
            </a>
        </div>
        <div>
            <a href="profile">
                <h3 v-if="username" style="color: white;">{{ username }}</h3>
            </a>
            <button class="btn btn-danger" v-if="username" @click="signOut" style="color: white;">تسجيل الخروج</button>
            <button @click="openauth" class="btn btn-primary btn-sm" v-if="!username">تسجيل الدخول</button>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import CreatePostDialog from './bottomSheet.vue';
import authComponent from '../views/authComponent.vue';
export default {
    name: "navBar",
    data() {
        return {
            allProducts: [],
            filteredProductsProp: [],
            currentPage: 1,
            showloading: true,
            itemsPerPage: 10,
            searchTerm: "",
            filterWord: "",
            isDialogVisible: false,
            categoryFilter: null, // New data property for category filter
            baseUrl: "https://heraj-backend.onrender.com",
            location: "", // Change from city to location
            metaCategory: "",
            special: "",
            carType: "",
            modelCar: "",
            authVisible: false,
            username: localStorage.getItem('username')
        };
    },
    components: {
        CreatePostDialog,
        authComponent
    },
    computed: {
        localStorageData() {
            return localStorage.getItem('myKey') || 'No data';
        },
        lowercaseMetaCategory() {
            // Regular expression to match only English characters (A-Z, a-z)
            const isEnglish = /^[A-Za-z]+$/.test(this.metaCategory);

            // Convert to lowercase if it's English, else return the original value
            return isEnglish ? this.metaCategory.toLowerCase() : this.metaCategory;
        },
        totalPages() {
            return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
        },
        paginatedProducts() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            return this.filteredProducts.slice(start, start + this.itemsPerPage);
        },
        filteredProducts() {
            let filtered = this.allProducts;
            this.metaCategory.toLowerCase();
            // Filter by category if selected
            if (this.categoryFilter) {
                filtered = filtered.filter(product => product.category === this.categoryFilter);
            }

            // Filter by search term if any
            if (this.searchTerm) {
                filtered = filtered.filter(product =>
                    product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
                );
            }

            // Filter by location
            if (this.location) {
                filtered = filtered.filter(product => product.location === this.location);
            }

            return filtered; // Return the final filtered products
        },
    },
    watch: {
        username(newValue) {
            console.log("Username updated:", newValue);
        },
        metaCategory(newVal, oldVal) {
            // Call fetchProducts if metaCategory changes
            console.log("old val : ", oldVal);
            console.log("new Val : ", newVal);

            this.allProducts = this.filteredProductsProp;
        },
        special(newVal, oldVal) {
            // Call fetchProducts if special changes
            console.log("old val : ", oldVal);
            console.log("new Val : ", newVal);
            this.allProducts = this.filteredProductsProp;
        },
        carType(newVal, oldVal) {
            // Call fetchProducts if special changes
            console.log("old val : ", oldVal);
            console.log("new Val : ", newVal);
            this.allProducts = this.filteredProductsProp;
        },
    },
    methods: {
        handleCategoryChange(event) {
            // Get the selected value from the dropdown
            let selectedValue = event.target.value;

            // Check if it's English characters, then convert to lowercase
            const isEnglish = /^[A-Za-z]+$/.test(selectedValue);
            this.metaCategory = isEnglish ? selectedValue.toLowerCase() : selectedValue;
        },
        signOut() {
            localStorage.removeItem('username');
            localStorage.removeItem('email');
            localStorage.removeItem('phoneNumber');
            localStorage.removeItem('password');
            localStorage.removeItem('id');
            window.location.href = "/";
        },
        filterAllCategory() {
            console.log("categoryFilter:", this.categoryFilter);
            console.log("metaCategory:", this.metaCategory);
            console.log("special:", this.special);
            console.log("carType:", this.carType); // Log carType for debugging

            // Ensure products are fetched before filtering
            if (!this.allProducts.length) {
                console.warn('Products not fetched. Fetching products now.');
                // Fetch products here if necessary
            }
            if (this.categoryFilter) {
                this.allProducts = this.allProducts.filter(product => product.category === this.categoryFilter);
                console.log(this.allProducts);
            }
            if (this.categoryFilter && this.metaCategory && !this.carType) {
                this.allProducts = this.allProducts.filter(product => product.category === this.categoryFilter
                    && product.metaCategory === this.metaCategory
                );
                console.log(this.allProducts);
            }
            if (this.categoryFilter && this.metaCategory && this.carType) {
                this.allProducts = this.allProducts.filter(product => product.category === this.categoryFilter
                    && product.metaCategory === this.metaCategory && product.carType === this.carType
                );
                console.log(this.allProducts);
            }
            if (this.categoryFilter && this.metaCategory && this.carType && this.special) {
                this.allProducts = this.allProducts.filter(product => product.category === this.categoryFilter
                    && product.metaCategory === this.metaCategory && product.carType === this.carType && product.special === this.special
                );
                console.log(this.allProducts);
            }
            if (this.categoryFilter && this.metaCategory && this.carType && this.special && this.modelCar) {
                this.allProducts = this.allProducts.filter(product => product.category === this.categoryFilter
                    && product.metaCategory === this.metaCategory && product.carType === this.carType && product.special === this.special && this.modelCar
                );
                console.log(this.allProducts);
            }
            this.currentPage = 1;
        },

        updateUsername() {
            this.username = localStorage.getItem('username');
            console.log(this.username)
        },

        openBottomSheet() {
            this.isDialogVisible = true;
        },
        openauth() {
            this.authVisible = true;
            console.log(this.authVisible);
        },
        closeAuth() {
            this.authVisible = false;
        },
        closeDialog() {
            this.isDialogVisible = false;
        },
        handleCreatePost(newPost) {
            this.allProducts.unshift(newPost);
            this.currentPage = 1;
            this.isDialogVisible = false;
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        fetchProducts() {
            this.showloading = true; // Set loading to true at the start of the fetch
            const userId = localStorage.getItem("id");
            const url = userId ? `${this.baseUrl}/product/posts/${userId}` : `${this.baseUrl}/product/posts/null`;

            axios.get(url)
                .then(response => {
                    this.allProducts = response.data.reverse();
                    this.filteredProductsProp = this.allProducts;
                    this.currentPage = 1;

                    console.log(this.filteredProductsProp);
                })
                .catch(error => {
                    console.error("There was an error fetching the products:", error);
                })
                .finally(() => {
                    this.showloading = false; // Ensure loading is stopped after the API call
                });
        },

        filterDevices() {
            this.currentPage = 1;
            this.categoryFilter = 'devices';
            this.category = "devices";
            this.metaCategory = "",
                this.carType = "";
            this.special = "";
        },
        filterbuilding() {
            this.currentPage = 1;
            this.categoryFilter = 'عقار';
            this.metaCategory = "",
                this.carType = "";
            this.special = "";
        },
        filterAnimals() {
            this.currentPage = 1;
            this.categoryFilter = 'حيوانات';
            this.metaCategory = "",
                this.carType = "";
            this.special = "";
        },
        filtercars() {
            this.paginatedProducts = this.allProducts.filter(product => product.categoryFilter === 'سيارات');
            this.currentPage = 1;
            this.categoryFilter = 'سيارات';
            this.metaCategory = "",
                this.carType = "";
            this.special = "";
        },
        filterSupplies() {
            this.currentPage = 1;
            this.categoryFilter = 'مستلزمات شخصية';
            this.metaCategory = "",
                this.carType = "";
            this.special = "";
        },
        filterMain() {
            this.currentPage = 1;
            this.categoryFilter = null;
            this.category = null;
            this.metaCategory = "",
                this.special = "";
            this.fetchProducts();
        },

    },
    created() {
        // Set up event listener for localStorage changes (for multiple tabs)
        window.addEventListener('storage', this.updateUsername);
    },
    mounted() {
        this.fetchProducts();
        this.updateUsername(); // Ensure username is updated on mount
        this.username = localStorage.getItem('username')
    },
};
</script>
<style scoped>
.w-full {
    width: 100%;
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
}

.pagination-controls {
    display: flex;
    justify-content: center;
    margin-top: 50px;

}

.pagination-controls button {
    margin: 0 5px;
}

select {
    width: 100%;
    padding: 10px;
    border: 2px solid black;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    color: #333;
    appearance: none;
    /* Removes default arrow in some browsers */
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14'><polygon fill='%23333' points='7 10 3 5 11 5'/></svg>");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 14px;
}

.custom-select:focus {
    outline: none;
    border-color: #007bff;
}

.custom-select option {
    color: #333;
}

/* Optional for larger screens */
@media (min-width: 768px) {
    .custom-select {
        width: 50%;
    }
}

.custom-select {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    color: #333;
    appearance: none;
    /* Removes default arrow in some browsers */
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14'><polygon fill='%23333' points='7 10 3 5 11 5'/></svg>");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 14px;
}

.custom-select:focus {
    outline: none;
    border-color: #007bff;
}

.custom-select option {
    color: #333;
}

/* Optional for larger screens */
@media (min-width: 768px) {
    .custom-select {
        width: 50%;
    }
}


.custom-select option {
    color: #333;
}

/* Optional for larger screens */
@media (min-width: 768px) {
    .custom-select {
        width: 50%;
    }
}

.create-post {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.search-input {
    flex-grow: 1;
    /* Make input take available space */
    margin-right: 1rem;
    /* Space between input and button */
    padding: 0.5rem;
    /* Padding for better appearance */
    border: 1px solid #ccc;
    /* Border styling */
    border-radius: 4px;
    /* Rounded corners */
}

.bg-background-card {
    background-color: #f8f9fa;
    /* Adjust as needed */
}

a {
    cursor: pointer;
}

.whitespace-nowrap {
    white-space: nowrap;
}

.text-sm {
    font-size: 0.875rem;
}

.flex {
    display: flex;
    flex-wrap: wrap;
}

.items-center {
    align-items: center;
}

.justify-between {
    justify-content: space-between;
}

.flex-container {
    display: flex;
    justify-content: center;
    /* or any other justify rule */
}

.gap-4 {
    gap: 1rem;
}

.second-nav div img {
    width: 357px;
    height: 84px;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

.overflow-x-auto {
    overflow-x: auto;
}

.max-w-7xl {
    max-width: 80rem;
}

.md\:px-0 {
    padding-left: 0;
    padding-right: 0;
}

a {
    font-size: larger;
    text-decoration: none;
    color: rgb(164, 158, 158);
    font-weight: bold;
}

.box-border {
    display: flex;
    justify-content: space-between;
}

.second-nav {
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
    background-color: rgb(60, 60, 207);
    align-items: center;
}

.second-nav a {
    color: white;
    font-size: larger;
}


@media (max-width: 425px) {
    .flex {
        flex-direction: column;
        flex-direction: column-reverse;
    }

    .second-nav div img {
        width: 133px;
        height: 84px;
    }

    .text-right {
        text-align: right;
        margin-right: 0;
    }
}
</style>