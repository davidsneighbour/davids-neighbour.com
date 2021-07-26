---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
description: "This is meta description"
link: "{{ printf "https://gohugo.io/functions/%s" .Name }}"
image: "https://images.unsplash.com/photo-1493770348161-369560ae357d"
keywords: 
- keyword
- keyword 2
author:
  name: Patrick Kollitsch
  homepage: https://davids-neighbour.com/
  image: /images/patrick-kollitsch.jpg
---
