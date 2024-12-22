

//let fileType="JPEG"



function uploadFile(fileType){
switch (fileType) {
    case "MP4":
        console.log("Upload MP4 file")
        break;
    case "PNG":
        console.log("Upload the PNG file")
        break; //stop the execution when is condition is satisfied
    default:
         console.log("Check your file format")
}
}

uploadFile("JPEG")
uploadFile("PNG")
uploadFile("MP3")