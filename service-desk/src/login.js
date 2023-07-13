import React from "react";

function Login(){
    return(
        <div>


  <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
  <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'/>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet"/>
  


<body>
  <div class="min-h-screen h-screen w-screen bg-gradient-to-b from-blue-500 to-teal-200 flex flex-col lg:flex-row p-10 lg:p-30 lg:overflow-hidden overflow-y-auto">
    <div class="w-full lg:w-7/12 h-screen flex flex-col lg:space-y-4 justify-center lg:justify-between p-10">
     
      <div class="slideshow-container flex flex-col">

        <div class="slide relative hidden">
          <div class="overlay absolute inset-0 bg-blue-300 opacity-50 rounded-3xl"></div>
          <img class="w-full h-full object-cover rounded-3xl" src="image1.jpg" alt="Image 1"/>
          <div class="slide-content absolute inset-0 flex flex-col items-start justify-end text-white text-left px-10 pb-10">
            <h2 class="text-2xl font-bold mb-2">Slide 1</h2>
            <p class="text-sm">This is the content for Slide 1.</p>
          </div>
          <div class="slide-content absolute inset-0 flex flex-row items-end justify-end text-white text-left px-10 pb-10">
            <div class="indicators flex justify-center">
              <div class="indicator w-4 h-2 rounded-3xl bg-gray-500 mx-1"></div>
              <div class="indicator w-4 h-2 rounded-3xl bg-gray-300 mx-1"></div>
              <div class="indicator w-4 h-2 rounded-3xl bg-gray-300 mx-1"></div>
            </div>
          </div>
        </div>
        <div class="slide relative hidden">
          <div class="overlay absolute inset-0 bg-blue-300 opacity-50 rounded-3xl"></div>
          <img class="w-full h-full object-cover rounded-3xl" src="image2.jpg" alt="Image 2"/>
          <div class="slide-content absolute inset-0 flex flex-col items-start justify-end text-white text-left px-10 pb-10">
            <h2 class="text-2xl font-bold mb-2">Slide 2</h2>
            <p class="text-sm">This is the content for Slide 2.</p>
          </div>
          <div class="slide-content absolute inset-0 flex flex-row items-end justify-end text-white text-left px-10 pb-10">
            <div class="indicators flex justify-center">
              <div class="indicator w-4 h-2 rounded-3xl bg-gray-300 mx-1"></div>
              <div class="indicator w-4 h-2 rounded-3xl bg-gray-500 mx-1"></div>
              <div class="indicator w-4 h-2 rounded-3xl bg-gray-300 mx-1"></div>
            </div>
          </div>
        </div>
        <div class="slide relative hidden">
          <div class="overlay absolute inset-0 bg-blue-300 opacity-50 rounded-3xl"></div>
          <img class="w-full h-full object-cover rounded-3xl" src="image3.jpg" alt="Image 3"/>
          <div class="slide-content absolute inset-0 flex flex-col items-start justify-end text-white text-left px-10 pb-10">
            <h2 class="text-2xl font-bold mb-2">Slide 3</h2>
            <p class="text-sm">This is the content for Slide 3.</p>
          </div>
          <div class="slide-content absolute inset-0 flex flex-row items-end justify-end text-white text-left px-10 pb-10">
            <div class="indicators flex justify-center">
              <div class="indicator w-4 h-2 rounded-3xl bg-gray-300 mx-1"></div>
              <div class="indicator w-4 h-2 rounded-3xl bg-gray-300 mx-1"></div>
              <div class="indicator w-4 h-2 rounded-3xl bg-gray-500 mx-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full lg:w-5/12 h-full bg-white rounded-lg flex flex-col space-y-6 py-5 px-10">
      <div class="flex flex-row pb-4">
        <button class="lg:text-xl text-lg text-black-400 lg:mx-5 border-b-2 border-blue-500 px-2 lg:pb-2 pb-1">Login</button>
        <a href="signup.html" class="lg:text-xl text-lg text-gray-500 lg:mx-5 mx-2 px-2 lg:pb-2 pb-1">Sign Up</a>
        <a href="enquiry.html" class="lg:text-xl text-lg text-gray-500 lg:mx-5 mx-2 px-2 lg:pb-2 pb-1">Enquiry</a>
      </div>
      <div class="flex flex-col space-y-4">
        <div class="flex flex-col space-y-2">
          <label for="email" class="text-black-500 text-lg">Mobile No./ Email ID:</label>
          <input type="text" name="email" id="email" class="border-b-2 text-base outline-none border-gray-300 focus:border-blue-300"/>
        </div>
        <div class="flex flex-col space-y-2">
          <label for="password" class="text-black-500 text-lg">Password:</label>
          <div class="flex items-center space-x-2">
            <input type="password" name="password" id="password" class="flex-grow border-b-2 text-base outline-none border-gray-300 focus:border-blue-300"/>
            <i class="far fa-eye ml-[-30px] cursor-pointer" id="togglePassword"></i>
          </div>
        </div>

        <div class="flex flex-row justify-between">
          <a href="#" class="text-blue-500 ml-auto flex text-base text-right">Forgot Password?</a>
        </div>
      </div>
      <div class="flex flex-row justify-center">
        <button id="loginButton" class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-gradient-to-r from-blue-400 to-teal-300 border-1 border-blue-300 text-black text-lg px-10 py-2 rounded-lg outline-white">Login</button>
      </div>
      <div class="flex flex-row justify-center">
        <p class="text-black-500 text-sm">Customer Care Information</p>
      </div>
      <div class="flex flex-row justify-center items-center">
        <img src="phone-call.png" alt="Call Icon" class="mr-2"/>
        <p class="text-black-500 text-sm">+65 12345678</p>
        <img src="email.png" alt="Email Icon" class="ml-4 mr-2"/>
        <p class="text-black-500 text-sm">test@tn.in</p>
      </div>
    </div>
  </div>

  
</body>
</div>
);

}
export default Login;