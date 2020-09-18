/** @const  {function} getUsersData API call to Github GraphQL API using a query to return:
 * - username
 * - avatar picture
 * - repositories' names
 * - repositories' descriptions
*/
import axios from 'axios';
require('dotenv').config()

//TODO cambiar este any
export const getUsersData = (username: string):any =>
    axios({
        method: 'post',
        url: 'https://api.github.com/graphql',
        data: { query: `{
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
        },
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_KEY}`
        }
    }).then(data => data.data.data.user)
    .catch(() => null)