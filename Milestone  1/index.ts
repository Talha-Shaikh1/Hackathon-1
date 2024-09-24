let skills : string[] = [];
let languages : string[] = [];

document.getElementById('addSkillBtn')?.addEventListener('click', () =>{
    const skillInput = (document.getElementById('skillInput') as HTMLInputElement).value;
    if (skillInput){
        skills.push(skillInput)
        updateSkills()
    }
} );

document.getElementById('addLanguageBtn')?.addEventListener('click', () =>{
    const languageInput = (document.getElementById('languageInput') as HTMLInputElement).value;
    if(languageInput){
        languages.push(languageInput);
        updateLanguages()
    }
})




function updateLanguages(){
    const languageList = document.getElementById('languagesList') as HTMLElement;
    languageList.innerHTML = languages.map(language => `<li>${language}</li>`).join('');
}

function updateSkills(){
    const  skillsList = document.getElementById('skillsList') as HTMLElement;
    skillsList.innerHTML = skills.map(skill => `<li>${skill}</li>`).join('');
}

