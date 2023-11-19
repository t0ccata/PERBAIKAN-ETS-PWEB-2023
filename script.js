$document.ready(function(){
    $.ajax({
        url: 'https://api-berita-indonesia.vercel.app/antara/politik/',
        method: 'GET',
        success: function(response){
            if (response.success) {
                displayData(response.data.posts);
            }
        },
        error: function(error){
            console.error("Error fetching data : ", error);
        }
    });

    function displayData(posts){
        let output = '';

        $.each(posts, function(key, post){
            output += `
            <div class="col-md-4 mb-3 d-flex">
                <div class="card flex-fill">
                    <img src="${post.thumbnail}" alt="" class="card-img-top">
                </div>
                <div class="card-body shadow d-flex flex-column">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text flex-grow-1 text-justify">${post.description}</p>
                    <a href="${post.link}" class="btn btn-danger mt-auto">Lihat Selengkapnya</a>
                </div>
            </div>
            `;
        });
        $('#news-container').html(output);
    }
});