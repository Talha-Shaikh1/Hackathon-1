var _a, _b;
var skills = [];
var languages = [];
(_a = document.getElementById('addSkillBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var skillInput = document.getElementById('skillInput').value;
    if (skillInput) {
        skills.push(skillInput);
        updateSkills();
    }
});
(_b = document.getElementById('addLanguageBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var languageInput = document.getElementById('languageInput').value;
    if (languageInput) {
        languages.push(languageInput);
        updateLanguages();
    }
});
function updateLanguages() {
    var languageList = document.getElementById('languagesList');
    languageList.innerHTML = languages.map(function (language) { return "<li>".concat(language, "</li>"); }).join('');
}
function updateSkills() {
    var skillsList = document.getElementById('skillsList');
    skillsList.innerHTML = skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join('');
}
