export const data ={
    menu: [{url: 'intro', val: 'Introduction'}, {url: 'skill', val: 'Skill'}, {url: 'edu', val: 'Education'}, {url:'exp', val: 'Experience'}],
    personInfo: [
        { key: 'Chinese Name', val: '石軒丞' },
        { key: 'English Name', val: 'Shek Hin Shing' },
        { key: 'Sex', val: 'Male' },
        { key: 'Birth', val: '27th of January 1989' },
        { key: 'Nationality', val: 'Hong Kong' },
    ],
    skill: {
        'Fontend Language': ['CSS3', 'HTML5', 'javasricpt'],
        'JS Framework & Library': ['React', 'JQuery', 'Vue.js', 'redux(pattern)', 'lodash', 'vuex'],
        'CSS Framework & Library': ['Bootstrap 4', 'animate css', 'vuetify'],
        'Backend stack': ['NodeJs', 'Express(nodeJs module)', 'mongoose'],
        'Databases': ['Mongo DB', 'MySQL'],
        'Mobile stack': ['ionic framework(angular js), cordova'],
        'Operating Systems': ['Windows', 'Linux', 'MAC OS', 'Ubuntu'],
        'Version Control': ['GIT', 'SVN'],
        'Package management': ['Bower', 'Npm', 'yarn'],
        'Task manager': ['Gulp', 'webpack']
    },
    edu: [
        { 'From': 2011, 'To': 2011, 'Awarding Institution': 'Coventry University', 'Program Title': 'BSc (Hons) Business Information Technology (HKCAAVQ Approved) ', 'Study Mode ': 'full Time', 'Date of Award ': '2011' },
        { 'From': 2007, 'To': 2010, 'Awarding Institution': 'Hong Kong IVE(ST) ', 'Program Title': 'Higher Diploma in Internet and Multimedia Engineering', 'Study Mode ': 'full Time', 'Date of Award ': '2010' },
        { 'From': 2002, 'To': 2007, 'Awarding Institution': 'Immanuel Lutheran College(E.M.I) ', 'Program Title': 'BSc (Hons) Business Information Technology (HKCAAVQ Approved) ', 'Study Mode ': 'full Time', 'Date of Award ': '2007' },
    ],
    experience: [
        {
            name: 'South China Morning Post',
            duration: 'June 2017 - Oct 2017',
            des: [
                'Creating a progressive web app using vue js with using its state management solutions called "vuex" ',
                'Using web pack to bundle vue file with vue loader and sass loader for the CSS.'
            ],
            tech: 'Vue js with ssr, Vuex, Bootstrap 4, Webpack, lodash, Docker'
        },
        {
            name: 'Li Fung Limited',
            duration: 'June 2015 – April 2017',
            des: ['Built three mobile apps using ionic', 'Built a booking app for users to see the schedule and book the meeting rooms', 'For the back-end side ,both website and mobile app are built using Nodejs with express framework in remote rest server like amazon', 'Built some robot in some communicate application,e.g. slack using bot kit'],
            tech: 'JS, IONIC, CORDOVA, HTML5, CSS3, GIT ,mean stack (mogodb, angularjs, Express, NodeJs ) , mongoose, node js with express framework'
        },
        {
            name: 'Someday Limited',
            duration: 'May 2014 - Apirl 2015',
            des: ['Develop web interface from design flow from the designer using HTML5 and CSS3 and make it logical using jquery.', 'Develop a hybrid web app which is using Ionic framework and Angularjs', 'Develop chatting system using Angular and the backend is using Nodejs and socket io'],
            tech: 'ANGULAR JS, IONIC, CORDOVA, HTML5, CSS3, GIT, Jquery'
        },
        {
            name: 'KanHan Limited',
            duration: 'October 2013- Feberury 2014',
            des: ['Develop website for government departments using Drupal CMS php framework.', 'Participated in migrating some crystal report for government departments using visual studio.'],
            tech: 'PHP, ASP.NET, JQUERY, DRUPAL, CSS3, HTML5'
        },
        {
            name: 'Travelzen Limited',
            duration: 'September 2011-October 2013',
            des: ['Develop the interface prototype for the website for ticket selling', 'Provide support for ad-hoc projects'],
            tech: 'Lamp stack ( linux, Apache, Mysql, Php), SMARTY, SOAP, XML, XSLT, JQUERTY, GIT, SVN'
        },
    ]
}