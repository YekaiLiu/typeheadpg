<template>
  <div id="appdiv">
    <img alt="Vue logo" style="width:35px;height:35px" src="./assets/logo.png">

  <div class="wrapper">
    <div class="search-input">
      <a href="" target="_blank" hidden></a>
      <input type="text" placeholder="Type to search all states and territories...">
      <div class="autocom-box">
    
      </div>
      <div class="icon"><i class="fas fa-search"></i></div>
    </div>
  </div>  
  </div>
</template>




<script>
export default {
  name: 'app',

}
</script>



<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body{
  background: #644bff;
  padding: 0 20px;
}

::selection{
  color: #fff;
  background: #664AFF;
}

.wrapper{
  max-width: 450px;
  margin: 150px auto;
}

.wrapper .search-input{
  background: #fff;
  width: 100%;
  border-radius: 5px;
  position: relative;
  box-shadow: 0px 1px 5px 3px rgba(0,0,0,0.12);
}

.search-input input{
  height: 55px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0 60px 0 20px;
  font-size: 18px;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
}

.search-input.active input{
  border-radius: 5px 5px 0 0;
}

.search-input .autocom-box{
  padding: 0;
  opacity: 0;
  pointer-events: none;
  max-height: 280px;
  overflow-y: auto;
}

.search-input.active .autocom-box{
  padding: 10px 8px;
  opacity: 1;
  pointer-events: auto;
}

.search-input.selected .autocom-box{
  padding: 10px 8px;
  opacity: 0.2;
  pointer-events: auto;
}



.autocom-box li{
  list-style: none;
  padding: 8px 12px;
  display: none;
  width: 100%;
  cursor: default;
  border-radius: 3px;
}


.autocom-box a{
  list-style: none;
  padding: 8px 12px;
  font-family: "Lucida Console", "Courier New", monospace;
  display: none;
  width: 100%;
  cursor: default;
  border-radius: 3px;
}



.search-input.active .autocom-box li{
  display: block;
}



.search-input.active .autocom-box a{
  display: block;
}


.search-input.selected .autocom-box li{
  display: block;
}

.autocom-box.selected li
{
  list-style: none;
  padding: 8px 12px;
  display: block;
  font-family: "Lucida Console", "Courier New", monospace;
  width: 100%;
  cursor: default;
  border-radius: 3px;
}



.autocom-box li:hover{
  background: #efefef;
}

.search-input .icon{
  position: absolute;
  right: 0px;
  top: 0px;
  height: 55px;
  width: 55px;
  text-align: center;
  line-height: 55px;
  font-size: 20px;
  color: #644bff;
  cursor: pointer;
}


</style>
