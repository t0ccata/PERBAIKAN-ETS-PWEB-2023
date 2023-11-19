$(document).ready(function () {
    $.ajax({
        url: 'https://api-berita-indonesia.vercel.app/antara/politik/',
        method: 'GET',
        success: function (response) {
            if (response.success) {
                displayData(response.data);
            }
        },
        error: function (error) {
            console.error("Error fetching data : ", error);
        }
    });

    function displayData(response) {
        let output = '';

        $.each(response.posts, function (key, post) {
            output += `
            <div class="col-md-4 mb-3 d-flex">
            <div class="card" style="width: 18rem;">
            <img src="${post.thumbnail}" class="card-img-top">
                <div class="card-body shadow d-flex flex-column">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text flex-grow-1 text-justify">${post.description}</p>
                    <a href="${post.link}" class="btn btn-danger mt-auto">Lihat Selengkapnya</a>
                </div>
            </div>
            </div>
            `;
        });
        $('#news-container').html(output);
    }
});