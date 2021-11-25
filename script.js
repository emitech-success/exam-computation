const tableRow = document.querySelectorAll('tr');
for (let i = 1; i < tableRow.length; i++) {
    const rowScore = tableRow[i].querySelectorAll('input[type="number"]');
    const rowTotal = tableRow[i].querySelectorAll('input[type="text"]');
    for (let i_ = 0; i_ < rowScore.length; i_++) {
        rowScore[i_].addEventListener("keyup", function(){
            const total =[...rowScore].reduce((a, b) =>{
               return a + parseInt(b.value || 0);
            }, 0);
            rowTotal[2].value = total;

            if (total<=39) {
                rowTotal[3].value = "F";

                // console.log("F")
            }
            else if (total > 39 && total <50) {
                rowTotal[3].value = "D";
                console.log("D")
            }
            else if (total >= 50 && total <70) {
                rowTotal[3].value = "C";
                console.log("C")
            }

            else if (total >= 70 && total <=100) {
                rowTotal[3].value = "A";
                console.log("A")
            }
            else{
                rowTotal[3].value = "INVALID "; 
                console.log("NAN")
            }
        })
        // // for (let i__ = 0; i__ < toal.length; i__++) {
        // //     const element = array[i__];
            
        // }
    }
}
