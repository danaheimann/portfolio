<script setup>

import MastHead from "../components/organism/mastHead/MastHead.vue";
import ProjectCard from "../components/organism/projectCard/ProjectCard.vue";


// data variables
const webTitle = "DANA HEIMANN";
const webSubTitle = "UX/UI & VISUAL DESIGNER";
const mastHeadImage = "./images/masthead2500.jpg";

const projectCards = [
  {
    title: "UX Designer Portfolio",
    description: 'Lorem Ipsum ',
    link: '/pizzaapp',
    image: {
      url: "https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado-.jpg",
      alt: "Project image alt",
      position: "left"
    },
    listItems: [
      {
        label: "Role:",
        description: 'UX Design'
      }, {
        label: "Timeline:",
        description: 'Nov 2022-Feb 2023'
      }, {
        label: "Tools:",
        description: 'Figma'
      }, {
        label: "About:",
        description: 'Multi-page design portfolio'
      }
    ]
  },
  {
    title: "Mobile-Ordering App for a Local Restaurant",
    description: 'Lorem Ipsum',
    link: '/pizzaapp',
    image: {
      url: "./images/pizza-app.jpg",
      alt: "Project image alt",
      position: "right"
    },
    listItems: [
      {
        label: "Role:",
        description: 'UX Design & UX Research'
      }, {
        label: "Timeline:",
        description: 'Jan-Sept 2022'
      }, {
        label: "Tools:",
        description: 'Figma'
      }, {
        label: "About:",
        description: 'Over 20 screens displaying a user flow from sign-in to order confirmation'
      }
    ]
  },
  {
    title: "Responsive Website for a Small Business",
    description: 'Lorem Ipsum',
    link: '/pizzaapp',
    image: {
      url: "./images/yoga-studio.png",
      alt: "Project image alt",
      position: "left"
    },
    listItems: [
      {
        label: "Role:",
        description: 'Front-End Development & UX Design'
      }, {
        label: "Timeline:",
        description: 'Sept-Oct 2021'
      }, {
        label: "Tools:",
        description: 'GIT, HTML5 and CSS3'
      }, {
        label: "About:",
        description: 'Single page project site responsive to three breakpoints'
      }
    ]
  },
];
</script>

<template>
  <MastHead :title="webTitle" :subtitle="webSubTitle" :image="mastHeadImage"/>
  <main>
    <section class="container intro-text-section">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6 text-center">
          <p>I’m a UX/UI and Visual Designer from New York, now based in Southern Spain. </p>
            <p>I bring my love of adventure to my work by always staying curious, learning from others, and looking
              forward to what’s next. As a passionate artist and designer with innovative ideas, I can work with anyone
              and on any project, contributing a fresh perspective and helping teams gain forward momentum.
            </p>
        </div>
      </div>
    </section>
    <section class="bg-secondary bg-opacity-25">
      <div class="container">
        <h2 class="title-section text-old-mauve text-center"><A name="my-work">MY WORK</A></h2>
        <div class="row">
          <div class="col-12 col-lg-10">
            <ProjectCard v-for="projectCard in projectCards"
                         :title="projectCard.title"
                         :description="projectCard.description"
                         :link="projectCard.link"
                         :listItems="projectCard.listItems"
                         :image="projectCard.image"/>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>
