---
title: Introducing... Thoughts!
excerpt: "An introductory post to my website's blog section."
last-edit: 2026-06-06
bluesky_URI: "at://did:plc:qgozdd2deahkas52eklef6sz/app.bsky.feed.post/3mmriycbn322c"
---

Hey folks! This post marks the debut of the "Thoughts" section of my website, a space where I'll be able to write long-form content about whatever comes to my mind!

## Why I created a blog

Whenever I want to share something, be it a neat discovery or updates about a project of mine, I usually just [tweet about it.](https://bsky.app/profile/voxy.space) However, with the ongoing enshittification of this platform, I found myself not wanting to exclusively rely on that to share things anymore. Since I've already spent quite a lot of time building the quaint little space you're reading this on, I figured starting a blog on it would be a logical next step to take.

Along with keeping everything related to my projects in one place, adding a blog to my website also means that I have full control over what I write, and how it's presented! I don't have to worry about character or media limits, I can embed whatever I want, however I want, and I can make it look all lovely and stuff! ✨

I'm really excited to put this space to good use, and tell you more about the things I'm working on. I hope you are looking forward to it, too!

## A peek behind the curtain

I cannot resist talking about how I set up this blog (and my website in general), because I just find it so neat and interesting. It's gonna get a little technical from here, but if you're okay with that, strap in!

When I first started working on this website, I chose to host it on [GitHub Pages](https://pages.github.com/), a free hosting service powered by GitHub repositories. GitHub Pages is only designed to host *static* websites, meaning that it only delivers HTML documents that are written in advance. This prevents me from using a CMS like Wordpress, which are used to create *dynamic* websites, where the pages are built on the fly by the web server, from data stored inside of a database.

Now, I don't really mind writing web pages the "old-fashioned" way, in plain old HTML and CSS. I quite like it, in fact! However, it makes maintaining the website pretty difficult. Say I want to make changes to my header's navbar, for instance. Because my header is present on every single page, I'll have to comb through **every single one of them** to make the changes I want, which is pretty tedious...

It seems like I've got a choice to make: Stick with GitHub Pages, knowing that updating my website will likely be a painful endeavor; or go with a different hosting service that'd let me use a CMS, which would be pretty costly. Neither seems to be an ideal solution... Thankfully, there is a *third* option.

Enter [Jekyll](https://jekyllrb.com/), a *static site generator*. With Jekyll, instead of writing every page in HTML, I can instead create an HTML template, and write the contents of each page in Markdown. Then, all I gotta do is feed all that to Jekyll, and it'll spit out a static website which I can deploy right away!

To me, this genuinely feels like the best of both worlds. I can benefit from the template-based approach that a CMS would provide, allowing me to easily change my site's design and layout, while also enjoying the free hosting provided by GitHub Pages, since Jekyll outputs static HTML pages. 🎉

In fact, Jekyll is actually *built into GitHub Pages*, meaning that the whole process of actually building the website is handled *by them*. Whenever I need to update my site, all I gotta do is write the content, push it to my site's repository, and GitHub Pages handles the rest. 🤯 I find it genuinely amazing, and if you're looking to build yourself a blog, or a site to feature your projects, and you don't mind getting your hands dirty with the technical stuff, I cannot recommend it enough!