$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray(); // passes all the info to an array 
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://127.0.0.1:3000/api/users/${data.id}`,   // test for heroku
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

if(window.location.pathname == "/"){      // this section uses a delete method request through ajax
    $ondelete = $(".table tbody td a.delete"); // this locates the anchor tag where we grabbed the ID
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://127.0.0.1:3000/api/users/${id}`,   // test for heroku
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}