// Watch screen Width
const tabScreenTo = window.matchMedia('(max-width: 992px)').matches;
const tabScreenFrom = window.matchMedia('(min-width: 576px)').matches;
const mobileScreen = window.matchMedia('(max-width: 576px)').matches;


// Hero Image
const heroImageContainer = document.getElementById('heroImageContainer');
const mentalScoreBtn = document.getElementById('mentalScoreBtn');

function heroimageTrasition() {
    heroImageContainer.style.top = "50%";
    heroImageContainer.style.opacity = "100%";

    setTimeout(() => {
        mentalScoreBtn.style.transform = "scale(1.3)";
    }, 1600)
    setTimeout(() => {
        mentalScoreBtn.style.transform = "scale(1)";
    }, 2000)
}

// Rising Your Mind
const risingYourMind = document.getElementById('risingYourMind');
const stat = document.getElementById('stat');
const progressbar = document.getElementById('progressbar');
function risingYourMindTrasition() {
    risingYourMind.style.left = "18.9%";
    risingYourMind.style.opacity = "100%";

    let count = 0;

    setTimeout(() => {
        const intervalId = setInterval(() => {
            count++;
            stat.innerText = `${count}% Done`;
            progressbar.style.width = `${count}%`;
            if (count == 70) clearInterval(intervalId);
        }, 20);
    }, 1500);
}

// depresssionCardContainer
const depresssionCardContainer = document.getElementById('depresssionCardContainer');
function depresssionCardTransition() {
    if (tabScreenFrom && tabScreenTo) {
        depresssionCardContainer.style.top = "68px";
    } else if (mobileScreen) {
        depresssionCardContainer.style.top = "90px";
    } else {
        depresssionCardContainer.style.top = "116px";
    }
    depresssionCardContainer.style.opacity = 1;


}

// Boosting Energy by 100% 
const boostingEnergyCardContainer = document.getElementById('boostingEnergyCardContainer');
const energyBar = document.getElementById('energyBar');
function boostingEnergyCardTransition() {
    boostingEnergyCardContainer.style.opacity = 1;
    boostingEnergyCardContainer.style.scale = 1;
    setTimeout(() => {
        energyBar.style.width = "100%";
    }, 800)
}

//  self-esteem 
const selfEsteemCardContainer = document.getElementById('selfEsteemCardContainer');
function selfEsteemCardTransition() {
    if (mobileScreen) {
        selfEsteemCardContainer.style.right = "21.9%";
    } else {
        selfEsteemCardContainer.style.right = "17.9%";
    }
    selfEsteemCardContainer.style.opacity = 1;
}

// Anxity
const anxityCardContainer = document.getElementById('anxityCardContainer');
function anxityCardTransition() {
    if (mobileScreen) {
        anxityCardContainer.style.left = "16%";
    } else {
        anxityCardContainer.style.left = "24.6%";
    }
    anxityCardContainer.style.opacity = 1;
}


//  Companion 
const companionCardContainer = document.getElementById('companionCardContainer');
function companionCardTransition() {
    companionCardContainer.style.right = "23.3%";
    companionCardContainer.style.opacity = 1;
}


// Hyper-active disorder
const hyperActiveCardContainer = document.getElementById('hyperActiveCardContainer');
function hyperActiveCardTransition() {
    if (tabScreenFrom && tabScreenTo) {
        hyperActiveCardContainer.style.bottom = "95px";
    } else if (mobileScreen) {
        hyperActiveCardContainer.style.bottom = "20px";
    } else {
        hyperActiveCardContainer.style.bottom = "157px";
    }
    hyperActiveCardContainer.style.opacity = 1;
}


//  Anger Issue 
const angerIssueCardContainer = document.getElementById('angerIssueCardContainer');
function angerIssueCardTransition() {
    if (tabScreenFrom && tabScreenTo) {
        angerIssueCardContainer.style.bottom = "110px";
    } else if (mobileScreen) {
        angerIssueCardContainer.style.bottom = "48px";
    } else {
        angerIssueCardContainer.style.bottom = "192px";
    }
    angerIssueCardContainer.style.opacity = 1;
}



heroimageTrasition();
risingYourMindTrasition();
depresssionCardTransition();
boostingEnergyCardTransition();
selfEsteemCardTransition();
anxityCardTransition();
companionCardTransition();
hyperActiveCardTransition();
angerIssueCardTransition();