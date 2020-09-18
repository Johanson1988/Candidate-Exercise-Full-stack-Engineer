import axios from 'axios';

/** @const  {function} getUsersData API call to Github GraphQL API using a query to return:
 * - username
 * - avatar picture
 * - repositories' names
 * - repositories' descriptions
*/

// ADD TOKEN HERE
const token = "b84a5e403d7e7c9ee6ca6e8ae9863fe4cb158234";
//TODO crear archivo .env
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
            Authorization: `Bearer ${token}`
        }
    }).then(data => data.data.data.user)
    .catch(() => null)