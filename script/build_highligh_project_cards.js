var rawFile = new XMLHttpRequest();
rawFile.open("GET", './projects/projects_data.csv', false);
rawFile.onreadystatechange = function () {
    if(rawFile.readyState === 4)  {
        if(rawFile.status === 200 || rawFile.status == 0) {
            var allText = rawFile.responseText;
            var data = $.csv.toObjects(allText)
            // console.log(data)
            
            data.forEach(row => {
                if (row['Highlight'] == 'Yes'){
                    console.log(row)
                    const p_id =  row['Name'].replaceAll(' ', '_')
    
                    // Basic structure
                    $("#projects .container .cards").append('<div class="col-lg-4 mt-4" id="project_' + p_id + '"><div class="card"><div class="card-image"></div><div class="card-body"></div></div></div>')
    
                    // Image
                    $("#projects .container .cards #project_" + p_id + " .card-image").append('<img src="' + '/projects/images/' + row['Image'] + '" alt="' + row['Name'] + ' illustration' + '">')
    
                    // Body
                    $("#projects .container .cards #project_" + p_id + " .card-body").append('<h4 class="card-title">' + row['Name'] + '</h4>')
                    $("#projects .container .cards #project_" + p_id + " .card-body").append('<p class="card-text">' + row['ShortDescription'] + '</p>')
                    $("#projects .container .cards #project_" + p_id + " .card-body").append('<div class="text-center"><a href="/projects/#project_' + p_id + '" class="btn">More Details</a></div>')
                    $("#projects .container .cards #project_" + p_id + " .card-body div").append('<a href="' + row['Github'] + '" class="btn"><i class="bi bi-github"></i></a>')

                }
            });
        }
    }
}
rawFile.send(null);