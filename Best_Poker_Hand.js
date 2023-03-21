/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    let i=0;
    for (i;i<suits.length-1;i++)
    {
        if (suits[i]!=suits[i+1])
            break;
    }
    if (i===suits.length-1)
        return "Flush";
    let mymap2=new Map();
    let flag =false;
    for (let temp of ranks)
    {
        if (!mymap2[temp])
            mymap2[temp]=0;
        mymap2[temp]++;
        if (mymap2[temp]===3)
            return "Three of a Kind";
        if (mymap2[temp]===2)
            flag=true;
    }
    if (!flag)
        return "High Card";
    return "Pair";
    
};
