const starsign = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarious', 'Capricorn', 'Aquarius', 'Pisces']

let starsignsel = starsign[Math.floor(Math.random() * starsign.length)]   //star sign selector
//console.log(starsignsel)

const messageStart = ['You', 'You should']  //message start

const messageBegin = messageStart[Math.floor(Math.random() * messageStart.length)]
//console.log(messageBegin)

const messageEnd = ['keep thinking through that problem', 'carry on thinking', 'respect individuality', 'rediscover wisdom', 'take a break']  //message end

const messageEnding = messageEnd[Math.floor(Math.random() * messageEnd.length)]
//console.log(messageEnding)

const completeMessage = starsignsel + ' ' + messageBegin + ' ' + messageEnding

console.log(completeMessage)
    
    
    
    //console.log(completeMessage(`Your horoscope is as follows, {$starsignsel}, {$messageBegin}, {$messageEnd}`)) 
