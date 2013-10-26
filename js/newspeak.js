//create an array of newspeak words or other dystopian vocabulary.
//randomize the order of the array
//generate a random number between 4-15, and pull out that number of words to form a sentence.
//capitalize and add a period to the end of the sentence.
//create five sentences and jam them together into a paragraph.
//allow the user to decide how many paragraphs are generated.


$(document).ready(function() {

$("#ipsum-form").submit(function() {	
var paragraph_number = $("#paragraph_count").val();

//Determine which of the check boxes is checked 
var chosen_button = $("#ipsum-form input[name='choice']:checked").val();

var allWords = [];    
    
var strictNewspk = ["doublethink", "groupthink", "thoughtcrime", "miniluv", "minitru", "crimethink", "ownlife", "unperson", "ingsoc", "joycamp", "minipax", "dayorder", "duckspeak", "bellyfeel", "Big Brother", "artsem", "blackwhite", "doubleplus", "facecrime", "ficdep", "fullwise", "Hate week", "memory hole", "oldthink", "pornosec", "prolefeed", "thinkpol", "unperson", "upsub", "versificator" ];
var maddAddam = ["pigoon", "BlyssPluss", "membrane", "God's Gardeners", "wolvog", "Craker", "pleebrat", "pleebland", "painball", "bioform", "chickienobs", "secretburger"];
var anathem = ["Orth", "voco", "jeejah", "mathic", "Hypotrochian Transquaestiation", "Ita", "Hylaean Theoric World", "unarian", "thousander", "hundreder", "tenner", "convox", "apert", "sline", "eliger", "halikaarn", "doyn", "servitor", "fid", "Evenedrician", "Gardan's Steelyard", "inbrase", "loctor", "lucub", "kinagrams", "Lorite", "starhenge", "Diax's Rake", "teglon", "Hemn space", "avout", "bulshytt", "chronochasm", "vlor", "upsight", "speely", "speelycaptor", "Wick", "procian", "incantor", "rhetor"];
var nadsat = ["bolshy", "baboochka", "bog", "bratchny", "britva", "bezoomy", "carman", "chelloveck", "cutter", "creech", "devotchka", "drat", "drencrom", "droog", "eggiweg", "groody", "gulliver", "guttiwuts", "In-out-in-out", "millicent", "moloko", "gorlo", "golly", "govoreet"];
var everything = strictNewspk.concat(maddAddam, anathem);
    
    //which vocabulary does the user want?
  if (chosen_button == "newspeak") {
   allWords = strictNewspk;
} else if (chosen_button == "maddaddam") {
   allWords = maddAddam; 
} else if (chosen_button == "anathem") {
   allWords = anathem;
}else if (chosen_button == "everything")
                    { allWords = everything; }
else if (chosen_button == "nadsat")
                    { allWords = nadsat; }
    
//Fisher-Yates shuffle

function fyshuffle(wordlist) {
   var counter = wordlist.length, temp, index;

	//while there are elements in the array
	while (counter > 0) {
		//pick a random index
		index = Math.floor(Math.random() * (counter + 1));
		//decrease counter by 1
		counter-=1; 
		//swap the last element with it
		temp = wordlist[counter];
		wordlist[counter] = wordlist[index];
		wordlist[index] = temp;
	}
	return wordlist;
}

function makesentence(wordlist) 
{ 
//decide sentence length between 4-15 words	
var sentLgth = Math.floor(Math.random() * 15) + 4; 
// create a shuffled array of words
var wordsRand = fyshuffle(allWords); 
// pull out however many words was decided above
var newSent = wordsRand.slice(0, sentLgth); 
//make the sentence into a string
var sentence = newSent.toString().replace(/,/g, ' ') +'. ';
var cappedsentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
return cappedsentence;
}

function makeparagraph() {
    var sentence1 = makesentence(allWords);
    var sentence2 = makesentence(allWords);
    var sentence3 = makesentence(allWords);
    var sentence4 = makesentence(allWords);
    var sentence5 = makesentence(allWords);
    var paragraph = '';
  
    paragraph += '<p>' + sentence1 + sentence2 + sentence3 + sentence4 + sentence5 + '</p>';
    return paragraph;
}
   
$("#generated-newspeak").empty();
while(paragraph_number > 0) {
    var paragraphs = makeparagraph();
    $("#generated-newspeak").append(paragraphs);
    paragraph_number-=1;
   } 

    return false;
//end event listener
});

//end doc ready
});
