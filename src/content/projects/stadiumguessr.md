---
published: true
title: StadiumGuessr
slug: stadiumguessr
order: 1
description: "A football geography game where you identify stadiums on an interactive map, then review your accuracy and score in a detailed match summary."
featured: true
tags:
  - React
  - Next
  - Typescript
  - Tailwind
---

# StadiumGuessr

StadiumGuessr is a football geography game where you identify stadiums and pin their locations on an interactive map.

[Try it out](https://www.stadiumguessr.app/) or you can see the [code here](https://github.com/brandon-carlisle/StadiumGuessr).

![StadiumGuessr game page](/images/stadiumguessr/game.gif)

The interactive map is powered by [Leaflet](https://leafletjs.com/), an open-source JavaScript map library.

Each game ends with a detailed match summary showing your score, distance accuracy, and round-by-round performance.

![StadiumGuessr summary page](/images/stadiumguessr/summary.png)

## Key Features

- Identify football stadiums from visual clues
- Pin each guess on an interactive [Leaflet](https://leafletjs.com/) map
- Review score and distance accuracy in a match summary

## Stack

- Framework: [React](https://react.dev/) and [Next.js](https://nextjs.org/)
- Styling: [Tailwind](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/)
- Authentication: [NextAuth](https://next-auth.js.org/)
- Fully typesafe API: [TRPC](https://trpc.io/)
- Database and ORM: [Railway](https://railway.app/) and [Prisma](https://www.prisma.io/)
- State management: [Redux Toolkit](https://redux-toolkit.js.org/)
