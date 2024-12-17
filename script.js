const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const form = document.querySelector("form");

//==================== Menu Scroll =======================
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  console.log(navbar);
  menuIcon.classList.toggle("bx-x");
});

//================== Activity of scroll reveal =======================
ScrollReveal({
  reset: true,
  distance: "2rem",
  duration: 2000,
  delay: 120,
  mobile: false,
});

ScrollReveal().reveal(".left-side", { origin: "left" });
ScrollReveal().reveal(".right-side", { origin: "right" });
ScrollReveal().reveal(".top-side", { origin: "top" });
ScrollReveal().reveal(".bottom-side", { origin: "bottom" });

//======================= Typed.js ===========================
const typed = new Typed(".text-animation span", {
  strings: [
    "Frontend Developer",
    "Backend Developer",
    "Mern Stack Developer",
    "Software Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const fullname_Input = document.getElementById("fullName");
const email_Input = document.getElementById("email");
const phone_Input = document.getElementById("phone");
const subject_Input = document.getElementById("subject");
const message_Input = document.getElementById("message");

//===================  Email Sender Handler Function ===================
function sendEmail() {
  const fullname = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  console.log({ fullname, email, phone, subject, message });

  const body = `
                <b>Fullname : </b>${fullname}
                <br/>
                <b>Email : </b>${email}
                <br/>
                <b>Phone : </b>${phone}
                <br/>
                <b>Subject : </b>${subject}
                <br/>
                <b>Message : </b>${message}
            `;

  email.send({
    SecureToken: "f6526166-0c56-4e6b-9579-1baae8cf1857",
    To: "deepak8654454@gmail.com",
    From: "deepak8654454@gmail.com",
    Subject: subject,
    Body: body,
  }).then((message) => {
    if (message === "OK") {
      Toastify({
        text: "Message sent successfully! ",
        duration: 1000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(45deg, #4CAF50, #8BC34A)",
          fontSize: "1.5rem",
        },
      }).showToast();

      setTimeout(() => form.reset(), 1000);
    }
  });
}

function toastMessage(msg){
  Toastify({
    text: `${msg}`,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(45deg, #FF4E50, #F9322C)",
      fontSize: "1.5rem",
    },
  }).showToast();
}


function validateName(){
    const name = fullname_Input.value;

    var namePattern = /^[a-zA-Z\s-]+$/;
    if(namePattern.test(name)){
        return true;
    }else{
        return false;
    }
}

function checkEmail() {
  const email = email_Input.value;
  let emailRegx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegx)) {
    return true;
  } else {
    return false;
  }
}

function checkPhone() {
  const phone = phone_Input.value;
  var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (phone.match(phoneNum)) {
    return true;
  } else {
    return false;
  }
}

function validateSubject(){
  const subject = subject_Input.value;
  if(!subject){
     return false;
  }else{
     return true;
  }
}

function validateMessage(){
  const message = message_Input.value;
  if(!message){
     return false;
  }else{
     return true;
  }

}


document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  

  if(!validateName()){
    const msg = "Please enter your valid full Name ";
    toastMessage(msg);
    return;
  }

  if (!checkEmail()) {
      const msg = "Please enter your valid email ";
      toastMessage(msg);
      return;
  }

  if (!checkPhone()) {
      const msg = "Please enter your valid phone no. ";
      toastMessage(msg);
      return;
  }
  
  if(!validateSubject()){
     const msg = "Please enter your subject ";
     toastMessage(msg);
     return;
  }

  if(!validateMessage()){
     const msg = "Please enter your message ";
     toastMessage(msg);
     return;
  }

  if (checkPhone() && checkEmail()) {
      
    sendEmail();
    return false;
  }
});
