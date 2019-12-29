<template>
    <div>
        <Header></Header>
        <div class="container">
            <span class = "name">Hello,my name is Ravi Singh!</span>
                <figure class="image is-128x128">
                    <!-- <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"> -->
                    <img class="is-rounded" src='../assets/raviPortfolio.jpg'>
                </figure>
                <p>I am a fullstack Developer, UI/UX and Server-Side Javascript Programmer.</p>
            <span>Feel Free to contact me via email at </span><a href="mailto:ravisingh29091996@gmail.com" target="_top">ravisingh29091996@gmail.com</a>
        </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            links : ['/contact','/aboutme','/portfolio','/']
        }
  },
  // created(){
  //   debugger
  //   const text = document.getElementsByClassName('name');
  //   console.log('text>>>>>>>>>>>>>',text);
  //   const letter = text[0].textContent;
  //   const spliText = letter.split('');
  //   text.textContent = "";

  //   for(let i = 0;i < spliText.length;i++){
  //     text.innerHTML += `<span>${spliText[i]}</span>`;
  //   }

  //   const char = 0;
  //   const timer = setInterval(this.onTick.bind(null,text,char),50);

  // },
  methods : {
    onTick(text,char){
      const span = text.querySelectorAll("span")[char];
      span.classList.add("fade");
      char++;
      if(char == spliText.length) {
        clearInterval(timer);
        timer = null
      }
    }
  }
}
</script>

<style scoped>
  @import "../css/main.css";
  /* .name {
    opacity: 0;
    transition: all 0.4s ease;
    transform: translateY(50px);
    display: inline-block;
  }

  .name.fade{
    opacity: 1;
    transform: translateY(0px);
  } */
</style>
