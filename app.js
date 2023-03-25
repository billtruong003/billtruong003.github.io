// Sort the project and featured project lists by height
const sortProjectListByHeight = (projectList) => {
    const sortedProjectList = Array.from(projectList).sort((a, b) => a.offsetHeight - b.offsetHeight);
  
    // Clear the original unsorted elements from the container
    const projectContainer = document.querySelector('#projects .project-list');
    projectContainer.innerHTML = '';
  
    // Append the sorted elements to the container
    sortedProjectList.forEach(element => {
      projectContainer.appendChild(element);
    });
  };
  
  const sortFeaturedProjectListByHeight = (featuredProjectList) => {
    const sortedFeaturedProjectList = Array.from(featuredProjectList).sort((a, b) => a.offsetHeight - b.offsetHeight);
  
    // Clear the original unsorted elements from the container
    const featuredProjectContainer = document.querySelector('#featured-projects .featured-project-list');
    featuredProjectContainer.innerHTML = '';
  
    // Append the sorted elements to the container
    sortedFeaturedProjectList.forEach(element => {
      featuredProjectContainer.appendChild(element);
    });
  };
  
  // Sort the project and featured project lists on page load and on window resize
  window.addEventListener('load', () => {
    const projectList = document.querySelectorAll('.project');
    const featuredProjectList = document.querySelectorAll('.featured-project');
  
    sortProjectListByHeight(projectList);
    sortFeaturedProjectListByHeight(featuredProjectList);
  });
  
  window.addEventListener('resize', () => {
    const projectList = document.querySelectorAll('.project');
    const featuredProjectList = document.querySelectorAll('.featured-project');
  
    sortProjectListByHeight(projectList);
    sortFeaturedProjectListByHeight(featuredProjectList);
  });
  
  // Toggle dark mode on/off
  const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');
  toggleSwitch.addEventListener('change', () => {
    const body = document.querySelector('body');
  
    if (toggleSwitch.checked) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  });
  