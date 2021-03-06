# Joke App

A react frontend for the Joke Api.

[![version][version-img]](.)
[![docker][docker-img]][docker-url]
[![react][react-img]][react-url]
[![typescript][typescript-img]][typescript-url]
[![jokeapi][jokeapi-img]][jokeapi-url]
[![license][license-img]](LICENSE)

## Setup Project

The app and api is fully dockerized and can be started with a predefined docker compose environment:

1. Install [Docker](https://docs.docker.com/docker-for-windows/install/)
2. Open a console and navigate into the cloned _fwe-ws19-20-756891-ha2_ repository, where the _docker-compose.yml_ file is located
3. Execute the command **docker-compose up**
    - Alternatively on windows you can just start the _startEnv.bat_ file

After the console outputs "You can now view fwe-h2-joke-app in the browser." the APP is successfully running and listening on port \*:3000

## Good to know

Here is little overview of some features and _good to know_ facts.

#### Back to dashboard

To go back to the dashboard you can click onto the logo in the top left corner.

#### Themes

The app comes with two themes, a light and a dark one. At every page there is an theme switch in the top right corner, with the label _Darkmode_. Here you can switch between the two themes.

#### Responsive Design

The pages are responsive and automatically adjusting to your browser size.

#### Loading/Error Container

Some pages cant display something without an response of the api. Then they display an error page or an loading page, depends on the case. This pages contains a button to return to the dashboard.

#### Error Banner

The app contains a error context and a banner that displays all errors in a red banner at the top of the screen. You can close it with the _close button_.

#### No frameworks

I havent used any CSS framework to style this website.

---

## Pages

Here you can find detailed descriptions for each page in the app.

#### Dashboard Page

**Accessible over ('/')**

The Dashboard is the main page of the app. It lists all jokes in a list with its title, text, categories, the option to like or dislike them and the author with its signature. Also it containing a toolbar, where you can create new jokes (_+ button_), download alls jokes as csv file (_&#10515; button_), sort the jokes for a specific field (_&darr;&#8801; button_) and filter the jokes for a specific funniness (_Min Funniness number box_). If you want to see the detail view of a joke just click on its title or text.

#### Joke Page

**Accessible over ('/joke/:id')**

The joke page is a detailed view of a single joke. Here you can see next to the title, text, categories, funniness and the author, you can see here the creation and updated timestamps, and edit and delete button to edit or delete the joke and the related gif section. You can unfold this section and ses gifs that are related to this joke. Sometimes there is a text '_Gifs api got to many requests, trink tea and refresh..._' instead of the section. Then just wait a little bit and reload the page, because the external api got too many requests. You can get back to the dashboard by clicking on the logo in the top left corner.

#### Edit Joke Page

**Accessible over ('/joke/:id/edit')**

If you clicked on the edit button, you cam to a page, where you can edit an existing joke. Here you can change the title and text, add or remove categories and change if the joke should be listed on the dashboard page. To discard your changes just click the _cancel button_, to save click the _save changes button_. You can get back to the dashboard by clicking on the logo in the top left corner.

#### Create Joke Page

**Accessible over ('/create')**

After clicking on the _+ button_ on the dashboard you are on the create joke page, where you can create new jokes. Here you can enter a title and text. The select some categories, or create new categories by type in the name and press enter. Now you can select an existing author from the list or click on _Create new author_, to create a new one. Here you can enter the name and signature of the new author. You still have to choose if the joke should be listed on the dashboard and then you can post the joke with the _Post Joke button_. If you want to cancel and not post the joke, click on the _Cancel button_. You can get back to the dashboard by clicking on the logo in the top left corner (This cancels the changes, too).

## License

**BSD 2-Clause License**

Copyright (c) 2019, Darius Dinger<br>
All rights reserved.

<!-- Shields -->

[version-img]: https://img.shields.io/badge/version-1.0.0-red.svg?style=flat-square
[typescript-img]: https://img.shields.io/badge/typescript-3.7.2-green.svg?style=flat-square
[docker-img]: https://img.shields.io/badge/docker--compose-3.0-green.svg?style=flat-square
[react-img]: https://img.shields.io/badge/react-16.12.0-green.svg?style=flat-square
[jokeapi-img]: https://img.shields.io/badge/JokeApi-1.0.0-orange.svg?style=flat-square
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square

<!-- Links -->

[typescript-url]: https://www.typescriptlang.org/
[docker-url]: https://docs.docker.com/compose/
[jokeapi-url]: https://code.fbi.h-da.de/istdading/fwe-ws19-20-756891-ha1
[react-url]: https://reactjs.org/
