let currentYear = new Date().getFullYear();
let lastModified = document.lastModified;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show')
})
document.getElementById("currentYear").textContent = `©${currentYear}`;
document.getElementById("lastModified").textContent = ` Last Modification: ${lastModified}`;

function toggleActive(element) {
    element.classList.toggle('active');
}

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

createCourseCard(courses);

function createCourseCard(filteredcourses) {
    const coursesContainer = document.querySelector('.courses');
    coursesContainer.innerHTML = ""; // Clear the container at the start
    //REDUCE FUNCTION
    const totalCredits = filteredcourses.reduce((total, credit) => total + credit.credits, 0);
    const totalCreditElement = document.createElement('h2');
    totalCreditElement.innerHTML = `Total credits: ${totalCredits}`;
    coursesContainer.appendChild(totalCreditElement);

    // If no courses match the filter, display a message
    if (filteredcourses.length === 0) {
        coursesContainer.innerHTML = "<p>No courses found for the selected filter.</p>";
        return;
    }

    // Iterate over all courses and create cards
    filteredcourses.forEach(course => {
        let card = document.createElement('section');
        let subject = document.createElement("h3");
        let title = document.createElement('p');
        let credits = document.createElement('p');
        let status = document.createElement('p');

        subject.innerHTML = `${course.subject} ${course.number}`;
        title.innerHTML = `${course.title}`;
        credits.innerHTML = `<span class='label'><strong>Credits:</strong></span> ${course.credits}`;
        status.innerHTML = `<span class='label'><strong>Completed:</strong></span> ${course.completed}`;
        card.appendChild(subject);
        card.appendChild(title);
        card.appendChild(credits);
        card.appendChild(status);

        coursesContainer.appendChild(card);
        card.classList.add(course.completed ? 'card-completed' : 'card-uncompleted');
    });
}
let allCoursesButton = document.querySelector('#all');
allCoursesButton.addEventListener('click', () => {
    let all = courses.filter(course => course)
    createCourseCard(all)
})
let wddCoursesButton = document.querySelector('#wdd');
wddCoursesButton.addEventListener('click', () => {
    let wddCourses = courses.filter(course => course.subject === 'WDD');
    createCourseCard(wddCourses)
})

let csecoursesButton = document.querySelector('#cse');
csecoursesButton.addEventListener('click', () => {
    let csecourses = courses.filter(course => course.subject === 'CSE');
    createCourseCard(csecourses)
})




