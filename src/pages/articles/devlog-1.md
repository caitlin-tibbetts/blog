---
date: 2021-01-16T20:13:27.363Z
title: Building my New Blog (Part 1)
tags: 
	- devlog
	- technology
	- softwaredev
	- webdev
draft: false
---

I'm creating a new [blog](https://github.com/caitlin-tibbetts/blog)! I'm a software developer by trade, so I think building and deploying my own blog would be a great project. And I'll be writing a DevLog for y'all to keep track of my progress! These are the features my blog will need to have before I deploy it:

- List of posts on front page with a space for a featured post
- Dedicated post pages with comment sections (will use a plugin for this probably)
- About page
- Links to my social media
- Connection to a CMS to make adding new posts easy and seamless, preferably written in Markdown
- Connection to Google Analytics
- Great SEO!
- Unobtrusive area for ads (🤑)

**January 7th, 2021**

I chose to use React because it's growing like crazy, and I want to learn Javascript. I chose [Gatsby](https://www.gatsbyjs.com/) as the toolchain because it's great for creating content-rich static websites, which is great for a simple blog (and great for loading times). This gives me the opportunity to learn how to use a Content Management System (CMS) at some point in the future to populate the blog. I really want to start mostly from scratch and use this as a deep learning experience, so today, I just ran `gatsby new` and started building some components! I made a layout component following this [tutorial](https://www.gatsbyjs.com/docs/tutorial/part-three/) (including the really pretty typography), and then I added a footer with my social media links. In the center of the layout, I have space to put a list of my posts, though I haven't gotten there yet. This is a good start, especially because I made sure that everything was at least mildly responsive. Making it fully responsive will be a job for later.

**January 8th, 2021**

I know I'm jumping the gun a little bit, but today I decided to deploy the site, even though there's nothing on it so far. Gatsby recommends using Netlify to deploy their sites, so I decided to go with it. It doesn't seem too different from other deployment services, and I learned of something interesting: Netlify has a Content Management Service! I used this [tutorial](https://developer.okta.com/blog/2020/02/18/gatsby-react-netlify#:~:text=Gatsby is a tool for,static files for your website.) to set the blog up on Netlify and define the CMS. It's slick! And it has support for Markdown, which is something I wanted because I like writing in Markdown.

Next, I'm going to learn about how to use GraphQL to "query" my content, which sounds a bit wild to me as I write it right now. I'm starting by reading the [documentation](https://www.gatsbyjs.com/docs/why-gatsby-uses-graphql/)!

**January 9th, 2021**

The documentation was not helping me all that much in figuring out how to query Markdown files, which is what I was trying to do, so I found a new [tutorial](https://www.youtube.com/watch?v=P1WM1bCJ0-A) that talked about that specifically. I have a bit of experience with GraphQL, and it's really nice that Gatsby has it all baked in already (with a popular plugin `gatsby-source-filesystem`), so once I figured out how to set up the Markdown support for the GraphQL, actually writing and accessing the queries was not too bad. A tip though, if anyone else is using these tools, you need to use a special StaticQuery object to run GraphQL queries from within *components*, here's a [tutorial](https://www.gatsbyjs.com/docs/how-to/querying-data/static-query/). I spent the rest of my coding session making a super simple Posts component that shows my list of posts. At the moment, each post has a title, date, a list of tags, a draft field to allow me to save posts without them showing up on the site, and some content. At some point, I want to style the tags so they look like little pill buttons and can filter the page, but that's for later. Tomorrow's task will be making pretty post pages.

...

I had some extra time today, so I continued with the same [tutorial](https://www.youtube.com/watch?v=82Zy8n5lQzU) to learn to use slugs (short, unique, descriptive strings to describe a single blog post) to allow for creating a page for each post. This is a bit more complex up front because Gatsby websites are static, so instead of creating a component that renders each page dynamically, I need to tell Gatsby how to render each of my pages up front. This is what leads to better loading times for Gatsby websites. I followed the video tutorial, but this [guide](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/) in the Gatsby docs also explains how this works quite well.

The first step is to create a template for my blog posts that takes in some GraphQL data. This is where I will define how each blog post will look. I decided to make it look very similar to my front page, for simplicity. Then I had to add a slug field to each post, which I did in the `gatsby-node.js` file, which dictates how the site is generated. I also put a command in this file to create each of my pages with that slug as the path. Because the path and slugs matched, I was able to pass the slug into my template through the context and query for the relevant post, creating a page for each one. This is not meant to be a tutorial, so I'm not explaining the process super thoroughly, but feel free to ask any questions in the comments!

Tomorrow, I plan to play with the tags: how they look and how to implement them. I believe it will be similar to the post pages, so I'm excited to dive in and use it as a bit of a knowledge test.

**January 10th, 2021**

I was able to put the tags together all by myself! To create each of the tag pages, I used the same loop that created the pages and made a page for each unique tag, which leads to being able to make more whenever new tags come along. Then, to get the relevant posts, I just used the same GraphQL query that I use on the front page but filtered on the tags list.

I also added cute little tag pill box buttons, which are so cute! I made these buttons using CSS, and it wasn't too advanced, which was nice. I used this [tutorial](https://www.w3schools.com/howto/howto_css_pill_button.asp) because I was a little confused about how to get the buttons to show up next to each other instead in a list format, but other than that, got it!

**January 11th, 2021**

Today, I decided to migrate my other blog posts to this new blog, just to make sure everything shows up well. This meant I had to deal with images, which was not the simplest thing ever. I followed this [how-to guide](https://www.gatsbyjs.com/docs/working-with-images-in-markdown/#inline-images-with-gatsby-remark-images) to make it so I could define images in my Markdown and have them show up. Over the course of this task, I also decided that I don't need a pretty CMS UI when Gatsby has already automated adding new posts to the list. What prompted this today was that I could not figure out where the CMS was saving my media (i.e. images), which I'm sure is easy to find, I just realized: I'm a programmer, I can write Markdown, and we'll just move on with that. So, I got rid of that plugin and simplified my life.

Next, I am working on a pretty way to add captions to images because almost none of my images are mine, and it's important to me to give credit where credit is due. Apparently, `gatsby-remark-images` has an option to render the alt-text on the image as a caption (`showCaptions`), so I did that as well as used the option to render it using Markdown (`markdownCaptions`) to allow me to add links to the caption.

Finally, I added all of the posts I wanted to add, pictures and all, and it looks quite good! The one thing I want to change is the style of the image captions, but that's not high priority. That's it for today!

**January 12th, 2021**

Today, I wanted to tackle the About page! Pretty simple, right? Well, the `gatsby-image` tag wasn't working, so time for some Googling! All I want is to add a picture of myself to my website. This [tutorial](https://www.gatsbyjs.com/tutorial/gatsby-image-tutorial/#relative-image-paths-and-gatsby-configjs) helped me, but the real issue was that my relative path to the image was wrong. It's 1 AM, y'all, sometimes these things happen. I'm gonna design the look of the page another time!