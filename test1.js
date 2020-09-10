var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

    var driver = new webdriver.Builder()
    .forBrowser('chrome') 
    .build();


(async function crawl(){
	var final= []
	let target = "https://news.ebc.net.tw/news/entertainment";
	await driver.get(target);
	title = await gete_title();

	final.push(title);
	return new Promise(resolve=>{
		resolve(final)
	})

})

().then((data)=>{
	console.log(data)
});

async function gete_title(){
    var eles = await driver.findElements(By.className('title'))
    var txt = []
    for (var i = 0; i < eles.length; i++) {
        await eles[i].getText().then((a)=>{
            txt.push(a)
            // console.log(i)
        })   
    }
    return txt
}