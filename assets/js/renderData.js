import { basicInfo, aboutMe, skills, educations, certifications, projects, testimonials } from './data.js';

$('h3.sidebar__name').text(basicInfo.name);
$('.sidebar__base-info .badge ').text(basicInfo.job);

$('#avatar').attr('src', basicInfo.avatar).attr('alt', basicInfo.name);

basicInfo.contact.forEach((contact) => {
    $('.details-info').append(`
        <li class="details-info__item">
            <span class="box box--s2 icon-box"><i class="font-icon bi ${contact.iconName}"></i></span>
            <div class="contacts-block__info">
                <span class="overhead">${contact.name}</span>
                <span class="text-overflow" title="${contact.value}">${contact.value}</span>
            </div>
        </li>
    `)
});

basicInfo.socials.forEach((social) => {
    $('.sidebar__social').append(`
        <a href="${social.link}" target="_blank" class="box box--s2 icon-box">
            <i class="font-icon bi ${social.icon}"></i>
        </a>
    `)
})

aboutMe.forEach((paragraph) => {
    $('section#about div').append(`<p data-aos="flip-left">${paragraph}</p>`);
})

skills.forEach((skill) => {
    $('section#skills div.row').append(
        `<div class="col-12 col-lg-6" data-aos="flip-left" data-aos-delay="300" data-aos-duration="1000">
            <div class="case-item box box--s2 box-inner">
                <i class="font-icon bi ${skill.icon} case-item__icon"></i>
                <div>
                    <h3 class="title title--h3">${skill.name}</h3>
                    <ul>
                        ${skill.technical.map((tech) => `<li>${tech}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>`
    )
})

educations.forEach((education) => {
    $('#education div.timeline').append(`
       <article class="timeline__item" data-aos="fade-left" data-aos-delay="200">
            <h5 class="title title--h4 timeline__title">${education.name}</h5>
            <span class="timeline__period">${education.date}</span>
            <p class="timeline__description">${education.major}</p>
        </article>
    `)
})

certifications.forEach((element) => {
    $('#certificate div.timeline').append(`
       <article class="timeline__item" data-aos="fade-left" data-aos-delay="200">
            <h5 class="title title--h4 timeline__title">${element.name}</h5>
            <span class="timeline__period">${element.date}</span>
            <p class="timeline__description">${element.organization}</p>
        </article>
    `)
})

projects.forEach((project) => {
    $('section#project div.row').append(`
    <div data-aos="flip-up" data-aos-delay="300" data-aos-duration="1000" class="col-12 col-md-6 col-lg-4 mb-3">
        <a href="#" data-bs-toggle="modal" data-bs-target="#${project.slug}">
            <div class="gallery-grid__image-wrap overflow-hidden position-relative w-full">
                <img class="gallery-grid__image" src="${project.thumbnail}" loading="lazy" alt="${project.name}" />
            </div>
            <div class="gallery-grid__caption">
                <h3 class="title gallery-grid__title">${project.name}</h3>
                <span class="gallery-grid__category">${project.role}</span>
            </div>
        </a>
    </div>
    `)
    $('main').append(`
    <div class="modal fade" id="${project.slug}" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="box-outer modal-content">
                <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                <header class="header-project">
                    <h4 class="title title--h1">${project.name}</h4>
                    <div class="header-project__image-wrap">
                        <img class="cover lazyload" src="${project.thumbnail}" loading="lazy" alt="${project.name}" />
                    </div>
                </header>

                <ul class="details-info details-info--inline">
                    <li class="details-info__item">
                        <span class="box box--s2 icon-box"><i class="font-icon bi bi-calendar fs-3"></i></span>
                        <div class="details-info__info">
                            <span class="overhead">Duration</span> ${project.duration}
                        </div>
                    </li>
                    <li class="details-info__item">
                        <span class="box box--s2 icon-box"><i class="font-icon bi bi-people fs-3"></i></span>
                        <div class="details-info__info">
                            <span class="overhead">Team Size</span>${project.teamSize}
                        </div>
                    </li>
                    <li class="details-info__item">
                        <span class="box box--s2 icon-box"><i class="font-icon bi bi-person-circle fs-3"></i></span>
                        <div class="details-info__info">
                            <span class="overhead">Role</span>${project.role}
                        </div>
                    </li>
                </ul>

                <p>${project.descriptions}</p>
                <p>Tech stack: </p>
                <ul class="tech-stack">
                ${project.tech_stack.map((tech) => `<li><strong>${tech.name}</strong> ${tech.technicals}</li>`).join('')}
                </ul>
                <p>${project.result}</p>

                <div class="project-actions">
                    <a href="${project.source_code}" target="_blank" class="btn btn--primary">
                        <i class="font-icon feathericon-github"></i> View Source Code
                    </a>
                    <a href="${project.demo}" target="_blank" class="btn btn--secondary">
                        <i class="font-icon icon-globe"></i> View Live Demo
                    </a>
                </div>
            </div>
        </div>
    </div>`)
})

testimonials.forEach((testimonial) => {
    $('section#testimonials .swiper-wrapper').append(`
    <div class="swiper-slide review-item box box--s2 box-inner js-open-review">
        <figure class="box box-avatar box-avatar--not-border">
            <img src="${testimonial.avatar}" loading="lazy" alt="${testimonial.name}">
        </figure>
        <h4 class="title title--h3">${testimonial.name}</h4>
        <p class="review-item__caption">${testimonial.content}</p>
    </div>
    `)
})