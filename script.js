const imageContainer=document.querySelector('.image-container');
const btnEl=document.querySelector('.btn');
btnEl.addEventListener('click',()=>{
    imageNumber=10;
    addNewImages();
})

function addNewImages(){
for (let index = 0; index < imageNumber; index++) {
    const newImgEl=document.createElement('img');
    newImgEl.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
    imageContainer.appendChild(newImgEl);
}

}