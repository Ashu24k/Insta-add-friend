var addfriend = document.querySelector(".yes")
var removefriend = document.querySelector(".no")
var flag = 0

addfriend.addEventListener("click",function(){
    if(flag == 0){
    alert('Added to following')
    addfriend.style.backgroundColor = "hotpink"
    addfriend.innerHTML = "Following"
    removefriend.innerHTML = "Message"
    flag = 1
    }else{
    alert('Removed from following')
    addfriend.style.backgroundColor = "deeppink"
    addfriend.innerHTML = "Follow"
    removefriend.innerHTML = "Ignore"
    flag = 0
    }
})

var flag2 = 2

removefriend.addEventListener("click",function(){
    if(flag2 == 2){
    removefriend.innerHTML = "Ignored"
    flag2 = 3
    }else{
    removefriend.innerHTML = "Ignore"
    flag2 = 2
    }
})