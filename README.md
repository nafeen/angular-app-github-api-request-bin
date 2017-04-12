

Yoshi | App Features
====================

1. App loads data from GitHub API - starting API :

### https://api.github.com/repositories?since=862

2. App picks up the next API pointer from API response header
3. App features infinite scroll
4. EDIT button opens up a modal with editable data fields
5. onSubmit, the edited fields are sent to a RequestBin API via AJAX
6. Even after editing, data in the front-end remains unchanged
7. App is playfully named Yoshi