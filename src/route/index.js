// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

//===============================================================

var header = {
  name: {
    firstname: 'Dasha',
    lastname: 'Zarichna',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'м. Мукачево, вул. Ілони Зріні,8',
}
var footer = {
  social: {
    email: {
      text: 'zarichna@mail.com',
      href: 'mailto:zarichna@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume / Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume / Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 9,
          isTop: false,
        },
        {
          name: 'VS Code & NPM',
          point: 10,
          isTop: true,
        },
        {
          name: 'React.js ',
          point: 0,
        },
        {
          name: 'PHP ',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Малювання',
          isMain: true,
        },
        {
          name: 'Плавання',
          isMain: false,
        },
        {
          name: 'Спорт',
          isMain: true,
        },
      ],
    },

    footer,
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: {
      title: 'Resume / Education',
    },
    header,

    main: {
      educations: [
        {
          name: 'ЛНУ ім.Івана Франка',
          isEnd: true,
        },
        {
          name: 'Університет економіки та права "КРОК',
          isEnd: false,
        },
        {
          name: 'Київський національний університет культури і мистецтв (КНУКіМ)',
          isEnd: true,
        },
        {
          name: 'Інститут психології і підприємництва',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'Сертифікат1',
          id: 4656,
        },
        {
          name: 'Сертифікат2',
          id: 8667,
        },
        {
          name: 'Сертифікат3',
          id: 0776,
        },
      ],
    },
    footer,
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',

    page: {
      title: 'Resume / Work',
    },
    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '17.03.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about:
                'Airbnb comprtitior. High-load application for serching apartments',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'Background verification - is a feature that provides users to prove that they are real persons.',
                },
                {
                  name: 'Preparing SEO optimized pages. The automated process of getting data for the app from documents.',
                },
              ],
              stackAmount: 3,
              awardAmount: 5,
            },
          ],
        },
      ],
    },
    footer,
  })
})
// ↙ сюди вводимо JSON дані

// Підключаємо роутер до бек-енду
module.exports = router
