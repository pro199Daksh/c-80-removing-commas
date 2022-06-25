var student_array= [];
var display_array=[];
function submit(){
    for(i=1;i<=4;i++ ){
        var name= document.getElementById("name_of_the_student_"+i).value;
        student_array.push(name)
    }
    var length= student_array.length;
    for(k=0;k<length;k++){
        display_array.push("<h4>Name - "+student_array[k]+"</h4>" )
    } 
    document.getElementById("display_name_with_commas").innerHTML=display_array;
    var remove_comas= display_array.join(" ")
    document.getElementById("display_name_without_commas").innerHTML= remove_comas;
    document.getElementById("submit_button").style.display= "none";
    document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
    display_array=[];
    student_array.sort()
    var length= student_array.length;
    for(k=0;k<length;k++){
        display_array.push("<h4>Name - "+student_array[k]+"</h4>" )
    } 
    document.getElementById("display_name_with_commas").innerHTML=display_array;
    var remove_comas= display_array.join(" ")
    document.getElementById("display_name_without_commas").innerHTML= remove_comas;
}



