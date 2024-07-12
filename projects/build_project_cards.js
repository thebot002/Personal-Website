

var rawFile = new XMLHttpRequest();
rawFile.open("GET", 'projects_data.csv', false);
rawFile.onreadystatechange = function () {
    if(rawFile.readyState === 4)  {
        if(rawFile.status === 200 || rawFile.status == 0) {
            var allText = rawFile.responseText;
            // console.log(allText);
            var data = $.csv.toObjects(allText)
            // console.log(data)
            
            data.forEach(row => {
                const p_id =  row['Name'].replaceAll(' ', '_')

                $("#project_cards div.container").append('<div class="card row mt-2" id="project_' + p_id + '"></div>')

                $("#project_" + p_id).append('<div class="col-lg-4 card-margin"></div>')
                $("#project_" + p_id).append('<div class="col-lg-8 card-content"></div>')

                // Column
                $("#project_" + p_id + " div.card-margin").append('<div class="card-image"><img src="' + row['Image'] + '" alt="' + row['Name'] + ' illustration' + '"></div>')
                
                // Tags
                const tags = row['Tags'].split(" ")
                console.log(tags)
                
                $("#project_" + p_id + " div.card-margin").append('<div class="card-tags"></div>')
                tags.forEach(tag => {
                    $("#project_" + p_id + " div.card-margin div.card-tags").append('<div class="tag">' + tag + '</div>')
                })

                // Content
                $("#project_" + p_id + " div.card-content").append('<h2>' + row['Name'] + '</h2>')
                $("#project_" + p_id + " div.card-content").append('<p>' + row['FullDescription'] + '</p>')
                $("#project_" + p_id + " div.card-content").append('<div class="text-center"><a href="' + row['Github'] + '" class="btn"><i class="bi bi-github"></i> Github Link</a></div>')


            });

            


        }
    }
}
rawFile.send(null);