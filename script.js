// 
$('#movie-list').html('');

    $.ajax({
        url: 'http://omdbapi.com',
        type: 'GET',
        dataType: 'json', //bentuk kembalian nya mau apa
        data: {
            'apikey': '2c392080',
            's': "harry potter" //apapun yang diketik ambil value nya
        },
        success: function (result){
            // console.log(result);
            if (result.Response == "True") {
                let movies = result.Search;

                $.each(movies, function (index, data) {
                    $('#movie-list').append(`
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <img src="`+ data.Poster +`" class="card-img-top">
                            <div class="card-body">
                            <h5 class="card-title">`+ data.Title +`</h5>
                            <h6 class="card-subtitle mb-2 text-muted">`+ data.Year +`</h6>
                            <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="`+ data.imdbID +`">See Detail</a>
                            </div>
                        </div>
                    </div>
                    `);
                })

                $('#search-input').val('');

            } else {
                $('#movie-list').html(`
                    <div class="col">
                        <h1 class="text-center">`+ result.Error +`</h1>
                    </div>
                `);
            }
        }
    })