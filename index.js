$(document).ready(function(){

    getNotes();
})

$("#noteForm").submit(function(event)
{
    var data = {
      title:$("#title").val(),
      body:$("#body").val()  
    };
    addNote(data);
})

function getNotes()
{
    $.get("https://vast-reaches-09034.herokuapp.com/getAllNotes", function(data,status)
    {
         $("#itemsContainer").empty();
        data.forEach(element => 
        {
           $("#itemsContainer").append("<div class= col-sm-4><div class='card shadow mt-4'><div class='card-body'><h5 class='card-title'>"+element.title+"</h5><p class='card-text'>"+element.body+"</p></div></div></div>"); 
           console.log(element)

        });
    });
}

function addNote(data)
{
    console.log("attempting to add note");
    $.post("https://vast-reaches-09034.herokuapp.com/addNote", data);

}


