var h3Num = 1;
var friends = ['Steph', 'Julius', 'Glenn', 'Vloshko'];
var locationName = ['bed room', 'kitchen', 'bath room', 'living room', 'basement', 'attic', 'front yard', 'back yard', 'office', 'garage'];
var weaponName = ['lamp', 'chair', 'bottle', 'amibo', 'box', 'multitool', 'screw driver', 'can', 'keyboard', 'vacuum', 'cleaining products', 'froot loops', 'rope', 'white vinegar', 'shelf', 'trash can', 'desktop', 'tv', 'monitor', 'labs'];
var refId = 0;

function pageLoad() {
    for (i = 0; i < 100; i++) {
        var h3 = document.createElement('h3');
        var trackText = document.createTextNode('Accusation ' + h3Num);
        var body = document.body;
        
        body.appendChild(h3);
        h3.id = refId;
        refId++;
        h3.appendChild(trackText);
        h3Num++;
    }
    // document.getElementsByTagName('h3').addEventListener('click', function(e) {
    //     alert('I accuse ' + friends + ', with the ' + weaponName + ' in the ' + locationName + '!')
    // });
};

pageLoad();

