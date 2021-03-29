rdoTraits.onchange=function(){
    let userChoice = $("input[name=rdoTraits]:checked").prop("value")
    lblTraitMessage.value = ` I would agree that you are a '${userChoice}' person too!`
}

btnNextForm.onclick=function(){
  ChangeForm(favExercises)
}
