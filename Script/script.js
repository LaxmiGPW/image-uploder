let uploader = document.getElementById('uploader')
let album = document.getElementsByClassName('album')[0]



function load(){
  let imgurl = JSON.parse(localStorage.getItem("Image"))
  // console.log(imgurl)

  imgurl.forEach(function(element){

    // console.log(element)

    let img = document.createElement('img')
    img.src = element
    img.setAttribute("onclick","Preview(this.src)")
      
    album.appendChild(img)
  });

}

const imageArr = JSON.parse(localStorage.getItem("Image"))

function Upload(){
  const [file] = uploader.files

  let img = document.createElement('img')
  img.src = URL.createObjectURL(file)
  img.setAttribute("onclick","Preview(this.src)")
  album.appendChild(img)

  imageArr.push(img.src)
  
  localStorage.setItem("Image",JSON.stringify(imageArr))

}



function Preview(path){

  
  let previewBox = document.getElementById('previewBox')
  let previewImage = document.getElementById('previewImage')
  // let Download = document.getElementById('Download')
  previewImage.src = path
  // Download.href = path
  // Download.download = path
  previewBox.style.display = "flex"


}


function PreviewClose(){
  let previewBox = document.getElementById('previewBox')
  previewBox.style.display = "none"
    
}


function nextBtn(){
  let previewImage = document.getElementById('previewImage')
  let imglist = document.querySelectorAll('img')
  let nextimg
  for(let i = 1;i<imglist.length;++i){

    if(previewImage.src == imglist[i].src){
        // console.log(i)
        
          nextimg = imglist[i].nextElementSibling.src
        
    }
    // else{
    //     console.log("error",i)
    // }
  }
  previewImage.src = nextimg
}

function previousBtn(){
  let previewImage = document.getElementById('previewImage')
  let imglist = document.querySelectorAll('img')
  let nextimg
  for(let i = 1;i<imglist.length;++i){
    
    if(previewImage.src == imglist[i].src){
        // console.log(i)

        nextimg = imglist[i].previousElementSibling.src
        console.log(i)
    }
    // else{
    //     console.log("error",i)
    // }
  }
  previewImage.src = nextimg
}