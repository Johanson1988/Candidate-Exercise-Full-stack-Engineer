# Candidate Exercise – Full-stack Engineer - `README.md` 
## Contributors List

## Description

By using the GitHub REST API or the GitHub GraphQL API, build an application that allows a user to list the contributors of a given repository. No other requirement: show us your skills!

## Solution Provided

Small app which displays a searchbar to find a valid Github user. Once user is found, list of repositories will be displayed. If you click on the repository name, the list of collaborators will be displayed. This solution will work in etiher desktop or mobile phones.

## Tech Stack Used

- React
- Typescript
- React testing library
- MaterializeCSS
- Github RestAPI
- Github GraphQL API
- Axios
- MockAxiosAdapter
- Responsive
- Styled-Components

## User Stories

- **404:** Displayed when the user is not found

- **User Search:** Search bar to look for Github users

- **User view:** Shows user repositories and collaborators

# Client / Frontend

## Routes (React App)
| Path                      | Component            | Permissions | Behavior                                                     |
| ------------------------- | -------------------- | ----------- | ------------------------------------------------------------ |
| `/`                       | HomePage              | public     | Home page - Displays Github search bar |

## Components

Main
 * Homepage

Layout
 * 404
 * Loading

User
 * UserSearchBar
 * UserDetails
 
Repositories
 * RepositoriesContainer
 * ReposSearchBar
 * RepoListElement
 * CollaboratorsContainer

## API Endpoints (backend routes)

### REST Endpoints

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `https://api.github.com/users/:username`           | {username}                | 200            | 404          | Gets user info          |
| GET        | `https://api.github.com/users/:username/repos`                | {username}      | 200            | 404          | Gets user's repositories |
| GET        | `https://api.github.com/repos/:username/:repositoryName/contributors`                | {username, repositoryName}      | 200            | 404          | Gets repositorie's collaborators |

### GraphQL Endpoint

- https://api.github.com/graphql

### GraphQL query

```sh
    query: `{
            user(login: "${username}") {
              login
              avatarUrl
              repositories(first: 100, orderBy: {field: NAME, direction: ASC}) {
                nodes {
                  name
                  description
                  collaborators {
                    nodes {
                      login
                    }
                  }
                }
              }
            }
          }`
```

## Installation instructions

Requires [Node.js](https://nodejs.org/) v4+ to run.

In your command line, please type the following commands:

```sh
$ git clone https://github.com/Johanson1988/Candidate-Exercise-Full-stack-Engineer.git
$ cd Candidate-Exercise-Full-stack-Engineer/Contributors-List
$ npm i
$ npm run start
```
## Testing instructions

```sh
$ npm run test
```

## GraphQL Mode

This mode has a limitation. GraphQL API will only show collaborators of the repositories which the user has push access. If you are using the Github token provided by myself, you can check my repositories if you search for the user "Johanson1988". 

```sh
$ git checkout GrapQL-Mode
$ echo REACT_APP_GITHUB_API_KEY='insert github token here' >> .env
$ npm run start
```

## Links

### Trello

[Trello Board](https://trello.com/b/7CPtRRzO/candidate-exercise-full-stack-engineer) 

### Git

[Github Link](https://github.com/Johanson1988/Candidate-Exercise-Full-stack-Engineer)

## Author
* Johann Moreno Noda
* [Linkedin](https://www.linkedin.com/in/johannmoreno/)
* [Web Portfolio](https://web-portfolio-johann-moreno.herokuapp.com/)
* [Github Repo](https://github.com/Johanson1988?tab=stars)
* [CodeWars](https://www.codewars.com/users/johanson88)