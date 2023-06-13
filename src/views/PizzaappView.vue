<script setup>
import './page-project.scss'

import MastHead from "../components/organism/mastHead/MastHead.vue";
import ListItem from "../components/atoms/listItem/ListItem.vue";
import Image from "../components/atoms/image/Image.vue";


// data variables
const webTitle = "DANA HEIMANN";
const webSubTitle = "UX/UI & VISUAL DESIGNER";
const mastHeadImage = "./images/header-pizza-app-desktop.png";

const listItems = [
  {
    label: "Role:",
    description: 'Lead UX Designer & Researcher'
  }, {
    label: "Timeline:",
    description: 'January 2022 - September 2022'
  }, {
    label: "Tools:",
    description: 'Figma'
  }
]
</script>

<template>
  <main class="page-project">
    <div class="masthead-wrapper">
      <MastHead :image="mastHeadImage"/>
    </div>
    <section>
      <div class="container page-project-highlight">
        <h2 class="text-center title-section text-black">PEQUENA ITALIA PIZZA MOBILE APP</h2>
        <div class="wrapper-list">
          <dl class="project-card_body__list row">
            <ListItem v-for="listItem in listItems" :label="listItem.label"
                      :description="listItem.description"></ListItem>
          </dl>
        </div>
      </div>
    </section>
    <section class="bg-project-pink  about-section">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <h4 class="text-center title-section">ABOUT</h4>
            <div class="text-center">
              A local pizzeria, Pequeña Italia, is stuck in the past, with no website or other online presence besides a
              Google Maps page. This project gives Pequeña Italia a mobile-ordering app, taking an already popular and
              successful restaurant to the next level with a modern way to order and generate more business.
            </div>
          </div>
          <div class="col-12 col-md-6">
            <h4 class="text-center title-section">CHALLENGES:</h4>
            <div>
              <ol>
                <li><u>Starting From Zero</u>
                  --How can we take a business that doesn’t even
                  have a website into
                  the twenty-first century with a mobile ordering application?
                </li>
                <li><u>Accessibility</u>
                  --Blurry, out-of-order menu photos that one has to search for in the
                  restaurant’s Google Maps page need to be transformed into a useful, usable, and
                  accessible mobile app that users on any device and of any ability are able to use
                  successfully.
                </li>
                <li><u>Allergens</u>
                  --Users with food sensitivities cannot readily identify which items on the
                  menu have potential allergens, and there is no way to alert the business aside from
                  calling and telling them over the phone.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="competitive-analysis-section">
      <div class="container">
        <div class="row competitive-analysis-section-images">
          <div class="col-12 col-lg-3 text-center d-none d-lg-block">
            <Image alt="pizza app" url="./images/mockup04.jpg"/>
          </div>
          <div class="col-12 col-lg-3 text-center">
            <Image alt="pizza app" url="./images/mockup09.jpg"/>
          </div>
          <div class="col-12 col-lg-3 text-center d-none d-lg-block">
            <Image alt="pizza app" url="./images/mockup12.jpg"/>
          </div>
          <div class="col-12 col-lg-3 text-center d-none d-lg-block">
            <Image alt="pizza app" url="./images/mockup23.jpg"/>
          </div>
        </div>

        <div class="competitive-analysis-section-title">
          <h3 class="text-center title-section text-black">COMPETITIVE ANALYSIS:</h3>
          <h4 class="text-center">PROBLEMS & OPPORTUNITIES</h4>
        </div>
        <div class="text-center competitive-analysis-section-description">
          <p>Key direct competitors for Pequeña
            Italia are the other local pizzerias in
            Olivares. Not one of the local restaurants, Pequeña Italia included, has a functional working
            website with a full menu and integrated way to order online.</p>
          <p>
            Pequeña Italia is the only place to offer 2-for-1 pizzas any size, any day, as well as free drinks
            with pizza purchase when dining in. They also have the largest selection of pizzas on offer of all
            the local pizzerias. The real missed opportunity here is not having a true online presence to
            communicate their brand and offerings, which are great.</p>
        </div>
        <div class="row">
          <div class="col-12 col-lg-6 pb-4 pb-lg-0 pb-xl-0">
            <div class="competitive-analysis-section-card bg-project-pink  text-center h-100 p-4">
              <h4 class="title-section">PROBLEMS</h4>
              <ul class="d-flex flex-column align-items-center py-3">
                <li>Poor online presence (app & website)</li>
                <li>Weak brand identity</li>
                <li>Unclear value offerings</li>
              </ul>
              <div>
                Pequeña Italia is not selling itself in the pizza restaurant space. Arguably, the other
                direct competitors aren’t doing much to sell themselves either, which leaves gaps in the
                market that any of the restaurants could capitalize on to bring in more local business
                moving forward. If Pequeña Italia makes a move to strengthen their brand identity and
                improve their online presence, they could put themselves far ahead of the competition in
                this increasingly digital world, and set themselves apart from the other local pizza
                restaurants by a huge margin.
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="competitive-analysis-section-card  bg-project-light-green  text-center h-100 p-4">
              <h4 class="title-section">OPPORTUNITIES</h4>
              <ul class="d-flex flex-column align-items-center py-3">
                <li>Create dedicated app & website</li>
                <li>Strengthen brand identity– Logo redesign?</li>
                <li>Clearly communicate the value they offer</li>
              </ul>
              <div>
                Pequeña Italia has the opportunity to set themselves apart from their competition by
                embracing the web and prevalence of mobile phone usage by creating an app. All of the
                businesses in Olivares are stuck in the pre-internet age. They don’t know how to present
                themselves online or operate in the digital space. If Pequeña Italia can be the first of
                its competitors to bring its brand into the 21st century, it has a huge opportunity to
                become more successful and set itself ahead of its competitors.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="key-questions-section">
      <div class="container">
        <h3 class="text-center title-section">KEY QUESTIONS:</h3>
        <div class="section-wrapper">
          <ol>
            <li class="pb-3">How might we create a mobile-ordering platform for Pequeña Italia to better reach their
              existing customers and acquire new customers?
            </li>
            <li>How can we create a streamlined way to view Pequeña Italia’s offerings and order seamlessly
              without having to call the restaurant?
            </li>
          </ol>
        </div>
      </div>
    </section>
    <section class="research-process-section bg-project-light-green ">
      <div class="container">
        <h3 class="text-center title-section">RESEARCH PROCESS:</h3>
        <div class="section-wrapper text-center">
          <p>Before designing, for research into users’ opinions, thoughts, experiences, and feelings, user
            interviews were conducted with a variety of participants.</p>
          <p>
            Research revealed two main groups of users: working adults who might use the app to help save
            time and effort when they are too busy to cook; and secondly, users with food sensitivities or
            allergies who want a way to express them to the business while placing an order.</p>
        </div>
      </div>
    </section>
    <section class="user-personas-section">
      <div class="container">
        <h3 class="text-center title-section">USER PERSONAS:</h3>
        <div class="row text-center">
          <div class="col-12 col-lg-6 user-personas-section-person">
            <div class="container-fluid border border-2 border-project-green h-100 p-4">
              <div class="user-personas-section-person-title text-project-green my-3">Sebastian</div>
              <Image alt="pizza app" url="./images/personaSebastianSquare.jpeg"
                     class="img-fluid border-project-green border border-1"/>
              <div class="col-12 text-project-green my-3">
                <div class="row">
                  <dt class="col-6 text-end">Age:</dt>
                  <dd class="col-6 text-start">42</dd>
                  <dt class="col-6 text-end">Education:</dt>
                  <dd class="col-6 text-start">Associate’s Degree</dd>
                  <dt class="col-6 text-end">Hometown:</dt>
                  <dd class="col-6 text-start">Olivares, Seville, Spain</dd>
                  <dt class="col-6 text-end">Family:</dt>
                  <dd class="col-6 text-start">Separated, Two Kids</dd>
                  <dt class="col-6 text-end">Occupation:</dt>
                  <dd class="col-6 text-start">Electrician</dd>
                </div>
              </div>
              <div class="my-3">
                <p>Sebastian is a 42 year-old dad of two. He works full-time as an electrician, and
                  plays
                  soccer with a local group of friends 2-3 times a week. He does a lot of driving
                  and
                  doesn’t always have time to cook. Sebastian loves making his own bread and
                  traditional
                  dishes from scratch but he only has time once or twice a week to do so. He
                  orders
                  take-out or pizza a couple of times a week to save time and relax when he is
                  juggling
                  various personal activities, working a lot, or when he wants to be able to spend
                  more
                  quality time with his kids.</p>
              </div>
              <div class="user-personas-section-person-solve">
                <h4 class="py-3">USER PROBLEMS TO SOLVE:</h4>
                <p class="text-project-green">As a busy working dad, Sebastian wants to order takeout quickly and
                  securely with Google Pay
                  or Apple Pay so that he doesn’t have to waste time inputting credit card info and is able to
                  have more time for his kids and busy life schedule. </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 user-personas-section-person">
            <div class="container-fluid border border-2 border-project-red h-100 p-4">
              <div class="user-personas-section-person-title text-project-red my-3">Elena</div>
              <Image alt="pizza app" url="./images/personaSebastianSquare.jpeg"
                     class="img-fluid border-project-red border border-1"/>
              <div class="col-12 text-project-red my-3">
                <div class="row">
                  <dt class="col-6 text-end">Age:</dt>
                  <dd class="col-6 text-start">28</dd>
                  <dt class="col-6 text-end">Education:</dt>
                  <dd class="col-6 text-start">Bachelor’s Degree</dd>
                  <dt class="col-6 text-end">Hometown:</dt>
                  <dd class="col-6 text-start">Sanlúcar la Mayor, Spain</dd>
                  <dt class="col-6 text-end">Family:</dt>
                  <dd class="col-6 text-start">Two Dogs and a Cat</dd>
                  <dt class="col-6 text-end">Occupation:</dt>
                  <dd class="col-6 text-start">Veterinary Technician</dd>
                </div>
              </div>
              <div class="my-3">
                <p>Elena is a 28-year-old university graduate who loves animals and recently bought a
                  house in the suburbs. She commutes to her vet tech job in the city on her motorbike.
                  Sometimes when Elena has to work late, she will order takeout from a restaurant on
                  the way home so she can pick up her dinner and relax with her dogs when she gets
                  home. She has food sensitivities to gluten and dairy and sometimes has trouble
                  finding restaurants that will accommodate her needs, especially in her small
                  town.</p>
              </div>
              <div class="user-personas-section-person-solve">
                <h4 class="py-3">USER PROBLEMS TO SOLVE:</h4>
                <p class="text-project-red">As someone with food allergies, Elena needs options to modify her order
                  before placing it so
                  that she can ensure a restaurant is aware of her food sensitivities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="">
      <div class="container">
        <h3 class="text-center title-section">SITEMAP:</h3>
        <div class="section-wrapper text-center">
          <Image alt="image.alt" url="./images/pizza-app-site-map.png"/>
        </div>
      </div>
    </section>
    <section class="">
      <div class="container">
        <h3 class="text-center title-section">WIREFRAMES:</h3>
        <div class="section-wrapper row">
          <div class="container">
            <div class="row competitive-analysis-section-images">
              <div class="col-6 col-lg-3 text-center">
                <Image alt="pizza app" url="./images/wireframeSignUp.jpg"/>
              </div>
              <div class="col-6 col-lg-3 text-center">
                <Image alt="pizza app" url="./images/wireframeMainMenu.jpg"/>
              </div>
              <div class="col-6 col-lg-3 text-center">
                <Image alt="pizza app" url="./images/wireframeOrderSummary.jpg"/>
              </div>
              <div class="col-6 col-lg-3 text-center">
                <Image alt="pizza app" url="./images/wireframePaymentPage.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="itineration-section">
      <div class="container">
        <h3 class="text-center title-section">ITERATION:</h3>
        <div class="section-wrapper text-center">
          <p>The key to any good design is taking cues from users as to what works and what doesn’t. By taking
            this information into account, the product can be improved to better serve the users through
            form and function.</p>
          <p>Two rounds of usability studies were conducted. Findings from the first study helped guide the
            designs from wireframes to mockups. The second study used a high-fidelity prototype and revealed
            what aspects of the mockups needed refining.</p>
        </div>
      </div>
    </section>
    <section class="usability-study-section bg-project-pink ">
      <div class="container">
        <h3 class="text-center title-section">USABILITY STUDY FINDINGS:</h3>
        <div class="section-wrapper row">
          <div class="col-12 col-lg-8">
            <Image alt="usability study" url="./images/usability-study.JPG"/>
          </div>
          <div class="col-12 col-lg-4 pt-3 pt-lg-0">
            <ol>
              <li class="pb-3">Starting From Zero--How can we take a business that doesn’t even have a website into the
                twenty-first century with a mobile ordering application?
              </li>
              <li class="pb-3">Accessibility--Blurry, out-of-order menu photos that one has to search for in the
                restaurant’s Google Maps page need to be transformed into a useful, usable, and
                accessible mobile app that users on any device and of any ability are able to use
                successfully.
              </li>
              <li>Allergens--Users with food sensitivities cannot readily identify which items on the menu
                have potential allergens, and there is no way to alert the business aside from calling
                and telling them over the phone.
              </li>

            </ol>
          </div>

        </div>
      </div>
    </section>
    <section class="before-after-section">
      <div class="container">
        <h3 class="text-center title-section">BEFORE & AFTER USABILITY STUDY:</h3>
        <div class="row">
          <div class="col-12 col-lg-8 text-center">
            <div class="row">
              <div class="col-5">
                <Image alt="pizza app" url="./images/wireframeMainMenu.jpg"/>
              </div>
              <div class="col-2 d-flex align-items-center justify-content-center">
                <font-awesome-icon icon="fa-solid fa-long-arrow-right"/>
              </div>
              <div class="col-5">
                <Image alt="pizza app" url="./images/mockup05.jpg"/>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4 text-center d-flex align-items-center"><p>Based on the insight that users expect a
            landing page, a
            homepage was created that has general information about the business (like address and hours as
            well as a photo of the restaurant) as the first thing users see.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-8 text-center">
            <div class="row">
              <div class="col-5">
                <Image alt="pizza app" url="./images/wireframeItemAddedToCart.jpg"/>
              </div>
              <div class="col-2 d-flex align-items-center justify-content-center">
                <font-awesome-icon icon="fa-solid fa-long-arrow-right"/>
              </div>
              <div class="col-5">
                <Image alt="pizza app" url="./images/mockup10.jpg"/>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4 text-center d-flex align-items-center"><p>Based on the insight that users needed
            easier-to-click
            buttons and bigger, easier-to-read text, those changes were implemented on various screens,
            notably the screens with modals, which now take up almost the full mobile screen size with both
            larger text and buttons for better usability.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-8 text-center">
            <div class="row">
              <div class="col-5">
                <Image alt="pizza app" url="./images/wireframePaymentPage.jpg"/>
              </div>
              <div class="col-2 d-flex align-items-center justify-content-center">
                <font-awesome-icon icon="fa-solid fa-long-arrow-right"/>
              </div>
              <div class="col-5">
                <Image alt="pizza app" url="./images/mockup16.jpg"/>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4 text-center d-flex align-items-center"><p>Based on the insight that users found
            the Payment Page
            confusing and crowded, more steps were added to the payment process, each being well-spaced-out
            and with a clear purpose.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-8 text-center">
            <div class="row">
              <div class="col-5">
                <Image alt="pizza app" url="./images/wireframeProfilePage.jpg"/>
              </div>
              <div class="col-2 d-flex align-items-center justify-content-center">
                <font-awesome-icon icon="fa-solid fa-long-arrow-right"/>
              </div>
              <div class="col-5">
                <Image alt="pizza app" url="./images/mockup25.jpg"/>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4 text-center d-flex align-items-center"><p>Based on the insight that users need a
            more useful Profile Page that can act as a hub to access their important account information, the change was
            made from a simple form to a more useful and usable mini-landing-page.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="quote-section bg-project-light-green ">
      <font-awesome-icon icon="fa-solid fa-quote-left"/>
      <div class="container text-center">
        <div class="section-wrapper">
          <div class="quote-text">It's good that the first thing you see is the title, this beautiful photo of
            the restaurant, the address, the hours and then you have the option to call right there–it's not
            too much and it's a great first impression. I like the app overall because it's intuitive and so
            easy to manage–I think anybody could order a pizza using this app.
          </div>
          <div class="quote-author text-uppercase pt-3">-Marielle, pizza lover from NYC</div>
        </div>
      </div>
      <font-awesome-icon icon="fa-solid fa-quote-right"/>
    </section>
    <section class="met-section">
      <div class="container">
        <div class="section-wrapper">
          <h3 class="text-center title-section">HOW PRODUCT MET INITIAL CHALLENGES:</h3>
          <div>
            <ol>
              <li class="pb-3">The final prototype of the app demonstrates an approachable and easy-to-use
                pizza-ordering app that effectively brings Pequeña Italia into the 21st century.
              </li>
              <li class="pb-3">Previously, the only version of the restaurant’s menu that existed online was in photo
                or PDF format, completely inaccessible to those users who use a screen reader. Now, with
                a fully digitized menu, the restaurant’s menu is accessible to those users, but also
                easier to read and access for all users.
              </li>
              <li>Potential food allergens are clearly marked with symbols on each menu item, and any
                additional dietary concerns can be written-in in the note section of each menu item or
                on the order as a whole before submitting it.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section class="style-guide-section">
      <div class="container text-center">
        <div class="section-wrapper">
          <h3 class="text-center title-section">STYLE GUIDE:</h3>
          <Image alt="usability study" url="./images/styleGuide.jpg"/>
        </div>
      </div>
    </section>
    <section class="final-prototype-section">
      <div class="container text-center">
        <div class="section-wrapper">
          <h3 class="text-center title-section">FINAL PROTOTYPE:</h3>
          <video width="300" height="600" controls="false">
            <source src="/videos/prototype-video.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <p>SEE THE FINAL PROTOTYPE FOR YOURSELF <a
              href="https://www.figma.com/proto/b9Vm6IV3dA0P2OZpp02juD/Peque%C3%B1a-Italia-Pizza?page-id=371%3A1312&type=design&node-id=375-1322&viewport=437%2C297%2C0.11&scaling=scale-down&starting-point-node-id=375%3A1322">HERE</a>
          </p>
        </div>
      </div>
    </section>
    <section class="takeaweys-section">
      <div class="container text-center">
        <div class="section-wrapper">
          <h3 class="text-center title-section">TAKEAWAYS:</h3>
          <p>While designing the Pequeña Italia Pizza app, I learned how thorough the design process really
            is. It may take weeks or months and the first ideas for the app are only the beginning of the
            process. Usability studies and peer feedback influenced each iteration of the app’s designs.
            And, although it was hard, I also learned not to become attached to the designs I created since
            they were subject to change with each new version of the app.</p>
        </div>
      </div>
    </section>
  </main>
</template>
