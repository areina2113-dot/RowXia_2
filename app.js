const video = document.getElementById("video")
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

function analyze(){

const pose = new Pose({

locateFile:(file)=>{

return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`

}

})

pose.setOptions({

modelComplexity:1,
smoothLandmarks:true

})

pose.onResults(results=>{

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.drawImage(results.image,0,0)

if(results.poseLandmarks){

drawConnectors(ctx,results.poseLandmarks,POSE_CONNECTIONS)

let score = calculateScore(results.poseLandmarks)

document.getElementById("score").innerText =
"Stroke score: " + score

}

})

video.addEventListener("play", async ()=>{

while(!video.paused){

await pose.send({image:video})

}

})

}
