exports.markdown = (string) => {
    const emojis = [
        {
            name: 'hehe',
            img: 'https://cdn.discordapp.com/emojis/792645345216823306.png?v=1'
        },
        {
            name: "nani",
            img: "https://cdn.discordapp.com/emojis/792658889602367538.png?v=1"
        },
        {
            name: "ah",
            img: "https://cdn.discordapp.com/emojis/753937617258545202.png?v=1"
        },
        {
            name: "ded",
            img: "https://cdn.discordapp.com/emojis/806987341889273866.gif?v=1"
        },
        {
            name: "woa",
            img: "https://cdn.discordapp.com/emojis/798246206706417704.png?v=1"
        },
        {
            name: "kaosHehe",
            img: "https://cdn.discordapp.com/emojis/444565473665875990.png?v=1"
        },
        {
            name: 'blush',
            img: 'https://emoji.discord.st/emojis/flandre_joy.png'
        },
        {
            name: 'happy',
            img: 'https://i.imgur.com/8At68hU.png'
        }
    ]

    string =
    string
    .replace(/\*\*[a-zA-Z0-9(\!|\.|\:|\;|\"|\'|\&|\^|\%|\$|\#|\@|\*|\(|\)|\||\<|\>|\/), \t\n\r]+\*\*/g,function(text){
        return `<strong class='markdown_bold_text'>${text.replace(/\*/g,'')}</strong>`
    })
    .replace('\n','<br>')
    .replace(/<lenny>/g,"( ͡° ͜ʖ ͡°)")
    .replace(/\bi\b/g,'I')
    .replace(/\bmc\b/g,'MC')
    .replace(/\bmc's\b/g,'MC\'s')


    if(/:[a-zA-Z0-9, \t\n\r]+:/g.test(string) === true){
        string =
        string
        .replace(/:[a-zA-Z0-9, \t\n\r]+:/g,function(text){
            let theEmoji = emojis.find(e => e.name.toLowerCase() === text.replace(/:/g,'').toLowerCase())
            return `<span><img class="markdown_emoji" src="${theEmoji.img}"></span>`
        })
    }

    const TextLinkReg = /\[[a-zA-Z0-9, \t\n\r]+\]\(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)\)/g

    if(TextLinkReg.test(string) === true){
        string =
        string
        .replace(TextLinkReg,function(text){
            return `<span><a class="markdown_link" href="${text.split('(')[1].split(')')[0]}">${text.split('[')[1].split(']')[0]}</a></span>`
        })
    }

    const imageReg = /(@https?:\/\/(www\.)?[-a-zA-Z0-9:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9():%_\+.~#?&//=]*)\@|@\.\/[a-zA-Z0-9, \w\.(jpe?g|png|gif|bmp|jfif|webp)$]+@)/g
    // const imageReg = /@\.\/images\/[a-zA-Z0-9, \w\.(jpe?g|png|gif|bmp|jfif)$]+@/g

    if(imageReg.test(string) === true){
        string =
        string
        .replace(imageReg,function(text){
            return `<br><br><span class='markdown_attachment_ctn'><img class="markdown_attachment" src="../review-images/${text.split('@')[1].split('@')[0]}"></span><br>`
        })
    }

    return string
}