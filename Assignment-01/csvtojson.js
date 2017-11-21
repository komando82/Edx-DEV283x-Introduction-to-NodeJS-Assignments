const fs = require('fs')

const csvFilePath='customer-data.csv'
const csv=require('csvtojson')

csv()
	.fromFile(csvFilePath)
	.on("end_parsed",function(jsonObj){ //when parse finished, result will be emitted here.
     	//console.log(jsonObj)
     	fs.truncate('customer-data.json', 0, function() {
	     	fs.writeFile('customer-data.json', JSON.stringify(jsonObj, null, 2), function (error) {
			  	if (error) return console.error(error)
			  	//console.log('Writing is done.')
			})
		})
   	})
	.on('done',(error)=>{
	    //console.log('end')
	})