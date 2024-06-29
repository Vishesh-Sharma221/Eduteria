const topics = [
    {
        title: 'Machine Learning',
        courses: [
            {
                title: 'Introduction to Machine Learning',
                provider: 'Coursera',
                releaseDate: '2021-05-20',
                price: 'Free',
                likes: 2300,
                description: 'Learn the fundamentals of machine learning, including supervised and unsupervised learning, and neural networks.',
                url: 'https://www.coursera.org/learn/machine-learning'
            },
            {
                title: 'Advanced Machine Learning',
                provider: 'edX',
                releaseDate: '2020-07-10',
                price: 'Paid',
                likes: 1800,
                description: 'Explore advanced machine learning concepts such as deep learning, reinforcement learning, and neural network optimization.',
                url: 'https://www.edx.org/course/advanced-machine-learning'
            }
        ]
    },
    {
        title: 'Data Engineering',
        courses: [
            {
                title: 'Data Engineering Basics',
                provider: 'edX',
                releaseDate: '2020-07-10',
                price: 'Paid',
                likes: 1800,
                description: 'Explore data engineering concepts such as data pipelines, databases, and data processing using various tools and technologies.',
                url: 'https://www.edx.org/course/data-engineering-basics'
            },
            {
                title: 'Data Engineering with Python',
                provider: 'Coursera',
                releaseDate: '2021-09-15',
                price: 'Free',
                likes: 2500,
                description: 'Learn data engineering using Python with hands-on projects and real-world datasets.',
                url: 'https://www.coursera.org/learn/data-engineering-python'
            }
        ]
    },
    {
        title: 'Software Development',
        courses: [
            {
                title: 'Software Development Fundamentals',
                provider: 'Udacity',
                releaseDate: '2019-09-15',
                price: 'Paid',
                likes: 3200,
                description: 'Master the art of software development with courses covering algorithms, data structures, and software design principles.',
                url: 'https://www.udacity.com/course/software-development-fundamentals'
            }
        ]
    },
    {
        title: 'Front End Development',
        courses: [
            {
                title: 'Front End Development Basics',
                provider: 'Codecademy',
                releaseDate: '2022-01-05',
                price: 'Free',
                likes: 4100,
                description: 'Learn to build beautiful and interactive web interfaces using HTML, CSS, and JavaScript.',
                url: 'https://www.codecademy.com/learn/front-end-development-basics'
            }
        ]
    },
    {
        title: 'DevOps',
        courses: [
            {
                title: 'Introduction to DevOps',
                provider: 'Pluralsight',
                releaseDate: '2018-11-20',
                price: 'Paid',
                likes: 2900,
                description: 'Understand the principles of DevOps, continuous integration, and continuous delivery to improve software delivery and operations.',
                url: 'https://www.pluralsight.com/courses/devops-introduction'
            }
        ]
    },
    {
        title: 'Cybersecurity',
        courses: [
            {
                title: 'Cybersecurity Basics',
                provider: 'Coursera',
                releaseDate: '2021-03-30',
                price: 'Free',
                likes: 3500,
                description: 'Learn about cybersecurity threats, vulnerabilities, and how to protect systems and data from attacks.',
                url: 'https://www.coursera.org/learn/cybersecurity-basics'
            }
        ]
    }
];

document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredTopics = topics.filter(topic => topic.title.toLowerCase().includes(query));
    displayTopics(filteredTopics);
});

function displayTopics(topicList) {
    const topicsContainer = document.getElementById('courses');
    topicsContainer.innerHTML = '';

    topicList.forEach(topic => {
        const topicElement = document.createElement('div');
        topicElement.className = 'course';
        topicElement.innerHTML = `
            <h2>${topic.title}</h2>
            <div class="details">
                ${topic.courses.map(course => `
                    <div class="course-item">
                        <h3>${course.title}</h3>
                        <p class="meta">Provider: ${course.provider}</p>
                        <p class="meta">Release Date: ${course.releaseDate}</p>
                        <p class="meta">Price: ${course.price}</p>
                        <p class="meta">Likes: ${course.likes}</p>
                    </div>
                `).join('')}
            </div>
        `;
        topicElement.addEventListener('click', function() {
            const details = this.querySelector('.details');
            details.style.display = details.style.display === 'block' ? 'none' : 'block';
        });
        topicsContainer.appendChild(topicElement);
    });

    // Add click event listener to each course-item
    document.querySelectorAll('.course-item').forEach(courseItem => {
        courseItem.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event from bubbling up to parent
            const courseTitle = this.querySelector('h3').innerText;
            const course = findCourseByTitle(courseTitle);
            if (course) {
                window.open(course.url, '_blank');
            }
        });
    });
}

function findCourseByTitle(title) {
    for (let topic of topics) {
        for (let course of topic.courses) {
            if (course.title === title) {
                return course;
            }
        }
    }
    return null;
}

// Initially display all topics
displayTopics(topics);
