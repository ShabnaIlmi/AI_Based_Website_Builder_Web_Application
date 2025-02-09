document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('nav ul li a');
  var currentUrl = window.location.href;

  navLinks.forEach(function(link) {
      if (link.href === currentUrl) {
          link.classList.add('current-page');
      }
  });
});
function setNewImg(x){
    if (x == 1){
        {
          document.getElementById("hov-img").src="images/gallery1.avif";
          document.getElementById("editor-h1").innerHTML ="Ashley - Creative Portfolio Template";
          document.getElementById("editor-p").innerHTML ="Ashley HTML Template – a cutting-edge and modern portfolio template designed specifically for creative agencies, design studios, and other creative individuals. With its sleek design and captivating animations, Ashley is the perfect choice to showcase your talent and make a bold statement in the digital realm.";
        }
    }
    if (x == 2){
         document.getElementById("hov-img").src="images/gallery2.avif";
         document.getElementById("editor-h1").innerHTML ="Corporate MultiPurpose HTML Template for Business";
          document.getElementById("editor-p").innerHTML ="Roxine is a high performance, robust and scalable template based on latest Bootstrap 4 framework focused on transforming your online presence into dynamic frontend digital solution that you can use for any project type.";

    }
    if (x == 3){
         document.getElementById("hov-img").src="images/gallery3.jpg";
         document.getElementById("editor-h1").innerHTML ="Davis - Personal portfolio template";
          document.getElementById("editor-p").innerHTML ="Davis is the best minimal personal portfolio. This template has creative layout, supper smooth animation, unique features, and modern and unique design which make your website more beautiful.<br> This template has 4+ home page variations and a blog details page. This template is easily customizable, fully responsive, and support all modern browser and device.";

    }
    if (x == 4){
         document.getElementById("hov-img").src="images/gallery.jpg";
         document.getElementById("editor-h1").innerHTML ="eCommerce HTML Template";
          document.getElementById("editor-p").innerHTML ="Odor – Vape Store eCommerce html template Odor is a powerful Vape Store WooCommerce HTML Template. It uses the latest version of Bootstrap, HTML5, CSS3, JavaScript, jQuery. Odor puts a lot of emphasis on aligning products based on their categories. Yet it also highlights how certain web components. A Design that integrates components to highlight special products. It is super for Vape shop, digital shop, electronic shop, games shop, food shop, devices shop, household appliances shop or any other categories.";

    }
    if (x == 5){
         document.getElementById("hov-img").src="images/gallry.jpg";
         document.getElementById("editor-h1").innerHTML ="Rentaly - Car Rental Website Template with RTL";
          document.getElementById("editor-p").innerHTML ="Rentaly is an exclusive website template specially made for car rental services with a modern and professional design. Made using only the finest coding and design practices by an experienced ThemeForest author with over 14 years of experience. Rentaly has stunning styles and elements to help you make a professional website in no time. Get Rentaly now.";

    }
  }

 
  
 
  

 


      

 

  


