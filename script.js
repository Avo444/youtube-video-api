


// async function getVideos() {
//     news_slider.innerHTML = ""
//     let query = document.getElementById("query").value.split(" ").join("+");

//     const url = 'https://youtube-search-results.p.rapidapi.com/youtube-search/?q='+query;    
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '6760e82387mshf4392c476e99b63p196425jsn26c45c9781a8',
//             'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
//         }
//     };
//     fetch(url, options).then((response) => response.json())
//     .then((result) => {
//         let videos = result.items.filter((i) => i.type == "video")
//         correntQuery.innerText = result.correctedQuery;
        
//         videos.map((video) => {
//             news_slider.innerHTML +=
//             `
//             <div class="post-slide">
//               <div class="post-img">
//                 <img src="${video.bestThumbnail.url}" alt="">
//                 <a href="${video.url}" class="over-layer"><i class="fa fa-link"></i></a>
//               </div>
//               <div class="post-content">
//                 <h3 class="post-title">
//                   <a href="#">${video.title}.</a>
//                 </h3>        
//                 <span class="post-date"><i class="fa fa-clock-o"></i>${video.uploadedAt}</span>
//                 <a href="#" class="read-more">read more</a>
//               </div>
//             </div>
//             `
//         })
//     }).then(() => {
//         $(document).ready(function() {
//         $("#news_slider").owlCarousel({
//             items : 3,
//             itemsDesktop:[1199,3],
//             itemsDesktopSmall:[980,2],
//             itemsMobile : [600,1],
//             navigation:true,
//             navigationText:["",""],
//             pagination:true,
//             autoPlay:true
//         });
//     });
//     })
// }
// //     try {
// //         const response = await fetch(url, options);
// //         let result = await response.json();
// //         let videos = result.items.filter((i) => i.type == "video")
// //         correntQuery.innerText = result.correctedQuery;
        
// //         videos.map((video) => {
// //             news_slider.innerHTML +=
// //             `
// //             <div class="post-slide">
// //               <div class="post-img">
// //                 <img src="${video.bestThumbnail.url}" alt="">
// //                 <a href="${video.url}" class="over-layer"><i class="fa fa-link"></i></a>
// //               </div>
// //               <div class="post-content">
// //                 <h3 class="post-title">
// //                   <a href="#">${video.title}.</a>
// //                 </h3>        
// //                 <span class="post-date"><i class="fa fa-clock-o"></i>${video.uploadedAt}</span>
// //                 <a href="#" class="read-more">read more</a>
// //               </div>
// //             </div>
// //             `
// //         })

async function get() {
const url = 'https://shazam.p.rapidapi.com/shazam-events/list?artistId=73406786&l=en-US&from=2022-12-31&limit=50&offset=0';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6760e82387mshf4392c476e99b63p196425jsn26c45c9781a8',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}
}

get()