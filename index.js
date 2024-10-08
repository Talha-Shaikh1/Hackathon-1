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
var _a, _b, _c, _d;
function generateResume(data) {
    var resumeOutput = document.getElementById('resumeOutput');
    var resumeHtml = "\n       <div class=\"resume\">\n    <div class=\"left-panel\">\n        <div class=\"profile-section\">\n            <img src=\"".concat(data.imageUrl, "\" alt=\"Profile Picture\"/>\n            <h3 class=\"heading\">PROFILE</h3>\n            <p class=\"about\"><span id=\"edit-about\" class=\"editable\">").concat(data.about, "</span></p>\n        </div>\n\n        <div class=\"contact-section\">\n            <h3 class=\"heading\">CONTACT ME</h3>\n            <p><span id=\"edit-phone\" class=\"editable\">\uD83D\uDCDE").concat(data.phone, "</span></p>\n            <p> <span id=\"edit-email\" class=\"editable\">\uD83D\uDCE7").concat(data.email, "</span></p>\n            <p><span id=\"edit-address\" class=\"editable\">\uD83C\uDFE0").concat(data.address, ".</span></p>\n        </div>\n\n    </div>\n\n\n    <div class=\"top-right-panel\">\n        <h1 class=\"name\"><span id=\"edit-name\" class=\"editable\">").concat(data.name, "</span></h1>\n            <h3 class=\"profession\">").concat(data.profession, "</h3>\n            <div></div>\n\n            <div class=\"right-panel\">\n                <h3 class=\"heading\">\u2B9A EDUCATION</h3>\n                <ul>").concat(Array.from(document.querySelectorAll('#educationList li'))
        .map(function (item) { var _a; return "<li id =\"edit-education\" class = \"editable\">".concat((_a = item.textContent) === null || _a === void 0 ? void 0 : _a.replace('✖', '').trim(), "</li>"); })
        .join(''), "</ul>\n                \n    \n                <h3 class=\"heading\">\u2B9A LANGUAGES</h3>\n                <ul>").concat(Array.from(document.querySelectorAll('#languagesList li'))
        .map(function (item) { var _a; return "<li id =\"edit-languages\" class =\"editable\">".concat((_a = item.textContent) === null || _a === void 0 ? void 0 : _a.replace('✖', '').trim(), "</li>"); })
        .join(''), "</ul>\n                \n\n                <h3 class=\"heading\">\u2B9A SKILLS</h3>\n                <ul>").concat(Array.from(document.querySelectorAll('#skillsList li'))
        .map(function (item) { var _a; return "<li id = \"edit-skills\" class = \"editable\">".concat((_a = item.textContent) === null || _a === void 0 ? void 0 : _a.replace('✖', '').trim(), "</li>"); })
        .join(''), "</ul>\n    \n                <h3 class=\"heading\">\u2B9A PERSONAL PROFILE</h3>\n                <p id=\"edit-father-name\" class=\"editable\"><strong>Father's Name:</strong> ").concat(data.fatherName, "</p>\n                <p id=\"edit-nic\" class=\"editable\"><strong>NIC #:</strong> ").concat(data.nic, "</p>\n                <p id=\"edit-nationality\" class=\"editable\"><strong>Nationality:</strong> ").concat(data.nationality, "</p>\n                <p id=\"edit-dob\" class=\"editable\"><strong>DOB:</strong> ").concat(data.dob, "</p>\n                <p id=\"edit-status\" class=\"editable\"><strong>Marital Status:</strong> ").concat(data.maritalStatus, "</p>\n                <p id=\"edit-religion\" class=\"editable\"><strong>Religion:</strong> ").concat(data.religion, "</p>\n            </div>\n    </div>\n\n\n   </div>\n   <div>\n      <button id=\"printBtn\">Print Resume</button>\n      <button id=\"copyUrlBtn\">Copy URL</button>\n      </div>\n    ");
    resumeOutput.innerHTML = resumeHtml;
    // Event listener to print the resume using window.print()
    var printBtn = document.getElementById('printBtn');
    printBtn.addEventListener('click', function () {
        window.print();
    });
    // Event listener to copy the generated URL based on the user's name
    var copyUrlBtn = document.getElementById('copyUrlBtn');
    copyUrlBtn.addEventListener('click', function () {
        var url = "".concat(window.location.origin, "/resume/").concat(encodeURIComponent(data.name));
        navigator.clipboard.writeText(url).then(function () {
            alert('URL copied to clipboard: ' + url);
        });
    });
}
// Form submission handling
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Retrieving form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var profession = document.getElementById('profession').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var about = document.getElementById('about').value;
    // const education = (document.getElementById('education') as HTMLInputElement).value;
    var fatherName = document.getElementById('fatherName').value;
    var nic = document.getElementById('nic').value;
    var nationality = document.getElementById('nationality').value;
    var dob = document.getElementById('dob').value;
    var maritalStatus = document.getElementById('maritalStatus').value;
    var religion = document.getElementById('religion').value;
    // Fetching skills and languages and educations
    var skills = Array.from(document.querySelectorAll('#skillsList li')).map(function (item) { var _a; return (_a = item.textContent) !== null && _a !== void 0 ? _a : ''; });
    var languages = Array.from(document.querySelectorAll('#languagesList li')).map(function (item) { var _a; return (_a = item.textContent) !== null && _a !== void 0 ? _a : ''; });
    var educations = Array.from(document.querySelectorAll('#educationList li')).map(function (item) { var _a; return (_a = item.textContent) !== null && _a !== void 0 ? _a : ''; });
    // Handling image upload
    var imageInput = document.getElementById('image');
    var file = (_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (!file) {
        alert("Please upload a picture.");
        return;
    }
    // Reading the image file
    var reader = new FileReader();
    reader.onload = function (e) {
        var _a;
        var imageUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        // Create the resume data object
        var resumeData = {
            name: name,
            email: email,
            profession: profession,
            phone: phone,
            address: address,
            about: about,
            educations: educations,
            skills: skills,
            languages: languages,
            fatherName: fatherName,
            nic: nic,
            nationality: nationality,
            dob: dob,
            maritalStatus: maritalStatus,
            religion: religion,
            imageUrl: imageUrl
        };
        // Generate the resume
        generateResume(resumeData);
    };
    reader.readAsDataURL(file);
});
// Adding skill to the list
(_b = document.getElementById('addSkillBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var skillInput = document.getElementById('skillInput');
    var skillsList = document.getElementById('skillsList');
    if (skillInput.value.trim() !== '') {
        var listItem_1 = document.createElement('li');
        listItem_1.textContent = skillInput.value;
        // Create a delete button (cross sign)
        var deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '✖'; // Cross sign
        deleteBtn.style.marginLeft = '10px'; // Add some space between text and the cross sign
        deleteBtn.style.cursor = 'pointer'; // Show pointer cursor for better UX 
        // Add click event to delete the list item when the cross is clicked
        deleteBtn.addEventListener('click', function () {
            skillsList.removeChild(listItem_1);
        });
        listItem_1.appendChild(deleteBtn);
        skillsList.appendChild(listItem_1);
        // Clear the input after adding the skill
        skillInput.value = '';
    }
});
// Adding language to the list
(_c = document.getElementById('addLanguageBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var languageInput = document.getElementById('languageInput');
    var languagesList = document.getElementById('languagesList');
    if (languageInput.value.trim() !== '') {
        var listItem_2 = document.createElement('li');
        listItem_2.textContent = languageInput.value;
        // Create a delete button (cross sign)
        var deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '✖'; // Cross sign
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.style.cursor = 'pointer';
        // Add click event to delete the list item
        deleteBtn.addEventListener('click', function () {
            languagesList.removeChild(listItem_2);
        });
        listItem_2.appendChild(deleteBtn);
        languagesList.appendChild(listItem_2);
        // Clear the input after adding the language
        languageInput.value = '';
    }
});
// Adding Education to the list
(_d = document.getElementById('addEducationBtn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
    var educationInput = document.getElementById('educationInput');
    var educationList = document.getElementById('educationList');
    if (educationInput.value.trim() !== '') {
        var listItem_3 = document.createElement('li');
        listItem_3.textContent = educationInput.value;
        // Create a delete button (cross sign)
        var deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '✖'; // Cross sign
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.style.cursor = 'pointer';
        // Add click event to delete the list item when cross is clicked
        deleteBtn.addEventListener('click', function () {
            educationList.removeChild(listItem_3);
        });
        listItem_3.appendChild(deleteBtn);
        educationList.appendChild(listItem_3);
        // Clear the input after adding the education
        educationInput.value = '';
    }
});
