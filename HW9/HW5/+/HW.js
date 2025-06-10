let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const coursesContainer = document.getElementById('coursesContainer');

coursesArray.forEach(course => {
    const courseBlock = document.createElement('div');
    courseBlock.classList.add('course-block');

    const titleBlock = document.createElement('div');
    titleBlock.classList.add('property-block');
    titleBlock.innerHTML = `<strong>Name of the course:</strong> ${course.title}`;
    courseBlock.appendChild(titleBlock);

    const monthDurationBlock = document.createElement('div');
    monthDurationBlock.classList.add('property-block');
    monthDurationBlock.innerHTML = `<strong>Duration (months):</strong> ${course.monthDuration}`;
    courseBlock.appendChild(monthDurationBlock);

    const hourDurationBlock = document.createElement('div');
    hourDurationBlock.classList.add('property-block');
    hourDurationBlock.innerHTML = `<strong>Duration (hours):</strong> ${course.hourDuration}`;
    courseBlock.appendChild(hourDurationBlock);

    const modulesBlock = document.createElement('div');
    modulesBlock.classList.add('property-block');
    const modulesTitle = document.createElement('strong');
    modulesTitle.textContent = 'Modules:';
    modulesBlock.appendChild(modulesTitle);

    const modulesList = document.createElement('ul');
    modulesList.classList.add('modules-list');
    course.modules.forEach(module => {
        const listItem = document.createElement('li');
        listItem.textContent = module;
        modulesList.appendChild(listItem);
    });
    modulesBlock.appendChild(modulesList);
    courseBlock.appendChild(modulesBlock);

    coursesContainer.appendChild(courseBlock);
});