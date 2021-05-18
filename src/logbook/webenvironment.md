---
title: I want a package manager in the browser
description: Current js import system is a mess even with ESM
date: '2021-02-21'
modified_date: '2021-02-21'
image: /assets/images/posts/random-img.jpg
category: web
tags:
  - js-mess
  - package manager
  - browser
---

> People of the web: listen to me

I spent a good part of my morning wondering what my future perfect javascripts
setup will be, and the answer is that it doesn't exist yet.

I'm usually rushing around the web, searching for solutions and (I admit) new
and shiny things, but even if the front-end world it's plenty of appealing
stuffs (that are shining in many dimensions) I decided to stop for a while:

> I want to take a moment to answer this question: if I could get whatever
> solution just snapping my fingers, which solution would I like?

At this point better to start from the beginning: actually what's my problem?

# The Problem

I would say the most common one: I don't want to copy-paste code solutions from
the web, repeating all the typical js idioms, I want **packages**!

Then, since I want packages, I want also a package manager.

# Solutions available on the market

## ~Webpack~

It's not a solution, but just another complication: I'm usually not writing
a very fancy and heavy page, leveraging whatever framework with so many
dependencies and complications, than a plain and simple scripting language would
be enough for me.

And when I say `webpack` I'm also speaking of bundlers in general.

## Typescript

In principle it would be my choice: fully compatible with js, just adding
a bit of sanity to it

## Snowpack

Probably this will be my way to go in practice.

## Web-components

### Frameworks

Out there it's plenty of frameworks that promises to remove boilerplate from
web-components. They are not the solution, just yet another problem.

Indeed introducing a framework reintroduce the complications of before, since
I need again `npm` and so a bundler, and so on...

## Elm

This is just another fancy replacement of javascript

# _The_ Solution

As it's written in the title: I want a package manager directly built into the
readers' browsers.
