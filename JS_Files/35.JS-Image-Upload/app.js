// Image Upload
let uploadImage = document.querySelector('#upload-form');
uploadImage.addEventListener('submit',function () {
    let imageFile = document.querySelector('#customFile').files[0];
    let imageName = imageFile.name;

    let reader = new FileReader();
    reader.readAsDataURL(imageFile);

    reader.addEventListener('load',function () {
        if(this.result && localStorage){
            let imagesList= localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [];
            imagesList.push(this.result);
            localStorage.setItem('images', JSON.stringify(imagesList));
        }
    });
    displayImage();
});
// Display image
let displayImage = () =>{
    let imagesList= localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [];
    if(imagesList.length !==0){
        let cardImage = '';
        for(let image of imagesList){
            cardImage += `<div class="col-md-3">
               <div class="card img-card">
                   <img src="${image}" alt="" class="image-fluid card-img">
                   <div class="card-body">
                       <h3 class="card-title">Image</h3>
                       <p class="card-text">Lorem iplaceat quae quis repellat? Ameti corporis culpa dolorem doloremque iure ratione veritatis! Excepturi.10</p>
                   </div>
               </div>
           </div>`;
        }
        document.querySelector('#card-row').innerHTML = cardImage;
    }
};
displayImage();

// Remove All images
let removeBtn = document.querySelector('#remove-btn');
removeBtn.addEventListener('click',function () {
    localStorage.removeItem('images');
    displayImage();
})