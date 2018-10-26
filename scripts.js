var h3Num = 1;
var friends = ['Steph', 'Julius', 'Glenn', 'Vloshko', 'Bladebuddy'];
var locationName = ['bed room', 'kitchen', 'bath room', 'living room', 'basement', 'attic', 'front yard', 'back yard', 'office', 'garage'];
var weaponName = ['lamp', 'chair', 'bottle', 'amibo', 'box', 'multitool', 'screw driver', 'can', 'keyboard', 'vacuum', 'cleaining products', 'froot loops', 'rope', 'white vinegar', 'shelf', 'trash can', 'desktop', 'tv', 'monitor', 'labs'];

function pageLoad() {
    for (i = 0; i < 100; i++) {
        var h3 = document.createElement('h3');
        var trackText = document.createTextNode('Accusation ' + h3Num);
        var body = document.body;
        
        body.appendChild(h3);//appends h3 to body
        h3.appendChild(trackText);//appends trackText to h3
        h3Num++;

        iEvent(i);

        function iEvent(i) {
            return document.getElementsByTagName('h3')[i].addEventListener('click', function() {
                alert('I accuse ' + friends[i % friends.length] + ', with the ' + weaponName[i % weaponName.length] + ' in the ' + locationName[i % locationName.length] + '!')
            })
        };//adds click function with text
    }
};//on call this function adds 100 h3s with a click event showing the text behind the accusation

pageLoad();