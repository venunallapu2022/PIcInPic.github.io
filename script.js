const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// Prompt user to select medi astream pass to video element then play

async function selectMediaStream(){
    try{
       const mediaStream =  await navigator.mediaDevices.getDisplayMedia();
       videoElement.srcObject = mediaStream;
       videoElement.onloadedmetadata = () => {
           videoElement.play();
       }
    }catch(error){
        //Catch Error
    }
}


button.addEventListener('click', async  () => {
    //Disable Button
    button.disabled = true;
    // Pictur In Picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false;
});


//load fun
selectMediaStream();
