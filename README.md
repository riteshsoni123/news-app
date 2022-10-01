# About the project

This is a news web app that makes use of news api provided by
https://newsapi.org . This app has the functionality to search
any topic of news using search bar. In addition to that it also
consists of some predefined tag for quick search like
(Tech/Sports/Business).

## Screenshots

![Screenshot (393)](https://user-images.githubusercontent.com/26280032/193422340-c74fbaca-906d-47f3-b730-c2ec58bd26ea.png)
![Screenshot (394)](https://user-images.githubusercontent.com/26280032/193422349-b0958dcd-6dcb-4c56-935d-f858635f8502.png)
![Screenshot (395)](https://user-images.githubusercontent.com/26280032/193422350-37008b38-ecad-45de-9eca-23b9e3e4f62c.png)

# Working

This section explains the method used to create the project.

- The react app consists of four components "Cards" , "NavBar" ,
  "SearchBar" and "IndividualCard".

- The SearchBar component consists of search bar from where we can
  search the topic of which we want the news. It also consists of
  a dropdown menu from which we can quickly select the tag and
  and get the news of that specific tag.

- The IndividualCard component conststs of a card for individual
  news.It is called according to the number of news present about
  a specific topic.

- The NavBar component , as of now, has no functionality.

- The Cards component consists of to component SearchBar and
  IndividualCard. The component SearchBar helps to fetch the data
  from api and it stores it in a state "data". Then the stored data
  is looped with the help of map function and each news data is
  passed to another component IndividualCard which then displays
  that news to the user in form of cards.

# Built with

- ReactJs
- CSS
- MaterialUI

# Getting Started

## Installation

Below are some steps for the installation of the app in local system.

---

1 -> Clone the repo.

```bash
  https://github.com/riteshsoni123/
```

2 ->Change the directory to client.

3 -> Install NPM packages.

```bash
  npm install
```

## Start app

To start the app write the following command.

```bash
  npm start
```
