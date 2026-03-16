function calculateScore(landmarks){

let shoulder = landmarks[11]
let hip = landmarks[23]

let angle = Math.abs(shoulder.y - hip.y)

let score = 100

if(angle < 0.05){

score -= 20

}

if(angle > 0.25){

score -= 20

}

return score

}
