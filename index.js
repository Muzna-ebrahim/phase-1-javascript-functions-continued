// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function  mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(wrapper = "%" ) {
    return function (adjective = "a dedicated programmer"){
        return `You are ${wrapper}${adjective}${wrapper}!` 
    }
    

}

    
