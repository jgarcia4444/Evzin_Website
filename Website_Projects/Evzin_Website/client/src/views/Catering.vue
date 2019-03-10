<template>
    <div class="container text-center mt-4">
        
        <div class="container-fluid mt-4">
            <h1>Catering</h1>
            <img src="/media/img/catering1.jpg" class="img-fluid" alt="Responsive image">
        </div>
        <div class="container-fluid mt-4 mb-4">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia repudiandae non adipisci, sit corporis, delectus eligendi ut est numquam eius earum maiores perferendis velit facere dolore nisi minus quisquam sint et veniam ipsam omnis dolor? Harum aut, eaque enim rem ut deserunt maiores, facilis aliquam asperiores excepturi pariatur repudiandae odit delectus hic suscipit, saepe sed natus eius provident sit dolorem corrupti? Fugit quam, nobis corrupti deleniti porro expedita illo earum eos nam saepe, cumque velit laudantium delectus at veritatis deserunt enim tenetur cupiditate est officiis natus repellendus dolores voluptates! Optio nisi odit sunt voluptate aut. Sit qui tempore necessitatibus rerum.
            </p>
        </div>
        <div class="container-fluid mt-4">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col"># of people</th>
                        <th scope="col">Small Bites</th>
                        <th scope="col">Small Bites and Entrées</th>
                        <th scope="col">Full Course</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="col">0 - 40</td>
                        <td scope="col">$ per person</td>
                        <td scope="col">$ per person</td>
                        <td scope="col">$ per person</td>
                    </tr>
                    <tr>
                        <td scope="col">40 - 80</td>
                        <td scope="col">$ per person</td>
                        <td scope="col">$ per person</td>
                        <td scope="col">$ per person</td>
                    </tr>
                    <tr>
                        <td scope="col">80 - ?</td>
                        <td scope="col">$ per person</td>
                        <td scope="col">$ per person</td>
                        <td scope="col">$ per person</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="container-fluid mt-4">
            <h1>Private Events</h1>
            <img src="/media/img/catering1.jpg" class="img-fluid" alt="">
        </div>
        <div class="container-fluid mt-4">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ipsum, deleniti tempora cupiditate temporibus hic voluptatum laudantium facere iusto fuga neque in aliquam quos vero, obcaecati debitis repellendus consequatur. Deserunt!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ipsum, deleniti tempora cupiditate temporibus hic voluptatum laudantium facere iusto fuga neque in aliquam quos vero, obcaecati debitis repellendus consequatur. Deserunt!</p>
        </div>
        <div class="container-fluid mt-4">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col"># of people</th>
                        <th scope="col">Small Bites</th>
                        <th scope="col">Small Bites and Entrées</th>
                        <th scope="col">Full Course</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="col">0 - 40</td>
                        <td scope="col">$ per person</td>
                        <td scope="col">$ per person</td>
                        <td scope="col">$ per person</td>
                    </tr>
                    <tr>
                        <td scope="col">40 - 80</td>
                        <td scope="col">$ per person</td>
                        <td scope="col">$ per person</td>
                        <td scope="col">$ per person</td>
                    </tr>
                    <tr>
                        <td scope="col">80 - ?</td>
                        <td scope="col">$ per person</td>
                        <td scope="col">$ per person</td>
                        <td scope="col">$ per person</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!--Contact Info form-->
        <div class="container-fluid mt-4">
            <h1>
                Contact Information
            </h1>
            <form @submit.prevent="infoSent()">
                <div v-if="formSubmitted" class="alert alert-dark" role="alert">
                    Thank you! We will be with you shortly.
                </div>
                <div class="row" v-if="errors.length">
                    <div>
                        <ul>
                            <li v-for="error in errors">{{error}}</li>
                        </ul>  
                    </div>
                    
                </div>
                <div class="row">
                    <div class="form-group col">
                        <label for="fName">First Name</label>
                        <input v-model="fName" type="text" class="form-control" id="fName" />
                    </div>
                    <div class="form-group col">
                        <label for="lName">Last Name</label>
                        <input v-model="lName" type="text" class="form-control" id="lName" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col">
                        <label for="phoneNumber">Phone Number</label>
                        <input v-model="telNum" type="tel" class="form-control" id="phoneNumber" />
                    </div>
                    <div class="form-group col">
                        <label for="orderDate">Date of Event</label>
                        <input v-model="date" type="date" class="form-control" id="orderDate" />
                    </div>
                </div>
                <button type="submit" class="btn btn-outline-dark">
                    Submit
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'catering',
    data() {
        return {
            formSubmitted: false,
            fName: null,
            lName: null,
            telNum: null,
            date: null,
            errors: [],
            events: [],
        }
           
    },
    methods: {

        infoSent() {
            this.errors = []
            if (this.fName && this.lName && this.telNum && this.date) {
                let cateringEvent = {
                    fName: this.fName,
                    lName: this.lName,
                    telNum: this.telNum,
                    date: this.date
                }
                this.events.push(cateringEvent)
                this.formSubmitted = true
            }
            else {
                if (!this.fName) this.errors.push('Please provide your first Name')
                if (!this.lName) this.errors.push('Please provide your last name')
                if (!this.telNum) this.errors.push('Please provide your telephone number')
                if (!this.date) this.errors.push('Please provide the date for your event')
                this.formSubmitted = false
            }
            this.fName = null
            this.lName = null
            this.telNum = null
            this.date = null
        },
    },
};
</script>

<style scoped>
    h1 {
        background-color: rgba(255, 255, 255, 0.9);
        color: black;
        border: 1px solid black;
        /* border-radius: 5px; */
    }
    img {
        width: 80%;
        height: auto;
        margin-top: 20px;
    }

    p {
        background-color: rgba(255, 255, 255, 0.9);
        color: black;
        border: 1px solid black;
        /* border-radius: 5px; */
    }

    tbody {
        background-color: rgba(255, 255, 255, 0.9);
    }

    form {
        background-color: rgba(255, 255, 255, 0.9);
        padding: 5px;
        border: 1px solid black;
        margin-top: 20px;
    }

    .form-group, .col {
        border: none;
    }
</style>
