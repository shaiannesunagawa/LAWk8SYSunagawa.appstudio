var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
    for (i = 0; i < exercises.length; i++) 
    selExercises.addItem(exercises[i])
    
    for (i = 0; i < coreExercises.length; i++) 
    selExercises.addItem(coreExercises[i])
}

btnSelection.onclick=function(){
    if (selExercises.text == coreExercises)
        lblAnswer.value = 'You chose situps and planks - those are the two core exercises.' 
    else
        lblAnswer.value = 'You did not pick the two core exercises.'
}

btnNextPage.onclick=function(){
  ChangeForm(mobileNav)
}
