<template>
    <div class="parent">
        <navBar />
        <!-- Main Content -->
        <div class="containerr">
            <div class="row">
                <!-- Similar Products on the Left -->
                <div class="col-md-8">
                    <div class="post-details" v-if="product && user">
                        <div class="title">
                            <h1 class="post-title">{{ product.title }}</h1>
                            <p class="post-description" style="overflow: auto;">{{ product.description }}</p>
                            <p class="post-content">{{ product.content }}</p>
                            <p class="post-author"><strong>Author:</strong> {{ user.username }}</p>
                            <p class="post-phone"><strong>Contact:</strong> {{ user.phoneNumber }}</p>
                            <p class="post-date"><strong>Posted at:</strong> {{ new Date(product.createdAt).toLocaleString() }}</p>
                        </div>
                        <div v-if="product.images && product.images.length">
                            <h3>Images:</h3>
                            <div v-for="(image, index) in product.images" :key="index" class="mb-3">
                                <img :src="image" alt="Post Image" class="images-product img-fluid" />
                            </div>
                        </div>

                        <!-- Comments Section -->
                        <div class="comments">
                            <form @submit.prevent="addComment" class="comment-form">
                                <input type="text" v-model="content" placeholder="Add a comment" required class="form-control mb-2" />
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>

                            <!-- Comments Display -->
                            <div v-if="comments.length > 0" class="comments-container mt-3">
                                <h3>Comments:</h3>
                                <div v-for="(comment, index) in comments" :key="comment._id || index" class="comment p-2">
                                    <div class="comment-bubble p-2 bg-secondary rounded">
                                        <p><strong>{{ comment.commenterId.username }}:</strong> {{ comment.content }}</p>
                                        <p class="comment-date">{{ new Date(comment.createdAt).toLocaleString() }}</p>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="no-comments">
                                <p>No comments yet. Be the first to comment!</p>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p>Loading post details...</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="similar-products">
                        <h3>Similar Products</h3>
                        <div v-for="similarProduct in similarProducts" :key="similarProduct._id" class="card mb-3">
                            <img :src="similarProduct.images[0]" alt="Similar Product Image" class="card-img-top" />
                            <div class="card-body">
                                <h4 class="card-title">{{ similarProduct.title }}</h4>
                                <p class="card-text">{{ similarProduct.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Product Details on the Right -->
                
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import navBar from "../components/navbarComponent.vue"
export default {
    name: "detailsPage",
    data() {
        return {
            product: null,
            user: null,
            content: "",
            comments: [], // Store comments here
            baseUrl: "https://heraj-backend.onrender.com",
            similarProducts: []
        };
    },
    components: {
        navBar
    },
    methods: {
        addComment() {
            const postId = this.$route.params.id;
            if (!postId) {
                console.error("Post ID is not available");
                return;
            }
            axios.post(`${this.baseUrl}/comments/create-comment`, {
                postId: postId,
                commenterId: "66e5e0a5a90e4fab00b06a70", // Replace with actual commenter ID
                content: this.content,
            }).then(response => {
                console.log(response.data);
                this.getComments(); // Push new comment to the array
                this.content = ""; // Clear input field
            }).catch(error => {
                alert('An error occurred while adding your comment: ' + error.message);
            });
        },
        getComments() {
            const postId = this.$route.params.id;
            axios.get(`${this.baseUrl}/comments/get-comments/${postId}`)
                .then(response => {
                    this.comments = response.data; // Fetch and display comments
                    console.log(this.comments);
                })
                .catch(error => {
                    console.log(error);
                    alert(error.response.data.message);
                });
        },

        // getSimilar() {
        //     axios.post('https://heraj-backend.onrender.com/product/get-similar', {
        //         metaCategory: this.product.metaCategory
        //     }).then(response => {
        //         console.log(response);
        //         this.similarProducts = response.data.similar;
        //         console.log('similar', this.similarProducts);
        //     }).catch(error => {
        //         console.log(error);
        //         alert(error.message);
        //     })
        // }
    },
    async created() {
        const postId = this.$route.params.id;
        const userId = localStorage.getItem("id");
        let response;
        try {
            if(!userId){
                response = await axios.get(`${this.baseUrl}/product/posts/${postId}/null`);
            }else{
                response = await axios.get(`${this.baseUrl}/product/posts/${postId}/${userId}`);
            }
            this.product = response.data.post;
            this.similarProducts = response.data.similar;
            this.user = response.data.user;
            console.log("Product:", this.product);
            console.log("User:", this.user);
            // Fetch comments after product data is loaded
            this.getComments();
        } catch (error) {
            console.error('Error fetching post:', error);
            this.product = null; // Handle case where post is not found or there's an error
        }
    },
};
</script>


<style scoped>
.post-details img {
    margin: 10px 0;
    border-radius: 5px;
}

.nav-container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(60, 60, 207);
    /* Adjust background color */
    padding: 1rem;
}

.first-nav {
    flex: 1;
    /* Adjusts the width of the first nav */
}

.second-nav {
    display: flex;
    align-items: center;
}

.second-nav div img {
    width: 357px;
    height: 84px;
}

.second-nav a {
    color: white;
    font-size: larger;
    margin-left: 1rem;
}

.w-full {
    width: 100%;
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

.container {
    max-width: 1200px;
    margin: 0 auto;
}

img {
    width: 300px;
}

.card {
    display: flex;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.2s;
}

.card:hover {
    transform: scale(1.02);
    /* Scale up on hover */
}

.card-img-left {
    width: 100%;
    /* Full width of the image container */
    height: auto;
    /* Maintain aspect ratio */
    object-fit: cover;
    /* Cover the space without stretching */
}

.card-body {
    padding: 16px;
    /* Add padding for content */
}

.card-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.card-description,
.card-username,
.card-phone {
    /* color: #666; */
    /* Grey color for text */
    margin: 0.5rem 0;
    /* Margin for spacing */
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

.card {
    display: flex;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.2s;
}

.card:hover {
    transform: scale(1.02);
}

.create-post {
    margin-top: 30px;
    margin-bottom: 30px;
}

.btn-primary {
    background-color: orange;
    padding: 15px;
    border: none;
    border-radius: 10px;
}

.card-body {
    padding: 16px;
    /* Adjust padding as needed */
    display: flex;
    flex-direction: column;
    /* Ensure content stacks vertically */
    justify-content: center;
    /* Center text vertically */
}

.card-img-left {
    width: 100%;
    /* Ensure the image takes full width of its container */
    height: auto;
    /* Maintain aspect ratio */
    object-fit: cover;
    /* Ensure the image covers its space */
}

.no-gutters {
    display: flex;
    justify-content: space-between;
    width: 95%;
    align-items: center;
    flex-wrap: wrap;
}

.images-product {
    width: 1000px;
}

@media (max-width: 1024px) {
    .images-product {
        width: 700px;
    }
}

@media (max-width: 768px) {
    .images-product {
        width: 300px;
    }
}

.comments {
    max-width: 600px;
    margin: 0 auto;
    font-family: 'Comic Sans MS', cursive, sans-serif;
}

.comment-form {
    display: flex;
    margin-bottom: 20px;
}

.comment-form input {
    flex-grow: 1;
    padding: 10px;
    border-radius: 20px;
    border: 2px solid black;
    margin-right: 10px;
    transition: all 0.3s ease;
}

.comment-form input:focus {
    border-color: black;
    outline: none;
    box-shadow: 0 0 10px #ff6347;
}

.btn-primary {
    background-color: blue;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn-primary:hover {
    background-color: #ff6347;
}

.comments-container {
    margin-top: 20px;
    background: #f0f8ff;
    padding: 20px;
    border-radius: 25px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.comment {
    margin-bottom: 20px;
}

.comment-bubble {
    background: linear-gradient(135deg, #ff69b4, #ff6347);
    color: #fff;
    padding: 15px;
    border-radius: 15px;
    position: relative;
    animation: surprise-bounce 0.5s ease-in-out;
}

.comment-bubble::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 20px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: #ff6347;
}

.comment-date {
    margin-top: 10px;
    font-size: 0.8em;
    color: rgba(255, 255, 255, 0.8);
}

.no-comments {
    text-align: center;
    font-style: italic;
    color: #777;
}

@keyframes surprise-bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.post-details {
    /* Light gray background */
    border: 1px solid #ddd;
    /* Light border */
    border-radius: 8px;
    /* Rounded corners */
    padding: 20px;
    /* Padding around the content */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* Subtle shadow for depth */
    transition: transform 0.3s;
    /* Smooth transition for hover effect */
    margin: 20px;
    /* Margin for spacing */
}



.post-title {
    font-size: 2rem;
    /* Larger font size for title */
    color: #333;
    /* Dark gray color */
    margin-bottom: 10px;
    /* Space below title */
    text-align: center;
    /* Center title */
}

.post-description {
    font-size: 1.2rem;
    /* Slightly larger for description */
    color: #666;
    /* Medium gray color */
    line-height: 1.5;
    /* Spacing for readability */
}

.post-content {
    font-size: 1rem;
    /* Normal font size for content */
    color: #444;
    /* Dark gray color */
    line-height: 1.6;
    /* Improved readability */
    margin: 15px 0;
    /* Vertical spacing */
}

.post-author,
.post-phone,
.post-date {
    font-size: 0.9rem;
    /* Smaller font for metadata */
    color: #888;
    /* Light gray color for metadata */
}

.post-author strong,
.post-phone strong,
.post-date strong {
    color: #333;
    /* Darker color for the labels */
}

@media (max-width: 768px) {

    .first-nav,
    .second-nav {
        flex-direction: column;
        /* Stack nav items vertically */

    }

    .second-nav div img {
        width: 100%;
        /* Full width for logo on small screens */
        max-height: 50px;
        /* Adjust logo height */
    }

    .create-post {
        flex-direction: column;
        /* Stack post creation elements vertically */
    }

    .text-sm {
        font-size: 0.75rem;
        /* Smaller font size for mobile */
    }

    .comments-container {
        padding: 0 10px;
        /* Add some padding */
    }
}

@media (max-width: 425px) {
    .flex {
        flex-direction: column;
        /* Stack elements vertically */
    }

    .second-nav a {
        font-size: smaller;
        /* Smaller font size for links */
    }
}
</style>