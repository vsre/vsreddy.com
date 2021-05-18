const links=[
    {
        linkName:"Home",
        link:"/index.html",
    },
    {
        linkName:"About",
        link:"/pages/about.html",
    },
    {
        linkName:"Experience",
        link:"/pages/experience.html",
    },
    {
        linkName:"5th Anniversary Photos",
        link:"/pages/Anniversary5.html",
    },
    {
        linkName:"OSS Website Inauguration",
        link:"/pages/website.html",
    },
    {
        linkName:"6th Anniversary Photos",
        link:"/pages/Anniversary6.html",
    },
    {
        linkName:"10th Anniversary Photos",
        link:"/pages/Anniversary10.html",
    },
    {
        linkName:"Photos-Guests",
        link:"/pages/guests.html",
    },
    {
        linkName:"Computer Basics Book Inauguration",
       link:"/pages/basics.html",
    },
    
    {        
        linkName:"PageMaker 7.0 Book Inauguration",
        link:"/pages/pagemaker.html",
    },
    {
        linkName:"CorelDRAW 12 Book Inauguration",
        link:"/pages/coreldraw.html",
    },
    {
        linkName:"Word 2003 Book Inauguration",
        link:"/pages/word2003.html",
    },
    {
        linkName:"Word 2007 Book Inauguration",
        link:"/pages/word2007.html",
    },
    {
        linkName:"Photoshop Tips Book Inauguration",
        link:"/pages/tips.html",
    },
    {
        linkName:"PowerPoint 2007 Book Inauguration",
        link:"/pages/powerpoint.html",
    },
    {
        linkName:"Momentos by Proprietors",
        link:"/pages/proprietors.html",
    },
    {
        linkName:"Contact",
        link:"/pages/contact.html",
    },
];
(function () {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < links.length; i++) {
        const nav = document.getElementById("nav-links");
        const a = document.createElement("a");
        a.textContent = links[i].linkName;
        const li = document.createElement("li");
        a.href=links[i].link;
        li.appendChild(a);
        fragment.appendChild(li);
    }
    const nav = document.getElementById("nav-links");
    nav.appendChild(fragment);
} ) ();