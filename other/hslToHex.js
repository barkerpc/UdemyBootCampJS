const colors =  [

    {color: 'hsl(6, 54%, 78%)', label:' '},
    
    {color: 'hsl(6, 54%, 68%)', label:' '},
    
    {color: 'hsl(6, 54%, 57%)', label:' '},
    
    {color: 'hsl(6, 63%, 46%)', label:' '},
    
    {color: 'hsl(6, 63%, 41%)', label:' '},
    
    {color: 'hsl(6, 63%, 35%)', label:' '},
    
    {color: 'hsl(6, 63%, 29%)', label:' '},
    
    {color: 'hsl(6, 63%, 24%)', label:' '},
    
    {color: 'hsl(283, 39%, 81%)', label:' '},
    
    {color: 'hsl(283, 39%, 72%)', label:' '},
    
    {color: 'hsl(283, 39%, 63%)', label:' '},
    
    {color: 'hsl(283, 39%, 53%)', label:' '},
    
    {color: 'hsl(283, 34%, 47%)', label:' '},
    
    {color: 'hsl(283, 34%, 40%)', label:' '},
    
    {color: 'hsl(283, 34%, 34%)', label:' '},
    
    {color: 'hsl(283, 34%, 28%)', label:' '},
    
     {color: 'hsl(204, 51%, 78%)', label:' '},
    
    {color: 'hsl(204, 51%, 67%)', label:' '},
    
    {color: 'hsl(204, 51%, 55%)', label:' '},
    
    {color: 'hsl(204, 64%, 44%)', label:' '},
    
    {color: 'hsl(204, 64%, 39%)', label:' '},
    
    {color: 'hsl(204, 64%, 34%)', label:' '},
    
    {color: 'hsl(204, 64%, 28%)', label:' '},
    
    {color: 'hsl(204, 64%, 23%)', label:' '},
    
     {color: 'hsl(168, 55%, 77%)', label:' '},
    
    {color: 'hsl(168, 55%, 65%)', label:' '},
    
    {color: 'hsl(168, 55%, 54%)', label:' '},
    
    {color: 'hsl(168, 76%, 42%)', label:' '},
    
    {color: 'hsl(168, 76%, 37%)', label:' '},
    
    {color: 'hsl(168, 76%, 32%)', label:' '},
    
    {color: 'hsl(168, 76%, 27%)', label:' '},
    
    {color: 'hsl(168, 76%, 22%)', label:' '},
    
     {color: 'hsl(145, 61%, 80%)', label:' '},
    
    {color: 'hsl(145, 61%, 69%)', label:' '},
    
    {color: 'hsl(145, 61%, 59%)', label:' '},
    
    {color: 'hsl(145, 63%, 49%)', label:' '},
    
    {color: 'hsl(145, 63%, 43%)', label:' '},
    
    {color: 'hsl(145, 63%, 37%)', label:' '},
    
    {color: 'hsl(145, 63%, 31%)', label:' '},
    
    {color: 'hsl(145, 63%, 25%)', label:' '},
    
     {color: 'hsl(48, 89%, 80%)', label:' '},
    
    {color: 'hsl(48, 89%, 70%)', label:' '},
    
    {color: 'hsl(48, 89%, 60%)', label:' '},
    
    {color: 'hsl(48, 89%, 50%)', label:' '},
    
    {color: 'hsl(48, 88%, 44%)', label:' '},
    
    {color: 'hsl(48, 88%, 38%)', label:' '},
    
    {color: 'hsl(48, 88%, 32%)', label:' '},
    
    {color: 'hsl(48, 88%, 26%)', label:' '},
    
     {color: 'hsl(28, 80%, 81%)', label:' '},
    
    {color: 'hsl(28, 80%, 71%)', label:' '},
    
    {color: 'hsl(28, 80%, 61%)', label:' '},
    
    {color: 'hsl(28, 80%, 52%)', label:' '},
    
    {color: 'hsl(28, 74%, 46%)', label:' '},
    
    {color: 'hsl(28, 74%, 39%)', label:' '},
    
    {color: 'hsl(28, 74%, 33%)', label:' '},
    
    {color: 'hsl(28, 74%, 27%)', label:' '},
    
     {color: 'hsl(184, 9%, 85%)', label:' '},
    
    {color: 'hsl(184, 9%, 77%)', label:' '},
    
    {color: 'hsl(184, 9%, 69%)', label:' '},
    
    {color: 'hsl(184, 9%, 62%)', label:' '},
    
    {color: 'hsl(184, 6%, 54%)', label:' '},
    
    {color: 'hsl(184, 5%, 47%)', label:' '},
    
    {color: 'hsl(184, 5%, 40%)', label:' '},
    
    {color: 'hsl(184, 5%, 32%)', label:' '},
    
    {color: 'hsl(210, 9%, 70%)', label:' '},
    
    {color: 'hsl(210, 9%, 55%)', label:' '},
    
    {color: 'hsl(210, 14%, 39%)', label:' '},
    
    {color: 'hsl(210, 29%, 24%)', label:' '},
    
    {color: 'hsl(210, 29%, 21%)', label:' '},
    
    {color: 'hsl(210, 29%, 18%)', label:' '},
    
    {color: 'hsl(210, 29%, 16%)', label:' '},
    
    {color: 'hsl(210, 29%, 13%)', label:' '},
    
    ]
    
     
//console.log(colors)
//console.log(todo)


const HSLtoHex = function(h,s,l) {

    s /= 100;    
    l /= 100;      

    let c = (1 - Math.abs(2 * l - 1)) * s,    
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),    
        m = l - c/2,   
        r = 0,   
        g = 0,    
        b = 0;

    

    if (0 <= h && h < 60) {

    r = c; g = x; b = 0;

    } else if (60 <= h && h < 120) {

    r = x; g = c; b = 0;

    } else if (120 <= h && h < 180) {

    r = 0; g = c; b = x;

    } else if (180 <= h && h < 240) {

    r = 0; g = x; b = c;

    } else if (240 <= h && h < 300) {

    r = x; g = 0; b = c;

    } else if (300 <= h && h < 360) {

    r = c; g = 0; b = x;

    }

    // Having obtained RGB, convert channels to hex

    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);  

    // Prepend 0s, if necessary

    if (r.length == 1)

    r = "0" + r;

    if (g.length == 1)

    g = "0" + g;

    if (b.length == 1)

    b = "0" + b;

    

    return "#" + r + g + b;

}



colors.forEach(function (item,index) {
    let hslValue = item.color
    
    hslValue = hslValue.replace("hsl(","")
    hslValue = hslValue.replace(")","")
    hslValue = hslValue.replace(/%/g,"")
    const hslInts = hslValue.split(",")        
    const colorTest = HSLtoHex(parseInt(hslInts[0],10),parseInt(hslInts[1],10),parseInt(hslInts[2],10))
    const hexString = `{color: '${colorTest}', label:' '},`
    console.log(hexString)
})