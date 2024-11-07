import React from 'react';
import './App.css'; // Adjust the path as necessary


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Vendors />
      <Gallery />
      <Reviews />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="#"><img src="./Images/Main Page/logo.png" alt="Logo" /></a>
        </div>
        <div className="menu-toggle" id="menu-toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="nav-links" id="nav-links">
          {['Home', 'About', 'Services', 'Reviews', 'Gallery'].map((item) => (
            <li key={item}>
              <a onClick={() => scrollToSection(item)}>{item}</a>
            </li>
          ))}
          <li><a href="./login.html">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="hero">
      <video autoPlay muted loop id="myVideo">
        <source src="./Images/Main Page/frontvideo.mp4" type="video/mp4"/>
      </video>
      <div className="overlay">
        <div className="hero-text">
          <h1>Seamless Solution<br />For<br />Unforgettable Memories</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <button id="vendor-registration">Register as Vendor</button>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="aboutUs">
      <div className="container">
        <div className="title"><h1>ABOUT US</h1></div>
        <div className="content">
          <div className="aboutContent">
            <h3>Welcome to Eventbiz! We specialize in creating memorable events...</h3>
            <p>Our mission is to exceed your expectations...</p>
            <div className="aboutButton"><a href="">Read More</a></div>
          </div>
          <div className="image-about">
            <img src="./Images/Main Page/about.jpg" alt="About Us" />
          </div>
        </div>
        {/* Social Icons */}
        <div className="aboutIcons">
          {['facebook', 'instagram', 'twitter'].map((icon) => (
            <a href="" key={icon}><i className={`bx bxl-${icon}`}></i></a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const servicesData = [
    { title: "Wedding", description: "Varieties of wedding packages to fit your needs and budget. From intimate ceremonies to grand celebrations, we can help you create the perfect day. Our experienced wedding planners will work with you to ensure that every detail is taken care of, so you can relax and enjoy your special day.", image: "./Images/Main Page/wedding-icon.png", link: "./internal html/wedding-main.html" },

    { title: "Birthday Party", description: "Celebrate your birthday in style with our exciting party packages. We offer a range of options to suit all ages and interests, from themed parties to casual gatherings. Our team will take care of everything, from decorations to entertainment, so you can focus on having fun with your guests.", image: "./Images/Main Page/bday-icon.png", link: "./birthday-party.html" },

    { title: "DJ Night", description: "Experience the ultimate night out with our DJ Night packages! DJs will set the mood with a curated mix of your favorite tracks, ensuring a lively atmosphere for any occasion. Dance the night away while we take care of the entertainment!<", image: "./Images/Main Page/dj-icon.png", link: "./sounddj.html" },

    { title: "Pool Party", description: "Make waves with our vibrant Pool Party packages! Ideal for summer fun, our pool parties feature engaging games, refreshing drinks, and a lively atmosphere. Whether it’s a birthday bash, family reunion, or corporate event Jump in and enjoy a memorable celebration with friends and family!", image: "./Images/Main Page/wedding-icon.png", link: "./poolparty.html" }
  ];

  return (
    <section id="Services">
      <div className="container">
        <div className="title"><h1>SERVICES</h1></div>
        <div className="services-row">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-icon"><img src={service.image} alt={service.title} /></div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <button className="service-button"><a href={service.link}>LET'S GO</a></button>
    </div>
  );
};

const Vendors = () => {
  const vendorsData = [
    { title: "Caterer", description: "Transform your event into a culinary masterpiece. Our team of expert caterers specializes in crafting exquisite dishes that cater to every taste. From elegant fine dining to vibrant buffets, we'll ensure your guests are delighted with every bite.", image: "./Images/Main Page/wedding-icon.png", link: "./caterer.html" },

    { title: "Decorator", description: "Create a stunning ambiance that reflects your vision. Our talented decorators will transform your event space into a magical setting. With meticulous attention to detail and a passion for design, we'll create a memorable experience that exceeds your expectations.", image: "./Images/Main Page/bday-icon.png", link: "./decorater.html" },

    { title: "DJ", description: "Set the mood and keep the party going. Our skilled DJs will provide the perfect soundtrack for your event. With a vast library of music and a knack for reading the crowd, we'll ensure everyone has an unforgettable time on the dance floor.", image: "./Images/Main Page/dj-icon.png", link: "./sounddj.html" },

    { title: "Photographer", description: "Capture the precious moments of your event. Our professional photographers will expertly document every detail, ensuring you have beautiful memories to cherish for years to come. From candid shots to posed portraits, we'll capture the essence of your special occasion.", image: "./Images/Main Page/wedding-icon.png", link: "./photography.html" }
  ];

  return (
    <section id="vendors">
      <div className="container">
        <div className="title"><h1>VENDORS</h1></div>
        <div className="services-row">
          {vendorsData.map((vendor) => (
            <ServiceCard key={vendor.title} service={vendor} />
          ))}
        </div>
      </div>
    </section>
  );
};
const Gallery = () => {
  const galleryItems = [
    { title: "Birthday", date: "20-May-2024", imgSrc: "./Images/Main Page/garden-party.jpg" },
    { title: "DJ Night", date: "19-October-2024", imgSrc: "./Images/Main Page/djmain.jpg" },
    { title: "Wedding", date: "4-February-2024", imgSrc: "./Images/Main Page/wedding-main.jpg" },
    { title: "Pool Party", date: "10-September-2024", imgSrc: "./Images/Main Page/pool-main.jpg" }
  ];

  return (
    <section id="gallery">
      <div className="title"><h1>GALLERY</h1></div>
      <div className="container">
        
        {/* Gallery items */}
        {galleryItems.map((item) => (
          <figure key={item.title} className="box">
            <figcaption>
              <h2>{item.title}</h2>
              <p>{item.date}</p>
              {/* Add social icons if needed */}
            </figcaption>
            <img alt={`${item.title} Preview`} src={item.imgSrc} />
          </figure> 
        ))}
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviewsData = [
    {
      name: "JackSon",
      username: "@jacksonasd",
      comment: "I had an amazing experience with EventBiz...",
      ratingStars: 5,
      profileImgSrc: "./Images/Main Page/profile-img4.jpg"
    },
    {
      name: "Liam",
      username: "@limakfsd",
      comment: "I was particularly impressed with their wedding preparation...",
      ratingStars: 4,
      profileImgSrc: "./Images/Main Page/profile-img1.jpg"
    },
    {
      name: "Michael",
      username: "@Michaelusa",
      comment: "I was pleasantly surprised by the quality of the food...",
      ratingStars: 5,
      profileImgSrc: "./Images/Main Page/profile-img2.jpg"
    },
    {
      name: "Acob",
      username: "@acobnd",
      comment: "The hotel was clean and the location was great...",
      ratingStars: 5,
      profileImgSrc: "./Images/Main Page/profile-img.avif"
    }
  ];

  return (
    <section id="review">
      <h1 className="review-heading">What Our Clients Say?</h1>
      {/* Review boxes */}
      {reviewsData.map((review) => (
        <ReviewBox key={review.name} review={review} />
      ))}
    </section> 
  );
};

const ReviewBox = ({ review }) => {
  return (
    <div className="review-box">
      {/* Profile Section */}
      <div className="review-top">
        {/* Profile Info */}
        <div className="profile">
          {/* Profile Image */}
          <div className="profile-img"><img src={review.profileImgSrc} alt={`profile-${review.name}`} /></div> 
          {/* User Name */}
          <div className="name-user"><strong>{review.name}</strong><span>{review.username}</span></div> 
        </div> 
        {/* Ratings */}
        {[...Array(review.ratingStars)].map((_, index) => (
          // Display star icons based on rating
          // Use FontAwesome or similar for star icons
          // Example using FontAwesome
          // Replace with actual star icon component
          // For example purposes only
          (<i key={index} className={`fa-solid fa-star`}></i>)
        ))}
        
        {[...Array(5 - review.ratingStars)].map((_, index) => (
           (<i key={index + review.ratingStars} className={`fa-regular fa-star`}></i>)
         ))}
        
       </div> 
       {/* Client Comments */}
       {/* Comment Text */}
       {review.comment}
     </div> 
   );
};

const Footer = () => {
  return (
      <section id="footer1">
          <div id="footer-container">
              <div id="footer-upper">
                  <div id="left-box1" className="jj">
                      <p>Learn more about Heartful Help's journey and vision. In this piece, we share our story, values, and mission to bring about positive change to those in need.</p>
                  </div>
                  <div id="left-box2" className="jj">
                      <ul>
                          <li>Home</li>
                          <li>Contact Us</li>
                          <li>Events</li>
                          <li>FAQ</li>
                          <li>Contact</li>
                      </ul>
                  </div>
                  <div className="left-box-3">
                      <h2>Contact</h2>
                      <p>Ambience Mall, Ambience Island, NH-8<br />Gurgaon, Haryana PIN: 122001</p>
                      <div id="email-mid">
                          <img id="mid-logos" src="assets/images/email-logo.png" alt="email" />
                          <p>easybiz@gmail.com</p>
                      </div>
                      <div id="call-log">
                          <img id="mid-logos" src="assets/images/call-logo.png" alt="call" />
                          <p>+91 61279 20508</p>
                      </div>
                  </div>
                  <div id="left-box-4">
                      <h3>Subscribe to our newsletter</h3>
                      <p>Join our mailing list to stay in the loop with our newest events and concerts.</p>
                      <form className="email-class">
                          <input id="email" type="email" placeholder="Enter your email" />
                          <button id="button" type="submit">Subscribe</button>
                      </form>
                  </div>
              </div>
              <div id="footer-line">
                  <hr />
              </div>
              <div id="footer-lower">
                  <div className="copyright">
                      <p>&copy; 2024 EventBiz &reg; Global Inc. All rights reserved.</p>
                  </div>
                  <div id="logo-container">
                      {['facebook', 'instagram', 'linkedin', 'twitter', 'youtube'].map((platform) => (
                          <a href="#" key={platform}>
                              <img className="logo" src={`./assets/images/icons8-${platform}-144.png`} alt={platform.charAt(0).toUpperCase() + platform.slice(1)} />
                          </a>
                      ))}
                  </div>
              </div>
          </div>
      </section>
  );
};

const scrollToSection = () => {
  // Implement scroll logic
};
export default App;
