# NYT-ReactSearch
This is a Node/Express/MongoDB/ReactJS app

Created a MongoDB database called nytreact using mongoose

Created an Article schema and model

Articles have the following fields:
        *title (Title of the stored article from *nytimes.com)
        *date (publish date and time of the article)
        *url (URL of the article on nytimes.com)

The app have three React Components named Main, Search and Saved.
        *Main - contains the main-container div that holds the main layout and navigation. This component is able to hold sub-components Search and Saved.
        *Search - queries the NYT API for articles. Displays API search results from another possible Query component and Results component. Gives the user the ability to save an article to their Saved Articles.
        *Saved - displays the Saved Articles that were searched and stored in the database.