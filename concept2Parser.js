function parseConcept2(csv){

let rows = csv.split("\\n")

let splits = []

rows.forEach(row=>{

let cols = row.split(",")

splits.push(cols[2])

})

return splits

}
