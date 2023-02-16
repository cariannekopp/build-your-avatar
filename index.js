const displayAvatarFace = document.getElementById('avatar-display-face')
const displayAvatarColor = document.getElementsByClassName('avatar-display')
const displayAvatarHair = document.getElementById('avatar-display-hair')
const displayAvatarEyes = document.getElementById('avatar-display-eyes')
const displayAvatarSmiles = document.getElementById('avatar-display-smiles')
const displayAvatarAccessory = document.getElementById('avatar-display-accessory')
const facesSelection = document.getElementById('faces')
const hairSelection = document.getElementById('hair')


document.getElementById('faces-nav').addEventListener('click', updateAvatarEditDisplay)
document.getElementById('background-color-nav').addEventListener('click', updateAvatarEditDisplay)
document.getElementById('hair-nav').addEventListener('click', updateAvatarEditDisplay)
document.getElementById('eyes-nav').addEventListener('click', updateAvatarEditDisplay)
document.getElementById('smiles-nav').addEventListener('click', updateAvatarEditDisplay)
document.getElementById('accessories-nav').addEventListener('click', updateAvatarEditDisplay)

function updateAvatarEditDisplay(event) {
    let selectedNavId = event.target.id
    let sectionIds = document.getElementsByClassName('edit-avatar-options-container')[0].children
    let i;
    for(i = 0; i < sectionIds.length; i++) {
        let elem = document.getElementById(sectionIds[i].id)
        elem.style.display = "none"
    }

    let activeNav = document.getElementById(selectedNavId).id

    switch(activeNav) {
        case 'faces-nav':
            var activeSection = document.getElementById('faces')
            activeSection.style.display = "flex"
            var editAvatarContainer = document.getElementsByClassName('edit-avatar-options-container')
            editAvatarContainer[0].style.width = "40%";
            break;
        case 'background-color-nav':
            var activeSection = document.getElementById('background-color')
            activeSection.style.display = "flex"
            var editAvatarContainer = document.getElementsByClassName('edit-avatar-options-container')
            editAvatarContainer[0].style.width = "43%";
            break;
        case 'hair-nav':
            var activeSection = document.getElementById('hair')
            activeSection.style.display = "flex"
            var editAvatarContainer = document.getElementsByClassName('edit-avatar-options-container')
            editAvatarContainer[0].style.width = "50%";
            break;
        case 'eyes-nav':
            var activeSection = document.getElementById('eyes')
            activeSection.style.display = "flex"
            var editAvatarContainer = document.getElementsByClassName('edit-avatar-options-container')
            editAvatarContainer[0].style.width = "43%";
            break;
        case 'smiles-nav':
            var activeSection = document.getElementById('smiles')
            activeSection.style.display = "flex"
            var editAvatarContainer = document.getElementsByClassName('edit-avatar-options-container')
            editAvatarContainer[0].style.width = "43%";
            break;
        case 'accessories-nav':
            var activeSection = document.getElementById('accessories')
            activeSection.style.display = "flex"
            var editAvatarContainer = document.getElementsByClassName('edit-avatar-options-container')
            editAvatarContainer[0].style.width = "43%";
            break;
        default:
            throw error("something went wrong")
    }
}


document.getElementById('face1').addEventListener('click', updateAvatarFace)
document.getElementById('face2').addEventListener('click', updateAvatarFace)
document.getElementById('face3').addEventListener('click', updateAvatarFace)
document.getElementById('face4').addEventListener('click', updateAvatarFace)
document.getElementById('face5').addEventListener('click', updateAvatarFace)
document.getElementById('face6').addEventListener('click', updateAvatarFace)
document.getElementById('face7').addEventListener('click', updateAvatarFace)
document.getElementById('face8').addEventListener('click', updateAvatarFace)

function updateAvatarFace(event) {
    let face = event.srcElement.src
    displayAvatarFace.src = face
}

document.getElementById('light-purple').addEventListener('click', updateAvatarBackgroundColor)
document.getElementById('light-blue').addEventListener('click', updateAvatarBackgroundColor)
document.getElementById('torquoise').addEventListener('click', updateAvatarBackgroundColor)
document.getElementById('light-pink').addEventListener('click', updateAvatarBackgroundColor)
document.getElementById('purple').addEventListener('click', updateAvatarBackgroundColor)
document.getElementById('green').addEventListener('click', updateAvatarBackgroundColor)
document.getElementById('yellow').addEventListener('click', updateAvatarBackgroundColor)
document.getElementById('light-orange').addEventListener('click', updateAvatarBackgroundColor)

function updateAvatarBackgroundColor(event) {
    let backgroundColor = event.srcElement.style.backgroundColor
    console.log(backgroundColor, displayAvatarColor)
    displayAvatarColor[0].style.backgroundColor = backgroundColor
}

document.getElementById('dreads').addEventListener('click', updateAvatarHair)
document.getElementById('bowl').addEventListener('click', updateAvatarHair)
document.getElementById('braids').addEventListener('click', updateAvatarHair)
document.getElementById('bun').addEventListener('click', updateAvatarHair)
document.getElementById('curly-short-hair').addEventListener('click', updateAvatarHair)
document.getElementById('fluffy-bun').addEventListener('click', updateAvatarHair)
document.getElementById('half-shaved-head').addEventListener('click', updateAvatarHair)
document.getElementById('mohawk').addEventListener('click', updateAvatarHair)
document.getElementById('shaved-head').addEventListener('click', updateAvatarHair)
document.getElementById('short-hair').addEventListener('click', updateAvatarHair)
document.getElementById('short-straight-bangs').addEventListener('click', updateAvatarHair)
document.getElementById('short-straight').addEventListener('click', updateAvatarHair)
document.getElementById('short-wavy').addEventListener('click', updateAvatarHair)
document.getElementById('wavy-bob').addEventListener('click', updateAvatarHair)


function updateAvatarHair(event) {
    let hair = event.srcElement.src
    console.log(hair)
    displayAvatarHair.src = hair

}

document.getElementById('angry').addEventListener('click', updateAvatarEyes)
document.getElementById('cheery').addEventListener('click', updateAvatarEyes)
document.getElementById('confused').addEventListener('click', updateAvatarEyes)
document.getElementById('regular').addEventListener('click', updateAvatarEyes)
document.getElementById('sad').addEventListener('click', updateAvatarEyes)
document.getElementById('sleepy').addEventListener('click', updateAvatarEyes)
document.getElementById('starstruck').addEventListener('click', updateAvatarEyes)
document.getElementById('wink').addEventListener('click', updateAvatarEyes)

function updateAvatarEyes(event) {
    let eyes = event.srcElement.src
    console.log(eyes)
    displayAvatarEyes.src = eyes
}

document.getElementById('awkward').addEventListener('click', updateAvatarSmiles)
document.getElementById('braces').addEventListener('click', updateAvatarSmiles)
document.getElementById('cat').addEventListener('click', updateAvatarSmiles)
document.getElementById('gap').addEventListener('click', updateAvatarSmiles)
document.getElementById('open-sad').addEventListener('click', updateAvatarSmiles)
document.getElementById('open-smile').addEventListener('click', updateAvatarSmiles)
document.getElementById('teeth').addEventListener('click', updateAvatarSmiles)
document.getElementById('unimpressed').addEventListener('click', updateAvatarSmiles)

function updateAvatarSmiles(event) {
    let smile = event.srcElement.src
    console.log(smile)
    displayAvatarSmiles.src = smile
}


document.getElementById('cat-ears').addEventListener('click', updateAvatarAccessory)
document.getElementById('clown-nose').addEventListener('click', updateAvatarAccessory)
document.getElementById('face-mask').addEventListener('click', updateAvatarAccessory)
document.getElementById('glasses').addEventListener('click', updateAvatarAccessory)
document.getElementById('mustache').addEventListener('click', updateAvatarAccessory)
document.getElementById('sailor-moon').addEventListener('click', updateAvatarAccessory)
document.getElementById('sleeping-mask').addEventListener('click', updateAvatarAccessory)
document.getElementById('sunglasses').addEventListener('click', updateAvatarAccessory)

function updateAvatarAccessory(event) {
    let accessory = event.srcElement.src
    console.log(accessory)
    displayAvatarAccessory.src = accessory
}