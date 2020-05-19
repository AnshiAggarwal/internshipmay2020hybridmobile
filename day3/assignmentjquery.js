$(document).ready(function(){
    
    $("#square").click(function(){
        n=parseInt($("#num").val());
        sq=n*n;
        $("#result").val(sq);
    }  
    );

    $("#cube").click(function(){
        n=parseInt($("#num").val());
        cube=n*n*n;
        $("#result").val(cube);
    }  
    );
});