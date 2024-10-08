// interface ResumeData {
//     name: string;
//     email: string;
//     phone: string;
//     address: string;
//     about: string;
//     education: string;
//     skills: string[];
//     languages: string[];
//     fatherName: string;
//     nic: string;
//     nationality: string;
//     dob: string;
//     maritalStatus: string;
//     religion: string;
//     image: string | null; // Image URL
//     profession: string;
// }

// const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
// const resumeOutput = document.getElementById('resumeOutput') as HTMLElement;
// let skills: string[] = [];
// let languages: string[] = [];

// // Add a skill to the skills array
// document.getElementById('addSkillBtn')?.addEventListener('click', () => {
//     const skillInput = (document.getElementById('skillInput') as HTMLInputElement).value;
//     if (skillInput) {
//         skills.push(skillInput);
//         updateSkills();
//     }
// });

// // Add a language to the languages array
// document.getElementById('addLanguageBtn')?.addEventListener('click', () => {
//     const languageInput = (document.getElementById('languageInput') as HTMLInputElement).value;
//     if (languageInput) {
//         languages.push(languageInput);
//         updateLanguages();
//     }
// });


// // Function to update and display the list of skills
// function updateSkills() {
//     const skillsList = document.getElementById('skillsList') as HTMLElement;
//     skillsList.innerHTML = skills.map(skill => `<li>${skill}</li>`).join('');
// }

// // Function to update and display the list of languages
// function updateLanguages() {
//     const languagesList = document.getElementById('languagesList') as HTMLElement;
//     languagesList.innerHTML = languages.map(language => `<li>${language}</li>`).join('');
// }

// // Function to handle image upload and convert it to a base64 string
// function getImageUrl(imageInput: HTMLInputElement): Promise<string | null> {
//     return new Promise((resolve) => {
//         const file = imageInput.files ? imageInput.files[0] : null;
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => resolve(reader.result as string);
//             reader.readAsDataURL(file);
//         } else {
//             resolve(null);
//         }
//     });
// }

// resumeForm.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const imageInput = document.getElementById('image') as HTMLInputElement;
//     const imageBase64 = await getImageUrl(imageInput);
    

//     const resumeData: ResumeData = {
//         name: (document.getElementById('name') as HTMLInputElement).value,
//         email: (document.getElementById('email') as HTMLInputElement).value,
//         phone: (document.getElementById('phone') as HTMLInputElement).value,
//         address: (document.getElementById('address') as HTMLInputElement).value,
//         about: (document.getElementById('about') as HTMLTextAreaElement).value,
//         education: (document.getElementById('education') as HTMLInputElement).value,
//         skills: skills,
//         languages: languages,
//         fatherName: (document.getElementById('fatherName') as HTMLInputElement).value,
//         nic: (document.getElementById('nic') as HTMLInputElement).value,
//         nationality: (document.getElementById('nationality') as HTMLInputElement).value,
//         dob: (document.getElementById('dob') as HTMLInputElement).value,
//         maritalStatus: (document.getElementById('maritalStatus') as HTMLInputElement).value,
//         religion: (document.getElementById('religion') as HTMLInputElement).value,
//         image: imageBase64,
//         profession: (document.getElementById('profession') as HTMLInputElement).value
        
//     };
    

//     // Generate and display the resume
//     resumeOutput.innerHTML = `
//         <div class="resume">
//             <div class="left-panel">
//                 <div class="profile-section">
//                     ${resumeData.image ? `<img src="${resumeData.image}" alt="Profile Image" class="profile-img">` : ''}
//                     <h2><span id="edit-name" class="editable">${resumeData.name}</span> </h2>
//                     <p class="student">${resumeData.profession}</p>
//                     <p class="about"><span id="edit-about" class="editable">${resumeData.about}</span> </p>
//                 </div>

//                 <div class="contact-section">
//                     <h3>Contact Me</h3>
//                     <p>📞 <span id="edit-phone" class="editable">${resumeData.phone}</span> </p>
//                     <p>📧 <span id="edit-email" class="editable">${resumeData.email}</span> </p>
//                     <p>🏠 <span id="edit-address" class="editable">${resumeData.address}</span> </p>
//                 </div>
//             </div>

//             <div class="right-panel">
//                 <h3>Education</h3>
//                 <p id="edit-education" class="editable">${resumeData.education}</p>

//                 <h3>Languages</h3>
//                 <ul id="edit-languages" class="editable">${resumeData.languages.map(lang => `<li>${lang}</li>`).join('')}</ul>

//                 <h3>Skills</h3>
//                 <ul id="edit-skills" class="editable">${resumeData.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>

//                 <h3>Personal Profile</h3>
//                 <p id="edit-father-name" class="editable"><strong>Father's Name:</strong> ${resumeData.fatherName}</p>
//                 <p id="edit-nic" class="editable"><strong>NIC #:</strong> ${resumeData.nic}</p>
//                 <p id="edit-nationality" class="editable"><strong>Nationality:</strong> ${resumeData.nationality}</p>
//                 <p id="edit-dob" class="editable"><strong>DOB:</strong> ${resumeData.dob}</p>
//                 <p id="edit-status" class="editable"><strong>Marital Status:</strong> ${resumeData.maritalStatus}</p>
//                 <p id="edit-religion" class="editable"><strong>Religion:</strong> ${resumeData.religion}</p>
//             </div>
//             <button id="linkBtn">Copy Link</button>
//             <button id="Print">Print CV</button>
//         </div>
//     `;

//     makeEditAble();
// });

// function makeEditAble(){
//     const editableElements = document.querySelectorAll('.editable');
//     editableElements.forEach(element => {
//         element.addEventListener('click',function(){
//             const currentElement = element as HTMLElement;
//             const currentValue = currentElement.textContent || "";

//             // replace content
//             if(currentElement.tagName === "P" || currentElement.tagName === 'SPAN'){
//                 const input = document.createElement('input')
//                 input.type = 'text'
//                 input.value = currentValue
//                 input.classList.add('editing-input')


//                 input.addEventListener('blur', function(){
//                     currentElement.textContent = input.value;
//                     currentElement.style.display = 'inline'
//                     input.remove()
//                 })

//                 currentElement.style.display = 'none'
//                 currentElement.parentNode?.insertBefore(input, currentElement)
//                 input.focus()
//             }
//         })
//     })
// }

// function generateUniqueUrl(name: string): string {
//     const baseUrl = window.location.origin; // Get the base URL
//     return `${baseUrl}/resume/${encodeURIComponent(name)}`;
//   }
  
//   // After the user submits their resume, generate the unique URL:
//   resumeForm.addEventListener('submit', (e) => {
//     e.preventDefault();
  
//     const name = (document.getElementById('name') as HTMLInputElement).value; // Assuming username is input
//     const resumeUrl = generateUniqueUrl(name);
  
//     // Display or store the unique URL for sharing
//     document.getElementById('resumeLink')!.innerHTML = `<a href="${resumeUrl}" target="_blank">${resumeUrl}</a>`;
//   });
  
  
//   document.getElementById('copyLinkBtn')?.addEventListener('click', () => {
//     const link = document.getElementById('resumeLink')?.innerText;
//     if (link) {
//       navigator.clipboard.writeText(link).then(() => {
//         alert('Link copied to clipboard!');
//       });
//     }
//   });
  
  
//   document.getElementById('downloadPdfBtn')?.addEventListener('click', () => {
//     const resumeElement = document.getElementById('resumeOutput') as HTMLElement; // The resume container
  
//     function printCv (){
//       window.print(); 
//     } // Initialize jsPDF
//   })
  

// index.ts
// Define the interface for ResumeData
interface ResumeData {
    name: string;
    email: string;
    profession: string;
    phone: string;
    address: string;
    about: string;
    educations: string[];
    skills: string[];
    languages: string[];
    fatherName: string;
    nic: string;
    nationality: string;
    dob: string;
    maritalStatus: string;
    religion: string;
    imageUrl: string;
  }
  
  function generateResume(data: ResumeData) {
    const resumeOutput = document.getElementById('resumeOutput') as HTMLElement;
  
    const resumeHtml = `
       <div class="resume">
    <div class="left-panel">
        <div class="profile-section">
            <img src="${data.imageUrl}" alt="Profile Picture"/>
            <h3 class="heading">PROFILE</h3>
            <p class="about"><span id="edit-about" class="editable">${data.about}</span></p>
        </div>

        <div class="contact-section">
            <h3 class="heading">CONTACT ME</h3>
            <p><span id="edit-phone" class="editable">📞${data.phone}</span></p>
            <p> <span id="edit-email" class="editable">📧${data.email}</span></p>
            <p><span id="edit-address" class="editable">🏠${data.address}.</span></p>
        </div>

    </div>


    <div class="top-right-panel">
        <h1 class="name"><span id="edit-name" class="editable">${data.name}</span></h1>
            <h3 class="profession">${data.profession}</h3>
            <div></div>

            <div class="right-panel">
                <h3 class="heading">⮚ EDUCATION</h3>
                <ul>${Array.from(document.querySelectorAll('#educationList li'))
                .map(item => `<li id ="edit-education" class = "editable">${item.textContent?.replace('✖', '').trim()}</li>`)
                .join('')}</ul>
                
    
                <h3 class="heading">⮚ LANGUAGES</h3>
                <ul>${Array.from(document.querySelectorAll('#languagesList li'))
                .map(item => `<li id ="edit-languages" class ="editable">${item.textContent?.replace('✖', '').trim()}</li>`)
                .join('')}</ul>
                

                <h3 class="heading">⮚ SKILLS</h3>
                <ul>${Array.from(document.querySelectorAll('#skillsList li'))
                .map(item => `<li id = "edit-skills" class = "editable">${item.textContent?.replace('✖', '').trim()}</li>`)
                .join('')}</ul>
    
                <h3 class="heading">⮚ PERSONAL PROFILE</h3>
                <p id="edit-father-name" class="editable"><strong>Father's Name:</strong> ${data.fatherName}</p>
                <p id="edit-nic" class="editable"><strong>NIC #:</strong> ${data.nic}</p>
                <p id="edit-nationality" class="editable"><strong>Nationality:</strong> ${data.nationality}</p>
                <p id="edit-dob" class="editable"><strong>DOB:</strong> ${data.dob}</p>
                <p id="edit-status" class="editable"><strong>Marital Status:</strong> ${data.maritalStatus}</p>
                <p id="edit-religion" class="editable"><strong>Religion:</strong> ${data.religion}</p>
            </div>
    </div>


   </div>
   <div>
      <button id="printBtn">Print Resume</button>
      <button id="copyUrlBtn">Copy URL</button>
      </div>
    `;
  
    resumeOutput.innerHTML = resumeHtml;
  
    // Event listener to print the resume using window.print()
    const printBtn = document.getElementById('printBtn') as HTMLButtonElement;
    printBtn.addEventListener('click', () => {
      window.print();
    });
  
    // Event listener to copy the generated URL based on the user's name
    const copyUrlBtn = document.getElementById('copyUrlBtn') as HTMLButtonElement;
    copyUrlBtn.addEventListener('click', () => {
      const url = `${window.location.origin}/resume/${encodeURIComponent(data.name)}`;
      navigator.clipboard.writeText(url).then(() => {
        alert('URL copied to clipboard: ' + url);
      });
    });
  }
  
  // Form submission handling
  document.getElementById('resumeForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
  
    // Retrieving form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const profession = (document.getElementById('profession') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const about = (document.getElementById('about') as HTMLTextAreaElement).value;
    // const education = (document.getElementById('education') as HTMLInputElement).value;
    const fatherName = (document.getElementById('fatherName') as HTMLInputElement).value;
    const nic = (document.getElementById('nic') as HTMLInputElement).value;
    const nationality = (document.getElementById('nationality') as HTMLInputElement).value;
    const dob = (document.getElementById('dob') as HTMLInputElement).value;
    const maritalStatus = (document.getElementById('maritalStatus') as HTMLInputElement).value;
    const religion = (document.getElementById('religion') as HTMLInputElement).value;
  
    // Fetching skills and languages and educations
    const skills = Array.from(document.querySelectorAll('#skillsList li')).map(item => item.textContent ?? '');
    const languages = Array.from(document.querySelectorAll('#languagesList li')).map(item => item.textContent ?? '');
    const educations = Array.from(document.querySelectorAll('#educationList li')).map(item => item.textContent ?? '');
  
    // Handling image upload
    const imageInput = document.getElementById('image') as HTMLInputElement;
    const file = imageInput.files?.[0];
  
    if (!file) {
      alert("Please upload a picture.");
      return;
    }
  
    // Reading the image file
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageUrl = e.target?.result as string;
  
      // Create the resume data object
      const resumeData: ResumeData = {
        name,
        email,
        profession,
        phone,
        address,
        about,
        educations,
        skills,
        languages,
        fatherName,
        nic,
        nationality,
        dob,
        maritalStatus,
        religion,
        imageUrl
      };
  
      // Generate the resume
      generateResume(resumeData);
    };
  
    reader.readAsDataURL(file);
  });
  
  
  // Adding skill to the list

  document.getElementById('addSkillBtn')?.addEventListener('click', () => {
    const skillInput = document.getElementById('skillInput') as HTMLInputElement;
    const skillsList = document.getElementById('skillsList') as HTMLUListElement;
    
    if (skillInput.value.trim() !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = skillInput.value;
      
      // Create a delete button (cross sign)
      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = '✖'; // Cross sign
      deleteBtn.style.marginLeft = '10px'; // Add some space between text and the cross sign
      deleteBtn.style.cursor = 'pointer';  // Show pointer cursor for better UX 
  
      // Add click event to delete the list item when the cross is clicked
      deleteBtn.addEventListener('click', () => {
        skillsList.removeChild(listItem);
      });
      
      listItem.appendChild(deleteBtn);
      skillsList.appendChild(listItem);
      
      // Clear the input after adding the skill
      skillInput.value = '';
    }
  });
  
  // Adding language to the list
  document.getElementById('addLanguageBtn')?.addEventListener('click', () => {
    const languageInput = document.getElementById('languageInput') as HTMLInputElement;
    const languagesList = document.getElementById('languagesList') as HTMLUListElement;
  
    if (languageInput.value.trim() !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = languageInput.value;
      
      // Create a delete button (cross sign)
      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = '✖'; // Cross sign
      deleteBtn.style.marginLeft = '10px';
      deleteBtn.style.cursor = 'pointer';
  
      // Add click event to delete the list item
      deleteBtn.addEventListener('click', () => {
        languagesList.removeChild(listItem);
      });
      
      listItem.appendChild(deleteBtn);
      languagesList.appendChild(listItem);
      
      // Clear the input after adding the language
      languageInput.value = '';
    }
  });



  // Adding Education to the list
  document.getElementById('addEducationBtn')?.addEventListener('click', () => {
    const educationInput = document.getElementById('educationInput') as HTMLInputElement;
    const educationList = document.getElementById('educationList') as HTMLUListElement;
  
    if (educationInput.value.trim() !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = educationInput.value;
      
      // Create a delete button (cross sign)
      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = '✖'; // Cross sign
      deleteBtn.style.marginLeft = '10px';
      deleteBtn.style.cursor = 'pointer';
  
      // Add click event to delete the list item when cross is clicked
      deleteBtn.addEventListener('click', () => {
        educationList.removeChild(listItem);
      });
  
      listItem.appendChild(deleteBtn);
      educationList.appendChild(listItem);
  
      // Clear the input after adding the education
      educationInput.value = '';
    }
  });
  