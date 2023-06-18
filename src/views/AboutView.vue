<script setup>
import './about-view.scss'

import Image from "../components/atoms/image/Image.vue"
import Separator from "../components/atoms/separator/Separator.vue";

const aboutTitle = "DANA HEIMANN";
const aboutSubTitle = "UX/UI & VISUAL DESIGNER";

</script>

<template>
  <main>
    <header class="header-about bg-mid-dark-green bg-opacity-25">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 header-about__image">
            <Image class="" alt="Dana Heimann UX disigner" url="./images/portraitOriginal.jpg"/>
          </div>
          <div class="col-12 col-md-6 text-center header-about__text">
            <h1>{{ aboutTitle }}</h1>
            <p class="lead">{{ aboutSubTitle }}</p>
            <!--            <Image alt="Logo dana heimann" url="./logo.svg"/>-->
          </div>
        </div>
      </div>
    </header>
    <section class="container intro-text-section">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6 text-center">
          <p>It’s been quite a journey to get here, finally pursuing the thing I always wanted my career to be: Art &
            Design.</p>
          <p>Ever since I was little, I took art classes in all kinds of mediums: drawing, painting, glass, ceramics,
            wood,
            metals, photography, and more. Everything about hands-on creation fascinated me.</p>
          <p>My big imagination also sparked a love of books, which led me to pursue an Bachelor’s Degree in English
            Literature at university. After jobs in sales and multiple Michelin-star restaurants in NYC, I decided to
            move
            to Spain and finally put that English degree to work as an ESL teacher.</p>
          <p>Despite exploring the world as well as a new career avenue, I always had that nagging feeling to create.
            The
            pandemic forced me to reassess my career path and I decided to learn some coding skills which revealed to me
            the
            wide world of web and digital design.</p>
          <p>Although I love working independently, I’m seeking team collaboration mingled with the excitement of
            discovering new ideas on the road to solving challenging problems.</p>
          <p>I want to wake up every day with the ability to use my creativity in my work and experience the
            satisfaction of
            seeing hard work come to fruition.</p>
        </div>
      </div>
    </section>
    <section class="bg-secondary bg-opacity-25">
      <div class="container">
        <h2 class="text-center title-section">SKILLS</h2>
        <div class="row justify-content-center">
          <div class="col-10 col-lg-12">
            <div class="dn-list-group-wrapper row">
              <div class="dn-list-group col-12 col-md-6 col-lg-3">
                <h4 class="dn-list-group__title">UX</h4>
                <ul class="dn-list-group__ul">
                  <li>User Journeys</li>
                  <li>User Flow</li>
                  <li>Sketching</li>
                  <li>Storyboarding</li>
                  <li>Paper Wireframing</li>
                  <li>Digital Wireframing</li>
                  <li>Mockups</li>
                  <li>User Research</li>
                  <li>Affinity Mapping</li>
                  <li>Mobile App Design Systems</li>
                  <li>Low-Fidelity Prototyping</li>
                  <li>High-Fidelity Prototyping</li>
                  <li>Usability Studies</li>
                </ul>
              </div>
              <div class="dn-list-group col-12 col-md-6 col-lg-3">
                <h4 class="dn-list-group__title">DESIGN</h4>
                <ul class="dn-list-group__ul">
                  <li>Typography</li>
                  <li>Visual Hierarchy</li>
                  <li>Color Theory</li>
                </ul>
              </div>
              <div class="dn-list-group col-12 col-md-6 col-lg-3">
                <h4 class="dn-list-group__title">CODING</h4>
                <ul class="dn-list-group__ul">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>CSS Grid & Flexbox</li>
                  <li>Basic JavaScript</li>
                  <li>Bootstrap</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div class="dn-list-group col-12 col-md-6 col-lg-3">
                <h4 class="dn-list-group__title">GENERAL</h4>
                <ul class="dn-list-group__ul">
                  <li>Fluent in Spanish</li>
                  <li>Teaching</li>
                  <li>Photography</li>
                  <li>Leadership</li>
                  <li>Problem Solving</li>
                  <li>Writing & Editing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <h2 class="text-center title-section">TOOLS</h2>
        <div class="row justify-content-center">
          <div class="col-8 col-sm-6 col-md-3">
            <div class="dn-list-group-wrapper">
              <div class="dn-list-group">
                <ul class="dn-list-group__ul">
                  <li>Figma<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z" fill="#1ABCFE"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z" fill="#0ACF83"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z" fill="#FF7262"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z" fill="#F24E1E"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z" fill="#A259FF"/>
                  </svg></li>
                  <li>Adobe Suite</li>
                  <li>VS Code</li>
                  <li>HTML5 <svg width="33" height="36" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.84665 30.6998L4.84888 3.7373H28.8222L26.8244 30.6998L16.8355 33.9353L6.84665 30.6998Z"
                          fill="#E44D26"/>
                    <path d="M26.8244 5.89429H16.8355V32.3175L24.8267 29.6213L26.8244 5.89429Z" fill="#F16529"/>
                    <path
                        d="M10.3428 19.3756L9.3439 9.12988H24.8267L24.3272 12.3654H12.3406L12.84 16.1401H23.8278L22.8289 26.3859L16.8356 28.5429L10.8422 26.3859L10.3428 20.9934H13.3395L13.8389 23.6896L16.8356 24.7681L19.8322 23.6896L20.3317 19.3756H10.3428Z"
                        fill="white"/>
                  </svg></li>
                  <li>CSS3
                    <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="css_3">
                        <path id="vector" d="M6.91221 30.6213L4.91443 3.65881H28.8878L26.89 30.6213L16.9011 33.8568L6.91221 30.6213Z"
                              fill="#1172B8"/>
                        <path id="vector_2" d="M26.89 5.8158H16.9011V32.239L24.8922 29.5428L26.89 5.8158Z" fill="#33AADD"/>
                        <path id="vector_3"
                              d="M20.3972 19.2971H10.4083L9.90887 15.5223L17.9 12.8261H9.90887L9.40942 9.59058H24.8922L24.3928 13.3653L17.9 16.0616H23.8933L22.8944 26.3073L16.9011 28.4643L10.9078 26.3073L10.4083 20.9148H13.405L13.9044 23.6111L16.9011 24.6896L19.8978 23.6111L20.3972 19.2971Z"
                              fill="white"/>
                      </g>
                    </svg></li>
                  <li>Apple Keynote/Pages</li>
                  <li>Microsoft Powerpoint/Word</li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-secondary bg-opacity-25">
      <div class="container dn-education">
        <h2 class="text-center title-section">EDUCATION</h2>
        <div class="row justify-content-center">
          <div class="col-12 col-sm-8 col-md-6">
            <div class="dn-education-group">
              <p>GOOGLE USER EXPERIENCE DESIGN PROFESSIONAL CERTIFICATE 2023</p>
            </div>
            <div class="dn-education-group">
              <p>STATE UNIVERSITY OF NEW YORK AT NEW PALTZ</p>
              <p>New Paltz, NY, USA, 2009-2013</p>
              <p>Bachelor of Arts</p>
              <p>Cum Laude</p>
              <p>English Literature Major</p>
              <p>Spanish & Art Studio Minors</p>
              <p>GPA 3.6</p>
            </div>
            <div class="dn-education-group">
              <p>UNIVERSIDAD DE SEVILLA</p>
              <p>Seville, Spain, Spring 2012</p>
              <p>Spanish Language Studies</p>
              <p>GPA 4.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="container dn-see-my-cv">
      <div class="text-center dn-btn-wrapper">
        <a href="./UX_UI_dana_heimann.pdf" target=”_blank” class="dn-btn-outline-old-mauve">
          SEE MY CV
          <font-awesome-icon icon="fa-regular fa-circle-right"/>
        </a>
        <Separator/>
      </div>
    </section>

  </main>
</template>





