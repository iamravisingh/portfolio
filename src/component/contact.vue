<template>
  <div>
      <div class = "container">
        <Header></Header>
        <div class = "contactInformation">
          <section class = "hero is-dark is-bold">
            <div class = "hero-body">
              <div class = "" id = "content">
                <h1 class="title">
                  Get in touch
                </h1>
                <!-- <hr> -->
                <div class= "subtitle">
                  <span>if you wanna get in touch, talk to me about a project collaboration or just say hi,</span><br>
                  <span>fill up the awesome form below or send an email to <a href="mailto:ravisingh29091996@gmail.com" target="_top">ravisingh29091996@gmail.com</a> and ~let's talk</span>
                </div>
                <span class="tag is-dark" v-if="name">{{name}}</span>
                <span class="tag is-dark" v-if="email">{{email}}</span>
                <span class="tag is-dark" v-if="subject">{{subject}}</span>
                <div class="field">
                  <label class="label" v-if="isNameValid">Name</label>
                  <label class="label" v-if="isEmailValid">Email</label>
                  <label class="label" v-if="isSubjectValid">Subject</label>
                  <div class="control">
                    <span class="icon" v-if="isNameValid">
                      <img src="../assets/man-user.svg" >
                    </span>
                    <input 
                      v-if="isNameValid"
                      class="input" 
                      type="text" 
                      id = "userName"
                      placeholder="Enter Name"
                      v-model="name"
                    >
                    <span class="icon" v-if="isEmailValid">
                      <img src="../assets/black-back-closed-envelope-shape.svg" >
                    </span>
                    <input 
                      v-if="isEmailValid"
                      class="input" 
                      type="text" 
                      id = "userEmail"
                      placeholder="Enter Email"
                      v-model="email"
                    >
                    <span class="icon" v-if="isSubjectValid">
                      <img src="../assets/edit.svg" >
                    </span>
                    <input 
                      v-if="isSubjectValid"
                      class="input" 
                      type="text" 
                      id = "userSubject"
                      placeholder="Enter subject"
                      v-model="subject"
                    >
                  </div>
                </div>
                <div class = "buttons">
                  <button class="button is-dark" :class = "{next : name || email}" @click = "next" v-if="isNext">Next</button>
                  <button class="button is-dark" :class="{disabled : !(name && email && subject),next : name && email}">Submit Your Message</button>
                  <button class="button is-dark" v-if ="!isNext" @click = "reset">reset</button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class = "container socialMedia">
          <span class="icon is-dark"><img src = "../assets/github.svg"/>GitHub</span>
          <span class="icon is-link"><img src = "../assets/linkedin.svg"/>LinkedIn</span>
          <span class="icon  is-dark"><img src = "../assets/instagram.svg"/>Instagram</span>
        </div>
        <Footer></Footer>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name : "",
      email : "",
      subject: "",
      body : "",
      isNameValid : true,
      isEmailValid : false,
      isSubjectValid : false,
      isNext : true
    }
  },
  methods : {
    next(e){
      console.log('e s',e);
      if(this.name){
        this.isNameValid = false;
        this.isEmailValid = true;
        if(this.email){
          this.isEmailValid = false;
          this.isNext = false
          this.isSubjectValid = true;
        }
      }
    },
    reset(){
      this.name = "";
      this.email = "";
      this.subject = "";
      this.isSubjectValid = false;
      this.isNameValid = true;
      this.isNext = true
    }
  }
}
</script>
<style scoped>
  @import "../css/main.css";
  @import "../css/contact.css";
</style>