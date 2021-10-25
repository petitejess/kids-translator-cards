# FX1 Sydney React Hackathon 2021: Kids' Translator Cards

>
> Live app link: [https://kids-translator-cards.netlify.app/](https://kids-translator-cards.netlify.app/)
>

&nbsp;  

## Purpose

Simple web app built with React, where kids can translate words from many languages. 

&nbsp;  

## User Interface

The layout of the web app is designed for children to easily use. The images displayed are in a form of illustrations.

The homepage has two cards, one for the source language of the word that is to be translated and another one for the target language.

The available languages can be selected from the **dropdown boxes**, and the word to be translated can be entered into the **input field** on the source language card.

An image of a **flag** of a country or one of the countries that speaks the language will be shown under the dropdown box according to the selected language option.

A **Translate button** on the target language card will display the **Result view**. On the Result view, the original word, source country flag will be displayed on the source language card. The translated word and target country flag will be displayed on the target language card, as well as in the **Header** section. The **background image** in the Header section would also change to represent the word.

At the bottom of the Result page, there is a **Restart button** that will bring the user back to homepage.

&nbsp;  

## How The App Works

On the homepage, the app will receive 3 inputs for the *source language* and the *word to be translated*, as well as the *target language*. These values are tracked as states in the App level.

*Available languages* data come from a static JSON file that contains language names and codes that matches Google Translate API.

The *images of the flags* are derived from results fetched through API (https://github.com/apilayer/restcountries).

The user input, entered through the text input field, will be trimmed and only the *first word* will be taken for translation. The word then will be checked using *bad-words filter* (node package) to censor any inappropriate words.

Once user click the Translate button on the homepage, the values set on the homepage will be brought back to App to be passed onto Result view to be processed.

Once the word is filtered, it will be used as a parameter, along with the languages codes, for Google Translate API to translate it to the target language on the Result view.

The word would always have the *English translation* which then be used as a parameter for Pixabay API to get an image related to the word (also with *safesearch* parameter set to *true*). The image will be used to replace the background image in the Header section.

&nbsp;  

## Third Party Services

APIs or packages used in this app:
- For translation: Google Translate API through RapidAPI (https://rapidapi.com/googlecloud/api/google-translate1/)
- For flag images: REST Countries API (https://github.com/apilayer/restcountries)
- For bad words filter: bad-words node package (https://github.com/web-mech/badwords)
- For translation result images: Pixabay API (https://pixabay.com/api/docs/)

**Material UI** is used to style the app.

This app is deployed on **Netlify**.

**Trello** is used for team management tool.

&nbsp;  

## Acknowledgement

[Ana](https://github.com/aplazarevska), [Jessica](https://github.com/petitejess) and [Vicky](https://github.com/pduong987) would like to thank Alex H, our  (awesome, as always) educator, for his support through out this project. Also, special thanks for Mohammad, our classmate, for his help with the quick fixes on the web app.
